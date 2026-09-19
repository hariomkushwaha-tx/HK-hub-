import { WeaponPart } from '../types/weapon';

export const WEAPON_BOOK_INFO = {
  id: 'hk-weapon',
  slug: 'hk-weapon',
  title: 'HK WEAPON',
  subtitle: 'Advanced Defence Technology & Engineering',
  tagline: 'From Science and Research to Advanced Defence Systems',
  author: 'हरिओम कुशवाहा (Hariom Kushwaha)',
  authorId: 'hariom-kushwaha',
  authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Technology researcher, digital systems architect, and engineering author devoted to making advanced sciences, aerospace mechanics, and national defence R&D accessible for students and engineers.',
  publisher: 'HK VELORA Defence & Engineering Research Wing',
  category: 'Defence Technology / Engineering',
  subcategory: 'Aerospace, Avionics, Autonomous Systems & Strategic R&D',
  genre: 'Defence Engineering Reference Manual',
  bookType: 'Reference Book' as const,
  pages: 1250,
  rating: 5.0,
  reviewCount: 420,
  price: 0,
  isFree: true,
  format: 'Interactive Digital Reference & Multi-Section Study Guide',
  difficulty: 'Advanced' as const,
  badge: 'Premium Defence Engineering',
  coverGradient: 'from-slate-950 via-zinc-900 to-indigo-950',
  language: 'Hindi + Technical English Terminology',
  yearPublished: '2026 Edition',
  updatedDate: 'मार्च 2026',
  isbn: 'HKV-DEF-ENG-2026-75CH',
  rightsHolder: 'HK VELORA Press & Hariom Kushwaha',
  licenseType: 'Authorized Educational & Engineering Access',
  disclaimer: 'यह पुस्तक विशुद्ध रूप से शैक्षणिक, वैज्ञानिक और इंजीनियरिंग अनुसंधान के दृष्टिकोण से तैयार की गई एक संदर्भ कृति है। इसमें किसी भी हथियार, मिसाइल या विस्फोटक को बनाने के लिए कोई संवेदनशील, प्रतिबंधित या परिचालन संबंधी दिशा-निर्देश (actionable operational instructions) शामिल नहीं हैं। सभी प्रस्तुत विवरण वैज्ञानिक सिद्धांतों, सार्वजनिक रूप से प्रलेखित अकादमिक शोधपत्रों एवं मान्यता प्राप्त खुला-स्रोत संदर्भों (DRDO, ADA, ISRO, IEEE, AIAA) पर आधारित हैं।',
  description: '“HK WEAPON” HK VELORA की सर्वोच्च तकनीकी एवं रक्षा-इंजीनियरिंग संदर्भ पुस्तक है। यह पुस्तक 10 विस्तृत भागों और 75 सुव्यवस्थित अध्यायों में आधुनिक रक्षा प्रणालियों के पीछे के भौतिक विज्ञान, एयरोस्पेस इंजीनियरिंग, राडार और इलेक्ट्रोमैग्नेटिक स्पेक्ट्रम, स्वायत्त ड्रोन और एवियोनिक्स, मिसाइल प्रोपल्शन, डिजिटल ट्विन्स, डीआरडीओ की शोध यात्रा और भारत के स्वदेशी विनिर्माण इकोसिस्टम का गहन और निष्पक्ष विश्लेषण प्रस्तुत करती है।',
  shortDescription: '10 भाग, 75 संपूर्ण अध्याय — एयरोडायनामिक्स, प्रोपल्शन, राडार, स्वायत्त ड्रोन, हाइपरसोनिक विज्ञान, DRDO अनुसंधान और स्वदेशी रक्षा इंजीनियरिंग का प्रामाणिक संदर्भ ग्रंथ।',
  tags: [
    'HK WEAPON',
    'Defence Technology',
    'Defence Engineering',
    'DRDO',
    'LCA Tejas',
    'Missile Technology',
    'Aerodynamics',
    'Radar Systems',
    'Electronic Warfare',
    'Autonomous Drones',
    'Hypersonic Science',
    'Hariom Kushwaha',
    'HK VELORA'
  ],
  topics: [
    'Introduction to Defence Systems & DRDO R&D',
    'Missile Aerodynamics, Guidance & Propulsion',
    'Fighter Aircraft Engineering & LCA Tejas Journey',
    'Radar Signal Processing & Sensor Fusion',
    'Electronic Warfare & Secure Military Communications',
    'UAVs, Autonomy & Computer Vision',
    'Hypersonic, Quantum & Directed-Energy Science',
    'Engineering Lifecycle: CAD, Simulation & Prototyping',
    'India Defence Industrial Ecosystem & iDEX Startups',
    'Next-Gen Defence Platforms & Future AI Integration'
  ]
};

export const WEAPON_PARTS: WeaponPart[] = [
  {
    partNumber: 1,
    title: 'PART 1 — INTRODUCTION TO DEFENCE TECHNOLOGY',
    description: 'रक्षा विज्ञान की आधारशिला, आधुनिक रक्षा प्रणालियों का सिस्टम-ऑफ-सिस्टम्स आर्किटेक्चर, रिसर्च से डिप्लॉयमेंट तक का लाइफसाइकिल और भारत में DRDO की वैज्ञानिक यात्रा।',
    chaptersRange: 'Chapters 1 – 5',
    icon: 'Shield'
  },
  {
    partNumber: 2,
    title: 'PART 2 — MISSILE TECHNOLOGY',
    description: 'एयरोडायनामिक्स, रॉकेट प्रोपल्शन (सॉलिड, लिक्विड, रैमजेट), जड़त्वीय नेविगेशन (INS), सीकर सेंसर्स, टेलीमेट्री, कंपोजिट केसिंग और भारत के गाइडेड मिसाइल कार्यक्रम।',
    chaptersRange: 'Chapters 6 – 14',
    icon: 'Rocket'
  },
  {
    partNumber: 3,
    title: 'PART 3 — FIGHTER AIRCRAFT',
    description: 'सुपरसोनिक एयरोडायनामिक्स, फ्लाई-बाय-वायर (FBW) फ्लाइट कंट्रोल, ग्लास कॉकपिट व मिशन कंप्यूटर, कार्बन कंपोजिट, टर्बोफैन आफ्टरबर्नर इंजन और LCA तेजस की यात्रा।',
    chaptersRange: 'Chapters 15 – 24',
    icon: 'Plane'
  },
  {
    partNumber: 4,
    title: 'PART 4 — RADAR AND SENSOR TECHNOLOGY',
    description: 'विद्युत चुम्बकीय तरंगें, AESA फेज्ड ऐरे राडार, डॉपलर सिग्नल प्रोसेसिंग, रडार क्रॉस सेक्शन (RCS), मल्टी-सेंसर डेटा फ्यूजन और एयरबॉर्न अर्ली वार्निंग (AEW&C)।',
    chaptersRange: 'Chapters 25 – 30',
    icon: 'Radio'
  },
  {
    partNumber: 5,
    title: 'PART 5 — ELECTRONIC WARFARE AND COMMUNICATION',
    description: 'ईएम स्पेक्ट्रम का प्रबंधन, इलेक्ट्रॉनिक काउंटरमेजर्स (ECM/ECCM), सॉफ्टवेयर डिफाइंड रेडियो (SDR), क्वांटम क्रिप्टोग्राफी और स्पेक्ट्रम सर्विलांस।',
    chaptersRange: 'Chapters 31 – 35',
    icon: 'Zap'
  },
  {
    partNumber: 6,
    title: 'PART 6 — DRONES AND AUTONOMOUS SYSTEMS',
    description: 'UAV एवियोनिक्स, ऑटोनॉमस फ्लाइट कंट्रोलर, GPS-डिनाइड नेविगेशन, एज-AI कंप्यूटर विजन, स्वायत्त झुंड (Swarm) और ह्यूमन-इन-द-लूप सुरक्षा सिद्धांत।',
    chaptersRange: 'Chapters 36 – 42',
    icon: 'Cpu'
  },
  {
    partNumber: 7,
    title: 'PART 7 — ADVANCED TECHNOLOGY',
    description: 'हाइपरसोनिक स्क्रैमजेट विज्ञान, नैनोकम्पोजिट्स व थर्मल बैरियर कोटिंग्स, डिफेंस रोबोटिक्स, क्वांटम सेंसिंग, डायरेक्टेड-एनर्जी भौतिकी और डिजिटल ट्विन्स।',
    chaptersRange: 'Chapters 43 – 50',
    icon: 'Atom'
  },
  {
    partNumber: 8,
    title: 'PART 8 — FROM BLUEPRINT TO SYSTEM',
    description: 'सिस्टम इंजीनियरिंग कार्यप्रणाली: आवश्यकता विश्लेषण, 3D CAD/CFD सिमुलेशन, प्रोटोटाइपिंग, पर्यावरण व कंपन परीक्षण, MIL-STD गुणवत्ता और विनिर्माण।',
    chaptersRange: 'Chapters 51 – 60',
    icon: 'Layers'
  },
  {
    partNumber: 9,
    title: 'PART 9 — INDIA\'S DEFENCE TECHNOLOGY ECOSYSTEM',
    description: '50+ DRDO प्रयोगशालाओं का क्लस्टर, तीनों सेनाओं का R&D इंटरफेस, DPSU विनिर्माण, मेक-इन-इंडिया, iDEX डिफेंस स्टार्टअप्स और टेक्नोलॉजी ट्रांसफर (ToT)।',
    chaptersRange: 'Chapters 61 – 67',
    icon: 'Flag'
  },
  {
    partNumber: 10,
    title: 'PART 10 — FUTURE',
    description: 'अगली सदी की रक्षा प्रौद्योगिकियां: कॉग्निटिव इलेक्ट्रॉनिक युद्ध, 6th जेन फाइटर अवधारणाएं, स्पेस डोमेन अवेयरनेस, तकनीकी चुनौतियां और नवाचार की दिशा।',
    chaptersRange: 'Chapters 68 – 75',
    icon: 'Compass'
  }
];

export const WEAPON_GLOSSARY: { term: string; hindi: string; definition: string }[] = [
  {
    term: 'AESA (Active Electronically Scanned Array)',
    hindi: 'सक्रिय इलेक्ट्रॉनिक रूप से स्कैन्ड ऐरे राडार',
    definition: 'एक अत्याधुनिक राडार तकनीक जिसमें सैकड़ों छोटे ट्रांसमिट/रिसीव (T/R) मॉड्यूल होते हैं जो बिना एंटीना को भौतिक रूप से घुमाए रेडियो बीम को इलेक्ट्रॉनिक रूप से विभिन्न दिशाओं में मोड़ते हैं।'
  },
  {
    term: 'RCS (Radar Cross Section)',
    hindi: 'राडार क्रॉस सेक्शन (राडार परावर्तन क्षेत्रफल)',
    definition: 'यह एक माप है कि कोई वस्तु राडार तरंगों को कितनी मात्रा में परावर्तित करती है। कम RCS वाली वस्तुएं (जैसे स्टील्थ एयरक्राफ्ट) राडार पर बहुत छोटी दिखाई देती हैं।'
  },
  {
    term: 'Fly-by-Wire (FBW)',
    hindi: 'फ्लाई-बाय-वायर फ्लाइट कंट्रोल',
    definition: 'एक ऐसी उड़ान नियंत्रण प्रणाली जिसमें पायलट के मैनुअल इनपुट को तारों के माध्यम से इलेक्ट्रॉनिक सिग्नलों और डिजिटल कंप्यूटरों द्वारा प्रोसेस करके हाइड्रोलिक एक्चुएटर्स तक भेजा जाता है।'
  },
  {
    term: 'INS (Inertial Navigation System)',
    hindi: 'जड़त्वीय नेविगेशन प्रणाली',
    definition: 'एक स्वायत्त नेविगेशन प्रणाली जो बिना बाहरी जीपीएस या सिग्नल के, जाइरोस्कोप और एक्सेलेरोमीटर की मदद से गति, त्वरण और दिशा की गणना करके सटीक स्थिति बताती है।'
  },
  {
    term: 'CFD (Computational Fluid Dynamics)',
    hindi: 'कम्प्यूटेशनल द्रव गतिकी',
    definition: 'संख्यात्मक विश्लेषण और एल्गोरिदम का उपयोग करके विमान या मिसाइल की सतह पर वायु के दबाव, तापमान और शॉक-वेव का उच्च परिशुद्धता से डिजिटल सिमुलेशन करना।'
  },
  {
    term: 'Scramjet (Supersonic Combustion Ramjet)',
    hindi: 'स्क्रैमजेट इंजन',
    definition: 'रैमजेट इंजन का उन्नत रूप जिसमें दहन कक्ष (combustion chamber) के भीतर भी बहने वाली वायु की गति सुपरसोनिक (ध्वनि से तेज) बनी रहती है, जो मैक 5+ हाइपरसोनिक उड़ानों के लिए अनिवार्य है।'
  },
  {
    term: 'Sensor Fusion',
    hindi: 'सेंसर संलयन / डेटा एकीकरण',
    definition: 'राडार, ऑप्टिकल (IR/EO), और इलेक्ट्रॉनिक रिसीवर्स से प्राप्त विभिन्न डेटा स्रोतों को एकीकृत करके युद्धक्षेत्र की एक एकल, स्पष्ट और अत्यंत सटीक समग्र तस्वीर (Situational Awareness) प्रस्तुत करने की तकनीक।'
  },
  {
    term: 'SDR (Software-Defined Radio)',
    hindi: 'सॉफ्टवेयर-डिफाइंड रेडियो',
    definition: 'रेडियो संचार प्रणाली जहाँ मिक्सर, फिल्टर, मॉड्यूलेटर और डीमॉड्यूलेटर जैसे पारंपरिक हार्डवेयर घटकों को सॉफ्टवेयर कोड और FPGA चिप्स द्वारा संचालित किया जाता है।'
  },
  {
    term: 'Digital Twin',
    hindi: 'डिजिटल ट्विन (आभासी प्रतिरूप)',
    definition: 'किसी भौतिक विमान, मिसाइल या इंजन का वास्तविक समय के सेंसर डेटा से जुड़ा एक सटीक आभासी सिमुलेशन मॉडल, जो उसके पूरे जीवनकाल के तनाव और रखरखाव की भविष्यवाणी करता है।'
  },
  {
    term: 'Human-in-the-Loop (HITL)',
    hindi: 'ह्यूमन-इन-द-लूप सुरक्षा सिद्धांत',
    definition: 'स्वायत्त रक्षा प्रणालियों में एक नैतिक और परिचालन नियम जिसमें महत्वपूर्ण निर्णय (विशेषकर एंगेजमेंट या एक्शन) के अंतिम अनुमोदन के लिए हमेशा एक मानव ऑपरेटर की सहमति अनिवार्य होती है।'
  }
];
