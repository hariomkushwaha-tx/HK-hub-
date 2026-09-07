import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavigationTab, ProjectItem, UserProfile, BookOrder, ReadingProgress } from '../types';
import { INITIAL_PROJECTS } from '../data/sampleProjects';

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
  unlockBook: (bookId: string, order?: Partial<BookOrder>) => void;
  isBookUnlocked: (bookId: string) => boolean;
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
  activeComplianceModal: 'privacy' | 'terms' | 'cookie' | 'disclaimer' | 'community' | 'about' | 'contact' | null;
  setActiveComplianceModal: (modal: 'privacy' | 'terms' | 'cookie' | 'disclaimer' | 'community' | 'about' | 'contact' | null) => void;
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
  const [activeComplianceModal, setActiveComplianceModal] = useState<'privacy' | 'terms' | 'cookie' | 'disclaimer' | 'community' | 'about' | 'contact' | null>(null);

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

  const [bookOrders, setBookOrders] = useState<BookOrder[]>(() => {
    try {
      const saved = localStorage.getItem('hkhub_book_orders');
      return saved ? JSON.parse(saved) : [
        {
          id: 'ORD-98241',
          bookId: 'clean-code-architecture',
          bookTitle: 'Clean Code Architecture & Systems Design Guide',
          amount: 149,
          date: 'Yesterday, 4:30 PM',
          status: 'Paid',
          transactionRef: 'UPI-TXN-49102830',
          paymentMethod: 'UPI / Card'
        }
      ];
    } catch {
      return [];
    }
  });

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
      localStorage.setItem('hkhub_book_orders', JSON.stringify(bookOrders));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [bookOrders]);

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

  const unlockBook = (bookId: string, order?: Partial<BookOrder>) => {
    setUnlockedBookIds(prev => prev.includes(bookId) ? prev : [...prev, bookId]);
    if (order && order.amount !== undefined) {
      const newOrder: BookOrder = {
        id: order.id || `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
        bookId,
        bookTitle: order.bookTitle || 'HK HUB Digital Book',
        amount: order.amount,
        date: order.date || 'Just now',
        status: 'Paid',
        transactionRef: order.transactionRef || `TXN-${Date.now().toString().slice(-8)}`,
        paymentMethod: order.paymentMethod || 'UPI / Instant Pay'
      };
      setBookOrders(prev => [newOrder, ...prev]);
    }
  };

  const isBookUnlocked = (bookId: string) => {
    return Array.isArray(unlockedBookIds) && unlockedBookIds.includes(bookId);
  };

  const toggleWishlistBook = (bookId: string) => {
    setWishlistBookIds(prev => 
      prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]
    );
  };

  const isBookInWishlist = (bookId: string) => {
    return Array.isArray(wishlistBookIds) && wishlistBookIds.includes(bookId);
  };

  const saveReadingProgress = (progress: ReadingProgress) => {
    setReadingProgressMap(prev => ({
      ...prev,
      [progress.bookId]: progress
    }));
  };

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
        setActiveComplianceModal
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
