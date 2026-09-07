import React from 'react';
import { EBookItem } from '../../types';
import { useApp } from '../../context/AppContext';
import { 
  BookOpen, 
  Star, 
  Bookmark, 
  Headphones, 
  Sparkles, 
  Layers,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';

interface BookCardProps {
  book: EBookItem;
  onOpenDetails: (book: EBookItem) => void;
  onStartReading: (book: EBookItem) => void;
  onOpenAuthor?: (authorId: string) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  onOpenDetails,
  onStartReading,
  onOpenAuthor
}) => {
  const { 
    isBookmarked, 
    toggleBookmark, 
    isBookUnlocked, 
    isBookInWishlist, 
    toggleWishlistBook,
    getReadingProgress 
  } = useApp();

  const isSaved = isBookmarked(book.id) || isBookInWishlist(book.id);
  const unlocked = book.isFree || isBookUnlocked(book.id);
  const progress = getReadingProgress(book.id);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(book.id);
    toggleWishlistBook(book.id);
  };

  return (
    <div 
      id={`book-card-${book.id}`}
      onClick={() => onOpenDetails(book)}
      className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-200 cursor-pointer overflow-hidden p-4 sm:p-5"
    >
      {/* Top Media & Spines */}
      <div className="space-y-3.5">
        {/* Visual Cover Banner with Spine Effect */}
        <div className={`relative h-44 sm:h-48 w-full rounded-xl bg-gradient-to-br ${book.coverGradient} p-4 flex flex-col justify-between text-white shadow-inner overflow-hidden group-hover:scale-[1.01] transition-transform duration-200`}>
          {/* Subtle Spine Texture */}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/25 border-r border-white/10" />
          <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />

          {/* Top Badges */}
          <div className="relative pl-2 flex items-center justify-between gap-1.5 z-10">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-black/40 backdrop-blur-md border border-white/15 text-white">
              {book.bookType || 'E-Book'}
            </span>

            <div className="flex items-center gap-1">
              {book.hasAudioBook && (
                <span className="p-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-cyan-300" title="Audio Book Available">
                  <Headphones className="w-3 h-3" />
                </span>
              )}
              <button
                type="button"
                onClick={handleBookmarkClick}
                className={`p-1.5 rounded-full backdrop-blur-md border transition-colors ${
                  isSaved
                    ? 'bg-amber-500/90 border-amber-300 text-white shadow-sm'
                    : 'bg-black/40 border-white/15 text-white/80 hover:text-white hover:bg-black/60'
                }`}
                title={isSaved ? 'Saved in Wishlist' : 'Add to Wishlist'}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Center Title Display on Cover */}
          <div className="relative pl-2 py-1 z-10">
            <p className="text-[11px] font-semibold text-white/80 line-clamp-1 uppercase tracking-wider">
              {book.category}
            </p>
            <h3 className="font-extrabold text-sm sm:text-base text-white tracking-tight leading-snug line-clamp-2 mt-0.5 drop-shadow-sm">
              {book.title}
            </h3>
          </div>

          {/* Bottom Cover Strip */}
          <div className="relative pl-2 flex items-center justify-between text-[11px] text-white/90 z-10 border-t border-white/15 pt-1.5">
            <span className="truncate max-w-[130px] font-medium opacity-90">{book.author}</span>
            <span className="font-mono text-[10px] bg-black/30 px-1.5 py-0.5 rounded">{book.pages} pgs</span>
          </div>

          {/* Reading Progress Indicator if active */}
          {progress && progress.percentage > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50">
              <div 
                className="h-full bg-cyan-400 transition-all duration-300" 
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="inline-flex items-center gap-1 font-medium text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-bold text-slate-200">{book.rating}</span>
              <span className="text-[11px] text-slate-400">({book.reviewCount || 100}+)</span>
            </span>

            <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
              {book.difficulty}
            </span>
          </div>

          <h4 className="font-bold text-sm text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-1">
            {book.title}
          </h4>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {book.shortDescription || book.description}
          </p>

          {/* Topics Chips */}
          {book.topics && book.topics.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {book.topics.slice(0, 3).map((topic, i) => (
                <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60">
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pricing & Footer Actions */}
      <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between gap-2">
        {/* Price display */}
        <div className="flex flex-col">
          {book.isFree ? (
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold text-emerald-400">₹0</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                FREE
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold text-indigo-400">₹{book.price}</span>
              {book.originalPrice && (
                <span className="text-xs text-slate-400 line-through">₹{book.originalPrice}</span>
              )}
              {book.discountPercentage && (
                <span className="px-1 py-0.2 rounded text-[9px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  {book.discountPercentage}% OFF
                </span>
              )}
            </div>
          )}
          <span className="text-[10px] text-slate-400">
            {unlocked ? 'Access Granted' : 'Instant Digital Unlock'}
          </span>
        </div>

        {/* Read / Action button */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onStartReading(book);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
              unlocked
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            {unlocked ? (
              <>
                <BookOpen className="w-3.5 h-3.5" />
                <span>{progress && progress.percentage > 0 ? 'Continue' : 'Read'}</span>
              </>
            ) : (
              <>
                <BookOpen className="w-3.5 h-3.5" />
                <span>Preview</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
