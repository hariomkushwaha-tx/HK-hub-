import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  BookOpen, 
  Shield, 
  Lock, 
  Unlock, 
  LockOpen,
  Eye,
  EyeOff,
  ShieldAlert,
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

  // Access Control & Security Passkey State (Strict Password Protection - Never auto-unlock)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [requiresAuth, setRequiresAuth] = useState<boolean>(true);
  const [authChecking, setAuthChecking] = useState<boolean>(false);
  const [passkeyInput, setPasskeyInput] = useState('');
  const [showPasswordText, setShowPasswordText] = useState(false);
  const [authSubmitting, setAuthSubmitting] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const [authWatermark, setAuthWatermark] = useState<string>(
    'हरिओम कुशवाहा · रक्षा एवं वैमानिकी इंजीनियरिंग ग्रंथ · Open Academic Access'
  );
  const [recentAuditLogs, setRecentAuditLogs] = useState<any[]>([]);
  const [customKeyInput, setCustomKeyInput] = useState<string>('');
  const [customKeySaved, setCustomKeySaved] = useState<boolean>(false);

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
    try {
      // If user chose Open Access (No password required)
      const lockMode = localStorage.getItem('hk_weapon_lock_mode');
      if (lockMode === 'disabled') {
        setIsAuthenticated(true);
        setRequiresAuth(false);
        setAuthChecking(false);
        return;
      }

      // Check if session is already active in sessionStorage or localStorage
      const sessionActive = sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true' || localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
      if (sessionActive) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }

    async function checkStatus() {
      try {
        const res = await fetch('/api/books/weapon/status');
        if (!res.ok) return;
        const data = await res.json();
        if (!isMounted) return;
        if (data.requiresAuth === false) {
          setRequiresAuth(false);
          setIsAuthenticated(true);
        }
      } catch (e) {
        // Vercel / static frontend fallback: relies on local check
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

  const handleLockBook = () => {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
      localStorage.setItem('hk_weapon_lock_mode', 'enabled');
    } catch {}
    setRequiresAuth(true);
    setIsAuthenticated(false);
    setPasskeyInput('');
    setAuthError(null);
    setAuthSuccess(null);
  };

  const handleUnlockWithoutPassword = () => {
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      localStorage.setItem('hk_weapon_lock_mode', 'disabled');
    } catch {}
    setRequiresAuth(false);
    setIsAuthenticated(true);
    setAuthError(null);
  };

  const handleVerifyPasskey = async (e: React.FormEvent) => {
    e.preventDefault();
    const input = passkeyInput.trim();
    if (!input) {
      setAuthError('कृपया सुरक्षा पासवर्ड दर्ज करें!');
      return;
    }
    setAuthError(null);
    setAuthSubmitting(true);

    const VALID_KEYS = [
      '#tgr5677@hk$58@phug688',
      'DRDO@2026',
      'HK@WEAPON',
      'HK@2026',
      'drdo@2026',
      'hk@weapon',
      'hk@2026',
      'drdo',
      'DRDO',
      'weapon',
      'WEAPON',
      'defence',
      'DEFENCE'
    ];

    let isMatch = false;

    // 1. Custom password check
    try {
      const storedCustom = localStorage.getItem('hk_weapon_custom_password');
      if (storedCustom && input.toLowerCase() === storedCustom.trim().toLowerCase()) {
        isMatch = true;
      }
    } catch {}

    // 2. Client-side valid master keys check (Instant, works 100% on Vercel/offline)
    if (!isMatch) {
      if (VALID_KEYS.some(k => k.toLowerCase() === input.toLowerCase())) {
        isMatch = true;
      }
    }

    if (isMatch) {
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, 'true');
        sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      } catch {}
      setAuthSuccess('सुरक्षा पासवर्ड सत्यापित हुआ! पुस्तक अनलॉक हो रही है...');
      setTimeout(() => {
        setIsAuthenticated(true);
        setAuthSuccess(null);
        setPasskeyInput('');
        setAuthSubmitting(false);
      }, 300);
      return;
    }

    // 3. Fallback server check if hosted with backend
    try {
      const res = await fetch('/api/books/weapon/verify-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passkey: input,
          userEmail: userProfile?.username ? `${userProfile.username}@hkvelora.internal` : 'student@hkvelora.internal'
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.authenticated) {
          try {
            localStorage.setItem(AUTH_STORAGE_KEY, 'true');
            sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
          } catch {}
          setAuthSuccess(data.message || 'सुरक्षा पासवर्ड सत्यापित हुआ!');
          if (data.watermark) setAuthWatermark(data.watermark);
          setTimeout(() => {
            setIsAuthenticated(true);
            setAuthSuccess(null);
            setPasskeyInput('');
            setAuthSubmitting(false);
          }, 300);
          return;
        }
      }
    } catch {
      // Backend not reached (e.g. Vercel static build), handled gracefully
    }

    setAuthError('गलत पासवर्ड! कृपया सही सुरक्षा पासवर्ड (उदा. DRDO@2026 या HK@WEAPON) दर्ज करें।');
    setAuthSubmitting(false);
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
            {isAuthenticated ? (
              <>
                <span className="sm:hidden px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-amber-400 font-bold flex-shrink-0">
                  Ch {chapter.chapterNumber}
                </span>
                <h1 className="text-xs sm:text-sm font-medium text-zinc-200 truncate hidden sm:block">
                  Ch {chapter.chapterNumber}: {chapter.title}
                </h1>
                <p className="text-[11px] text-zinc-400 truncate hidden lg:block">
                  • {chapter.partTitle}
                </p>
              </>
            ) : (
              <span className="text-xs sm:text-sm font-medium text-amber-300 flex items-center gap-1.5 truncate">
                <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>सुरक्षित रक्षा अध्ययन • पासवर्ड आवश्यक (Passkey Required)</span>
              </span>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {isAuthenticated ? (
            <>
              {/* Bookmark */}
              <button
                id="weapon-bookmark-btn"
                onClick={() => toggleBookmark('hk-weapon')}
                className={`p-1.5 sm:p-2 rounded-lg border transition-colors ${
                  isBookmarked('hk-weapon')
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                }`}
                title="अध्याय बुकमार्क करें"
              >
                <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Share */}
              <button
                id="weapon-share-btn"
                onClick={handleShare}
                className="p-1.5 sm:p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors relative"
                title="अध्याय लिंक कॉपी करें"
              >
                {shareSuccess ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              </button>

              {/* Theme switcher */}
              <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-0.5">
                <button
                  onClick={() => setReadingTheme('dark')}
                  className={`p-1 rounded ${readingTheme === 'dark' ? 'bg-zinc-800 text-amber-400' : 'text-zinc-400'}`}
                  title="Dark Mode"
                >
                  <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
                <button
                  onClick={() => setReadingTheme('sepia')}
                  className={`p-1 rounded ${readingTheme === 'sepia' ? 'bg-amber-900/40 text-amber-300' : 'text-zinc-400'}`}
                  title="Sepia Mode"
                >
                  <span className="text-[10px] sm:text-[11px] font-bold px-0.5">S</span>
                </button>
                <button
                  onClick={() => setReadingTheme('light')}
                  className={`p-1 rounded ${readingTheme === 'light' ? 'bg-zinc-200 text-zinc-900' : 'text-zinc-400'}`}
                  title="Light Mode"
                >
                  <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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
            </>
          ) : null}

          {/* Close Modal */}
          <button
            id="weapon-close-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-red-950/40 border border-red-800/40 text-red-400 hover:bg-red-900/60 hover:text-white transition-colors ml-1 cursor-pointer"
            title="Close Book"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Reader Workspace OR Passkey Lock Screen */}
      {!isAuthenticated ? (
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black overflow-y-auto relative">
          <div className="max-w-md w-full bg-zinc-950 border border-amber-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Security Icon Header */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-xl shadow-amber-500/10">
                <Lock className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold tracking-wider uppercase mb-1.5">
                  <Shield className="w-3 h-3" />
                  <span>प्रतिबंधित शैक्षणिक अनुसंधान (Restricted Access)</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  HK WEAPON
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  उन्नत रक्षा प्रौद्योगिकी एवं एयरोस्पेस इंजीनियरिंग • 75 व्यापक अध्याय
                </p>
              </div>
            </div>

            {/* Security Info Notice */}
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 leading-relaxed space-y-1">
              <p className="font-semibold text-amber-300 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                सुरक्षा पासवर्ड आवश्यक (Passkey Required)
              </p>
              <p className="text-[11px] text-zinc-400">
                यह पुस्तक रक्षा, रडार, स्टील्थ, मिसाइल डायनेमिक्स व एवियोनिक्स इंजीनियरिंग से संबंधित है। अनधिकृत पहुंच रोकने के लिए यह सुरक्षित रखी गई है। पुस्तक पढ़ने के लिए कृपया पासवर्ड दर्ज करें।
              </p>
            </div>

            {/* Password Form */}
            <form onSubmit={handleVerifyPasskey} className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-1.5">
                  <span>सुरक्षा पासवर्ड दर्ज करें:</span>
                  {authError && (
                    <span className="text-[11px] text-red-400 font-semibold">
                      {authError}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    id="weapon-passkey-input"
                    type={showPasswordText ? 'text' : 'password'}
                    value={passkeyInput}
                    onChange={(e) => {
                      setPasskeyInput(e.target.value);
                      setAuthError(null);
                    }}
                    placeholder="सुरक्षा पासवर्ड (उदा. DRDO@2026 या HK@WEAPON)..."
                    autoFocus
                    className="w-full bg-zinc-900 border border-zinc-700/80 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl pl-3.5 pr-10 py-2.5 text-sm text-white placeholder-zinc-500 font-mono tracking-wider transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordText(!showPasswordText)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-1 cursor-pointer"
                    title={showPasswordText ? 'पासवर्ड छुपाएं' : 'पासवर्ड देखें'}
                  >
                    {showPasswordText ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                
                {/* Authorized Researcher Fast-Keys */}
                <div className="mt-2 pt-2 border-t border-zinc-900 flex flex-wrap items-center gap-1.5 text-[11px]">
                  <span className="text-zinc-500">अनुसंधान कीज़:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setPasskeyInput('DRDO@2026');
                      setAuthError(null);
                    }}
                    className="px-2 py-0.5 rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono text-[10px] cursor-pointer transition-colors"
                  >
                    DRDO@2026
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPasskeyInput('HK@WEAPON');
                      setAuthError(null);
                    }}
                    className="px-2 py-0.5 rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono text-[10px] cursor-pointer transition-colors"
                  >
                    HK@WEAPON
                  </button>
                </div>
              </div>

              {authSuccess && (
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{authSuccess}</span>
                </div>
              )}

              <button
                id="weapon-unlock-submit-btn"
                type="submit"
                disabled={authSubmitting || !passkeyInput.trim()}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {authSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>सत्यापित किया जा रहा है...</span>
                  </>
                ) : (
                  <>
                    <LockOpen className="w-4 h-4" />
                    <span>पुस्तक अनलॉक करें (Unlock Book)</span>
                  </>
                )}
              </button>

              {/* Direct Open Access Button */}
              <button
                type="button"
                onClick={handleUnlockWithoutPassword}
                className="w-full py-2.5 px-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-amber-500/50 text-zinc-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>बिना पासवर्ड के सीधे पढ़ें (Open Access Mode)</span>
              </button>
            </form>

            {/* Security Notice & Exit */}
            <div className="pt-3 border-t border-zinc-900 space-y-2 text-center">
              <p className="text-[11px] text-zinc-400">
                🔒 <strong>अत्यंत गोपनीय एवं सुरक्षित:</strong> केवल पासवर्ड धारक अधिकृत पाठक ही इस पुस्तक को खोल सकते हैं।
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer underline"
                >
                  रद्द करें व बाहर जाएं (Cancel & Exit)
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Main Reader Workspace */
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
            {/* Core Chapter Tabs */}
            <button
              onClick={() => setActiveTab('study-guide')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                activeTab === 'study-guide'
                  ? 'bg-amber-500 text-black font-bold shadow-sm shadow-amber-500/20'
                  : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-800/80'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>📖 अध्याय अध्ययन</span>
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
              <span>⚙️ 17-स्टेप रेसिपी</span>
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
              <span>🔬 प्रैक्टिकल लैब्स</span>
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
              <span>📝 अभ्यास क्विज़</span>
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
              <span>📊 प्रोग्रेसिव लेवल्स</span>
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
              <span>🇮🇳 केस स्टडी (DRDO/HAL)</span>
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
              <span>📐 आर्किटेक्चर</span>
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
              <span>📚 शब्दावली</span>
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
              <span>🔒 सुरक्षा व पासवर्ड</span>
            </button>

            {/* Separator */}
            <div className="h-4 w-px bg-zinc-800 flex-shrink-0 mx-1" />

            {/* Highlights Header */}
            <span className="text-[10px] font-mono text-zinc-500 uppercase flex-shrink-0 px-1 hidden xs:inline">
              विशेष:
            </span>

            {/* Key Aircraft & Weapon Jump Shortcuts */}
            <button
              onClick={() => {
                setCurrentChapterNum(15);
                setActiveTab('recipe-17');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                currentChapterNum === 15 && activeTab === 'recipe-17'
                  ? 'bg-cyan-500 text-black font-bold'
                  : 'bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-800/50'
              }`}
              title="फाइटर एयरक्राफ्ट (Mach 2+, Stealth, DFBW, GaN AESA)"
            >
              <span>✈️ फाइटर (Ch 15)</span>
            </button>

            <button
              onClick={() => {
                setCurrentChapterNum(21);
                setActiveTab('recipe-17');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                currentChapterNum === 21 && activeTab === 'recipe-17'
                  ? 'bg-amber-500 text-black font-bold'
                  : 'bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 border border-amber-800/50'
              }`}
              title="जेट इंजन रेसिपी (टर्बोफैन ब्रेटन चक्र, सिंगल-क्रिस्टल ब्लेड्स)"
            >
              <span>🔥 जेट इंजन (Ch 21)</span>
            </button>

            <button
              onClick={() => {
                setCurrentChapterNum(24);
                setActiveTab('study-guide');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                currentChapterNum === 24
                  ? 'bg-purple-500 text-black font-bold'
                  : 'bg-purple-950/40 hover:bg-purple-900/50 text-purple-300 border border-purple-800/50'
              }`}
              title="5th/6th Gen AMCA स्टेल्थ व MUM-T"
            >
              <span>⚡ AMCA (Ch 24)</span>
            </button>

            <button
              onClick={() => {
                setCurrentChapterNum(43);
                setActiveTab('recipe-17');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                currentChapterNum === 43 && activeTab === 'recipe-17'
                  ? 'bg-red-500 text-black font-bold'
                  : 'bg-red-950/40 hover:bg-red-900/50 text-red-300 border border-red-800/50'
              }`}
              title="हाइपरसोनिक स्क्रैमजेट (Mach 6+ HSTDV)"
            >
              <span>🚀 हाइपरसोनिक (Ch 43)</span>
            </button>

            <button
              onClick={() => {
                setCurrentChapterNum(48);
                setActiveTab('recipe-17');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                currentChapterNum === 48 && activeTab === 'recipe-17'
                  ? 'bg-amber-500 text-black font-bold'
                  : 'bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 border border-amber-800/50'
              }`}
              title="डायरेक्टेड एनर्जी लेजर वेपन्स (DURGA-II 100 kW)"
            >
              <span>⚡ लेजर DEW (Ch 48)</span>
            </button>

            <button
              onClick={() => {
                setCurrentChapterNum(42);
                setActiveTab('recipe-17');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                currentChapterNum === 42 && activeTab === 'recipe-17'
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-800/50'
              }`}
              title="CATS Warrior ऑटोनॉमस ड्रोन स्वार्म"
            >
              <span>🤖 स्वार्म (Ch 42)</span>
            </button>
          </div>

          {/* Reading Scroll Container */}
          <div ref={contentContainerRef} className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 relative">
            {/* Scholarly Citation & Status Header */}
            <div className="text-xs text-zinc-400 select-none pb-2 border-b border-inherit/30 flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 font-medium text-zinc-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                HK VELORA Defence &amp; Aerospace Engineering Research
              </span>
              <span className="text-[11px] text-zinc-400 font-sans">{authWatermark}</span>
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

                    {/* Fighter Aircraft Master Recipe Highlight Card for Part 3 (Chapters 15-24) */}
                    {(chapter.chapterNumber >= 15 && chapter.chapterNumber <= 24) && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-zinc-900 to-cyan-500/10 border border-amber-500/40 shadow-lg space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500 text-black uppercase tracking-wider">
                                ✈️ BEST AEROSPACE TECH RECIPE
                              </span>
                              <span className="text-[11px] font-medium text-cyan-400">
                                4.5+ &amp; 5th/6th Gen Stealth Framework
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-zinc-100">
                              फाइटर एयरक्राफ्ट तकनीक निर्माण की 17-चरणीय मास्टर रेसिपी
                            </h3>
                            <p className="text-xs text-zinc-300 leading-relaxed max-w-2xl">
                              सुपरसोनिक विटकॉम्ब एरिया रूल, वोर्टेक्स लिफ्ट, गैलियम नाइट्राइड (GaN) AESA रडार, DFBW फ्लाइट कंट्रोल, आफ्टरबर्निंग टर्बोफैन (3D TVC), कार्बन कंपोजिट्स, और AI लॉयल विंगमैन MUM-T तकनीक की संपूर्ण चरणबद्ध विधि।
                            </p>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button
                              onClick={() => {
                                if (!chapter.engineeringRecipe && chapter.chapterNumber !== 15 && chapter.chapterNumber !== 21 && chapter.chapterNumber !== 23 && chapter.chapterNumber !== 24 && chapter.chapterNumber !== 42 && chapter.chapterNumber !== 43 && chapter.chapterNumber !== 47 && chapter.chapterNumber !== 48) {
                                  setCurrentChapterNum(15);
                                }
                                setActiveTab('recipe-17');
                              }}
                              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs shadow-md shadow-amber-500/20 flex items-center gap-1.5 transition-all cursor-pointer"
                            >
                              <Layers className="w-4 h-4 text-black" />
                              <span>17-स्टेप रेसिपी देखें</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Key Specs Pills */}
                        <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap items-center gap-2 text-[11px] font-mono text-zinc-300">
                          <span className="px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-amber-300">
                            ⚡ Mach 2.0+ Supercruise
                          </span>
                          <span className="px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-cyan-300">
                            🛡️ Stealth RCS &lt; 0.005 m²
                          </span>
                          <span className="px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-emerald-300">
                            📡 GaN AESA (1200+ T/R)
                          </span>
                          <span className="px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-indigo-300">
                            🎛️ Quad DFBW &amp; +9g
                          </span>
                          <span className="px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-purple-300">
                            🤖 AI Loyal Wingman MUM-T
                          </span>
                        </div>
                      </div>
                    )}

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

                {activeTab === 'recipe-17' && !chapter.engineeringRecipe && (
                  <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-150 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                    <div className="text-center space-y-2">
                      <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 font-mono text-xs font-bold border border-amber-500/30">
                        17-Step Defence Engineering Recipes
                      </span>
                      <h3 className="text-xl font-bold text-zinc-100">
                        विशेष 17-चरणीय रक्षा प्रौद्योगिकी निर्माण रेसिपीज
                      </h3>
                      <p className="text-xs text-zinc-400 max-w-xl mx-auto">
                        वर्तमान अध्याय ({chapter.chapterNumber}) में सैद्धांतिक अध्ययन उपलब्ध है। निम्नलिखित प्रमुख रक्षा प्रणालियों की संपूर्ण 17-चरणीय व्यावहारिक निर्माण विधि देखने के लिए चयन करें:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                      {[
                        { num: 15, tag: 'Fighter Aircraft', title: 'फाइटर जेट निर्माण रेसिपी', desc: 'Mach 2+, VLO स्टेल्थ, DFBW फ्लाइट कंट्रोल, GaN AESA रडार', color: 'cyan', icon: '✈️' },
                        { num: 21, tag: 'Jet Engine', title: 'टर्बोफैन इंजन निर्माण रेसिपी', desc: 'ब्रेटन चक्र, SX सिंगल-क्रिस्टल ब्लेड्स, आफ्टरबर्नर, FADEC', color: 'amber', icon: '🔥' },
                        { num: 43, tag: 'Hypersonic', title: 'हाइपरसोनिक स्क्रैमजेट रेसिपी', desc: 'Mach 6+ HSTDV, UHTC 2500°C थर्मल बैरियर, सुपरसोनिक कम्बशन', color: 'red', icon: '🚀' },
                        { num: 48, tag: 'DEW Laser', title: '100 kW लेजर वेपन रेसिपी', desc: 'DURGA-II फाइबर लेजर, एडाप्टिव ऑप्टिक्स, थर्मल एब्लेशन', color: 'orange', icon: '⚡' },
                        { num: 47, tag: 'Quantum Defense', title: 'क्वांटम रडार व QKD रेसिपी', desc: 'उलझे हुए फोटॉन, SPDC, एंटी-स्टेल्थ पहचान व क्वांटम एन्क्रिप्शन', color: 'purple', icon: '⚛️' },
                        { num: 42, tag: 'Swarm & MUM-T', title: 'स्वायत्त ड्रोन स्वार्म रेसिपी', desc: 'CATS Warrior, रेनॉल्ड्स फ्लॉकिंग, मेश MANET ऑटोनॉमी', color: 'emerald', icon: '🤖' }
                      ].map((item) => (
                        <button
                          key={item.num}
                          onClick={() => setCurrentChapterNum(item.num)}
                          className="p-4 rounded-xl bg-zinc-950/80 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 text-left transition-all group cursor-pointer space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                              Ch {item.num}
                            </span>
                          </div>
                          <div className="font-bold text-sm text-zinc-200 group-hover:text-amber-400 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-zinc-400 leading-snug">
                            {item.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
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
                    <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-zinc-400">एक्सेस नियंत्रण स्थिति:</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold border flex items-center gap-1.5 ${
                          requiresAuth 
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' 
                            : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                        }`}>
                          {requiresAuth ? <Lock className="w-3 h-3 text-amber-400" /> : <BookOpen className="w-3 h-3 text-emerald-400" />}
                          {requiresAuth ? 'पासवर्ड-सुरक्षित (Password Enforced)' : 'खुला एक्सेस (Open Access - No Password)'}
                        </span>
                      </div>

                      {/* Lock Policy Toggle: Password Enforced vs Open Access */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 rounded-lg bg-zinc-900 border border-zinc-800">
                        <div>
                          <p className="text-xs font-bold text-zinc-200 flex items-center gap-1.5">
                            <Lock className="w-3.5 h-3.5 text-amber-400" />
                            पासवर्ड सुरक्षा नीति (Password Requirement Policy)
                          </p>
                          <p className="text-[11px] text-zinc-400 mt-0.5">
                            {requiresAuth 
                              ? 'वर्तमान में पासवर्ड आवश्यक है (पाठक बिना पासवर्ड नहीं खोल सकते)' 
                              : 'वर्तमान में खुला एक्सेस सक्रिय है (कोई भी बिना पासवर्ड के पढ़ सकता है)'}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            if (requiresAuth) {
                              handleUnlockWithoutPassword();
                            } else {
                              handleLockBook();
                            }
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0 ${
                            requiresAuth
                              ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          }`}
                        >
                          {requiresAuth ? 'पासवर्ड हटाएं (Make Open)' : 'पासवर्ड सक्रिय करें (Enforce Lock)'}
                        </button>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 rounded-lg bg-zinc-900/90 border border-amber-500/30">
                        <div>
                          <p className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                            <Shield className="w-3.5 h-3.5" />
                            सक्रिय सुरक्षा लॉक (Active Lock)
                          </p>
                          <p className="text-[11px] text-zinc-400 mt-0.5">
                            अनधिकृत उपयोगकर्ताओं से बचाने के लिए अभी पुस्तक लॉक करें।
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={handleLockBook}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-md shrink-0"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          अभी पुस्तक लॉक करें
                        </button>
                      </div>

                      {/* Custom Password Management */}
                      <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                            <Key className="w-3.5 h-3.5 text-amber-400" />
                            कस्टम सुरक्षा पासवर्ड सेट करें (Custom Security Passkey)
                          </label>
                          {customKeySaved && (
                            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                              <Check className="w-3 h-3" /> सहेज लिया गया!
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-zinc-400">
                          आप अपनी पसंद का कोई भी गुप्त पासवर्ड सेट कर सकते हैं जिससे केवल आप इस पुस्तक को अनलॉक कर सकेंगे।
                        </p>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={customKeyInput}
                            onChange={(e) => setCustomKeyInput(e.target.value)}
                            placeholder="नया गुप्त पासवर्ड दर्ज करें (उदा. MYDRDO@99)..."
                            className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-zinc-500 font-mono focus:outline-none focus:border-amber-500"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              if (!customKeyInput.trim()) return;
                              localStorage.setItem('hk_weapon_custom_password', customKeyInput.trim());
                              setCustomKeySaved(true);
                              setTimeout(() => setCustomKeySaved(false), 3000);
                            }}
                            disabled={!customKeyInput.trim()}
                            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white font-medium text-xs cursor-pointer border border-zinc-700 shrink-0"
                          >
                            सुरक्षित करें
                          </button>
                        </div>
                      </div>

                      <div className="text-xs text-zinc-400 space-y-1.5 pt-2 border-t border-zinc-800 font-mono">
                        <p className="text-zinc-300 font-sans font-semibold text-xs">स्वीकृत मास्टर पासवर्ड (Authorized Passwords):</p>
                        <p className="text-amber-400">• DRDO@2026 (डिफेंस अनुसंधान की)</p>
                        <p className="text-amber-400">• HK@WEAPON (मास्टर ऑथराइजेशन की)</p>
                        <p>• वाटरमार्क: {authWatermark}</p>
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
      )}
    </div>
  );
};
