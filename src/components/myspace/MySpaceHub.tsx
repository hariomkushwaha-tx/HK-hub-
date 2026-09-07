import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { ALL_TOOLS } from '../../data/toolsData';
import { COMPREHENSIVE_GUIDES } from '../../data/guidesData';
import { EBOOKS_DATA } from '../../data/ebooksData';
import { EBookItem } from '../../types';
import { EBookReaderModal } from '../ebooks/EBookReaderModal';
import { 
  UserCircle, 
  Star, 
  BookOpen, 
  Wrench, 
  Award, 
  ShieldCheck, 
  Edit3, 
  FolderGit2, 
  ExternalLink,
  Plus,
  BookMarked,
  Download,
  Trash2,
  Headphones,
  Sparkles,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const MySpaceHub: React.FC = () => {
  const { 
    userProfile, 
    updateProfile, 
    bookmarkedIds, 
    openTool, 
    openGuide, 
    setActiveTab, 
    setUserModalOpen,
    projects,
    unlockedBookIds,
    wishlistBookIds,
    bookOrders,
    readingProgressMap,
    theme 
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const displayName = userProfile?.name || userProfile?.fullName || 'Alex Student';
  const [name, setName] = useState(displayName);
  const [bio, setBio] = useState(userProfile?.bio || '');
  const [skillsInput, setSkillsInput] = useState((userProfile?.skills || []).join(', '));
  const [libraryFilter, setLibraryFilter] = useState<'all' | 'reading' | 'unlocked' | 'free' | 'wishlist' | 'audio'>('all');

  const [activeReadingBook, setActiveReadingBook] = useState<EBookItem | null>(null);

  const savedTools = ALL_TOOLS.filter(t => (bookmarkedIds || []).includes(t.id));
  const savedGuides = COMPREHENSIVE_GUIDES.filter(g => (bookmarkedIds || []).includes(g.id));
  const savedBooks = EBOOKS_DATA.filter(b => 
    (bookmarkedIds || []).includes(b.id) || 
    (wishlistBookIds || []).includes(b.id) ||
    (unlockedBookIds || []).includes(b.id)
  );

  const filteredLibraryBooks = useMemo(() => {
    return savedBooks.filter(b => {
      if (libraryFilter === 'reading') return !!readingProgressMap[b.id];
      if (libraryFilter === 'unlocked') return (unlockedBookIds || []).includes(b.id);
      if (libraryFilter === 'free') return b.isFree;
      if (libraryFilter === 'wishlist') return (wishlistBookIds || []).includes(b.id);
      if (libraryFilter === 'audio') return !!b.hasAudioBook;
      return true;
    });
  }, [savedBooks, libraryFilter, readingProgressMap, unlockedBookIds, wishlistBookIds]);
  const userProjects = projects.filter(p => p.authorUsername === userProfile?.username);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const skills = skillsInput.split(',').map(s => s.trim()).filter(Boolean);
    updateProfile({
      name,
      fullName: name,
      bio,
      skills
    });
    setIsEditing(false);
  };

  return (
    <div id="myspace-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Profile Overview Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-indigo-500/25">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-slate-100">{displayName}</h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                  {userProfile?.role || 'Student'}
                </span>
              </div>
              <p className="text-xs text-slate-400">@{userProfile?.username || 'tech_explorer'} • HK HUB Member</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              id="myspace-edit-toggle-btn"
              onClick={() => setIsEditing(prev => !prev)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5 text-indigo-400" />
              <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
            </button>
            <button
              id="myspace-modal-btn"
              onClick={() => setUserModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs"
            >
              <UserCircle className="w-3.5 h-3.5" />
              <span>Full Profile Modal</span>
            </button>
          </div>
        </div>

        {isEditing ? (
          <form onSubmit={handleSave} className="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Skills (comma separated)</label>
                <input
                  type="text"
                  value={skillsInput}
                  onChange={e => setSkillsInput(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Bio & Learning Focus</label>
              <textarea
                rows={2}
                value={bio}
                onChange={e => setBio(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold"
            >
              Save Profile Changes
            </button>
          </form>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              {userProfile?.bio}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {(userProfile?.skills || []).map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-lg bg-indigo-600/15 text-indigo-300 border border-indigo-500/25 font-mono font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Stats and Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Saved Utilities', val: savedTools.length, icon: <Wrench className="w-5 h-5 text-indigo-400" /> },
          { label: 'Saved E-Books', val: savedBooks.length, icon: <BookMarked className="w-5 h-5 text-pink-400" /> },
          { label: 'Bookmarked Guides', val: savedGuides.length, icon: <BookOpen className="w-5 h-5 text-blue-400" /> },
          { label: 'Showcased Projects', val: userProjects.length, icon: <FolderGit2 className="w-5 h-5 text-emerald-400" /> },
        ].map((s, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-800">{s.icon}</div>
            <div>
              <p className="text-lg font-black text-slate-100">{s.val}</p>
              <p className="text-xs text-slate-400">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Personal My Library Section (Section 52) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-indigo-400" />
            <div>
              <h2 className="text-lg font-bold text-slate-100">Personal My Library ({savedBooks.length})</h2>
              <p className="text-xs text-slate-400">Continue reading, review bookmarks, and access unlocked textbooks</p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('ebooks')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 self-start sm:self-auto"
          >
            Explore E-Books Hub →
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
          {[
            { id: 'all', label: `All Books (${savedBooks.length})` },
            { id: 'reading', label: `Currently Reading (${savedBooks.filter(b => !!readingProgressMap[b.id]).length})` },
            { id: 'unlocked', label: `Unlocked & Owned (${savedBooks.filter(b => (unlockedBookIds || []).includes(b.id)).length})` },
            { id: 'free', label: `100% Free (${savedBooks.filter(b => b.isFree).length})` },
            { id: 'wishlist', label: `Wishlist (${savedBooks.filter(b => (wishlistBookIds || []).includes(b.id)).length})` },
            { id: 'audio', label: `Audio Editions (${savedBooks.filter(b => !!b.hasAudioBook).length})` },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setLibraryFilter(f.id as any)}
              className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all ${
                libraryFilter === f.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filteredLibraryBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLibraryBooks.map(book => {
              const prog = readingProgressMap[book.id];
              const isUnlocked = book.isFree || (unlockedBookIds || []).includes(book.id);

              return (
                <div
                  key={book.id}
                  className="p-5 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-4 shadow-md relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 px-2 py-0.5 rounded bg-slate-800">
                        {book.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {book.hasAudioBook && (
                          <span title="Audio narration available">
                            <Headphones className="w-3.5 h-3.5 text-cyan-400" />
                          </span>
                        )}
                        <span className="text-[11px] text-slate-400 font-mono">
                          {book.pages} pages
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-sm text-slate-100 mt-2 line-clamp-1">{book.title}</h3>
                    <p className="text-xs text-slate-400">By {book.author}</p>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-2 leading-relaxed">{book.description}</p>
                  </div>

                  {/* Reading Progress Indicator if active */}
                  {prog && (
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-indigo-400 font-semibold truncate max-w-[170px]">
                          {prog.currentChapterTitle}
                        </span>
                        <span className="font-mono text-slate-300 font-bold">{prog.percentage}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-300"
                          style={{ width: `${prog.percentage}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-800">
                    <button
                      onClick={() => setActiveReadingBook(book)}
                      className="flex-1 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{prog ? 'Continue Reading' : 'Read Book'}</span>
                    </button>

                    <a
                      href={book.downloadUrl || book.readOnlineUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                      title="Download PDF or Open Official Site"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 text-center space-y-2">
            <p className="text-sm text-slate-400">No books found matching this filter.</p>
            <button
              onClick={() => {
                setLibraryFilter('all');
                setActiveTab('ebooks');
              }}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold"
            >
              Browse E-Books Catalog
            </button>
          </div>
        )}
      </div>

      {/* Book Orders & Invoices (If any purchases made) */}
      {bookOrders && bookOrders.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h2 className="text-lg font-bold text-slate-100">Digital Library Orders & Receipts ({bookOrders.length})</h2>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Book Title</th>
                  <th className="p-3">Payment</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Date</th>
                  <th className="p-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {bookOrders.map(order => (
                  <tr key={order.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-3 font-mono text-indigo-400 font-bold">{order.id}</td>
                    <td className="p-3 font-medium text-slate-200">{order.bookTitle}</td>
                    <td className="p-3 text-slate-400">{order.paymentMethod || 'UPI / QR'}</td>
                    <td className="p-3 font-bold text-slate-200">₹{order.amount}</td>
                    <td className="p-3 text-slate-400">{order.date}</td>
                    <td className="p-3 text-right">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Bookmarked Tools */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <h2 className="text-lg font-bold text-slate-100">Saved Tools ({savedTools.length})</h2>
          </div>
          <button
            onClick={() => setActiveTab('tools')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Explore All Tools →
          </button>
        </div>

        {savedTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedTools.map(t => (
              <div
                key={t.id}
                onClick={() => openTool(t.id)}
                className="p-5 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/40 cursor-pointer transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 px-2 py-0.5 rounded bg-slate-800">
                    {t.category}
                  </span>
                  <h3 className="font-bold text-sm text-slate-100 mt-2">{t.name}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">{t.description}</p>
                </div>
                <span className="text-xs text-indigo-400 font-semibold flex items-center gap-1">
                  Launch Tool →
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 text-center space-y-2">
            <p className="text-sm text-slate-400">You haven't bookmarked any tools yet.</p>
            <button
              onClick={() => setActiveTab('tools')}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold"
            >
              Browse Free Tools Suite
            </button>
          </div>
        )}
      </div>

      {/* Bookmarked Guides */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <h2 className="text-lg font-bold text-slate-100">Saved Guides & Tutorials ({savedGuides.length})</h2>
          </div>
          <button
            onClick={() => setActiveTab('guides')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Explore All Guides →
          </button>
        </div>

        {savedGuides.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedGuides.map(g => (
              <div
                key={g.id}
                onClick={() => openGuide(g.id)}
                className="p-5 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/40 cursor-pointer transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 px-2 py-0.5 rounded bg-slate-800">
                    {g.category}
                  </span>
                  <h3 className="font-bold text-sm text-slate-100 mt-2">{g.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">{g.intro}</p>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <span>{g.readTime}</span>
                  <span className="text-indigo-400 font-semibold">Read →</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 text-center space-y-2">
            <p className="text-sm text-slate-400">No guides saved yet.</p>
            <button
              onClick={() => setActiveTab('guides')}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold"
            >
              Explore Technology & Student Guides
            </button>
          </div>
        )}
      </div>

      {/* Interactive E-Book Reader Modal in MySpace */}
      {activeReadingBook && (
        <EBookReaderModal
          book={activeReadingBook}
          onClose={() => setActiveReadingBook(null)}
        />
      )}
    </div>
  );
};
