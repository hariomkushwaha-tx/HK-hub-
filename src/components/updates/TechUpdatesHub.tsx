import React, { useState } from 'react';
import { TECH_UPDATES_DATA } from '../../data/newsData';
import { useApp } from '../../context/AppContext';
import { copyToClipboard } from '../../utils/clipboard';
import { Newspaper, Calendar, Clock, ArrowRight, CheckCircle2, Filter, Sparkles, Share2 } from 'lucide-react';

export const TechUpdatesHub: React.FC = () => {
  const { theme } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['all', 'Web', 'AI', 'Technology', 'Software', 'Gadgets'];

  const filteredUpdates = selectedCategory === 'all'
    ? TECH_UPDATES_DATA
    : TECH_UPDATES_DATA.filter(u => u.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleShare = async (id: string, title: string) => {
    await copyToClipboard(`${title} - Read on HK HUB`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div id="tech-updates-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold">
          <Newspaper className="w-3.5 h-3.5" />
          <span>Curated Technology Dispatches</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
          Tech Updates & Ecosystem News
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Concise, high-signal briefings on software breakthroughs, web standards, browser capabilities, security evolutions, and AI hardware.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            id={`news-cat-${cat.toLowerCase()}`}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-colors ${
              selectedCategory.toLowerCase() === cat.toLowerCase()
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {cat === 'all' ? 'All Updates' : cat}
          </button>
        ))}
      </div>

      {/* Updates Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredUpdates.map((item) => (
          <article
            key={item.id}
            id={`update-${item.id}`}
            className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-indigo-500/15 text-indigo-400 border border-indigo-500/25">
                    {item.tag}
                  </span>
                  <span className="text-slate-500 font-medium">{item.source}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.date}</span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-slate-100 hover:text-indigo-300 transition-colors leading-snug">
                {item.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.summary}
              </p>

              {/* Bulleted Highlights */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Key Highlights</span>
                {item.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{item.readTime}</span>
              </span>

              <button
                onClick={() => handleShare(item.id, item.title)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedId === item.id ? 'Copied!' : 'Share'}</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
