import { EBookItem } from '../types';

export const SENIOR_SCHOOL_ACADEMIC_DATA: EBookItem[] = [
  {
    id: 'class12-physics-optics-modern',
    title: 'Class 12 Physics: Wave Optics & Modern Physics (तरंग प्रकाशिकी एवं आधुनिक भौतिकी)',
    subtitle: 'Huygens Principle, Young’s Double Slit, Photoelectric Effect, Bohr Model & Semiconductors',
    author: 'Prof. Harishchandra Agrawal & HK VELORA Science Board Faculty',
    authorBio: 'Former CBSE physics curriculum committee contributor and senior faculty with over 28 years of board preparation coaching.',
    publisher: 'HK VELORA School Education Series',
    description: 'Master the highest-weightage units of Class 12 Physics: Wave Optics, Dual Nature of Radiation, Atomic Structure, Nuclear Binding Energy, and p-n Junction Semiconductor Diodes with step-by-step derivations and board numericals.',
    shortDescription: 'Wave Optics (YDSE), Photoelectric Einstein equation, Bohr radius, Mass defect, and Semiconductor rectification.',
    category: 'Class 9–12 / School',
    subcategory: 'Physics (Class 12)',
    coverGradient: 'from-blue-900 via-indigo-950 to-slate-950',
    pages: 360,
    format: 'EPUB / PDF',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewCount: 410,
    price: 0,
    isFree: true,
    schoolClass: 'Class 12',
    badge: '12th Board Core',
    tags: ['Physics', 'Class 12', 'Wave Optics', 'Modern Physics', 'Semiconductors', 'CBSE', 'Board Exams'],
    language: 'Hindi & English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA High School Physics Department',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Wave Optics: Huygens Wavefront Principle, Laws of Reflection & Refraction using Wave Theory',
      'Interference of Light: Coherent Sources, Young’s Double Slit Experiment (YDSE) & Fringe Width Derivation',
      'Diffraction & Polarization: Single Slit Fraunhofer Diffraction, Central Maxima Width & Brewster’s Law',
      'Dual Nature of Radiation: Photoelectric Effect, Hertz-Lenard Observations & Einstein’s Photoelectric Equation',
      'de Broglie Hypothesis: Wave-Particle Duality, de Broglie Wavelength of Electrons & Davisson-Germer Experiment',
      'Atomic Physics: Rutherford Alpha Scattering, Bohr Atomic Model, Hydrogen Spectral Series (Lyman, Balmer)',
      'Nuclear Physics: Mass Defect, Binding Energy per Nucleon Curve, Nuclear Fission & Controlled Fusion',
      'Semiconductor Electronics: Intrinsic vs Extrinsic (n-type, p-type), p-n Junction Diode as Half & Full Wave Rectifier'
    ],
    chaptersPreview: [
      {
        title: 'Young’s Double Slit Experiment (YDSE) & Einstein’s Photoelectric Equation',
        summary: 'Complete mathematical derivation of fringe width in interference and verification of photon energy quantum theory.',
        keyPoints: [
          'Condition for Constructive Interference (Bright Fringes): Path difference $\\Delta x = n\\lambda$ where $n = 0, 1, 2...$',
          'Condition for Destructive Interference (Dark Fringes): Path difference $\\Delta x = (2n - 1)\\frac{\\lambda}{2}$',
          'Fringe Width Formula: $\\beta = \\frac{\\lambda D}{d}$ (Where $\\lambda$ is wavelength, $D$ is screen distance, $d$ is slit separation).',
          'Einstein’s Photoelectric Equation: $K_{max} = h\\nu - \\phi_0 = h(\\nu - \\nu_0)$ where $\\phi_0 = h\\nu_0$ is work function.'
        ],
        content: `### 1. यंग का द्वि-स्लिट प्रयोग (Young’s Double Slit Experiment - YDSE)

प्रकाश के व्यतिकरण (Interference) को सिद्ध करने के लिए थॉमस यंग ने दो कला-संबद्ध स्रोतों ($S_1, S_2$) का उपयोग किया।

#### व्यतिकरण फ्रिंज की चौड़ाई का निगमन (Derivation of Fringe Width $\\beta$):
माना दो स्लिटों के बीच की दूरी $d$ है तथा स्लिटों से पर्दे की दूरी $D$ है ($D \\gg d$)। पर्दे पर केंद्रीय बिंदु $O$ से $y$ दूरी पर स्थित किसी बिंदु $P$ पर:

**पथांतर (Path Difference):**
$$\\Delta x = S_2 P - S_1 P \\approx \\frac{y \\cdot d}{D}$$

1. **दीप्त फ्रिंज (Bright Fringe / संपोषी व्यतिकरण):**
   $$\\Delta x = n\\lambda \\implies y_n = \\frac{n\\lambda D}{d} \\quad (n = 0, 1, 2, \\dots)$$
2. **अदीप्त फ्रिंज (Dark Fringe / विनाशी व्यतिकरण):**
   $$\\Delta x = (2n - 1)\\frac{\\lambda}{2} \\implies y'_n = (2n - 1)\\frac{\\lambda D}{2d}$$

**फ्रिंज चौड़ाई (Fringe Width $\\beta$):**
किन्हीं दो क्रमागत दीप्त या अदीप्त फ्रिंजों के बीच की दूरी:
$$\\beta = y_{n+1} - y_n = \\frac{(n+1)\\lambda D}{d} - \\frac{n\\lambda D}{d} = \\mathbf{\\frac{\\lambda D}{d}}$$

---

### 2. आइंस्टीन का प्रकाश-विद्युत समीकरण (Einstein's Photoelectric Equation)

मैक्स प्लांक के क्वांटम सिद्धांत के अनुसार, जब $h\\nu$ ऊर्जा का एक फोटॉन धातु की सतह से टकराता है, तो उसकी ऊर्जा दो भागों में व्यय होती है:
1. इलेक्ट्रॉन को धातु सतह से बाहर निकालने में (कार्यफलन $\\phi_0 = h\\nu_0$)
2. उत्सर्जित इलेक्ट्रॉन को अधिकतम गतिज ऊर्जा ($K_{max}$) प्रदान करने में

$$h\\nu = \\phi_0 + K_{max}$$
$$\\mathbf{K_{max} = \\frac{1}{2}m v_{max}^2 = h(\\nu - \\nu_0) = eV_0}$$
जहाँ $\\nu_0$ देहली आवृत्ति (Threshold Frequency) तथा $V_0$ संस्तब्ध विभव (Stopping Potential) है।`,
        realWorldUse: 'Used in anti-reflective optical lens coatings, fiber-optic communication, solar photovoltaic cells, and laser interferometry.',
        exercise: 'In a YDSE setup, light of wavelength 600 nm illuminates slits separated by 0.2 mm. Find the fringe width on a screen placed 1.0 m away.'
      }
    ],
    studyNotes: [
      'If YDSE apparatus is submerged in water of refractive index $\\mu$, fringe width decreases to $\\beta\' = \\beta / \\mu$.',
      'In photoelectric effect, kinetic energy of photoelectrons depends strictly on incident frequency, NOT on intensity. Intensity increases the number of emitted electrons (photoelectric current).'
    ]
  },
  {
    id: 'class12-chemistry-organic-mastery',
    title: 'Class 12 Chemistry: Organic Chemistry Reactions & Mechanisms (कार्बनिक रसायन)',
    subtitle: 'Haloalkanes, Alcohols, Phenols, Aldehydes, Ketones, Carboxylic Acids, Amines & Named Reactions',
    author: 'Dr. Anand Swaroop Srivastava & HK VELORA Chemistry Council',
    authorBio: 'Doctorate in Organic Synthesis, author of national competitive chemistry monographs, and 25-year board examiner.',
    publisher: 'HK VELORA School Education Series',
    description: 'The master companion for Class 12 Organic Chemistry: complete reaction mechanisms (SN1 vs SN2), 35 named reactions (Aldol, Cannizzaro, Reimer-Tiemann, Kolbe, Hoffmann), and chemical conversion pathways.',
    shortDescription: 'SN1/SN2 mechanisms, Aldol condensation, Cannizzaro reaction, Diazonium salts, and Organic conversions.',
    category: 'Class 9–12 / School',
    subcategory: 'Chemistry (Class 12)',
    coverGradient: 'from-emerald-950 via-teal-950 to-slate-950',
    pages: 380,
    format: 'EPUB / PDF',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewCount: 435,
    price: 0,
    isFree: true,
    schoolClass: 'Class 12',
    badge: '12th Chemistry Gold',
    tags: ['Chemistry', 'Class 12', 'Organic Chemistry', 'Named Reactions', 'CBSE', 'Board Exams'],
    language: 'Hindi & English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Chemistry & Chemical Engineering Group',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Haloalkanes & Haloarenes: Nucleophilic Substitution Mechanisms (SN1 vs SN2, Inversion vs Racemization)',
      'Alcohols & Phenols: Acidic Character of Phenol, Kolbe’s Reaction, Reimer-Tiemann Reaction & Lucas Test',
      'Ethers: Williamson Ether Synthesis, Mechanism of Cleavage of Ethers by Hydrogen Halides (HI)',
      'Aldehydes & Ketones: Nucleophilic Addition Reactions, Tollens’ Test, Fehling’s Test & Iodoform Reaction',
      'Master Named Reactions: Aldol Condensation, Cross-Aldol Condensation & Cannizzaro Reaction',
      'Carboxylic Acids: Decarboxylation, Hell-Volhard-Zelinsky (HVZ) Reaction & Esterification',
      'Amines: Gabriel Phthalimide Synthesis, Hoffmann Bromamide Degradation & Carbylamine Test',
      'Diazonium Salts: Sandmeyer Reaction, Gattermann Reaction, Azo Coupling & Roadmaps for Conversions'
    ],
    chaptersPreview: [
      {
        title: 'SN1 vs SN2 Mechanisms & Aldol vs Cannizzaro Reaction',
        summary: 'Deep conceptual breakdown of carbocation vs transition state kinetics and alpha-hydrogen carbonyl chemistry.',
        keyPoints: [
          'SN1 (Substitution Nucleophilic Unimolecular): Two steps via planar carbocation intermediate, 1st order kinetics, produces racemization. Order of reactivity: $3^\\circ > 2^\\circ > 1^\\circ$.',
          'SN2 (Substitution Nucleophilic Bimolecular): Single concerted step via pentacoordinate transition state, 2nd order kinetics, complete Walden Inversion. Order of reactivity: Methyl $> 1^\\circ > 2^\\circ > 3^\\circ$.',
          'Aldol Condensation: Given by aldehydes/ketones having at least one $\\alpha$-hydrogen in presence of dilute alkali (NaOH).',
          'Cannizzaro Reaction: Given by aldehydes having NO $\\alpha$-hydrogen (e.g., HCHO, $C_6H_5CHO$) in presence of concentrated (50%) NaOH, undergoing disproportionation into alcohol and carboxylate salt.'
        ],
        content: `### 1. SN1 एवं SN2 नाभिकरागी प्रतिस्थापन अभिक्रियाएं (Comparative Mechanisms)

| विशेषता | SN1 अभिक्रिया | SN2 अभिक्रिया |
|---|---|---|
| **पद (Steps)** | 2 पद (पहले पद में कार्बोकैटायन निर्माण) | 1 एकल पद (संक्रमण अवस्था - Transition State) |
| **बलगतिकी (Kinetics)** | प्रथम कोटि: $\\text{Rate} = k[RX]$ | द्वितीय कोटि: $\\text{Rate} = k[RX][Nu^-]$ |
| **त्रिविम रसायन (Stereochem)** | रेसिमीकरण (Racemization - 50% Inversion, 50% Retention) | पूर्ण वाल्डेन प्रतिलोमन (Walden Inversion - छाते का उलटना) |
| **क्रियाशीलता का क्रम** | $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3X$ (कार्बोकैटायन स्थायित्व) | $\\text{CH}_3X > 1^\\circ > 2^\\circ > 3^\\circ$ (त्रिविम बाधा / Steric Hindrance) |

---

### 2. एल्डोल संघनन बनाम कैनिजारो अभिक्रिया (Aldol vs Cannizzaro)

#### (A) एल्डोल संघनन (Aldol Condensation):
शर्त: एल्डिहाइड या कीटोन के पास कम से कम एक $\\alpha$-हाइड्रोजन अवश्य होना चाहिए।
$$2\\text{CH}_3\\text{CHO} \\xrightarrow{\\text{dil. NaOH}} \\text{CH}_3-\\text{CH(OH)}-\\text{CH}_2-\\text{CHO} \\xrightarrow{\\Delta, -\\text{H}_2\\text{O}} \\mathbf{\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CHO}} \\text{ (ब्यूट-2-ईनल)}$$

#### (B) कैनिजारो अभिक्रिया (Cannizzaro Reaction):
शर्त: एल्डिहाइड के पास $\\alpha$-हाइड्रोजन नहीं होना चाहिए। यह एक **स्वतः रेडॉक्स (Disproportionation)** अभिक्रिया है:
$$2\\text{HCHO} + \\text{conc. NaOH (50%)} \\longrightarrow \\mathbf{\\text{CH}_3\\text{OH}} \\text{ (मेथनॉल - अपचयन)} + \\mathbf{\\text{HCOONa}} \\text{ (सोडियम फॉर्मेट - ऑक्सीकरण)}$$`,
        realWorldUse: 'Industrial synthesis of fragrances, pharmaceuticals (aspirin, paracetamol), polymers, and active agrochemicals.',
        exercise: 'Distinguish chemically between Propan-2-one (acetone) and Propanal using a single chemical test with observations and equation.'
      }
    ],
    studyNotes: [
      'Iodoform test is given by compounds having $\\text{CH}_3\\text{C=O}$ or $\\text{CH}_3\\text{CH(OH)}$ groups, forming yellow crystals of $\\text{CHI}_3$ with characteristic antiseptic smell.',
      'Phenol reacts with $\\text{Br}_2/\\text{H}_2\\text{O}$ to give a white precipitate of 2,4,6-tribromophenol.'
    ]
  },
  {
    id: 'class12-biology-genetics-ecology',
    title: 'Class 12 Biology: Genetics, Evolution & Biotechnology (आनुवंशिकी एवं जैव प्रौद्योगिकी)',
    subtitle: 'Mendelian Principles, DNA Replication, Transcription, Translation, Lac Operon & Genetic Engineering',
    author: 'Dr. Sunita Mukherjee & HK VELORA Life Sciences Cell',
    authorBio: 'Senior molecular biologist, medical entrance coach, and state textbook development committee advisor.',
    publisher: 'HK VELORA School Education Series',
    description: 'The definitive Class 12 Biology guide for CBSE and NEET aspirants: Molecular Basis of Inheritance, DNA Double Helix, Genetic Code, Central Dogma, Recombinant DNA Technology, and Ecological Adaptations.',
    shortDescription: 'Mendelian genetics, Hershey-Chase experiment, Lac Operon, PCR technique, and Ecosystem energy flow.',
    category: 'Class 9–12 / School',
    subcategory: 'Biology (Class 12)',
    coverGradient: 'from-teal-950 via-emerald-950 to-slate-950',
    pages: 350,
    format: 'EPUB / PDF',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewCount: 395,
    price: 0,
    isFree: true,
    schoolClass: 'Class 12',
    badge: 'NEET & Board Core',
    tags: ['Biology', 'Class 12', 'Genetics', 'DNA', 'Biotechnology', 'NEET', 'Board Exams'],
    language: 'Hindi & English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Life Sciences & Biotechnology Desk',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Principles of Inheritance: Mendel’s Monohybrid & Dihybrid Cross, Incomplete Dominance & Codominance',
      'Chromosomal Basis: Linkage & Recombination (Morgan’s Drosophila experiments), Sex Determination & Pedigree Analysis',
      'Molecular Genetics: DNA as Genetic Material (Griffith, Avery-MacLeod, Hershey-Chase Experiment)',
      'DNA Replication: Semiconservative Nature (Meselson & Stahl experiment), Replication Fork & DNA Polymerase',
      'Central Dogma: Transcription in Prokaryotes vs Eukaryotes, Genetic Code Features & Translation Machinery',
      'Gene Expression: Regulation of Gene Expression, Jacob & Monod’s Lac Operon Model (Inducer vs Repressor)',
      'Biotechnology Principles: Restriction Endonucleases, DNA Ligase, Cloning Vectors (pBR322) & PCR Steps',
      'Ecology & Biodiversity: Population Growth Models, 10% Energy Law, Ecological Pyramids & Biodiversity Conservation'
    ],
    chaptersPreview: [
      {
        title: 'The Lac Operon Model & Hershey-Chase Genetic Material Proof',
        summary: 'Detailed molecular functioning of inducible gene expression in E. coli and definitive bacteriophage isotopic labeling experiment.',
        keyPoints: [
          'Hershey-Chase Experiment (1952): Used T2 bacteriophage labeled with Radioactive Sulfur-35 ($^{35}S$ in proteins) and Radioactive Phosphorus-32 ($^{32}P$ in DNA). Proved DNA entered bacterial cells, confirming DNA is the genetic material.',
          'Lac Operon (Jacob & Monod): An inducible operon system in E. coli controlling lactose catabolism.',
          'Structural genes: $z$ (beta-galactosidase), $y$ (permease), $a$ (transacetylase).',
          'Inducer: Lactose/Allolactose binds to repressor protein, inactivating it and allowing RNA polymerase to transcribe.'
        ],
        content: `### 1. लैक ऑपेरॉन मॉडल (The Lac Operon Model - Jacob & Monod)

ई. कोलाई (E. coli) जीवाणु में लैक्टोज के अपघटन के लिए जिम्मेदार जीनों के समूह को **लैक ऑपेरॉन** कहते हैं। यह एक **प्रेरणीय (Inducible)** ऑपेरॉन है।

#### संरचनात्मक घटक (Structural Components):
1. **नियामक जीन ($i$-gene):** यह दमनकारी प्रोटीन (Repressor Protein) का निर्माण करता है।
2. **प्रमोटर जीन ($p$):** जहाँ RNA पॉलिमरेज आकर जुड़ता है।
3. **ऑपरेटर जीन ($o$):** जिस पर दमनकारी प्रोटीन जुड़कर अनुलेखन रोकता है।
4. **संरचनात्मक जीन (Structural Genes):**
   - **$z$-जीन:** $\\beta$-गैलेक्टोसाइडेज एन्जाइम बनाता है (लैक्टोज को ग्लूकोज + गैलेक्टोज में तोड़ता है)।
   - **$y$-जीन:** परमिएज एन्जाइम बनाता है (कोशिका झिल्ली की लैक्टोज के लिए पारगम्यता बढ़ाता है)।
   - **$a$-जीन:** ट्रांसएसिटाइलेज एन्जाइम बनाता है।

#### क्रियाविधि (Mechanisms of Operation):
- **(A) लैक्टोज की अनुपस्थिति (स्विच OFF):**
  $i$-जीन द्वारा बना रिप्रेसर ऑपरेटर ($o$) से कसकर जुड़ जाता है। फलस्वरूप RNA पॉलिमरेज आगे नहीं बढ़ पाता और अनुलेखन रुक जाता है।
- **(B) लैक्टोज की उपस्थिति (स्विच ON):**
  लैक्टोज (प्रेरक / Inducer) रिप्रेसर से जुड़कर उसके आकार में परिवर्तन कर देता है। निष्क्रिय रिप्रेसर ऑपरेटर से अलग हो जाता है, जिससे RNA पॉलिमरेज तीनों संरचनात्मक जीनों का अनुलेखन कर एन्जाइम संश्लेषित करता है।`,
        realWorldUse: 'Underpins synthetic biology, recombinant insulin production, gene therapy, and CRISPR-Cas9 genome editing.',
        exercise: 'Explain what will happen to the expression of the lac operon if the lac-i gene suffers a nonsense mutation making the repressor permanently inactive.'
      }
    ],
    studyNotes: [
      'Genetic code is degenerate (one amino acid coded by more than one codon), unambiguous (one codon codes for only one amino acid), and nearly universal.',
      'PCR (Polymerase Chain Reaction) involves three steps: Denaturation (94°C), Annealing of primers (54°C), and Extension using heat-stable Taq DNA Polymerase from Thermus aquaticus (72°C).'
    ]
  },
  {
    id: 'class12-accountancy-company-shares',
    title: 'Class 12 Accountancy: Company Accounts & Partnership Dissolution (कंपनी लेखांकन)',
    subtitle: 'Issue of Shares, Forfeiture, Reissue, Debentures, Redemption & Partnership Firm Dissolution',
    author: 'CA Rajeshwar Singhal & HK VELORA Commerce Cell',
    authorBio: 'Chartered Accountant, partner at national audit firm, and leading instructor for CBSE 12th Board & CA Foundation.',
    publisher: 'HK VELORA School Education Series',
    description: 'The master reference for Class 12 Commerce students: comprehensive treatment of Accounting for Share Capital (Pro-rata allotment, Calls in arrears, Forfeiture, Capital Reserve) and Realisation Account in Dissolution.',
    shortDescription: 'Issue of shares at premium, Pro-rata allotment, Share forfeiture & reissue, Realisation account, and Partner capital accounts.',
    category: 'Class 9–12 / School',
    subcategory: 'Accountancy (Class 12)',
    coverGradient: 'from-amber-950 via-stone-900 to-slate-950',
    pages: 370,
    format: 'EPUB / PDF',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewCount: 380,
    price: 0,
    isFree: true,
    schoolClass: 'Class 12',
    badge: '12th Commerce Core',
    tags: ['Accountancy', 'Class 12', 'Company Accounts', 'Shares', 'Partnership', 'Commerce', 'Board Exams'],
    language: 'English & Hindi bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Commerce & Corporate Finance Desk',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Accounting for Share Capital: Nature of Companies, Share Types (Equity & Preference) and Authorized Capital',
      'Issue of Shares at Par & Premium: Securities Premium Account utilization rules under Companies Act Section 52(2)',
      'Over-Subscription & Pro-Rata Allotment: Calculating excess application money adjusted towards allotment and calls',
      'Forfeiture of Shares: Journal entries when shares issued at par vs premium are forfeited for non-payment of calls',
      'Re-issue of Forfeited Shares: Maximum permissible discount on reissue and Transfer of gain to Capital Reserve',
      'Issue & Redemption of Debentures: Collateral security treatment, Writing off discount/loss on issue of debentures',
      'Dissolution of Partnership Firm: Realisation Account preparation, Settlement of liabilities according to Section 48',
      'Cash Flow Statement (AS-3): Operating, Investing, and Financing activities cash flow calculations'
    ],
    chaptersPreview: [
      {
        title: 'Pro-Rata Allotment, Share Forfeiture & Capital Reserve Calculation',
        summary: 'A step-by-step master problem solving approach for the highest-weightage 6-mark and 8-mark questions in CBSE Board examinations.',
        keyPoints: [
          'Section 52(2) Companies Act: Securities Premium cannot be utilized for normal revenue dividends. It can only be used for issuing bonus shares, writing off preliminary expenses/discount on debentures, or buyback of shares.',
          'When forfeited shares are re-issued at a discount, the discount cannot exceed the amount already collected on those forfeited shares.',
          'Profit on reissue of forfeited shares must be transferred to Capital Reserve Account.',
          'In Dissolution, Realisation Account is a nominal account prepared to close books of accounts upon disposal of assets and payment of liabilities.'
        ],
        content: `### अंशों का जब्तीकरण एवं पुनर्निर्गमन (Share Forfeiture & Reissue Master Problem)

जब कोई अंशधारी आवंटन या याचना की राशि नहीं चुकाता, तो संचालक मंडल विधिवत 14 दिनों की नोटिस देकर उसके अंशों को जब्त कर सकता है।

#### 1. अंश जब्ती की रोजनामचा प्रविष्टि (Journal Entry for Forfeiture):
\`\`\`text
Share Capital A/c (No. of shares forfeited × Called-up value per share) ... Dr.
Securities Premium A/c (If premium was unpaid on these shares) ... Dr.
    To Calls-in-Arrears A/c (Total unpaid allotment/call amount)
    To Share Forfeiture A/c (Amount actually received towards face value)
\`\`\`

#### 2. जब्त अंशों का पुनर्निर्गमन (Re-issue of Forfeited Shares):
\`\`\`text
Bank A/c (No. of shares re-issued × Re-issue price) ... Dr.
Share Forfeiture A/c (Discount given on re-issue) ... Dr.
    To Share Capital A/c (Paid-up value of re-issued shares)
\`\`\`

#### 3. पूंजी संचय खाते में अंतरण (Transfer to Capital Reserve):
\`\`\`text
Share Forfeiture A/c ... Dr.
    To Capital Reserve A/c
(Being net gain on re-issue of forfeited shares transferred to capital reserve)
\`\`\`

**सूत्र (Formula for Capital Reserve on partial reissue):**
$$\\text{Capital Reserve} = \\left( \\frac{\\text{Total Forfeited Amount}}{\\text{Total Forfeited Shares}} \\times \\text{Re-issued Shares} \\right) - \\text{Discount on Reissue}$$`,
        realWorldUse: 'Essential skill for corporate financial controllers, stock market analysts, statutory auditors, and CA aspirants.',
        exercise: 'A company forfeited 500 equity shares of ₹10 each (₹8 called up) issued at a premium of ₹2 per share for non-payment of allotment money of ₹5 (including premium). 300 of these shares were reissued as ₹8 paid up for ₹7 per share. Pass the necessary journal entries.'
      }
    ],
    studyNotes: [
      'Realisation Account: Partner’s loan is NOT transferred to Realisation Account; it is paid directly after outside third-party debts.',
      'Unrecorded assets realized are credited to Realisation Account (Bank A/c Dr. to Realisation A/c).'
    ]
  },
  {
    id: 'class12-economics-national-income',
    title: 'Class 12 Macroeconomics: National Income & Money-Banking (समष्टि अर्थशास्त्र)',
    subtitle: 'Value Added, Income & Expenditure Methods, Inflationary Gap, Multiplier & Monetary Policy Tools',
    author: 'Prof. Devendra Nath Jha & HK VELORA Economics Faculty',
    authorBio: 'Senior macroeconomic analyst, former NCERT textbook reviewer, and guest lecturer at Delhi School of Economics.',
    publisher: 'HK VELORA School Education Series',
    description: 'Master the core numericals and theories of Class 12 Macroeconomics: circular flow of income, GDP vs NNP at factor cost, aggregate demand-supply equilibrium, investment multiplier, and RBI quantitative credit control.',
    shortDescription: 'National income aggregates, 3 measurement methods, Investment multiplier, Inflationary gap, and Repo rate transmission.',
    category: 'Class 9–12 / School',
    subcategory: 'Economics (Class 12)',
    coverGradient: 'from-orange-950 via-amber-950 to-slate-950',
    pages: 340,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.8,
    reviewCount: 360,
    price: 0,
    isFree: true,
    schoolClass: 'Class 12',
    badge: '12th Economics Core',
    tags: ['Economics', 'Macroeconomics', 'Class 12', 'National Income', 'Banking', 'CBSE', 'Commerce'],
    language: 'Hindi & English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Applied Economics & Policy Research Wing',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Introduction to Macroeconomics: Macro vs Micro, Final Goods vs Intermediate Goods & Capital Goods',
      'Circular Flow of Income: Real Flow vs Money Flow in a Two-Sector Economy, Stock vs Flow Variables',
      'National Income Aggregates: Conversion Formulae (Gross to Net, Domestic to National, MP to FC)',
      'Methods of Calculating National Income: Value Added Method (Double Counting problem and solutions)',
      'Income Method & Expenditure Method: Factor Incomes (Compensation of Employees, Operating Surplus, Mixed Income)',
      'Determination of Income & Employment: Aggregate Demand ($C + I$), MPC, MPS, Autonomous Consumption & Equilibrium',
      'Investment Multiplier ($k$): Multiplier Mechanism, Relationship between $k$ and MPC ($k = 1 / (1 - MPC)$)',
      'Money & Banking: Commercial Bank Credit Creation ($1 / LRR$), Central Bank (RBI) Monetary Policy (Repo Rate, CRR, SLR)'
    ],
    chaptersPreview: [
      {
        title: 'National Income Conversion Formulae & Investment Multiplier Mechanism',
        summary: 'Step-by-step mathematical logic for solving Class 12 board numericals without memorization confusion.',
        keyPoints: [
          'Gross to Net: $\\text{Net} = \\text{Gross} - \\text{Depreciation (Consumption of Fixed Capital)}$',
          'Domestic to National: $\\text{National} = \\text{Domestic} + \\text{NFIA (Net Factor Income from Abroad)}$',
          'Market Price to Factor Cost: $\\text{FC} = \\text{MP} - \\text{NIT (Net Indirect Taxes = Indirect Taxes - Subsidies)}$',
          'National Income is represented scientifically as: $NNP_{FC}$ (Net National Product at Factor Cost).'
        ],
        content: `### 1. राष्ट्रीय आय समुच्चयों के परिवर्तन सूत्र (Conversion Golden Rules)

राष्ट्रीय आय के किसी भी समुच्चय (जैसे $GDP_{MP}$ से $NNP_{FC}$) की गणना करने के लिए तीन बुनियादी स्वर्णिम नियम हैं:

$$\\begin{aligned}
\\text{1. सकल (Gross)} &\\xrightleftharpoons[+\\text{ घिसावट}]{-\\text{ घिसावट (Depreciation)}} \\text{शुद्ध (Net)} \\\\[8pt]
\\text{2. घरेलू (Domestic)} &\\xrightleftharpoons[-\\text{ NFIA}]{+\\text{ NFIA (विदेशों से शुद्ध साधन आय)}} \\text{राष्ट्रीय (National)} \\\\[8pt]
\\text{3. बाजार कीमत (MP)} &\\xrightleftharpoons[+\\text{ शुद्ध अप्रत्यक्ष कर}]{-\\text{ शुद्ध अप्रत्यक्ष कर (NIT)}} \\text{साधन लागत (FC)}
\\end{aligned}$$

**उदाहरण:**
$$NNP_{FC} = GDP_{MP} - \\text{Depreciation} + \\text{NFIA} - \\text{NIT}$$

---

### 2. निवेश गुणक की कार्यप्रणाली (Investment Multiplier $k$)

जब अर्थव्यवस्था में स्वायत्त निवेश (Autonomous Investment $\\Delta I$) में वृद्धि होती है, तो कुल राष्ट्रीय आय ($\\Delta Y$) में निवेश की तुलना में कई गुना वृद्धि होती है। इसे **निवेश गुणक** कहते हैं।

$$k = \\frac{\\Delta Y}{\\Delta I} = \\frac{1}{1 - MPC} = \\frac{1}{MPS}$$

#### गुणक की सीमाएं:
- यदि $MPC = 0$ (लोग बढ़ी हुई आय का कुछ भी खर्च नहीं करते): $k = 1$ (न्यूनतम मान)
- यदि $MPC = 1$ (लोग बढ़ी हुई सारी आय खर्च कर देते हैं): $k = \\infty$ (अधिकतम मान)
- अतः गुणक का मान **1 और $\\infty$ के बीच** होता है।`,
        realWorldUse: 'Used by central banks and finance ministries to calculate GDP growth impacts of budget stimulus packages and interest rate cuts.',
        exercise: 'In an economy, the marginal propensity to consume (MPC) is 0.8. If autonomous investment increases by ₹500 crores, calculate the total increase in national income and total increase in consumption expenditure.'
      }
    ],
    studyNotes: [
      'Transfer payments (like old-age pensions, pocket money, scholarships, gifts) are NOT included in National Income because they are unearned and do not contribute to current production of goods or services.',
      'Credit Multiplier in commercial banks is $1 / LRR$ (Legal Reserve Ratio). If LRR is 10%, banks can create 10 times the initial deposit.'
    ]
  },
  {
    id: 'class11-physics-thermo-waves',
    title: 'Class 11 Physics: Thermodynamics, Gravitation & Oscillations (ऊष्मागतिकी एवं दोलन)',
    subtitle: 'Zeroth, First & Second Laws of Thermodynamics, Heat Engines, Kepler’s Laws, Escape Velocity & SHM',
    author: 'Prof. Harishchandra Agrawal & HK VELORA Science Board Faculty',
    authorBio: 'Distinguished physics educator with over 28 years of board examination and competitive coaching mentorship.',
    publisher: 'HK VELORA School Education Series',
    description: 'A comprehensive guide to Class 11 Physics core modules: Universal Gravitation, Kepler’s orbital laws, Laws of Thermodynamics, Carnot Engine efficiency, and Simple Harmonic Motion (SHM) with phase diagrams.',
    shortDescription: 'Escape velocity, Kepler laws, First law of thermodynamics, Carnot engine efficiency, and Simple pendulum SHM.',
    category: 'Class 9–12 / School',
    subcategory: 'Physics (Class 11)',
    coverGradient: 'from-blue-950 via-slate-900 to-indigo-950',
    pages: 350,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 375,
    price: 0,
    isFree: true,
    schoolClass: 'Class 11',
    badge: '11th Physics Core',
    tags: ['Physics', 'Class 11', 'Thermodynamics', 'Gravitation', 'SHM', 'CBSE', 'Board Exams'],
    language: 'Hindi & English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA High School Physics Department',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Universal Law of Gravitation: Acceleration due to Gravity ($g$) variation with altitude, depth and latitude',
      'Gravitational Potential & Potential Energy: Orbital Velocity ($v_o$) and Escape Velocity ($v_e = \\sqrt{2gR}$)',
      'Kepler’s Planetary Laws: Law of Orbits, Law of Areas (Conservation of Angular Momentum) & Law of Periods ($T^2 \\propto r^3$)',
      'Thermal Properties of Matter: Heat Capacity, Latent Heat, Newton’s Law of Cooling & Thermal Expansion',
      'Laws of Thermodynamics: Zeroth Law (Temperature concept), First Law ($\\Delta Q = \\Delta U + \\Delta W$)',
      'Thermodynamic Processes: Isothermal ($PV = C$), Adiabatic ($PV^\\gamma = C$), Isobaric & Isochoric work done derivations',
      'Second Law of Thermodynamics: Clausius & Kelvin-Planck Statements, Carnot Cycle & Maximum Efficiency ($\\eta = 1 - T_2/T_1$)',
      'Oscillations & Simple Harmonic Motion (SHM): Displacement, Velocity, Acceleration, Kinetic/Potential Energy & Simple Pendulum ($T = 2\\pi\\sqrt{l/g}$)'
    ],
    chaptersPreview: [
      {
        title: 'Escape Velocity Derivation & The First Law of Thermodynamics',
        summary: 'Derive the minimum launch speed required to escape Earth’s gravity and explore adiabatic vs isothermal expansion.',
        keyPoints: [
          'Escape Velocity from Earth: $v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR} \\approx 11.2\\text{ km/s}$.',
          'Orbital Velocity of near-Earth satellite: $v_o = \\sqrt{gR} \\approx 7.92\\text{ km/s}$, hence $v_e = \\sqrt{2} v_o$.',
          'First Law of Thermodynamics: $\\Delta Q = \\Delta U + \\Delta W = nC_v\\Delta T + P\\Delta V$.',
          'In an adiabatic process (no heat exchange $\\Delta Q = 0$), work done during expansion reduces internal energy, causing cooling.'
        ],
        content: `### 1. पलायन वेग का निगमन (Derivation of Escape Velocity $v_e$)

**परिभाषा:** पलायन वेग वह न्यूनतम वेग है जिससे किसी पिंड को पृथ्वी की सतह से ऊपर फेंकने पर वह पृथ्वी के गुरुत्वाकर्षण क्षेत्र को पार कर जाए और कभी वापस न लौटे।

माना पृथ्वी का द्रव्यमान $M$ तथा त्रिज्या $R$ है। पृथ्वी के केंद्र से $x$ दूरी पर $m$ द्रव्यमान के पिंड पर गुरुत्वाकर्षण बल:
$$F = \\frac{GMm}{x^2}$$

पिंड को $x$ से $x + dx$ तक ले जाने में किया गया कार्य:
$$dW = F dx = \\frac{GMm}{x^2} dx$$

पिंड को सतह ($x = R$) से अनंत ($x = \\infty$) तक भेजने में किया गया कुल कार्य:
$$W = \\int_{R}^{\\infty} \\frac{GMm}{x^2} dx = GMm \\left[ -\\frac{1}{x} \\right]_R^{\\infty} = \\mathbf{\\frac{GMm}{R}}$$

यह कार्य पिंड को दी गई प्रारंभिक गतिज ऊर्जा $\\frac{1}{2}mv_e^2$ के बराबर होना चाहिए:
$$\\frac{1}{2}m v_e^2 = \\frac{GMm}{R} \\implies v_e = \\sqrt{\\frac{2GM}{R}}$$

चूँकि $g = \\frac{GM}{R^2} \\implies GM = gR^2$:
$$\\mathbf{v_e = \\sqrt{2gR}}$$

पृथ्वी के लिए ($g = 9.8\\text{ m/s}^2, R = 6.4 \\times 10^6\\text{ m}$):
$$v_e = \\sqrt{2 \\times 9.8 \\times 6.4 \\times 10^6} \\approx \\mathbf{11.2\\text{ km/s}}$$`,
        realWorldUse: 'Calculating fuel trajectories for rocket launches (ISRO Chandrayaan/Gaganyaan), space probes, and IC engine refrigeration cycles.',
        exercise: 'If the radius of a planet is double that of Earth but its mean density is the same as Earth, what will be the escape velocity on that planet?'
      }
    ],
    studyNotes: [
      'Escape velocity is completely independent of the mass of the projectile, the angle of projection, and its shape.',
      'In Simple Harmonic Motion (SHM), acceleration is directly proportional to displacement and always directed towards the equilibrium position: $a = -\\omega^2 x$.'
    ]
  },
  {
    id: 'class11-chemistry-equilibrium-structure',
    title: 'Class 11 Chemistry: Chemical Bonding, Thermodynamics & Equilibrium (रासायनिक आबंधन)',
    subtitle: 'VSEPR Theory, Hybridization, Molecular Orbital Theory (MOT), Hess’s Law, Le Chatelier & Buffer Solutions',
    author: 'Dr. Anand Swaroop Srivastava & HK VELORA Chemistry Council',
    authorBio: 'Renowned inorganic and physical chemistry mentor with over 25 years of educational guidance.',
    publisher: 'HK VELORA School Education Series',
    description: 'The foundation stones of high school chemistry: Lewis structures, VSEPR molecular geometry, sp/sp2/sp3/sp3d hybridization, MOT bond order, Enthalpy of reaction, Le Chatelier’s principle, and Henderson-Hasselbalch equation for buffers.',
    shortDescription: 'Hybridization, Molecular Orbital Theory, Hess’s Law, Le Chatelier principle, and pH buffer calculations.',
    category: 'Class 9–12 / School',
    subcategory: 'Chemistry (Class 11)',
    coverGradient: 'from-emerald-900 via-teal-950 to-slate-950',
    pages: 360,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.8,
    reviewCount: 350,
    price: 0,
    isFree: true,
    schoolClass: 'Class 11',
    badge: '11th Chemistry Core',
    tags: ['Chemistry', 'Class 11', 'Chemical Bonding', 'Equilibrium', 'Thermodynamics', 'CBSE'],
    language: 'Hindi & English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Chemistry & Chemical Engineering Group',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Chemical Bonding: Ionic Bond Lattice Enthalpy, Born-Haber Cycle & Fajan’s Rules for Covalent Character',
      'Covalent Bonding Models: Valence Bond Theory, Sigma vs Pi Bonds & Resonance Structures',
      'VSEPR Theory: Predicting Molecular Geometries ($CH_4, NH_3, H_2O, SF_6, PCl_5, ClF_3$)',
      'Hybridization: $sp, sp^2, sp^3, sp^3d, sp^3d^2$ concept, bond angles and shapes',
      'Molecular Orbital Theory (MOT): Bonding vs Antibonding MOs, Energy Diagrams of $N_2, O_2$ and Paramagnetism',
      'Chemical Thermodynamics: State Functions, Enthalpy ($\\Delta H$), Entropy ($\\Delta S$) and Gibbs Free Energy ($\\Delta G = \\Delta H - T\\Delta S$)',
      'Chemical Equilibrium: Law of Mass Action, $K_p$ vs $K_c$ ($K_p = K_c(RT)^{\\Delta n}$), Le Chatelier’s Principle Applications',
      'Ionic Equilibrium: Ostwald’s Dilution Law, Common Ion Effect, Buffer Solutions & Solubility Product ($K_{sp}$)'
    ],
    chaptersPreview: [
      {
        title: 'Molecular Orbital Theory (MOT) & Le Chatelier’s Principle',
        summary: 'Calculate bond order, explain the mysterious paramagnetism of oxygen, and predict shifts in industrial equilibrium reactions.',
        keyPoints: [
          'Bond Order = $\\frac{1}{2}(N_b - N_a)$ where $N_b$ is number of bonding electrons and $N_a$ is antibonding electrons.',
          'If Bond Order $> 0$, the molecule exists and is stable; higher bond order indicates higher bond dissociation energy and shorter bond length.',
          'Oxygen ($O_2$): Total 16 electrons. Has 2 unpaired electrons in $\\pi^* 2p_x$ and $\\pi^* 2p_y$ antibonding orbitals, proving why oxygen is paramagnetic.',
          'Le Chatelier’s Principle: If a dynamic equilibrium is subjected to change in temperature, pressure or concentration, the system shifts in a direction that tends to counteract that change.'
        ],
        content: `### 1. आण्विक कक्षक सिद्धांत (Molecular Orbital Theory - MOT)

हुंड एवं मुलिकन द्वारा प्रतिपादित MOT के अनुसार, जब दो परमाणु कक्षक आपस में अतिव्यापन करते हैं, तो वे अपनी पहचान खोकर दो नए आण्विक कक्षक बनाते हैं:
1. **आबंधन आण्विक कक्षक (Bonding MO):** कम ऊर्जा, अधिक स्थायित्व ($\\sigma, \\pi$)
2. **प्रति-आबंधन आण्विक कक्षक (Antibonding MO):** अधिक ऊर्जा, कम स्थायित्व ($\\sigma^*, \\pi^*$)

**आबंध कोटि (Bond Order):**
$$\\mathbf{\\text{Bond Order} = \\frac{N_b - N_a}{2}}$$

#### ऑक्सीजन अणु ($O_2$) का उदाहरण (16 इलेक्ट्रॉन):
इलेक्ट्रॉनिक विन्यास:
$$\\sigma 1s^2, \\sigma^* 1s^2, \\sigma 2s^2, \\sigma^* 2s^2, \\sigma 2p_z^2, (\\pi 2p_x^2 = \\pi 2p_y^2), (\\pi^* 2p_x^1 = \\pi^* 2p_y^1)$$
- $N_b = 10, N_a = 6$
- $\\text{Bond Order} = \\frac{10 - 6}{2} = \\mathbf{2}$ (ऑक्सीजन परमाणुओं के बीच द्वि-बंध है)
- चूँकि $\\pi^*$ कक्षकों में **2 अयुग्मित इलेक्ट्रॉन (Unpaired Electrons)** उपस्थित हैं, अतः $O_2$ **अनुचुंबकीय (Paramagnetic)** होता है!

---

### 2. ला-शातेलिए का नियम (Le Chatelier’s Principle)

**हैबर विधि द्वारा अमोनिया निर्माण में अनुकूलतम परिस्थितियां:**
$$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) \\quad \\Delta H = -92.4\\text{ kJ/mol (ऊष्माक्षेपी)}$$
1. **दाब का प्रभाव:** अग्र दिशा में गैस के मोल 4 से घटकर 2 हो रहे हैं। अतः **उच्च दाब (200 atm)** अमोनिया के उत्पादन को बढ़ाएगा।
2. **ताप का प्रभाव:** अभिक्रिया ऊष्माक्षेपी है। ला-शातेलिए के नियम से **अनुकूलतम निम्न ताप (लगभग 700 K)** पर अधिक अमोनिया बनेगी (अभिक्रिया की गति बनाए रखने के लिए Fe उत्प्रेरक और Mo वर्धक मिलाया जाता है)।`,
        realWorldUse: 'Industrial synthesis of fertilizers (ammonia by Haber process), nitric acid (Ostwald process), and blood buffer pH maintenance (7.35-7.45).',
        exercise: 'Using MOT, calculate the bond order and magnetic nature of peroxide ion ($O_2^{2-}$) and superoxide ion ($O_2^-$).'
      }
    ],
    studyNotes: [
      'Acidic buffer solution consists of a weak acid and its salt with a strong base (e.g., $CH_3COOH + CH_3COONa$); its pH is given by Henderson equation: $pH = pK_a + \\log([\\text{Salt}]/[\\text{Acid}])$.',
      'For spontaneous process at constant T and P, $\\Delta G < 0$ (Gibbs free energy change must be negative).'
    ]
  },
  {
    id: 'class10-social-science-board-core',
    title: 'Class 10 Social Science: History, Geography, Civics & Economics (सामाजिक विज्ञान)',
    subtitle: 'Nationalism in India, Resources & Agriculture, Power Sharing, Federalism, Money & Credit',
    author: 'Dr. Rameshwar Dayal & HK VELORA Social Studies Council',
    authorBio: 'Author of curriculum-aligned social science board texts, historian, and teacher educator with over 24 years of expertise.',
    publisher: 'HK VELORA School Education Series',
    description: 'The master revision companion for Class 10 Social Science: Nationalism in Europe and India, Satyagraha movements, Mineral and Agricultural resources of India, Power Sharing principles in Belgium and Sri Lanka, Federalism, and Money & Credit.',
    shortDescription: 'Gandhian Satyagraha, Belgium power sharing model, Federalism in India, and Formal vs informal credit sectors.',
    category: 'Class 9–12 / School',
    subcategory: 'Social Science (Class 10)',
    coverGradient: 'from-amber-900 via-orange-950 to-slate-950',
    pages: 340,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 420,
    price: 0,
    isFree: true,
    schoolClass: 'Class 10',
    badge: '10th Board Topper',
    tags: ['Social Science', 'Class 10', 'History', 'Geography', 'Civics', 'Economics', 'CBSE'],
    language: 'Hindi & English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA High School Humanities & Social Studies Wing',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'History: Rise of Nationalism in Europe (Marianne, Germania, Unification of Italy and Germany by Bismarck)',
      'History: Nationalism in India (First World War, Rowlatt Act, Jallianwala Bagh, Non-Cooperation & Civil Disobedience)',
      'History: The Making of a Global World & Age of Industrialization (Silk Routes, Great Depression of 1929)',
      'Geography: Resources and Development (Soil Classification in India - Alluvial, Black, Red, Laterite)',
      'Geography: Agriculture (Kharif, Rabi, Zaid Crops, Rice, Wheat, Tea, Coffee production conditions)',
      'Civics: Power Sharing (Comparison of Belgium accommodation model with Sri Lanka majoritarianism)',
      'Civics: Federalism (Union, State, Concurrent Lists, Decentralization & 73rd/74th Constitutional Amendments)',
      'Economics: Sectors of the Indian Economy (Primary, Secondary, Tertiary) & Money and Credit (Self Help Groups - SHGs)'
    ],
    chaptersPreview: [
      {
        title: 'Nationalism in India & Power Sharing in Belgium vs Sri Lanka',
        summary: 'Examine Mahatma Gandhi’s mass satyagraha movements and why Belgium’s constitutional power sharing avoided civil war.',
        keyPoints: [
          'Rowlatt Act (1919): Authorized British police to arrest and detain political prisoners for up to 2 years without trial.',
          'Jallianwala Bagh Massacre (April 13, 1919): General Dyer ordered firing on peaceful gathering at Amritsar; led to Rabindranath Tagore renouncing his Knighthood.',
          'Civil Disobedience Movement: Commenced with Gandhi’s Salt March from Sabarmati Ashram to Dandi (March 12 - April 6, 1930, 240 miles).',
          'Power Sharing: Belgium accommodated Dutch and French communities equally in Central government; Sri Lanka’s majoritarianism (1956 Sinhala Only Act) alienated Tamils and caused decades of civil war.'
        ],
        content: `### 1. भारत में राष्ट्रवाद: असहयोग एवं सविनय अवज्ञा आंदोलन

महात्मा गांधी ने जनवरी 1915 में दक्षिण अफ्रीका से लौटने के बाद भारत में **सत्याग्रह** के नए जन-आंदोलन का नेतृत्व किया।

#### प्रारंभिक सत्याग्रह प्रयोग:
1. **चंपारण (बिहार, 1917):** तिनकठिया नील की अनिवार्य खेती के विरुद्ध किसानों का आंदोलन।
2. **खेड़ा (गुजरात, 1917):** फसल खराब होने पर लगान माफी के लिए किसान सत्याग्रह।
3. **अहमदाबाद (गुजरात, 1918):** सूती कपड़ा मिल मजदूरों के लिए 35% प्लेग बोनस सत्याग्रह।

#### असहयोग आंदोलन (1920-1922):
- **कारण:** रॉलेट एक्ट, जलियांवाला बाग हत्याकांड, और खिलाफत का प्रश्न।
- **स्वरूप:** विदेशी वस्त्रों का बहिष्कार, शराब की दुकानों पर पिकेटिंग, सरकारी पदों और वकालत का त्याग।
- **स्थगन:** 4 फरवरी 1922 को गोरखपुर के **चौरी-चौरा** में उग्र भीड़ द्वारा थाने को जलाने और 22 पुलिसकर्मियों की हत्या के बाद गांधीजी ने आंदोलन वापस ले लिया।

---

### 2. सत्ता की साझेदारी: बेल्जियम बनाम श्रीलंका

| पहलू | बेल्जियम का मॉडल | श्रीलंका का मॉडल |
|---|---|---|
| **जनसांख्यिकी** | 59% डच-भाषी, 40% फ्रेंच-भाषी | 74% सिंहली, 18% तमिल |
| **नीति** | **संवैधानिक समायोजन:** केंद्र सरकार में डच और फ्रेंच मंत्रियों की समान संख्या, सामुदायिक सरकार का गठन। | **बहुसंख्यकवाद:** 1956 के कानून द्वारा सिंहली को एकमात्र राजभाषा बनाया, तमिलों की उपेक्षा। |
| **परिणाम** | गृहयुद्ध टल गया; बेल्जियम यूरोपीय संघ (EU) का मुख्यालय बना। | तमिलों में अलगाववाद की भावना बढ़ी; दशकों लंबा भीषण गृहयुद्ध छिड़ा। |`,
        realWorldUse: 'Essential civic knowledge for understanding constitutional democracy, democratic negotiation, and economic sector transitions.',
        exercise: 'Explain three major differences between the Non-Cooperation Movement (1920) and the Civil Disobedience Movement (1930).'
      }
    ],
    studyNotes: [
      'Concurrent List contains subjects of common interest to both Centre and States (Education, Forests, Trade Unions, Marriage); in case of conflict, Central law prevails.',
      'Black soil (Regur soil) is ideal for cotton cultivation; rich in calcium carbonate, magnesium, potash and lime, found predominantly in Deccan Trap region.'
    ]
  },
  {
    id: 'class10-hindi-grammar-writing',
    title: 'Class 10 Hindi: Vyakaran & Rachnatmak Lekhan (हिंदी व्याकरण एवं रचनात्मक लेखन)',
    subtitle: 'रचना के आधार पर वाक्य भेद, वाच्य, पद-परिचय, रस, अलंकार, औपचारिक पत्र एवं अनुच्छेद लेखन',
    author: 'डॉ. विद्याधर त्रिपाठी & HK VELORA हिंदी साहित्य प्रकोष्ठ',
    authorBio: 'वरिष्ठ हिंदी भाषाविद्, पूर्व सीबीएसई पाठ्यचर्या विशेषज्ञ एवं माध्यमिक बोर्ड परीक्षा मुख्य परीक्षक।',
    publisher: 'HK VELORA School Education Series',
    description: 'कक्षा 10वीं हिंदी (कोर्स-अ एवं कोर्स-ब) के लिए संपूर्ण व्याकरण एवं व्यावहारिक लेखन निर्देशिका: रचना के आधार पर वाक्य रूपांतरण, वाच्य परिवर्तन (कर्तृवाच्य, कर्मवाच्य, भाववाच्य), पद-परिचय, रस के 9 भेद एवं स्थायी भाव, अलंकार, विज्ञापन, ईमेल एवं औपचारिक पत्र लेखन।',
    shortDescription: 'सरल, संयुक्त एवं मिश्र वाक्य रूपांतरण, वाच्य परिवर्तन, पद-परिचय, रस निष्पत्ति और बोर्ड लेखन प्रारूप।',
    category: 'Class 9–12 / School',
    subcategory: 'Hindi (Class 10)',
    coverGradient: 'from-purple-950 via-slate-900 to-slate-950',
    pages: 310,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 440,
    price: 0,
    isFree: true,
    schoolClass: 'Class 10',
    badge: '10th Hindi Topper',
    tags: ['Hindi', 'Class 10', 'Hindi Grammar', 'व्याकरण', 'रस', 'अलंकार', 'वाक्य भेद', 'CBSE'],
    language: 'हिंदी (Hindi)',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA School Hindi Curriculum Cell',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'रचना के आधार पर वाक्य भेद: सरल वाक्य, संयुक्त वाक्य, मिश्र वाक्य एवं आश्रित उपवाक्य (संज्ञा, विशेषण, क्रियाविशेषण)',
      'वाक्य रूपांतरण: सरल से संयुक्त, संयुक्त से मिश्र और मिश्र से सरल वाक्य बनाने के व्यावहारिक नियम व उदाहरण',
      'वाच्य (Voice): कर्तृवाच्य, कर्मवाच्य एवं भाववाच्य की पहचान तथा एक वाच्य से दूसरे वाच्य में परिवर्तन',
      'पद-परिचय: संज्ञा, सर्वनाम, विशेषण, क्रिया, क्रियाविशेषण, अव्यय के भेदों, लिंग, वचन, कारक व काल का विश्लेषण',
      'रस सिद्धांत: रस के चार अंग (स्थायी भाव, विभाव, अनुभाव, संचारी भाव) एवं 9 प्रमुख रसों के सोदाहरण लक्षण',
      'अलंकार: शब्दालंकार (अनुप्रास, यमक, श्लेष) एवं अर्थालंकार (उपमा, रूपक, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण)',
      'रचनात्मक लेखन: औपचारिक एवं अनौपचारिक पत्र लेखन का अद्यतन सीबीएसई प्रारूप व प्रतिदर्श',
      'व्यावहारिक लेखन: अनुच्छेद लेखन, स्ववृत्त लेखन (Resume), ईमेल लेखन, विज्ञापन रचना एवं संदेश लेखन'
    ],
    chaptersPreview: [
      {
        title: 'रचना के आधार पर वाक्य भेद व वाच्य परिवर्तन (Mastering Vyakaran)',
        summary: 'वाक्य रूपांतरण और वाच्य परिवर्तन के वे सटीक नियम जो बोर्ड परीक्षा में पूरे अंक दिलाते हैं।',
        keyPoints: [
          'सरल वाक्य: जिसमें एक ही उद्देश्य (कर्ता) और एक ही विधेय (मुख्य क्रिया) होती है।',
          'संयुक्त वाक्य: दो या दो से अधिक स्वतंत्र उपवाक्य जो समानाधिकरण योजक (और, तथा, किंतु, परंतु, या, इसलिए) से जुड़े हों।',
          'मिश्र वाक्य: जिसमें एक प्रधान उपवाक्य हो और अन्य उपवाक्य उस पर आश्रित हों (जो-वह, जैसा-वैसा, यदि-तो, क्योंकि-इसलिए)।',
          'भाववाच्य: जिसमें कर्ता या कर्म की नहीं, बल्कि क्रिया के भाव की प्रधानता होती है (क्रिया सदैव अकर्मक, पुल्लिंग, एकवचन में होती है)।'
        ],
        content: `### 1. रचना के आधार पर वाक्य भेद (Sentence Structure)

#### (1) सरल वाक्य (Simple Sentence):
जिस वाक्य में केवल एक मुख्य समापिका क्रिया हो।
- *उदाहरण:* सूर्योदय होने पर कुहासा छंट गया।
- *उदाहरण:* परिश्रमी बालक अवश्य सफल होते हैं।

#### (2) संयुक्त वाक्य (Compound Sentence):
जब दो स्वतंत्र वाक्य समुच्चयबोधक अव्यय (और, तथा, एवं, परंतु, किंतु, लेकिन, अथवा) से जुड़े हों।
- *उदाहरण:* सूर्योदय हुआ **और** कुहासा छंट गया।
- *उदाहरण:* उसने बहुत परिश्रम किया **किंतु** परीक्षा में प्रथम न आ सका।

#### (3) मिश्र वाक्य (Complex Sentence):
जिसमें एक मुख्य उपवाक्य हो तथा शेष आश्रित उपवाक्य हों (कि, जो, जिसे, जब-तब, जैसा-वैसा, जहाँ-वहाँ से जुड़े)।
- *उदाहरण:* **जैसे ही** सूर्योदय हुआ, **वैसे ही** कुहासा छंट गया।
- *उदाहरण:* जो बालक परिश्रम करते हैं, वे अवश्य सफल होते हैं।

---

### 2. वाच्य परिवर्तन (Voice Transformation)

#### कर्तृवाच्य से कर्मवाच्य में परिवर्तन:
- कर्ता के साथ 'के द्वारा' या 'से' जोड़ें।
- क्रिया को कर्म के लिंग और वचन के अनुसार बदलें।
- *कर्तृवाच्य:* राम ने रावण को मारा।
- *कर्मवाच्य:* राम **के द्वारा** रावण मारा गया।

#### कर्तृवाच्य से भाववाच्य में परिवर्तन:
- केवल अकर्मक क्रिया वाले वाक्यों का ही भाववाच्य बनता है।
- *कर्तृवाच्य:* मुझसे अब नहीं चला जाता। (भाववाच्य)
- *कर्तृवाच्य:* पक्षी रात में सोते हैं। $\\implies$ *भाववाच्य:* पक्षियों से रात में सोया जाता है।`,
        realWorldUse: 'Essential for clear communication, professional letter drafting, administrative report writing, and board exam excellence.',
        exercise: 'निम्नलिखित वाक्यों को निर्देशानुसार बदलिए: (क) "घंटी बजते ही बच्चे कक्षा से बाहर आ गए।" (संयुक्त वाक्य में) (ख) "बच्चा रो रहा है।" (भाववाच्य में)'
      }
    ],
    studyNotes: [
      'रसराज किसे कहा जाता है? शृंगार रस को (इसका स्थायी भाव रति/प्रेम है)।',
      'उत्प्रेक्षा अलंकार की पहचान के प्रमुख वाचक शब्द: जनु, मनु, जानो, मानो, जनहु, मनहु।'
    ]
  },
  {
    id: 'class10-maths-trigo-geometry',
    title: 'Class 10 Mathematics: Trigonometry, Coordinate Geometry & Statistics (त्रिकोणमिति एवं ज्यामिति)',
    subtitle: 'Trigonometric Identities, Heights & Distances, Circles, Surface Areas & Mean-Median-Mode',
    author: 'Er. R.C. Bharadwaj & HK VELORA Mathematics Faculty',
    authorBio: 'Gold medalist in applied mathematics, former CBSE question paper moderator, and author of bestselling secondary mathematics problem books.',
    publisher: 'HK VELORA School Education Series',
    description: 'Master the high-scoring geometry, trigonometry and data modules of Class 10 Board Mathematics: Fundamental identities, Applications of trigonometry (angle of elevation & depression), Circle tangents theorems, and Grouped data statistics.',
    shortDescription: 'Trigonometric identities, Heights and distances, Circle tangent theorems, and Ogives / Mode formula.',
    category: 'Class 9–12 / School',
    subcategory: 'Mathematics (Class 10)',
    coverGradient: 'from-blue-950 via-slate-900 to-indigo-950',
    pages: 350,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 460,
    price: 0,
    isFree: true,
    schoolClass: 'Class 10',
    badge: '10th Maths Gold',
    tags: ['Mathematics', 'Class 10', 'Trigonometry', 'Geometry', 'Statistics', 'CBSE', 'Board Exams'],
    language: 'Hindi & English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA High School Mathematics Research Group',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Introduction to Trigonometry: Trigonometric Ratios ($\sin, \cos, \tan, \cot, \sec, \csc$) in a Right Triangle',
      'Trigonometric Values & Identities: Standard angles ($0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$), $\sin^2\theta + \cos^2\theta = 1$',
      'Some Applications of Trigonometry: Line of sight, Angle of elevation vs Angle of depression & Two-triangle problems',
      'Coordinate Geometry: Distance formula, Section formula (Internal division $m_1:m_2$) & Mid-point coordinates',
      'Circles & Tangents: Theorem 10.1 (Tangent $\\perp$ radius at point of contact) & Theorem 10.2 (Lengths of tangents from external point are equal)',
      'Areas Related to Circles: Area of Sector ($\\frac{\\theta}{360} \\pi r^2$) and Length of Arc ($\\frac{\\theta}{360} 2\\pi r$)',
      'Surface Areas and Volumes: Combinations of solids (Cylinder, Cone, Hemisphere, Sphere) & Melting and recasting',
      'Statistics: Mean (Assumed Mean & Step-Deviation Method), Median formula ($L + [\\frac{N/2 - CF}{f}]h$) & Mode formula'
    ],
    chaptersPreview: [
      {
        title: 'Trigonometric Identities & Heights and Distances Applications',
        summary: 'Rigorous algebraic proofs of core trigonometric identities and trigonometric modeling of real-world towers and mountains.',
        keyPoints: [
          'Identity 1: $\\sin^2\\theta + \\cos^2\\theta = 1 \\iff 1 - \\sin^2\\theta = \\cos^2\\theta$',
          'Identity 2: $1 + \\tan^2\\theta = \\sec^2\\theta \\iff \\sec^2\\theta - \\tan^2\\theta = 1$',
          'Identity 3: $1 + \\cot^2\\theta = \\csc^2\\theta \\iff \\csc^2\\theta - \\cot^2\\theta = 1$',
          'Angle of Elevation: The angle formed by the line of sight with the horizontal when an observer looks upward at an object.'
        ],
        content: `### 1. त्रिकोणमितीय सर्वसमिकाओं का निगमन (Trigonometric Identities)

समकोण त्रिभुज $\\Delta ABC$ में जिसका कोण $B$ समकोण है, पाइथागोरस प्रमेय से:
$$AB^2 + BC^2 = AC^2$$

#### (A) दोनों पक्षों को $AC^2$ (कर्ण का वर्ग) से भाग देने पर:
$$\\frac{AB^2}{AC^2} + \\frac{BC^2}{AC^2} = \\frac{AC^2}{AC^2} \\implies \\left(\\frac{AB}{AC}\\right)^2 + \\left(\\frac{BC}{AC}\\right)^2 = 1$$
$$\\mathbf{\\sin^2 A + \\cos^2 A = 1}$$

#### (B) दोनों पक्षों को $AB^2$ से भाग देने पर:
$$1 + \\left(\\frac{BC}{AB}\\right)^2 = \\left(\\frac{AC}{AB}\\right)^2 \\implies \\mathbf{1 + \\cot^2 A = \\csc^2 A}$$

---

### 2. ऊंचाई एवं दूरी (Heights & Distances Master Problem)

**प्रश्न:** एक 7 मीटर ऊंचे भवन के शिखर से एक केबल टॉवर के शिखर का उन्नयन कोण $60^\\circ$ है और इसके पाद (foot) का अवनमन कोण $45^\\circ$ है। टॉवर की कुल ऊंचाई ज्ञात कीजिए।

**हल:**
माना भवन $AB = 7\\text{ m}$ तथा केबल टॉवर $CD$ है।
- भवन के पाद से टॉवर के पाद की दूरी $BD = x$ है।
- बिंदु $A$ से क्षैतिज रेखा $AE$ खींचते हैं, जहाँ $AE = BD = x$ और $ED = AB = 7\\text{ m}$।
- टॉवर का ऊपरी भाग $CE = h$ है, अतः टॉवर की कुल ऊंचाई $CD = h + 7$ होगी।

1. **समकोण त्रिभुज $\\Delta ABD$ में:**
   $$\\tan 45^\\circ = \\frac{AB}{BD} \\implies 1 = \\frac{7}{x} \\implies \\mathbf{x = 7\\text{ m}}$$
2. **समकोण त्रिभुज $\\Delta AEC$ में:**
   $$\\tan 60^\\circ = \\frac{CE}{AE} \\implies \\sqrt{3} = \\frac{h}{x} \\implies h = x\\sqrt{3} = 7\\sqrt{3}\\text{ m}$$

**टॉवर की कुल ऊंचाई:**
$$CD = CE + ED = 7\\sqrt{3} + 7 = \\mathbf{7(\\sqrt{3} + 1)\\text{ m}} \\approx 7(1.732 + 1) = \\mathbf{19.124\\text{ मीटर}}$$`,
        realWorldUse: 'Applied extensively in civil engineering, surveying, satellite dish elevation alignment, and architectural layout designing.',
        exercise: 'Prove that: $\\frac{\\sin\\theta - 2\\sin^3\\theta}{2\\cos^3\\theta - \\cos\\theta} = \\tan\\theta$.'
      }
    ],
    studyNotes: [
      'Empirical relationship between three measures of central tendency: $\\text{Mode} = 3\\text{ Median} - 2\\text{ Mean}$.',
      'The tangents drawn from an external point to a circle subtend equal angles at the centre and are equally inclined to the line segment joining the centre to that point.'
    ]
  },
  {
    id: 'class9-science-matter-motion',
    title: 'Class 9 Science: Gravitation, Force & Structure of Atom (गुरुत्वाकर्षण एवं परमाणु संरचना)',
    subtitle: 'Newton’s Laws, Universal Gravitation, Work-Energy-Power, Thomson/Rutherford/Bohr Atomic Models & Tissues',
    author: 'Prof. S.K. Ganguly & HK VELORA Foundation Science Team',
    authorBio: 'Physics and science education researcher focused on conceptual clarity in early high school science.',
    publisher: 'HK VELORA School Education Series',
    description: 'The definitive foundation handbook for Class 9 Science: Newton’s 3 Laws of Motion, Universal Gravitation ($g$ vs $G$), Kinetic and Potential Energy, Rutherford alpha scattering, Bohr atomic orbits, and Plant vs Animal Tissues.',
    shortDescription: 'Laws of motion, g vs G, Work and kinetic energy, Bohr atomic model, and Plant tissues (Meristematic vs Permanent).',
    category: 'Class 9–12 / School',
    subcategory: 'Science (Class 9)',
    coverGradient: 'from-blue-950 via-slate-900 to-teal-950',
    pages: 330,
    format: 'EPUB / PDF',
    difficulty: 'Beginner',
    rating: 4.8,
    reviewCount: 330,
    price: 0,
    isFree: true,
    schoolClass: 'Class 9',
    badge: '9th Science Core',
    tags: ['Science', 'Class 9', 'Gravitation', 'Laws of Motion', 'Structure of Atom', 'CBSE'],
    language: 'Hindi & English bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA High School Science Foundation Cell',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Matter in Our Surroundings: States of Matter (Solid, Liquid, Gas, Plasma, BEC), Evaporation and Latent Heat',
      'Is Matter Around Us Pure?: Mixtures, Solutions, Colloids, Suspensions & Tyndall Effect',
      'Atoms and Molecules: Laws of Chemical Combination (Mass Conservation, Constant Proportions), Mole Concept',
      'Structure of the Atom: Cathode Rays (Electrons), Thomson Plum Pudding, Rutherford Gold Foil & Bohr Model',
      'The Fundamental Unit of Life (Cell): Cell Organelles (Mitochondria, Endoplasmic Reticulum, Golgi, Nucleus)',
      'Tissues: Plant Tissues (Meristematic, Parenchyma, Collenchyma, Sclerenchyma, Xylem, Phloem) & Animal Tissues',
      'Motion & Laws of Motion: Uniform vs Non-Uniform, Velocity-Time graphs & Newton’s 3 Laws of Motion ($F = ma$)',
      'Gravitation & Work-Energy: Universal Law of Gravitation, Difference between $g$ and $G$, Archimedes Principle & Work ($W = Fs$)'
    ],
    chaptersPreview: [
      {
        title: 'Universal Law of Gravitation ($g$ vs $G$) & Bohr’s Atomic Model',
        summary: 'Understand why all objects fall with the same acceleration in vacuum and how electrons occupy stable discrete orbits.',
        keyPoints: [
          'Universal Law of Gravitation: $F = G \\frac{m_1 m_2}{r^2}$ where $G = 6.674 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$ is universal constant.',
          'Acceleration due to gravity: $g = \\frac{GM}{R^2} \\approx 9.8\\text{ m/s}^2$ on Earth’s surface; $g$ varies with place, but $G$ remains constant everywhere.',
          'Weight of an object on Moon: $W_{moon} = \\frac{1}{6} W_{earth}$ because mass of Moon is smaller ($g_{moon} \\approx 1.63\\text{ m/s}^2$).',
          'Bohr’s Model: Electrons revolve only in discrete non-radiating orbits (energy levels $K, L, M, N...$); maximum electrons in shell $n$ is $2n^2$.'
        ],
        content: `### 1. गुरुत्वीय त्वरण ($g$) एवं सार्वत्रिक गुरुत्वाकर्षण नियतांक ($G$) में अंतर

| लक्षण | गुरुत्वीय त्वरण ($g$) | सार्वत्रिक नियतांक ($G$) |
|---|---|---|
| **परिभाषा** | गुरुत्वाकर्षण बल के कारण किसी गिरते पिंड में उत्पन्न त्वरण। | एकांक दूरी पर स्थित एकांक द्रव्यमान के दो पिंडों के बीच आकर्षण बल। |
| **मान** | पृथ्वी की सतह पर $9.8\\text{ m/s}^2$ (ध्रुवों पर अधिकतम, भूमध्य रेखा पर न्यूनतम)। | संपूर्ण ब्रह्मांड में सर्वत्र स्थिर: $6.674 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$ |
| **राशि का प्रकार** | सदिश राशि (Vector) | अदिश राशि (Scalar) |
| **शून्य होना** | पृथ्वी के केंद्र पर $g = 0$ हो जाता है। | $G$ का मान कभी शून्य नहीं हो सकता। |

---

### 2. बोर का परमाणु मॉडल (Bohr’s Model of Atom)

रदरफोर्ड के परमाणु मॉडल की अस्थिरता (क्लासिकी विद्युतचुंबकीय सिद्धांत के अनुसार त्वरित इलेक्ट्रॉन द्वारा ऊर्जा उत्सर्जन) को दूर करने के लिए नील्स बोर ने 1913 में तीन अभिगृहीत दिए:

1. परमाणु के केंद्र में एक धनावेशित नाभिक होता है।
2. इलेक्ट्रॉन नाभिक के चारों ओर केवल कुछ निश्चित **विविक्त कक्षाओं (Discrete Non-Radiating Orbits)** में ही घूमते हैं।
3. इन कक्षाओं में चक्कर लगाते समय इलेक्ट्रॉन ऊर्जा का विकिरण नहीं करते।
4. **बोर-बरी योजना ($2n^2$ नियम):** किसी कक्षा में अधिकतम इलेक्ट्रॉनों की संख्या $2n^2$ होती है:
   - $K$-कोश ($n=1$): $2(1)^2 = 2$ इलेक्ट्रॉन
   - $L$-कोश ($n=2$): $2(2)^2 = 8$ इलेक्ट्रॉन
   - $M$-कोश ($n=3$): $2(3)^2 = 18$ इलेक्ट्रॉन`,
        realWorldUse: 'Explains satellite orbits, tides, atomic stability, chemical reactivity of elements, and periodic table design.',
        exercise: 'An object has a mass of 30 kg on Earth. Calculate: (a) Its mass on the Moon, (b) Its weight on Earth, (c) Its weight on the Moon (take g = 10 m/s²).'
      }
    ],
    studyNotes: [
      'Mass of a body is the measure of its inertia and remains constant everywhere in the universe; weight is the gravitational force acting on it ($W = mg$) and changes with $g$.',
      'Mitochondria are called the powerhouse of the cell because they produce energy in the form of ATP (Adenosine Triphosphate).'
    ]
  },
  {
    id: 'class11-accountancy-ledger-trial-balance',
    title: 'Class 11 Accountancy: Journal, Ledger & Financial Statements (वित्तीय लेखांकन)',
    subtitle: 'Double Entry System, Rules of Debit/Credit, Bank Reconciliation (BRS), Depreciation & Balance Sheet',
    author: 'CA Rajeshwar Singhal & HK VELORA Commerce Cell',
    authorBio: 'Chartered Accountant, statutory auditor, and senior faculty member for high school and CA Foundation preparation.',
    publisher: 'HK VELORA School Education Series',
    description: 'The definitive foundation of financial accounting for Class 11 Commerce: Traditional vs Modern classification of accounts, Journalizing, Ledger posting, Trial Balance preparation, Bank Reconciliation Statement (BRS), and Trading, Profit & Loss A/c with adjustments.',
    shortDescription: 'Golden rules of accounting, Journal to Ledger, Bank Reconciliation, Straight line vs WDV depreciation, and Final accounts.',
    category: 'Class 9–12 / School',
    subcategory: 'Accountancy (Class 11)',
    coverGradient: 'from-amber-950 via-stone-900 to-slate-950',
    pages: 360,
    format: 'EPUB / PDF',
    difficulty: 'Intermediate',
    rating: 4.8,
    reviewCount: 340,
    price: 0,
    isFree: true,
    schoolClass: 'Class 11',
    badge: '11th Commerce Core',
    tags: ['Accountancy', 'Class 11', 'Commerce', 'Journal', 'Ledger', 'Financial Statements', 'CBSE'],
    language: 'English & Hindi bilingual',
    copyrightStatus: 'HK VELORA Exclusive',
    licenseType: 'HK VELORA Open Academic License',
    source: 'HK VELORA Commerce & Corporate Finance Desk',
    permissionStatus: 'Original Publication',
    downloadUrl: 'https://hkvelora.dev/?tab=ebooks',
    readOnlineUrl: 'https://hkvelora.dev/?tab=ebooks',
    tableOfContents: [
      'Introduction to Accounting: Meaning, Objectives, Bookkeeping vs Accounting & Qualitative Characteristics',
      'Basic Accounting Terms: Assets, Liabilities, Capital, Drawings, Revenue, Expense, Debtor, Creditor & Goods',
      'Accounting Principles & Concepts: Entity, Money Measurement, Going Concern, Accrual & Conservatism',
      'Recording of Transactions: Modern Equation ($Assets = Capital + Liabilities$) and Golden Rules of Debit/Credit',
      'Journal to Ledger: Journalizing transactions, Subdivision of Journal (Cash Book, Purchases, Sales Book) & Ledger Posting',
      'Bank Reconciliation Statement (BRS): Causes of differences between Cash Book and Pass Book, Favourable & Overdraft BRS',
      'Depreciation & Provisions: Straight Line Method (SLM) vs Written Down Value (WDV), Provision for Doubtful Debts',
      'Financial Statements of Sole Proprietorship: Trading A/c (Gross Profit), Profit & Loss A/c (Net Profit) & Balance Sheet'
    ],
    chaptersPreview: [
      {
        title: 'Golden Rules of Debit & Credit and Bank Reconciliation Statement (BRS)',
        summary: 'Demystify the foundational grammar of accounting and master reconciliation between cash book and bank statement.',
        keyPoints: [
          'Personal Accounts: Debit the Receiver, Credit the Giver.',
          'Real Accounts: Debit what comes in, Credit what goes out.',
          'Nominal Accounts: Debit all expenses and losses, Credit all incomes and gains.',
          'Modern Classification: Assets & Expenses increase with Debit (+Dr), decrease with Credit (-Cr). Liabilities, Capital & Revenues increase with Credit (+Cr), decrease with Debit (-Dr).'
        ],
        content: `### 1. लेखांकन के स्वर्णिम नियम (Golden Rules of Accounting)

दोहरी लेखा प्रणाली (Double Entry System) में प्रत्येक वित्तीय व्यवहार के दो पहलू होते हैं—एक नाम (Debit) और दूसरा जमा (Credit)।

| खाता प्रकार (Account Type) | उदाहरण | डेबिट नियम (Debit) | क्रेडिट नियम (Credit) |
|---|---|---|---|
| **व्यक्तिगत खाता (Personal)** | राम का खाता, बैंक, HK VELORA A/c | पाने वाले को नाम करो (Debit the receiver) | देने वाले को जमा करो (Credit the giver) |
| **वास्तविक खाता (Real)** | रोकड़ (Cash), भवन, मशीनरी | जो वस्तु व्यापार में आए उसे नाम (Debit what comes in) | जो वस्तु व्यापार से जाए उसे जमा (Credit what goes out) |
| **अवास्तविक खाता (Nominal)** | वेतन, किराया, ब्याज, हानि | सभी खर्चों व हानियों को नाम (Debit expenses/losses) | सभी आय व लाभों को जमा (Credit incomes/gains) |

---

### 2. बैंक समाधान विवरण (Bank Reconciliation Statement - BRS)

रोकड़ बही (Cash Book - Bank Column) और बैंक पासबुक (Pass Book) के शेष में अंतर के प्रमुख कारण:
1. **चेक जारी किए गए किंतु बैंक में भुगतान के लिए प्रस्तुत नहीं हुए:** Cash Book शेष कम हो गया $\\implies$ Reconciliation में **जोड़ें (+)**।
2. **चेक बैंक में जमा किए गए किंतु समाशोधित (Clear) नहीं हुए:** Cash Book शेष बढ़ गया $\\implies$ Reconciliation में **घटाएं (-)**।
3. **बैंक द्वारा सीधे जमा किया गया ब्याज या लाभांश:** Pass Book बढ़ गई $\\implies$ Cash Book से शुरू करने पर **जोड़ें (+)**।
4. **बैंक द्वारा सीधे काटे गए बैंक प्रभार (Bank Charges):** Pass Book घट गई $\\implies$ **घटाएं (-)**।`,
        realWorldUse: 'Universal business foundation for enterprise bookkeeping, corporate audit compliance, and personal financial tracking.',
        exercise: 'On 31st March, the Cash Book of a trader showed a debit balance of ₹15,000. Cheques paid into bank but not yet collected amounted to ₹3,000. Cheques issued but not yet presented for payment amounted to ₹4,500. Prepare BRS.'
      }
    ],
    studyNotes: [
      'Conservatism (Prudence) Concept: Anticipate no profits, but provide for all possible losses. This is why closing stock is valued at cost price or net realizable value, whichever is lower.',
      'Accrual Concept: Revenues and costs are recognized as they are earned or incurred, not as money is received or paid.'
    ]
  }
];
