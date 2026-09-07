import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, ShieldCheck, Mail, CheckCircle2, FileText, Lock, Globe, AlertTriangle } from 'lucide-react';

export const LegalModals: React.FC = () => {
  const { activeComplianceModal, setActiveComplianceModal, theme } = useApp();
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  if (!activeComplianceModal) return null;

  const handleClose = () => {
    setActiveComplianceModal(null);
    setContactSubmitted(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setContactSubmitted(true);
  };

  const getTitleAndIcon = () => {
    switch (activeComplianceModal) {
      case 'privacy':
        return { title: 'Privacy Policy', icon: <Lock className="w-5 h-5 text-indigo-400" /> };
      case 'terms':
        return { title: 'Terms & Conditions', icon: <FileText className="w-5 h-5 text-blue-400" /> };
      case 'cookie':
        return { title: 'Cookie & Local Storage Policy', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" /> };
      case 'disclaimer':
        return { title: 'Legal & Educational Disclaimer', icon: <AlertTriangle className="w-5 h-5 text-amber-400" /> };
      case 'community':
        return { title: 'Community Guidelines', icon: <Globe className="w-5 h-5 text-purple-400" /> };
      case 'about':
        return { title: 'About HK HUB', icon: <ShieldCheck className="w-5 h-5 text-cyan-400" /> };
      case 'contact':
        return { title: 'Contact HK HUB Desk', icon: <Mail className="w-5 h-5 text-indigo-400" /> };
      default:
        return { title: 'HK HUB Platform Notice', icon: <FileText className="w-5 h-5 text-indigo-400" /> };
    }
  };

  const { title, icon } = getTitleAndIcon();

  return (
    <div 
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div 
        id="legal-modal-content"
        className={`w-full max-w-2xl max-h-[85vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-300 text-slate-800'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-800/70">{icon}</div>
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
          <button 
            id="close-legal-modal-btn"
            onClick={handleClose} 
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm leading-relaxed">
          {activeComplianceModal === 'about' && (
            <div className="space-y-3">
              <p className="font-semibold text-indigo-400 text-base">
                Everything Technology. One Smart Hub.
              </p>
              <p>
                <strong>HK HUB</strong> is a next-generation, fast, modern, and privacy-respecting technology and student digital platform. Our mission is to democratize technological knowledge and developer utilities so learners, students, and practitioners can:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Learn practical technology, internet safety, and cybersecurity awareness</li>
                <li>Understand modern AI tools and leverage them ethically without plagiarism</li>
                <li>Master coding through interactive lessons and live playgrounds</li>
                <li>Use 30+ free high-performance browser tools with zero server tracking</li>
                <li>Showcase student and developer engineering projects to the community</li>
              </ul>
              <div className="pt-3 border-t border-slate-800 space-y-1 text-xs">
                <p className="text-slate-200 font-medium">
                  Created with ❤️ in India by <strong>Hariom Kushwaha</strong> (HK Tech World).
                </p>
                <p className="text-slate-400">
                  Powered by <strong>HK Tech World</strong> | Developed with ❤️ in India by Hariom Kushwaha.
                </p>
              </div>
            </div>
          )}

          {activeComplianceModal === 'privacy' && (
            <div className="space-y-3 text-slate-300">
              <h4 className="font-bold text-slate-100">1. Client-Side First Architecture</h4>
              <p>
                HK HUB processes your images, PDFs, text, and code conversions directly in your browser's memory using client-side WebAssembly, Canvas, and HTML5 APIs. Your uploaded files are <strong>never permanently uploaded or stored on external servers</strong>.
              </p>
              <h4 className="font-bold text-slate-100">2. Zero Invasive Tracking</h4>
              <p>
                We do not sell your personal data or execute covert cross-site profiling scripts. User preferences such as bookmarks, saved tools, and profile configurations are stored locally on your device using Web LocalStorage.
              </p>
              <h4 className="font-bold text-slate-100">3. AI Processing</h4>
              <p>
                When using optional AI Study Assistant queries, inputs are transmitted securely over TLS to Google Gemini APIs strictly to generate your requested explanation, without permanent logging.
              </p>
            </div>
          )}

          {activeComplianceModal === 'terms' && (
            <div className="space-y-3 text-slate-300">
              <h4 className="font-bold text-slate-100">1. Educational Use Only</h4>
              <p>
                HK HUB provides tools, educational tutorials, and study guides for personal, academic, and non-commercial professional empowerment. Users agree not to misuse developer utilities for denial-of-service, malicious cracking, or harmful payloads.
              </p>
              <h4 className="font-bold text-slate-100">2. Free Access & Availability</h4>
              <p>
                Core tools and educational resources are provided 100% free of charge. No mandatory subscriptions or hidden paywalls are required to use calculators, text utilities, or coding references.
              </p>
            </div>
          )}

          {activeComplianceModal === 'cookie' && (
            <div className="space-y-3 text-slate-300">
              <p>
                HK HUB utilizes browser <code>localStorage</code> solely to remember your chosen theme (Dark/Light), your bookmarked guides, your saved favorite tools, and your submitted showcase projects.
              </p>
              <p>
                We do not use intrusive advertising tracking cookies or third-party fingerprinting scripts. You can clear this data at any time through your browser settings or via the Data Reset option in My Space.
              </p>
            </div>
          )}

          {activeComplianceModal === 'disclaimer' && (
            <div className="space-y-3 text-slate-300">
              <p>
                The information, software calculations, and guides on HK HUB are provided for educational and utility purposes. While every mathematical algorithm, financial EMI calculator, and code sample is verified, users should verify critical financial or cryptographic calculations before making production decisions.
              </p>
              <p>
                All cybersecurity content is strictly defensive and educational, designed to help students protect their accounts, recognize phishing attempts, and practice secure password hygiene.
              </p>
            </div>
          )}

          {activeComplianceModal === 'community' && (
            <div className="space-y-3 text-slate-300">
              <h4 className="font-bold text-slate-100">Academic Integrity & Responsible AI</h4>
              <p>
                HK HUB strictly discourages academic cheating or dishonest homework generation. AI tools and study assistants on our platform are engineered to breakdown logic, explain foundational principles, and guide independent problem-solving.
              </p>
              <h4 className="font-bold text-slate-100">Project Showcase Standards</h4>
              <p>
                When showcasing projects, ensure all work is original or properly attributes open-source libraries. Malicious code, copyright infringements, or deceptive repositories will be removed immediately.
              </p>
            </div>
          )}

          {activeComplianceModal === 'contact' && (
            <div>
              {contactSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-lg text-white">Message Received!</h4>
                  <p className="text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out to HK HUB Support. A member of our technology desk will review your inquiry shortly.
                  </p>
                  <button
                    id="contact-done-btn"
                    onClick={handleClose}
                    className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-xs"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      value={contactName}
                      onChange={e => setContactName(e.target.value)}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm focus:border-indigo-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={e => setContactEmail(e.target.value)}
                      placeholder="e.g. student@university.edu"
                      className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm focus:border-indigo-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Inquiry or Tool Suggestion</label>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      required
                      value={contactMessage}
                      onChange={e => setContactMessage(e.target.value)}
                      placeholder="Suggest a new tool, report a bug, or ask a question about HK HUB..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm focus:border-indigo-500 outline-none resize-none"
                    />
                  </div>
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Send Inquiry to HK HUB
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-950/70 border-t border-slate-800 flex justify-end">
          <button
            id="legal-modal-ok-btn"
            onClick={handleClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
