import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { ALL_TOOLS, TOOL_CATEGORIES } from '../../data/toolsData';
import { ToolItem } from '../../types';
import { TextTools } from './subtools/TextTools';
import { DeveloperTools } from './subtools/DeveloperTools';
import { CalculatorTools } from './subtools/CalculatorTools';
import { UtilityTools } from './subtools/UtilityTools';
import { ImageTools } from './subtools/ImageTools';
import { PdfTools } from './subtools/PdfTools';
import { 
  Search, 
  Sparkles, 
  ArrowLeft, 
  Star, 
  ShieldCheck, 
  ExternalLink,
  Wrench,
  FileText,
  Image as ImageIcon,
  Code2,
  Calculator,
  Sliders
} from 'lucide-react';

export const ToolsHub: React.FC = () => {
  const { activeToolId, setActiveToolId, toggleBookmark, bookmarkedIds, theme } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeTool = useMemo(() => {
    return ALL_TOOLS.find(t => t.id === activeToolId);
  }, [activeToolId]);

  const filteredTools = useMemo(() => {
    return ALL_TOOLS.filter(t => {
      const matchCat = selectedCategory === 'all' || t.category === selectedCategory;
      const matchQuery = !searchQuery || 
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'text': return <FileText className="w-4 h-4" />;
      case 'image': return <ImageIcon className="w-4 h-4" />;
      case 'pdf': return <FileText className="w-4 h-4 text-rose-400" />;
      case 'developer': return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'calculator': return <Calculator className="w-4 h-4 text-amber-400" />;
      case 'utility': return <Sliders className="w-4 h-4 text-emerald-400" />;
      default: return <Wrench className="w-4 h-4" />;
    }
  };

  return (
    <div id="tools-hub-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* If a tool is currently open */}
      {activeTool ? (
        <div id="active-tool-workspace" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <button
                id="back-to-tools-list-btn"
                onClick={() => setActiveToolId(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                title="Back to all tools"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-100">{activeTool.name}</h2>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 uppercase font-mono font-semibold">
                    {activeTool.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{activeTool.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="bookmark-tool-btn"
                onClick={() => toggleBookmark(activeTool.id)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  (bookmarkedIds || []).includes(activeTool.id)
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Star className={`w-3.5 h-3.5 ${(bookmarkedIds || []).includes(activeTool.id) ? 'fill-amber-400' : ''}`} />
                <span>{(bookmarkedIds || []).includes(activeTool.id) ? 'Bookmarked' : 'Bookmark'}</span>
              </button>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Private & Client-Side</span>
              </div>
            </div>
          </div>

          {/* Active Tool Rendering Surface */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
            {activeTool.category === 'text' && <TextTools toolId={activeTool.id} />}
            {activeTool.category === 'developer' && <DeveloperTools toolId={activeTool.id} />}
            {activeTool.category === 'calculator' && <CalculatorTools toolId={activeTool.id} />}
            {activeTool.category === 'utility' && <UtilityTools toolId={activeTool.id} />}
            {activeTool.category === 'image' && <ImageTools toolId={activeTool.id} />}
            {activeTool.category === 'pdf' && <PdfTools toolId={activeTool.id} />}
          </div>
        </div>
      ) : (
        // Tools Directory / Hub view
        <div className="space-y-8">
          {/* Header Banner */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>30+ Functional Free Utilities</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
              HK VELORA Free Tools Suite
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fast, high-performance web utilities for students, coders, and everyday users. All tools run directly in your browser with zero latency and 100% privacy.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <button
                id="cat-pill-all"
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                All Tools ({ALL_TOOLS.length})
              </button>
              {TOOL_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  id={`cat-pill-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Filter tools by name or tag..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Grid of Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTools.map(tool => {
              const isSaved = (bookmarkedIds || []).includes(tool.id);
              return (
                <div
                  key={tool.id}
                  id={`tool-card-${tool.id}`}
                  onClick={() => setActiveToolId(tool.id)}
                  className="group p-5 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-200 cursor-pointer flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-950/20"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="p-2.5 rounded-xl bg-slate-800/80 group-hover:bg-indigo-600/20 text-indigo-400 border border-slate-700/60 group-hover:border-indigo-500/40 transition-colors">
                        {getCategoryIcon(tool.category)}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(tool.id);
                        }}
                        className={`p-1.5 rounded-lg text-slate-500 hover:text-amber-400 transition-colors ${
                          isSaved ? 'text-amber-400' : ''
                        }`}
                        title="Bookmark tool"
                      >
                        <Star className={`w-4 h-4 ${isSaved ? 'fill-amber-400' : ''}`} />
                      </button>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-100 text-sm group-hover:text-indigo-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                        {tool.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {tool.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500 font-medium">
                      Client-Side Only
                    </span>
                    <span className="font-semibold text-indigo-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Open Tool →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredTools.length === 0 && (
            <div className="py-16 text-center text-slate-400">
              <p className="text-base font-semibold">No tools found matching "{searchQuery}"</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for keywords like PDF, JSON, Password, or Unit.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
