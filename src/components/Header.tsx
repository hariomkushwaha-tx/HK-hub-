import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { NavigationTab } from '../types';
import { getLanguageMeta } from '../utils/translations';
import { Logo } from './Logo';
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
  ChevronDown,
  Languages
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    theme, 
    toggleTheme, 
    setGlobalSearchOpen,
    userProfile,
    currentLanguage,
    setLanguageModalOpen,
    t
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  const currentMeta = getLanguageMeta(currentLanguage);

  const navLinks: { id: NavigationTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: t('nav.home'), icon: <Terminal className="w-4 h-4" /> },
    { id: 'technology', label: t('nav.technology'), icon: <Cpu className="w-4 h-4" /> },
    { id: 'ai', label: t('nav.ai'), icon: <Sparkles className="w-4 h-4" /> },
    { id: 'tools', label: t('nav.tools'), icon: <Wrench className="w-4 h-4" /> },
    { id: 'ebooks', label: t('nav.ebooks'), icon: <BookMarked className="w-4 h-4" /> },
    { id: 'students', label: t('nav.students'), icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'coding', label: t('nav.coding'), icon: <Code2 className="w-4 h-4" /> },
    { id: 'guides', label: t('nav.guides'), icon: <BookOpen className="w-4 h-4" /> },
    { id: 'updates', label: t('nav.updates'), icon: <Newspaper className="w-4 h-4" /> },
    { id: 'projects', label: t('nav.projects'), icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'myspace', label: t('nav.myspace'), icon: <UserCircle className="w-4 h-4" /> },
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
          
          {/* Brand Identity - Zone 1 */}
          <div className="flex items-center shrink-0">
            <button
              id="brand-home-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left focus:outline-none group transition-opacity hover:opacity-95"
              aria-label="HK VELORA Home"
            >
              <Logo size="md" />
            </button>
          </div>

          {/* Desktop Nav Links - Zone 2 */}
          <nav className="hidden lg:flex items-center gap-1.5 py-1">
            {primaryDesktopLinks.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0 ${
                  activeTab === item.id
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                    : theme === 'dark'
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/80 border border-transparent'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}

            {/* "More" Section Dropdown */}
            <div className="relative" ref={moreDropdownRef}>
              <button
                id="header-more-dropdown-btn"
                onClick={() => setMoreDropdownOpen(prev => !prev)}
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  isSecondaryActive || moreDropdownOpen
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                    : theme === 'dark'
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/80 border border-transparent'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                }`}
                aria-expanded={moreDropdownOpen}
                aria-label="More sections menu"
              >
                <span>{t('nav.more')}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-blue-400' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div 
                  className={`absolute top-full right-0 mt-2 w-52 rounded-xl p-1.5 border shadow-xl z-50 animate-fade-in ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 text-slate-200 shadow-black/60'
                      : 'bg-white border-slate-200 text-slate-800 shadow-slate-200/80'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 text-slate-400">
                    Directory
                  </div>
                  {secondaryDesktopLinks.map((item) => (
                    <button
                      key={item.id}
                      id={`more-dropdown-link-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                        activeTab === item.id
                          ? 'bg-blue-600 text-white font-semibold'
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

          {/* Right Action Icons - Zone 3 */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Search Trigger Button (icon-only on mobile, full on tablet/desktop) */}
            <button
              id="header-search-bar-btn"
              onClick={() => setGlobalSearchOpen(true)}
              className={`flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 rounded-lg text-xs font-medium border transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  : 'bg-slate-100 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-800'
              }`}
              title="खोजें / Search (⌘K)"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="hidden sm:inline">{t('search.placeholder')}</span>
              <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Language Selector Button */}
            <button
              id="header-language-btn"
              onClick={() => setLanguageModalOpen(true)}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all shrink-0 ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-200'
              }`}
              title="भाषा चुनें / Select Language"
              aria-label="Choose Language"
            >
              <span className="text-sm leading-none" role="img" aria-hidden="true">{currentMeta.flag}</span>
              <span className="hidden sm:inline">{currentMeta.nativeName}</span>
              <Languages className="w-3.5 h-3.5 text-slate-400 shrink-0 hidden xs:block" />
            </button>

            {/* Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-colors shrink-0 ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800 hover:border-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:border-slate-300'
              }`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* My Space / Account Shortcut */}
            <button
              id="header-myspace-btn"
              onClick={() => handleNavClick('myspace')}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                activeTab === 'myspace'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : theme === 'dark'
                    ? 'bg-slate-900 border border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800'
                    : 'bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200'
              }`}
            >
              <UserCircle className="w-4 h-4 text-blue-400" />
              <span>{userProfile.username ? `@${userProfile.username}` : t('nav.myspace')}</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className={`p-2 rounded-lg border transition-all lg:hidden flex items-center justify-center shrink-0 ${
                mobileMenuOpen
                  ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                  : theme === 'dark'
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800'
                    : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-navigation-dropdown"
            className={`lg:hidden py-3 border-t grid grid-cols-2 sm:grid-cols-3 gap-2 pb-4 animate-in fade-in slide-in-from-top-2 duration-200 ${
              theme === 'dark' ? 'border-slate-800 bg-slate-950/95' : 'border-slate-200 bg-white/95'
            }`}
          >
            {/* Quick Profile shortcut on mobile */}
            <div className="col-span-2 sm:col-span-3 mb-1 space-y-2">
              {/* Mobile 100% Free Open Education Banner */}
              <div className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-indigo-500/15 border border-emerald-500/30 text-emerald-300 font-extrabold text-xs shadow-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>100% Free Open Education</span>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full uppercase font-mono tracking-wider">
                  ALL UNLOCKED
                </span>
              </div>

              <button
                onClick={() => handleNavClick('myspace')}
                className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-xs font-semibold ${
                  activeTab === 'myspace'
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                    : theme === 'dark'
                      ? 'bg-slate-900/90 border-slate-800 text-slate-200 hover:border-slate-700'
                      : 'bg-slate-100 border-slate-200 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <UserCircle className="w-4 h-4 text-indigo-400" />
                  <span>{userProfile.username ? `@${userProfile.username} (${t('nav.myspace')})` : t('nav.myspace')}</span>
                </div>
                <span className="text-[11px] text-indigo-400 font-mono">Open →</span>
              </button>
            </div>

            {navLinks.filter(item => item.id !== 'myspace').map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors min-h-[44px] ${
                  activeTab === item.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : theme === 'dark'
                      ? 'text-slate-300 hover:bg-slate-900 bg-slate-900/50 border border-slate-800/60'
                      : 'text-slate-700 hover:bg-slate-100 bg-slate-100/60 border border-slate-200/60'
                }`}
              >
                {item.icon}
                <span className="truncate">{item.label}</span>
              </button>
            ))}

            {/* Mobile Language Switcher Row */}
            <div className="col-span-2 sm:col-span-3 pt-2 mt-1 border-t border-slate-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLanguageModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold transition-colors"
              >
                <Languages className="w-4 h-4" />
                <span>🌐 {t('action.choose_language')} ({currentMeta.nativeName})</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
