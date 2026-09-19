import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { NavigationTab, ProjectItem, UserProfile, BookOrder, ReadingProgress, SupportedLanguage, MembershipTier } from '../types';
import { INITIAL_PROJECTS } from '../data/sampleProjects';
import { EBOOKS_DATA } from '../data/ebooksData';
import { t as translateFn } from '../utils/translations';
import { initGoogleTranslate, triggerGoogleTranslate, resetGoogleTranslate } from '../utils/googleTranslate';

interface AppContextType {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeToolId: string | null;
  setActiveToolId: (id: string | null) => void;
  openTool: (toolId: string) => void;
  activeGuideId: string | null;
  setActiveGuideId: (id: string | null) => void;
  openGuide: (guideId: string) => void;
  activeTechCategory: string;
  setActiveTechCategory: (cat: string) => void;
  openTechCategory: (cat: string) => void;
  globalSearchOpen: boolean;
  setGlobalSearchOpen: (open: boolean) => void;
  searchModalOpen: boolean;
  setSearchModalOpen: (open: boolean) => void;
  userModalOpen: boolean;
  setUserModalOpen: (open: boolean) => void;
  bookmarkedIds: string[];
  isBookmarked: (id: string) => boolean;
  toggleBookmark: (id: string) => void;
  bookmarkedGuideIds: string[];
  toggleBookmarkGuide: (id: string) => void;
  savedToolIds: string[];
  toggleSaveTool: (id: string) => void;
  // Digital Library state
  unlockedBookIds: string[];
  unlockBook: (bookId: string) => void;
  isBookUnlocked: (bookId: string) => boolean;
  unlockAllBooks: () => void;
  membershipTier: MembershipTier;
  upgradeMembership: (tier: MembershipTier, planDetails?: { billingCycle: 'monthly' | 'yearly' | 'lifetime'; amount: number }) => void;
  upgradeModalOpen: boolean;
  setUpgradeModalOpen: (open: boolean) => void;
  wishlistBookIds: string[];
  toggleWishlistBook: (bookId: string) => void;
  isBookInWishlist: (bookId: string) => boolean;
  readingProgressMap: Record<string, ReadingProgress>;
  saveReadingProgress: (progress: ReadingProgress) => void;
  getReadingProgress: (bookId: string) => ReadingProgress | undefined;
  bookOrders: BookOrder[];
  addBookOrder: (order: BookOrder) => void;
  activeBookId: string | null;
  setActiveBookId: (id: string | null) => void;
  openBook: (bookId: string) => void;
  // Projects state
  projects: ProjectItem[];
  addProject: (newProj: Omit<ProjectItem, 'id' | 'likes' | 'createdAt'>) => void;
  likeProject: (id: string) => void;
  toggleLikeProject: (id: string) => void;
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
  activeComplianceModal: 'privacy' | 'terms' | 'cookie' | 'disclaimer' | 'community' | 'about' | 'contact' | 'security' | null;
  setActiveComplianceModal: (modal: 'privacy' | 'terms' | 'cookie' | 'disclaimer' | 'community' | 'about' | 'contact' | 'security' | null) => void;
  // Multi-Language Support
  currentLanguage: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  languageModalOpen: boolean;
  setLanguageModalOpen: (open: boolean) => void;
  fullPageTranslateActive: boolean;
  setFullPageTranslateActive: (active: boolean) => void;
  t: (key: string) => string;
}

const DEFAULT_PROFILE: UserProfile = {
  username: 'tech_explorer',
  name: 'Alex Student',
  fullName: 'Alex Student',
  bio: 'Computer Science student & passionate builder exploring modern web tools and AI systems.',
  role: 'Student',
  skills: ['TypeScript', 'Python', 'Web Dev', 'Tailwind'],
  interests: ['Frontend Tools', 'Machine Learning', 'Cybersecurity', 'Open Source'],
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  joinedDate: 'Joined recently'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavigationTab>(() => {
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const tabParam = params.get('tab') as NavigationTab | null;
        const validTabs: NavigationTab[] = [
          'home', 'technology', 'tech', 'ai', 'tools', 'ebooks', 
          'students', 'coding', 'guides', 'updates', 'projects', 'myspace'
        ];
        if (tabParam && validTabs.includes(tabParam)) {
          return tabParam;
        }
      } catch (e) {
        // Fallback to default
      }
    }
    return 'home';
  });
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeToolId, setActiveToolId] = useState<string | null>('word-counter');
  const [activeGuideId, setActiveGuideId] = useState<string | null>(null);
  const [activeBookId, setActiveBookId] = useState<string | null>(null);
  const [activeTechCategory, setActiveTechCategory] = useState<string>('smartphones');
  const [globalSearchOpen, setGlobalSearchOpen] = useState<boolean>(false);
  const [userModalOpen, setUserModalOpen] = useState<boolean>(false);
  const [activeComplianceModal, setActiveComplianceModal] = useState<'privacy' | 'terms' | 'cookie' | 'disclaimer' | 'community' | 'about' | 'contact' | 'security' | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const path = window.location.pathname.toLowerCase();
        const hash = window.location.hash.toLowerCase().replace('#', '');
        const params = new URLSearchParams(window.location.search);
        const page = (params.get('page') || params.get('modal') || hash || '').toLowerCase();
        
        if (page === 'privacy' || page === 'privacy-policy' || path.includes('privacy')) return 'privacy';
        if (page === 'terms' || page === 'terms-and-conditions' || path.includes('terms')) return 'terms';
        if (page === 'about' || page === 'about-us' || path.includes('about')) return 'about';
        if (page === 'contact' || page === 'contact-us' || path.includes('contact')) return 'contact';
        if (page === 'disclaimer' || path.includes('disclaimer')) return 'disclaimer';
        if (page === 'security' || path.includes('security')) return 'security';
        if (page === 'cookie' || path.includes('cookie')) return 'cookie';
      } catch {}
    }
    return null;
  });

  // Listen for hash changes to support direct legal links
  useEffect(() => {
    const handleHashOrPopState = () => {
      try {
        const hash = window.location.hash.toLowerCase().replace('#', '');
        const params = new URLSearchParams(window.location.search);
        const page = (params.get('page') || hash || '').toLowerCase();
        if (['privacy', 'terms', 'cookie', 'disclaimer', 'community', 'about', 'contact', 'security'].includes(page)) {
          setActiveComplianceModal(page as any);
        }
      } catch {}
    };
    window.addEventListener('hashchange', handleHashOrPopState);
    window.addEventListener('popstate', handleHashOrPopState);
    return () => {
      window.removeEventListener('hashchange', handleHashOrPopState);
      window.removeEventListener('popstate', handleHashOrPopState);
    };
  }, []);

  // Multi-Language State
  const [currentLanguage, setCurrentLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem('hkhub_language') as SupportedLanguage | null;
      if (saved) return saved;
    } catch {}
    return 'hi'; // Default to Hindi as per user request
  });

  const [languageModalOpen, setLanguageModalOpen] = useState<boolean>(false);
  const [fullPageTranslateActive, setFullPageTranslateActive] = useState<boolean>(() => {
    try {
      return localStorage.getItem('hkhub_fullpage_translate') === 'true';
    } catch {
      return false;
    }
  });

  // On mount, initialize Google Translate element
  useEffect(() => {
    initGoogleTranslate();
  }, []);

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setCurrentLanguageState(lang);
    try {
      localStorage.setItem('hkhub_language', lang);
    } catch (e) {}

    // Synchronize Google Translate if active
    if (fullPageTranslateActive || lang !== 'en') {
      triggerGoogleTranslate(lang);
    } else {
      resetGoogleTranslate();
    }
  }, [fullPageTranslateActive]);

  useEffect(() => {
    try {
      localStorage.setItem('hkhub_fullpage_translate', fullPageTranslateActive ? 'true' : 'false');
    } catch (e) {}
    if (fullPageTranslateActive) {
      triggerGoogleTranslate(currentLanguage);
    }
  }, [fullPageTranslateActive, currentLanguage]);

  const t = useCallback((key: string) => {
    return translateFn(key, currentLanguage);
  }, [currentLanguage]);

  // Unified bookmarks in localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('hkhub_bookmarks');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
      return ['word-counter', 'json-formatter', 'how-to-create-a-website', 'student-tech-productivity-guide', 'android-speedup'];
    } catch {
      return ['word-counter', 'json-formatter', 'how-to-create-a-website'];
    }
  });

  const [bookmarkedGuideIds, setBookmarkedGuideIds] = useState<string[]>(() => bookmarkedIds);
  const [savedToolIds, setSavedToolIds] = useState<string[]>(() => bookmarkedIds);

  // Projects state
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('hkhub_projects');
      return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  // User profile
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('hkhub_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_PROFILE,
          ...parsed,
          name: parsed.name || parsed.fullName || DEFAULT_PROFILE.name
        };
      }
      return DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  // Persist bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hkhub_bookmarks', JSON.stringify(bookmarkedIds));
      setBookmarkedGuideIds(bookmarkedIds);
      setSavedToolIds(bookmarkedIds);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [bookmarkedIds]);

  // Membership Tier State (Free vs Pro vs Ultra - ChatGPT & Gemini Model Upgrade Style)
  const [membershipTier, setMembershipTier] = useState<MembershipTier>(() => {
    try {
      const saved = localStorage.getItem('hkhub_membership_tier') as MembershipTier | null;
      if (saved === 'pro' || saved === 'ultra' || saved === 'free') return saved;
    } catch {}
    return 'free';
  });

  const [upgradeModalOpen, setUpgradeModalOpen] = useState<boolean>(false);

  // Digital Library persistence
  const [unlockedBookIds, setUnlockedBookIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('hkhub_unlocked_books');
      return saved ? JSON.parse(saved) : ['dsa-handbook', 'clean-code-architecture', 'ai-agents-handbook'];
    } catch {
      return ['dsa-handbook', 'clean-code-architecture', 'ai-agents-handbook'];
    }
  });

  const [wishlistBookIds, setWishlistBookIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('hkhub_wishlist_books');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [readingProgressMap, setReadingProgressMap] = useState<Record<string, ReadingProgress>>(() => {
    try {
      const saved = localStorage.getItem('hkhub_reading_progress');
      return saved ? JSON.parse(saved) : {
        'dsa-handbook': {
          bookId: 'dsa-handbook',
          currentChapterIndex: 1,
          currentChapterTitle: 'Chapter 2: Arrays, Strings & Two-Pointer',
          percentage: 25,
          lastReadTime: '2 hours ago',
          totalChapters: 10
        }
      };
    } catch {
      return {};
    }
  });

  const [bookOrders, setBookOrders] = useState<BookOrder[]>([]);

  useEffect(() => {
    try {
      localStorage.removeItem('hkhub_book_orders');
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('hkhub_unlocked_books', JSON.stringify(unlockedBookIds));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [unlockedBookIds]);

  useEffect(() => {
    try {
      localStorage.setItem('hkhub_wishlist_books', JSON.stringify(wishlistBookIds));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [wishlistBookIds]);

  useEffect(() => {
    try {
      localStorage.setItem('hkhub_reading_progress', JSON.stringify(readingProgressMap));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [readingProgressMap]);

  useEffect(() => {
    try {
      localStorage.setItem('hkhub_projects', JSON.stringify(projects));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem('hkhub_profile', JSON.stringify(userProfile));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [userProfile]);

  // Handle dark/light theme class on documentElement
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-slate-950', 'text-slate-100');
      document.body.classList.remove('bg-slate-50', 'text-slate-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-slate-950', 'text-slate-100');
      document.body.classList.add('bg-slate-50', 'text-slate-900');
    }
  }, [theme]);

  // Global keyboard shortcut for search (Ctrl+K or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setGlobalSearchOpen(prev => !prev);
      }
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setGlobalSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setGlobalSearchOpen(false);
        setActiveComplianceModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const openTool = (toolId: string) => {
    setActiveToolId(toolId);
    setActiveTab('tools');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openGuide = (guideId: string) => {
    setActiveGuideId(guideId);
    setActiveTab('guides');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openTechCategory = (cat: string) => {
    setActiveTechCategory(cat);
    setActiveTab('technology');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBook = (bookId: string) => {
    setActiveBookId(bookId);
    setActiveTab('ebooks');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isBookmarked = (id: string) => {
    return Array.isArray(bookmarkedIds) && bookmarkedIds.includes(id);
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const current = Array.isArray(prev) ? prev : [];
      return current.includes(id) ? current.filter(item => item !== id) : [...current, id];
    });
  };

  const toggleBookmarkGuide = (id: string) => {
    toggleBookmark(id);
  };

  const toggleSaveTool = (id: string) => {
    toggleBookmark(id);
  };

  const addProject = (newProj: Omit<ProjectItem, 'id' | 'likes' | 'createdAt'>) => {
    const created: ProjectItem = {
      ...newProj,
      id: 'proj-' + Date.now(),
      likes: 1,
      createdAt: 'Just now'
    };
    setProjects(prev => [created, ...prev]);
  };

  const likeProject = (id: string) => {
    setProjects(prev =>
      prev.map(p => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  const unlockAllBooks = useCallback(() => {
    const allIds = EBOOKS_DATA.map(b => b.id);
    setUnlockedBookIds(prev => Array.from(new Set([...prev, ...allIds])));
  }, []);

  const unlockBook = (bookId: string) => {
    setUnlockedBookIds(prev => prev.includes(bookId) ? prev : [...prev, bookId]);
  };

  const isBookUnlocked = (_bookId: string) => {
    // 100% Free Open Education Initiative: All books and chapters are unlocked for every student
    return true;
  };

  const upgradeMembership = (
    tier: MembershipTier,
    planDetails?: {
      billingCycle: 'monthly' | 'yearly' | 'lifetime';
      amount: number;
    }
  ) => {
    setMembershipTier(tier);
    try {
      localStorage.setItem('hkhub_membership_tier', tier);
    } catch {}

    if (tier === 'pro' || tier === 'ultra') {
      unlockAllBooks();
    }

    const tierName = tier === 'ultra' 
      ? 'HK VELORA Ultra (Lifetime All-Access Model)' 
      : 'HK VELORA Pro (Scholar Edition)';
    const newRole = tier === 'ultra' ? 'Ultra Scholar' : 'Pro Scholar';

    updateUserProfile({
      isProMember: true,
      role: newRole,
      membershipPlan: {
        tier,
        name: tierName,
        badge: tier === 'ultra' ? '💎 ULTRA' : '✨ PRO',
        billingCycle: planDetails?.billingCycle || 'lifetime',
        activatedDate: 'Today',
        features: [
          'Unlimited Lifetime Books',
          'AI Reading Assistant',
          'Fast Narration',
          'Full Offline Notes'
        ]
      }
    });
  };

  const toggleWishlistBook = (bookId: string) => {
    setWishlistBookIds(prev => 
      prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]
    );
  };

  const isBookInWishlist = (bookId: string) => {
    return Array.isArray(wishlistBookIds) && wishlistBookIds.includes(bookId);
  };

  const saveReadingProgress = useCallback((progress: ReadingProgress) => {
    setReadingProgressMap(prev => {
      const existing = prev[progress.bookId];
      if (
        existing &&
        existing.currentChapterIndex === progress.currentChapterIndex &&
        existing.percentage === progress.percentage &&
        existing.currentChapterTitle === progress.currentChapterTitle
      ) {
        return prev;
      }
      return {
        ...prev,
        [progress.bookId]: progress
      };
    });
  }, []);

  const getReadingProgress = (bookId: string) => {
    return readingProgressMap[bookId];
  };

  const addBookOrder = (order: BookOrder) => {
    setBookOrders(prev => [order, ...prev]);
  };

  const updateUserProfile = (patch: Partial<UserProfile>) => {
    setUserProfile(prev => {
      const updated = { ...prev, ...patch };
      if (!updated.name && updated.fullName) updated.name = updated.fullName;
      return updated;
    });
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        theme,
        toggleTheme,
        activeToolId,
        setActiveToolId,
        openTool,
        activeGuideId,
        setActiveGuideId,
        openGuide,
        activeTechCategory,
        setActiveTechCategory,
        openTechCategory,
        globalSearchOpen,
        setGlobalSearchOpen,
        searchModalOpen: globalSearchOpen,
        setSearchModalOpen: setGlobalSearchOpen,
        userModalOpen,
        setUserModalOpen,
        bookmarkedIds,
        isBookmarked,
        toggleBookmark,
        bookmarkedGuideIds,
        toggleBookmarkGuide,
        savedToolIds,
        toggleSaveTool,
        unlockedBookIds,
        unlockBook,
        isBookUnlocked,
        unlockAllBooks,
        membershipTier,
        upgradeMembership,
        upgradeModalOpen,
        setUpgradeModalOpen,
        wishlistBookIds,
        toggleWishlistBook,
        isBookInWishlist,
        readingProgressMap,
        saveReadingProgress,
        getReadingProgress,
        bookOrders,
        addBookOrder,
        activeBookId,
        setActiveBookId,
        openBook,
        projects,
        addProject,
        likeProject,
        toggleLikeProject: likeProject,
        userProfile,
        updateUserProfile,
        updateProfile: updateUserProfile,
        activeComplianceModal,
        setActiveComplianceModal,
        currentLanguage,
        setLanguage,
        languageModalOpen,
        setLanguageModalOpen,
        fullPageTranslateActive,
        setFullPageTranslateActive,
        t
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
