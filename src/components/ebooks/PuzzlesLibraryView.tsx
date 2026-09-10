import React, { useState, useMemo } from 'react';
import { EBookItem, PuzzleItem } from '../../types';
import { BookCard } from './BookCard';
import { 
  Puzzle, 
  HelpCircle, 
  Lightbulb, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  BookOpen, 
  Flame, 
  Brain, 
  Layers, 
  RotateCcw,
  Eye,
  EyeOff,
  ShieldCheck
} from 'lucide-react';

interface PuzzlesLibraryViewProps {
  books: EBookItem[];
  onOpenDetails: (book: EBookItem) => void;
  onStartReading: (book: EBookItem) => void;
  onOpenAuthor: (authorId: string) => void;
}

export const PuzzlesLibraryView: React.FC<PuzzlesLibraryViewProps> = ({
  books,
  onOpenDetails,
  onStartReading,
  onOpenAuthor
}) => {
  const [activeTab, setActiveTab] = useState<'books' | 'gym'>('books');
  const [selectedPuzzleType, setSelectedPuzzleType] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  // Collect all interactive puzzles from all books
  const allPuzzleItems = useMemo(() => {
    const items: { puzzle: PuzzleItem; bookTitle: string }[] = [];
    books.forEach(b => {
      if (b.puzzleItems) {
        b.puzzleItems.forEach(p => items.push({ puzzle: p, bookTitle: b.title }));
      }
    });
    return items;
  }, [books]);

  // Interactive Gym State
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [solvedCount, setSolvedCount] = useState<number>(0);
  const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());

  // Filtered puzzle books
  const puzzleBooks = useMemo(() => {
    return books.filter(b => {
      const isPuzzle = b.category === 'Puzzles & Brain' || b.bookType === 'Puzzle Book' || b.puzzleType;
      if (!isPuzzle) return false;

      const matchType = selectedPuzzleType === 'All' || b.puzzleType === selectedPuzzleType || b.subcategory?.includes(selectedPuzzleType);
      const matchDiff = selectedDifficulty === 'All' || b.difficulty === selectedDifficulty || b.difficulty === 'All Levels';

      return matchType && matchDiff;
    });
  }, [books, selectedPuzzleType, selectedDifficulty]);

  const currentGymItem = allPuzzleItems[currentPuzzleIndex] || null;

  const handleNextPuzzle = () => {
    setShowHint(false);
    setShowAnswer(false);
    setCurrentPuzzleIndex((prev) => (prev + 1) % allPuzzleItems.length);
  };

  const handlePrevPuzzle = () => {
    setShowHint(false);
    setShowAnswer(false);
    setCurrentPuzzleIndex((prev) => (prev - 1 + allPuzzleItems.length) % allPuzzleItems.length);
  };

  const handleMarkSolved = (pId: string) => {
    if (!solvedIds.has(pId)) {
      setSolvedIds(new Set([...solvedIds, pId]));
      setSolvedCount(c => c + 1);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Puzzles Banner */}
      <div className="relative rounded-3xl bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/25 p-6 sm:p-8 shadow-xl overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 tracking-wide uppercase">
                <Brain className="w-3.5 h-3.5" />
                HK VELORA Brain & Logic Gym
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3 h-3" />
                Cognitive Aptitude Booster
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Puzzles, Hindi Paheliyan & Brain Teasers
            </h1>
            <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed">
              Supercharge your lateral thinking, analytical reasoning, and mathematical reflexes. 
              Enjoy traditional Indian Paheliyan, algorithmic river crossings, and logic grid challenges.
            </p>

            {/* Mode Switcher */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setActiveTab('books')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'books'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Puzzle Books Catalog</span>
              </button>

              <button
                onClick={() => setActiveTab('gym')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'gym'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Brain Gym ({allPuzzleItems.length} Puzzles)</span>
              </button>
            </div>
          </div>

          {/* Quick Brain Stats */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shrink-0 w-full sm:w-auto space-y-2">
            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-slate-400">Solved in Session:</span>
              <span className="font-extrabold text-emerald-400 font-mono text-sm">{solvedCount}</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-slate-400">Interactive Pool:</span>
              <span className="font-extrabold text-purple-400 font-mono text-sm">{allPuzzleItems.length} Challenges</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mode 1: Interactive Brain Gym */}
      {activeTab === 'gym' && currentGymItem && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-purple-500/30 space-y-6 shadow-xl animate-fadeIn">
          {/* Header of Gym */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold">
                Challenge #{currentPuzzleIndex + 1} of {allPuzzleItems.length}
              </span>
              <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                currentGymItem.puzzle.difficulty === 'Beginner'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : currentGymItem.puzzle.difficulty === 'Intermediate'
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                {currentGymItem.puzzle.difficulty}
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                From: {currentGymItem.bookTitle}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevPuzzle}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Previous Puzzle"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextPuzzle}
                className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1 transition-colors"
              >
                <span>Next Challenge</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Puzzle Card Content */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {currentGymItem.puzzle.question}
              </h3>
            </div>

            {/* Hint Box */}
            {currentGymItem.puzzle.hint && (
              <div className="space-y-2">
                {!showHint ? (
                  <button
                    onClick={() => setShowHint(true)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 transition-all"
                  >
                    <Lightbulb className="w-4 h-4" />
                    <span>Need a Hint? (संकेत देखें)</span>
                  </button>
                ) : (
                  <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2 animate-fadeIn">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block text-amber-300">Hint:</strong>
                      {currentGymItem.puzzle.hint}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Answer & Explanation Box */}
            <div className="space-y-2">
              {!showAnswer ? (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>Reveal Answer & Explanation (उत्तर देखें)</span>
                </button>
              ) : (
                <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Answer & Logic Breakdown
                    </span>
                    <button
                      onClick={() => setShowAnswer(false)}
                      className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1"
                    >
                      <EyeOff className="w-3 h-3" />
                      Hide
                    </button>
                  </div>

                  <div className="text-base font-extrabold text-white">
                    {currentGymItem.puzzle.answer}
                  </div>

                  {currentGymItem.puzzle.explanation && (
                    <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-emerald-500/20">
                      <strong>Why: </strong>{currentGymItem.puzzle.explanation}
                    </p>
                  )}

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => handleMarkSolved(currentGymItem.puzzle.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                        solvedIds.has(currentGymItem.puzzle.id)
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{solvedIds.has(currentGymItem.puzzle.id) ? 'Solved!' : 'Mark as Solved'}</span>
                    </button>

                    <button
                      onClick={handleNextPuzzle}
                      className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1"
                    >
                      <span>Try Next Puzzle</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Books Catalog View */}
      {activeTab === 'books' && (
        <div className="space-y-6">
          {/* Subcategory Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {['All', 'पहेलियाँ (Hindi Riddles)', 'Logic Puzzles', 'Math & Number Riddles'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedPuzzleType(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedPuzzleType === cat
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Difficulty */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-slate-400">Difficulty:</span>
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map(d => (
                <button
                  key={d}
                  onClick={() => setSelectedDifficulty(d)}
                  className={`px-2 py-0.5 rounded-lg text-xs ${
                    selectedDifficulty === d ? 'bg-purple-500/20 text-purple-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Book Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {puzzleBooks.map(book => (
              <BookCard
                key={book.id}
                book={book}
                onOpenDetails={onOpenDetails}
                onStartReading={onStartReading}
                onOpenAuthor={onOpenAuthor}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
