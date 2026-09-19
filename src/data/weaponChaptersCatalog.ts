export interface WeaponCatalogEntry {
  chapterNumber: number;
  partNumber: number;
  partTitle: string;
  title: string;
  subtitle: string;
  category: string;
  readTimeMinutes: number;
  badge: string;
  keyTopics: string[];
}

export const WEAPON_CHAPTERS_CATALOG: WeaponCatalogEntry[] = [
  // PART 1 — INTRODUCTION TO DEFENCE TECHNOLOGY
  {
    chapterNumber: 1,
    partNumber: 1,
    partTitle: 'PART 1 — INTRODUCTION TO DEFENCE TECHNOLOGY',
    title: 'Defence Technology क्या है?',
    subtitle: 'वैज्ञानिक अनुसंधान, इंजीनियरिंग पद्धतियां और आधुनिक संप्रभुता में रक्षा तकनीक की केंद्रीय भूमिका',
    category: 'Foundations',
    readTimeMinutes: 16,
    badge: 'आधारशिला',
    keyTopics: ['डिफेंस साइंस की परिभाषा', 'सिविलियन बनाम मिलिट्री इंजीनियरिंग', 'सिस्टम-ऑफ-सिस्टम्स', 'वैज्ञानिक दृष्टिकोण']
  },
  {
    chapterNumber: 2,
    partNumber: 1,
    partTitle: 'PART 1 — INTRODUCTION TO DEFENCE TECHNOLOGY',
    title: 'Modern Defence Systems का Architecture',
    subtitle: 'मल्टी-डोमेन ऑपरेशंस, सेंसर-टू-शूटर लूप और C4ISR सिस्टम्स की इंटरकनेक्टिविटी',
    category: 'Architecture',
    readTimeMinutes: 18,
    badge: 'सिस्टम आर्किटेक्चर',
    keyTopics: ['C4ISR ढांचा', 'डेटा बस मानक MIL-STD-1553', 'सेंसर ग्रिड', 'कमांड एंड कंट्रोल']
  },
  {
    chapterNumber: 3,
    partNumber: 1,
    partTitle: 'PART 1 — INTRODUCTION TO DEFENCE TECHNOLOGY',
    title: 'Research से Operational System तक Technology Lifecycle',
    subtitle: 'TRL (Technology Readiness Levels) 1 से 9 तक की वैज्ञानिक यात्रा और विनिर्माण प्रमाणन',
    category: 'R&D Lifecycle',
    readTimeMinutes: 17,
    badge: 'TRL स्केल',
    keyTopics: ['NASA/DoD TRL 1-9 पैमाना', 'प्रूफ ऑफ कॉन्सेप्ट', 'प्रोटोटाइप वैलिडेशन', 'फील्ड ट्रायल्स']
  },
  {
    chapterNumber: 4,
    partNumber: 1,
    partTitle: 'PART 1 — INTRODUCTION TO DEFENCE TECHNOLOGY',
    title: 'DRDO और भारत की Defence R&D Journey',
    subtitle: '1958 में स्थापना से लेकर आधुनिक मिसाइल, रडार, सोनार और एयरोस्पेस सफलताओं का ऐतिहासिक सफर',
    category: 'DRDO History',
    readTimeMinutes: 20,
    badge: 'ऐतिहासिक विकास',
    keyTopics: ['1958 में DRDO की स्थापना', 'डॉ. एपीजे अब्दुल कलाम का नेतृत्व', 'IGMDP कार्यक्रम', '50+ क्लस्टर लैब्स']
  },
  {
    chapterNumber: 5,
    partNumber: 1,
    partTitle: 'PART 1 — INTRODUCTION TO DEFENCE TECHNOLOGY',
    title: 'Indigenous Technology और Self-Reliance',
    subtitle: 'आत्मनिर्भर भारत, सामरिक स्वायत्तता, स्पेयर पार्ट्स सुरक्षा और घरेलू औद्योगिक क्षमता',
    category: 'Self-Reliance',
    readTimeMinutes: 16,
    badge: 'आत्मनिर्भर भारत',
    keyTopics: ['सामरिक स्वायत्तता', 'सप्लाई चेन व प्रतिबंध लचीलापन', 'DAP 2020 नीतियां', 'घरेलू R&D संवर्धन']
  },

  // PART 2 — MISSILE TECHNOLOGY
  {
    chapterNumber: 6,
    partNumber: 2,
    partTitle: 'PART 2 — MISSILE TECHNOLOGY',
    title: 'Missile Systems का Basic Architecture',
    subtitle: 'वारहेड बे, गाइडेंस कम्प्यूटर, एक्चुएशन सिस्टम और प्रोपल्शन स्टेज का शारीरिक विन्यास',
    category: 'Missile Systems',
    readTimeMinutes: 18,
    badge: 'मिसाइल संरचना',
    keyTopics: ['चार मुख्य खंड (Sections)', 'सेंटर ऑफ ग्रेविटी और सेंटर ऑफ प्रेशर', 'स्टेज सेपरेशन', 'इंटरफेस कनेक्टर्स']
  },
  {
    chapterNumber: 7,
    partNumber: 2,
    partTitle: 'PART 2 — MISSILE TECHNOLOGY',
    title: 'Aerodynamics and Flight Principles',
    subtitle: 'लिफ्ट, ड्रैग, एंगल ऑफ अटैक (AoA), शॉक वेव्स और सुपरसोनिक/हाइपरसोनिक प्रवाह के नियम',
    category: 'Aerodynamics',
    readTimeMinutes: 19,
    badge: 'एयरोडायनामिक्स',
    keyTopics: ['मैक संख्या और कंप्रेसिबिलिटी', 'वेव ड्रैग और इंड्यूस्ड ड्रैग', 'कैनार्ड्स और टेल कंट्रोल', 'बाउंड्री लेयर']
  },
  {
    chapterNumber: 8,
    partNumber: 2,
    partTitle: 'PART 2 — MISSILE TECHNOLOGY',
    title: 'Propulsion Science',
    subtitle: 'सॉलिड प्रोपेलेंट्स (HTPB), लिक्विड रॉकेट मोटर्स, टर्बोजेट और सॉलिड फ्यूल डक्टेड रैमजेट (SFDR)',
    category: 'Propulsion',
    readTimeMinutes: 22,
    badge: 'प्रोपल्शन विज्ञान',
    keyTopics: ['सॉलिड मोटर ग्रेन ज्योमेट्री', 'विशिष्ट आवेग (Isp)', 'कन्वर्जेंट-डाइवर्जेंट (De Laval) नोजल', 'रैमजेट व SFDR']
  },
  {
    chapterNumber: 9,
    partNumber: 2,
    partTitle: 'PART 2 — MISSILE TECHNOLOGY',
    title: 'Guidance, Navigation and Control',
    subtitle: 'रिंग लेजर जाइरोस्कोप (RLG), NavIC/GNSS, प्रोपोर्शनल नेविगेशन (Pro-Nav) और ऑटोपायलट लूप्स',
    category: 'GNC',
    readTimeMinutes: 21,
    badge: 'GNC सिस्टम',
    keyTopics: ['INS डेड रेकनिंग', 'प्रोपोर्शनल नेविगेशन लॉ (PN)', 'क्लोज्ड लूप ऑटोपायलट', 'इलेक्ट्रो-मैकेनिकल एक्चुएटर्स']
  },
  {
    chapterNumber: 10,
    partNumber: 2,
    partTitle: 'PART 2 — MISSILE TECHNOLOGY',
    title: 'Sensors and Avionics',
    subtitle: 'एक्टिव रडार होमिंग (ARH), इमेजिंग इन्फ्रारेड (IIR) सीकर्स और ऑन-बोर्ड मिशन प्रोसेसर्स',
    category: 'Avionics',
    readTimeMinutes: 18,
    badge: 'सीकर और सेंसर्स',
    keyTopics: ['रेडोम और डाई-इलेक्ट्रिक सामग्रियां', 'IIR फोकल प्लेन ऐरे', 'RF सीकर ट्रांससीवर्स', 'शॉक-प्रूफ एवियोनिक्स']
  },
  {
    chapterNumber: 11,
    partNumber: 2,
    partTitle: 'PART 2 — MISSILE TECHNOLOGY',
    title: 'Structures and Advanced Materials',
    subtitle: 'कार्बन-कार्बन कंपोजिट्स, मारैजिंग स्टील, टाइटेनियम मिश्रधातु और एब्लेटिव हीट शील्ड्स',
    category: 'Materials',
    readTimeMinutes: 17,
    badge: 'उन्नत सामग्रियां',
    keyTopics: ['एब्लेशन भौतिकी', 'कार्बन फाइबर वाइंडिंग', 'थर्मल प्रोटेक्शन सिस्टम (TPS)', 'उच्च शक्ति-भार अनुपात']
  },
  {
    chapterNumber: 12,
    partNumber: 2,
    partTitle: 'PART 2 — MISSILE TECHNOLOGY',
    title: 'Simulation and Testing',
    subtitle: 'हार्डवेयर-इन-द-लूप (HIL) सिमुलेशन, विन्ड टनल टेस्टिंग और ITR चांदीपुर में टेलीमेट्री ट्रैकिंग',
    category: 'Testing',
    readTimeMinutes: 19,
    badge: 'HIL व परीक्षण',
    keyTopics: ['HIL रियल-टाइम टेस्ट बेंच', 'सुपरसोनिक विन्ड टनल', 'टेलीमेट्री डेटा एकत्रीकरण', 'ऑप्टिकल व रडार ट्रैकिंग']
  },
  {
    chapterNumber: 13,
    partNumber: 2,
    partTitle: 'PART 2 — MISSILE TECHNOLOGY',
    title: "India's Publicly Documented Missile Programmes",
    subtitle: 'IGMDP (पृथ्वी, अग्नि, आकाश, नाग, त्रिशूल), ब्रह्मोस सुपरसोनिक क्रूज और अस्त्र BVR मिसाइल',
    category: 'Programmes',
    readTimeMinutes: 24,
    badge: 'भारतीय कार्यक्रम',
    keyTopics: ['1983 IGMDP योजना', 'अग्नि रणनीतिक श्रृंखला', 'ब्रह्मोस जॉइंट वेंचर', 'अस्त्र एयर-टू-एयर मिसाइल']
  },
  {
    chapterNumber: 14,
    partNumber: 2,
    partTitle: 'PART 2 — MISSILE TECHNOLOGY',
    title: 'Missile Technology की Engineering Challenges',
    subtitle: 'थर्मल शॉक, एयरो-थर्मोडायनामिक कंपन, ईएम इंटरफेरेंस और सटीक टर्मिनल सटीकता (CEP)',
    category: 'Challenges',
    readTimeMinutes: 17,
    badge: 'इंजीनियरिंग चुनौतियां',
    keyTopics: ['सर्कुलर एरर प्रोबेबल (CEP)', 'एयरो-थर्मल हीटिंग प्रबंधन', 'इलेक्ट्रोमैग्नेटिक कम्पैटिबिलिटी (EMC)', 'माइक्रोसेकंड टाइमिंग']
  },

  // PART 3 — FIGHTER AIRCRAFT
  {
    chapterNumber: 15,
    partNumber: 3,
    partTitle: 'PART 3 — FIGHTER AIRCRAFT',
    title: 'Fighter Aircraft की Fundamental Engineering',
    subtitle: 'वजन संतुलन, लोड फैक्टर (+9g/-3g), स्टेल्थ आकार और एयरोस्पेस स्ट्रक्चरल सुरक्षा ढांचा',
    category: 'Aeronautics',
    readTimeMinutes: 18,
    badge: 'विमान इंजीनियरिंग',
    keyTopics: ['थ्रस्ट-टू-वेट रेशियो', 'विंग लोडिंग', 'g-लिमिट्स और स्ट्रक्चरल फैटीग', 'इंटरनल वेपन्स बे']
  },
  {
    chapterNumber: 16,
    partNumber: 3,
    partTitle: 'PART 3 — FIGHTER AIRCRAFT',
    title: 'Aerodynamics',
    subtitle: 'डेल्टा विंग्स, कैनार्ड्स, वोर्टेक्स लिफ्ट, ट्रांसोनिक वेव ड्रैग और हाई-एंगल ऑफ अटैक (AoA)',
    category: 'Aerodynamics',
    readTimeMinutes: 19,
    badge: 'एयरोडायनामिक्स',
    keyTopics: ['कंपाउंड टेललेस डेल्टा विंग', 'लीडिंग एज वोर्टेक्स कंट्रोलर्स (LEVCON)', 'एरिया रूल (विटकॉम्ब)', 'सुपरमैन्यूवरेबिलिटी']
  },
  {
    chapterNumber: 17,
    partNumber: 3,
    partTitle: 'PART 3 — FIGHTER AIRCRAFT',
    title: 'Flight Control Systems',
    subtitle: 'नेगेटिवली स्टेबल एयरफ्रेम, क्वाड-रिडंडेंट डिजिटल फ्लाई-बाय-वायर (DFBW) और कंट्रोल लॉज',
    category: 'Flight Control',
    readTimeMinutes: 20,
    badge: 'DFBW सिस्टम',
    keyTopics: ['इन्हेरेन्ट अनस्टेबिलिटी के लाभ', 'क्वाड-रिडंडेंट आर्किटेक्चर', 'कंट्रोल लॉज (C-Laws)', 'पायलट-इनड्यूस्ड ऑसिलेशन (PIO) सुरक्षा']
  },
  {
    chapterNumber: 18,
    partNumber: 3,
    partTitle: 'PART 3 — FIGHTER AIRCRAFT',
    title: 'Avionics',
    subtitle: 'मिशन कम्प्यूटर्स, हॉटैस (HOTAS), हेलमेट माउंटेड डिस्प्ले (HMDS) और ग्लास कॉकपिट MFDs',
    category: 'Avionics',
    readTimeMinutes: 19,
    badge: 'एवियोनिक्स सूट',
    keyTopics: ['हैंड्स-ऑन-थ्रॉटल-एंड-स्टिक (HOTAS)', 'हेलमेट सिम्बोलॉजी', 'मिशन कंप्यूटर रिडंडेंसी', 'ओपन सिस्टम आर्किटेक्चर (MOSA)']
  },
  {
    chapterNumber: 19,
    partNumber: 3,
    partTitle: 'PART 3 — FIGHTER AIRCRAFT',
    title: 'Radar and Sensors',
    subtitle: 'उन्नत AESA राडार, इन्फ्रारेड सर्च एंड ट्रैक (IRST) और मिसाइल अप्रोच वार्निंग (MAWS)',
    category: 'Sensors',
    readTimeMinutes: 19,
    badge: 'सेंसर सूट',
    keyTopics: ['उत्तम AESA राडार', 'IRST ऑप्ट्रोनिक्स', 'MAWS और RWR इंटीग्रेशन', 'सेंसर सह-सक्रियता']
  },
  {
    chapterNumber: 20,
    partNumber: 3,
    partTitle: 'PART 3 — FIGHTER AIRCRAFT',
    title: 'Composite Materials',
    subtitle: 'कार्बन फाइबर रीइन्फोर्स्ड पॉलिमर (CFRP), ऑटोक्लेव क्योरिंग और एयरफ्रेम वजन में 40%+ की बचत',
    category: 'Materials',
    readTimeMinutes: 17,
    badge: 'कंपोजिट्स',
    keyTopics: ['CFRP विनिर्माण', 'को-क्योरिंग तकनीक', 'संक्षारण प्रतिरोध', 'नॉन-डिस्ट्रक्टिव टेस्टिंग (NDT)']
  },
  {
    chapterNumber: 21,
    partNumber: 3,
    partTitle: 'PART 3 — FIGHTER AIRCRAFT',
    title: 'Aircraft Engine Technology',
    subtitle: 'लो-बाईपास आफ्टरबर्निंग टर्बोफैन, सिंगल क्रिस्टल टर्बाइन ब्लेड्स और कावेरी इंजन R&D',
    category: 'Engines',
    readTimeMinutes: 22,
    badge: 'टर्बोफैन इंजन',
    keyTopics: ['थर्मोडायनामिक ब्रेटन चक्र', 'FADEC इलेक्ट्रॉनिक कंट्रोल', 'सिंगल क्रिस्टल सुपरअलॉय', 'गैस टर्बाइन रिसर्च (GTRE)']
  },
  {
    chapterNumber: 22,
    partNumber: 3,
    partTitle: 'PART 3 — FIGHTER AIRCRAFT',
    title: 'Aircraft Integration and Testing',
    subtitle: 'आयरन बर्ड सिमुलेशन, ग्राउंड रेसोनेंस टेस्ट्स (GRT) और एयरवर्थीनेस सर्टिफिकेशन CEMILAC',
    category: 'Testing',
    readTimeMinutes: 18,
    badge: 'सर्टिफिकेशन',
    keyTopics: ['आयरन बर्ड टेस्ट रिग', 'CEMILAC और DGAQA प्रमाणन', 'फ्लाइट एनवलप एक्सपेंशन', 'वेपन फायरिंग ट्रायल्स']
  },
  {
    chapterNumber: 23,
    partNumber: 3,
    partTitle: 'PART 3 — FIGHTER AIRCRAFT',
    title: 'LCA Tejas: Publicly Documented Development Journey',
    subtitle: '1983 में एयरोनॉटिकल डेवलपमेंट एजेंसी (ADA) के गठन से लेकर Mk1, Mk1A और नेवल लैंडिंग तक',
    category: 'LCA Tejas',
    readTimeMinutes: 23,
    badge: 'LCA तेजस गाथा',
    keyTopics: ['ADA की स्थापना (1984)', '4 जनवरी 2001 प्रथम उड़ान', 'नेवल तेजस स्की-जंप और अरेस्टेड लैंडिंग', 'तेजस Mk1A सुधार']
  },
  {
    chapterNumber: 24,
    partNumber: 3,
    partTitle: 'PART 3 — FIGHTER AIRCRAFT',
    title: 'Future Fighter Aircraft Technology',
    subtitle: '5वीं और 6वीं पीढ़ी के सिद्धांत: AMCA स्टेल्थ, सेरपेन्टाइन एयर-इंटेक्स और मैन्ड-अनमैन्ड टीमिंग (MUM-T)',
    category: 'Future Aircraft',
    readTimeMinutes: 20,
    badge: '5th Gen AMCA',
    keyTopics: ['इंटरनल वेपन बे डिज़ाइन', 'DSI डायवर्जनलेस सुपरसोनिक इंटेक', 'रडार एब्जॉर्बेंट कोटिंग्स (RAM)', 'MUM-T ऑटोनॉमस विंगमैन']
  },

  // PART 4 — RADAR AND SENSOR TECHNOLOGY
  {
    chapterNumber: 25,
    partNumber: 4,
    partTitle: 'PART 4 — RADAR AND SENSOR TECHNOLOGY',
    title: 'Radar कैसे काम करता है?',
    subtitle: 'इलेक्ट्रोमैग्नेटिक पल्स का उत्सर्जन, लक्ष्य से परावर्तन, टाइम-ऑफ-फ्लाइट और दूरी मापन समीकरण',
    category: 'Radar Physics',
    readTimeMinutes: 17,
    badge: 'राडार भौतिकी',
    keyTopics: ['राडार रेंज समीकरण', 'पल्स रिपीटीशन फ्रीक्वेंसी (PRF)', 'रेडियो वेव प्रोपेगेशन', 'टार्गेट सिग्नेचर']
  },
  {
    chapterNumber: 26,
    partNumber: 4,
    partTitle: 'PART 4 — RADAR AND SENSOR TECHNOLOGY',
    title: 'Antennas and Electromagnetic Waves',
    subtitle: 'पैराबोलिक रिफ्लेक्टर से लेकर फेज्ड ऐरे और गैलियम नाइट्राइड (GaN) आधारित T/R मॉड्यूल्स तक',
    category: 'Antennas',
    readTimeMinutes: 18,
    badge: 'GaN AESA ऐरे',
    keyTopics: ['बीम-स्टीयरिंग सिद्धांत', 'T/R मॉड्यूल्स कार्यप्रणाली', 'GaN बनाम GaAs सेमीकंडक्टर', 'साइड-लोब सप्रेशन']
  },
  {
    chapterNumber: 27,
    partNumber: 4,
    partTitle: 'PART 4 — RADAR AND SENSOR TECHNOLOGY',
    title: 'Signal Processing',
    subtitle: 'फास्ट फूरियर ट्रांसफॉर्म (FFT), पल्स कम्प्रेशन, मैचिंग फिल्टर्स और क्लटर रिजेक्शन एल्गोरिदम',
    category: 'Signal Processing',
    readTimeMinutes: 19,
    badge: 'DSP तकनीक',
    keyTopics: ['डॉपलर फ्रीक्वेंसी शिफ्ट', 'ग्राउंड क्लटर फिल्टरिंग', 'डिजिटल सिग्नल प्रोसेसर (DSP/FPGA)', 'लीनियर फ्रीक्वेंसी मॉड्यूलेशन (Chirp)']
  },
  {
    chapterNumber: 28,
    partNumber: 4,
    partTitle: 'PART 4 — RADAR AND SENSOR TECHNOLOGY',
    title: 'Tracking and Detection Concepts',
    subtitle: 'काल्मन फिल्टर्स, मल्टीपल टारगेट ट्रैकिंग (MTT), ट्रैक-व्हाइल-स्कैन (TWS) और प्रोबेबिलिटी ऑफ डिटेक्शन',
    category: 'Tracking',
    readTimeMinutes: 18,
    badge: 'काल्मन ट्रैकिंग',
    keyTopics: ['काल्मन फिल्टर प्रेडिक्शन लूप', 'TWS मल्टी-टारगेट ट्रैकिंग', 'फॉल्स अलार्म रेट (CFAR)', 'टारगेट स्टेट वेक्टर्स']
  },
  {
    chapterNumber: 29,
    partNumber: 4,
    partTitle: 'PART 4 — RADAR AND SENSOR TECHNOLOGY',
    title: 'Sensor Fusion',
    subtitle: 'राडार, ऑप्ट्रोनिक्स (EO/IR) और इलेक्ट्रॉनिक सपोर्ट मेजर्स (ESM) का एकीकरण और साझा ट्रैक फाइल',
    category: 'Sensor Fusion',
    readTimeMinutes: 18,
    badge: 'डेटा फ्यूजन',
    keyTopics: ['सेंसर डेटा सहसंबंध (Association)', 'बेयसियन व डेम्पस्टर-शेफर फ्यूजन', 'कॉमन ऑपरेशनल पिक्चर (COP)', 'सेंसर रिसोर्स मैनेजमेंट']
  },
  {
    chapterNumber: 30,
    partNumber: 4,
    partTitle: 'PART 4 — RADAR AND SENSOR TECHNOLOGY',
    title: 'Airborne and Ground-Based Surveillance',
    subtitle: 'नेत्र (Netra) AEW&C, राजेंद्र रडार, रोहिणी 3D CAR और माउंटेन सर्विलांस प्रणालियां',
    category: 'Surveillance Systems',
    readTimeMinutes: 20,
    badge: 'DRDO रडार फैमिली',
    keyTopics: ['नेत्र AEW&C डॉर्सल एंटीना', 'आकाश मिसाइल का राजेंद्र रडार', 'स्वाति वेपन लोकेटिंग रडार (WLR)', 'अश्विनी LLTR रडार']
  },

  // PART 5 — ELECTRONIC WARFARE AND COMMUNICATION
  {
    chapterNumber: 31,
    partNumber: 5,
    partTitle: 'PART 5 — ELECTRONIC WARFARE AND COMMUNICATION',
    title: 'Electromagnetic Spectrum',
    subtitle: 'HF, VHF, UHF, X-बैंड और Ku-बैंड का सैन्य अनुप्रयोग और वायुमंडलीय अवशोषण खिड़कियां',
    category: 'EM Spectrum',
    readTimeMinutes: 17,
    badge: 'EM स्पेक्ट्रम',
    keyTopics: ['रेडियो फ्रीक्वेंसी बैंड्स (A to K बैंड)', 'वायुमंडलीय एटेन्यूएशन', 'स्पेक्ट्रम कंजेशन', 'फ्री-स्पेस पाथ लॉस']
  },
  {
    chapterNumber: 32,
    partNumber: 5,
    partTitle: 'PART 5 — ELECTRONIC WARFARE AND COMMUNICATION',
    title: 'Electronic Warfare Fundamentals',
    subtitle: 'इलेक्ट्रॉनिक सपोर्ट (ES), इलेक्ट्रॉनिक अटैक (EA-जैमिंग) और इलेक्ट्रॉनिक प्रोटेक्शन (EP-एंटी-जैमिंग)',
    category: 'EW Basics',
    readTimeMinutes: 19,
    badge: 'EW ट्राई-पिलर',
    keyTopics: ['इलेक्ट्रॉनिक सपोर्ट मेजर्स (ESM)', 'नॉइज़ बनाम डिसेप्शन जैमिंग', 'डिजिटल रेडियो फ्रीक्वेंसी मेमोरी (DRFM)', 'चैफ और फ्लेयर डिस्पेंसर']
  },
  {
    chapterNumber: 33,
    partNumber: 5,
    partTitle: 'PART 5 — ELECTRONIC WARFARE AND COMMUNICATION',
    title: 'Secure Communication',
    subtitle: 'फ्रीक्वेंसी हॉपिंग स्प्रेड स्पेक्ट्रम (FHSS), डायरेक्ट सीक्वेंस (DSSS) और सॉफ्टवेयर डिफाइंड रेडियो (SDR)',
    category: 'Military Comms',
    readTimeMinutes: 18,
    badge: 'सुरक्षित संचार',
    keyTopics: ['हॉपिंग रेट्स (Hops per second)', 'क्रिप्टोग्राफिक सिंक', 'SDR भारतीय नौसेना व थलसेना आर्किटेक्चर', 'टैक्टिकल डेटा लिंक Link-II']
  },
  {
    chapterNumber: 34,
    partNumber: 5,
    partTitle: 'PART 5 — ELECTRONIC WARFARE AND COMMUNICATION',
    title: 'Signal Detection and Analysis',
    subtitle: 'सिग्नल इंटेलिजेंस (SIGINT), कॉमइन्ट (COMINT), एलइन्ट (ELINT) और ईएमआई/ईएमसी सुरक्षा',
    category: 'SIGINT',
    readTimeMinutes: 18,
    badge: 'सिग्नल एनालिसिस',
    keyTopics: ['डायरेक्शन फाइंडिंग (DF) तकनीक', 'स्पेक्ट्रम वाटरफॉल एनालिसिस', 'एमिटर फिंगरप्रिंटिंग', 'MIL-STD-461 EMC मानक']
  },
  {
    chapterNumber: 35,
    partNumber: 5,
    partTitle: 'PART 5 — ELECTRONIC WARFARE AND COMMUNICATION',
    title: 'Defensive Electronic Protection',
    subtitle: 'राडार फ्रीक्वेंसी एजिलिटी, साइड-लोब ब्लैंकिंग (SLB) और DRDO के शक्ति (Shakti) व संजुक्ता सिस्टम्स',
    category: 'Electronic Protection',
    readTimeMinutes: 19,
    badge: 'डिफेंसिव प्रोटेक्शन',
    keyTopics: ['फ्रीक्वेंसी एजिलिटी व स्टैगर्ड PRF', 'साइड-लोब ब्लैंकिंग (SLB)', 'शक्ति नौसैनिक EW सूट', 'आकाशतीर एयर डिफेंस C4I']
  },

  // PART 6 — DRONES AND AUTONOMOUS SYSTEMS
  {
    chapterNumber: 36,
    partNumber: 6,
    partTitle: 'PART 6 — DRONES AND AUTONOMOUS SYSTEMS',
    title: 'UAV Architecture',
    subtitle: 'एयरफ्रेम, प्रोपल्शन, एवियोनिक्स, पेलोड गिम्बल, ग्राउंड कंट्रोल स्टेशन (GCS) और डेटा-लिंक',
    category: 'UAV Engineering',
    readTimeMinutes: 18,
    badge: 'UAV आर्किटेक्चर',
    keyTopics: ['फिक्स्ड-विंग बनाम रोटरी-विंग', 'GCS टेलीमेट्री इंटरफेस', 'लाइन-ऑफ-साइट (LOS) व SATCOM लिंक', 'पेलोड स्वैपेबिलिटी']
  },
  {
    chapterNumber: 37,
    partNumber: 6,
    partTitle: 'PART 6 — DRONES AND AUTONOMOUS SYSTEMS',
    title: 'Navigation Systems',
    subtitle: 'जीपीएस/नाविक रिसीवर्स, विजुअल ओडोमेट्री और सैटेलाइट-डिनाइड वातावरण में डेड-रेकनिंग',
    category: 'UAV Navigation',
    readTimeMinutes: 18,
    badge: 'जीपीएस-डिनाइड नेविगेशन',
    keyTopics: ['NavIC मल्टी-कांस्टेलेशन इंटीग्रेशन', 'विजुअल इनर्शियल ओडोमेट्री (VIO)', 'एंटी-स्पूफिंग व एंटी-जैमिंग GPS', 'टेरेन रेफरेंस नेविगेशन']
  },
  {
    chapterNumber: 38,
    partNumber: 6,
    partTitle: 'PART 6 — DRONES AND AUTONOMOUS SYSTEMS',
    title: 'Flight Controllers',
    subtitle: 'PID कंट्रोल लूप्स, स्टेट एस्टिमेशन, एक्सटेंडेड काल्मन फिल्टर (EKF) और ऑटोपायलट आर्किटेक्चर',
    category: 'Flight Controllers',
    readTimeMinutes: 19,
    badge: 'ऑटोपायलट कंट्रोलर',
    keyTopics: ['PID ट्यूनिंग और रिस्पॉन्सिवनेस', 'EKF स्टेट एस्टिमेशन', 'फेल-सेफ रिटर्न-टू-होम (RTH)', 'हार्डवेयर रिडंडेंसी']
  },
  {
    chapterNumber: 39,
    partNumber: 6,
    partTitle: 'PART 6 — DRONES AND AUTONOMOUS SYSTEMS',
    title: 'Computer Vision',
    subtitle: 'ऑब्जेक्ट डिटेक्शन (YOLO), टारगेट क्लासिफिकेशन, ऑप्टिकल फ्लो और रियल-टाइम एज-कम्प्यूटिंग',
    category: 'Computer Vision',
    readTimeMinutes: 19,
    badge: 'एज-AI विजन',
    keyTopics: ['एम्बेडिड GPU/NPU इन्फरेंस', 'ऑप्टिकल फ्लो स्टेबिलाइजेशन', 'थर्मल IR इमेज प्रोसेसिंग', 'ऑब्जेक्ट ट्रैकिंग गिम्बल']
  },
  {
    chapterNumber: 40,
    partNumber: 6,
    partTitle: 'PART 6 — DRONES AND AUTONOMOUS SYSTEMS',
    title: 'AI-Based Autonomous Systems',
    subtitle: 'स्वायत्त झुंड ड्रोन (Drone Swarms), डिस्ट्रीब्यूटेड निर्णय एल्गोरिदम और कोलाबोरेटिव मैपिंग',
    category: 'Swarm AI',
    readTimeMinutes: 20,
    badge: 'ड्रोन झुंड (Swarm)',
    keyTopics: ['फ्लोकिंग व बिहेवियरल एल्गोरिदम', 'मेश रेडियो नेटवर्किंग', 'टारगेट असाइनमेंट एल्गोरिदम', 'स्वदेशी स्वायत्त प्लेटफॉर्म (रुस्तम, तपस)']
  },
  {
    chapterNumber: 41,
    partNumber: 6,
    partTitle: 'PART 6 — DRONES AND AUTONOMOUS SYSTEMS',
    title: 'Human-in-the-Loop Systems',
    subtitle: 'नैतिकता, जिनेवा कन्वेंशन सिद्धांत, स्वायत्तता की सीमाएं और अंतिम निर्णय सुरक्षा वास्तुकला',
    category: 'HITL Ethics',
    readTimeMinutes: 17,
    badge: 'नैतिक सुरक्षा ढांचा',
    keyTopics: ['ह्यूमन-ऑन-द-लूप बनाम इन-द-लूप', 'अंतर्राष्ट्रीय मानवीय कानून (IHL)', 'मैलफंक्शन कट-ऑफ स्विचेस', 'निर्णय जवाबदेही']
  },
  {
    chapterNumber: 42,
    partNumber: 6,
    partTitle: 'PART 6 — DRONES AND AUTONOMOUS SYSTEMS',
    title: 'Future Unmanned Technology',
    subtitle: 'लॉयल विंगमैन (Warrior), सोलर HAPS उच्च-ऊंचाई सर्विलांस और स्टेल्थ अनमैन्ड बॉम्बर्स (Ghatak UCAV)',
    category: 'Future Unmanned',
    readTimeMinutes: 19,
    badge: 'घातक व कॉम्बैट UAV',
    keyTopics: ['DRDO घातक फ्लाइंग-विंग टेस्टबेड', 'HAPS स्यूडो-सैटेलाइट्स', 'लॉयल विंगमैन MUM-T', 'एंटी-ड्रोन लेजर/सॉफ्ट-किल']
  },

  // PART 7 — ADVANCED TECHNOLOGY
  {
    chapterNumber: 43,
    partNumber: 7,
    partTitle: 'PART 7 — ADVANCED TECHNOLOGY',
    title: 'Hypersonic Technology: Scientific Overview',
    subtitle: 'मैक 5+ वायुगतिकी, स्क्रैमजेट सुपरसोनिक दहन, प्लाज्मा शीथ और DRDO HSTDV परीक्षण',
    category: 'Hypersonics',
    readTimeMinutes: 21,
    badge: 'हाइपरसोनिक भौतिकी',
    keyTopics: ['मैक 5+ एयरो-थर्मोडायनामिक्स', 'स्क्रैमजेट सुलगने की गतिशीलता', 'प्लाज्मा ब्लैकआउट फेनोमेना', 'HSTDV वैज्ञानिक उड़ान']
  },
  {
    chapterNumber: 44,
    partNumber: 7,
    partTitle: 'PART 7 — ADVANCED TECHNOLOGY',
    title: 'Advanced Materials',
    subtitle: 'रेडियो-एब्जॉर्बेंट कोटिंग्स (RAM), सेरेमिक मैट्रिक्स कंपोजिट्स (CMC) और अल्ट्रा-हाई टेम्परेचर सेरेमिक्स',
    category: 'Advanced Materials',
    readTimeMinutes: 18,
    badge: 'UHTC व स्टेल्थ',
    keyTopics: ['2000°C+ UHTC सेरेमिक्स', 'कार्बन-सिलिकॉन कार्बाइड (C/SiC)', 'RAM रडार अवशोषण फेराइट्स', 'मेटा-मटेरियल्स']
  },
  {
    chapterNumber: 45,
    partNumber: 7,
    partTitle: 'PART 7 — ADVANCED TECHNOLOGY',
    title: 'Robotics',
    subtitle: 'अनमैन्ड ग्राउंड व्हीकल्स (UGV), ईओडी बम डिस्पोजल रोबोट (दक्ष), और स्वायत्त लॉजिस्टिक्स म्यूल्स',
    category: 'Robotics',
    readTimeMinutes: 18,
    badge: 'डिफेंस रोबोटिक्स',
    keyTopics: ['DRDO दक्ष रोबोट कार्यप्रणाली', 'UGV टेरेन नेविगेशन व ट्रैक्स', 'टेली-ऑपरेशन बनाम ऑटोनॉमी', 'टैंक्स व बख्तरबंद एक्टिव प्रोटेक्शन']
  },
  {
    chapterNumber: 46,
    partNumber: 7,
    partTitle: 'PART 7 — ADVANCED TECHNOLOGY',
    title: 'Artificial Intelligence in Defence',
    subtitle: 'पैटर्न पहचान, प्रेडिक्टिव मेंटेनेंस, सिमुलेटेड वॉरगेमिंग और निर्णय सहायता प्रणालियां (DSS)',
    category: 'Defence AI',
    readTimeMinutes: 19,
    badge: 'डिफेंस AI इंजन',
    keyTopics: ['प्रेडिक्टिव मशीन हेल्थ मॉनिटरिंग', 'सैटेलाइट इमेजरी स्वचालित विश्लेषण', 'टैक्टिकल डिसीजन सपोर्ट', 'AI सुरक्षा व साइबर शील्ड']
  },
  {
    chapterNumber: 47,
    partNumber: 7,
    partTitle: 'PART 7 — ADVANCED TECHNOLOGY',
    title: 'Quantum Technology',
    subtitle: 'क्वांटम की डिस्ट्रीब्यूशन (QKD), क्वांटम रडार भौतिकी और पोस्ट-क्वांटम क्रिप्टोग्राफिक मानक',
    category: 'Quantum Tech',
    readTimeMinutes: 20,
    badge: 'क्वांटम रक्षा अनुसंधान',
    keyTopics: ['QKD फोटॉन-एन्क्रिप्टेड सुरक्षित चैनल', 'क्वांटम सेंसिंग मैग्नेटोमीटर्स', 'क्वांटम रडार सिद्धांत', 'DRDO क्वांटम लैब्स']
  },
  {
    chapterNumber: 48,
    partNumber: 7,
    partTitle: 'PART 7 — ADVANCED TECHNOLOGY',
    title: 'Directed-Energy Technology: Scientific Overview',
    subtitle: 'हाई-पावर फाइबर लेजर्स (HEL), हाई-पावर माइक्रोवेव (HPM) और थर्मल ब्लूमिंग भौतिकी',
    category: 'Directed Energy',
    readTimeMinutes: 19,
    badge: 'डायरेक्टेड एनर्जी (DEW)',
    keyTopics: ['फाइबर लेजर बीम कम्बाइनिंग', 'थर्मल ब्लूमिंग और वायुमंडलीय सुधार', 'एंटी-ड्रोन डायरेक्टेड एनर्जी (KALI/DEW)', 'HPM इलेक्ट्रॉनिक्स डिसेबलिंग']
  },
  {
    chapterNumber: 49,
    partNumber: 7,
    partTitle: 'PART 7 — ADVANCED TECHNOLOGY',
    title: 'Digital Twins and Advanced Simulation',
    subtitle: 'विमानों और मिसाइलों के डिजिटल आभासी मॉडल, फिजिक्स-बेस्ड सिमुलेशन और लाइफटाइम प्रेडिक्शन',
    category: 'Digital Twins',
    readTimeMinutes: 17,
    badge: 'डिजिटल ट्विन्स',
    keyTopics: ['मल्टी-फिजिक्स सिमुलेशन कपलिंग', 'सेंसर टेलीमेट्री टू वर्चुअल मॉडल', 'स्ट्रक्चरल फैटीग लाइफ साइकिल', 'कॉस्ट व प्रोटोटाइप बचत']
  },
  {
    chapterNumber: 50,
    partNumber: 7,
    partTitle: 'PART 7 — ADVANCED TECHNOLOGY',
    title: 'Future Defence Technology',
    subtitle: 'अगली आधी सदी के तकनीकी ट्रेंड्स, स्पेस डिफेन्स, सब-सी स्वायत्त ड्रोन और कॉग्निटिव सिस्टम्स',
    category: 'Tech Horizon',
    readTimeMinutes: 18,
    badge: 'भविष्य का क्षितिज',
    keyTopics: ['स्पेस डोमेन अवेयरनेस (SDA)', 'अनमैन्ड अंडरवाटर व्हीकल्स (UUV)', 'बायो-इंजीनियर्ड सेंसर्स', 'कॉग्निटिव इलेक्ट्रॉनिक वॉरफेयर']
  },

  // PART 8 — FROM BLUEPRINT TO SYSTEM
  {
    chapterNumber: 51,
    partNumber: 8,
    partTitle: 'PART 8 — FROM BLUEPRINT TO SYSTEM',
    title: 'Problem Definition',
    subtitle: 'ऑपरेशनल रिक्वायरमेंट्स की पहचान, थ्रेट असेसमेंट और मिशन प्रोफाइल निर्धारण की प्रक्रिया',
    category: 'Systems Engineering',
    readTimeMinutes: 16,
    badge: 'समस्या विश्लेषण',
    keyTopics: ['थ्रेट प्रोफाइलिंग', 'मिशन ऑपरेशनल एनवलप', 'स्टेकहोल्डर इंटरव्यूज', 'सिस्टम्स इंजीनियरिंग V-मॉडल']
  },
  {
    chapterNumber: 52,
    partNumber: 8,
    partTitle: 'PART 8 — FROM BLUEPRINT TO SYSTEM',
    title: 'System Requirements',
    subtitle: 'स्टाफ क्वालिटेटिव रिक्वायरमेंट्स (GSQR/PSQR/ASQR), इंजीनियरिंग विनिर्देश और बजट ढांचा',
    category: 'Requirements',
    readTimeMinutes: 17,
    badge: 'GSQR निर्धारण',
    keyTopics: ['GSQR दस्तावेज का गठन', 'फंक्शनल बनाम नॉन-फंक्शनल जरूरतें', 'ट्रेड-ऑफ स्टडीज', 'लागत-प्रभावशीलता विश्लेषण']
  },
  {
    chapterNumber: 53,
    partNumber: 8,
    partTitle: 'PART 8 — FROM BLUEPRINT TO SYSTEM',
    title: 'Concept Design',
    subtitle: 'प्रारंभिक स्केचिंग, ट्रेड-ऑफ स्टडीज, आर्किटेक्चरल मॉड्यूल डिजाइन और रिस्क विश्लेषण',
    category: 'Design Phase',
    readTimeMinutes: 17,
    badge: 'कॉन्सेप्ट डिजाइन',
    keyTopics: ['प्रिलिमिनरी डिजाइन रिव्यू (PDR)', 'क्रिटिकल डिजाइन रिव्यू (CDR)', 'सिस्टम्स मॉडलिंग (SysML)', 'रिस्क मिटिगेशन']
  },
  {
    chapterNumber: 54,
    partNumber: 8,
    partTitle: 'PART 8 — FROM BLUEPRINT TO SYSTEM',
    title: 'CAD and Engineering Simulation',
    subtitle: '3D सॉलिड मॉडलिंग, फाइनाइट एलिमेंट एनालिसिस (FEA), सीएफडी एरोडायनामिक्स और थर्मल सिमुलेशन',
    category: 'CAD & Simulation',
    readTimeMinutes: 18,
    badge: 'CAD / FEA / CFD',
    keyTopics: ['3D CAD मॉडलिंग मानक', 'FEA स्ट्रेस एनालिसिस', 'CFD शॉक वेव विजुअलाइजेशन', 'इलेक्ट्रोमैग्नेटिक सिमुलेशन (HFSS)']
  },
  {
    chapterNumber: 55,
    partNumber: 8,
    partTitle: 'PART 8 — FROM BLUEPRINT TO SYSTEM',
    title: 'Prototype Development',
    subtitle: 'रैपिड प्रोटोटाइपिंग, सीएनसी 5-एक्सिस मशीनिंग, सब-सिस्टम फैब्रिकेशन और पहले मॉडल की असेंबली',
    category: 'Prototyping',
    readTimeMinutes: 18,
    badge: 'प्रोटोटाइपिंग',
    keyTopics: ['5-एक्सिस CNC मशीनिंग', '3D मेटल प्रिंटिंग (DMLS)', 'इलेक्ट्रॉनिक्स फैब व सोल्डरिंग', 'सब-सिस्टम इंटीग्रेशन']
  },
  {
    chapterNumber: 56,
    partNumber: 8,
    partTitle: 'PART 8 — FROM BLUEPRINT TO SYSTEM',
    title: 'Laboratory Testing',
    subtitle: 'पर्यावरणीय चैंबर परीक्षण (-40°C से +60°C), वाइब्रेशन शेकर टेबल्स और ईएमसी/ईएमआई कक्ष',
    category: 'Lab Testing',
    readTimeMinutes: 18,
    badge: 'लैब टेस्टिंग',
    keyTopics: ['MIL-STD-810G एनवायरनमेंटल टेस्ट्स', 'वाइब्रेशन और शॉक प्रोफाइल्स', 'एनेकोइक चैंबर RF मेजरमेंट', 'थर्मल साइकलिंग']
  },
  {
    chapterNumber: 57,
    partNumber: 8,
    partTitle: 'PART 8 — FROM BLUEPRINT TO SYSTEM',
    title: 'Field Evaluation',
    subtitle: 'यूजर ट्रायल्स: पोखरण का भीषण मरुस्थल, लेह-लद्दाख का शून्य तापमान और अंडमान की समुद्री नमी',
    category: 'Field Trials',
    readTimeMinutes: 19,
    badge: 'यूजर फील्ड ट्रायल्स',
    keyTopics: ['रेगिस्तानी ग्रीष्मकालीन ट्रायल्स', 'हाई-एल्टीट्यूड शीतकालीन ट्रायल्स', 'यूजर ट्रायल टीम (DGQA)', 'अंतिम सुधार व फीडबैक लूप']
  },
  {
    chapterNumber: 58,
    partNumber: 8,
    partTitle: 'PART 8 — FROM BLUEPRINT TO SYSTEM',
    title: 'Quality Assurance',
    subtitle: 'डायरेक्टोरेट जनरल ऑफ क्वालिटी एश्योरेंस (DGQA), शून्य दोष विनिर्माण और सुरक्षा कारक',
    category: 'QA & Safety',
    readTimeMinutes: 17,
    badge: 'DGQA गुणवत्ता',
    keyTopics: ['DGQA भूमिका व अधिकार', 'सिक्स सिग्मा व मिलिट्री ग्रेड स्टैंडर्ड्स', 'ट्रेसिबिलिटी व बारकोडिंग', 'सुरक्षा कारक (Safety Margins)']
  },
  {
    chapterNumber: 59,
    partNumber: 8,
    partTitle: 'PART 8 — FROM BLUEPRINT TO SYSTEM',
    title: 'Manufacturing Ecosystem',
    subtitle: 'डिफेंस पब्लिक सेक्टर अंडरटेकिंग्स (HAL, BEL, BDL), निजी उद्योग और टियर 1/2/3 सप्लायर्स',
    category: 'Manufacturing',
    readTimeMinutes: 18,
    badge: 'उत्पादन इकोसिस्टम',
    keyTopics: ['DPSUs की भूमिका', 'प्राइवेट डिफेंस मैन्युफैक्चरर्स', 'MSME टियर-3 सप्लाई चेन', 'डिफेंस इंडस्ट्रियल कॉरिडोर (UP, TN)']
  },
  {
    chapterNumber: 60,
    partNumber: 8,
    partTitle: 'PART 8 — FROM BLUEPRINT TO SYSTEM',
    title: 'Maintenance, Upgrades and Technology Evolution',
    subtitle: 'मिड-लाइफ अपग्रेड्स (MLU), प्रिवेंटिव रिपेयर, लॉजिस्टिक्स इन्वेंट्री और डिएकमीशनिंग चक्र',
    category: 'Lifecycle & MLU',
    readTimeMinutes: 17,
    badge: 'MLU अपग्रेड्स',
    keyTopics: ['मिड-लाइफ एवियोनिक्स अपग्रेड्स', 'MTBF (मीन टाइम बिटवीन फेलियर्स)', 'स्पेयर पार्ट्स इन्वेंट्री मैनेजमेंट', 'डिएकमीशनिंग व रीसाइक्लिंग']
  },

  // PART 9 — INDIA'S DEFENCE TECHNOLOGY ECOSYSTEM
  {
    chapterNumber: 61,
    partNumber: 9,
    partTitle: "PART 9 — INDIA'S DEFENCE TECHNOLOGY ECOSYSTEM",
    title: 'DRDO Laboratories',
    subtitle: 'मिसाइल क्लस्टर (DRDL, RCI, ASL), इलेक्ट्रॉनिक्स (LRDE), एरोनॉटिक्स (ADE), और आर्मामेंट्स (ARDE)',
    category: 'DRDO Clusters',
    readTimeMinutes: 20,
    badge: 'DRDO लैब्स क्लस्टर',
    keyTopics: ['मिसाइल क्लस्टर हैदराबाद', 'LRDE बंगलुरु रडार विंग', 'ADE व ADA एयरोनॉटिक्स', 'ARDE पुणे आर्मामेंट्स']
  },
  {
    chapterNumber: 62,
    partNumber: 9,
    partTitle: "PART 9 — INDIA'S DEFENCE TECHNOLOGY ECOSYSTEM",
    title: 'Indian Armed Forces and R&D',
    subtitle: 'थलसेना, नौसेना और वायुसेना की तकनीकी शाखाएं, प्रोजेक्ट मैनेजमेंट टीमें और साझा रिसर्च',
    category: 'Tri-Services R&D',
    readTimeMinutes: 18,
    badge: 'सशस्त्र सेनाएं व R&D',
    keyTopics: ['आर्मी डिजाइन ब्यूरो (ADB)', 'नेवल डिजाइन डायरेक्टोरेट', 'एयरफोर्स सॉफ्टवेयर डेवलपमेंट सेंटर', 'ट्राइ-सर्विसेज इंटीग्रेशन']
  },
  {
    chapterNumber: 63,
    partNumber: 9,
    partTitle: "PART 9 — INDIA'S DEFENCE TECHNOLOGY ECOSYSTEM",
    title: 'Public and Private Industry Collaboration',
    subtitle: 'HAL, BEL, BDL के साथ L&T, Tata Advanced Systems, Bharat Forge और Godrej का सहयोग',
    category: 'Industry Partnerships',
    readTimeMinutes: 18,
    badge: 'पब्लिक-प्राइवेट पार्टनरशिप',
    keyTopics: ['L&T पिनका व सबमरीन ढांचा', 'टाटा बोइंग एयरोस्पेस जॉइंट वेंचर', 'भारत फोर्ज आर्टिलरी गन', 'BEL-प्राइवेट रडार असेंबली']
  },
  {
    chapterNumber: 64,
    partNumber: 9,
    partTitle: "PART 9 — INDIA'S DEFENCE TECHNOLOGY ECOSYSTEM",
    title: 'Startups and Defence Innovation',
    subtitle: 'iDEX (Innovations for Defence Excellence), DISC चुनौतियां, ग्रांट्स और डिफेंस टेक उद्यमिता',
    category: 'Startups & iDEX',
    readTimeMinutes: 18,
    badge: 'iDEX स्टार्टअप्स',
    keyTopics: ['iDEX योजना संरचना', 'डिफेंस इंडिया स्टार्टअप चैलेंज (DISC)', 'प्राइवेट सैटेलाइट व ड्रोन मेकर्स', 'वेंचर फंडिंग व प्रोटोटाइप ग्रांट्स']
  },
  {
    chapterNumber: 65,
    partNumber: 9,
    partTitle: "PART 9 — INDIA'S DEFENCE TECHNOLOGY ECOSYSTEM",
    title: 'Technology Transfer',
    subtitle: 'DRDO से उद्योगों को तकनीक हस्तांतरण (ToT), रॉयल्टी नीतियां, पेटेंट शेयरिंग और कमर्शियलाइजेशन',
    category: 'Technology Transfer',
    readTimeMinutes: 17,
    badge: 'ToT नीतियां',
    keyTopics: ['LAToT एग्रीमेंट्स', 'जीरो रॉयल्टी पॉलिसी संवर्धन', 'क्वालिटी ऑडिट्स व हैंडहोल्डिंग', 'एक्सपोर्ट क्लीयरेंस DDP']
  },
  {
    chapterNumber: 66,
    partNumber: 9,
    partTitle: "PART 9 — INDIA'S DEFENCE TECHNOLOGY ECOSYSTEM",
    title: 'Indigenous Manufacturing',
    subtitle: 'उत्तर प्रदेश और तमिलनाडु डिफेंस कॉरिडोर, सकारात्मक स्वदेशीकरण सूचियां और निर्यात वृद्धि',
    category: 'Indigenisation',
    readTimeMinutes: 18,
    badge: 'स्वदेशी कॉरिडोर',
    keyTopics: ['पॉजिटिव इंडिजिनाइजेशन लिस्ट्स (PIL)', 'UP व TN डिफेंस कॉरिडोर्स', 'डिफेंस एक्सपोर्ट्स ₹21,000+ करोड़', 'ग्लोबल सप्लाई चेन इंटीग्रेशन']
  },
  {
    chapterNumber: 67,
    partNumber: 9,
    partTitle: "PART 9 — INDIA'S DEFENCE TECHNOLOGY ECOSYSTEM",
    title: "Future of India's Defence R&D",
    subtitle: 'अकादमिक रिसर्च चेयर्स (IITs/IISc), डीआरडीओ इंडस्ट्री एकेडेमिया सेंटर्स और युवा वैज्ञानिक लैब्स',
    category: 'Future R&D',
    readTimeMinutes: 19,
    badge: 'युवा वैज्ञानिक लैब्स',
    keyTopics: ['DRDO यंग साइंटिस्ट लैब्स (DYSL)', 'IIT मद्रास/कानपुर/बॉम्बे रिसर्च चेयर्स', 'एकेडमिक पार्टनरशिप्स', 'मिशन 2047 विजन']
  },

  // PART 10 — FUTURE
  {
    chapterNumber: 68,
    partNumber: 10,
    partTitle: 'PART 10 — FUTURE',
    title: 'AI-Driven Defence Systems',
    subtitle: 'कॉग्निटिव इलेक्ट्रॉनिक युद्ध, वास्तविक समय में युद्धक्षेत्र परिदृश्य निर्माण और न्यूरल नेट्स',
    category: 'AI Horizon',
    readTimeMinutes: 18,
    badge: 'कॉग्निटिव डिफेंस AI',
    keyTopics: ['कॉग्निटिव ईडब्ल्यू एल्गोरिदम', 'रियल-टाइम थ्रेट प्रेडिक्शन', 'न्यूरल नेटवर्क एम्बेडिंग', 'एज कंप्यूटिंग हार्डवेयर']
  },
  {
    chapterNumber: 69,
    partNumber: 10,
    partTitle: 'PART 10 — FUTURE',
    title: 'Autonomous Platforms',
    subtitle: 'स्वचालित जमीनी कॉम्बैट व्हीकल्स, सब-सी स्वायत्त ग्लाइडर्स और मानव रहित सतह के जहाज (USV)',
    category: 'Unmanned Fleets',
    readTimeMinutes: 18,
    badge: 'ऑटोनॉमस प्लेटफॉर्म्स',
    keyTopics: ['अनमैन्ड सरफेस वेसल्स (USV)', 'अंडरवाटर ग्लाइडर्स', 'ऑटोनॉमस लॉजिस्टिक्स ट्रकों का काफिला', 'कोऑर्डिनेटेड मल्टी-डोमेन मिशन']
  },
  {
    chapterNumber: 70,
    partNumber: 10,
    partTitle: 'PART 10 — FUTURE',
    title: 'Next-Generation Sensors',
    subtitle: 'फोटोनिक रडार, क्वांटम इनर्शियल सेंसर्स और टेराहर्ट्ज़ (THz) इमेजिंग सिस्टम्स',
    category: 'Next-Gen Sensors',
    readTimeMinutes: 19,
    badge: 'फोटोनिक रडार',
    keyTopics: ['माइक्रोवेव फोटोनिक्स राडार', 'क्वांटम ग्रेवीमीटर्स', 'टेराहर्ट्ज़ वेव पेनेट्रेशन', 'अल्ट्रा-वाइडबैंड सेंसिंग']
  },
  {
    chapterNumber: 71,
    partNumber: 10,
    partTitle: 'PART 10 — FUTURE',
    title: 'Future Aircraft',
    subtitle: '6वीं पीढ़ी के फाइटर कॉन्सेप्ट्स: वेरिएबल साइकिल इंजन, लेजर सेल्फ-डिफेंस और वर्टिकल स्टेबलाइजर-लेस डिजाइन',
    category: '6th Gen Aircraft',
    readTimeMinutes: 19,
    badge: '6th Gen फाइटर',
    keyTopics: ['वेरिएबल साइकिल इंजन (VCE)', 'टेललेस स्टील्थ कॉन्फ़िगरेशन', 'डायरेक्टेड एनर्जी सेल्फ डिफेंस', 'न्यूरल पायलट इंटरफेस']
  },
  {
    chapterNumber: 72,
    partNumber: 10,
    partTitle: 'PART 10 — FUTURE',
    title: 'Future Missile and Air-Defence Research',
    subtitle: 'हाइपरसोनिक ग्लाइड व्हीकल्स (HGV), एंटी-बैलिस्टिक मिसाइल (AD-1/AD-2) और मल्टी-लेयर्ड शील्ड्स',
    category: 'Next-Gen Missiles',
    readTimeMinutes: 20,
    badge: 'बैलिस्टिक डिफेंस AD-1',
    keyTopics: ['हाइपरसोनिक ग्लाइड व्हीकल ट्रैजेक्टरी', 'AD-1 और AD-2 एक्सो-एंडो वायुमंडलीय इंटरसेप्टर्स', 'डायरेक्ट-हिट काइनेटिक किल', 'मल्टी-लेयर एयर डिफेंस']
  },
  {
    chapterNumber: 73,
    partNumber: 10,
    partTitle: 'PART 10 — FUTURE',
    title: 'Space-Linked Defence Technologies',
    subtitle: 'डिफेंस स्पेस एजेंसी (DSA), मिशन शक्ति एंटी-सैटेलाइट (A-SAT) और लियो सर्विलांस नेटवर्क',
    category: 'Space Defence',
    readTimeMinutes: 20,
    badge: 'स्पेस टेक्नोलॉजी',
    keyTopics: ['मिशन शक्ति (27 मार्च 2019 A-SAT)', 'डिफेंस स्पेस एजेंसी (DSA)', 'LEO सर्विलांस सैटेलाइट्स', 'स्पेस सिचुएशनल अवेयरनेस (SSA)']
  },
  {
    chapterNumber: 74,
    partNumber: 10,
    partTitle: 'PART 10 — FUTURE',
    title: 'Technology Challenges Ahead',
    subtitle: 'सेमीकंडक्टर फैब्रिकेशन, क्रिटिकल रेयर अर्थ मिनरल्स, सुपरअलॉय निर्भरता और साइबर थ्रेट्स',
    category: 'Critical Challenges',
    readTimeMinutes: 18,
    badge: 'रणनीतिक चुनौतियां',
    keyTopics: ['सेमीकंडक्टर फैब आत्मनिर्भरता', 'टाइटेनियम व रेयर-अर्थ मिनरल्स', 'एडवांस्ड टर्बाइन सुपरअलॉयज', 'सप्लाई चेन साइबर डिफेंस']
  },
  {
    chapterNumber: 75,
    partNumber: 10,
    partTitle: 'PART 10 — FUTURE',
    title: 'Conclusion: From Research to Innovation',
    subtitle: 'वैज्ञानिक सोच, राष्ट्रनिर्माण, इंजीनियरिंग छात्रों के लिए शोध के नए अवसर और HK VELORA का विजन',
    category: 'Conclusion',
    readTimeMinutes: 16,
    badge: 'निष्कर्ष व विजन',
    keyTopics: ['विज्ञान व राष्ट्र सेवा का संगम', 'युवा छात्रों के लिए करियर मार्ग', 'HK VELORA का इंजीनियरिंग मिशन', '2047 विकसित भारत की संकल्पना']
  }
];
