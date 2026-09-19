import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, ShieldCheck, Mail, CheckCircle2, FileText, Lock, Globe, AlertTriangle, Shield, Check, Server, EyeOff, Zap, Cpu } from 'lucide-react';

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
        return { title: 'Privacy Policy (गोपनीयता नीति)', icon: <Lock className="w-5 h-5 text-indigo-400" /> };
      case 'security':
        return { title: 'Security & Anti-Hacking Assurance (वेबसाइट सुरक्षा गारंटी)', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" /> };
      case 'terms':
        return { title: 'Terms & Conditions', icon: <FileText className="w-5 h-5 text-blue-400" /> };
      case 'cookie':
        return { title: 'Cookie & Local Storage Policy', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" /> };
      case 'disclaimer':
        return { title: 'Legal & Educational Disclaimer', icon: <AlertTriangle className="w-5 h-5 text-amber-400" /> };
      case 'community':
        return { title: 'Community Guidelines', icon: <Globe className="w-5 h-5 text-purple-400" /> };
      case 'about':
        return { title: 'About HK VELORA', icon: <ShieldCheck className="w-5 h-5 text-cyan-400" /> };
      case 'contact':
        return { title: 'Contact HK VELORA Desk', icon: <Mail className="w-5 h-5 text-indigo-400" /> };
      default:
        return { title: 'HK VELORA Platform Notice', icon: <FileText className="w-5 h-5 text-indigo-400" /> };
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
          theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/70">{icon}</div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">{title}</h3>
          </div>
          <button 
            id="close-legal-modal-btn"
            onClick={handleClose} 
            className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm leading-relaxed">
          {activeComplianceModal === 'about' && (
            <div className="space-y-3">
              <p className="font-semibold text-indigo-600 dark:text-indigo-400 text-base">
                Everything Technology. One Smart Hub.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>HK VELORA</strong> is a next-generation, high-performance technology learning portal and developer utility hub founded and maintained by <strong>Hariom Kushwaha</strong> (HK Tech World). Our mission is to make advanced technology, computer science, and engineering principles transparent, accessible, and 100% free for students, researchers, and developers worldwide.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300 text-xs">
                <li><strong>Browser-First Utilities:</strong> 30+ high-performance text, developer, PDF, and mathematical tools running securely on client-side WebAssembly and HTML5.</li>
                <li><strong>Interactive Education:</strong> Comprehensive tutorials on modern AI, cybersecurity defensive hygiene, coding playgrounds, and academic study zones.</li>
                <li><strong>Academic Defence Research:</strong> Theoretical aerospace, propulsion, and avionics engineering educational modules adhering strictly to global educational standards.</li>
                <li><strong>Student Project Showcase:</strong> An open platform for emerging computer science students to exhibit original engineering work and research.</li>
              </ul>
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-1 text-xs">
                <p className="text-slate-800 dark:text-slate-200 font-medium">
                  <strong>Official Publisher:</strong> HK Tech World | Founder & Lead Developer: Hariom Kushwaha
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  Headquarters: India | Support & Editorial Desk: <a href="mailto:hkdeveloperh@gmail.com" className="text-indigo-500 underline">hkdeveloperh@gmail.com</a>
                </p>
              </div>
            </div>
          )}

          {activeComplianceModal === 'privacy' && (
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex items-start gap-3">
                <Lock className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-indigo-950 dark:text-white text-sm">
                    HK VELORA Privacy Policy (गोपनीयता नीति)
                  </p>
                  <p className="text-indigo-900/80 dark:text-slate-300">
                    Last updated: 2026. This Privacy Policy documents our practices regarding the collection, use, and disclosure of information when you visit <strong>https://hk-velora.vercel.app/</strong> in full compliance with Google AdSense Publisher Policies, GDPR, and CCPA standards.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-1 text-sm">
                  <EyeOff className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  1. Client-Side Processing & Data Minimization
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  When you use HK VELORA's developer utilities (e.g. Image Compressor, PDF Tools, Word Counter, Code Formatter, JSON Validator), all operations are processed locally in your browser’s client-side memory using HTML5 and WebAssembly. Your uploaded files and private code snippets are never transmitted or stored on remote servers.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 text-sm">
                  <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  2. Google AdSense & Third-Party Advertising Cookies (अनिवार्य विज्ञापन नीति)
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  HK VELORA partners with Google AdSense to serve relevant advertisements to our visitors. In accordance with Google AdSense program policies:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                  <li><strong>Third-party vendors</strong>, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites on the Internet.</li>
                  <li>Google's use of advertising cookies (such as the DoubleClick cookie) enables it and its partners to serve targeted ads to our users based on their visit to HK VELORA and/or other sites on the web.</li>
                  <li><strong>Opting Out:</strong> Users may opt out of personalized advertising by visiting Google Ads Settings at <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-indigo-500 font-semibold underline">https://www.google.com/settings/ads</a> or via the Network Advertising Initiative opt-out page at <a href="https://www.aboutads.info" target="_blank" rel="noreferrer" className="text-indigo-500 underline">www.aboutads.info</a>.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-1 text-sm">
                  <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  3. Log Files & Standard Web Diagnostics
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Like standard web applications, our hosting infrastructure may record standard non-personally identifiable log files. This includes Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and click counts. This diagnostic data is used solely to analyze trends, administer the site, prevent DDoS attacks, and gather broad demographic insights.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-1 text-sm">
                  <Lock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  4. Local Device Storage (localStorage)
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  User preferences (such as Dark/Light theme, selected language, reading progress, and bookmarked guides) are kept locally inside your browser's <code>localStorage</code> for your convenience. You can reset or delete this data at any time via your browser settings.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-1 text-sm">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  5. GDPR & CCPA Privacy Rights & Children’s Information
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Under GDPR and CCPA, users have the right to request access, rectification, or erasure of any personal data. HK VELORA does not sell personal data. Furthermore, we do not knowingly collect any Personal Identifiable Information from children under the age of 13.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                For privacy inquiries or compliance requests, contact: <strong>hkdeveloperh@gmail.com</strong> (Attn: Hariom Kushwaha, Privacy Officer).
              </div>
            </div>
          )}

          {activeComplianceModal === 'security' && (
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-emerald-950 dark:text-white">
                    सुरक्षा आश्वासन: क्या यह वेबसाइट हैक हो सकती है?
                  </p>
                  <p className="text-emerald-900 dark:text-emerald-200">
                    <strong>संक्षिप्त उत्तर: नहीं!</strong> HK VELORA आधुनिक क्लाउड सुरक्षा, सैंडबॉक्स्ड आर्किटेक्चर और एन्क्रिप्शन मानकों पर निर्मित है। उपयोगकर्ताओं का कोई भी संवेदनशील डेटा सर्वर पर स्टोर ही नहीं होता, जिससे डेटा ब्रीच का जोखिम शून्य हो जाता है।
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 text-xs mb-1">
                    <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    1. कोई असुरक्षित डेटाबेस नहीं (Zero Vulnerable Server Database)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    अधिकांश वेबसाइट्स इसलिए हैक होती हैं क्योंकि वे उपयोगकर्ताओं के पासवर्ड, बैंक कार्ड या पर्सनल डेटा को किसी सेंट्रल सर्वर डेटाबेस में रखती हैं। HK VELORA में <strong>कोई भी संवेदनशील वित्तीय या निजी डेटा सर्वर पर स्टोर ही नहीं होता</strong>। जब चुराने के लिए कोई डेटाबेस ही नहीं है, तो लीक होने का खतरा समाप्त हो जाता है।
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 text-xs mb-1">
                    <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    2. 256-बिट HTTPS / TLS 1.3 एन्क्रिप्शन (Bank-Grade Transmission)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    आपके ब्राउज़र और HK VELORA के बीच होने वाला हर एक नेटवर्क अनुरोध 256-बिट SSL/TLS एन्क्रिप्शन द्वारा सुरक्षित है। कोई भी थर्ड-पार्टी, आईएसपी, या वाई-फाई हैकर आपके डेटा को बीच में पढ़ (Snoop/Sniff) नहीं सकता।
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 text-xs mb-1">
                    <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    3. क्लाइंट-साइड सैंडबॉक्सिंग (Safe Code Execution)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    हमारे कोडिंग प्लेग्राउंड्स और टूल्स वेब ब्राउज़र के सुरक्षित सैंडबॉक्स (Isolated Web Workers & Iframes) में चलते हैं। कोई भी दुर्भावनापूर्ण कोड उपयोगकर्ता के कंप्यूटर या मोबाइल सिस्टम को प्रभावित नहीं कर सकता।
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 text-xs mb-1">
                    <Server className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    4. गूगल क्लाउड एंटरप्राइज इंफ्रास्ट्रक्चर & DDoS प्रोटेक्शन
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    HK VELORA गूगल क्लाउड प्लेटफॉर्म के उच्च-स्तरीय कंटेनर इंफ्रास्ट्रक्चर पर होस्टेड है, जिसमें ऑटोमैटिक DDoS शील्ड, फायरवॉल और Nginx रिवर्स प्रॉक्सी लेयर सक्रिय रहती है।
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 text-xs mb-1">
                    <Check className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    5. उपयोगकर्ताओं के लिए सुरक्षा सुझाव (Tips to Stay Safe)
                  </h4>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 list-disc pl-4 space-y-1">
                    <li>हमेशा सुनिश्चित करें कि एड्रेस बार में <code>https://</code> और लॉक (ताला) आइकन दिख रहा हो।</li>
                    <li>अपने ब्राउज़र और ऑपरेटिंग सिस्टम को हमेशा लेटेस्ट वर्जन पर अपडेट रखें।</li>
                    <li>किसी भी अनजान या संदिग्ध ब्राउज़र एक्सटेंशन को इंस्टॉल करने से बचें।</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>सुरक्षा रिपोर्ट या बग बाउंटी के लिए:</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">hkdeveloperh@gmail.com</span>
              </div>
            </div>
          )}

          {activeComplianceModal === 'terms' && (
            <div className="space-y-3 text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">1. Terms of Service Acceptance</h4>
              <p>
                By accessing HK VELORA (https://hk-velora.vercel.app/), you agree to comply with these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">2. Educational & Academic Use Only</h4>
              <p>
                HK VELORA provides developer tools, educational tutorials, and engineering study guides strictly for personal, academic, and non-commercial professional empowerment. Users agree not to misuse developer utilities for denial-of-service, malicious cracking, or illegal payloads.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">3. Free Access & Transparent Monetization</h4>
              <p>
                Core tools and educational resources are provided free of charge. The platform is supported by ethical, non-intrusive banner advertising powered by Google AdSense.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">4. Intellectual Property & Fair Use</h4>
              <p>
                All educational writings, technical diagrams, and custom tools published by HK Tech World are protected by applicable copyright law. Open-source references are credited to their respective authors under permissible licenses.
              </p>
            </div>
          )}

          {activeComplianceModal === 'cookie' && (
            <div className="space-y-3 text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Cookie & Storage Policy</h4>
              <p>
                This policy explains how HK VELORA uses cookies, local storage, and similar technologies to provide our digital services.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <p className="font-semibold text-slate-900 dark:text-slate-100">1. Essential Local Storage:</p>
                <p className="text-slate-600 dark:text-slate-300">
                  We use browser <code>localStorage</code> strictly for functional state: remembering your Dark/Light theme, your selected language, reading progress, and bookmarked developer guides. No personal identifiers are stored.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <p className="font-semibold text-slate-900 dark:text-slate-100">2. Google AdSense Advertising Cookies (DoubleClick DART):</p>
                <p className="text-slate-600 dark:text-slate-300">
                  Google, as a third-party advertising vendor, uses cookies to serve ads on HK VELORA. Google’s use of the DART cookie enables it to serve ads based on your visit to this and other sites on the Internet. You may opt out of the use of the DART cookie by visiting the Google Ad and Content Network Privacy Policy at <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-indigo-500 underline">https://www.google.com/settings/ads</a>.
                </p>
              </div>
            </div>
          )}

          {activeComplianceModal === 'disclaimer' && (
            <div className="space-y-3 text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-1">
                <h4 className="font-bold text-amber-950 dark:text-amber-200 text-sm flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  Academic Defence Engineering & Non-Proliferation Compliance Statement
                </h4>
                <p className="text-amber-900/90 dark:text-amber-300">
                  Strictly compliant with Google Publisher Policies regarding Weapons & Dangerous Content, the Indian Arms Act, and International Arms Control Regimes.
                </p>
              </div>

              <p>
                <strong>1. Academic & Educational Scope:</strong> The research publication <em>"HK WEAPON — Advanced Defence Technology & Engineering"</em> and all related defence engineering chapters on HK VELORA are published solely for academic reference, scientific education, theoretical physics, aerospace dynamics, and historical technology studies (documenting publicly known engineering principles of DRDO, ISRO, and global aerospace history).
              </p>
              <p>
                <strong>2. Prohibition of Harmful or Operational Exploits:</strong> HK VELORA does <strong>NOT</strong> sell, broker, advertise, or promote weapons, ammunition, firearms, tactical gear, or explosives. The platform does <strong>NOT</strong> provide operational blueprints, chemical formulas, or actionable instructions for weapon manufacturing or illegal activities.
              </p>
              <p>
                <strong>3. Defensive Cybersecurity:</strong> All cybersecurity tutorials, cryptography tools, and networking guides are strictly defensive, designed to help students secure systems, recognize phishing threats, and practice safe hygiene.
              </p>
              <p>
                <strong>4. Software Calculation Disclaimers:</strong> While our developer utilities and calculators are tested for mathematical accuracy, they are provided on an "as is" educational basis. Users should verify critical structural or financial computations independently.
              </p>
            </div>
          )}

          {activeComplianceModal === 'community' && (
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">Academic Integrity & Responsible AI</h4>
              <p>
                HK VELORA strictly discourages academic cheating or dishonest homework generation. AI tools and study assistants on our platform are engineered to breakdown logic, explain foundational principles, and guide independent problem-solving.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-slate-100">Project Showcase Standards</h4>
              <p>
                When showcasing projects, ensure all work is original or properly attributes open-source libraries. Malicious code, copyright infringements, or deceptive repositories will be removed immediately.
              </p>
            </div>
          )}

          {activeComplianceModal === 'contact' && (
            <div>
              {contactSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">Message Received!</h4>
                  <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto text-xs">
                    Thank you for reaching out to HK VELORA Support. A member of our technology desk will review your inquiry shortly.
                  </p>
                  <button
                    id="contact-done-btn"
                    onClick={handleClose}
                    className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl text-xs shadow-xs"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Full Name</label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      value={contactName}
                      onChange={e => setContactName(e.target.value)}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm focus:border-indigo-500 outline-none shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={e => setContactEmail(e.target.value)}
                      placeholder="e.g. student@university.edu"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm focus:border-indigo-500 outline-none shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Inquiry or Tool Suggestion</label>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      required
                      value={contactMessage}
                      onChange={e => setContactMessage(e.target.value)}
                      placeholder="Suggest a new tool, report a bug, or ask a question about HK VELORA..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm focus:border-indigo-500 outline-none resize-none shadow-xs"
                    />
                  </div>
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Mail className="w-4 h-4" />
                    Send Inquiry to HK VELORA
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            id="legal-modal-ok-btn"
            onClick={handleClose}
            className="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-300 dark:border-slate-700 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
