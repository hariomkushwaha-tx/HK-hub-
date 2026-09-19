import React, { useState, useMemo, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import { useApp } from '../../context/AppContext';
import { AI_TOOLS_DIRECTORY, AI_CONCEPTS, PROMPT_TEMPLATES } from '../../data/aiHubData';
import { AiToolInfo } from '../../types';
import { copyToClipboard } from '../../utils/clipboard';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  BookOpen, 
  Lightbulb, 
  ShieldAlert, 
  Search, 
  Copy, 
  Check, 
  ArrowRight,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  GraduationCap,
  Volume2,
  VolumeX,
  RotateCcw,
  HelpCircle,
  Wand2,
  CheckCircle2
} from 'lucide-react';

export const AiHub: React.FC = () => {
  const { theme } = useApp();
  const [activeTab, setActiveTab] = useState<'assistant' | 'directory' | 'concepts' | 'prompting'>('assistant');
  
  // AI Assistant Chat State
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiMode, setAiMode] = useState<'concept' | 'eli5' | 'code_explain' | 'debug_code' | 'exam_prep' | 'quiz_generator' | 'study_plan'>('concept');
  const [aiLanguage, setAiLanguage] = useState<'auto' | 'hi' | 'hinglish' | 'en'>('auto');
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const [copiedMsgIndex, setCopiedMsgIndex] = useState<number | null>(null);

  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'assistant'; text: string; time: string }[]>([
    {
      role: 'assistant',
      text: 'Namaste! I am **HK VELORA AI**, your dedicated academic, coding, and technological mentor. \n\nSelect any mode above (💡 **Concepts**, 👶 **ELI5**, 💻 **Code & Debug**, 🎯 **Exam Prep**, or 📝 **Smart Quiz**) and ask away in English, हिन्दी, or Hinglish!',
      time: 'Just now'
    }
  ]);

  // AI Directory Filter
  const [dirCategory, setDirCategory] = useState<string>('all');
  const [dirPricing, setDirPricing] = useState<string>('all');
  const [dirSearch, setDirSearch] = useState<string>('');

  // Prompt Templates Copy State
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, loading]);

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const getDynamicStarters = () => {
    switch (aiMode) {
      case 'eli5':
        return [
          'Explain how the Internet works like I am 5',
          'What is Cloud Computing in simple story form?',
          'Next-Token Prediction ko saral Hindi me samjhao',
          'How does Artificial Intelligence actually learn?'
        ];
      case 'code_explain':
        return [
          'Explain Dijkstra algorithm logic and Big-O',
          'How does JavaScript Event Loop & Microtask queue work?',
          'Explain React useEffect dependency array best practices',
          'Show clean Python code for Binary Search with edge cases'
        ];
      case 'debug_code':
        return [
          'Fix Python: TypeError: list indices must be integers or slices, not str',
          'Debug: Cannot read properties of undefined (reading map) in React',
          'Fix memory leak: Can\'t perform state update on unmounted component',
          'Why is my SQL query doing a slow Full Table Scan?'
        ];
      case 'exam_prep':
        return [
          'Class 12 Physics: Derivation of Lens Maker Formula',
          'Top 5 repeated questions on OSI Model in Computer Networks',
          'Class 10 Math: Quadratic Equations high-yield exam points',
          'Most frequent OOPs concepts asked in tech interviews'
        ];
      case 'quiz_generator':
        return [
          'Generate 3 MCQs on Data Structures (Trees & Graphs)',
          'Generate 3 MCQs on Indian History (Harappan Civilization)',
          'Generate 3 MCQs on Operating Systems & CPU Scheduling',
          'Generate 3 MCQs on Python OOPs Concepts'
        ];
      case 'study_plan':
        return [
          '14-Day Roadmap to master Full-Stack Web Development',
          '7-Day Crash Plan for Class 12 Board Exam revision',
          '30-Day Roadmap to crack Data Structures & Algorithms',
          '10-Day Plan to learn Python for Machine Learning'
        ];
      case 'concept':
      default:
        return [
          'Explain Recursion simply with an everyday analogy',
          'Difference between HTTP/2 vs HTTP/3',
          'How does Wi-Fi 7 improve over Wi-Fi 6?',
          'Explain ACID properties in relational databases'
        ];
    }
  };

  const filteredAiTools = useMemo(() => {
    return AI_TOOLS_DIRECTORY.filter(t => {
      const matchCat = dirCategory === 'all' || 
        t.category.toLowerCase().includes(dirCategory.toLowerCase()) ||
        (dirCategory === 'Writing' && t.category.toLowerCase().includes('writing')) ||
        (dirCategory === 'Coding' && (t.category.toLowerCase().includes('coding') || t.bestFor.toLowerCase().includes('coding') || t.keyFeatures?.some(f => f.toLowerCase().includes('code')))) ||
        (dirCategory === 'Productivity' && (t.category.toLowerCase().includes('productivity') || t.bestFor.toLowerCase().includes('productivity') || t.category.toLowerCase().includes('multi')));
      const matchPrice = dirPricing === 'all' || t.pricing === dirPricing;
      const matchSearch = !dirSearch || 
        t.name.toLowerCase().includes(dirSearch.toLowerCase()) || 
        t.description.toLowerCase().includes(dirSearch.toLowerCase()) ||
        t.bestFor.toLowerCase().includes(dirSearch.toLowerCase()) ||
        t.category.toLowerCase().includes(dirSearch.toLowerCase());
      return matchCat && matchPrice && matchSearch;
    });
  }, [dirCategory, dirPricing, dirSearch]);

  const handleSendMessage = async (promptToSend?: string) => {
    const textToSend = promptToSend || query;
    if (!textToSend.trim() || loading) return;

    const userMessage = {
      role: 'user' as const,
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMessage]);
    if (!promptToSend) setQuery('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          mode: aiMode,
          language: aiLanguage,
          prompt: textToSend,
          question: textToSend,
          history: chatHistory.slice(-8).map(m => ({ role: m.role, text: m.text }))
        })
      });

      const data = await res.json();
      const replyMessage = data.reply || data.result;
      if (replyMessage) {
        setChatHistory(prev => [
          ...prev,
          {
            role: 'assistant',
            text: replyMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } else {
        throw new Error(data.error || 'No response from assistant');
      }
    } catch (err: any) {
      setChatHistory(prev => [
        ...prev,
        {
          role: 'assistant',
          text: `⚠️ HK VELORA AI: Unable to complete request. Please check your connection and try again.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeakMessage = (text: string, idx: number) => {
    if (!('speechSynthesis' in window)) return;
    if (speakingIndex === idx) {
      window.speechSynthesis.cancel();
      setSpeakingIndex(null);
      return;
    }
    window.speechSynthesis.cancel();
    // Clean text for speech
    const cleanText = text.replace(/[*#`_~[\]]/g, '').slice(0, 600);
    const utterance = new SpeechSynthesisUtterance(cleanText);
    if (aiLanguage === 'hi') {
      utterance.lang = 'hi-IN';
    } else {
      utterance.lang = 'en-US';
    }
    utterance.rate = 1.0;
    utterance.onend = () => setSpeakingIndex(null);
    utterance.onerror = () => setSpeakingIndex(null);
    setSpeakingIndex(idx);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopyMessage = async (text: string, idx: number) => {
    await copyToClipboard(text);
    setCopiedMsgIndex(idx);
    setTimeout(() => setCopiedMsgIndex(null), 2000);
  };

  const handleClearChat = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeakingIndex(null);
    }
    setChatHistory([
      {
        role: 'assistant',
        text: 'Conversation reset! 🚀 Choose any study mode and ask your next question in English, हिन्दी, or Hinglish.',
        time: 'Just now'
      }
    ]);
  };

  const copyPrompt = async (promptText: string, idx: number) => {
    await copyToClipboard(promptText);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div id="ai-hub-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Generative AI & LLM Knowledge</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Artificial Intelligence Hub
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Demystifying AI for students and developers. Understand LLMs, explore curated AI tools, learn prompt engineering, and chat with our real-time study assistant.
        </p>
      </div>

      {/* Hub Navigation Tabs */}
      <div className="flex items-center justify-center">
        <div className="flex items-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto max-w-full shadow-xs scrollbar-none">
          {[
            { id: 'assistant', label: 'AI Study Assistant', icon: <Bot className="w-4 h-4" /> },
            { id: 'directory', label: 'AI Tools Directory', icon: <Cpu className="w-4 h-4" /> },
            { id: 'concepts', label: 'AI Explained for Students', icon: <BookOpen className="w-4 h-4" /> },
            { id: 'prompting', label: 'Prompt Engineering', icon: <Lightbulb className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              id={`ai-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 1. AI Study Assistant */}
      {activeTab === 'assistant' && (
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Smart Modes Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                <Wand2 className="w-3.5 h-3.5 text-indigo-500" />
                <span>Mode:</span>
              </span>
              {[
                { id: 'concept', label: '💡 Concepts', desc: 'Concept Explainer' },
                { id: 'eli5', label: '👶 ELI5', desc: 'Simple / Story' },
                { id: 'code_explain', label: '💻 Code', desc: 'Step-by-Step Code' },
                { id: 'debug_code', label: '🐛 Debug', desc: 'Fix Bugs & Errors' },
                { id: 'exam_prep', label: '🎯 Exam Prep', desc: 'Board & Tech Q&A' },
                { id: 'quiz_generator', label: '📝 Smart Quiz', desc: 'MCQs & Test' },
                { id: 'study_plan', label: '📅 Plan', desc: 'Roadmap' },
              ].map(m => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setAiMode(m.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                    aiMode === m.id
                      ? 'bg-indigo-600 text-white shadow-xs scale-[1.02]'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                  title={m.desc}
                >
                  <span>{m.label}</span>
                </button>
              ))}
            </div>

            {/* Language & Actions */}
            <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                {[
                  { id: 'auto', label: '🌐 Auto' },
                  { id: 'hi', label: '🇮🇳 हिन्दी' },
                  { id: 'hinglish', label: '🔤 Hinglish' },
                  { id: 'en', label: '🇬🇧 EN' },
                ].map(l => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setAiLanguage(l.id as any)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                      aiLanguage === l.id
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleClearChat}
                title="Reset conversation"
                className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dynamic Quick Starter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-none">
            <span className="text-slate-500 dark:text-slate-400 shrink-0 font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Recommended for {aiMode.replace('_', ' ')}:</span>
            </span>
            {getDynamicStarters().map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(chip)}
                disabled={loading}
                className="px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 text-slate-700 dark:text-slate-300 text-xs whitespace-nowrap transition-colors shrink-0 shadow-xs disabled:opacity-50"
              >
                ⚡ {chip}
              </button>
            ))}
          </div>

          {/* Chat Container */}
          <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-[560px] overflow-hidden">
            {/* Header sub-bar */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  HK VELORA Neural Engine
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-500/20">
                  Mode: {aiMode.toUpperCase().replace('_', ' ')}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                Memory: Active (Last 8 turns)
              </span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shrink-0 mt-1 shadow-xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[88%] sm:max-w-[82%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-indigo-600 text-white rounded-tr-xs shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-xs shadow-xs'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <p className="whitespace-pre-line">{msg.text}</p>
                    ) : (
                      <div className="prose dark:prose-invert prose-xs sm:prose-sm max-w-none text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 space-y-2.5 [&_h1]:text-base [&_h2]:text-sm [&_h3]:text-xs [&_h3]:font-bold [&_h3]:text-indigo-600 dark:[&_h3]:text-indigo-400 [&_pre]:bg-slate-900 [&_pre]:text-slate-100 [&_pre]:p-3.5 [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-slate-800 [&_pre]:overflow-x-auto [&_code]:text-indigo-600 dark:[&_code]:text-indigo-300 [&_code]:font-mono [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-2">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    )}
                    
                    {/* Timestamp & Actions */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/60 text-[10px]">
                      <span className={msg.role === 'user' ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}>
                        {msg.time}
                      </span>
                      {msg.role === 'assistant' && (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleSpeakMessage(msg.text, index)}
                            className="p-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors flex items-center gap-1"
                            title={speakingIndex === index ? "Stop voice" : "Listen aloud"}
                          >
                            {speakingIndex === index ? (
                              <VolumeX className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                            ) : (
                              <Volume2 className="w-3.5 h-3.5" />
                            )}
                            <span className="hidden sm:inline">{speakingIndex === index ? 'Mute' : 'Listen'}</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCopyMessage(msg.text, index)}
                            className="p-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors flex items-center gap-1"
                            title="Copy answer"
                          >
                            {copiedMsgIndex === index ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                                <span className="text-emerald-500 font-medium">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex gap-3 items-center text-slate-500 dark:text-slate-400 text-xs">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shrink-0">
                    <Bot className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    <span>HK VELORA AI is analyzing context and formulating explanation...</span>
                  </div>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
              <form
                onSubmit={e => { e.preventDefault(); handleSendMessage(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder={
                    aiMode === 'debug_code'
                      ? 'Paste code with errors or describe the bug...'
                      : aiMode === 'exam_prep'
                      ? 'Enter any topic for board/exam questions...'
                      : aiMode === 'quiz_generator'
                      ? 'Enter topic to generate practice MCQs...'
                      : aiMode === 'eli5'
                      ? 'Ask any difficult concept to explain simply...'
                      : 'Ask any question in English, Hindi, or Hinglish...'
                  }
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs sm:text-sm outline-none focus:border-indigo-500 shadow-xs transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading || !query.trim()}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm shrink-0 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Ask AI</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* 2. AI Tools Directory */}
      {activeTab === 'directory' && (
        <div className="space-y-6">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {['all', 'Writing', 'Coding', 'Research', 'Image', 'Audio', 'Productivity'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setDirCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-colors ${
                    dirCategory === cat
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-xs'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <select
                value={dirPricing}
                onChange={e => setDirPricing(e.target.value)}
                className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200 outline-none shadow-xs"
              >
                <option value="all">All Pricing</option>
                <option value="Free">100% Free</option>
                <option value="Freemium">Freemium</option>
                <option value="Paid">Paid</option>
              </select>

              <div className="relative flex-1 sm:w-56">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={dirSearch}
                  onChange={e => setDirSearch(e.target.value)}
                  placeholder="Filter AI tools..."
                  className="w-full pl-8 pr-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 outline-none focus:border-indigo-500 shadow-xs transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Directory Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAiTools.map((tool, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border space-y-3 flex flex-col justify-between transition-all shadow-xs ${
                  tool.featured
                    ? 'bg-gradient-to-b from-indigo-50/60 dark:from-indigo-950/40 via-white dark:via-slate-900/90 to-white dark:to-slate-900/95 border-indigo-300 dark:border-indigo-500/60 ring-1 ring-indigo-500/20 dark:ring-indigo-500/30'
                    : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/40'
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
                        {tool.category}
                      </span>
                      {tool.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                      tool.pricing === 'Free'
                        ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                        : tool.pricing === 'Freemium'
                        ? 'bg-blue-500/15 text-blue-700 dark:text-blue-300'
                        : 'bg-amber-500/15 text-amber-700 dark:text-amber-300'
                    }`}>
                      {tool.pricing}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base flex items-center gap-2">
                    <span>{tool.name}</span>
                    {tool.featured && (
                      <span className="inline-flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Live & Verified" />
                    )}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300/90 leading-relaxed">{tool.description}</p>

                  {tool.keyFeatures && tool.keyFeatures.length > 0 && (
                    <div className="pt-1 flex flex-wrap gap-1">
                      {tool.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                        <span key={fIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50">
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 text-xs flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    Best for: <strong className="text-slate-700 dark:text-slate-200">{tool.bestFor}</strong>
                  </span>
                  <a
                    href={tool.link || tool.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-600/20 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 text-xs font-semibold transition-all group shrink-0"
                    title={`Open ${tool.name}`}
                  >
                    <span>Launch</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. AI Explained for Students */}
      {activeTab === 'concepts' && (
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Ethical AI Warning Card */}
          <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 flex flex-col sm:flex-row items-start gap-4 shadow-xs">
            <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-base text-amber-900 dark:text-amber-200">
                Ethical & Responsible AI Use for Students
              </h4>
              <p className="text-xs text-amber-800 dark:text-amber-300/90 leading-relaxed">
                Never submit raw AI-generated answers as your original coursework. AI can hallucinate (generate plausible falsehoods) and lacks real analytical thought. Use AI to brainstorm, diagnose syntax bugs, and grasp difficult theories—never to bypass your own learning journey.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {AI_CONCEPTS.map((concept, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">{concept.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-10 whitespace-pre-line">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Prompt Engineering Guide */}
      {activeTab === 'prompting' && (
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Core Rules of Effective Prompting</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 block">1. Define the Persona & Role</span>
                <p>Tell the model who it is: "Act as a senior computer science professor explaining to a first-year student."</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 block">2. Provide Rich Context</span>
                <p>Share the background: the programming language, your current knowledge level, and specific constraints.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 block">3. Specify Output Format</span>
                <p>Demand bullet points, code blocks, or step-by-step numbered logic rather than generic paragraphs.</p>
              </div>
            </div>
          </div>

          {/* Prompt Templates */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-300">Ready-to-Use Student & Developer Prompt Templates</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROMPT_TEMPLATES.map((tpl, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
                      {tpl.category}
                    </span>
                    <h5 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{tpl.title}</h5>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 font-mono text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {tpl.template}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => copyPrompt(tpl.template, i)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium flex items-center gap-1.5 transition-colors"
                    >
                      {copiedIndex === i ? <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedIndex === i ? 'Copied Prompt!' : 'Copy Template'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('assistant');
                        setQuery(tpl.template);
                      }}
                      className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-semibold"
                    >
                      Test in Assistant →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
