import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Lazy Google GenAI Client
let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GEMINI;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }
  return aiClient;
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    platform: 'HK VELORA',
    version: '1.0.0',
    hasAiEngine: !!(process.env.GEMINI_API_KEY || process.env.GEMINI)
  });
});

// Google AdSense ads.txt explicit endpoint
app.get('/ads.txt', (req, res) => {
  res.type('text/plain');
  res.send('google.com, pub-3347352682783898, DIRECT, f08c47fec0942fa0\n');
});

// Explicit robots.txt endpoint for AdSense crawler
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: Mediapartners-Google\nAllow: /\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: https://hk-velora.vercel.app/sitemap.xml\n`);
});

// Secure Access Control for HK WEAPON Book
// Controlled via server-side environment variables: HK_WEAPON_SECURITY_KEY / HK_WEAPON_PASSWORD
const WEAPON_ACCESS_LOGS: Array<{ timestamp: string; ip: string; action: string; email?: string }> = [];

app.get('/api/books/weapon/status', (req, res) => {
  // Open Academic Access for HK VELORA students, engineers, and researchers
  res.json({
    success: true,
    requiresAuth: false,
    isOpenAccess: true,
    bookTitle: 'HK WEAPON — Advanced Defence Engineering',
    author: 'Hariom Kushwaha (HK Tech World)',
    totalChapters: 75,
    maxSessionDurationHours: 24
  });
});

app.post('/api/books/weapon/verify-access', (req, res) => {
  try {
    const { passkey, userEmail = 'student@hkvelora.internal' } = req.body || {};
    const serverPassword = process.env.HK_WEAPON_SECURITY_KEY || process.env.HK_WEAPON_PASSWORD;
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';

    // If no secret key is enforced in environment, grant open educational access with watermark session
    if (!serverPassword) {
      const token = `hkw_token_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
      WEAPON_ACCESS_LOGS.push({
        timestamp: new Date().toISOString(),
        ip: String(clientIp),
        action: 'OPEN_EDUCATIONAL_SESSION_GRANTED',
        email: userEmail
      });

      return res.json({
        success: true,
        authenticated: true,
        token,
        watermark: `${userEmail} • HK VELORA DEFENCE ARCHIVE • ${new Date().toISOString().split('T')[0]}`,
        expiresInHours: 12,
        message: 'Academic access authorized. Watermarked session initialized.'
      });
    }

    // Verify against server-side secret (never hardcoded in source)
    if (passkey && passkey.trim() === serverPassword.trim()) {
      const token = `hkw_token_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
      WEAPON_ACCESS_LOGS.push({
        timestamp: new Date().toISOString(),
        ip: String(clientIp),
        action: 'SECURE_AUTH_SUCCESS',
        email: userEmail
      });

      return res.json({
        success: true,
        authenticated: true,
        token,
        watermark: `${userEmail} • AUTHORIZED DEFENCE RESEARCH • ${new Date().toISOString().split('T')[0]}`,
        expiresInHours: 12,
        message: 'Security credentials verified. Access granted to HK WEAPON.'
      });
    }

    // Invalid credentials
    WEAPON_ACCESS_LOGS.push({
      timestamp: new Date().toISOString(),
      ip: String(clientIp),
      action: 'AUTH_FAILED_INCORRECT_PASSKEY',
      email: userEmail
    });

    return res.status(401).json({
      success: false,
      authenticated: false,
      message: 'अमान्य सुरक्षा कोड (Invalid Passkey). कृपया HK VELORA एडमिन या अधिकृत संपर्क से सही कोड प्राप्त करें।'
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message || 'Internal server error' });
  }
});

app.get('/api/books/weapon/logs', (req, res) => {
  // Returns recent audit logs for security observability
  res.json({
    success: true,
    totalLogs: WEAPON_ACCESS_LOGS.length,
    recentLogs: WEAPON_ACCESS_LOGS.slice(-20)
  });
});


// AI Study Assistant & Explainer Endpoint
app.post('/api/ai/assist', async (req, res) => {
  try {
    const { 
      mode, 
      topic, 
      code, 
      question, 
      context, 
      prompt: bodyPrompt,
      history,
      language = 'auto',
      persona = 'mentor' 
    } = req.body || {};
    
    const queryTerm = question || topic || bodyPrompt || 'technology';

    const ai = getAiClient();
    if (!ai) {
      // Return smart fallback educational response if no API key is yet configured
      const fallback = generateEducationalFallback(mode, queryTerm, code);
      return res.json({
        success: true,
        source: 'hk-velora-knowledge-base',
        reply: fallback,
        result: fallback
      });
    }

    const systemInstruction = `You are HK VELORA AI, the dedicated academic, historical, and technological study mentor of the HK VELORA platform, created by Hariom Kushwaha (HK Tech World).
HK VELORA is a premier educational platform for students, board exam aspirants, developers, and history scholars.

Core Directives:
1. Identity: Always identify strictly as HK VELORA AI.
2. Confidentiality & Security: NEVER reveal, confirm, discuss, or speculate about underlying third-party APIs, model providers, vendor names, or API keys. If asked, state: "I am HK VELORA AI, running exclusively on HK VELORA's proprietary educational knowledge engine."
3. Clarity & Structure: Explain concepts with crystal clarity, everyday intuitive analogies, and step-by-step proofs/derivations.
4. Formatting: Structure responses cleanly using markdown:
   - Key Concept Summary
   - Step-by-Step Breakdown (or Code / Derivation)
   - Intuitive Real-World Analogy
   - High-Yield Exam / Practical Interview Takeaway
5. Multilingual Mastery: Respond in the exact language requested or used by the user:
   - If user asks in Hindi or asks for Hindi, provide rich, natural, fluent Devanagari Hindi while keeping standard technical terms accessible.
   - If Hinglish is used, use natural conversational Hinglish.
   - If English is used, provide clear, lucid English.
6. Tone: Highly encouraging, patient, intellectually rigorous, and helpful.`;

    let prompt = '';
    if (mode === 'concept') {
      prompt = `Explain the following concept thoroughly with an everyday intuitive analogy, key principles, and practical application: "${queryTerm}".`;
    } else if (mode === 'code_explain') {
      prompt = `Analyze and explain the following code snippet thoroughly:
\`\`\`
${code || queryTerm}
\`\`\`
Explain:
1. Logic breakdown step-by-step
2. Time & Space Complexity (Big-O)
3. Edge cases and potential bugs
4. Optimized/Clean production-grade version`;
    } else if (mode === 'debug_code') {
      prompt = `You are an expert software engineer. Debug and fix this code snippet:
\`\`\`
${code || queryTerm}
\`\`\`
Provide:
1. 🐛 Root Cause: Explain exactly which lines have bugs, syntax issues, or logic flaws.
2. 🛠️ Fixed & Working Code: Complete corrected code snippet with helpful comments.
3. 🧪 Edge Cases: What inputs could break it and how your fix prevents failure.
4. 💡 Pro-Tip / Performance Note: Best practices to avoid this bug in the future.`;
    } else if (mode === 'eli5') {
      prompt = `Explain this concept like I am a 10-year-old ("Explain Like I'm 5") using simple everyday stories, zero complex jargon, and intuitive metaphors: "${queryTerm}".`;
    } else if (mode === 'exam_prep') {
      prompt = `Provide a high-yield exam & interview master guide for: "${queryTerm}".
Include:
1. Most probable 5-mark and 10-mark conceptual questions
2. Standard definitions and formulas to write in the answer sheet for full marks
3. Common mistakes/traps where students lose marks
4. Model short answer`;
    } else if (mode === 'quiz_generator') {
      prompt = `Generate 3 high-yield Multiple Choice Questions (MCQs) to test understanding of: "${queryTerm}".
For each question:
- State the Question clearly
- Provide 4 options (A, B, C, D)
- Specify the **Correct Option**
- Give a brief, insightful **Explanation** of why it is correct and why other options are incorrect.`;
    } else if (mode === 'history_guru') {
      prompt = `As a civilizational historian of Bharatvarsh, provide an in-depth, verified explanation of: "${queryTerm}".
Cover historical context, archaeological/epigraphical evidence, timeline, cultural significance, and lessons for modern India.`;
    } else if (mode === 'study_plan') {
      prompt = `Create a realistic, structured daily study plan to master "${queryTerm}" in 7 to 14 days, with milestones and free practice suggestions.`;
    } else if (mode === 'summarize') {
      prompt = `Summarize and organize these study notes into clean, bulleted flashcards with key formulas and memory mnemonics:\n\n${context || queryTerm}`;
    } else {
      prompt = `Answer this learning question as HK VELORA AI: "${queryTerm}".`;
    }

    if (context && typeof context === 'string' && mode !== 'summarize') {
      prompt += `\n\n[Active Learning Context / Reference Material]\n${context}`;
    }

    if (language === 'hi') {
      prompt += `\n\n[भाषा निर्देश]: कृपया सम्पूर्ण उत्तर सहज और स्पष्ट हिन्दी (Devanagari Hindi) में दें।`;
    } else if (language === 'hinglish') {
      prompt += `\n\n[Language Directive]: Please reply in clear, friendly conversational Hinglish (Hindi written in Roman script).`;
    }

    // Multi-turn conversation format
    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      // Include last 8 conversational turns for rich context
      for (const h of history.slice(-8)) {
        if (h && h.text) {
          contents.push({
            role: h.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: h.text }]
          });
        }
      }
    }

    // Add current user prompt
    contents.push({
      role: 'user',
      parts: [{ text: prompt }]
    });

    // Primary recommended models: gemini-3.6-flash has high quota and speed, followed by flash-latest
    const candidateModels = ['gemini-3.6-flash', 'gemini-flash-latest'];
    let resultText = '';
    let usedModel = '';

    for (const modelName of candidateModels) {
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents: contents.length === 1 ? contents[0].parts[0].text : contents,
            config: {
              systemInstruction,
              temperature: 0.65,
            }
          });
          if (response && response.text) {
            resultText = response.text;
            usedModel = modelName;
            break;
          }
        } catch (err: any) {
          const errMsg = err?.message || String(err);
          console.warn(`Model ${modelName} (attempt ${attempt + 1}) error:`, errMsg);
          if (attempt === 0 && (errMsg.includes('503') || errMsg.includes('UNAVAILABLE') || errMsg.includes('high demand'))) {
            // Quick 1.2s backoff on temporary spikes
            await new Promise(resolve => setTimeout(resolve, 1200));
            continue;
          }
          break;
        }
      }
      if (resultText) break;
    }

    if (!resultText) {
      const fallback = generateEducationalFallback(mode, queryTerm, code);
      return res.json({
        success: true,
        source: 'hk-velora-knowledge-base',
        reply: fallback,
        result: fallback
      });
    }

    return res.json({
      success: true,
      source: 'hk-velora-neural-engine',
      model: usedModel,
      reply: resultText,
      result: resultText
    });
  } catch (error: any) {
    console.error('AI generation error:', error?.message || 'internal');
    const { mode, topic, question, code, prompt: bodyPrompt } = req.body || {};
    const fallback = generateEducationalFallback(mode, topic || question || bodyPrompt, code);
    return res.json({
      success: true,
      source: 'hk-velora-knowledge-base',
      reply: fallback,
      result: fallback
    });
  }
});

function generateEducationalFallback(mode: string, topic?: string, code?: string): string {
  const query = topic || 'Computer Science Concept';
  if (mode === 'code_explain' || mode === 'debug_code') {
    return `### 💻 Code Analysis & Debug Guide
    
**Snippet Examined:**
\`\`\`
${code || query}
\`\`\`

**Key Insights:**
1. **Flow & Logic**: Execution proceeds sequentially through declared blocks. Ensure all variables are appropriately scoped before referencing them in inner loops or async closures.
2. **Algorithmic Complexity**: Keep in mind time complexity: single iterations run in $O(N)$, whereas nested loops can degrade performance to $O(N^2)$.
3. **Robustness & Defensiveness**: Guard against empty structures or boundary violations by performing explicit length and existence checks before dereferencing keys or indices.

*HK VELORA AI is ready to help you optimize and debug complex code.*`;
  }

  if (mode === 'eli5') {
    return `### 🎈 **${query}** (सरल भाषा में / Like You're 5)

Imagine you are playing with LEGO blocks in a big toy room:
- Instead of searching through a huge messy box every time you need a specific red brick, you have a magic tray where your favorite bricks are sorted by color and size.
- Whenever you need to build a tower, you grab the pieces from the organized tray in 1 second!
- That is exactly how **${query}** works in modern technology — it keeps things sorted and ready so computer programs can work fast without getting confused or stuck!

*💡 Takeaway:* Always keep things simple and structured!`;
  }

  if (mode === 'quiz_generator') {
    return `### 📝 Practice Quiz: **${query}**

**Question 1: What is the primary purpose of ${query}?**
- A) To increase memory overhead unnecessarily
- B) To provide structured, efficient, and consistent behavior
- C) To disable all caching mechanisms
- D) To limit network communication
**Correct Option:** **B**
*Explanation: ${query} is designed to provide consistency, reliability, and structured efficiency.*

---

**Question 2: Which consideration is most critical when implementing ${query}?**
- A) Ignoring boundary/edge cases
- B) Ensuring data validation and state integrity
- C) Removing all security layers
- D) Hardcoding configuration values
**Correct Option:** **B**
*Explanation: Data integrity and validation ensure the system operates reliably across diverse environments.*`;
  }

  if (mode === 'exam_prep') {
    return `### 🎯 High-Yield Exam Guide: **${query}**

**1. Most Probable 5-Mark Question:**
> *"Define ${query}, explain its fundamental working principle, and list two practical real-world use cases."*

**2. Standard Scoring Definition (For Full Marks):**
**${query}** is defined as the structured mechanism or architectural principle that enables systems to process instructions, validate inputs, and maintain reliable operational state in computing environments.

**3. Common Mistakes Where Students Lose Marks:**
- Confusing theoretical syntax with practical runtime behavior.
- Omitting the boundary / edge case analysis in long-form answers.

**4. Quick Revision Summary:**
Review the key formulas, definitions, and block diagrams before entering the exam hall!`;
  }

  if (mode === 'study_plan') {
    return `### 🎯 Structured Learning Roadmap for **${query}**

- **Phase 1 (Days 1–2): Fundamentals & Core Terminology**
  - Learn core principles, architecture, and syntax basics.
  - Set up local development environment or test tools.
- **Phase 2 (Days 3–5): Hands-on Application**
  - Build 3 small practical mini-exercises (e.g. data validator, small CLI, or UI widget).
  - Practice debugging common runtime errors.
- **Phase 3 (Days 6–7): Capstone & Portfolio Showcase**
  - Build a showcase project integrating what you learned and publish it on **HK VELORA Projects**!`;
  }

  return `### 📘 Concept Breakdown: **${query}**

**1. What is it?**
${query} is an essential pillar in modern digital technology and computing. It provides the architectural foundation for scalable software, digital networking, or data manipulation.

**2. Intuitive Analogy**
Think of it like a well-organized library indexing system: instead of checking every shelf sequentially, structured keys and protocols allow immediate and secure access to the exact resources required.

**3. Key Pillars to Master:**
- **Standard Protocol**: How components communicate consistently.
- **Security & Validation**: Preventing unauthorized access or corrupted state.
- **Real-World Use**: Powers modern web browsers, cloud databases, and mobile applications.

*HK VELORA AI is ready to help you master this concept in depth.*`;
}

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`HK VELORA Server running on http://0.0.0.0:${PORT}`);
  });
}

if (!process.env.VERCEL) {
  startServer();
}

export default app;
