import React from 'react';
import { useApp } from '../context/AppContext';
import { ALL_TOOLS } from '../data/toolsData';
import { TECH_CATEGORIES } from '../data/categoriesData';
import { COMPREHENSIVE_GUIDES } from '../data/guidesData';
import { EBOOKS_DATA } from '../data/ebooksData';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Clock, 
  FolderGit2, 
  ChevronRight, 
  Wrench, 
  GraduationCap, 
  Bot, 
  Code2, 
  Laptop, 
  Cpu, 
  ExternalLink,
  ThumbsUp,
  Zap,
  BookMarked,
  BookOpen
} from 'lucide-react';

export const Home: React.FC = () => {
  const { 
    setActiveTab, 
    setSearchModalOpen, 
    openTool, 
    openGuide, 
    openBook,
    setActiveTechCategory, 
    projects,
    toggleLikeProject
  } = useApp();

  // Curated popular tools for quick launch
  const popularTools = ALL_TOOLS.filter(t => t.popular).slice(0, 8);
  const featuredGuides = COMPREHENSIVE_GUIDES.slice(0, 3);
  const featuredProject = projects[0];

  return (
    <div id="home-view" className="space-y-16 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-12 sm:py-16 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Generation Technology & Student Digital Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-100 tracking-tight leading-[1.1]">
            Everything Technology. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              One Smart Hub.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed">
            Understand modern technology, explore AI models, master programming fundamentals, run 30+ free browser utilities, and showcase student engineering projects.
          </p>

          {/* Quick Search Action Bar */}
          <div className="max-w-xl mx-auto pt-2">
            <div
              id="hero-quick-search-trigger"
              onClick={() => setSearchModalOpen(true)}
              className="flex items-center gap-3 w-full px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-900 border border-slate-700/80 hover:border-indigo-500/60 shadow-xl shadow-slate-950/50 cursor-pointer transition-all duration-200 group"
            >
              <Search className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-slate-400 text-sm flex-1 text-left">
                Search 30+ free tools, tech guides, AI topics, code lessons...
              </span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md bg-slate-800 text-[11px] font-mono text-slate-400 border border-slate-700">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Quick Value Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Free & Client-Side Privacy
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" />
              No Login Required For Tools
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              Engineered for Students & Devs
            </span>
          </div>
        </div>
      </section>

      {/* 2. POPULAR TOOLS QUICK ACCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-4 h-4" />
              <span>Instant Browser Utilities</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100 mt-1">Popular Free Tools</h2>
          </div>
          <button
            onClick={() => setActiveTab('tools')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            <span>Explore all 30+ tools</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularTools.map(tool => (
            <div
              key={tool.id}
              onClick={() => openTool(tool.id)}
              className="group p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/50 cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-3 hover:shadow-lg hover:shadow-indigo-950/20"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-800 text-indigo-300">
                    {tool.category}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold">Free</span>
                </div>
                <h3 className="font-bold text-slate-100 text-sm group-hover:text-indigo-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs text-indigo-400 font-semibold">
                <span>Launch Tool</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SIX CORE TECHNOLOGY PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Technology Knowledge Library</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100 mt-1">Core Tech Domains</h2>
          </div>
          <button
            onClick={() => setActiveTab('tech')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            <span>View all tech guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_CATEGORIES.map(cat => (
            <div
              key={cat.id}
              onClick={() => {
                setActiveTab('tech');
                setActiveTechCategory(cat.id);
              }}
              className="group p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all duration-200 space-y-3 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-100 text-base group-hover:text-cyan-400 transition-colors">
                  {cat.title}
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  {cat.articles.length} articles
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {cat.description}
              </p>
              <div className="pt-2 text-xs font-semibold text-cyan-400 flex items-center gap-1">
                <span>Explore guides</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DUAL FEATURED: AI CORNER & STUDENT ZONE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Corner Feature Card */}
          <div
            onClick={() => setActiveTab('ai')}
            className="group p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 hover:border-indigo-500/60 cursor-pointer transition-all duration-300 space-y-5 relative overflow-hidden"
          >
            <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 w-fit">
              <Bot className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
                Gemini-Powered Knowledge
              </span>
              <h3 className="text-2xl font-black text-slate-100 mt-1">
                Artificial Intelligence Hub
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                Ask our interactive AI Study Assistant any technology question, explore curated AI tools for coding and writing, and learn prompt engineering principles.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 group-hover:text-indigo-300">
              <span>Open AI Assistant & Directory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Student Zone Feature Card */}
          <div
            onClick={() => setActiveTab('students')}
            className="group p-8 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 hover:border-cyan-500/60 cursor-pointer transition-all duration-300 space-y-5 relative overflow-hidden"
          >
            <div className="p-3 rounded-2xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 w-fit">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                Academic & Career Accelerators
              </span>
              <h3 className="text-2xl font-black text-slate-100 mt-1">
                Student Technology Zone
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                Calculate semester GPA & CGPA percentages, discover free GitHub student developer packs, check engineering laptop specs, and generate semester project blueprints.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
              <span>Explore Student Zone</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED TECHNICAL E-BOOKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <BookMarked className="w-4 h-4" />
              <span>Free Academic & Developer Library</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100 mt-1">Featured Digital Books & Library</h2>
          </div>
          <button
            onClick={() => setActiveTab('ebooks')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            <span>Explore All {EBOOKS_DATA.length} Books</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EBOOKS_DATA.slice(0, 4).map(book => (
            <div
              key={book.id}
              onClick={() => openBook(book.id)}
              className="group p-5 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-3 hover:shadow-lg"
            >
              <div className="space-y-3">
                <div className={`h-24 rounded-xl bg-gradient-to-r ${book.coverGradient} p-3 flex flex-col justify-between text-white shadow-sm`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase font-bold px-1.5 py-0.5 rounded bg-black/40 w-fit">
                      {book.category}
                    </span>
                    {book.isFree ? (
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500 text-slate-950">
                        FREE
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-950/70 text-slate-200">
                        ₹{book.price}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span>{book.pages} pages</span>
                    <div className="flex items-center gap-1 text-amber-300">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{book.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-slate-100 text-sm group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {book.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400">
                <span>{book.isFree ? 'Read Free' : 'Preview & Read'}</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. LATEST HOW-TO GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Step-by-Step Technical Guides</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100 mt-1">Featured How-Tos & Fixes</h2>
          </div>
          <button
            onClick={() => setActiveTab('guides')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            <span>Browse all guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGuides.map(guide => (
            <div
              key={guide.id}
              onClick={() => openGuide(guide.id)}
              className="group p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-4 hover:shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-800 text-emerald-400">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3 h-3" /> {guide.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-slate-100 text-base group-hover:text-emerald-400 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {guide.intro}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span>Read Guide</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROJECT OF THE WEEK SHOWCASE */}
      {featuredProject && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-purple-400">
                    Featured Student Project
                  </span>
                  <h3 className="text-xl font-bold text-slate-100">{featuredProject.title}</h3>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('projects')}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 self-start sm:self-auto"
              >
                <span>Browse all community projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {featuredProject.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-1.5">
                {featuredProject.technologies.map((t, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleLikeProject(featuredProject.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                >
                  <ThumbsUp className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{featuredProject.likes} Likes</span>
                </button>
                {featuredProject.liveDemoUrl && (
                  <a
                    href={featuredProject.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1 shadow-sm"
                  >
                    <span>View Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
