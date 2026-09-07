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
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    platform: 'HK HUB',
    version: '1.0.0',
    hasAiKey: !!process.env.GEMINI_API_KEY
  });
});

// AI Study Assistant & Explainer Endpoint
app.post('/api/ai/assist', async (req, res) => {
  try {
    const { mode, topic, code, question, context, prompt: bodyPrompt } = req.body || {};
    const queryTerm = topic || question || bodyPrompt || 'technology';

    const ai = getAiClient();
    if (!ai) {
      // Return smart fallback educational response if no API key is yet configured
      const fallback = generateEducationalFallback(mode, queryTerm, code);
      return res.json({
        success: true,
        source: 'fallback_engine',
        reply: fallback,
        result: fallback
      });
    }

    let systemInstruction = `You are the HK HUB AI Study & Technology Assistant.
HK HUB is an educational technology platform for students, developers, and tech learners.
Your mission:
1. Explain technical, scientific, and coding concepts with crystal clarity, analogies, and practical examples.
2. Structure responses cleanly with markdown: Key Concept, Step-by-Step Breakdown, Code/Real-World Example, Best Practices, and Quick Review Quiz.
3. Strict Academic Integrity Rule: Never do homework cheating or write complete assignments without explanation. Guide the student to learn and understand the underlying logic.
4. Keep the tone encouraging, technical yet approachable, and concise.`;

    let prompt = '';
    if (mode === 'concept') {
      prompt = `Explain the following technology/computer science concept thoroughly for a student: "${queryTerm}". Provide intuitive analogies, key points, and a practical scenario where it is used.`;
    } else if (mode === 'code_explain') {
      prompt = `Analyze and explain the following code snippet for a beginner or intermediate student:
\`\`\`
${code || queryTerm}
\`\`\`
Explain:
1. What this code does step-by-step
2. Time/Space complexity or performance considerations (if applicable)
3. Any potential bugs, edge cases, or improvements
4. A clean commented version or suggested refinement`;
    } else if (mode === 'study_plan') {
      prompt = `Create a realistic, structured 7-day or 14-day study plan to master "${queryTerm}". Include specific daily milestones, free resource recommendations, and practical micro-projects.`;
    } else if (mode === 'summarize') {
      prompt = `Summarize and organize these technical study notes into clear, bulleted study cards with definitions, formulas/syntax, and memory tricks:\n\n${context || queryTerm}`;
    } else {
      prompt = `Answer this technology or computer science learning question: "${queryTerm}".`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.6,
      }
    });

    const resultText = response.text || 'No response generated.';
    return res.json({
      success: true,
      source: 'gemini-2.5-flash',
      reply: resultText,
      result: resultText
    });
  } catch (error: any) {
    console.error('AI generation error:', error);
    // Graceful fallback on network/quota issues
    const { mode, topic, question, code, prompt: bodyPrompt } = req.body || {};
    const fallback = generateEducationalFallback(mode, topic || question || bodyPrompt, code);
    return res.json({
      success: true,
      source: 'fallback_engine',
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

*Tip: Connect your Gemini API Key in Settings to unlock dynamic real-time AI code stepping and synthesis.*`;
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
  - Build a showcase project integrating what you learned and publish it on **HK HUB Projects**!`;
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

*Need deeper personalized insights? Enable Gemini API Key in settings to engage in live contextual Q&A.*`;
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
    console.log(`HK HUB Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
