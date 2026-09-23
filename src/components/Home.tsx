import React from 'react';
import { useApp } from '../context/AppContext';
import { ALL_TOOLS } from '../data/toolsData';
import { TECH_CATEGORIES } from '../data/categoriesData';
import { COMPREHENSIVE_GUIDES } from '../data/guidesData';
import { EBOOKS_DATA } from '../data/ebooksData';
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  Wrench, 
  GraduationCap, 
  Bot, 
  Cpu, 
  BookMarked,
  Layers,
  Code2,
  ExternalLink,
  Terminal,
  FolderGit2,
  ThumbsUp
} from 'lucide-react';

export const Home: React.FC = () => {
  const { 
    setActiveTab, 
    setGlobalSearchOpen, 
    openTool, 
    openGuide, 
    openBook,
    setActiveTechCategory, 
    projects,
    toggleLikeProject,
    t
  } = useApp();

  // Curated popular developer utilities
  const popularTools = ALL_TOOLS.filter(t => t.popular).slice(0, 8);
  const featuredGuides = COMPREHENSIVE_GUIDES.slice(0, 3);
  const featuredProject = projects[0];

  return (
    <div id="home-view" className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative pt-10 sm:pt-16 pb-6 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Subtle Editorial Top Tagline */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span>Engineering Architecture</span>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
            <span>Developer Utilities</span>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">100% Open Access Library</span>
          </div>

          {/* High-Character Balanced Headline */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.12]" style={{ textWrap: 'balance' }}>
              Next-generation technology ecosystem for builders, engineers, and students.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-normal">
              An authoritative digital platform unifying in-depth engineering textbooks, high-utility developer tools, AI research architectures, and academic student accelerators.
            </p>
          </div>

          {/* Interactive Global Search Command Bar */}
          <div className="max-w-2xl pt-1">
            <button
              id="hero-quick-search-trigger"
              onClick={() => setGlobalSearchOpen(true)}
              className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-blue-500/80 dark:hover:border-blue-500/80 shadow-sm transition-all duration-200 text-left group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <Search className="w-4 h-4 text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-500 dark:text-slate-400 text-sm truncate font-medium">
                  {t('hero.search_placeholder') || 'Search tools, guides, radar tech, code snippets, or books...'}
                </span>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  ⌘K
                </kbd>
              </div>
            </button>
          </div>

          {/* Editorial Photographic Focal Carrier */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/80 shadow-md bg-slate-950 aspect-[16/9] max-h-[440px] w-full">
            <img 
              src="/src/assets/images/hero_tech_platform_1790180847323.jpg" 
              alt="HK VELORA Modern Technology & Engineering Laboratory"
              className="w-full h-full object-cover object-center brightness-90 contrast-105"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {/* Measured Bottom Contrast Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent flex flex-col justify-end p-5 sm:p-8">
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400">
                  <span>Architecture Spotlight</span>
                  <span aria-hidden="true">·</span>
                  <span>Research &amp; Open Systems</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Comprehensive Defence &amp; Aerospace Engineering Curriculum
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                  Explore 75 chapters of rigorous aerodynamic formulas, supersonic propulsion, radar cross-section stealth physics, and autonomous MUM-T swarm architectures.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => openBook('hk-weapon')}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Read Aerospace Masterwork</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveTab('tools')}
                    className="px-4 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700/80 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore 30+ Tools</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quiet Trust Points with Clean Separators */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">100% Free Open Education</span>
              <span className="text-slate-400 dark:text-slate-500">· No paywalls, subscriptions, or hidden locks</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span>75 Defence Chapters</span>
              <span aria-hidden="true">·</span>
              <span>30+ Live Utilities</span>
              <span aria-hidden="true">·</span>
              <span>6 Technology Pillars</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ASYMMETRIC BENTO GRID: CURRICULUM & SUITES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Curated Masterworks &amp; Toolkits
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-0.5">
              Core Engineering Platforms
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bento Card 1: Defence Curriculum Spotlight (7 cols) */}
          <div 
            onClick={() => openBook('hk-weapon')}
            className="lg:col-span-7 group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/50 dark:hover:border-blue-500/50 p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md space-y-6"
          >
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden aspect-[16/9] border border-slate-100 dark:border-slate-800 relative bg-slate-950">
                <img 
                  src="/src/assets/images/defence_curriculum_card_1790180858306.jpg" 
                  alt="Aerospace Defense Technology Engineering"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Defence Technology Book</span>
                  <span aria-hidden="true">·</span>
                  <span>75 Chapters</span>
                  <span aria-hidden="true">·</span>
                  <span>Hariom Kushwaha</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  आधुनिक रक्षा तकनीक एवं वैमानिकी प्रणालियां (Master Guide)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Stealth aerodynamics, GaN AESA radar equations, Brayton cycle jet engines, scramjets, and autonomous drone swarm algorithms compiled for serious students and aerospace aspirants.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span className="flex items-center gap-1.5">
                <BookMarked className="w-4 h-4" />
                <span>Open Digital Reader (Full 75 Chapters)</span>
              </span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bento Column 2 (5 cols): Developer Workspace + Student Zone */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Developer Lab Card */}
            <div 
              onClick={() => setActiveTab('tools')}
              className="flex-1 group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/50 dark:hover:border-blue-500/50 p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md space-y-4"
            >
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden aspect-[2/1] border border-slate-100 dark:border-slate-800 relative bg-slate-950">
                  <img 
                    src="/src/assets/images/developer_lab_card_1790180868998.jpg" 
                    alt="Developer Workspace and Utilities"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span>Developer Utilities</span>
                    <span aria-hidden="true"> · </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Client-Side &amp; Fast</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Developer Workspace &amp; Tooling Suite
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    JSON parsers, Regex debuggers, Base64 enc/dec, UUID generators, and code minifiers running securely on your machine.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                <span>Launch Tooling Hub</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Student Zone Card */}
            <div 
              onClick={() => setActiveTab('students')}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 p-5 flex flex-col justify-between cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md space-y-3"
            >
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Academic Student Hub
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    GPA/CGPA calculators, engineering laptop spec guides, and free student dev resources.
                  </p>
                </div>
              </div>
              <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 flex items-center justify-between pt-1">
                <span>View Student Tools</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. POPULAR DEVELOPER TOOLS (UNBOXED CLEAN METADATA) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Immediate Utilities
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-0.5">
              Popular Developer Tools
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('tools')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All Tools</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularTools.map(tool => (
            <div
              key={tool.id}
              onClick={() => openTool(tool.id)}
              className="group p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 cursor-pointer transition-all duration-150 flex flex-col justify-between space-y-3 shadow-xs hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-mono text-[11px] font-medium">{tool.category}</span>
                  <span>Instant</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-medium text-blue-600 dark:text-blue-400">
                <span>Launch</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SIX CORE TECHNOLOGY PILLARS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Deep Curriculum
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-0.5">
              Knowledge Domains
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('tech')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Browse All Domains</span>
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
              className="group p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all duration-150 space-y-2.5 shadow-xs hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cat.title}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {cat.articles.length} guides
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                {cat.description}
              </p>
              <div className="pt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                <span>Explore articles</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OPEN TECHNICAL E-BOOKS CATALOG */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Free Academic Library
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-0.5">
              Featured E-Books &amp; Research Manuals
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('ebooks')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center gap-1 self-start sm:self-auto"
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
              className="group p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all duration-150 flex flex-col justify-between space-y-3 shadow-xs hover:shadow-sm"
            >
              <div className="space-y-2.5">
                <div className={`h-20 rounded-lg bg-gradient-to-r ${book.coverGradient} p-3 flex flex-col justify-between text-white shadow-xs`}>
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="bg-black/40 px-1.5 py-0.5 rounded font-bold">{book.category}</span>
                    <span>{book.pages} pgs</span>
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {book.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                <span>Read Online</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. STEP-BY-STEP ENGINEERING GUIDES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Step-by-Step
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-0.5">
              Technical Guides &amp; Procedures
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('guides')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Browse All Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGuides.map(guide => (
            <div
              key={guide.id}
              onClick={() => openGuide(guide.id)}
              className="group p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all duration-150 flex flex-col justify-between space-y-3 shadow-xs hover:shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-mono text-[11px] font-medium">{guide.category}</span>
                  <span>{guide.readTime}</span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {guide.intro}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                <span>Read Full Guide</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. STUDENT COMMUNITY PROJECT SPOTLIGHT */}
      {featuredProject && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Student Community Showcase
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {featuredProject.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('projects')}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center gap-1 self-start sm:self-auto"
              >
                <span>Browse Community Repository</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              {featuredProject.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800/60">
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                {featuredProject.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleLikeProject(featuredProject.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
                >
                  <ThumbsUp className="w-3.5 h-3.5 text-blue-500" />
                  <span>{featuredProject.likes} Likes</span>
                </button>
                {featuredProject.liveDemoUrl && (
                  <a
                    href={featuredProject.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>View Project</span>
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
