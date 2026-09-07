import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { COMPREHENSIVE_GUIDES } from '../../data/guidesData';
import { GuideItem } from '../../types';
import { 
  BookOpen, 
  Clock, 
  ArrowLeft, 
  Star, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Search,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const GuidesHub: React.FC = () => {
  const { activeGuideId, setActiveGuideId, toggleBookmark, bookmarkedIds } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeGuide = useMemo(() => {
    return COMPREHENSIVE_GUIDES.find(g => g.id === activeGuideId);
  }, [activeGuideId]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    COMPREHENSIVE_GUIDES.forEach(g => set.add(g.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredGuides = useMemo(() => {
    return COMPREHENSIVE_GUIDES.filter(g => {
      const matchCat = selectedCategory === 'all' || g.category === selectedCategory;
      const matchQuery = !searchQuery || 
        g.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        g.intro.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div id="guides-hub-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {activeGuide ? (
        // Detailed Guide Article Reader
        <div id="active-guide-reader" className="max-w-4xl mx-auto space-y-6">
          <button
            id="back-to-guides-btn"
            onClick={() => setActiveGuideId(null)}
            className="flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Guides</span>
          </button>

          <article className="p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 space-y-8 shadow-xl">
            {/* Header Meta */}
            <div className="space-y-4 pb-6 border-b border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">
                    {activeGuide.category}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400">{activeGuide.difficulty}</span>
                </div>

                <button
                  onClick={() => toggleBookmark(activeGuide.id)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    (bookmarkedIds || []).includes(activeGuide.id)
                      ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Star className={`w-3.5 h-3.5 ${(bookmarkedIds || []).includes(activeGuide.id) ? 'fill-amber-400' : ''}`} />
                  <span>{(bookmarkedIds || []).includes(activeGuide.id) ? 'Saved' : 'Save Guide'}</span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-100 leading-tight">
                {activeGuide.title}
              </h1>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activeGuide.readTime} Read</span>
                <span>•</span>
                <span>Last Updated: {activeGuide.lastUpdated}</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                {activeGuide.intro}
              </p>
            </div>

            {/* Step-by-Step Sections */}
            <div className="space-y-6">
              <h3 className="text-base font-bold text-slate-100">Step-by-Step Instructions</h3>
              <div className="space-y-4">
                {activeGuide.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-xs font-bold font-mono">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-sm text-slate-100">{step.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-8">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tips Box */}
            {activeGuide.proTips && activeGuide.proTips.length > 0 && (
              <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-3">
                <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
                  <Lightbulb className="w-4 h-4 text-indigo-400" />
                  <span>HK HUB Pro Tips</span>
                </div>
                <div className="space-y-1.5 pl-6">
                  {activeGuide.proTips.map((tip, i) => (
                    <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Warnings Box */}
            {activeGuide.warnings && activeGuide.warnings.length > 0 && (
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>Important Precautions</span>
                </div>
                <div className="space-y-1.5 pl-6">
                  {activeGuide.warnings.map((w, i) => (
                    <div key={i} className="text-xs text-amber-200/90 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      ) : (
        // Guides Directory
        <div className="space-y-8">
          {/* Header Banner */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Tested & Practical Knowledge</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
              Technology & Student Guides
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              Step-by-step troubleshooting, privacy hardening, hardware optimization, and development walkthroughs created with clarity.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search guides..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map(guide => (
              <div
                key={guide.id}
                onClick={() => setActiveGuideId(guide.id)}
                className="group p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-indigo-950/20"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase tracking-wider text-indigo-400 font-mono text-[10px] px-2 py-0.5 rounded bg-slate-800">
                      {guide.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3 h-3" /> {guide.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-100 text-base group-hover:text-indigo-400 transition-colors">
                    {guide.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {guide.intro}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400">
                  <span>Read Complete Guide</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
