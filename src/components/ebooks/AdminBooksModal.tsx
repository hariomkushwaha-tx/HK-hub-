import React, { useState, useMemo } from 'react';
import { EBookItem } from '../../types';
import { 
  X, 
  Settings2, 
  Edit3, 
  CheckCircle2, 
  ShieldCheck, 
  Plus, 
  Trash2, 
  Sparkles,
  Search,
  DollarSign,
  BarChart3,
  BookOpen,
  FileCheck2,
  AlertTriangle,
  Flame,
  Calendar,
  Layers,
  ArrowUpRight,
  Filter,
  Check,
  Eye,
  ShoppingBag,
  Clock,
  Send
} from 'lucide-react';

interface AdminBooksModalProps {
  booksList: EBookItem[];
  onClose: () => void;
  onUpdateBook: (updated: EBookItem) => void;
  onAddNewBook: (newBook: EBookItem) => void;
}

type AdminTab = 'catalog' | 'analytics' | 'submissions' | 'moderation';
type DateRange = 'today' | '7d' | '30d' | '90d' | 'year';

interface SubmissionItem {
  id: string;
  title: string;
  author: string;
  category: string;
  proposedPrice: number;
  submittedAt: string;
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Approved' | 'Rejected' | 'Published';
  rightsDeclared: boolean;
  notes: string;
}

interface ModerationReport {
  id: string;
  bookId: string;
  bookTitle: string;
  reporterName: string;
  type: 'Copyright Concern' | 'Incorrect Information' | 'Broken Book' | 'Spam' | 'Inappropriate Content';
  date: string;
  description: string;
  status: 'Open' | 'Reviewed' | 'Resolved' | 'Action Taken';
}

export const AdminBooksModal: React.FC<AdminBooksModalProps> = ({
  booksList,
  onClose,
  onUpdateBook,
  onAddNewBook
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('catalog');
  const [search, setSearch] = useState('');
  const [dateRange, setDateRange] = useState<DateRange>('30d');
  const [editingBook, setEditingBook] = useState<EBookItem | null>(null);

  // Submissions State
  const [submissionsList, setSubmissionsList] = useState<SubmissionItem[]>([
    {
      id: 'sub-101',
      title: 'Rust for High-Performance Systems & WebAssembly',
      author: 'Vikram Joshi (Systems Engineer)',
      category: 'Coding & Programming',
      proposedPrice: 0,
      submittedAt: '2 days ago',
      status: 'Under Review',
      rightsDeclared: true,
      notes: 'Open educational handbook with original code walkthroughs and benchmarks.'
    },
    {
      id: 'sub-102',
      title: 'Zero-Trust Cybersecurity Architecture & SOC Operations',
      author: 'Neha R. (Security Researcher)',
      category: 'Cybersecurity',
      proposedPrice: 199,
      submittedAt: '5 days ago',
      status: 'Submitted',
      rightsDeclared: true,
      notes: 'Original enterprise guide, zero copyrighted materials, verified diagrams.'
    }
  ]);

  // Moderation / Copyright Reports State
  const [reportsList, setReportsList] = useState<ModerationReport[]>([
    {
      id: 'rep-201',
      bookId: 'book-python-zero-to-hero',
      bookTitle: 'Python 3: From Zero to Industry Developer',
      reporterName: 'Academic Reviewer #14',
      type: 'Incorrect Information',
      date: 'Yesterday',
      description: 'Chapter 2 syntax notes mention Python 2 print statement in legacy comparison note; needs clarification.',
      status: 'Open'
    }
  ]);

  // Filtered books for catalog tab
  const filtered = useMemo(() => {
    return booksList.filter(b => 
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [booksList, search]);

  // Analytics Aggregation (computed from actual books & date range multiplier)
  const analyticsData = useMemo(() => {
    const totalBooks = booksList.length;
    const freeBooks = booksList.filter(b => b.isFree).length;
    const paidBooks = totalBooks - freeBooks;

    const multiplier = dateRange === 'today' ? 0.08 : dateRange === '7d' ? 0.28 : dateRange === '30d' ? 1 : dateRange === '90d' ? 2.6 : 8.5;

    const baseReads = booksList.reduce((acc, b) => acc + (b.reviewCount || 10) * 18, 0);
    const totalReads = Math.round(baseReads * multiplier);
    const totalPreviews = Math.round(totalReads * 1.85);
    const totalPurchases = Math.round(paidBooks * 42 * multiplier);
    const avgPaidPrice = 149;
    const estimatedRevenue = Math.round(totalPurchases * avgPaidPrice);

    // Categories breakdown
    const catCounts: Record<string, number> = {};
    booksList.forEach(b => {
      catCounts[b.category] = (catCounts[b.category] || 0) + 1;
    });

    return {
      totalBooks,
      freeBooks,
      paidBooks,
      totalReads,
      totalPreviews,
      totalPurchases,
      estimatedRevenue,
      catCounts
    };
  }, [booksList, dateRange]);

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBook) return;
    onUpdateBook(editingBook);
    setEditingBook(null);
  };

  const handleUpdateSubmissionStatus = (id: string, newStatus: SubmissionItem['status']) => {
    setSubmissionsList(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  const handleResolveReport = (id: string, newStatus: ModerationReport['status']) => {
    setReportsList(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div 
      id="admin-books-modal" 
      role="dialog"
      aria-modal="true"
      aria-label="Library Admin Panel"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-indigo-950/90 via-slate-900 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Settings2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-100">HK VELORA Library Admin Dashboard</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Authorized Admin
                </span>
              </div>
              <p className="text-xs text-slate-400">Complete catalog control, analytics, author submissions, and copyright moderation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Admin Modal"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Navigation Bar */}
        <div className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 pt-3 border-b border-slate-800 bg-slate-950/60 overflow-x-auto scrollbar-none">
          {[
            { id: 'catalog', label: `Books Catalog (${booksList.length})`, icon: <BookOpen className="w-4 h-4" /> },
            { id: 'analytics', label: 'Analytics & Performance', icon: <BarChart3 className="w-4 h-4" /> },
            { id: 'submissions', label: `Submissions Queue (${submissionsList.length})`, icon: <FileCheck2 className="w-4 h-4" /> },
            { id: 'moderation', label: `Reports & Copyright (${reportsList.length})`, icon: <ShieldCheck className="w-4 h-4" /> },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTab(t.id as AdminTab);
                setEditingBook(null);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === t.id
                  ? 'border-indigo-500 text-indigo-400 bg-slate-900/90'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 text-xs">
          {/* TAB 1: CATALOG MANAGEMENT */}
          {activeTab === 'catalog' && (
            <>
              {editingBook ? (
                /* Edit Book Form */
                <form onSubmit={handleSaveEdit} className="space-y-4 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h4 className="font-bold text-sm text-slate-100 flex items-center gap-2">
                      <Edit3 className="w-4 h-4 text-indigo-400" />
                      Editing Book: {editingBook.title}
                    </h4>
                    <button
                      type="button"
                      onClick={() => setEditingBook(null)}
                      className="text-xs text-slate-400 hover:text-slate-200"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Book Title</label>
                      <input
                        type="text"
                        value={editingBook.title}
                        onChange={(e) => setEditingBook({ ...editingBook, title: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-indigo-500 outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Author</label>
                      <input
                        type="text"
                        value={editingBook.author}
                        onChange={(e) => setEditingBook({ ...editingBook, author: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-indigo-500 outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Category</label>
                      <input
                        type="text"
                        value={editingBook.category}
                        onChange={(e) => setEditingBook({ ...editingBook, category: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-indigo-500 outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Book Type</label>
                      <select
                        value={editingBook.bookType || 'E-Book'}
                        onChange={(e) => setEditingBook({ ...editingBook, bookType: e.target.value as any })}
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-indigo-500 outline-none"
                      >
                        <option value="E-Book">E-Book</option>
                        <option value="Handbook">Handbook</option>
                        <option value="Guide">Guide</option>
                        <option value="Textbook">Textbook (School)</option>
                        <option value="Study Guide">Study Guide (School)</option>
                        <option value="Revision Book">Revision Book (School)</option>
                        <option value="Story">Story / Literature</option>
                        <option value="Puzzle Book">Puzzle Book</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Academic Class (Optional)</label>
                      <select
                        value={editingBook.schoolClass || ''}
                        onChange={(e) => setEditingBook({ ...editingBook, schoolClass: (e.target.value || undefined) as any })}
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-indigo-500 outline-none"
                      >
                        <option value="">None (General / Tech / Story)</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Stream (For Class 11-12)</label>
                      <select
                        value={editingBook.stream || ''}
                        onChange={(e) => setEditingBook({ ...editingBook, stream: (e.target.value || undefined) as any })}
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-indigo-500 outline-none"
                      >
                        <option value="">None / General</option>
                        <option value="Science">Science (PCM/PCB)</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Humanities / Arts">Humanities & Arts</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Subject</label>
                      <input
                        type="text"
                        placeholder="e.g. Mathematics, Science, Physics"
                        value={editingBook.subject || ''}
                        onChange={(e) => setEditingBook({ ...editingBook, subject: e.target.value || undefined })}
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-indigo-500 outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Copyright Status</label>
                      <input
                        type="text"
                        value={editingBook.copyrightStatus || 'Open Educational Resource'}
                        onChange={(e) => setEditingBook({ ...editingBook, copyrightStatus: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-indigo-500 outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Price (₹) — Set 0 for 100% Free</label>
                      <input
                        type="number"
                        value={editingBook.price}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setEditingBook({ ...editingBook, price: val, isFree: val === 0 });
                        }}
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-indigo-500 outline-none font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Discount Percentage (%)</label>
                      <input
                        type="number"
                        value={editingBook.discountPercentage || 0}
                        onChange={(e) => setEditingBook({ ...editingBook, discountPercentage: Number(e.target.value) })}
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-indigo-500 outline-none font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-slate-300">Rating (0 - 5.0)</label>
                      <input
                        type="number"
                        step="0.1"
                        max="5"
                        value={editingBook.rating}
                        onChange={(e) => setEditingBook({ ...editingBook, rating: Number(e.target.value) })}
                        className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 focus:border-indigo-500 outline-none font-mono"
                      />
                    </div>
                  </div>

                  {/* Badges and Shelves */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <p className="font-bold text-slate-300 mb-2">Shelf Placement & Badges</p>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                        <input
                          type="checkbox"
                          checked={editingBook.featured}
                          onChange={(e) => setEditingBook({ ...editingBook, featured: e.target.checked })}
                          className="rounded border-slate-700 text-indigo-600"
                        />
                        <span>Featured Hero Shelf</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                        <input
                          type="checkbox"
                          checked={editingBook.trending}
                          onChange={(e) => setEditingBook({ ...editingBook, trending: e.target.checked })}
                          className="rounded border-slate-700 text-amber-600"
                        />
                        <span>Trending Shelf</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                        <input
                          type="checkbox"
                          checked={editingBook.studentPick}
                          onChange={(e) => setEditingBook({ ...editingBook, studentPick: e.target.checked })}
                          className="rounded border-slate-700 text-cyan-600"
                        />
                        <span>Student Pick</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                        <input
                          type="checkbox"
                          checked={editingBook.isFree}
                          onChange={(e) => {
                            const isF = e.target.checked;
                            setEditingBook({ ...editingBook, isFree: isF, price: isF ? 0 : (editingBook.price || 99) });
                          }}
                          className="rounded border-slate-700 text-emerald-600"
                        />
                        <span>100% Free Open-Access</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-3 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setEditingBook(null)}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-md shadow-indigo-500/20"
                    >
                      Save Book Changes
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  {/* Search Bar */}
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search books by title, author, or category to edit..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Table of Books */}
                  <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/60">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 bg-slate-900/80 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          <th className="p-3">Book Title</th>
                          <th className="p-3">Category</th>
                          <th className="p-3">Pricing</th>
                          <th className="p-3">Badges</th>
                          <th className="p-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {filtered.map(book => (
                          <tr key={book.id} className="hover:bg-slate-900/50 transition-colors">
                            <td className="p-3">
                              <p className="font-bold text-slate-200 line-clamp-1">{book.title}</p>
                              <p className="text-[10px] text-slate-400">{book.author}</p>
                            </td>
                            <td className="p-3">
                              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                                {book.category}
                              </span>
                            </td>
                            <td className="p-3 font-mono font-bold">
                              {book.isFree ? (
                                <span className="text-emerald-400">FREE (₹0)</span>
                              ) : (
                                <span className="text-indigo-400">₹{book.price}</span>
                              )}
                            </td>
                            <td className="p-3">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {book.featured && (
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold">Featured</span>
                                )}
                                {book.trending && (
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">Trending</span>
                                )}
                                {book.studentPick && (
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold">Student</span>
                                )}
                              </div>
                            </td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => setEditingBook(book)}
                                className="px-3 py-1 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 font-semibold border border-indigo-500/30 transition-colors"
                              >
                                Edit Book
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </>
          )}

          {/* TAB 2: ANALYTICS & PERFORMANCE (Section 47) */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* Date Range Selector */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div>
                  <h4 className="font-bold text-slate-100 text-sm">Library Reading & Revenue Metrics</h4>
                  <p className="text-[11px] text-slate-400">Aggregated real-time analytics across all published textbooks & guides</p>
                </div>
                <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800">
                  {[
                    { id: 'today', label: 'Today' },
                    { id: '7d', label: '7 Days' },
                    { id: '30d', label: '30 Days' },
                    { id: '90d', label: '90 Days' },
                    { id: 'year', label: 'This Year' }
                  ].map(dr => (
                    <button
                      key={dr.id}
                      onClick={() => setDateRange(dr.id as DateRange)}
                      className={`px-3 py-1 rounded-lg font-medium text-xs transition-all ${
                        dateRange === dr.id
                          ? 'bg-indigo-600 text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {dr.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* KPI Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Books</span>
                  <p className="text-2xl font-black text-slate-100">{analyticsData.totalBooks}</p>
                  <p className="text-[10px] text-emerald-400 font-semibold">{analyticsData.freeBooks} Free • {analyticsData.paidBooks} Paid</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Chapter Reads</span>
                  <p className="text-2xl font-black text-cyan-400">{analyticsData.totalReads.toLocaleString()}</p>
                  <p className="text-[10px] text-slate-400">In-viewer completions</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Previews & Hits</span>
                  <p className="text-2xl font-black text-purple-400">{analyticsData.totalPreviews.toLocaleString()}</p>
                  <p className="text-[10px] text-slate-400">Chapters & TOC clicks</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Est. Sales / Unlocks</span>
                  <p className="text-2xl font-black text-emerald-400">₹{analyticsData.estimatedRevenue.toLocaleString()}</p>
                  <p className="text-[10px] text-slate-400">{analyticsData.totalPurchases} paid unlocks</p>
                </div>
              </div>

              {/* Category Breakdown & Popular Books */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h5 className="font-bold text-slate-200 text-xs uppercase tracking-wider">Category Distribution</h5>
                  <div className="space-y-2">
                    {Object.entries(analyticsData.catCounts).map(([cat, count]) => (
                      <div key={cat} className="flex items-center justify-between text-xs py-1 border-b border-slate-800/60 last:border-0">
                        <span className="text-slate-300">{cat}</span>
                        <span className="font-mono font-bold text-indigo-400">{count} books</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h5 className="font-bold text-slate-200 text-xs uppercase tracking-wider">Most Read Titles</h5>
                  <div className="space-y-2">
                    {booksList.slice(0, 5).map((b, idx) => (
                      <div key={b.id} className="flex items-center justify-between text-xs py-1 border-b border-slate-800/60 last:border-0">
                        <span className="text-slate-300 truncate max-w-[200px]">{idx + 1}. {b.title}</span>
                        <span className="font-mono text-cyan-400 font-semibold">{b.rating} ⭐ ({b.reviewCount || 0})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SUBMISSIONS QUEUE (Section 49) */}
          {activeTab === 'submissions' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-100 text-sm">Author & Community Submissions</h4>
                  <p className="text-[11px] text-slate-400">Workflow: Draft → Submitted → Under Review → Approved / Rejected → Published</p>
                </div>
              </div>

              <div className="space-y-3">
                {submissionsList.map(sub => (
                  <div key={sub.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="font-bold text-slate-200 text-sm">{sub.title}</h5>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            sub.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                            sub.status === 'Rejected' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' :
                            'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          }`}>
                            {sub.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">By {sub.author} • Category: {sub.category} • Submitted {sub.submittedAt}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        {sub.rightsDeclared && (
                          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Rights Declared
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                      <strong>Submission Notes:</strong> {sub.notes}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                      <span className="text-slate-400 font-mono">Proposed Price: ₹{sub.proposedPrice}</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleUpdateSubmissionStatus(sub.id, 'Approved')}
                          className="px-3 py-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 font-semibold border border-emerald-500/30 transition-colors"
                        >
                          Approve & Publish
                        </button>
                        <button
                          onClick={() => handleUpdateSubmissionStatus(sub.id, 'Rejected')}
                          className="px-3 py-1 rounded-lg bg-rose-600/20 hover:bg-rose-600/40 text-rose-300 font-semibold border border-rose-500/30 transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MODERATION & COPYRIGHT REPORTS (Section 50 & 67) */}
          {activeTab === 'moderation' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-100 text-sm">Copyright & Content Reports Queue</h4>
                <p className="text-[11px] text-slate-400">Review community reports regarding copyright clarity, technical corrections, or broken links</p>
              </div>

              <div className="space-y-3">
                {reportsList.map(rep => (
                  <div key={rep.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                            {rep.type}
                          </span>
                          <h5 className="font-bold text-slate-200 text-xs sm:text-sm">{rep.bookTitle}</h5>
                        </div>
                        <p className="text-[11px] text-slate-400">Reported by {rep.reporterName} • {rep.date}</p>
                      </div>

                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        rep.status === 'Resolved' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-300'
                      }`}>
                        {rep.status}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                      {rep.description}
                    </p>

                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800/80">
                      <button
                        onClick={() => handleResolveReport(rep.id, 'Resolved')}
                        className="px-3 py-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 font-semibold border border-emerald-500/30 transition-colors"
                      >
                        Mark Resolved
                      </button>
                      <button
                        onClick={() => handleResolveReport(rep.id, 'Action Taken')}
                        className="px-3 py-1 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 font-semibold border border-indigo-500/30 transition-colors"
                      >
                        Temporarily Unpublish
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
