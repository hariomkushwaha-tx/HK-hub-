import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { LANGUAGES_LIST, getLanguageMeta } from '../utils/translations';
import { SupportedLanguage } from '../types';
import { 
  Languages, 
  Search, 
  Check, 
  X, 
  Sparkles, 
  Globe, 
  Volume2, 
  ArrowRight,
  Info
} from 'lucide-react';

export const LanguageModal: React.FC = () => {
  const { 
    currentLanguage, 
    setLanguage, 
    languageModalOpen, 
    setLanguageModalOpen,
    fullPageTranslateActive,
    setFullPageTranslateActive
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegionTab, setActiveRegionTab] = useState<'all' | 'India' | 'Global'>('all');
  const [speakingCode, setSpeakingCode] = useState<string | null>(null);

  const filteredLanguages = useMemo(() => {
    return LANGUAGES_LIST.filter((lang) => {
      const matchesSearch = 
        lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lang.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRegion = activeRegionTab === 'all' || lang.region === activeRegionTab;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, activeRegionTab]);

  const handleSelectLanguage = (code: SupportedLanguage) => {
    setLanguage(code);
    setLanguageModalOpen(false);
  };

  const handleSpeakGreeting = (e: React.MouseEvent, text: string, code: string) => {
    e.stopPropagation();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = code === 'hinglish' ? 'hi-IN' : code;
      utterance.rate = 0.95;
      utterance.onstart = () => setSpeakingCode(code);
      utterance.onend = () => setSpeakingCode(null);
      utterance.onerror = () => setSpeakingCode(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!languageModalOpen) return null;

  const currentMeta = getLanguageMeta(currentLanguage);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={() => setLanguageModalOpen(false)}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-purple-950/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-100">
                  Choose Language / भाषा चुनें
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                  Multilingual
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Understand technology, books, and student tools in your native tongue
              </p>
            </div>
          </div>

          <button
            onClick={() => setLanguageModalOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close language modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Public Help Banner */}
        <div className="px-5 py-3 bg-indigo-950/30 border-b border-indigo-900/40 flex items-center gap-2.5 text-xs text-indigo-200">
          <Info className="w-4 h-4 shrink-0 text-indigo-400" />
          <span>
            <strong>जनता और विद्यार्थियों के लिए:</strong> आप अपनी पसंदीदा भाषा (हिंदी, हिंग्लिश, बंगाली, मराठी, गुजराती आदि) में वेबसाइट का आनंद ले सकते हैं।
          </span>
        </div>

        {/* Search & Tabs */}
        <div className="p-4 sm:p-5 border-b border-slate-800 space-y-3 bg-slate-900/60">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search language / भाषा खोजें (e.g., Hindi, हिन्दी, বাংলা, Marathi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
              <button
                onClick={() => setActiveRegionTab('all')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  activeRegionTab === 'all'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All ({LANGUAGES_LIST.length})
              </button>
              <button
                onClick={() => setActiveRegionTab('India')}
                className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  activeRegionTab === 'India'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>🇮🇳 Indian Languages</span>
              </button>
              <button
                onClick={() => setActiveRegionTab('Global')}
                className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  activeRegionTab === 'Global'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>🌍 Global</span>
              </button>
            </div>

            {/* Google Translate Whole-Page Toggle */}
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300 select-none py-1">
              <input
                type="checkbox"
                checked={fullPageTranslateActive}
                onChange={(e) => setFullPageTranslateActive(e.target.checked)}
                className="w-4 h-4 rounded text-indigo-600 bg-slate-950 border-slate-700 focus:ring-indigo-500"
              />
              <span className="font-medium flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>Auto-Translate Whole Page (Google)</span>
              </span>
            </label>
          </div>
        </div>

        {/* Language Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2.5 max-h-[48vh] scrollbar-thin">
          {filteredLanguages.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              No language found matching "{searchQuery}".
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {filteredLanguages.map((lang) => {
                const isSelected = currentLanguage === lang.code;
                const isSpeaking = speakingCode === lang.code;

                return (
                  <div
                    key={lang.code}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleSelectLanguage(lang.code)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSelectLanguage(lang.code);
                      }
                    }}
                    className={`text-left p-3.5 rounded-2xl border transition-all flex flex-col justify-between group relative cursor-pointer select-none ${
                      isSelected
                        ? 'bg-indigo-950/40 border-indigo-500/80 shadow-md ring-1 ring-indigo-500/40'
                        : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl" role="img" aria-label={lang.name}>
                          {lang.flag}
                        </span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-base text-slate-100 group-hover:text-indigo-300 transition-colors">
                              {lang.nativeName}
                            </span>
                            <span className="text-xs text-slate-400 font-medium">
                              ({lang.name})
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                            {lang.region}
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-400 mt-2 line-clamp-1">
                      {lang.description}
                    </p>

                    {/* Greeting & Speech Sample */}
                    <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="italic truncate pr-2 text-indigo-300/80">
                        "{lang.greeting}"
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleSpeakGreeting(e, lang.greeting, lang.code)}
                        className={`p-1 rounded-md text-slate-400 hover:text-indigo-300 hover:bg-indigo-950/40 transition-colors shrink-0 ${
                          isSpeaking ? 'text-indigo-400 animate-pulse' : ''
                        }`}
                        title="Listen to pronunciation"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info & Google Translate live element target */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Currently Active:</span>
            <span className="font-bold text-indigo-300 flex items-center gap-1">
              {currentMeta.flag} {currentMeta.nativeName} ({currentMeta.name})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div id="google_translate_element" className="scale-90 origin-right"></div>
            <button
              onClick={() => handleSelectLanguage('en')}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              Reset to English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
