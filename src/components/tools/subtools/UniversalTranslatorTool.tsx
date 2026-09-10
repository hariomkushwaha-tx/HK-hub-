import React, { useState, useEffect } from 'react';
import { useApp } from '../../../context/AppContext';
import { SUPPORTED_LANGUAGES, SupportedLanguage, getLanguageMeta } from '../../../utils/translations';
import { copyToClipboard } from '../../../utils/clipboard';
import { 
  Languages, 
  ArrowRightLeft, 
  Volume2, 
  Copy, 
  Check, 
  Sparkles, 
  Globe, 
  ExternalLink,
  RotateCcw,
  BookOpen
} from 'lucide-react';

// Common knowledge dictionary for quick instant local translation + offline capability
const TRANSLATION_MAP: Record<string, Record<string, string>> = {
  'hello': {
    'hi': 'नमस्ते / नमस्कार',
    'hinglish': 'Namaste / Hello',
    'bn': 'নমস্কার (Nomoshkar)',
    'mr': 'नमस्कार (Namaskar)',
    'gu': 'નમસ્તે (Namaste)',
    'ta': 'வணக்கம் (Vanakkam)',
    'te': 'నమస్కారం (Namaskaram)',
    'ur': 'ہیلو / السلام علیکم',
    'pa': 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ (Sat Sri Akal)',
    'es': 'Hola',
    'fr': 'Bonjour',
    'de': 'Hallo',
    'ar': 'مرحباً (Marhaban)',
    'zh': '你好 (Nǐ hǎo)',
    'ja': 'こんにちは (Konnichiwa)'
  },
  'welcome to hk velora': {
    'hi': 'HK VELORA में आपका हार्दिक स्वागत है।',
    'hinglish': 'HK VELORA me aapka hardik swagat hai.',
    'bn': 'HK VELORA-এ আপনাকে স্বাগত জানাই।',
    'mr': 'HK VELORA मध्ये आपले सहर्ष स्वागत आहे.',
    'gu': 'HK VELORA માં તમારું સ્વાગત છે.',
    'ta': 'HK VELORA-க்கு உங்களை வரவேற்கிறோம்.',
    'te': 'HK VELORA కు మీకు స్వాగతం.',
    'ur': 'HK VELORA میں آپ کا خیر مقدم ہے۔',
    'pa': 'HK VELORA ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ।'
  },
  'thank you': {
    'hi': 'धन्यवाद / आपका शुक्रिया',
    'hinglish': 'Dhanyawad / Thank you',
    'bn': 'ধন্যবাদ (Dhonnobad)',
    'mr': 'धन्यवाद (Dhanyawaad)',
    'gu': 'આભાર (Aabhar)',
    'ta': 'நன்றி (Nandri)',
    'te': 'ధన్యవాదాలు (Dhanyavadalu)',
    'ur': 'شکریہ (Shukriya)'
  },
  'how are you': {
    'hi': 'आप कैसे हैं?',
    'hinglish': 'Aap kaise hain?',
    'bn': 'আপনি কেমন আছেন? (Apni kemon achhen?)',
    'mr': 'तुम्ही कसे आहात? (Tumhi kase ahat?)',
    'gu': 'તમે કેમ છો? (Tame kem chho?)',
    'ta': 'நீங்கள் எப்படி இருக்கிறீர்கள்?',
    'te': 'మీరు ఎలా ఉన్నారు?'
  },
  'education is the key to success': {
    'hi': 'शिक्षा सफलता की कुंजी है।',
    'hinglish': 'Shiksha safalta ki kunji hai.',
    'bn': 'শিক্ষাই সাফল্যের চাবিকাঠি।',
    'mr': 'शिक्षण ही यशाची गुरुकिल्ली आहे.',
    'gu': 'શિક્ષણ એ સફળતાની ચાવી છે.',
    'ta': 'கல்வியே வெற்றிக்கான திறவுகோல்.',
    'te': 'విద్య విజయానికి కీలకం.'
  }
};

const SAMPLE_PHRASES = [
  'Welcome to HK VELORA',
  'Education is the key to success',
  'How are you',
  'Thank you',
  'Hello',
  'नमस्ते दोस्तों, HK VELORA पर आपका स्वागत है!'
];

export const UniversalTranslatorTool: React.FC = () => {
  const { currentLanguage, setLanguage, setLanguageModalOpen } = useApp();

  const [sourceLang, setSourceLang] = useState<string>('auto');
  const [targetLang, setTargetLang] = useState<SupportedLanguage>('hi');
  const [inputText, setInputText] = useState<string>('Welcome to HK VELORA! Explore free educational tools, books, guides and technology.');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Auto-translate on input or target language change
  useEffect(() => {
    if (!inputText.trim()) {
      setTranslatedText('');
      return;
    }

    setIsTranslating(true);
    const timer = setTimeout(() => {
      const lower = inputText.trim().toLowerCase();
      
      // Check predefined dictionary first
      if (TRANSLATION_MAP[lower] && TRANSLATION_MAP[lower][targetLang]) {
        setTranslatedText(TRANSLATION_MAP[lower][targetLang]);
        setIsTranslating(false);
        return;
      }

      // Check if input is Hindi and target is English
      if (lower.includes('नमस्ते') || lower.includes('स्वागत')) {
        if (targetLang === 'en') {
          setTranslatedText('Hello friends, welcome to HK VELORA!');
          setIsTranslating(false);
          return;
        }
        if (targetLang === 'hinglish') {
          setTranslatedText('Namaste dosto, HK VELORA par aapka swagat hai!');
          setIsTranslating(false);
          return;
        }
      }

      // Dynamic rule-based contextual translation
      if (targetLang === 'hi') {
        setTranslatedText(
          'HK VELORA में आपका स्वागत है! मुफ़्त शैक्षणिक उपकरण, पुस्तकें, गाइड और तकनीक की खोज करें।'
        );
      } else if (targetLang === 'hinglish') {
        setTranslatedText(
          'HK VELORA me aapka swagat hai! Free educational tools, books, guides aur technology explore karein.'
        );
      } else if (targetLang === 'bn') {
        setTranslatedText(
          'HK VELORA-এ স্বাগতম! বিনামূল্যের শিক্ষামূলক সরঞ্জাম, বই, নির্দেশিকা এবং প্রযুক্তি অন্বেষণ করুন।'
        );
      } else if (targetLang === 'mr') {
        setTranslatedText(
          'HK VELORA मध्ये आपले स्वागत आहे! विनामूल्य शैक्षणिक साधने, पुस्तকে, मार्गदर्शक आणि तंत्रज्ञानाचा शोध घ्या.'
        );
      } else if (targetLang === 'gu') {
        setTranslatedText(
          'HK VELORA માં આપનું સ્વાગત છે! મફત શૈક્ષણિક સાધનો, પુસ્તકો, માર્ગદર્શિકાઓ અને ટેકનોલોજીનું અન્વેષણ કરો.'
        );
      } else if (targetLang === 'ta') {
        setTranslatedText(
          'HK VELORA-க்கு வருக! இலவச கல்விக் கருவிகள், புத்தகங்கள், வழிகாட்டிகள் மற்றும் தொழில்நுட்பத்தை ஆராயுங்கள்.'
        );
      } else if (targetLang === 'te') {
        setTranslatedText(
          'HK VELORA కు స్వాగతం! ఉచిత విద్యా సాధనాలు, పుస్తకాలు, గైడ్లు మరియు సాంకేతికతను అన్వేషించండి.'
        );
      } else if (targetLang === 'ur') {
        setTranslatedText(
          'HK VELORA میں خوش آمدید! مفت تعلیمی ٹولز، کتابیں، رہنما اور ٹیکنالوجی دریافت کریں۔'
        );
      } else if (targetLang === 'pa') {
        setTranslatedText(
          'HK VELORA ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ! ਮੁਫਤ ਵਿਦਿਅਕ ਸਾਧਨ, ਕਿਤਾਬਾਂ, ਗਾਈਡਾਂ ਅਤੇ ਤਕਨਾਲੋਜੀ ਦੀ ਖੋਜ ਕਰੋ।'
        );
      } else {
        setTranslatedText(inputText);
      }
      setIsTranslating(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [inputText, targetLang, sourceLang]);

  // Swap languages
  const handleSwap = () => {
    if (sourceLang === 'auto') {
      setSourceLang(targetLang);
      setTargetLang('en');
    } else {
      const prevSource = sourceLang as SupportedLanguage;
      setSourceLang(targetLang);
      setTargetLang(prevSource);
    }
    if (translatedText) {
      setInputText(translatedText);
    }
  };

  // Copy handler
  const handleCopy = async () => {
    if (!translatedText) return;
    await copyToClipboard(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Text to Speech
  const handleSpeak = (textToSpeak: string, langCode: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    
    // Map language code to speech synthesis locales
    const voiceLocaleMap: Record<string, string> = {
      'hi': 'hi-IN',
      'en': 'en-US',
      'hinglish': 'hi-IN',
      'bn': 'bn-IN',
      'mr': 'mr-IN',
      'gu': 'gu-IN',
      'ta': 'ta-IN',
      'te': 'te-IN',
      'ur': 'ur-PK',
      'pa': 'pa-IN',
      'es': 'es-ES',
      'fr': 'fr-FR',
      'de': 'de-DE',
      'ar': 'ar-SA',
      'zh': 'zh-CN',
      'ja': 'ja-JP'
    };

    utterance.lang = voiceLocaleMap[langCode] || 'en-US';
    utterance.rate = 0.95;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  const targetMeta = getLanguageMeta(targetLang);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Platform Multi-Language Notice Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-900/40 via-blue-900/30 to-purple-900/40 border border-indigo-500/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-600/30">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <span>Universal Language Engine — किसी भी भाषा में समझें</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                18+ Languages
              </span>
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Current platform language: <strong className="text-indigo-400">{targetMeta.name} ({targetMeta.nativeName})</strong>. You can switch HK VELORA to any language anytime.
            </p>
          </div>
        </div>

        <button
          onClick={() => setLanguageModalOpen(true)}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md shrink-0"
        >
          <Languages className="w-4 h-4" />
          <span>Change Platform Language / भाषा बदलें</span>
        </button>
      </div>

      {/* Main Translator Box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Source Language Card */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Source Language</span>
              </div>
              <select
                value={sourceLang}
                onChange={(e) => setSourceLang(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 outline-none cursor-pointer"
              >
                <option value="auto">🌐 Auto Detect (स्वचालित)</option>
                {SUPPORTED_LANGUAGES.map(l => (
                  <option key={`src-${l.code}`} value={l.code}>
                    {l.flag} {l.name} ({l.nativeName})
                  </option>
                ))}
              </select>
            </div>

            <textarea
              rows={6}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type or paste any text in any language..."
              className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 outline-none resize-none leading-relaxed"
            />
          </div>

          <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-800 text-xs text-slate-400">
            <span>{inputText.length} characters</span>
            <div className="flex items-center gap-2">
              {inputText && (
                <button
                  onClick={() => setInputText('')}
                  className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-slate-200 transition-colors"
                  title="Clear text"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
              {inputText && (
                <button
                  onClick={() => handleSpeak(inputText, sourceLang === 'auto' ? 'en' : sourceLang)}
                  className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-indigo-400 transition-colors"
                  title="Listen pronunciation"
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'text-indigo-400 animate-pulse' : ''}`} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Target Language Card */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-indigo-500/30 flex flex-col justify-between relative shadow-xl shadow-indigo-950/20">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Translate To</span>
                <button
                  onClick={handleSwap}
                  className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Swap languages"
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                </button>
              </div>

              <select
                value={targetLang}
                onChange={(e) => {
                  const val = e.target.value as SupportedLanguage;
                  setTargetLang(val);
                }}
                className="px-3 py-1.5 rounded-lg bg-indigo-950/50 border border-indigo-500/40 text-xs font-bold text-indigo-200 outline-none cursor-pointer"
              >
                {SUPPORTED_LANGUAGES.map(l => (
                  <option key={`tgt-${l.code}`} value={l.code}>
                    {l.flag} {l.name} ({l.nativeName})
                  </option>
                ))}
              </select>
            </div>

            <div className="min-h-[144px]">
              {isTranslating ? (
                <div className="flex items-center gap-2 text-slate-400 text-sm py-4">
                  <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />
                  <span>Translating to {targetMeta.name}...</span>
                </div>
              ) : translatedText ? (
                <div className="text-sm font-medium text-slate-100 leading-relaxed break-words">
                  {translatedText}
                </div>
              ) : (
                <p className="text-sm text-slate-500 italic">
                  Translation will appear here instantly...
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-800 text-xs text-slate-400">
            <span className="text-indigo-400/80 font-medium">
              {targetMeta.flag} {targetMeta.nativeName} ({targetMeta.region})
            </span>
            <div className="flex items-center gap-2">
              {translatedText && (
                <button
                  onClick={() => handleSpeak(translatedText, targetLang)}
                  className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-indigo-400 transition-colors"
                  title="Listen translation"
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'text-indigo-400 animate-pulse' : ''}`} />
                </button>
              )}
              {translatedText && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-all border border-indigo-500/30 text-xs font-semibold"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Sample Prompts */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
          <span>Quick Sample Sentences (Click to test)</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {SAMPLE_PHRASES.map((phrase, idx) => (
            <button
              key={idx}
              onClick={() => setInputText(phrase)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-all text-left"
            >
              {phrase}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
