import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ALL_TOOLS } from '../data/toolsData';
import { COMPREHENSIVE_GUIDES } from '../data/guidesData';
import { TECH_CATEGORIES } from '../data/categoriesData';
import { AI_TOOLS_DIRECTORY } from '../data/aiHubData';
import { CODING_LESSONS, STUDENT_PROJECT_IDEAS } from '../data/codingCurriculum';
import { EBOOKS_DATA } from '../data/ebooksData';
import { 
  Search, 
  X, 
  Wrench, 
  BookOpen, 
  Cpu, 
  Sparkles, 
  Code2, 
  FolderGit2, 
  GraduationCap, 
  ArrowRight,
  BookMarked
} from 'lucide-react';

type SearchCategory = 'all' | 'ebooks' | 'tools' | 'guides' | 'ai' | 'students' | 'coding' | 'projects';

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: 'tool' | 'guide' | 'tech' | 'ai' | 'coding' | 'student' | 'project' | 'ebook';
  action: () => void;
}

export const GlobalSearchModal: React.FC = () => {
  const { 
    globalSearchOpen, 
    setGlobalSearchOpen, 
    openTool, 
    openGuide, 
    openBook,
    setActiveTab, 
    setActiveTechCategory, 
    projects,
    theme 
  } = useApp();

  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<SearchCategory>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (globalSearchOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [globalSearchOpen]);

  const results: SearchResult[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list: SearchResult[] = [];

    // Tools
    if (filter === 'all' || filter === 'tools') {
      ALL_TOOLS.forEach(t => {
        if (!q || t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q) || t.tags.some(tag => tag.toLowerCase().includes(q))) {
          list.push({
            id: `tool-${t.id}`,
            title: t.name,
            subtitle: t.description,
            category: `Free Tool • ${t.category.toUpperCase()}`,
            type: 'tool',
            action: () => {
              openTool(t.id);
              setGlobalSearchOpen(false);
            }
          });
        }
      });
    }

    // Guides
    if (filter === 'all' || filter === 'guides') {
      COMPREHENSIVE_GUIDES.forEach(g => {
        if (!q || g.title.toLowerCase().includes(q) || g.intro.toLowerCase().includes(q) || g.category.toLowerCase().includes(q)) {
          list.push({
            id: `guide-${g.id}`,
            title: g.title,
            subtitle: `${g.difficulty} • ${g.readTime} • ${g.intro}`,
            category: `Guide • ${g.category}`,
            type: 'guide',
            action: () => {
              openGuide(g.id);
              setGlobalSearchOpen(false);
            }
          });
        }
      });
    }

    // Technology
    if (filter === 'all') {
      TECH_CATEGORIES.forEach(cat => {
        if (!q || cat.title.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q)) {
          list.push({
            id: `tech-${cat.id}`,
            title: cat.title,
            subtitle: cat.description,
            category: 'Technology Category',
            type: 'tech',
            action: () => {
              setActiveTechCategory(cat.id);
              setActiveTab('technology');
              setGlobalSearchOpen(false);
            }
          });
        }
      });
    }

    // AI Hub
    if (filter === 'all' || filter === 'ai') {
      AI_TOOLS_DIRECTORY.forEach(ai => {
        if (!q || ai.name.toLowerCase().includes(q) || ai.description.toLowerCase().includes(q) || ai.bestFor.toLowerCase().includes(q)) {
          list.push({
            id: `ai-${ai.name}`,
            title: `${ai.name} (${ai.pricing})`,
            subtitle: `${ai.bestFor} - ${ai.description}`,
            category: `AI Tool • ${ai.category}`,
            type: 'ai',
            action: () => {
              setActiveTab('ai');
              setGlobalSearchOpen(false);
            }
          });
        }
      });
    }

    // Coding
    if (filter === 'all' || filter === 'coding') {
      CODING_LESSONS.forEach(c => {
        if (!q || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.language.toLowerCase().includes(q)) {
          list.push({
            id: `coding-${c.id}`,
            title: c.title,
            subtitle: c.description,
            category: `Coding Lesson • ${c.language.toUpperCase()}`,
            type: 'coding',
            action: () => {
              setActiveTab('coding');
              setGlobalSearchOpen(false);
            }
          });
        }
      });
    }

    // Students
    if (filter === 'all' || filter === 'students') {
      STUDENT_PROJECT_IDEAS.forEach((idea, idx) => {
        if (!q || idea.title.toLowerCase().includes(q) || idea.description.toLowerCase().includes(q)) {
          list.push({
            id: `student-idea-${idx}`,
            title: idea.title,
            subtitle: `${idea.level} • ${idea.description}`,
            category: 'Student Project Blueprint',
            type: 'student',
            action: () => {
              setActiveTab('students');
              setGlobalSearchOpen(false);
            }
          });
        }
      });
    }

    // E-Books
    if (filter === 'all' || filter === 'ebooks') {
      EBOOKS_DATA.forEach(b => {
        const titleMatch = b.title.toLowerCase().includes(q);
        const authorMatch = b.author.toLowerCase().includes(q);
        const descMatch = b.description.toLowerCase().includes(q);
        const tagMatch = b.tags.some(t => t.toLowerCase().includes(q));
        const catMatch = b.category.toLowerCase().includes(q);

        if (!q || titleMatch || authorMatch || descMatch || tagMatch || catMatch) {
          list.push({
            id: `ebook-${b.id}`,
            title: b.title,
            subtitle: `By ${b.author} • ${b.pages} pages • ${b.category}`,
            category: 'E-Book / Textbook',
            type: 'ebook',
            action: () => {
              openBook(b.id);
              setGlobalSearchOpen(false);
            }
          });
        }
      });
    }

    // Projects
    if (filter === 'all' || filter === 'projects') {
      (projects || []).forEach(p => {
        const titleMatch = p?.title ? p.title.toLowerCase().includes(q) : false;
        const descMatch = p?.description ? p.description.toLowerCase().includes(q) : false;
        const techMatch = Array.isArray(p?.technologies) ? p.technologies.some(t => t?.toLowerCase().includes(q)) : false;

        if (!q || titleMatch || descMatch || techMatch) {
          list.push({
            id: `proj-${p.id || Math.random()}`,
            title: p.title || 'Untitled Project',
            subtitle: `By @${p.authorUsername || 'developer'} • ${p.description || ''}`,
            category: `Project • ${p.category || 'Tech'}`,
            type: 'project',
            action: () => {
              setActiveTab('projects');
              setGlobalSearchOpen(false);
            }
          });
        }
      });
    }

    return list.slice(0, 25);
  }, [query, filter, projects, openTool, openGuide, setActiveTab, setActiveTechCategory, setGlobalSearchOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (results.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + (results.length || 1)) % (results.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        results[selectedIndex].action();
      }
    }
  };

  if (!globalSearchOpen) return null;

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'tool': return <Wrench className="w-4 h-4 text-emerald-400" />;
      case 'guide': return <BookOpen className="w-4 h-4 text-blue-400" />;
      case 'tech': return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'ai': return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'coding': return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'student': return <GraduationCap className="w-4 h-4 text-pink-400" />;
      case 'project': return <FolderGit2 className="w-4 h-4 text-indigo-400" />;
      case 'ebook': return <BookMarked className="w-4 h-4 text-indigo-400" />;
      default: return <Search className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div 
      id="global-search-modal-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={() => setGlobalSearchOpen(false)}
    >
      <div 
        id="global-search-modal-dialog"
        className={`w-full max-w-2xl rounded-2xl shadow-2xl border overflow-hidden transition-all duration-200 ${
          theme === 'dark'
            ? 'bg-slate-900 border-slate-700 text-slate-100 shadow-indigo-950/40'
            : 'bg-white border-slate-300 text-slate-900 shadow-slate-300'
        }`}
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-700/50 gap-3">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            id="global-search-input"
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setSelectedIndex(0); }}
            placeholder="Search 30+ tools, guides, coding lessons, AI tools & student resources..."
            className="flex-1 bg-transparent text-sm sm:text-base outline-none placeholder:text-slate-400 font-medium"
          />
          {query && (
            <button 
              id="clear-search-query-btn"
              onClick={() => setQuery('')} 
              className="p-1 text-slate-400 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            id="close-search-modal-btn"
            onClick={() => setGlobalSearchOpen(false)} 
            className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700"
          >
            Esc
          </button>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-700/40 overflow-x-auto text-xs">
          {[
            { id: 'all', label: 'All' },
            { id: 'ebooks', label: 'E-Books' },
            { id: 'tools', label: 'Tools' },
            { id: 'guides', label: 'Guides' },
            { id: 'ai', label: 'AI Hub' },
            { id: 'students', label: 'Students' },
            { id: 'coding', label: 'Coding' },
            { id: 'projects', label: 'Projects' },
          ].map(tab => (
            <button
              key={tab.id}
              id={`search-filter-${tab.id}`}
              onClick={() => { setFilter(tab.id as SearchCategory); setSelectedIndex(0); }}
              className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                filter === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {results.length > 0 ? (
            results.map((item, idx) => (
              <div
                key={item.id}
                id={`search-result-item-${idx}`}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-start justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                  selectedIndex === idx
                    ? 'bg-indigo-600/20 border border-indigo-500/40 text-white'
                    : 'hover:bg-slate-800/50 text-slate-300'
                }`}
              >
                <div className="flex items-start gap-3 min-w-0 pr-2">
                  <div className="mt-0.5 p-2 rounded-lg bg-slate-800 shrink-0">
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm truncate">{item.title}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono shrink-0">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 mt-2" />
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm">No results found for "{query}" in this category.</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for "PDF", "JSON", "Python", "Battery", or "CSS".</p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-indigo-400 font-medium">{results.length} results indexed</span>
        </div>
      </div>
    </div>
  );
};
