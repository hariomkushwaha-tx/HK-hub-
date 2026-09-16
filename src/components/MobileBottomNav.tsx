import React from 'react';
import { useApp } from '../context/AppContext';
import { NavigationTab } from '../types';
import { getLanguageMeta } from '../utils/translations';
import { 
  Terminal, 
  Wrench, 
  BookMarked, 
  GraduationCap, 
  Languages
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    theme, 
    setLanguageModalOpen,
    currentLanguage,
    t
  } = useApp();

  const currentMeta = getLanguageMeta(currentLanguage);

  const handleTabClick = (tabId: NavigationTab) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: NavigationTab; labelKey: string; icon: React.ReactNode }[] = [
    { id: 'home', labelKey: 'nav.home', icon: <Terminal className="w-5 h-5" /> },
    { id: 'tools', labelKey: 'nav.tools', icon: <Wrench className="w-5 h-5" /> },
    { id: 'ebooks', labelKey: 'nav.ebooks', icon: <BookMarked className="w-5 h-5" /> },
    { id: 'students', labelKey: 'nav.students', icon: <GraduationCap className="w-5 h-5" /> },
  ];

  return (
    <nav
      id="mobile-bottom-navigation"
      aria-label="Mobile Bottom Navigation"
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t backdrop-blur-lg px-2 py-1.5 transition-colors duration-200 ${
        theme === 'dark'
          ? 'bg-slate-950/95 border-slate-800/90 text-slate-400'
          : 'bg-white/95 border-slate-200 text-slate-600'
      }`}
    >
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              id={`bottom-nav-${item.id}`}
              onClick={() => handleTabClick(item.id)}
              className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-2 rounded-xl transition-all ${
                isActive
                  ? 'text-indigo-600 dark:text-indigo-400 font-bold scale-105'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 active:scale-95'
              }`}
            >
              <div className={`p-1 rounded-lg transition-colors ${
                isActive ? 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400' : ''
              }`}>
                {item.icon}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 leading-none">
                {t(item.labelKey)}
              </span>
            </button>
          );
        })}

        {/* 5th Tab: Instant Language Switcher */}
        <button
          id="bottom-nav-language"
          onClick={() => setLanguageModalOpen(true)}
          className="flex flex-col items-center justify-center min-w-[56px] py-1 px-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <span className="text-xs leading-none" role="img" aria-hidden="true">{currentMeta.flag}</span>
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 leading-none font-bold text-indigo-600 dark:text-indigo-400">
            {currentMeta.nativeName}
          </span>
        </button>
      </div>
    </nav>
  );
};
