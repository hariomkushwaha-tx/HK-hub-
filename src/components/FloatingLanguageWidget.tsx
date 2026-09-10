import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getLanguageMeta } from '../utils/translations';
import { Languages, Globe, ChevronUp, X, Check } from 'lucide-react';

export const FloatingLanguageWidget: React.FC = () => {
  const { currentLanguage, setLanguage, setLanguageModalOpen } = useApp();
  const [isMinimized, setIsMinimized] = useState(false);

  const currentMeta = getLanguageMeta(currentLanguage);

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-20 lg:bottom-6 left-4 lg:left-6 z-30 p-2.5 rounded-full bg-indigo-600 text-white shadow-xl hover:bg-indigo-500 transition-all hover:scale-110 flex items-center justify-center border border-indigo-400/40"
        title="Change Language / भाषा बदलें"
        aria-label="Open language switcher"
      >
        <Languages className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 lg:bottom-6 left-4 lg:left-6 z-30 flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/95 border border-indigo-500/40 shadow-2xl backdrop-blur-md text-xs font-semibold animate-fadeIn max-w-[calc(100vw-32px)]">
      <button
        onClick={() => setLanguageModalOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-slate-200 hover:text-white transition-all border border-indigo-500/30"
        title="Open Full Language Menu / भाषाएं देखें"
      >
        <span className="text-base" role="img" aria-hidden="true">{currentMeta.flag}</span>
        <span className="font-bold">{currentMeta.nativeName}</span>
        <span className="text-[10px] text-slate-400 font-mono">({currentMeta.code.toUpperCase()})</span>
      </button>

      {/* Quick 1-click English / Hindi toggle */}
      {currentLanguage !== 'hi' && (
        <button
          onClick={() => setLanguage('hi')}
          className="px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-[11px]"
          title="हिंदी में पढ़ें"
        >
          हिन्दी
        </button>
      )}

      {currentLanguage !== 'hinglish' && (
        <button
          onClick={() => setLanguage('hinglish')}
          className="px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-[11px]"
          title="हिंग्लिश में पढ़ें"
        >
          Hinglish
        </button>
      )}

      {currentLanguage !== 'en' && (
        <button
          onClick={() => setLanguage('en')}
          className="px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-[11px]"
          title="Read in English"
        >
          English
        </button>
      )}

      <button
        onClick={() => setIsMinimized(true)}
        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
        title="Minimize"
        aria-label="Minimize language pill"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
