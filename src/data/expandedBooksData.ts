import { EBookItem } from '../types';

export const EXPANDED_BOOKS_DATA: EBookItem[] = [
  {
    id: 'speed-math-quantitative-aptitude',
    title: 'Quantitative Aptitude & Speed Math Master (शॉर्टकट ट्रिक्स व तेज गणना)',
    subtitle: 'Vedic Math Shortcuts, Percentage, Ratio, Time & Work Formulas for SSC, Banking, Railway & Placements',
    slug: 'speed-math-quantitative-aptitude',
    author: 'Hariom Kushwaha & HK VELORA Aptitude Faculty',
    authorId: 'hariom-kushwaha',
    authorBio: 'HK VELORA Educational Research Cell dedicated to competitive exam shortcuts and mental calculations.',
    publisher: 'HK Tech World Educational Press',
    category: 'Student & Education',
    subcategory: 'Competitive Exams & Aptitude',
    genre: 'Quantitative Aptitude Master Guide',
    bookType: 'Practice Book',
    description: 'A comprehensive, exam-ready handbook designed to eliminate math anxiety. Features step-by-step Vedic Math calculation shortcuts (multiplying 2 and 3-digit numbers in 3 seconds), square root and cube root mental estimation, percentage-to-fraction memory tables, Time & Work unitary methods, and speed distance formula hacks for competitive exams.',
    shortDescription: 'Master mental math, fast Vedic calculations, and quantitative aptitude formulas for competitive exams and campus placements.',
    pages: 360,
    format: 'E-Book & Interactive Notes',
    difficulty: 'All Levels',
    rating: 4.96,
    reviewCount: 420,
    badge: 'Exam Bestseller',
    coverGradient: 'from-amber-600 via-orange-600 to-red-700',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Aptitude', 'Speed Math', 'Vedic Math', 'SSC CGL', 'Banking', 'Railway', 'Campus Placements', 'Quantitative'],
    topics: ['Mental Calculations', 'Percentage & Profit Loss', 'Time & Work', 'Speed Time Distance', 'Permutations & Probability'],
    language: 'Hindi & English (Hinglish Explained)',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-15-2',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '5h 45m',
    whatYoullLearn: [
      'Multiply any two 2-digit or 3-digit numbers in under 5 seconds using Vedic cross-multiplication (उर्ध्वतिर्यग्भ्याम्)',
      'Calculate squares of numbers ending in 5 or near base 100/50 mentally without rough paper',
      'Convert percentages to fractions instantly (e.g., 16.66% = 1/6, 37.5% = 3/8) to solve profit/loss problems in one step',
      'Solve Time & Work questions using LCM efficiency method instead of complex reciprocal fractions',
      'Master relative speed, train crossing, and upstream/downstream boat problems with guaranteed formulas'
    ],
    tableOfContents: [
      '1. Vedic Fast Calculation & Mental Arithmetic (वैदिक गणित शॉर्टकट)',
      '2. Percentages & Fraction Conversion Mastery (प्रतिशत और भिन्न टेबल)',
      '3. Profit, Loss, Discount & Marked Price (लाभ, हानि एवं बट्टा)',
      '4. Ratio, Proportion & Mixtures (अनुपात, समानुपात व मिश्रण)',
      '5. Time, Work & Pipes Cisterns (कार्य, समय और पाइप टंकी LCM विधि)',
      '6. Speed, Time, Distance, Trains & Boats (चाल, समय, दूरी व रेलगाड़ी प्रश्न)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Vedic Fast Calculation & Mental Arithmetic (वैदिक गणित शॉर्टकट)',
        summary: 'How to calculate faster than a calculator. Learn Base-100 multiplication, squaring numbers ending in 5 using एकाधिकेन पूर्वेण, and instant cube roots of perfect cubes.',
        keyPoints: [
          'Numbers ending in 5: (N5)² = [N × (N + 1)] and attach 25 at the end. Example: 75² = (7 × 8) || 25 = 5625.',
          'Base 100 Multiplication: For 96 × 94, deviations are -4 and -6. Answer is (96 - 6) || (-4 × -6) = 9024.',
          'Digit Sum (Digital Root) technique: Cross-verify any huge addition or multiplication in 2 seconds to spot incorrect exam options.'
        ],
        codeSnippet: `// Speed Math Mental Rule for Squaring numbers ending with 5:
// Rule: (10a + 5)^2 = 100 * a * (a + 1) + 25
// Example: 85^2 = (8 * 9) followed by 25 = 7225
// Example: 115^2 = (11 * 12) followed by 25 = 13225`
      },
      {
        title: 'Chapter 2: Percentage-Fraction Table & Profit-Loss Efficiency',
        summary: 'Stop dividing by 100 on rough sheets. Use standard fraction conversions (1/2 to 1/20) and multiplier factors to solve complex multi-step percentage changes.',
        keyPoints: [
          '1/3 = 33.33%, 1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%.',
          'Successive Percentage Formula: a + b + (ab / 100). If one increases by 20% and another decreases by 10%, net change = +20 - 10 - 2 = +8%.',
          'Selling Price (SP) = Cost Price (CP) × Multiplying Factor. For 25% profit, MF = 5/4.'
        ]
      }
    ],
    studyNotes: [
      'Pro-Tip: Memorize tables up to 30, squares up to 50, and cubes up to 25. This alone saves 40% of time in competitive exams.',
      'Always look at the unit digit of options before solving long calculations. Often only one option matches.'
    ]
  },
  {
    id: 'indian-constitution-polity-guide',
    title: 'Indian Constitution & Polity in Simple Words (भारतीय संविधान एवं राजव्यवस्था - सरल अध्ययन)',
    subtitle: 'From Preamble & Fundamental Rights to Parliament, Judiciary & Important Amendments',
    slug: 'indian-constitution-polity-guide',
    author: 'Hariom Kushwaha (HK Tech World Legal & Civics Desk)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Educator and creator simplifying Indian governance, constitutional law, and democratic institutions for students and citizens.',
    publisher: 'HK VELORA National Knowledge Series',
    category: 'Student & Education',
    subcategory: 'UPSC, Civics & General Knowledge',
    genre: 'Constitutional Law & Governance',
    bookType: 'Handbook',
    description: 'A lucid, beautifully explained guide to the Constitution of India. Demystifies legal terminology and explains how our democracy functions—covering the Preamble, Fundamental Rights (Articles 12 to 35), Directive Principles (DPSP), Duties, powers of the President, Prime Minister, Lok Sabha, Rajya Sabha, Supreme Court, and landmark Supreme Court verdicts.',
    shortDescription: 'Understand the Constitution of India, Fundamental Rights, Parliament, and Judiciary in clear, accessible Hindi and English.',
    pages: 420,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.98,
    reviewCount: 380,
    badge: 'Civics Essential',
    coverGradient: 'from-blue-700 via-indigo-800 to-emerald-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Constitution', 'Polity', 'UPSC', 'Fundamental Rights', 'Samvidhan', 'Civics', 'Indian Law', 'SSC'],
    topics: ['Preamble', 'Fundamental Rights (Articles 12-35)', 'Directive Principles', 'President & PM', 'Supreme Court & High Courts', 'Major Amendments'],
    language: 'Hindi & English (द्विभाषी सरल नोट्स)',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-16-9',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '6h 15m',
    whatYoullLearn: [
      'Understand the core philosophy of the Preamble (Justice, Liberty, Equality, Fraternity, Sovereign, Socialist, Secular, Democratic, Republic)',
      'Master Fundamental Rights (Articles 14 to 32) and the 5 Constitutional Writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto)',
      'Learn the separation of powers between the Legislature (Parliament), Executive (President/PM/Cabinet), and Judiciary (Supreme Court/High Courts)',
      'Understand how Bills become Acts of Parliament, Money Bills vs Ordinary Bills, and Constitutional Amendments under Article 368',
      'Know your Fundamental Duties (Article 51A) and landmark judgments like Kesavananda Bharati (Basic Structure Doctrine)'
    ],
    tableOfContents: [
      '1. Making of the Constitution & The Preamble (संविधान निर्माण व प्रस्तावना का मर्म)',
      '2. Fundamental Rights: Articles 12 to 35 (नागरिकों के मौलिक अधिकार व अनुच्छेद 32 रिट्स)',
      '3. Directive Principles (DPSP) & Fundamental Duties (नीति निदेशक तत्व व मूल कर्तव्य)',
      '4. The Union Executive: President, Vice-President & Prime Minister (संघीय कार्यपालिका)',
      '5. The Parliament: Lok Sabha, Rajya Sabha & Law-Making Process (संसद व कानून निर्माण)',
      '6. Indian Judiciary & Landmark Amendments (सर्वोच्च न्यायालय व ऐतिहासिक संविधान संशोधन)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: The Preamble & Constitutional Foundation',
        summary: 'Adopted on 26 November 1949 and enacted on 26 January 1950. Dr. B.R. Ambedkar led the Drafting Committee to craft the longest written constitution in the world.',
        keyPoints: [
          'The Preamble is the identity card and soul of the Constitution (N.A. Palkhivala).',
          '42nd Constitutional Amendment Act (1976) added three vital words: Socialist, Secular, and Integrity.',
          'Kesavananda Bharati Case (1973): Supreme Court ruled that the Parliament cannot alter or destroy the Basic Structure of the Constitution.'
        ]
      },
      {
        title: 'Chapter 2: Fundamental Rights (Articles 12-35) & Writs',
        summary: 'Enforceable rights against the State. Right to Equality (14-18), Right to Freedom (19-22), Right against Exploitation (23-24), Freedom of Religion (25-28), Cultural & Educational Rights (29-30), and Right to Constitutional Remedies (Article 32).',
        keyPoints: [
          'Article 21: Protection of life and personal liberty. Interpreted broadly by the Supreme Court to include the Right to Privacy, clean environment, and dignity.',
          'Article 32: Heart and soul of the Constitution (Dr. Ambedkar). Allows any citizen to approach the Supreme Court directly for enforcement of rights.',
          'The 5 Writs: Habeas Corpus (produce the body), Mandamus (we command), Prohibition, Certiorari, and Quo-Warranto (by what authority).'
        ]
      }
    ],
    studyNotes: [
      'Remember the shortcut mnemonic for 6 Fundamental Rights: E-F-E-R-C-C (Equality, Freedom, Exploitation, Religion, Culture, Constitutional remedies).',
      'Article 20 (Protection against conviction) and Article 21 (Life and Liberty) CANNOT be suspended even during a National Emergency.'
    ]
  },
  {
    id: 'neet-jee-physics-formula-cheatbook',
    title: 'NEET & JEE Physics Formula & Concept Mastery (भौतिक विज्ञान फ़ॉर्मूला व त्वरित रिवीज़न)',
    subtitle: 'From Kinematics, Mechanics & Thermodynamics to Electrodynamics, Optics & Modern Physics',
    slug: 'neet-jee-physics-formula-cheatbook',
    author: 'HK VELORA STEM Division & Hariom Kushwaha',
    authorId: 'hariom-kushwaha',
    authorBio: 'Senior engineering educators designing ultra-fast physics formula sheets, dimensional derivations, and visual sign conventions.',
    publisher: 'HK Tech World Academic Press',
    category: 'Student & Education',
    subcategory: 'Physics & Engineering Entrance',
    genre: 'Physics Quick Revision Companion',
    bookType: 'Revision Book',
    description: 'An indispensable physics handbook engineered for Class 11, Class 12, JEE Main/Advanced, and NEET aspirants. Distills high-yield physics concepts, vector calculus shortcuts, free-body diagram (FBD) rules, circuit solving theorems (Kirchhoff, Thevenin, Nodal), and optical ray diagrams into concise memory tables with SI units and common trap warnings.',
    shortDescription: 'Comprehensive formula handbook and high-yield problem solving tricks for JEE, NEET, and CBSE Physics.',
    pages: 340,
    format: 'E-Book & PDF',
    difficulty: 'Advanced',
    rating: 4.97,
    reviewCount: 510,
    badge: 'Toppers Choice',
    coverGradient: 'from-blue-600 via-cyan-700 to-indigo-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Physics', 'JEE Main', 'NEET', 'Formulas', 'Class 11', 'Class 12', 'Mechanics', 'Electrodynamics', 'Optics'],
    topics: ['Newtonian Mechanics', 'Thermodynamics & Heat Transfer', 'Electrostatics & Current Electricity', 'Magnetism & EMI', 'Wave Optics & Modern Physics'],
    language: 'English & Hinglish Simplified',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-17-6',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '5h 10m',
    whatYoullLearn: [
      'Derive and recall all kinematics equations (1D, 2D projectile motion on horizontal and inclined planes)',
      'Draw Free Body Diagrams (FBD) accurately with normal reaction, tension, and static vs kinetic friction limits',
      'Solve rotational motion problems: Moment of Inertia of standard bodies, parallel and perpendicular axis theorems',
      'Apply Gauss Law, Electric Potential V = -∫E·dr, and capacitor combinations with dielectric insertion',
      'Calculate de Broglie wavelength, Bohr atomic orbit radii, photoelectric work functions, and half-life decay equations'
    ],
    tableOfContents: [
      '1. Units, Dimensions & Error Analysis (इकाइयाँ, विमाएँ व त्रुटि विश्लेषण)',
      '2. Kinematics, Projectile Motion & Newton Laws (गति के नियम व प्रक्षेप्य गति)',
      '3. Work, Energy, Power & Rotational Dynamics (कार्य, ऊर्जा व घूर्णन गति)',
      '4. Gravitation, Fluids & Thermal Physics (गुरुत्वाकर्षण व ऊष्मागतिकी)',
      '5. Electrostatics, Capacitors & Current Electricity (स्थिरवैद्युतिकी व धारा विद्युत)',
      '6. Magnetism, EMI, AC Circuits, Optics & Modern Physics (प्रकाशिकी व आधुनिक भौतिकी)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Kinematics & Projectile Motion Shortcuts',
        summary: 'Standard kinematics relations for constant acceleration, along with time of flight, maximum height, and horizontal range equations.',
        keyPoints: [
          'Equations of motion: v = u + at, s = ut + ½at², v² = u² + 2as, s_nth = u + a/2(2n - 1).',
          'Projectile Motion: Time of flight T = (2u sin θ)/g; Maximum Height H = (u² sin² θ)/(2g); Range R = (u² sin 2θ)/g.',
          'Complementary Angles: Range R is identical for launching angles θ and (90° - θ).'
        ],
        codeSnippet: `// Projectile Motion Cheat Sheet:
// Max Range condition: theta = 45 degrees -> R_max = u^2 / g
// Trajectory equation: y = x * tan(theta) * [1 - (x / R)]
// Velocity at highest point: v_top = u * cos(theta) (vertical velocity = 0)`
      }
    ],
    studyNotes: [
      'Dimensional Analysis Trick: If you forget a physics formula in the exam hall, verify the dimensions [M L T] of the options. 2 out of 4 options are usually dimensionally inconsistent!',
      'In rotational motion, replace Mass with Moment of Inertia (I), Force with Torque (τ), and Linear Velocity with Angular Velocity (ω).'
    ]
  },
  {
    id: 'neet-biology-physiology-genetics-notes',
    title: 'NEET Biology: Human Physiology & Genetics High-Yield Notes (मानव शरीर क्रिया विज्ञान एवं आनुवंशिकी)',
    subtitle: 'NCERT Line-by-Line Concepts, Diagrams, Cycle Tables & Memory Mnemonics for NEET Aspirants',
    slug: 'neet-biology-physiology-genetics-notes',
    author: 'Dr. A. Sen & HK VELORA Medical Editorial',
    authorId: 'hk-medical-desk',
    authorBio: 'Medical educators and NEET toppers distilling 100% NCERT Biology into memorable diagrams, pathways, and mnemonics.',
    publisher: 'HK VELORA Health & Life Sciences Series',
    category: 'Student & Education',
    subcategory: 'Biology & Medical Entrance',
    genre: 'Biology High-Yield Notes',
    bookType: 'Study Guide',
    description: 'A laser-focused biology study guide for Class 11, Class 12, and NEET aspirants. Focuses on the highest-weightage topics: Human Physiology (heart cycles, nephron counter-current mechanism, neural synapse), Mendelian Genetics (monohybrid, dihybrid, pedigree analysis), Molecular Basis of Inheritance (DNA replication, transcription, translation), and Biotechnology applications.',
    shortDescription: 'High-yield NCERT Biology revision companion with flowcharts, pedigree solving tricks, and mnemonics for NEET.',
    pages: 380,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.95,
    reviewCount: 460,
    badge: 'NEET Special',
    coverGradient: 'from-emerald-700 via-teal-800 to-cyan-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Biology', 'NEET', 'Human Physiology', 'Genetics', 'DNA', 'NCERT', 'Medical', 'Class 12 Biology'],
    topics: ['Cardiovascular System', 'Excretion & Nephron', 'Nervous Transmission', 'Mendelian Genetics & Pedigree', 'Central Dogma of Molecular Biology'],
    language: 'English & Hindi Scientific Terms',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-18-3',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'HK Medical Desk',
    audioDuration: '6h 30m',
    whatYoullLearn: [
      'Master the Cardiac Cycle, ECG wave interpretations (P wave, QRS complex, T wave), and blood pressure regulation',
      'Understand the Nephron Counter-Current multiplier mechanism in the Henle Loop and collecting duct',
      'Solve genetic crosses, test crosses, back crosses, and pedigree chart analysis (autosomal dominant vs recessive, X-linked traits)',
      'Visualize DNA replication, transcription (RNA Polymerase I, II, III), and the genetic code (universal, degenerate, non-overlapping)',
      'Understand recombinant DNA technology, PCR (Polymerase Chain Reaction - Denaturation, Annealing, Extension), and Gel Electrophoresis'
    ],
    tableOfContents: [
      '1. Human Physiology: Circulation, Respiration & Digestion (मानव शरीर क्रिया विज्ञान)',
      '2. Excretory Products & Their Elimination (उत्सर्जन तंत्र एवं वृक्क कार्यप्रणाली)',
      '3. Neural Control & Chemical Coordination (तंत्रिका तंत्र व अंतःस्रावी ग्रंथियां)',
      '4. Principles of Inheritance & Variation (आनुवंशिकी के सिद्धांत व मेंडल के नियम)',
      '5. Molecular Basis of Inheritance & Central Dogma (डीएनए संरचना व प्रोटीन संश्लेषण)',
      '6. Biotechnology Principles, Processes & Applications (जैव प्रौद्योगिकी तकनीकें)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: The Cardiac Cycle & ECG Analysis',
        summary: 'The human heart beats ~72 times/min. In 0.8 seconds, the cardiac cycle completes Joint Diastole (0.4s), Atrial Systole (0.1s), and Ventricular Systole (0.3s).',
        keyPoints: [
          'Heart Sounds: First sound "LUB" (closure of tricuspid & bicuspid valves), Second sound "DUB" (closure of semilunar valves).',
          'ECG Waves: P-wave represents atrial depolarization. QRS complex represents ventricular depolarization. T-wave represents ventricular repolarization.',
          'Stroke Volume = 70 mL. Cardiac Output = Stroke Volume × Heart Rate ≈ 5040 mL/min (~5 Litres).'
        ]
      }
    ],
    studyNotes: [
      'In NEET, 90% of Biology questions come directly from NCERT textbook lines. Focus deeply on NCERT summaries and figures.',
      'For Pedigree questions: If an affected child has unaffected parents, the trait MUST be Recessive. If males and females are equally affected, it is Autosomal.'
    ]
  },
  {
    id: 'english-speaking-grammar-communication-blueprint',
    title: 'English Speaking, Grammar & Communication Mastery (सरल अंग्रेजी बोलना व लिखना सीखें)',
    subtitle: 'From Tenses & Daily Conversation to Email Etiquette, Public Speaking & Job Interviews',
    slug: 'english-speaking-grammar-communication-blueprint',
    author: 'Hariom Kushwaha (HK Tech World Communication Lab)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Empowering Hindi-medium and non-native speakers to speak fluent, confident English in corporate and academic settings.',
    publisher: 'HK VELORA Skill Development Press',
    category: 'Student & Education',
    subcategory: 'Language & Communication',
    genre: 'Spoken English & Professional Skills',
    bookType: 'Handbook',
    description: 'Designed specifically for Hindi-medium students, developers, and aspiring professionals who understand English but hesitate while speaking. Deconstructs the 12 English tenses with crystal-clear Hindi analogies, provides 500+ daily conversational sentences, eliminates common pronunciation mistakes, and teaches modern professional communication: email writing, meeting etiquette, and confident job interview answers.',
    shortDescription: 'Speak and write fluent, professional English with confidence using practical Hindi-to-English frameworks and everyday conversational phrases.',
    pages: 350,
    format: 'E-Book & Audio Companion',
    difficulty: 'All Levels',
    rating: 4.97,
    reviewCount: 620,
    badge: 'Super Practical',
    coverGradient: 'from-violet-700 via-purple-800 to-indigo-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['English Speaking', 'Grammar', 'Communication', 'Interview Prep', 'Spoken English', 'Vocabulary', 'Soft Skills'],
    topics: ['12 Tenses Simplified', 'Daily Conversation Phrases', 'Active & Passive Voice', 'Email Etiquette', 'Job Interview Practice'],
    language: 'Hindi to English Bilingual Guide',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-19-0',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '7h 15m',
    whatYoullLearn: [
      'Conquer all 12 English tenses effortlessly by understanding their actual timeline rather than rote rules',
      'Speak without translating in your head: learn sentence thought structures for daily meetings, shopping, and campus life',
      'Avoid 25 most common Indian English grammatical errors (e.g., "myself Hariom", "revert back", "did not knew")',
      'Draft crisp, polite professional emails that get fast replies from recruiters, clients, and professors',
      'Answer critical interview questions (e.g., "Tell me about yourself", "Why should we hire you?") with impact and calm authority'
    ],
    tableOfContents: [
      '1. Overcoming the Hesitation Barrier (अंग्रेजी बोलने का डर कैसे दूर करें)',
      '2. The 12 English Tenses Demystified (काल संरचना: कब क्या बोलें)',
      '3. Everyday High-Frequency Sentences (दैनिक जीवन के 500+ उपयोगी वाक्य)',
      '4. Professional Email & Formal Writing (ईमेल शिष्टाचार व प्रोफेशनल राइटिंग)',
      '5. Public Speaking & Presentation Skills (स्टेज पर बिना डरे धाराप्रवाह बोलना)',
      '6. Cracking the HR & Technical Interview (इंटरव्यू में शानदार जवाब देने की कला)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Overcoming the Hesitation & Thought-Translation Barrier',
        summary: 'Why non-native speakers freeze: you formulate sentences in your mother tongue first, translate grammar word-for-word, and check for errors before speaking. Break this loop with chunk learning.',
        keyPoints: [
          'Do not translate word-by-word. English has Subject-Verb-Object (SVO) order; Hindi has Subject-Object-Verb (SOV).',
          'Practice English Chunking: Memorize phrases (e.g., "As a matter of fact", "Could you please clarify", "I would appreciate if...") instead of individual isolated words.',
          'Speak aloud for 10 minutes every day in front of a mirror or record on your smartphone voice memos.'
        ]
      },
      {
        title: 'Chapter 2: The 12 Tenses Made Effortless with Timeline Visuals',
        summary: 'A definitive map of time. Present, Past, and Future divided into Simple, Continuous, Perfect, and Perfect Continuous.',
        keyPoints: [
          'Present Perfect vs Past Simple: Use Present Perfect (have + V3) when an action happened in the past but its effect is relevant right now ("I have submitted my assignment"). Use Past Simple (V2) when the specific past time is mentioned ("I submitted it yesterday").',
          'Common Mistake: After "did", ALWAYS use the base form (V1) of the verb. "Did you see him?" (NOT "Did you saw him?").'
        ]
      }
    ],
    studyNotes: [
      'Golden Rule: Fluency is not about using complex dictionary words (like "loquacious" or "obsequious"). True fluency is conveying your thoughts clearly, politely, and without awkward pauses.',
      'Shadowing Technique: Listen to a short English podcast or tech talk, and repeat every sentence immediately with the same tone and cadence.'
    ]
  },
  {
    id: 'data-science-machine-learning-python-guide',
    title: 'Data Science & Machine Learning with Python Handbook (डेटा साइंस एवं मशीन लर्निंग व्यावहारिक गाइड)',
    subtitle: 'From NumPy, Pandas & Data Cleaning to Scikit-Learn Algorithms & Model Deployment',
    slug: 'data-science-machine-learning-python-guide',
    author: 'Hariom Kushwaha (HK Tech World AI Lab)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Software architect, AI researcher, and creator of HK VELORA helping developers transition into production Data Science and ML engineering.',
    publisher: 'HK Tech World Press',
    category: 'Coding & Programming',
    subcategory: 'Data Science & AI',
    genre: 'Data Science Engineering',
    bookType: 'Handbook',
    description: 'A hands-on, project-driven guide to Data Science and Machine Learning using modern Python. Covers multidimensional arrays with NumPy, tabular data manipulation with Pandas, statistical plotting with Seaborn/Matplotlib, core ML algorithms (Linear/Logistic Regression, Decision Trees, Random Forests, K-Means), train-test splitting, cross-validation, and deploying models with FastAPI.',
    shortDescription: 'Master modern Python Data Science, Pandas data wrangling, Scikit-Learn models, and machine learning pipelines with production code.',
    pages: 450,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.96,
    reviewCount: 390,
    badge: 'Tech Essential',
    coverGradient: 'from-cyan-700 via-teal-800 to-slate-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Python', 'Data Science', 'Machine Learning', 'NumPy', 'Pandas', 'Scikit-Learn', 'AI', 'Algorithms'],
    topics: ['NumPy Arrays', 'Pandas DataFrame Analysis', 'Data Cleaning & Imputation', 'Supervised Learning', 'Model Evaluation (ROC, AUC, F1)'],
    language: 'English & Hinglish Code Walkthrough',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-20-6',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '8h 00m',
    whatYoullLearn: [
      'Write vectorized NumPy operations and matrix manipulations without slow Python for-loops',
      'Filter, group by, merge, pivot, and handle missing NaN values in real-world CSV/JSON datasets with Pandas',
      'Create publication-grade statistical charts (correlation heatmaps, box plots, pair plots) with Seaborn',
      'Train, evaluate, and tune Linear Regression, Logistic Regression, Random Forests, and XGBoost classifiers',
      'Prevent data leakage and deploy complete scikit-learn Pipelines to production web APIs'
    ],
    tableOfContents: [
      '1. Python Data Ecosystem & NumPy Foundations (न्यूमपाई और वेक्टर गणना)',
      '2. Pandas Mastery: Data Wrangling & Cleaning (पांडास डेटा विश्लेषण)',
      '3. Exploratory Data Analysis & Visualization (डेटा विज़ुअलाइज़ेशन)',
      '4. Supervised Learning: Regression & Classification (मशीन लर्निंग एल्गोरिदम)',
      '5. Model Evaluation: Precision, Recall & Cross-Validation (सटीकता परीक्षण)',
      '6. Building End-to-End ML Pipelines & Model Serving (प्रोडक्शन पाइपलाइन)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: NumPy Vectorization & Array Operations',
        summary: 'Why NumPy is 50x to 100x faster than standard Python lists. C-contiguous memory blocks and vectorized SIMD CPU operations.',
        keyPoints: [
          'NumPy arrays are homogeneous (all elements must be of the same dtype).',
          'Broadcasting allows arithmetic operations between arrays of different shapes without copying data in memory.',
          'Always prefer vectorized np.where() and boolean masks over iterative python if-else conditions.'
        ],
        codeSnippet: `import numpy as np

# Fast Vectorized Operations without loops
grades = np.array([78, 92, 85, 64, 89, 95])
# Scale on a curve with 5 bonus points (Broadcasting!)
curved_grades = np.clip(grades + 5, 0, 100)
# Boolean indexing: find all grades >= 90
top_students = curved_grades[curved_grades >= 90]
print("Honors list:", top_students)`
      }
    ],
    studyNotes: [
      'Never evaluate an ML model on your training data. Always split into Train (80%) and Test (20%) sets before fitting any transformations.',
      'When working with imbalanced datasets (e.g., fraud detection with 99% non-fraud), Accuracy is misleading. Always rely on Precision, Recall, and PR-AUC.'
    ]
  },
  {
    id: 'git-github-open-source-handbook',
    title: 'Git, GitHub & Open Source Contribution Handbook (गिट और गिटहब संपूर्ण व्यावहारिक गाइड)',
    subtitle: 'From Terminal Commands & Branching Strategies to Resolving Merge Conflicts & Landing Open Source PRs',
    slug: 'git-github-open-source-handbook',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Full-stack software architect, active open source maintainer, and creator of HK VELORA.',
    publisher: 'HK Tech World Developer Series',
    category: 'Coding & Programming',
    subcategory: 'DevOps & Version Control',
    genre: 'Software Engineering Essentials',
    bookType: 'Handbook',
    description: 'The definitive version control survival manual for every engineering student and junior developer. Explains the Git object model (blobs, trees, commits), branching strategies, cherry-picking, interactive rebasing, resolving painful merge conflicts without fear, crafting clean commit messages, setting up GitHub SSH keys, and making your first open source Pull Request on GitHub.',
    shortDescription: 'Master Git terminal commands, branch management, merge conflict resolution, and open source collaboration on GitHub.',
    pages: 310,
    format: 'E-Book & Interactive Commands',
    difficulty: 'All Levels',
    rating: 4.98,
    reviewCount: 480,
    badge: 'Developer Must-Read',
    coverGradient: 'from-slate-800 via-zinc-900 to-neutral-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Git', 'GitHub', 'Open Source', 'Version Control', 'Terminal', 'DevOps', 'Software Engineering'],
    topics: ['Git Internals (Blobs & Commits)', 'Branching & Merging', 'Resolving Merge Conflicts', 'Git Rebase vs Merge', 'GitHub Actions & Pull Requests'],
    language: 'English & Hinglish CLI Guide',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-21-3',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '5h 20m',
    whatYoullLearn: [
      'Understand what happens inside the hidden .git directory: staging area, working tree, and HEAD pointer',
      'Execute daily commands with confidence: git clone, branch, checkout -b, add, commit, push, pull, stash',
      'Resolve merge conflicts systematically without accidentally deleting your teammates code',
      'Use git rebase -i (interactive rebase) to squash 10 messy "fix typo" commits into one pristine commit',
      'Fork repositories, configure upstream remotes, write compelling Pull Request descriptions, and land open source contributions'
    ],
    tableOfContents: [
      '1. Why Version Control Matters & Git Architecture (गिट की कार्यप्रणाली)',
      '2. The Daily Git Workflow (दैनिक कमांड्स: Add, Commit, Push, Pull)',
      '3. Branching, Merging & Fast-Forward vs Three-Way Merges (शाखाएं और विलय)',
      '4. The Merge Conflict Survival Guide (कन्फ्लिक्ट्स को बिना डरे हल करें)',
      '5. Undo, Stash, Reset & Rebase (गलतियाँ सुधारने की जादुई कमांड्स)',
      '6. GitHub Collaboration, Pull Requests & Open Source (ओपन सोर्स योगदान)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: The Three States of Git & Internal Snapshot Model',
        summary: 'Git is not a delta storage tool; it saves snapshots of your whole project. Understand Working Directory, Staging Area (Index), and Repository (HEAD).',
        keyPoints: [
          'Working Directory: The files you see and edit in VS Code.',
          'Staging Area: The sandbox where you stage files (git add) to prepare an atomic commit.',
          'Repository: The permanent history stored as SHA-1/SHA-256 commit hashes in the .git folder.'
        ],
        codeSnippet: `# Essential Daily Git Workflow by Hariom Kushwaha:
git checkout -b feature/user-auth    # Create and switch to new branch
git status                           # Inspect modified files
git add src/auth.ts src/types.ts     # Stage specific files
git commit -m "feat(auth): add JWT token verification middleware"
git push -u origin feature/user-auth # Push branch and set upstream tracking`
      }
    ],
    studyNotes: [
      'Golden Safety Rule: Never use "git push --force" on shared branches like "main" or "production". Always use "git push --force-with-lease" if rebased.',
      'Use "git stash" when you need to urgently switch branches without committing unfinished, broken code.'
    ]
  },
  {
    id: 'financial-literacy-smart-money-guide',
    title: 'Financial Literacy, Budgeting & Smart Money for Students (छात्रों के लिए स्मार्ट मनी मैनेजमेंट व निवेश)',
    subtitle: 'From Pocket Money Budgeting & The Power of Compounding to Mutual Funds, SIPs & Avoiding Online Scams',
    slug: 'financial-literacy-smart-money-guide',
    author: 'Hariom Kushwaha (HK Tech World FinTech Desk)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Advocate for early financial literacy, disciplined wealth creation, and cyber hygiene for students across India.',
    publisher: 'HK VELORA Life Skills Press',
    category: 'Student & Education',
    subcategory: 'Personal Finance & Career',
    genre: 'Personal Finance & Wealth Habits',
    bookType: 'Handbook',
    description: 'Schools and colleges teach calculus and history, but rarely teach how money actually works. This book fills that critical gap for young Indians. Teaches the 50-30-20 budgeting principle, the mathematical magic of compound interest (Rule of 72), starting early with index funds & SIPs from just ₹500/month, distinguishing assets vs liabilities, building an emergency fund, and protecting yourself against digital loan shark apps and UPI phishing scams.',
    shortDescription: 'Master the basics of personal finance, pocket money budgeting, mutual funds, SIP compounding, and cyber-fraud protection.',
    pages: 290,
    format: 'E-Book & PDF',
    difficulty: 'Beginner',
    rating: 4.97,
    reviewCount: 520,
    badge: 'Life Changing',
    coverGradient: 'from-emerald-600 via-green-700 to-teal-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Personal Finance', 'Money Management', 'Students', 'Investing', 'SIP', 'Mutual Funds', 'Budgeting', 'Financial Freedom'],
    topics: ['50-30-20 Rule', 'Compound Interest & Rule of 72', 'Index Funds & Equity', 'Emergency Funds', 'Cyber Fraud & Phishing Defense'],
    language: 'Hindi & English (सरल व्यावहारिक भाषा)',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-22-0',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '4h 45m',
    whatYoullLearn: [
      'Apply the 50/30/20 budget framework: 50% Needs, 30% Wants, 20% Savings/Investments',
      'Understand the 8th wonder of the world: How investing ₹1,500/month at age 20 creates massive wealth compared to starting at age 35',
      'Demystify Mutual Funds, Nifty 50 Index Funds, Demat accounts, and Systematic Investment Plans (SIP)',
      'Differentiate true Assets (which put money in your pocket) from Liabilities disguised as luxury gadgets',
      'Recognize and immediately block UPI payment frauds, fake job offer telegram groups, and predatory instant loan apps'
    ],
    tableOfContents: [
      '1. The Money Mindset: Why Saving Alone Makes You Poor (मुद्रास्फीति और धन का मनोविज्ञान)',
      '2. The 50-30-20 Rule & Pocket Money Management (बजट बनाने का सबसे आसान तरीका)',
      '3. The Power of Compounding & Rule of 72 (कंपाउंडिंग का जादू और समय की शक्ति)',
      '4. Demat, Stock Market & Mutual Funds Demystified (म्यूचुअल फंड व इंडेक्स फंड)',
      '5. Good Debt vs Bad Debt & Credit Cards (कर्ज का जाल और क्रेडिट कार्ड की सच्चाई)',
      '6. Digital Safety: Protecting Your Bank Account from Scams (साइबर सुरक्षा व वित्तीय धोखाधड़ी से बचाव)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: The Money Mindset & The Hidden Tax of Inflation',
        summary: 'If you keep ₹10,000 cash in a savings locker, its purchasing power diminishes every year due to 6% inflation. To grow wealth, your returns must beat inflation.',
        keyPoints: [
          'Inflation is the silent wealth destroyer. An item costing ₹100 today will cost ~₹180 in 10 years at 6% inflation.',
          'Rule of 72: Divide 72 by the annual interest rate to find when your money doubles. At 12% returns, money doubles in 72/12 = 6 years!',
          'Start with what you have: Discipline in saving ₹500 every month is far more valuable than waiting until you earn ₹50,000 to start.'
        ]
      }
    ],
    studyNotes: [
      'Never invest money in speculative schemes or crypto based on social media influencers ("FinFluencers") hype. Stick to low-cost Nifty 50 Index funds for long-term goals.',
      'Emergency Fund First: Before investing in equity, always save at least 3 to 6 months of living expenses in a safe liquid account.'
    ]
  },
  {
    id: 'inspiring-biographies-great-indian-scientists',
    title: 'Great Indian Scientists & Visionaries: Inspiring Journeys (भारत के महान वैज्ञानिक और विचारक)',
    subtitle: 'Life Lessons, Discoveries & Resilience of APJ Abdul Kalam, Ramanujan, Homi Bhabha, Vikram Sarabhai & CV Raman',
    slug: 'inspiring-biographies-great-indian-scientists',
    author: 'Hariom Kushwaha (HK VELORA Heritage & Science Desk)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Passionate about Indian scientific heritage and inspiring young minds to pursue research, curiosity, and national building.',
    publisher: 'HK Tech World Inspiring Heritage Series',
    category: 'Stories & Literature',
    subcategory: 'Biographies & Inspiring History',
    genre: 'Biographies & Science History',
    bookType: 'Story',
    description: 'An inspiring, deeply researched biographical book for students and curious readers of all ages. Tells the true, courageous stories of five extraordinary Indian scientific pioneers who overcame extreme poverty, colonial subjugation, and resource scarcity to put India on the global scientific map: Dr. APJ Abdul Kalam, Srinivasa Ramanujan, Dr. Homi J. Bhabha, Dr. Vikram Sarabhai, and Sir C.V. Raman.',
    shortDescription: 'Discover the extraordinary lives, struggles, and breakthrough discoveries of India’s greatest scientific minds.',
    pages: 320,
    format: 'E-Book & Audiobook',
    difficulty: 'All Levels',
    rating: 4.99,
    reviewCount: 710,
    badge: 'National Pride',
    coverGradient: 'from-amber-700 via-orange-800 to-indigo-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['APJ Abdul Kalam', 'Ramanujan', 'Vikram Sarabhai', 'Homi Bhabha', 'CV Raman', 'ISRO', 'Biography', 'Science', 'Inspiration'],
    topics: ['Wings of Fire & SLV-3', 'Infinite Series & Partition Numbers', 'India Atomic Energy Program', 'Birth of ISRO', 'Raman Effect & Nobel Prize'],
    language: 'Hindi & English Heartfelt Prose',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-23-7',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '6h 45m',
    whatYoullLearn: [
      'How young Abdul Kalam sold newspapers in Rameswaram and overcame the failure of the first SLV-3 satellite launch to become the Missile Man of India',
      'The genius of Srinivasa Ramanujan: writing mathematical theorems on slates without formal university training and his historic voyage to Cambridge',
      'How Dr. Homi Bhabha laid the foundations of Tata Institute of Fundamental Research (TIFR) and India’s peaceful three-stage nuclear power program',
      'How Dr. Vikram Sarabhai launched India’s space program from a church in Thumba with rockets transported on bicycles',
      'Sir C.V. Raman’s discovery of the inelastic scattering of light using equipment costing just a few hundred rupees, winning Asia’s first science Nobel Prize'
    ],
    tableOfContents: [
      '1. Dr. APJ Abdul Kalam: The Visionary Who Taught India to Dream (मिसाइल मैन का जीवन)',
      '2. Srinivasa Ramanujan: The Man Who Knew Infinity (अनंत का साधक)',
      '3. Dr. Homi Jehangir Bhabha: Architect of Indian Atomic Energy (परमाणु ऊर्जा के जनक)',
      '4. Dr. Vikram Sarabhai: Taking India to the Stars & ISRO Genesis (भारतीय अंतरिक्ष कार्यक्रम के शिल्पकार)',
      '5. Sir C.V. Raman & The Song of Light (नोबेल पुरस्कार व रमन प्रभाव की खोज)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Dr. APJ Abdul Kalam - The Boy from Rameswaram',
        summary: 'Born in 1931 in Tamil Nadu. How perseverance and curiosity turned setbacks into national triumphs.',
        keyPoints: [
          '"Failure will never overtake me if my determination to succeed is strong enough."',
          'When the SLV-3 launch failed in 1979, project leader Prof. Satish Dhawan took the blame at the press conference. When it succeeded in 1980, he gave all credit to the team.',
          'Kalam believed that youth have the power to transform India into an empowered knowledge superpower.'
        ]
      }
    ],
    studyNotes: [
      'Takeaway for Students: Great discoveries do not require billionaire labs; they require relentless curiosity, disciplined focus, and love for problem solving.'
    ]
  },
  {
    id: 'class-6-to-8-math-science-foundation-handbook',
    title: 'Class 6 to 8 Mathematics & Science Foundation Handbook (जूनियर गणित व विज्ञान फाउंडेशन हैंडबुक)',
    subtitle: 'Concept Clarity, Visual Proofs, Daily Science Experiments & Problem Solving for Middle School',
    slug: 'class-6-to-8-math-science-foundation-handbook',
    author: 'HK VELORA Foundation School Faculty',
    authorId: 'hk-foundation-faculty',
    authorBio: 'Educators specializing in middle school cognitive development, foundational arithmetic, and intuitive science.',
    publisher: 'HK VELORA School Series',
    category: 'Student & Education',
    subcategory: 'Middle School (Classes 6-8)',
    genre: 'Foundation School Textbook',
    bookType: 'Textbook',
    description: 'The definitive foundation builder for Class 6, 7, and 8 students. Eliminates the gap between rote memorization and true understanding. Explains Integers, Fractions, Decimals, Ratios, Algebraic expressions, Geometry (lines, angles, triangles), Light, Sound, Electricity circuits, and Living Organisms using fun everyday real-life examples and cartoon explanations.',
    shortDescription: 'Build rock-solid mathematical thinking and scientific curiosity for middle school students in Classes 6, 7, and 8.',
    pages: 360,
    format: 'E-Book & PDF',
    difficulty: 'Beginner',
    rating: 4.95,
    reviewCount: 340,
    badge: 'School Essential',
    coverGradient: 'from-blue-500 via-indigo-600 to-purple-800',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Class 6', 'Class 7', 'Class 8', 'Middle School', 'Maths', 'Science', 'NCERT', 'Foundation'],
    topics: ['Integers & Number Lines', 'Fractions & Decimals', 'Introduction to Algebra', 'Light & Shadows', 'Electric Circuits & Magnets'],
    language: 'Hindi & English (द्विभाषी सरल व्याख्या)',
    featured: true,
    trending: false,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-24-4',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'HK School Faculty',
    audioDuration: '5h 30m',
    whatYoullLearn: [
      'Master negative numbers and integers on number lines without confusing minus-minus rules',
      'Understand fractions visually through pizza slices and decimal place values',
      'Decode algebra for the first time: understanding variables as mystery gift boxes waiting to be opened',
      'Understand the laws of reflection, pinhole cameras, shadows, and how human eyes see colors',
      'Construct series and parallel battery-bulb circuits and understand permanent vs electromagnets'
    ],
    tableOfContents: [
      '1. Knowing Our Numbers: Integers & The Number Line (संख्याओं की दुनिया व पूर्णांक)',
      '2. Fractions, Decimals & Ratios (भिन्न, दशमलव व अनुपात)',
      '3. Introduction to Algebra & Simple Equations (बीजगणित की शुरुआत)',
      '4. Geometry: Lines, Angles & Triangles (ज्यामिति: रेखाएं, कोण व त्रिभुज)',
      '5. Light, Shadows & Reflections (प्रकाश, छायाएं व परावर्तन)',
      '6. Electricity, Circuits & Magnets (विद्युत परिपथ एवं चुंबकत्व)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Integers & The Number Line Adventure',
        summary: 'Numbers are not just for counting sheep; they also represent depths, debts, and temperatures below freezing.',
        keyPoints: [
          'Positive numbers lie to the right of zero; negative numbers lie to the left.',
          'Subtracting a negative number is equivalent to adding a positive number (-(-x) = +x). Think of removing a debt from your account.',
          'Absolute Value |x| is simply the distance from zero on the number line, which is always positive.'
        ]
      }
    ],
    studyNotes: [
      'Middle school is where lifelong confidence in STEM is born. Never hesitate to ask "why" a formula works rather than just memorizing it.'
    ]
  },
  {
    id: 'student-super-power-focus-time-management',
    title: 'Student Super-Power: Focus, Time Management & Exam Stress Relief (एकाग्रता, टाइम टेबल व परीक्षा तनाव मुक्ति)',
    subtitle: 'Proven Neuroscience Hacks, The Pomodoro Technique, Active Recall & Beating Procrastination',
    slug: 'student-super-power-focus-time-management',
    author: 'Hariom Kushwaha (HK Tech World Mind Lab)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Educator, mentor, and researcher helping thousands of students overcome smartphone addiction, study fatigue, and exam panic.',
    publisher: 'HK VELORA Wellness & Study Press',
    category: 'Student & Education',
    subcategory: 'Productivity & Mental Health',
    genre: 'Self-Help & Academic Productivity',
    bookType: 'Handbook',
    description: 'Most students fail exams not because of a lack of intelligence, but because of digital distractions, erratic sleep cycles, passive highlighting, and last-minute panic. This handbook arms students with science-backed protocols: how to sit for 3-hour deep study sessions without touching Instagram/YouTube, using Spaced Repetition and Feynman Technique, constructing a realistic daily routine, and walking into the exam hall with relaxed, confident clarity.',
    shortDescription: 'Master deep focus, eliminate smartphone procrastination, design realistic study timetables, and conquer exam anxiety.',
    pages: 280,
    format: 'E-Book & Audio Companion',
    difficulty: 'All Levels',
    rating: 4.99,
    reviewCount: 650,
    badge: 'Must Read for Students',
    coverGradient: 'from-rose-600 via-pink-700 to-purple-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Study Habits', 'Focus', 'Time Management', 'Exam Stress', 'Pomodoro', 'Active Recall', 'Mental Wellness'],
    topics: ['Dopamine Detox from Phones', 'Pomodoro & Deep Work', 'Active Recall & Spaced Repetition', 'Realistic Timetable Design', 'Exam Day Calm Protocol'],
    language: 'Hindi & English (मित्रवत प्रेरक भाषा)',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-25-1',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '4h 30m',
    whatYoullLearn: [
      'Stop the phone scrolling reflex: how to study with total focus using physical environment cues and dopamine management',
      'The Feynman Technique: Explain any complex physics or coding concept to a 10-year-old to spot gaps in your understanding',
      'Active Recall vs Passive Reading: Why re-reading a textbook 5 times is useless compared to testing yourself with closed books',
      'Construct a daily study timetable that accounts for fatigue, hobbies, and sports so you never burn out',
      'Manage physiological exam anxiety with 4-7-8 breathing and positive self-talk before receiving the question paper'
    ],
    tableOfContents: [
      '1. The Distraction Epidemic: Reclaiming Your Brain from Algorithms (मोबाइल की लत से मुक्ति)',
      '2. Active Recall & Spaced Repetition: The Science of Unbreakable Memory (याद रखने का वैज्ञानिक तरीका)',
      '3. The Feynman Technique: Learn Anything in Half the Time (रिचर्ड फाइनमैन की अध्ययन तकनीक)',
      '4. Designing a Realistic Daily Routine & Sleep Schedule (टाइम टेबल जो कभी फेल न हो)',
      '5. Overcoming Procrastination with the 5-Minute Rule (आलस्य को हराने का फॉर्मूला)',
      '6. Exam Hall Calm: Turning Anxiety into High Performance (परीक्षा हॉल में तनाव मुक्त रहने की कला)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: The Distraction Epidemic & Dopamine Reset',
        summary: 'Social media notifications trigger tiny bursts of dopamine that shatter your cognitive stamina. How to build a focus fortress.',
        keyPoints: [
          'Out of Sight, Out of Mind: Put your phone in another room or inside a drawer when beginning a study session. Just having the phone face-down on your desk drains 20% of your working memory.',
          'The 5-Minute Rule: When feeling immense resistance to study, tell yourself: "I will only open the book and read for exactly 5 minutes. If I still want to stop after 5 minutes, I can." 90% of the time, inertia breaks and you continue studying for hours.',
          'Protect the first 60 minutes after waking up: Never check social media notifications right after waking up; it primes your brain for reactive distraction all day.'
        ]
      }
    ],
    studyNotes: [
      'Sleep is not a waste of time. Sleep is when your brain’s hippocampus converts short-term study notes into permanent long-term memory traces. Never study all night at the cost of sleep before an exam!'
    ]
  }
];
