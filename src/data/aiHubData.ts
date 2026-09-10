import { AiTool } from '../types';

export const AI_TOOLS_DIRECTORY: AiTool[] = [
  {
    name: 'HK Nexus AI',
    category: 'Productivity & Multimodal',
    pricing: 'Free',
    description: 'Free Multimodal AI Assistant by Hariom Kushwaha (HK Tech World). Features AI Chat, Image Generator, Vision OCR, Math Solver, Code Debugger, and Hindi translation.',
    keyFeatures: [
      'Vision OCR & Multimodal Analysis',
      'AI Image & Video Generation',
      'Math Solver & Code Creator',
      'Instant Hindi & Multilingual translation'
    ],
    bestFor: 'Student study assistance, coding & debugging, math solving, vision OCR, daily AI tasks',
    rating: 5.0,
    website: 'https://hk-nexus-ai.vercel.app',
    link: 'https://hk-nexus-ai.vercel.app',
    featured: true,
    badge: '★ HK Tech World Special'
  },
  {
    name: 'Gemini',
    category: 'Text & Writing',
    pricing: 'Freemium',
    description: 'Google’s multimodal flagship model with a massive 1M-2M context window, deep Google Workspace integration, and fast reasoning.',
    keyFeatures: ['Huge context window (2M tokens)', 'Native multimodality (audio, video, code, images)', 'Integrated Google Search grounding'],
    bestFor: 'Large document analysis, video transcript processing, coding, general reasoning',
    rating: 4.8,
    website: 'https://gemini.google.com',
    link: 'https://gemini.google.com'
  },
  {
    name: 'Claude',
    category: 'Coding',
    pricing: 'Freemium',
    description: 'Anthropic’s conversational and coding model renowned for nuanced writing, nuanced code architecture, and high steering adherence.',
    keyFeatures: ['Claude Artifacts for live code/UI render', 'Exceptional coding accuracy & refactoring', 'Strict ethical alignment'],
    bestFor: 'Complex software development, deep analytical writing, contract/paper review',
    rating: 4.9,
    website: 'https://claude.ai',
    link: 'https://claude.ai'
  },
  {
    name: 'ChatGPT',
    category: 'Text & Writing',
    pricing: 'Freemium',
    description: 'OpenAI’s widely adopted conversational AI platform featuring GPT-4o, Custom GPTs, Advanced Voice Mode, and web browsing.',
    keyFeatures: ['Advanced Voice Mode', 'Custom GPT store', 'DALL-E image generation & code interpreter'],
    bestFor: 'Everyday brainstorming, multilingual translation, general problem solving',
    rating: 4.8,
    website: 'https://chatgpt.com',
    link: 'https://chatgpt.com'
  },
  {
    name: 'Perplexity AI',
    category: 'Research',
    pricing: 'Freemium',
    description: 'AI-native answer engine that pairs LLMs with real-time web search and verified academic inline citations.',
    keyFeatures: ['Direct academic inline citations', 'Focus modes (Academic, YouTube, Reddit, Writing)', 'Collections for organized research notes'],
    bestFor: 'Literature reviews, fact-checking, fast student research, current events',
    rating: 4.9,
    website: 'https://perplexity.ai',
    link: 'https://perplexity.ai'
  },
  {
    name: 'Cursor',
    category: 'Coding',
    pricing: 'Freemium',
    description: 'AI-first code editor built as a fork of VS Code with multi-file code editing, codebase indexing, and terminal debugging.',
    keyFeatures: ['Full repository context awareness', 'Cmd+K inline code editing', 'Terminal error auto-debugging'],
    bestFor: 'Full-stack software engineers, students building large web/mobile projects',
    rating: 4.9,
    website: 'https://cursor.com',
    link: 'https://cursor.com'
  },
  {
    name: 'DeepSeek',
    category: 'Coding',
    pricing: 'Free',
    description: 'Open-weights reasoning model with high performance in mathematics, competitive programming, and cost-efficient inference.',
    keyFeatures: ['Open-weights accessible via Ollama/HuggingFace', 'Deep mathematical chain-of-thought', 'Low inference latency'],
    bestFor: 'Math problem solving, competitive coding, self-hosted local AI',
    rating: 4.7,
    website: 'https://deepseek.com',
    link: 'https://deepseek.com'
  }
];

export const AI_CONCEPTS = [
  {
    title: 'How Large Language Models (LLMs) Work',
    subtitle: 'From Tokens to Predictive Next-Word Generation',
    description: 'LLMs are statistical neural networks trained on vast amounts of text. They do not "think" like humans; instead, they convert sentences into numerical tokens and compute high-dimensional probabilities to predict the most statistically sound next token given the prompt context.\n\n• Tokenization: Words and subwords are broken into numbers (~0.75 words per token).\n• Transformers: The self-attention mechanism weighs the relevance of distant words in a sentence.\n• Context Window: The temporary working memory of the model during an active conversation.'
  },
  {
    title: 'Generative AI vs Traditional AI',
    subtitle: 'Pattern Recognition vs Content Creation',
    description: 'Traditional AI (Discriminative) classifies existing data—such as detecting spam emails or recognizing facial features in a photograph.\n\nGenerative AI creates new content: generating code implementations, writing essays, synthesizing voices, and rendering novel artwork based on natural language instructions.'
  },
  {
    title: 'Responsible AI for Students (No-Cheating Ethics)',
    subtitle: 'Using AI as a Personal Tutor, Not a Ghostwriter',
    description: 'The goal of education is cognitive skill acquisition and mental problem-solving capability. Copy-pasting AI output harms your future engineering competence.\n\n• Socratic Method: Ask: "Don’t give me the direct answer. Ask me a guiding question so I can figure it out myself."\n• Analogies: "Explain pointers in C like I am a 12-year-old using a real-world metaphor."\n• Code Reviewer: "Here is my code for this problem. What is the time complexity and where might it fail on edge cases?"'
  }
];

export const PROMPT_TEMPLATES = [
  {
    category: 'Coding & Debugging',
    title: 'Error Diagnostic & Root Cause',
    template: 'Act as a senior software engineer. Review this [Language] error trace: [PASTE ERROR]. Explain the root cause in 2 sentences, followed by the corrected code block and how to prevent it in the future.'
  },
  {
    category: 'Study & Conceptual',
    title: 'Socratic Concept Explainer',
    template: 'Act as a university professor. Explain [CONCEPT e.g., Asynchronous JavaScript] to an undergraduate student using a simple real-world analogy, a breakdown of key terms, and 2 quiz questions at the end.'
  },
  {
    category: 'Code Refactoring',
    title: 'Clean Code & Optimization',
    template: 'Analyze the following code for time and space complexity: [PASTE CODE]. Suggest improvements for readability, maintainability, and execution efficiency according to modern best practices.'
  },
  {
    category: 'Writing & Research',
    title: 'Academic Paper Synopsis',
    template: 'Summarize the core hypothesis, methodology, experimental findings, and real-world limitations of this text into clear bullet points: [PASTE TEXT].'
  }
];
