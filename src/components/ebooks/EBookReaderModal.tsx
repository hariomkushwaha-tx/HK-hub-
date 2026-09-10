import React, { useState, useEffect } from 'react';
import { EBookItem } from '../../types';
import { useApp } from '../../context/AppContext';
import { copyToClipboard } from '../../utils/clipboard';
import { getChapterDetails, EnrichedChapter } from '../../utils/ebooksContent';
import { 
  X, 
  BookOpen, 
  Download, 
  ExternalLink, 
  Bookmark, 
  Sparkles, 
  Copy, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Type, 
  Sun, 
  Moon, 
  Share2,
  FileText,
  Lightbulb,
  Code2,
  ListOrdered,
  HelpCircle,
  Award,
  CheckCircle2,
  RefreshCw,
  Send,
  MessageSquare,
  Globe,
  Maximize2,
  Minimize2,
  Search,
  Eye
} from 'lucide-react';

interface EBookReaderModalProps {
  book: EBookItem | null;
  onClose: () => void;
}

type ReaderTab = 'study-guide' | 'ai-tutor' | 'quiz' | 'external-source' | 'puzzles';

export const EBookReaderModal: React.FC<EBookReaderModalProps> = ({ book, onClose }) => {
  const { isBookmarked, toggleBookmark, saveReadingProgress, getReadingProgress } = useApp();
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<ReaderTab>('study-guide');
  const [readingTheme, setReadingTheme] = useState<'dark' | 'sepia' | 'light'>('dark');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [copiedNote, setCopiedNote] = useState<string | null>(null);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioPlaybackSpeed, setAudioPlaybackSpeed] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDistractionFree, setIsDistractionFree] = useState(false);
  const [showMobileToc, setShowMobileToc] = useState(false);
  const [searchInsideQuery, setSearchInsideQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);

  // Puzzle Solver State
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [solvedPuzzles, setSolvedPuzzles] = useState<Record<string, boolean>>({});

  // AI Tutor State
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiChatHistory, setAiChatHistory] = useState<{ role: 'user' | 'assistant'; text: string }[]>([]);

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    if (!book) return;
    const savedProg = getReadingProgress(book.id);
    const initialIndex = savedProg ? Math.min(savedProg.currentChapterIndex, Math.max(0, book.tableOfContents.length - 1)) : 0;
    setSelectedChapterIndex(initialIndex);
    setActiveTab('study-guide');
    setAiChatHistory([]);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setIsPlayingAudio(false);
  }, [book?.id]);

  useEffect(() => {
    if (!book) return;
    // Save progress in AppContext
    const totalChapters = book.tableOfContents.length || 1;
    const progressPercent = Math.min(100, Math.round(((selectedChapterIndex + 1) / totalChapters) * 100));
    saveReadingProgress({
      bookId: book.id,
      currentChapterIndex: selectedChapterIndex,
      currentChapterTitle: book.tableOfContents[selectedChapterIndex] || `Chapter ${selectedChapterIndex + 1}`,
      percentage: progressPercent,
      lastReadTime: 'Just now',
      totalChapters
    });
    // Reset chapter quiz state when chapter changes
    setQuizAnswers({});
    setQuizSubmitted(false);
  }, [selectedChapterIndex, book?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!book) return;
      if (e.key === 'ArrowRight' && selectedChapterIndex < (book.tableOfContents.length - 1)) {
        setSelectedChapterIndex(prev => prev + 1);
      }
      if (e.key === 'ArrowLeft' && selectedChapterIndex > 0) {
        setSelectedChapterIndex(prev => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [book, selectedChapterIndex, onClose]);

  if (!book) return null;

  const currentChapter: EnrichedChapter = getChapterDetails(book, selectedChapterIndex);

  const handleCopyText = async (text: string, id: string) => {
    await copyToClipboard(text);
    setCopiedNote(id);
    setTimeout(() => setCopiedNote(null), 2000);
  };

  const handleShareBook = async () => {
    const shareText = `Check out "${book.title}" by ${book.author} on HK VELORA!\nFree access & AI chapter tutor: ${window.location.href}`;
    await copyToClipboard(shareText);
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 2000);
  };

  const handleAskAi = async (customPrompt?: string) => {
    const query = customPrompt || aiQuestion.trim();
    if (!query) return;

    const userMessage = { role: 'user' as const, text: query };
    setAiChatHistory(prev => [...prev, userMessage]);
    if (!customPrompt) setAiQuestion('');
    setAiLoading(true);

    try {
      const res = await fetch('/api/ai/assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'concept',
          topic: `${book.title} - ${currentChapter.title}: ${query}`,
          context: `Book: ${book.title} by ${book.author}. Chapter: ${currentChapter.title}. Category: ${book.category}. Chapter Summary: ${currentChapter.summary}`
        })
      });
      const data = await res.json();
      const reply = data.reply || data.result || 'No explanation generated.';
      setAiChatHistory(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch (err: any) {
      setAiChatHistory(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          text: `⚠️ HK VELORA AI: Unable to connect to learning engine. Please review the high-yield study notes and code examples in the Study Guide tab!` 
        }
      ]);
    } finally {
      setAiLoading(false);
    }
  };

  const handleSelectQuizOption = (qIdx: number, optIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const calculateQuizScore = () => {
    if (!currentChapter.quiz) return { correct: 0, total: 0 };
    let correct = 0;
    currentChapter.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.answerIndex) correct++;
    });
    return { correct, total: currentChapter.quiz.length };
  };

  // Theme styling rules
  const themeClasses = {
    dark: 'bg-slate-950 text-slate-100 border-slate-800',
    sepia: 'bg-[#fbf0d9] text-[#2c221e] border-[#e2d0b5]',
    light: 'bg-white text-slate-900 border-slate-200'
  };

  const headerTheme = {
    dark: 'bg-slate-900/95 border-slate-800',
    sepia: 'bg-[#f4e4c7]/95 border-[#e2d0b5]',
    light: 'bg-slate-100/95 border-slate-200'
  };

  const sidebarTheme = {
    dark: 'bg-slate-900/60 border-slate-800',
    sepia: 'bg-[#f4e4c7]/60 border-[#e2d0b5]',
    light: 'bg-slate-50 border-slate-200'
  };

  const cardTheme = {
    dark: 'bg-slate-900/80 border-slate-800',
    sepia: 'bg-[#f4e4c7]/90 border-[#e2d0b5]',
    light: 'bg-slate-50 border-slate-200'
  };

  const contentClasses = {
    dark: 'text-slate-300',
    sepia: 'text-[#43342d]',
    light: 'text-slate-700'
  };

  const fontSizeClass = {
    sm: 'text-xs sm:text-sm leading-relaxed',
    base: 'text-sm sm:text-base leading-relaxed',
    lg: 'text-base sm:text-lg leading-relaxed'
  };

  const bookmarked = isBookmarked(book.id);

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-label={`Reading: ${book.title}`}
      className={`fixed inset-0 z-50 flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-2 sm:p-4 md:p-6'} bg-black/85 backdrop-blur-md overflow-hidden`}
    >
      <div 
        className={`relative w-full ${isFullscreen ? 'h-screen max-w-none rounded-none' : 'max-w-6xl h-[95vh] rounded-3xl'} border shadow-2xl flex flex-col overflow-hidden transition-all duration-200 ${themeClasses[readingTheme]}`}
      >
        {/* Top Header Bar */}
        <div className={`p-3 sm:p-4 border-b flex items-center justify-between gap-2 sm:gap-3 ${headerTheme[readingTheme]}`}>
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-indigo-600 text-white shrink-0 shadow-sm">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase font-bold px-1.5 sm:px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400">
                  {book.category}
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 hidden xs:inline">
                  {book.pages} Pages
                </span>
              </div>
              <h2 className="text-xs sm:text-base font-black truncate text-slate-100 dark:text-slate-100 leading-tight">
                {book.title}
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate">By {book.author}</p>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Mobile TOC Button */}
            <button
              onClick={() => setShowMobileToc(true)}
              className="md:hidden px-2.5 py-1.5 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 hover:text-white flex items-center gap-1 text-xs font-semibold transition-colors"
              title="Table of Contents"
              aria-label="Open Table of Contents"
            >
              <ListOrdered className="w-3.5 h-3.5" />
              <span>{selectedChapterIndex + 1}/{book.tableOfContents.length}</span>
            </button>

            {/* Search Inside Chapter */}
            <button
              onClick={() => setShowSearchInput(!showSearchInput)}
              className={`p-1.5 sm:p-2 rounded-xl border transition-colors ${showSearchInput ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-800/70 border-slate-700 text-slate-300 hover:text-white'}`}
              title="Search Inside Book"
              aria-label="Search inside chapter"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Distraction-Free Toggle (Desktop) */}
            <button
              onClick={() => setIsDistractionFree(!isDistractionFree)}
              className={`p-2 rounded-xl border transition-colors hidden md:flex items-center gap-1 text-xs ${isDistractionFree ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-800/70 border-slate-700 text-slate-300 hover:text-white'}`}
              title={isDistractionFree ? 'Show Table of Contents' : 'Distraction-Free Focus Mode'}
              aria-label="Toggle focus mode"
            >
              <Eye className="w-4 h-4" />
              <span>{isDistractionFree ? 'Show TOC' : 'Focus'}</span>
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="hidden sm:flex p-2 rounded-xl bg-slate-800/70 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Reader'}
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Reading Theme Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-black/10 dark:bg-slate-800/80 border border-slate-700/50">
              <button 
                onClick={() => setReadingTheme('dark')}
                title="Dark Theme"
                className={`p-1 sm:p-1.5 rounded-lg text-xs transition-colors ${readingTheme === 'dark' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setReadingTheme('sepia')}
                title="Sepia Paper Theme"
                className={`p-1 sm:p-1.5 rounded-lg text-xs transition-colors ${readingTheme === 'sepia' ? 'bg-amber-700 text-white' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <span className="text-xs font-serif font-bold px-0.5">S</span>
              </button>
              <button 
                onClick={() => setReadingTheme('light')}
                title="Light Theme"
                className={`p-1 sm:p-1.5 rounded-lg text-xs transition-colors ${readingTheme === 'light' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Font Size Adjust (Desktop/Tablet) */}
            <div className="hidden md:flex items-center p-1 rounded-xl bg-black/10 dark:bg-slate-800/80 border border-slate-700/50">
              <button 
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 rounded text-xs ${fontSize === 'sm' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                title="Small Font"
              >
                A-
              </button>
              <button 
                onClick={() => setFontSize('base')}
                className={`px-2 py-1 rounded text-xs ${fontSize === 'base' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                title="Default Font"
              >
                A
              </button>
              <button 
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 rounded text-xs ${fontSize === 'lg' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                title="Large Font"
              >
                A+
              </button>
            </div>

            {/* Bookmark */}
            <button
              onClick={() => toggleBookmark(book.id)}
              className={`p-1.5 sm:p-2 rounded-xl border transition-colors ${
                bookmarked 
                  ? 'bg-pink-600 text-white border-pink-500' 
                  : 'bg-slate-800/70 border-slate-700 text-slate-300 hover:text-white'
              }`}
              title={bookmarked ? 'Remove Bookmark' : 'Save Book to My Space'}
            >
              <Bookmark className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${bookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Download / Open External Edition (Tablet/Desktop) */}
            <a
              href={book.downloadUrl || book.readOnlineUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold items-center gap-1.5 transition-colors shadow-sm"
              title="Download PDF or Open Official Site"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">PDF</span>
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              title="Close Reader"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Quick Chapter Strip */}
        <div className={`md:hidden px-3 py-2 border-b flex items-center justify-between gap-2 ${headerTheme[readingTheme]}`}>
          <button
            onClick={() => setShowMobileToc(true)}
            className="flex-1 flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-left transition-colors text-xs text-slate-200"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="px-1.5 py-0.5 rounded bg-indigo-600 text-white font-mono font-bold text-[10px] shrink-0">
                Ch {selectedChapterIndex + 1}
              </span>
              <span className="truncate font-semibold text-slate-100">
                {book.tableOfContents[selectedChapterIndex]?.replace(/^\d+\.\s*/, '')}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-indigo-400 font-semibold shrink-0 ml-2">
              <span>All ({book.tableOfContents.length})</span>
              <ListOrdered className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Search Inside Drawer */}
        {showSearchInput && (
          <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center gap-3 animate-fade-in">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchInsideQuery}
              onChange={(e) => setSearchInsideQuery(e.target.value)}
              placeholder="Search keyword, formula, or concept in this chapter..."
              className="flex-1 bg-transparent text-xs text-slate-200 placeholder:text-slate-500 outline-none"
              autoFocus
            />
            {searchInsideQuery && (
              <button
                onClick={() => setSearchInsideQuery('')}
                className="text-[11px] text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        )}

        {/* Navigation Tabs Bar for Active Chapter */}
        <div className={`px-4 sm:px-6 py-2.5 border-b flex items-center justify-between gap-4 ${headerTheme[readingTheme]}`}>
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar text-xs">
            <button
              onClick={() => setActiveTab('study-guide')}
              className={`px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'study-guide'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Chapter Study Guide</span>
            </button>

            <button
              onClick={() => setActiveTab('ai-tutor')}
              className={`px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'ai-tutor'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>AI Doubt Solver</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'quiz'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Chapter Quiz ({currentChapter.quiz?.length || 3})</span>
            </button>

            <button
              onClick={() => setActiveTab('external-source')}
              className={`px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'external-source'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Web / PDF Link</span>
            </button>

            {book.puzzleItems && book.puzzleItems.length > 0 && (
              <button
                onClick={() => setActiveTab('puzzles')}
                className={`px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'puzzles'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-purple-300 hover:text-purple-100 hover:bg-purple-950/40'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-yellow-300" />
                <span>Interactive Puzzles ({book.puzzleItems.length})</span>
              </button>
            )}
          </div>

          <span className="text-[11px] font-mono text-slate-400 hidden lg:inline">
            Chapter {selectedChapterIndex + 1} of {book.tableOfContents.length}
          </span>
        </div>

        {/* Reader Body: Sidebar + Main Content */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* Desktop Table of Contents Sidebar */}
          {!isDistractionFree && (
            <aside className={`hidden md:flex md:w-72 lg:w-80 border-r flex-col shrink-0 overflow-hidden ${sidebarTheme[readingTheme]}`}>
              <div className="p-3 border-b border-inherit flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <ListOrdered className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Table of Contents</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                  {book.tableOfContents.length} ch
                </span>
              </div>

              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {book.tableOfContents.map((ch, idx) => {
                  const isSelected = idx === selectedChapterIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedChapterIndex(idx);
                        // keep activeTab intact so they can stay on quiz or AI tab if desired
                      }}
                      className={`w-full text-left p-2.5 rounded-xl text-xs font-medium transition-colors flex items-start gap-2.5 ${
                        isSelected
                          ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      <span className="font-mono opacity-70 text-[10px] mt-0.5 px-1 rounded bg-black/20">
                        {idx + 1}
                      </span>
                      <span className="line-clamp-2 leading-relaxed">
                        {ch.replace(/^\d+\.\s*/, '')}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Quick Meta Footer in Sidebar */}
              <div className="p-3 border-t border-inherit space-y-1.5 text-[11px] text-slate-400">
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="font-semibold text-emerald-400">{book.format}</span>
                </div>
                <div className="flex justify-between">
                  <span>Difficulty:</span>
                  <span className="font-semibold text-indigo-300">{book.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span>Publisher:</span>
                  <span className="font-semibold text-slate-300 truncate max-w-[140px]">{book.publisher || 'Open Access'}</span>
                </div>
              </div>
            </aside>
          )}

          {/* Main Reading Viewport */}
          <main className="flex-1 overflow-y-auto p-3.5 sm:p-6 md:p-8 space-y-6 sm:space-y-8 min-w-0 w-full">
            {searchInsideQuery && (
              <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs flex items-center justify-between animate-fade-in">
                <span>Filtering in chapter for keyword: <strong>"{searchInsideQuery}"</strong></span>
                <button
                  onClick={() => setSearchInsideQuery('')}
                  className="px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-white font-semibold transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            )}
            {/* 1. STUDY GUIDE TAB */}
            {activeTab === 'study-guide' && (
              <div className="space-y-8">
                {/* Chapter Title & Header */}
                <div className="space-y-3 pb-6 border-b border-inherit">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{currentChapter.title}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveTab('ai-tutor')}
                        className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Ask AI About Chapter</span>
                      </button>
                      <button
                        onClick={() => handleCopyText(`${currentChapter.title}\n\n${currentChapter.summary}\n\nKey Takeaways:\n${(currentChapter.keyPoints || []).join('\n')}`, 'ch_full')}
                        className="p-1.5 rounded-lg border border-inherit hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1"
                        title="Copy study notes"
                      >
                        {copiedNote === 'ch_full' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight">
                    {currentChapter.title}
                  </h1>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentChapter.coreConcepts.map((concept, idx) => (
                      <span key={idx} className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
                        {concept}
                      </span>
                    ))}
                  </div>

                  <p className={`${fontSizeClass[fontSize]} ${contentClasses[readingTheme]} pt-3`}>
                    {currentChapter.summary}
                  </p>
                </div>

                {/* Key Points / High-Yield Concepts */}
                {currentChapter.keyPoints && currentChapter.keyPoints.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-400" />
                      <span>High-Yield Key Takeaways & Exam Concepts</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {currentChapter.keyPoints.map((point, idx) => (
                        <div 
                          key={idx}
                          className={`p-4 rounded-2xl border flex items-start gap-3.5 ${cardTheme[readingTheme]}`}
                        >
                          <span className="w-6 h-6 rounded-full bg-indigo-600/20 text-indigo-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className={`text-xs sm:text-sm leading-relaxed ${contentClasses[readingTheme]}`}>
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Code Snippet Box (if applicable) */}
                {currentChapter.codeSnippet && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Code2 className="w-4 h-4 text-cyan-400" />
                        <span>Interactive Implementation Example</span>
                      </span>
                      <button
                        onClick={() => handleCopyText(currentChapter.codeSnippet!, 'code')}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors"
                      >
                        {copiedNote === 'code' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono overflow-x-auto leading-relaxed">
                      <code>{currentChapter.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {/* Viva / Technical Interview Questions */}
                {currentChapter.vivaQuestions && currentChapter.vivaQuestions.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-purple-400" />
                      <span>Viva & Technical Interview Questions</span>
                    </h3>
                    <div className="space-y-3">
                      {currentChapter.vivaQuestions.map((viva, idx) => (
                        <div key={idx} className={`p-4 rounded-2xl border space-y-2 ${cardTheme[readingTheme]}`}>
                          <p className="text-xs sm:text-sm font-bold text-indigo-400 flex items-start gap-2">
                            <span className="font-mono">Q{idx + 1}.</span>
                            <span>{viva.q}</span>
                          </p>
                          <p className={`text-xs sm:text-sm pl-6 leading-relaxed ${contentClasses[readingTheme]}`}>
                            <strong className="text-slate-200 dark:text-slate-200">Answer: </strong>
                            {viva.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Book-level Study Notes & Memory Tricks */}
                {book.studyNotes && book.studyNotes.length > 0 && (
                  <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/25 space-y-3">
                    <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Author & Faculty Study Notes</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {book.studyNotes.map((note, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-indigo-400 font-bold">•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* 2. AI TUTOR TAB */}
            {activeTab === 'ai-tutor' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900 border border-indigo-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase">
                    <Sparkles className="w-4 h-4" />
                    <span>HK VELORA AI TUTOR — {currentChapter.title}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Ask doubts about this chapter in English or Hindi
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Have trouble understanding a concept, mathematical formula, or algorithm? Ask HK VELORA AI Tutor to break it down using everyday analogies or step-by-step proofs.
                  </p>

                  {/* Quick Prompt Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      'Explain this chapter in simple Hinglish',
                      'Summarize into 3 exam bullet points',
                      'Give 3 real-world software engineering examples',
                      'What are common student mistakes in this topic?'
                    ].map((promptText, i) => (
                      <button
                        key={i}
                        onClick={() => handleAskAi(promptText)}
                        className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 hover:text-white border border-slate-700 text-xs transition-colors"
                      >
                        ⚡ {promptText}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chat History */}
                <div className="space-y-4">
                  {aiChatHistory.length === 0 ? (
                    <div className="text-center py-10 text-slate-500 text-xs space-y-2">
                      <MessageSquare className="w-8 h-8 text-slate-600 mx-auto" />
                      <p>Type your question below or click any quick prompt above to begin.</p>
                    </div>
                  ) : (
                    aiChatHistory.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-4 rounded-2xl border ${
                          msg.role === 'user'
                            ? 'bg-indigo-600/20 border-indigo-500/40 ml-8 text-slate-100'
                            : 'bg-slate-900/90 border-slate-800 mr-8 text-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                            {msg.role === 'user' ? 'You' : 'HK VELORA AI Tutor'}
                          </span>
                          {msg.role === 'assistant' && (
                            <button
                              onClick={() => handleCopyText(msg.text, `ai_msg_${i}`)}
                              className="text-xs text-slate-400 hover:text-slate-200"
                            >
                              {copiedNote === `ai_msg_${i}` ? 'Copied!' : 'Copy'}
                            </button>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                          {msg.text}
                        </p>
                      </div>
                    ))
                  )}

                  {aiLoading && (
                    <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mr-8 flex items-center gap-3 text-xs text-indigo-300">
                      <div className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin shrink-0" />
                      <span>HK VELORA AI is formulating your answer...</span>
                    </div>
                  )}
                </div>

                {/* Input Bar */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleAskAi();
                  }}
                  className="flex gap-2 pt-2"
                >
                  <input
                    type="text"
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    placeholder={`Ask a question about ${currentChapter.title}...`}
                    className="flex-1 px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    disabled={!aiQuestion.trim() || aiLoading}
                    className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Ask</span>
                  </button>
                </form>
              </div>
            )}

            {/* 3. CHAPTER QUIZ TAB */}
            {activeTab === 'quiz' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
                      <Award className="w-4 h-4" />
                      <span>Chapter Knowledge Check</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      Practice Questions: {currentChapter.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Test your retention on this chapter's key algorithms, system patterns, and exam principles.
                    </p>
                  </div>

                  {quizSubmitted && (
                    <div className="p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-center shrink-0">
                      <div className="text-lg font-black text-indigo-300">
                        {calculateQuizScore().correct} / {calculateQuizScore().total}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">Score Achieved</div>
                    </div>
                  )}
                </div>

                {/* Questions List */}
                <div className="space-y-6">
                  {(currentChapter.quiz || []).map((q, qIdx) => {
                    const selectedOpt = quizAnswers[qIdx];
                    const isCorrect = selectedOpt === q.answerIndex;

                    return (
                      <div key={qIdx} className={`p-5 rounded-2xl border space-y-4 ${cardTheme[readingTheme]}`}>
                        <h4 className="text-sm font-bold flex items-start gap-2">
                          <span className="text-indigo-400 font-mono">Q{qIdx + 1}.</span>
                          <span>{q.question}</span>
                        </h4>

                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => {
                            const isChosen = selectedOpt === optIdx;
                            let optionClass = 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-slate-500';

                            if (quizSubmitted) {
                              if (optIdx === q.answerIndex) {
                                optionClass = 'bg-emerald-950/60 border-emerald-500/80 text-emerald-200 font-semibold';
                              } else if (isChosen && !isCorrect) {
                                optionClass = 'bg-rose-950/60 border-rose-500/80 text-rose-200';
                              } else {
                                optionClass = 'opacity-50 border-transparent';
                              }
                            } else if (isChosen) {
                              optionClass = 'bg-indigo-600/30 border-indigo-500 text-indigo-200 font-semibold';
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={quizSubmitted}
                                onClick={() => handleSelectQuizOption(qIdx, optIdx)}
                                className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between gap-3 ${optionClass}`}
                              >
                                <span className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center font-mono text-[10px]">
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span>{opt}</span>
                                </span>

                                {quizSubmitted && optIdx === q.answerIndex && (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {quizSubmitted && (
                          <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 text-xs text-slate-300 space-y-1">
                            <span className="font-bold text-indigo-300">Explanation:</span>
                            <p>{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Quiz Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-inherit">
                  {!quizSubmitted ? (
                    <button
                      onClick={() => setQuizSubmitted(true)}
                      className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      Submit Answers & Check Score
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setQuizAnswers({});
                        setQuizSubmitted(false);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Retake Chapter Quiz</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* 4. EXTERNAL SOURCE & PDF PORTAL TAB */}
            {activeTab === 'external-source' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
                    <Globe className="w-4 h-4" />
                    <span>Official Open Access Book Portal</span>
                  </div>
                  <h3 className="text-xl font-black text-white">{book.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    This book is licensed under open academic and Creative Commons / community frameworks. You can read the original full edition directly from the author's official portal or download the complete PDF for offline reading.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <a
                      href={book.downloadUrl || book.readOnlineUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center justify-between transition-colors shadow-lg shadow-indigo-950/30"
                    >
                      <div className="flex items-center gap-3">
                        <Download className="w-5 h-5" />
                        <div className="text-left">
                          <div>Download Full Book PDF</div>
                          <div className="text-[10px] opacity-80">{book.pages} pages • {book.format}</div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <a
                      href={book.readOnlineUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-xs flex items-center justify-between border border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-emerald-400" />
                        <div className="text-left">
                          <div>Read Live on Official Portal</div>
                          <div className="text-[10px] text-slate-400">Published by {book.publisher || 'Open Access'}</div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Additional Publisher Information */}
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Book Attribution & License</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
                    <div>
                      <span className="block text-slate-500 text-[10px]">Author:</span>
                      <strong className="text-slate-200">{book.author}</strong>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-[10px]">Year / Edition:</span>
                      <strong className="text-slate-200">{book.yearPublished || 'Latest Edition'}</strong>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-[10px]">Difficulty Level:</span>
                      <strong className="text-slate-200">{book.difficulty}</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. INTERACTIVE PUZZLES & BRAIN GYM TAB */}
            {activeTab === 'puzzles' && book.puzzleItems && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/40 border border-purple-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
                      <Lightbulb className="w-4 h-4 text-yellow-400" />
                      <span>Interactive Brain Gym • {book.puzzleItems.length} Puzzles Included</span>
                    </div>
                    <span className="text-xs font-mono text-purple-300">
                      Solved: {Object.keys(solvedPuzzles).length}/{book.puzzleItems.length}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                    Step-by-Step Logic, Riddles & Thinking Challenges
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Test your problem-solving abilities without peeking at answers immediately! Reveal hints when stuck and review thorough mathematical and conceptual explanations.
                  </p>
                </div>

                <div className="space-y-4">
                  {book.puzzleItems.map((puzzle, pIdx) => {
                    const isHintOpen = !!revealedHints[puzzle.id];
                    const isSolutionOpen = !!revealedSolutions[puzzle.id];
                    const isSolved = !!solvedPuzzles[puzzle.id];

                    return (
                      <div
                        key={puzzle.id || pIdx}
                        className={`p-5 rounded-2xl border transition-all ${
                          isSolved
                            ? 'bg-purple-950/20 border-purple-500/40'
                            : 'bg-slate-900/90 border-slate-800'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-300 text-xs font-bold flex items-center justify-center">
                              {pIdx + 1}
                            </span>
                            <span className="text-xs font-bold text-slate-300">Puzzle #{pIdx + 1}</span>
                            {puzzle.difficulty && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-400 border border-slate-700">
                                {puzzle.difficulty}
                              </span>
                            )}
                          </div>

                          <button
                            onClick={() => setSolvedPuzzles(prev => ({ ...prev, [puzzle.id]: !isSolved }))}
                            className={`px-3 py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                              isSolved
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>{isSolved ? 'Solved! 🎉' : 'Mark Solved'}</span>
                          </button>
                        </div>

                        <p className="text-sm font-medium text-slate-100 py-2 leading-relaxed">
                          {puzzle.question}
                        </p>

                        {/* Hint Section */}
                        {puzzle.hint && (
                          <div className="mt-3">
                            <button
                              onClick={() => setRevealedHints(prev => ({ ...prev, [puzzle.id]: !isHintOpen }))}
                              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
                            >
                              <Lightbulb className="w-3.5 h-3.5" />
                              <span>{isHintOpen ? 'Hide Clue' : '💡 Need a Clue / Hint?'}</span>
                            </button>
                            {isHintOpen && (
                              <div className="mt-2 p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 animate-fadeIn">
                                <strong>Hint:</strong> {puzzle.hint}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Solution & Explanation */}
                        <div className="mt-4 pt-3 border-t border-slate-800/80">
                          <button
                            onClick={() => setRevealedSolutions(prev => ({ ...prev, [puzzle.id]: !isSolutionOpen }))}
                            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{isSolutionOpen ? 'Hide Solution' : '🔍 Reveal Answer & Explanation'}</span>
                          </button>

                          {isSolutionOpen && (
                            <div className="mt-3 p-4 rounded-xl bg-slate-950 border border-purple-500/30 space-y-2 animate-fadeIn">
                              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>Answer: {puzzle.answer}</span>
                              </div>
                              {puzzle.explanation && (
                                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                                  <strong>How it works:</strong> {puzzle.explanation}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Chapter Navigation Bar */}
            <div className="pt-6 border-t border-inherit flex items-center justify-between gap-2 sm:gap-4">
              <button
                disabled={selectedChapterIndex === 0}
                onClick={() => {
                  setSelectedChapterIndex(prev => Math.max(0, prev - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-slate-200 text-xs font-semibold flex items-center gap-1 sm:gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Ch</span>
              </button>

              <span className="text-xs text-slate-400 hidden sm:inline font-medium">
                Tip: Use keyboard arrow keys ← → to navigate chapters
              </span>

              <button
                disabled={selectedChapterIndex >= (book.tableOfContents.length - 1)}
                onClick={() => {
                  setSelectedChapterIndex(prev => Math.min(book.tableOfContents.length - 1, prev + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-30 disabled:pointer-events-none text-white text-xs font-semibold flex items-center gap-1 sm:gap-1.5 transition-colors shadow-xs"
              >
                <span>Next Ch</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </main>
        </div>

        {/* Mobile Slide-Up Table of Contents Modal/Sheet */}
        {showMobileToc && (
          <div className="fixed inset-0 z-[70] md:hidden flex flex-col justify-end bg-black/80 backdrop-blur-xs animate-fade-in">
            {/* Backdrop Tap to Close */}
            <div 
              className="flex-1" 
              onClick={() => setShowMobileToc(false)} 
              aria-label="Close Table of Contents backdrop"
            />

            {/* Sheet Container */}
            <div className={`max-h-[82vh] flex flex-col rounded-t-3xl border-t shadow-2xl overflow-hidden ${themeClasses[readingTheme]}`}>
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-indigo-600/20 text-indigo-400">
                    <ListOrdered className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-100">Table of Contents</h3>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {book.tableOfContents.length} Chapters in this edition
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowMobileToc(false)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close Table of Contents"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {book.tableOfContents.map((ch, idx) => {
                  const isSelected = idx === selectedChapterIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedChapterIndex(idx);
                        setShowMobileToc(false);
                      }}
                      className={`w-full text-left p-3 rounded-2xl text-xs font-medium transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-indigo-600 text-white font-semibold shadow-md'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60 bg-slate-900/40 border border-slate-800/50'
                      }`}
                    >
                      <span className={`font-mono text-[11px] px-2 py-0.5 rounded shrink-0 mt-0.5 ${isSelected ? 'bg-black/20 text-white font-bold' : 'bg-slate-800 text-slate-400'}`}>
                        {idx + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="leading-snug">{ch.replace(/^\d+\.\s*/, '')}</div>
                        {isSelected && (
                          <span className="text-[10px] text-indigo-200 mt-1 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                            Currently Reading
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-3 border-t text-[11px] text-slate-400 flex items-center justify-between bg-black/20">
                <span>Format: <strong className="text-emerald-400">{book.format}</strong></span>
                <span>Level: <strong className="text-indigo-300">{book.difficulty}</strong></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
