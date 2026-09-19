import React, { useState } from 'react';
import { 
  GraduationCap, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  BookOpen, 
  Lightbulb, 
  ExternalLink,
  Code,
  Sparkles,
  HelpCircle,
  Eye,
  EyeOff
} from 'lucide-react';
import { LearningLevel } from '../../../types/weapon';

interface LearningLevelsViewProps {
  levels: LearningLevel[];
  chapterTitle: string;
}

export const LearningLevelsView: React.FC<LearningLevelsViewProps> = ({
  levels,
  chapterTitle
}) => {
  const [activeLevelNumber, setActiveLevelNumber] = useState<number>(1);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const toggleReveal = (id: string) => {
    setRevealedAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentLevel = levels.find(l => l.levelNumber === activeLevelNumber) || levels[0];

  const levelColor = (num: number) => {
    switch (num) {
      case 1: return { border: 'border-emerald-500/40', badge: 'bg-emerald-500 text-black', text: 'text-emerald-400', bg: 'bg-emerald-950/20' };
      case 2: return { border: 'border-cyan-500/40', badge: 'bg-cyan-500 text-black', text: 'text-cyan-400', bg: 'bg-cyan-950/20' };
      case 3: return { border: 'border-amber-500/40', badge: 'bg-amber-500 text-black', text: 'text-amber-400', bg: 'bg-amber-950/20' };
      case 4: return { border: 'border-indigo-500/40', badge: 'bg-indigo-500 text-black', text: 'text-indigo-400', bg: 'bg-indigo-950/20' };
      case 5: return { border: 'border-purple-500/40', badge: 'bg-purple-500 text-black', text: 'text-purple-400', bg: 'bg-purple-950/20' };
      default: return { border: 'border-amber-500/40', badge: 'bg-amber-500 text-black', text: 'text-amber-400', bg: 'bg-amber-950/20' };
    }
  };

  const colors = levelColor(currentLevel.levelNumber);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Title & Level Selector Ribbon */}
      <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                5 PROGRESSIVE LEVELS
              </span>
              <span className="text-xs text-zinc-400">Structured Engineering Curriculum</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
              {chapterTitle} — स्तरबद्ध शिक्षण (Progressive Mastery)
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
              शुरुआती फाउंडेशन से लेकर एडवांस्ड सिस्टम इंटीग्रेशन और भविष्य के अनुसंधान तक 5 सुव्यवस्थित स्तर।
            </p>
          </div>
        </div>

        {/* 5 Level Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
          {levels.map((lvl) => {
            const isSelected = activeLevelNumber === lvl.levelNumber;
            const c = levelColor(lvl.levelNumber);
            return (
              <button
                key={lvl.levelNumber}
                onClick={() => setActiveLevelNumber(lvl.levelNumber)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  lvl.levelNumber === 5 ? 'col-span-2 sm:col-span-1' : ''
                } ${
                  isSelected
                    ? `${c.bg} ${c.border} shadow-sm ring-1 ring-amber-400/30`
                    : 'bg-zinc-950/40 border-zinc-800/80 hover:bg-zinc-800/40 text-zinc-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${c.badge}`}>
                    LVL {lvl.levelNumber}
                  </span>
                </div>
                <p className={`text-xs font-bold mt-2 truncate ${isSelected ? c.text : 'text-zinc-300'}`}>
                  {lvl.levelName.split('—')[1]?.trim() || lvl.levelName}
                </p>
                <p className="text-[10px] text-zinc-500 truncate mt-0.5">{lvl.focus}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Selected Level Details */}
      <div className={`p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border ${colors.border} space-y-6 animate-in fade-in duration-200`}>
        {/* Level Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
          <div>
            <span className={`text-xs font-mono font-bold uppercase tracking-wider ${colors.text}`}>
              {currentLevel.levelName}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mt-1">
              मुख्य फोकस: {currentLevel.focus}
            </h3>
            <p className="text-sm text-zinc-300 mt-2 leading-relaxed max-w-3xl">
              {currentLevel.summary}
            </p>
          </div>
        </div>

        {/* 1. Key Concepts */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            1. मुख्य अवधारणाएं (Key Concepts)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentLevel.keyConcepts.map((kc, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-300 flex items-start gap-2.5">
                <span className={`w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] font-bold flex-shrink-0 ${colors.badge}`}>
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{kc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Technical Vocabulary */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            2. तकनीकी शब्दावली (Technical Vocabulary)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentLevel.technicalVocabulary.map((v, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
                <span className="text-xs font-bold text-amber-400 font-mono tracking-wide">{v.term}</span>
                <p className="text-xs text-zinc-300 leading-relaxed">{v.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Learning Check (Q&A Interactive) */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            3. ज्ञान परीक्षण (Learning Check)
          </h4>
          <div className="space-y-2.5">
            {currentLevel.learningCheck.map((chk, idx) => {
              const qId = `q-${currentLevel.levelNumber}-${idx}`;
              const isRevealed = !!revealedAnswers[qId];
              return (
                <div key={idx} className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/90 space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-semibold text-zinc-200">
                      प्रश्न {idx + 1}: {chk.question}
                    </span>
                    <button
                      onClick={() => toggleReveal(qId)}
                      className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                    >
                      {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{isRevealed ? 'उत्तर छिपाएं' : 'उत्तर देखें'}</span>
                    </button>
                  </div>
                  {isRevealed && (
                    <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 animate-in fade-in duration-150">
                      <span className="font-bold">सटीक उत्तर:</span> {chk.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Safe Practical Project Idea */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/20 via-zinc-950 to-indigo-950/20 border border-amber-500/30 space-y-2">
          <div className="flex items-center gap-2 text-amber-400">
            <Lightbulb className="w-4 h-4" />
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold">
              4. सुरक्षित प्रायोगिक प्रोजेक्ट असाइनमेंट (Safe Project Assignment)
            </h4>
          </div>
          <p className="text-sm font-bold text-zinc-100">
            {currentLevel.safeProjectIdea.title}
          </p>
          <p className="text-xs text-zinc-300 leading-relaxed">
            {currentLevel.safeProjectIdea.description}
          </p>
          <p className="text-xs text-emerald-400 font-mono pt-1">
            <span className="font-bold">अपेक्षित परिणाम (Expected Outcome):</span> {currentLevel.safeProjectIdea.expectedOutcome}
          </p>
        </div>

        {/* 5. Further Reading */}
        <div className="space-y-2 pt-2 border-t border-zinc-800">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            5. अग्रिम अध्ययन संदर्भ (Further Reading & Citations)
          </span>
          <div className="flex flex-wrap gap-2">
            {currentLevel.furtherReading.map((fr, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 text-xs flex items-center gap-1.5 border border-zinc-700/60">
                <BookOpen className="w-3 h-3 text-amber-400" />
                {fr}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
