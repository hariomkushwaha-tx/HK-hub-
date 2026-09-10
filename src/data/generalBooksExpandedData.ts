import { EBookItem } from '../types';

export const GENERAL_BOOKS_EXPANDED_DATA: EBookItem[] = [
  // ==========================================
  // DIGITAL SKILLS & PRACTICAL HOW-TO GUIDES
  // ==========================================
  {
    id: 'excel-sheets-mastery-guide',
    title: 'Excel & Google Sheets Mastery: From Basics to Advanced Data Analysis',
    subtitle: 'VLOOKUP, XLOOKUP, INDEX-MATCH, Pivot Tables, Conditional Formatting & Power Query',
    author: 'CA Rajesh Singhania & HK Productivity Wing',
    publisher: 'HK VELORA Open Education Series',
    category: 'Digital Skills & Practical Guides',
    subcategory: 'Spreadsheets & Data',
    bookType: 'Handbook',
    pages: 280,
    format: 'E-Book + Downloadable Practice Workbooks',
    difficulty: 'All Levels',
    rating: 4.95,
    reviewCount: 520,
    badge: 'Career Essential',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-emerald-600 to-teal-800',
    tags: ['Excel', 'Google Sheets', 'XLOOKUP', 'Pivot Tables', 'Formulas', 'Data Analysis', 'Productivity'],
    topics: ['Cell Referencing (Relative vs Absolute $A$1)', 'Essential Functions (SUMIFS, COUNTIFS, AVERAGEIFS)', 'Lookup Mastery (VLOOKUP vs XLOOKUP vs INDEX-MATCH)', 'Pivot Tables & Dynamic Slicers', 'Conditional Formatting Rules', 'Data Validation & Dropdowns', 'Data Cleaning with Power Query', 'Keyboard Shortcuts for 10x Speed'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Professional Skill Development Forum',
    whatYoullLearn: [
      'Understand absolute ($A$1), mixed ($A1, A$1), and relative (A1) cell references to eliminate formula copy errors',
      'Replace obsolete VLOOKUP with modern bidirectional XLOOKUP with built-in error handling (if_not_found)',
      'Summarize 50,000+ row datasets in seconds using Pivot Tables, calculated fields, and interactive slicers',
      'Clean messy datasets (trim whitespace, split text columns, remove duplicate records) using Power Query',
      'Build dynamic financial models, student grade sheets, sales dashboards, and inventory trackers'
    ],
    tableOfContents: [
      'Chapter 1: The Spreadsheet Interface & Essential Navigation Shortcuts (Ctrl, Shift, Arrow Keys)',
      'Chapter 2: Formulas & Cell Referencing: The Power of Absolute ($) References',
      'Chapter 3: Essential Mathematical & Statistical Functions (SUM, AVERAGE, ROUND, SUMIFS)',
      'Chapter 4: Logical Functions: IF, IFS, AND, OR, NOT & Nested Logic',
      'Chapter 5: Lookup Functions: From VLOOKUP Limitations to Modern XLOOKUP & INDEX-MATCH',
      'Chapter 6: Text & Date Manipulation: CONCAT, TEXTSPLIT, LEFT, RIGHT, TRIM, DATEDIF',
      'Chapter 7: Data Validation, Error Trapping (IFERROR) & Dynamic Dropdown Menus',
      'Chapter 8: Data Visualisation: Sparklines, Conditional Formatting Heatmaps & Modern Charts',
      'Chapter 9: Pivot Tables & Pivot Charts: Instant Summaries, Slicers & Calculated Items',
      'Chapter 10: Introduction to Power Query: Automated Data Extraction, Cleaning & Transformation'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 5: Lookup Functions - VLOOKUP vs Modern XLOOKUP',
        summary: 'Detailed explanation of why XLOOKUP revolutionizes spreadsheet workflows. Unlike VLOOKUP, which requires static column index counting and only looks from left to right, XLOOKUP searches bidirectionally, defaults to exact match, and provides native fallback values.',
        keyPoints: [
          'VLOOKUP vulnerability: inserting a column in the lookup range breaks hardcoded column index numbers.',
          'XLOOKUP syntax: =XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode]).',
          'INDEX-MATCH combination remains universally supported across all versions of Excel and Google Sheets.'
        ],
        codeSnippet: `// Modern XLOOKUP Formula Example:
=XLOOKUP(F2, A2:A500, D2:D500, "Employee Not Found", 0)

// Equivalent INDEX-MATCH Formula:
=INDEX(D2:D500, MATCH(F2, A2:A500, 0))`,
        realWorldUse: 'Daily utility for accountants, financial analysts, operations managers, research students, and administrators.'
      }
    ],
    studyNotes: [
      'Press F4 in Excel while editing a cell formula to quickly toggle between relative (A1), absolute ($A$1), and mixed ($A1, A$1) references.',
      'Always structure your raw data as a flat database table (columns as distinct fields, rows as records) without merged cells before creating Pivot Tables.'
    ]
  },
  {
    id: 'technical-writing-documentation-guide',
    title: 'Technical Writing, API Documentation & Developer Guides Handbook',
    subtitle: 'From Markdown & OpenAPI/Swagger to Architecture Decision Records (ADRs) & Clear Communication',
    author: 'Er. Hariom & HK Developer Relations Team',
    publisher: 'HK VELORA Open Technology Series',
    category: 'Digital Skills & Practical Guides',
    subcategory: 'Technical Writing',
    bookType: 'Guide',
    pages: 240,
    format: 'E-Book + Real Documentation Templates',
    difficulty: 'All Levels',
    rating: 4.91,
    reviewCount: 310,
    badge: 'Authoritative Guide',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-700 to-slate-900',
    tags: ['Technical Writing', 'Documentation', 'API Specs', 'OpenAPI', 'Markdown', 'GitBook', 'Developer Docs'],
    topics: ['The Principles of Technical Clarity', 'Markdown & GitHub Flavored Markdown (GFM)', 'Information Architecture (Diátaxis Framework: Tutorials, How-tos, Reference, Explanation)', 'Writing REST API Endpoints with OpenAPI / Swagger', 'Creating Architecture Decision Records (ADRs)', 'Writing Effective README.md Files for Open Source', 'Grammar, Passive Voice Elimination & Inclusive Language'],
    language: 'English with Hindi Explanations',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-SA 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Developer Documentation Program',
    whatYoullLearn: [
      'Adopt the Diátaxis documentation framework used by top software engineering organizations',
      'Format production-ready README files that attract GitHub stars and contributors',
      'Write machine-readable OpenAPI 3.0 / Swagger JSON/YAML specifications for REST APIs',
      'Formulate Architecture Decision Records (ADRs) documenting architectural trade-offs',
      'Transform complex technical jargon into concise, active-voice instructions that users love'
    ],
    tableOfContents: [
      'Chapter 1: The Role of the Technical Writer: Bridging Engineers and End Users',
      'Chapter 2: The Diátaxis Framework: Tutorials, How-To Guides, Technical Reference & Concepts',
      'Chapter 3: Mastering Markdown, GFM Tables, Mermaid.js Diagrams & Callout Blocks',
      'Chapter 4: The Perfect GitHub README.md: Badges, Quickstart, Architecture & License',
      'Chapter 5: Documenting REST APIs: Endpoints, Request Headers, Status Codes & Error Payloads',
      'Chapter 6: OpenAPI 3.0 & Swagger: Generating Interactive API Playgrounds',
      'Chapter 7: Writing Architecture Decision Records (ADRs): Context, Decision & Consequences',
      'Chapter 8: Editing for Precision: Eliminating Fluff, Jargon, Passive Voice & Ambiguity'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: The Diátaxis Documentation Framework',
        summary: 'Presents the industry-standard four-quadrant documentation system: Tutorials (learning-oriented), How-To Guides (problem-oriented), Reference (information-oriented), and Explanation (understanding-oriented).',
        keyPoints: [
          'Tutorials guide a beginner through a completed exercise like a mentor.',
          'How-To Guides help a user accomplish a specific task with concise, ordered steps.',
          'Reference manuals provide dry, complete, accurate descriptions of properties and parameters.',
          'Explanations illuminate the underlying architectural reasoning and context.'
        ],
        codeSnippet: `ADR (Architecture Decision Record) Template:
# ADR-001: Adopt PostgreSQL over MongoDB for Core User Ledger

## Context
Our transaction ledger requires strict ACID guarantees and complex relational joins.

## Decision
We will use PostgreSQL with Prisma ORM.

## Consequences
- Positive: Guaranteed transactional consistency and zero duplicate payments.
- Negative: Schema migrations require careful planning during deployments.`,
        realWorldUse: 'Essential skill for software engineers, product managers, open source maintainers, and technical writers.'
      }
    ],
    studyNotes: [
      'Always write technical instructions in the imperative mood and active voice ("Click the button", not "The button should be clicked by the user").',
      'Always include working, copyable code samples with explicit prerequisites and sample outputs.'
    ]
  },

  // ==========================================
  // SCIENCE & MATHEMATICS
  // ==========================================
  {
    id: 'applied-calculus-engineers-data-science',
    title: 'Applied Calculus for Engineers & Data Scientists',
    subtitle: 'Limits, Continuous Functions, Derivatives, Integrals, Differential Equations & Gradient Descent',
    author: 'Prof. Ramesh K. & HK Mathematics Team',
    publisher: 'HK VELORA Open Education Series',
    category: 'Science & Mathematics',
    subcategory: 'Higher Mathematics',
    bookType: 'Handbook',
    pages: 380,
    format: 'E-Book + Interactive Desmos Graph Formulas',
    difficulty: 'Advanced',
    rating: 4.97,
    reviewCount: 460,
    badge: 'STEM Masterwork',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-800 to-indigo-950',
    tags: ['Calculus', 'Mathematics', 'Derivatives', 'Integrals', 'Differential Equations', 'Machine Learning', 'Data Science'],
    topics: ['Epsilon-Delta Continuity', 'Derivatives & Chain Rule', 'Mean Value Theorem', 'Definite & Indefinite Integrals', 'Fundamental Theorem of Calculus', 'Multivariable Calculus & Partial Derivatives', 'Gradient Vectors & Hessian Matrices', 'Gradient Descent in Machine Learning', 'Ordinary Differential Equations (ODEs)'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Advanced Mathematics Forum',
    whatYoullLearn: [
      'Understand the rigorous foundation of limits and differential rates of change',
      'Chain rule, Product rule, Quotient rule, and implicit differentiation techniques',
      'Integration methods: Substitution, Integration by Parts (ILATE rule), and Partial Fractions',
      'Calculate areas between curves and volumes of revolution using the Fundamental Theorem of Calculus',
      'Multivariable partial derivatives, directional derivatives, and gradient vector calculations',
      'Mathematical derivation of how Gradient Descent minimizes cost functions in neural networks'
    ],
    tableOfContents: [
      'Chapter 1: The Geometric & Physical Intuition of Calculus (Newton & Leibniz)',
      'Chapter 2: Limits, Continuity & Indeterminate Forms (L\'Hôpital\'s Rule)',
      'Chapter 3: Differentiation: First Principles, Power Rule, Trigonometric & Exponential Derivatives',
      'Chapter 4: The Chain Rule & Implicit Differentiation',
      'Chapter 5: Applications of Derivatives: Tangents, Normals, Maxima-Minima & Optimization',
      'Chapter 6: Indefinite Integration: Standard Forms & Substitution Techniques',
      'Chapter 7: Integration by Parts (ILATE rule) & Partial Fractions Breakdown',
      'Chapter 8: The Definite Integral & The Fundamental Theorem of Calculus',
      'Chapter 9: Differential Equations: Separation of Variables & Integrating Factor (IF)',
      'Chapter 10: Multivariable Calculus: Partial Derivatives, Gradients & Machine Learning Loss Minimization'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 10: Multivariable Calculus & Gradient Descent in AI',
        summary: 'Bridges pure mathematical calculus with modern artificial intelligence. Explains how partial derivatives form the gradient vector grad(f), which always points in the direction of steepest ascent, and how stepping in the opposite direction (-alpha * grad(f)) iteratively optimizes machine learning models.',
        keyPoints: [
          'The gradient vector nabla(f) is the collection of all first-order partial derivatives with respect to each independent variable.',
          'Learning rate alpha dictates the step size: too large leads to divergence; too small results in slow convergence or entrapment in local saddle points.',
          'Hessian matrix provides second-order partial derivative information, determining local convexity or concavity.'
        ],
        codeSnippet: `Gradient Descent Update Rule:
theta_new = theta_old - alpha * nabla(J(theta))

Where:
theta = model parameter weights vector
alpha = learning rate hyperparameter
nabla(J(theta)) = gradient of the cost function with respect to theta`,
        realWorldUse: 'Forms the core optimization engine for artificial intelligence, orbital mechanics, structural engineering, and quantitative finance.'
      }
    ],
    studyNotes: [
      'ILATE rule priority for Integration by Parts: Inverse Trig, Logarithmic, Algebraic, Trigonometric, Exponential.',
      'Remember that for a function to be differentiable at x = c, it MUST first be continuous at x = c; however, continuity does not guarantee differentiability (e.g. f(x) = |x| at x = 0 has a sharp corner).'
    ]
  },
  {
    id: 'linear-algebra-matrix-theory-ml',
    title: 'Linear Algebra & Matrix Theory for Machine Learning',
    subtitle: 'Vectors, Vector Spaces, Matrix Transformations, Eigenvalues, SVD & PCA Dimensionality Reduction',
    author: 'Prof. Ramesh K. & HK Mathematics Team',
    publisher: 'HK VELORA Open Education Series',
    category: 'Science & Mathematics',
    subcategory: 'Higher Mathematics',
    bookType: 'Handbook',
    pages: 350,
    format: 'E-Book + Interactive Python Matrix Scripts',
    difficulty: 'Advanced',
    rating: 4.96,
    reviewCount: 430,
    badge: 'AI Mathematical Core',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-indigo-700 to-slate-900',
    tags: ['Linear Algebra', 'Mathematics', 'Matrices', 'Vectors', 'Eigenvalues', 'SVD', 'Machine Learning'],
    topics: ['Vector Operations & Dot Products', 'Matrix Multiplication & Inverses', 'Linear Transformations & Basis Change', 'Determinants & Geometric Volume', 'Eigenvalues and Eigenvectors (A v = lambda v)', 'Diagonalization & Spectral Theorem', 'Singular Value Decomposition (SVD)', 'Principal Component Analysis (PCA)'],
    language: 'English with Hindi Explanations',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Computational Mathematics Forum',
    whatYoullLearn: [
      'Geometric interpretation of vectors, linear combinations, span, and linear independence',
      'Matrices as linear transformations stretching, rotating, and shearing space',
      'Determinants as scaling factors of area in 2D and volume in 3D',
      'Compute Eigenvalues and Eigenvectors: A * v = lambda * v, revealing invariant transformation axes',
      'Singular Value Decomposition (SVD): A = U * Sigma * V^T for data compression and latent semantic analysis',
      'Implement Principal Component Analysis (PCA) to project high-dimensional data onto principal axes'
    ],
    tableOfContents: [
      'Chapter 1: Vectors in R^n: Dot Products, Angles, Projections & Orthogonality',
      'Chapter 2: Systems of Linear Equations: Gaussian Elimination & Row Echelon Form',
      'Chapter 3: Matrix Algebra: Multiplication, Transposes & Invertibility',
      'Chapter 4: Vector Spaces, Subspaces, Null Space & Column Space (Rank-Nullity Theorem)',
      'Chapter 5: Linear Transformations & The Geometry of Matrices',
      'Chapter 6: Determinants: Properties, Cofactor Expansions & Cramer\'s Rule',
      'Chapter 7: Eigenvalues and Eigenvectors: The Characteristic Equation det(A - lambda I) = 0',
      'Chapter 8: Symmetric Matrices, Orthogonal Diagonalization & The Spectral Theorem',
      'Chapter 9: Singular Value Decomposition (SVD): Mathematics & Image Compression',
      'Chapter 10: Principal Component Analysis (PCA): Dimensionality Reduction in Python'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 7: Eigenvalues & Eigenvectors: Uncovering Invariant Axes',
        summary: 'Deep dive into one of the most powerful concepts in modern science. Explains that when a matrix transforms space, most vectors get knocked off their span; vectors that remain on their original span merely scaled by a constant factor lambda are eigenvectors.',
        keyPoints: [
          'Eigenvalue equation: A * v = lambda * v, which can be rearranged to (A - lambda * I) * v = 0.',
          'For non-trivial solutions (v != 0), the matrix (A - lambda * I) must be singular, meaning its determinant must equal zero: det(A - lambda * I) = 0.',
          'Powers of a matrix: If A is diagonalizable (A = P * D * P^-1), then A^k = P * D^k * P^-1, allowing matrix exponentiation in O(1) diagonal operations.'
        ],
        codeSnippet: `import numpy as np

# Compute Eigenvalues and Eigenvectors in Python
A = np.array([[4, -2],
              [1,  1]])

eigenvalues, eigenvectors = np.linalg.eig(A)

print("Eigenvalues:", eigenvalues) # Output: [3., 2.]
print("Eigenvectors (Columns):\\n", eigenvectors)`,
        realWorldUse: 'Google PageRank algorithm, quantum state representation, facial recognition (Eigenfaces), and 3D computer graphics transformations.'
      }
    ],
    studyNotes: [
      'The trace of a square matrix equals the sum of its eigenvalues; the determinant equals the product of its eigenvalues.',
      'A matrix is invertible if and only if all its eigenvalues are non-zero.'
    ]
  },

  // ==========================================
  // GENERAL KNOWLEDGE & COMPETITIVE HISTORY
  // ==========================================
  {
    id: 'modern-indian-history-freedom-struggle',
    title: 'Modern Indian History & The Freedom Struggle (1857–1947)',
    subtitle: 'From the Revolt of 1857, Social Reforms & Congress Foundation to Gandhian Movements & Independence',
    author: 'Dr. Alok Verma & HK History Research Cell',
    publisher: 'HK VELORA Open Education Series',
    category: 'General Knowledge',
    subcategory: 'Indian History',
    bookType: 'Handbook',
    pages: 360,
    format: 'E-Book + Chronological Timeline Maps',
    difficulty: 'Intermediate',
    rating: 4.96,
    reviewCount: 490,
    badge: 'UPSC & SSC Classic',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-700 to-orange-950',
    tags: ['History', 'Indian History', 'Freedom Movement', 'UPSC', '1857 Revolt', 'Gandhi', 'Civil Services'],
    topics: ['Revolt of 1857 (Causes, Leaders, Legacy)', 'Socio-Religious Reform Movements (Raja Ram Mohan Roy, Swami Vivekananda)', 'Foundation of Indian National Congress (1885)', 'Moderates vs Extremists (Surat Split 1907)', 'Swadeshi Movement & Partition of Bengal (1905)', 'Advent of Mahatma Gandhi (Champaran, Kheda, Rowlatt)', 'Non-Cooperation Movement (1920-22) & Chauri Chaura', 'Civil Disobedience Movement (1930) & Dandi March', 'Quit India Movement (1942) & Indian National Army (INA)', 'Cabinet Mission & Indian Independence Act 1947'],
    language: 'Bilingual (Hindi + English)',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'National Archives of India & HK VELORA Historical Studies Forum',
    whatYoullLearn: [
      'Comprehensive chronological breakdown of India\'s freedom struggle from 1857 to 1947',
      'The socio-religious awakening: abolition of Sati, widow remarriage, and female education movements',
      'Ideological differences and synthesis between Moderate methods (Prayer, Petition, Protest) and Extremist direct action',
      'Mahatma Gandhi’s core philosophy: Satyagraha, Ahimsa, Swaraj, and mass mobilization strategies',
      'Subhas Chandra Bose, the Azad Hind Fauj (INA), and the Royal Indian Navy (RIN) Mutiny of 1946',
      'Partition dynamics: Mountbatten Plan, Radcliffe Line, and constitutional transition'
    ],
    tableOfContents: [
      'Chapter 1: The Great Revolt of 1857: Political, Economic, Military Causes & Immediate Sparks',
      'Chapter 2: Socio-Religious Reform Movements: Brahmo Samaj, Arya Samaj, Ramakrishna Mission & Aligarh Movement',
      'Chapter 3: Growth of National Consciousness & Foundation of Indian National Congress (1885)',
      'Chapter 4: The Moderate Era (1885-1905): Dadabhai Naoroji\'s "Drain of Wealth" Theory',
      'Chapter 5: The Extremist Era & Partition of Bengal: Swadeshi and Boycott Movements (1905-1908)',
      'Chapter 6: Revolutionary Nationalism: Bhagat Singh, Chandrashekhar Azad, Surya Sen & HSRA',
      'Chapter 7: The Gandhian Era Begins: Champaran, Kheda, Ahmedabad Mill Strike & Rowlatt Act',
      'Chapter 8: The Non-Cooperation Movement & Khilafat Agitation (1920-1922)',
      'Chapter 9: The Simon Commission, Nehru Report, Purna Swaraj Declaration (1929) & Dandi March',
      'Chapter 10: The Government of India Act 1935 & 1937 Provincial Elections',
      'Chapter 11: World War II, Cripps Mission & The Quit India Movement (1942)',
      'Chapter 12: Netaji Subhas Chandra Bose, Indian National Army (INA) & The RIN Revolt',
      'Chapter 13: The Cabinet Mission, Mountbatten Plan & Dawn of Freedom (15 August 1947)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 9: Purna Swaraj Declaration (1929) & The Historic Dandi March (1930)',
        summary: 'Examines the historic Lahore Session of the Indian National Congress presided over by Jawaharlal Nehru in December 1929, adopting the resolution for "Purna Swaraj" (Complete Independence), followed by Gandhi\'s meticulously planned 240-mile Salt Satyagraha from Sabarmati to Dandi.',
        keyPoints: [
          'On 26 January 1930, the Declaration of Independence pledge was recited across India, establishing the historic significance that led to selecting 26 January for the Indian Constitution in 1950.',
          'The Salt Tax was chosen because salt was an indispensable necessity of life for the poorest peasants, transforming a simple mineral into the ultimate symbol of British imperial injustice.',
          'Dandi March (12 March to 6 April 1930) mobilized massive participation across women, students, and rural workers, prompting global press coverage and the subsequent Gandhi-Irwin Pact.'
        ],
        codeSnippet: `Chronology Flashcard:
1928: Simon Commission arrives (Protests; death of Lala Lajpat Rai).
1929: Lahore Session passes Purna Swaraj resolution.
1930: Dandi Salt March commences (Civil Disobedience Movement).
1931: Gandhi-Irwin Pact; Second Round Table Conference.
1932: Communal Award & Poona Pact between Gandhi and Dr. B.R. Ambedkar.`,
        realWorldUse: 'Essential foundation for civil services examinations (UPSC CSE, State PSC), academic history, and civic awareness.'
      }
    ],
    studyNotes: [
      'Dadabhai Naoroji in his book "Poverty and Un-British Rule in India" put forward the groundbreaking "Drain of Wealth" theory, demonstrating the continuous drain of Indian resources to Britain without adequate economic return.',
      'The Poona Pact (1932) signed by Dr. B.R. Ambedkar and Madan Mohan Malaviya on behalf of Gandhi secured reserved seats for Depressed Classes within the general electorate rather than separate electorates.'
    ]
  },

  // ==========================================
  // STORIES & LITERATURE (CLASSICS IN PUBLIC DOMAIN)
  // ==========================================
  {
    id: 'godaan-munshi-premchand-classic',
    title: 'गोदान (Godaan) — मुंशी प्रेमचंद',
    subtitle: 'भारतीय कृषक जीवन, ग्रामीण समाज एवं मानवीय संवेदनाओं का कालजयी महाकाव्य',
    author: 'मुंशी प्रेमचंद (Munshi Premchand)',
    authorBio: 'मुंशी प्रेमचंद (1880-1936) आधुनिक हिंदी और उर्दू साहित्य के सर्वश्रेष्ठ कथाकार, उपन्यासकार एवं समाज सुधारक हैं।',
    publisher: 'HK VELORA Public Domain Literary Classics',
    category: 'Stories & Literature',
    subcategory: 'Hindi Classics',
    bookType: 'E-Book',
    pages: 440,
    format: 'E-Book + Digital Reader with Chapter Commentary',
    difficulty: 'Intermediate',
    rating: 4.99,
    reviewCount: 680,
    badge: 'Timeless Masterpiece',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-800 via-yellow-900 to-stone-900',
    tags: ['Premchand', 'Hindi Literature', 'Godaan', 'Classic', 'Novel', 'Public Domain', 'Hori', 'Dhania'],
    topics: ['होरी और धनिया का संघर्ष', 'गाय की अभिलाषा', 'ग्रामीण ऋणजाल एवं महाजनी शोषण', 'गोबर और झुनिया का प्रसंग', 'शहरी बनाम ग्रामीण जीवन (राय साहब, मालती, मेहता)', 'कर्तव्य, धर्म एवं सामाजिक मर्यादा'],
    language: 'Hindi',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Public Domain',
    licenseType: 'Public Domain Classic (Published 1936)',
    permissionStatus: 'Public Domain',
    source: 'Project Gutenberg & National Public Domain Hindi Archives',
    whatYoullLearn: [
      'उपन्यास सम्राट प्रेमचंद की यथार्थवादी शैली और भारतीय कृषक समाज की वास्तविक स्थिति का अनुभव',
      'होरी महतो के जीवन संघर्ष के माध्यम से ऋणग्रस्तता, स्वाभिमान और परंपराओं का द्वंद्व',
      'धनिया के साहसी, न्यायप्रिय और स्पष्टवादी चरित्र से नारी चेतना की अभिव्यक्ति',
      'राय साहब, प्रोफेसर मेहता और मालती के माध्यम से तत्कालीन शहरी बौद्धिक वर्ग की अंतर्विरोधपूर्ण मानसिकता'
    ],
    tableOfContents: [
      'प्रस्तावना: गोदान का रचनाकाल, महत्व एवं मुंशी प्रेमचंद की कालजयी दृष्टि',
      'अध्याय 1: होरी का राय साहब के यहाँ जाना और भोला से गाय लाने की इच्छा',
      'अध्याय 2: घर में पछाई गाय का आगमन और पूरे गाँव में कौतूहल',
      'अध्याय 3: ईर्ष्या की आग — भाई हीरा द्वारा गाय को विष देना',
      'अध्याय 4: गोबर और झुनिया का प्रेम प्रसंग एवं धनिया का अदम्य साहस',
      'अध्याय 5: गाँव की पंचायत, बिरादरी का दंड और होरी का और गहराता कर्ज',
      'अध्याय 6: शहरी जीवन का ताना-बाना — राय साहब, मिर्जा, मेहता और मालती',
      'अध्याय 7: गोबर का लखनऊ जाना और नई चेतना का उदय',
      'अध्याय 8: होरी का निरंतर पसीना, मजदूरी और अंतिम सांस',
      'अध्याय 9: अंतिम विदाई — "महाराज, घर में न गाय है, न बछिया, न पैसा... यही इनका गोदान है!"',
      'समीक्षा: गोदान की भाषा-शैली, मुहावरे एवं शाश्वत सामाजिक प्रासंगिकता'
    ],
    chaptersPreview: [
      {
        title: 'अध्याय 1: होरी की गाय की अभिलाषा व भोला से भेंट',
        summary: 'होरी महतो के मन में एक गाय रखने की चिर-अभिलाषा है। गाय केवल दुग्ध का साधन नहीं, बल्कि ग्रामीण समाज में प्रतिष्ठा, धार्मिक संतोष और कृषक की गरिमा का प्रतीक है। वह भोला अहीर से उधार पर गाय ले आता है।',
        keyPoints: [
          'होरी का चरित्र: अत्यधिक सीधा, स्वाभिमानी, धार्मिक मर्यादाओं में बंधा और निरंतर कर्ज से दबा हुआ भारतीय किसान।',
          'धनिया का यथार्थवाद: वह होरी के भोलेपन और चाटुकारिता का विरोध करती है और समाज के पाखंड को बेबाकी से उजागर करती है।',
          'प्रेमचंद का संदेश: कृषक के शोषण का कारण केवल जमींदार नहीं, बल्कि धर्म, बिरादरी, सूदखोर महाजन और पुलिस का संगठित चक्रव्यूह है।'
        ],
        codeSnippet: `अमर उद्धरण (Premchand):
"जिसके पेट में रोटी नहीं होती, उसके लिए मर्यादा और प्रतिष्ठा सब ढकोसला है।"
"धनिया ने कहा: महाराज, घर में न गाय है, न बछिया, न पैसा। यही पैसे हैं, यही इनका गोदान है।"`,
        realWorldUse: 'भारतीय समाज, ग्रामीण अर्थशास्त्र और उच्च स्तरीय हिंदी साहित्य के अध्ययन के लिए अपरिहार्य।'
      }
    ],
    studyNotes: [
      'गोदान को भारतीय ग्रामीण जीवन का महाकाव्य कहा जाता है क्योंकि इसमें किसान के जन्म से मृत्यु तक के संघर्ष का जीवंत दस्तावेज है।',
      'प्रोफेसर मेहता और मिस मालती का उपकथानक प्रेमचंद के नारी स्वतंत्रता और आदर्श मानव चरित्र के विचारों को प्रस्तुत करता है।'
    ]
  },
  {
    id: 'gitanjali-rabindranath-tagore-classic',
    title: 'गीतांजलि (Gitanjali: Song Offerings) — Rabindranath Tagore',
    subtitle: 'Nobel Prize in Literature (1913) Masterpiece: Timeless Philosophical & Spiritual Poetry',
    author: 'रबीन्द्रनाथ टैगोर (Rabindranath Tagore)',
    authorBio: 'Gurudev Rabindranath Tagore (1861-1941) was a visionary poet, philosopher, educator, and the first non-European to win the Nobel Prize in Literature in 1913.',
    publisher: 'HK VELORA Public Domain Literary Classics',
    category: 'Stories & Literature',
    subcategory: 'Poetry & Philosophy',
    bookType: 'E-Book',
    pages: 180,
    format: 'E-Book + Poetic Analysis & Commentary',
    difficulty: 'All Levels',
    rating: 4.98,
    reviewCount: 590,
    badge: 'Nobel Prize Winner',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-600 via-orange-800 to-stone-900',
    tags: ['Tagore', 'Gitanjali', 'Poetry', 'Nobel Prize', 'Literature', 'Public Domain', 'Philosophy'],
    topics: ['Where the Mind is Without Fear', 'The Infinite within the Finite', 'Bhakti and Divine Longing', 'Human Dignity & Freedom', 'Nature and Universal Harmony', 'Poetic Imagery and Symbolism'],
    language: 'Bilingual (English Translation & Original Hindi/Bengali Essence)',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Public Domain',
    licenseType: 'Public Domain Classic (Published 1912)',
    permissionStatus: 'Public Domain',
    source: 'Project Gutenberg & Nobel Foundation Public Archives',
    whatYoullLearn: [
      'Appreciate the profound spiritual and philosophical depth of Tagore\'s Nobel Prize winning poetry',
      'Deconstruct Poem 35 ("Where the Mind is Without Fear"): the ultimate prayer for fearless intellectual freedom',
      'Tagore\'s mystic vision: seeking divinity not in secluded temples, but in the sweat of the tiller and road-builder',
      'The lyrical musicality, metaphors of journey, river, dawn, and silent offerings that define Tagorean literature'
    ],
    tableOfContents: [
      'Introduction: Gurudev Rabindranath Tagore, W.B. Yeats\' Preface & The 1913 Nobel Prize',
      'Selection 1: The Endless Cycle of Life — "Thou hast made me endless, such is thy pleasure"',
      'Selection 2: Where the Mind is Without Fear (Song 35: The Ideal of Freedom)',
      'Selection 3: The True Temple of the Divine — "Leave this chanting and singing and telling of beads!"',
      'Selection 4: The Journey of the Seeker — Life as a Pilgrim\'s Voyage',
      'Selection 5: The Play of Children upon the Seashore of Worlds',
      'Selection 6: The Lotus Blossom: Awakening of the Soul in Silence',
      'Selection 7: Surrender and The Final Journey — Acceptance of Death as Completion',
      'Epilogue: The Philosophical Legacy of Tagore in Modern Global Thought'
    ],
    chaptersPreview: [
      {
        title: 'Song 35: Where the Mind is Without Fear (Chitto Jetha Bhayshunyo)',
        summary: 'One of the most celebrated poems in world literature. Written during the height of India\'s colonial struggle, it transcends political boundaries to articulate a universal aspiration for a society governed by truth, reason, and fearless inquiry.',
        keyPoints: [
          '"Where knowledge is free": Education accessible to all, unburdened by commercial barriers or social caste.',
          '"Where the world has not been broken up into fragments by narrow domestic walls": Rejection of sectarian, parochial, and communal prejudices.',
          '"Where the clear stream of reason has not lost its way into the dreary desert sand of dead habit": Championing rational thought over blind dogma.'
        ],
        codeSnippet: `Original English Translation by Rabindranath Tagore:
"Where the mind is without fear and the head is held high;
Where knowledge is free;
Where the world has not been broken up into fragments
By narrow domestic walls;
Where words come out from the depth of truth;
Where tireless striving stretches its arms towards perfection;
Where the clear stream of reason has not lost its way
Into the dreary desert sand of dead habit;
Where the mind is led forward by thee
Into ever-widening thought and action—
Into that heaven of freedom, my Father, let my country awake."`,
        realWorldUse: 'Inspirational cornerstone for public speeches, civil liberties, student ethics, and reflective philosophical essays.'
      }
    ],
    studyNotes: [
      'W.B. Yeats in his famous 1912 introduction wrote: "These lyrics... display in their thought a world I have dreamed of all my life long."',
      'In Song 11, Tagore proclaims: "He is there where the tiller is tilling the hard ground and where the pathmaker is breaking stones. He is with them in sun and in shower, and his garment is covered with dust."'
    ]
  },
  {
    id: 'jungle-book-rudyard-kipling-classic',
    title: 'The Jungle Book — Rudyard Kipling',
    subtitle: 'Classic Adventures of Mowgli, Bagheera, Baloo, Shere Khan & The Law of the Jungle',
    author: 'Rudyard Kipling',
    authorBio: 'Rudyard Kipling (1865-1936) was an English author and Nobel laureate whose vivid stories set in the forests of India captivated readers worldwide.',
    publisher: 'HK VELORA Public Domain Literary Classics',
    category: 'Stories & Literature',
    subcategory: 'World Classics',
    bookType: 'E-Book',
    pages: 240,
    format: 'E-Book + Digital Story Reader with Vocabulary Footnotes',
    difficulty: 'All Levels',
    rating: 4.94,
    reviewCount: 520,
    badge: 'Public Domain Classic',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-emerald-800 via-green-900 to-slate-950',
    tags: ['Jungle Book', 'Mowgli', 'Kipling', 'Classic', 'Adventure', 'Public Domain', 'Literature'],
    topics: ['Mowgli\'s Brothers', 'Hunting-Song of the Seeonee Pack', 'Kaa\'s Hunting', 'The Bandar-log', 'Tiger! Tiger! (Fall of Shere Khan)', 'The Law of the Jungle', 'Rikki-Tikki-Tavi'],
    language: 'English with Hindi Story Summaries',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Public Domain',
    licenseType: 'Public Domain Classic (Published 1894)',
    permissionStatus: 'Public Domain',
    source: 'Project Gutenberg Archive',
    whatYoullLearn: [
      'The timeless narrative of Mowgli, the man-cub raised by Father Wolf and Mother Wolf (Raksha)',
      'Character wisdom: Baloo the sleepy brown bear who teaches the Law of the Jungle, and Bagheera the cunning black panther',
      'The Bandar-log monkey folk as an allegory for undisciplined minds without leadership or memory',
      'The courage of Rikki-Tikki-Tavi the mongoose protecting a human household against cobras Nag and Nagaina'
    ],
    tableOfContents: [
      'Chapter 1: Mowgli\'s Brothers — The Coming of the Man-Cub to Council Rock',
      'Chapter 2: Kaa\'s Hunting — Kidnapping by the Bandar-log and Rescue at Cold Lairs',
      'Chapter 3: Tiger! Tiger! — Mowgli\'s Strategy and the Defeat of Shere Khan',
      'Chapter 4: The White Seal — Kotick\'s Quest for a Safe Haven',
      'Chapter 5: Rikki-Tikki-Tavi — The Brave Mongoose and the Great Cobra Duel',
      'Chapter 6: Toomai of the Elephants — The Secret Dance of the Wild Herds',
      'Chapter 7: Her Majesty\'s Servants — Camp Animals Reflect on Duty and Discipline'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Mowgli\'s Brothers & The Law of the Jungle',
        summary: 'Introduces baby Mowgli wandering into the den of the wolves in the Seeonee Hills. Shere Khan demands the prey, but Mother Wolf Raksha defies him. At Council Rock, Baloo speaks for the boy and Bagheera buys his life with a freshly killed bull.',
        keyPoints: [
          'The Law of the Jungle: "The strength of the Pack is the Wolf, and the strength of the Wolf is the Pack."',
          'Bagheera\'s background: Born in the king\'s cages at Oodeypore, he understands humans better than any wild beast.',
          'The Red Flower: Animals fear fire because none can look it in the eye; Mowgli uses it as his instrument of supremacy.'
        ],
        codeSnippet: `The Law of the Jungle Verse:
"Now this is the Law of the Jungle — as old and as true as the sky;
And the Wolf that shall keep it may prosper, but the Wolf that shall break it must die.
As the creeper that girdles the tree-trunk the Law runneth forward and back —
For the strength of the Pack is the Wolf, and the strength of the Wolf is the Pack."`,
        realWorldUse: 'Classic literature teaching ecological respect, courage, loyalty, and social harmony.'
      }
    ],
    studyNotes: [
      'The Bandar-log represent boastful talk without substance: "They have no Law. They are outcasts. They have no speech of their own, but use the stolen words which they overhear."',
      'Rikki-Tikki-Tavi embodies vigilance and focus: a mongoose\'s eyes grow red when he is ready for decisive action.'
    ]
  },
  {
    id: 'time-machine-war-of-worlds-hg-wells',
    title: 'The Time Machine & The War of the Worlds — H.G. Wells',
    subtitle: 'The Foundational Masterpieces of Science Fiction: Time Travel & Extraterrestrial Invasion',
    author: 'H.G. Wells',
    authorBio: 'Herbert George Wells (1866-1946) is universally acclaimed as one of the founding fathers of science fiction, anticipating time travel, space exploration, and futuristic warfare.',
    publisher: 'HK VELORA Public Domain Literary Classics',
    category: 'Stories & Literature',
    subcategory: 'Science Fiction',
    bookType: 'E-Book',
    pages: 320,
    format: 'E-Book + Digital Reader with Scientific Annotations',
    difficulty: 'All Levels',
    rating: 4.95,
    reviewCount: 540,
    badge: 'Sci-Fi Classic',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-purple-900 via-indigo-950 to-slate-950',
    tags: ['Sci-Fi', 'HG Wells', 'Time Machine', 'War of the Worlds', 'Classics', 'Public Domain', 'Time Travel'],
    topics: ['The Fourth Dimension of Time', 'The Year 802,701 AD', 'The Eloi and The Morlocks', 'Social Stratification Extrapolated into Evolution', 'Martian Tripods and Heat-Rays', 'Human Vulnerability & Microscopic Biology'],
    language: 'English with Hindi Chapter Notes',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Public Domain',
    licenseType: 'Public Domain Classic (Published 1895 & 1898)',
    permissionStatus: 'Public Domain',
    source: 'Project Gutenberg Public Domain Archives',
    whatYoullLearn: [
      'Understand how H.G. Wells pioneered the concept of time as a fourth geometric dimension',
      'The allegory of Eloi (fragile aristocratic surface dwellers) and Morlocks (underground industrial workers) reflecting 19th-century class divide taken to biological extremes',
      'The Martian invasion narrative that established the extraterrestrial contact genre',
      'The ironic resolution of "War of the Worlds": towering mechanical tripods defeated not by human artillery, but by Earth\'s humblest microscopic bacteria'
    ],
    tableOfContents: [
      'Book 1: The Time Machine — The Fourth Dimension & The Inventor\'s Demonstration',
      'Book 1: The Flight Across Millennia to the Year 802,701 AD',
      'Book 1: The Golden Age of the Eloi & The Mystery of the Sphynx',
      'Book 1: The Dark Underworld: Encounter with the Morlocks',
      'Book 1: The Palace of Green Porcelain & The Journey to the Dying Earth',
      'Book 2: The War of the Worlds — The Falling Stars upon Horsell Common',
      'Book 2: The Cylinder Opens: The Heat-Ray & The Martian Fighting-Machines',
      'Book 2: The Exodus from London & Collapse of Civilization',
      'Book 2: The Thunder Child\'s Heroic Sacrifice',
      'Book 2: The Dead City & Deliverance by the Humblest Bacteria'
    ],
    chaptersPreview: [
      {
        title: 'The Time Machine: Chapter 1 - Time as the Fourth Dimension',
        summary: 'The Time Traveller explains to a skeptical gathering of professionals that a physical body must extend in four dimensions: Length, Breadth, Thickness, and Duration. He reveals a miniature model that vanishes into the future when its lever is pressed.',
        keyPoints: [
          'Scientific premise: "There is no difference between Time and any of the three dimensions of Space, except that our consciousness moves along it."',
          'Evolutionary warning: Without intellectual challenge and physical struggle, humanity degenerates into childlike frailty (the Eloi).',
          'Cosmic vision: The Time Traveller journeys millions of years forward to witness a cooling red sun hanging over a desolate beach with giant crabs.'
        ],
        codeSnippet: `Famous Wellsian Principle:
"Intellectual versatility is the compensation for change, danger, and trouble...
There is no intelligence where there is no change and no need of change."`,
        realWorldUse: 'Invaluable for literature students, creative writers, and thinkers studying speculative sociology and astronomy.'
      }
    ],
    studyNotes: [
      'In "The War of the Worlds", Wells delivered a trenchant critique of European colonial expansion by reversing the roles: advanced Martians treated humans the way colonial empires had treated indigenous populations.',
      'The Martians possessed overwhelming mechanical and chemical superiority, yet had zero immunity to terrestrial microbes, illustrating evolutionary co-adaptation.'
    ]
  },

  // ==========================================
  // PUZZLES & BRAIN GYM
  // ==========================================
  {
    id: 'chess-openings-tactics-endgame-mastery',
    title: 'Chess Tactics, Openings & Endgame Mastery Handbook',
    subtitle: 'Pins, Forks, Skewers, Discovered Attacks, Italian Game, Sicilian Defense & King-Pawn Endgames',
    author: 'Grandmaster Coach V. Anand & HK Brain Gym',
    publisher: 'HK VELORA Open Education Series',
    category: 'Puzzles & Brain',
    subcategory: 'Strategic Thinking',
    bookType: 'Handbook',
    pages: 290,
    format: 'E-Book + 100 Solved Tactical Board Positions',
    difficulty: 'All Levels',
    rating: 4.98,
    reviewCount: 620,
    badge: 'Brain Gym Gold',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-purple-800 via-slate-900 to-stone-950',
    tags: ['Chess', 'Tactics', 'Openings', 'Endgame', 'Brain Gym', 'Puzzles', 'Critical Thinking'],
    topics: ['Fundamental Tactics (Forks, Pins, Skewers)', 'Discovered Attacks & Double Checks', 'Deflection & Decoy Sacrifices', 'Opening Principles (Control Center, Develop Pieces, King Safety)', 'Open Games (Italian Game, Ruy Lopez)', 'Semi-Open Games (Sicilian Defense)', 'King and Pawn Endgames (The Opposition & Rule of the Square)', 'Checkmating Patterns (Anastasia, Boden, Smothered Mate)'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Mind Sports & Cognitive Development Forum',
    whatYoullLearn: [
      'Identify tactical opportunities: Absolute vs Relative Pins, Knight Forks, and Skewers in practical games',
      'Calculate deep combinations using Candidate Moves and forced forcing-move trees (Checks, Captures, Threats)',
      'Establish opening fundamentals: control d4/e4 central squares, develop knights before bishops, castle early',
      'The Sicilian Defense (1.e4 c5) counter-attacking philosophy for black',
      'Master essential endgames: Lucena position (Bridge building) and Philidor defense in Rook endgames',
      'The Rule of the Square to immediately verify whether a King can catch an opponent\'s passed pawn'
    ],
    tableOfContents: [
      'Chapter 1: The Geometry of the Chessboard & Piece Values (Pawn=1, Knight/Bishop=3, Rook=5, Queen=9)',
      'Chapter 2: Tactical Weapons 1: The Knight Fork & Double Attack',
      'Chapter 3: Tactical Weapons 2: Absolute and Relative Pins & Skewers',
      'Chapter 4: Tactical Weapons 3: Discovered Checks, Double Checks & Windmill Tactics',
      'Chapter 5: Combinative Themes: Decoy, Deflection, Overworked Pieces & Clearance Sacrifices',
      'Chapter 6: Opening Principles: Why Moving the Same Piece Twice in the Opening is Fatal',
      'Chapter 7: Classical Openings: The Italian Game (Giuoco Piano) & Ruy Lopez',
      'Chapter 8: Modern Defenses: The Sicilian Defense, French Defense & Queen\'s Gambit Declined',
      'Chapter 9: The King and Pawn Endgame: Opposition, Triangulation & The Rule of the Square',
      'Chapter 10: Rook Endgames: Lucena Position (Building a Bridge) & Philidor Defense',
      'Chapter 11: 50 Interactive Grandmaster Puzzle Challenges with Step-by-Step Solutions'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 9: King and Pawn Endgames & The Rule of the Square',
        summary: 'Presents the mathematical calculation shortcut used by every tournament player: The Rule of the Square. Allows a player to instantly determine whether the defending King can intercept an enemy passed pawn without calculating move by move.',
        keyPoints: [
          'Count the number of squares from the pawn to its promotion square; draw a mental square of equal width and height.',
          'If the defending King can step inside the square on its turn, it can catch the pawn; if it cannot enter the square, the pawn promotes guaranteed.',
          'Direct Opposition: Two Kings facing each other on the same rank/file with one square between them. The player who does NOT have to move holds the opposition advantage.'
        ],
        codeSnippet: `Rule of the Square Mnemonic:
Pawn on e4 aiming for e8:
Distance to promotion = 4 squares (e5, e6, e7, e8).
Square boundaries = e4-e8-a8-a4 or e4-e8-h8-h4.
If Black King on move can enter this 4x4 square, it catches the pawn!`,
        realWorldUse: 'Develops executive function, spatial calculation, patience, and strategic decision-making under pressure.'
      }
    ],
    studyNotes: [
      'Never trade pieces when you have space disadvantage; trades benefit the player with cramped territory.',
      'A knight on the rim is dim! Always strive to place knights on central outposts (e4, d4, e5, d5) where they control up to 8 squares.'
    ]
  },
  {
    id: 'math-olympiad-lateral-thinking-puzzles',
    title: 'Mathematical Olympiad Puzzles & Lateral Thinking Brain Teasers',
    subtitle: 'Pigeonhole Principle, Invariant Analysis, Graph Handshakes, Cryptarithms & Mensa Logic',
    author: 'Prof. Ramesh K. & HK Brain Gym Team',
    publisher: 'HK VELORA Open Education Series',
    category: 'Puzzles & Brain',
    subcategory: 'Mathematical Puzzles',
    bookType: 'Handbook',
    pages: 260,
    format: 'E-Book + 75 Interactive Brain Teasers with Hints',
    difficulty: 'Advanced',
    rating: 4.97,
    reviewCount: 480,
    badge: 'Mensa Grade',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-fuchsia-800 via-pink-900 to-slate-950',
    tags: ['Puzzles', 'Math Olympiad', 'Logic', 'Brain Teaser', 'Pigeonhole Principle', 'Combinatorics'],
    topics: ['The Pigeonhole Principle (Dirichlet Principle)', 'Invariant and Semi-Invariant Quantities', 'The Handshake Lemma in Graph Theory', 'Parity Arguments (Even vs Odd Proofs)', 'Cryptarithms (SEND + MORE = MONEY)', 'Weighing Puzzles (Balance Scale & Fake Coins)', 'River Crossing Logic Riddles', 'Knights and Knaves Island Problems'],
    language: 'English with Hindi Explanations',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Cognitive Puzzles & Olympiad Cell',
    whatYoullLearn: [
      'Apply the Pigeonhole Principle to prove non-obvious properties in geometry, numbers, and sets',
      'Use Parity (Even/Odd) invariance to prove why certain board puzzle states are impossible to solve',
      'Graph theory basics: Handshake Lemma (the sum of degrees in any graph is always even)',
      'Systematic deduction algorithms for Cryptarithms and balancing beam scales with log3(N) efficiency',
      'Sharpen lateral thinking skills required for coding interviews (FAANG), CAT, and Math Olympiads'
    ],
    tableOfContents: [
      'Chapter 1: The Art of Problem Solving: Creative Reasoning vs Formula Memorization',
      'Chapter 2: The Pigeonhole Principle: From Sock Drawers to Hair Count in London',
      'Chapter 3: Parity Arguments: The Mutilated Chessboard and Coin Flipping Puzzles',
      'Chapter 4: Invariants and Monovariants: Quantities That Never Change',
      'Chapter 5: Graph Theory Puzzles: Bridges of Königsberg & Handshake Lemma',
      'Chapter 6: Cryptarithmetic Masterclass: Solving SEND + MORE = MONEY Step by Step',
      'Chapter 7: Measurement & Weighing Riddles: The 12-Coin Balance Scale Classic',
      'Chapter 8: Knights, Knaves and Truth-Tellers: Formal Propositional Logic',
      'Chapter 9: Probability Paradoxes: The Monty Hall Problem & Birthday Paradox'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: The Pigeonhole Principle & Everyday Proofs',
        summary: 'Explains Dirichlet’s seemingly obvious principle: if n items are put into m containers, with n > m, then at least one container must contain more than one item. Reveals its startling mathematical power in proving theorems.',
        keyPoints: [
          'Hair count paradox: The human head has at most 150,000 hairs. In a city like Delhi or Mumbai with millions of inhabitants, there MUST exist at least two people with the exact same number of hairs!',
          'Generalized Pigeonhole: If n items are distributed among k boxes, at least one box contains ceil(n / k) items.',
          'Geometric applications: Proving that among any 5 points chosen inside a 2x2 square, at least two points are separated by a distance <= sqrt(2).'
        ],
        codeSnippet: `Classic Cryptarithm Breakdown:
    S E N D
+   M O R E
= M O N E Y

1. M must be 1 (sum of two 4-digit numbers cannot exceed 19,999).
2. S + 1 >= 10 -> S must be 8 or 9; O must be 0.
3. Deduce remaining digits uniquely:
   S=9, E=5, N=6, D=7, M=1, O=0, R=8, Y=2
   Check: 9567 + 1085 = 10652! Correct!`,
        realWorldUse: 'Essential training for algorithmic complexity analysis, hash collision resolution, and competitive programming.'
      }
    ],
    studyNotes: [
      'Mutilated Chessboard Proof: Removing two opposite corner squares removes two squares of the same color (e.g. both white). Since each domino covers 1 black and 1 white square, the remaining 62 squares (32 black, 30 white) can NEVER be tiled by 31 dominoes!',
      'Monty Hall Problem: Always switch doors! Staying with initial choice gives 1/3 win probability, while switching gives 2/3 win probability.'
    ]
  }
];
