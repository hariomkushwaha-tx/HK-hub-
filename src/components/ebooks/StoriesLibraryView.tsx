import React, { useState, useMemo } from 'react';
import { EBookItem } from '../../types';
import { BookCard } from './BookCard';
import { 
  Feather, 
  Search, 
  Sparkles, 
  Compass, 
  Headphones, 
  Heart, 
  Flame, 
  BookMarked, 
  RotateCcw,
  ShieldCheck,
  Award,
  Globe
} from 'lucide-react';

interface StoriesLibraryViewProps {
  books: EBookItem[];
  onOpenDetails: (book: EBookItem) => void;
  onStartReading: (book: EBookItem) => void;
  onOpenAuthor: (authorId: string) => void;
}

export const StoriesLibraryView: React.FC<StoriesLibraryViewProps> = ({
  books,
  onOpenDetails,
  onStartReading,
  onOpenAuthor
}) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [selectedReadingLevel, setSelectedReadingLevel] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyAudioAvailable, setOnlyAudioAvailable] = useState(false);

  // Filter only story books
  const storyBooks = useMemo(() => {
    return books.filter(b => {
      const isStory = b.category === 'Stories & Literature' || b.bookType === 'Story' || b.subcategory?.includes('Literature') || b.literatureGenre;
      if (!isStory) return false;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || (
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        (b.description ? b.description.toLowerCase().includes(q) : false) ||
        (b.shortDescription ? b.shortDescription.toLowerCase().includes(q) : false) ||
        (b.literatureGenre && b.literatureGenre.toLowerCase().includes(q)) ||
        b.tags.some(t => t.toLowerCase().includes(q))
      );

      const matchGenre = selectedGenre === 'All' || b.literatureGenre === selectedGenre || b.subcategory?.includes(selectedGenre);
      const matchLanguage = selectedLanguage === 'All' || b.language?.toLowerCase().includes(selectedLanguage.toLowerCase());
      const matchLevel = selectedReadingLevel === 'All' || b.readingLevel === selectedReadingLevel;
      const matchAudio = !onlyAudioAvailable || b.hasAudioBook;

      return matchSearch && matchGenre && matchLanguage && matchLevel && matchAudio;
    });
  }, [books, searchQuery, selectedGenre, selectedLanguage, selectedReadingLevel, onlyAudioAvailable]);

  const genres = [
    'All',
    'Moral & Folk Tales',
    'Short Stories',
    'Mystery & Detective',
    'Inspirational Stories',
    'Classics & Literature'
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Stories Banner */}
      <div className="relative rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 border border-amber-500/25 p-6 sm:p-8 shadow-xl overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 tracking-wide uppercase">
              <Feather className="w-3.5 h-3.5" />
              HK VELORA Stories & Literature
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-3 h-3" />
              Public Domain & Authorized Classics
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Stories, Literature & Moral Tales
          </h1>
          <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed">
            From the heartwarming realism of Munshi Premchand and poetic vision of Rabindranath Tagore, 
            to the deductive thrills of Sherlock Holmes and wisdom of Panchatantra. Safe, enriching, and timeless.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-amber-200/70">
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              World & Indian Classics
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              Hindi & English Editions
            </span>
            <span className="flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5 text-amber-400" />
              Audiobook Narration Ready
            </span>
          </div>
        </div>
      </div>

      {/* 2. Genre Filter Pills & Search */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stories by title, author (Premchand, Tagore, Doyle), or theme..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Quick Audio Toggle */}
          <button
            onClick={() => setOnlyAudioAvailable(!onlyAudioAvailable)}
            className={`px-3 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all shrink-0 ${
              onlyAudioAvailable
                ? 'bg-amber-600 text-white border-amber-500'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>With Audio Narration</span>
          </button>
        </div>

        {/* Genre Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedGenre === genre
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Language & Reading Level Sub-filter */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-medium">Language:</span>
            {['All', 'Hindi', 'English'].map(l => (
              <button
                key={l}
                onClick={() => setSelectedLanguage(l)}
                className={`px-2 py-0.5 rounded-lg text-xs ${
                  selectedLanguage === l ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-medium">Audience:</span>
            {['All', 'School', 'Teen-friendly', 'General'].map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedReadingLevel(lvl)}
                className={`px-2 py-0.5 rounded-lg text-xs ${
                  selectedReadingLevel === lvl ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Grid of Stories */}
      {storyBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {storyBooks.map(book => (
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
          <Feather className="w-10 h-10 text-amber-400/60 mx-auto" />
          <h3 className="text-lg font-bold text-slate-200">No stories match your search</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Try switching the genre or resetting filters to explore our full library of classics and moral tales.
          </p>
          <button
            onClick={() => {
              setSelectedGenre('All');
              setSelectedLanguage('All');
              setSelectedReadingLevel('All');
              setSearchQuery('');
              setOnlyAudioAvailable(false);
            }}
            className="px-5 py-2 rounded-xl bg-amber-600 text-white text-xs font-semibold hover:bg-amber-500 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
