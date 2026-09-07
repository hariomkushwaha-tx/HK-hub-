import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { NavigationTab } from '../types';
import { 
  Terminal, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles, 
  Cpu, 
  BookOpen, 
  Wrench, 
  GraduationCap, 
  Code2, 
  Newspaper, 
  FolderGit2, 
  UserCircle,
  BookMarked,
  ChevronDown
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    theme, 
    toggleTheme, 
    setGlobalSearchOpen,
    userProfile 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  const navLinks: { id: NavigationTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Terminal className="w-4 h-4" /> },
    { id: 'technology', label: 'Technology', icon: <Cpu className="w-4 h-4" /> },
    { id: 'ai', label: 'AI Hub', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'tools', label: 'Free Tools', icon: <Wrench className="w-4 h-4" /> },
    { id: 'ebooks', label: 'Books', icon: <BookMarked className="w-4 h-4" /> },
    { id: 'students', label: 'Student Zone', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'coding', label: 'Coding', icon: <Code2 className="w-4 h-4" /> },
    { id: 'guides', label: 'Guides', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'updates', label: 'Tech Updates', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'myspace', label: 'My Space', icon: <UserCircle className="w-4 h-4" /> },
  ];

  const primaryDesktopLinks = navLinks.slice(0, 6); // Home, Technology, AI, Tools, Books, Students
  const secondaryDesktopLinks = navLinks.slice(6, 10); // Coding, Guides, Tech Updates, Projects
  const isSecondaryActive = secondaryDesktopLinks.some(link => link.id === activeTab);

  // Close "More" dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(e.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (tabId: NavigationTab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-200 ${
        theme === 'dark' 
          ? 'bg-slate-950/90 border-slate-800/80 text-slate-100' 
          : 'bg-white/95 border-slate-200 text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              id="brand-home-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left focus:outline-none group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                <span className="font-extrabold text-base tracking-tight">HK</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    HK HUB
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Smart Hub
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 hidden sm:block font-medium">
                  Learn. Explore. Create. Use.
                </p>
              </div>
            </button>
          </div>

          {/* Search Trigger Button */}
          <div className="flex-1 max-w-md mx-2 hidden md:block">
            <button
              id="header-search-bar-btn"
              onClick={() => setGlobalSearchOpen(true)}
              className={`w-full flex items-center justify-between px-3.5 py-2 rounded-lg text-sm border transition-all duration-150 ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  : 'bg-slate-100 border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2.5 truncate">
                <Search className="w-4 h-4 shrink-0 text-indigo-500" />
                <span className="truncate">Search tools, guides, coding & AI...</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 text-slate-400">
                <kbd>Ctrl</kbd>+<kbd>K</kbd>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 py-1">
            {primaryDesktopLinks.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0 ${
                  activeTab === item.id
                    ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30'
                    : theme === 'dark'
                      ? 'text-slate-300 hover:text-white hover:bg-slate-850'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}

            {/* "More" Section Dropdown for Coding, Guides, Updates, Projects */}
            <div className="relative" ref={moreDropdownRef}>
              <button
                id="header-more-dropdown-btn"
                onClick={() => setMoreDropdownOpen(prev => !prev)}
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  isSecondaryActive || moreDropdownOpen
                    ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30'
                    : theme === 'dark'
                      ? 'text-slate-300 hover:text-white hover:bg-slate-850'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                aria-expanded={moreDropdownOpen}
                aria-label="More sections menu"
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-indigo-400' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div 
                  className={`absolute top-full right-0 mt-2 w-48 rounded-2xl p-2 border shadow-2xl z-50 animate-fade-in ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 text-slate-200'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 text-slate-500">
                    Additional Sections
                  </div>
                  {secondaryDesktopLinks.map((item) => (
                    <button
                      key={item.id}
                      id={`more-dropdown-link-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-xl transition-colors ${
                        activeTab === item.id
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : theme === 'dark'
                            ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Quick search icon for mobile/tablet */}
            <button
              id="mobile-search-btn"
              onClick={() => setGlobalSearchOpen(true)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 md:hidden"
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-amber-400 hover:bg-slate-800'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* My Space Shortcut */}
            <button
              id="header-myspace-btn"
              onClick={() => handleNavClick('myspace')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                activeTab === 'myspace'
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : theme === 'dark'
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700'
                    : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
              }`}
            >
              <UserCircle className="w-4 h-4 text-indigo-400" />
              <span className="hidden sm:inline">{userProfile.username ? `@${userProfile.username}` : 'My Space'}</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-navigation-dropdown"
            className={`lg:hidden py-3 border-t grid grid-cols-2 sm:grid-cols-3 gap-1.5 pb-4 ${
              theme === 'dark' ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'
            }`}
          >
            {navLinks.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors min-h-[44px] ${
                  activeTab === item.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : theme === 'dark'
                      ? 'text-slate-300 hover:bg-slate-900'
                      : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
