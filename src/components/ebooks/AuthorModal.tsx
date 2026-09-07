import React from 'react';
import { AuthorProfile, EBookItem } from '../../types';
import { AUTHORS_DATA } from '../../data/authorsData';
import { EBOOKS_DATA } from '../../data/ebooksData';
import { 
  X, 
  CheckCircle2, 
  BookOpen, 
  Globe, 
  Github, 
  Twitter, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AuthorModalProps {
  authorId: string;
  onClose: () => void;
  onSelectBook: (book: EBookItem) => void;
}

export const AuthorModal: React.FC<AuthorModalProps> = ({
  authorId,
  onClose,
  onSelectBook
}) => {
  const author: AuthorProfile = AUTHORS_DATA.find(a => a.id === authorId) || {
    id: authorId,
    name: 'Verified Technical Author',
    role: 'Editorial Contributor',
    bio: 'Academic researcher, software practitioner, and open-source educator contributing to the HK HUB Digital Library.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    publishedBooksCount: 2,
    verified: true
  };

  const authorBooks = EBOOKS_DATA.filter(b => b.authorId === authorId || b.author.includes(author.name));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-900 border-b border-slate-800 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img
              src={author.avatarUrl}
              alt={author.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-indigo-500/40 shadow-lg"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-100">{author.name}</h3>
                {author.verified && (
                  <span title="Verified Author">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-indigo-400 font-medium">{author.role}</p>
              
              {/* Social links */}
              {author.socialLinks && (
                <div className="flex items-center gap-2.5 mt-2 text-slate-400">
                  {author.socialLinks.website && (
                    <a href={author.socialLinks.website} target="_blank" rel="noreferrer" className="hover:text-indigo-300">
                      <Globe className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {author.socialLinks.github && (
                    <a href={author.socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-indigo-300">
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {author.socialLinks.twitter && (
                    <a href={author.socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-indigo-300">
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Bio */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Author Biography</h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-slate-800/80">
              {author.bio}
            </p>
          </div>

          {/* Published Books */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Published Works in HK HUB ({authorBooks.length})
              </h4>
            </div>

            <div className="space-y-2.5">
              {authorBooks.map(book => (
                <div
                  key={book.id}
                  onClick={() => {
                    onSelectBook(book);
                    onClose();
                  }}
                  className="p-3.5 rounded-2xl bg-slate-950/60 hover:bg-slate-800/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-12 rounded-lg bg-gradient-to-br ${book.coverGradient} shrink-0 p-1 flex items-center justify-center text-white text-[9px] font-bold text-center`}>
                      {book.pages}p
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors line-clamp-1">
                        {book.title}
                      </h5>
                      <p className="text-xs text-slate-400 line-clamp-1">{book.category} • {book.difficulty}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-bold text-emerald-400">
                      {book.isFree ? 'FREE' : `₹${book.price}`}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
