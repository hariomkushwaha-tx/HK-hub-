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
        console.warn(`Model ${modelName} error:`, err?.message || err);
      }
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
  if (mode === 'code_explain') {
    return `### 💡 Code Explanation & Analysis

**Overview**:
The provided code snippet demonstrates foundational programmatic logic.

**Key Observations**:
1. **Flow & Execution**: The instructions execute sequentially, allocating memory for input arguments and evaluating conditionals or loops.
2. **Efficiency**: Consider standard algorithmic complexity (O(N) time for single loops, O(1) for hash lookups).
3. **Edge Case Safety**: Always validate \`null\`, \`undefined\`, or empty arrays before accessing indexes or properties.

*Tip: Powered by HK VELORA AI Engine — ask any doubts about algorithms, formulas, or code anytime.*`;
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
