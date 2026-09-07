import React, { useState } from 'react';
import { EBookItem, BookReview } from '../../types';
import { useApp } from '../../context/AppContext';
import { EBOOKS_DATA } from '../../data/ebooksData';
import { ALL_TOOLS } from '../../data/toolsData';
import { COMPREHENSIVE_GUIDES } from '../../data/guidesData';
import { 
  X, 
  BookOpen, 
  Star, 
  Bookmark, 
  Download, 
  Share2, 
  CheckCircle2, 
  Lock, 
  Sparkles, 
  Headphones, 
  Play, 
  Pause,
  ExternalLink,
  ShieldCheck,
  User,
  ArrowRight,
  Send,
  Wrench,
  FileText
} from 'lucide-react';

interface BookDetailsModalProps {
  book: EBookItem;
  onClose: () => void;
  onStartReading: (book: EBookItem) => void;
  onOpenCheckout: (book: EBookItem) => void;
  onOpenAuthor: (authorId: string) => void;
}

export const BookDetailsModal: React.FC<BookDetailsModalProps> = ({
  book,
  onClose,
  onStartReading,
  onOpenCheckout,
  onOpenAuthor
}) => {
  const { 
    isBookmarked, 
    toggleBookmark, 
    isBookUnlocked, 
    unlockBook,
    isBookInWishlist, 
    toggleWishlistBook,
    openTool,
    openGuide
  } = useApp();

  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState('Copyright Concern');
  const [reportNotes, setReportNotes] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({ 'rev-1': 14, 'rev-2': 9 });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };
  const [isPlayingAudioSample, setIsPlayingAudioSample] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'toc' | 'reviews'>('overview');
  
  // Custom user reviews state
  const [reviewsList, setReviewsList] = useState<BookReview[]>([
    {
      id: 'rev-1',
      bookId: book.id,
      userName: 'Aakash Verma (CSE Final Year)',
      rating: 5,
      date: '3 days ago',
      comment: 'The chapter breakdowns and Big-O proofs made my technical interviews so much easier. Invaluable resource!',
      verifiedReader: true
    },
    {
      id: 'rev-2',
      bookId: book.id,
      userName: 'Simran K. (Software Developer)',
      rating: 5,
      date: '1 week ago',
      comment: 'Concise, high-yield, and practical. The viva questions at the end of the chapter helped me immensely.',
      verifiedReader: true
    }
  ]);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);

  const isSaved = isBookmarked(book.id) || isBookInWishlist(book.id);
  const unlocked = book.isFree || isBookUnlocked(book.id);

  // Related books
  const relatedBooks = EBOOKS_DATA.filter(
    b => b.id !== book.id && (b.category === book.category || b.difficulty === book.difficulty)
  ).slice(0, 3);

  // Related HK HUB Tools & Guides
  const relatedTools = ALL_TOOLS.slice(0, 2);
  const relatedGuides = COMPREHENSIVE_GUIDES.slice(0, 2);

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/#books-${book.id}`);
    setCopied(true);
    showToast('Book link copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGetFree = () => {
    unlockBook(book.id);
    showToast(`"${book.title}" added to your My Library!`);
  };

  const handleVoteHelpful = (revId: string) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [revId]: (prev[revId] || 0) + 1
    }));
    showToast('Thank you for your feedback!');
  };

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitted(true);
    setTimeout(() => {
      setShowReportModal(false);
      setReportSubmitted(false);
      setReportNotes('');
      showToast('Thank you. Your report has been submitted to HK HUB moderators for review.');
    }, 1200);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewComment.trim()) return;
    const newRev: BookReview = {
      id: `rev-${Date.now()}`,
      bookId: book.id,
      userName: 'You (Student Reader)',
      rating: newReviewRating,
      date: 'Just now',
      comment: newReviewComment.trim(),
      verifiedReader: true
    };
    setReviewsList(prev => [newRev, ...prev]);
    setNewReviewComment('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {book.category}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">•</span>
            <span className="text-xs text-slate-400 hidden sm:inline">{book.format}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Share Book Link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                toggleBookmark(book.id);
                toggleWishlistBook(book.id);
              }}
              className={`p-2 rounded-xl transition-colors ${
                isSaved ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-800/80 text-slate-300 hover:text-white'
              }`}
              title={isSaved ? 'In Wishlist' : 'Add to Wishlist'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto flex-1">
          {/* Top Hero Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left: Book Spine & Cover */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className={`w-48 sm:w-56 h-64 sm:h-72 rounded-2xl bg-gradient-to-br ${book.coverGradient} p-5 shadow-2xl flex flex-col justify-between text-white relative overflow-hidden border border-white/20`}>
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/25 border-r border-white/10" />
                <div className="relative pl-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-md">
                    {book.bookType || 'E-Book'}
                  </span>
                  {book.hasAudioBook && (
                    <Headphones className="w-4 h-4 text-cyan-300 drop-shadow-sm" />
                  )}
                </div>

                <div className="relative pl-2">
                  <h3 className="font-black text-base sm:text-lg leading-snug drop-shadow-sm line-clamp-3">
                    {book.title}
                  </h3>
                  <p className="text-xs text-white/80 font-medium mt-1">{book.author}</p>
                </div>

                <div className="relative pl-2 pt-2 border-t border-white/20 flex items-center justify-between text-[11px]">
                  <span>{book.difficulty}</span>
                  <span className="font-mono">{book.pages} pages</span>
                </div>
              </div>

              {/* Audio Book Snippet if available */}
              {book.hasAudioBook && (
                <div className="w-full max-w-[224px] mt-3 p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                      <Headphones className="w-3.5 h-3.5" />
                      Audio Edition
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">{book.audioDuration}</span>
                  </div>
                  <button
                    onClick={() => setIsPlayingAudioSample(!isPlayingAudioSample)}
                    className="w-full py-1.5 px-3 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {isPlayingAudioSample ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{isPlayingAudioSample ? 'Playing Narration...' : 'Preview Audio'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Right: Book Details & Actions */}
            <div className="md:col-span-8 space-y-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  {book.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {book.badge}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-800 text-slate-300">
                    {book.difficulty}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    ISBN: {book.isbn || '978-93-89123-XX'}
                  </span>
                </div>

                <h1 className="text-xl sm:text-2xl font-black text-slate-100 tracking-tight leading-snug">
                  {book.title}
                </h1>
                {book.subtitle && (
                  <p className="text-xs sm:text-sm text-indigo-400 font-medium mt-1">
                    {book.subtitle}
                  </p>
                )}

                {/* Author with link */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-slate-400">Authored by:</span>
                  <button
                    onClick={() => onOpenAuthor(book.authorId || 'hk-academic')}
                    className="text-xs font-bold text-slate-200 hover:text-indigo-400 underline underline-offset-2 flex items-center gap-1"
                  >
                    <User className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{book.author}</span>
                  </button>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-3 mt-2 text-xs">
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-slate-100">{book.rating}</span>
                    <span className="text-slate-400 font-normal">({book.reviewCount || 120} verified reviews)</span>
                  </div>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{book.yearPublished || '2025 Edition'}</span>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between flex-wrap gap-3">
                <div>
                  {book.isFree ? (
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-emerald-400">₹0</span>
                      <span className="px-2 py-0.5 rounded text-xs font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 uppercase">
                        100% Free Open Access
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl font-black text-indigo-400">₹{book.price}</span>
                      {book.originalPrice && (
                        <span className="text-sm text-slate-400 line-through">₹{book.originalPrice}</span>
                      )}
                      {book.discountPercentage && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/25">
                          {book.discountPercentage}% OFF Deal
                        </span>
                      )}
                    </div>
                  )}
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {unlocked ? '✓ Unlocked in your HK HUB Library' : 'One-time digital unlock • Lifetime updates'}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {unlocked ? (
                    <button
                      onClick={() => {
                        onClose();
                        onStartReading(book);
                      }}
                      className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-all"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Read Online Now</span>
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          onClose();
                          onStartReading(book);
                        }}
                        className="px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                      >
                        Read Free Preview
                      </button>
                      <button
                        onClick={() => onOpenCheckout(book)}
                        className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-all"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>Buy Now - ₹{book.price}</span>
                      </button>
                    </>
                  )}

                  {book.isFree && !unlocked && (
                    <button
                      onClick={handleGetFree}
                      className="px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-all"
                    >
                      Add to My Library
                    </button>
                  )}

                  <a
                    href={book.downloadUrl || book.readOnlineUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                    title="Download PDF or Open-Source Portal"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* What You'll Learn Box */}
              {book.whatYoullLearn && book.whatYoullLearn.length > 0 && (
                <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/25 space-y-2.5">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>What You'll Learn From This Book</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {book.whatYoullLearn.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Nav Tabs */}
          <div className="border-b border-slate-800 flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
            {[
              { id: 'overview', label: 'Book Overview & Details' },
              { id: 'toc', label: `Table of Contents (${book.tableOfContents.length})` },
              { id: 'reviews', label: `Reader Reviews (${reviewsList.length})` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-4 text-xs">
              <div className="space-y-2 text-slate-300 leading-relaxed">
                <h4 className="font-bold text-sm text-slate-100">About This Edition</h4>
                <p>{book.description}</p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-mono">Format</p>
                  <p className="font-bold text-slate-200 mt-0.5">{book.format}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-mono">Pages</p>
                  <p className="font-bold text-slate-200 mt-0.5">{book.pages} Pages</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-mono">Language</p>
                  <p className="font-bold text-slate-200 mt-0.5">{book.language || 'English'}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-mono">License</p>
                  <p className="font-bold text-slate-200 mt-0.5 truncate">{book.copyrightStatus || 'Open Access'}</p>
                </div>
              </div>

              {/* Related HK HUB Tools & Guides */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h4 className="font-bold text-sm text-slate-100">Connected HK HUB Tools & Handbooks</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedTools.map(tool => (
                    <div
                      key={tool.id}
                      onClick={() => {
                        openTool(tool.id);
                        onClose();
                      }}
                      className="p-3 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 transition-colors cursor-pointer flex items-center gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-slate-200 group-hover:text-indigo-300 truncate">{tool.name}</p>
                        <p className="text-[10px] text-slate-400 truncate">{tool.category}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'toc' && (
            <div className="space-y-2 text-xs">
              <p className="text-slate-400 pb-2">Full structured curriculum and chapter outlines included in the in-app reader:</p>
              <div className="space-y-1.5">
                {book.tableOfContents.map((chap, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  >
                    <span className="font-medium">{chap}</span>
                    <span className="text-[10px] font-mono text-indigo-400 px-2 py-0.5 rounded bg-slate-900">
                      Module {idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-5 text-xs">
              {/* Review Input */}
              <form onSubmit={handleAddReview} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-200">Leave an Honest Reader Review</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReviewRating(star)}
                        className={`p-1 transition-colors ${
                          newReviewRating >= star ? 'text-amber-400' : 'text-slate-600'
                        }`}
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  rows={2}
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                  placeholder="Share how this book helped your study, project, or career..."
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post Review</span>
                  </button>
                </div>
              </form>

              {/* Reviews List */}
              <div className="space-y-3">
                {reviewsList.map(rev => (
                  <div key={rev.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-200">{rev.userName}</span>
                        {rev.verifiedReader && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Verified Reader
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{rev.comment}</p>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                      <span>{rev.date}</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleVoteHelpful(rev.id)}
                          className="hover:text-indigo-400 transition-colors flex items-center gap-1 font-medium"
                        >
                          👍 Helpful ({helpfulVotes[rev.id] || 0})
                        </button>
                        <button
                          type="button"
                          onClick={() => showToast('Review flagged for moderation review.')}
                          className="hover:text-rose-400 transition-colors"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Books & Copyright Report Action */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="text-slate-400">
              <span>Licensed for HK HUB Academic & Student Knowledge Platform.</span>
            </div>
            <button
              onClick={() => setShowReportModal(true)}
              className="text-slate-400 hover:text-amber-400 flex items-center gap-1.5 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-amber-500/80" />
              <span>Report Issue or Copyright Concern</span>
            </button>
          </div>

          {/* Related Books */}
          {relatedBooks.length > 0 && (
            <div className="pt-2 space-y-3">
              <h4 className="font-bold text-sm text-slate-100">Readers Also Explored</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedBooks.map(rb => (
                  <div
                    key={rb.id}
                    onClick={() => {
                      onClose();
                      onStartReading(rb);
                    }}
                    className="p-3 rounded-2xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800/80 transition-colors cursor-pointer flex items-center gap-3"
                  >
                    <div className={`w-10 h-14 rounded-lg bg-gradient-to-br ${rb.coverGradient} p-1 text-white flex flex-col justify-between shrink-0 shadow-sm`}>
                      <span className="text-[7px] font-bold uppercase">{rb.pages}p</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-xs text-slate-200 line-clamp-1">{rb.title}</p>
                      <p className="text-[10px] text-slate-400 line-clamp-1">{rb.author}</p>
                      <p className="text-[10px] font-bold text-emerald-400 mt-1">{rb.isFree ? 'FREE' : `₹${rb.price}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-2xl bg-slate-900 border border-indigo-500/50 text-slate-100 text-xs font-semibold shadow-2xl flex items-center gap-2 animate-bounce">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Report Book Modal Overlay */}
        {showReportModal && (
          <div className="absolute inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-6 flex items-center justify-center animate-fade-in">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-100 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Report Book: {book.title}
                </h4>
                <button
                  onClick={() => setShowReportModal(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSubmitReport} className="space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Reason for Report</label>
                  <select
                    value={reportReason}
                    onChange={(e) => setReportReason(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 outline-none"
                  >
                    <option value="Copyright Concern">Copyright Concern / Rights Inquiry</option>
                    <option value="Incorrect Information">Incorrect Technical Information</option>
                    <option value="Broken Book">Broken Formatting / Missing Chapters</option>
                    <option value="Spam">Spam or Duplicate Content</option>
                    <option value="Inappropriate Content">Inappropriate Content</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Details & Feedback</label>
                  <textarea
                    rows={3}
                    value={reportNotes}
                    onChange={(e) => setReportNotes(e.target.value)}
                    placeholder="Please specify chapter number, errata or details..."
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 outline-none"
                    required
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowReportModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={reportSubmitted}
                    className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold"
                  >
                    {reportSubmitted ? 'Submitting...' : 'Submit Report'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
