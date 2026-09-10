import React, { useMemo } from 'react';
import { EBookItem } from '../../types';
import { useApp } from '../../context/AppContext';
import { BookCard } from './BookCard';
import { 
  Bookmark, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  Play, 
  Flame, 
  GraduationCap, 
  Sparkles, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

interface MyReadingDeskViewProps {
  books: EBookItem[];
  onOpenDetails: (book: EBookItem) => void;
  onStartReading: (book: EBookItem) => void;
  onOpenAuthor: (authorId: string) => void;
  onNavigateToSchool: () => void;
}

export const MyReadingDeskView: React.FC<MyReadingDeskViewProps> = ({
  books,
  onOpenDetails,
  onStartReading,
  onOpenAuthor,
  onNavigateToSchool
}) => {
  const { readingProgressMap, wishlistBookIds, unlockedBookIds } = useApp();

  // Active reading books
  const activeReadingBooks = useMemo(() => {
    return books
      .map(book => ({
        book,
        progress: readingProgressMap[book.id]
      }))
      .filter(item => item.progress && item.progress.percentage > 0)
      .sort((a, b) => (b.progress?.percentage || 0) - (a.progress?.percentage || 0));
  }, [books, readingProgressMap]);

  // Wishlist books
  const savedBooks = useMemo(() => {
    return books.filter(b => wishlistBookIds.includes(b.id));
  }, [books, wishlistBookIds]);

  // Total reading stats
  const stats = useMemo(() => {
    const totalStarted = activeReadingBooks.length;
    const completed = activeReadingBooks.filter(item => (item.progress?.percentage || 0) >= 100).length;
    const totalPagesEstimated = activeReadingBooks.reduce((acc, item) => {
      const pct = (item.progress?.percentage || 0) / 100;
      return acc + Math.round(item.book.pages * pct);
    }, 0);

    return { totalStarted, completed, totalPagesEstimated };
  }, [activeReadingBooks]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Desk Header & Metrics */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Bookmark className="w-5 h-5" />
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                My Student Reading Desk
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Track your textbook study progress, bookmarked stories, and puzzle achievements across all devices.
            </p>
          </div>

          <button
            onClick={onNavigateToSchool}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 transition-all shrink-0"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Go to School Library</span>
          </button>
        </div>

        {/* Reading Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">In Progress</span>
              <span className="text-xl font-extrabold text-white font-mono">{stats.totalStarted} Books</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Completed</span>
              <span className="text-xl font-extrabold text-emerald-400 font-mono">{stats.completed} Books</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Pages Read (Est.)</span>
              <span className="text-xl font-extrabold text-amber-400 font-mono">{stats.totalPagesEstimated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Continue Reading Shelf */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-400" />
          <span>Continue Reading</span>
        </h2>

        {activeReadingBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeReadingBooks.map(({ book, progress }) => (
              <div
                key={book.id}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-14 h-20 rounded-xl bg-gradient-to-br ${book.coverGradient} p-2 text-white flex flex-col justify-between shrink-0 shadow-md`}>
                    <span className="text-[7px] font-bold uppercase truncate">{book.category}</span>
                    <BookOpen className="w-5 h-5 mx-auto text-white/90" />
                    <span className="text-[9px] font-mono text-center font-bold">
                      {progress?.percentage}%
                    </span>
                  </div>

                  <div className="space-y-1 overflow-hidden">
                    {book.schoolClass && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-indigo-500/20 text-indigo-300">
                        {book.schoolClass} • {book.subject}
                      </span>
                    )}
                    <h3 className="font-bold text-sm text-white line-clamp-2 leading-snug">
                      {book.title}
                    </h3>
                    <p className="text-xs text-slate-400 truncate">
                      By {book.author}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Progress: {progress?.percentage}%</span>
                    <span>Chapter {(progress?.currentChapterIndex ?? 0) + 1}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all"
                      style={{ width: `${progress?.percentage || 0}%` }}
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => onStartReading(book)}
                      className="flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Resume</span>
                    </button>
                    <button
                      onClick={() => onOpenDetails(book)}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                      title="View Details"
                    >
                      <BookOpen className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-400 text-xs">
            You have not started reading any books yet. Click "Start Reading" on any book in the School, Stories, or Tech libraries!
          </div>
        )}
      </div>

      {/* 3. Wishlist / Bookmarked Books */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-amber-400" />
          <span>My Saved Wishlist ({savedBooks.length})</span>
        </h2>

        {savedBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {savedBooks.map(book => (
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
          <div className="p-8 text-center rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-400 text-xs">
            No books saved in your wishlist yet. Tap the bookmark icon on any book card to save it for later!
          </div>
        )}
      </div>
    </div>
  );
};
