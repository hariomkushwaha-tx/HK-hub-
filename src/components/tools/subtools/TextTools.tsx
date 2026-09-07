import React, { useState, useMemo } from 'react';
import { Copy, Check, Trash2, ArrowUpDown, Sparkles } from 'lucide-react';
import { copyToClipboard } from '../../../utils/clipboard';

interface SubToolProps {
  toolId: string;
}

export const TextTools: React.FC<SubToolProps> = ({ toolId }) => {
  // Common states
  const [text, setText] = useState<string>(
    'HK HUB is a next-generation technology and student digital platform.\nExplore powerful free tools, master coding, and learn modern AI technologies effortlessly!'
  );
  const [copied, setCopied] = useState<string | null>(null);

  // Lorem states
  const [loremType, setLoremType] = useState<'paragraphs' | 'sentences' | 'words'>('paragraphs');
  const [loremCount, setLoremCount] = useState<number>(3);
  const [generatedLorem, setGeneratedLorem] = useState<string>('');

  const handleCopy = async (str: string, label: string = 'text') => {
    await copyToClipboard(str);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  // Word Counter Calculations
  const textStats = useMemo(() => {
    if (!text.trim()) {
      return { words: 0, characters: 0, charsNoSpaces: 0, sentences: 0, paragraphs: 0, readTime: '0s', speakTime: '0s' };
    }
    const wordsArray = text.trim().match(/\b\S+\b/g) || [];
    const words = wordsArray.length;
    const characters = text.length;
    const charsNoSpaces = text.replace(/\s+/g, '').length;
    const sentences = (text.match(/[.!?]+(?=\s|$)/g) || []).length || (text.trim() ? 1 : 0);
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;
    
    // Average reading speed: 225 wpm, speaking speed: 130 wpm
    const readMinutes = words / 225;
    const readTime = readMinutes < 1 ? `${Math.ceil(readMinutes * 60)} sec` : `${Math.ceil(readMinutes)} min`;
    const speakMinutes = words / 130;
    const speakTime = speakMinutes < 1 ? `${Math.ceil(speakMinutes * 60)} sec` : `${Math.ceil(speakMinutes)} min`;

    return { words, characters, charsNoSpaces, sentences, paragraphs, readTime, speakTime };
  }, [text]);

  // Case Conversion functions
  const convertCase = (type: string) => {
    let result = text;
    switch (type) {
      case 'upper':
        result = text.toUpperCase();
        break;
      case 'lower':
        result = text.toLowerCase();
        break;
      case 'title':
        result = text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
        break;
      case 'sentence':
        result = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        break;
      case 'camel':
        result = text
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
        break;
      case 'snake':
        result = text
          .trim()
          .toLowerCase()
          .replace(/[\s\W-]+/g, '_');
        break;
      case 'kebab':
        result = text
          .trim()
          .toLowerCase()
          .replace(/[\s\W-]+/g, '-');
        break;
    }
    setText(result);
  };

  // Text Formatter & Cleaner operations
  const cleanExtraSpaces = () => {
    setText(text.replace(/[ \t]+/g, ' ').replace(/\n\s+\n/g, '\n\n').trim());
  };

  const removeDuplicateLines = () => {
    const lines = text.split('\n');
    const unique = Array.from(new Set(lines));
    setText(unique.join('\n'));
  };

  const removeBlankLines = () => {
    const lines = text.split('\n').filter(l => l.trim().length > 0);
    setText(lines.join('\n'));
  };

  const sortLines = (direction: 'asc' | 'desc') => {
    const lines = text.split('\n');
    lines.sort((a, b) => (direction === 'asc' ? a.localeCompare(b) : b.localeCompare(a)));
    setText(lines.join('\n'));
  };

  // Lorem Generator logic
  const handleGenerateLorem = () => {
    const wordsBase = [
      'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'curabitur', 'vel',
      'hendrerit', 'libero', 'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut', 'orci', 'gravida',
      'imperdiet', 'nullam', 'purus', 'lacinia', 'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis',
      'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros', 'dictum', 'proin', 'accumsan', 'sapien',
      'nec', 'massa', 'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus', 'quisque', 'porttitor'
    ];

    const generateSentence = () => {
      const len = Math.floor(Math.random() * 8) + 8;
      const sentenceWords = [];
      for (let i = 0; i < len; i++) {
        sentenceWords.push(wordsBase[Math.floor(Math.random() * wordsBase.length)]);
      }
      const s = sentenceWords.join(' ');
      return s.charAt(0).toUpperCase() + s.slice(1) + '.';
    };

    if (loremType === 'words') {
      const words = [];
      for (let i = 0; i < loremCount; i++) {
        words.push(wordsBase[i % wordsBase.length]);
      }
      setGeneratedLorem(words.join(' '));
    } else if (loremType === 'sentences') {
      const sentences = [];
      for (let i = 0; i < loremCount; i++) {
        sentences.push(generateSentence());
      }
      setGeneratedLorem(sentences.join(' '));
    } else {
      const paragraphs = [];
      for (let i = 0; i < loremCount; i++) {
        const sentences = [];
        const sCount = Math.floor(Math.random() * 3) + 3;
        for (let j = 0; j < sCount; j++) {
          sentences.push(generateSentence());
        }
        paragraphs.push(sentences.join(' '));
      }
      setGeneratedLorem(paragraphs.join('\n\n'));
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. Word Counter */}
      {toolId === 'word-counter' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { label: 'Words', val: textStats.words, color: 'text-indigo-400' },
              { label: 'Characters', val: textStats.characters, color: 'text-blue-400' },
              { label: 'No Spaces', val: textStats.charsNoSpaces, color: 'text-cyan-400' },
              { label: 'Sentences', val: textStats.sentences, color: 'text-emerald-400' },
              { label: 'Paragraphs', val: textStats.paragraphs, color: 'text-purple-400' },
              { label: 'Reading Time', val: textStats.readTime, color: 'text-amber-400' },
              { label: 'Speaking Time', val: textStats.speakTime, color: 'text-rose-400' },
            ].map((stat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
                  {stat.label}
                </span>
                <span className={`text-xl font-bold font-mono mt-0.5 block ${stat.color}`}>
                  {stat.val}
                </span>
              </div>
            ))}
          </div>

          <div className="relative">
            <textarea
              id="word-counter-textarea"
              rows={8}
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Type or paste your text here for instant word count, character analysis, and reading duration metrics..."
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 outline-none text-sm font-sans resize-y"
            />
            <div className="absolute top-3 right-3 flex items-center gap-2">
              <button
                onClick={() => handleCopy(text, 'word-count')}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 border border-slate-700"
                title="Copy text"
              >
                {copied === 'word-count' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied === 'word-count' ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                onClick={() => setText('')}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-500/20 text-slate-300 hover:text-red-400 text-xs border border-slate-700"
                title="Clear text"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Case Converter */}
      {toolId === 'case-converter' && (
        <div className="space-y-4">
          <textarea
            id="case-converter-textarea"
            rows={6}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type or paste text to convert casing..."
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 outline-none text-sm font-sans"
          />

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'upper', label: 'UPPERCASE' },
              { id: 'lower', label: 'lowercase' },
              { id: 'title', label: 'Title Case' },
              { id: 'sentence', label: 'Sentence case' },
              { id: 'camel', label: 'camelCase' },
              { id: 'snake', label: 'snake_case' },
              { id: 'kebab', label: 'kebab-case' },
            ].map(b => (
              <button
                key={b.id}
                id={`case-btn-${b.id}`}
                onClick={() => convertCase(b.id)}
                className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                {b.label}
              </button>
            ))}
            <button
              onClick={() => handleCopy(text, 'case-copy')}
              className="ml-auto px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5"
            >
              {copied === 'case-copy' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied === 'case-copy' ? 'Copied' : 'Copy Result'}</span>
            </button>
          </div>
        </div>
      )}

      {/* 3. Text Cleaner & Formatter */}
      {toolId === 'text-cleaner' && (
        <div className="space-y-4">
          <textarea
            id="text-cleaner-textarea"
            rows={7}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Paste messy text with extra spaces, duplicates, or unordered lines..."
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 outline-none text-sm font-sans"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            <button
              onClick={cleanExtraSpaces}
              className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
            >
              Remove Extra Spaces
            </button>
            <button
              onClick={removeDuplicateLines}
              className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
            >
              Remove Duplicate Lines
            </button>
            <button
              onClick={removeBlankLines}
              className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
            >
              Strip Blank Lines
            </button>
            <button
              onClick={() => sortLines('asc')}
              className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 flex items-center justify-center gap-1"
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort A → Z</span>
            </button>
            <button
              onClick={() => sortLines('desc')}
              className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 flex items-center justify-center gap-1"
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort Z → A</span>
            </button>
          </div>
        </div>
      )}

      {/* 4. Lorem Ipsum Generator */}
      {toolId === 'lorem-generator' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-300">Generate:</span>
              <select
                value={loremType}
                onChange={e => setLoremType(e.target.value as any)}
                className="px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 outline-none"
              >
                <option value="paragraphs">Paragraphs</option>
                <option value="sentences">Sentences</option>
                <option value="words">Words</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-300">Count:</span>
              <input
                type="number"
                min={1}
                max={50}
                value={loremCount}
                onChange={e => setLoremCount(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 text-center outline-none"
              />
            </div>

            <button
              id="generate-lorem-btn"
              onClick={handleGenerateLorem}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors ml-auto"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Generate Lorem Ipsum</span>
            </button>
          </div>

          {generatedLorem && (
            <div className="relative">
              <textarea
                readOnly
                rows={8}
                value={generatedLorem}
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 text-sm font-sans"
              />
              <button
                onClick={() => handleCopy(generatedLorem, 'lorem')}
                className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 flex items-center gap-1"
              >
                {copied === 'lorem' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied === 'lorem' ? 'Copied' : 'Copy All'}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
