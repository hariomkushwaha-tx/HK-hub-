/**
 * Google Translate Universal Page Translation Engine
 * Enables real-time full-page translation for 100+ languages worldwide
 */

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

// Maps our SupportedLanguage codes to Google Translate language codes
export const GOOGLE_TRANSLATE_LANG_MAP: Record<string, string> = {
  en: 'en',
  hi: 'hi',
  hinglish: 'hi', // For whole-page Google translate, translate to Hindi
  bn: 'bn',
  mr: 'mr',
  gu: 'gu',
  te: 'te',
  ta: 'ta',
  ur: 'ur',
  pa: 'pa',
  kn: 'kn',
  ml: 'ml',
  es: 'es',
  fr: 'fr',
  de: 'de',
  ar: 'ar',
  ru: 'ru',
  ja: 'ja'
};

let isScriptLoading = false;
let isScriptLoaded = false;

/**
 * Initializes Google Translate element script safely without breaking UI
 */
export function initGoogleTranslate(): void {
  if (typeof window === 'undefined') return;

  if (document.getElementById('google-translate-script') || isScriptLoaded) {
    return;
  }

  if (isScriptLoading) return;
  isScriptLoading = true;

  // Global callback required by Google Translate script
  window.googleTranslateElementInit = () => {
    try {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,bn,mr,gu,te,ta,ur,pa,kn,ml,es,fr,de,ar,ru,ja,it,pt,zh-CN,ko,th,vi,id,tr,pl,nl',
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          },
          'google_translate_element'
        );
        isScriptLoaded = true;
      }
    } catch (err) {
      console.warn('Google Translate Init Warn:', err);
    }
  };

  const script = document.createElement('script');
  script.id = 'google-translate-script';
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  script.defer = true;
  script.onload = () => {
    isScriptLoaded = true;
  };
  script.onerror = () => {
    console.warn('Failed to load Google Translate script; offline or blocked.');
  };
  document.body.appendChild(script);

  // Inject CSS to keep Google Translate bar clean and prevent page shift
  injectCleanTranslateStyles();
}

/**
 * Clean up default Google Translate banner styles to maintain crisp UI
 */
function injectCleanTranslateStyles(): void {
  if (document.getElementById('google-translate-custom-styles')) return;

  const style = document.createElement('style');
  style.id = 'google-translate-custom-styles';
  style.innerHTML = `
    .goog-te-banner-frame.skiptranslate {
      display: none !important;
    }
    body {
      top: 0px !important;
    }
    #google_translate_element {
      display: inline-block;
    }
    .goog-te-gadget-simple {
      background-color: transparent !important;
      border: 1px solid rgba(99, 102, 241, 0.3) !important;
      border-radius: 10px !important;
      padding: 4px 8px !important;
      font-family: inherit !important;
      color: inherit !important;
      font-size: 12px !important;
    }
    .goog-te-gadget-simple .goog-te-menu-value {
      color: inherit !important;
    }
    .goog-te-gadget-simple .goog-te-menu-value span {
      color: inherit !important;
      border-left: none !important;
    }
    .goog-te-gadget-icon {
      display: none !important;
    }
    .skiptranslate iframe {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Triggers full page translation into the target language code
 */
export function triggerGoogleTranslate(targetLangCode: string): void {
  if (typeof window === 'undefined') return;

  const mapped = GOOGLE_TRANSLATE_LANG_MAP[targetLangCode] || targetLangCode;

  // Set the cookie used by Google Translate: /en/${mapped}
  const domain = window.location.hostname;
  document.cookie = `googtrans=/en/${mapped}; path=/; domain=${domain};`;
  document.cookie = `googtrans=/en/${mapped}; path=/;`;

  // If google combo box exists on page, select it
  const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
  if (selectElem) {
    selectElem.value = mapped;
    selectElem.dispatchEvent(new Event('change'));
  } else {
    // If not yet present, ensure script is initialized
    initGoogleTranslate();
  }
}

/**
 * Resets translation back to English
 */
export function resetGoogleTranslate(): void {
  if (typeof window === 'undefined') return;

  const domain = window.location.hostname;
  document.cookie = `googtrans=/en/en; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;

  const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
  if (selectElem) {
    selectElem.value = 'en';
    selectElem.dispatchEvent(new Event('change'));
  }
}

/**
 * Reads the current translation cookie if active
 */
export function getActiveGoogleTranslateLang(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([a-zA-Z-]+)/);
  return match ? match[1] : null;
}
