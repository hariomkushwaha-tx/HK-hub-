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
  Play
} from 'lucide-react';

export const EBooksHub: React.FC = () => {
  const { readingProgressMap, isBookUnlocked, activeBookId, setActiveBookId } = useApp();

  // Local state for books list (supports admin updates & new submissions)
  const [booksList, setBooksList] = useState<EBookItem[]>(EBOOKS_DATA);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Books');
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [selectedPriceFilter, setSelectedPriceFilter] = useState<'all' | 'free' | 'under99' | 'deals'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'popular' | 'price-asc' | 'price-desc' | 'title'>('rating');

  // Modals state
  const [selectedBookForDetails, setSelectedBookForDetails] = useState<EBookItem | null>(null);
  const [activeReadingBook, setActiveReadingBook] = useState<EBookItem | null>(null);
  const [checkoutBook, setCheckoutBook] = useState<EBookItem | null>(null);
  const [selectedAuthorId, setSelectedAuthorId] = useState<string | null>(null);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);

  // Sync external openBook action
  React.useEffect(() => {
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
        book.description.toLowerCase().includes(q) ||
        (book.subtitle && book.subtitle.toLowerCase().includes(q)) ||
        book.tags.some(t => t.toLowerCase().includes(q)) ||
        (book.topics && book.topics.some(tp => tp.toLowerCase().includes(q)))
      );

      // Category
      const matchCategory = selectedCategory === 'All Books' || book.category === selectedCategory;

      // Format
      const matchFormat = selectedFormat === 'All' || 
        (selectedFormat === 'Audio Books' && book.hasAudioBook) ||
        (selectedFormat === 'Handbooks' && book.bookType === 'Handbook') ||
        (selectedFormat === 'Guides' && book.bookType === 'Guide') ||
        (selectedFormat === 'E-Books' && book.bookType === 'E-Book');

      // Price filter
      const matchPrice = selectedPriceFilter === 'all' ||
        (selectedPriceFilter === 'free' && book.isFree) ||
        (selectedPriceFilter === 'under99' && !book.isFree && book.price <= 99) ||
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
              <span>HK HUB Digital Library & Knowledge Vault</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight leading-tight">
              📚 HK HUB Digital Library
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Technology, AI, Coding, Digital Skills and Student Knowledge — all in one library. Read verified academic handbooks, listen to audio editions, and test your skills with in-app AI tutors.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                100% Free Open-Access Books Available
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Headphones className="w-4 h-4" />
                Audio Book Narrations
              </span>
              <span className="flex items-center gap-1.5 text-indigo-400">
                <Sparkles className="w-4 h-4" />
                Interactive Chapter Reader & Quiz
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
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

      {/* 2. Continue Reading Shelf (If user has reading progress) */}
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
              placeholder="Search books by title, author, topic, or keyword (e.g. Python, Big-O, RAG, Viva)..."
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
          <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800">
            {[
              { id: 'all', label: 'All Prices' },
              { id: 'free', label: '100% Free (₹0)' },
              { id: 'under99', label: 'Under ₹99' },
              { id: 'deals', label: 'Deals & Discounts' }
            ].map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPriceFilter(p.id as any)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  selectedPriceFilter === p.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
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
                  <h2 className="text-xl font-bold text-slate-100">🆓 100% Free & Open-Access Textbooks</h2>
                  <p className="text-xs text-slate-400">Zero cost, verified open-source textbooks and computer science fundamentals</p>
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
      {activeReadingBook && (
        <EBookReaderModal
          book={activeReadingBook}
          onClose={() => {
            setActiveReadingBook(null);
            setActiveBookId(null);
          }}
        />
      )}

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
    </div>
  );
};
