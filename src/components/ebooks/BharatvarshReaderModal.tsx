import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  X, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Bookmark, 
  Share2, 
  Copy, 
  Check, 
  Sun, 
  Moon, 
  Type, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  FileText, 
  HelpCircle, 
  Scroll, 
  Layers, 
  AlertCircle, 
  Edit3, 
  RotateCcw,
  Sparkles,
  Compass,
  ArrowRight,
  Filter,
  Printer
} from 'lucide-react';
import { BharatvarshChapter, HistoricalCorrectionProposal } from '../../types/bharatvarsh';
import { BHARATVARSH_BOOK_INFO, BHARATVARSH_PARTS } from '../../data/bharatvarshMasterData';
import { BHARATVARSH_CHAPTERS_CATALOG } from '../../data/bharatvarshChaptersCatalog';
import { getBharatvarshChapterContent, saveCustomChapterEdit } from '../../data/bharatvarshChapterContent';
import { useApp } from '../../context/AppContext';
import { copyToClipboard } from '../../utils/clipboard';

interface BharatvarshReaderModalProps {
  initialChapterNumber?: number;
  onClose: () => void;
}

export const BharatvarshReaderModal: React.FC<BharatvarshReaderModalProps> = ({
  initialChapterNumber = 1,
  onClose
}) => {
  const { saveReadingProgress } = useApp();
  const [currentChapterNum, setCurrentChapterNum] = useState<number>(initialChapterNumber);
  const [chapterSearch, setChapterSearch] = useState<string>('');
  const [selectedDomainFilter, setSelectedDomainFilter] = useState<string>('all');
  const [selectedPartFilter, setSelectedPartFilter] = useState<number | 'all'>('all');
  const [theme, setTheme] = useState<'dark' | 'sepia' | 'light'>('dark');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  
  // Correction / Feedback submission modal state
  const [showCorrectionModal, setShowCorrectionModal] = useState<boolean>(false);
  const [correctionTopic, setCorrectionTopic] = useState<string>('');
  const [correctionText, setCorrectionText] = useState<string>('');
  const [correctionSource, setCorrectionSource] = useState<string>('');
  const [correctionSubmitted, setCorrectionSubmitted] = useState<boolean>(false);

  // Active quiz state for current chapter
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Active study tab within chapter
  const [chapterActiveTab, setChapterActiveTab] = useState<'narrative' | 'personality' | 'evidence' | 'quiz' | 'sources'>('narrative');

  const contentContainerRef = useRef<HTMLDivElement>(null);

  // Fetch full 19-section content for current chapter
  const chapter: BharatvarshChapter = useMemo(() => {
    return getBharatvarshChapterContent(currentChapterNum);
  }, [currentChapterNum]);

  // Current part info
  const currentPart = useMemo(() => {
    return BHARATVARSH_PARTS.find(p => p.partNumber === chapter.partNumber) || BHARATVARSH_PARTS[0];
  }, [chapter.partNumber]);

  // Filtered catalog of chapters for the sidebar
  const filteredCatalog = useMemo(() => {
    return BHARATVARSH_CHAPTERS_CATALOG.filter(c => {
      const matchSearch = chapterSearch.trim() === '' || 
        c.title.toLowerCase().includes(chapterSearch.toLowerCase()) ||
        c.subtitle.toLowerCase().includes(chapterSearch.toLowerCase()) ||
        c.era.toLowerCase().includes(chapterSearch.toLowerCase()) ||
        (c.personalityName && c.personalityName.toLowerCase().includes(chapterSearch.toLowerCase())) ||
        c.chapterNumber.toString() === chapterSearch.trim();

      const matchDomain = selectedDomainFilter === 'all' || c.domain === selectedDomainFilter;
      const matchPart = selectedPartFilter === 'all' || c.partNumber === selectedPartFilter;

      return matchSearch && matchDomain && matchPart;
    });
  }, [chapterSearch, selectedDomainFilter, selectedPartFilter]);

  // Reset scroll and speech when chapter changes
  useEffect(() => {
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setQuizAnswers({});
    setQuizSubmitted(false);
    if (chapter.personalityProfile) {
      setChapterActiveTab('narrative');
    }

    // Save reading progress to HK VELORA context
    saveReadingProgress({
      bookId: 'bharatvarsh-maha-granth',
      currentChapterIndex: currentChapterNum - 1,
      currentChapterTitle: `अध्याय ${currentChapterNum}: ${chapter.title}`,
      percentage: Math.round((currentChapterNum / 160) * 100),
      lastReadTime: 'अभी पढ़ा',
      totalChapters: 160
    });

    // Update URL query parameter seamlessly for bookmarking/sharing
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', 'ebooks');
      url.searchParams.set('book', 'bharatvarsh-maha-granth');
      url.searchParams.set('chapter', currentChapterNum.toString());
      window.history.replaceState({}, '', url.toString());
    } catch {
      // safe fallback
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [currentChapterNum]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showCorrectionModal) {
          setShowCorrectionModal(false);
        } else {
          onClose();
        }
      }
      if (e.key === 'ArrowRight' && currentChapterNum < 160) {
        setCurrentChapterNum(prev => prev + 1);
      }
      if (e.key === 'ArrowLeft' && currentChapterNum > 1) {
        setCurrentChapterNum(prev => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChapterNum, showCorrectionModal, onClose]);

  // Text to Speech
  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('आपके ब्राउज़र में स्पीच सिंथेसिस सपोर्ट उपलब्ध नहीं है।');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textToRead = `${chapter.title}। ${chapter.subtitle}। ${chapter.introduction}। ${chapter.mainNarrative.join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'hi-IN';
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}?tab=ebooks&book=bharatvarsh-maha-granth&chapter=${currentChapterNum}`;
    copyToClipboard(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSubmitCorrection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!correctionTopic || !correctionText) return;

    const proposal: HistoricalCorrectionProposal = {
      id: `prop-${Date.now()}`,
      chapterNumber: currentChapterNum,
      topic: correctionTopic,
      proposedText: correctionText,
      sourceCitation: correctionSource || 'उपयोगकर्ता ऐतिहासिक संदर्भ',
      submittedBy: 'अध्येता / पाठक',
      submittedAt: new Date().toISOString(),
      status: 'pending'
    };

    // Store in localStorage
    try {
      const existingRaw = localStorage.getItem('hk_bharatvarsh_proposals') || '[]';
      const list = JSON.parse(existingRaw);
      list.push(proposal);
      localStorage.setItem('hk_bharatvarsh_proposals', JSON.stringify(list));
    } catch (err) {
      console.error(err);
    }

    setCorrectionSubmitted(true);
    setTimeout(() => {
      setShowCorrectionModal(false);
      setCorrectionSubmitted(false);
      setCorrectionTopic('');
      setCorrectionText('');
      setCorrectionSource('');
    }, 2000);
  };

  // Font size classes
  const fontSizeClass = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-loose',
    xl: 'text-xl leading-loose'
  }[fontSize];

  // Theme styling
  const themeStyles = {
    dark: {
      modalBg: 'bg-slate-950 text-slate-100',
      headerBg: 'bg-slate-900/90 border-slate-800',
      sidebarBg: 'bg-slate-900/95 border-slate-800',
      cardBg: 'bg-slate-900 border-slate-800',
      altCardBg: 'bg-slate-950/80 border-slate-800/80',
      accentText: 'text-amber-400',
      accentBorder: 'border-amber-500/40',
      accentBg: 'bg-amber-500/10',
      subText: 'text-slate-400',
      pillActive: 'bg-amber-600 text-white shadow-md shadow-amber-900/30'
    },
    sepia: {
      modalBg: 'bg-[#fbf0d9] text-[#433422]',
      headerBg: 'bg-[#f4e4c1]/90 border-[#dfccaa]',
      sidebarBg: 'bg-[#f7ebd1] border-[#dfccaa]',
      cardBg: 'bg-[#f4e4c1] border-[#e2d0af]',
      altCardBg: 'bg-[#ede0c4] border-[#d8c59f]',
      accentText: 'text-[#9c5011]',
      accentBorder: 'border-[#c47735]',
      accentBg: 'bg-[#ebd4b0]',
      subText: 'text-[#776249]',
      pillActive: 'bg-[#b6631b] text-white shadow-md'
    },
    light: {
      modalBg: 'bg-slate-50 text-slate-800',
      headerBg: 'bg-white/95 border-slate-200',
      sidebarBg: 'bg-white border-slate-200',
      cardBg: 'bg-white border-slate-200 shadow-sm',
      altCardBg: 'bg-slate-100/80 border-slate-200',
      accentText: 'text-amber-700',
      accentBorder: 'border-amber-400',
      accentBg: 'bg-amber-50',
      subText: 'text-slate-500',
      pillActive: 'bg-amber-700 text-white shadow-md'
    }
  }[theme];

  return (
    <div className={`fixed inset-0 z-50 flex flex-col ${themeStyles.modalBg} font-sans select-text`}>
      {/* 1. TOP MASTER HEADER */}
      <header className={`px-4 sm:px-6 py-3 border-b flex items-center justify-between gap-3 ${themeStyles.headerBg} backdrop-blur-md shrink-0 shadow-md`}>
        {/* Left: Brand & Book Title */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
            className="md:hidden p-2 rounded-xl border border-amber-500/30 text-amber-500 hover:bg-amber-500/10"
            title="Toggle Chapter List"
          >
            <Layers className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 flex items-center justify-center text-white font-serif font-black shadow-lg shadow-orange-950/40 text-base shrink-0">
              भ
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-sm sm:text-base truncate tracking-tight">
                  भारतवर्ष: सभ्यता, साम्राज्य और महान व्यक्तित्व
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <ShieldCheck className="w-3 h-3" /> 160 अध्याय
                </span>
              </div>
              <p className={`text-[11px] truncate ${themeStyles.subText}`}>
                {currentPart.romanNumeral} • {currentPart.title} | अध्याय {chapter.chapterNumber} / 160
              </p>
            </div>
          </div>
        </div>

        {/* Center: Progress & Navigation Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            disabled={currentChapterNum <= 1}
            onClick={() => setCurrentChapterNum(prev => prev - 1)}
            className="p-1.5 rounded-lg border border-slate-700 disabled:opacity-30 hover:bg-amber-500/10 hover:border-amber-500 text-slate-300 transition-colors"
            title="पिछला अध्याय (Previous Chapter)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="text-center px-3 py-1 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-xs font-mono font-bold text-amber-400">
              Ch {currentChapterNum}
            </span>
            <span className="text-[10px] text-slate-400"> / 160</span>
          </div>

          <button
            disabled={currentChapterNum >= 160}
            onClick={() => setCurrentChapterNum(prev => prev + 1)}
            className="p-1.5 rounded-lg border border-slate-700 disabled:opacity-30 hover:bg-amber-500/10 hover:border-amber-500 text-slate-300 transition-colors"
            title="अगला अध्याय (Next Chapter)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Controls: Audio, Theme, Font, Correction & Close */}
        <div className="flex items-center gap-2">
          {/* TTS Audio Narration */}
          <button
            onClick={toggleSpeech}
            className={`p-2 rounded-xl border transition-all ${
              isSpeaking
                ? 'bg-red-600 text-white border-red-500 animate-pulse'
                : 'border-slate-700 hover:border-amber-500 hover:text-amber-400'
            }`}
            title={isSpeaking ? 'वाचन रोकें (Stop Narration)' : 'अध्याय सुनें (Hindi Audio Narration)'}
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Theme switcher */}
          <div className="hidden sm:flex items-center border border-slate-700 rounded-xl p-0.5">
            <button
              onClick={() => setTheme('dark')}
              className={`p-1.5 rounded-lg text-xs font-bold transition-colors ${theme === 'dark' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
              title="Dark Theme"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme('sepia')}
              className={`p-1.5 rounded-lg text-xs font-bold transition-colors ${theme === 'sepia' ? 'bg-[#b6631b] text-white' : 'text-slate-400 hover:text-slate-200'}`}
              title="Sepia / Heritage Theme"
            >
              <Scroll className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme('light')}
              className={`p-1.5 rounded-lg text-xs font-bold transition-colors ${theme === 'light' ? 'bg-amber-700 text-white' : 'text-slate-400 hover:text-slate-200'}`}
              title="Light Theme"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Font Size */}
          <div className="hidden md:flex items-center border border-slate-700 rounded-xl p-0.5">
            <button
              onClick={() => setFontSize('sm')}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold ${fontSize === 'sm' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}
            >
              अ-
            </button>
            <button
              onClick={() => setFontSize('base')}
              className={`px-2 py-1 rounded-lg text-xs font-bold ${fontSize === 'base' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}
            >
              अ
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-2 py-1 rounded-lg text-sm font-bold ${fontSize === 'lg' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}
            >
              अ+
            </button>
          </div>

          {/* Report / Suggest Correction */}
          <button
            onClick={() => setShowCorrectionModal(true)}
            className="p-2 rounded-xl border border-slate-700 hover:border-amber-500 hover:text-amber-400 text-slate-300 transition-colors"
            title="ऐतिहासिक संदर्भ या तथ्य सुझाव (Suggest Correction)"
          >
            <Edit3 className="w-4 h-4" />
          </button>

          {/* Share */}
          <button
            onClick={handleCopyLink}
            className="p-2 rounded-xl border border-slate-700 hover:border-amber-500 hover:text-amber-400 text-slate-300 transition-colors"
            title="अध्याय लिंक साझा करें (Share Chapter)"
          >
            {copiedLink ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          {/* Print / Save as PDF */}
          <button
            onClick={() => window.print()}
            className="hidden sm:inline-flex p-2 rounded-xl border border-slate-700 hover:border-amber-500 hover:text-amber-400 text-slate-300 transition-colors"
            title="अध्याय प्रिंट करें / PDF सहेजें (Print / Save Chapter PDF)"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Close Modal */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-red-600 hover:text-white text-slate-300 transition-colors"
            title="बंद करें (Close)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* 2. BODY LAYOUT: SIDEBAR + MAIN READER */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* LEFT SIDEBAR: 160 CHAPTERS NAVIGATOR */}
        <aside
          className={`
            fixed md:relative inset-y-0 left-0 z-40 w-80 sm:w-96 flex flex-col border-r
            ${themeStyles.sidebarBg} transition-transform duration-300 ease-in-out
            ${showMobileSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          {/* Sidebar Header */}
          <div className="p-4 border-b border-slate-800/80 space-y-3 shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-500" />
                <h3 className="font-extrabold text-sm tracking-tight">160 अध्याय सूची (Index)</h3>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-amber-400 border border-slate-700">
                18 भाग
              </span>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                value={chapterSearch}
                onChange={(e) => setChapterSearch(e.target.value)}
                placeholder="अध्याय या महापुरुष खोजें (उदा. चाणक्य, शिवाजी, 1857)..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-950/70 border border-slate-800 focus:outline-none focus:border-amber-500 text-slate-200 placeholder:text-slate-500"
              />
              {chapterSearch && (
                <button
                  onClick={() => setChapterSearch('')}
                  className="absolute right-2.5 top-2.5 text-[10px] text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Part Dropdown Filter */}
            <select
              value={selectedPartFilter}
              onChange={(e) => setSelectedPartFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full py-1.5 px-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300 text-xs focus:outline-none focus:border-amber-500"
            >
              <option value="all">सभी 18 भाग देखें (All Parts)</option>
              {BHARATVARSH_PARTS.map(p => (
                <option key={p.partNumber} value={p.partNumber}>
                  {p.romanNumeral} • {p.title} ({p.chapterCount} Ch)
                </option>
              ))}
            </select>

            {/* Domain Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] no-scrollbar">
              {[
                { key: 'all', label: 'सभी' },
                { key: 'empire', label: 'साम्राज्य' },
                { key: 'warrior', label: 'योद्धा' },
                { key: 'scientist', label: 'वैज्ञानिक' },
                { key: 'thinker', label: 'दार्शनिक' },
                { key: 'freedom', label: 'स्वतंत्रता' }
              ].map(d => (
                <button
                  key={d.key}
                  onClick={() => setSelectedDomainFilter(d.key)}
                  className={`px-2.5 py-1 rounded-lg shrink-0 font-medium transition-colors ${
                    selectedDomainFilter === d.key
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chapters Scrollable List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
            {filteredCatalog.length === 0 ? (
              <div className="p-6 text-center text-slate-500 text-xs">
                कोई अध्याय नहीं मिला। कृपया दूसरा शब्द खोजें।
              </div>
            ) : (
              filteredCatalog.map(item => {
                const isCurrent = item.chapterNumber === currentChapterNum;
                return (
                  <button
                    key={item.chapterNumber}
                    onClick={() => {
                      setCurrentChapterNum(item.chapterNumber);
                      setShowMobileSidebar(false);
                    }}
                    className={`
                      w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 group
                      ${isCurrent 
                        ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-500/60 shadow-md' 
                        : 'hover:bg-slate-800/50 border border-transparent'}
                    `}
                  >
                    <span className={`
                      w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0
                      ${isCurrent ? 'bg-amber-500 text-slate-950 shadow' : 'bg-slate-800 text-slate-400 group-hover:text-amber-400'}
                    `}>
                      {item.chapterNumber}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className={`text-xs font-bold truncate ${isCurrent ? 'text-amber-400' : 'text-slate-200 group-hover:text-white'}`}>
                          {item.title}
                        </h4>
                        {item.isPersonality && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 font-medium shrink-0">
                            व्यक्तित्व
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {item.subtitle}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500">
                        <span>{item.era}</span>
                        <span>•</span>
                        <span>{item.readTimeMinutes} min</span>
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Sidebar Footer Info */}
          <div className="p-3 border-t border-slate-800 text-center text-[10px] text-slate-400 shrink-0 bg-slate-950/60">
            HK VELORA राष्ट्रीय संदर्भ ग्रंथ • प्रधान संपादक: हरिओम कुशवाहा
          </div>
        </aside>

        {/* Mobile backdrop for sidebar */}
        {showMobileSidebar && (
          <div
            onClick={() => setShowMobileSidebar(false)}
            className="md:hidden fixed inset-0 bg-black/70 z-30 backdrop-blur-xs"
          />
        )}

        {/* MAIN STAGE: CHAPTER READING VIEW */}
        <main
          ref={contentContainerRef}
          className="flex-1 overflow-y-auto px-4 sm:px-8 md:px-12 py-8 space-y-8"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            {/* 1. CHAPTER HEADER CARD */}
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl relative overflow-hidden ${themeStyles.cardBg}`}>
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                  <Scroll className="w-3.5 h-3.5" /> {chapter.coverBadge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  {chapter.era}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800">
                  {chapter.period}
                </span>
                <span className="px-3 py-1 rounded-full text-xs text-amber-500/90 font-medium">
                  ⏱ {chapter.readTimeMinutes} मिनट अध्ययन
                </span>
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-serif mt-2 mb-3 leading-tight">
                {chapter.title}
              </h1>
              <p className={`text-sm sm:text-lg font-medium leading-relaxed ${themeStyles.subText}`}>
                {chapter.subtitle}
              </p>

              {/* Sub-tab Navigation for Chapter Sections */}
              <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-slate-800/80">
                <button
                  onClick={() => setChapterActiveTab('narrative')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    chapterActiveTab === 'narrative' ? themeStyles.pillActive : 'bg-slate-800/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" /> संपूर्ण आख्यान (Narrative)
                </button>

                {chapter.personalityProfile && (
                  <button
                    onClick={() => setChapterActiveTab('personality')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      chapterActiveTab === 'personality' ? themeStyles.pillActive : 'bg-slate-800/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5" /> व्यक्तित्व प्रोफाइल (Profile)
                  </button>
                )}

                <button
                  onClick={() => setChapterActiveTab('evidence')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    chapterActiveTab === 'evidence' ? themeStyles.pillActive : 'bg-slate-800/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" /> पुरातात्विक साक्ष्य (Evidence)
                </button>

                <button
                  onClick={() => setChapterActiveTab('quiz')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    chapterActiveTab === 'quiz' ? themeStyles.pillActive : 'bg-slate-800/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" /> ज्ञान-परीक्षण (Quiz & Viva)
                </button>

                <button
                  onClick={() => setChapterActiveTab('sources')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    chapterActiveTab === 'sources' ? themeStyles.pillActive : 'bg-slate-800/60 text-slate-400 hover:text-white'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" /> संदर्भ ग्रंथ (Sources)
                </button>
              </div>
            </div>

            {/* TAB 1: NARRATIVE VIEW (INCLUDES CONTEXT, MAIN NARRATIVE, SOCIETY, EVENTS, FACTS, SUMMARY) */}
            {chapterActiveTab === 'narrative' && (
              <div className="space-y-8 animate-fadeIn">
                {/* 2. Chapter Introduction */}
                <section className={`p-6 rounded-3xl border ${themeStyles.cardBg} space-y-3`}>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-500">
                    <Sparkles className="w-4 h-4" /> 1. अध्याय परिचय (Introduction)
                  </div>
                  <p className={`${fontSizeClass} font-serif italic border-l-4 border-amber-500 pl-4 py-1 text-slate-200`}>
                    "{chapter.introduction}"
                  </p>
                </section>

                {/* 3. Historical Context */}
                <section className={`p-6 rounded-3xl border ${themeStyles.cardBg} space-y-3`}>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-500">
                    <Compass className="w-4 h-4" /> 2. ऐतिहासिक पृष्ठभूमि (Historical Context)
                  </div>
                  <p className={`${fontSizeClass} ${themeStyles.subText}`}>
                    {chapter.historicalContext}
                  </p>
                </section>

                {/* 4. Main Historical Narrative */}
                <section className={`p-6 sm:p-8 rounded-3xl border ${themeStyles.cardBg} space-y-5`}>
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-500">
                      <BookOpen className="w-4 h-4" /> 3. प्रामाणिक ऐतिहासिक आख्यान (Main Narrative)
                    </div>
                    <span className="text-[11px] text-slate-400">अकादमिक व प्राथमिक स्रोतों पर आधारित</span>
                  </div>

                  <div className={`space-y-4 ${fontSizeClass}`}>
                    {chapter.mainNarrative.map((para, idx) => (
                      <p key={idx} className="text-slate-200 leading-relaxed text-justify">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>

                {/* 5. Major Events & Important People Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Major Events */}
                  <div className={`p-6 rounded-3xl border ${themeStyles.cardBg} space-y-4`}>
                    <h3 className="text-xs font-bold tracking-wider uppercase text-amber-500 flex items-center gap-2">
                      <Scroll className="w-4 h-4" /> प्रमुख ऐतिहासिक घटनाक्रम (Major Events)
                    </h3>
                    <div className="space-y-3">
                      {chapter.majorEvents.map((evt, idx) => (
                        <div key={idx} className={`p-3.5 rounded-2xl border ${themeStyles.altCardBg} space-y-1`}>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-amber-400">{evt.title}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                              {evt.year}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400">{evt.significance}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important People */}
                  <div className={`p-6 rounded-3xl border ${themeStyles.cardBg} space-y-4`}>
                    <h3 className="text-xs font-bold tracking-wider uppercase text-amber-500 flex items-center gap-2">
                      <Award className="w-4 h-4" /> प्रमुख व्यक्तित्व (Important Personalities)
                    </h3>
                    <div className="space-y-3">
                      {chapter.importantPeople.map((person, idx) => (
                        <div key={idx} className={`p-3.5 rounded-2xl border ${themeStyles.altCardBg} space-y-1`}>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-slate-200">{person.name}</span>
                            <span className="text-[10px] text-amber-400 font-medium">{person.role}</span>
                          </div>
                          <p className="text-xs text-slate-400">{person.contribution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 6. Society, Administration & Economy */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`p-5 rounded-3xl border ${themeStyles.cardBg} space-y-2`}>
                    <h4 className="font-bold text-xs text-amber-400 uppercase tracking-wider">समाज और संस्कृति</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{chapter.societyAndCulture}</p>
                  </div>
                  <div className={`p-5 rounded-3xl border ${themeStyles.cardBg} space-y-2`}>
                    <h4 className="font-bold text-xs text-amber-400 uppercase tracking-wider">प्रशासन एवं राजनीति</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{chapter.politicsAndAdministration}</p>
                  </div>
                  <div className={`p-5 rounded-3xl border ${themeStyles.cardBg} space-y-2`}>
                    <h4 className="font-bold text-xs text-amber-400 uppercase tracking-wider">अर्थव्यवस्था ও विज्ञान</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{chapter.economyScienceEducation}</p>
                  </div>
                </div>

                {/* 7. Important Facts & Key Takeaways */}
                <div className={`p-6 sm:p-8 rounded-3xl border ${themeStyles.cardBg} space-y-4`}>
                  <h3 className="text-xs font-bold tracking-wider uppercase text-amber-500 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> परीक्षा एवं सामान्य ज्ञान उपयोगी मुख्य तथ्य (Key Facts)
                  </h3>
                  <ul className="space-y-2.5">
                    {chapter.importantFacts.map((fact, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 8. Myth vs Historical Evidence (If present) */}
                {chapter.mythVsHistory && chapter.mythVsHistory.length > 0 && (
                  <div className={`p-6 rounded-3xl border border-red-900/40 bg-red-950/20 space-y-4`}>
                    <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-red-400">
                      <AlertCircle className="w-4 h-4" /> मिथक बनाम प्रामाणिक ऐतिहासिक साक्ष्य (Myth vs Fact)
                    </div>
                    {chapter.mythVsHistory.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/30 shrink-0">
                            प्रचलित मिथक
                          </span>
                          <p className="text-xs font-medium text-slate-300">{item.myth}</p>
                        </div>
                        <div className="flex items-start gap-2 pt-2 border-t border-slate-800">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                            ऐतिहासिक साक्ष्य
                          </span>
                          <p className="text-xs text-slate-300">{item.historicalEvidence}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 9. Revision Summary */}
                <div className={`p-6 rounded-3xl border border-amber-500/40 bg-amber-500/5 space-y-2`}>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-500">
                    <Scroll className="w-4 h-4" /> द्रुत पुनरावलोकन सारांश (Revision Summary)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {chapter.revisionSummary}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: SPECIAL PERSONALITY PROFILE VIEW */}
            {chapterActiveTab === 'personality' && chapter.personalityProfile && (
              <div className="space-y-6 animate-fadeIn">
                <div className={`p-6 sm:p-8 rounded-3xl border ${themeStyles.cardBg} space-y-6`}>
                  {/* Hero Identity */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                        महान भारतीय राष्ट्र-निर्माता व्यक्तित्व
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white mt-2">
                        {chapter.personalityProfile.fullName}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        {chapter.personalityProfile.domain} • {chapter.personalityProfile.era}
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-right shrink-0">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">कालखंड</span>
                      <span className="text-sm font-mono font-bold text-amber-400">
                        {chapter.personalityProfile.birthDeath}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        {chapter.personalityProfile.birthPlace}
                      </span>
                    </div>
                  </div>

                  {/* Early Life & Education */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={`p-4 rounded-2xl border ${themeStyles.altCardBg} space-y-1.5`}>
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">प्रारंभिक जीवन एवं संस्कार</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{chapter.personalityProfile.earlyLife}</p>
                    </div>
                    <div className={`p-4 rounded-2xl border ${themeStyles.altCardBg} space-y-1.5`}>
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">शिक्षा एवं विद्या-अर्जन</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{chapter.personalityProfile.education}</p>
                    </div>
                  </div>

                  {/* Core Contributions */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold tracking-wider uppercase text-amber-500">
                      मूल योगदान (Core Contributions)
                    </h3>
                    <div className="space-y-2">
                      {chapter.personalityProfile.coreContributions.map((c, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements vs Challenges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">प्रमुख ऐतिहासिक उपलब्धियां</span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {chapter.personalityProfile.achievements.map((a, i) => (
                          <li key={i}>• {a}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/40 space-y-2">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">चुनौतियां एवं संघर्ष</span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {chapter.personalityProfile.challenges.map((c, i) => (
                          <li key={i}>• {c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Historical Impact & Legacy */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/30 space-y-2">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">सभ्यतागत प्रभाव और अमर विरासत</span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {chapter.personalityProfile.historicalImpact}
                    </p>
                    <p className="text-xs text-slate-400 italic">
                      "{chapter.personalityProfile.legacy}"
                    </p>
                  </div>

                  {/* Verified Facts */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold tracking-wider uppercase text-amber-500">
                      प्रामाणिक ऐतिहासिक तथ्य (Verified Facts)
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {chapter.personalityProfile.verifiedFacts.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: PRIMARY EVIDENCE & ARCHAEOLOGY */}
            {chapterActiveTab === 'evidence' && (
              <div className="space-y-6 animate-fadeIn">
                <div className={`p-6 sm:p-8 rounded-3xl border ${themeStyles.cardBg} space-y-6`}>
                  <div className="border-b border-slate-800 pb-4">
                    <h2 className="text-xl sm:text-2xl font-extrabold font-serif text-white">
                      प्राथमिक ऐतिहासिक एवं पुरातात्विक साक्ष्य
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      इतिहास केवल कहानियों पर नहीं, बल्कि पत्थरों पर उत्कीर्ण शिलालेखों, सिक्कों, उत्खनन स्थलों और समकालीन मूल पांडुलिपियों पर टिका है।
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Inscriptions */}
                    {chapter.primaryEvidence.inscriptions && (
                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                          <Scroll className="w-4 h-4" /> शिलालेख ও ताम्रपत्र (Inscriptions)
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {chapter.primaryEvidence.inscriptions.map((ins, i) => (
                            <li key={i}>• {ins}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Archaeological Sites */}
                    {chapter.primaryEvidence.archaeologicalSites && (
                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                          <Compass className="w-4 h-4" /> उत्खनित पुरातात्विक स्थल (Excavation Sites)
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {chapter.primaryEvidence.archaeologicalSites.map((site, i) => (
                            <li key={i}>• {site}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Primary Texts */}
                    {chapter.primaryEvidence.texts && (
                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                          <BookOpen className="w-4 h-4" /> समकालीन मूल ग्रंथ (Primary Texts)
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {chapter.primaryEvidence.texts.map((txt, i) => (
                            <li key={i}>• {txt}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Coins */}
                    {chapter.primaryEvidence.coins && (
                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                          <Award className="w-4 h-4" /> मुद्राशास्त्र (Numismatic Evidence)
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {chapter.primaryEvidence.coins.map((coin, i) => (
                            <li key={i}>• {coin}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Verified Timeline */}
                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <h3 className="text-xs font-bold tracking-wider uppercase text-amber-500">
                      प्रमाणित ऐतिहासिक कालक्रम (Chronological Timeline)
                    </h3>
                    <div className="space-y-2">
                      {chapter.timeline.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-xs font-bold shrink-0">
                            {item.year}
                          </span>
                          <span className="text-xs text-slate-200 mt-0.5">{item.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: QUIZ & VIVA VOCE PRACTICE */}
            {chapterActiveTab === 'quiz' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Interactive MCQs */}
                <div className={`p-6 sm:p-8 rounded-3xl border ${themeStyles.cardBg} space-y-6`}>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-amber-500" />
                        अध्याय ज्ञान-परीक्षण (MCQ Quiz)
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">UPSC, State PSC, SSC एवं प्रतियोगी परीक्षाओं हेतु अभ्यास</p>
                    </div>

                    {quizSubmitted && (
                      <button
                        onClick={() => {
                          setQuizAnswers({});
                          setQuizSubmitted(false);
                        }}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" /> पुनः हल करें
                      </button>
                    )}
                  </div>

                  <div className="space-y-6">
                    {chapter.quiz.map((q, qIndex) => {
                      const selectedAns = quizAnswers[qIndex];
                      const isCorrect = selectedAns === q.answerIndex;
                      return (
                        <div key={qIndex} className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                          <div className="flex items-start gap-2.5">
                            <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0">
                              {qIndex + 1}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-200">{q.question}</h4>
                          </div>

                          {/* Options */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            {q.options.map((opt, optIdx) => {
                              let btnClass = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-amber-500/50';
                              if (quizSubmitted) {
                                if (optIdx === q.answerIndex) {
                                  btnClass = 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold';
                                } else if (selectedAns === optIdx) {
                                  btnClass = 'bg-red-950/60 border-red-500 text-red-300 line-through';
                                }
                              } else if (selectedAns === optIdx) {
                                btnClass = 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold';
                              }

                              return (
                                <button
                                  key={optIdx}
                                  disabled={quizSubmitted}
                                  onClick={() => setQuizAnswers(prev => ({ ...prev, [qIndex]: optIdx }))}
                                  className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center gap-2 ${btnClass}`}
                                >
                                  <span className="font-mono text-[11px] opacity-70">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  <span className="flex-1">{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Explanation if submitted */}
                          {quizSubmitted && (
                            <div className={`p-3 rounded-xl text-xs space-y-1 mt-2 ${
                              isCorrect ? 'bg-emerald-950/30 border border-emerald-900/50 text-emerald-200' : 'bg-red-950/30 border border-red-900/50 text-red-200'
                            }`}>
                              <span className="font-bold block">
                                {isCorrect ? '✓ सही उत्तर!' : '✗ गलत उत्तर।'} सही विकल्प: {String.fromCharCode(65 + q.answerIndex)}
                              </span>
                              <p className="opacity-90">{q.explanation}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {!quizSubmitted && (
                    <button
                      disabled={Object.keys(quizAnswers).length === 0}
                      onClick={() => setQuizSubmitted(true)}
                      className="w-full py-3 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 shadow-lg shadow-orange-950/30 transition-all disabled:opacity-40"
                    >
                      उत्तर जांचें (Submit Quiz)
                    </button>
                  )}
                </div>

                {/* Viva Voce / Short Interview Questions */}
                <div className={`p-6 sm:p-8 rounded-3xl border ${themeStyles.cardBg} space-y-5`}>
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="text-base sm:text-lg font-extrabold text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-500" />
                      मौखिक एवं साक्षात्कार उपयोगी प्रश्नोत्तर (Viva Voce)
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">संक्षिप्त, सटीक एवं अकादमिक दृष्टिकोण वाले उत्तर</p>
                  </div>

                  <div className="space-y-3">
                    {chapter.shortQuestions.map((sq, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold text-xs">Q{idx + 1}.</span>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-200">{sq.q}</h4>
                        </div>
                        <div className="pl-5 pt-1 border-t border-slate-900">
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{sq.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: SOURCES & SCHOLARLY CITATIONS */}
            {chapterActiveTab === 'sources' && (
              <div className="space-y-6 animate-fadeIn">
                <div className={`p-6 sm:p-8 rounded-3xl border ${themeStyles.cardBg} space-y-5`}>
                  <div className="border-b border-slate-800 pb-3">
                    <h2 className="text-xl font-extrabold font-serif text-white flex items-center gap-2">
                      <Compass className="w-5 h-5 text-amber-500" />
                      अध्याय संदर्भ ग्रंथ सूची (Primary References)
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      इस अध्याय का प्रत्येक तथ्य निम्नलिखित प्रमाणिक ग्रंथों, पुरातत्व रिपोर्टों एवं अकादमिक शोध पत्रों से सत्यापित है।
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {chapter.references.map((ref, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300">
                        <span className="w-5 h-5 rounded-md bg-slate-800 font-mono text-[11px] font-bold text-amber-400 flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-serif">{ref}</span>
                      </div>
                    ))}
                  </div>

                  {/* Scholarly declaration */}
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 leading-relaxed">
                    <strong>संपादकीय संकल्प:</strong> HK VELORA का उद्देश्य भारतीय इतिहास को बिना किसी राजनीतिक या सांप्रदायिक अतिरेक के, विशुद्ध ऐतिहासिक साक्ष्यों, शिलालेखों, पुरातात्विक रिपोर्टों और जन-कल्याणकारी मूल्यों के आधार पर छात्रों एवं अध्येताओं तक पहुंचाना है।
                  </div>
                </div>
              </div>
            )}

            {/* BOTTOM CHAPTER NAVIGATION BAR */}
            <div className={`p-4 sm:p-6 rounded-3xl border ${themeStyles.cardBg} flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl`}>
              <button
                disabled={currentChapterNum <= 1}
                onClick={() => setCurrentChapterNum(prev => prev - 1)}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl border border-slate-700 hover:border-amber-500 disabled:opacity-30 flex items-center justify-center gap-2 text-xs font-bold text-slate-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> पिछला अध्याय
              </button>

              <div className="text-center">
                <span className="text-xs font-mono font-bold text-amber-400 block">
                  अध्याय {currentChapterNum} / 160
                </span>
                <span className="text-[11px] text-slate-400">
                  {currentChapterNum < 160 ? `अगला: ${BHARATVARSH_CHAPTERS_CATALOG[currentChapterNum]?.title}` : 'ग्रंथ पूर्ण'}
                </span>
              </div>

              <button
                disabled={currentChapterNum >= 160}
                onClick={() => setCurrentChapterNum(prev => prev + 1)}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-30 flex items-center justify-center gap-2 text-xs font-bold text-slate-950 shadow-md shadow-orange-950/20 transition-all"
              >
                अगला अध्याय <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* CORRECTION / FEEDBACK PROPOSAL MODAL */}
      {showCorrectionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg p-6 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-amber-400" />
                <h3 className="font-extrabold text-sm sm:text-base text-white">
                  ऐतिहासिक तथ्य संशोधन / संदर्भ सुझाव
                </h3>
              </div>
              <button
                onClick={() => setShowCorrectionModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {correctionSubmitted ? (
              <div className="p-6 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-base text-white">सुझाव सफलतापूर्वक दर्ज हुआ!</h4>
                <p className="text-xs text-slate-400">
                  आपके द्वारा सुझाए गए संदर्भ की अकादमिक समीक्षा की जाएगी। धन्यवाद।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitCorrection} className="space-y-4">
                <p className="text-xs text-slate-400">
                  अध्याय {currentChapterNum} ({chapter.title}) के संबंध में कोई तथ्य, तिथि या संदर्भ सुधारने हेतु कृपया प्राथमिक स्रोत के साथ विवरण दें:
                </p>

                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">संशोधन विषय / शीर्षक</label>
                  <input
                    type="text"
                    required
                    value={correctionTopic}
                    onChange={(e) => setCorrectionTopic(e.target.value)}
                    placeholder="उदा. कलिंग युद्ध की तिथि या शिलालेख संदर्भ..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">प्रस्तावित सुधार / विवरण</label>
                  <textarea
                    required
                    rows={4}
                    value={correctionText}
                    onChange={(e) => setCorrectionText(e.target.value)}
                    placeholder="प्रामाणिक ऐतिहासिक तथ्यों का स्पष्ट विवरण लिखें..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">प्राथमिक स्रोत / संदर्भ (Mandatory for Accuracy)</label>
                  <input
                    type="text"
                    value={correctionSource}
                    onChange={(e) => setCorrectionSource(e.target.value)}
                    placeholder="उदा. भारतीय पुरातत्व सर्वेक्षण रिपोर्ट, विष्णु पुराण, आदि..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setShowCorrectionModal(false)}
                    className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                  >
                    रद्द करें
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 shadow"
                  >
                    सुझाव भेजें
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
