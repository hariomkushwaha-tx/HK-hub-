import { 
  EngineeringRecipe17, 
  LearningLevel, 
  DefenceCaseStudy, 
  SafePracticalProject, 
  EducationalDiagram 
} from '../types/weapon';

// ==========================================
// 1. THE 17-STEP DEFENCE ENGINEERING RECIPE
// ==========================================
export const ENGINEERING_RECIPE_17_STEPS = [
  { step: 1, title: 'Problem Definition', hindiTitle: 'समस्या की पहचान', focus: 'Operational deficiency or threat envelope analysis.' },
  { step: 2, title: 'Mission Objective', hindiTitle: 'मिशन उद्देश्य', focus: 'Clear quantitative Key Performance Parameters (KPPs).' },
  { step: 3, title: 'Scientific Principles', hindiTitle: 'वैज्ञानिक सिद्धांत', focus: 'Governing laws of physics, thermodynamics, electromagnetics & fluid mechanics.' },
  { step: 4, title: 'System Requirements', hindiTitle: 'सिस्टम आवश्यकताएं', focus: 'Payload capacity, operational range, speed, thermal limits & SWaP-C.' },
  { step: 5, title: 'System Architecture', hindiTitle: 'सिस्टम आर्किटेक्चर', focus: 'Functional decomposition, interconnects, bus protocols & redundancy layers.' },
  { step: 6, title: 'Major Subsystems', hindiTitle: 'प्रमुख सब-सिस्टम्स', focus: 'Sensors, propulsion, avionics, actuators & power distribution units.' },
  { step: 7, title: 'Engineering Design Process', hindiTitle: 'इंजीनियरिंग डिजाइन प्रक्रिया', focus: 'CAD solid modeling, structural analysis & tolerance stack-up.' },
  { step: 8, title: 'Simulation & Modelling', hindiTitle: 'सिमुलेशन और मॉडलिंग', focus: 'High-fidelity CFD, FEA, electromagnetic RCS & Hardware-In-the-Loop (HIL).' },
  { step: 9, title: 'Materials & Manufacturing Concepts', hindiTitle: 'पदार्थ व विनिर्माण अवधारणा', focus: 'Carbon composites, titanium alloys, radar-absorbing coatings & CNC machining.' },
  { step: 10, title: 'Prototype Development', hindiTitle: 'प्रोटोटाइप विकास', focus: 'Technology Demonstrator (TD) builds, breadboards & wind tunnel models.' },
  { step: 11, title: 'Testing Methodology', hindiTitle: 'परीक्षण कार्यप्रणाली', focus: 'Vibration tables, climatic chambers, MIL-STD-810G & anechoic chambers.' },
  { step: 12, title: 'Failure Analysis', hindiTitle: 'विफलता विश्लेषण', focus: 'FMEA, thermal shock analysis & root-cause fault tree investigations.' },
  { step: 13, title: 'Validation', hindiTitle: 'सत्यापन व फील्ड ट्रायल', focus: 'Real-world ground firings, captive flight trials & user acceptance tests.' },
  { step: 14, title: 'Quality Assurance', hindiTitle: 'गुणवत्ता आश्वासन (QA)', focus: 'AS9100D, Six Sigma inspection, Non-Destructive Testing (NDT) & audits.' },
  { step: 15, title: 'Maintenance & Lifecycle Support', hindiTitle: 'रखरखाव व जीवनचक्र समर्थन', focus: 'Predictive health monitoring, LRU replacements & depot overhauls.' },
  { step: 16, title: 'Upgrade Path', hindiTitle: 'उन्नयन मार्ग (Upgrade Path)', focus: 'Modular open system architecture (MOSA) for future sensor/engine insertion.' },
  { step: 17, title: 'Future Technology Roadmap', hindiTitle: 'भावी तकनीकी रोडमैप', focus: 'Quantum sensing, hypersonic glide dynamics, cognitive AI & 2047 Vision.' }
];

// ==========================================
// 2. DEFENCE CASE STUDIES (PUBLIC DOMAIN INDIAN PROGRAMMES)
// ==========================================
export const DEFENCE_CASE_STUDIES: Record<string, DefenceCaseStudy> = {
  'lca-tejas': {
    programmeName: 'Light Combat Aircraft (LCA) Tejas Programme',
    leadAgency: 'Aeronautical Development Agency (ADA) & Hindustan Aeronautics Limited (HAL)',
    historicalBackground: '1980 के दशक में पुराने पड़ रहे मिग-21 लड़ाकू बेड़े को बदलने और भारत में स्वदेशी वैमानिकी इकोसिस्टम तैयार करने के उद्देश्य से LCA कार्यक्रम शुरू किया गया था।',
    researchProblem: 'एक ऐसा हल्का, अत्यधिक फुर्तीला (Aerodynamically Unstable) सुपरसोनिक फाइटर बनाना जिसमें उन्नत कंपोजिट्स, ग्लास कॉकपिट और स्वदेशी फ्लाई-बाय-वायर फ्लाइट कंट्रोल सिस्टम (DFCS) हो।',
    technologyDevelopment: 'कम्पाउंड डेल्टा विंग डिजाइन, 45% से अधिक कार्बन-फाइबर कंपोजिट एयरफ्रेम, डिजिटल क्वाड-रिडंडेंट फ्लाई-बाय-वायर कंट्रोल लॉज, और ओपन आर्किटेक्चर मिशन कंप्यूटर का विकास।',
    prototypeMilestone: '4 जनवरी 2001 को विंग कमांडर राजीव कोठियाल द्वारा टेक्नोलॉजी डिमॉन्स्ट्रेटर TD-1 की पहली ऐतिहासिक उड़ान संपन्न हुई।',
    testingMethod: 'लेह के उच्च ऊंचाई वाले ठंडे मौसम (Cold Weather Trials), पोखरण के 50°C गर्म रेगिस्तानी ट्रायल्स, और गोवा स्थित INS हंसा के SBTF पर स्की-जंप अरेस्टेड रिकवरी परीक्षण।',
    evaluationResults: 'शून्य उड़ान दुर्घटना रिकॉर्ड के साथ विमान ने एयर-टू-एयर बीवीआर मिसाइल फायरिंग, लेजर-गाइडेड बम ड्रॉप्स और हवा में ईंधन भरने (AAR) का सफल प्रदर्शन किया।',
    productionScale: 'LCA Mk1 का स्क्वाड्रन इंडक्शन (No. 45 Flying Daggers), और भारतीय वायु सेना के लिए 83 LCA Mk1A विमानों का 48,000 करोड़ रुपये का विशाल उत्पादन अनुबंध।',
    deploymentStatus: 'सुलूर एवं पश्चिमी सीमांत एयरबेसों पर सक्रिय तैनाती; स्वदेशी उत्तम AESA रडार और इलेक्ट्रॉनिक वारफेयर सूट के साथ उन्नत।',
    upgradesAndRoadmap: 'LCA Mk2 (अधिक शक्तिशाली GE-F414 इंजन, कैनार्ड्स और अधिक पेलोड) तथा 5वीं पीढ़ी के AMCA (Advanced Medium Combat Aircraft) के लिए आधारशिला।'
  },
  'astra-bvr': {
    programmeName: 'Astra Beyond Visual Range Air-to-Air Missile (BVRAAM)',
    leadAgency: 'Defence Research and Development Laboratory (DRDL) & RCI हैदराबाद',
    historicalBackground: 'आधुनिक हवाई युद्ध में दृश्य सीमा से परे (Beyond Visual Range - 50 से 160 किमी) लक्ष्य को नष्ट करने के लिए भारत पहले पूर्णतः विदेशी मिसाइलों (रूसी R-77 और फ्रांसीसी MICA) पर निर्भर था।',
    researchProblem: 'सुपरसोनिक गति (Mach 4.5+) पर अत्यधिक गतिशीलता (30g+ टर्न) बनाए रखने वाला स्वदेशी सॉलिड रॉकेट मोटर, सटीक इनर्शियल मिड-कोर्स नेविगेशन और मिलीमीटर-वेव सक्रिय रडार सीकर का निर्माण।',
    technologyDevelopment: 'डुअल-थ्रस्ट स्मोकलेस सॉलिड प्रोपल्शन, फाइबर ऑप्टिक जायरो बेस्ड INS, और टर्मिनल फेज में मीटर-स्तरीय सटीकता प्रदान करने वाला स्वदेशी Ku-बैंड एक्टिव रडार सीकर।',
    prototypeMilestone: 'सुखोई Su-30MKI फाइटर जेट से पहली सफल लाइव फायरिंग और अत्यधिक ऊंचाई पर युद्धाभ्यास कर रहे लक्ष्य का सीधा विनाश।',
    testingMethod: 'चांदीपुर स्थित इंटीग्रेटेड टेस्ट रेंज (ITR) पर विभिन्न ऊंचाई (1.5 किमी से 20 किमी) और प्रतिकूल मौसम में 30 से अधिक जटिल परीक्षण।',
    evaluationResults: 'Su-30MKI, LCA Tejas और मिग-29 विमानों के साथ डिजिटल एवियोनिक्स इंटरफेस का पूर्ण एकीकरण और 100% लक्ष्य भेदन।',
    productionScale: 'भारत डायनामिक्स लिमिटेड (BDL) द्वारा भारतीय वायुसेना और भारतीय नौसेना के लिए बड़े पैमाने पर बैच उत्पादन।',
    deploymentStatus: 'भारतीय वायुसेना के अग्रिम लड़ाकू स्क्वाड्रनों में सक्रिय सेवा में तैनात।',
    upgradesAndRoadmap: 'अस्त्र Mk-2 (160 किमी रेंज, डुअल पल्स मोटर) और अस्त्र Mk-3 (350 किमी रेंज, सॉलिड फ्यूल डक्टेड रैमजेट - SFDR तकनीक)।'
  },
  'uttam-radar': {
    programmeName: 'Uttam Active Electronically Scanned Array (AESA) Radar',
    leadAgency: 'Electronics and Radar Development Establishment (LRDE) बेंगलुरू',
    historicalBackground: 'पारंपरिक यांत्रिक रूप से स्कैन किए जाने वाले रडार (Mechanically Steered Radars) भारी होते हैं और एक समय में सीमित लक्ष्यों को ही ट्रैक कर सकते हैं। आधुनिक स्टेल्थ व इलेक्ट्रॉनिक जैमिंग के युग में AESA अनिवार्य हो गया।',
    researchProblem: 'हजारों स्वतंत्र गैलियम नाइट्राइड (GaN) या GaAs आधारित ट्रांसमिट/रिसीव (T/R) मॉड्यूल्स का निर्माण, अत्यधिक सघन थर्मल लिक्विड कूलिंग और माइक्रोसेकंड बीम स्टीयरिंग।',
    technologyDevelopment: 'डिजिटल बीमफॉर्मिंग, अल्ट्रा-लो साइडलोब एंटेना, हाई-पावर सॉलिड-स्टेट टी/आर मॉड्यूल्स और रीयल-टाइम डॉपलर सिग्नल प्रोसेसर का स्वदेशी विकास।',
    prototypeMilestone: 'LCA Tejas प्रोटोटाइप और एक्जीक्यूटिव जेट टेस्टबेड पर सफल एयरबोर्न उड़ान परीक्षण।',
    testingMethod: 'हवा-से-हवा (Air-to-Air Search & Track), हवा-से-जमीन सिंथेटिक एपर्चर रडार (SAR हाई-रिजॉल्यूशन मैपिंग), और समुद्री लक्ष्य ट्रैकिंग मोड्स का कठोर मूल्यांकन।',
    evaluationResults: '50 से अधिक लक्ष्यों को एक साथ ट्रैक करने और एक साथ 4 से अधिक लक्ष्यों पर बीवीआर मिसाइल फायर करने की क्षमता का सफल सत्यापन।',
    productionScale: 'BEL (भारत इलेक्ट्रॉनिक्स लिमिटेड) द्वारा विनिर्माण; LCA Tejas Mk1A के अंतिम लॉट और Tejas Mk2 में मानक रडार के रूप में चयन।',
    deploymentStatus: 'उड़ान परीक्षण पूर्ण; उत्पादन और लड़ाकू विमानों में एकीकरण के उन्नत चरण में।',
    upgradesAndRoadmap: 'सुखोई Su-30MKI के सुपर-सुखोई अपग्रेड के लिए विशालकाय ‘विरूपाक्ष’ AESA रडार और AMCA 5th Gen के लिए conformal GaN ऐरे का विकास।'
  },
  'pinaka-mbrl': {
    programmeName: 'Pinaka Multi-Barrel Rocket Launcher (MBRL) System',
    leadAgency: 'Armament Research & Development Establishment (ARDE) पुणे',
    historicalBackground: '1999 के कारगिल युद्ध के दौरान पारंपरिक तोपखाने की तुलना में दुश्मन के बंकरों और सघन फॉर्मेशन पर कम समय में भारी मारक क्षमता पहुंचाने की आवश्यकता तीव्रता से महसूस हुई।',
    researchProblem: '44 सेकंड में 12 रॉकेट्स को 40 से 90 किमी दूर शून्य विफलता के साथ दागने, त्वरित शूट-एंड-स्कूट क्षमता और जीपीएस/नाविक गाइडेड सटीकता का विकास।',
    technologyDevelopment: 'सॉलिड प्रोपेलेंट कंपोजिट मोटर, ऑटोमैटिक गन अलाइनमेंट एंड पोजिशनिंग सिस्टम (AGAPS), और कैनर्ड-बेस्ड ट्रैजेक्टरी करेक्शन सिस्टम (TCS)।',
    prototypeMilestone: 'कारगिल युद्ध में सफल परिचालन मूल्यांकन के बाद पिनाका Mk-1 का सेना में पहला सफल रेजिमेंटल इंडक्शन।',
    testingMethod: 'पोखरण और बालासोर में तापमान विविधता (-20°C से +55°C) में हजारों रॉकेट्स के साल्वो और गाइडेड परीक्षण।',
    evaluationResults: 'गाइडेड पिनाका ने 75+ किमी की दूरी पर 5 मीटर से भी कम CEP (सर्कुलर एरर प्रोबेबल) सटीकता हासिल की।',
    productionScale: 'टाटा एडवांस्ड सिस्टम्स और एलएंडटी (L&T) द्वारा लॉन्चर व कमांड पोस्ट्स तथा म्यूनिशन्स इंडिया लिमिटेड (MIL) द्वारा रॉकेट्स का पूर्ण निजी-सार्वजनिक उत्पादन।',
    deploymentStatus: 'भारतीय थलसेना की 10 से अधिक आर्टिलरी रेजिमेंट्स में पूरी तरह तैनात; आर्मेनिया जैसे मित्र देशों को ऐतिहासिक रक्षा निर्यात।',
    upgradesAndRoadmap: 'पिनाका Mk-2 (90 किमी रेंज), गाइडेड एक्सटेंडेड रेंज पिनाका (120 किमी), और एरिया डिनायल म्यूनिशन वारहेड्स।'
  },
  'amca-5th-gen': {
    programmeName: 'Advanced Medium Combat Aircraft (AMCA) 5th Gen Stealth Programme',
    leadAgency: 'Aeronautical Development Agency (ADA), DRDO & Indian Air Force',
    historicalBackground: 'भविष्य के अत्यधिक सघन वायु रक्षा क्षेत्रों (A2/AD) को भेदने और 2030 के बाद भारत की हवाई संप्रभुता सुनिश्चित करने के लिए 5वीं व 5.5वीं पीढ़ी के स्टेल्थ फाइटर का राष्ट्रीय मिशन।',
    researchProblem: 'अत्यंत निम्न रडार क्रॉस सेक्शन (Serpentine Air Intake, Internal Weapons Bay), सुपरक्रूज़, 110 kN थ्रस्ट क्लास का नेक्स्ट-जेन टर्बोफैन, और 360° मल्टी-स्पेक्ट्रल सेंसर फ्यूजन का विकास।',
    technologyDevelopment: 'DSI (Diverterless Supersonic Inlet), सर्पेन्टाइन एस-डक्ट एयर इनटेक (जो रडार से इंजन ब्लेड्स को छुपाता है), गैलियम नाइट्राइड (GaN) AESA रडार, और ऑटोमेटेड कार्बन कंपोजिट एयरफ्रेम।',
    prototypeMilestone: 'सुरक्षा मामलों की मंत्रिमंडलीय समिति (CCS) द्वारा मार्च 2024 में 15,000 करोड़ रुपये के पूर्ण विकास व 5 प्रोटोटाइप निर्माण को ऐतिहासिक मंजूरी।',
    testingMethod: 'पूर्ण आकार के रडार क्रॉस-सेक्शन (RCS) टेस्ट रिग, बंगलुरू स्थित विंड टनल में सुपरसोनिक परीक्षण, और आयरन बर्ड ग्राउंड सिमुलेटर पर फ्लाइट कंट्रोल परीक्षण।',
    evaluationResults: 'कंप्यूटर मॉडलिंग और स्केल मॉडल्स ने स्टेल्थ ज्यामिति, आंतरिक हथियार बे की संरचनात्मक अखंडता और सुपरक्रूज़ क्षमता का सफल प्रमाण दिया।',
    productionScale: 'सार्वजनिक-निजी भागीदारी (SPV मॉडल) के तहत HAL और भारतीय निजी एयरोस्पेस कंपनियों द्वारा बड़े पैमाने पर संयुक्त विनिर्माण।',
    deploymentStatus: 'प्रोटोटाइप निर्माण एवं धातु कटिंग का कार्य प्रगति पर; 2028-2029 में प्रथम उड़ान का लक्ष्य।',
    upgradesAndRoadmap: 'AMCA Mk-1 (GE-F414 इंजन) से आगे बढ़कर AMCA Mk-2 (स्वदेशी 110 kN इंजन, डायरेक्टेड एनर्जी लेजर वेपन्स, और 6th Gen AI लॉयल विंगमैन MUM-T क्षमता)।'
  },
  'kaveri-engine': {
    programmeName: 'Kaveri Gas Turbine Engine Programme & 110 kN Next-Gen Propulsion',
    leadAgency: 'Gas Turbine Research Establishment (GTRE), DRDO, Bengaluru',
    historicalBackground: '1986 में भारत ने स्वदेशी लड़ाकू विमान LCA तेजस के लिए 81 kN क्लास आफ्टरबर्निंग टर्बोफैन इंजन विकसित करने हेतु कावेरी कार्यक्रम शुरू किया। उस समय भारत के पास सैन्य एयरो-इंजन की मौलिक डिजाइन, सुपरअलॉय सामग्री और उच्च-तापमान परीक्षण सुविधाओं का अभाव था।',
    researchProblem: 'अत्यंत गर्म भारतीय मौसम (45°C+ तापमान व उच्च आर्द्रता) में 81 kN थ्रस्ट उत्पन्न करना, बिना विदेशी मदद के सिंगल-क्रिस्टल ब्लेड्स बनाना, और कम्बशन चैंबर व आफ्टरबर्नर में 1800K तापमान पर धातुओं को पिघलने से बचाना।',
    technologyDevelopment: 'GTRE ने DMRL हैदराबाद के साथ मिलकर स्वदेशी निकेल सुपरअलॉय, सिंगल-क्रिस्टल ब्लेड कास्टिंग, फ्लैट-रेटेड कंट्रोल लॉज, और भारत का पहला डुअल-चैनल स्वदेशी FADEC डिजिटल इंजन कंट्रोलर विकसित किया।',
    prototypeMilestone: '9 पूर्ण कावेरी प्रोटोटाइप्स और 4 कबीनी कोर इंजनों का निर्माण; रूस के ग्रोमोव फ्लाइट रिसर्च इंस्टीट्यूट में IL-76 फ्लाइंग टेस्टबेड पर 73 सफल उड़ानों (कुल 57 घंटे) में 12 किमी ऊंचाई तक परीक्षण।',
    testingMethod: 'बंगलुरू स्थित सी-लेवल टेस्ट फैसिलिटी (SLTB), रूस के मॉस्को में CIAM अल्टीट्यूड टेस्ट फैसिलिटी (ATF), और IL-76 फ्लाइंग टेस्टबेड पर वास्तविक उड़ान परीक्षण।',
    evaluationResults: 'कावेरी इंजन ने 70.4 kN से 74 kN का वेट थ्रस्ट हासिल किया, जो तेजस Mk1 की तत्कालीन 81-85 kN की आवश्यकता से थोड़ा कम था, परंतु इसने भारत को सैन्य प्रोपल्शन का अमूल्य तकनीकी आधार दिया।',
    productionScale: 'कावेरी के नॉन-आफ्टरबर्निंग संस्करण ‘ड्राई कावेरी’ (46 से 50 kN) का सफल पुनर्जन्म हुआ, जिसने भारत के गुप्त स्टेल्थ फ्लाइंग-विंग लड़ाकू ड्रोन ‘घातक’ (Ghatak UCAV / SWiFT) को शक्ति दी।',
    deploymentStatus: 'ड्राई कावेरी का प्रोटोटाइप उत्पादन HAL इंजन डिवीजन द्वारा जारी; भारतीय नौसेना के फ्रिगेट्स हेतु मरीन गैस टर्बाइन (KMGT) का सफल विकास।',
    upgradesAndRoadmap: '5वीं व 5.5वीं पीढ़ी के AMCA फाइटर जेट के लिए फ्रांस (Safran) / यूके (Rolls-Royce) के साथ 100% टेक्नोलॉजी ट्रांसफर और संयुक्त IP के तहत 110-120 kN के नए स्वदेशी टर्बोफैन का विकास।'
  }
};

// ==========================================
// 3. SAFE PRACTICAL PROJECTS WITH SIMULATORS
// ==========================================
export const SAFE_PRACTICAL_PROJECTS: SafePracticalProject[] = [
  {
    id: 'proj-uav-sim',
    title: 'शैक्षणिक UAV फ्लाइट कंट्रोलर व डायनामिक्स सिमुलेटर',
    category: 'Flight Dynamics & Control',
    objective: 'क्वाड्रोटर ड्रोन के 6-DOF (Degrees of Freedom) समीकरणों, PID लूप ट्यूनिंग और रीयल-टाइम एयरोडायनामिक ड्रैग को समझना।',
    requiredLearning: [
      'न्यूटन-यूलर समीकरण (रोल, पिच, यॉ गतिकी)',
      'PID कंट्रोल थ्योरी (Proportional-Integral-Derivative)',
      'ब्रशलेस मोटर थ्रस्ट गुणांक एवं रोटर एयरोडायनामिक्स'
    ],
    systemArchitecture: [
      'सेंसर स्तर: 3-एक्सिस जायरोस्कोप + एक्सेलेरोमीटर (IMU)',
      'प्रोसेसर स्तर: STM32 / Arduino आधारित फ्लाइट कंट्रोलर लूप (400 Hz)',
      'एक्चुएटर स्तर: इलेक्ट्रॉनिक स्पीड कंट्रोलर (ESC) एवं मोटर पल्स विड्थ'
    ],
    softwareOrSimulation: 'Python / JavaScript 2D-3D फिजिक्स कैनवास या MATLAB Simulink फ्लाइट सिमुलेशन।',
    implementationConcept: 'ड्रोन पर लगने वाले ग्रेविटी, थ्रस्ट और ड्रैग बलों का संतुलन बनाकर कीबोर्ड द्वारा रोल, पिच और थ्रोटल को नियंत्रित करना।',
    testing: [
      'स्टेप रिस्पॉन्स टेस्ट: 10 डिग्री का डिस्टर्बेंस देकर स्टेबिलाइजेशन टाइम मापना।',
      'विंड गस्ट टेस्ट: अचानक पार्श्व हवा के झोंके में होवर ड्रिफ्ट का विश्लेषण करना।'
    ],
    expectedResult: 'संतुलित PID मानों (Kp=2.4, Ki=0.05, Kd=1.1) पर ड्रोन 0.8 सेकंड में स्थिर होवर अवस्था प्राप्त करता है।',
    troubleshooting: [
      { issue: 'ड्रोन अत्यधिक कांपता (oscillate) है', resolution: 'डेरिवेटिव गेन (Kd) को थोड़ा बढ़ाएं या प्रोपोर्शनल गेन (Kp) को कम करें।' },
      { issue: 'ड्रोन स्थिर ऊंचाई बनाए रखने में विफल रहता है', resolution: 'इंटीग्रल गेन (Ki) जोड़ें ताकि स्थिर-अवस्था त्रुटि (Steady-state error) समाप्त हो।' }
    ],
    furtherImprovements: ['GPS वेपॉइंट ऑटोनॉमस नेविगेशन और ऑब्स्टेकल अवॉइडेंस जोड़ना।'],
    interactiveSimulatorType: 'uav-flight'
  },
  {
    id: 'proj-radar-sim',
    title: 'पल्स डॉपलर रडार रेंज व वेलोसिटी सिमुलेटर',
    category: 'Radar & Signal Processing',
    objective: 'रडार रेंज समीकरण, पल्स रिपीटीशन फ्रीक्वेंसी (PRF) और डॉपलर फ्रीक्वेंसी शिफ्ट के आधार पर विमान की गति व दूरी मापना।',
    requiredLearning: [
      'रडार रेंज समीकरण: R = [(Pt * G^2 * λ^2 * σ) / ((4π)^3 * Smin)]^(1/4)',
      'डॉपलर प्रभाव: fd = 2 * v * cos(θ) / λ',
      'फास्ट फूरियर ट्रांसफॉर्म (FFT) द्वारा सिग्नल से शोर (Noise) अलग करना'
    ],
    systemArchitecture: [
      'सिग्नल जनरेटर: ट्रांसमीटर RF पल्स (X-बैंड 10 GHz)',
      'एंटीना मॉडल: 3dB बीमविड्थ और डायरेक्टिविटी गेन',
      'रिसीवर व डीएसपी: डिजिटल डाउन-कन्वर्जन (DDC) और 1024-पॉइंट FFT'
    ],
    softwareOrSimulation: 'GNU Radio / Web Audio API / इंटरएक्टिव कैनवास ग्राफ।',
    implementationConcept: 'एक गतिमान वर्चुअल लक्ष्य से परावर्तित सिग्नल पर थर्मल नॉइज़ जोड़कर रिसीवर में डॉपलर पीक को पहचानना।',
    testing: [
      'विभिन्न RCS (रडार क्रॉस सेक्शन 0.001 m² से 5 m²) पर डिटेक्शन रेंज की जांच।',
      'सिग्नल-टू-नॉइज़ रेशियो (SNR) सीमा का सत्यापन।'
    ],
    expectedResult: '0.1 m² के छोटे लक्ष्य को भी 60 किमी की दूरी पर 12 dB SNR के साथ स्पष्ट रूप से डिटेक्ट करना।',
    troubleshooting: [
      { issue: 'रेंज एंबिग्युइटी (दूरी का भ्रम)', resolution: 'मल्टीपल PRF (स्टैग्गर्ड पल्स) का उपयोग करके अनएंबिग्यूस रेंज की गणना करें।' },
      { issue: 'ग्राउंड क्लटर के कारण लक्ष्य छिपना', resolution: 'मूविंग टारगेट इंडिकेशन (MTI) हाई-पास क्लटर फिल्टर सक्रिय करें।' }
    ],
    furtherImprovements: ['AESA इलेक्ट्रॉनिक बीम स्टीयरिंग और ट्रैक-व्हाइल-स्कैन (TWS) एल्गोरिदम जोड़ना।'],
    interactiveSimulatorType: 'radar'
  },
  {
    id: 'proj-sensor-fusion',
    title: 'सेंसर फ्यूजन एवं एक्सटेंडेड कलमन फिल्टर (EKF) प्रयोगशाला',
    category: 'Avionics & Navigation',
    objective: 'अत्यधिक शोर वाले GPS और ड्रिफ्ट होने वाले IMU डेटा को जोड़कर सटीक स्थिति (Position) और वेग (Velocity) का अनुमान लगाना।',
    requiredLearning: [
      'स्टेट-स्पेस मॉडलिंग (State-Space Matrix Representation)',
      'कोवेरिएंस मैट्रिक्स और कलमन गेन (Kalman Gain) गणना',
      'सेंसर फ्यूजन: IMU (उच्च गति, अधिक ड्रिफ्ट) + GPS (धीमा 5Hz, शून्य ड्रिफ्ट)'
    ],
    systemArchitecture: [
      'इनपुट 1: सिम्युलेटेड 6-DOF IMU (एक्सेलेरेशन + एंगुलर रेट, 200 Hz)',
      'इनपुट 2: सिम्युलेटेड GNSS/NAVIC पल्स (5 Hz, गॉसियन नॉइज़ ±2.5m)',
      'फ्यूजन इंजन: 15-स्टेट कलमन फिल्टर कोर'
    ],
    softwareOrSimulation: 'Python NumPy / JavaScript Matrix Engine',
    implementationConcept: 'जब GPS सिग्नल कुछ सेकंड के लिए कट जाता है (GPS-Denied), तब केवल IMU से डेड-रेकनिंग द्वारा स्थिति को ट्रैक करना।',
    testing: [
      'GPS आउटेज टेस्ट: 10 सेकंड तक GPS डेटा ब्लॉक करके पोजीशन एरर मापना।',
      'वाइब्रेशन नॉइज़ टेस्ट: मोटर कंपन के बीच शुद्ध उड़ान पथ निकालना।'
    ],
    expectedResult: 'कच्चे सेंसर डेटा की तुलना में 78% कम त्रुटि और 0.4 मीटर के भीतर सटीक स्थिति ट्रैकिंग।',
    troubleshooting: [
      { issue: 'कलमन फिल्टर डाइवर्ज (diverge) हो रहा है', resolution: 'प्रोसेस नॉइज़ कोवेरिएंस Q और मेजरमेंट नॉइज़ R मैट्रिक्स को सही ट्यून करें।' }
    ],
    furtherImprovements: ['ऑप्टिकल फ्लो कैमरा और टेरेन रेफरेंस नेविगेशन (TRN) का एकीकरण।'],
    interactiveSimulatorType: 'sensor-fusion'
  },
  {
    id: 'proj-control-loop',
    title: 'क्वाड-रिडंडेंट फ्लाई-बाय-वायर फीडबैक कंट्रोल लूप',
    category: 'Control Systems',
    objective: 'फाइटर जेट के अस्थिर वायुगतिकीय व्यवहार को फ्लाई-बाय-वायर ऑटोपायलट द्वारा स्थिर करना।',
    requiredLearning: [
      'ट्रांसफर फंक्शन और रूट लोकस (Root Locus) स्थिरता विश्लेषण',
      'विमान की लॉन्गिट्यूडनल गति (Short Period & Phugoid modes)',
      'मेच्योरिटी वोटिंग लॉजिक (Fault-Tolerant Redundancy)'
    ],
    systemArchitecture: [
      'पायलट स्टिक इनपुट (हॉल-इफेक्ट डुअल सेंसर)',
      'चार स्वतंत्र फ्लाइट कंट्रोल कंप्यूटर (FCC 1, 2, 3, 4)',
      'इलेक्ट्रो-हाइड्रोलिक सर्वो एक्चुएटर (एलेवॉन व रडर कंट्रोल)'
    ],
    softwareOrSimulation: 'कंट्रोल थ्योरी टाइम-डोमेन स्टेप रिस्पॉन्स सिमुलेटर।',
    implementationConcept: 'यदि 4 में से 1 कंप्यूटर गलत डेटा देने लगे, तो शेष 3 कंप्यूटर वोटिंग लॉजिक द्वारा उसे निष्प्रभावी कर देते हैं।',
    testing: [
      'सिस्टम इंजेक्शन टेस्ट: चैनल 2 पर जानबूझकर एरर इंजेक्ट करके विमान की स्थिरता जांचना।'
    ],
    expectedResult: 'विमान बिना किसी झटके के 0.05 सेकंड में सामान्य उड़ान प्रोफाइल बनाए रखता है।',
    troubleshooting: [
      { issue: 'कंट्रोलर में लैग या फेज़ मार्जिन कम होना', resolution: 'लीड-लैग कम्पेन्सेटर जोड़कर फेज़ मार्जिन को 45 डिग्री से ऊपर बनाए रखें।' }
    ],
    furtherImprovements: ['H-infinity रोबस्ट कंट्रोल एल्गोरिदम का समावेश।'],
    interactiveSimulatorType: 'control-loop'
  },
  {
    id: 'proj-jet-engine-sim',
    title: 'आफ्टरबर्निंग टर्बोफैन इंजन FADEC व ब्रेटन चक्र थर्मोडायनामिक सिमुलेटर',
    category: 'Gas Turbine Propulsion & FADEC',
    objective: 'लो-बाईपास आफ्टरबर्निंग टर्बोफैन के थर्मोडायनामिक ब्रेटन चक्र (Brayton Cycle), टर्बाइन इनलेट टेम्परेचर (TIT), N1/N2 स्पूल RPM, विशिष्ट ईंधन खपत (SFC) और 3D थ्रस्ट वेक्टरिंग डायनामिक्स का अध्ययन।',
    requiredLearning: [
      'ब्रेटन चक्र समीकरण: थ्रस्ट F = m_dot * (V_exit - V_inlet) + (P_exit - P_amb) * A_exit',
      'कंप्रेसर प्रेशर रेशियो (OPR 28:1) और सर्ज मार्जिन (> 20%)',
      'सिंगल-क्रिस्टल टर्बाइन कूलिंग इफेक्टिवनेस और थर्मल बैरियर कोटिंग (TBC) मार्जिन',
      'आफ्टरबर्नर रीहीट कम्बशन और कम्बशन स्क्रीच डैम्पिंग'
    ],
    systemArchitecture: [
      'इनपुट सेंसर स्तर: थ्रॉटल लिवर एंगल (TLA 0-110%), इनलेट टेम्परेचर T1, N1/N2 स्पीड सेंसर्स',
      'प्रोसेसर स्तर: डुअल-चैनल FADEC (32-बिट माइक्रो-कंट्रोलर लूप 10 ms)',
      'एक्चुएटर स्तर: हाइड्रो-मैकेनिकल फ्यूल मीटरिंग यूनिट (FMU) एवं वेरिएबल नोजल एक्चुएटर्स'
    ],
    softwareOrSimulation: 'कम्प्यूटेशनल गैस टर्बाइन थर्मोडायनामिक डिजिटल-ट्विन सिमुलेटर।',
    implementationConcept: 'थ्रॉटल को आइडल (Idle 10%) से ड्राई मिलिट्री पावर (100%) और आफ्टरबर्नर (110%) पर ले जाने पर थ्रस्ट, फ्यूल फ्लो और टर्बाइन तापमान के वास्तविक परिवर्तन को देखना।',
    testing: [
      'आफ्टरबर्नर स्लैम टेस्ट: आइडल से फुल रीहीट 3.8 सेकंड में ले जाना और कंप्रेसर सर्ज मार्जिन की जांच।',
      'थर्मल लिमिट टेस्ट: TIT को 1900 K पर ले जाकर सिंगल क्रिस्टल ब्लेड कूलिंग मार्जिन का सत्यापन।'
    ],
    expectedResult: 'फुल आफ्टरबर्नर पर 82 kN (ग्रोथ 110 kN) थ्रस्ट, 1900 K टर्बाइन गैस तापमान के बावजूद ब्लेड तापमान 1100°C के भीतर सुरक्षित रहता है।',
    troubleshooting: [
      { issue: 'कंप्रेसर में सर्ज (Surge) का खतरा', resolution: 'वेरिएबल स्टेटर वेन्स (VSV) के कोण को स्वतः री-एडजस्ट करें और ब्लीड वाल्व खोलें।' },
      { issue: 'टर्बाइन ओवर-टेम्परेचर अलार्म', resolution: 'FADEC द्वारा फ्यूल फ्लो को तात्कालिक रूप से सीमित करें और कूलिंग एयर मास फ्लो बढ़ाएं।' }
    ],
    furtherImprovements: ['थ्री-स्ट्रीम एडैप्टिव साइकिल इंजन (ACE) वेरिएबल बाईपास मॉडल जोड़ना।'],
    interactiveSimulatorType: 'digital-twin'
  }
];

// ==========================================
// 4. EDUCATIONAL DIAGRAMS CATALOG
// ==========================================
export const EDUCATIONAL_DIAGRAMS: EducationalDiagram[] = [
  {
    id: 'diag-jet-engine',
    title: 'Fighter Low-Bypass Turbofan Engine Gas Flow Architecture',
    type: 'aircraft',
    description: 'सुपरसोनिक इनटेक से लेकर फैन ब्लिस्क, हाई-प्रेशर कंप्रेसर, कम्बस्टर, सिंगल क्रिस्टल टर्बाइन, आफ्टरबर्नर और 3D TVC नोजल तक का संपूर्ण आंतरिक गैस प्रवाह आर्किटेक्चर।',
    nodes: [
      { id: 'dsi', label: '1. Supersonic DSI Intake', role: 'Inlet Air', details: 'बाउंड्री लेयर बंप हवा को संपीड़ित करता है और सेरपेन्टाइन डक्ट रडार से कंप्रेसर को छुपाता है।' },
      { id: 'fan', label: '2. 3-Stage Transonic Blisk', role: 'LP Compressor (N1)', details: 'सॉलिड टाइटेनियम ब्लिस्क हवा को 3.8 गुना संपीड़ित कर बाईपास डक्ट व कोर में बांटता है।' },
      { id: 'hpc', label: '3. 6-Stage HPC with VSV', role: 'HP Compressor (N2)', details: 'वेरिएबल स्टेटर वेन्स युक्त 6 चरण जो समग्र दबाव को 32:1 (3.2 MPa) तक पहुंचाते हैं।' },
      { id: 'cmb', label: '4. Annular Low-NOx Combustor', role: 'Combustion', details: '16x एयर-ब्लास्ट नोजल्स ईंधन वाष्पीकृत कर गैस तापमान को 1850-1950 K तक ले जाते हैं।' },
      { id: 'hpt', label: '5. SX Cooled HP Turbine', role: 'Expansion & Power', details: 'सिंगल-क्रिस्टल CMSX-4 ब्लेड्स 32,000 RPM पर कंप्रेसर को 28,000 HP की शक्ति देते हैं।' },
      { id: 'lpt', label: '6. LP Turbine Spool', role: 'Fan Drive', details: 'गैस विस्तार की शेष ऊर्जा से फ्रंट फैन ब्लिस्क (N1 स्पूल) और एक्सेसरी गियरबॉक्स को घुमाना।' },
      { id: 'ab', label: '7. Reheat Afterburner', role: 'Combat Boost', details: 'V-गटर फ्लेमहोल्डर्स में अतिरिक्त ईंधन छिड़काव; तापमान 2200 K; थ्रस्ट में +60% की वृद्धि।' },
      { id: 'tvc', label: '8. 3D Con-Di TVC Nozzle', role: 'Vectoring & Thrust', details: 'सुपरसोनिक विस्तार और ±20° 3D थ्रस्ट वेक्टरिंग द्वारा पोस्ट-स्टॉल युद्धाभ्यास।' }
    ],
    connections: [
      { from: 'dsi', to: 'fan', label: 'Mach 0.5 Diffused Air' },
      { from: 'fan', to: 'hpc', label: 'Core Flow (70% Air)' },
      { from: 'hpc', to: 'cmb', label: 'High Pressure 3.2 MPa' },
      { from: 'cmb', to: 'hpt', label: '1900 K Hot Gas' },
      { from: 'hpt', to: 'lpt', label: 'Drives HP Shaft (N2)' },
      { from: 'lpt', to: 'ab', label: 'Drives Fan Shaft (N1)' },
      { from: 'ab', to: 'tvc', label: '2200 K Supersonic Exhaust' }
    ]
  },
  {
    id: 'diag-lifecycle',
    title: 'Defence Technology Lifecycle: 8-Phase Pipeline',
    type: 'lifecycle',
    description: 'रक्षा प्रणाली के विचार से लेकर रिटायरमेंट तक का संपूर्ण सिस्टम्स इंजीनियरिंग जीवनचक्र।',
    nodes: [
      { id: '1', label: '1. Research & Analysis', role: 'Foundation', details: 'थ्रेट एनालिसिस, मौलिक भौतिकी अनुसंधान और परिचालन आवश्यकताएं (QR)।' },
      { id: '2', label: '2. Conceptual Design', role: 'Design', details: '3D सॉलिड मॉडलिंग, ट्रेड-ऑफ स्टडीज और आर्किटेक्चरल फ्रेमवर्क।' },
      { id: '3', label: '3. Simulation & CFD', role: 'Digital Twin', details: 'हाई-फिडेलिटी कम्प्यूटेशनल फ्लूइड डायनामिक्स, थर्मल और ईएम सिमुलेशन।' },
      { id: '4', label: '4. Prototype Fab', role: 'Prototyping', details: 'टेक्नोलॉजी डिमॉन्स्ट्रेटर (TD), कार्बन कंपोजिट मोल्डिंग और हार्डवेयर बोर्ड्स।' },
      { id: '5', label: '5. Lab & Env Testing', role: 'Testing', details: 'MIL-STD-810G कंपन, थर्मल शॉक, एनेकोइक चैंबर और ईएमआई/ईएमसी।' },
      { id: '6', label: '6. Field Trials', role: 'Validation', details: 'लेह, पोखरण और चांदीपुर आईटीआर पर लाइव फायरिंग और उपयोगकर्ता मूल्यांकन।' },
      { id: '7', label: '7. Serial Production', role: 'Manufacturing', details: 'HAL, BEL, BDL व निजी रक्षा इकोसिस्टम द्वारा गुणवत्तापूर्ण विनिर्माण।' },
      { id: '8', label: '8. Upgrade & Mid-Life', role: 'Lifecycle', details: 'मॉड्यूलर ओपन आर्किटेक्चर के माध्यम से नए रडार, इंजन व एवियोनिक्स जोड़ना।' }
    ],
    connections: [
      { from: '1', to: '2', label: 'Specs Approved' },
      { from: '2', to: '3', label: 'CAD to Mesh' },
      { from: '3', to: '4', label: 'Sim Validated' },
      { from: '4', to: '5', label: 'Hardware Ready' },
      { from: '5', to: '6', label: 'Cleared for Range' },
      { from: '6', to: '7', label: 'Induction Granted' },
      { from: '7', to: '8', label: 'Operational Fleet' }
    ]
  },
  {
    id: 'diag-generic-arch',
    title: 'Generic Defence Platform System Architecture',
    type: 'generic-arch',
    description: 'आधुनिक रक्षा प्लेटफॉर्म्स की 5-स्तरीय मॉड्यूलर आर्किटेक्चरल परतें।',
    nodes: [
      { id: 's', label: '1. Sensor Suite', role: 'Input', details: 'AESA Radar, EO/IR Cameras, ESM/RWR, Laser Rangefinders.' },
      { id: 'c', label: '2. Communication & Link', role: 'Transport', details: 'MIL-STD-1553B / Ethernet, Tactical Data Link, Satcom.' },
      { id: 'f', label: '3. Data Fusion & C2', role: 'Core', details: 'Multi-Sensor Tracking, Kalman Filter, Mission Computer.' },
      { id: 'g', label: '4. Guidance & Control', role: 'Intelligence', details: 'Flight Control Computers, Inertial Nav, Autopilot, Trajectory Calc.' },
      { id: 'a', label: '5. Actuation & Effectors', role: 'Output', details: 'Hydraulic/Electro-mechanical Actuators, Propulsion Throttle, Countermeasures.' }
    ],
    connections: [
      { from: 's', to: 'c', label: 'Raw Signals' },
      { from: 'c', to: 'f', label: 'Synchronized Telemetry' },
      { from: 'f', to: 'g', label: 'Threat Priority & Trajectory' },
      { from: 'g', to: 'a', label: 'Deflection Commands' }
    ]
  },
  {
    id: 'diag-radar',
    title: 'AESA Radar Functional Pipeline',
    type: 'radar',
    description: 'सॉलिड-स्टेट T/R मॉड्यूल्स से लेकर डिजिटल बीमफॉर्मिंग और लक्ष्य ट्रैकिंग तक।',
    nodes: [
      { id: 'exc', label: 'Direct Digital Synthesizer', role: 'Exciter', details: 'सटीक माइक्रोवेव कैरियर वेव जनरेशन (X-बैंड 8-12 GHz)।' },
      { id: 'tr', label: 'GaN T/R Modules Array', role: 'Antenna Array', details: 'हजारों स्वतंत्र ट्रांसमिट/रिसीव एलिमेंट्स जो इलेक्ट्रॉनिक बीम स्टीयरिंग करते हैं।' },
      { id: 'lna', label: 'Low Noise Amplifiers', role: 'RF Front-End', details: 'कमजोर ईको सिग्नलों को बिना शोर बढ़ाए आवर्धित करना।' },
      { id: 'adc', label: 'High-Speed Ultra ADCs', role: 'Digitizer', details: 'गीगा-सैंपल प्रति सेकंड एनालॉग-टू-डिजिटल रूपांतरण।' },
      { id: 'dsp', label: 'Doppler Signal Processor', role: 'DSP Core', details: '1024-Point FFT, MTI क्लटर रिजेक्शन और रेंज-डॉपलर मैट्रिक्स निर्माण।' },
      { id: 'trk', label: 'Track-While-Scan (TWS)', role: 'Output', details: 'टारगेट वेलोसिटी, रेंज, ऊंचाई और ट्रैक आईडी का कॉकपिट डिस्प्ले।' }
    ],
    connections: [
      { from: 'exc', to: 'tr', label: 'RF Drive' },
      { from: 'tr', to: 'lna', label: 'Target Reflection' },
      { from: 'lna', to: 'adc', label: 'Amplified Echo' },
      { from: 'adc', to: 'dsp', label: 'Digital I/Q Data' },
      { from: 'dsp', to: 'trk', label: 'Filtered Kinematics' }
    ]
  },
  {
    id: 'diag-uav',
    title: 'Autonomous UAV & Edge-AI Mission Architecture',
    type: 'uav',
    description: 'जीपीएस-डिनाइड वातावरण में स्वायत्त उड़ान और दृष्टि-आधारित नेविगेशन।',
    nodes: [
      { id: 'sens', label: 'Payload & Sensors', role: 'Perception', details: 'EO/IR Gimbal, LiDAR, Stereo Depth Cameras, IMU.' },
      { id: 'slam', label: 'Visual Inertial Odometry (VIO)', role: 'Localization', details: 'कैमरा फ्रेम फीचर्स और IMU से अपनी सटीक स्थिति का बिना GPS के अनुमान।' },
      { id: 'edge', label: 'Edge-AI Neural Processor', role: 'Intelligence', details: 'रीयल-टाइम ऑब्जेक्ट क्लासिफिकेशन (YOLO/TensorRT on Jetson)।' },
      { id: 'path', label: 'Autonomous Path Planner', role: 'Navigation', details: 'A* और RRT* एल्गोरिदम द्वारा गतिशील बाधाओं से बचते हुए मार्ग बनाना।' },
      { id: 'fcc', label: 'Quad-Rotor Flight Controller', role: 'Actuation', details: '400 Hz PID मोटर स्पीड नियंत्रण और स्टेबिलाइजेशन।' }
    ],
    connections: [
      { from: 'sens', to: 'slam', label: 'Visual + IMU Stream' },
      { from: 'sens', to: 'edge', label: 'Raw Video Frames' },
      { from: 'slam', to: 'path', label: 'Current 3D Pose' },
      { from: 'edge', to: 'path', label: 'Obstacle / Target Coordinates' },
      { from: 'path', to: 'fcc', label: 'Velocity Vector Commands' }
    ]
  }
];

// ==========================================
// 5. HELPER GENERATORS TO ENRICH ANY CHAPTER
// ==========================================
export function generateChapterRecipe(chapterNumber: number, title: string, keyTopics: string[]): EngineeringRecipe17 {
  const top1 = keyTopics[0] || 'सिस्टम्स आर्किटेक्चर';
  const top2 = keyTopics[1] || 'सेंसर व सिग्नल प्रोसेसिंग';
  const top3 = keyTopics[2] || 'कंट्रोल एल्गोरिदम';

  return {
    problem: `पारंपरिक प्रणालियों में उच्च गति, तीव्र इलेक्ट्रोमैग्नेटिक व्यवधान (EMI) और प्रतिकूल मौसम के दौरान ${title} की कार्यक्षमता और उत्तरजीविता सीमित हो जाती है।`,
    objective: `एक उच्च-विश्वसनीय, बहु-स्तरीय सुरक्षा और वास्तविक समय (Real-Time) में त्रुटिहीन प्रतिक्रिया देने वाली स्वदेशी ${title} प्रणाली का डिजाइन, सिमुलेशन और सत्यापन करना।`,
    scientificPrinciples: [
      `${top1} के मूलभूत भौतिक व गणितीय समीकरण (Conservation of Momentum, Maxwell's Equations, Nav-Stokes Laws).`,
      `थर्मो-मैकेनिकल तनाव एवं गतिशील कंपन भार (Dynamic Vibration Fatigue Limits) के तहत संरचनात्मक अखंडता।`,
      `डिजिटल सिग्नल प्रोसेसिंग (DSP) और अल्ट्रा-लो लेटेंसी (<5ms) एम्बेडेड डेटा बस इंटरफेसिंग।`
    ],
    systemRequirements: [
      'परिचालन तापमान: -40°C से +55°C (सियाचिन से थार मरुस्थल तक)।',
      'कंपन व शॉक सहनशीलता: 30g से 50g एयरोस्पेस-ग्रेड मानक।',
      'SWaP-C अनुकूलन: साइज, वजन, विद्युत खपत (Power) और लागत का न्यूनतमकरण।'
    ],
    systemArchitecture: `प्रणाली को तीन मॉड्यूलर परतों में विभाजित किया गया है: (1) उच्च-संवेदनशील इनपुट सेंसर स्टेज, (2) रिडंडेंट डिजिटल सिग्नल व मिशन प्रोसेसिंग कोर, और (3) उच्च-परिशुद्धता एक्चुएशन व आउटपुट मॉड्यूल।`,
    majorSubsystems: [
      { name: `${top1} मॉड्यूल`, specs: 'MIL-STD-810G प्रमाणित', function: 'पर्यावरणीय डेटा संग्रहण और तात्कालिक सिग्नल कंडीशनिंग।' },
      { name: `${top2} प्रोसेसिंग यूनिट`, specs: 'डुअल-कोर 32-बिट रीयल-टाइम डीएसपी', function: 'फिल्टरिंग, कलमन फ्यूजन और त्रुटि सुधार एल्गोरिदम।' },
      { name: `${top3} एक्चुएटर इंटरफेस`, specs: 'ऑप्टो-आइसोलेटेड CAN/1553B बस', function: 'यांत्रिक, विद्युत या इलेक्ट्रोमैग्नेटिक आउटपुट निष्पादन।' }
    ],
    engineeringDesignProcess: 'आवश्यकताओं के विश्लेषण (Requirements Analysis) से शुरू होकर 3D CAD सॉलिड मॉडलिंग, टॉलरेंस एनालिसिस और थर्मल डिशिपेशन प्रोफाइलिंग तक चरणबद्ध विकास।',
    simulationAndModelling: [
      { tool: 'ANSYS Fluent / OpenFOAM', method: 'Finite Volume Method (FVM)', focusArea: 'एयरोडायनामिक ड्रैग, शॉक वेव संरचना व थर्मल प्रवाह।' },
      { tool: 'MATLAB / Simulink', method: 'State-Space Time Domain', focusArea: 'कंट्रोल लूप की स्थिरता, फेज मार्जिन और क्षणिक प्रतिक्रिया।' },
      { tool: 'CST Studio Suite', method: 'Finite Integration Technique', focusArea: 'इलेक्ट्रोमैग्नेटिक कम्पैटिबिलिटी (EMC) एवं रडार क्रॉस-सेक्शन (RCS)।' }
    ],
    materialsAndManufacturing: [
      'एयरोस्पेस ग्रेड कार्बन-फाइबर रीइन्फोर्स्ड पॉलीमर (CFRP) उच्च शक्ति-से-वजन अनुपात के लिए।',
      'एवियोनिक्स हाउसिंग के लिए टाइटेनियम ग्रेड 5 और एनोडाइज्ड एरोनॉटिकल एल्युमिनियम मिश्रधातुएं (7075-T6)।',
      '5-एक्सिस हाई-प्रिसिजन सीएनसी मशीनिंग और सोल्डरिंग के लिए MIL-PRF-31032 क्लास 3 मुद्रित सर्किट बोर्ड।'
    ],
    prototypeDevelopment: 'टेक्नोलॉजी डिमॉन्स्ट्रेटर (TD) स्तर पर ब्रेडबोर्ड हार्डवेयर, 3D प्रिंटेड स्केल मॉडल और पवन सुरंग (Wind Tunnel) परीक्षण मॉडल का निर्माण।',
    testingMethodology: [
      { testName: 'थर्मल वैक्यूम व क्लाइमेटिक टेस्ट', procedure: 'तापमान को -40°C से +85°C तक चक्रित करना', criteria: 'शून्य सिग्नल गिरावट व कोई भौतिक विकृति नहीं।' },
      { testName: 'हार्डवेयर-इन-द-लूप (HIL) सिमुलेशन', procedure: 'सिम्युलेटेड सेंसर इनपुट्स के साथ वास्तविक हार्डवेयर की जांच', criteria: 'लेटेंसी 2 मिलीसेकंड से कम और 100% कमांड निष्पादन।' }
    ],
    failureAnalysis: [
      'FMEA (विफलता मोड और प्रभाव विश्लेषण): प्रत्येक संभावित विफलता बिंदु का पूर्वानुमान।',
      'थर्मल ओवरहीटिंग के मामले में स्वचालित क्लॉक थ्रॉटलिंग और बैकअप चैनल पर स्विचिंग।'
    ],
    validation: 'प्रायोगिक परीक्षण स्थलों पर लाइव फायरिंग, कैप्टिव फ्लाइट ट्रायल्स और ऑपरेटर फीडबैक के आधार पर डिजाइन का पूर्ण सत्यापन।',
    qualityAssurance: 'AS9100D एयरोस्पेस गुणवत्ता प्रबंधन, 100% एक्स-रे एवं अल्ट्रासोनिक गैर-विनाशकारी परीक्षण (NDT)।',
    maintenance: 'लाइन रिप्लेसेबल यूनिट (LRU) डिजाइन जिससे किसी भी खराब घटक को अग्रिम मोर्चे पर 15 मिनट में बदला जा सके।',
    upgradePath: 'ओपन-सिस्टम आर्किटेक्चर (MOSA) ताकि भविष्य में बिना पूरे हार्डवेयर को बदले नए प्रोसेसर और सेंसर जोड़े जा सकें।',
    futureTechnology: 'संज्ञानात्मक एआई (Cognitive AI), क्वांटम एनक्रिप्शन और अगली पीढ़ी के डायरेक्टेड एनर्जी सिस्टम्स के साथ समन्वय।'
  };
}

export function generateChapterLearningLevels(chapterNumber: number, title: string, keyTopics: string[]): LearningLevel[] {
  const t1 = keyTopics[0] || 'मूलभूत अवधारणा';
  const t2 = keyTopics[1] || 'इंजीनियरिंग नियम';
  const t3 = keyTopics[2] || 'सिस्टम एकीकरण';

  return [
    {
      levelNumber: 1,
      levelName: 'LEVEL 1 — Beginner Foundation',
      focus: 'मौलिक अवधारणाओं और बुनियादी शब्दावली की समझ',
      summary: `यह स्तर ${title} के बुनियादी अर्थ, ऐतिहासिक पृष्ठभूमि और रक्षा क्षेत्र में इसके प्राथमिक उपयोग को सरल उदाहरणों के साथ समझाता है।`,
      keyConcepts: [
        `${title} का उद्देश्य और आधुनिक सुरक्षा में इसकी आवश्यकता।`,
        'सामान्य नागरिक प्रौद्योगिकी और रक्षा इंजीनियरिंग के बीच बुनियादी अंतर।',
        'प्रणाली के प्रमुख घटक और उनका प्राथमिक कार्य।'
      ],
      technicalVocabulary: [
        { term: 'Payload', meaning: 'वह उपकरण, सेंसर या उपकरण जो मिशन के मुख्य उद्देश्य को पूरा करने के लिए ले जाया जाता है।' },
        { term: 'Redundancy', meaning: 'विफलता से बचने के लिए एक ही कार्य के लिए बैकअप प्रणालियों की उपस्थिति।' }
      ],
      learningCheck: [
        { question: `${title} का मुख्य उद्देश्य क्या है?`, answer: 'अत्यधिक प्रतिकूल परिस्थितियों में भी उच्च सटीकता और विश्वसनीयता के साथ कार्य करना।' }
      ],
      safeProjectIdea: {
        title: 'कागजी मॉडल और ब्लॉक आरेख विश्लेषण',
        description: `${title} के सभी इनपुट, प्रोसेसिंग और आउटपुट घटकों का चार्ट पेपर पर रंगीन ब्लॉक आरेख बनाएं।`,
        expectedOutcome: 'सिस्टम के डेटा प्रवाह और घटक इंटरफेस की स्पष्ट समझ।'
      },
      furtherReading: ['HK VELORA: रक्षा प्रौद्योगिकी परिचय हैंडबुक', 'एनसीईआरटी भौतिकी: यांत्रिकी एवं तरंग गति']
    },
    {
      levelNumber: 2,
      levelName: 'LEVEL 2 — Engineering Concepts',
      focus: 'भौतिक विज्ञान और इंजीनियरिंग नियमों का अनुप्रयोग',
      summary: `${t1} और गणितीय नियमों (थर्मोडायनामिक्स, सिग्नल गति और सामग्री बल) के आधार पर प्रणाली का व्यवहार।`,
      keyConcepts: [
        'कार्यकारी बल, दबाव और तापमान के प्रभाव की गणना।',
        'सामग्री का चयन: एल्युमिनियम मिश्रधातुएं बनाम कार्बन कंपोजिट्स।',
        'एनालॉग सिग्नलों का डिजिटल रूपांतरण और शोर (Noise) निस्पंदन।'
      ],
      technicalVocabulary: [
        { term: 'Sampling Rate', meaning: 'प्रति सेकंड एनालॉग सिग्नल को डिजिटल बिंदुओं में मापने की गति (Hz)।' },
        { term: 'Tensile Strength', meaning: 'किसी सामग्री द्वारा बिना टूटे खींचे जाने वाले अधिकतम बल की क्षमता।' }
      ],
      learningCheck: [
        { question: 'रक्षा प्रणालियों में कार्बन कंपोजिट्स को क्यों प्राथमिकता दी जाती है?', answer: 'क्योंकि वे हल्के होने के साथ-साथ अत्यधिक मजबूत होते हैं और धातु की तरह रडार तरंगों को परावर्तित नहीं करते।' }
      ],
      safeProjectIdea: {
        title: 'Arduino आधारित साधारण सेंसर लॉगिंग प्रयोग',
        description: 'अल्ट्रासोनिक या तापमान सेंसर को Arduino से जोड़कर सीरियल मॉनिटर पर रीयल-टाइम डेटा प्लॉट करें।',
        expectedOutcome: 'सेंसर कैलिब्रेशन और डेटा रीडिंग की व्यावहारिक समझ।'
      },
      furtherReading: ['IEEE Systems Journal: Embedded Sensors', 'Aerospace Materials Guide']
    },
    {
      levelNumber: 3,
      levelName: 'LEVEL 3 — Advanced Technology',
      focus: 'उन्नत एल्गोरिदम, सिमुलेशन और नियंत्रण प्रणालियां',
      summary: `उच्च गति पर ${t2}, स्वचालित नियंत्रण लूप्स (PID/कलमन फिल्टर) और डिजिटल सिमुलेशन का गहरा अध्ययन।`,
      keyConcepts: [
        'क्लोज्ड-लूप फीडबैक और ट्रांसफर फंक्शन विश्लेषण।',
        'कम्प्यूटेशनल फ्लूइड डायनामिक्स (CFD) और परिमित तत्व विधि (FEA)।',
        'इलेक्ट्रोमैग्नेटिक इंटरफेरेंस (EMI) और परिरक्षण (Shielding) तकनीकें।'
      ],
      technicalVocabulary: [
        { term: 'Bode Plot', meaning: 'आवृत्ति के विरुद्ध नियंत्रण प्रणाली के लाभ (Gain) और कला (Phase) का आरेख।' },
        { term: 'Bit Error Rate (BER)', meaning: 'डेटा ट्रांसमिशन में गलत प्राप्त होने वाले बिट्स का अनुपात।' }
      ],
      learningCheck: [
        { question: 'क्लोज्ड-लूप कंट्रोल ओपन-लूप से बेहतर क्यों है?', answer: 'क्योंकि यह आउटपुट में त्रुटि को मापकर स्वतः इनपुट में सुधार करता है, जिससे बाहरी व्यवधानों में भी स्थिरता बनी रहती है।' }
      ],
      safeProjectIdea: {
        title: 'Python PID सिमुलेटर',
        description: 'Python में 1-D गतिमान वस्तु का एक सिमुलेटर बनाएं और P, I, D मान बदलकर स्थिरता का परीक्षण करें।',
        expectedOutcome: 'कंट्रोल लूप के ओवरशूट, राइज टाइम और सेटलिंग टाइम का प्रत्यक्ष अनुभव।'
      },
      furtherReading: ['Modern Control Engineering by Ogata', 'DRDO Technical Focus on CFD']
    },
    {
      levelNumber: 4,
      levelName: 'LEVEL 4 — System Integration & Testing',
      focus: 'बहु-सिस्टम एकीकरण, सैन्य मानक (MIL-STD) और फील्ड ट्रायल्स',
      summary: `सेंसर, कंप्यूटर, एक्चुएटर और संचार को एक पूर्ण प्लेटफॉर्म में जोड़ना तथा विफलता विश्लेषण (FMEA) करना।`,
      keyConcepts: [
        'MIL-STD-1553B और एयरोस्पेस डेटा बस प्रोटोकॉल का एकीकरण।',
        'हार्डवेयर-इन-द-लूप (HIL) सिमुलेशन और एनवायरनमेंटल चैंबर टेस्टिंग।',
        'क्वालिटी एश्योरेंस, NDT और विनिर्माण ट्रेसिबिलिटी।'
      ],
      technicalVocabulary: [
        { term: 'Hardware-In-the-Loop (HIL)', meaning: 'कंप्यूटर सिमुलेशन में वास्तविक फ्लाइट कंप्यूटर को जोड़कर वास्तविक समय में परीक्षण करना।' },
        { term: 'MTBF', meaning: 'Mean Time Between Failures — विफलताओं के बीच का औसत परिचालन समय।' }
      ],
      learningCheck: [
        { question: 'MIL-STD-810G परीक्षण का मुख्य उद्देश्य क्या है?', answer: 'उपकरण को अत्यधिक ठंड, गर्मी, नमी, कंपन और धूल भरे वातावरण में टिकाऊ और कार्यक्षम प्रमाणित करना।' }
      ],
      safeProjectIdea: {
        title: 'मल्टी-थ्रेडेड डेटा पैकेट पार्सर',
        description: 'सुरक्षित चेकसम (CRC32) के साथ टेलीमेट्री डेटा पैकेट बनाने और पार्स करने का कोड तैयार करें।',
        expectedOutcome: 'सैन्य एवियोनिक्स डेटा बसों में संचार विश्वसनीयता का अभ्यास।'
      },
      furtherReading: ['MIL-STD-1553B Systems Integration Guide', 'Reliability Engineering in Defence Platforms']
    },
    {
      levelNumber: 5,
      levelName: 'LEVEL 5 — Research & Future Technology',
      focus: 'अत्याधुनिक अनुसंधान, एआई स्वायत्तता और 2047 विजन',
      summary: `${title} का भविष्य: कॉग्निटिव एआई, क्वांटम सेंसर, हाइपरसोनिक गतिशीलता और आत्मनिर्भर भारत मिशन।`,
      keyConcepts: [
        'एज-एआई (Edge AI) द्वारा उप-मिलीसेकंड स्तर पर स्वायत्त निर्णय।',
        'क्वांटम नेविगेशन: बिना जीपीएस के चुंबकीय व गुरुत्वाकर्षण विसंगति मैपिंग।',
        'डिजिटल ट्विन: परिचालन के दौरान पूरे जीवनकाल का लाइव डिजिटल क्लोन।'
      ],
      technicalVocabulary: [
        { term: 'Digital Twin', meaning: 'किसी भौतिक प्रणाली का वास्तविक समय में सेंसर डेटा द्वारा अपडेट होने वाला लाइव डिजिटल मॉडल।' },
        { term: 'Cognitive Electronic Warfare', meaning: 'मशीन लर्निंग द्वारा अनजान दुश्मन राडार संकेतों को स्वतः पहचानकर तुरंत जैमिंग काउंटरमेजर तैयार करना।' }
      ],
      learningCheck: [
        { question: 'क्वांटम नेविगेशन जीपीएस से बेहतर विकल्प क्यों बन सकता है?', answer: 'क्योंकि यह बाहरी उपग्रह सिग्नलों पर निर्भर नहीं करता, इसलिए इसे दुश्मन द्वारा न तो जैम किया जा सकता है और न ही स्पूफ।' }
      ],
      safeProjectIdea: {
        title: 'सिम्युलेटेड डिजिटल ट्विन विज़ुअलाइज़र',
        description: 'वेब डैशबोर्ड बनाएं जो सिम्युलेटेड तापमान व कंपन डेटा के आधार पर विफलता का पूर्वानुमान लगाए।',
        expectedOutcome: 'प्रेडिक्टिव मेंटेनेंस और डिजिटल ट्विन आर्किटेक्चर की गहन समझ।'
      },
      furtherReading: ['DRDO Technology Perspective & Roadmap 2047', 'IEEE Aerospace & Electronic Systems Magazine']
    }
  ];
}
