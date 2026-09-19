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
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                HK VELORA
              </span>
            </div>
            
            <p className="text-sm leading-relaxed max-w-sm text-slate-600 dark:text-slate-400">
              <strong className="text-slate-900 dark:text-slate-200 block font-semibold">Everything Technology. One Smart Hub.</strong>
              A next-generation platform for students, developers, and technology learners. Learn coding, explore practical AI, use 30+ free browser tools, and build digital knowledge without paywalls.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                100% Free & Browser-First
              </span>
              <span>•</span>
              <span>Zero-Tracking Tools</span>
            </div>
          </div>

          {/* Column 1: Technology */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Technology
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  id="footer-tech-smartphones"
                  onClick={() => { setActiveTab('technology'); openTechCategory('smartphones'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Smartphones & OS
                </button>
              </li>
              <li>
                <button 
                  id="footer-tech-computers"
                  onClick={() => { setActiveTab('technology'); openTechCategory('computers'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Windows & macOS
                </button>
              </li>
              <li>
                <button 
                  id="footer-tech-internet"
                  onClick={() => { setActiveTab('technology'); openTechCategory('internet'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Internet & Privacy
                </button>
              </li>
              <li>
                <button 
                  id="footer-tech-apps"
                  onClick={() => { setActiveTab('technology'); openTechCategory('apps'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Open-Source Apps
                </button>
              </li>
              <li>
                <button 
                  id="footer-tech-web"
                  onClick={() => { setActiveTab('technology'); openTechCategory('webtech'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Web Architecture
                </button>
              </li>
              <li>
                <button 
                  id="footer-tech-cyber"
                  onClick={() => { setActiveTab('technology'); openTechCategory('cybersecurity'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Cybersecurity Awareness
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Free Tools & Student Zone */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Tools & Learning
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  id="footer-tools-dev"
                  onClick={() => handleTabClick('tools')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Developer Tools (JSON, Regex, Base64)
                </button>
              </li>
              <li>
                <button 
                  id="footer-tools-text"
                  onClick={() => handleTabClick('tools')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Text & Word Tools
                </button>
              </li>
              <li>
                <button 
                  id="footer-tools-pdf"
                  onClick={() => handleTabClick('tools')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  PDF Merger & Splitter
                </button>
              </li>
              <li>
                <button 
                  id="footer-ebooks-hub"
                  onClick={() => handleTabClick('ebooks')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Digital Books & Library
                </button>
              </li>
              <li>
                <button 
                  id="footer-student-zone"
                  onClick={() => handleTabClick('students')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Student Study Zone
                </button>
              </li>
              <li>
                <button 
                  id="footer-coding-hub"
                  onClick={() => handleTabClick('coding')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Interactive Code Playground
                </button>
              </li>
              <li>
                <button 
                  id="footer-ai-hub"
                  onClick={() => handleTabClick('ai')} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  AI Tools Directory & Assistant
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust, Legal & About */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  id="footer-legal-about"
                  href="#about"
                  onClick={(e) => { e.preventDefault(); setActiveComplianceModal('about'); window.history.pushState(null, '', '#about'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
                >
                  About HK VELORA
                </a>
              </li>
              <li>
                <a 
                  id="footer-legal-privacy"
                  href="#privacy"
                  onClick={(e) => { e.preventDefault(); setActiveComplianceModal('privacy'); window.history.pushState(null, '', '#privacy'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
                >
                  Privacy Policy (प्राइवेसी पॉलिसी)
                </a>
              </li>
              <li>
                <a 
                  id="footer-legal-security"
                  href="#security"
                  onClick={(e) => { e.preventDefault(); setActiveComplianceModal('security'); window.history.pushState(null, '', '#security'); }} 
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1 font-medium"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Security & Anti-Hacking (सुरक्षा गारंटी)
                </a>
              </li>
              <li>
                <a 
                  id="footer-legal-terms"
                  href="#terms"
                  onClick={(e) => { e.preventDefault(); setActiveComplianceModal('terms'); window.history.pushState(null, '', '#terms'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a 
                  id="footer-legal-cookie"
                  href="#cookie"
                  onClick={(e) => { e.preventDefault(); setActiveComplianceModal('cookie'); window.history.pushState(null, '', '#cookie'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a 
                  id="footer-legal-disclaimer"
                  href="#disclaimer"
                  onClick={(e) => { e.preventDefault(); setActiveComplianceModal('disclaimer'); window.history.pushState(null, '', '#disclaimer'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
                >
                  Legal & Defence Disclaimer
                </a>
              </li>
              <li>
                <a 
                  id="footer-legal-guidelines"
                  href="#community"
                  onClick={(e) => { e.preventDefault(); setActiveComplianceModal('community'); window.history.pushState(null, '', '#community'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
                >
                  Community Guidelines
                </a>
              </li>
              <li>
                <a 
                  id="footer-legal-contact"
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); setActiveComplianceModal('contact'); window.history.pushState(null, '', '#contact'); }} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
                >
                  Contact & Support Desk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-col gap-1.5 text-center sm:text-left">
            <p className="text-slate-700 dark:text-slate-300 font-medium flex items-center justify-center sm:justify-start gap-1.5">
              <span>Created with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline shrink-0" />
              <span>in India by <strong className="text-slate-900 dark:text-white font-semibold">Hariom Kushwaha</strong> (HK Tech World).</span>
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] flex items-center justify-center sm:justify-start gap-1">
              <span>Powered by <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">HK Tech World</strong></span>
              <span>|</span>
              <span>Developed with</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline shrink-0" />
              <span>in India by <strong className="text-slate-700 dark:text-slate-300">Hariom Kushwaha</strong>.</span>
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-[11px]">
              © {new Date().getFullYear()} HK VELORA. Learn. Explore. Create. Use. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 text-slate-500 dark:text-slate-400 text-[11px]">
            <span>Client-Side In-Memory Processing</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Secure & Educational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
