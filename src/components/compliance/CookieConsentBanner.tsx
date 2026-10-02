import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Cookie, X, Check, ExternalLink } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const { setActiveComplianceModal } = useApp();
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('hk_cookie_consent_adsense');
      if (!consent) {
        // Show after a brief delay for smooth entrance
        const timer = setTimeout(() => setShowBanner(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Safe fallback
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('hk_cookie_consent_adsense', 'accepted');
    } catch {}
    setShowBanner(false);
  };

  const handleOpenPolicy = () => {
    setActiveComplianceModal('cookie');
  };

  if (!showBanner) return null;

  return (
    <div 
      id="adsense-cookie-consent-bar"
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-16 lg:bottom-4 left-3 right-3 sm:left-6 sm:right-auto sm:max-w-md z-50 p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-indigo-200 dark:border-indigo-500/30 shadow-2xl backdrop-blur-md text-slate-800 dark:text-slate-100 animate-slideUp transition-all"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>

        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Privacy &amp; AdSense Notice</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                GDPR / CCPA
              </span>
            </h4>
            <button 
              onClick={handleAcceptAll}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            HK VELORA uses cookies, local device storage, and Google AdSense partner technologies to provide free learning materials, secure browser tools, and personalized educational content.
          </p>

          <div className="pt-2 flex items-center gap-2 flex-wrap">
            <button
              id="accept-cookie-consent-btn"
              onClick={handleAcceptAll}
              className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Accept &amp; Continue</span>
            </button>

            <button
              id="view-cookie-policy-btn"
              onClick={handleOpenPolicy}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
