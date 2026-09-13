import { BharatvarshPart, BharatvarshCorrectionLogItem } from '../types/bharatvarsh';

export const BHARATVARSH_BOOK_INFO = {
  id: 'bharatvarsh-civilization-empires-legends',
  slug: 'bharatvarsh-itihas-reference',
  title: 'भारतवर्ष: सभ्यता, साम्राज्य और महान व्यक्तित्व',
  subtitle: 'प्राचीन भारत से आधुनिक भारत तक — इतिहास, ज्ञान, वीरता, संस्कृति और राष्ट्रनिर्माण की यात्रा',
  shortDescription: 'भारत के हजारों वर्षों के इतिहास, महान व्यक्तित्वों, साम्राज्यों, ज्ञान-विज्ञान, संस्कृति, स्वतंत्रता संघर्ष, वीर सैनिकों और आधुनिक भारत की यात्रा को एक structured digital reference में समझें।',
  author: 'हरिओम कुशवाहा (HK Tech World) एवं भारतीय ऐतिहासिक अनुसंधान मंडल',
  publisher: 'HK VELORA National Heritage & Reference Press',
  edition: 'First Comprehensive Reference Edition 2025–2026',
  version: '2.4.0',
  totalParts: 18,
  totalChapters: 160,
  isbn: '978-93-89101-99-8',
  language: 'Hindi (Authentic Historical Terminology & English Reference Annotations)',
  rating: 5.0,
  reviewCount: 4890,
  readersCount: '150,000+'
};

export const BHARATVARSH_PARTS: BharatvarshPart[] = [
  {
    partNumber: 1,
    romanNumeral: 'PART I',
    title: 'भारत की सभ्यता की शुरुआत',
    hindiTitle: 'भारत की सभ्यता की शुरुआत',
    eraRange: 'प्रागैतिहासिक काल से 6ठी शताब्दी ई.पू.',
    description: 'भारतीय उपमहाद्वीप में आदिमानव के साक्ष्य (भीमबेटका), सिंधु-सरस्वती सभ्यता का अद्भुत नगर-नियोजन, वैदिक ज्ञान, महाजनपदों का उदय, और गौतम बुद्ध व भगवान महावीर के दार्शनिक विचार।',
    chapterRange: { start: 1, end: 6 },
    chapterCount: 6,
    iconName: 'Landmark',
    accentColor: 'from-amber-600 to-orange-700'
  },
  {
    partNumber: 2,
    romanNumeral: 'PART II',
    title: 'मौर्य और महान साम्राज्य',
    hindiTitle: 'मौर्य और महान साम्राज्य',
    eraRange: '4थी शताब्दी ई.पू. से 2री शताब्दी ई.पू.',
    description: 'मगध का उत्कर्ष, आचार्य चाणक्य का अर्थशास्त्र, चंद्रगुप्त मौर्य द्वारा सेल्यूकस की पराजय, अखंड भारत की स्थापना, और चक्रवर्ती सम्राट अशोक का धम्म विजय।',
    chapterRange: { start: 7, end: 12 },
    chapterCount: 6,
    iconName: 'Crown',
    accentColor: 'from-red-600 to-amber-700'
  },
  {
    partNumber: 3,
    romanNumeral: 'PART III',
    title: 'मौर्योत्तर भारत',
    hindiTitle: 'मौर्योत्तर भारत',
    eraRange: '2री शताब्दी ई.पू. से 3री शताब्दी ई.',
    description: 'शुंग, कण्व, सातवाहन, कुषाण साम्राज्य (कनिष्क), गांधार व मथुरा कला, संगम युग का साहित्य और दक्षिण भारत का रोम व दक्षिण-पूर्व एशिया से विशाल समुद्री व्यापार।',
    chapterRange: { start: 13, end: 19 },
    chapterCount: 7,
    iconName: 'Ship',
    accentColor: 'from-blue-600 to-cyan-700'
  },
  {
    partNumber: 4,
    romanNumeral: 'PART IV',
    title: 'गुप्त युग और भारतीय ज्ञान',
    hindiTitle: 'गुप्त युग और भारतीय ज्ञान',
    eraRange: '4थी शताब्दी से 6ठी शताब्दी ई.',
    description: 'भारत का स्वर्णिम युग (Golden Age), समुद्रगुप्त, चंद्रगुप्त विक्रमादित्य, आर्यभट, ब्रह्मगुप्त, चरक, सुश्रुत, पाणिनि, कालिदास, नालंदा-तक्षशिला विश्वविद्यालय और विज्ञान-तकनीकी परंपरा।',
    chapterRange: { start: 20, end: 31 },
    chapterCount: 12,
    iconName: 'Sparkles',
    accentColor: 'from-yellow-600 to-amber-700'
  },
  {
    partNumber: 5,
    romanNumeral: 'PART V',
    title: 'प्रारंभिक मध्यकाल',
    hindiTitle: 'प्रारंभिक मध्यकाल',
    eraRange: '7वीं शताब्दी से 12वीं शताब्दी ई.',
    description: 'हर्षवर्धन, चालुक्य, पल्लव, राष्ट्रकूट, पाल-प्रतिहार, चोल साम्राज्य की अजेय नौसेना (राजराज व राजेंद्र चोल), भव्य मंदिर स्थापत्य और दक्षिण-पूर्व एशिया में भारतीय प्रभाव।',
    chapterRange: { start: 32, end: 40 },
    chapterCount: 9,
    iconName: 'Building2',
    accentColor: 'from-emerald-600 to-teal-700'
  },
  {
    partNumber: 6,
    romanNumeral: 'PART VI',
    title: 'भारत के महान शासक और योद्धा',
    hindiTitle: 'भारत के महान शासक और योद्धा',
    eraRange: '12वीं शताब्दी से 18वीं शताब्दी ई.',
    description: 'पृथ्वीराज चौहान, रानी दुर्गावती, महाराणा प्रताप, छत्रपति शिवाजी महाराज, स्वराज्य एवं अष्टप्रधान, गुरु नानक देव, गुरु गोबिंद सिंह, अहिल्याबाई होलकर, महाराजा रणजीत सिंह और लचित बोरफुकन का शौर्य।',
    chapterRange: { start: 41, end: 50 },
    chapterCount: 10,
    iconName: 'Shield',
    accentColor: 'from-rose-600 to-red-800'
  },
  {
    partNumber: 7,
    romanNumeral: 'PART VII',
    title: 'दिल्ली सल्तनत',
    hindiTitle: 'दिल्ली सल्तनत',
    eraRange: '1206 ई. से 1526 ई.',
    description: 'सल्तनत का उदय, इल्तुतमिश, रज़िया सुल्तान, अलाउद्दीन खिलजी की बाजार व्यवस्था, मुहम्मद बिन तुगलक, फिरोज शाह, लोदी वंश, सल्तनत कालीन प्रशासन, समाज और वास्तुकला।',
    chapterRange: { start: 51, end: 58 },
    chapterCount: 8,
    iconName: 'Castle',
    accentColor: 'from-purple-600 to-indigo-800'
  },
  {
    partNumber: 8,
    romanNumeral: 'PART VIII',
    title: 'मुगल काल',
    hindiTitle: 'मुगल काल',
    eraRange: '1526 ई. से 1707 ई.',
    description: 'बाबर, हुमायूँ, शेरशाह सूरी की प्रशासनिक सुधार, अकबर की मनसबदारी व सुलह-ए-कुल, जहाँगीर, शाहजहाँ का स्थापत्य, औरंगज़ेब की नीतियां, मुगलों का पतन और कला-संस्कृति।',
    chapterRange: { start: 59, end: 68 },
    chapterCount: 10,
    iconName: 'Landmark',
    accentColor: 'from-amber-700 to-stone-800'
  },
  {
    partNumber: 9,
    romanNumeral: 'PART IX',
    title: 'मराठा, सिख और क्षेत्रीय शक्तियाँ',
    hindiTitle: 'मराठा, सिख और क्षेत्रीय शक्तियाँ',
    eraRange: '18वीं शताब्दी ई.',
    description: 'पेशवा बालाजी विश्वनाथ व बाजीराव प्रथम का विस्तार, पानीपत का तृतीय युद्ध (1761), सिख मिसलों व महाराजा रणजीत सिंह का उत्कर्ष, मैसूर (हैदर अली, टीपू सुल्तान), बंगाल, अवध और हैदराबाद।',
    chapterRange: { start: 69, end: 75 },
    chapterCount: 7,
    iconName: 'Flame',
    accentColor: 'from-orange-600 to-red-700'
  },
  {
    partNumber: 10,
    romanNumeral: 'PART X',
    title: 'यूरोपीय शक्तियाँ और कंपनी शासन',
    hindiTitle: 'यूरोपीय शक्तियाँ और कंपनी शासन',
    eraRange: '1498 ई. से 1857 ई.',
    description: 'पुर्तगाली (वास्को डी गामा), डच, फ्रांसीसी, अंग्रेजी ईस्ट इंडिया कंपनी, प्लासी का युद्ध (1757), बक्सर का युद्ध (1764), सहायक संधि, हड़प नीति, और धन की निकासी (Drain of Wealth)।',
    chapterRange: { start: 76, end: 82 },
    chapterCount: 7,
    iconName: 'Compass',
    accentColor: 'from-slate-600 to-zinc-800'
  },
  {
    partNumber: 11,
    romanNumeral: 'PART XI',
    title: 'स्वतंत्रता का महान संघर्ष',
    hindiTitle: 'स्वतंत्रता का महान संघर्ष',
    eraRange: '1857 ई. से 1947 ई.',
    description: '1857 की प्रथम क्रांति (मंगल पांडे, लक्ष्मीबाई, कुंवर सिंह), कांग्रेस की स्थापना, स्वदेशी आंदोलन, क्रांतिकारी धारा (भगत सिंह, आज़ाद, बिस्मिल), नेताजी सुभाष चंद्र बोस व आज़ाद हिंद फ़ौज, और गांधीजी के आंदोलन।',
    chapterRange: { start: 83, end: 99 },
    chapterCount: 17,
    iconName: 'Zap',
    accentColor: 'from-red-600 to-orange-600'
  },
  {
    partNumber: 12,
    romanNumeral: 'PART XII',
    title: 'स्वतंत्र भारत और राष्ट्रनिर्माण',
    hindiTitle: 'स्वतंत्र भारत और राष्ट्रनिर्माण',
    eraRange: '1947 ई. से 1965 ई.',
    description: 'स्वतंत्रता एवं विभाजन, 565 रियासतों का ऐतिहासिक एकीकरण (सरदार पटेल), संविधान सभा, डॉ. बी. आर. आंबेडकर द्वारा संविधान निर्माण, डॉ. राजेंद्र प्रसाद, नेहरू युग, और लाल बहादुर शास्त्री।',
    chapterRange: { start: 100, end: 108 },
    chapterCount: 9,
    iconName: 'Award',
    accentColor: 'from-teal-600 to-blue-700'
  },
  {
    partNumber: 13,
    romanNumeral: 'PART XIII',
    title: 'भारत के वीर सैनिक',
    hindiTitle: 'भारत के वीर सैनिक',
    eraRange: '1947 से वर्तमान काल',
    description: 'सशस्त्र बलों की वीरता, मेजर सोमनाथ शर्मा, मेजर शैतान सिंह (रेज़ांग ला), CQMH अब्दुल हमीद (1965), अरुण खेतरपाल (1971), कारगिल युद्ध के वीर (कैप्टन विक्रम बत्रा, मनोज पांडे) और परमवीर चक्र नायक।',
    chapterRange: { start: 109, end: 117 },
    chapterCount: 9,
    iconName: 'Medal',
    accentColor: 'from-emerald-700 to-green-900'
  },
  {
    partNumber: 14,
    romanNumeral: 'PART XIV',
    title: 'भारत के महान वैज्ञानिक और गणितज्ञ',
    hindiTitle: 'भारत के महान वैज्ञानिक और गणितज्ञ',
    eraRange: 'आधुनिक काल (19वीं व 20वीं शताब्दी)',
    description: 'श्रीनिवास रामानुजन, जगदीश चंद्र बोस, सी. वी. रमन (रमन प्रभाव), सत्येंद्र नाथ बोस (बोस-आइंस्टीन), मेघनाद साहा, होमी भाभा, विक्रम साराभाई, सुब्रह्मण्यन चंद्रशेखर, डॉ. एपीजे अब्दुल कलाम और अंतरिक्ष कार्यक्रम।',
    chapterRange: { start: 118, end: 128 },
    chapterCount: 11,
    iconName: 'Brain',
    accentColor: 'from-indigo-600 to-violet-700'
  },
  {
    partNumber: 15,
    romanNumeral: 'PART XV',
    title: 'महान शिक्षक, दार्शनिक और समाज-सुधारक',
    hindiTitle: 'महान शिक्षक, दार्शनिक और समाज-सुधारक',
    eraRange: 'प्राचीन से आधुनिक पुनर्जागरण काल',
    description: 'आदि शंकराचार्य (अद्वैत दर्शन), कबीर, गुरु नानक देव, मीराबाई, राजा राममोहन राय, ईश्वरचंद्र विद्यासागर, ज्योतिराव फुले, सावित्रीबाई फुले, स्वामी दयानंद सरस्वती, स्वामी विवेकानंद और रवींद्रनाथ टैगोर।',
    chapterRange: { start: 129, end: 139 },
    chapterCount: 11,
    iconName: 'BookMarked',
    accentColor: 'from-amber-600 to-yellow-700'
  },
  {
    partNumber: 16,
    romanNumeral: 'PART XVI',
    title: 'भारतीय संस्कृति और विरासत',
    hindiTitle: 'भारतीय संस्कृति और विरासत',
    eraRange: 'सभ्यतागत परंपरा',
    description: 'भारतीय भाषाएं (ब्राह्मी लिपि), समृद्ध संस्कृत-तमिल-हिंदी साहित्य, मंदिर स्थापत्य शैलियां (नागर, द्रविड़, वेसर), शास्त्रीय संगीत व नृत्य, चित्रकला व शिल्प, उत्सव और योग-आयुर्वेद ज्ञान परंपरा।',
    chapterRange: { start: 140, end: 147 },
    chapterCount: 8,
    iconName: 'Palette',
    accentColor: 'from-pink-600 to-rose-700'
  },
  {
    partNumber: 17,
    romanNumeral: 'PART XVII',
    title: 'आधुनिक भारत',
    hindiTitle: 'आधुनिक भारत',
    eraRange: '1960 के दशक से 21वीं सदी',
    description: 'हरित क्रांति (कृषि आत्मनिर्भरता), औद्योगिक विकास, सूचना प्रौद्योगिकी व डिजिटल भारत (IT Revolution), चंद्रयान-मंगलयान, चिकित्सा अनुसंधान, खेल जगत (ओलंपिक, क्रिकेट) और वैश्विक मंच पर भारत।',
    chapterRange: { start: 148, end: 154 },
    chapterCount: 7,
    iconName: 'Cpu',
    accentColor: 'from-blue-600 to-indigo-700'
  },
  {
    partNumber: 18,
    romanNumeral: 'PART XVIII',
    title: 'अतीत से भविष्य तक',
    hindiTitle: 'अतीत से भविष्य तक',
    eraRange: 'सभ्यतागत दृष्टिकोण एवं 2047 का संकल्प',
    description: 'भारत की सभ्यतागत निरंतरता, विविधता में एकता, इतिहास से सबक, 21वीं सदी की राष्ट्रीय चुनौतियां, युवा पीढ़ी का दायित्व और विकसित भारत (विकसित भारत 2047) का संकल्प।',
    chapterRange: { start: 155, end: 160 },
    chapterCount: 6,
    iconName: 'Globe',
    accentColor: 'from-amber-500 via-orange-600 to-rose-700'
  }
];

export const INITIAL_CORRECTION_LOG: BharatvarshCorrectionLogItem[] = [
  {
    id: 'log-001',
    chapterNumber: 3,
    chapterTitle: 'हड़प्पा सभ्यता',
    date: '2025-08-15',
    reportedIssue: 'सिंधु घाटी सभ्यता के लिए सरस्वती नदी बेसिन और राखीगढ़ी उत्खनन के नवीनतम ASI निष्कर्षों का समावेश।',
    actionTaken: 'राखीगढ़ी DNA शोध (वसंत शिंदे, 2019) और धोलावीरा यूनेस्को धरोहर 2021 के नवीनतम पुरातात्विक साक्ष्य जोड़े गए।',
    sourceCited: 'Archaeological Survey of India (ASI) Reports & Cell Journal 2019',
    updatedBy: 'HK Research Team',
    version: '2.1.0'
  },
  {
    id: 'log-002',
    chapterNumber: 11,
    chapterTitle: 'सम्राट अशोक',
    date: '2025-08-20',
    reportedIssue: 'कलिंग युद्ध की तिथि और 13वें मुख्य शिलालेख के मूल पाठ का सत्यापन।',
    actionTaken: 'कलिंग युद्ध का समय सम्राट अशोक के राज्याभिषेक के 8वें वर्ष (लगभग 261 ई.पू.) के रूप में प्रामाणिक शिलालेख उद्धरण सहित स्पष्ट किया गया।',
    sourceCited: 'Corpus Inscriptionum Indicarum, Vol. I (Edicts of Asoka, E. Hultzsch)',
    updatedBy: 'HK Research Team',
    version: '2.2.0'
  },
  {
    id: 'log-003',
    chapterNumber: 44,
    chapterTitle: 'छत्रपति शिवाजी महाराज',
    date: '2025-08-28',
    reportedIssue: 'सूरत अभियान और अफजल खान वध की समकालीन ऐतिहासिक प्रविष्टियों की पुष्टि।',
    actionTaken: 'सभासद बखर, जेधे शकावली और डच/अंग्रेज फैक्ट्री रिकॉर्ड्स के प्रामाणिक संदर्भ संलग्न किए गए।',
    sourceCited: 'Krishnaji Anant Sabhasad Bakhar (1697) & English Records on Shivaji',
    updatedBy: 'HK Research Team',
    version: '2.3.0'
  },
  {
    id: 'log-004',
    chapterNumber: 102,
    chapterTitle: 'सरदार वल्लभभाई पटेल',
    date: '2025-09-02',
    reportedIssue: 'जूनागढ़ एवं हैदराबाद (ऑपरेशन पोलो) के विलय के दस्तावेजी विवरण।',
    actionTaken: 'वी. पी. मेनन की पुस्तक "The Story of the Integration of the Indian States" के आधार पर तिथिबद्ध घटनाक्रम अद्यतन किया गया।',
    sourceCited: 'V.P. Menon, Integration of Indian States, Orient Longman',
    updatedBy: 'HK Research Team',
    version: '2.4.0'
  }
];
