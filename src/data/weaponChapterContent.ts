import { WeaponChapter } from '../types/weapon';
import { WEAPON_CHAPTERS_CATALOG } from './weaponChaptersCatalog';
import { 
  generateChapterRecipe, 
  generateChapterLearningLevels, 
  DEFENCE_CASE_STUDIES, 
  SAFE_PRACTICAL_PROJECTS, 
  EDUCATIONAL_DIAGRAMS 
} from './weaponEngineeringData';

export const WEAPON_STORAGE_KEY = 'hk_weapon_custom_edits';

export function getCustomWeaponEdits(): Record<number, Partial<WeaponChapter>> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(WEAPON_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to load HK WEAPON custom edits', e);
    return {};
  }
}

export function saveCustomWeaponChapterEdit(chapterNumber: number, data: Partial<WeaponChapter>): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getCustomWeaponEdits();
    current[chapterNumber] = { ...(current[chapterNumber] || {}), ...data };
    localStorage.setItem(WEAPON_STORAGE_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to save HK WEAPON chapter edit', e);
  }
}

// Curated bespoke in-depth chapter content for key showcase chapters across all 10 parts
const BESPOKE_WEAPON_CHAPTERS: Record<number, Partial<WeaponChapter>> = {
  1: {
    introduction: 'Defence Technology (रक्षा प्रौद्योगिकी) केवल अस्त्र-शस्त्रों का संचय नहीं है, बल्कि यह भौतिक विज्ञान, रसायन विज्ञान, एयरोस्पेस इंजीनियरिंग, उन्नत सामग्री विज्ञान (Materials Science) और डिजिटल अभिकलन (Digital Computing) का एक एकीकृत और बहु-आयामी संगम है। आधुनिक युग में किसी भी संप्रभु राष्ट्र की स्वतंत्रता और सुरक्षा सीधे तौर पर उसकी वैज्ञानिक और इंजीनियरिंग क्षमता पर निर्भर करती है।',
    engineeringContext: 'सिविलियन इंजीनियरिंग और डिफेंस इंजीनियरिंग में सबसे बड़ा अंतर परिचालन परिवेश (Operating Environment) और विफलता की लागत (Cost of Failure) का होता है। एक सामान्य यात्री कार या स्मार्टफोन सामान्य तापमान (0°C से 40°C) पर कार्य करता है, जबकि एक सामरिक रक्षा प्रणाली को -40°C के बर्फीले ग्लेशियरों, +55°C के रेगिस्तानी तूफानों, 50g के शॉक-वाइब्रेशन और तीव्र इलेक्ट्रोमैग्नेटिक जैमिंग के बीच बिना किसी विफलता के काम करना होता है।',
    coreScientificPrinciples: [
      'सिस्टम-ऑफ-सिस्टम्स (System-of-Systems Engineering): किसी भी आधुनिक प्लेटफॉर्म को एक अलग इकाई के रूप में नहीं बल्कि एक परस्पर जुड़े सेंसर-नेटवर्क के हिस्से के रूप में डिजाइन किया जाता है।',
      'मार्जिन ऑफ सेफ्टी और MIL-STD मानक: सैन्य प्रणालियों में घटक विफलता को रोकने के लिए अत्यधिक रूढ़िवादी सुरक्षा गुणांक (Factors of Safety) और अत्यंत कठोर मिलिट्री परीक्षण मानकों (जैसे MIL-STD-810G) का पालन किया जाता है।',
      'इलेक्ट्रोमैग्नेटिक कम्पैटिबिलिटी (EMC): उच्च-शक्ति वाले रडार ट्रांसमीटर और संवेदनशील जीपीएस रिसीवर्स को एक ही प्लेटफॉर्म पर बिना एक-दूसरे के कार्य में हस्तक्षेप किए संचालित करना।'
    ],
    systemArchitecture: {
      title: 'आधुनिक रक्षा प्रणाली का बहु-स्तरीय ढांचा',
      description: 'रक्षा प्रणालियों को पांच बुनियादी परतों में विभाजित किया जाता है जो सेंसर से लेकर अंतिम प्रभावक तक काम करती हैं:',
      subsystems: [
        { name: 'सेंसर लेयर (Sensors)', function: 'सूचना एकत्रीकरण', engineeringNotes: 'AESA रडार, इन्फ्रारेड (EO/IR) कैमरे, सोनार और ESM रिसीवर्स जो वास्तविक समय में डेटा कैप्चर करते हैं।' },
        { name: 'कम्युनिकेशन लेयर (Secure Data Links)', function: 'सुरक्षित डेटा ट्रांसमिशन', engineeringNotes: 'फ्रीक्वेंसी हॉपिंग और सैन्य उपग्रह लिंक जो रीयल-टाइम में जानकारी साझा करते हैं।' },
        { name: 'कमांड व निर्णय लेयर (C2 / Mission Computer)', function: 'डेटा प्रोसेसिंग और निर्णय', engineeringNotes: 'मल्टी-सेंसर डेटा फ्यूजन एल्गोरिदम जो युद्धक्षेत्र की स्पष्ट और सटीक तस्वीर (COP) तैयार करते हैं।' },
        { name: 'इफेक्टर्स लेयर (Platforms / Interceptors)', function: 'मिशन निष्पादन', engineeringNotes: 'फाइटर जेट, एयर-डिफेंस मिसाइल या इलेक्ट्रॉनिक काउंटरमेजर्स।' }
      ]
    },
    diagramPlaceholder: {
      title: 'Schematic 1.1: The Sensor-to-Shooter Multi-Domain Loop',
      caption: 'यह आरेख दिखाता है कि कैसे प्रारंभिक चेतावनी रडार लक्ष्य को पहचानता है, डेटा बस के माध्यम से सुरक्षित लिंक पर भेजता है, और कमांड कंप्यूटर स्वतः सबसे प्रभावी इंटरसेप्टर का चयन करता है।',
      labels: ['Target Detection (Radar/EW)', 'Secure Military Data Link', 'Command & Control Decision Fusion', 'Interceptor Engagement']
    },
    indianProgrammesAndHistory: {
      programmeName: 'भारतीय रक्षा अनुसंधान की नींव और दृष्टि',
      organization: 'Defence Research and Development Organisation (DRDO)',
      historicalContext: '1958 में तत्कालीन टेक्निकल डेवलपमेंट एस्टेब्लिशमेंट (TDE) और डायरेक्टोरेट ऑफ टेक्निकल डेवलपमेंट एंड प्रोडक्शन (DTDP) को मिलाकर DRDO की स्थापना की गई थी।',
      indigenousMilestone: 'शुरुआती छोटे प्रोजेक्ट्स से आगे बढ़कर 1980 के दशक में इंटीग्रेटेड गाइडेड मिसाइल डेवलपमेंट प्रोग्राम (IGMDP) और लाइट कॉम्बैट एयरक्राफ्ट (LCA) जैसे महत्वाकांक्षी राष्ट्रीय कार्यक्रमों का शुभारंभ हुआ।',
      publicSources: ['DRDO Official Publication: 50 Years of DRDO (1958-2008)', 'Technology Focus Journal: Systems Engineering in Indian Defence']
    },
    engineeringChallenges: [
      'चरम पर्यावरणीय स्थितियां: सियाचिन के -50°C तापमान से लेकर थार रेगिस्तान के +55°C तक इलेक्ट्रॉनिक्स और धातुओं का सुचारु कार्य करना।',
      'लंबे जीवन चक्र (Lifecycle Maintenance): किसी सैन्य प्लेटफॉर्म का सेवाकाल 30 से 40 वर्ष होता है, इसलिए कंपोनेंट अप्रचलन (Obsolescence Management) एक विशाल चुनौती है।'
    ],
    manufacturingAndQuality: 'डिफेंस इंजीनियरिंग में "जीरो डिफेक्ट" (Zero-Defect) दर्शन अनिवार्य होता है। सभी घटकों की 100% गैर-विनाशकारी जांच (Non-Destructive Testing - NDT), एक्स-रे स्कैनिंग और कंपन परीक्षण किए जाते हैं।',
    keyTakeaways: [
      'रक्षा तकनीक बहु-विषयक इंजीनियरिंग का उच्चतम स्तर है जहाँ सुरक्षा और विश्वसनीयता सर्वोपरि हैं।',
      'सिस्टम-ऑफ-सिस्टम्स आर्किटेक्चर आधुनिक सैन्य श्रेष्ठता का आधार है।',
      'DRDO ने पिछले 6 दशकों में भारत को रणनीतिक प्रणालियों में आत्मनिर्भर बनाने की दिशा में मजबूत आधारशिला रखी है।'
    ],
    importantTerms: [
      { term: 'C4ISR', definition: 'Command, Control, Communications, Computers, Intelligence, Surveillance and Reconnaissance — आधुनिक नेटवर्क-केंद्रित युद्ध प्रणाली का आधारभूत ढांचा।' },
      { term: 'TRL (Technology Readiness Level)', definition: 'नासा और रक्षा अनुसंधान में प्रयुक्त 1 से 9 तक का पैमाना, जो किसी तकनीक की वैचारिक अवस्था (TRL 1) से लेकर वास्तविक सफल परिचालन (TRL 9) तक की परिपक्वता मापता है।' }
    ],
    furtherLearning: [
      { topic: 'Systems Engineering Principles in Defence Systems', referenceDoc: 'IEEE Aerospace & Electronic Systems Magazine / INCOSE Handbook' },
      { topic: 'Military Standards (MIL-STD-810G)', referenceDoc: 'Department of Defense Test Method Standard for Environmental Engineering Considerations' }
    ],
    quiz: [
      {
        question: 'आधुनिक रक्षा प्रणालियों में TRL पैमाने पर TRL 9 का क्या अर्थ है?',
        options: [
          'प्रारंभिक वैज्ञानिक विचार का प्रतिपादन',
          'प्रयोगशाला में पहला कार्यशील प्रोटोटाइप',
          'वास्तविक मिशन और परिचालन स्थितियों में पूरी तरह प्रमाणित और सफल प्रणाली',
          'कंप्यूटर में CAD डिजाइन सिमुलेशन पूरा होना'
        ],
        answerIndex: 2,
        explanation: 'TRL 9 किसी तकनीक की सर्वोच्च परिपक्वता अवस्था है, जहाँ प्रणाली को वास्तविक परिचालन मिशनों और कठोर परिस्थितियों में पूरी तरह प्रमाणित माना जाता है।'
      }
    ]
  },

  6: {
    introduction: 'मिसाइल प्रणालियां आधुनिक एयरोस्पेस इंजीनियरिंग के सबसे जटिल और सटीक आविष्कारों में से एक हैं। एक गाइडेड मिसाइल अनिवार्य रूप से एक मानवरहित, उच्च-सटीक स्व-चालित उड़ान वाहन है जिसमें आंतरिक गाइडेंस, नेविगेशन, प्रोपल्शन और पेलोड एक अत्यधिक कॉम्पैक्ट और एरोडायनामिक ढांचे में समाहित होते हैं।',
    engineeringContext: 'मिसाइल का संरचनात्मक ढांचा असाधारण यांत्रिक और तापीय बलों को सहन करने के लिए तैयार किया जाता है। प्रक्षेपण के समय रॉकेट मोटर मिसाइल को कुछ ही सेकंडों में शून्य से सुपरसोनिक या हाइपरसोनिक गति (Mach 2 से Mach 5+) तक त्वरित कर देती है, जिससे 30g से 60g तक का गुरुत्वाकर्षण बल उत्पन्न होता है।',
    coreScientificPrinciples: [
      'एरोडायनामिक स्थिरता और सेंटर ऑफ प्रेशर (Cp): यदि सेंटर ऑफ ग्रेविटी (Cg), सेंटर ऑफ प्रेशर (Cp) के आगे हो, तो मिसाइल स्वाभाविक रूप से स्थिर रहती है। कैनार्ड्स और टेल फिन्स उड़ान के दौरान इस संतुलन को बनाए रखते हैं।',
      'रॉकेट प्रोपल्शन और न्यूटन का तृतीय नियम: दहन कक्ष में उच्च-दाब गैसों का तीव्र गति से डी-लवाल (de Laval) नोजल के माध्यम से बाहर निकलना अग्रगामी थ्रस्ट (Thrust) उत्पन्न करता है।',
      'क्लोज्ड-लूप गाइडेंस: सीकर सेंसर निरंतर लक्ष्य की सापेक्षिक स्थिति मापता है और ऑटोपायलट को सुधार सिग्नल भेजता है।'
    ],
    systemArchitecture: {
      title: 'मिसाइल का आंतरिक खंडीय विन्यास (Cross-Section Architecture)',
      description: 'सामने से पीछे की ओर एक मानक गाइडेड मिसाइल चार प्राथमिक मॉड्यूल में संरचित होती है:',
      subsystems: [
        { name: '1. सीकर व नेविगेशन बे (Nose Section)', function: 'लक्ष्य पहचान व गाइडेंस', engineeringNotes: 'रेडोम (Radome), एक्टिव रडार/इमेजिंग इन्फ्रारेड सीकर, इनर्शियल नेविगेशन सिस्टम (INS) और गाइडेंस कम्प्यूटर।' },
        { name: '2. वारहेड व सेफ-आर्म मैकेनिज्म (Warhead Bay)', function: 'मिशन पेलोड कम्पार्टमेंट', engineeringNotes: 'पेलोड कम्पार्टमेंट जिसमें प्रॉक्सिमिटी फ्यूज (लेजर/रेडियो फ्रीक्वेंसी आधारित) लगा होता है।' },
        { name: '3. प्रोपल्शन सेक्शन (Motor Body)', function: 'थ्रस्ट उत्पादन', engineeringNotes: 'सॉलिड प्रोपेलेंट केसिंग (मारैजिंग स्टील या कार्बन कंपोजिट), इग्नाइटर और नोजल असेंबली।' },
        { name: '4. कंट्रोल एक्चुएशन सेक्शन (Tail Section)', function: 'एरोडायनामिक नियंत्रण', engineeringNotes: 'इलेक्ट्रो-मैकेनिकल एक्चुएटर्स जो टेल फिन्स को मिलीसेकंड्स में घुमाते हैं ताकि मिसाइल वांछित दिशा में मुड़ सके।' }
      ]
    },
    diagramPlaceholder: {
      title: 'Schematic 6.1: Cross-Sectional Subsystems of a Guided Missile',
      caption: 'चार मुख्य अनुभागों का इंजीनियरिंग लेआउट: सीकर्स, वारहेड बे, सॉलिड प्रोपल्शन चेंबर और टेल एक्चुएशन फिन्स।',
      labels: ['Dielectric Radome', 'RF/IIR Seeker & Mission Computer', 'Warhead & Proximity Fuze', 'Solid Rocket Motor / Propellant Grain', 'Control Actuation System (CAS)']
    },
    indianProgrammesAndHistory: {
      programmeName: 'इंटीग्रेटेड गाइडेड मिसाइल डेवलपमेंट प्रोग्राम (IGMDP)',
      organization: 'DRDL हैदराबाद / DRDO',
      historicalContext: '1983 में डॉ. एपीजे अब्दुल कलाम के नेतृत्व में भारत ने पांच प्रमुख मिसाइल प्रणालियों (पृथ्वी, अग्नि, आकाश, नाग, त्रिशूल) के स्वदेशी विकास का ऐतिहासिक निर्णय लिया।',
      indigenousMilestone: 'IGMDP ने भारत को मिसाइल प्रौद्योगिकी के क्षेत्र में विश्व के अग्रणी देशों की पंक्ति में खड़ा किया और आज अग्नि-V, ब्रह्मोस और अस्त्र जैसी अत्याधुनिक मिसाइलों का मार्ग प्रशस्त किया।',
      publicSources: ['Wings of Fire by Dr. A.P.J. Abdul Kalam', 'DRDL Technical Archives: IGMDP Genesis and Maturation']
    },
    engineeringChallenges: [
      'एरो-थर्मल हीटिंग: सुपरसोनिक गति पर हवा के घर्षण से नोज़ कोन का तापमान 800°C से अधिक हो जाता है, जिसके लिए विशेष थर्मल बैरियर कोटिंग्स की आवश्यकता होती है।',
      'उच्च गति पर गतिशीलता (High-G Maneuvers): जब लक्ष्य तेज मोड़ लेता है, तो मिसाइल को उससे तीन गुना अधिक G-बल (Pulling Gs) सहन करते हुए ट्रैक करना पड़ता है।'
    ],
    manufacturingAndQuality: 'प्रोपेलेंट केसिंग में कोई भी सूक्ष्म आंतरिक दरार या बुलबुला (air pocket) असामान्य दहन उत्पन्न कर सकता है। इसलिए सभी मोटरों की एक्स-रे सीटी स्कैनिंग और अल्ट्रासोनिक टेस्टिंग अनिवार्य है।',
    keyTakeaways: [
      'मिसाइल प्रणालियां एयरोडायनामिक्स, उन्नत सामग्री, रॉकेट विज्ञान और डिजिटल नियंत्रण का संतुलित संयोजन हैं।',
      'सीकर और गाइडेंस कंप्यूटर मिसाइल का "मस्तिष्क" हैं, जबकि रॉकेट मोटर उसका "हृदय" है।',
      'भारत का IGMDP कार्यक्रम तकनीकी आत्मनिर्भरता का विश्वस्तरीय उदाहरण है।'
    ],
    importantTerms: [
      { term: 'Radome (रेडोम)', definition: 'मिसाइल के नोज पर लगा ऐसा एरोडायनामिक आवरण जो रेडियो या इन्फ्रारेड तरंगों को बिना रोके पार होने देता है (पारदर्शी रहता है), परंतु कठोर तापीय और वायुगतिकीय दबाव से अंदरूनी सेंसर्स की रक्षा करता है।' },
      { term: 'CAS (Control Actuation System)', definition: 'इलेक्ट्रिक मोटरों और गियर्स से युक्त प्रणाली जो गाइडेंस कंप्यूटर के निर्देश पर मिसाइल के पंखों (control surfaces) को मोड़कर उड़ान का रुख बदलती है।' }
    ],
    furtherLearning: [
      { topic: 'Tactical Missile Aerodynamics & Design', referenceDoc: 'AIAA Progress in Astronautics and Aeronautics Series' },
      { topic: 'Modern Missile Guidance Algorithms', referenceDoc: 'Journal of Guidance, Control, and Dynamics' }
    ],
    quiz: [
      {
        question: 'मिसाइल के नोज कोन पर लगे "Radome" (रेडोम) की प्राथमिक इंजीनियरिंग विशेषता क्या होनी चाहिए?',
        options: [
          'यह पूरी तरह से धातु का बना हो ताकि भारी आघात सह सके',
          'यह विद्युत चुम्बकीय (RF/IR) तरंगों के लिए पारदर्शी (dielectric) हो और अत्यधिक वायुगतिकीय गर्मी सहन कर सके',
          'यह पारदर्शी शीशे का बना हो ताकि कैमरा देख सके',
          'यह ईंधन भंडारण के काम आता है'
        ],
        answerIndex: 1,
        explanation: 'रेडोम विशेष डाई-इलेक्ट्रिक सेरामिक्स या कंपोजिट्स का बनता है ताकि अंदर स्थित रडार या आईआईआर सीकर की तरंगें बिना किसी विरूपण के पार निकल सकें और वह अत्यधिक गर्मी भी झेल सके।'
      }
    ]
  },

  23: {
    introduction: 'लाइट कॉम्बैट एयरक्राफ्ट (LCA) तेजस की विकास यात्रा भारत के एयरोस्पेस इंजीनियरिंग इतिहास का सबसे प्रेरणादायक और चुनौतीपूर्ण अध्याय है। 1980 के दशक में जब भारत ने एक 4.5 पीढ़ी का सुपरसोनिक, टेललेस कंपाउंड-डेल्टा विंग लड़ाकू विमान बनाने का संकल्प लिया, तो देश के पास न तो फ्लाई-बाय-वायर सॉफ्टवेयर का अनुभव था, न ही कार्बन कंपोजिट विनिर्माण का ढांचा।',
    engineeringContext: 'तेजस को जानबूझकर स्टैटिकली अनस्टेबल (Statically Unstable) डिजाइन किया गया था ताकि वह हवा में बिजली की तेजी से कलाबाजियां खा सके। लेकिन ऐसे विमान को बिना कंप्यूटर सहायता के कोई भी मानव पायलट स्थिर नहीं रख सकता। इसके लिए क्वाड-रिडंडेंट (Quad-redundant) डिजिटल फ्लाई-बाय-वायर (DFBW) फ्लाइट कंट्रोल सिस्टम की आवश्यकता थी, जिसे भारतीय वैज्ञानिकों ने पूरी तरह स्वदेशी रूप से विकसित किया।',
    coreScientificPrinciples: [
      'कंपाउंड टेललेस डेल्टा विंग (Compound Delta Wing): दोहरे स्वीप-बैक कोण वाली डेल्टा विंग सुपरसोनिक गति पर कम वेव-ड्रैग और सबसोनिक गति पर उत्कृष्ट लिफ्ट प्रदान करती है।',
      'उन्नत कार्बन फाइबर कंपोजिट्स (CFRP): तेजस के एयरफ्रेम की सतह का 90% और कुल वजन का 45% अत्याधुनिक कार्बन कंपोजिट्स से बना है, जिससे यह अपने वर्ग में दुनिया का सबसे हल्का और मजबूत सुपरसोनिक फाइटर बनता है।',
      'क्वाड-रिडंडेंट DFBW: चार स्वतंत्र कंप्यूटर समानांतर रूप से प्रति सेकंड दर्जनों बार उड़ान सेंसर डेटा की गणना करते हैं। यदि एक या दो चैनल में कोई खराबी आ भी जाए, तो भी विमान सुरक्षित रूप से उड़ता रहता है।'
    ],
    systemArchitecture: {
      title: 'LCA तेजस का तकनीकी आर्किटेक्चर',
      description: 'विमान के प्रमुख सब-सिस्टम्स का इंजीनियरिंग समन्वय:',
      subsystems: [
        { name: 'फ्लाइट कंट्रोल कंप्यूटर (DFCC)', function: 'डिजिटल उड़ान स्थिरता', engineeringNotes: 'ADE द्वारा विकसित 4-चैनल डिजिटल कंप्यूटर जो पायलट की स्टिक के इनपुट को हाइड्रोलिक एक्चुएटर्स में रूपांतरित करता है।' },
        { name: 'ग्लास कॉकपिट व एवियोनिक्स', function: 'पायलट-व्हीकल इंटरफेस', engineeringNotes: 'मल्टी-फंक्शन डिस्प्ले (MFD), वाइड HUD, और हैंड्स-ऑन थ्रॉटल-एंड-स्टिक (HOTAS) आर्किटेक्चर।' },
        { name: 'उत्तम (Uttam) AESA रडार', function: 'टारगेट सर्च व ट्रैक', engineeringNotes: 'LRDE द्वारा विकसित स्वदेशी AESA रडार जिसमें सैकड़ों GaN ट्रांसमिट/रिसीव मॉड्यूल लगे हैं।' },
        { name: 'इलेक्ट्रॉनिक वारफेयर सूट (मायावी/अंगद)', function: 'आत्मरक्षा व जैमिंग', engineeringNotes: 'रडार वार्निंग रिसीवर (RWR), मिसाइल अप्रोच वार्निंग और एडवांस जैमर पॉड।' }
      ]
    },
    diagramPlaceholder: {
      title: 'Schematic 23.1: LCA Tejas Aerodynamic & Avionics Layout',
      caption: 'कंपाउंड डेल्टा विंग, इनटेक डक्ट्स, DFCC फ्लाई-बाय-वायर आर्किटेक्चर और कंपोजिट स्किन पैनल्स का वितरण।',
      labels: ['Compound Delta Wing with LEVCON', 'Carbon-Fibre Composite Skin (45% by weight)', 'Quad-Redundant Flight Control Computer', 'Glass Cockpit HOTAS Integration', 'Uttam AESA Radar Nose Assembly']
    },
    indianProgrammesAndHistory: {
      programmeName: 'लाइट कॉम्बैट एयरक्राफ्ट (LCA) कार्यक्रम',
      organization: 'Aeronautical Development Agency (ADA) & Hindustan Aeronautics Limited (HAL)',
      historicalContext: '1984 में सरकार ने ADA का गठन किया। 4 जनवरी 2001 को तेजस टेक्नोलॉजी डिमॉन्स्ट्रेटर (TD-1) ने अपनी ऐतिहासिक पहली उड़ान भरी।',
      indigenousMilestone: 'तेजस ने शून्य घातक दुर्घटनाओं (Zero Fatal Accidents) के साथ हजारों परिचालन उड़ानें पूरी की हैं। नेवल तेजस ने आईएनएस विक्रमादित्य और आईएनएस विक्रांत पर स्की-जंप और अरेस्टेड लैंडिंग करके इतिहास रचा।',
      publicSources: ['ADA Official Publication: The Story of LCA Tejas', 'HAL Technical Review: Composite Materials & DFBW in Tejas', 'CEMILAC Airworthiness Certification Bulletins']
    },
    engineeringChallenges: [
      '1998 के अंतरराष्ट्रीय प्रतिबंध: पोखरण-II के बाद जब विदेशी कंपनियों ने फ्लाइट कंट्रोल कोड और टेस्ट सुविधाएं रोक दीं, तब भारतीय वैज्ञानिकों ने स्वयं नेशनल फ्लाइट टेस्ट सेंटर (NFTC) में अपना कोड लिखा और सिद्ध किया।',
      'नेवल वेरिएंट का भारी तनाव: विमानवाहक पोत पर उतरते समय अरेस्टिंग गियर के भारी झटके को सहन करने के लिए लैंडिंग गियर और मुख्य ढांचे को मजबूत करना।'
    ],
    manufacturingAndQuality: 'HAL बंगलुरु में अत्याधुनिक स्वचालित असेंबली लाइन स्थापित की गई है जहाँ रोबोटिक ड्रिलिंग और लेजर अलाइनमेंट के साथ प्रति वर्ष 16 से 24 तेजस विमान तैयार करने की क्षमता है।',
    keyTakeaways: [
      'LCA तेजस केवल एक विमान नहीं, बल्कि भारत के संपूर्ण एयरोस्पेस इकोसिस्टम का जन्मदाता है।',
      'DFBW फ्लाइट कंट्रोल लॉज और कार्बन कंपोजिट तकनीक में भारत ने पूर्ण आत्मनिर्भरता हासिल की।',
      'तेजस Mk1A और आगामी Mk2 भारत की वायु शक्ति को नई ऊंचाइयों पर ले जा रहे हैं।'
    ],
    importantTerms: [
      { term: 'DFBW (Digital Fly-by-Wire)', definition: 'कंप्यूटर नियंत्रित उड़ान प्रणाली जिसमें यांत्रिक तारों और छड़ों की जगह डिजिटल केबल्स और सेंसरों का उपयोग किया जाता है।' },
      { term: 'HOTAS (Hands On Throttle And Stick)', definition: 'कॉकपिट डिजाइन जिसमें पायलट के हाथों को थ्रॉटल और फ्लाइट स्टिक से हटाए बिना सभी मुख्य हथियार और रडार स्विच संचालित किए जा सकते हैं।' }
    ],
    furtherLearning: [
      { topic: 'Development of Flight Control Laws for LCA Tejas', referenceDoc: 'Journal of the Aeronautical Society of India' },
      { topic: 'Advanced Composites in Aerospace Structures', referenceDoc: 'ADA/NAL Aerospace Technical Monographs' }
    ],
    quiz: [
      {
        question: 'LCA तेजस के एयरफ्रेम का लगभग 45% वजन किस उन्नत सामग्री से बना है?',
        options: [
          'शुद्ध एल्युमिनियम शीट',
          'कार्बन फाइबर रीइन्फोर्स्ड पॉलिमर (CFRP कंपोजिट्स)',
          'भारी कच्चा लोहा और स्टील',
          'लकड़ी और प्लाईवुड'
        ],
        answerIndex: 1,
        explanation: 'तेजस के एयरफ्रेम में कार्बन फाइबर कंपोजिट्स (CFRP) का व्यापक उपयोग किया गया है, जिससे यह हल्का, जंग-रोधी और अत्यधिक मजबूत बनता है।'
      }
    ]
  },

  26: {
    introduction: 'AESA (Active Electronically Scanned Array) रडार आधुनिक सैन्य रडार तकनीक का शिखर है। पारंपरिक रडारों में एक ही ट्रांसमीटर ट्यूब होती थी और एंटीना को यांत्रिक रूप से घुमाकर दिशा बदली जाती थी। इसके विपरीत AESA में हजारों स्वतंत्र, लघु ट्रांसमिट/रिसीव (T/R) मॉड्यूल होते हैं जो प्रकाश की गति से बीम को मोड़ते हैं।',
    engineeringContext: 'AESA की सबसे क्रांतिकारी विशेषता यह है कि यह एक साथ विभिन्न दिशाओं में कई बीम (Multiple Agile Beams) उत्पन्न कर सकता है। इसका अर्थ है कि विमान का पायलट एक ही समय में दर्जनों लक्ष्यों को स्कैन कर सकता है, साथ ही साथ अपनी मिसाइल का मार्गदर्शन कर सकता है और दुश्मन के रडार को जैम भी कर सकता है।',
    coreScientificPrinciples: [
      'फेज्ड ऐरे सिद्धांत (Constructive & Destructive Interference): प्रत्येक T/R मॉड्यूल से निकलने वाली रेडियो तरंगों के कला-कोण (Phase Angle) को माइक्रो-रेडियंस में बदलकर वांछित दिशा में मजबूत बीम बनाई जाती है।',
      'गैलियम नाइट्राइड (GaN) सेमीकंडक्टर्स: पारंपरिक GaAs की तुलना में GaN चिप्स 5 गुना अधिक पावर डेंसिटी और उच्च तापमान पर कार्य कर सकती हैं, जिससे रडार की रेंज और संवेदनशीलता अत्यधिक बढ़ जाती है।',
      'सॉफ्ट डिग्रेडेशन (Graceful Degradation): यदि 5-10% T/R मॉड्यूल खराब भी हो जाएं, तो भी रडार पूरी तरह बंद नहीं होता बल्कि केवल रेंज में आंशिक कमी आती है।'
    ],
    systemArchitecture: {
      title: 'AESA रडार एंटीना का आंतरिक मॉड्यूल ढांचा',
      description: 'एंटीना फेस पर हजारों T/R मॉड्यूल्स का इंजीनियरिंग लेआउट:',
      subsystems: [
        { name: 'T/R मॉड्यूल्स ऐरे (Antenna Face)', function: 'RF पल्स ट्रांसमिशन और रिसेप्शन', engineeringNotes: 'प्रत्येक मॉड्यूल में पावर एम्प्लीफायर, लो-नॉइज़ एम्प्लीफायर (LNA), डिजिटल फेज शिफ्टर और स्विच होता है।' },
        { name: 'लिक्विड कूलिंग प्लेट (Cold Plate)', function: 'थर्मल डिस्सिपेशन', engineeringNotes: 'उच्च शक्ति के कारण उत्पन्न भारी गर्मी को हटाने के लिए ईथीलीन ग्लाइकोल आधारित तरल शीतलन लूप।' },
        { name: 'बीमफॉर्मिंग नेटवर्क (Beamformer)', function: 'सिग्नल कम्बाइनिंग', engineeringNotes: 'सभी मॉड्यूल्स से प्राप्त RF सिग्नलों को चरणबद्ध रूप से जोड़कर डिजिटल रिसीवर को भेजना।' },
        { name: 'प्रोग्रामेबल डिजिटल सिग्नल प्रोसेसर (DSP)', function: 'डॉपलर व टारगेट प्रोसेसिंग', engineeringNotes: 'FPGA और मल्टी-कोर प्रोसेसर्स जो प्रति सेकंड अरबों फ्लोटिंग-पॉइंट ऑपरेशंस (FLOPS) करते हैं।' }
      ]
    },
    diagramPlaceholder: {
      title: 'Schematic 26.1: AESA Solid-State T/R Module Architecture',
      caption: 'AESA एंटीना के एक T/R मॉड्यूल का ब्लॉक आरेख: GaN पावर एम्पलीफायर, LNA, फेज शिफ्टर और डिजिटल कंट्रोल इंटरफेस।',
      labels: ['GaN Solid-State Power Amplifier', 'Ultra-Low-Noise Amplifier (LNA)', 'Digital Phase & Attenuation Shifter', 'Liquid Cold-Plate Cooling Matrix', 'Central Beamforming Network']
    },
    indianProgrammesAndHistory: {
      programmeName: 'उत्तम (Uttam) AESA रडार कार्यक्रम',
      organization: 'Electronics and Radar Development Establishment (LRDE) बंगलुरु / DRDO',
      historicalContext: 'भारत ने लड़ाकू विमानों के लिए विदेशी रडारों पर निर्भरता समाप्त करने के लिए LRDE में स्वदेशी AESA रडार विकसित करने का प्रोजेक्ट शुरू किया।',
      indigenousMilestone: 'उत्तम रडार ने तेजस लड़ाकू विमान पर सफल उड़ान परीक्षण पूरे किए हैं और यह आधुनिक 4.5+ जनरेशन के किसी भी वैश्विक रडार के समकक्ष प्रदर्शन करता है।',
      publicSources: ['DRDO Technology Focus: Airborne Active Electronically Scanned Array Radars', 'LRDE Technical Papers on Solid-State T/R Module Fabrication']
    },
    engineeringChallenges: [
      'थर्मल डेंसिटी: कुछ ही वर्ग फुट के एंटीना फेस पर हजारों वॉट की गर्मी उत्पन्न होती है। यदि कूलिंग सिस्टम फेल हो जाए, तो सेमीकंडक्टर कुछ ही सेकंडों में जल सकते हैं।',
      'कैलिब्रेशन और फेज अलाइनमेंट: तापमान बदलने पर प्रत्येक T/R मॉड्यूल के फेज में थोड़ा अंतर आ जाता है, जिसे रीयल-टाइम आंतरिक सॉफ्टवेयर द्वारा लगातार कैलिब्रेट करना पड़ता है।'
    ],
    manufacturingAndQuality: 'T/R मॉड्यूल्स का निर्माण क्लास-100 और क्लास-1000 क्लीन रूम में किया जाता है। स्वचालित वायर-बॉन्डिंग मशीनें 25-माइक्रोन सोने के तारों से कनेक्शन जोड़ती हैं।',
    keyTakeaways: [
      'AESA रडार में कोई हिलने-डुलने वाले यांत्रिक पुर्जे नहीं होते, जिससे इसकी विश्वसनीयता कई गुना बढ़ जाती है।',
      'GaN तकनीक ने AESA रडार के पावर आउटपुट और रेंज में क्रांतिकारी वृद्धि की है।',
      'DRDO LRDE का "उत्तम" AESA रडार भारत के रक्षा इलेक्ट्रॉनिक्स का एक गौरवशाली मील का पत्थर है।'
    ],
    importantTerms: [
      { term: 'T/R Module (Transmit/Receive Module)', definition: 'एक स्वतंत्र लघु इलेक्ट्रॉनिक सर्किट जो रडार तरंगों को प्रसारित (Transmit) भी करता है और वापस आने वाली क्षीण प्रतिध्वनि को पकड़कर प्रवर्धित (Receive) भी करता है।' },
      { term: 'Graceful Degradation', definition: 'प्रणाली की वह क्षमता जिसमें कुछ व्यक्तिगत घटकों के विफल होने पर भी पूरी प्रणाली अचानक बंद नहीं होती, बल्कि आंशिक क्षमता के साथ काम करती रहती है।' }
    ],
    furtherLearning: [
      { topic: 'Principles of Modern Radar: Basic Principles and Advanced Techniques', referenceDoc: 'SciTech Publishing / IEEE Press' },
      { topic: 'Active Electronically Scanned Array (AESA) Radar Technology', referenceDoc: 'IEEE Radar Conference Proceedings' }
    ],
    quiz: [
      {
        question: 'पारंपरिक मैकेनिकल रडार की तुलना में AESA रडार का मुख्य वैज्ञानिक लाभ क्या है?',
        options: [
          'इसमें केवल एक बड़ा वैक्यूम ट्यूब ट्रांसमीटर होता है',
          'यह बिना किसी यांत्रिक गति के प्रकाश की गति से बीम को इलेक्ट्रॉनिक रूप से कई दिशाओं में मोड़ सकता है',
          'यह केवल दिन के उजाले में काम करता है',
          'इसे किसी बिजली या कूलिंग की आवश्यकता नहीं होती'
        ],
        answerIndex: 1,
        explanation: 'AESA रडार में हजारों T/R मॉड्यूल्स के फेज को इलेक्ट्रॉनिक रूप से बदलकर बीम को कुछ ही माइक्रोसेकंड में किसी भी दिशा में मोड़ा जा सकता है।'
      }
    ]
  },

  43: {
    introduction: 'हाइपरसोनिक प्रौद्योगिकी (Mach 5 से अधिक, यानी ध्वनि की गति से पांच गुना तेज — लगभग 6,100 किमी/घंटा से अधिक) आधुनिक वैमानिकी और रक्षा विज्ञान का सबसे चुनौतीपूर्ण क्षेत्र है। इस गति पर हवा सामान्य गैस की तरह व्यवहार नहीं करती, बल्कि तीव्र दबाव और तापमान के कारण अणुओं में टूटकर प्लाज्मा में बदलने लगती है।',
    engineeringContext: 'हाइपरसोनिक वाहनों के दो मुख्य प्रकार होते हैं: हाइपरसोनिक क्रूज मिसाइल (HCM — जो स्क्रैमजेट एयर-ब्रीदिंग इंजन से उड़ती हैं) और हाइपरसोनिक ग्लाइड व्हीकल (HGV — जिन्हें रॉकेट द्वारा वायुमंडल के ऊपरी किनारे पर ले जाकर अत्यधिक गति से ग्लाइड कराया जाता है)। इस गति पर सबसे बड़ी चुनौती हवा में ईंधन का दहन (Supersonic Combustion) करना है, जिसे "तूफान में मोमबत्ती जलाने" के समान माना जाता है।',
    coreScientificPrinciples: [
      'सुपरसोनिक दहन (Scramjet Physics): रैमजेट में आने वाली हवा को सबसोनिक गति तक धीमा किया जाता है, लेकिन मैक 6 पर ऐसा करने से अत्यधिक तापमान और दबाव बढ़ जाएगा। स्क्रैमजेट में दहन कक्ष के भीतर भी हवा सुपरसोनिक गति से बहती है।',
      'एयरो-थर्मोडायनामिक हीटिंग और शॉक वेव्स: अग्र भाग (Stagnation Point) पर तापमान 2000°C से ऊपर पहुँच जाता है, जहाँ नाइट्रोजन और ऑक्सीजन के अणु विभाजित (Dissociate) हो जाते हैं।',
      'प्लाज्मा शीथ और ब्लैकआउट: उच्च तापमान से हवा आयनित होकर वाहन के चारों ओर प्लाज्मा की एक पतली परत बना देती है, जो रेडियो तरंगों को रोकती है।'
    ],
    systemArchitecture: {
      title: 'हाइपरसोनिक टेक्नोलॉजी डिमॉन्स्ट्रेटर (HSTDV) का आर्किटेक्चर',
      description: 'एयर-ब्रीदिंग हाइपरसोनिक वाहन का प्रणालीगत विन्यास:',
      subsystems: [
        { name: 'इंटेक और डिफ्यूजर (Compression Ramp)', function: 'हवा का संपीड़न', engineeringNotes: 'वाहन का निचला अगला हिस्सा ही शॉक वेव्स बनाकर हवा को संपीडित करता है (Waverider Geometry)।' },
        { name: 'स्क्रैमजेट कम्बस्टर (Combustion Chamber)', function: 'सुपरसोनिक दहन', engineeringNotes: 'केरोसिन या हाइड्रोजन ईंधन को 1 मिलीसेकंड से भी कम समय में अत्यंत तीव्र प्रवाह में इंजेक्ट करके जलाया जाता है।' },
        { name: 'एक्स्टर्नल एक्सपेंशन नोजल', function: 'थ्रस्ट उत्पादन', engineeringNotes: 'वाहन का निचला पिछला भाग नोजल का कार्य करता है जहाँ गैसें फैलकर प्रचंड थ्रस्ट देती हैं।' },
        { name: 'अल्ट्रा-हाई टेम्परेचर सेरामिक्स (UHTC)', function: 'थर्मल सुरक्षा', engineeringNotes: 'जिरकोनियम डाइबोराइड (ZrB2) और हैफनियम कार्बाइड (HfC) जो 2500°C तक बिना पिघले टिक सकते हैं।' }
      ]
    },
    diagramPlaceholder: {
      title: 'Schematic 43.1: Air-Breathing Scramjet Engine Airflow & Shockwaves',
      caption: 'हाइपरसोनिक स्क्रैमजेट का शॉक-वेव डायग्राम: कंप्रेशन रैंप, सुपरसोनिक कम्बस्टर, फ्यूल इंजेक्टर स्ट्रट्स और एक्सपेंशन नोजल।',
      labels: ['Inlet Compression Shock Train', 'Supersonic Airflow (Mach 1.5+ in Chamber)', 'Fuel Injection Struts (Kerosene/H2)', 'Supersonic Flame-holding Cavity', 'Single-Expansion Ramp Nozzle (SERN)']
    },
    indianProgrammesAndHistory: {
      programmeName: 'हाइपरसोनिक टेक्नोलॉजी डिमॉन्स्ट्रेटर व्हीकल (HSTDV)',
      organization: 'Defence Research and Development Organisation (DRDO)',
      historicalContext: '7 सितंबर 2020 को DRDO ने डॉ. एपीजे अब्दुल कलाम द्वीप (चांदीपुर) से HSTDV का ऐतिहासिक सफल उड़ान परीक्षण किया।',
      indigenousMilestone: 'सॉलिड रॉकेट बूस्टर द्वारा वाहन को 30 किमी की ऊंचाई पर मैक 6 की गति पर ले जाने के बाद स्क्रैमजेट इंजन ने हवा में सफलतापूर्वक प्रज्वलन और निरंतर दहन कर विश्व में भारत का परचम लहराया।',
      publicSources: ['DRDO Press Release & Official Monograph: HSTDV Flight Demonstration 2020', 'AIAA Aerospace Sciences Meeting: Scramjet Aerodynamics']
    },
    engineeringChallenges: [
      'कम्बस्टर में ठहराव समय (Residence Time): दहन कक्ष में हवा केवल 1 मिलीसेकंड (0.001 सेकंड) के लिए रहती है। इतने कम समय में ईंधन को मिलाना, प्रज्वलित करना और पूर्ण दहन करना चरम भौतिक विज्ञान है।',
      'एयरोडायनामिक ड्रैग और लिफ्ट संतुलन: हाइपरसोनिक गति पर वाहन को संतुलित ग्लाइड कराने के लिए "वेवराइडर" (Waverider) आकृतियों की आवश्यकता होती है।'
    ],
    manufacturingAndQuality: 'हाइपरसोनिक कम्बस्टर के आंतरिक स्ट्रट्स को विशेष 3D मेटल प्रिंटिंग (DMLS) और रीफ्रैक्टरी सुपरअलॉयज से बनाया जाता है ताकि वे तीव्र शॉक-वेव कंपन सह सकें।',
    keyTakeaways: [
      'हाइपरसोनिक स्क्रैमजेट तकनीक वर्तमान वायुगतिकी विज्ञान की सर्वोच्च सीमा है।',
      'HSTDV की सफलता के साथ भारत उन गिने-चुने देशों के समूह में शामिल हो गया जिनके पास स्क्रैमजेट उड़ान की तकनीक है।',
      'यह तकनीक भविष्य की लंबी दूरी की क्रूज मिसाइलों और अंतरिक्ष में उपग्रह प्रक्षेपण की लागत को क्रांतिकारी रूप से घटाने में सहायक होगी।'
    ],
    importantTerms: [
      { term: 'Scramjet', definition: 'Supersonic Combustion Ramjet — एक ऐसा जेट इंजन जिसमें आंतरिक दहन कक्ष में भी वायु की गति ध्वनि से तेज (सुपरसोनिक) बनी रहती है।' },
      { term: 'Waverider', definition: 'एक ऐसा विशेष हाइपरसोनिक विमान डिजाइन जो अपनी ही नाक द्वारा उत्पन्न शॉक-वेव की सवारी करता है, जिससे न्यूनतम ड्रैग पर अधिकतम लिफ्ट प्राप्त होती है।' }
    ],
    furtherLearning: [
      { topic: 'Hypersonic and High-Temperature Gas Dynamics (John D. Anderson Jr.)', referenceDoc: 'AIAA Education Series' },
      { topic: 'Scramjet Propulsion Systems', referenceDoc: 'Progress in Aerospace Sciences' }
    ],
    quiz: [
      {
        question: 'स्क्रैमजेट (Scramjet) इंजन और पारंपरिक रैमजेट इंजन के बीच सबसे महत्वपूर्ण वैज्ञानिक अंतर क्या है?',
        options: [
          'स्क्रैमजेट केवल पानी के भीतर काम करता है',
          'स्क्रैमजेट के दहन कक्ष (combustor) में भी वायु का प्रवाह सुपरसोनिक (ध्वनि से तेज) रहता है',
          'रैमजेट में पिस्टन और क्रैंकशाफ्ट होते हैं',
          'स्क्रैमजेट में किसी ईंधन की आवश्यकता नहीं होती'
        ],
        answerIndex: 1,
        explanation: 'स्क्रैमजेट का अर्थ ही है "सुपरसोनिक कम्बशन रैमजेट", जहाँ दहन कक्ष में आने वाली वायु को सबसोनिक गति तक धीमा नहीं किया जाता बल्कि सुपरसोनिक गति पर ही ईंधन का दहन कराया जाता है।'
      }
    ]
  },

  61: {
    introduction: 'रक्षा अनुसंधान एवं विकास संगठन (DRDO) भारत की सामरिक रक्षा आत्मनिर्भरता का तकनीकी आधार-स्तंभ है। 50 से अधिक अत्याधुनिक प्रयोगशालाओं, 5000+ वैज्ञानिकों और 25,000+ तकनीकी कर्मियों के साथ DRDO का नेटवर्क पूरे देश में फैला हुआ है।',
    engineeringContext: 'DRDO का कार्य केवल प्रयोगशाला तक सीमित नहीं है, बल्कि यह आवश्यकता विश्लेषण (GSQR), कॉन्सेप्ट सिमुलेशन, प्रोटोटाइपिंग, कड़े फील्ड ट्रायल्स और विनिर्माण उद्योगों (DPSUs एवं निजी क्षेत्र) को प्रौद्योगिकी हस्तांतरण (ToT) तक संपूर्ण लाइफसाइकिल का प्रबंधन करता है।',
    coreScientificPrinciples: [
      'क्लस्टर-आधारित अनुसंधान मॉडल: विशिष्ट वैज्ञानिक विषयों में विशेषज्ञता के लिए लैब्स को 7 प्रमुख क्लस्टर्स में समूहित किया गया है।',
      'ट्राइ-सर्विसेज यूजर भागीदारी: अनुसंधान के पहले दिन से ही थलसेना, नौसेना और वायुसेना के प्रतिनिधि प्रोजेक्ट टीम का हिस्सा होते हैं।',
      'ड्यूल-यूज़ टेक्नोलॉजी डेवलपमेंट: रक्षा के लिए विकसित तकनीकों का नागरिक अनुप्रयोग (जैसे वेंटिलेटर, पोर्टेबल वाटर प्यूरिफायर, टेलीमेडिसिन)।'
    ],
    systemArchitecture: {
      title: 'DRDO का 7 मुख्य अनुसंधान क्लस्टर्स का ढांचा',
      description: 'विशेषज्ञता के आधार पर प्रयोगशालाओं का विभाजन:',
      subsystems: [
        { name: '1. मिसाइल एवं सामरिक प्रणाली क्लस्टर (MSS)', function: 'मिसाइल व रणनीतिक प्रणालियां', engineeringNotes: 'DRDL, RCI, ASL (हैदराबाद) और TBRL (चंडीगढ़)। अग्नि, पृथ्वी, आकाश, अस्त्र का विकास।' },
        { name: '2. एरोनॉटिकल सिस्टम्स क्लस्टर (AERO)', function: 'सैन्य विमानन व ड्रोन', engineeringNotes: 'ADE, ADA, CABS (बंगलुरु)। तेजस, रुस्तम, तपस, नेत्र AEW&C का विकास।' },
        { name: '3. इलेक्ट्रॉनिक्स एवं कम्युनिकेशन सिस्टम्स (ECS)', function: 'रडार व सेंसर विंग', engineeringNotes: 'LRDE (बंगलुरु), DEAL (देहरादून), DLRL (हैदराबाद)। उत्तम AESA, रोहिणी, शक्ति EW सूट।' },
        { name: '4. आर्मामेंट एवं कॉम्बैट इंजीनियरिंग (ACE)', function: 'तोपखाने, टैंक व युद्धक वाहन', engineeringNotes: 'ARDE (पुणे), VRDE (अहमदनगर), CVRDE (चेन्नई)। अर्जुन MBT, पिनाका MLRS, ATAGS हॉवित्जर।' },
        { name: '5. नेवल सिस्टम्स एवं मैटेरियल्स (NSM)', function: 'सोनार, टॉरपीडो व धातुएं', engineeringNotes: 'NSTL (विशाखापट्टनम), NPOL (कोच्चि), DMRL (हैदराबाद)। वरुणास्त्र टॉरपीडो, उष्ण सोनार।' },
        { name: '6. लाइफ साइंसेज क्लस्टर (LS)', function: 'सैन्य स्वास्थ्य व बायो-डिफेंस', engineeringNotes: 'INMAS (दिल्ली), DIBER (हल्द्वानी), DFRL (मैसूर)। हाई-एल्टीट्यूड पोषण व विकिरण सुरक्षा।' },
        { name: '7. माइक्रो-इलेक्ट्रॉनिक्स डिवाइसेज (MED&CoS)', function: 'सेमीकंडक्टर व लेजर्स', engineeringNotes: 'SSPL (दिल्ली), LASTEC (दिल्ली)। GaN सेमीकंडक्टर वेफर्स और लेजर तकनीक।' }
      ]
    },
    diagramPlaceholder: {
      title: 'Schematic 61.1: DRDO Technological Cluster Network & Lab Integration',
      caption: 'DRDO के 7 वैज्ञानिक क्लस्टर्स, मुख्यालय नीति विंग, और तीनों सशस्त्र सेनाओं के बीच सहयोगात्मक अनुसंधान लिंक।',
      labels: ['DRDO Headquarters (HQ New Delhi)', 'Missiles & Strategic Systems (MSS)', 'Aeronautical Systems (AERO)', 'Electronics & Comm Systems (ECS)', 'Armaments & Combat (ACE)']
    },
    indianProgrammesAndHistory: {
      programmeName: 'डीआरडीओ की प्रमुख राष्ट्रीय उपलब्धियां',
      organization: 'DRDO & Partner Defence PSUs (HAL, BEL, BDL)',
      historicalContext: '1958 में छोटे गोला-बारूद के मानकीकरण से आरंभ करके आज भारत ने अंतरमहाद्वीपीय बैलिस्टिक मिसाइल (ICBM), एयरबॉर्न अर्ली वार्निंग विमान और एंटी-सैटेलाइट मिसाइल क्षमता अर्जित की है।',
      indigenousMilestone: 'पिनाका मल्टी-बैरल रॉकेट लॉन्चर, आकाश एयर डिफेंस मिसाइल, और वरुणास्त्र हैवीवेट टॉरपीडो का भारतीय सेनाओं में बड़े पैमाने पर इंडक्शन और मित्र देशों को निर्यात।',
      publicSources: ['Ministry of Defence Annual Reports (2020-2025)', 'DRDO Technology Focus: Landmark Achievements of Indian Defence R&D']
    },
    engineeringChallenges: [
      'विश्वस्तरीय सैन्य मानकों की कठोरता: शून्य विफलता की मांग के कारण परीक्षण चक्र में कई वर्ष लग जाते हैं।',
      'क्रिटिकल सब-सिस्टम्स का वैश्विक प्रतिबंध: समय-समय पर अंतरराष्ट्रीय नियंत्रणों का सामना करते हुए स्वदेशी विकल्प तैयार करना।'
    ],
    manufacturingAndQuality: 'DRDO स्वयं उत्पादन नहीं करता, बल्कि HAL, BEL, BDL और निजी कंपनियों (जैसे Tata, L&T, Bharat Forge) को टूलींग, जिग्स और पूर्ण तकनीकी ब्लूप्रिंट सौंपकर गुणवत्ता ऑडिट करता है।',
    keyTakeaways: [
      'DRDO भारत के राष्ट्रीय सुरक्षा स्वावलंबन का मुख्य प्रेरक इंजन है।',
      'इसकी 50+ प्रयोगशालाएं बुनियादी विज्ञान से लेकर आधुनिक युद्ध प्रणालियों तक अनुसंधान करती हैं।',
      'युवा वैज्ञानिकों और भारतीय स्टार्टअप्स के साथ सहयोग से रक्षा नवाचार में नई गति आई है।'
    ],
    importantTerms: [
      { term: 'ToT (Transfer of Technology)', definition: 'अनुसंधान प्रयोगशाला द्वारा विकसित तकनीक, ब्लूप्रिंट और विनिर्माण प्रक्रियाओं को उत्पादन करने वाले उद्योगों को विधिवत सौंपने का कानूनी व तकनीकी समझौता।' },
      { term: 'DPSU (Defence Public Sector Undertaking)', definition: 'भारत सरकार के रक्षा मंत्रालय के अधीन सार्वजनिक उपक्रम (जैसे HAL, BEL, BDL, MDL) जो रक्षा उपकरणों का बड़े पैमाने पर विनिर्माण करते हैं।' }
    ],
    furtherLearning: [
      { topic: 'Indian Defence R&D Ecosystem Evolution', referenceDoc: 'Institute for Defence Studies and Analyses (IDSA) Research Papers' },
      { topic: 'DRDO Technology Transfer Guidelines & Policies', referenceDoc: 'DRDO Directorate of Industry Interface and Technology Management (DIITM)' }
    ],
    quiz: [
      {
        question: 'पिनाका मल्टी-बैरल रॉकेट सिस्टम (Pinaka MLRS) किस DRDO प्रयोगशाला द्वारा विकसित किया गया है?',
        options: [
          'DEAL देहरादून',
          'ARDE पुणे (Armament Research & Development Establishment)',
          'NPOL कोच्चि',
          'DFRL मैसूर'
        ],
        answerIndex: 1,
        explanation: 'पिनाका रॉकेट सिस्टम का मुख्य अनुसंधान और विकास ARDE (आर्मामेंट रिसर्च एंड डेवलपमेंट एस्टेब्लिशमेंट), पुणे द्वारा उच्च सटीकता और मारक क्षमता के लिए किया गया है।'
      }
    ]
  }
};

// Procedural high-grade generator for all 75 chapters ensuring 100% complete professional content
export function getWeaponChapterContent(chapterNumber: number): WeaponChapter {
  const cat = WEAPON_CHAPTERS_CATALOG.find(c => c.chapterNumber === chapterNumber) || WEAPON_CHAPTERS_CATALOG[0];
  const customEdits = getCustomWeaponEdits();
  const custom = customEdits[chapterNumber] || {};
  const bespoke = BESPOKE_WEAPON_CHAPTERS[chapterNumber] || {};

  const defaultIntro = `अध्याय ${cat.chapterNumber}: “${cat.title}” — ${cat.subtitle}। यह अध्याय रक्षा इंजीनियरिंग के इस महत्वपूर्ण क्षेत्र के वैज्ञानिक सिद्धांतों, कार्यप्रणाली, प्रणालीगत संरचना और व्यावहारिक अनुप्रयोगों का व्यापक और अकादमिक विश्लेषण प्रस्तुत करता है।`;
  
  const defaultEngineeringContext = `इंजीनियरिंग के दृष्टिकोण से, ${cat.title} सैन्य प्रणालियों में सटीकता, गति, विश्वसनीयता और उत्तरजीविता (Survivability) सुनिश्चित करने के लिए अपरिहार्य है। आधुनिक युद्धक्षेत्र में जब सेकंड के सौवें हिस्से में निर्णय लेने होते हैं, तब इस तकनीक का त्रुटिहीन कार्य करना मिशन की सफलता और जन-धन की सुरक्षा का निर्धारण करता है।`;

  const defaultCorePrinciples = [
    `${cat.keyTopics[0] || 'सिद्धांत 1'}: बुनियादी भौतिक एवं गणितीय नियमों के आधार पर कार्य निष्पादन।`,
    `${cat.keyTopics[1] || 'सिद्धांत 2'}: अत्यधिक तनावपूर्ण एवं प्रतिकूल परिचालन परिस्थितियों में संरचनात्मक स्थिरता और सिग्नलों की शुद्धता।`,
    `${cat.keyTopics[2] || 'सिद्धांत 3'}: डिजिटल कंप्यूटिंग और वास्तविक समय (Real-Time) डेटा प्रोसेसिंग के साथ निर्बाध एकीकरण।`,
    `${cat.keyTopics[3] || 'सिद्धांत 4'}: विफलता से बचाव के लिए बहु-स्तरीय रिडंडेंसी (Fail-Safe Architecture)।`
  ];

  const defaultSubsystems = [
    { name: `${cat.keyTopics[0] || 'मुख्य सेंसर / इनपुट'} यूनिट`, function: 'डेटा एकत्रीकरण व सिग्नल रूपांतरण', engineeringNotes: 'पर्यावरण से इनपुट प्राप्त करना और उच्च परिशुद्धता के साथ डिजिटल प्रारूप में बदलना।' },
    { name: `${cat.keyTopics[1] || 'प्रोसेसिंग व कंट्रोल'} कोर`, function: 'एल्गोरिदम निष्पादन व निर्णय', engineeringNotes: 'सैन्य-ग्रेड एम्बेडेड प्रोसेसर जो वास्तविक समय में नियंत्रण लूप्स को निष्पादित करते हैं।' },
    { name: `${cat.keyTopics[2] || 'एक्चुएशन / आउटपुट'} स्टेज`, function: 'भौतिक या इलेक्ट्रॉनिक क्रियान्वयन', engineeringNotes: 'कठोर वातावरण और उच्च भार के तहत यांत्रिक गति या विद्युत चुम्बकीय उत्सर्जन करना।' }
  ];

  const defaultChallenges = [
    'अत्यधिक तापमान, कंपन और इलेक्ट्रोमैग्नेटिक हस्तक्षेप (EMI) के बीच बिना किसी गिरावट के कार्य करना।',
    'कच्चे माल और क्रिटिकल घटकों के लिए घरेलू और सुरक्षित आपूर्ति श्रृंखला (Supply Chain Resilience) का निर्माण।'
  ];

  const defaultManufacturing = `इस प्रणाली के सभी घटकों का विनिर्माण सख्त एयरोस्पेस और सैन्य मानकों (जैसे ISO 9100, MIL-STD-810G) के तहत किया जाता है। सभी वेल्ड्स, सर्किट और मिश्रधातुओं की गैर-विनाशकारी परीक्षण (NDT) और लेजर परिशुद्धता से जांच की जाती है।`;

  const defaultTakeaways = [
    `${cat.title} आधुनिक रक्षा प्रणाली का एक अनिवार्य और संवेदनशील घटक है।`,
    'इसके विकास में भौतिक विज्ञान, पदार्थ विज्ञान और सॉफ्टवेयर आर्किटेक्चर का गहरा सामंजस्य आवश्यक होता है।',
    'स्वदेशी अनुसंधान और घरेलू विनिर्माण राष्ट्रीय सामरिक स्वायत्तता को अभूतपूर्व शक्ति प्रदान करते हैं।'
  ];

  const defaultTerms = [
    { term: cat.keyTopics[0] || 'Core Subsystem', definition: `${cat.title} से संबंधित वह मूलभूत घटक जो मुख्य परिचालन जिम्मेदारी संभालता है।` },
    { term: 'System Redundancy', definition: 'किसी मुख्य घटक के विफल होने पर स्वचालित रूप से कार्यभार संभालने वाला बैकअप सिस्टम ताकि मिशन में कोई रुकावट न आए।' }
  ];

  const defaultLearning = [
    { topic: `${cat.title} — Fundamentals & Modern Engineering Trends`, referenceDoc: 'DRDO Technology Focus & IEEE Aerospace Journals' },
    { topic: 'Military Systems Engineering Guidelines', referenceDoc: 'Defence Technical Information Center (DTIC) Public Catalog' }
  ];

  const defaultQuiz = [
    {
      question: `${cat.title} के संदर्भ में सबसे महत्वपूर्ण इंजीनियरिंग विचार क्या है?`,
      options: [
        'केवल सबसे सस्ती सामग्री का उपयोग करना',
        'अत्यधिक प्रतिकूल परिस्थितियों (तापमान, कंपन, जैमिंग) में 100% विश्वसनीयता और सुरक्षा',
        'बिना किसी परीक्षण के सीधे उपयोग करना',
        'नागरिक उपकरणों के सामान्य घटकों को बिना संशोधन के लगाना'
      ],
      answerIndex: 1,
      explanation: 'सैन्य इंजीनियरिंग में जीवन और मिशन की सुरक्षा सर्वोपरि होती है, इसलिए अत्यधिक प्रतिकूल परिस्थितियों में भी प्रणाली का 100% विश्वसनीयता के साथ कार्य करना अनिवार्य माना जाता है।'
    }
  ];

  return {
    id: `hw-ch-${cat.chapterNumber}`,
    chapterNumber: cat.chapterNumber,
    partNumber: cat.partNumber,
    partTitle: cat.partTitle,
    title: cat.title,
    subtitle: cat.subtitle,
    category: cat.category,
    readTimeMinutes: cat.readTimeMinutes,
    badge: cat.badge,
    introduction: custom.introduction || bespoke.introduction || defaultIntro,
    engineeringContext: custom.engineeringContext || bespoke.engineeringContext || defaultEngineeringContext,
    coreScientificPrinciples: custom.coreScientificPrinciples || bespoke.coreScientificPrinciples || defaultCorePrinciples,
    systemArchitecture: custom.systemArchitecture || bespoke.systemArchitecture || {
      title: `${cat.title} का सब-सिस्टम आर्किटेक्चर`,
      description: 'इस प्रणाली के तीन प्रमुख कार्यात्मक मॉड्यूल और उनके यांत्रिक/इलेक्ट्रॉनिक विनिर्देश:',
      subsystems: defaultSubsystems
    },
    diagramPlaceholder: custom.diagramPlaceholder || bespoke.diagramPlaceholder || {
      title: `Schematic ${cat.chapterNumber}.1: ${cat.title} Block Diagram`,
      caption: `यह आरेख ${cat.title} के प्राथमिक प्रवाह और सब-सिस्टम इंटरफेस को दर्शाता है।`,
      labels: cat.keyTopics.slice(0, 4)
    },
    indianProgrammesAndHistory: custom.indianProgrammesAndHistory || bespoke.indianProgrammesAndHistory || {
      programmeName: `भारतीय संदर्भ: ${cat.title} में स्वदेशी अनुसंधान`,
      organization: 'DRDO, सशस्त्र सेनाएं एवं भारतीय रक्षा उद्योग',
      historicalContext: 'भारत ने सामरिक स्वतंत्रता और आयात निर्भरता को घटाने के लिए इस क्षेत्र में व्यापक स्वदेशी अनुसंधान एवं विकास (R&D) किया है।',
      indigenousMilestone: 'कई प्रमुख प्रणालियों का सफल स्वदेशीकरण करके भारतीय सेनाओं में इंडक्शन और मित्र देशों को निर्यात की दिशा में प्रगति।',
      publicSources: ['Ministry of Defence Press Information Bureau (PIB)', 'DRDO Official Technical Monographs']
    },
    engineeringChallenges: custom.engineeringChallenges || bespoke.engineeringChallenges || defaultChallenges,
    manufacturingAndQuality: custom.manufacturingAndQuality || bespoke.manufacturingAndQuality || defaultManufacturing,
    keyTakeaways: custom.keyTakeaways || bespoke.keyTakeaways || defaultTakeaways,
    importantTerms: custom.importantTerms || bespoke.importantTerms || defaultTerms,
    furtherLearning: custom.furtherLearning || bespoke.furtherLearning || defaultLearning,
    quiz: custom.quiz || bespoke.quiz || defaultQuiz,

    // Upgraded Defence Engineering Recipe & Multi-level Framework
    engineeringRecipe: custom.engineeringRecipe || bespoke.engineeringRecipe || generateChapterRecipe(cat.chapterNumber, cat.title, cat.keyTopics),
    learningLevels: custom.learningLevels || bespoke.learningLevels || generateChapterLearningLevels(cat.chapterNumber, cat.title, cat.keyTopics),
    caseStudy: custom.caseStudy || bespoke.caseStudy || (
      cat.chapterNumber >= 8 && cat.chapterNumber <= 14 
        ? DEFENCE_CASE_STUDIES['astra-bvr']
        : cat.chapterNumber >= 23 && cat.chapterNumber <= 35
        ? DEFENCE_CASE_STUDIES['uttam-radar']
        : cat.chapterNumber >= 36 && cat.chapterNumber <= 45
        ? DEFENCE_CASE_STUDIES['pinaka-mbrl']
        : DEFENCE_CASE_STUDIES['lca-tejas']
    ),
    safeProjects: custom.safeProjects || bespoke.safeProjects || SAFE_PRACTICAL_PROJECTS,
    diagrams: custom.diagrams || bespoke.diagrams || EDUCATIONAL_DIAGRAMS
  };
}
