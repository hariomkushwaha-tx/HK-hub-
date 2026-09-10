import { EBookItem } from '../types';

export const COMPETITIVE_EXAMS_BOOKS_DATA: EBookItem[] = [
  {
    id: 'comp-upsc-polity-constitution',
    title: 'Indian Polity & Constitution Master Handbook',
    subtitle: 'Comprehensive Guide to Fundamental Rights, Parliament & Federal Structure for UPSC & State PSCs',
    author: 'Dr. Rajeshwardutt Shastri & HK VELORA Academic Cell',
    authorBio: 'Distinguished constitutional law researcher, civil services educator, and senior fellow at HK VELORA Open Education Series.',
    publisher: 'HK VELORA Open Education Series',
    description: 'A structured, student-first analysis of the Indian Constitution, Parliamentary democracy, emergency provisions, and judicial landmark cases, fully aligned with civil services and competitive exams syllabi.',
    shortDescription: 'Complete Indian Constitution and Polity analysis with articles, amendments, and Supreme Court rulings.',
    category: 'General Knowledge',
    subcategory: 'UPSC & Civil Services',
    coverGradient: 'from-amber-700 via-orange-800 to-slate-950',
    pages: 420,
    format: 'EPUB / PDF',
    difficulty: 'All Levels',
    rating: 4.9,
    reviewCount: 230,
    price: 0,
    isFree: true,
    badge: 'UPSC Essential',
    tags: ['Polity', 'Constitution', 'UPSC', 'Civil Services', 'Fundamental Rights', 'Indian Government'],
    language: 'Bilingual (Hindi / English)',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Faculty of Constitutional & Administrative Studies',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Preamble and Historical Evolution of the Indian Constitution',
      'Fundamental Rights (Articles 12-35) & Fundamental Duties',
      'Directive Principles of State Policy (DPSP) and Social Justice',
      'The Union Executive: President, Prime Minister and Council of Ministers',
      'The Parliament of India: Structure, Bills, and Parliamentary Committees',
      'The Judiciary: Supreme Court, High Courts & Judicial Review',
      'Federal Relations: Center-State Legislative, Administrative, and Financial Ties',
      'Constitutional Bodies: Election Commission, UPSC, CAG & Finance Commission'
    ],
    chaptersPreview: [
      {
        title: 'Preamble and Historical Evolution of the Indian Constitution',
        summary: 'Traces the constitutional journey from Regulating Act 1773 and Government of India Act 1935 to the Constituent Assembly debates and Preamble philosophy.',
        keyPoints: [
          'The Preamble is the identity card of the Constitution (N.A. Palkhivala).',
          'Key keywords: Sovereign, Socialist, Secular, Democratic, Republic, Justice, Liberty, Equality, Fraternity.',
          '42nd Constitutional Amendment Act 1976 added Socialist, Secular, and Integrity.',
          'Kesavananda Bharati case (1973) held that the Preamble is an integral part of the Constitution and subject to Basic Structure doctrine.'
        ],
        content: `### संविधान की प्रस्तावना एवं ऐतिहासिक पृष्ठभूमि (Preamble & Historical Background)

भारतीय संविधान दुनिया का सबसे विस्तृत और लिखित संविधान है। 26 नवम्बर 1949 को इसे संविधान सभा (Constituent Assembly) द्वारा अंगीकृत (Adopted) किया गया तथा 26 जनवरी 1950 को यह पूर्ण रूप से प्रभावी हुआ।

#### 1. प्रस्तावना के मूल आदर्श (Core Philosophy of Preamble)
- **संप्रभुता (Sovereignty):** भारत आंतरिक और बाह्य दोनों स्तरों पर किसी विदेशी सत्ता के अधीन नहीं है।
- **समाजवादी (Socialist):** लोकतांत्रिक समाजवाद का लक्ष्य गरीबी, अज्ञान और अवसरों की असमानता को समाप्त करना है।
- **पंथनिरपेक्ष (Secular):** राज्य का अपना कोई धर्म नहीं है; सभी धर्मों को समान सम्मान और संरक्षण प्राप्त है।
- **लोकतांत्रिक (Democratic):** जनता द्वारा चुनी गई प्रतिनिधि सरकार (सार्वभौमिक वयस्क मताधिकार)।
- **गणराज्य (Republic):** राज्य का प्रमुख (राष्ट्रपति) निर्वाचित होता है, वंशानुगत नहीं।

#### 2. महत्वपूर्ण ऐतिहासिक मील के पत्थर (Key Historical Milestones)
1. **1935 का भारत सरकार अधिनियम:** संघीय व्यवस्था, राज्यपाल का पद, न्यायपालिका और आपातकालीन प्रावधानों का प्रमुख स्रोत।
2. **संविधान सभा की पहली बैठक:** 9 दिसंबर 1946 को डॉ. सच्चिदानंद सिन्हा की अध्यक्षता में।
3. **प्रारूप समिति (Drafting Committee):** डॉ. बी. आर. अम्बेडकर की अध्यक्षता में 29 अगस्त 1947 को गठित।`,
        realWorldUse: 'Essential for understanding civil rights, filing public interest litigations (PIL), and mastering competitive examinations.',
        exercise: 'Q1: What are the three words added to the Preamble by the 42nd Amendment? Q2: Discuss whether the Preamble can be amended under Article 368.'
      },
      {
        title: 'Fundamental Rights (Articles 12-35) & Fundamental Duties',
        summary: 'Exhaustive examination of Rights to Equality, Freedom, Protection Against Exploitation, Religious Freedom, and Constitutional Remedies (Article 32).',
        keyPoints: [
          'Part III of the Constitution is referred to as the Magna Carta of India.',
          'Article 14 guarantees Equality before Law and Equal Protection of Laws.',
          'Article 19 protects six fundamental freedoms for citizens.',
          'Article 21 provides Protection of Life and Personal Liberty; expanded to include Right to Privacy (Puttaswamy case).',
          'Article 32 allows citizens to approach the Supreme Court directly for enforcement of Fundamental Rights (Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto).'
        ],
        content: `### मौलिक अधिकार (Fundamental Rights: Articles 12-35)

मौलिक अधिकार नागरिक स्वतंत्रता की आधारशिला हैं। इन्हें अमेरिकी संविधान के 'Bill of Rights' से प्रेरित होकर तैयार किया गया है।

#### छह मौलिक अधिकार (Six Core Rights):
1. **समानता का अधिकार (Articles 14-18):** कानून के समक्ष समानता, भेदभाव का निषेध, सार्वजनिक रोजगार में अवसर की समानता, अस्पृश्यता का अंत, उपाधियों का अंत।
2. **स्वतंत्रता का अधिकार (Articles 19-22):** वाक एवं अभिव्यक्ति की स्वतंत्रता, शांतिपूर्ण सम्मेलन, संघ निर्माण, निर्बाध संचरण, निवास और व्यापार।
3. **शोषण के विरुद्ध अधिकार (Articles 23-24):** मानव दुर्व्यापार व बंधुआ मजदूरी निषेध, बाल श्रम निषेध।
4. **धार्मिक स्वतंत्रता का अधिकार (Articles 25-28):** अंतःकरण की स्वतंत्रता, धर्म के प्रचार का अधिकार।
5. **संस्कृति और शिक्षा संबंधी अधिकार (Articles 29-30):** अल्पसंख्यकों की भाषा, लिपि और संस्कृति का संरक्षण।
6. **संवैधानिक उपचारों का अधिकार (Article 32):** डॉ. अम्बेडकर ने इसे 'संविधान का हृदय एवं आत्मा' (Heart and Soul) कहा था। इसके तहत सुप्रीम कोर्ट 5 रिट जारी कर सकता है:
   - *Habeas Corpus (बंदी प्रत्यक्षीकरण)*
   - *Mandamus (परमादेश)*
   - *Prohibition (प्रतिषेध)*
   - *Certiorari (उत्प्रेषण)*
   - *Quo-Warranto (अधिकार पृच्छा)*`,
        realWorldUse: 'Protects citizens against arbitrary state action and forms the legal ground for major human rights advocacy in India.',
        exercise: 'Explain the difference between Habeas Corpus and Mandamus writs with real-world examples.'
      }
    ],
    studyNotes: [
      'Revise landmark cases: Kesavananda Bharati (1973), Maneka Gandhi (1978), and Puttaswamy (2017).',
      'Remember: Fundamental Rights are justiciable, whereas DPSPs are non-justiciable but fundamental to governance.'
    ]
  },
  {
    id: 'comp-upsc-modern-history',
    title: 'Modern Indian History & Freedom Struggle',
    subtitle: 'From European Advent and 1857 Revolt to Indian Independence, Partition & Integration',
    author: 'Prof. Virendra Nath & HK VELORA History Faculty',
    authorBio: 'Senior historian, researcher on modern colonial archives, and faculty member at HK VELORA Open Education Series.',
    publisher: 'HK VELORA Open Education Series',
    description: 'Chronological and analytical breakdown of the British conquest of India, socio-religious reform movements, early nationalism, the Gandhian mass movements, and freedom fighters.',
    shortDescription: 'From 1757 Battle of Plassey to 1947 Independence: detailed movements, leaders, and acts.',
    category: 'General Knowledge',
    subcategory: 'UPSC & Civil Services',
    coverGradient: 'from-red-900 via-rose-950 to-slate-950',
    pages: 380,
    format: 'EPUB / PDF',
    difficulty: 'All Levels',
    rating: 4.8,
    reviewCount: 195,
    price: 0,
    isFree: true,
    badge: 'Best Seller',
    tags: ['History', 'Modern India', 'Freedom Struggle', 'Gandhi', 'Subhas Chandra Bose', '1857 Revolt'],
    language: 'Hindi / English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Modern History Research Wing',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Decline of Mughal Empire & Rise of European Trading Companies',
      'British Expansion Policies: Subsidiary Alliance & Doctrine of Lapse',
      'The Revolt of 1857: Causes, Leaders, Impact & Failure Analysis',
      'Socio-Religious Reform Movements: Raja Ram Mohan Roy, Dayanand Saraswati & Vivekananda',
      'Formation of INC, Moderates vs Extremists, and Bengal Partition (1905)',
      'Gandhian Era: Non-Cooperation Movement, Civil Disobedience & Quit India',
      'Revolutionary Nationalism: Bhagat Singh, Chandrashekhar Azad & INA (Subhas Chandra Bose)',
      'Mountbatten Plan, Partition, and Integration of Princely States (Sardar Patel)'
    ],
    chaptersPreview: [
      {
        title: 'The Revolt of 1857: Causes, Leaders, Impact & Failure Analysis',
        summary: 'Detailed study of political, economic, socio-religious and immediate triggers of the Great Revolt of 1857 and Queen Victoria’s Proclamation of 1858.',
        keyPoints: [
          'Immediate trigger: Greased cartridges issue in the Enfield Rifle at Meerut/Barrackpore.',
          'Key Leaders: Mangal Pandey (Barrackpore), Rani Lakshmibai (Jhansi), Kunwar Singh (Jagdishpur, Bihar), Nana Saheb (Kanpur), Begum Hazrat Mahal (Lucknow).',
          'Government of India Act 1858 transferred power from East India Company to the British Crown.',
          'The Governor-General of India was redesignated as Viceroy (Lord Canning was first Viceroy).'
        ],
        content: `### 1857 का प्रथम स्वतंत्रता संग्राम (The Revolt of 1857)

1857 का विद्रोह ब्रिटिश ईस्ट इंडिया कंपनी के 100 वर्षों के शोषणकारी शासन (1757-1857) के विरुद्ध भारतीय जनता, सैनिकों और शासकों का संगठित जन-आक्रोश था।

#### 1. विद्रोह के बहुआयामी कारण (Multiple Causes)
- **आर्थिक कारण:** अत्यधिक लगान व्यवस्था (स्थायी बंदोबस्त, रैयतवाड़ी, महालवाड़ी), भारतीय हस्तशिल्प और बुनकरों का विनाश।
- **राजनीतिक कारण:** लॉर्ड डलहौजी की हड़प नीति (Doctrine of Lapse) के तहत सतारा, नागपुर, झांसी, अवध का अनुचित विलय।
- **धार्मिक व सामाजिक कारण:** ईसाई मिशनरियों द्वारा धर्म-परिवर्तन के प्रयास, सती प्रथा निषेध कानून और विधवा पुनर्विवाह का पारंपरिक समाज में अविश्वास।
- **तात्कालिक कारण:** एनफील्ड राइफल में गाय और सुअर की चर्बी युक्त कारतूस का प्रयोग, जिसे 29 मार्च 1857 को बैरकपुर में मंगल पांडे ने मुंह से काटने से मना कर दिया।

#### 2. परिणाम एवं दूरगामी प्रभाव (Impact of 1857)
1. ईस्ट इंडिया कंपनी के शासन का अंत और ब्रिटिश क्राउन का प्रत्यक्ष नियंत्रण।
2. महारानी विक्टोरिया का घोषणा-पत्र (1 नवंबर 1858) - भारतीय राजाओं के अधिकारों का सम्मान और धार्मिक तटस्थता का वादा।
3. सेना का पुनर्गठन (पील कमीशन): ब्रिटिश सैनिकों का अनुपात बढ़ाया गया ताकि भविष्य में सैनिक विद्रोह न हो सके।`,
        realWorldUse: 'Critically evaluates anti-colonial struggles and nation-building history for all academic and civil services exams.',
        exercise: 'Explain why the 1857 revolt failed to achieve independence despite widespread popular support.'
      }
    ],
    studyNotes: [
      'Focus on the difference between Moderates (Prayer, Petition, Protest) and Extremists (Swaraj, Boycott, National Education).',
      'Memorize chronologies of Round Table Conferences (1930, 1931, 1932) and Poona Pact (1932).'
    ]
  },
  {
    id: 'comp-upsc-geography-atlas',
    title: 'Physical & Human Geography of India',
    subtitle: 'River Systems, Monsoon Mechanisms, Soil Profiles, Minerals & Demographics for UPSC',
    author: 'Dr. Alok Ranjan Verma & HK VELORA Geography Cell',
    authorBio: 'Physical geographer, cartographer, and guest lecturer at prominent civil services prep institutions.',
    publisher: 'HK VELORA Open Education Series',
    description: 'Comprehensive physical, climatological, and economic geography of India with rich thematic map breakdowns, river basin profiles, and mineral belts.',
    shortDescription: 'Himalayan and Peninsular rivers, Indian Monsoon El Niño dynamics, soils, and demographic geography.',
    category: 'General Knowledge',
    subcategory: 'UPSC & Civil Services',
    coverGradient: 'from-teal-800 via-emerald-950 to-slate-950',
    pages: 350,
    format: 'EPUB / PDF',
    difficulty: 'All Levels',
    rating: 4.8,
    reviewCount: 175,
    price: 0,
    isFree: true,
    tags: ['Geography', 'Indian Rivers', 'Monsoon', 'Himalayas', 'Soils', 'UPSC Geography'],
    language: 'Hindi & English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Geospatial & Physical Sciences Wing',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Physiographic Divisions of India: Himalayas, Northern Plains, Peninsular Plateau & Coastal Plains',
      'Drainage Systems: Himalayan Rivers (Indus, Ganga, Brahmaputra) vs Peninsular Rivers',
      'Climate of India: Southwest & Northeast Monsoon Mechanism, Western Disturbances & Jet Streams',
      'Soils of India: Alluvial, Black, Red, Laterite & Saline Soils',
      'Natural Vegetation, Wildlife Reserves, National Parks & Biosphere Reserves',
      'Mineral Resources & Energy Reserves (Chhota Nagpur Belt, Gondwana Coal, Petroleum)',
      'Agriculture: Cropping Seasons (Kharif, Rabi, Zaid) & Major Food/Cash Crops',
      'Human Geography: Population Density, Urbanization, and Industrial Corridors'
    ],
    chaptersPreview: [
      {
        title: 'Climate of India: Southwest & Northeast Monsoon Mechanism',
        summary: 'Detailed explanation of monsoon thermal contrasts, Inter-Tropical Convergence Zone (ITCZ) shifting, and El Niño/La Niña impacts on Indian rainfall.',
        keyPoints: [
          'The Indian monsoon is a seasonal reversal of wind systems driven by thermal contrasts between land and sea.',
          'Tibetan Plateau intense summer heating acts as a thermal engine for the Tropical Easterly Jet.',
          'Southwest Monsoon enters Kerala around June 1 through two branches: Arabian Sea branch and Bay of Bengal branch.',
          'El Niño generally suppresses Indian monsoon rainfall, whereas La Niña brings normal to above-normal rains.'
        ],
        content: `### भारतीय मानसून प्रणाली (The Mechanism of Indian Monsoon)

भारतीय मानसून देश की कृषि, अर्थव्यवस्था और जल सुरक्षा की जीवनरेखा है। यह मात्र वर्षा नहीं बल्कि भूमंडलीय वायुमंडलीय परिसंचरण का एक विशिष्ट रूप है।

#### 1. मानसून उत्पत्ति के शास्त्रीय एवं आधुनिक सिद्धांत
- **तापीय सिद्धांत (Thermal Theory):** ग्रीष्मकाल में उत्तर भारत के भूभाग का अत्यधिक गर्म होना, जिससे न्यून वायुदाब (Low Pressure) केंद्र निर्मित होता है।
- **आईटीसीजेड का स्थानांतरण (Shift of ITCZ):** जुलाई में अंतःउष्णकटिबंधीय अभिसरण क्षेत्र (ITCZ) गंगा के मैदानों की ओर खिसक जाता है।
- **सोमाली जेट और उपोष्ण पछुआ जेट (Jet Streams):** हिमालय के उत्तर में पछुआ जेट का विस्थापन दक्षिण-पश्चिम मानसून की शुरुआत का संकेत देता है।

#### 2. अल-नीनो एवं ला-नीना का प्रभाव (ENSO Dynamics)
- **अल-नीनो (El Niño):** प्रशांत महासागर में पेरू तट के पास गर्म समुद्री जलधारा का प्रवाह, जिससे भारत में सूखे की स्थिति बनने की संभावना बढ़ जाती है।
- **ला-नीना (La Niña):** पेरू तट पर अत्यधिक ठंडा पानी, जो भारतीय मानसून के लिए अत्यंत लाभकारी होता है।
- **हिंद महासागर द्विध्रुव (IOD):** धनात्मक (Positive) IOD भारतीय मानसून को प्रबल करता है।`,
        realWorldUse: 'Crucial for agricultural planning, disaster management (floods/droughts), and urban drainage engineering.',
        exercise: 'Q: How does the presence of the Himalayas influence both the summer and winter climate of the Indian subcontinent?'
      }
    ],
    studyNotes: [
      'Draw map outlines of India: practice plotting Peninsular river tributaries (Godavari, Krishna, Cauvery, Narmada, Tapi).',
      'Distinguish West-flowing rift valley rivers (Narmada, Tapi) from East-flowing delta-forming rivers.'
    ]
  },
  {
    id: 'comp-upsc-indian-economy',
    title: 'Indian Economy: Principles, Planning & Reforms',
    subtitle: 'Macroeconomic Frameworks, Banking, Inflation, Fiscal Policy & Budget Analysis',
    author: 'Prof. Kaushik Sen & HK VELORA Economics Desk',
    authorBio: 'Senior financial analyst, economic columnist, and curriculum designer at HK VELORA Open Education Series.',
    publisher: 'HK VELORA Open Education Series',
    description: 'An approachable yet rigorous handbook covering GDP accounting, RBI monetary policy instruments, Fiscal Deficit, GST, NITI Aayog, and Indian economic planning.',
    shortDescription: 'GDP, RBI Monetary Policy, Inflation, Budgeting, Banking NPAs, and Foreign Trade.',
    category: 'General Knowledge',
    subcategory: 'UPSC & Civil Services',
    coverGradient: 'from-blue-900 via-indigo-950 to-slate-950',
    pages: 360,
    format: 'EPUB / PDF',
    difficulty: 'All Levels',
    rating: 4.9,
    reviewCount: 210,
    price: 0,
    isFree: true,
    tags: ['Economy', 'GDP', 'RBI', 'Inflation', 'Fiscal Policy', 'Banking', 'UPSC'],
    language: 'English & Hindi',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Economic & Public Policy Department',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'National Income Accounting: GDP, GNP, NNP and Real vs Nominal Growth',
      'Inflation: CPI, WPI, Demand-Pull vs Cost-Push & RBI Inflation Targeting (4±2%)',
      'Monetary Policy of RBI: Repo Rate, Reverse Repo, CRR, SLR & Open Market Operations',
      'Fiscal Policy & Budget: Revenue vs Capital Receipts, Fiscal Deficit, and FRBM Act',
      'Banking Sector in India: Commercial Banks, NBFCs, NPA Crisis, and Insolvency & Bankruptcy Code',
      'External Sector: Balance of Payments (BoP), Current Account Deficit, and Forex Reserves',
      'Tax Reforms: Direct Tax Code and Goods & Services Tax (GST) Architecture',
      'Planning to NITI Aayog: Five-Year Plans History and Cooperative Federalism'
    ],
    chaptersPreview: [
      {
        title: 'Monetary Policy of RBI: Repo Rate, Reverse Repo, CRR, SLR & Open Market Operations',
        summary: 'Examines how the Reserve Bank of India controls money supply, interest rates, and financial liquidity to achieve price stability and economic expansion.',
        keyPoints: [
          'Monetary Policy Committee (MPC) consists of 6 members (3 from RBI, 3 appointed by Central Govt) with RBI Governor casting tie-break vote.',
          'Repo Rate is the interest rate at which RBI lends short-term liquidity to commercial banks against government securities.',
          'Cash Reserve Ratio (CRR) is the percentage of bank deposits that must be held in cash with RBI without earning interest.',
          'Statutory Liquidity Ratio (SLR) is the percentage banks must hold in liquid assets like gold and approved government bonds.'
        ],
        content: `### भारतीय रिज़र्व बैंक की मौद्रिक नीति (RBI Monetary Policy)

मौद्रिक नीति केंद्रीय बैंक द्वारा अर्थव्यवस्था में मुद्रा की आपूर्ति (Money Supply), ब्याज दरों और साख उपलब्धता (Credit Availability) को नियंत्रित करने का उपकरण है।

#### 1. मौद्रिक नीति के प्रमुख उपकरण (Key Policy Instruments)
1. **रेपो दर (Repo Rate):** वह दर जिस पर आरबीआई वाणिज्यिक बैंकों को सरकारी प्रतिभूतियों के बदले अल्पकालिक ऋण देता है। यदि महंगाई बढ़ती है, तो आरबीआई रेपो रेट बढ़ा देता है जिससे ऋण महंगे होते हैं और बाजार से तरलता घटती है।
2. **रिवर्स रेपो दर (Reverse Repo Rate):** वह दर जिस पर बैंक अपनी अतिरिक्त नकदी आरबीआई के पास जमा करते हैं।
3. **नकद आरक्षित अनुपात (CRR):** प्रत्येक बैंक को अपनी कुल जमा पूंजी (NDTL) का एक निश्चित प्रतिशत अनिवार्य रूप से आरबीआई के पास नकद रूप में रखना होता है।
4. **वैधानिक तरलता अनुपात (SLR):** बैंकों को अपने पास स्वर्ण, सरकारी बांड या नकदी के रूप में रखने हेतु अनिवार्य प्रतिशत।
5. **खुले बाजार की प्रक्रियाएं (Open Market Operations - OMO):** सरकारी प्रतिभूतियों की खरीद-बिक्री के माध्यम से बाजार में तरलता का प्रबंधन।`,
        realWorldUse: 'Guides home loan interest rate decisions, business loan borrowings, and stock market investments.',
        exercise: 'Explain how an increase in the Repo Rate impacts inflation and economic growth in the short run.'
      }
    ],
    studyNotes: [
      'Understand the difference between Fiscal Deficit (borrowing requirement of government) and Revenue Deficit (excess of revenue expenditure over revenue receipts).',
      'Remember current inflation targeting band is 4% with a tolerance band of ±2% (2% to 6%).'
    ]
  },
  {
    id: 'comp-upsc-environment-ecology',
    title: 'Environment, Ecology & Biodiversity Guide',
    subtitle: 'Climate Change, Wildlife Protection, Ramsar Wetlands & Environmental Treaties',
    author: 'Dr. Meenakshi Sundaram & HK VELORA Ecological Wing',
    authorBio: 'Ecologist, environmental law specialist, and wildlife conservation author at HK VELORA Open Education Series.',
    publisher: 'HK VELORA Open Education Series',
    description: 'Vital handbook for the environment section of UPSC and competitive exams, exploring trophic cascades, endangered species, national parks, Paris Agreement, and biodiversity hotspots.',
    shortDescription: 'Ecosystems, Wildlife Protection Act, Ramsar Sites, Climate Conventions (UNFCCC, COP), and Renewable Energy.',
    category: 'General Knowledge',
    subcategory: 'UPSC & Civil Services',
    coverGradient: 'from-emerald-900 via-green-950 to-slate-950',
    pages: 320,
    format: 'EPUB / PDF',
    difficulty: 'All Levels',
    rating: 4.9,
    reviewCount: 165,
    price: 0,
    isFree: true,
    tags: ['Environment', 'Ecology', 'Biodiversity', 'Climate Change', 'Wetlands', 'UPSC'],
    language: 'English & Hindi',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Environmental Studies Cell',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Ecology Fundamentals: Levels of Organization, Biomes, Food Chains & Ecological Pyramids',
      'Biodiversity Conservation: In-situ (National Parks, Sanctuaries) vs Ex-situ (Zoos, Gene Banks)',
      'Indian Biodiversity Hotspots: Western Ghats, Eastern Himalayas, Indo-Burma & Sundaland',
      'Environmental Legislation in India: Wildlife Protection Act 1972, Environmental Protection Act 1986',
      'Wetlands and Mangroves: Ramsar Convention, Montreux Record & Sundarbans Ecosystem',
      'Climate Change & Global Agreements: UNFCCC, Kyoto Protocol, Paris Agreement & COP Summits',
      'Pollution & Environmental Issues: Air Quality Index (AQI), Ozone Depletion & Plastic Waste Rules',
      'Renewable Energy Transition: Solar Energy Alliance, Green Hydrogen Mission, and Net-Zero by 2070'
    ],
    chaptersPreview: [
      {
        title: 'Biodiversity Conservation: In-situ vs Ex-situ & India’s Protected Areas',
        summary: 'Deep dive into methods of biodiversity preservation, IUCN Red List classifications, and management of National Parks and Tiger Reserves.',
        keyPoints: [
          'In-situ Conservation: Protecting species in their natural habitats (National Parks, Wildlife Sanctuaries, Biosphere Reserves).',
          'Ex-situ Conservation: Conserving outside natural habitats (Botanical Gardens, Zoological Parks, Seed Banks).',
          'National Parks enjoy higher legal protection than Wildlife Sanctuaries; human settlements and grazing are generally banned in National Parks.',
          'Project Tiger (launched in 1973) has expanded to over 54 Tiger Reserves across India.'
        ],
        content: `### जैव विविधता संरक्षण (Biodiversity Conservation)

भारत विश्व के 17 वृहद जैव-विविधता वाले देशों (Mega-diverse countries) में से एक है। पृथ्वी के कुल भौगोलिक क्षेत्रफल का मात्र 2.4% होते हुए भी भारत वैश्विक प्रजातियों का लगभग 7-8% आश्रय देता है।

#### 1. संरक्षण की दो मुख्य विधियां (Methods of Conservation)
1. **स्व-स्थाने संरक्षण (In-situ Conservation):**
   - जीव को उसके मूल प्राकृतिक आवास में ही संरक्षण दिया जाता है।
   - *राष्ट्रीय उद्यान (National Parks):* कड़े कानूनी प्रतिबंध, मानवीय गतिविधियों पर पूर्ण रोक (उदा. जिम कॉर्बेट, काजीरंगा)।
   - *वन्यजीव अभयारण्य (Wildlife Sanctuaries):* कुछ सीमित मानवीय गतिविधियों की अनुमति (जैसे चारागाह)।
   - *जैवमंडल आरक्षित क्षेत्र (Biosphere Reserves):* तीन क्षेत्र होते हैं: कोर (Core - पूर्णतः संरक्षित), बफर (Buffer - शोध व शिक्षा), संक्रमण (Transition - स्थानीय समुदाय का निवास)।
2. **बाह्य-स्थाने संरक्षण (Ex-situ Conservation):**
   - जब कोई प्रजाति अपने प्राकृतिक आवास में विलुप्त होने की कगार पर हो, तो उसे कृत्रिम या नियंत्रित पर्यावरण में रखा जाता है।
   - जैसे: प्राणि उद्यान (Zoos), वानस्पतिक उद्यान (Botanical Gardens), बीज बैंक (Seed Banks)।`,
        realWorldUse: 'Essential knowledge for wildlife administrators, forest officers, environmental policy makers, and exam aspirants.',
        exercise: 'Differentiate between a National Park and a Biosphere Reserve in terms of zoning and permissible human activities.'
      }
    ],
    studyNotes: [
      'Learn the 4 Biodiversity Hotspots in India: Western Ghats, Eastern Himalayas, Indo-Burma, and Sundaland.',
      'Remember: Ramsar Convention protects Wetlands of International Importance (Ramsar is a city in Iran).'
    ]
  },
  {
    id: 'comp-ssc-quantitative-aptitude',
    title: 'SSC CGL Quantitative Aptitude Shortcuts & Concepts',
    subtitle: 'Arithmetic, Advanced Algebra, Trigonometry, Geometry & Mensuration Master Guide',
    author: 'Er. Rakesh Mathur & HK VELORA Aptitude Council',
    authorBio: 'Competitive mathematics mentor with 15+ years experience training thousands of SSC, Railway, and State Exam toppers.',
    publisher: 'HK VELORA Open Education Series',
    description: 'Comprehensive math guide engineered specifically for SSC CGL, CHSL, CPO, and Railway exams, featuring step-by-step conceptual derivations alongside fast exam tricks.',
    shortDescription: 'Percentages, Profit & Loss, Time & Work, Algebra formulas, Trigonometry, and Geometry circles & triangles.',
    category: 'Science & Mathematics',
    subcategory: 'Competitive Aptitude',
    coverGradient: 'from-violet-900 via-purple-950 to-slate-950',
    pages: 410,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 340,
    price: 0,
    isFree: true,
    badge: 'Topper Choice',
    tags: ['Maths', 'Quantitative Aptitude', 'SSC CGL', 'Trigonometry', 'Geometry', 'Algebra', 'Aptitude'],
    language: 'Bilingual (Hindi / English)',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Quantitative Reasoning Wing',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Number System: Divisibility Rules, Unit Digits, Remainder Theorem & Prime Factorization',
      'Percentage & Fractional Equivalents Master Method',
      'Profit, Loss, Discount and Marked Price Calculations',
      'Simple Interest (SI) vs Compound Interest (CI) Differences & Shortcuts',
      'Ratio, Proportion, Mixture & Alligation Concept',
      'Time, Speed & Distance: Trains, Boats & Streams, and Relative Speed',
      'Time & Work and Pipes & Cisterns: LCM Efficiency Technique',
      'Advanced Mathematics: Algebra Identities, Trigonometric Heights & Distances, Geometry Theorems & Mensuration 2D/3D'
    ],
    chaptersPreview: [
      {
        title: 'Time & Work: The LCM Efficiency Technique',
        summary: 'Learn the definitive LCM-based method that eliminates fractions when calculating work done by individuals, groups, or alternating workers.',
        keyPoints: [
          'Assume Total Work = LCM of individual time durations in days.',
          'Efficiency = Total Work ÷ Time taken by person.',
          'Total Time required by both together = Total Work ÷ Combined Efficiency.',
          'Works effortlessly for negative work (e.g. leaking pipes or destroying tasks).'
        ],
        content: `### समय एवं कार्य: एलसीएम कार्यक्षमता विधि (Time & Work: LCM Technique)

पारंपरिक $1/x + 1/y$ भिन्न विधि परीक्षा में समय नष्ट करती है। प्रतियोगी परीक्षाओं में 'LCM Efficiency Technique' से आप 15 सेकंड में उत्तर निकाल सकते हैं।

#### 1. मूल संकल्पना (Core Concept)
- **कुल कार्य (Total Work):** दिए गए दिनों का ल.स. (LCM) मान लें।
- **कार्यक्षमता (Efficiency):** प्रति दिन किया गया कार्य = कुल कार्य ÷ दिनों की संख्या।

#### 2. व्यावहारिक उदाहरण (Solved Example)
**प्रश्न:** A किसी काम को 12 दिनों में कर सकता है और B उसी काम को 18 दिनों में कर सकता है। दोनों मिलकर काम कितने दिनों में पूरा करेंगे?

**चरण-दर-चरण समाधान:**
1. 12 और 18 का LCM = **36 इकाई** (यही हमारा कुल कार्य है)।
2. A की कार्यक्षमता = 36 ÷ 12 = **3 इकाई/दिन**।
3. B की कार्यक्षमता = 36 ÷ 18 = **2 इकाई/दिन**।
4. दोनों की संयुक्त कार्यक्षमता = 3 + 2 = **5 इकाई/दिन**।
5. कुल आवश्यक समय = कुल कार्य ÷ संयुक्त कार्यक्षमता = 36 ÷ 5 = **7.2 दिन** (या 7 सही 1/5 दिन)।`,
        realWorldUse: 'Project scheduling, workforce planning, and competitive examination mathematics.',
        exercise: 'A can complete a task in 15 days, B in 20 days. If they work on alternate days starting with A, how many days will the task take?'
      }
    ],
    studyNotes: [
      'Memorize fraction-to-percentage values up to 1/20 (e.g. 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%).',
      'For compound interest of 2 years at rate r: Difference between CI and SI = P(r/100)^2.'
    ]
  },
  {
    id: 'comp-ssc-general-reasoning',
    title: 'General Intelligence & Reasoning for SSC & State Exams',
    subtitle: 'Verbal & Non-Verbal Logic, Syllogisms, Seating Arrangements, Blood Relations & Puzzles',
    author: 'Pooja Aggarwal & HK VELORA Logic Cell',
    authorBio: 'Master trainer of verbal and analytical reasoning for competitive aspirants with over a decade of classroom mentorship.',
    publisher: 'HK VELORA Open Education Series',
    description: 'Master all reasoning concepts required for SSC CGL, CHSL, MTS, State Police, and GD exams with visual Venn diagrams, decoding matrices, and pattern identification.',
    shortDescription: 'Syllogism, Coding-Decoding, Blood Relations, Directions, Dice & Cube, and Non-Verbal patterns.',
    category: 'Puzzles & Brain',
    subcategory: 'Reasoning & Logic',
    coverGradient: 'from-fuchsia-900 via-pink-950 to-slate-950',
    pages: 330,
    format: 'EPUB / PDF',
    difficulty: 'All Levels',
    rating: 4.8,
    reviewCount: 280,
    price: 0,
    isFree: true,
    tags: ['Reasoning', 'Syllogism', 'Blood Relations', 'Coding-Decoding', 'SSC', 'Intelligence'],
    language: 'Hindi & English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Cognitive & Logic Department',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Analogy & Classification (Word, Alphabet, and Number based)',
      'Coding-Decoding: Letter shifting, Opposite pairs (AZ, BY, CX), and Matrix codes',
      'Blood Relations: Family tree drawing method & Coded relations',
      'Direction & Distance Sense: Sun angles, Pythagoras theorem and Shadows',
      'Syllogism (न्याय निगमन): 100-50 Method & Venn Diagram Method with "Some", "All", "No"',
      'Order, Ranking & Linear/Circular Seating Arrangement',
      'Dice & Cube: Opposite faces identification tricks in open & closed dice',
      'Non-Verbal Reasoning: Mirror images, Paper folding/cutting, and Figure matrix'
    ],
    chaptersPreview: [
      {
        title: 'Syllogism (न्याय निगमन): The Venn Diagram & Logic Method',
        summary: 'Comprehensive methodology to solve Syllogisms without confusion, covering universal affirmative, particular negative, and "Either-Or" conditions.',
        keyPoints: [
          'Statements are absolute premises (even if they contradict real-world facts).',
          'A conclusion is valid ONLY if it follows definitely from every possible Venn diagram.',
          'Three rules for "Either-Or" condition: Both conclusions must be individually uncertain, subjects and predicates must match, and one must be affirmative while the other is negative.'
        ],
        content: `### न्याय निगमन (Syllogisms)

प्रतियोगी परीक्षाओं में न्याय निगमन सबसे स्कोरिंग अध्याय है। इसमें दिए गए कथनों (Statements) को 100% सत्य मानकर निष्कर्ष (Conclusions) की सत्यता जांचनी होती है।

#### 1. चार प्रकार के मानक कथन:
1. **A (Universal Positive):** सभी A, B हैं (All A are B).
2. **E (Universal Negative):** कोई A, B नहीं है (No A is B).
3. **I (Particular Positive):** कुछ A, B हैं (Some A are B).
4. **O (Particular Negative):** कुछ A, B नहीं हैं (Some A are not B).

#### 2. वेन आरेख बनाने का अचूक नियम:
- कभी भी अपनी ओर से अति-आरेख (Over-assumptions) न बनाएं। न्यूनतम अतिक्रमण (Minimum Overlap) का नियम लागू करें।
- यदि कथन है "कुछ किताबें कलम हैं" और "सभी कलम मेज हैं", तो किताबें का वह भाग जो कलम है, निश्चित रूप से मेज होगा।`,
        realWorldUse: 'Sharpens deductive reasoning, analytical decision making, and competitive exam accuracy.',
        exercise: 'Statements: All dogs are mammals. Some mammals are aquatic. Conclusion: Are some dogs definitely aquatic? Justify.'
      }
    ],
    studyNotes: [
      'Learn alphabet opposite pairs: A-Z (Azad), B-Y (Boy), C-X (Crux), D-W (Dew), E-V (Evening), F-U (Fun), G-T (GT Road), H-S (High School), I-R (Indian Railway), J-Q (Jungle Queen), K-P (Kanpur), L-O (Love), M-N (Man).',
      'For Dice: If two faces are common in two dice positions, the remaining faces are always opposite to each other.'
    ]
  },
  {
    id: 'comp-ssc-english-comprehension',
    title: 'Objective English Grammar & Vocab for Competitive Exams',
    subtitle: 'Golden Grammar Rules, Spotting Errors, Cloze Test, Idioms & One-Word Substitutions',
    author: 'Dr. Christopher Vance & HK VELORA Language Cell',
    authorBio: 'Grammarian, linguistic researcher, and author specializing in bilingual English learning pedagogy for competitive aspirants.',
    publisher: 'HK VELORA Open Education Series',
    description: 'Transform your English comprehension from a stumbling block into your highest scoring section across SSC CGL, CHSL, Bank PO, and CDS examinations.',
    shortDescription: '100 Golden Rules of Grammar, Subject-Verb Agreement, Vocab Root Words, and Reading Comprehension.',
    category: 'Digital Skills & Practical Guides',
    subcategory: 'English & Communication',
    coverGradient: 'from-sky-900 via-blue-950 to-slate-950',
    pages: 340,
    format: 'EPUB / PDF',
    difficulty: 'All Levels',
    rating: 4.8,
    reviewCount: 225,
    price: 0,
    isFree: true,
    tags: ['English', 'Grammar', 'Vocabulary', 'Idioms', 'SSC CGL', 'Spotting Errors'],
    language: 'English with Hindi explanations',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Linguistic & Communication Cell',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Subject-Verb Agreement: 15 Golden Rules for Singular vs Plural Subjects',
      'Noun & Pronoun Nuances: Uncountable nouns, collective nouns and relative pronouns',
      'Tense Consistency and Conditional Sentences (Types 0, 1, 2, 3)',
      'Prepositions & Phrasal Verbs: Fixed prepositions and confusing spatial prepositions',
      'Active & Passive Voice Transformation Techniques',
      'Direct and Indirect Speech (Narration Rules)',
      'Vocabulary Expansion through Latin/Greek Root Words',
      'Idioms, Phrases, and One-Word Substitutions Master Compilation'
    ],
    chaptersPreview: [
      {
        title: 'Subject-Verb Agreement: The Essential Rules',
        summary: 'Examines common traps in subject-verb pairing, including phrases like "along with", "neither... nor", and indefinite pronouns.',
        keyPoints: [
          'When two subjects are joined by "as well as", "along with", "together with", the verb agrees with the FIRST subject.',
          'When joined by "neither... nor" or "either... or", the verb agrees with the NEAREST (second) subject.',
          'Words like furniture, information, scenery, advice, luggage are uncountable and always take singular verbs.'
        ],
        content: `### Subject-Verb Agreement: स्वर्ण नियम (Golden Rules)

अंग्रेजी व्याकरण का मूल सिद्धांत है कि एक **Singular Subject** हमेशा **Singular Verb** लेता है और **Plural Subject** हमेशा **Plural Verb** लेता है।

#### नियम 1: 'Along with', 'As well as', 'In addition to'
जब दो कर्ता (Subjects) इन शब्दों से जुड़ते हैं, तो क्रिया (Verb) हमेशा **पहले कर्ता** के अनुसार आती है:
- *Incorrect:* The Captain, along with his sailors, were drowned.
- *Correct:* The Captain, along with his sailors, **was** drowned. (चूंकि 'Captain' एकवचन है)।

#### नियम 2: 'Neither... Nor', 'Either... Or'
इनमें क्रिया हमेशा **सबसे निकटतम कर्ता (Nearest Subject)** के अनुसार बदलती है:
- *Incorrect:* Neither Rahul nor his friends was present.
- *Correct:* Neither Rahul nor his friends **were** present. ('friends' बहुवचन है)।

#### नियम 3: हमेशा एकवचन रहने वाले संज्ञा शब्द (Always Singular Nouns)
Scenery, Furniture, Luggage, Advice, Information, Hair, Machinery, News, Mathematics, Economics. इनके साथ कभी 's' लगाकर बहुवचन नहीं बनाया जाता और क्रिया हमेशा Singular आती है।`,
        realWorldUse: 'Improves formal business emails, essay writing, and error-spotting in exams.',
        exercise: 'Spot the error: "Each of the students have submitted their project report on time."'
      }
    ],
    studyNotes: [
      'In conditional sentence Type 3: "If + had + V3, then would have + V3" (e.g. If you had studied, you would have passed).',
      'Root word trick: "Bene" = good (Benefit, Benevolent), "Mal" = bad (Malnutrition, Malicious).'
    ]
  },
  {
    id: 'comp-banking-awareness-rbi',
    title: 'Banking Awareness, RBI Guidelines & Financial Systems',
    subtitle: 'Core Banking, Payment Systems (UPI, NEFT, RTGS), Basel Norms & Financial Inclusion',
    author: 'Gaurav Singhal (Ex-Bank PO) & HK VELORA Financial Faculty',
    authorBio: 'Former public sector bank manager, banking exam coach, and financial literacy contributor at HK VELORA.',
    publisher: 'HK VELORA Open Education Series',
    description: 'Everything an aspirant needs to ace SBI PO, IBPS PO, RRB Officer Scale, and RBI Grade B exams, covering monetary history, NPA recovery tools, and modern fintech.',
    shortDescription: 'RBI functions, UPI architecture, Basel III, SARFAESI Act, IBC, and Financial Inclusion schemes.',
    category: 'General Knowledge',
    subcategory: 'Banking & Insurance',
    coverGradient: 'from-cyan-900 via-slate-900 to-slate-950',
    pages: 310,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 190,
    price: 0,
    isFree: true,
    tags: ['Banking', 'RBI', 'SBI PO', 'IBPS', 'UPI', 'Financial Awareness'],
    language: 'English & Hindi',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Banking & Financial Systems Cell',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'History of Banking in India: Nationalization (1969, 1980) & Structure of Indian Banks',
      'Reserve Bank of India: Organization, Functions, Issuer of Currency, and Lender of Last Resort',
      'Types of Bank Accounts & Negotiable Instruments (Cheque, Promissory Notes, Demand Drafts)',
      'Digital Payment Systems: UPI, IMPS, NEFT, RTGS, NACH & NPCI Role',
      'Non-Performing Assets (NPAs): SMA Categories, Provisioning Norms & SARFAESI Act',
      'Basel Accords (I, II, III): Capital Adequacy Ratio (CAR) and Risk-Weighted Assets',
      'Financial Inclusion Initiatives: PMJDY, Priority Sector Lending (PSL) & Microfinance',
      'Government Insurance & Pension Schemes (PMJJBY, PMSBY, APY) and Nabard/SIDBI Functions'
    ],
    chaptersPreview: [
      {
        title: 'Digital Payment Systems: UPI, IMPS, NEFT & RTGS Compared',
        summary: 'Technical and functional comparison of payment systems in India managed by NPCI and RBI.',
        keyPoints: [
          'NEFT (National Electronic Funds Transfer): Operates 24x7 in half-hourly batches.',
          'RTGS (Real Time Gross Settlement): Real-time processing for large-value transactions (minimum ₹2 Lakh).',
          'IMPS (Immediate Payment Service): 24x7 instant interbank electronic fund transfer managed by NPCI.',
          'UPI (Unified Payments Interface): Virtual Payment Address (VPA) based instant settlement built on IMPS rails.'
        ],
        content: `### भारत में डिजिटल भुगतान प्रणालियां (Digital Payment Systems)

भारत आज विश्व में वास्तविक समय के डिजिटल भुगतानों (Real-time Digital Payments) का वैश्विक सिरमौर है। भारतीय राष्ट्रीय भुगतान निगम (NPCI) और आरबीआई ने वित्तीय समावेशन को तकनीक से जोड़ा है।

#### मुख्य भुगतान माध्यमों की तुलना:
| माध्यम | संचालक | न्यूनतम राशि | निपटान समय (Settlement) |
|---|---|---|---|
| **NEFT** | RBI | कोई सीमा नहीं | आधे घंटे के बैचों में |
| **RTGS** | RBI | ₹2,00,000 | तत्काल (Gross Settlement) |
| **IMPS** | NPCI | ₹1 | तत्काल (24x7x365) |
| **UPI** | NPCI | ₹1 | तत्काल (मोबाइल पिन आधारित) |

#### यूनिफाइड पेमेंट्स इंटरफेस (UPI) की विशेषताएं:
- बैंक खाता नंबर और IFSC कोड साझा किए बिना केवल **VPA (Virtual Payment Address)** या मोबाइल नंबर से भुगतान।
- टू-फैक्टर ऑथेंटिकेशन (डिवाइस बाइंडिंग + 4/6 अंकों का यूपीआई पिन)।`,
        realWorldUse: 'Directly applicable in bank interview rounds and everyday digital financial security.',
        exercise: 'Explain why RTGS is referred to as "Gross Settlement" unlike NEFT batch settlements.'
      }
    ],
    studyNotes: [
      'Priority Sector Lending (PSL) targets: Domestic scheduled commercial banks must allocate 40% of their Adjusted Net Bank Credit (ANBC) to priority sectors.',
      'Remember: Basel III requires a minimum Capital to Risk-Weighted Assets Ratio (CRAR) of 9% for Indian scheduled commercial banks.'
    ]
  },
  {
    id: 'comp-railway-general-science',
    title: 'Railway RRB General Science Essentials',
    subtitle: 'Physics, Chemistry, Life Sciences & Everyday Science Applications for NTPC & Group D',
    author: 'Er. Sandeep Mishra & HK VELORA Science Faculty',
    authorBio: 'Railway examination mentor and applied physics educator with HK VELORA Open Education Series.',
    publisher: 'HK VELORA Open Education Series',
    description: 'High-yield conceptual science handbook designed for Railway Recruitment Board (RRB NTPC, Group D, ALP) aspirants, clarifying NCERT scientific principles with diagrammatic explanations.',
    shortDescription: 'Newton Laws, Electricity, Chemical Reactions, Periodic Table, Human Physiology, and Genetics.',
    category: 'Science & Mathematics',
    subcategory: 'General Science',
    coverGradient: 'from-amber-900 via-slate-900 to-slate-950',
    pages: 290,
    format: 'EPUB / PDF',
    difficulty: 'Beginner',
    rating: 4.8,
    reviewCount: 310,
    price: 0,
    isFree: true,
    tags: ['Railway', 'RRB NTPC', 'General Science', 'Physics', 'Chemistry', 'Biology'],
    language: 'Hindi & English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Applied Physical Sciences Wing',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Units, Measurements, SI Units & Scientific Instruments (Barometer, Hygrometer, etc.)',
      'Mechanics: Motion, Newton Laws, Momentum, Work, Energy & Power formulas',
      'Optics & Sound: Reflection, Refraction, Lenses, Human Eye defects and Ultrasonic waves',
      'Electricity & Magnetism: Ohm’s Law, Resistance in Series/Parallel, and Heating Effects',
      'Chemistry: States of Matter, Atomic Structure, Periodic Table Trends and Acid-Base salts',
      'Chemical Reactions, Metals vs Non-Metals, and Metallurgy basics',
      'Life Sciences: Cell Biology, Plant Tissue vs Animal Tissue, and Human Organ Systems',
      'Human Health & Diseases: Bacterial, Viral, Protozoan diseases and Vitamin deficiencies'
    ],
    chaptersPreview: [
      {
        title: 'Electricity: Ohm’s Law and Resistors in Series & Parallel',
        summary: 'Essential formulas and solved numerical problems for railway exams on current, voltage, resistance, and electrical energy consumption.',
        keyPoints: [
          'Ohm’s Law: V = I × R (Voltage = Current × Resistance at constant temperature).',
          'Series Combination: Equivalent Resistance R_eq = R1 + R2 + R3; current remains identical through all resistors.',
          'Parallel Combination: 1/R_eq = 1/R1 + 1/R2 + 1/R3; voltage remains identical across all resistors.',
          'Electrical Power: P = V × I = I²R = V²/R; 1 Commercial Unit of Electricity = 1 Kilowatt-hour (kWh) = 3.6 × 10⁶ Joules.'
        ],
        content: `### विद्युत एवं परिपथ (Electricity & Circuits)

रेलवे परीक्षाओं में विद्युत पर आधारित संख्यात्मक प्रश्न (Numericals) अनिवार्य रूप से पूछे जाते हैं।

#### 1. ओम का नियम (Ohm's Law)
स्थिर भौतिक परिस्थितियों (जैसे तापमान) में किसी चालक तार में प्रवाहित होने वाली विद्युत धारा (I) उसके दोनों सिरों के बीच विभवांतर (V) के समानुपाती होती है:
$$V = I \\times R$$
जहाँ $R$ चालक का प्रतिरोध (Resistance) है, जिसका SI मात्रक **ओम ($\\Omega$)** होता है।

#### 2. प्रतिरोधकों का संयोजन:
- **श्रेणीक्रम (Series):** $R_s = R_1 + R_2 + R_3$ (घरेलू वायरिंग में इसका प्रयोग नहीं करते क्योंकि एक उपकरण खराब होने पर पूरा परिपथ टूट जाता है)।
- **समांतरक्रम (Parallel):** $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$ (घरेलू विद्युत उपकरण समांतर क्रम में जुड़े होते हैं ताकि सभी को 220V का समान विभवांतर मिले)।`,
        realWorldUse: 'Calculates domestic electric power consumption and electricity bill calculations.',
        exercise: 'Two resistors of 6 ohms and 3 ohms are connected in parallel to a 12V battery. Calculate the total equivalent resistance and total current drawn.'
      }
    ],
    studyNotes: [
      'Memorize Vitamin deficiencies: Vit A (Night blindness), Vit B1 (Beriberi), Vit C (Scurvy), Vit D (Rickets).',
      'Sound cannot travel through vacuum (requires a material medium); Light can travel through vacuum at 3 × 10⁸ m/s.'
    ]
  },
  {
    id: 'comp-ctet-child-pedagogy',
    title: 'Child Development & Pedagogy (CDP) for CTET & State TETs',
    subtitle: 'Theories of Piaget, Vygotsky, Kohlberg, Inclusive Education & Teaching Methodologies',
    author: 'Dr. Shalini Srivastava & HK VELORA Education Faculty',
    authorBio: 'Professor of educational psychology and national teacher education curriculum advisor at HK VELORA.',
    publisher: 'HK VELORA Open Education Series',
    description: 'The definitive handbook for aspiring teachers appearing in CTET Paper 1 & 2, UPTET, REET, and Super TET, highlighting constructivist psychology and learning assessment frameworks.',
    shortDescription: 'Piaget Cognitive Stages, Vygotsky ZPD, Kohlberg Moral Stages, Inclusive Education, and NEP 2020.',
    category: 'Class 9–12 / School',
    subcategory: 'Teacher Eligibility & Pedagogy',
    coverGradient: 'from-yellow-900 via-amber-950 to-slate-950',
    pages: 280,
    format: 'EPUB / PDF',
    difficulty: 'All Levels',
    rating: 4.9,
    reviewCount: 195,
    price: 0,
    isFree: true,
    tags: ['CTET', 'Pedagogy', 'Child Development', 'Piaget', 'Vygotsky', 'Teaching'],
    language: 'Hindi & English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Department of Teacher Education & Child Psychology',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Concept of Development: Principles of Growth & Development and Heredity vs Environment',
      'Jean Piaget’s Theory of Cognitive Development: 4 Stages (Sensori-motor to Formal Operational)',
      'Lev Vygotsky’s Socio-Cultural Theory: Zone of Proximal Development (ZPD) & Scaffolding',
      'Lawrence Kohlberg’s Theory of Moral Development: Pre-conventional, Conventional, Post-conventional',
      'Progressive & Child-Centered Education (John Dewey) and Howard Gardner’s Multiple Intelligences',
      'Inclusive Education: Addressing Children with Special Needs, Dyslexia, ADHD & Gifted Learners',
      'Assessment of Learning vs Assessment for Learning (Formative vs Summative Evaluation)',
      'National Education Policy (NEP 2020): 5+3+3+4 Pedagogical Structure and Holistic Progress Cards'
    ],
    chaptersPreview: [
      {
        title: 'Jean Piaget vs Lev Vygotsky: Cognitive vs Socio-Cultural Development',
        summary: 'Comparative analysis of how children construct knowledge according to Piaget (individual discovery) and Vygotsky (social mediation and language).',
        keyPoints: [
          'Piaget viewed children as "Little Scientists" who actively construct knowledge through schema, assimilation, and accommodation.',
          'Piaget’s 4 Stages: Sensorimotor (0-2y), Preoperational (2-7y), Concrete Operational (7-11y), Formal Operational (11+y).',
          'Vygotsky emphasized that social interaction and culture precede cognitive development.',
          'Zone of Proximal Development (ZPD) is the distance between what a learner can do independently and what they can do with guided help (Scaffolding / More Knowledgeable Other - MKO).'
        ],
        content: `### बाल विकास: पियाजे बनाम वाइगोत्सकी (Piaget vs Vygotsky)

शिक्षक पात्रता परीक्षा (CTET) में पियाजे और वाइगोत्सकी के सिद्धांतों से 6 से 8 प्रश्न अवश्य आते हैं।

#### 1. जीन पियाजे का संज्ञानात्मक विकास सिद्धांत (Cognitive Theory)
पियाजे के अनुसार बालक ज्ञान का सक्रिय निर्माता है।
- **स्कीमा (Schema):** मस्तिष्क में सूचनाओं का संगठित मानसिक ढांचा।
- **आत्मसातीकरण (Assimilation):** नए अनुभव को पूर्व-मौजूद स्कीमा में शामिल करना।
- **समायोजन (Accommodation):** नई जानकारी के आधार पर पुराने स्कीमा में संशोधन करना।

#### 2. लेव वाइगोत्सकी का सामाजिक-सांस्कृतिक सिद्धांत (Socio-Cultural Theory)
वाइगोत्सकी के अनुसार भाषा और सामाजिक संवाद विचार के विकास का आधार हैं:
- **ZPD (समीपस्थ विकास का क्षेत्र):** बच्चे द्वारा स्वयं किए जाने वाले कार्य और किसी अनुभवी व्यक्ति (MKO) की सहायता से किए जाने वाले कार्य के बीच का अंतर।
- **पाड़/ढांचा (Scaffolding):** बच्चे को सीखने के दौरान दी जाने वाली अस्थायी सहायता (संकेत, मार्गदर्शन)।`,
        realWorldUse: 'Essential for creating empathetic, child-centric and differentiated classroom lesson plans.',
        exercise: 'Give an example of Scaffolding provided by a teacher while teaching double-digit multiplication.'
      }
    ],
    studyNotes: [
      'Always remember: Continuous and Comprehensive Evaluation (CCE) emphasizes formative diagnosis over high-stakes summative exams.',
      'Dyslexia = Reading difficulty; Dysgraphia = Writing difficulty; Dyscalculia = Math computation difficulty.'
    ]
  },
  {
    id: 'comp-defense-nda-cds-guide',
    title: 'NDA & CDS General Ability & SSB Interview Essentials',
    subtitle: 'Mathematics, Military History, Leadership Traits, OIR Tests & PPDT Psychology',
    author: 'Col. Vikramaditya Rathore (Retd.) & HK VELORA Defense Wing',
    authorBio: 'Decorated veteran, former SSB interviewing officer, and mentor to hundreds of commissioned defense officers.',
    publisher: 'HK VELORA Open Education Series',
    description: 'Complete preparatory guide for Union Public Service Commission NDA and CDS written exams and the 5-Day Services Selection Board (SSB) evaluation.',
    shortDescription: 'Written exam syllabus, Officer Like Qualities (15 OLQs), PPDT, Group Tasks, and Personal Interview.',
    category: 'General Knowledge',
    subcategory: 'Defense & NDA/CDS',
    coverGradient: 'from-stone-900 via-amber-950 to-slate-950',
    pages: 360,
    format: 'EPUB / PDF',
    difficulty: 'All Levels',
    rating: 4.9,
    reviewCount: 260,
    price: 0,
    isFree: true,
    tags: ['Defense', 'NDA', 'CDS', 'SSB Interview', 'Indian Army', 'Officer Like Qualities'],
    language: 'English & Hindi',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Defense Studies & Leadership Academy',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'NDA/CDS Written Examination Blueprint: Mathematics, English, and General Knowledge',
      'The 5-Day SSB Architecture: Stage 1 Screening to Stage 2 Conference',
      'Screening Stage: Officer Intelligence Rating (OIR) & Picture Perception & Discussion Test (PPDT)',
      'Psychological Battery: Thematic Apperception Test (TAT), Word Association (WAT), Situation Reaction (SRT) & Self Description (SD)',
      'Group Testing Officer (GTO) Tasks: PGT, HGT, Snake Race, Command Task and Final Group Task',
      'The Personal Interview: Rapid Fire Technique, Current Geopolitical Affairs and PIQ Form Analysis',
      'The 15 Officer Like Qualities (OLQs) and Daily Character Building',
      'Indian Armed Forces Structure: Command Headquarters, Weaponry, Military Exercises and Regimental History'
    ],
    chaptersPreview: [
      {
        title: 'The 15 Officer Like Qualities (OLQs) and Psychological Evaluation',
        summary: 'Understanding the 4 factors of OLQs assessed through Manasa (mind), Vacha (speech), and Karmana (action) in the SSB interview.',
        keyPoints: [
          'Factor I (Planning and Organizing): Effective Intelligence, Reasoning Ability, Organizing Ability, Power of Expression.',
          'Factor II (Social Adjustment): Social Adaptability, Cooperation, Sense of Responsibility.',
          'Factor III (Social Effectiveness): Initiative, Self Confidence, Speed of Decision, Ability to Influence the Group, Liveliness.',
          'Factor IV (Dynamic): Determination, Courage, Stamina.'
        ],
        content: `### 15 ऑफिसर लाइक क्वालिटीज (15 Officer Like Qualities - OLQs)

एसएसबी (SSB) में चयन किसी ज्ञान की परीक्षा नहीं, बल्कि व्यक्तित्व की उपयुक्तता (Personality Fit) की जांच है। तीनों परीक्षक—मनोवैज्ञानिक (Psychologist), जीटीओ (GTO), और साक्षात्कार अधिकारी (IO)—आपके भीतर 15 स्वाभाविक गुणों की तलाश करते हैं।

#### 1. चार मुख्य कारक (The 4 Core Factors):
- **कारक 1: नियोजन एवं संगठन (Planning & Organizing):** संकट के समय व्यावहारिक समाधान खोजना और उपलब्ध संसाधनों का सर्वोत्तम उपयोग।
- **कारक 2: सामाजिक समायोजन (Social Adjustment):** विभिन्न पृष्ठभूमि के साथियों के साथ सामंजस्य बिठाना और उत्तरदायित्व निभाना।
- **कारक 3: सामाजिक प्रभावशीलता (Social Effectiveness):** समूह का नेतृत्व करना, स्पष्ट अभिव्यक्ति और त्वरित निर्णय क्षमता।
- **कारक 4: गतिशीलता (Dynamic Qualities):** शारीरिक एवं मानसिक सहनशक्ति (Stamina), दृढ़ संकल्प और साहस।`,
        realWorldUse: 'Cultivates leadership, crisis resilience, and disciplined professional character in all fields of life.',
        exercise: 'Reflect on a recent real-life group situation where you demonstrated Initiative and Sense of Responsibility.'
      }
    ],
    studyNotes: [
      'In PPDT (Picture Perception), write a positive, realistic, and action-oriented story focused on a central character who resolves a situation.',
      'Prepare current defense deals: Rafale, S-400, BrahMos missile, INS Vikrant, and theater command reforms.'
    ]
  },
  {
    id: 'comp-static-gk-india-world',
    title: 'Static GK Encyclopaedia: First in India, Monuments & Honours',
    subtitle: 'National Parks, Classical Dances, UNESCO Heritage, High Passes, Inventions & World Superlatives',
    author: 'Sunil Kant Sharma & HK VELORA GK Cell',
    authorBio: 'General awareness researcher and creator of high-yield mnemonic learning techniques at HK VELORA.',
    publisher: 'HK VELORA Open Education Series',
    description: 'An all-inclusive visual encyclopaedia of static general knowledge for all government and competitive examinations, packed with revision tables and memory aids.',
    shortDescription: 'National Parks, UNESCO sites, Folk Dances, High Mountain Passes, Nobel Prizes, and Bharat Ratna awardees.',
    category: 'General Knowledge',
    subcategory: 'Static GK',
    coverGradient: 'from-rose-900 via-slate-900 to-slate-950',
    pages: 310,
    format: 'EPUB / PDF',
    difficulty: 'Beginner',
    rating: 4.8,
    reviewCount: 380,
    price: 0,
    isFree: true,
    tags: ['Static GK', 'General Knowledge', 'UNESCO', 'Classical Dances', 'National Parks', 'Awards'],
    language: 'Hindi & English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA General Studies Repository',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Indian Classical Dances (8 Traditions: Bharatanatyam, Kathak, Kathakali, Kuchipudi, etc.) and Folk Arts',
      'UNESCO World Heritage Sites in India: Cultural, Natural, and Mixed (Khangchendzonga)',
      'Indian National Parks, Wildlife Sanctuaries and Tiger Reserves State-by-State',
      'Mountain Passes of India (Zoji La, Nathu La, Shipki La, Lipulekh, Palghat)',
      'Important Temples, Monuments, and Architectural Masterpieces of Ancient & Medieval India',
      'First in India (Male & Female): First President, First PM, First Olympic Medalists, Space Travellers',
      'Major Awards and Honours: Bharat Ratna, Padma Awards, Param Vir Chakra, Jnanpith and Nobel Laureates of India',
      'International Organizations and Headquarters: UN, IMF, World Bank, WHO, WTO, UNESCO, BRICS, ASEAN'
    ],
    chaptersPreview: [
      {
        title: 'Indian Classical Dances: The 8 Recognized Traditions',
        summary: 'Explore the Sangeet Natak Akademi recognized classical dances of India, their origins, treatises, and signature costumes.',
        keyPoints: [
          'The 8 Classical Dances are rooted in Bharata Muni’s Natya Shastra.',
          'Bharatanatyam (Tamil Nadu): Solo dance known for fire-like precision, Alarippu to Tillana.',
          'Kathakali (Kerala): Elaborate facial makeup, green face (Paccha) for noble characters, stories from epics.',
          'Kathak (North India / UP): Focus on footwork (Tatkar), spins (Chakkars), and Lucknow/Jaipur/Banaras Gharanas.',
          'Sattriya (Assam): Founded by 15th-century saint Srimanta Sankardev as part of the Neo-Vaishnavite movement.'
        ],
        content: `### भारत के आठ शास्त्रीय नृत्य (8 Classical Dances of India)

संगीत नाटक अकादमी द्वारा भारत के आठ पारंपरिक नृत्य रूपों को शास्त्रीय नृत्य का दर्जा प्राप्त है:

1. **भरतनाट्यम (तमिलनाडु):** सबसे प्राचीन शास्त्रीय नृत्य, मंदिरों में देवदासियों द्वारा पोषित।
2. **कथक (उत्तर भारत / उत्तर प्रदेश):** 'कथा कहे सो कथक कहलाए'। इसमें चक्कर और पैरों के घुंघरुओं की गति मुख्य है।
3. **कथकली (केरल):** चेहरे पर भारी मुखौटा रूपी रंग-रोगन (हरा, लाल, काला) और आंखों की मुद्राओं से अभिनय।
4. **कुचिपुड़ी (आंध्र प्रदेश):** पीतल की थाली के किनारों पर नृत्य और सिर पर जल का कलश रखने की विशिष्ट परंपरा (तरंगम)।
5. **मोहिनीअट्टम (केरल):** 'मोहिनी' रूप से प्रेरित स्त्रियों द्वारा किया जाने वाला सौम्य, लास्य-प्रधान नृत्य।
6. **ओडिसी (ओडिशा):** 'त्रिभंग मुद्रा' (शरीर का तीन स्थानों से मुड़ना) इसका मुख्य आकर्षण है।
7. **मणिपुरी (मणिपुर):** राधा-कृष्ण की रासलीला पर आधारित, कुमिल पोशाक पहनी जाती है।
8. **सत्रिया (असम):** 15वीं सदी में महापुरुष श्रीमंत शंकरदेव द्वारा वैष्णव सत्रों (मठों) में विकसित।`,
        realWorldUse: 'High scoring section in SSC, State PCS, and Railways General Awareness.',
        exercise: 'Match the classical dance with its primary state: Sattriya, Mohiniyattam, Kuchipudi, Kathak.'
      }
    ],
    studyNotes: [
      'Remember international headquarters: Geneva (WHO, WTO, ILO); New York (UN, UNICEF); Paris (UNESCO); Washington DC (IMF, World Bank).',
      'Highest mountain pass in India: Umling La Pass (Ladakh) with the world’s highest motorable road.'
    ]
  },
  {
    id: 'comp-current-affairs-mastery',
    title: 'Current Affairs & Government Schemes Master Digest',
    subtitle: 'Flagship Social Welfare Programs, Economic Missions, Bilateral Exercises & Scientific Milestones',
    author: 'Divyansh Agnihotri & HK VELORA Editorial Board',
    authorBio: 'Chief policy editor and economic journalist managing competitive current affairs at HK VELORA.',
    publisher: 'HK VELORA Open Education Series',
    description: 'Structured analytical compendium of major government welfare schemes, ISRO space missions, defense exercises, economic indicators, and international summits.',
    shortDescription: 'PM-KISAN, Ayushman Bharat, Digital India, ISRO Chandrayaan/Aditya, and G20/BRICS outcomes.',
    category: 'General Knowledge',
    subcategory: 'Current Affairs',
    coverGradient: 'from-orange-900 via-amber-950 to-slate-950',
    pages: 300,
    format: 'EPUB / PDF',
    difficulty: 'All Levels',
    rating: 4.9,
    reviewCount: 245,
    price: 0,
    isFree: true,
    tags: ['Current Affairs', 'Government Schemes', 'ISRO', 'Economy', 'Defense Exercises', 'Welfare'],
    language: 'Hindi & English',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Current Affairs & Policy Research Wing',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Flagship Welfare Schemes: Ayushman Bharat (PMJAY), PM-KISAN, PM Awas Yojana & Jal Jeevan Mission',
      'Financial Inclusion: PM Jan Dhan Yojana, Mudra Loans, Stand-Up India and PM SVANidhi',
      'Digital Transformation & Tech: Digital India, ONDC, India Stack and Semiconductor Mission',
      'Space & Science Innovations: ISRO Chandrayaan-3, Aditya-L1 Solar Mission, Gaganyaan & NISAR',
      'Defense Exercises: Malabar, Yudh Abhyas, Garuda, Varuna, and Joint Tri-Services Exercises',
      'Economic Milestones: Make in India, PLI Schemes across 14 sectors, and Logistics Policy',
      'Global Summits & Multilateral Organizations: G20 New Delhi Declaration, BRICS Expansion, and SCO',
      'Environmental Initiatives: Mission LiFE (Lifestyle for Environment), International Solar Alliance (ISA)'
    ],
    chaptersPreview: [
      {
        title: 'Flagship Social Welfare Schemes: Objectives, Beneficiaries & Budgets',
        summary: 'Detailed examination of the architecture, ministry, funding ratio, and eligibility criteria of major social safety net programs in India.',
        keyPoints: [
          'Ayushman Bharat (PM-JAY): World’s largest health insurance scheme providing ₹5 Lakh per family per year for secondary and tertiary care hospitalization.',
          'PM-KISAN: Direct income support of ₹6,000 per year in three equal installments of ₹2,000 to eligible farmer families.',
          'Jal Jeevan Mission: Aims to provide safe and adequate drinking water through individual household tap connections by 2024 to all rural households.'
        ],
        content: `### भारत सरकार की प्रमुख कल्याणकारी योजनाएं (Flagship Welfare Schemes)

प्रतियोगी परीक्षाओं में सरकारी योजनाओं के **मंत्रालय (Ministry)**, **लक्ष्य (Objective)**, तथा **वित्तीय संरचना (Funding Pattern)** पर प्रश्न पूछे जाते हैं।

#### 1. आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना (PM-JAY)
- **मंत्रालय:** स्वास्थ्य एवं परिवार कल्याण मंत्रालय।
- **लाभ:** पात्र गरीब परिवारों को प्रति वर्ष ₹5 लाख का कैशलेस स्वास्थ्य बीमा।
- **महत्व:** द्वितीयक और तृतीयक स्तर पर अस्पताल में भर्ती होने पर देश के किसी भी सूचीबद्ध निजी या सरकारी अस्पताल में इलाज संभव।

#### 2. प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)
- **मंत्रालय:** कृषि एवं किसान कल्याण मंत्रालय।
- **लाभ:** प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता (तीन समान किस्तों ₹2,000 में डीबीटी के माध्यम से)।
- **विशेषता:** शत-प्रतिशत केंद्र सरकार द्वारा वित्तपोषित (Central Sector Scheme)।`,
        realWorldUse: 'Essential for civic governance awareness, social work, and competitive examination interviews.',
        exercise: 'Differentiate between a Central Sector Scheme and a Centrally Sponsored Scheme with examples.'
      }
    ],
    studyNotes: [
      'Remember ISRO Aditya-L1 destination: Sun-Earth Lagrange Point 1 (L1), located approximately 1.5 million km from Earth.',
      'Central Sector Schemes are 100% funded by the Centre; Centrally Sponsored Schemes share costs between Centre and States (usually 60:40 or 90:10 for Himalayan states).'
    ]
  },
  {
    id: 'comp-ctet-pedagogy-child-dev',
    title: 'CTET & State TET: Child Development & Pedagogy (बाल विकास एवं शिक्षाशास्त्र)',
    subtitle: 'Piaget, Vygotsky, Kohlberg Theories, Inclusive Education & Learning Psychology',
    author: 'Dr. Meenakshi Sharma & HK VELORA Teacher Training Faculty',
    authorBio: 'Former NCERT educational research consultant, teacher educator, and psychology faculty at HK VELORA Open Education Series.',
    publisher: 'HK VELORA Open Education Series',
    description: 'The master reference for CTET Paper 1 & 2 and State TET aspirants. Clear conceptual breakdown of constructivism, stages of development, intelligence theories, and pedagogical problem-solving.',
    shortDescription: 'Jean Piaget cognitive development, Lev Vygotsky ZPD, Kohlberg moral development, and Inclusive classroom pedagogy.',
    category: 'Competitive Exams',
    subcategory: 'Teaching Exams (CTET/TET)',
    coverGradient: 'from-amber-800 via-orange-950 to-slate-950',
    pages: 310,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 380,
    price: 0,
    isFree: true,
    badge: 'CTET Topper Choice',
    tags: ['CTET', 'Pedagogy', 'Child Development', 'TET', 'Piaget', 'Vygotsky', 'Teaching'],
    language: 'Hindi & English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Teacher Education & Pedagogical Research Cell',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Concept of Development: Growth vs Development, Cephalocaudal & Proximodistal Principles',
      'Piaget’s Cognitive Development: Sensorimotor, Preoperational, Concrete Operational & Formal Operational',
      'Lev Vygotsky’s Socio-Cultural Theory: Zone of Proximal Development (ZPD) and Scaffolding',
      'Lawrence Kohlberg’s Moral Development: Pre-Conventional, Conventional & Post-Conventional Levels',
      'Theories of Intelligence: Spearman’s Two-Factor Theory & Howard Gardner’s Multiple Intelligences (8 Types)',
      'Inclusive Education: Addressing Children with Special Needs (CWSN), Dyslexia, Dyscalculia & ADHD',
      'Assessment of Learning vs Assessment for Learning: Formative vs Summative and CCE Paradigm',
      'Child-Centered & Progressive Pedagogy: John Dewey’s Learning by Doing and Constructivist Classrooms'
    ],
    chaptersPreview: [
      {
        title: 'Piaget vs Vygotsky: Cognitive vs Socio-Cultural Constructivism',
        summary: 'A direct comparison of Jean Piaget’s individual exploration model with Lev Vygotsky’s socially mediated scaffolding framework in teaching.',
        keyPoints: [
          'Piaget asserts that development precedes learning; children are active "little scientists" constructing schemas through assimilation and accommodation.',
          'Vygotsky asserts that social interaction and learning precede cognitive development.',
          'ZPD (Zone of Proximal Development) is the gap between what a learner can do independently and what they can achieve with guidance (More Knowledgeable Other - MKO).',
          'Scaffolding: Temporary supportive structure provided by a teacher or peer, gradually removed as the child develops mastery.'
        ],
        content: `### जीन पियाजे बनाम लेव वाइगोत्स्की (Comparative Pedagogy)

शिक्षक पात्रता परीक्षा (CTET) में पियाजे और वाइगोत्स्की के सिद्धांतों पर सर्वाधिक प्रश्न पूछे जाते हैं।

#### 1. पियाजे का संज्ञानात्मक विकास सिद्धांत (Piaget):
पियाजे के अनुसार बालक अपने ज्ञान का निर्माण स्वयं करता है (Little Scientist)।
- **आत्मसातीकरण (Assimilation):** पूर्व ज्ञान में नई जानकारी को जोड़ना।
- **समायोजन (Accommodation):** नई जानकारी के आधार पर पुरानी अवधारणा (स्कीमा) में संशोधन करना।
- **संतुलन (Equilibration):** नई और पुरानी जानकारी के बीच संतुलन स्थापित करना।

#### 2. वाइगोत्स्की का सामाजिक-सांस्कृतिक सिद्धांत (Vygotsky):
वाइगोत्स्की मानते हैं कि बच्चे का विकास समाज, संस्कृति और भाषा के माध्यम से होता है।
- **समीपस्थ विकास का क्षेत्र (Zone of Proximal Development - ZPD):**
  - बालक स्वयं जो कर सकता है और किसी कुशल व्यक्ति (MKO) की सहायता से जो कर सकता है, उनके बीच का अंतर **ZPD** कहलाता है।
- **पाड़ / ढांचा (Scaffolding):**
  - सीखने की प्रक्रिया में वयस्क या शिक्षक द्वारा दी जाने वाली **अस्थायी सहायता (Temporary Support)** को पाड़ (Scaffolding) कहते हैं (जैसे संकेत देना, कठिन हिस्से को समझाना)।`,
        realWorldUse: 'Designing interactive school classrooms, remedial teaching for slow learners, and acing government teaching recruitment.',
        exercise: 'A teacher gives hints and prompts to a student solving a math problem until the student can solve it independently. What pedagogical technique is the teacher using?'
      }
    ],
    studyNotes: [
      'Learning disabilities: Dyslexia (Reading disorder), Dysgraphia (Writing difficulty), Dyscalculia (Math calculation difficulty), Dyspraxia (Motor skills coordination).',
      'Right to Education (RTE) Act 2009: Free and compulsory education for children between 6 to 14 years under Article 21A of the Indian Constitution.'
    ]
  },
  {
    id: 'comp-railways-science-engineering',
    title: 'RRB NTPC & Group D: General Science & Technical Handbook',
    subtitle: 'Physics Mechanics, Chemistry Periodic Table, Human Physiology & Railway General Knowledge',
    author: 'Er. Rajeshwar Verma & Railway Exam Wing',
    authorBio: 'Senior technical consultant and former Railway Recruitment Board (RRB) question paper review panelist.',
    publisher: 'HK VELORA Open Education Series',
    description: 'The definitive science and technical guide for RRB NTPC, ALP, and Group D candidates. Clear explanations of NCERT Class 9-10 science concepts with previous year railway numericals.',
    shortDescription: 'Newton laws numericals, Work-Power-Energy, Electricity Ohm’s Law, Periodic elements, and Railway zones.',
    category: 'Competitive Exams',
    subcategory: 'Railway Exams (RRB NTPC/Group D)',
    coverGradient: 'from-sky-900 via-blue-950 to-slate-950',
    pages: 290,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.8,
    reviewCount: 340,
    price: 0,
    isFree: true,
    tags: ['Railway Exams', 'RRB NTPC', 'Group D', 'General Science', 'Physics Numericals', 'Railway GK'],
    language: 'Hindi & English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Railway Recruitment Cell Academic Wing',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Physics: Units & Dimensions, Equations of Motion (v = u + at, s = ut + 1/2at², v² = u² + 2as)',
      'Work, Power and Energy: Kinetic Energy (1/2mv²), Potential Energy (mgh) & Conservation Laws',
      'Electricity & Magnetism: Ohm’s Law (V = IR), Series & Parallel Resistors, Electric Power (P = VI)',
      'Chemistry: Modern Periodic Table (Mendeleev vs Moseley), Valency, Atomic Radius and Electronegativity',
      'Acids, Bases, Salts and Metals: Reactivity Series, Extraction of Metals and Alloys (Brass, Bronze, Solder)',
      'Biology: Human Organ Systems (Circulatory, Digestive, Excretory, Nervous) and Vitamin Deficiencies',
      'Indian Railways General Knowledge: 18 Railway Zones, Dedicated Freight Corridors and Vande Bharat Trains',
      'Mock Exam Section: 100 Solved High-Frequency Questions from Previous RRB Papers'
    ],
    chaptersPreview: [
      {
        title: 'Electricity & Circuits: Solving Railway Exam Numerical Problems',
        summary: 'Step-by-step method for solving equivalent resistance problems in series and parallel circuits and calculating monthly electrical energy consumption.',
        keyPoints: [
          'Ohm’s Law: V = IR (At constant temperature, current is directly proportional to potential difference).',
          'Series connection: Total resistance R = R1 + R2 + R3; current remains identical through all resistors.',
          'Parallel connection: 1/R = 1/R1 + 1/R2 + 1/R3; voltage remains identical across all branches.',
          'Electrical Energy: 1 Unit = 1 kiloWatt-hour (1 kWh) = 3.6 × 10⁶ Joules.'
        ],
        content: `### विद्युत परिपथ एवं संख्यात्मक प्रश्न (Electricity Numericals for RRB)

रेलवे परीक्षाओं में विद्युत धारा, प्रतिरोध और विद्युत ऊर्जा के न्यूमेरिकल अनिवार्य रूप से पूछे जाते हैं।

#### 1. प्रतिरोधों का संयोजन (Combination of Resistors):
- **श्रेणीक्रम (Series):** $R_s = R_1 + R_2 + R_3$
  - प्रत्येक प्रतिरोध में धारा समान होती है, किंतु विभवांतर बंट जाता है।
- **समांतरक्रम (Parallel):** $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2}$
  - प्रत्येक प्रतिरोध के सिरों पर विभवांतर समान होता है, किंतु धारा बंट जाती है।

#### 2. विद्युत ऊर्जा एवं बिल की गणना (Commercial Unit of Energy):
**1 यूनिट = 1 किलोवाट-घंटा (1 kWh) = $3.6 \\times 10^6$ जूल**

**हल किया हुआ उदाहरण (RRB 2022 प्रश्न):**
*एक 100 वाट का विद्युत बल्ब प्रतिदिन 8 घंटे जलाया जाता है। अप्रैल के महीने (30 दिन) में कितनी यूनिट बिजली खर्च होगी?*

**हल:**
$$\\text{शक्ति } (P) = 100\\text{ W} = 0.1\\text{ kW}$$
$$\\text{प्रतिदिन समय } (t) = 8\\text{ घंटे}$$
$$\\text{कुल ऊर्जा } (E) = P \\times t \\times 30\\text{ दिन} = 0.1 \\times 8 \\times 30 = 24\\text{ kWh} = \\mathbf{24\\text{ यूनिट}}$$`,
        realWorldUse: 'Calculating home electricity bills, electrical safety sizing, and acing technical railway entrance exams.',
        exercise: 'Two resistors of 6 ohms and 3 ohms are connected in parallel to a 12V battery. Calculate the total current drawn from the battery.'
      }
    ],
    studyNotes: [
      'First train in India ran between Mumbai (Bori Bunder) and Thane on April 16, 1853 (34 km, 3 locomotives: Sahib, Sindh, Sultan).',
      'Headquarters of 18th Railway Zone (South Coast Railway): Visakhapatnam.'
    ]
  }
];

