import { SupportedLanguage } from '../types';

/**
 * Universal Client-Side DOM Auto-Translator
 * Translates UI strings, headings, descriptions, badges, buttons, and filters
 * in real-time across all 18 supported languages.
 */

// Global registry of original text nodes using WeakMap
const originalTextMap = new WeakMap<Node, string>();
let currentActiveLang: SupportedLanguage = 'en';
let domObserver: MutationObserver | null = null;
let scheduledFrame: number | null = null;

// Comprehensive Multi-Language Phrase Dictionary
export const DOM_TRANSLATION_DICT: Record<string, Partial<Record<SupportedLanguage, string>>> = {
  // EBooks Knowledge Vault & Hero
  'HK Tech World Original Publications • Authored by Hariom Kushwaha': {
    ja: 'HK Tech World 公式出版物 • 著者: Hariom Kushwaha',
    hi: 'HK Tech World मूल प्रकाशन • लेखक: हरिओम कुशवाहा',
    hinglish: 'HK Tech World Original Publications • Authored by Hariom Kushwaha',
    bn: 'HK Tech World মূল প্রকাশনা • লেখক: হরিওম কুশওয়াহা',
    mr: 'HK Tech World मूळ प्रकाशने • लेखक: हरीओम कुशवाहा',
    gu: 'HK Tech World મૂળ પ્રકાશનો • લેખક: હરિઓમ કુશવાહા',
    te: 'HK Tech World అసలు ప్రచురణలు • రచయిత: హరిఓమ్ కుష్వాహా',
    ta: 'HK Tech World அசல் வெளியீடுகள் • ஆசிரியர்: ஹரிஓம் குஷ்வாஹா',
    ur: 'HK Tech World اصل اشاعتیں • مصنف: ہری اوم کشواہا',
    pa: 'HK Tech World ਮੂਲ ਪ੍ਰਕਾਸ਼ਨਾਂ • ਲੇਖਕ: ਹਰੀਓਮ ਕੁਸ਼ਵਾਹਾ',
    kn: 'HK Tech World ಮೂಲ ಪ್ರಕಟಣೆಗಳು • ಲೇಖಕ: ಹರಿಓಂ ಕುಶ್ವಾಹ',
    ml: 'HK Tech World യഥാർത്ഥ പ്രസിദ്ധീകരണങ്ങൾ • രചയിതാവ്: ഹരിഓം കുശ്വാഹ',
    es: 'Publicaciones Originales de HK Tech World • Autor: Hariom Kushwaha',
    fr: 'Publications Originales HK Tech World • Auteur: Hariom Kushwaha',
    de: 'HK Tech World Originalpublikationen • Autor: Hariom Kushwaha',
    ar: 'منشورات HK Tech World الأصلية • بقلم هاريوم كوشواها',
    ru: 'Оригинальные публикации HK Tech World • Автор: Хариом Кушваха'
  },
  'HK VELORA Knowledge Vault': {
    ja: 'HK VELORA ナレッジ・ヴォールト (知識の宝庫)',
    hi: 'HK VELORA ज्ञान भंडार (Knowledge Vault)',
    hinglish: 'HK VELORA Knowledge Vault',
    bn: 'HK VELORA জ্ঞান ভাণ্ডার',
    mr: 'HK VELORA ज्ञान भांडार',
    gu: 'HK VELORA જ્ઞાન ભંડાર',
    te: 'HK VELORA నాలెడ్జ్ వాల్ట్',
    ta: 'HK VELORA அறிவு பெட்டகம்',
    ur: 'HK VELORA نالج والٹ',
    pa: 'HK VELORA ਗਿਆਨ ਭੰਡਾਰ',
    kn: 'HK VELORA ಜ್ಞಾನ ಭಂಡಾರ',
    ml: 'HK VELORA വിജ്ഞാന ശേഖരം',
    es: 'HK VELORA Bóveda del Conocimiento',
    fr: 'HK VELORA Coffre du Savoir',
    de: 'HK VELORA Wissens-Tresor',
    ar: 'خزينة المعرفة HK VELORA',
    ru: 'Хранилище знаний HK VELORA'
  },
  '📚 HK VELORA Knowledge Vault': {
    ja: '📚 HK VELORA ナレッジ・ヴォールト (知識の宝庫)',
    hi: '📚 HK VELORA ज्ञान भंडार (Knowledge Vault)',
    hinglish: '📚 HK VELORA Knowledge Vault',
    bn: '📚 HK VELORA জ্ঞান ভাণ্ডার',
    mr: '📚 HK VELORA ज्ञान भांडार',
    gu: '📚 HK VELORA જ્ઞાન ભંડાર',
    te: '📚 HK VELORA నాలెడ్జ్ వాల్ట్',
    ta: '📚 HK VELORA அறிவு பெட்டகம்',
    ur: '📚 HK VELORA نالج والٹ',
    pa: '📚 HK VELORA ਗਿਆਨ ਭੰਡਾਰ',
    kn: '📚 HK VELORA ಜ್ಞಾನ ಭಂಡಾರ',
    ml: '📚 HK VELORA വിജ്ഞാന ശേഖരം',
    es: '📚 HK VELORA Bóveda del Conocimiento',
    fr: '📚 HK VELORA Coffre du Savoir',
    de: '📚 HK VELORA Wissens-Tresor',
    ar: '📚 خزينة المعرفة HK VELORA',
    ru: '📚 Хранилище знаний HK VELORA'
  },
  'Complete, deeply explained handbooks written by Hariom Kushwaha (HK Tech World) & Academic Experts. Over 1,500+ comprehensive books spanning Technology, School (Classes 6–12), College Engineering, Competitive Exams, Literature, and Brain Puzzles.': {
    ja: 'Hariom Kushwaha（HK Tech World）と教育専門家によって執筆された詳細な総合ハンドブック。テクノロジー、学校教育（6〜12年生）、大学工学、競争試験、文学、頭脳パズルにわたる1,530冊以上の専門書。',
    hi: 'हरिओम कुशवाहा (HK Tech World) और अकादमिक विशेषज्ञों द्वारा लिखित प्रामाणिक हैंडबुक्स। टेक्नोलॉजी, स्कूल (कक्षा 6–12), कॉलेज इंजीनियरिंग, प्रतियोगी परीक्षा, साहित्य और पहेलियों की 1,530+ पुस्तकें।',
    hinglish: 'Hariom Kushwaha (HK Tech World) aur academic experts dwara likhi gayi detailed handbooks. Technology, School (Class 6–12), Engineering, Exams, aur Literature ki 1,530+ books.',
    bn: 'হরিওম কুশওয়াহা (HK Tech World) ও বিশেষজ্ঞদের লেখা গভীর তথ্যবহুল হ্যান্ডবুক। প্রযুক্তি, স্কুল (শ্রেণি ৬-১২), ইঞ্জিনিয়ারিং ও প্রতিযোগিতামূলক পরীক্ষার ১,৫৩০+ বই।',
    mr: 'हरीओम कुशवाहा आणि तज्ज्ञांनी लिहिलेली सखोल हँडबुक्स. तंत्रज्ञान, शालेय अभ्यासक्रम, अभियांत्रिकी आणि स्पर्धा परीक्षांवरील १,५३०+ पुस्तके.',
    gu: 'હરિઓમ કુશવાહા અને નિષ્ણાતો દ્વારા લખાયેલા વિગતવાર પુસ્તકો. ટેકનોલોજી, શાળા શિક્ષણ, એન્જિનિયરિંગ અને સ્પર્ધાત્મક પરીક્ષાઓના ૧,૫૩૦+ પુસ્તકો.',
    te: 'హరిఓమ్ కుష్వాహా మరియు విద్యా నిపుణులు రాసిన లోతైన హ్యాండ్‌బుక్‌లు. టెక్నాలజీ, పాఠశాల విద్య, ఇంజనీరింగ్ మరియు పోటీ పరీక్షల 1,530+ పుస్తకాలు.',
    ta: 'ஹரிஓம் குஷ்வாஹா மற்றும் கல்வி நிபுணர்களால் எழுதப்பட்ட விரிவான கையேடுகள். தொழில்நுட்பம், பள்ளி, பொறியியல் மற்றும் போட்டித் தேர்வுகளின் 1,530+ புத்தகங்கள்.',
    ur: 'ہری اوم کشواہا اور تعلیمی ماہرین کی تحریر کردہ تفصیلی کتابیں۔ ٹیکنالوجی، اسکول، انجینئرنگ اور مسابقتی امتحانات کی 1,530+ کتب۔',
    pa: 'ਹਰੀਓਮ ਕੁਸ਼ਵਾਹਾ ਅਤੇ ਮਾਹਿਰਾਂ ਦੁਆਰਾ ਲਿਖੀਆਂ ਵਿਸਤ੍ਰਿਤ ਕਿਤਾਬਾਂ। ਤਕਨਾਲੋਜੀ, ਸਕੂਲ, ਇੰਜੀਨੀਅਰਿੰਗ ਅਤੇ ਪ੍ਰੀਖਿਆਵਾਂ ਦੀਆਂ 1,530+ ਪੁਸਤਕਾਂ।',
    kn: 'ಹರಿಓಂ ಕುಶ್ವಾಹ ಮತ್ತು ತಜ್ಞರು ಬರೆದ ಸಮಗ್ರ ಹ್ಯಾಂಡ್‌ಬುಕ್‌ಗಳು. ತಂತ್ರಜ್ಞಾನ, ಶಾಲೆ, ಇಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳ 1,530+ ಪುಸ್ತಕಗಳು.',
    ml: 'ഹരിഓം കുശ്വാഹയും വിദഗ്ദ്ധരും രചിച്ച സമഗ്ര ഹാൻഡ്‌ബുക്കുകൾ. സാങ്കേതികവിദ്യ, സ്കൂൾ വിദ്യാഭ്യാസം, എഞ്ചിനീയറിംഗ് എന്നിവ ഉൾപ്പെടുന്ന 1,530+ പുസ്തകങ്ങൾ.',
    es: 'Manuales completos y explicados en profundidad por Hariom Kushwaha y expertos académicos. Más de 1.530 libros que abarcan tecnología, escuela, ingeniería y exámenes.',
    fr: 'Manuels complets rédigés par Hariom Kushwaha et des experts universitaires. Plus de 1 530 livres couvrant technologie, école, ingénierie et concours.',
    de: 'Umfassende Handbücher von Hariom Kushwaha und akademischen Experten. Über 1.530 Bücher zu Technologie, Schule, Ingenieurwesen und Prüfungen.',
    ar: 'كتيبات مفصلة وشاملة كتبها هاريوم كوشواها وخبراء أكاديميون. أكثر من 1530 كتاباً في التكنولوجيا والتعليم المدرسي والهندسة والامتحانات.',
    ru: 'Полные справочники, написанные Хариомом Кушвахой и экспертами. Более 1530 книг по технологиям, школе, инженерии и экзаменам.'
  },
  'Total Books in Library': {
    ja: '図書館内の総書籍数',
    hi: 'लाइब्रेरी में कुल पुस्तकें',
    hinglish: 'Library me Total Books',
    bn: 'লাইব্রেরিতে মোট বই',
    mr: 'ग्रंथालयातील एकूण पुस्तके',
    gu: 'લાઇબ્રેરીમાં કુલ પુસ્તકો',
    te: 'లైబ్రరీలోని మొత్తం పుస్తకాలు',
    ta: 'நூலகத்தில் உள்ள மொத்த புத்தகங்கள்',
    ur: 'لائبریری میں کل کتابیں',
    pa: 'ਲਾਇਬ੍ਰੇਰੀ ਵਿੱਚ ਕੁੱਲ ਕਿਤਾਬਾਂ',
    kn: 'ಲೈಬ್ರರಿಯಲ್ಲಿ ಒಟ್ಟು ಪುಸ್ತಕಗಳು',
    ml: 'ലൈബ്രറിയിലെ ആകെ പുസ്തകങ്ങൾ',
    es: 'Total de Libros en Biblioteca',
    fr: 'Total des Livres en Bibliothèque',
    de: 'Gesamtbücher in der Bibliothek',
    ar: 'إجمالي الكتب في المكتبة',
    ru: 'Всего книг в библиотеке'
  },
  '1530+ Total Books in Library': {
    ja: '📖 1,530冊以上の図書館内書籍',
    hi: '📖 1530+ लाइब्रेरी में कुल पुस्तकें',
    hinglish: '📖 1530+ Total Books in Library',
    bn: '📖 ১৫৩০+ লাইব্রেরিতে মোট বই',
    mr: '📖 १५३०+ एकूण पुस्तके',
    gu: '📖 ૧૫૩૦+ કુલ પુસ્તકો',
    te: '📖 1530+ మొత్తం పుస్తకాలు',
    ta: '📖 1530+ மொத்த புத்தகங்கள்',
    ur: '📖 1530+ کل کتب',
    pa: '📖 1530+ ਕੁੱਲ ਕਿਤਾਬਾਂ',
    kn: '📖 1530+ ಒಟ್ಟು ಪುಸ್ತಕಗಳು',
    ml: '📖 1530+ ആകെ പുസ്തകങ്ങൾ',
    es: '📖 1.530+ Libros en la Biblioteca',
    fr: '📖 1 530+ Livres en Bibliothèque',
    de: '📖 1.530+ Bücher in der Bibliothek',
    ar: '📖 أكثر من 1530 كتاباً في المكتبة',
    ru: '📖 1530+ книг в библиотеке'
  },
  'School & Heritage (100% Free)': {
    ja: '学校・遺産教育 (完全無料)',
    hi: 'स्कूली व विरासत ज्ञान (100% फ्री)',
    hinglish: 'School & Heritage (100% Free)',
    bn: 'স্কুল ও ঐতিহ্য (১০০% বিনামূল্যে)',
    mr: 'शालेय व वारसा शिक्षण (१००% मोफत)',
    gu: 'શાળા અને વારસો (૧૦૦% મફત)',
    te: 'పాఠశాల & వారసత్వం (100% ఉచితం)',
    ta: 'பள்ளி மற்றும் பாரம்பரியம் (100% இலவசம்)',
    ur: 'اسکول اور ورثہ (100% مفت)',
    pa: 'ਸਕੂਲ ਅਤੇ ਵਿਰਾਸਤ (100% ਮੁਫ਼ਤ)',
    kn: 'ಶಾಲೆ ಮತ್ತು ಪರಂಪರೆ (100% ಉಚಿತ)',
    ml: 'സ്കൂളും പൈതൃകവും (100% സൗജന്യം)',
    es: 'Escuela y Patrimonio (100% Gratis)',
    fr: 'École & Patrimoine (100% Gratuit)',
    de: 'Schule & Kulturerbe (100% Kostenlos)',
    ar: 'التعليم المدرسي والتراث (مجاني 100%)',
    ru: 'Школа и наследие (100% бесплатно)'
  },
  'Tech & Engineering (100% Free)': {
    ja: '技術・工学 (完全無料)',
    hi: 'तकनीक व इंजीनियरिंग (100% फ्री)',
    hinglish: 'Tech & Engineering (100% Free)',
    bn: 'প্রযুক্তি ও প্রকৌশল (১০০% বিনামূল্যে)',
    mr: 'तंत्रज्ञान व अभियांत्रिकी (१००% मोफत)',
    gu: 'ટેક અને એન્જિનિયરિંગ (૧૦૦% મફત)',
    te: 'టెక్ & ఇంజనీరింగ్ (100% ఉచితం)',
    ta: 'தொழில்நுட்பம் & பொறியியல் (100% இலவசம்)',
    ur: 'ٹیکنالوجی اور انجینئرنگ (100% مفت)',
    pa: 'ਤਕਨੀਕ ਅਤੇ ਇੰਜੀਨੀਅਰਿੰਗ (100% ਮੁਫ਼ਤ)',
    kn: 'ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಎಂಜಿನಿಯರಿಂಗ್ (100% ಉಚಿತ)',
    ml: 'ടെക്കും എഞ്ചിനീയറിംഗും (100% സൗജന്യം)',
    es: 'Tecnología e Ingeniería (100% Gratis)',
    fr: 'Technologie & Ingénierie (100% Gratuit)',
    de: 'Technik & Ingenieurwesen (100% Kostenlos)',
    ar: 'التكنولوجيا والهندسة (مجاني 100%)',
    ru: 'Технологии и инженерия (100% бесплатно)'
  },
  'Audio Book Narrations': {
    ja: 'オーディオブック朗読',
    hi: 'ऑडियो बुक वाचन (Audio Narration)',
    hinglish: 'Audio Book Narrations',
    bn: 'অডিও বুক বর্ণনা',
    mr: 'ऑडिओ बुक वाचन',
    gu: 'ઓડિયો બુક વાચન',
    te: 'ఆడియో బుక్ కథనాలు',
    ta: 'ஆடியோ புத்தக விவரிப்பு',
    ur: 'آڈیو بک بیانیہ',
    pa: 'ਆਡੀਓ ਕਿਤਾਬ ਸੁਣੋ',
    kn: 'ಆಡಿಯೋ ಪುಸ್ತಕ ನಿರೂಪಣೆ',
    ml: 'ഓഡിയോ ബുക്ക് വിവരണം',
    es: 'Narraciones de Audiolibros',
    fr: 'Narrations de Livres Audio',
    de: 'Hörbuch-Erzählungen',
    ar: 'روايات الكتب الصوتية',
    ru: 'Аудиокниги и озвучка'
  },
  '100% Free Open Education': {
    ja: '100% 完全無料オープン教育',
    hi: '100% निःशुल्क खुली शिक्षा',
    hinglish: '100% Free Open Education',
    bn: '১০০% বিনামূল্যে উন্মুক্ত শিক্ষা',
    mr: '१००% मोफत खुले शिक्षण',
    gu: '૧૦૦% મફત ખુલ્લું શિક્ષણ',
    te: '100% ఉచిత ఓపెన్ ఎడ్యుకేషన్',
    ta: '100% இலவச திறந்த கல்வி',
    ur: '100% مفت کھلا تعلیمی پلیٹ فارم',
    pa: '100% ਮੁਫ਼ਤ ਖੁੱਲ੍ਹੀ ਸਿੱਖਿਆ',
    kn: '100% ಉಚಿತ ಮುಕ್ತ ಶಿಕ್ಷಣ',
    ml: '100% സൗജന്യ ഓപ്പൺ വിദ്യാഭ്യാസം',
    es: 'Educación Abierta 100% Gratuita',
    fr: 'Éducation Ouverte 100% Gratuite',
    de: '100% Kostenlose Offene Bildung',
    ar: 'تعليم مفتوح ومجاني 100%',
    ru: '100% бесплатное открытое образование'
  },
  'Submit Book / Guide': {
    ja: '本・ガイドを投稿',
    hi: 'किताब / गाइड सबमिट करें',
    hinglish: 'Book / Guide Submit Karein',
    bn: 'বই / গাইড জমা দিন',
    mr: 'पुस्तक / मार्गदर्शक सबमिट करा',
    gu: 'પુસ્તક / માર્ગદર્શિકા સબમિટ કરો',
    te: 'పుస్తకం / గైడ్‌ను సమర్పించండి',
    ta: 'புத்தகம் / வழிகாட்டியைச் சமர்ப்பிக்கவும்',
    ur: 'کتاب / گائیڈ جمع کروائیں',
    pa: 'ਕਿਤਾਬ / ਗਾਈਡ ਜਮ੍ਹਾਂ ਕਰੋ',
    kn: 'ಪುಸ್ತಕ / ಮಾರ್ಗದರ್ಶಿ ಸಲ್ಲಿಸಿ',
    ml: 'പുസ്തകം / ഗൈഡ് സമർപ്പിക്കുക',
    es: 'Enviar Libro / Guía',
    fr: 'Soumettre Livre / Guide',
    de: 'Buch / Leitfaden einreichen',
    ar: 'إرسال كتاب / دليل',
    ru: 'Отправить книгу / руководство'
  },
  'Library Admin': {
    ja: '図書館管理',
    hi: 'लाइब्रेरी प्रबंधन (Admin)',
    hinglish: 'Library Admin',
    bn: 'লাইব্রেরি অ্যাডমিন',
    mr: 'ग्रंथालय व्यवस्थापन',
    gu: 'લાઇબ્રેરી સંચાલન',
    te: 'లైబ్రరీ నిర్వాహకుడు',
    ta: 'நூலக நிர்வாகி',
    ur: 'لائبریری ایڈمن',
    pa: 'ਲਾਇਬ੍ਰੇਰੀ ਪ੍ਰਬੰਧਕ',
    kn: 'ಲೈಬ್ರರಿ ನಿರ್ವಾಹಕ',
    ml: 'ലൈബ്രറി അഡ്മിൻ',
    es: 'Administrador de Biblioteca',
    fr: 'Gestionnaire de Bibliothèque',
    de: 'Bibliotheksverwaltung',
    ar: 'إدارة المكتبة',
    ru: 'Управление библиотекой'
  },
  'Modern Tech & 2026 Editions': {
    ja: '最新技術 & 2026年版',
    hi: '2026 आधुनिक टेक मास्टर्स',
    hinglish: 'Modern Tech & 2026 Editions',
    bn: 'আধুনিক প্রযুক্তি ও ২০২৬ সংস্করণ',
    mr: 'आधुनिक तंत्रज्ञान व २०२६ आवृत्त्या',
    gu: 'આધુનિક ટેકનોલોજી અને ૨૦૨૬ આવૃત્તિઓ',
    te: 'ఆధునిక టెక్ & 2026 ఎడిషన్‌లు',
    ta: 'நவீன தொழில்நுட்பம் & 2026 பதிப்புகள்',
    ur: 'جدید ٹیکنالوجی اور 2026 ایڈیشن',
    pa: 'ਆਧੁਨਿਕ ਤਕਨੀਕ ਅਤੇ 2026 ਐਡੀਸ਼ਨ',
    kn: 'ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನ & 2026 ಆವೃತ್ತಿಗಳು',
    ml: 'ആധുനിക സാങ്കേതികവിദ്യ & 2026 പതിപ്പുകൾ',
    es: 'Tecnología Moderna y Ediciones 2026',
    fr: 'Technologie Moderne & Éditions 2026',
    de: 'Moderne Technologie & 2026 Ausgaben',
    ar: 'التكنولوجيا الحديثة وإصدارات 2026',
    ru: 'Современные технологии и издания 2026'
  },
  'All Books & Vault': {
    ja: 'すべての書籍と保管庫',
    hi: 'सभी पुस्तकें एवं वॉल्ट',
    hinglish: 'All Books & Vault',
    bn: 'সকল বই ও সংগ্রহশালা',
    mr: 'सर्व पुस्तके व संग्रह',
    gu: 'બધા પુસ્તકો અને સંગ્રહ',
    te: 'అన్ని పుస్తకాలు & వాల్ట్',
    ta: 'அனைத்து புத்தகங்கள் & பெட்டகம்',
    ur: 'تمام کتب اور خزانہ',
    pa: 'ਸਾਰੀਆਂ ਕਿਤਾਬਾਂ ਅਤੇ ਵਾਲਟ',
    kn: 'ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು & ವಾಲ್ಟ್',
    ml: 'എല്ലാ പുസ്തകങ്ങളും ശേഖരവും',
    es: 'Todos los Libros y Bóveda',
    fr: 'Tous les Livres & Coffre',
    de: 'Alle Bücher & Archiv',
    ar: 'جميع الكتب والخزانة',
    ru: 'Все книги и архив'
  },
  'School Library': {
    ja: '学校図書館 (6〜12年生)',
    hi: 'स्कूली लाइब्रेरी (कक्षा 6–12)',
    hinglish: 'School Library',
    bn: 'স্কুল লাইব্রেরি (শ্রেণি ৬-১২)',
    mr: 'शालेय ग्रंथालय (इयत्ता ६-१२)',
    gu: 'શાળા લાયબ્રેરી (ધોરણ ૬-૧૨)',
    te: 'పాఠశాల లైబ్రరీ (తరగతి 6-12)',
    ta: 'பள்ளி நூலகம் (வகுப்புகள் 6-12)',
    ur: 'اسکول لائبریری (جماعت 6-12)',
    pa: 'ਸਕੂਲ ਲਾਇਬ੍ਰੇਰੀ (ਜਮਾਤ 6-12)',
    kn: 'ಶಾಲಾ ಗ್ರಂಥಾಲಯ (ತರಗತಿ 6-12)',
    ml: 'സ്കൂൾ ലൈബ്രറി (ക്ലാസ് 6-12)',
    es: 'Biblioteca Escolar (Clases 6–12)',
    fr: 'Bibliothèque Scolaire (Classes 6–12)',
    de: 'Schulbibliothek (Klassen 6–12)',
    ar: 'المكتبة المدرسية (الصفوف 6-12)',
    ru: 'Школьная библиотека (6–12 классы)'
  },
  'Stories & Literature': {
    ja: '物語と文学',
    hi: 'कहानियाँ व साहित्य',
    hinglish: 'Stories & Sahitya',
    bn: 'গল্প ও সাহিত্য',
    mr: 'कथा आणि साहित्य',
    gu: 'વાર્તાઓ અને સાહિત્ય',
    te: 'కథలు & సాహిత్యం',
    ta: 'கதைகள் & இலக்கியம்',
    ur: 'کہانیاں اور ادب',
    pa: 'ਕਹਾਣੀਆਂ ਅਤੇ ਸਾਹਿਤ',
    kn: 'ಕಥೆಗಳು ಮತ್ತು ಸಾಹಿತ್ಯ',
    ml: 'കഥകളും സാഹിത്യവും',
    es: 'Historias y Literatura',
    fr: 'Histoires & Littérature',
    de: 'Geschichten & Literatur',
    ar: 'القصص والأدب',
    ru: 'Рассказы и литература'
  },
  'Puzzles & Brain Gym': {
    ja: 'パズルと脳トレ',
    hi: 'पहेलियाँ व ब्रेन जिम',
    hinglish: 'Puzzles & Brain Gym',
    bn: 'ধাঁধা ও মেধা চর্চা',
    mr: 'कोडी आणि मेंदू कसरत',
    gu: 'ઉખાણાં અને મગજ કસરત',
    te: 'పజిల్స్ & బ్రెయిన్ జిమ్',
    ta: 'புதிர்கள் & மூளை பயிற்சி',
    ur: 'پہیلیاں اور دماغی ورزش',
    pa: 'ਬੁਝਾਰਤਾਂ ਅਤੇ ਦਿਮਾਗੀ ਕਸਰਤ',
    kn: 'ಒಗಟುಗಳು ಮತ್ತು ಮಿದುಳಿನ ಜಿಮ್',
    ml: 'പസിലുകളും ബ്രെയിൻ ജിമ്മും',
    es: 'Acertijos y Gimnasia Cerebral',
    fr: 'Énigmes & Gymnastique Cérébrale',
    de: 'Rätsel & Gehirnjogging',
    ar: 'الألغاز وتدريب الدماغ',
    ru: 'Головоломки и тренировка мозга'
  },
  'My Reading Desk': {
    ja: 'マイ読書デスク',
    hi: 'मेरी रीडिंग डेस्क',
    hinglish: 'My Reading Desk',
    bn: 'আমার পড়ার ডেস্ক',
    mr: 'माझे वाचन डेस्क',
    gu: 'મારું વાંચન ડેસ્ક',
    te: 'నా రీడింగ్ డెస్క్',
    ta: 'எனது வாசிப்பு மேசை',
    ur: 'میرا ریڈنگ ڈیسک',
    pa: 'ਮੇਰਾ ਰੀਡਿੰਗ ਡੈਸਕ',
    kn: 'ನನ್ನ ಓದುವ ಮೇಜು',
    ml: 'എന്റെ വായനാ ഡെസ്ക്',
    es: 'Mi Escritorio de Lectura',
    fr: 'Mon Bureau de Lecture',
    de: 'Mein Lesepult',
    ar: 'مكتب القراءة الخاص بي',
    ru: 'Мой стол для чтения'
  },
  '⚡ Continue Reading': {
    ja: '⚡ 続きを読む',
    hi: '⚡ पढ़ना जारी रखें',
    hinglish: '⚡ Continue Reading',
    bn: '⚡ পড়া চালিয়ে যান',
    mr: '⚡ वाचन सुरू ठेवा',
    gu: '⚡ વાંચવાનું ચાલુ રાખો',
    te: '⚡ చదవడం కొనసాగించండి',
    ta: '⚡ தொடர்ந்து படிக்கவும்',
    ur: '⚡ پڑھنا جاری رکھیں',
    pa: '⚡ ਪੜ੍ਹਨਾ ਜਾਰੀ ਰੱਖੋ',
    kn: '⚡ ಓದುವುದನ್ನು ಮುಂದುವರಿಸಿ',
    ml: '⚡ വായന തുടരുക',
    es: '⚡ Continuar Leyendo',
    fr: '⚡ Continuer la Lecture',
    de: '⚡ Weiterlesen',
    ar: '⚡ متابعة القراءة',
    ru: '⚡ Продолжить чтение'
  },
  'Pick up right where you left off': {
    ja: '中断したところから再開します',
    hi: 'वहीं से शुरू करें जहाँ आपने छोड़ा था',
    hinglish: 'Wahi se continue karein jahan chhoda tha',
    bn: 'যেখানে ছেড়েছিলেন সেখান থেকেই শুরু করুন',
    mr: 'जिथे सोडले होते तिथूनच पुढे वाचा',
    gu: 'જ્યાંથી છોડ્યું હતું ત્યાંથી જ આગળ વાંચો',
    te: 'మీరు ఎక్కడ ఆపారో అక్కడి నుంచే ప్రారంభించండి',
    ta: 'நீங்கள் விட்ட இடத்திலிருந்து தொடங்கவும்',
    ur: 'وہیں سے شروع کریں جہاں سے چھوڑا تھا',
    pa: 'ਉੱਥੋਂ ਹੀ ਸ਼ੁਰੂ ਕਰੋ ਜਿੱਥੇ ਛੱਡਿਆ ਸੀ',
    kn: 'ನೀವು ಬಿಟ್ಟ ಸ್ಥಳದಿಂದಲೇ ಪ್ರಾರಂಭಿಸಿ',
    ml: 'നിങ്ങൾ നിർത്തിയിടത്തുനിന്ന് പുനരാരംഭിക്കുക',
    es: 'Retoma exactamente donde lo dejaste',
    fr: 'Reprenez là où vous vous étiez arrêté',
    de: 'Genau dort weitermachen, wo Sie aufgehört haben',
    ar: 'تابع من حيث توقفت تماماً',
    ru: 'Продолжайте с того места, где остановились'
  },
  '100% Free Open Access • All Books Unlocked': {
    ja: '100% 完全無料オープンアクセス • 全書籍ロック解除済み',
    hi: '100% निःशुल्क खुली पहुंच • सभी पुस्तकें अनलॉक',
    hinglish: '100% Free Open Access • All Books Unlocked',
    bn: '১০০% উন্মুক্ত অ্যাক্সেস • সব বই আনলক করা',
    mr: '१००% मोफत खुला प्रवेश • सर्व पुस्तके खुली',
    gu: '૧૦૦% મફત ઓપન એક્સેસ • બધા પુસ્તકો અનલોક',
    te: '100% ఉచిత ఓపెన్ యాక్సెస్ • అన్ని పుస్తకాలు అన్‌లాక్ చేయబడ్డాయి',
    ta: '100% இலவச திறந்த அணுகல் • அனைத்து புத்தகங்களும் திறக்கப்பட்டுள்ளன',
    ur: '100% مفت رسائی • تمام کتب کھلی ہیں',
    pa: '100% ਮੁਫ਼ਤ ਪਹੁੰਚ • ਸਾਰੀਆਂ ਕਿਤਾਬਾਂ ਅਨਲੌਕ',
    kn: '100% ಉಚಿತ ಮುಕ್ತ ಪ್ರವೇಶ • ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು ಅನ್‌ಲಾಕ್ ಆಗಿವೆ',
    ml: '100% സൗജന്യ പ്രവേശനം • എല്ലാ പുസ്തകങ്ങളും അൺലോക്ക് ചെയ്‌തു',
    es: 'Acceso Abierto 100% Gratis • Todos los Libros Desbloqueados',
    fr: 'Accès Ouvert 100% Gratuit • Tous les Livres Débloqués',
    de: '100% Kostenloser Freier Zugang • Alle Bücher Freigeschaltet',
    ar: 'وصول مجاني 100% • جميع الكتب مفتوحة',
    ru: '100% бесплатный доступ • Все книги разблокированы'
  },
  'Sort: Highest Rated ⭐': {
    ja: '並べ替え: 最高評価 ⭐',
    hi: 'क्रम: उच्चतम रेटिंग ⭐',
    hinglish: 'Sort: Highest Rated ⭐',
    bn: 'সাজান: সর্বোচ্চ রেটিং ⭐',
    mr: 'क्रमवारी: सर्वोच्च रेटिंग ⭐',
    gu: 'ક્રમ: ઉચ્ચતમ રેટિંગ ⭐',
    te: 'క్రమబద్ధీకరించు: అత్యధిక రేటింగ్ ⭐',
    ta: 'வரிசைப்படுத்து: அதிக மதிப்பீடு ⭐',
    ur: 'ترتیب: سب سے زیادہ درجہ بندی ⭐',
    pa: 'ਤਰਤੀਬ: ਉੱਚ ਰੇਟਿੰਗ ⭐',
    kn: 'ವಿಂಗಡಿಸು: ಗರಿಷ್ಠ ರೇಟಿಂಗ್ ⭐',
    ml: 'ക്രമീകരിക്കുക: ഉയർന്ന റേറ്റിംഗ് ⭐',
    es: 'Ordenar: Mejor Valorados ⭐',
    fr: 'Trier: Mieux Notés ⭐',
    de: 'Sortieren: Höchste Bewertung ⭐',
    ar: 'ترتيب: الأعلى تقييماً ⭐',
    ru: 'Сортировка: Высокий рейтинг ⭐'
  },
  'Sort: Most Popular 🔥': {
    ja: '並べ替え: 最も人気 🔥',
    hi: 'क्रम: सबसे लोकप्रिय 🔥',
    hinglish: 'Sort: Most Popular 🔥',
    bn: 'সাজান: সবচেয়ে জনপ্রিয় 🔥',
    mr: 'क्रमवारी: सर्वात लोकप्रिय 🔥',
    gu: 'ક્રમ: સૌથી લોકપ્રિય 🔥',
    te: 'క్రమబద్ధీకరించు: అత్యంత ప్రజాదరణ 🔥',
    ta: 'வரிசைப்படுத்து: மிகவும் பிரபலமானது 🔥',
    ur: 'ترتیب: سب سے مقبول 🔥',
    pa: 'ਤਰਤੀਬ: ਸਭ ਤੋਂ ਪ੍ਰਸਿੱਧ 🔥',
    kn: 'ವಿಂಗಡಿಸು: ಅತ್ಯಂತ ಜನಪ್ರಿಯ 🔥',
    ml: 'ക്രമീകരിക്കുക: ഏറ്റവും ജനപ്രിയം 🔥',
    es: 'Ordenar: Más Populares 🔥',
    fr: 'Trier: Plus Populaires 🔥',
    de: 'Sortieren: Beliebteste 🔥',
    ar: 'ترتيب: الأكثر شيوعاً 🔥',
    ru: 'Сортировка: Популярные 🔥'
  },
  'Sort: Title (A - Z)': {
    ja: '並べ替え: タイトル順 (A - Z)',
    hi: 'क्रम: शीर्षक (A - Z)',
    hinglish: 'Sort: Title (A - Z)',
    bn: 'সাজান: শিরোনাম (A - Z)',
    mr: 'क्रमवारी: शीर्षक (A - Z)',
    gu: 'ક્રમ: શીર્ષક (A - Z)',
    te: 'క్రమబద్ధీకరించు: శీర్షిక (A - Z)',
    ta: 'வரிசைப்படுத்து: தலைப்பு (A - Z)',
    ur: 'ترتیب: عنوان (A - Z)',
    pa: 'ਤਰਤੀਬ: ਸਿਰਲੇਖ (A - Z)',
    kn: 'ವಿಂಗಡಿಸು: ಶೀರ್ಷಿಕೆ (A - Z)',
    ml: 'ക്രമീകരിക്കുക: തലക്കെട്ട് (A - Z)',
    es: 'Ordenar: Título (A - Z)',
    fr: 'Trier: Titre (A - Z)',
    de: 'Sortieren: Titel (A - Z)',
    ar: 'ترتيب: العنوان (أ - ي)',
    ru: 'Сортировка: Название (А - Я)'
  },
  'Read Now': {
    ja: '今すぐ読む',
    hi: 'अभी पढ़ें',
    hinglish: 'Abhi Padhein',
    bn: 'এখনই পড়ুন',
    mr: 'आत्ताच वाचा',
    gu: 'હમણાં જ વાંચો',
    te: 'ఇప్పుడే చదవండి',
    ta: 'இப்போதே படியுங்கள்',
    ur: 'ابھی پڑھیں',
    pa: 'ਹੁਣੇ ਪੜ੍ਹੋ',
    kn: 'ಈಗಲೇ ಓದಿ',
    ml: 'ഇപ്പോൾ വായിക്കുക',
    es: 'Leer Ahora',
    fr: 'Lire Maintenant',
    de: 'Jetzt Lesen',
    ar: 'اقرأ الآن',
    ru: 'Читать сейчас'
  },
  'Read Online': {
    ja: 'オンラインで読む',
    hi: 'ऑनलाइन पढ़ें',
    hinglish: 'Online Padhein',
    bn: 'অনলাইনে পড়ুন',
    mr: 'ऑनलाइन वाचा',
    gu: 'ઓનલાઇન વાંચો',
    te: 'ఆన్‌లైన్‌లో చదవండి',
    ta: 'ஆன்லைனில் படிக்கவும்',
    ur: 'آن لائن پڑھیں',
    pa: 'ਆਨਲਾਈਨ ਪੜ੍ਹੋ',
    kn: 'ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಓದಿ',
    ml: 'ഓൺലൈനിൽ വായിക്കുക',
    es: 'Leer en Línea',
    fr: 'Lire en Ligne',
    de: 'Online Lesen',
    ar: 'اقرأ عبر الإنترنت',
    ru: 'Читать онлайн'
  },
  'Download PDF': {
    ja: 'PDFをダウンロード',
    hi: 'PDF डाउनलोड करें',
    hinglish: 'PDF Download Karein',
    bn: 'PDF ডাউনলোড করুন',
    mr: 'PDF डाउनलोड करा',
    gu: 'PDF ડાઉનલોડ કરો',
    te: 'PDF డౌన్‌లోడ్ చేయండి',
    ta: 'PDF பதிவிறக்கவும்',
    ur: 'پی ڈی ایف ڈاؤن لوڈ کریں',
    pa: 'PDF ਡਾਊਨਲੋਡ ਕਰੋ',
    kn: 'PDF ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    ml: 'PDF ഡൗൺലോഡ് ചെയ്യുക',
    es: 'Descargar PDF',
    fr: 'Télécharger le PDF',
    de: 'PDF Herunterladen',
    ar: 'تحميل ملف PDF',
    ru: 'Скачать PDF'
  },
  'Table of Contents': {
    ja: '目次 (目次一覧)',
    hi: 'विषय-सूची (अनुक्रमणिका)',
    hinglish: 'Table of Contents',
    bn: 'সূচিপত্র',
    mr: 'अनुक्रमणिका',
    gu: 'અનુક્રમણિકા',
    te: 'విషయ సూచిక',
    ta: 'பொருளடக்கம்',
    ur: 'فہرست مضامین',
    pa: 'ਵਿਸ਼ਾ ਸੂਚੀ',
    kn: 'ಪರಿವಿಡಿ',
    ml: 'ഉള്ളടക്കപ്പട്ടിക',
    es: 'Índice de Contenidos',
    fr: 'Table des Matières',
    de: 'Inhaltsverzeichnis',
    ar: 'فهرس المحتويات',
    ru: 'Содержание'
  },
  'All Books': {
    ja: 'すべての書籍',
    hi: 'सभी पुस्तकें',
    hinglish: 'All Books',
    bn: 'সব বই',
    mr: 'सर्व पुस्तके',
    gu: 'બધા પુસ્તકો',
    te: 'అన్ని పుస్తకాలు',
    ta: 'அனைத்து புத்தகங்கள்',
    ur: 'تمام کتب',
    pa: 'ਸਾਰੀਆਂ ਕਿਤਾਬਾਂ',
    kn: 'ಎಲ್ಲಾ ಪುಸ್ತಕಗಳು',
    ml: 'എല്ലാ പുസ്തകങ്ങളും',
    es: 'Todos los Libros',
    fr: 'Tous les Livres',
    de: 'Alle Bücher',
    ar: 'جميع الكتب',
    ru: 'Все книги'
  },
  'Engineering & Coding': {
    ja: '工学 & プログラミング',
    hi: 'इंजीनियरिंग व कोडिंग',
    hinglish: 'Engineering & Coding',
    bn: 'প্রকৌশল ও কোডিং',
    mr: 'अभियांत्रिकी आणि कोडिंग',
    gu: 'એન્જિનિયરિંગ અને કોડિંગ',
    te: 'ఇంజనీరింగ్ & కోడింగ్',
    ta: 'பொறியியல் & குறியீட்டு முறை',
    ur: 'انجینئرنگ اور کوڈنگ',
    pa: 'ਇੰਜੀਨੀਅਰਿੰਗ ਅਤੇ ਕੋਡਿੰਗ',
    kn: 'ಎಂಜಿನಿಯರಿಂಗ್ & ಕೋಡಿಂಗ್',
    ml: 'എഞ്ചിനീയറിംഗും കോഡിംഗും',
    es: 'Ingeniería y Programación',
    fr: 'Ingénierie & Codage',
    de: 'Ingenieurwesen & Programmierung',
    ar: 'الهندسة والبرمجة',
    ru: 'Инженерия и программирование'
  },
  'School & Heritage': {
    ja: '学校教育 & 歴史遺産',
    hi: 'स्कूली व विरासत',
    hinglish: 'School & Heritage',
    bn: 'স্কুল ও ঐতিহ্য',
    mr: 'शाळा आणि वारसा',
    gu: 'શાળા અને વારસો',
    te: 'పాఠశాల & వారసత్వం',
    ta: 'பள்ளி & பாரம்பரியம்',
    ur: 'اسکول اور ورثہ',
    pa: 'ਸਕੂਲ ਅਤੇ ਵਿਰਾਸਤ',
    kn: 'ಶಾಲೆ & ಪರಂಪರೆ',
    ml: 'സ്കൂളും പൈതൃകവും',
    es: 'Escuela y Patrimonio',
    fr: 'École & Patrimoine',
    de: 'Schule & Tradition',
    ar: 'المدرسة والتراث',
    ru: 'Школа и традиции'
  },
  'Competitive Exams': {
    ja: '競争試験 & 国家公務員試験',
    hi: 'प्रतियोगी परीक्षाएँ (JEE, NEET, UPSC)',
    hinglish: 'Competitive Exams',
    bn: 'প্রতিযোগিতামূলক পরীক্ষা',
    mr: 'स्पर्धा परीक्षा',
    gu: 'સ્પર્ધાત્મક પરીક્ષાઓ',
    te: 'పోటీ పరీక్షలు',
    ta: 'போட்டித் தேர்வுகள்',
    ur: 'مسابقتی امتحانات',
    pa: 'ਮੁਕਾਬਲੇ ਦੀਆਂ ਪ੍ਰੀਖਿਆਵਾਂ',
    kn: 'ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳು',
    ml: 'മത്സര പരീക്ഷകൾ',
    es: 'Exámenes Competitivos',
    fr: 'Concours & Examens',
    de: 'Wettbewerbsprüfungen',
    ar: 'الامتحانات التنافسية',
    ru: 'Конкурсные экзамены'
  },
  'Literature & Culture': {
    ja: '文学 & 文化',
    hi: 'साहित्य व संस्कृति',
    hinglish: 'Literature & Culture',
    bn: 'সাহিত্য ও সংস্কৃতি',
    mr: 'साहित्य आणि संस्कृती',
    gu: 'સાહિત્ય અને સંસ્કૃતિ',
    te: 'సాహిత్యం & సంస్కృతి',
    ta: 'இலக்கியம் & கலாச்சாரம்',
    ur: 'ادب اور ثقافت',
    pa: 'ਸਾਹਿਤ ਅਤੇ ਸੱਭਿਆਚਾਰ',
    kn: 'ಸಾಹಿತ್ಯ & ಸಂಸ್ಕೃತಿ',
    ml: 'സാഹിത്യവും സംസ്കാരവും',
    es: 'Literatura y Cultura',
    fr: 'Littérature & Culture',
    de: 'Literatur & Kultur',
    ar: 'الأدب والثقافة',
    ru: 'Литература и культура'
  },
  'Puzzles & Mind Games': {
    ja: 'パズル & 頭脳ゲーム',
    hi: 'पहेलियाँ व माइंड गेम्स',
    hinglish: 'Puzzles & Mind Games',
    bn: 'ধাঁধা ও বুদ্ধির খেলা',
    mr: 'कोडी आणि बुद्धीचे खेळ',
    gu: 'ઉખાણાં અને મનના ખેલ',
    te: 'పజిల్స్ & మైండ్ గేమ్స్',
    ta: 'புதிர்கள் & மன விளையாட்டுகள்',
    ur: 'پہیلیاں اور ذہنی کھیل',
    pa: 'ਬੁਝਾਰਤਾਂ ਅਤੇ ਦਿਮਾਗੀ ਖੇਡਾਂ',
    kn: 'ಒಗಟುಗಳು & ಮೈಂಡ್ ಗೇಮ್ಸ್',
    ml: 'പസിലുകളും മൈൻഡ് ഗെയിമുകളും',
    es: 'Acertijos y Juegos Mentales',
    fr: 'Énigmes & Jeux de Réflexion',
    de: 'Rätsel & Denkspiele',
    ar: 'الألغاز وألعاب العقل',
    ru: 'Головоломки и интеллектуальные игры'
  }
};

/**
 * Translates a single text string into target language
 */
export function translateText(text: string, lang: SupportedLanguage): string {
  if (!text || lang === 'en') return text;

  const trimmed = text.trim();
  
  // Exact match
  if (DOM_TRANSLATION_DICT[trimmed] && DOM_TRANSLATION_DICT[trimmed][lang]) {
    const translated = DOM_TRANSLATION_DICT[trimmed][lang]!;
    // Preserve leading/trailing spaces
    const leading = text.match(/^\s*/)?.[0] || '';
    const trailing = text.match(/\s*$/)?.[0] || '';
    return `${leading}${translated}${trailing}`;
  }

  return text;
}

/**
 * Recursively inspects and translates DOM text nodes
 */
function walkAndTranslateNode(node: Node, targetLang: SupportedLanguage): void {
  // Ignore script, style, code, pre, textarea, input tags
  if (node.nodeType === Node.ELEMENT_NODE) {
    const elem = node as Element;
    const tag = elem.tagName.toLowerCase();
    if (['script', 'style', 'code', 'pre', 'input', 'textarea', 'svg'].includes(tag)) {
      return;
    }
    // If element explicitly opts out
    if (elem.getAttribute('translate') === 'no' || elem.classList.contains('notranslate')) {
      return;
    }
  }

  if (node.nodeType === Node.TEXT_NODE) {
    const original = originalTextMap.get(node) ?? node.nodeValue ?? '';
    if (!originalTextMap.has(node)) {
      originalTextMap.set(node, original);
    }

    if (targetLang === 'en') {
      if (node.nodeValue !== original) {
        node.nodeValue = original;
      }
      return;
    }

    const translated = translateText(original, targetLang);
    if (translated !== original && node.nodeValue !== translated) {
      node.nodeValue = translated;
    }
    return;
  }

  // Recurse into children
  for (let i = 0; i < node.childNodes.length; i++) {
    walkAndTranslateNode(node.childNodes[i], targetLang);
  }
}

/**
 * Applies full DOM translation to document.body
 */
export function applyDomTranslation(targetLang: SupportedLanguage): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  currentActiveLang = targetLang;

  // Run initial pass
  walkAndTranslateNode(document.body, targetLang);

  // Setup MutationObserver if not yet attached
  if (!domObserver) {
    domObserver = new MutationObserver((mutations) => {
      if (currentActiveLang === 'en') return;

      if (scheduledFrame) cancelAnimationFrame(scheduledFrame);
      scheduledFrame = requestAnimationFrame(() => {
        for (const mut of mutations) {
          if (mut.type === 'childList') {
            for (let i = 0; i < mut.addedNodes.length; i++) {
              walkAndTranslateNode(mut.addedNodes[i], currentActiveLang);
            }
          }
        }
      });
    });

    domObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}
