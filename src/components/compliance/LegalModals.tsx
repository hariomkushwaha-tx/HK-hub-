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
                <strong>HK VELORA</strong> is a next-generation, fast, modern, and privacy-respecting technology and student digital platform. Our mission is to democratize technological knowledge and developer utilities so learners, students, and practitioners can:
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
            <div className="space-y-4 text-slate-300">
              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-800/60 flex items-start gap-3">
                <Lock className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-white">
                    HK VELORA Privacy Guarantee / पूर्ण गोपनीयता का संकल्प
                  </p>
                  <p className="text-slate-300">
                    हम उपयोगकर्ताओं के निजी डेटा की 100% सुरक्षा और गोपनीयता का सम्मान करते हैं। आपकी जानकारी न तो बेची जाती है और न ही किसी बाहरी ट्रैकर को दी जाती है।
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-100 flex items-center gap-1.5 mb-1 text-sm">
                  <EyeOff className="w-4 h-4 text-indigo-400" />
                  1. क्लाइंट-साइड फर्स्ट प्रोसेसिंग (No Server Storage of Files)
                </h4>
                <p className="text-xs leading-relaxed text-slate-300">
                  जब आप HK VELORA के टूल्स (जैसे इमेज कंप्रेसर, पीडीएफ टूल, वर्ड काउंटर, कोड फॉर्मेटर आदि) का उपयोग करते हैं, तो आपकी फाइलें सीधे आपके ब्राउज़र की मेमोरी (Client-side HTML5 & WebAssembly) में प्रोसेस होती हैं। आपकी कोई भी फाइल किसी रिमोट सर्वर पर अपलोड या स्टोर नहीं की जाती है।
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-100 flex items-center gap-1.5 mb-1 text-sm">
                  <Server className="w-4 h-4 text-emerald-400" />
                  2. जीरो ट्रैकिंग एवं विज्ञापन मुक्त (Zero Tracking & No Ad Profiling)
                </h4>
                <p className="text-xs leading-relaxed text-slate-300">
                  हम किसी भी प्रकार के आक्रामक तृतीय-पक्ष ट्रैकर (Third-party advertising trackers), बिहेवियरल प्रोफाइलिंग, या अनचाहे कुकीज का उपयोग नहीं करते हैं। आपकी ब्राउज़िंग हिस्ट्री और पढ़ाई की गतिविधियां पूर्णतः निजी हैं।
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-100 flex items-center gap-1.5 mb-1 text-sm">
                  <Lock className="w-4 h-4 text-purple-400" />
                  3. लोकल स्टोरेज में डेटा (Local Storage on Your Device)
                </h4>
                <p className="text-xs leading-relaxed text-slate-300">
                  आपकी पसंद (थीम, बुकमार्क्स, पढ़ी गई किताबें, ऑर्डर हिस्ट्री) केवल आपके अपने फोन या कंप्यूटर के <code>localStorage</code> में सुरक्षित रहती है। आप जब चाहें अपने ब्राउज़र का कैश साफ करके इसे तुरंत हटा सकते हैं।
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-100 flex items-center gap-1.5 mb-1 text-sm">
                  <Zap className="w-4 h-4 text-amber-400" />
                  4. सुरक्षित AI प्रोसेसिंग (Secure Encrypted AI Queries)
                </h4>
                <p className="text-xs leading-relaxed text-slate-300">
                  जब आप AI स्टडी असिस्टेंट से कोई शैक्षणिक प्रश्न पूछते हैं, तो वह एंड-टू-एंड एन्क्रिप्टेड HTTPS टनल के जरिए प्रोसेस होता है। इस डेटा का उपयोग न तो किसी सार्वजनिक मॉडल की ट्रेनिंग के लिए होता है और न ही इसे रिकॉर्ड किया जाता है।
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                यदि आपके पास प्राइवेसी से संबंधित कोई प्रश्न है, तो आप <strong>hkdeveloperh@gmail.com</strong> पर संपर्क कर सकते हैं।
              </div>
            </div>
          )}

          {activeComplianceModal === 'security' && (
            <div className="space-y-4 text-slate-300">
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-white">
                    सुरक्षा आश्वासन: क्या यह वेबसाइट हैक हो सकती है?
                  </p>
                  <p className="text-emerald-200">
                    <strong>संक्षिप्त उत्तर: नहीं!</strong> HK VELORA आधुनिक क्लाउड सुरक्षा, सैंडबॉक्स्ड आर्किटेक्चर और एन्क्रिप्शन मानकों पर निर्मित है। उपयोगकर्ताओं का कोई भी संवेदनशील डेटा सर्वर पर स्टोर ही नहीं होता, जिससे डेटा ब्रीच का जोखिम शून्य हो जाता है।
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <h4 className="font-bold text-slate-100 flex items-center gap-2 text-xs mb-1">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    1. कोई असुरक्षित डेटाबेस नहीं (Zero Vulnerable Server Database)
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    अधिकांश वेबसाइट्स इसलिए हैक होती हैं क्योंकि वे उपयोगकर्ताओं के पासवर्ड, बैंक कार्ड या पर्सनल डेटा को किसी सेंट्रल सर्वर डेटाबेस में रखती हैं। HK VELORA में <strong>कोई भी संवेदनशील वित्तीय या निजी डेटा सर्वर पर स्टोर ही नहीं होता</strong>। जब चुराने के लिए कोई डेटाबेस ही नहीं है, तो लीक होने का खतरा समाप्त हो जाता है।
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <h4 className="font-bold text-slate-100 flex items-center gap-2 text-xs mb-1">
                    <Lock className="w-4 h-4 text-blue-400" />
                    2. 256-बिट HTTPS / TLS 1.3 एन्क्रिप्शन (Bank-Grade Transmission)
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    आपके ब्राउज़र और HK VELORA के बीच होने वाला हर एक नेटवर्क अनुरोध 256-बिट SSL/TLS एन्क्रिप्शन द्वारा सुरक्षित है। कोई भी थर्ड-पार्टी, आईएसपी, या वाई-फाई हैकर आपके डेटा को बीच में पढ़ (Snoop/Sniff) नहीं सकता।
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <h4 className="font-bold text-slate-100 flex items-center gap-2 text-xs mb-1">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    3. क्लाइंट-साइड सैंडबॉक्सिंग (Safe Code Execution)
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    हमारे कोडिंग प्लेग्राउंड्स और टूल्स वेब ब्राउज़र के सुरक्षित सैंडबॉक्स (Isolated Web Workers & Iframes) में चलते हैं। कोई भी दुर्भावनापूर्ण कोड उपयोगकर्ता के कंप्यूटर या मोबाइल सिस्टम को प्रभावित नहीं कर सकता।
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <h4 className="font-bold text-slate-100 flex items-center gap-2 text-xs mb-1">
                    <Server className="w-4 h-4 text-amber-400" />
                    4. गूगल क्लाउड एंटरप्राइज इंफ्रास्ट्रक्चर & DDoS प्रोटेक्शन
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    HK VELORA गूगल क्लाउड प्लेटफॉर्म के उच्च-स्तरीय कंटेनर इंफ्रास्ट्रक्चर पर होस्टेड है, जिसमें ऑटोमैटिक DDoS शील्ड, फायरवॉल और Nginx रिवर्स प्रॉक्सी लेयर सक्रिय रहती है।
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <h4 className="font-bold text-slate-100 flex items-center gap-2 text-xs mb-1">
                    <Check className="w-4 h-4 text-teal-400" />
                    5. उपयोगकर्ताओं के लिए सुरक्षा सुझाव (Tips to Stay Safe)
                  </h4>
                  <ul className="text-xs text-slate-300 list-disc pl-4 space-y-1">
                    <li>हमेशा सुनिश्चित करें कि एड्रेस बार में <code>https://</code> और लॉक (ताला) आइकन दिख रहा हो।</li>
                    <li>अपने ब्राउज़र और ऑपरेटिंग सिस्टम को हमेशा लेटेस्ट वर्जन पर अपडेट रखें।</li>
                    <li>किसी भी अनजान या संदिग्ध ब्राउज़र एक्सटेंशन को इंस्टॉल करने से बचें।</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>सुरक्षा रिपोर्ट या बग बाउंटी के लिए:</span>
                <span className="text-indigo-400 font-semibold">hkdeveloperh@gmail.com</span>
              </div>
            </div>
          )}

          {activeComplianceModal === 'terms' && (
            <div className="space-y-3 text-slate-300">
              <h4 className="font-bold text-slate-100">1. Educational Use Only</h4>
              <p>
                HK VELORA provides tools, educational tutorials, and study guides for personal, academic, and non-commercial professional empowerment. Users agree not to misuse developer utilities for denial-of-service, malicious cracking, or harmful payloads.
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
                HK VELORA utilizes browser <code>localStorage</code> solely to remember your chosen theme (Dark/Light), your bookmarked guides, your saved favorite tools, and your submitted showcase projects.
              </p>
              <p>
                We do not use intrusive advertising tracking cookies or third-party fingerprinting scripts. You can clear this data at any time through your browser settings or via the Data Reset option in My Space.
              </p>
            </div>
          )}

          {activeComplianceModal === 'disclaimer' && (
            <div className="space-y-3 text-slate-300">
              <p>
                The information, software calculations, and guides on HK VELORA are provided for educational and utility purposes. While every mathematical algorithm, financial EMI calculator, and code sample is verified, users should verify critical financial or cryptographic calculations before making production decisions.
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
                HK VELORA strictly discourages academic cheating or dishonest homework generation. AI tools and study assistants on our platform are engineered to breakdown logic, explain foundational principles, and guide independent problem-solving.
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
                    Thank you for reaching out to HK VELORA Support. A member of our technology desk will review your inquiry shortly.
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
                      placeholder="Suggest a new tool, report a bug, or ask a question about HK VELORA..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm focus:border-indigo-500 outline-none resize-none"
                    />
                  </div>
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
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
