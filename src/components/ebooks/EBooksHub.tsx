import React, { useState, useMemo } from 'react';
import { EBOOKS_DATA, EBOOK_CATEGORIES } from '../../data/ebooksData';
import { EBookItem } from '../../types';
import { useApp } from '../../context/AppContext';
import { BookCard } from './BookCard';
import { BookDetailsModal } from './BookDetailsModal';
import { EBookReaderModal } from './EBookReaderModal';
import { CheckoutModal } from './CheckoutModal';
import { AuthorModal } from './AuthorModal';
import { BookSubmissionModal } from './BookSubmissionModal';
import { AdminBooksModal } from './AdminBooksModal';
import { BharatvarshReaderModal } from './BharatvarshReaderModal';
import { DirectPaymentModal } from './DirectPaymentModal';
import { BHARATVARSH_EBOOK_ITEM } from '../../data/bharatvarshBookItem';
import { SchoolLibraryView } from './SchoolLibraryView';
import { StoriesLibraryView } from './StoriesLibraryView';
import { PuzzlesLibraryView } from './PuzzlesLibraryView';
import { MyReadingDeskView } from './MyReadingDeskView';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Sparkles, 
  CheckCircle2, 
  Headphones, 
  Bookmark, 
  Star, 
  TrendingUp, 
  Flame, 
  Tag, 
  Settings2, 
  UploadCloud, 
  GraduationCap, 
  ArrowRight,
  RotateCcw,
  BookMarked,
  ShieldCheck,
  Percent,
  Play,
  Feather,
  Puzzle,
  CreditCard,
  QrCode
} from 'lucide-react';

export const EBooksHub: React.FC = () => {
  const { readingProgressMap, isBookUnlocked, activeBookId, setActiveBookId } = useApp();

  // Primary Ecosystem View Tab (Section 74, 84, 87, 101, 102)
  type LibraryViewTab = 'catalog' | 'school' | 'stories' | 'puzzles' | 'desk';
  const [currentViewTab, setCurrentViewTab] = useState<LibraryViewTab>('catalog');

  // Local state for books list (supports admin updates & new submissions)
  const [booksList, setBooksList] = useState<EBookItem[]>(EBOOKS_DATA);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Books');
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [selectedPriceFilter, setSelectedPriceFilter] = useState<'all' | 'free' | 'paid' | 'under99' | '100to499' | 'deals'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'popular' | 'price-asc' | 'price-desc' | 'title'>('rating');

  // Modals state
  const [selectedBookForDetails, setSelectedBookForDetails] = useState<EBookItem | null>(null);
  const [activeReadingBook, setActiveReadingBook] = useState<EBookItem | null>(null);
  const [checkoutBook, setCheckoutBook] = useState<EBookItem | null>(null);
  const [selectedAuthorId, setSelectedAuthorId] = useState<string | null>(null);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showDirectPaymentModal, setShowDirectPaymentModal] = useState(false);

  // Sync external openBook action & URL query param
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const bookParam = params.get('book');
    const chapterParam = params.get('chapter');

    if (bookParam) {
      const target = booksList.find(b => b.id === bookParam || b.slug === bookParam);
      if (target) {
        setActiveReadingBook(target);
        return;
      }
    }

    if (activeBookId) {
      const target = booksList.find(b => b.id === activeBookId);
      if (target) {
        setActiveReadingBook(target);
      }
    }
  }, [activeBookId, booksList]);

  // Active Reading Progress books (Continue Reading Shelf)
  const continueReadingBooks = useMemo(() => {
    return booksList.filter(b => {
      const prog = readingProgressMap[b.id];
      return prog && prog.percentage > 0;
    });
  }, [booksList, readingProgressMap]);

  // Filtered & Sorted books for active search/filters
  const isFilteringActive = searchQuery.trim() !== '' || 
    selectedCategory !== 'All Books' || 
    selectedFormat !== 'All' || 
    selectedPriceFilter !== 'all' || 
    selectedDifficulty !== 'All';

  const filteredBooks = useMemo(() => {
    return booksList.filter(book => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q || (
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        (book.description ? book.description.toLowerCase().includes(q) : false) ||
        (book.shortDescription ? book.shortDescription.toLowerCase().includes(q) : false) ||
        (book.subtitle && book.subtitle.toLowerCase().includes(q)) ||
        book.tags.some(t => t.toLowerCase().includes(q)) ||
        (book.topics && book.topics.some(tp => tp.toLowerCase().includes(q)))
      );

      // Category
      const matchCategory = selectedCategory === 'All Books' || 
        book.category === selectedCategory ||
        (selectedCategory === 'Class 9–12 / School' && (
          book.category === 'Class 9–12 / School' ||
          book.schoolClass === 'Class 9' || book.schoolClass === 'Class 10' || book.schoolClass === 'Class 11' || book.schoolClass === 'Class 12' ||
          book.tags.some(t => t.toLowerCase().includes('class 9') || t.toLowerCase().includes('class 10') || t.toLowerCase().includes('class 11') || t.toLowerCase().includes('class 12'))
        )) ||
        (selectedCategory === 'Competitive Exams' && (
          book.category === 'Competitive Exams' || 
          book.tags.some(t => t.toLowerCase().includes('competitive') || t.toLowerCase().includes('exam') || t.toLowerCase().includes('upsc') || t.toLowerCase().includes('ssc') || t.toLowerCase().includes('railway') || t.toLowerCase().includes('ctet')) ||
          book.schoolClass === 'Competitive'
        )) ||
        (selectedCategory === 'Middle School (Class 6–8)' && (
          book.category === 'Middle School (Class 6–8)' ||
          book.schoolClass === 'Class 6' || book.schoolClass === 'Class 7' || book.schoolClass === 'Class 8'
        )) ||
        (selectedCategory === 'Business & Self-Help' && (
          book.category === 'Business & Self-Help' || book.category === 'Business & Startups' || book.category === 'Self-Help & Mindset'
        ));

      // Format
      const matchFormat = selectedFormat === 'All' || 
        (selectedFormat === 'Audio Books' && book.hasAudioBook) ||
        (selectedFormat === 'Handbooks' && book.bookType === 'Handbook') ||
        (selectedFormat === 'Guides' && book.bookType === 'Guide') ||
        (selectedFormat === 'E-Books' && book.bookType === 'E-Book');

      // Price filter
      const matchPrice = selectedPriceFilter === 'all' ||
        (selectedPriceFilter === 'free' && book.isFree) ||
        (selectedPriceFilter === 'paid' && !book.isFree) ||
        (selectedPriceFilter === 'under99' && !book.isFree && book.price <= 99) ||
        (selectedPriceFilter === '100to499' && !book.isFree && book.price >= 100) ||
        (selectedPriceFilter === 'deals' && (book.discountPercentage || 0) > 0);

      // Difficulty
      const matchDifficulty = selectedDifficulty === 'All' || 
        book.difficulty === selectedDifficulty || 
        book.difficulty === 'All Levels';

      return matchQuery && matchCategory && matchFormat && matchPrice && matchDifficulty;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popular') return (b.reviewCount || 0) - (a.reviewCount || 0);
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return a.title.localeCompare(b.title);
    });
  }, [booksList, searchQuery, selectedCategory, selectedFormat, selectedPriceFilter, selectedDifficulty, sortBy]);

  // Curated collections
  const trendingBooks = useMemo(() => booksList.filter(b => b.trending), [booksList]);
  const freeBooks = useMemo(() => booksList.filter(b => b.isFree), [booksList]);
  const paidBooks = useMemo(() => booksList.filter(b => !b.isFree), [booksList]);
  const audioBooks = useMemo(() => booksList.filter(b => b.hasAudioBook), [booksList]);
  const studentPicks = useMemo(() => booksList.filter(b => b.studentPick), [booksList]);
  const aiBooks = useMemo(() => booksList.filter(b => b.category === 'Artificial Intelligence'), [booksList]);
  const codingBooks = useMemo(() => booksList.filter(b => b.category === 'Coding & Programming'), [booksList]);
  const dealsBooks = useMemo(() => booksList.filter(b => (b.discountPercentage || 0) > 0), [booksList]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Books');
    setSelectedFormat('All');
    setSelectedPriceFilter('all');
    setSelectedDifficulty('All');
    setSortBy('rating');
  };

  const handleUpdateBook = (updated: EBookItem) => {
    setBooksList(prev => prev.map(b => b.id === updated.id ? updated : b));
  };

  const handleAddNewBook = (newB: EBookItem) => {
    setBooksList(prev => [newB, ...prev]);
  };

  return (
    <div id="ebooks-hub-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      {/* 1. Header & Branding */}
      <div className="relative rounded-3xl bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 border border-indigo-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold">
              <BookMarked className="w-4 h-4" />
              <span>HK Tech World Original Publications • Authored by Hariom Kushwaha</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight leading-tight">
              📚 HK VELORA Knowledge Vault
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Complete, deeply explained handbooks written by <strong>Hariom Kushwaha (HK Tech World)</strong> & Academic Experts. Over 500+ comprehensive books spanning Technology, School (Classes 6–12), College Engineering, Competitive Exams, Literature, and Brain Puzzles.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                <BookOpen className="w-4 h-4" />
                {booksList.length}+ Total Books in Library
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                School & Heritage (100% Free)
              </span>
              <span className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                <CreditCard className="w-4 h-4 text-indigo-400" />
                Pro & Engineering (₹49 – ₹499)
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Headphones className="w-4 h-4" />
                Audio Book Narrations
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setShowDirectPaymentModal(true)}
              className="py-2.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all border border-emerald-400/30"
            >
              <QrCode className="w-4 h-4" />
              <span>UPI Payment & Support (PNB)</span>
            </button>

            <button
              onClick={() => setShowSubmissionModal(true)}
              className="py-2.5 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all"
            >
              <UploadCloud className="w-4 h-4" />
              <span>Submit Book / Guide</span>
            </button>

            <button
              onClick={() => setShowAdminModal(true)}
              className="py-2.5 px-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Settings2 className="w-4 h-4" />
              <span>Library Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Top-Level Library Ecosystem Navigation Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 overflow-x-auto scrollbar-none shadow-md">
        <button
          onClick={() => setCurrentViewTab('school')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            currentViewTab === 'school'
              ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/25'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-indigo-300" />
          <span>School Library</span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
            Class 9–12
          </span>
        </button>

        <button
          onClick={() => setCurrentViewTab('stories')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            currentViewTab === 'stories'
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-500/25'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Feather className="w-4 h-4 text-amber-300" />
          <span>Stories & Literature</span>
        </button>

        <button
          onClick={() => setCurrentViewTab('puzzles')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            currentViewTab === 'puzzles'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/25'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Puzzle className="w-4 h-4 text-purple-300" />
          <span>Puzzles & Brain Gym</span>
        </button>

        <button
          onClick={() => setCurrentViewTab('catalog')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            currentViewTab === 'catalog'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>All Books & Tech Vault</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-white/20 text-white">
            {booksList.length} Books
          </span>
        </button>

        <button
          onClick={() => setCurrentViewTab('desk')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            currentViewTab === 'desk'
              ? 'bg-slate-800 text-white shadow-md border border-slate-700'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Bookmark className="w-4 h-4 text-cyan-400" />
          <span>My Reading Desk</span>
          {continueReadingBooks.length > 0 && (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300">
              {continueReadingBooks.length}
            </span>
          )}
        </button>
      </div>

      {/* Subview Renders */}
      {currentViewTab === 'school' && (
        <SchoolLibraryView
          books={booksList}
          onOpenDetails={(b) => setSelectedBookForDetails(b)}
          onStartReading={(b) => setActiveReadingBook(b)}
          onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
        />
      )}

      {currentViewTab === 'stories' && (
        <StoriesLibraryView
          books={booksList}
          onOpenDetails={(b) => setSelectedBookForDetails(b)}
          onStartReading={(b) => setActiveReadingBook(b)}
          onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
        />
      )}

      {currentViewTab === 'puzzles' && (
        <PuzzlesLibraryView
          books={booksList}
          onOpenDetails={(b) => setSelectedBookForDetails(b)}
          onStartReading={(b) => setActiveReadingBook(b)}
          onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
        />
      )}

      {currentViewTab === 'desk' && (
        <MyReadingDeskView
          books={booksList}
          onOpenDetails={(b) => setSelectedBookForDetails(b)}
          onStartReading={(b) => setActiveReadingBook(b)}
          onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
          onNavigateToSchool={() => setCurrentViewTab('school')}
        />
      )}

      {/* 3. Complete Catalog Content (Rendered when active tab is 'catalog') */}
      {currentViewTab === 'catalog' && (
        <div className="space-y-10 animate-fadeIn">
          {/* Continue Reading Shelf (If user has reading progress) */}
      {continueReadingBooks.length > 0 && !isFilteringActive && (
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Play className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-extrabold text-base text-slate-100">⚡ Continue Reading</h3>
                <p className="text-xs text-slate-400">Pick up right where you left off</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {continueReadingBooks.map(book => {
              const prog = readingProgressMap[book.id];
              return (
                <div
                  key={book.id}
                  onClick={() => setActiveReadingBook(book)}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/40 transition-all cursor-pointer flex items-center gap-4 group"
                >
                  <div className={`w-14 h-16 rounded-xl bg-gradient-to-br ${book.coverGradient} p-1.5 flex flex-col justify-between text-white shrink-0 shadow-sm`}>
                    <span className="text-[8px] font-bold uppercase">{book.bookType || 'E-Book'}</span>
                    <span className="text-[9px] font-mono">{prog?.percentage || 0}%</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-200 group-hover:text-cyan-300 truncate">
                      {book.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 truncate">
                      Chapter {(prog?.currentChapterIndex || 0) + 1} of {book.tableOfContents.length}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="bg-cyan-400 h-full rounded-full transition-all duration-300"
                        style={{ width: `${prog?.percentage || 0}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-800 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 text-slate-400 transition-colors shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Featured National Masterwork Banner: भारतवर्ष: सभ्यता, साम्राज्य और महान व्यक्तित्व */}
      {!isFilteringActive && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-950/70 via-slate-900 to-slate-950 border border-amber-500/40 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-amber-500/15 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" /> राष्ट्रीय महाग्रंथ (Flagship National Masterwork)
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  18 भाग • 160 अध्याय
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800">
                  100% Free & Open Access
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-extrabold text-white font-serif tracking-tight leading-tight">
                भारतवर्ष: सभ्यता, साम्राज्य और महान व्यक्तित्व
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                प्राचीन सिंधु-सरस्वती सभ्यता, वैदिक काल, मौर्य व गुप्त साम्राज्य, दक्षिण भारतीय महाशक्तियां, छत्रपति शिवाजी महाराज, महाराणा प्रताप, नेताजी सुभाष चंद्र बोस, 1857 से 1947 का स्वतंत्रता संग्राम, महान वैज्ञानिक एवं आधुनिक भारत का 19-सेक्शन प्रामाणिक अकादमिक इतिहास।
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-[11px] text-slate-400 font-semibold">त्वरित अध्याय (Smart Jump):</span>
                <button
                  onClick={() => {
                    const url = new URL(window.location.href);
                    url.searchParams.set('tab', 'ebooks');
                    url.searchParams.set('book', 'bharatvarsh-maha-granth');
                    url.searchParams.set('chapter', '44');
                    window.history.replaceState({}, '', url.toString());
                    setActiveReadingBook(BHARATVARSH_EBOOK_ITEM);
                  }}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition-colors flex items-center gap-1"
                >
                  👑 Ch 44: छत्रपति शिवाजी महाराज
                </button>
                <button
                  onClick={() => {
                    const url = new URL(window.location.href);
                    url.searchParams.set('tab', 'ebooks');
                    url.searchParams.set('book', 'bharatvarsh-maha-granth');
                    url.searchParams.set('chapter', '48');
                    window.history.replaceState({}, '', url.toString());
                    setActiveReadingBook(BHARATVARSH_EBOOK_ITEM);
                  }}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition-colors flex items-center gap-1"
                >
                  ⚔️ महाराणा प्रताप
                </button>
                <button
                  onClick={() => {
                    const url = new URL(window.location.href);
                    url.searchParams.set('tab', 'ebooks');
                    url.searchParams.set('book', 'bharatvarsh-maha-granth');
                    url.searchParams.set('chapter', '11');
                    window.history.replaceState({}, '', url.toString());
                    setActiveReadingBook(BHARATVARSH_EBOOK_ITEM);
                  }}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition-colors flex items-center gap-1"
                >
                  📜 Ch 11: आचार्य चाणक्य व अर्थशास्त्र
                </button>
                <button
                  onClick={() => {
                    const url = new URL(window.location.href);
                    url.searchParams.set('tab', 'ebooks');
                    url.searchParams.set('book', 'bharatvarsh-maha-granth');
                    url.searchParams.set('chapter', '96');
                    window.history.replaceState({}, '', url.toString());
                    setActiveReadingBook(BHARATVARSH_EBOOK_ITEM);
                  }}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition-colors flex items-center gap-1"
                >
                  🇮🇳 नेताजी सुभाष चंद्र बोस
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => setActiveReadingBook(BHARATVARSH_EBOOK_ITEM)}
                className="px-6 py-3.5 rounded-2xl font-extrabold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-slate-950 shadow-xl shadow-orange-950/40 hover:shadow-orange-950/60 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <BookOpen className="w-4 h-4 text-slate-950" />
                <span>संपूर्ण ग्रंथ पढ़ें (160 अध्याय)</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => setSelectedBookForDetails(BHARATVARSH_EBOOK_ITEM)}
                className="px-5 py-3 rounded-2xl font-bold text-xs bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/60 text-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>अनुक्रमणिका एवं विस्तृत विवरण</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Search Bar & Multi-Filter Control Panel */}
      <div className="space-y-4">
        {/* Search & Sort Row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books: 'भारतवर्ष', 'Shivaji', 'Maharana Pratap', 'Python', 'AI', 'DSA'..."
              className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm rounded-2xl bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 px-2 py-1 text-[10px] text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-3 px-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold focus:outline-none focus:border-indigo-500"
            >
              <option value="rating">Sort: Highest Rated ⭐</option>
              <option value="popular">Sort: Most Popular 🔥</option>
              <option value="price-asc">Sort: Price (Low to High)</option>
              <option value="price-desc">Sort: Price (High to Low)</option>
              <option value="title">Sort: Title (A - Z)</option>
            </select>

            {isFilteringActive && (
              <button
                onClick={handleResetFilters}
                className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="Reset all filters"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills (Horizontally Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {EBOOK_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick Filter Tags (Format, Price, Difficulty) */}
        <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
          {/* Format pills */}
          <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800">
            {['All', 'E-Books', 'Audio Books', 'Handbooks', 'Guides'].map(fmt => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  selectedFormat === fmt
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>

          {/* Price pills */}
          <div className="inline-flex flex-wrap rounded-xl bg-slate-900 p-1 border border-slate-800 gap-1">
            {[
              { id: 'all', label: 'All Prices' },
              { id: 'free', label: `100% Free (₹0) [${freeBooks.length}]` },
              { id: 'paid', label: `Pro Books (₹49–₹499) [${paidBooks.length}]` },
              { id: 'under99', label: '₹49 – ₹99' },
              { id: '100to499', label: '₹100 – ₹499 (Advanced)' },
              { id: 'deals', label: 'Deals & 50% Off' }
            ].map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPriceFilter(p.id as any)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  selectedPriceFilter === p.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Difficulty pills */}
          <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map(diff => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  selectedDifficulty === diff
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Display Content: Filtered Grid vs Curated Shelves */}
      {isFilteringActive ? (
        /* Filtered Grid View */
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Showing <strong className="text-slate-200">{filteredBooks.length}</strong> matching books</span>
            <button
              onClick={handleResetFilters}
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Reset Filters
            </button>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  onOpenDetails={(b) => setSelectedBookForDetails(b)}
                  onStartReading={(b) => setActiveReadingBook(b)}
                  onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-200">No books found matching your criteria</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Try searching for different keywords or reset your category and price filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Curated Shelves View */
        <div className="space-y-12">
          {/* Shelf 1: Trending Books */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl font-bold text-slate-100">🔥 Trending Technical Books</h2>
              </div>
              <button
                onClick={() => setSelectedPriceFilter('all')}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {trendingBooks.slice(0, 4).map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  onOpenDetails={(b) => setSelectedBookForDetails(b)}
                  onStartReading={(b) => setActiveReadingBook(b)}
                  onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
                />
              ))}
            </div>
          </div>

          {/* Shelf 2: 100% Free Open-Access Books */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/25 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-100">🆓 100% Free School, Stories & Heritage Books</h2>
                  <p className="text-xs text-slate-400">Zero cost, open-access textbooks for Class 6–12, history of Bharatvarsh, and Hindi classics</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPriceFilter('free')}
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>All Free ({freeBooks.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {freeBooks.slice(0, 4).map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  onOpenDetails={(b) => setSelectedBookForDetails(b)}
                  onStartReading={(b) => setActiveReadingBook(b)}
                  onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
                />
              ))}
            </div>
          </div>

          {/* Shelf 2.5: Pro Tech & Engineering Courses (₹49 to ₹499) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-100">💎 Pro Handbooks & Advanced Engineering (₹49 – ₹499)</h2>
                  <p className="text-xs text-slate-400">Comprehensive guides for Full-Stack, High-Level AI, Competitive Exams, and DevOps with PNB UPI instant unlock</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPriceFilter('paid')}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 shrink-0"
              >
                <span>View All Pro ({paidBooks.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paidBooks.slice(0, 4).map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  onOpenDetails={(b) => setSelectedBookForDetails(b)}
                  onStartReading={(b) => setActiveReadingBook(b)}
                  onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
                />
              ))}
            </div>
          </div>

          {/* Shelf 3: Artificial Intelligence & Machine Learning */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl font-bold text-slate-100">🤖 Artificial Intelligence & Generative Models</h2>
              </div>
              <button
                onClick={() => setSelectedCategory('Artificial Intelligence')}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
              >
                <span>View All AI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiBooks.map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  onOpenDetails={(b) => setSelectedBookForDetails(b)}
                  onStartReading={(b) => setActiveReadingBook(b)}
                  onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
                />
              ))}
            </div>
          </div>

          {/* Shelf 4: Student Picks & College Handbooks */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-bold text-slate-100">🎓 Student Picks & College Handbooks</h2>
              </div>
              <button
                onClick={() => setSelectedCategory('Student & Education')}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
              >
                <span>View All Student</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {studentPicks.slice(0, 4).map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  onOpenDetails={(b) => setSelectedBookForDetails(b)}
                  onStartReading={(b) => setActiveReadingBook(b)}
                  onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
                />
              ))}
            </div>
          </div>

          {/* Shelf 5: Audio Book Editions */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-cyan-500/25 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-100">🎧 Audio Book Editions</h2>
                  <p className="text-xs text-slate-400">Listen while you commute, code, or revise concepts</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedFormat('Audio Books')}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>All Audio Books ({audioBooks.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {audioBooks.map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  onOpenDetails={(b) => setSelectedBookForDetails(b)}
                  onStartReading={(b) => setActiveReadingBook(b)}
                  onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
                />
              ))}
            </div>
          </div>

          {/* Shelf 6: Deals & Special Discounts */}
          {dealsBooks.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Percent className="w-5 h-5 text-rose-400" />
                  <h2 className="text-xl font-bold text-slate-100">💰 Deals & Limited-Time Discounts</h2>
                </div>
                <button
                  onClick={() => setSelectedPriceFilter('deals')}
                  className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1"
                >
                  <span>View All Deals</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {dealsBooks.slice(0, 4).map(book => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onOpenDetails={(b) => setSelectedBookForDetails(b)}
                    onStartReading={(b) => setActiveReadingBook(b)}
                    onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Shelf 7: All Comprehensive Catalog Exploration Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                  <h2 className="text-xl font-bold text-slate-100">📖 Complete Academic, Tech & College Library</h2>
                </div>
                <p className="text-xs text-slate-400">
                  Browse the comprehensive collection of {booksList.length} verified handbooks, school courses, college engineering textbooks, and competitive exam guides.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-bold font-mono">
                  {booksList.length} Books Active
                </span>
                <button
                  onClick={() => setSearchQuery(' ')}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20"
                >
                  View Full Grid ({booksList.length})
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {booksList.slice(0, 8).map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  onOpenDetails={(b) => setSelectedBookForDetails(b)}
                  onStartReading={(b) => setActiveReadingBook(b)}
                  onOpenAuthor={(aId) => setSelectedAuthorId(aId)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
        </div>
      )}

      {/* MODALS */}
      {/* 1. Book Details Modal */}
      {selectedBookForDetails && (
        <BookDetailsModal
          book={selectedBookForDetails}
          onClose={() => setSelectedBookForDetails(null)}
          onStartReading={(b) => {
            setSelectedBookForDetails(null);
            setActiveReadingBook(b);
          }}
          onOpenCheckout={(b) => {
            setSelectedBookForDetails(null);
            setCheckoutBook(b);
          }}
          onOpenAuthor={(aId) => {
            setSelectedAuthorId(aId);
          }}
        />
      )}

      {/* 2. Interactive Chapter Reader Modal */}
      {activeReadingBook && activeReadingBook.id === 'bharatvarsh-maha-granth' ? (
        <BharatvarshReaderModal
          initialChapterNumber={
            (() => {
              const urlCh = new URLSearchParams(window.location.search).get('chapter');
              if (urlCh && !isNaN(parseInt(urlCh, 10))) {
                const parsed = parseInt(urlCh, 10);
                if (parsed >= 1 && parsed <= 160) return parsed;
              }
              return (readingProgressMap['bharatvarsh-maha-granth']?.currentChapterIndex || 0) + 1;
            })()
          }
          onClose={() => {
            setActiveReadingBook(null);
            setActiveBookId(null);
            // Clean URL
            const url = new URL(window.location.href);
            url.searchParams.delete('book');
            url.searchParams.delete('chapter');
            window.history.replaceState({}, '', url.toString());
          }}
        />
      ) : activeReadingBook ? (
        <EBookReaderModal
          book={activeReadingBook}
          onClose={() => {
            setActiveReadingBook(null);
            setActiveBookId(null);
          }}
        />
      ) : null}

      {/* 3. Secure Checkout Modal */}
      {checkoutBook && (
        <CheckoutModal
          book={checkoutBook}
          onClose={() => setCheckoutBook(null)}
          onPurchaseComplete={(b) => {
            setCheckoutBook(null);
            setActiveReadingBook(b);
          }}
        />
      )}

      {/* 4. Author Modal */}
      {selectedAuthorId && (
        <AuthorModal
          authorId={selectedAuthorId}
          onClose={() => setSelectedAuthorId(null)}
          onSelectBook={(b) => setSelectedBookForDetails(b)}
        />
      )}

      {/* 5. Book Submission Modal */}
      {showSubmissionModal && (
        <BookSubmissionModal
          onClose={() => setShowSubmissionModal(false)}
          onSubmitSuccess={(draft) => {
            // Option to add draft
            console.log('Submitted draft:', draft);
          }}
        />
      )}

      {/* 6. Admin Books Modal */}
      {showAdminModal && (
        <AdminBooksModal
          booksList={booksList}
          onClose={() => setShowAdminModal(false)}
          onUpdateBook={handleUpdateBook}
          onAddNewBook={handleAddNewBook}
        />
      )}

      {/* 7. Direct UPI & PNB Payment Modal */}
      {showDirectPaymentModal && (
        <DirectPaymentModal
          onClose={() => setShowDirectPaymentModal(false)}
        />
      )}
    </div>
  );
};
