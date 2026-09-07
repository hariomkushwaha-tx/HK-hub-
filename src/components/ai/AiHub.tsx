import React, { useState, useMemo } from 'react';
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
  GraduationCap
} from 'lucide-react';

export const AiHub: React.FC = () => {
  const { theme } = useApp();
  const [activeTab, setActiveTab] = useState<'assistant' | 'directory' | 'concepts' | 'prompting'>('assistant');
  
  // AI Assistant Chat State
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'assistant'; text: string; time: string }[]>([
    {
      role: 'assistant',
      text: 'Hello! I am HK HUB\'s AI Study & Technology Assistant powered by Google Gemini. Ask me to explain complex programming concepts, analyze tech architecture, debug code snippets, or provide study frameworks!',
      time: 'Just now'
    }
  ]);

  // AI Directory Filter
  const [dirCategory, setDirCategory] = useState<string>('all');
  const [dirPricing, setDirPricing] = useState<string>('all');
  const [dirSearch, setDirSearch] = useState<string>('');

  // Prompt Templates Copy State
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const filteredAiTools = useMemo(() => {
    return AI_TOOLS_DIRECTORY.filter(t => {
      const matchCat = dirCategory === 'all' || t.category === dirCategory;
      const matchPrice = dirPricing === 'all' || t.pricing === dirPricing;
      const matchSearch = !dirSearch || 
        t.name.toLowerCase().includes(dirSearch.toLowerCase()) || 
        t.description.toLowerCase().includes(dirSearch.toLowerCase()) ||
        t.bestFor.toLowerCase().includes(dirSearch.toLowerCase());
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
        body: JSON.stringify({ prompt: textToSend })
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
          text: `⚠️ ${err.message || 'Please check your connection and try again.'}`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Generative AI & LLM Knowledge</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
          Artificial Intelligence Hub
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Demystifying AI for students and developers. Understand LLMs, explore curated AI tools, learn prompt engineering, and chat with our real-time study assistant.
        </p>
      </div>

      {/* Hub Navigation Tabs */}
      <div className="flex items-center justify-center">
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 overflow-x-auto max-w-full">
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
                  : 'text-slate-400 hover:text-slate-200'
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
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Quick Starter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-500 shrink-0 font-medium">Quick Starters:</span>
            {[
              'Explain Recursion simply with an analogy',
              'Difference between HTTP vs HTTPS',
              'How does Wi-Fi 7 improve over Wi-Fi 6?',
              'Best study roadmap to learn Python',
            ].map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip)}
                className="px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 text-slate-300 whitespace-nowrap transition-colors shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Chat Container */}
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-col h-[520px] overflow-hidden">
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
                    className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-indigo-600 text-white rounded-tr-xs'
                        : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-xs whitespace-pre-line'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className={`block text-[10px] mt-1.5 ${msg.role === 'user' ? 'text-indigo-200' : 'text-slate-500'}`}>
                      {msg.time}
                    </span>
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex gap-3 items-center text-slate-400 text-xs">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shrink-0">
                    <Bot className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    <span>Gemini is generating technological explanation...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800">
              <form
                onSubmit={e => { e.preventDefault(); handleSendMessage(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Ask any technology question, code query, or concept explanation..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  disabled={loading || !query.trim()}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-indigo-600/20"
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
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
              {['all', 'Writing', 'Coding', 'Research', 'Image', 'Audio', 'Productivity'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setDirCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-colors ${
                    dirCategory === cat
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
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
                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 outline-none"
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
                  className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Directory Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAiTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-indigo-500/40 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">
                      {tool.category}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      tool.pricing === 'Free'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : tool.pricing === 'Freemium'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-amber-500/20 text-amber-300'
                    }`}>
                      {tool.pricing}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-100 text-base">{tool.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{tool.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-xs flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Best: <strong className="text-slate-300">{tool.bestFor}</strong>
                  </span>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-400 hover:text-indigo-300"
                    title={`Visit ${tool.name}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
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
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-300 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-base text-amber-200">
                Ethical & Responsible AI Use for Students
              </h4>
              <p className="text-xs text-amber-300/90 leading-relaxed">
                Never submit raw AI-generated answers as your original coursework. AI can hallucinate (generate plausible falsehoods) and lacks real analytical thought. Use AI to brainstorm, diagnose syntax bugs, and grasp difficult theories—never to bypass your own learning journey.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {AI_CONCEPTS.map((concept, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-100 text-base">{concept.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-10 whitespace-pre-line">
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
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-indigo-400" />
              <span>Core Rules of Effective Prompting</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-indigo-400 block">1. Define the Persona & Role</span>
                <p>Tell the model who it is: "Act as a senior computer science professor explaining to a first-year student."</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-indigo-400 block">2. Provide Rich Context</span>
                <p>Share the background: the programming language, your current knowledge level, and specific constraints.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-indigo-400 block">3. Specify Output Format</span>
                <p>Demand bullet points, code blocks, or step-by-step numbered logic rather than generic paragraphs.</p>
              </div>
            </div>
          </div>

          {/* Prompt Templates */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-slate-300">Ready-to-Use Student & Developer Prompt Templates</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROMPT_TEMPLATES.map((tpl, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 font-mono">
                      {tpl.category}
                    </span>
                    <h5 className="font-bold text-slate-100 text-sm">{tpl.title}</h5>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 leading-relaxed">
                      {tpl.template}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => copyPrompt(tpl.template, i)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium flex items-center gap-1.5"
                    >
                      {copiedIndex === i ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedIndex === i ? 'Copied Prompt!' : 'Copy Template'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('assistant');
                        setQuery(tpl.template);
                      }}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
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
