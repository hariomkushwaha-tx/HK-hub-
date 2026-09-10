import { EBookItem } from '../types';

export const MILESTONE_BOOKS_DATA: EBookItem[] = [
  // ==========================================
  // SCHOOL LAB PRACTICALS & APPLIED SUBJECTS (CLASS 9-12)
  // ==========================================
  {
    id: 'class10-science-lab-manual-viva',
    title: 'Class 10 Science Practical Lab Manual & Viva Voce Guide',
    subtitle: 'Ohm’s Law, Chemical Reactions, Ray Optics, Stomata Mount & Solved Viva Questions',
    author: 'Dr. Vivek Saxena & HK Science Faculty',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 10',
    schoolClass: 'Class 10',
    subject: 'Science',
    bookType: 'Handbook',
    pages: 210,
    format: 'PDF + Illustrated Lab Experiments',
    difficulty: 'Intermediate',
    rating: 4.96,
    reviewCount: 390,
    badge: 'CBSE Lab Approved',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-cyan-700 to-blue-900',
    tags: ['Class 10', 'Science', 'Practicals', 'Lab Manual', 'Viva Voce', 'Ohm\'s Law', 'Experiments'],
    topics: ['Ohm’s Law Verification (V vs I Graph)', 'Resistors in Series & Parallel', 'pH of Solutions using pH Paper', 'Reactions of Zn, Fe, Cu with Salts', 'Saponification & Cleaning Action of Soap', 'Refraction through Glass Slab', 'Temporary Mount of Leaf Peel (Stomata)', 'Budding in Yeast & Hydra'],
    language: 'Bilingual (Hindi + English)',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA School Science Laboratories',
    whatYoullLearn: [
      'Verify Ohm’s law by plotting potential difference (V) against current (I) to find resistance from slope',
      'Trace the path of rays through a glass prism and rectangular glass slab to measure lateral displacement',
      'Determine pH of acids, bases, and salts using universal indicator paper',
      'Prepare temporary stained mounts of leaf peel to observe guard cells and stomatal opening',
      'Ace external examiner viva-voce with 100+ solved conceptual questions'
    ],
    tableOfContents: [
      'Experiment 1: Finding the pH of dil. HCl, dil. NaOH, dil. Ethanoic Acid, Lemon Juice & Water',
      'Experiment 2: Properties of Acids and Bases (Reaction with Litmus, Zinc metal, Na2CO3)',
      'Experiment 3: Action of Zn, Fe, Cu, and Al on Aqueous Salt Solutions (Reactivity Series)',
      'Experiment 4: Ohm’s Law: Measuring Potential Difference vs Current in a Nichrome Wire',
      'Experiment 5: Equivalent Resistance of Two Resistors in Series and Parallel Combinations',
      'Experiment 6: Preparing a Temporary Mount of a Leaf Peel to Show Stomata',
      'Experiment 7: Tracing the Path of a Ray of Light Passing Through a Rectangular Glass Slab',
      'Experiment 8: Finding the Focal Length of a Convex Lens by Obtaining Image of a Distant Object',
      'Experiment 9: Tracing the Path of Rays of Light Through a Triangular Glass Prism',
      'Experiment 10: 100 Most Frequent External Viva-Voce Questions with Ideal Answers'
    ],
    chaptersPreview: [
      {
        title: 'Experiment 4: Ohm’s Law Verification (V vs I Graph & Resistance Calculation)',
        summary: 'Step-by-step apparatus setup (battery, ammeter in series, voltmeter in parallel, rheostat, plug key, and nichrome wire). Demonstrates that V/I = constant (Resistance R), generating a straight line passing through the origin.',
        keyPoints: [
          'Ammeter is always connected in series because it has very low internal resistance and measures total circuit current.',
          'Voltmeter is always connected in parallel across the resistor because it has very high internal resistance to draw negligible current.',
          'Precautions: Connect positive terminal of ammeter/voltmeter to positive terminal of battery; remove plug key when not taking readings to prevent heating of wire.'
        ],
        codeSnippet: `Key Formula:
R = V / I (Ohms)
Slope of V-I graph = ΔV / ΔI = R (Resistance of wire)
Resistivity ρ = (R * A) / L = (R * π * r^2) / L`,
        realWorldUse: 'Fundamental training for electrical engineering, circuit design, physics testing, and laboratory safety.'
      }
    ],
    studyNotes: [
      'External Viva Tip: If the V-I graph bends upwards at high current, explain to the examiner that temperature has increased, raising resistance (nichrome is metallic).',
      'In stomata mounting, use safranin stain and mount in dilute glycerine to prevent the specimen from drying out under the microscope.'
    ]
  },
  {
    id: 'class12-physics-lab-manual-viva',
    title: 'Class 12 Physics Practical Lab Manual & Viva Mastery',
    subtitle: 'Meter Bridge, Potentiometer, Galvanometer Conversion, p-n Diode, Prism & Focal Lengths',
    author: 'Prof. Ramesh K. & HK Physics Lab',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 12',
    schoolClass: 'Class 12',
    stream: 'Science',
    subject: 'Physics',
    bookType: 'Handbook',
    pages: 250,
    format: 'PDF + Circuit Diagrams',
    difficulty: 'Advanced',
    rating: 4.97,
    reviewCount: 440,
    badge: 'CBSE 30/30 Marks',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-800 to-indigo-950',
    tags: ['Class 12', 'Physics', 'Practicals', 'Meter Bridge', 'Galvanometer', 'p-n Diode', 'Viva'],
    topics: ['Resistance per unit length using Meter Bridge', 'Laws of Combination of Resistances', 'Comparison of Emfs using Potentiometer', 'Internal Resistance of Primary Cell', 'Half-Deflection Method for Galvanometer', 'p-n Junction Diode Forward & Reverse Characteristics', 'Refractive Index using Traveling Microscope', 'Focal Length of Concave Mirror & Convex Lens'],
    language: 'English with Hindi Explanations',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'HK VELORA Physics Instrumentation Laboratory',
    whatYoullLearn: [
      'Master Wheatstone Bridge principle in Meter Bridge experiments (X = R * (100 - l) / l)',
      'Determine internal resistance of Leclanché and Daniel cells using potentiometer',
      'Convert a Weston Galvanometer into a Voltmeter and Ammeter with calculation of shunt resistance',
      'Plot I-V forward and reverse bias characteristics of semiconductor p-n junction diodes and Zener diodes',
      'Master optical bench experiments: u-v method and parallax removal between needles'
    ],
    tableOfContents: [
      'Section A: Current Electricity Practicals (Meter Bridge, Potentiometer, Galvanometer)',
      'Section A: Determination of Resistance of a Wire & Verification of Series/Parallel Laws',
      'Section A: Figure of Merit of a Galvanometer by Half Deflection Method',
      'Section A: Conversion of Galvanometer into Ammeter and Voltmeter',
      'Section B: Optics Practicals (Convex Lens, Concave Mirror, Glass Prism Refractive Index)',
      'Section B: Focal Length of Convex Mirror using a Convex Lens',
      'Section B: Angle of Minimum Deviation for a Prism using i-D Curve',
      'Section B: Refractive Index of Liquid using Liquid Lens & Plane Mirror',
      'Section B: Semiconductor Practicals: I-V Characteristics of p-n Junction Diode',
      'Section C: 120 Solved Board Practical Viva-Voce Questions with Detailed Physics Explanations'
    ],
    chaptersPreview: [
      {
        title: 'Section A: Meter Bridge - Determining Unknown Resistance & Resistivity',
        summary: 'Comprehensive lab protocol using 1-meter constantan/manganin resistance wire stretched over a wooden meter scale, operating on the Wheatstone bridge balance condition when null deflection is obtained on the galvanometer.',
        keyPoints: [
          'Null point condition: P / Q = R / S -> (l) / (100 - l) = R / X, hence X = R * (100 - l) / l.',
          'Null point should preferably be near the center (between 40 cm and 60 cm) to minimize end-resistance errors.',
          'Manganin or constantan is chosen for bridge wire because of its high resistivity and low temperature coefficient of resistance.'
        ],
        codeSnippet: `Resistivity Calculation:
X = Unknown resistance (Ohms)
D = Diameter of wire measured with screw gauge (cm)
L = Length of wire (cm)
Resistivity ρ = (X * π * D^2) / (4 * L)  [Ohm-meter]`,
        realWorldUse: 'Essential laboratory skills for electronics engineering, scientific instrumentation, and experimental physics.'
      }
    ],
    studyNotes: [
      'Parallax removal tip: Move eye from side to side; if the tips of the object and image needles move together without separating, parallax is completely removed.',
      'In half-deflection method, Galvanometer resistance G = (R * S) / (R - S), where S is the shunt resistance.'
    ]
  },
  {
    id: 'class11-12-physical-education-handbook',
    title: 'Class 11 & 12 Physical Education & Sports Science Handbook',
    subtitle: 'Planning in Sports, Yoga as Preventive Measure, Biomechanics, Physiology & Sports Injuries',
    author: 'Coach Rajeev Malik & HK Sports Cell',
    publisher: 'HK VELORA Open Education Series',
    category: 'Class 9–12 / School',
    subcategory: 'Class 11 & 12',
    schoolClass: 'Class 12',
    subject: 'Physical Education',
    bookType: 'Handbook',
    pages: 230,
    format: 'PDF + Illustrated Asana Charts',
    difficulty: 'Beginner',
    rating: 4.91,
    reviewCount: 310,
    badge: 'CBSE Aligned',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-emerald-700 to-teal-900',
    tags: ['Class 12', 'Physical Education', 'Yoga', 'Biomechanics', 'Sports Injuries', 'Nutrition', 'CBSE'],
    topics: ['Fixtures in Tournaments (Knockout, League, Bye calculations)', 'Children & Women in Sports (Female Athlete Triad)', 'Yoga Asanas for Lifestyle Diseases (Obesity, Diabetes, Asthma, Hypertension)', 'Physical Education & Sports for CWSN (Children with Special Needs)', 'Sports & Nutrition (Balanced Diet & Macronutrients)', 'Test & Measurement in Sports (Rikli & Jones Senior Citizen Test)', 'Physiology & Injuries in Sports (Sprain, Strain, Contusion)', 'Biomechanics & Sports (Newton\'s Laws, Levers, Projectile Motion)'],
    language: 'English with Hindi Explanations',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'Sports Authority of India & HK VELORA Health Wing',
    whatYoullLearn: [
      'Draw tournament fixtures for Knockout and League tournaments with bye allocation algorithms',
      'Yoga asanas and contraindications for managing Obesity, Diabetes, Asthma, and Hypertension',
      'Biomechanics applied to sports: Levers in human body (First, Second, Third class) and Newton’s laws',
      'Nutrition science: Carbohydrates, Proteins, Fats, Vitamins, Minerals, and hydration balance',
      'First aid protocols (PRICE: Protect, Rest, Ice, Compression, Elevation) for acute soft tissue injuries'
    ],
    tableOfContents: [
      'Chapter 1: Management of Sporting Events: Committees, Fixtures (Knockout & League) & Byes',
      'Chapter 2: Children and Women in Sports: Postural Deformities (Kyphosis, Lordosis, Knock Knees)',
      'Chapter 3: Yoga as Preventive Measure for Lifestyle Diseases: Asanas & Contraindications',
      'Chapter 4: Physical Education and Sports for CWSN (Special Olympics, Paralympics, Deaflympics)',
      'Chapter 5: Sports and Nutrition: Balanced Diet, Macro/Micro Nutrients & Food Myths',
      'Chapter 6: Test and Measurement in Sports: SAI Khelo India Fitness Test',
      'Chapter 7: Physiology & Injuries in Sports: Effect of Exercise on Cardio-Respiratory System',
      'Chapter 8: Biomechanics and Sports: Newton\'s Laws of Motion, Levers & Projectile Trajectory',
      'Chapter 9: Psychology and Sports: Personality Traits, Motivation & Aggression in Sports',
      'Chapter 10: Training in Sports: Strength, Endurance, Speed, Flexibility & Coordinative Abilities'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Tournament Fixtures & Formula Calculations',
        summary: 'Step-by-step mathematical method for calculating number of matches, teams in upper and lower halves, and allocation of byes in a single knockout tournament.',
        keyPoints: [
          'Total matches in Knockout = N - 1 (where N = number of teams).',
          'Teams in Upper Half = (N + 1) / 2; Lower Half = (N - 1) / 2 (when N is odd).',
          'Total Byes = Next power of 2 minus N (e.g. for 11 teams: next power is 16; Byes = 16 - 11 = 5).',
          'Order of giving Byes: 1st Bye to last team of Lower Half; 2nd Bye to 1st team of Upper Half; 3rd Bye to 1st team of Lower Half; 4th Bye to last team of Upper Half.'
        ],
        codeSnippet: `Knockout Bye Formula:
Number of teams N = 13
Next power of 2 = 16
Number of Byes = 16 - 13 = 3 Byes
Total Matches = 13 - 1 = 12 Matches`,
        realWorldUse: 'Crucial for high school board exams, sports event management, athletic coaching, and physical fitness.'
      }
    ],
    studyNotes: [
      'In case of soft tissue injury (Sprain/Strain), remember the PRICE protocol: Protect, Rest, Ice (15-20 min every 2 hours), Compress (elastic bandage), Elevate above heart level.',
      'Newton\'s Third Law (Action-Reaction) applies to sprint starts from starting blocks and swimming turns off the pool wall.'
    ]
  },

  // ==========================================
  // TECHNOLOGY, DEVOPS & INFRASTRUCTURE
  // ==========================================
  {
    id: 'docker-containerization-microservices-handbook',
    title: 'Docker & Containerization for Modern DevOps Handbook',
    subtitle: 'From Dockerfile to Multi-Stage Builds, Volumes, Custom Networks & Docker Compose',
    author: 'Er. Hariom & HK Cloud Infrastructure Lab',
    publisher: 'HK VELORA Open Technology Series',
    category: 'Technology & Computers',
    subcategory: 'DevOps & Containers',
    bookType: 'Handbook',
    pages: 310,
    format: 'E-Book + Tested Dockerfiles & Compose YAMLs',
    difficulty: 'Intermediate',
    rating: 4.98,
    reviewCount: 470,
    badge: 'DevOps Essential',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-600 to-cyan-900',
    tags: ['Docker', 'DevOps', 'Containers', 'Microservices', 'Docker Compose', 'Linux', 'Cloud'],
    topics: ['Virtual Machines vs Linux Containers', 'Namespaces & cgroups (Kernel Primitives)', 'Dockerfile Directives (FROM, RUN, COPY, CMD vs ENTRYPOINT)', 'Multi-Stage Builds for Minimal Image Size', 'Container Networking (Bridge, Host, Overlay)', 'Persistent Storage with Named Volumes & Bind Mounts', 'Multi-Container Orchestration with Docker Compose', 'Container Security Hardening (Non-root users)'],
    language: 'English with Hindi Explanations',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-SA 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'Docker Open Source Community & HK Tech Labs',
    whatYoullLearn: [
      'Understand how Linux kernel cgroups (resource limits) and namespaces (isolation) create containers',
      'Differentiate images (immutable templates) from running containers (isolated execution instances)',
      'Write optimized Dockerfiles leveraging layer caching and Alpine / distroless minimal base images',
      'Slash image sizes from 1 GB down to 60 MB using multi-stage compilation builds',
      'Orchestrate multi-container web apps (Node.js, Redis, PostgreSQL) using Docker Compose'
    ],
    tableOfContents: [
      'Chapter 1: The Evolution of Virtualization: Hypervisors vs OS-Level Containerization',
      'Chapter 2: Under the Hood of Docker: cgroups, Namespaces & Union File Systems (OverlayFS)',
      'Chapter 3: The Docker CLI: Images, Containers, Logs, Exec & Lifecycle Commands',
      'Chapter 4: Writing Production Dockerfiles: Directives, Layer Caching & Best Practices',
      'Chapter 5: Multi-Stage Builds: Dramatic Size Reduction for Node, Go, Rust & Java',
      'Chapter 6: Data Persistence: Volumes, Bind Mounts & tmpfs Storage Mechanics',
      'Chapter 7: Container Networking: Bridge Networks, DNS Resolution & Port Mapping (-p)',
      'Chapter 8: Docker Compose: Multi-Service Definition, Environment Variables & Dependencies',
      'Chapter 9: Container Security Hardening: Non-root Execution, Read-only Roots & Vulnerability Scanning'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 5: Multi-Stage Builds for Production Efficiency',
        summary: 'Demonstrates how multi-stage builds solve the classic dilemma of needing compilers and development toolchains during the build phase, but wanting none of those bloated, vulnerable tools inside the final production runtime container.',
        keyPoints: [
          'Multiple FROM instructions in a single Dockerfile define distinct build stages.',
          'Use "COPY --from=builder /app/dist /usr/share/nginx/html" to copy only compiled artifacts into an unprivileged runtime image.',
          'Reduces attack surface by excluding git, compilers, package managers, and header files from production containers.'
        ],
        codeSnippet: `# Production Multi-Stage Node.js Dockerfile by Hariom
# Stage 1: Build Stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Clean Production Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Add unprivileged system user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
USER appuser
EXPOSE 3000
CMD ["node", "dist/server.js"]`,
        realWorldUse: 'Industry standard for continuous integration (CI/CD), microservice packaging, and cloud deployments.'
      }
    ],
    studyNotes: [
      'Order of Dockerfile instructions matters! Always copy package.json and run dependency installs BEFORE copying application code to maximize Docker cache reuse.',
      'CMD provides default arguments that can be overridden at runtime; ENTRYPOINT defines the immutable executable command.'
    ]
  },
  {
    id: 'sql-window-functions-advanced-handbook',
    title: 'SQL Window Functions & Advanced Query Engineering Handbook',
    subtitle: 'ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG, Running Totals, CTEs & Query Optimization',
    author: 'Er. Hariom & HK Database Architecture Cell',
    publisher: 'HK VELORA Open Technology Series',
    category: 'Coding & Programming',
    subcategory: 'Database Engineering',
    bookType: 'Handbook',
    pages: 270,
    format: 'E-Book + 50 Solved SQL LeetCode Patterns',
    difficulty: 'Intermediate',
    rating: 4.97,
    reviewCount: 460,
    badge: 'Data Interview Gold',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-blue-700 to-sky-950',
    tags: ['SQL', 'Databases', 'Window Functions', 'PostgreSQL', 'MySQL', 'Data Analysis', 'Queries'],
    topics: ['The OVER() Clause Architecture', 'PARTITION BY vs GROUP BY', 'ROW_NUMBER() vs RANK() vs DENSE_RANK()', 'LEAD() and LAG() Time-Series Offsets', 'Running Totals & Moving Averages (ROWS BETWEEN)', 'First Value & Last Value Functions', 'Common Table Expressions (CTEs & Recursive CTEs)', 'B-Tree Indexing & EXPLAIN ANALYZE'],
    language: 'English with Hindi Explanations',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    licenseType: 'CC-BY-SA 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'PostgreSQL Global Development Group & HK Database Lab',
    whatYoullLearn: [
      'Understand the fundamental difference between aggregate grouping (collapsing rows) and window functions (retaining row identity)',
      'Calculate top N items per category using DENSE_RANK() and Common Table Expressions',
      'Compute Month-over-Month (MoM) revenue growth and churn metrics using LAG() and LEAD()',
      'Construct rolling moving averages and running balances using window framing (ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)',
      'Inspect SQL execution plans with EXPLAIN ANALYZE to eliminate sequential table scans'
    ],
    tableOfContents: [
      'Chapter 1: The Window Function Paradigm: Aggregation Without Row Collapse',
      'Chapter 2: The Anatomy of OVER(): PARTITION BY, ORDER BY & Window Frames',
      'Chapter 3: Ranking Functions: ROW_NUMBER(), RANK(), DENSE_RANK() & NTILE()',
      'Chapter 4: Navigational Functions: LEAD(), LAG(), FIRST_VALUE() & LAST_VALUE()',
      'Chapter 5: Window Frames: ROWS vs RANGE BETWEEN UNBOUNDED PRECEDING & CURRENT ROW',
      'Chapter 6: Calculating Running Totals, Moving Averages & Cumulative Percentages',
      'Chapter 7: Common Table Expressions (WITH clauses) & Recursive Hierarchy Traversal',
      'Chapter 8: Indexing Strategies: Composite B-Tree Indexes for Optimizing OVER(PARTITION BY...)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: Ranking Functions - ROW_NUMBER vs RANK vs DENSE_RANK',
        summary: 'Deconstructs the three essential ranking functions with clear visual examples when duplicate values exist in the dataset.',
        keyPoints: [
          'ROW_NUMBER(): Assigns a unique, consecutive integer to every row regardless of ties (1, 2, 3, 4...).',
          'RANK(): Assigns the same rank to identical values, but skips subsequent ranks (e.g. ties for 2nd produce: 1, 2, 2, 4...).',
          'DENSE_RANK(): Assigns the same rank to identical values without skipping any integers (e.g. ties for 2nd produce: 1, 2, 2, 3...).'
        ],
        codeSnippet: `-- Top 2 Highest Paid Employees in Each Department
WITH RankedEmployees AS (
  SELECT 
    name,
    department_id,
    salary,
    DENSE_RANK() OVER (
      PARTITION BY department_id 
      ORDER BY salary DESC
    ) AS salary_rank
  FROM employees
)
SELECT name, department_id, salary, salary_rank
FROM RankedEmployees
WHERE salary_rank <= 2;`,
        realWorldUse: 'The #1 tested skill in SQL technical interviews at Amazon, Google, Meta, and top analytics firms.'
      }
    ],
    studyNotes: [
      'Window functions can ONLY appear in the SELECT list and ORDER BY clause of a query; they cannot be placed directly in WHERE or HAVING clauses (use a CTE or subquery instead).',
      'Always specify an explicit ORDER BY inside the OVER() clause when using window frames; otherwise, the frame defaults to RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW.'
    ]
  },

  // ==========================================
  // GENERAL KNOWLEDGE, SCIENCE & CONSTITUTION
  // ==========================================
  {
    id: 'geography-of-india-world-physiography',
    title: 'Geography of India & World Physiography Master Handbook',
    subtitle: 'Geomorphology, Monsoon Climatology, River Systems, Soils, Mineral Resources & Map Work',
    author: 'Dr. Alok Verma & HK Geography Research Cell',
    publisher: 'HK VELORA Open Education Series',
    category: 'General Knowledge',
    subcategory: 'Geography',
    bookType: 'Handbook',
    pages: 340,
    format: 'E-Book + 40 Color Physiographic Maps',
    difficulty: 'Intermediate',
    rating: 4.95,
    reviewCount: 420,
    badge: 'Civil Services Classic',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-teal-700 via-emerald-900 to-slate-900',
    tags: ['Geography', 'India Geography', 'Monsoon', 'Himalayas', 'Rivers', 'UPSC', 'Physical Geography'],
    topics: ['Earth’s Interior & Plate Tectonics', 'Himalayan Orogeny & Structural Zones', 'The Great Northern Plains (Bhabar, Tarai, Bhangar, Khadar)', 'Peninsular Plateau (Deccan, Malwa, Western/Eastern Ghats)', 'Drainage Systems: Himalayan (Indus, Ganga, Brahmaputra) vs Peninsular (Godavari, Krishna, Narmada, Tapi)', 'Mechanism of the Indian Monsoon (ITCZ, Jet Streams, El Niño/La Niña)', 'Soil Types of India (Alluvial, Black, Red, Laterite)', 'Forests & Wildlife Sanctuaries of India'],
    language: 'Bilingual (Hindi + English)',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'Survey of India & Geological Survey of India Public Data',
    whatYoullLearn: [
      'Plate tectonic convergence of the Indian plate with the Eurasian plate forming the Himalayas',
      'Morphology of northern plains: porous Bhabar pebble beds, marshy Tarai, older Bhangar, and fertile new Khadar alluvium',
      'The meteorological machinery of the South-West Monsoon: shift of ITCZ, Tibetan plateau heating, Tropical Easterly Jet, and Somali Jet',
      'The impact of El Niño (ENSO) and Indian Ocean Dipole (IOD) on Indian rainfall patterns',
      'Major river basins, tributaries, east-flowing deltaic rivers vs west-flowing estuary rivers (Narmada and Tapi)'
    ],
    tableOfContents: [
      'Chapter 1: Origin of Earth, Crustal Structure & Continental Drift to Plate Tectonics',
      'Chapter 2: Physiographic Divisions of India: The Northern Mountain Wall (Himalayas)',
      'Chapter 3: The Great Northern Plains: Geological Formation & Sub-divisions',
      'Chapter 4: The Peninsular Plateau: Western Ghats, Eastern Ghats & Deccan Traps',
      'Chapter 5: The Coastal Plains and Island Groups (Andaman & Nicobar, Lakshadweep)',
      'Chapter 6: Drainage Systems of India: Antecedent Rivers & Detailed Basin Profiles',
      'Chapter 7: Climate of India: Seasons, The South-West Monsoon & El Niño / IOD Oscillations',
      'Chapter 8: Soils of India: Classification, Fertility, Soil Erosion & Conservation',
      'Chapter 9: Natural Vegetation & Forests of India: Tropical Evergreen to Mangroves',
      'Chapter 10: Mineral & Energy Resources: Coal Belts, Petroleum Reserves & Green Transition'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 6: The Mechanism of the Indian South-West Monsoon',
        summary: 'Comprehensive meteorological breakdown of the South-West Monsoon delivering over 75% of India\'s annual precipitation. Explains the differential heating of land and sea, the northward migration of the Inter-Tropical Convergence Zone (ITCZ), and moisture-laden winds splitting into the Arabian Sea branch and Bay of Bengal branch.',
        keyPoints: [
          'ITCZ shift: In summer, the low-pressure trough shifts over the Ganga plain, drawing south-east trade winds that cross the equator and deflect rightward (Coriolis effect) as south-westerly winds.',
          'Western Ghats orographic rainfall: The Arabian Sea branch hits the steep Western Ghats, causing heavy rainfall (250-400 cm) on the windward side, leaving the Deccan in a rain-shadow zone.',
          'Positive Indian Ocean Dipole (IOD) brings warmer waters to the western Indian Ocean, enhancing monsoon rainfall over India.'
        ],
        codeSnippet: `Monsoon Quick Facts:
- Normal onset over Kerala coast: June 1st.
- Highest rainfall station: Mawsynram (Meghalaya) due to funneling topography of Khasi hills.
- Narmada and Tapi flow west through rift valleys without forming deltas, creating estuaries instead.`,
        realWorldUse: 'Essential for UPSC, civil services, agricultural planning, climatology, and water resource management.'
      }
    ],
    studyNotes: [
      'Black soil (Regur) is derived from basaltic Deccan trap lava and has high water-retaining capacity, making it ideal for cotton cultivation.',
      'The Western Ghats are an unbroken mountain wall crossed only through passes (Thal Ghat, Bhor Ghat, Pal Ghat), whereas Eastern Ghats are discontinuous and dissected by major rivers.'
    ]
  },
  {
    id: 'general-science-everyday-life-competitive',
    title: 'General Science & Daily Life Science for Competitive Exams',
    subtitle: 'Everyday Physics, Chemistry, Human Biology, Nutrition, Diseases & Scientific Inventions',
    author: 'Dr. Vivek Saxena & HK Science Faculty',
    publisher: 'HK VELORA Open Education Series',
    category: 'General Knowledge',
    subcategory: 'General Science',
    bookType: 'Handbook',
    pages: 280,
    format: 'PDF + 500 High-Yield MCQs with Explanations',
    difficulty: 'All Levels',
    rating: 4.96,
    reviewCount: 510,
    badge: 'SSC & Railway Fast-Track',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-600 to-red-800',
    tags: ['General Science', 'Everyday Science', 'Physics', 'Chemistry', 'Biology', 'SSC CGL', 'RRB NTPC', 'Competitive Exams'],
    topics: ['Everyday Physics (Why sky is blue, Mirage, Miracles of Pressure)', 'Everyday Chemistry (Baking soda, Bleaching powder, Rusting, Soaps)', 'Human Biology & Vital Organs', 'Vitamins, Deficiency Diseases & Nutrition', 'Infectious Diseases (Bacterial, Viral, Protozoan)', 'Vaccines & Antibiotics', 'Blood Groups (ABO System & Rh factor)', 'Major Scientific Discoveries & Nobel Laureates'],
    language: 'Bilingual (Hindi + English)',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Educational Resource / HK Tech World Original',
    licenseType: 'CC-BY-NC 4.0 Open Educational Resource',
    permissionStatus: 'Verified Free Access',
    source: 'National Science Council & HK VELORA Competitive Examination Wing',
    whatYoullLearn: [
      'Everyday optical phenomena: Rayleigh scattering (blue sky, red sunsets), Total Internal Reflection (optical fiber, diamond sparkle)',
      'Common chemical compounds: Plaster of Paris (CaSO4.1/2H2O), Washing soda, Baking soda, Bleaching powder, and Vinegar',
      'Digestive enzymes, human endocrine hormones (Insulin, Thyroxine, Adrenaline), and blood circulation',
      'Vitamins chart: Chemical names, fat-soluble (A, D, E, K) vs water-soluble (B, C), and deficiency symptoms',
      'Distinguish viral diseases (Dengue, Rabies, Polio) from bacterial diseases (Tuberculosis, Cholera, Typhoid)'
    ],
    tableOfContents: [
      'Chapter 1: Everyday Physics: Optics, Sound, Heat, Mechanics & Atmospheric Phenomena',
      'Chapter 2: Everyday Chemistry: Domestic Chemicals, Acids, Bases, Salts & Metals',
      'Chapter 3: Human Anatomy: Circulatory, Digestive, Respiratory & Nervous Systems',
      'Chapter 4: Vitamins, Minerals & Nutritional Disorders: Quick Reference Tables',
      'Chapter 5: Human Diseases, Pathogens, Transmission Vectors & Immunization',
      'Chapter 6: Genetics, Biotechnology & Modern Medical Diagnostics (MRI, CT Scan, ECG, EEG)',
      'Chapter 7: Environmental Science: Ozone Depletion, Acid Rain & Greenhouse Gases',
      'Chapter 8: 500 High-Yield Solved Questions from SSC, Railway, State PSC & NDA Exams'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 4: Vitamins & Nutritional Disorders Quick Reference',
        summary: 'Complete high-yield table of vitamins, scientific chemical names, dietary sources, and deficiency disorders essential for every competitive examination.',
        keyPoints: [
          'Fat-Soluble Vitamins: A (Retinol - Night blindness), D (Calciferol - Rickets), E (Tocopherol - Muscle weakness/fertility), K (Phylloquinone - Defective blood clotting). Mnemonic: KEDA.',
          'Water-Soluble Vitamins: B-complex and C (Ascorbic acid - Scurvy, bleeding gums). Must be supplied regularly in diet because excess is excreted in urine.',
          'Vitamin B12 (Cobalamin) contains the trace metal Cobalt; deficiency causes Pernicious Anemia.'
        ],
        codeSnippet: `High-Frequency Exam Facts:
1. Universal Donor: O negative (O-) blood group.
2. Universal Recipient: AB positive (AB+) blood group.
3. Hardest substance in human body: Tooth enamel (Calcium hydroxyapatite).
4. Pacemaker of the heart: Sinoatrial Node (SA Node).
5. Acid present in ant sting: Formic acid (Methanoic acid - HCOOH).`,
        realWorldUse: 'Essential foundation for SSC CGL, RRB NTPC, State PCS, CDS, NDA, and general science literacy.'
      }
    ],
    studyNotes: [
      'Sky appears blue because blue light has shorter wavelength and scatters more than red light (Rayleigh scattering: Scattering proportional to 1 / lambda^4).',
      'Mirage in hot deserts is caused by Total Internal Reflection (TIR) of light as it passes from denser cool upper air to rarer hot air near the desert floor.'
    ]
  },

  // ==========================================
  // STORIES & LITERATURE (CLASSICS IN PUBLIC DOMAIN)
  // ==========================================
  {
    id: 'panchatantra-vishnu-sharma-classics',
    title: 'पंचतंत्र की अमर नीतिकथाएं (The Panchatantra) — पंडित विष्णु शर्मा',
    subtitle: 'नीति, कूटनीति, मित्र-भेद, मित्र-लाभ एवं व्यावहारिक जीवन की अमर कहानियां',
    author: 'पंडित विष्णु शर्मा (Pandit Vishnu Sharma)',
    authorBio: 'पंडित विष्णु शर्मा प्राचीन भारत के महान शिक्षक और नीतिशास्त्री थे, जिन्होंने राजकुमारों को व्यावहारिक राजनीति और बुद्धिमत्ता सिखाने के लिए पंचतंत्र की रचना की।',
    publisher: 'HK VELORA Public Domain Literary Classics',
    category: 'Stories & Literature',
    subcategory: 'Ancient Classics',
    bookType: 'E-Book',
    pages: 280,
    format: 'E-Book + Illustrated Story Reader with Moral Analysis',
    difficulty: 'All Levels',
    rating: 4.98,
    reviewCount: 650,
    badge: 'Ancient Wisdom',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-amber-700 via-yellow-800 to-stone-900',
    tags: ['Panchatantra', 'Stories', 'Hindi', 'Vishnu Sharma', 'Moral Tales', 'Wisdom', 'Public Domain'],
    topics: ['मित्र-भेद (The Separation of Friends)', 'मित्र-लाभ (The Gaining of Friends)', 'काकोलूकीयम (Of Crows and Owls - War and Peace)', 'लब्धप्रणाश (Loss of Gains)', 'अपरीक्षितकारकम् (Ill-Considered Action)', 'कछुआ और हंस', 'चतुर खरगोश और शेर', 'ब्राह्मण और नेवला'],
    language: 'Hindi with English Summaries',
    featured: true,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Public Domain',
    licenseType: 'Public Domain Classic (Ancient Sanskrit / Hindi Tradition)',
    permissionStatus: 'Public Domain',
    source: 'National Archives & Public Domain Sanskrit / Hindi Literature',
    whatYoullLearn: [
      'पंचतंत्र के पांच तंत्र: मित्र-भेद, मित्र-लाभ, काकोलूकीयम, लब्धप्रणाश और अपरीक्षितकारकम् का व्यावहारिक मर्म',
      'पशु-पक्षियों के पात्रों के माध्यम से राजनीति, मनोविज्ञान, मित्रता और संकटकालीन निर्णय क्षमता की सीख',
      'बिना सोचे-समझे किए गए कार्य के पश्चाताप का सबक (ब्राह्मण और नेवले की अमर कथा)',
      'शारीरिक बल पर बुद्धिबल की विजय (चतुर खरगोश द्वारा अहंकारी शेर भासुरक का अंत)'
    ],
    tableOfContents: [
      'प्रस्तावना: पंचतंत्र की रचना की पृष्ठभूमि — राजा अमरशक्ति के राजकुमारों की शिक्षा',
      'तंत्र 1: मित्र-भेद — बैल संजीवक और शेर पिंगलक की मित्रता में दमनक सियार का कपट',
      'तंत्र 1 कथाएं: चतुर खरगोश और शेर, बगुला और केकड़ा, बंदर और लकड़ी का खूंटा',
      'तंत्र 2: मित्र-लाभ — हिरण चित्रांग, चूहा हिरण्यक, कौआ लघुपतनक और कछुआ मंथर की अनूठी मित्रता',
      'तंत्र 2 कथाएं: जाल में फंसे कबूतरों का एकजुट होकर उड़ना, शिकारी का पश्चाताप',
      'तंत्र 3: काकोलूकीयम — कौवे और उल्लुओं का जन्मजात वैर, जासूसी और कूटनीति',
      'तंत्र 4: लब्धप्रणाश — बंदर और मगरमच्छ की दोस्ती, जामुन का फल और कलेजे का छल',
      'तंत्र 5: अपरीक्षितकारकम् — बिना विचार किए कर्म का फल: ब्राह्मण, ब्राह्मणी और निष्ठावान नेवला',
      'उपसंहार: पंचतंत्र का वैश्विक प्रसार (कलीला व दिमना, ईसप की कहानियां) और आधुनिक जीवन में प्रासंगिकता'
    ],
    chaptersPreview: [
      {
        title: 'तंत्र 5: अपरीक्षितकारकम् — ब्राह्मण और निष्ठावान नेवले की कथा',
        summary: 'एक ब्राह्मणी ने अपने नवजात शिशु के साथ एक नेवले के बच्चे को भी पाला। एक दिन जब ब्राह्मणी जल भरने गई, तो नेवले ने पालने के पास आए काले सर्प को मार गिराया। लहूलुहान नेवला प्रसन्न होकर दरवाजे पर ब्राह्मणी का स्वागत करने आया। ब्राह्मणी ने बिना सोचे यह समझा कि नेवले ने उसके बच्चे को मार दिया है और उसने जल से भरा घड़ा नेवले पर पटक दिया, जिससे नेवला मर गया। भीतर जाकर जब उसने सर्प को मरा और बच्चे को खेलता देखा, तो वह फूट-फूटकर रोने लगी।',
        keyPoints: [
          'मूल नीति श्लोक: "सहसा विदधीत न क्रियामविवेकः परमापदां पदम्" — बिना सोचे-विचारे कोई कार्य अचानक नहीं करना चाहिए; अविवेक सबसे बड़ी विपत्तियों का घर है।',
          'सत्य की जांच: क्रोध या पूर्वाग्रह में लिया गया त्वरित निर्णय केवल पश्चाताप देता है।',
          'वफादारी का सम्मान: निष्ठावान साथी पर बिना प्रमाण के संदेह करना विनाश का कारण बनता है।'
        ],
        codeSnippet: `अमर नीति सूत्र (Panchatantra):
"बुद्धिर्यस्य बलं तस्य निर्बुद्धेस्तु कुतो बलम्।
वने सिंहो मद्योन्मत्तः शशकेन निपातितः॥"
अर्थात: जिसके पास बुद्धि है, उसी के पास वास्तविक बल है; बुद्धिहीन का बल व्यर्थ है, जैसे जंगल में मतवाले शेर को छोटे खरगोश ने कुएं में गिरा दिया!`,
        realWorldUse: 'व्यक्तिगत निर्णय क्षमता, भावनात्मक संतुलन, नेतृत्व गुण और संकट प्रबंधन के लिए अनमोल।'
      }
    ],
    studyNotes: [
      'पंचतंत्र को विश्व की सर्वाधिक अनूदित पुस्तकों में गिना जाता है; 8वीं शताब्दी में इसका अरबी अनुवाद "कलीला व दिमना" नाम से अत्यंत प्रसिद्ध हुआ।',
      'मित्र-लाभ तंत्र सिखाता है कि विभिन्न स्वभाव और पृष्ठभूमि के व्यक्ति भी सच्चे विश्वास और परस्पर सहयोग से किसी भी बड़े संकट को परास्त कर सकते हैं।'
    ]
  },
  {
    id: 'sherlock-holmes-arthur-conan-doyle-classics',
    title: 'The Adventures of Sherlock Holmes — Sir Arthur Conan Doyle',
    subtitle: 'A Scandal in Bohemia, The Red-Headed League, The Speckled Band & The Science of Deduction',
    author: 'Sir Arthur Conan Doyle',
    authorBio: 'Sir Arthur Conan Doyle (1859-1930) was a Scottish physician and author who created Sherlock Holmes, the world\'s most famous consulting detective.',
    publisher: 'HK VELORA Public Domain Literary Classics',
    category: 'Stories & Literature',
    subcategory: 'Mystery & Detective',
    bookType: 'E-Book',
    pages: 310,
    format: 'E-Book + Digital Reader with Deductive Footnotes',
    difficulty: 'All Levels',
    rating: 4.97,
    reviewCount: 610,
    badge: 'Public Domain Masterpiece',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-stone-800 via-amber-950 to-slate-950',
    tags: ['Sherlock Holmes', 'Conan Doyle', 'Mystery', 'Detective', 'Deduction', 'Public Domain', 'Classics'],
    topics: ['The Science of Deduction', 'A Scandal in Bohemia (Irene Adler)', 'The Red-Headed League', 'A Case of Identity', 'The Boscombe Valley Mystery', 'The Five Orange Pips', 'The Man with the Twisted Lip', 'The Adventure of the Blue Carbuncle', 'The Adventure of the Speckled Band'],
    language: 'English with Hindi Case Summaries',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Public Domain',
    licenseType: 'Public Domain Classic (Published 1892)',
    permissionStatus: 'Public Domain',
    source: 'Project Gutenberg Archive',
    whatYoullLearn: [
      'The foundational principles of the Science of Deduction: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth."',
      'The difference between merely "seeing" and actively "observing" details (the famous 17 steps of 221B Baker Street)',
      'The intellectual brilliance of Irene Adler ("the Woman") who outwits Holmes in "A Scandal in Bohemia"',
      'Forensic logic in "The Speckled Band": tracing a murder weapon that leaves no mark (the swamp adder snake)'
    ],
    tableOfContents: [
      'Introduction: 221B Baker Street, Dr. John H. Watson & The Science of Deduction',
      'Case 1: A Scandal in Bohemia — The King of Bohemia, Irene Adler & The Hidden Photograph',
      'Case 2: The Red-Headed League — The Curious Copying of the Encyclopædia Britannica',
      'Case 3: A Case of Identity — The Disappearance of Mr. Hosmer Angel',
      'Case 4: The Boscombe Valley Mystery — The Father and Son Tragedy in the Pool',
      'Case 5: The Five Orange Pips — The Menace of the K.K.K. and The Fatal Envelope',
      'Case 6: The Man with the Twisted Lip — The Beggar of the City and The Disappeared Gentleman',
      'Case 7: The Adventure of the Blue Carbuncle — The Christmas Goose and The Stolen Gem',
      'Case 8: The Adventure of the Speckled Band — The Whistle in the Night and The Bell-Rope Trap',
      'Epilogue: The Legacy of Sherlock Holmes in Modern Forensic Science and Criminalistics'
    ],
    chaptersPreview: [
      {
        title: 'Case 8: The Adventure of the Speckled Band (Forensic Deduction)',
        summary: 'Helen Stoner consults Holmes in terror after hearing the same low whistle in the dead of night that preceded her twin sister\'s mysterious death two years earlier. Holmes and Watson investigate Stoke Moran, discovering a ventilator leading between bedrooms, a dummy bell-rope, and a clamped bed.',
        keyPoints: [
          'Observation over seeing: The bell-rope was not attached to any bell wire; the ventilator opened into another room rather than the outside air.',
          'Deductive conclusion: Dr. Roylott was training a deadly swamp adder snake with milk and a whistle to slide down the bell-rope and bite the sleeper.',
          'Poetic justice: When Holmes strikes the serpent with his cane, the agitated reptile retreats through the ventilator and strikes its cruel master.'
        ],
        codeSnippet: `Famous Holmesian Canon:
"You see, but you do not observe. The distinction is clear.
For example, you have frequently seen the steps which lead up from the hall to this room...
How many are there?"
"Well, I know there are seventeen, because I have both seen and observed."`,
        realWorldUse: 'Critical reading, observation skills, evidence evaluation, and logical debugging.'
      }
    ],
    studyNotes: [
      'Sherlock Holmes’s deductive methodology directly inspired modern crime scene investigation and forensic science.',
      'In "The Red-Headed League", notice how Holmes deduces the assistant\'s tunnel-digging activities simply by looking at the knees of his trousers and the location of the City & Suburban Bank.'
    ]
  },
  {
    id: 'sun-tzu-art-of-war-classic',
    title: 'The Art of War (युद्ध कला) — Sun Tzu (सुन् त्ज़ू)',
    subtitle: 'Ancient Strategic Masterpiece: Strategy, Psychology, Positioning & Winning Without Fighting',
    author: 'Sun Tzu (सुन् त्ज़ू)',
    authorBio: 'Sun Tzu was an ancient military general, strategist, and philosopher from the Spring and Autumn period of ancient China.',
    publisher: 'HK VELORA Public Domain Literary Classics',
    category: 'Stories & Literature',
    subcategory: 'Strategy & Philosophy',
    bookType: 'Handbook',
    pages: 190,
    format: 'E-Book + Strategic Commentary for Modern Leaders',
    difficulty: 'All Levels',
    rating: 4.96,
    reviewCount: 640,
    badge: 'Timeless Strategy',
    downloadUrl: '#',
    readOnlineUrl: '#',
    coverGradient: 'from-red-900 via-stone-900 to-black',
    tags: ['Art of War', 'Sun Tzu', 'Strategy', 'Philosophy', 'Leadership', 'Public Domain', 'Classics'],
    topics: ['Laying Plans (Calculation & Moral Law)', 'Waging War (Resource Economy)', 'Attack by Stratagem (Winning Without Fighting)', 'Tactical Dispositions (Formlessness & Invisibility)', 'Energy & Momentum (Direct vs Indirect Methods)', 'Weak Points & Strong (Water Metaphor)', 'Maneuvering & Terrain', 'The Use of Spies'],
    language: 'Bilingual (English Translation & Hindi Practical Insights)',
    featured: false,
    studentPick: true,
    price: 0,
    isFree: true,
    copyrightStatus: 'Public Domain',
    licenseType: 'Public Domain Classic (Pre-Common Era / Ancient World Heritage)',
    permissionStatus: 'Public Domain',
    source: 'Project Gutenberg Archive & Lionel Giles Translation (1910)',
    whatYoullLearn: [
      'The supreme art of war: "To subdue the enemy without fighting is the acme of skill."',
      'The Five Constant Factors of strategic success: Moral Law, Heaven (Timing), Earth (Terrain), Commander (Wisdom & Discipline), and Method',
      'The principle of self-knowledge and competitor analysis: "If you know the enemy and know yourself, you need not fear the result of a hundred battles."',
      'Adaptability like water: "Just as water shapes its course according to the ground, so does an army work out its victory in relation to the enemy."'
    ],
    tableOfContents: [
      'Chapter 1: Laying Plans — The Five Factors and Seven Deliberations',
      'Chapter 2: Waging War — The Cost of Prolonged Conflict and Resource Economy',
      'Chapter 3: Attack by Stratagem — The Hierarchy of Strategy: Supreme Victory Without Battle',
      'Chapter 4: Tactical Dispositions — Invicibility Resides in Defense; Opportunity in Attack',
      'Chapter 5: Energy — Direct (Zheng) and Indirect (Qi) Maneuvers',
      'Chapter 6: Weak Points and Strong — Emptiness and Fullness; The Water Analogy',
      'Chapter 7: Maneuvering — Turning the Devious into the Direct; The Deception Principle',
      'Chapter 8: Variation in Tactics — The Five Pitfalls of a General',
      'Chapter 9: The Army on the March — Reading the Signs of the Natural Environment',
      'Chapter 10: Classification of Terrain — Accessible, Entangling, Temporizing, Narrow, Precipitous',
      'Chapter 11: The Nine Situations — Psychology of Pressure and Desperate Ground',
      'Chapter 12: The Attack by Fire — Psychological Warfare and Control of Anger',
      'Chapter 13: The Use of Spies — The Five Classes of Espionage and Foresight'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: Attack by Stratagem (Winning Without Conflict)',
        summary: 'Presents Sun Tzu\'s most celebrated strategic doctrine: highest excellence is not winning a hundred victories in a hundred battles, but frustrating the opponent\'s plans before battle ever begins.',
        keyPoints: [
          'Strategic hierarchy: The best general thwarts the enemy\'s strategy; next best breaks up alliances; next best attacks the army in the field; the worst is besieging walled cities.',
          'Rule of Numerical Superiority: If ten times the enemy, surround them; if five times, attack; if twice, divide them; if equal, offer battle; if fewer, avoid them.',
          'The three ways a sovereign brings misfortune: interfering with military decisions without operational understanding.'
        ],
        codeSnippet: `Timeless Strategy Axioms (Sun Tzu):
1. "Hence to fight and conquer in all your battles is not supreme excellence;
   supreme excellence consists in breaking the enemy's resistance without fighting."
2. "If you know the enemy and know yourself, you need not fear the result of a hundred battles.
   If you know yourself but not the enemy, for every victory gained you will also suffer a defeat.
   If you know neither the enemy nor yourself, you will succumb in every battle."`,
        realWorldUse: 'Widely studied in corporate strategy, legal negotiations, sports game planning, diplomacy, and crisis management.'
      }
    ],
    studyNotes: [
      'Sun Tzu emphasizes that anger must never dictate action: "A king may in time be happy again; they who are destroyed can never exist again."',
      'The concept of "Desperate Ground": soldiers fight with tenfold ferocity when they realize there is no retreat, turning potential defeat into unexpected victory.'
    ]
  }
];
