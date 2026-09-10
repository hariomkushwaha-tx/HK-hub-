import React, { useState } from 'react';
import { EBOOK_CATEGORIES } from '../../data/ebooksData';
import { 
  X, 
  UploadCloud, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  BookOpen
} from 'lucide-react';

interface BookSubmissionModalProps {
  onClose: () => void;
  onSubmitSuccess?: (newBookDraft: any) => void;
}

export const BookSubmissionModal: React.FC<BookSubmissionModalProps> = ({
  onClose,
  onSubmitSuccess
}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [category, setCategory] = useState<string>(EBOOK_CATEGORIES[1] || 'Coding & Programming');
  const [description, setDescription] = useState('');
  const [whatYoullLearnInput, setWhatYoullLearnInput] = useState('');
  const [priceType, setPriceType] = useState<'free' | 'paid'>('free');
  const [price, setPrice] = useState('0');
  const [copyrightDeclared, setCopyrightDeclared] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !authorName || !description) {
      alert('Please fill in required fields: Title, Author, and Description.');
      return;
    }
    if (!copyrightDeclared) {
      alert('Please confirm the copyright & intellectual property declaration.');
      return;
    }

    const draft = {
      id: `custom-book-${Date.now()}`,
      title,
      subtitle,
      author: authorName,
      category,
      description,
      price: priceType === 'free' ? 0 : parseInt(price) || 99,
      isFree: priceType === 'free',
      status: 'Under Review'
    };

    if (onSubmitSuccess) onSubmitSuccess(draft);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-indigo-950/90 via-slate-900 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UploadCloud className="w-5 h-5 text-indigo-400" />
            <div>
              <h3 className="text-base font-bold text-slate-100">Submit Technical Book / Study Guide</h3>
              <p className="text-xs text-slate-400">Author & Educator Publishing Workflow</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1 text-xs">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="font-bold text-slate-300">Book Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Distributed Systems Architecture & Consensus"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Subtitle / Tagline</label>
                  <input
                    type="text"
                    placeholder="e.g. A Practical Guide for Engineers"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Author / Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Prof. R. K. Sharma or Open CS Guild"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Category *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500"
                  >
                    {EBOOK_CATEGORIES.filter(c => c !== 'All Books').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Pricing Model</label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => { setPriceType('free'); setPrice('0'); }}
                      className={`flex-1 py-2 rounded-xl border text-center font-semibold transition-all ${
                        priceType === 'free'
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      ₹0 Free Open Access
                    </button>
                    <button
                      type="button"
                      onClick={() => { setPriceType('paid'); setPrice('99'); }}
                      className={`flex-1 py-2 rounded-xl border text-center font-semibold transition-all ${
                        priceType === 'paid'
                          ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      Paid Royalty
                    </button>
                  </div>
                </div>
              </div>

              {priceType === 'paid' && (
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Set Price in INR (₹)</label>
                  <input
                    type="number"
                    min="1"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                  <p className="text-[10px] text-slate-400">Authors receive 85% of royalty after platform and processing fees.</p>
                </div>
              )}

              <div className="space-y-1">
                <label className="font-bold text-slate-300">Book Overview & Abstract *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Summarize the core focus, target audience, and academic value..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-300">What You'll Learn (Comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Master consensus algorithms, Design Paxos & Raft, Fault tolerance"
                  value={whatYoullLearnInput}
                  onChange={(e) => setWhatYoullLearnInput(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Copyright Compliance Checkbox */}
              <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={copyrightDeclared}
                    onChange={(e) => setCopyrightDeclared(e.target.checked)}
                    className="mt-0.5 rounded border-slate-700 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-slate-300 text-[11px] leading-relaxed">
                    <strong className="text-slate-100 font-semibold">Copyright & Originality Warranty:</strong> I declare that I am the author or authorized publisher of this educational material, or that it is published under an explicit open-access license (e.g. Creative Commons / Public Domain). I understand unauthorized pirated content is strictly prohibited on HK VELORA.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Draft for Editorial Review</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-100">Draft Submitted Successfully!</h4>
                <p className="text-xs text-slate-400">
                  Your book <strong className="text-slate-200">"{title}"</strong> has been queued for editorial review and copyright verification. You will receive an email once published to the HK VELORA Digital Library.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs"
              >
                Return to Library
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
