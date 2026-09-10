import React, { useState, useMemo } from 'react';
import { EBookItem } from '../../types';
import { SCHOOL_CLASSES_CONFIG, SchoolClassConfig, StreamConfig } from '../../data/educationStructure';
import { useApp } from '../../context/AppContext';
import { BookCard } from './BookCard';
import { 
  GraduationCap, 
  BookOpen, 
  Compass, 
  Filter, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  Tag, 
  Atom, 
  Briefcase, 
  Landmark, 
  RotateCcw,
  Clock,
  Play,
  Bookmark,
  Wrench,
  HelpCircle,
  FileCheck
} from 'lucide-react';

interface SchoolLibraryViewProps {
  books: EBookItem[];
  onOpenDetails: (book: EBookItem) => void;
  onStartReading: (book: EBookItem) => void;
  onOpenAuthor: (authorId: string) => void;
}

export const SchoolLibraryView: React.FC<SchoolLibraryViewProps> = ({
  books,
  onOpenDetails,
  onStartReading,
  onOpenAuthor
}) => {
  const { readingProgressMap, openTool, openGuide } = useApp();

  // Navigation State
  const [selectedClassId, setSelectedClassId] = useState<'All' | 'Class 9' | 'Class 10' | 'Class 11' | 'Class 12'>('All');
  const [selectedStreamId, setSelectedStreamId] = useState<'All' | 'Science' | 'Commerce' | 'Humanities / Arts'>('All');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedBookType, setSelectedBookType] = useState<string>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedPrice, setSelectedPrice] = useState<'all' | 'free' | 'paid'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'rating' | 'popular' | 'title' | 'pages'>('rating');

  // Find current class config if selected
  const activeClassConfig = useMemo(() => {
    return SCHOOL_CLASSES_CONFIG.find(c => c.id === selectedClassId) || null;
  }, [selectedClassId]);

  // Compute available subjects for the selected class & stream
  const availableSubjects = useMemo(() => {
    if (!activeClassConfig) {
      // Gather all subjects across all classes
      const allSubs = new Set<string>();
      SCHOOL_CLASSES_CONFIG.forEach(c => {
        c.subjects?.forEach(s => allSubs.add(s.name));
        c.streams?.forEach(st => st.subjects.forEach(s => allSubs.add(s.name)));
      });
      return Array.from(allSubs).sort();
    }

    if (!activeClassConfig.hasStreams) {
      return activeClassConfig.subjects?.map(s => s.name) || [];
    }

    // Has streams (Class 11, 12)
    if (selectedStreamId === 'All') {
      const subs = new Set<string>();
      activeClassConfig.streams?.forEach(st => st.subjects.forEach(s => subs.add(s.name)));
      return Array.from(subs).sort();
    } else {
      const stream = activeClassConfig.streams?.find(st => st.id === selectedStreamId);
      return stream?.subjects.map(s => s.name) || [];
    }
  }, [activeClassConfig, selectedStreamId]);

  // Filter school books
  const filteredSchoolBooks = useMemo(() => {
    return books.filter(b => {
      // Must be a school book or student pick
      const isSchoolBook = b.schoolClass || b.category === 'Student & Education' || b.tags.some(t => t.toLowerCase().includes('class'));
      if (!isSchoolBook) return false;

      // Search Query
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q || (
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        (b.description ? b.description.toLowerCase().includes(q) : false) ||
        (b.shortDescription ? b.shortDescription.toLowerCase().includes(q) : false) ||
        (b.subject && b.subject.toLowerCase().includes(q)) ||
        (b.schoolClass && b.schoolClass.toLowerCase().includes(q)) ||
        (b.stream && b.stream.toLowerCase().includes(q)) ||
        b.tags.some(t => t.toLowerCase().includes(q)) ||
        (b.topics && b.topics.some(tp => tp.toLowerCase().includes(q)))
      );

      // Class Filter
      const matchClass = selectedClassId === 'All' || b.schoolClass === selectedClassId;

      // Stream Filter
      const matchStream = selectedStreamId === 'All' || !b.stream || b.stream === selectedStreamId;

      // Subject Filter
      const matchSubject = selectedSubject === 'All' || 
        (b.subject && b.subject.toLowerCase().includes(selectedSubject.toLowerCase())) ||
        b.tags.some(t => t.toLowerCase().includes(selectedSubject.toLowerCase()));

      // Book Type
      const matchBookType = selectedBookType === 'All' || b.bookType === selectedBookType;

      // Language
      const matchLanguage = selectedLanguage === 'All' || 
        (selectedLanguage === 'Hindi' && (b.language?.includes('Hindi') || b.language?.includes('हिंदी'))) ||
        (selectedLanguage === 'English' && b.language?.includes('English')) ||
        (selectedLanguage === 'Bilingual' && b.language?.includes('Bilingual'));

      // Difficulty
      const matchDifficulty = selectedDifficulty === 'All' || b.difficulty === selectedDifficulty || b.difficulty === 'All Levels';

      // Price
      const matchPrice = selectedPrice === 'all' || (selectedPrice === 'free' && b.isFree) || (selectedPrice === 'paid' && !b.isFree);

      return matchQuery && matchClass && matchStream && matchSubject && matchBookType && matchLanguage && matchDifficulty && matchPrice;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popular') return (b.reviewCount || 0) - (a.reviewCount || 0);
      if (sortBy === 'pages') return b.pages - a.pages;
      return a.title.localeCompare(b.title);
    });
  }, [books, searchQuery, selectedClassId, selectedStreamId, selectedSubject, selectedBookType, selectedLanguage, selectedDifficulty, selectedPrice, sortBy]);

  // Last active student book (for quick shortcut)
  const lastActiveStudentBook = useMemo(() => {
    const studentBooks = books.filter(b => b.schoolClass);
    return studentBooks.find(b => {
      const p = readingProgressMap[b.id];
      return p && p.percentage > 0;
    }) || studentBooks[0] || null;
  }, [books, readingProgressMap]);

  const handleResetFilters = () => {
    setSelectedClassId('All');
    setSelectedStreamId('All');
    setSelectedSubject('All');
    setSelectedBookType('All');
    setSelectedLanguage('All');
    setSelectedDifficulty('All');
    setSelectedPrice('all');
    setSearchQuery('');
    setSortBy('rating');
  };

  const handleSelectClass = (cId: 'Class 9' | 'Class 10' | 'Class 11' | 'Class 12') => {
    setSelectedClassId(cId);
    setSelectedStreamId('All');
    setSelectedSubject('All');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. School Library Header Banner */}
      <div className="relative rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 border border-indigo-500/25 p-6 sm:p-8 shadow-xl overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 tracking-wide uppercase">
                <GraduationCap className="w-3.5 h-3.5" />
                HK VELORA School Library
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3 h-3" />
                100% Copyright-Safe OER Resources
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Class 9–12 Digital Education Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Curriculum-aligned textbook summaries, formula decks, exemplars, and chapter revision guides. 
              Discover your class, choose your stream, and master concepts with zero pirated content.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-indigo-300">
                <BookOpen className="w-3.5 h-3.5" />
                Class 9, 10, 11 & 12
              </span>
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Compass className="w-3.5 h-3.5" />
                Science, Commerce & Humanities
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Bilingual (Hindi + English)
              </span>
            </div>
          </div>

          {/* Quick Continue Reading Shortcut if user has history */}
          {lastActiveStudentBook && (
            <div className="shrink-0 w-full sm:w-auto p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 shadow-md flex items-center gap-3">
              <div className={`w-12 h-14 rounded-xl bg-gradient-to-br ${lastActiveStudentBook.coverGradient} p-1 text-white flex flex-col justify-between shrink-0 shadow-sm text-center`}>
                <span className="text-[7px] font-bold uppercase">{lastActiveStudentBook.schoolClass || 'School'}</span>
                <BookOpen className="w-4 h-4 mx-auto text-white/90" />
                <span className="text-[8px] font-mono">
                  {readingProgressMap[lastActiveStudentBook.id]?.percentage || 0}%
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                  Quick Resume
                </span>
                <p className="text-xs font-bold text-slate-200 line-clamp-1 max-w-[180px]">
                  {lastActiveStudentBook.title}
                </p>
                <button
                  onClick={() => onStartReading(lastActiveStudentBook)}
                  className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] flex items-center gap-1 transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Continue</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. Prominent Class Selection Cards (Section 74 & 83) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Select Your Class</span>
          </h2>
          {selectedClassId !== 'All' && (
            <button
              onClick={() => setSelectedClassId('All')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              View All Classes
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {SCHOOL_CLASSES_CONFIG.map(cls => {
            const isSelected = selectedClassId === cls.id;
            return (
              <button
                key={cls.id}
                onClick={() => handleSelectClass(cls.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between h-36 sm:h-40 group relative overflow-hidden ${
                  isSelected
                    ? 'bg-indigo-950/80 border-indigo-500 shadow-lg shadow-indigo-500/20 scale-[1.02]'
                    : 'bg-slate-900/80 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-xl text-xs font-extrabold ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {cls.badge}
                  </span>
                  <GraduationCap className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                    isSelected ? 'text-indigo-400' : 'text-slate-500'
                  }`} />
                </div>

                <div>
                  <h3 className={`font-extrabold text-sm sm:text-base leading-tight ${
                    isSelected ? 'text-white' : 'text-slate-200'
                  }`}>
                    {cls.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {cls.hindiTitle}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-800/80">
                  <span className="text-slate-400">
                    {cls.hasStreams ? '3 Streams' : `${cls.subjects?.length || 7} Subjects`}
                  </span>
                  <span className={`flex items-center gap-0.5 font-bold ${
                    isSelected ? 'text-indigo-400' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Stream Selector (For Class 11 & 12) (Section 77 & 78) */}
      {activeClassConfig && activeClassConfig.hasStreams && (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Choose Stream for {selectedClassId}</span>
            </span>
            {selectedStreamId !== 'All' && (
              <button
                onClick={() => setSelectedStreamId('All')}
                className="text-xs text-slate-400 hover:text-slate-200"
              >
                Clear Stream Filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'Science', name: 'Science (PCM / PCB)', icon: Atom, desc: 'Physics, Chemistry, Math & Biology' },
              { id: 'Commerce', name: 'Commerce', icon: Briefcase, desc: 'Accountancy, Business Studies & Economics' },
              { id: 'Humanities / Arts', name: 'Humanities & Arts', icon: Landmark, desc: 'History, Political Science & Geography' }
            ].map(stream => {
              const Icon = stream.icon;
              const isSelected = selectedStreamId === stream.id;
              return (
                <button
                  key={stream.id}
                  onClick={() => {
                    setSelectedStreamId(stream.id as any);
                    setSelectedSubject('All');
                  }}
                  className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                    isSelected
                      ? 'bg-indigo-950/70 border-indigo-500 shadow-sm'
                      : 'bg-slate-950 hover:bg-slate-800/80 border-slate-800'
                  }`}
                >
                  <div className={`p-2 rounded-xl shrink-0 ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-100">{stream.name}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{stream.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Subject Selector Strip (Section 75 & 76) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-semibold text-slate-300 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-indigo-400" />
            <span>Subjects:</span>
          </span>
          {selectedSubject !== 'All' && (
            <button
              onClick={() => setSelectedSubject('All')}
              className="text-indigo-400 hover:text-indigo-300"
            >
              Show All Subjects
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedSubject('All')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedSubject === 'All'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Subjects
          </button>
          {availableSubjects.map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedSubject === sub
                  ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Comprehensive School Filters & Search Panel (Section 79 & 80) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search school books by title, chapter, topic, or syllabus keywords (e.g. Trigonometry, Ohm's Law, Cell)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-medium focus:outline-none focus:border-indigo-500"
            >
              <option value="rating">Sort: Highest Rated ⭐</option>
              <option value="popular">Sort: Most Popular 🔥</option>
              <option value="pages">Sort: Page Count</option>
              <option value="title">Sort: Title (A - Z)</option>
            </select>

            <button
              onClick={handleResetFilters}
              className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="Reset all filters"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Detailed Secondary Filters: Book Type, Language, Difficulty, Price */}
        <div className="flex flex-wrap items-center gap-2 text-xs pt-1 border-t border-slate-800/80">
          {/* Book Types */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 px-2 font-bold uppercase">Type:</span>
            {['All', 'Textbook', 'Study Guide', 'Revision Book', 'Handbook', 'Practice Book'].map(t => (
              <button
                key={t}
                onClick={() => setSelectedBookType(t)}
                className={`px-2 py-1 rounded-lg text-[11px] font-medium transition-all ${
                  selectedBookType === t
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Language Filter (Section 91) */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 px-2 font-bold uppercase">Language:</span>
            {['All', 'Bilingual', 'Hindi', 'English'].map(lang => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-2 py-1 rounded-lg text-[11px] font-medium transition-all ${
                  selectedLanguage === lang
                    ? 'bg-cyan-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Price Filter */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 px-2 font-bold uppercase">Price:</span>
            {[
              { id: 'all', label: 'All' },
              { id: 'free', label: '100% Free' },
              { id: 'paid', label: 'Premium' }
            ].map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPrice(p.id as any)}
                className={`px-2 py-1 rounded-lg text-[11px] font-medium transition-all ${
                  selectedPrice === p.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Filter Summary & Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span>Found <strong className="text-slate-100">{filteredSchoolBooks.length}</strong> academic books</span>
          {(selectedClassId !== 'All' || selectedStreamId !== 'All' || selectedSubject !== 'All') && (
            <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">
              {[selectedClassId !== 'All' && selectedClassId, selectedStreamId !== 'All' && selectedStreamId, selectedSubject !== 'All' && selectedSubject].filter(Boolean).join(' • ')}
            </span>
          )}
        </div>
        <button
          onClick={handleResetFilters}
          className="text-indigo-400 hover:text-indigo-300 font-semibold"
        >
          Reset All
        </button>
      </div>

      {/* 7. Books Grid */}
      {filteredSchoolBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSchoolBooks.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onOpenDetails={onOpenDetails}
              onStartReading={onStartReading}
              onOpenAuthor={onOpenAuthor}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-200">No school books match your current filters</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Try switching class or subject, clearing search keywords, or selecting all languages.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 8. Connected Student Resources Strip (Section 94) */}
      <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-cyan-400" />
            <h3 className="font-bold text-sm text-slate-200">Connected Student Tools & Study Guides</h3>
          </div>
          <span className="text-xs text-slate-400">Integrated with HK VELORA Ecosystem</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => openTool('scientific-calculator')}
            className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-left transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200 group-hover:text-cyan-300">Scientific Calculator</h4>
              <p className="text-[10px] text-slate-400">Trig, calculus & log solvers for Physics/Math</p>
            </div>
          </button>

          <button
            onClick={() => openTool('word-counter')}
            className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 text-left transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200 group-hover:text-indigo-300">Essay & Word Counter</h4>
              <p className="text-[10px] text-slate-400">Character, paragraph & reading time analyzer</p>
            </div>
          </button>

          <button
            onClick={() => openGuide('student-tech-productivity-guide')}
            className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/40 text-left transition-all flex items-center gap-3 group"
          >
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200 group-hover:text-purple-300">Student Study Roadmap</h4>
              <p className="text-[10px] text-slate-400">Time management & spaced repetition guide</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
