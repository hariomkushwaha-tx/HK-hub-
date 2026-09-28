import React, { useState, useMemo } from 'react';
import { EBookItem } from '../../types';
import { useApp } from '../../context/AppContext';
import { BookCard } from './BookCard';
import { 
  Sparkles, 
  Cpu, 
  Code2, 
  Terminal, 
  Cloud, 
  ShieldCheck, 
  Layers, 
  Database, 
  Search, 
  ArrowRight, 
  BookOpen, 
  Headphones, 
  Star, 
  CheckCircle2, 
  Flame, 
  Zap, 
  Briefcase,
  GitBranch,
  RotateCcw,
  BookMarked
} from 'lucide-react';

interface ModernTechLibraryViewProps {
  books: EBookItem[];
  onOpenDetails: (book: EBookItem) => void;
  onStartReading: (book: EBookItem) => void;
  onOpenAuthor: (authorId: string) => void;
}

export const ModernTechLibraryView: React.FC<ModernTechLibraryViewProps> = ({
  books,
  onOpenDetails,
  onStartReading,
  onOpenAuthor
}) => {
  const { readingProgressMap } = useApp();

  const [activeTopic, setActiveTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'popular' | 'title'>('rating');

  // Filter tech books (2026 flagship + AI + Programming + DevOps + Cloud + Cybersecurity + Systems)
  const techBooks = useMemo(() => {
    return books.filter(b => {
      const cat = (b.category || '').toLowerCase();
      const tags = (b.tags || []).map(t => t.toLowerCase());
      const title = (b.title || '').toLowerCase();
      const sub = (b.subcategory || '').toLowerCase();

      return (
        b.yearPublished?.includes('2026') ||
        b.badge?.includes('2026') ||
        cat.includes('artificial intelligence') ||
        cat.includes('coding') ||
        cat.includes('technology') ||
        cat.includes('web development') ||
        cat.includes('cybersecurity') ||
        sub.includes('system design') ||
        sub.includes('devops') ||
        sub.includes('career') ||
        tags.includes('generative ai') ||
        tags.includes('dsa') ||
        tags.includes('docker') ||
        tags.includes('system design') ||
        tags.includes('placement') ||
        tags.includes('next.js') ||
        title.includes('dsa') ||
        title.includes('handbook') ||
        title.includes('mastery')
      );
    });
  }, [books]);

  // Topic tabs for fast navigation
  const TOPIC_CATEGORIES = [
    { id: 'all', label: 'All Modern Tech', icon: Cpu, badge: `${techBooks.length}` },
    { id: 'flagship2026', label: '🔥 2026 Flagship Editions', icon: Flame, badge: 'New' },
    { id: 'ai', label: '🤖 Generative AI & LLMs', icon: Sparkles },
    { id: 'system-design', label: '🏗️ System Design', icon: Layers },
    { id: 'devops', label: '🐳 DevOps, Docker & K8s', icon: Terminal },
    { id: 'dsa', label: '⚡ 14 DSA Patterns', icon: Code2 },
    { id: 'web', label: '🌐 Next.js & Full-Stack', icon: GitBranch },
    { id: 'security', label: '🛡️ Cybersecurity & Defense', icon: ShieldCheck },
    { id: 'cloud', label: '☁️ Cloud & Serverless', icon: Cloud },
    { id: 'placement', label: '💼 Placements & ATS Resumes', icon: Briefcase },
    { id: 'databases', label: '🗄️ Database & Vector DBs', icon: Database }
  ];

  const filteredBooks = useMemo(() => {
    return techBooks.filter(book => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || (
        book.title.toLowerCase().includes(q) ||
        (book.subtitle && book.subtitle.toLowerCase().includes(q)) ||
        (book.description && book.description.toLowerCase().includes(q)) ||
        book.tags.some(t => t.toLowerCase().includes(q)) ||
        (book.topics && book.topics.some(tp => tp.toLowerCase().includes(q)))
      );

      // Topic Filter
      let matchTopic = true;
      const combined = `${book.title} ${book.subtitle || ''} ${book.category} ${book.subcategory || ''} ${book.tags.join(' ')}`.toLowerCase();

      if (activeTopic === 'flagship2026') {
        matchTopic = Boolean(book.yearPublished?.includes('2026') || book.id.startsWith('modern-') || book.badge?.includes('2026'));
      } else if (activeTopic === 'ai') {
        matchTopic = combined.includes('ai') || combined.includes('llm') || combined.includes('prompt') || combined.includes('pytorch') || combined.includes('transformer');
      } else if (activeTopic === 'system-design') {
        matchTopic = combined.includes('system design') || combined.includes('distributed') || combined.includes('scalab') || combined.includes('microservice');
      } else if (activeTopic === 'devops') {
        matchTopic = combined.includes('docker') || combined.includes('devops') || combined.includes('kubernetes') || combined.includes('ci/cd') || combined.includes('linux');
      } else if (activeTopic === 'dsa') {
        matchTopic = combined.includes('dsa') || combined.includes('algorithm') || combined.includes('data structure') || combined.includes('leetcode');
      } else if (activeTopic === 'web') {
        matchTopic = combined.includes('next.js') || combined.includes('react') || combined.includes('web') || combined.includes('frontend') || combined.includes('api');
      } else if (activeTopic === 'security') {
        matchTopic = combined.includes('cyber') || combined.includes('security') || combined.includes('ethical hacking') || combined.includes('zero trust');
      } else if (activeTopic === 'cloud') {
        matchTopic = combined.includes('cloud') || combined.includes('aws') || combined.includes('gcp') || combined.includes('serverless');
      } else if (activeTopic === 'placement') {
        matchTopic = combined.includes('placement') || combined.includes('career') || combined.includes('resume') || combined.includes('interview');
      } else if (activeTopic === 'databases') {
        matchTopic = combined.includes('database') || combined.includes('sql') || combined.includes('vector') || combined.includes('redis') || combined.includes('b-tree');
      }

      // Difficulty
      const matchDiff = difficultyFilter === 'all' || book.difficulty === difficultyFilter || book.difficulty === 'All Levels';

      return matchSearch && matchTopic && matchDiff;
    }).sort((a, b) => {
      // Prioritize 2026 editions first
      const aIs2026 = a.yearPublished?.includes('2026') || a.id.startsWith('modern-') ? 1 : 0;
      const bIs2026 = b.yearPublished?.includes('2026') || b.id.startsWith('modern-') ? 1 : 0;
      if (aIs2026 !== bIs2026) return bIs2026 - aIs2026;

      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popular') return (b.reviewCount || 0) - (a.reviewCount || 0);
      return a.title.localeCompare(b.title);
    });
  }, [techBooks, searchQuery, activeTopic, difficultyFilter, sortBy]);

  // Highlight flagship book (GenAI / System Design)
  const flagshipHeroBook = useMemo(() => {
    return books.find(b => b.id === 'modern-genai-llm-handbook') || filteredBooks[0] || null;
  }, [books, filteredBooks]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Futuristic Header Hero */}
      <div className="relative rounded-3xl bg-gradient-to-br from-indigo-950/90 via-slate-900 to-slate-950 border border-indigo-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Modern 2026 Engineering Vault • Authored by Hariom Kushwaha</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              🚀 2026 Modern Tech, AI & Engineering Handbooks
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              In-depth, code-driven master manuals built specifically for engineering students, developers, and tech job aspirants. Complete with practical architectures, LeetCode patterns, Docker/K8s blueprints, and ATS resume engineering.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                100% Free Open Education
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Headphones className="w-4 h-4" />
                Integrated Audio Narrations
              </span>
              <span className="flex items-center gap-1.5 text-indigo-300">
                <Code2 className="w-4 h-4" />
                Production Code & Architectures
              </span>
            </div>
          </div>

          {/* Quick Stat Counter Box */}
          <div className="flex flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <div className="flex-1 sm:flex-initial p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center shadow-md">
              <span className="text-2xl font-black text-indigo-400 block">{techBooks.length}+</span>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Tech Books</span>
            </div>
            <div className="flex-1 sm:flex-initial p-4 rounded-2xl bg-indigo-900/30 border border-indigo-500/30 text-center shadow-md">
              <span className="text-2xl font-black text-emerald-400 block">12</span>
              <span className="text-[11px] font-semibold text-indigo-200 uppercase tracking-wider">2026 Flagships</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Flagship Book Spotlight Spotlight Carrier */}
      {flagshipHeroBook && (
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden group">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className={`w-32 h-44 sm:w-36 sm:h-48 rounded-2xl bg-gradient-to-br ${flagshipHeroBook.coverGradient} p-3.5 flex flex-col justify-between text-white shrink-0 shadow-lg border border-white/10`}>
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-white/20 uppercase tracking-wider">
                  {flagshipHeroBook.badge || '2026 Edition'}
                </span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <div>
                <h4 className="font-black text-xs sm:text-sm line-clamp-3 leading-snug">{flagshipHeroBook.title}</h4>
                <p className="text-[10px] text-white/80 mt-1">{flagshipHeroBook.author}</p>
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono border-t border-white/15 pt-1.5">
                <span>{flagshipHeroBook.pages} pgs</span>
                <span className="flex items-center gap-0.5 text-amber-300 font-bold">★ {flagshipHeroBook.rating}</span>
              </div>
            </div>

            <div className="flex-1 space-y-3 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  Featured 2026 Flagship Handbook
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {flagshipHeroBook.category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {flagshipHeroBook.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                {flagshipHeroBook.subtitle || flagshipHeroBook.shortDescription}
              </p>

              {/* Learning Highlights */}
              {flagshipHeroBook.whatYoullLearn && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-300">
                  {flagshipHeroBook.whatYoullLearn.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onStartReading(flagshipHeroBook)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center gap-2 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Online Free</span>
                </button>

                <button
                  onClick={() => onOpenDetails(flagshipHeroBook)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 flex items-center gap-2 transition-all"
                >
                  <span>Chapters & Study Notes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {flagshipHeroBook.hasAudioBook && (
                  <span className="text-xs text-cyan-400 font-medium flex items-center gap-1.5 ml-auto">
                    <Headphones className="w-4 h-4" />
                    Audio Book: {flagshipHeroBook.audioDuration}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Search & Interactive Filter Controls */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech books by title, topic (RAG, Docker, LeetCode, Redis, Next.js, ATS)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Difficulty Dropdown */}
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium focus:outline-none focus:border-indigo-500"
          >
            <option value="all">All Difficulties</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium focus:outline-none focus:border-indigo-500"
          >
            <option value="rating">Top Rated</option>
            <option value="popular">Most Popular</option>
            <option value="title">Alphabetical (A-Z)</option>
          </select>
        </div>

        {/* Topic Horizontal Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 pt-1">
          {TOPIC_CATEGORIES.map(topic => {
            const Icon = topic.icon;
            const isActive = activeTopic === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 border border-indigo-500'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                <span>{topic.label}</span>
                {topic.badge && (
                  <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {topic.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Results Header & Reset */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>Showing <strong className="text-white">{filteredBooks.length}</strong> modern tech & engineering books</span>
        {(searchQuery || activeTopic !== 'all' || difficultyFilter !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveTopic('all');
              setDifficultyFilter('all');
            }}
            className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* 5. Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map(book => (
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
        <div className="text-center py-16 px-4 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
          <BookOpen className="w-10 h-10 text-slate-500 mx-auto" />
          <h4 className="text-base font-bold text-slate-200">No tech books match your search</h4>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Try searching for broader keywords like "AI", "System Design", "Docker", "DSA", or reset your filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveTopic('all');
              setDifficultyFilter('all');
            }}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
