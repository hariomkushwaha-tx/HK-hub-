import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ToolsHub } from './components/tools/ToolsHub';
import { TechnologyHub } from './components/technology/TechnologyHub';
import { AiHub } from './components/ai/AiHub';
import { CodingHub } from './components/coding/CodingHub';
import { StudentZone } from './components/students/StudentZone';
import { GuidesHub } from './components/guides/GuidesHub';
import { ProjectsHub } from './components/projects/ProjectsHub';
import { TechUpdatesHub } from './components/updates/TechUpdatesHub';
import { MySpaceHub } from './components/myspace/MySpaceHub';
import { EBooksHub } from './components/ebooks/EBooksHub';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { LegalModals } from './components/compliance/LegalModals';
import { UserProfileModal } from './components/profile/UserProfileModal';
import { LanguageModal } from './components/LanguageModal';
import { FloatingLanguageWidget } from './components/FloatingLanguageWidget';
import { MobileBottomNav } from './components/MobileBottomNav';

const MainContent: React.FC = () => {
  const { activeTab, theme } = useApp();

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 pb-16 lg:pb-0 ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Universal Header */}
      <Header />

      {/* Main Dynamic Viewport */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && <Home />}
        {activeTab === 'tools' && <ToolsHub />}
        {(activeTab === 'tech' || activeTab === 'technology') && <TechnologyHub />}
        {activeTab === 'ai' && <AiHub />}
        {activeTab === 'coding' && <CodingHub />}
        {activeTab === 'ebooks' && <EBooksHub />}
        {activeTab === 'students' && <StudentZone />}
        {activeTab === 'guides' && <GuidesHub />}
        {activeTab === 'updates' && <TechUpdatesHub />}
        {activeTab === 'projects' && <ProjectsHub />}
        {activeTab === 'myspace' && <MySpaceHub />}
      </main>

      {/* Universal Compliance & Directory Footer */}
      <Footer />

      {/* Native Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Floating Language Quick Switcher */}
      <FloatingLanguageWidget />

      {/* Global Modals & Overlays */}
      <LanguageModal />
      <GlobalSearchModal />
      <LegalModals />
      <UserProfileModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
