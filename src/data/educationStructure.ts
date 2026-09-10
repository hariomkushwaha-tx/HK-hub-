export interface SchoolSubjectConfig {
  id: string;
  name: string;
  hindiName?: string;
  iconName?: string;
  popularTopics: string[];
}

export interface StreamConfig {
  id: 'Science' | 'Commerce' | 'Humanities / Arts';
  name: string;
  hindiName?: string;
  description: string;
  badgeColor: string;
  subjects: SchoolSubjectConfig[];
}

export interface SchoolClassConfig {
  id: 'Class 9' | 'Class 10' | 'Class 11' | 'Class 12';
  title: string;
  hindiTitle: string;
  badge: string;
  description: string;
  hasStreams: boolean;
  subjects?: SchoolSubjectConfig[];
  streams?: StreamConfig[];
}

export const SCHOOL_CLASSES_CONFIG: SchoolClassConfig[] = [
  {
    id: 'Class 9',
    title: 'Class 9th Foundation',
    hindiTitle: 'कक्षा ९वीं आधारशिला',
    badge: 'Class 9',
    description: 'Core secondary foundation with interactive chapter summaries, NCERT syllabus alignment, formula sheets & concept guides.',
    hasStreams: false,
    subjects: [
      { id: 'Mathematics', name: 'Mathematics', hindiName: 'गणित', popularTopics: ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations', 'Lines & Angles', 'Triangles', 'Quadrilaterals', 'Circles', 'Heron’s Formula', 'Surface Areas & Volumes', 'Statistics'] },
      { id: 'Science', name: 'Science', hindiName: 'विज्ञान', popularTopics: ['Matter in Our Surroundings', 'Atoms & Molecules', 'Structure of the Atom', 'Fundamental Unit of Life (Cell)', 'Tissues', 'Motion', 'Force & Laws of Motion', 'Gravitation', 'Work & Energy', 'Sound'] },
      { id: 'English', name: 'English Language & Literature', hindiName: 'अंग्रेजी', popularTopics: ['Beehive Prose & Poetry', 'Moments Supplementary Reader', 'Grammar & Writing Skills', 'Reading Comprehension'] },
      { id: 'Hindi', name: 'Hindi (हिंदी)', hindiName: 'हिंदी साहित्य एवं व्याकरण', popularTopics: ['क्षितिज', 'कृतिका', 'व्याकरण एवं रचनात्मक लेखन', 'अपठित बोध'] },
      { id: 'Social Science', name: 'Social Science', hindiName: 'सामाजिक विज्ञान', popularTopics: ['India and Contemporary World (History)', 'Contemporary India (Geography)', 'Democratic Politics (Civics)', 'Economics'] },
      { id: 'Computer / IT', name: 'Computer Applications & IT', hindiName: 'कंप्यूटर एवं सूचना प्रौद्योगिकी', popularTopics: ['Basics of Information Technology', 'Cyber Safety', 'Office Tools', 'Scratch & Python Intro'] },
      { id: 'General Knowledge', name: 'General Knowledge & Aptitude', hindiName: 'सामान्य ज्ञान', popularTopics: ['Current Affairs', 'Basic Reasoning', 'Scientific Discoveries', 'Geography & Heritage'] }
    ]
  },
  {
    id: 'Class 10',
    title: 'Class 10th Board Hub',
    hindiTitle: 'कक्षा १०वीं बोर्ड परीक्षा मंच',
    badge: 'Class 10',
    description: 'High-yield board exam preparation, exemplar problem sets, mind maps, formula handbooks & revision summaries.',
    hasStreams: false,
    subjects: [
      { id: 'Mathematics', name: 'Mathematics (Standard & Basic)', hindiName: 'गणित', popularTopics: ['Real Numbers', 'Polynomials', 'Pair of Linear Equations', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Trigonometry', 'Circles', 'Surface Areas & Volumes', 'Statistics & Probability'] },
      { id: 'Science', name: 'Science (Physics, Chem, Bio)', hindiName: 'विज्ञान', popularTopics: ['Chemical Reactions & Equations', 'Acids, Bases & Salts', 'Metals & Non-metals', 'Carbon & its Compounds', 'Life Processes', 'Control & Coordination', 'How do Organisms Reproduce?', 'Heredity', 'Light - Reflection & Refraction', 'Human Eye', 'Electricity', 'Magnetic Effects of Electric Current', 'Our Environment'] },
      { id: 'English', name: 'English Language & Literature', hindiName: 'अंग्रेजी', popularTopics: ['First Flight', 'Footprints without Feet', 'Formal Letters & Analytical Paragraphs', 'Grammar Editing & Omission'] },
      { id: 'Hindi', name: 'Hindi (हिंदी)', hindiName: 'हिंदी', popularTopics: ['क्षितिज भाग 2', 'कृतिका भाग 2', 'रस, अलंकार एवं समास', 'निबंध एवं पत्र लेखन'] },
      { id: 'Social Science', name: 'Social Science', hindiName: 'सामाजिक विज्ञान', popularTopics: ['Rise of Nationalism in Europe', 'Nationalism in India', 'Resources & Development', 'Power Sharing', 'Federalism', 'Money & Credit', 'Globalization'] },
      { id: 'Computer / IT', name: 'Information Technology (Skill 402)', hindiName: 'आईटी एवं कंप्यूटर', popularTopics: ['Digital Documentation', 'Electronic Spreadsheet', 'Database Management (DBMS)', 'Web Applications & Security'] },
      { id: 'General Knowledge', name: 'Aptitude & NTSE Foundation', hindiName: 'सामान्य ज्ञान एवं एप्टीट्यूड', popularTopics: ['Mental Ability Test (MAT)', 'Scholastic Aptitude Test (SAT)', 'Scientific Reasoning'] }
    ]
  },
  {
    id: 'Class 11',
    title: 'Class 11th Senior Stream Hub',
    hindiTitle: 'कक्षा ११वीं संकाय अध्ययन',
    badge: 'Class 11',
    description: 'In-depth senior secondary syllabus split across Science, Commerce & Humanities streams with competitive foundations.',
    hasStreams: true,
    streams: [
      {
        id: 'Science',
        name: 'Science (PCM / PCB / PCMB)',
        hindiName: 'विज्ञान संकाय',
        description: 'Physics, Chemistry, Pure Mathematics, Biology & Computer Science with deep concept clarity.',
        badgeColor: 'from-blue-600 to-cyan-600',
        subjects: [
          { id: 'Physics', name: 'Physics', hindiName: 'भौतिकी', popularTopics: ['Units & Measurements', 'Kinematics', 'Laws of Motion', 'Work, Energy & Power', 'Rotational Motion', 'Gravitation', 'Thermodynamics', 'Oscillations & Waves'] },
          { id: 'Chemistry', name: 'Chemistry', hindiName: 'रसायन विज्ञान', popularTopics: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Chemical Bonding', 'Chemical Thermodynamics', 'Equilibrium', 'Redox Reactions', 'Organic Chemistry Basics', 'Hydrocarbons'] },
          { id: 'Mathematics', name: 'Mathematics', hindiName: 'गणित', popularTopics: ['Sets & Relations', 'Trigonometric Functions', 'Complex Numbers', 'Linear Inequalities', 'Permutations & Combinations', 'Binomial Theorem', 'Sequences & Series', 'Straight Lines', 'Conic Sections', 'Limits & Derivatives'] },
          { id: 'Biology', name: 'Biology', hindiName: 'जीव विज्ञान', popularTopics: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology & Anatomy of Flowering Plants', 'Cell: Unit of Life', 'Biomolecules', 'Plant Physiology', 'Human Physiology'] },
          { id: 'Computer Science', name: 'Computer Science (Python)', hindiName: 'कंप्यूटर साइंस (पायथन)', popularTopics: ['Computer Systems Overview', 'Python Fundamentals', 'Control Flow', 'Strings, Lists, Tuples, Dictionaries', 'Python Modules', 'Cyber Ethics'] }
        ]
      },
      {
        id: 'Commerce',
        name: 'Commerce',
        hindiName: 'वाणिज्य संकाय',
        description: 'Financial accounting, business principles, microeconomics, and analytical entrepreneurship.',
        badgeColor: 'from-amber-600 to-orange-600',
        subjects: [
          { id: 'Accountancy', name: 'Accountancy', hindiName: 'लेखाशास्त्र', popularTopics: ['Introduction to Accounting', 'Theory Base of Accounting', 'Recording of Transactions (Journal, Ledger)', 'Bank Reconciliation Statement', 'Trial Balance & Rectification of Errors', 'Depreciation', 'Financial Statements of Sole Proprietorship'] },
          { id: 'Business Studies', name: 'Business Studies', hindiName: 'व्यावसायिक अध्ययन', popularTopics: ['Nature and Purpose of Business', 'Forms of Business Organisation', 'Public, Private and Global Enterprises', 'Business Services', 'Emerging Modes of Business', 'Social Responsibilities of Business', 'Sources of Business Finance', 'Small Business'] },
          { id: 'Economics', name: 'Economics (Microeconomics & Statistics)', hindiName: 'अर्थशास्त्र', popularTopics: ['Introduction to Statistics', 'Collection & Presentation of Data', 'Measures of Central Tendency', 'Consumer’s Equilibrium & Demand', 'Producer Behaviour & Supply', 'Forms of Market & Price Determination'] },
          { id: 'Mathematics', name: 'Applied Mathematics', hindiName: 'व्यावहारिक गणित', popularTopics: ['Numbers & Quantification', 'Numerical Applications', 'Algebra', 'Calculus', 'Probability', 'Financial Mathematics'] },
          { id: 'Entrepreneurship', name: 'Entrepreneurship', hindiName: 'उद्यमिता', popularTopics: ['Entrepreneurship: Concept & Functions', 'An Entrepreneur', 'Entrepreneurial Journey', 'Business Finance & Arithmetic', 'Resource Mobilization'] }
        ]
      },
      {
        id: 'Humanities / Arts',
        name: 'Humanities & Social Sciences',
        hindiName: 'कला एवं मानविकी संकाय',
        description: 'World history, political theory, geographic systems, sociology and psychological human behavior.',
        badgeColor: 'from-emerald-600 to-teal-600',
        subjects: [
          { id: 'History', name: 'History (Themes in World History)', hindiName: 'इतिहास', popularTopics: ['Writing and City Life', 'An Empire Across Three Continents', 'Nomadic Empires', 'The Three Orders', 'Changing Cultural Traditions', 'Displacing Indigenous Peoples', 'Paths to Modernisation'] },
          { id: 'Political Science', name: 'Political Science', hindiName: 'राजनीति विज्ञान', popularTopics: ['Constitution: Why and How?', 'Rights in the Indian Constitution', 'Election and Representation', 'Executive, Legislature & Judiciary', 'Political Theory: Freedom, Equality, Social Justice, Rights, Citizenship'] },
          { id: 'Geography', name: 'Geography', hindiName: 'भूगोल', popularTopics: ['Fundamentals of Physical Geography', 'Origin and Evolution of the Earth', 'Landforms', 'Climate and Atmosphere', 'Oceans', 'Life on Earth', 'India: Physical Environment'] },
          { id: 'Economics', name: 'Economics', hindiName: 'अर्थशास्त्र', popularTopics: ['Statistics for Economics', 'Indian Economic Development', 'Development Policies & Experience'] },
          { id: 'Psychology', name: 'Psychology', hindiName: 'मनोविज्ञान', popularTopics: ['What is Psychology?', 'Methods of Enquiry in Psychology', 'Human Development', 'Sensory, Attentional and Perceptual Processes', 'Learning', 'Human Memory', 'Thinking', 'Motivation & Emotion'] },
          { id: 'Sociology', name: 'Sociology', hindiName: 'समाजशास्त्र', popularTopics: ['Sociology and Society', 'Terms, Concepts and their use in Sociology', 'Understanding Social Institutions', 'Culture and Socialisation', 'Social Change and Social Order'] }
        ]
      }
    ]
  },
  {
    id: 'Class 12',
    title: 'Class 12th Board & Entrance Hub',
    hindiTitle: 'कक्षा १२वीं बोर्ड एवं प्रवेश परीक्षा मंच',
    badge: 'Class 12',
    description: 'Terminal board examination preparation with formula summaries, derivation guides, solved exemplars, and competitive shortcuts.',
    hasStreams: true,
    streams: [
      {
        id: 'Science',
        name: 'Science (PCM / PCB / PCMB)',
        hindiName: 'विज्ञान संकाय',
        description: 'Targeted Class 12 board and entrance mastery for Physics, Chemistry, Mathematics & Biology.',
        badgeColor: 'from-blue-600 to-indigo-600',
        subjects: [
          { id: 'Physics', name: 'Physics', hindiName: 'भौतिकी', popularTopics: ['Electrostatics & Electric Charges', 'Electrostatic Potential & Capacitance', 'Current Electricity', 'Moving Charges & Magnetism', 'Magnetism & Matter', 'Electromagnetic Induction', 'Alternating Currents', 'Electromagnetic Waves', 'Ray Optics & Optical Instruments', 'Wave Optics', 'Dual Nature of Radiation & Matter', 'Atoms & Nuclei', 'Semiconductor Electronics'] },
          { id: 'Chemistry', name: 'Chemistry', hindiName: 'रसायन विज्ञान', popularTopics: ['Solutions', 'Electrochemistry', 'Chemical Kinetics', 'd- and f-Block Elements', 'Coordination Compounds', 'Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers', 'Aldehydes, Ketones and Carboxylic Acids', 'Amines', 'Biomolecules'] },
          { id: 'Mathematics', name: 'Mathematics', hindiName: 'गणित', popularTopics: ['Relations & Functions', 'Inverse Trigonometric Functions', 'Matrices & Determinants', 'Continuity & Differentiability', 'Application of Derivatives', 'Integrals', 'Application of Integrals', 'Differential Equations', 'Vector Algebra', 'Three Dimensional Geometry', 'Linear Programming', 'Probability'] },
          { id: 'Biology', name: 'Biology', hindiName: 'जीव विज्ञान', popularTopics: ['Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance & Variation', 'Molecular Basis of Inheritance', 'Evolution', 'Human Health & Disease', 'Microbes in Human Welfare', 'Biotechnology: Principles & Processes', 'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation'] },
          { id: 'Computer Science', name: 'Computer Science & Informatics', hindiName: 'कंप्यूटर साइंस', popularTopics: ['Python Revision Tour', 'Functions & File Handling', 'Data Structures (Stack)', 'Computer Networks', 'Database Management & SQL', 'Cyber Law & Society'] }
        ]
      },
      {
        id: 'Commerce',
        name: 'Commerce',
        hindiName: 'वाणिज्य संकाय',
        description: 'Corporate accounting, financial management, macroeconomics & business law.',
        badgeColor: 'from-amber-600 to-rose-600',
        subjects: [
          { id: 'Accountancy', name: 'Accountancy (Company & Partnership)', hindiName: 'लेखाशास्त्र', popularTopics: ['Accounting for Partnership: Fundamentals', 'Admission, Retirement & Death of a Partner', 'Dissolution of a Partnership Firm', 'Accounting for Share Capital', 'Issue of Debentures', 'Financial Statements of a Company', 'Cash Flow Statement', 'Accounting Ratios'] },
          { id: 'Business Studies', name: 'Business Studies', hindiName: 'व्यावसायिक अध्ययन', popularTopics: ['Nature & Significance of Management', 'Principles of Management', 'Business Environment', 'Planning, Organizing, Staffing, Directing, Controlling', 'Financial Management & Financial Markets', 'Marketing Management', 'Consumer Protection'] },
          { id: 'Economics', name: 'Economics (Macro & Indian Economy)', hindiName: 'अर्थशास्त्र', popularTopics: ['National Income & Related Aggregates', 'Money & Banking', 'Determination of Income & Employment', 'Government Budget and the Economy', 'Balance of Payments', 'Indian Economy on the Eve of Independence', 'Economic Reforms since 1991', 'Current Challenges facing Indian Economy', 'Development Experience of India, Pakistan & China'] },
          { id: 'Mathematics', name: 'Applied Mathematics', hindiName: 'व्यावहारिक गणित', popularTopics: ['Modulus & Arithmetic', 'Calculus', 'Probability Distributions', 'Index Numbers & Time Series', 'Financial Mathematics (EMI, Sinking Funds)', 'Linear Programming'] }
        ]
      },
      {
        id: 'Humanities / Arts',
        name: 'Humanities & Social Sciences',
        hindiName: 'कला एवं मानविकी संकाय',
        description: 'Indian and global history, contemporary world politics, human geography and social institutions.',
        badgeColor: 'from-purple-600 to-pink-600',
        subjects: [
          { id: 'History', name: 'History (Themes in Indian History)', hindiName: 'इतिहास', popularTopics: ['Bricks, Beads and Bones (Harappan)', 'Kings, Farmers and Towns', 'Kinship, Caste and Class', 'Thinkers, Beliefs and Buildings', 'Through the Eyes of Travellers', 'Bhakti-Sufi Traditions', 'An Imperial Capital: Vijayanagara', 'Peasants, Zamindars and the State', 'Colonialism and the Countryside', 'Rebels and the Raj (1857)', 'Mahatma Gandhi and the Nationalist Movement', 'Framing the Constitution'] },
          { id: 'Political Science', name: 'Political Science', hindiName: 'राजनीति विज्ञान', popularTopics: ['The End of Bipolarity', 'Contemporary Centres of Power', 'Contemporary South Asia', 'International Organisations', 'Security in the Contemporary World', 'Environment and Natural Resources', 'Globalisation', 'Challenges of Nation-Building', 'Era of One-Party Dominance', 'Politics of Planned Development', 'India’s External Relations', 'Democratic Resurgence', 'Regional Aspirations', 'Recent Developments in Indian Politics'] },
          { id: 'Geography', name: 'Geography (Human & India Economy)', hindiName: 'भूगोल', popularTopics: ['Human Geography: Nature and Scope', 'The World Population: Distribution, Density and Growth', 'Human Development', 'Primary, Secondary, Tertiary & Quaternary Activities', 'Transport, Communication & International Trade', 'Human Settlements', 'Resources and Development in India'] },
          { id: 'Psychology', name: 'Psychology', hindiName: 'मनोविज्ञान', popularTopics: ['Variations in Psychological Attributes', 'Self and Personality', 'Meeting Life Challenges', 'Psychological Disorders', 'Therapeutic Approaches', 'Attitude and Social Cognition', 'Social Influence and Group Processes'] }
        ]
      }
    ]
  }
];

export const LITERATURE_GENRES = [
  'All Genres',
  'Short Stories',
  'Inspirational Stories',
  'Moral & Folk Tales',
  'Mystery & Detective',
  'Adventure & Exploration',
  'Classics & Literature',
  'Poetry & Verses',
  'Drama & Plays',
  'Novels & Novellas',
  'Children & Teen Literature'
] as const;

export const PUZZLE_CATEGORIES = [
  'All Puzzles',
  'पहेलियाँ (Hindi Riddles)',
  'Brain Teasers',
  'Logic Puzzles',
  'Math & Number Riddles',
  'Word & Language Puzzles',
  'GK & Curiosity Puzzles',
  'Reasoning & Aptitude',
  'Thinking Challenges'
] as const;
