import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { TECH_CATEGORIES, COMMON_TROUBLESHOOTING_GUIDES } from '../../data/categoriesData';
import { TechCategory, TechArticle } from '../../types';
import { 
  Smartphone, 
  Laptop, 
  Wifi, 
  Package, 
  Globe, 
  ShieldAlert, 
  Search, 
  ArrowLeft, 
  Clock, 
  Star, 
  ChevronRight, 
  Wrench, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

export const TechnologyHub: React.FC = () => {
  const { activeTechCategory, setActiveTechCategory, toggleBookmark, bookmarkedIds } = useApp();
  const [selectedArticle, setSelectedArticle] = useState<TechArticle | null>(null);
  const [techSearch, setTechSearch] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'categories' | 'troubleshoot'>('categories');

  const currentCategory = useMemo(() => {
    return TECH_CATEGORIES.find(c => c.id === activeTechCategory);
  }, [activeTechCategory]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-indigo-400" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-blue-400" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-cyan-400" />;
      case 'Package': return <Package className="w-5 h-5 text-emerald-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-purple-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      default: return <Smartphone className="w-5 h-5" />;
    }
  };

  return (
    <div id="tech-hub-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* 1. If an article is currently being read */}
      {selectedArticle ? (
        <div id="tech-article-view" className="max-w-4xl mx-auto space-y-6">
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Category Articles</span>
          </button>

          <article className="p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="space-y-3 pb-6 border-b border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  {currentCategory?.title || 'Technology'}
                </span>
                <button
                  onClick={() => toggleBookmark(selectedArticle.id)}
                  className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    (bookmarkedIds || []).includes(selectedArticle.id)
                      ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Star className={`w-4 h-4 ${(bookmarkedIds || []).includes(selectedArticle.id) ? 'fill-amber-400' : ''}`} />
                  <span>{(bookmarkedIds || []).includes(selectedArticle.id) ? 'Saved' : 'Save'}</span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-100">{selectedArticle.title}</h1>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}</span>
                <span>•</span>
                <span>Practical Tech Knowledge</span>
              </div>
            </div>

            <div className="text-slate-300 text-sm leading-relaxed space-y-4 whitespace-pre-line font-sans">
              {selectedArticle.content}
            </div>
          </article>
        </div>
      ) : currentCategory ? (
        // 2. Category Detail View
        <div id="tech-category-view" className="space-y-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTechCategory(null)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <h2 className="text-2xl font-black text-slate-100">{currentCategory.title}</h2>
              <p className="text-xs text-slate-400 mt-0.5">{currentCategory.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentCategory.articles.map(article => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-all flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-indigo-950/20"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                    <span className="font-semibold text-indigo-400 group-hover:translate-x-0.5 transition-transform flex items-center">
                      Read Guide →
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-100 text-base group-hover:text-indigo-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // 3. Main Technology Hub Landing
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
              Technology Knowledge Hub
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              In-depth, practical explanations of computers, mobile devices, network protocols, system software, and digital security for modern learners.
            </p>
          </div>

          {/* Tab Switcher: Categories vs Troubleshooting */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setActiveTab('categories')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'categories' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Core Tech Domains
              </button>
              <button
                onClick={() => setActiveTab('troubleshoot')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'troubleshoot' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Troubleshooting & Quick Fixes
              </button>
            </div>
          </div>

          {activeTab === 'categories' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_CATEGORIES.map(cat => (
                <div
                  key={cat.id}
                  id={`tech-cat-${cat.id}`}
                  onClick={() => setActiveTechCategory(cat.id)}
                  className="group p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-all duration-200 space-y-4 hover:shadow-xl hover:shadow-indigo-950/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:border-indigo-500/40 transition-colors">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                      {cat.articles.length} Deep Guides
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-slate-100 group-hover:text-indigo-400 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">
                      {cat.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    {cat.articles.slice(0, 2).map((a, i) => (
                      <div key={i} className="text-xs text-slate-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        <span className="truncate">{a.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-indigo-400 pt-2">
                    <span>Explore {cat.title}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Troubleshooting Quick Fixes
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 flex items-center gap-3 text-xs text-indigo-300">
                <Wrench className="w-5 h-5 shrink-0 text-indigo-400" />
                <span>
                  Immediate, step-by-step diagnostic recipes for common smartphone, Wi-Fi, computer, and application issues.
                </span>
              </div>

              <div className="space-y-3">
                {COMMON_TROUBLESHOOTING_GUIDES.map(item => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-100 text-sm flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{item.problem}</span>
                      </h4>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {item.category}
                      </span>
                    </div>

                    <div className="space-y-1.5 pl-6">
                      {item.steps.map((step, idx) => (
                        <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
