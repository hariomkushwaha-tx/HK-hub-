import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  BookOpen, 
  Shield, 
  Lock, 
  Unlock, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Sun, 
  Moon, 
  Sparkles, 
  Copy, 
  Check, 
  HelpCircle, 
  Share2, 
  Key, 
  AlertTriangle,
  Award,
  Layers,
  Terminal,
  Bookmark,
  Printer,
  Compass,
  Cpu,
  RefreshCw,
  FileCheck,
  Zap,
  Info,
  Headphones,
  Volume2,
  VolumeX,
  ShieldCheck
} from 'lucide-react';
import { WEAPON_BOOK_INFO, WEAPON_PARTS, WEAPON_GLOSSARY } from '../../data/weaponMasterData';
import { WEAPON_CHAPTERS_CATALOG } from '../../data/weaponChaptersCatalog';
import { getWeaponChapterContent, saveCustomWeaponChapterEdit } from '../../data/weaponChapterContent';
import { WeaponChapter } from '../../types/weapon';
import { useApp } from '../../context/AppContext';
import { copyToClipboard } from '../../utils/clipboard';
import { EngineeringRecipeView } from './weapon/EngineeringRecipeView';
import { LearningLevelsView } from './weapon/LearningLevelsView';
import { DefenceCaseStudyView } from './weapon/DefenceCaseStudyView';
import { PracticalSimulatorsView } from './weapon/PracticalSimulatorsView';
import { EducationalDiagramsView } from './weapon/EducationalDiagramsView';

interface WeaponReaderModalProps {
  initialChapterNumber?: number;
  onClose: () => void;
}

type ReaderTab = 
  | 'study-guide' 
  | 'recipe-17' 
  | 'levels' 
  | 'case-study' 
  | 'practical-labs' 
  | 'schematics' 
  | 'quiz' 
  | 'glossary' 
  | 'access-audit';

const AUTH_STORAGE_KEY = 'hk_weapon_auth_session';

export const WeaponReaderModal: React.FC<WeaponReaderModalProps> = ({
  initialChapterNumber = 1,
  onClose
}) => {
  const { isBookmarked, toggleBookmark, saveReadingProgress, getReadingProgress, userProfile } = useApp();
  
  // Chapter State
  const [currentChapterNum, setCurrentChapterNum] = useState<number>(() => {
    if (initialChapterNumber >= 1 && initialChapterNumber <= 75) return initialChapterNumber;
    return 1;
  });

  const [activeTab, setActiveTab] = useState<ReaderTab>('study-guide');
  const [readingTheme, setReadingTheme] = useState<'dark' | 'sepia' | 'light'>('dark');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPartFilter, setSelectedPartFilter] = useState<number | 'all'>('all');
  const [showTocMobile, setShowTocMobile] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<number, boolean>>({});

  // Audio Speech Synthesis & Navigation Ref
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [speechNotice, setSpeechNotice] = useState<string | null>(null);

  // AI Study Assistant State
  const [showAiExplainer, setShowAiExplainer] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  // Access Control & Security Passkey State (Default 100% Free Open Academic Access)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [requiresAuth, setRequiresAuth] = useState<boolean>(false);
  const [authChecking, setAuthChecking] = useState<boolean>(false);
  const [passkeyInput, setPasskeyInput] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authWatermark, setAuthWatermark] = useState<string>(
    `STUDENT ID: HKV-${Math.random().toString(36).substring(2, 8).toUpperCase()} • AUTHORIZED DEFENCE RESEARCH ARCHIVE`
  );
  const [recentAuditLogs, setRecentAuditLogs] = useState<any[]>([]);

  // Current Chapter Content
  const chapter: WeaponChapter = getWeaponChapterContent(currentChapterNum);

  // Audio Speech Synthesis Function
  const toggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSpeechNotice('आपके ब्राउज़र में स्पीच सिंथेसिस सपोर्ट उपलब्ध नहीं है।');
      setTimeout(() => setSpeechNotice(null), 3000);
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textToRead = `${chapter.title}। ${chapter.subtitle}। ${chapter.introduction}। ${chapter.engineeringContext}। प्रमुख वैज्ञानिक सिद्धांत: ${chapter.coreScientificPrinciples.join('। ')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'hi-IN';
      utterance.rate = speechRate;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // AI Chapter Explainer Handler
  const handleAskAiAboutChapter = async () => {
    setShowAiExplainer(true);
    if (aiResponse) return;
    setAiLoading(true);
    try {
      const res = await fetch('/api/ai/assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: `अध्याय ${chapter.chapterNumber}: ${chapter.title}`,
          question: `कृपया HK VELORA छात्रों के लिए इस विषय "${chapter.title} — ${chapter.subtitle}" के मूल वैज्ञानिक सिद्धांतों, इंजीनियरिंग कार्यप्रणाली और व्यावहारिक महत्व को सरल, सटीक और परीक्षा-उपयोगी भाषा में समझाएं।`,
          context: `${chapter.introduction} ${chapter.engineeringContext}`
        })
      });
      const data = await res.json();
      if (data && (data.reply || data.result)) {
        setAiResponse(data.reply || data.result);
      } else {
        setAiResponse(`${chapter.title} रक्षा एवं एयरोस्पेस इंजीनियरिंग का एक प्रमुख तकनीकी विषय है। इसके मुख्य वैज्ञानिक घटकों में थर्मोडायनामिक्स, सिग्नल प्रोसेसिंग और उच्च-सटीकता गाइडेंस शामिल हैं।`);
      }
    } catch (e) {
      setAiResponse(`${chapter.title} रक्षा एवं एयरोस्पेस इंजीनियरिंग का एक प्रमुख तकनीकी विषय है। इसके मुख्य वैज्ञानिक घटकों में थर्मोडायनामिक्स, सिग्नल प्रोसेसिंग और उच्च-सटीकता गाइडेंस शामिल हैं।`);
    } finally {
      setAiLoading(false);
    }
  };

  // Auto scroll to top and stop speech on chapter change
  useEffect(() => {
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    setAiResponse(null);
    setShowAiExplainer(false);
  }, [currentChapterNum]);

  // Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentChapterNum < 75) {
        setCurrentChapterNum(prev => prev + 1);
        setQuizSubmitted({});
        setSelectedAnswers({});
      }
      if (e.key === 'ArrowLeft' && currentChapterNum > 1) {
        setCurrentChapterNum(prev => prev - 1);
        setQuizSubmitted({});
        setSelectedAnswers({});
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChapterNum, onClose]);

  // Check Server Security Status on Mount
  useEffect(() => {
    let isMounted = true;
    async function checkStatus() {
      try {
        const res = await fetch('/api/books/weapon/status');
        const data = await res.json();
        if (!isMounted) return;
        setRequiresAuth(false);
        setIsAuthenticated(true);
      } catch (e) {
        setRequiresAuth(false);
        setIsAuthenticated(true);
      } finally {
        if (isMounted) setAuthChecking(false);
      }
    }
    checkStatus();
    return () => { isMounted = false; };
  }, []);

  // Update Reading Progress in Context & LocalStorage
  useEffect(() => {
    const percentage = Math.round((currentChapterNum / 75) * 100);
    saveReadingProgress({
      bookId: 'hk-weapon',
      currentChapterIndex: currentChapterNum - 1,
      currentChapterTitle: `Chapter ${chapter.chapterNumber}: ${chapter.title}`,
      percentage,
      lastReadTime: 'अभी पढ़ा',
      totalChapters: 75
    });

    // Sync URL without reload
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', 'ebooks');
      url.searchParams.set('book', 'hk-weapon');
      url.searchParams.set('chapter', String(currentChapterNum));
      window.history.replaceState({}, '', url.toString());
    } catch {}
  }, [currentChapterNum]);

  // Load audit logs when switching to audit tab
  useEffect(() => {
    if (activeTab === 'access-audit') {
      fetch('/api/books/weapon/logs')
        .then(r => r.json())
        .then(d => {
          if (d && d.recentLogs) setRecentAuditLogs(d.recentLogs);
        })
        .catch(() => {});
    }
  }, [activeTab]);

  const handleVerifyPasskey = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    try {
      const res = await fetch('/api/books/weapon/verify-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passkey: passkeyInput,
          userEmail: userProfile?.username ? `${userProfile.username}@hkvelora.internal` : 'student@hkvelora.internal'
        })
      });
      const data = await res.json();
      if (res.ok && data.authenticated) {
        setIsAuthenticated(true);
        if (data.watermark) setAuthWatermark(data.watermark);
        // Persist session
        const sessionPayload = {
          token: data.token,
          expiresAt: Date.now() + (data.expiresInHours || 12) * 3600 * 1000,
          watermark: data.watermark
        };
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(sessionPayload));
        setPasskeyInput('');
      } else {
        setAuthError(data.message || 'सुरक्षा कोड अमान्य है।');
      }
    } catch (err: any) {
      setAuthError('सर्वर से कनेक्ट करने में त्रुटि। कृपया पुनः प्रयास करें।');
    }
  };

  const handleCopy = (text: string, key: string) => {
    copyToClipboard(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const handleShare = () => {
    const url = `${window.location.origin}/?tab=ebooks&book=hk-weapon&chapter=${currentChapterNum}`;
    copyToClipboard(url);
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 2500);
  };

  // Filter TOC
  const filteredCatalog = WEAPON_CHAPTERS_CATALOG.filter(c => {
    const matchPart = selectedPartFilter === 'all' || c.partNumber === selectedPartFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q || (
      c.title.toLowerCase().includes(q) ||
      c.subtitle.toLowerCase().includes(q) ||
      c.partTitle.toLowerCase().includes(q) ||
      c.keyTopics.some(t => t.toLowerCase().includes(q))
    );
    return matchPart && matchSearch;
  });

  // Color theme classes
  const themeClasses = {
    dark: 'bg-zinc-950 text-zinc-100 border-zinc-800',
    sepia: 'bg-[#f7f2e7] text-[#2c2416] border-[#d8ccb8]',
    light: 'bg-white text-zinc-900 border-zinc-200'
  }[readingTheme];

  const contentBg = {
    dark: 'bg-zinc-900/60 border-zinc-800 text-zinc-200',
    sepia: 'bg-[#ede5d0] border-[#d4c5a9] text-[#2c2416]',
    light: 'bg-zinc-50 border-zinc-200 text-zinc-800'
  }[readingTheme];

  const fontClass = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-loose'
  }[fontSize];

  return (
    <div 
      id="weapon-reader-modal"
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <header className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-zinc-950 border-b border-zinc-800 text-white select-none gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex items-center gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider flex-shrink-0">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>HK WEAPON</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-zinc-800 flex-shrink-0" />
          <div className="min-w-0 flex items-center gap-1.5">
            <span className="sm:hidden px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-amber-400 font-bold flex-shrink-0">
              Ch {chapter.chapterNumber}
            </span>
            <h1 className="text-xs sm:text-sm font-medium text-zinc-200 truncate hidden sm:block">
              Ch {chapter.chapterNumber}: {chapter.title}
            </h1>
            <p className="text-[11px] text-zinc-400 truncate hidden lg:block">
              • {chapter.partTitle}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {/* Bookmark */}
          <button
            id="weapon-bookmark-btn"
            onClick={() => toggleBookmark('hk-weapon')}
            className={`p-1.5 rounded-lg border transition-colors ${
              isBookmarked('hk-weapon')
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
            title="Bookmark Book"
          >
            <Bookmark className="w-4 h-4" />
          </button>

          {/* Share */}
          <button
            id="weapon-share-btn"
            onClick={handleShare}
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors relative"
            title="Share Chapter Link"
          >
            {shareSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          {/* Theme switcher */}
          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-0.5">
            <button
              onClick={() => setReadingTheme('dark')}
              className={`p-1 rounded ${readingTheme === 'dark' ? 'bg-zinc-800 text-amber-400' : 'text-zinc-400'}`}
              title="Dark Mode"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setReadingTheme('sepia')}
              className={`p-1 rounded ${readingTheme === 'sepia' ? 'bg-amber-900/40 text-amber-300' : 'text-zinc-400'}`}
              title="Sepia Mode"
            >
              <span className="text-[11px] font-bold px-0.5">S</span>
            </button>
            <button
              onClick={() => setReadingTheme('light')}
              className={`p-1 rounded ${readingTheme === 'light' ? 'bg-zinc-200 text-zinc-900' : 'text-zinc-400'}`}
              title="Light Mode"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Font Size */}
          <div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => setFontSize('sm')}
              className={`px-1.5 py-0.5 rounded ${fontSize === 'sm' ? 'bg-zinc-800 text-white font-semibold' : 'text-zinc-400'}`}
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('base')}
              className={`px-1.5 py-0.5 rounded ${fontSize === 'base' ? 'bg-zinc-800 text-white font-semibold' : 'text-zinc-400'}`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-1.5 py-0.5 rounded ${fontSize === 'lg' ? 'bg-zinc-800 text-white font-semibold' : 'text-zinc-400'}`}
            >
              A+
            </button>
          </div>

          {/* Fullscreen */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="hidden md:flex p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close Modal */}
          <button
            id="weapon-close-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-red-950/40 border border-red-800/40 text-red-400 hover:bg-red-900/60 hover:text-white transition-colors ml-1"
            title="Close Book"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Reader Workspace */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile TOC Backdrop */}
        {showTocMobile && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-25 md:hidden"
            onClick={() => setShowTocMobile(false)}
          />
        )}

        {/* Left Table of Contents Sidebar (Desktop + Mobile Toggle) */}
        <aside
          className={`w-80 flex-shrink-0 flex flex-col bg-zinc-950 border-r border-zinc-800 text-zinc-300 transition-all duration-300 z-30 ${
            showTocMobile ? 'absolute inset-y-0 left-0 shadow-2xl' : 'hidden md:flex'
          }`}
        >
          {/* TOC Header with Search & Part Filter */}
          <div className="p-3 border-b border-zinc-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                अध्याय सूची (75 Chapters)
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-amber-400 font-mono">
                  {currentChapterNum}/75
                </span>
                <button
                  type="button"
                  onClick={() => setShowTocMobile(false)}
                  className="md:hidden p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  title="सूची बंद करें"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Search within TOC */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="खोजें (रडार, तेजस, मिसाइल, AI)..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-md pl-8 pr-2.5 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/60"
              />
            </div>

            {/* Part Filter Select */}
            <select
              value={selectedPartFilter}
              onChange={e => setSelectedPartFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-2 py-1 text-[11px] text-zinc-300 focus:outline-none focus:border-amber-500"
            >
              <option value="all">सभी 10 भाग (Parts 1–10)</option>
              {WEAPON_PARTS.map(p => (
                <option key={p.partNumber} value={p.partNumber}>
                  Part {p.partNumber}: {p.title.replace(/PART \d+ — /, '')}
                </option>
              ))}
            </select>
          </div>

          {/* Chapter List Scroll */}
          <div className="flex-1 overflow-y-auto divide-y divide-zinc-900/60 p-1.5">
            {filteredCatalog.map(entry => {
              const isSelected = entry.chapterNumber === currentChapterNum;
              return (
                <button
                  key={entry.chapterNumber}
                  onClick={() => {
                    setCurrentChapterNum(entry.chapterNumber);
                    setShowTocMobile(false);
                    // Reset quiz submitted state for new chapter
                    setQuizSubmitted({});
                    setSelectedAnswers({});
                  }}
                  className={`w-full text-left p-2.5 rounded-lg transition-all flex items-start gap-2.5 group ${
                    isSelected
                      ? 'bg-amber-500/10 border border-amber-500/30 text-white'
                      : 'hover:bg-zinc-900/80 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center text-xs font-mono font-semibold flex-shrink-0 ${
                      isSelected
                        ? 'bg-amber-500 text-black font-bold'
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    {entry.chapterNumber}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`text-xs font-medium truncate ${isSelected ? 'text-amber-400 font-semibold' : 'text-zinc-200'}`}>
                      {entry.title}
                    </p>
                    <p className="text-[10px] text-zinc-500 truncate mt-0.5">
                      Part {entry.partNumber} • {entry.readTimeMinutes} min read
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Author/Publisher Footer */}
          <div className="p-2.5 bg-zinc-950 border-t border-zinc-800 text-[11px] text-zinc-500 flex items-center justify-between">
            <span>हरिओम कुशवाहा • 2026</span>
            <span className="text-amber-500/80 font-mono">HK VELORA</span>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className={`flex-1 flex flex-col overflow-hidden ${themeClasses}`}>
          {/* Sub-Header Row 1: Utility Bar (Mobile TOC, Part Title, AI Mentor, Audio Narration) */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-inherit/40 bg-zinc-950/80 backdrop-blur-md z-20 gap-2">
            <div className="flex items-center gap-2 min-w-0">
              {/* Mobile TOC Button */}
              <button
                type="button"
                onClick={() => setShowTocMobile(true)}
                className="md:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-200 font-medium cursor-pointer shadow-sm flex-shrink-0"
                title="अध्याय सूची खोलें"
              >
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono font-bold text-amber-400">{currentChapterNum}/75</span>
                <span className="text-[11px] text-zinc-400 hidden xs:inline">अध्याय</span>
              </button>

              {/* Desktop Part info */}
              <div className="hidden md:flex items-center gap-2 text-xs text-zinc-400">
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono text-[11px] font-bold border border-amber-500/20">
                  Part {chapter.partNumber}
                </span>
                <span className="truncate max-w-sm font-medium text-zinc-300">
                  {chapter.partTitle}
                </span>
              </div>
            </div>

            {/* Right Action Tools: AI Mentor & Audio Narration */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {/* AI Mentor Button */}
              <button
                type="button"
                onClick={handleAskAiAboutChapter}
                className="px-2.5 py-1.5 rounded-lg font-medium text-xs transition-colors flex items-center gap-1.5 bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 border border-indigo-500/40 cursor-pointer shadow-sm"
                title="HK VELORA AI से इस अध्याय के वैज्ञानिक सिद्धांत समझें"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-xs">AI मेंटर</span>
              </button>

              {/* Audio Narration Toggle */}
              <button
                type="button"
                onClick={toggleSpeech}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg border flex items-center gap-1.5 text-xs transition-all cursor-pointer shadow-sm ${
                  isSpeaking
                    ? 'bg-amber-500 text-black border-amber-400 font-bold animate-pulse shadow-md shadow-amber-500/20'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border-zinc-700'
                }`}
                title={isSpeaking ? 'ऑडियो रोकें (Stop Narration)' : 'अध्याय को बोलकर सुनें (Listen to Chapter)'}
              >
                {isSpeaking ? <VolumeX className="w-3.5 h-3.5 text-black" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
                <span className="font-medium">{isSpeaking ? 'आवाज बंद करें' : 'बोलकर सुनें'}</span>
              </button>

              <span className="hidden lg:inline px-2 py-0.5 rounded bg-zinc-800/60 border border-zinc-700/40 text-zinc-400 font-mono text-[11px]">
                {chapter.readTimeMinutes} min
              </span>
              <span className="hidden xl:inline px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-medium text-[11px]">
                {chapter.badge}
              </span>
            </div>
          </div>

          {/* Sub-Header Row 2: Dedicated Full-Width Scrollable Tabs Ribbon */}
          <div className="w-full bg-zinc-950 border-b border-inherit/40 px-2 sm:px-4 py-1.5 overflow-x-auto flex items-center gap-1.5 z-10 scrollbar-none scroll-smooth">
            <button
              onClick={() => setActiveTab('study-guide')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                activeTab === 'study-guide'
                  ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/20'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/80'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>अध्याय अध्ययन</span>
            </button>

            <button
              onClick={() => setActiveTab('recipe-17')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                activeTab === 'recipe-17'
                  ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/20'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/80'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>17-स्टेप रेसिपी</span>
            </button>

            <button
              onClick={() => setActiveTab('levels')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                activeTab === 'levels'
                  ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/20'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/80'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>प्रोग्रेसिव लेवल्स (1-5)</span>
            </button>

            <button
              onClick={() => setActiveTab('case-study')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                activeTab === 'case-study'
                  ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/20'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/80'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>केस स्टडी (DRDO/HAL)</span>
            </button>

            <button
              onClick={() => setActiveTab('practical-labs')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                activeTab === 'practical-labs'
                  ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/20'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/80'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>प्रैक्टिकल लैब्स & सिमुलेटर</span>
            </button>

            <button
              onClick={() => setActiveTab('schematics')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                activeTab === 'schematics'
                  ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/20'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/80'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>सिस्टम आर्किटेक्चर</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/20'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/80'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>अभ्यास क्विज़</span>
            </button>

            <button
              onClick={() => setActiveTab('glossary')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                activeTab === 'glossary'
                  ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/20'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/80'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>शब्दावली</span>
            </button>

            <button
              onClick={() => setActiveTab('access-audit')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                activeTab === 'access-audit'
                  ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/20'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/80'
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span>सुरक्षा व ऑडिट</span>
            </button>
          </div>

          {/* Reading Scroll Container */}
          <div ref={contentContainerRef} className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 relative">
            {/* Watermark Notice & Open Academic Status */}
            <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500/60 select-none pb-2 border-b border-inherit/40 flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-emerald-400/90 font-bold">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                HK VELORA DEFENCE ARCHIVE • VERIFIED OPEN ACADEMIC ACCESS
              </span>
              <span>{authWatermark}</span>
            </div>

            {/* Content Tabs (Always 100% Free & Open) */}
            <>
                {/* TAB 1: STUDY GUIDE */}
                {activeTab === 'study-guide' && (
                  <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-150">
                    {/* Chapter Title Banner */}
                    <div className="space-y-2 pb-4 border-b border-inherit/40">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500 text-black uppercase">
                          Chapter {chapter.chapterNumber}
                        </span>
                        <span className="text-xs font-medium text-zinc-400">
                          {chapter.partTitle}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-inherit">
                        {chapter.title}
                      </h2>
                      <p className="text-sm sm:text-base text-zinc-400 font-medium leading-relaxed">
                        {chapter.subtitle}
                      </p>
                    </div>

                    {/* 1. Introduction */}
                    <section className={`p-5 rounded-xl border ${contentBg} space-y-3`}>
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold flex items-center gap-2 text-amber-400">
                          <BookOpen className="w-4 h-4" />
                          1. प्रस्तावना एवं वैज्ञानिक संदर्भ (Introduction)
                        </h3>
                        <button
                          onClick={() => handleCopy(chapter.introduction, 'intro')}
                          className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
                        >
                          {copiedKey === 'intro' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>कॉपी</span>
                        </button>
                      </div>
                      <p className={fontClass}>
                        {chapter.introduction}
                      </p>
                    </section>

                    {/* 2. Engineering Context */}
                    <section className={`p-5 rounded-xl border ${contentBg} space-y-3`}>
                      <h3 className="text-base font-bold flex items-center gap-2 text-amber-400">
                        <Cpu className="w-4 h-4" />
                        2. इंजीनियरिंग एवं परिचालन संदर्भ (Engineering Context)
                      </h3>
                      <p className={fontClass}>
                        {chapter.engineeringContext}
                      </p>
                    </section>

                    {/* 3. Core Scientific Principles */}
                    <section className={`p-5 rounded-xl border ${contentBg} space-y-3`}>
                      <h3 className="text-base font-bold flex items-center gap-2 text-amber-400">
                        <Zap className="w-4 h-4" />
                        3. मूलभूत वैज्ञानिक सिद्धांत (Core Scientific Principles)
                      </h3>
                      <ul className="space-y-2.5">
                        {chapter.coreScientificPrinciples.map((principle, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base">
                            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-mono text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* 4. Indian Programmes & Historical Journey */}
                    {chapter.indianProgrammesAndHistory && (
                      <section className="p-5 rounded-xl bg-gradient-to-br from-amber-950/20 via-zinc-900/40 to-indigo-950/20 border border-amber-500/30 space-y-3">
                        <div className="flex items-center gap-2 text-amber-400">
                          <Award className="w-4 h-4" />
                          <h3 className="text-base font-bold">
                            4. भारतीय कार्यक्रम व DRDO अनुसंधान इतिहास (Indigenous R&D Milestone)
                          </h3>
                        </div>
                        <div className="space-y-2 text-sm sm:text-base text-zinc-300">
                          <p>
                            <strong className="text-white">कार्यक्रम / संगठन:</strong>{' '}
                            {chapter.indianProgrammesAndHistory.programmeName} —{' '}
                            <span className="text-amber-400 font-mono">
                              {chapter.indianProgrammesAndHistory.organization}
                            </span>
                          </p>
                          <p className="leading-relaxed">
                            <strong className="text-white">ऐतिहासिक पृष्ठभूमि:</strong>{' '}
                            {chapter.indianProgrammesAndHistory.historicalContext}
                          </p>
                          <p className="leading-relaxed">
                            <strong className="text-white">स्वदेशी मील का पत्थर:</strong>{' '}
                            {chapter.indianProgrammesAndHistory.indigenousMilestone}
                          </p>
                          <div className="pt-2 border-t border-zinc-800 text-xs text-zinc-400 space-y-0.5">
                            <span className="font-semibold text-zinc-300">खुला-स्रोत संदर्भ (Public Sources):</span>
                            {chapter.indianProgrammesAndHistory.publicSources.map((src, idx) => (
                              <p key={idx} className="italic text-zinc-400">• {src}</p>
                            ))}
                          </div>
                        </div>
                      </section>
                    )}

                    {/* 5. Engineering Challenges & Quality Assurance */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className={`p-4 rounded-xl border ${contentBg} space-y-2`}>
                        <h4 className="text-sm font-bold text-amber-400 flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4" />
                          इंजीनियरिंग चुनौतियां (Challenges)
                        </h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                          {chapter.engineeringChallenges.map((ch, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-amber-400">•</span>
                              <span>{ch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`p-4 rounded-xl border ${contentBg} space-y-2`}>
                        <h4 className="text-sm font-bold text-amber-400 flex items-center gap-1.5">
                          <FileCheck className="w-4 h-4" />
                          विनिर्माण व गुणवत्ता (QA & Manufacturing)
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          {chapter.manufacturingAndQuality}
                        </p>
                      </div>
                    </div>

                    {/* 6. Key Takeaways */}
                    <section className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2.5">
                      <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4" />
                        प्रमुख निष्कर्ष (Key Engineering Takeaways)
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                        {chapter.keyTakeaways.map((takeaway, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* 7. Important Technical Terms */}
                    <section className={`p-5 rounded-xl border ${contentBg} space-y-3`}>
                      <h3 className="text-base font-bold flex items-center gap-2 text-amber-400">
                        <Info className="w-4 h-4" />
                        अध्याय पारिभाषिक शब्द (Key Terms)
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {chapter.importantTerms.map((item, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-black/40 border border-inherit/40 space-y-1">
                            <span className="text-xs font-mono font-bold text-amber-400 block">
                              {item.term}
                            </span>
                            <p className="text-xs text-zinc-300 leading-relaxed">
                              {item.definition}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {/* TAB 2: 17-STEP DEFENCE ENGINEERING RECIPE */}
                {activeTab === 'recipe-17' && chapter.engineeringRecipe && (
                  <EngineeringRecipeView
                    recipe={chapter.engineeringRecipe}
                    chapterTitle={chapter.title}
                    chapterNumber={chapter.chapterNumber}
                  />
                )}

                {/* TAB 3: 5 PROGRESSIVE LEARNING LEVELS */}
                {activeTab === 'levels' && chapter.learningLevels && (
                  <LearningLevelsView
                    levels={chapter.learningLevels}
                    chapterTitle={chapter.title}
                  />
                )}

                {/* TAB 4: DEFENCE CASE STUDIES (DRDO / HAL / BEL) */}
                {activeTab === 'case-study' && (
                  <DefenceCaseStudyView
                    initialCaseStudy={chapter.caseStudy}
                    chapterTitle={chapter.title}
                  />
                )}

                {/* TAB 5: PRACTICAL LABS & LIVE SIMULATORS */}
                {activeTab === 'practical-labs' && (
                  <PracticalSimulatorsView
                    projects={chapter.safeProjects}
                    chapterTitle={chapter.title}
                  />
                )}

                {/* TAB 6: SYSTEM ARCHITECTURE & SCHEMATICS */}
                {activeTab === 'schematics' && (
                  <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-150">
                    <EducationalDiagramsView
                      diagrams={chapter.diagrams}
                      chapterTitle={chapter.title}
                    />

                    {/* Chapter Specific Subsystems Breakdown */}
                    <div className="space-y-4 pt-4 border-t border-zinc-800">
                      <div className="space-y-1 pb-2">
                        <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                          <Cpu className="w-5 h-5" />
                          {chapter.systemArchitecture.title}
                        </h3>
                        <p className="text-sm text-zinc-400">
                          {chapter.systemArchitecture.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {chapter.systemArchitecture.subsystems.map((sub, idx) => (
                          <div key={idx} className={`p-4 rounded-xl border ${contentBg} space-y-2`}>
                            <div className="flex items-center justify-between">
                              <span className="w-6 h-6 rounded bg-amber-500 text-black font-bold font-mono text-xs flex items-center justify-center">
                                {idx + 1}
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-amber-400">
                                {sub.function}
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-inherit">
                              {sub.name}
                            </h4>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                              {sub.engineeringNotes}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: PRACTICE QUIZ */}
                {activeTab === 'quiz' && (
                  <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-150">
                    <div className="space-y-1 pb-3 border-b border-inherit/40">
                      <h3 className="text-xl font-bold text-amber-400 flex items-center gap-2">
                        <HelpCircle className="w-5 h-5" />
                        अभ्यास प्रश्न एवं ज्ञान जांच (Knowledge Check Quiz)
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400">
                        अध्याय {chapter.chapterNumber} के मुख्य वैज्ञानिक सिद्धांतों पर आधारित बहुविकल्पीय प्रश्न।
                      </p>
                    </div>

                    <div className="space-y-5">
                      {chapter.quiz.map((q, qIdx) => {
                        const isAnswered = selectedAnswers[qIdx] !== undefined;
                        const isCorrect = selectedAnswers[qIdx] === q.answerIndex;
                        const isSubmitted = quizSubmitted[qIdx];

                        return (
                          <div key={qIdx} className={`p-5 rounded-xl border ${contentBg} space-y-3`}>
                            <h4 className="text-sm sm:text-base font-semibold text-inherit">
                              प्र. {qIdx + 1}: {q.question}
                            </h4>

                            <div className="space-y-2">
                              {q.options.map((opt, optIdx) => {
                                const isSelected = selectedAnswers[qIdx] === optIdx;
                                let btnClasses = 'border-inherit/40 hover:bg-zinc-800/40 text-inherit';

                                if (isSubmitted) {
                                  if (optIdx === q.answerIndex) {
                                    btnClasses = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold';
                                  } else if (isSelected) {
                                    btnClasses = 'bg-red-500/20 border-red-500 text-red-300';
                                  }
                                } else if (isSelected) {
                                  btnClasses = 'bg-amber-500/20 border-amber-500 text-amber-300 font-semibold';
                                }

                                return (
                                  <button
                                    key={optIdx}
                                    onClick={() => {
                                      if (!isSubmitted) {
                                        setSelectedAnswers({ ...selectedAnswers, [qIdx]: optIdx });
                                      }
                                    }}
                                    className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${btnClasses}`}
                                  >
                                    <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-mono text-xs flex-shrink-0 mt-0.5">
                                      {String.fromCharCode(65 + optIdx)}
                                    </span>
                                    <span>{opt}</span>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Submit / Explanation */}
                            <div className="pt-2 flex items-center justify-between">
                              {!isSubmitted ? (
                                <button
                                  onClick={() => {
                                    if (isAnswered) {
                                      setQuizSubmitted({ ...quizSubmitted, [qIdx]: true });
                                    }
                                  }}
                                  disabled={!isAnswered}
                                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                                    isAnswered
                                      ? 'bg-amber-500 text-black hover:bg-amber-400'
                                      : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                                  }`}
                                >
                                  उत्तर सबमिट करें
                                </button>
                              ) : (
                                <div className="space-y-1.5 w-full">
                                  <div className="flex items-center gap-2 text-xs font-bold">
                                    {isCorrect ? (
                                      <span className="text-emerald-400 flex items-center gap-1">
                                        <Check className="w-4 h-4" /> सही उत्तर!
                                      </span>
                                    ) : (
                                      <span className="text-red-400 flex items-center gap-1">
                                        <X className="w-4 h-4" /> गलत उत्तर! सही उत्तर विकल्प {String.fromCharCode(65 + q.answerIndex)} है।
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-zinc-400 leading-relaxed bg-black/40 p-2.5 rounded-lg border border-inherit/30">
                                    <strong className="text-amber-400">व्याख्या:</strong> {q.explanation}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* TAB 4: GLOSSARY */}
                {activeTab === 'glossary' && (
                  <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-150">
                    <div className="space-y-1 pb-3 border-b border-inherit/40">
                      <h3 className="text-xl font-bold text-amber-400 flex items-center gap-2">
                        <Compass className="w-5 h-5" />
                        रक्षा एवं एयरोस्पेस पारिभाषिक शब्दावली (Master Glossary)
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400">
                        सैन्य इलेक्ट्रॉनिक्स, एरोडायनामिक्स और रडार विज्ञान के प्रमुख तकनीकी शब्दों की प्रामाणिक परिभाषाएं।
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {WEAPON_GLOSSARY.map((item, idx) => (
                        <div key={idx} className={`p-4 rounded-xl border ${contentBg} space-y-1.5`}>
                          <div className="flex items-baseline justify-between">
                            <h4 className="text-sm font-bold text-amber-400 font-mono">
                              {item.term}
                            </h4>
                          </div>
                          <p className="text-xs font-medium text-zinc-300">
                            {item.hindi}
                          </p>
                          <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                            {item.definition}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 5: SECURITY & ACCESS AUDIT */}
                {activeTab === 'access-audit' && (
                  <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-150">
                    <div className="space-y-1 pb-3 border-b border-inherit/40">
                      <h3 className="text-xl font-bold text-amber-400 flex items-center gap-2">
                        <Key className="w-5 h-5" />
                        सुरक्षा, गोपनीयता एवं एक्सेस ऑडिट (Security Status)
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400">
                        HK WEAPON संदर्भ सामग्री का सुरक्षा ढांचा और हालिया एक्सेस लॉग।
                      </p>
                    </div>

                    {/* Security Card */}
                    <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-zinc-400">एक्सेस नियंत्रण स्थिति:</span>
                        <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                          {requiresAuth ? 'पासकी-सुरक्षित (Enforced)' : 'अधिकृत शैक्षणिक एक्सेस (Open Watermarked)'}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-400 space-y-1 pt-2 border-t border-zinc-800 font-mono">
                        <p>• वाटरमार्क: {authWatermark}</p>
                        <p>• मानक: शैक्षणिक अनुसंधान (No Weaponization Specs)</p>
                        <p>• सर्वर टाइमस्टैम्प: {new Date().toISOString()}</p>
                      </div>
                    </div>

                    {/* Audit Logs */}
                    <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
                      <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-amber-400" />
                        हालिया ऑडिट लॉग्स (Recent Server Security Logs)
                      </h4>
                      <div className="space-y-2 max-h-48 overflow-y-auto font-mono text-[11px]">
                        {recentAuditLogs.length > 0 ? (
                          recentAuditLogs.map((log, i) => (
                            <div key={i} className="p-2 rounded bg-zinc-900 border border-zinc-800/80 text-zinc-300 flex items-center justify-between">
                              <span className="text-amber-400">{log.action}</span>
                              <span className="text-zinc-500 text-[10px]">{new Date(log.timestamp).toLocaleTimeString()}</span>
                            </div>
                          ))
                        ) : (
                          <p className="text-zinc-500 italic">लॉग्स लोड हो रहे हैं या अभी कोई ऑडिट इवेंट नहीं है।</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </>
          </div>

          {/* Bottom Sticky Chapter Switcher Controls */}
          <footer className="px-3 sm:px-4 py-2 sm:py-2.5 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between gap-1.5 sm:gap-3 text-xs text-white select-none w-full max-w-full">
            {/* Previous Chapter */}
            <button
              id="weapon-prev-chapter-btn"
              onClick={() => {
                if (currentChapterNum > 1) {
                  setCurrentChapterNum(currentChapterNum - 1);
                  setQuizSubmitted({});
                  setSelectedAnswers({});
                }
              }}
              disabled={currentChapterNum <= 1}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-xl border transition-all flex-shrink-0 cursor-pointer ${
                currentChapterNum > 1
                  ? 'bg-zinc-900 border-zinc-700 text-zinc-200 hover:bg-zinc-800 active:scale-95'
                  : 'bg-zinc-950 border-zinc-900 text-zinc-600 cursor-not-allowed opacity-50'
              }`}
              title="पिछला अध्याय"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">पिछला</span>
            </button>

            {/* Quick Chapter Selector */}
            <div className="flex-1 min-w-0 max-w-[220px] sm:max-w-md flex items-center justify-center gap-1.5 sm:gap-2 mx-1">
              <select
                value={currentChapterNum}
                onChange={e => {
                  setCurrentChapterNum(Number(e.target.value));
                  setQuizSubmitted({});
                  setSelectedAnswers({});
                }}
                className="w-full min-w-0 bg-zinc-900 border border-zinc-700/80 rounded-xl px-2 sm:px-3 py-1.5 text-xs text-amber-400 font-bold focus:outline-none focus:border-amber-500 truncate cursor-pointer text-center"
              >
                {WEAPON_CHAPTERS_CATALOG.map(c => (
                  <option key={c.chapterNumber} value={c.chapterNumber} className="bg-zinc-900 text-zinc-200">
                    Ch {c.chapterNumber}: {c.title}
                  </option>
                ))}
              </select>
              <span className="text-zinc-500 font-mono text-xs flex-shrink-0 whitespace-nowrap">
                / 75
              </span>
            </div>

            {/* Next Chapter */}
            <button
              id="weapon-next-chapter-btn"
              onClick={() => {
                if (currentChapterNum < 75) {
                  setCurrentChapterNum(currentChapterNum + 1);
                  setQuizSubmitted({});
                  setSelectedAnswers({});
                }
              }}
              disabled={currentChapterNum >= 75}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-xl border transition-all flex-shrink-0 cursor-pointer ${
                currentChapterNum < 75
                  ? 'bg-amber-500 border-amber-400 text-black font-bold hover:bg-amber-400 active:scale-95 shadow-sm shadow-amber-500/20'
                  : 'bg-zinc-950 border-zinc-900 text-zinc-600 cursor-not-allowed opacity-50'
              }`}
              title="अगला अध्याय"
            >
              <span className="hidden sm:inline font-bold">अगला</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </footer>

          {/* AI Chapter Explainer Modal Overlay */}
          {showAiExplainer && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="max-w-2xl w-full bg-zinc-950 border border-indigo-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150">
                <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        HK VELORA AI • अवधारणा विश्लेषक
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        Chapter {chapter.chapterNumber}: {chapter.title}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowAiExplainer(false)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5 overflow-y-auto space-y-4 text-sm text-zinc-200 leading-relaxed font-sans">
                  {aiLoading ? (
                    <div className="py-12 text-center space-y-3">
                      <div className="w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin mx-auto" />
                      <p className="text-xs text-indigo-300 font-medium">
                        HK VELORA AI रक्षा इंजीनियरिंग सिद्धांतों का विश्लेषण कर रहा है...
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-200">
                        <p className="font-semibold text-indigo-300">विषय का मूल सारांश:</p>
                        <p className="mt-1">{chapter.subtitle}</p>
                      </div>

                      <div className="whitespace-pre-line text-zinc-300 leading-relaxed text-xs sm:text-sm">
                        {aiResponse}
                      </div>

                      <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
                        <span>शैक्षणिक एवं तकनीकी अध्ययन के लिए तैयार</span>
                        <span className="font-mono text-indigo-400">HK VELORA DEFENCE RESEARCH</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-3 bg-zinc-900/60 border-t border-zinc-800 flex justify-end">
                  <button
                    onClick={() => setShowAiExplainer(false)}
                    className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors cursor-pointer"
                  >
                    समझ गया (Close)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Floating Speech Notice Toast */}
          {speechNotice && (
            <div className="fixed bottom-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-zinc-900/95 border border-amber-500/60 text-amber-300 text-xs font-medium shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 flex items-center gap-2 max-w-[90vw]">
              <Volume2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{speechNotice}</span>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
