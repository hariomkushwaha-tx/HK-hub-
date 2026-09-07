import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  Code2,
  Terminal
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, setActiveComplianceModal, openTechCategory, theme } = useApp();

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className={`border-t transition-colors ${
        theme === 'dark' 
          ? 'bg-slate-950/80 border-slate-800 text-slate-400' 
          : 'bg-slate-100/90 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-sm">
                <span className="font-extrabold text-sm tracking-tight">HK</span>
              </div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                HK HUB
              </span>
            </div>
            
            <p className="text-sm leading-relaxed max-w-sm">
              <strong className="text-slate-200 block font-semibold">Everything Technology. One Smart Hub.</strong>
              A next-generation platform for students, developers, and technology learners. Learn coding, explore practical AI, use 30+ free browser tools, and build digital knowledge without paywalls.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="inline-flex items-center gap-1 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                100% Free & Browser-First
              </span>
              <span>•</span>
              <span>Zero-Tracking Tools</span>
            </div>
          </div>

          {/* Column 1: Technology */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Technology
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  id="footer-tech-smartphones"
                  onClick={() => { setActiveTab('technology'); openTechCategory('smartphones'); }} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Smartphones & OS
                </button>
              </li>
              <li>
                <button 
                  id="footer-tech-computers"
                  onClick={() => { setActiveTab('technology'); openTechCategory('computers'); }} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Windows & macOS
                </button>
              </li>
              <li>
                <button 
                  id="footer-tech-internet"
                  onClick={() => { setActiveTab('technology'); openTechCategory('internet'); }} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Internet & Privacy
                </button>
              </li>
              <li>
                <button 
                  id="footer-tech-apps"
                  onClick={() => { setActiveTab('technology'); openTechCategory('apps'); }} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Open-Source Apps
                </button>
              </li>
              <li>
                <button 
                  id="footer-tech-web"
                  onClick={() => { setActiveTab('technology'); openTechCategory('webtech'); }} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Web Architecture
                </button>
              </li>
              <li>
                <button 
                  id="footer-tech-cyber"
                  onClick={() => { setActiveTab('technology'); openTechCategory('cybersecurity'); }} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Cybersecurity Awareness
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Free Tools & Student Zone */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Tools & Learning
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  id="footer-tools-dev"
                  onClick={() => handleTabClick('tools')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Developer Tools (JSON, Regex, Base64)
                </button>
              </li>
              <li>
                <button 
                  id="footer-tools-text"
                  onClick={() => handleTabClick('tools')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Text & Word Tools
                </button>
              </li>
              <li>
                <button 
                  id="footer-tools-pdf"
                  onClick={() => handleTabClick('tools')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  PDF Merger & Splitter
                </button>
              </li>
              <li>
                <button 
                  id="footer-ebooks-hub"
                  onClick={() => handleTabClick('ebooks')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Digital Books & Library
                </button>
              </li>
              <li>
                <button 
                  id="footer-student-zone"
                  onClick={() => handleTabClick('students')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Student Study Zone
                </button>
              </li>
              <li>
                <button 
                  id="footer-coding-hub"
                  onClick={() => handleTabClick('coding')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Interactive Code Playground
                </button>
              </li>
              <li>
                <button 
                  id="footer-ai-hub"
                  onClick={() => handleTabClick('ai')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  AI Tools Directory & Assistant
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust, Legal & About */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  id="footer-legal-about"
                  onClick={() => setActiveComplianceModal('about')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  About HK HUB
                </button>
              </li>
              <li>
                <button 
                  id="footer-legal-privacy"
                  onClick={() => setActiveComplianceModal('privacy')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  id="footer-legal-terms"
                  onClick={() => setActiveComplianceModal('terms')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  id="footer-legal-cookie"
                  onClick={() => setActiveComplianceModal('cookie')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button 
                  id="footer-legal-disclaimer"
                  onClick={() => setActiveComplianceModal('disclaimer')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button 
                  id="footer-legal-guidelines"
                  onClick={() => setActiveComplianceModal('community')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Community Guidelines
                </button>
              </li>
              <li>
                <button 
                  id="footer-legal-contact"
                  onClick={() => setActiveComplianceModal('contact')} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} HK HUB. Learn. Explore. Create. Use. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Client-Side In-Memory Processing</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-indigo-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Secure & Educational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
