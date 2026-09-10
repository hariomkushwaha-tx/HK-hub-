import { EBookItem } from '../types';

export const SCHOOL_BOOKS_DATA: EBookItem[] = [
  // ==========================================
  // CLASS 9 BOOKS
  // ==========================================
  {
    id: 'class9-maths-mastery',
    title: 'Class 9 Mathematics Concept & Problem Master',
    subtitle: 'Step-by-step NCERT Syllabus Breakdown, Formulas & Solved Exemplars',
    author: 'Prof. Ramesh K. & HK Academic Team',
    publisher: 'HK VELORA Open Education Series',
    category: 'Student & Education',
    subcategory: 'Class 9',
    schoolClass: 'Class 9',
    subject: 'Mathematics',
    bookType: 'Study Guide',
    pages: 280,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Beginner',
    rating: 4.9,
    reviewCount: 342,
    badge: 'NCERT Aligned',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-600 to-cyan-700',
    tags: ['Class 9', 'Mathematics', 'NCERT', 'CBSE', 'Geometry', 'Algebra', 'Polynomials'],
    topics: ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations', 'Triangles', 'Heron’s Formula', 'Statistics'],
    language: 'Bilingual (Hindi + English)',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'National Open Educational Repository & HK VELORA Academic Council',
    whatYoullLearn: [
      'Master irrational number proofs, real number operations, and laws of rational exponents',
      'Factor theorem, Remainder theorem, and algebraic identities for Class 9 exams',
      'Euclidean postulates, angle-sum proofs, and congruence criteria for triangles (SAS, ASA, SSS, RHS)',
      'Heron’s formula applications and graphical representation of statistical data'
    ],
    tableOfContents: [
      'Chapter 1: Number Systems & Real Exponents',
      'Chapter 2: Polynomials & Algebraic Identities',
      'Chapter 3: Coordinate Geometry & Cartesian Plane',
      'Chapter 4: Linear Equations in Two Variables',
      'Chapter 5: Lines, Angles & Triangles Congruence',
      'Chapter 6: Quadrilaterals & Circles Theorems',
      'Chapter 7: Heron’s Formula & Surface Areas',
      'Chapter 8: Statistics, Bar Graphs & Histograms'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Number Systems & Real Exponents',
        summary: 'In-depth breakdown of rational and irrational numbers, decimal expansions (terminating vs non-terminating recurring), representation on the number line, and laws of rational exponents.',
        keyPoints: [
          'Every real number is represented by a unique point on the number line.',
          'Rationalising the denominator: multiplying numerator and denominator by conjugate surd.',
          'Laws of exponents: a^p * a^q = a^(p+q), (a^p)^q = a^(pq).'
        ]
      },
      {
        title: 'Chapter 2: Polynomials & Algebraic Identities',
        summary: 'Detailed explanation of zero of a polynomial, Remainder Theorem, Factor Theorem, and standard algebraic identities like (a+b+c)^2 and (a+b)^3.',
        keyPoints: [
          'Degree of a non-zero constant polynomial is zero.',
          'Factor Theorem: (x - a) is a factor of p(x) if and only if p(a) = 0.',
          'Standard cubic factorization identities and high-frequency algebraic expansions.'
        ]
      }
    ],
    studyNotes: [
      'Formula Sheet: All 8 core algebraic identities summarized in one quick-glance table.',
      'Common Pitfall: Confusing congruent triangles (exact size and shape) with similar triangles.',
      'Exam Tip: Always state the congruence criteria acronym (e.g., RHS, ASA) explicitly in board proofs.'
    ],
    description: 'A comprehensive, clear, and curriculum-aligned mathematics study guide for Class 9 students. Features bilingual explanations, visual geometric proofs, and chapter-wise practice problems.',
    shortDescription: 'Comprehensive Class 9 Mathematics guide with NCERT-aligned concepts, solved exemplars, and formula sheet.'
  },
  {
    id: 'class9-science-handbook',
    title: 'Class 9 Science: Physics, Chemistry & Biology Handbook',
    subtitle: 'Concept Mind Maps, Experiments, Formulas & NCERT In-Text Solutions',
    author: 'Dr. Sunita Sharma & HK VELORA Science Cell',
    publisher: 'HK VELORA Open Education Series',
    category: 'Student & Education',
    subcategory: 'Class 9',
    schoolClass: 'Class 9',
    subject: 'Science',
    bookType: 'Handbook',
    pages: 310,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Beginner',
    rating: 4.8,
    reviewCount: 289,
    badge: 'Mind Maps Included',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-emerald-600 to-teal-800',
    tags: ['Class 9', 'Science', 'Physics', 'Chemistry', 'Biology', 'NCERT', 'Matter', 'Motion', 'Cell'],
    topics: ['Matter in Surroundings', 'Atoms & Molecules', 'Cell - Unit of Life', 'Tissues', 'Motion & Laws of Motion', 'Gravitation', 'Work & Energy'],
    language: 'Bilingual (Hindi + English)',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'Creative Commons Attribution-ShareAlike 4.0',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Open Science Initiative',
    whatYoullLearn: [
      'Understand states of matter, latent heat, evaporation, and Dalton’s atomic postulates',
      'Difference between plant and animal cell organelles: mitochondria, plastids, Golgi apparatus',
      'Equations of motion derived graphically: v = u + at, s = ut + 1/2at^2, v^2 = u^2 + 2as',
      'Newton’s three laws of motion, universal law of gravitation, and kinetic vs potential energy'
    ],
    tableOfContents: [
      'Chapter 1: Matter in Our Surroundings & States of Matter',
      'Chapter 2: Is Matter Around Us Pure? (Solutions, Colloids, Suspensions)',
      'Chapter 3: Atoms, Molecules & Mole Concept',
      'Chapter 4: Structure of the Atom (Thomson, Rutherford, Bohr)',
      'Chapter 5: The Fundamental Unit of Life (Cell Biology)',
      'Chapter 6: Tissues (Meristematic, Permanent, Animal Tissues)',
      'Chapter 7: Motion, Velocity-Time Graphs & Equations',
      'Chapter 8: Force and Newton’s Laws of Motion',
      'Chapter 9: Gravitation, Free Fall & Buoyancy',
      'Chapter 10: Work, Energy and Power'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Matter in Our Surroundings & States of Matter',
        summary: 'Kinetic theory of matter, characteristics of particles, latent heat of fusion and vaporization, and factors influencing the rate of evaporation.',
        keyPoints: [
          'Matter is composed of small particles with continuous random motion.',
          'Temperature remains constant during phase transitions due to latent heat absorption.',
          'Evaporation is a surface phenomenon causing cooling.'
        ]
      }
    ],
    studyNotes: [
      'High-yield derivation: Graphical derivation of all 3 equations of motion.',
      'Biology mnemonic: Organelles with their own DNA and ribosomes — Mitochondria & Chloroplasts.',
      'Chemistry formula: Number of moles = Given mass / Molar mass.'
    ],
    description: 'Structured Class 9 Science handbook providing concise conceptual notes, labeled diagrams, chemical equations, and physics numerical shortcuts.',
    shortDescription: 'Clear Class 9 Physics, Chemistry and Biology revision handbook with mind maps and numerical guides.'
  },
  {
    id: 'class9-computer-it',
    title: 'Class 9 Information Technology & Cyber Skills Guide',
    subtitle: 'Digital Documentation, Computer Fundamentals, Cyber Safety & Python Basics',
    author: 'Er. Hariom Kushwaha (HK Tech World)',
    publisher: 'HK VELORA Publications',
    category: 'Student & Education',
    subcategory: 'Class 9',
    schoolClass: 'Class 9',
    subject: 'Computer / IT',
    bookType: 'Educational Guide',
    pages: 195,
    format: 'PDF + Digital Code Reader',
    difficulty: 'Beginner',
    rating: 4.9,
    reviewCount: 412,
    badge: 'Hands-on Labs',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-violet-600 to-indigo-800',
    tags: ['Class 9', 'Computer', 'IT 402', 'Cyber Safety', 'Python', 'Spreadsheets'],
    topics: ['Computer Architecture', 'Operating Systems', 'Word Processing', 'Spreadsheets', 'Cyber Safety', 'Intro to Coding'],
    language: 'English',
    featured: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Authorized Academic Release',
    licenseType: 'HK VELORA Open Student License',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Digital Literacy Curriculum',
    whatYoullLearn: [
      'Hardware and software fundamentals, CPU architecture, memory types (RAM vs ROM)',
      'Digital document formatting, tables, styles, and mail merge concepts',
      'Cyber safety, digital footprints, phishing avoidance, and safe social media practices',
      'Computational thinking and basic Python syntax for beginners'
    ],
    tableOfContents: [
      'Chapter 1: Basics of Information Technology & Hardware',
      'Chapter 2: Operating Systems & GUI Navigation',
      'Chapter 3: Digital Documentation & Formatting Styles',
      'Chapter 4: Electronic Spreadsheets & Basic Formulas',
      'Chapter 5: Cyber Safety, Privacy & Digital Footprint',
      'Chapter 6: Computational Thinking & Intro to Python'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Basics of Information Technology & Hardware',
        summary: 'Understanding the Von Neumann architecture, input/output peripherals, secondary storage devices, and software classifications (system vs application).',
        keyPoints: [
          'CPU coordinates control unit (CU) and arithmetic logic unit (ALU).',
          'Primary memory is volatile (RAM) while secondary memory is persistent (SSD/HDD).',
          'System software vs Application software distinctions.'
        ]
      }
    ],
    studyNotes: [
      'Practical lab exercises included for each chapter.',
      'Keyboard shortcut table for LibreOffice Writer and MS Word included.'
    ],
    description: 'A student-friendly computer applications and IT 402 guide designed for Class 9 students, with practical tutorials and cyber safety awareness.',
    shortDescription: 'Computer fundamentals, office productivity tools, cyber ethics, and basic coding for Class 9 students.'
  },

  // ==========================================
  // CLASS 10 BOOKS
  // ==========================================
  {
    id: 'class10-maths-board-master',
    title: 'Class 10 Mathematics Board Exam Companion',
    subtitle: 'Standard & Basic Syllabus, 100+ High-Yield Solved Exemplars & Formula Deck',
    author: 'Prof. Ramesh K. & Dr. Alok V.',
    publisher: 'HK VELORA Open Education Series',
    category: 'Student & Education',
    subcategory: 'Class 10',
    schoolClass: 'Class 10',
    subject: 'Mathematics',
    bookType: 'Revision Book',
    pages: 340,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 5.0,
    reviewCount: 654,
    badge: 'Board Topper Pick',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-600 to-rose-700',
    tags: ['Class 10', 'Mathematics', 'Board Exam', 'CBSE', 'Trigonometry', 'Quadratic Equations', 'Circles'],
    topics: ['Real Numbers', 'Polynomials', 'Quadratic Equations', 'Arithmetic Progressions', 'Trigonometry', 'Circles', 'Surface Area & Volume', 'Statistics'],
    language: 'Bilingual (Hindi + English)',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'National Board Curriculum Open Repository',
    whatYoullLearn: [
      'Fundamental Theorem of Arithmetic, proving irrationality of sqrt(2), sqrt(3), sqrt(5)',
      'Solving quadratic equations via factorization and quadratic formula with discriminant analysis',
      'Complete trigonometry ratios, specific angle values (0°, 30°, 45°, 60°, 90°), and identity proofs',
      'Circle tangent theorems: radius is perpendicular to tangent, tangents from external point are equal'
    ],
    tableOfContents: [
      'Chapter 1: Real Numbers (Euclid, Prime Factorization, Irrationals)',
      'Chapter 2: Polynomials & Geometric Meaning of Zeroes',
      'Chapter 3: Pair of Linear Equations in Two Variables',
      'Chapter 4: Quadratic Equations & Nature of Roots',
      'Chapter 5: Arithmetic Progressions (AP nth Term & Sum)',
      'Chapter 6: Triangles (Basic Proportionality Theorem & Similarity)',
      'Chapter 7: Coordinate Geometry (Distance, Section Formula)',
      'Chapter 8: Introduction to Trigonometry & Trigonometric Identities',
      'Chapter 9: Some Applications of Trigonometry (Heights & Distances)',
      'Chapter 10: Circles & Tangent Theorems',
      'Chapter 11: Surface Areas and Volumes of Combinations',
      'Chapter 12: Statistics (Mean, Median, Mode) & Probability'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 8: Introduction to Trigonometry & Trigonometric Identities',
        summary: 'Rigorous breakdown of sin, cos, tan, cosec, sec, cot ratios in a right triangle, standard trigonometric values table, and algebraic proofs of sin^2θ + cos^2θ = 1, 1 + tan^2θ = sec^2θ, 1 + cot^2θ = cosec^2θ.',
        keyPoints: [
          'Trigonometric ratios depend only on the angle, not on the side lengths of the triangle.',
          'Value of sin θ increases from 0 to 1 as θ increases from 0° to 90°.',
          'Pythagorean identities must be proved using right triangle geometry.'
        ]
      },
      {
        title: 'Chapter 10: Circles & Tangent Theorems',
        summary: 'Detailed step-by-step proofs of Theorem 10.1 (radius perpendicular to tangent at point of contact) and Theorem 10.2 (lengths of tangents drawn from an external point to a circle are equal).',
        keyPoints: [
          'There is no tangent to a circle passing through a point lying inside the circle.',
          'There is one and only one tangent to a circle passing through a point lying on the circle.',
          'There are exactly two tangents to a circle through an external point.'
        ]
      }
    ],
    studyNotes: [
      'Golden Rule of Triangles: State BPT (Basic Proportionality Theorem) clearly before using it in 4-mark proofs.',
      'Trigonometry Cheat Sheet: Express all terms in terms of sin θ and cos θ when stuck on difficult identity proofs.',
      'Statistics Formula: Empirical relationship: 3 Median = Mode + 2 Mean.'
    ],
    description: 'The ultimate board examination study resource for Class 10 students. Covers every major topic with verified step-by-step proofs, common board traps, and mind maps.',
    shortDescription: 'Complete Class 10 Mathematics board exam guide with step-by-step proofs, formulas, and 100+ exemplars.'
  },
  {
    id: 'class10-science-revision',
    title: 'Class 10 Science: Chemical Reactions, Life Processes & Physics Laws',
    subtitle: 'Visual Chemical Equations, Biological Diagrams, Ray Diagrams & Board Tips',
    author: 'Dr. Sunita Sharma & HK Science Council',
    publisher: 'HK VELORA Open Education Series',
    category: 'Student & Education',
    subcategory: 'Class 10',
    schoolClass: 'Class 10',
    subject: 'Science',
    bookType: 'Study Guide',
    pages: 360,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 512,
    badge: '100% Board Aligned',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-teal-600 to-emerald-800',
    tags: ['Class 10', 'Science', 'Chemical Reactions', 'Life Processes', 'Electricity', 'Light', 'Board Exam'],
    topics: ['Chemical Equations', 'Acids, Bases & Salts', 'Metals & Non-metals', 'Carbon Compounds', 'Life Processes', 'Control & Coordination', 'Reproduction', 'Light Optics', 'Electricity', 'Magnetic Effects'],
    language: 'Bilingual (Hindi + English)',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'National Science Teachers Academic Council',
    whatYoullLearn: [
      'Balance complex redox and displacement equations; understand pH scale and salts',
      'Master human digestion, respiration, double circulation, and excretion pathways with diagrams',
      'Draw concave and convex mirror/lens ray diagrams with Cartesian sign conventions',
      'Ohm’s law, series vs parallel resistor networks, electric power, and Joule’s heating law'
    ],
    tableOfContents: [
      'Chapter 1: Chemical Reactions, Balancing & Types (Redox, Precipitation)',
      'Chapter 2: Acids, Bases, pH & Important Salts (Bleaching powder, Baking soda, Plaster of Paris)',
      'Chapter 3: Metals and Non-Metals, Metallurgy & Corrosion',
      'Chapter 4: Carbon and Its Compounds, Covalent Bonding & Functional Groups',
      'Chapter 5: Life Processes (Nutrition, Respiration, Transportation, Excretion)',
      'Chapter 6: Control and Coordination (Nervous System & Phytohormones)',
      'Chapter 7: How do Organisms Reproduce? (Asexual & Sexual Modes)',
      'Chapter 8: Heredity and Evolution (Mendel’s Monohybrid & Dihybrid Crosses)',
      'Chapter 9: Light: Reflection and Refraction (Mirror & Lens Formula)',
      'Chapter 10: Human Eye and the Colorful World (Myopia, Hypermetropia, Atmospheric Refraction)',
      'Chapter 11: Electricity, Ohm’s Law & Resistance Calculations',
      'Chapter 12: Magnetic Effects of Electric Current & Fleming’s Left-Hand Rule',
      'Chapter 13: Our Environment & Eco-systems'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 5: Life Processes',
        summary: 'Detailed visual breakdown of autotrophic vs heterotrophic nutrition, stomatal opening/closing, human digestive system, respiratory pathways (aerobic vs anaerobic), human heart 4-chamber double circulation, and nephron urine formation.',
        keyPoints: [
          'Digestive enzymes: Salivary amylase (starch), Pepsin (proteins in acidic medium), Trypsin & Lipase (pancreatic juice).',
          'Blood circulation: Pulmonary artery carries deoxygenated blood to lungs; Pulmonary vein carries oxygenated blood to heart.',
          'Nephron functioning: Ultrafiltration in Bowman’s capsule followed by selective reabsorption in tubular part.'
        ]
      }
    ],
    studyNotes: [
      'Ray Diagram Rule: Light rays parallel to the principal axis always pass through or appear to diverge from the principal focus.',
      'Sign Convention: Object distance (u) is always negative in Cartesian sign convention.',
      'Chemistry Tip: Plaster of Paris CaSO4 · 1/2 H2O reacts with water to form hard gypsum CaSO4 · 2 H2O.'
    ],
    description: 'Comprehensive Class 10 Science preparation guide covering all core chapters across physics, chemistry and biology with clear illustrations and high-yield question patterns.',
    shortDescription: 'High-yield Class 10 Science revision book with ray diagrams, life processes mind maps, and chemical equations.'
  },
  {
    id: 'class10-social-science',
    title: 'Class 10 Social Science: History, Geography, Civics & Economics',
    subtitle: 'Timeline Charts, Map Work Guides, Key Dates & Concept Explanations',
    author: 'Prof. Anjali Sen & HK Humanities Cell',
    publisher: 'HK VELORA Open Education Series',
    category: 'Student & Education',
    subcategory: 'Class 10',
    schoolClass: 'Class 10',
    subject: 'Social Science',
    bookType: 'Revision Book',
    pages: 290,
    format: 'PDF + Digital Reader',
    difficulty: 'Beginner',
    rating: 4.8,
    reviewCount: 318,
    badge: 'Map Work Included',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-700 to-yellow-800',
    tags: ['Class 10', 'Social Science', 'History', 'Geography', 'Civics', 'Economics', 'CBSE'],
    topics: ['Nationalism in Europe', 'Nationalism in India', 'Resources & Development', 'Power Sharing', 'Federalism', 'Money & Credit', 'Globalization'],
    language: 'Hindi',
    featured: false,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Social Sciences Resource Group',
    whatYoullLearn: [
      'Nationalism in Europe (French Revolution, Unification of Germany & Italy)',
      'Indian Freedom Struggle: Non-Cooperation, Civil Disobedience Movement, and Salt March',
      'Power-sharing mechanisms in Belgium vs Sri Lanka; principles of Indian federalism',
      'Role of formal vs informal credit in rural and urban development in Economics'
    ],
    tableOfContents: [
      'Chapter 1: The Rise of Nationalism in Europe',
      'Chapter 2: Nationalism in India & Non-Cooperation Movement',
      'Chapter 3: The Making of a Global World',
      'Chapter 4: Resources and Development & Land Degradation',
      'Chapter 5: Agriculture & Mineral Resources',
      'Chapter 6: Power Sharing & Federalism in India',
      'Chapter 7: Gender, Religion and Caste',
      'Chapter 8: Money and Credit (RBI role, SHGs)',
      'Chapter 9: Globalisation and the Indian Economy'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: Nationalism in India',
        summary: 'Chronology of Mahatma Gandhi’s satyagraha in Champaran, Kheda, Ahmedabad, Rowlatt Act, Jallianwala Bagh massacre, Khilafat movement, Non-Cooperation Movement, and the famous Dandi Salt March.',
        keyPoints: [
          'Satyagraha emphasizes the power of truth and the need to search for truth without physical force.',
          'Poona Pact of 1932 resolved representation of depressed classes between Dr. Ambedkar and Gandhiji.',
          'Role of different social groups in the Civil Disobedience Movement.'
        ]
      }
    ],
    studyNotes: [
      'Map Work Checklist: Key national movement sites (Champaran, Kheda, Dandi, Chauri Chaura, Amritsar).',
      'Economics Concept: Collateral is an asset that the borrower owns and uses as a guarantee to a lender.'
    ],
    description: 'A well-structured Social Science revision book for Class 10 containing historical timelines, geographical map points, civic institutions, and economic concepts.',
    shortDescription: 'Class 10 History, Geography, Civics and Economics study book with timelines and map work.'
  },

  // ==========================================
  // CLASS 11 BOOKS
  // ==========================================
  {
    id: 'class11-physics-mechanics',
    title: 'Class 11 Physics: Kinematics, Dynamics & Thermodynamics',
    subtitle: 'Rigorous Derivations, Calculus Integration, Vectors & Solved Problems',
    author: 'Dr. V. K. Malhotra & HK STEM Council',
    publisher: 'HK VELORA Academic Press',
    category: 'Student & Education',
    subcategory: 'Class 11',
    schoolClass: 'Class 11',
    stream: 'Science',
    subject: 'Physics',
    bookType: 'Textbook',
    pages: 410,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewCount: 478,
    badge: 'Calculus Based',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-700 to-indigo-900',
    tags: ['Class 11', 'Physics', 'Mechanics', 'Vectors', 'Thermodynamics', 'Science Stream', 'JEE Foundation'],
    topics: ['Units & Dimensions', 'Kinematics 1D & 2D', 'Newton’s Laws of Motion', 'Work, Energy & Power', 'Rotational Dynamics', 'Gravitation', 'Thermodynamics'],
    language: 'English',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Authorized Academic Release',
    licenseType: 'HK VELORA Open Academic License',
    permissionStatus: 'Verified Free Access',
    source: 'National Higher Secondary STEM Consortium',
    whatYoullLearn: [
      'Dimensional analysis, principle of homogeneity, and error propagation',
      'Projectile motion, trajectory equations, range, and maximum height derivations',
      'Conservation of linear momentum, banking of circular roads with friction',
      'Moment of inertia theorems (parallel and perpendicular axis), torque and angular momentum',
      'First and Second laws of thermodynamics, Carnot engine efficiency'
    ],
    tableOfContents: [
      'Chapter 1: Units, Measurements & Dimensional Analysis',
      'Chapter 2: Motion in a Straight Line (Calculus Approach)',
      'Chapter 3: Vectors & Motion in a Plane (Projectiles)',
      'Chapter 4: Laws of Motion, Friction & Circular Dynamics',
      'Chapter 5: Work, Energy, Power & Potential Energy Curves',
      'Chapter 6: System of Particles & Rotational Motion',
      'Chapter 7: Gravitation & Kepler’s Laws',
      'Chapter 8: Mechanical Properties of Solids & Fluids',
      'Chapter 9: Thermal Properties of Matter & Heat Transfer',
      'Chapter 10: Thermodynamics & Heat Engines',
      'Chapter 11: Kinetic Theory of Gases',
      'Chapter 12: Oscillations (SHM) and Wave Mechanics'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: Vectors & Motion in a Plane (Projectiles)',
        summary: 'Vector addition (triangle & parallelogram laws), scalar and vector cross products, derivation of projectile trajectory equation y = x tan θ - (g x^2) / (2 u^2 cos^2 θ), time of flight, and horizontal range.',
        keyPoints: [
          'Horizontal velocity component u cos θ remains constant throughout projectile flight neglecting air drag.',
          'Maximum horizontal range occurs when launch angle θ = 45°.',
          'Dot product A · B = |A||B| cos θ; Cross product magnitude |A × B| = |A||B| sin θ.'
        ]
      }
    ],
    studyNotes: [
      'Derivation Tip: The angle of banking θ for a road without friction is given by tan θ = v^2 / (rg).',
      'Rotational Analogy: Torque τ is the rotational counterpart of force F; Moment of Inertia I is the counterpart of mass m.'
    ],
    description: 'In-depth Class 11 Physics textbook covering classical mechanics, thermodynamics, fluid dynamics, and wave oscillations with calculus-backed derivations.',
    shortDescription: 'Comprehensive Class 11 Physics textbook with calculus derivations, vectors, and solved mechanics problems.'
  },
  {
    id: 'class11-chemistry-foundations',
    title: 'Class 11 Chemistry: Chemical Bonding, Thermodynamics & Hydrocarbons',
    subtitle: 'Quantum Atomic Model, Periodic Trends, Molecular Orbital Theory & Reaction Mechanisms',
    author: 'Dr. Meenakshi Iyer',
    publisher: 'HK VELORA Academic Press',
    category: 'Student & Education',
    subcategory: 'Class 11',
    schoolClass: 'Class 11',
    stream: 'Science',
    subject: 'Chemistry',
    bookType: 'Textbook',
    pages: 395,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.8,
    reviewCount: 388,
    badge: 'Organic + Physical',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-cyan-700 to-teal-900',
    tags: ['Class 11', 'Chemistry', 'Chemical Bonding', 'Thermodynamics', 'Organic Chemistry', 'Science Stream'],
    topics: ['Structure of Atom', 'Periodic Classification', 'Chemical Bonding (VSEPR & MOT)', 'Chemical Thermodynamics', 'Equilibrium', 'Organic Chemistry Basics'],
    language: 'English',
    featured: false,
    price: 0,
    isFree: true,
    copyrightStatus: 'Authorized Academic Release',
    licenseType: 'HK VELORA Open Academic License',
    permissionStatus: 'Verified Free Access',
    source: 'National Higher Secondary STEM Consortium',
    whatYoullLearn: [
      'de Broglie hypothesis, Heisenberg uncertainty principle, and quantum numbers (n, l, m, s)',
      'VSEPR theory geometries, hybridization (sp, sp2, sp3, dsp2), and Molecular Orbital (MOT) diagrams',
      'Gibbs free energy criterion for spontaneity: ΔG = ΔH - TΔS',
      'IUPAC nomenclature of organic compounds, inductive and resonance effects, carbocation stability'
    ],
    tableOfContents: [
      'Chapter 1: Some Basic Concepts of Chemistry & Stoichiometry',
      'Chapter 2: Structure of Atom & Quantum Mechanical Model',
      'Chapter 3: Classification of Elements & Periodic Trends',
      'Chapter 4: Chemical Bonding and Molecular Structure (VSEPR, MOT)',
      'Chapter 5: Chemical Thermodynamics, Enthalpy & Entropy',
      'Chapter 6: Chemical and Ionic Equilibrium (Le Chatelier, pH, Buffer)',
      'Chapter 7: Redox Reactions & Oxidation Numbers',
      'Chapter 8: Organic Chemistry: Fundamental Principles & Techniques',
      'Chapter 9: Hydrocarbons (Alkanes, Alkenes, Alkynes & Aromaticity)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 4: Chemical Bonding and Molecular Structure',
        summary: 'Ionic vs covalent bonds, dipole moment, Fajan’s rules, Valence Shell Electron Pair Repulsion (VSEPR) shapes, hybridization concepts, and Molecular Orbital Theory (MOT) energy level diagrams for homonuclear diatomic molecules like O2 and N2.',
        keyPoints: [
          'Bond Order = (Nb - Na) / 2; a positive bond order indicates a stable molecule.',
          'Oxygen molecule O2 is paramagnetic due to two unpaired electrons in antibonding pi orbitals.',
          'Hydrogen bonding significantly raises the boiling point of compounds like H2O and NH3.'
        ]
      }
    ],
    studyNotes: [
      'Thermodynamics Rule: A process is spontaneous at all temperatures if ΔH < 0 and ΔS > 0 (making ΔG always negative).',
      'Organic Chemistry Stability Order: 3° carbocation > 2° carbocation > 1° carbocation due to hyperconjugation and inductive effect.'
    ],
    description: 'Class 11 foundational chemistry covering physical, inorganic, and introductory organic chemistry with detailed structural mechanisms and orbital visuals.',
    shortDescription: 'Foundational Class 11 Chemistry guide covering atomic structure, bonding, thermodynamics, and organic basics.'
  },
  {
    id: 'class11-accountancy-fundamentals',
    title: 'Class 11 Accountancy: Financial Accounting & Ledger Principles',
    subtitle: 'Golden Rules of Accounting, Journal Entries, Trial Balance, BRS & Financial Statements',
    author: 'CA Sandeep Mittal & HK Commerce Faculty',
    publisher: 'HK VELORA Commerce Press',
    category: 'Student & Education',
    subcategory: 'Class 11',
    schoolClass: 'Class 11',
    stream: 'Commerce',
    subject: 'Accountancy',
    bookType: 'Practice Book',
    pages: 320,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Beginner',
    rating: 4.9,
    reviewCount: 356,
    badge: 'CA Foundation Aligned',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-700 to-orange-900',
    tags: ['Class 11', 'Accountancy', 'Commerce Stream', 'Journal Entries', 'Ledger', 'BRS', 'Financial Statements'],
    topics: ['Accounting Principles', 'Journal & Ledger', 'Bank Reconciliation', 'Trial Balance', 'Depreciation', 'Financial Statements'],
    language: 'Bilingual (Hindi + English)',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Authorized Academic Release',
    licenseType: 'HK VELORA Open Academic License',
    permissionStatus: 'Verified Free Access',
    source: 'Institute of Secondary Commerce Educators',
    whatYoullLearn: [
      'The 3 Golden Rules of Debit and Credit: Personal, Real, and Nominal accounts',
      'Drafting Journal entries, posting to Ledger accounts, and balancing accounts',
      'Preparing Bank Reconciliation Statements (BRS) to explain cash book vs pass book differences',
      'Depreciation calculations: Straight Line Method (SLM) vs Written Down Value (WDV)',
      'Trading, Profit & Loss Account, and Balance Sheet with year-end adjustments'
    ],
    tableOfContents: [
      'Chapter 1: Introduction to Accounting & Objectives',
      'Chapter 2: Theory Base of Accounting & GAAP Concepts',
      'Chapter 3: Recording Transactions: Accounting Equation & Golden Rules',
      'Chapter 4: Source Documents, Cash Book & Subsidiary Books',
      'Chapter 5: Bank Reconciliation Statement (BRS)',
      'Chapter 6: Trial Balance and Rectification of Errors',
      'Chapter 7: Depreciation, Provisions and Reserves',
      'Chapter 8: Financial Statements of Sole Proprietorship (Trading, P&L, Balance Sheet)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: Recording Transactions: Accounting Equation & Golden Rules',
        summary: 'Dual aspect concept: Assets = Liabilities + Capital. Step-by-step transaction analysis applying debit the receiver/credit the giver, debit what comes in/credit what goes out, and debit all expenses/credit all incomes.',
        keyPoints: [
          'Personal Accounts: Debit the receiver, Credit the giver.',
          'Real Accounts: Debit what comes in, Credit what goes out.',
          'Nominal Accounts: Debit all expenses & losses, Credit all incomes & gains.'
        ]
      }
    ],
    studyNotes: [
      'Accounting Trap: Goods withdrawn by proprietor for personal use are debited to Drawings A/c, not Purchases A/c.',
      'BRS Rule: Cheques issued but not presented for payment are added to the Cash Book balance.'
    ],
    description: 'Master the principles of financial accounting with practical ledger formats, real-world commerce illustrations, and comprehensive adjustments for Class 11.',
    shortDescription: 'Core Class 11 Accountancy textbook with golden rules, journal entries, ledger posting, and BRS.'
  },
  {
    id: 'class11-political-theory',
    title: 'Class 11 Political Science: Indian Constitution at Work & Political Theory',
    subtitle: 'Institutional Architecture, Fundamental Rights, Judiciary & Core Philosophical Concepts',
    author: 'Prof. Ananya Roy (JNU Alum)',
    publisher: 'HK VELORA Humanities Series',
    category: 'Student & Education',
    subcategory: 'Class 11',
    schoolClass: 'Class 11',
    stream: 'Humanities / Arts',
    subject: 'Political Science',
    bookType: 'Study Guide',
    pages: 295,
    format: 'PDF + Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.8,
    reviewCount: 230,
    badge: 'UPSC Foundation',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-emerald-700 to-teal-900',
    tags: ['Class 11', 'Political Science', 'Humanities', 'Constitution', 'Political Theory', 'UPSC Foundation'],
    topics: ['Constitution Making', 'Fundamental Rights', 'Election & Representation', 'Executive & Parliament', 'Judiciary', 'Freedom & Equality'],
    language: 'English',
    featured: false,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Humanities Council',
    whatYoullLearn: [
      'Philosophy and making of the Indian Constitution by the Constituent Assembly',
      'Fundamental Rights (Articles 14 to 32) and Directive Principles of State Policy (DPSP)',
      'First-Past-The-Post (FPTP) system vs Proportional Representation system',
      'Judicial review, Public Interest Litigation (PIL), and judicial independence',
      'Theories of freedom (negative vs positive liberty), equality of opportunity, and social justice'
    ],
    tableOfContents: [
      'Chapter 1: Constitution: Why and How?',
      'Chapter 2: Rights in the Indian Constitution (Fundamental Rights & DPSP)',
      'Chapter 3: Election and Representation (Electoral Systems & Reform)',
      'Chapter 4: The Executive (President, Prime Minister & Civil Services)',
      'Chapter 5: The Legislature (Bicameralism, Law-Making Process)',
      'Chapter 6: The Judiciary (Supreme Court, Judicial Activism & PIL)',
      'Chapter 7: Federalism (Centre-State Relations & Autonomy)',
      'Chapter 8: Political Theory: An Introduction',
      'Chapter 9: Freedom (Liberty) & Harm Principle',
      'Chapter 10: Equality & Affirmative Action',
      'Chapter 11: Social Justice (John Rawls Theory of Justice)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: Rights in the Indian Constitution',
        summary: 'In-depth analysis of the six Fundamental Rights, Article 32 (Right to Constitutional Remedies as the heart and soul of the Constitution), Writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto), and the relationship with Directive Principles of State Policy.',
        keyPoints: [
          'Fundamental Rights are enforceable in courts, while DPSPs are non-justiciable directives for policymakers.',
          'Article 21 (Right to Life and Personal Liberty) has been expanded by the Supreme Court to include right to privacy and clean environment.',
          'Writs provide immediate legal relief against unauthorized state action.'
        ]
      }
    ],
    studyNotes: [
      'Key Case Law: Kesavananda Bharati case (1973) established the Basic Structure doctrine of the Indian Constitution.',
      'Philosophical Thinker: John Stuart Mill formulated the Harm Principle in his essay "On Liberty".'
    ],
    description: 'An authoritative study guide for Class 11 Political Science combining the practical workings of the Indian Constitution with deep political philosophy.',
    shortDescription: 'Class 11 Political Science guide covering the Indian Constitution, Judiciary, Parliament, and political theory.'
  },

  // ==========================================
  // CLASS 12 BOOKS
  // ==========================================
  {
    id: 'class12-physics-electromagnetism',
    title: 'Class 12 Physics: Electromagnetism, Optics & Modern Physics',
    subtitle: 'Full Derivation Compendium, Circuit Laws, Wave Optics & Semiconductor Physics',
    author: 'Dr. V. K. Malhotra & Prof. Ramesh K.',
    publisher: 'HK VELORA Academic Press',
    category: 'Student & Education',
    subcategory: 'Class 12',
    schoolClass: 'Class 12',
    stream: 'Science',
    subject: 'Physics',
    bookType: 'Textbook',
    pages: 450,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Advanced',
    rating: 5.0,
    reviewCount: 789,
    badge: '100% Board Derivations',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-indigo-700 to-violet-950',
    tags: ['Class 12', 'Physics', 'Electrostatics', 'Magnetism', 'Optics', 'Semiconductors', 'Science Stream', 'Board Exam'],
    topics: ['Electric Charges & Fields', 'Gauss’s Law', 'Current Electricity', 'Moving Charges & Magnetism', 'EMI & AC', 'Ray & Wave Optics', 'Semiconductors'],
    language: 'English',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Authorized Academic Release',
    licenseType: 'HK VELORA Open Academic License',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Senior Secondary Academic Cell',
    whatYoullLearn: [
      'Gauss’s law applications: electric field due to infinitely long wire, plane sheet, and spherical shell',
      'Kirchhoff’s circuit rules, Wheatstone bridge condition, and meter bridge calculations',
      'Biot-Savart law, Ampere’s circuital law, and force between two parallel current-carrying conductors',
      'Faraday’s laws of EMI, Lenz’s law, transformer efficiency, and alternating current LCR circuits',
      'Huygens’ wave principle, Young’s double-slit experiment (YDSE) fringe width derivation, and p-n junction diodes'
    ],
    tableOfContents: [
      'Chapter 1: Electric Charges and Fields (Coulomb’s Law & Gauss’s Law)',
      'Chapter 2: Electrostatic Potential and Capacitance',
      'Chapter 3: Current Electricity (Ohm’s Law, Drift Velocity, Kirchhoff’s Rules)',
      'Chapter 4: Moving Charges and Magnetism (Biot-Savart, Cyclotron, Solenoid)',
      'Chapter 5: Magnetism and Matter (Earth’s Magnetism & Magnetic Materials)',
      'Chapter 6: Electromagnetic Induction (Faraday & Lenz’s Law)',
      'Chapter 7: Alternating Current (LCR Series Resonance & Transformers)',
      'Chapter 8: Electromagnetic Waves & EM Spectrum',
      'Chapter 9: Ray Optics and Optical Instruments (Lens Maker’s Formula, Microscopes)',
      'Chapter 10: Wave Optics (Huygens Principle, Interference & YDSE)',
      'Chapter 11: Dual Nature of Radiation and Matter (Photoelectric Effect)',
      'Chapter 12: Atoms & Nuclei (Bohr Model & Nuclear Binding Energy)',
      'Chapter 13: Semiconductor Electronics (p-n Diode, Rectifiers & Logic Gates)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Electric Charges and Fields',
        summary: 'Quantization and conservation of charge, vector form of Coulomb’s law, electric field lines, electric dipole moment, torque on dipole in uniform field, flux definition, and Gauss’s law with step-by-step spherical and cylindrical symmetry proofs.',
        keyPoints: [
          'Gauss’s Law states total flux through a closed surface equals q_enclosed / ε0.',
          'Electric field inside a uniformly charged conducting spherical shell is strictly zero.',
          'Torque on an electric dipole τ = p × E; Potential energy U = -p · E.'
        ]
      },
      {
        title: 'Chapter 7: Alternating Current',
        summary: 'Phasor diagrams for pure R, L, and C circuits. Analysis of series LCR circuit, impedance triangle Z = sqrt(R^2 + (XL - XC)^2), condition for electrical resonance ω0 = 1/sqrt(LC), Q-factor, power factor cos φ, and step-up/step-down transformer principle.',
        keyPoints: [
          'At resonance, inductive reactance equals capacitive reactance (XL = XC), making impedance minimum (Z = R).',
          'Current and voltage are in phase at resonance; power dissipated is maximum.',
          'Transformer turns ratio: Vs / Vp = Ns / Np = Ip / Is.'
        ]
      }
    ],
    studyNotes: [
      'Must-Know 5-Mark Derivations: Lens Maker’s formula, YDSE fringe width β = λD/d, and LCR circuit impedance using phasors.',
      'Semiconductor Tip: In forward bias, barrier potential decreases and depletion layer narrows; reverse bias widens the barrier.'
    ],
    description: 'The definitive Class 12 Physics companion featuring all board-prescribed derivations, circuit diagrams, ray optics figures, and exemplar numerical problems.',
    shortDescription: 'Complete Class 12 Physics textbook with all board derivations, circuit laws, optics, and modern physics.'
  },
  {
    id: 'class12-mathematics-calculus',
    title: 'Class 12 Mathematics: Calculus, Vectors & 3D Geometry',
    subtitle: 'Matrices, Determinants, Integrals, Differential Equations & Probability Distributions',
    author: 'Prof. Ramesh K. & HK Math Council',
    publisher: 'HK VELORA Academic Press',
    category: 'Student & Education',
    subcategory: 'Class 12',
    schoolClass: 'Class 12',
    stream: 'Science',
    subject: 'Mathematics',
    bookType: 'Textbook',
    pages: 420,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewCount: 610,
    badge: 'Calculus Intensive',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-800 to-indigo-950',
    tags: ['Class 12', 'Mathematics', 'Calculus', 'Integrals', 'Vectors', '3D Geometry', 'Board Exam'],
    topics: ['Relations & Functions', 'Matrices & Determinants', 'Continuity & Differentiability', 'Integrals (Definite & Indefinite)', 'Differential Equations', 'Vector Algebra', '3D Geometry', 'Probability'],
    language: 'English',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Authorized Academic Release',
    licenseType: 'HK VELORA Open Academic License',
    permissionStatus: 'Verified Free Access',
    source: 'National Mathematics Educators Forum',
    whatYoullLearn: [
      'Equivalence relations, bijective functions, and principal value branches of inverse trigonometric functions',
      'Matrix inversion using adjoint and solving systems of linear equations using matrix method',
      'Indefinite and definite integrals, integration by parts, partial fractions, and King’s property',
      'Vector and Cartesian equations of lines in 3D space, shortest distance between skew lines',
      'Bayes’ Theorem, conditional probability, and random variables with probability distributions'
    ],
    tableOfContents: [
      'Chapter 1: Relations and Functions (Equivalence, One-One, Onto)',
      'Chapter 2: Inverse Trigonometric Functions',
      'Chapter 3: Matrices (Operations, Transpose, Symmetric & Skew-symmetric)',
      'Chapter 4: Determinants (Minors, Cofactors, Adjoint & Inverses)',
      'Chapter 5: Continuity and Differentiability (Chain Rule, Logarithmic Diff)',
      'Chapter 6: Applications of Derivatives (Increasing/Decreasing, Maxima/Minima)',
      'Chapter 7: Integrals (Standard Formulas, Substitution, Parts, Partial Fractions)',
      'Chapter 8: Applications of Integrals (Area Under Curves)',
      'Chapter 9: Differential Equations (Order, Degree, Variable Separable, Linear DE)',
      'Chapter 10: Vector Algebra (Dot and Cross Products)',
      'Chapter 11: Three-Dimensional Geometry (Direction Cosines, Shortest Distance)',
      'Chapter 12: Linear Programming (Corner Point Method)',
      'Chapter 13: Probability (Conditional, Multiplication Theorem, Bayes’ Theorem)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 7: Integrals',
        summary: 'Comprehensive treatment of indefinite integration techniques (substitution, partial fractions, integration by parts ∫ u v dx = u ∫ v dx - ∫ [u’ ∫ v dx] dx), definite integral as limit of sum, and fundamental properties of definite integrals.',
        keyPoints: [
          'Property 4 (King’s Property): ∫[0 to a] f(x) dx = ∫[0 to a] f(a - x) dx solves 90% of tricky trigonometric definite integrals.',
          'Integration by parts order rule: ILATE (Inverse, Logarithmic, Algebraic, Trigonometric, Exponential).',
          'Standard rational forms: 1 / (x^2 + a^2), 1 / sqrt(a^2 - x^2).'
        ]
      }
    ],
    studyNotes: [
      'High-Scoring Section: 3D Geometry shortest distance between lines r = a1 + λ b1 and r = a2 + μ b2 is |(b1 × b2) · (a2 - a1)| / |b1 × b2|.',
      'Bayes’ Theorem Strategy: Clearly define partition events E1, E2 and the observed outcome event A before calculating P(E1|A).'
    ],
    description: 'High-level calculus and 3D geometry guide crafted specifically for Class 12 board candidates and engineering entrance aspirants.',
    shortDescription: 'Class 12 Mathematics textbook covering calculus, matrices, vectors, 3D geometry, and probability.'
  },
  {
    id: 'class12-economics-macro',
    title: 'Class 12 Economics: Introductory Macroeconomics & Indian Economic Development',
    subtitle: 'National Income Accounting, Central Banking, Fiscal Budget & Post-1991 Economic Reforms',
    author: 'Prof. Ananya Sen & HK Commerce Cell',
    publisher: 'HK VELORA Commerce Press',
    category: 'Student & Education',
    subcategory: 'Class 12',
    schoolClass: 'Class 12',
    stream: 'Commerce',
    subject: 'Economics',
    bookType: 'Study Guide',
    pages: 350,
    format: 'PDF + Interactive Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewCount: 420,
    badge: 'Case Studies Included',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-600 to-rose-900',
    tags: ['Class 12', 'Economics', 'Macroeconomics', 'Commerce Stream', 'Humanities', 'National Income', 'Banking', 'Budget'],
    topics: ['National Income', 'Money & Banking', 'Income Determination', 'Government Budget', 'Balance of Payments', 'Indian Economic Reforms'],
    language: 'Bilingual (Hindi + English)',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Authorized Academic Release',
    licenseType: 'HK VELORA Open Academic License',
    permissionStatus: 'Verified Free Access',
    source: 'National Council of Economic Education',
    whatYoullLearn: [
      'National income aggregates (GDP, GNP, NNP at market price vs factor cost) via Value Added, Income, and Expenditure methods',
      'Money creation process by commercial banks and RBI monetary policy instruments (Repo rate, CRR, SLR, Open Market Operations)',
      'Keynesian aggregate demand and aggregate supply, investment multiplier k = 1 / (1 - MPC)',
      'Government budget classification: Revenue vs Capital receipts, Fiscal deficit significance',
      'Indian economy post-1991 LPG reforms (Liberalization, Privatization, Globalization) and rural development'
    ],
    tableOfContents: [
      'Chapter 1: Circular Flow of Income & Basic Macro Concepts',
      'Chapter 2: National Income Aggregates & Measurement Methods',
      'Chapter 3: Money and Banking (Functions of Money, Credit Multiplier)',
      'Chapter 4: Determination of Income and Employment (Keynesian Model)',
      'Chapter 5: Government Budget and the Economy (Deficits & Objectives)',
      'Chapter 6: Balance of Payments & Foreign Exchange Rate',
      'Chapter 7: Indian Economy on the Eve of Independence',
      'Chapter 8: Economic Reforms Since 1991 (LPG Policies)',
      'Chapter 9: Current Challenges Facing Indian Economy (Poverty, Human Capital, Rural Development)',
      'Chapter 10: Comparative Development Experiences of India, China and Pakistan'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: National Income Aggregates & Measurement Methods',
        summary: 'Differentiating intermediate goods from final goods, gross vs net investment, domestic territory concept, factor cost vs market price, and detailed numerical walkthroughs of Value Added Method, Income Method, and Expenditure Method.',
        keyPoints: [
          'GDP at MP = Compensation of Employees + Operating Surplus + Mixed Income + Depreciation + Net Indirect Taxes.',
          'Transfer payments (e.g. old age pensions, gifts) are strictly excluded from national income calculation.',
          'Real GDP accounts for inflation by evaluating output at constant base year prices.'
        ]
      }
    ],
    studyNotes: [
      'Monetary Policy Shortcut: To curb inflation, RBI increases Repo Rate and Cash Reserve Ratio (CRR) to contract money supply.',
      'Deficit Formula: Fiscal Deficit = Total Expenditure - Total Receipts excluding borrowings.'
    ],
    description: 'Comprehensive Class 12 Macroeconomics and Indian Economy handbook balancing analytical numerical models with historical development case studies.',
    shortDescription: 'Class 12 Macroeconomics and Indian Economic Development study guide with national income formulas and banking mechanisms.'
  },
  {
    id: 'class12-history-themes',
    title: 'Class 12 History: Themes in Indian History (Vols I, II & III)',
    subtitle: 'Harappan Civilization, Bhakti-Sufi Traditions, Vijayanagara Empire & The Nationalist Movement',
    author: 'Prof. Ramesh Chandra & HK History Forum',
    publisher: 'HK VELORA Humanities Series',
    category: 'Student & Education',
    subcategory: 'Class 12',
    schoolClass: 'Class 12',
    stream: 'Humanities / Arts',
    subject: 'History',
    bookType: 'Textbook',
    pages: 380,
    format: 'PDF + Digital Reader',
    difficulty: 'Intermediate',
    rating: 4.8,
    reviewCount: 295,
    badge: 'Source-Based Questions',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-800 to-yellow-950',
    tags: ['Class 12', 'History', 'Humanities', 'Harappa', 'Bhakti Movement', 'Vijayanagara', 'National Movement', 'UPSC'],
    topics: ['Bricks, Beads & Bones', 'Kings, Farmers & Towns', 'Kinship & Caste', 'Thinkers & Stupas', 'Travellers Accounts', 'Bhakti-Sufi', 'Vijayanagara', 'Rebels & Raj 1857', 'Mahatma Gandhi'],
    language: 'English',
    featured: false,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'National Humanities & Archaeological Research Trust',
    whatYoullLearn: [
      'Harappan urban planning, drainage systems, craft production at Chanhudaro, and theories of decline',
      'Mahajanapadas, Mauryan administration, Asoka’s Dhamma, and numismatic evidence',
      'Bhakti-Sufi traditions (Alvars, Nayanars, Kabir, Mirabai, Guru Nanak, and Chishti silsila)',
      'Architecture and water harvesting in the imperial capital of Vijayanagara',
      '1857 revolt causes and patterns, Mahatma Gandhi’s mass mobilization, and Constituent Assembly debates'
    ],
    tableOfContents: [
      'Theme 1: Bricks, Beads and Bones (The Harappan Civilisation)',
      'Theme 2: Kings, Farmers and Towns (Early States and Economies c. 600 BCE - 600 CE)',
      'Theme 3: Kinship, Caste and Class (Early Societies c. 600 BCE - 600 CE)',
      'Theme 4: Thinkers, Beliefs and Buildings (Cultural Developments - Sanchi Stupa)',
      'Theme 5: Through the Eyes of Travellers (Al-Biruni, Ibn Battuta, Francois Bernier)',
      'Theme 6: Bhakti-Sufi Traditions (Religious Beliefs & Devotional Texts)',
      'Theme 7: An Imperial Capital: Vijayanagara',
      'Theme 8: Peasants, Zamindars and the State (Agrarian Society & Mughal Empire)',
      'Theme 9: Colonialism and the Countryside (Official Archives & Permanent Settlement)',
      'Theme 10: Rebels and the Raj (1857 Revolt and Its Representations)',
      'Theme 11: Mahatma Gandhi and the Nationalist Movement (Civil Disobedience & Beyond)',
      'Theme 12: Framing the Constitution (The Beginning of a New Era)'
    ],
    chaptersPreview: [
      {
        title: 'Theme 1: Bricks, Beads and Bones (The Harappan Civilisation)',
        summary: 'Architectural sophistication of Mohenjo-Daro (Citadel vs Lower Town, Great Bath, planned drainage system), subsistence strategies, procurement of raw materials (Lapis lazuli from Shortughai, Carnelian from Bharuch), and script undeciphered characteristics.',
        keyPoints: [
          'Standardized ratio of brick dimensions: length = 4 × height, breadth = 2 × height.',
          'Drainage system laid out first; houses built along the grid grid-iron pattern street layout.',
          'Burial practices show moderate grave goods; Harappans did not believe in burying immense wealth.'
        ]
      }
    ],
    studyNotes: [
      'Source-Based Question Strategy: Read the excerpt title and context first; extract implicit cultural assumptions rather than paraphrasing.',
      'Key Timeline: 1921 discovery of Harappa by Daya Ram Sahni; 1924 announcement of Indus Valley discovery by Sir John Marshall.'
    ],
    description: 'In-depth historical exploration aligned with Class 12 NCERT curriculum, integrating archaeological reports, traveler accounts, and primary source excerpts.',
    shortDescription: 'Class 12 Themes in Indian History covering ancient civilizations, medieval empires, and freedom struggle.'
  }
];
