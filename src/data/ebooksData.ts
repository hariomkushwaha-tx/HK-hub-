import { EBookItem } from '../types';

export const EBOOKS_DATA: EBookItem[] = [
  {
    id: 'dsa-handbook',
    title: 'Data Structures & Algorithms: The Technical Interview & Exam Guide',
    subtitle: 'From Big-O Foundations to Graph Traversal and Dynamic Programming',
    slug: 'dsa-handbook',
    author: 'HK HUB Academic Team & Open CS Community',
    authorId: 'hk-academic',
    authorBio: 'Curated by senior software engineers and university faculty.',
    publisher: 'HK HUB Open Academic Press',
    category: 'Coding & Programming',
    subcategory: 'Algorithms & Data Structures',
    genre: 'Computer Science Textbook',
    bookType: 'Handbook',
    description: 'A comprehensive, student-friendly deep dive into core data structures (Arrays, Linked Lists, Trees, Graphs, Heaps) and algorithm paradigms (Dynamic Programming, Greedy, Backtracking, Divide & Conquer) with step-by-step Big-O proofs, interview patterns, and clean code examples.',
    shortDescription: 'Master DSA, Big-O analysis, and interview patterns with practical code snippets and study notes.',
    pages: 420,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.9,
    reviewCount: 428,
    badge: 'Campus Favorite',
    coverGradient: 'from-indigo-600 via-blue-700 to-cyan-800',
    downloadUrl: 'https://opendatastructures.org/ods-cpp/',
    readOnlineUrl: 'https://opendatastructures.org/ods-cpp/',
    tags: ['DSA', 'Algorithms', 'LeetCode', 'Interview Prep', 'C++', 'Java', 'Python'],
    topics: ['Big-O Analysis', 'Binary Trees', 'Graphs & Dijkstra', 'Dynamic Programming', 'Two-Pointer'],
    language: 'English & Hinglish Notes',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'August 2025',
    isbn: '978-93-89123-01-4',
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    hasAudioBook: true,
    narrator: 'Prof. A. K. Verma',
    audioDuration: '6h 15m',
    whatYoullLearn: [
      'Derive worst, average, and amortized Big-O time & space complexities',
      'Solve sliding window, two-pointer, and fast & slow pointer problems effortlessly',
      'Master binary trees, self-balancing AVL trees, and Trie structures',
      'Implement Graph BFS, DFS, Dijkstra, and Topological Sort with ease',
      'Deconstruct overlapping subproblems into optimal DP state transitions'
    ],
    tableOfContents: [
      '1. Complexity Analysis & Master Theorem for Big-O',
      '2. Arrays, Strings & Two-Pointer / Sliding Window Techniques',
      '3. Linked Lists: Singly, Doubly & Circular Implementation',
      '4. Stacks & Queues: Monotonic Stacks and Expression Parsing',
      '5. Hash Tables: Collision Resolution & Open Addressing',
      '6. Binary Trees, BSTs & Self-Balancing AVL / Red-Black Trees',
      '7. Heaps & Priority Queues: Min-Heap, Max-Heap & Heap Sort',
      '8. Graphs: BFS, DFS, Dijkstra, Bellman-Ford & Minimum Spanning Trees',
      '9. Dynamic Programming: 1D, 2D Memoization & Tabulation Patterns',
      '10. System Design & Complexity Trade-Offs'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Master Theorem & Asymptotic Analysis',
        summary: 'Understanding how algorithm performance scales with input size n. Contrast worst-case O(n), average-case Θ(n), and best-case Ω(n).',
        keyPoints: [
          'Time Complexity is not execution seconds; it counts basic operations.',
          'Binary search achieves O(log n) because the search space halves every iteration.',
          'Dynamic arrays amortize append operations to O(1) by doubling capacity upon overflow.'
        ],
        codeSnippet: `// Binary Search in TypeScript / JavaScript
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1; // Not found
}`
      },
      {
        title: 'Chapter 2: Arrays, Strings & Two-Pointer Techniques',
        summary: 'Deep dive into array indexing, memory locality, and two-pointer traversal patterns that turn brute force O(n²) into linear O(n).',
        keyPoints: [
          'Two-pointer works when the array is sorted or directional invariants hold.',
          'Sliding window tracks contiguous subsegments with dynamic expand/shrink boundaries.',
          'Prefix sums provide O(1) range sum queries after O(n) preprocessing.'
        ],
        codeSnippet: `// Two-Pointer: Two Sum on Sorted Array
function twoSumSorted(nums: number[], target: number): [number, number] | null {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return null;
}`
      },
      {
        title: 'Chapter 8: Graph Traversal & Dijkstra Algorithm',
        summary: 'Representing graphs with Adjacency Lists vs Matrices, implementing Breadth-First Search (shortest path unweighted) and Dijkstra (weighted positive edges).',
        keyPoints: [
          'BFS uses a FIFO Queue and finds the shortest path in unweighted graphs in O(V + E).',
          'DFS uses a LIFO Stack or recursion, ideal for topological sort and cycle detection.',
          'Dijkstra uses a Min-Heap Priority Queue to achieve O((V + E) log V).'
        ],
        codeSnippet: `// BFS using Adjacency List
function bfs(graph: Map<string, string[]>, start: string): string[] {
  const visited = new Set<string>([start]);
  const queue: string[] = [start];
  const order: string[] = [];
  while (queue.length > 0) {
    const node = queue.shift()!;
    order.push(node);
    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return order;
}`
      },
      {
        title: 'Chapter 9: Dynamic Programming Framework',
        summary: 'Transform exponential recursion into polynomial time via optimal substructure and overlapping subproblems.',
        keyPoints: [
          'Step 1: Define the state dp[i] clearly in plain English.',
          'Step 2: Formulate the recurrence relation between dp[i] and earlier states.',
          'Step 3: Establish base cases (e.g. dp[0] = 0, dp[1] = 1).',
          'Space optimization often lets you reduce O(n) array space to O(1) variables.'
        ]
      }
    ],
    studyNotes: [
      'Tip for Exams: Always state time and space complexity explicitly before writing code.',
      'Always test edge cases: empty array [], single element [1], duplicates [2,2,2], and negative values.',
      'Remember: Quicksort is O(n log n) average but O(n²) worst case; Mergesort is guaranteed O(n log n) but requires O(n) extra auxiliary memory.'
    ]
  },
  {
    id: 'genai-prompt-engineering',
    title: 'Generative AI & Prompt Engineering: The Modern Builder’s Handbook',
    subtitle: 'From Zero to Production LLM Systems, Function Calling & AI Agents',
    slug: 'genai-prompt-engineering',
    author: 'Dr. Priya Nair',
    authorId: 'dr-priya-nair',
    authorBio: 'AI Researcher & Applied ML Lead specializing in LLM architectures and agents.',
    publisher: 'HK HUB Tech Press',
    category: 'Artificial Intelligence',
    subcategory: 'Generative AI & LLMs',
    genre: 'AI Architecture Guide',
    bookType: 'Handbook',
    description: 'A masterclass textbook on building real-world AI applications with Gemini, Claude, and OpenAI models. Covers chain-of-thought prompting, retrieval augmented generation (RAG), vector databases, tool/function calling, and multi-agent systems with complete TypeScript & Python blueprints.',
    shortDescription: 'Build next-generation AI apps, understand RAG pipelines, and master advanced prompt engineering.',
    pages: 350,
    format: 'E-Book & Interactive',
    difficulty: 'Intermediate',
    rating: 4.95,
    reviewCount: 312,
    badge: 'Trending AI Masterclass',
    coverGradient: 'from-purple-600 via-indigo-700 to-pink-700',
    downloadUrl: 'https://hkhub.dev/library/genai-handbook',
    readOnlineUrl: 'https://hkhub.dev/library/genai-handbook',
    tags: ['AI', 'Generative AI', 'Gemini', 'Prompt Engineering', 'RAG', 'LLMs', 'Agents'],
    topics: ['System Prompts', 'Few-Shot Learning', 'Vector Embeddings', 'RAG Pipelines', 'Agent Loops'],
    language: 'English',
    featured: true,
    trending: true,
    dealOfTheDay: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89123-09-2',
    price: 149,
    originalPrice: 299,
    discountPercentage: 50,
    isFree: false,
    copyrightStatus: 'HK HUB Exclusive & Authorized',
    hasAudioBook: true,
    narrator: 'Dr. Priya Nair',
    audioDuration: '5h 40m',
    whatYoullLearn: [
      'Design reliable system prompts with few-shot examples and output constraints',
      'Build production RAG pipelines with semantic chunking and hybrid vector search',
      'Implement structured JSON outputs and function calling with tool declarations',
      'Orchestrate autonomous agent loops with self-reflection and error recovery',
      'Mitigate hallucination, prompt injection, and token cost bottlenecks'
    ],
    tableOfContents: [
      '1. Foundational Architecture of Transformer LLMs & Attention Mechanisms',
      '2. Advanced Prompt Engineering: CoT, ReAct & Tree of Thoughts',
      '3. Embeddings & Semantic Search: Cosine Similarity, HNSW & Vector DBs',
      '4. Retrieval-Augmented Generation (RAG): Chunking, Indexing & Re-Ranking',
      '5. Function Calling & Tool Orchestration with Structured JSON Schemas',
      '6. Building Autonomous AI Agents: Loops, Memory & Tool Chains',
      '7. Multimodal AI: Vision, Audio & Document Understanding',
      '8. AI Safety, Guardrails, Prompt Injection Prevention & Compliance',
      '9. Token Economy & Latency Optimization for Production Deployments'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: Chain-of-Thought & Structured Output Engineering',
        summary: 'Why zero-shot prompts fail on complex reasoning and how to trigger step-by-step inference tokens.',
        keyPoints: [
          'Chain-of-Thought forces the model to emit intermediate tokens that refine calculation probability.',
          'Delimiters (###, XML tags, or markdown backticks) separate user context from system rules.',
          'Always supply negative constraints: "Do NOT assume facts not present in the context."'
        ],
        codeSnippet: `// Example System Prompt Blueprint
const SYSTEM_PROMPT = \`You are an expert full-stack code auditor.
When reviewing code:
1. First verify syntax correctness.
2. Identify potential memory leaks and Big-O bottlenecks.
3. Return output strictly adhering to JSON schema:
{"status": "pass" | "fail", "issues": [{"line": number, "message": string}]}\`;`
      },
      {
        title: 'Chapter 4: Production RAG Architectures',
        summary: 'Going beyond naive top-k vector retrieval to recursive chunking, BM25 keyword hybrid search, and cross-encoder re-ranking.',
        keyPoints: [
          'Small chunks preserve precision; large chunks preserve contextual coherence.',
          'Hybrid search combines dense embeddings (semantic) with sparse BM25 (keyword exact match).',
          'Cross-encoders re-rank candidate documents to eliminate irrelevant context.'
        ]
      }
    ],
    studyNotes: [
      'In LLMs, temperature controls randomness: use 0.0 to 0.2 for deterministic code/data extraction, and 0.7 for creative brainstorming.',
      'Always sanitize user inputs to prevent direct prompt injection attacks.'
    ]
  },
  {
    id: 'automate-python',
    title: 'Automate Practical Tasks with Modern Python',
    subtitle: 'Practical Programming for Students, Automators, and Everyday Builders',
    slug: 'automate-python',
    author: 'Al Sweigart & Community Contributors',
    authorId: 'al-sweigart',
    authorBio: 'Developer, author, and teacher who has taught millions how to code.',
    publisher: 'No Starch & Creative Commons',
    category: 'Coding & Programming',
    subcategory: 'Python & Automation',
    genre: 'Practical Programming',
    bookType: 'Handbook',
    description: 'Learn practical programming for students and working professionals. Automate web scraping, spreadsheet parsing, PDF merging, email notifications, and file system management without unnecessary computer science jargon.',
    shortDescription: 'Automate boring tasks, scrape web data, parse Excel sheets, and write everyday scripts in Python.',
    pages: 480,
    format: 'Open Textbook',
    difficulty: 'Beginner',
    rating: 4.9,
    reviewCount: 512,
    badge: 'Beginner Friendly',
    coverGradient: 'from-amber-500 via-orange-600 to-rose-700',
    downloadUrl: 'https://automatetheboringstuff.com/',
    readOnlineUrl: 'https://automatetheboringstuff.com/',
    tags: ['Python', 'Automation', 'Web Scraping', 'File Handling', 'Productivity'],
    topics: ['Python Basics', 'Regex', 'Web Scraping', 'Excel & CSV', 'File Systems'],
    language: 'English',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2024 Updated',
    updatedDate: 'May 2025',
    isbn: '978-15-93279-92-9',
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    hasAudioBook: false,
    whatYoullLearn: [
      'Write clean Python scripts to automate repetitive desktop and internet workflows',
      'Master regular expressions (regex) to search and extract phone numbers and emails',
      'Scrape live web pages with Requests and BeautifulSoup without getting blocked',
      'Batch edit, read, and calculate formulas across hundreds of Excel workbooks',
      'Organize, rename, and zip files across deep directory hierarchies in seconds'
    ],
    tableOfContents: [
      '1. Python Basics: Variables, Loops & Functions',
      '2. Lists, Dictionaries & Structuring Real-World Data',
      '3. Pattern Matching with Regular Expressions (Regex)',
      '4. Reading, Writing & Organizing Files on Disk',
      '5. Web Scraping with Requests, BeautifulSoup & Selenium',
      '6. Automating Excel Spreadsheets with openpyxl',
      '7. Working with PDF & Word Documents in Python',
      '8. Sending Scheduled Emails, WhatsApp & SMS Notifications',
      '9. Image Manipulation with Pillow & Computer Vision Basics',
      '10. Controlling Keyboard & Mouse GUI Automation with PyAutoGUI'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 4: File Manipulation & Batch Renaming',
        summary: 'How to use pathlib and os modules to iterate through gigabytes of lecture slides or research PDFs and batch rename them systematically.',
        keyPoints: [
          'pathlib.Path provides cross-platform path handling for Windows, macOS, and Linux.',
          'Always use safe dry-runs (print before rename) to avoid accidental file deletion.',
          'os.walk() recursively traverses subdirectories cleanly.'
        ],
        codeSnippet: `import os
from pathlib import Path

folder = Path("./lecture_notes")
for index, file in enumerate(folder.glob("*.pdf"), start=1):
    new_name = folder / f"Chapter_{index:02d}_{file.stem}.pdf"
    print(f"Renaming {file.name} -> {new_name.name}")
    # file.rename(new_name)`
      }
    ],
    studyNotes: [
      'Python strings are immutable. Any replace() or strip() call returns a brand new string.',
      'Always close file handles by using the "with open(...) as f:" context manager syntax.'
    ]
  },
  {
    id: 'ai-for-students',
    title: 'Artificial Intelligence for Students: From Classroom to Tech Career',
    subtitle: 'The Ultimate Practical Primer on AI Concepts, Research Tools, and Project Portfolios',
    slug: 'ai-for-students',
    author: 'HK HUB Academic & Engineering Team',
    authorId: 'hk-academic',
    authorBio: 'HK HUB Technical Research & Student Mentorship Division.',
    publisher: 'HK HUB Publications',
    category: 'Student & Education',
    subcategory: 'AI for Education',
    genre: 'Student Guide',
    bookType: 'Guide',
    description: 'Specially crafted for college and high-school students exploring AI. Demystifies machine learning math, explains how generative models work, teaches effective AI-assisted study methods, and provides 10 portfolio project roadmaps that stand out on resumes.',
    shortDescription: 'Demystify AI, master academic research tools, and build resume-winning student projects.',
    pages: 260,
    format: 'E-Book & PDF',
    difficulty: 'Beginner',
    rating: 4.88,
    reviewCount: 284,
    badge: 'Student Essential',
    coverGradient: 'from-cyan-600 via-teal-700 to-slate-900',
    downloadUrl: 'https://hkhub.dev/library/ai-for-students',
    readOnlineUrl: 'https://hkhub.dev/library/ai-for-students',
    tags: ['Student AI', 'Study Skills', 'Machine Learning', 'Projects', 'Career'],
    topics: ['AI Foundations', 'Study Techniques', 'Research Tools', 'Portfolio Projects', 'Ethics'],
    language: 'English & Hindi Highlights',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'July 2025',
    isbn: '978-93-89123-04-5',
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    hasAudioBook: true,
    narrator: 'Pooja Sharma',
    audioDuration: '4h 10m',
    whatYoullLearn: [
      'Understand how Neural Networks, LLMs, and Computer Vision function without complex math',
      'Use AI tools responsibly for literature review, code debugging, and concept revision',
      'Avoid plagiarism and academic integrity pitfalls when utilizing generative tools',
      'Build 10 resume-worthy student machine learning projects from scratch',
      'Prepare for campus technical placements and research internships in AI'
    ],
    tableOfContents: [
      '1. What is Modern AI? Debunking Myths vs Reality',
      '2. How Machines Learn: Supervised, Unsupervised & Reinforcement',
      '3. Deep Learning Demystified: Layers, Weights & Activation Functions',
      '4. Generative AI & Large Language Models Explained Simply',
      '5. Ethical AI for Students: Plagiarism, Verification & Critical Thinking',
      '6. AI Tools for Academic Research, Paper Summaries & Literature Review',
      '7. 10 High-Impact Student Capstone Projects You Can Build Today',
      '8. Preparing for Campus Placement Interviews in AI & Data Science'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: What is Modern AI? Debunking Myths vs Reality',
        summary: 'Understanding AI as statistical prediction engines rather than conscious entities.',
        keyPoints: [
          'AI calculates conditional probabilities based on billions of training text tokens.',
          'Hallucinations occur because models prioritize linguistic fluency over factual verification.',
          'Critical thinking and human-in-the-loop verification remain indispensable skills.'
        ]
      },
      {
        title: 'Chapter 7: 10 High-Impact Student Capstone Projects',
        summary: 'Project blueprints spanning intelligent document search, automated exam paper generators, and student mental wellness chatbots.',
        keyPoints: [
          'Examiners look for end-to-end functionality rather than massive model sizes.',
          'A working MVP with a clean user interface beats an incomplete complex neural net every time.'
        ]
      }
    ],
    studyNotes: [
      'Always cite your sources and verify AI generated mathematical formulas before including them in college assignments.',
      'Remember: "Garbage in, garbage out" applies to every dataset you train or fine-tune.'
    ]
  },
  {
    id: 'clean-code-architecture',
    title: 'Clean Code Architecture & Systems Design Guide',
    subtitle: 'Building Maintainable, Fault-Tolerant, and Modular Production Software',
    slug: 'clean-code-architecture',
    author: 'Vikram Sen & Tech Leads Community',
    authorId: 'vikram-sen',
    authorBio: 'Cloud Native & Infrastructure Architect with 15+ years in high-scale systems.',
    publisher: 'HK HUB Technical Press',
    category: 'Coding & Programming',
    subcategory: 'Software Engineering & Architecture',
    genre: 'Engineering Architecture',
    bookType: 'Handbook',
    description: 'A pragmatic handbook on writing readable, testable, and robust enterprise software. Covers SOLID principles, Hexagonal & Clean Architecture, domain-driven design (DDD), design patterns, and microservices trade-offs with production TypeScript and Go examples.',
    shortDescription: 'Write maintainable, bug-resistant code and master real-world systems architecture.',
    pages: 380,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.92,
    reviewCount: 198,
    badge: 'Industry Essential',
    coverGradient: 'from-emerald-600 via-teal-700 to-indigo-900',
    downloadUrl: 'https://hkhub.dev/library/clean-code',
    readOnlineUrl: 'https://hkhub.dev/library/clean-code',
    tags: ['Clean Code', 'SOLID', 'Architecture', 'Design Patterns', 'TypeScript', 'Refactoring'],
    topics: ['SOLID Principles', 'Hexagonal Architecture', 'Design Patterns', 'Unit Testing', 'Refactoring'],
    language: 'English',
    featured: false,
    trending: true,
    dealOfTheDay: true,
    yearPublished: '2025 Edition',
    updatedDate: 'June 2025',
    isbn: '978-93-89123-05-2',
    price: 99,
    originalPrice: 199,
    discountPercentage: 50,
    isFree: false,
    copyrightStatus: 'HK HUB Exclusive & Authorized',
    hasAudioBook: true,
    narrator: 'Vikram Sen',
    audioDuration: '5h 10m',
    whatYoullLearn: [
      'Apply SOLID principles to decouple monolithic codebases into testable modules',
      'Design clean Domain-Driven models with clear aggregates and value objects',
      'Implement Factory, Observer, Strategy, and Repository patterns cleanly',
      'Master dependency injection and inversion of control (IoC)',
      'Perform safe refactoring without breaking production regression tests'
    ],
    tableOfContents: [
      '1. The Philosophy of Readable Code & Technical Debt',
      '2. Meaningful Naming, Small Functions & Eliminating Side Effects',
      '3. Mastering SOLID Principles with Concrete Refactoring Examples',
      '4. Domain-Driven Design (DDD) for Real-World Applications',
      '5. Hexagonal / Ports & Adapters Architecture in TypeScript',
      '6. Essential Gang of Four Design Patterns for Modern Software',
      '7. Writing Bulletproof Unit & Integration Tests (TDD & BDD)',
      '8. Error Handling, Logging, Metrics & Observability in Production'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: SOLID Principles in Practice',
        summary: 'Detailed decomposition of Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.',
        keyPoints: [
          'Single Responsibility: A class should have one, and only one, reason to change.',
          'Dependency Inversion: Depend upon abstractions, not concretions.',
          'Interface Segregation: Clients should not be forced to depend on methods they do not use.'
        ],
        codeSnippet: `// Dependency Inversion Principle
interface PaymentGateway {
  charge(amount: number): Promise<boolean>;
}

class StripeGateway implements PaymentGateway {
  async charge(amount: number) { /* Stripe API call */ return true; }
}

class CheckoutService {
  constructor(private gateway: PaymentGateway) {}
  async processOrder(total: number) {
    return this.gateway.charge(total);
  }
}`
      }
    ],
    studyNotes: [
      'Premature optimization is the root of all evil. Write clean, readable code first; benchmark before optimizing.',
      'Code is read ten times more often than it is written.'
    ]
  },
  {
    id: 'cybersecurity-zero-trust',
    title: 'Cybersecurity Essentials, Ethical Hacking & Zero-Trust Defense',
    subtitle: 'Network Security, Web Penetration Testing, Cryptography & Threat Modeling',
    slug: 'cybersecurity-zero-trust',
    author: 'Elena Rostova & Security Community',
    authorId: 'elena-rostova',
    authorBio: 'Staff Security Researcher specializing in offensive security and threat hunting.',
    publisher: 'Open Security Press & HK HUB',
    category: 'Cybersecurity & Safety',
    subcategory: 'Ethical Hacking & Defense',
    genre: 'Security Manual',
    bookType: 'Handbook',
    description: 'An authoritative, hands-on guide to protecting modern networks and web applications. Covers OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, SSRF), network reconnaissance with Nmap & Wireshark, asymmetric cryptography, zero-trust perimeter defense, and CTF security challenges.',
    shortDescription: 'Master web security, ethical hacking, OWASP Top 10 defenses, and zero-trust systems.',
    pages: 440,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.94,
    reviewCount: 240,
    badge: 'Security Must-Read',
    coverGradient: 'from-red-600 via-rose-700 to-slate-950',
    downloadUrl: 'https://hkhub.dev/library/cybersecurity-guide',
    readOnlineUrl: 'https://hkhub.dev/library/cybersecurity-guide',
    tags: ['Cybersecurity', 'Ethical Hacking', 'OWASP', 'Penetration Testing', 'Cryptography'],
    topics: ['OWASP Top 10', 'Wireshark & Nmap', 'Public Key Crypto', 'Zero Trust', 'Authentication'],
    language: 'English',
    featured: true,
    trending: true,
    yearPublished: '2025 Edition',
    updatedDate: 'August 2025',
    isbn: '978-93-89123-06-9',
    price: 199,
    originalPrice: 399,
    discountPercentage: 50,
    isFree: false,
    copyrightStatus: 'Authorized Academic Release',
    hasAudioBook: true,
    narrator: 'Elena Rostova',
    audioDuration: '6h 30m',
    whatYoullLearn: [
      'Detect, exploit, and remediate OWASP Top 10 web vulnerabilities safely',
      'Analyze encrypted network packets and TLS handshakes using Wireshark',
      'Implement zero-trust security perimeters with least-privilege RBAC',
      'Understand RSA, Diffie-Hellman, and Elliptic Curve asymmetric cryptography',
      'Audit API endpoints for broken object level authorization (BOLA)'
    ],
    tableOfContents: [
      '1. Introduction to Cyber Threat Landscapes & Threat Modeling',
      '2. Network Reconnaissance & Port Scanning with Nmap and Scapy',
      '3. Packet Inspection & Traffic Analysis with Wireshark',
      '4. Web Application Security: OWASP Top 10 Deep Dive',
      '5. SQL Injection (SQLi) & Cross-Site Scripting (XSS) Prevention',
      '6. Cryptography: Ciphers, Hashing, Salts & Public Key Infrastructure',
      '7. Authentication, Session Security, OAuth 2.0 & JWT Best Practices',
      '8. Cloud Security & Zero-Trust Architecture Implementation',
      '9. Incident Response, Forensics & Bug Bounty Methodologies'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 4: Web Application Security & OWASP Top 10',
        summary: 'Understanding how malicious payloads compromise servers via injection, broken access control, and insecure cryptographic storage.',
        keyPoints: [
          'Parameterized queries and ORM prepared statements are the ONLY guaranteed defense against SQL injection.',
          'Never store passwords in plain text or simple MD5; always use Argon2id or bcrypt with high work factors.',
          'Enforce Content Security Policy (CSP) headers to neutralize cross-site scripting (XSS).'
        ],
        codeSnippet: `// Secure Password Hashing Example
import bcrypt from 'bcrypt';

async function hashPassword(plainText: string): Promise<string> {
  const saltRounds = 12;
  return bcrypt.hash(plainText, saltRounds);
}

async function verifyPassword(plainText: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plainText, hash);
}`
      }
    ],
    studyNotes: [
      'Security is a process, not a product. Systems are only as secure as their weakest human link.',
      'Always practice security testing exclusively on authorized test environments (like DVWA or TryHackMe).'
    ]
  },
  {
    id: 'cloud-native-devops',
    title: 'Cloud Computing, Docker & Kubernetes: Zero to Production',
    subtitle: 'Containerization, Microservices, CI/CD Pipelines, and Infrastructure as Code',
    slug: 'cloud-native-devops',
    author: 'Vikram Sen',
    authorId: 'vikram-sen',
    authorBio: 'CNCF Contributor and Cloud Native Systems Architect.',
    publisher: 'HK HUB Cloud Press',
    category: 'Cloud & Internet',
    subcategory: 'DevOps & Containers',
    genre: 'DevOps Manual',
    bookType: 'Handbook',
    description: 'Everything a modern software engineer needs to deploy, scale, and monitor cloud-native applications. Learn Docker multi-stage builds, Kubernetes Pods/Deployments/Ingress, Helm charts, GitHub Actions CI/CD, and Terraform infrastructure management.',
    shortDescription: 'Master Docker containerization, Kubernetes clusters, CI/CD pipelines, and cloud scaling.',
    pages: 390,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.91,
    reviewCount: 165,
    badge: 'DevOps Blueprint',
    coverGradient: 'from-blue-600 via-sky-700 to-indigo-900',
    downloadUrl: 'https://hkhub.dev/library/cloud-devops',
    readOnlineUrl: 'https://hkhub.dev/library/cloud-devops',
    tags: ['Docker', 'Kubernetes', 'Cloud', 'DevOps', 'CI/CD', 'AWS', 'Linux'],
    topics: ['Containers', 'Kubernetes Pods', 'Helm Charts', 'GitHub Actions', 'Terraform'],
    language: 'English',
    featured: false,
    trending: false,
    dealOfTheDay: true,
    yearPublished: '2025 Edition',
    updatedDate: 'July 2025',
    isbn: '978-93-89123-07-6',
    price: 149,
    originalPrice: 299,
    discountPercentage: 50,
    isFree: false,
    copyrightStatus: 'HK HUB Exclusive & Authorized',
    hasAudioBook: false,
    whatYoullLearn: [
      'Write production multi-stage Dockerfiles with minimal image attack surfaces',
      'Architect Kubernetes clusters with Pods, Deployments, Services, and Ingress',
      'Configure auto-scaling (HPA) and zero-downtime rolling updates',
      'Build automated CI/CD pipelines with GitHub Actions and container registries',
      'Provision infrastructure as code safely with Terraform'
    ],
    tableOfContents: [
      '1. Cloud Computing Evolution: Bare Metal, VMs & Containers',
      '2. Mastering Docker: Images, Multi-Stage Builds & Docker Compose',
      '3. Kubernetes Architecture: Control Plane, Nodes & Kubelet',
      '4. Managing Workloads: Pods, ReplicaSets, Deployments & StatefulSets',
      '5. Cluster Networking, ClusterIP, NodePort & Ingress Controllers',
      '6. Package Management with Helm & GitOps with ArgoCD',
      '7. Continuous Integration & Deployment (CI/CD) with GitHub Actions',
      '8. Monitoring & Observability: Prometheus, Grafana & OpenTelemetry'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: Production Multi-Stage Dockerfiles',
        summary: 'How multi-stage builds separate development dependencies and compilers from the lightweight runtime image.',
        keyPoints: [
          'Stage 1 compiles TypeScript/Go code with full dev dependencies.',
          'Stage 2 copies only the compiled output into a distroless or Alpine base.',
          'Reduces final image size from 1.2GB down to under 50MB!'
        ],
        codeSnippet: `# Multi-Stage Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]`
      }
    ],
    studyNotes: [
      'Never run containers as root user in production; always specify "USER node" or a non-privileged UID.',
      'Always specify explicit CPU and memory resource requests and limits in your Kubernetes manifests.'
    ]
  },
  {
    id: 'computer-systems-hardware',
    title: 'Computer Systems, PC Architecture & Hardware Fundamentals',
    subtitle: 'From Transistors & Logic Gates to CPUs, Memory Hierarchies, and Operating Systems',
    slug: 'computer-systems-hardware',
    author: 'HK HUB Academic Team',
    authorId: 'hk-academic',
    authorBio: 'HK HUB Technical Curriculum Division.',
    publisher: 'HK HUB Publications',
    category: 'Computers & PC',
    subcategory: 'Hardware & Architecture',
    genre: 'Hardware Textbook',
    bookType: 'Handbook',
    description: 'An illuminating, accessible guide to how computers actually work at the silicon level. Covers boolean logic, CPU arithmetic logic units (ALU), cache hierarchies (L1/L2/L3), assembly language, motherboard buses, storage controllers (NVMe, SSD), and OS interrupt handling.',
    shortDescription: 'Understand how computers work under the hood: CPUs, memory caches, motherboards, and assembly.',
    pages: 360,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.89,
    reviewCount: 176,
    badge: 'Hardware Fundamentals',
    coverGradient: 'from-slate-700 via-gray-800 to-zinc-950',
    downloadUrl: 'https://hkhub.dev/library/pc-systems',
    readOnlineUrl: 'https://hkhub.dev/library/pc-systems',
    tags: ['PC Architecture', 'Hardware', 'CPUs', 'Memory', 'Operating Systems', 'Assembly'],
    topics: ['Logic Gates', 'ALU & Registers', 'Cache Locality', 'Assembly Basics', 'Motherboard Buses'],
    language: 'English',
    featured: false,
    trending: false,
    yearPublished: '2025 Edition',
    updatedDate: 'May 2025',
    isbn: '978-93-89123-08-3',
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    hasAudioBook: false,
    whatYoullLearn: [
      'Understand how boolean gates combine to form adders and CPU arithmetic units',
      'Appreciate CPU cache lines and write cache-friendly high performance code',
      'Inspect registers, the instruction pointer, and stack/heap memory allocation',
      'Diagnose hardware bottlenecks across CPU, RAM, NVMe SSD, and PCIe lanes',
      'Learn how operating systems handle hardware interrupts and context switching'
    ],
    tableOfContents: [
      '1. The Foundations: Binary, Hexadecimal, Transistors & Boolean Gates',
      '2. Inside the Processor: ALU, Control Unit, Registers & Clock Cycles',
      '3. The Memory Hierarchy: Registers, L1/L2/L3 Caches, RAM & Virtual Memory',
      '4. Motherboards, PCIe Lanes, Chipsets & Northbridge/Southbridge Evolution',
      '5. Storage Systems: Hard Drives, NAND Flash, NVMe Protocols & Wear Leveling',
      '6. Introduction to Assembly Language (x86-64 & ARM64 Architecture)',
      '7. Graphics Processing Units (GPUs) vs Central Processing Units (CPUs)',
      '8. Troubleshooting Hardware Failures, Thermal Throttling & PC Assembly'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: The Memory Hierarchy & Cache Locality',
        summary: 'Why cache misses cause hundreds of wasted CPU clock cycles and how memory access patterns affect runtime speed.',
        keyPoints: [
          'Spatial Locality: If you access memory at address x, you will likely access address x+1 soon.',
          'Temporal Locality: If you access memory at address x, you will likely access it again soon.',
          'Row-major array traversal is drastically faster than column-major traversal because of cache line prefetching.'
        ]
      }
    ],
    studyNotes: [
      'L1 Cache access takes ~1 nanosecond (4 clock cycles), while accessing main RAM takes ~100 nanoseconds (~300 clock cycles).',
      'Always monitor thermal throttling using HWMonitor or CPU-Z when analyzing system performance degradation.'
    ]
  },
  {
    id: 'modern-web-development',
    title: 'Modern Full-Stack Web Development with React, Node & TypeScript',
    subtitle: 'Building Scalable Web Applications, REST APIs, Authentication, and Modern UIs',
    slug: 'modern-web-development',
    author: 'HK HUB Web Guild',
    authorId: 'hk-academic',
    authorBio: 'Open-source web engineers and instructors.',
    publisher: 'HK HUB Open Press',
    category: 'Web Development',
    subcategory: 'Fullstack Engineering',
    genre: 'Web Development Guide',
    bookType: 'Handbook',
    description: 'A complete, project-driven guide to modern web development. Covers HTML5 semantic markup, Tailwind CSS styling, React hooks & state management, Node.js Express APIs, SQL/NoSQL databases, and fullstack deployment.',
    shortDescription: 'Build full-stack web applications with React, TypeScript, Express, Tailwind, and databases.',
    pages: 410,
    format: 'Open Textbook',
    difficulty: 'All Levels',
    rating: 4.93,
    reviewCount: 380,
    badge: 'Fullstack Must-Read',
    coverGradient: 'from-blue-600 via-indigo-600 to-violet-800',
    downloadUrl: 'https://fullstackopen.com/en/',
    readOnlineUrl: 'https://fullstackopen.com/en/',
    tags: ['React', 'TypeScript', 'Node.js', 'Web Development', 'Tailwind', 'REST APIs'],
    topics: ['React Hooks', 'TypeScript Typing', 'Express APIs', 'State Management', 'Authentication'],
    language: 'English',
    featured: true,
    trending: true,
    yearPublished: '2025 Edition',
    updatedDate: 'August 2025',
    isbn: '978-93-89123-02-1',
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    hasAudioBook: false,
    whatYoullLearn: [
      'Build reactive, accessible UIs using React 18 functional components and custom hooks',
      'Write end-to-end type-safe code using TypeScript interfaces, types, and generics',
      'Create robust RESTful APIs with Node.js, Express, and validation middleware',
      'Style modern responsive layouts rapidly with Tailwind utility classes',
      'Implement secure token-based user authentication with JWT and bcrypt'
    ],
    tableOfContents: [
      '1. Modern Web Foundations: HTML5, CSS Grid & Responsive Design',
      '2. TypeScript Essentials for Frontend & Backend Developers',
      '3. React 18 Deep Dive: Hooks, Virtual DOM & Lifecycle Flow',
      '4. State Management: Context API, Zustand & Server State with React Query',
      '5. Styling Modern Interfaces: Tailwind CSS, Headless Components & Motion',
      '6. Backend Engineering with Node.js, Express & TypeScript',
      '7. Relational & Document Databases: PostgreSQL & MongoDB Modeling',
      '8. Authentication, Authorization & Session Management',
      '9. Testing Web Apps with Vitest & Playwright',
      '10. Production Deployment, CDNs & Performance Web Vitals'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: Mastering React Hooks & Re-Render Prevention',
        summary: 'Understanding component rendering cycles, dependency arrays, and memoization techniques.',
        keyPoints: [
          'State updates trigger re-renders; never mutate state objects directly in React.',
          'useEffect runs after painting; ensure dependency arrays contain only stabilized primitives or memoized callbacks.',
          'Custom hooks encapsulate reusable business logic cleanly away from UI presentation.'
        ],
        codeSnippet: `// Custom Hook Example: Local Storage Sync
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [key, value]);

  return [value, setValue];
}`
      }
    ],
    studyNotes: [
      'Always audit Core Web Vitals (LCP, FID/INP, CLS) before pushing web apps to production.',
      'Never commit sensitive API keys or database connection strings to public Git repositories.'
    ]
  },
  {
    id: 'digital-skills-productivity',
    title: 'The Digital Skills & Workplace Productivity Manual',
    subtitle: 'Essential Computer Literacy, Cloud Tools, Data Management & Career Skills',
    slug: 'digital-skills-productivity',
    author: 'HK HUB Student Mentors',
    authorId: 'hk-academic',
    authorBio: 'Educators focusing on digital literacy and student career enablement.',
    publisher: 'HK HUB Publications',
    category: 'Digital Skills',
    subcategory: 'Productivity & Office Tools',
    genre: 'Practical Guide',
    bookType: 'Guide',
    description: 'Master the non-negotiable digital skills required in the modern workplace and academia. Covers advanced spreadsheet analysis (VLOOKUP, XLOOKUP, Pivot Tables), cloud collaboration (Google Drive, Docs, Sheets), markdown documentation, digital safety, and remote work tools.',
    shortDescription: 'Excel formulas, cloud productivity, digital security, and modern workplace tools.',
    pages: 240,
    format: 'E-Book & PDF',
    difficulty: 'Beginner',
    rating: 4.87,
    reviewCount: 154,
    badge: 'Career Starter',
    coverGradient: 'from-amber-600 via-orange-600 to-emerald-800',
    downloadUrl: 'https://hkhub.dev/library/digital-skills',
    readOnlineUrl: 'https://hkhub.dev/library/digital-skills',
    tags: ['Digital Skills', 'Excel', 'Productivity', 'Cloud Tools', 'Office', 'Career'],
    topics: ['Excel Formulas', 'Google Workspace', 'Data Analysis', 'Password Security', 'Resume Building'],
    language: 'English & Hinglish Notes',
    featured: false,
    trending: false,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'April 2025',
    isbn: '978-93-89123-11-5',
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    hasAudioBook: false,
    whatYoullLearn: [
      'Master essential Excel formulas: XLOOKUP, INDEX/MATCH, SUMIFS, and Pivot Tables',
      'Collaborate seamlessly across Google Workspace, Notion, and Slack',
      'Protect personal and professional data using password managers and 2FA',
      'Write clean technical documentation using Markdown and Git',
      'Format professional resumes and technical portfolios that pass ATS screeners'
    ],
    tableOfContents: [
      '1. The Modern Digital Landscape: Hardware, OS & File Systems',
      '2. Advanced Spreadsheets: Formulas, Data Cleansing & Pivot Tables',
      '3. Cloud Collaboration Tools: Google Drive, Notion, Slack & Zoom',
      '4. Everyday Cybersecurity: Passwords, 2FA, Phishing & Data Backups',
      '5. Technical Writing: Markdown, Documentation & Presentation Design',
      '6. Building an ATS-Friendly Tech Resume & LinkedIn Profile'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: Essential Excel Formulas for Data Analysis',
        summary: 'How modern lookup formulas eliminate manual copy-pasting and errors in financial and academic data.',
        keyPoints: [
          'XLOOKUP replaces both VLOOKUP and HLOOKUP with faster, safer two-way matching.',
          'Pivot Tables allow you to summarize thousands of rows of data into interactive tables in three clicks.',
          'Always use Absolute Cell Referencing ($A$1) when copying formulas across rows and columns.'
        ]
      }
    ],
    studyNotes: [
      'Keyboard shortcuts save up to 8 working days per year: learn Ctrl+Z, Ctrl+Shift+L (Filter), and Alt+= (AutoSum).',
      'Never reuse passwords across personal email and financial accounts.'
    ]
  },
  {
    id: 'mobile-tech-flutter',
    title: 'Smartphones & Mobile App Engineering: Flutter & React Native',
    subtitle: 'Cross-Platform Mobile Development, Device APIs, and Store Publishing',
    slug: 'mobile-tech-flutter',
    author: 'HK HUB Mobile Guild',
    authorId: 'hk-academic',
    authorBio: 'Cross-platform mobile developers and architects.',
    publisher: 'HK HUB Tech Press',
    category: 'Smartphones & Mobile',
    subcategory: 'Mobile App Development',
    genre: 'Engineering Manual',
    bookType: 'Handbook',
    description: 'A deep-dive textbook into modern mobile engineering for Android and iOS. Learn Flutter widget architectures, React Native bridge vs new architecture, state management (Bloc, Riverpod, Redux), hardware sensors, offline SQLite caching, and Play Store publishing.',
    shortDescription: 'Build native iOS and Android apps with Flutter, React Native, device APIs, and offline databases.',
    pages: 370,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.88,
    reviewCount: 142,
    badge: 'Mobile Architect',
    coverGradient: 'from-sky-600 via-blue-700 to-indigo-900',
    downloadUrl: 'https://hkhub.dev/library/mobile-engineering',
    readOnlineUrl: 'https://hkhub.dev/library/mobile-engineering',
    tags: ['Flutter', 'React Native', 'Android', 'iOS', 'Mobile Apps', 'Dart'],
    topics: ['Flutter Widgets', 'React Native', 'Offline Caching', 'Camera & GPS', 'App Store Deploy'],
    language: 'English',
    featured: false,
    trending: false,
    dealOfTheDay: false,
    yearPublished: '2025 Edition',
    updatedDate: 'May 2025',
    isbn: '978-93-89123-12-2',
    price: 99,
    originalPrice: 199,
    discountPercentage: 50,
    isFree: false,
    copyrightStatus: 'HK HUB Exclusive & Authorized',
    hasAudioBook: false,
    whatYoullLearn: [
      'Compare Flutter and React Native architectures to choose the right tech stack',
      'Build responsive, pixel-perfect mobile UIs that look native on Android and iOS',
      'Access smartphone hardware: Camera, Geolocation, Accelerometer, and Bluetooth',
      'Implement offline-first data synchronization with SQLite and Hive',
      'Prepare signing keys and submit applications to Google Play Store and Apple App Store'
    ],
    tableOfContents: [
      '1. Mobile Ecosystem Foundations: Android OS vs iOS Architectures',
      '2. Flutter & Dart Deep Dive: Stateless vs Stateful Widgets & Layouts',
      '3. React Native & Expo: Native Bridges, Turbomodules & Fabric Renderer',
      '4. Mobile State Management: Riverpod, Bloc & Context Solutions',
      '5. Smartphone Hardware APIs: Camera, GPS, Biometrics & Notifications',
      '6. Offline Storage: SQLite, Room, Hive & Real-Time Sync',
      '7. Mobile App Security: Keychain, Keystore, SSL Pinning & Obfuscation',
      '8. Testing, CI/CD with Fastlane & App Store Publishing'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: Flutter Widget Tree & Render Objects',
        summary: 'Understanding how Flutter paints its own UI on Skia/Impeller graphics engines rather than using OEM native widgets.',
        keyPoints: [
          'In Flutter, everything is a widget (Structural, Stylistic, and Positional).',
          'BuildContext represents the location of a widget in the overall element tree.',
          'Hot Reload preserves state across code edits, making UI prototyping extraordinarily fast.'
        ]
      }
    ],
    studyNotes: [
      'Always test mobile applications on physical low-end Android devices, not just high-end desktop simulators.',
      'Battery consumption matters: disable GPS background listeners as soon as location updates are no longer needed.'
    ]
  },
  {
    id: 'semester-project-handbook',
    title: 'The College Capstone & Engineering Semester Project Handbook',
    subtitle: 'From Topic Selection & SRS Documentation to UML Diagrams and Final Viva Defense',
    slug: 'semester-project-handbook',
    author: 'HK HUB Student Engineering Mentors',
    authorId: 'hk-academic',
    authorBio: 'Senior faculty and project guides across top Indian engineering colleges.',
    publisher: 'HK HUB Publications',
    category: 'Student & Education',
    subcategory: 'Academic Capstone',
    genre: 'College Handbook',
    bookType: 'Handbook',
    description: 'A complete step-by-step roadmap to building and defending an outstanding BCA, B.Tech, or Polytechnic semester project. Covers topic selection, Software Requirement Specifications (SRS), architecture diagrams, Git teamwork, and viva presentation slides.',
    shortDescription: 'Build and defend an outstanding college semester project, write SRS documents, and ace your viva.',
    pages: 280,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.96,
    reviewCount: 462,
    badge: 'Student Essential',
    coverGradient: 'from-pink-600 via-rose-700 to-indigo-900',
    downloadUrl: 'https://github.com/practical-tutorials/project-based-learning',
    readOnlineUrl: 'https://github.com/practical-tutorials/project-based-learning',
    tags: ['College Project', 'Capstone', 'BCA', 'BTech', 'Viva Prep', 'Documentation'],
    topics: ['Topic Selection', 'SRS Writing', 'UML Diagrams', 'Tech Stack Choice', 'Viva Questions'],
    language: 'English & Hinglish Notes',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89123-14-6',
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    hasAudioBook: true,
    narrator: 'Rahul Verma',
    audioDuration: '4h 45m',
    whatYoullLearn: [
      'Choose a project topic that impresses external examiners without being unfeasibly complex',
      'Write professional Software Requirement Specifications (SRS) in IEEE format',
      'Draw standard UML diagrams: Use Case, Class, Sequence, and ER Diagrams',
      'Organize GitHub branches, pull requests, and commit histories for team projects',
      'Confidently answer the top 20 tricky viva defense questions asked by university examiners'
    ],
    tableOfContents: [
      '1. How to Pick a Project Topic That Impresses External Examiners',
      '2. Writing a Professional Software Requirement Specification (SRS)',
      '3. Designing UML Diagrams: Use Case, Sequence & ER Diagrams',
      '4. Tech Stack Decision Matrix (MERN vs Next.js vs Python FastAPI)',
      '5. Setting Up Git Branches, PRs & GitHub Project Boards for Teams',
      '6. Database Schema Design & Mock Data Generation',
      '7. Building the Core Minimum Viable Product (MVP) in 4 Weeks',
      '8. Free Cloud Deployment (Vercel, Render, Supabase, Cloudflare)',
      '9. Writing the Final Project Report / Thesis (IEEE Format)',
      '10. Acing the Final Year Viva Defense: Questions & Answers'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 10: Top 10 Viva Questions External Examiners Ask',
        summary: 'Prepare authoritative answers to the most common viva questions with poise and confidence.',
        keyPoints: [
          '1. What is the unique problem your project solves that existing solutions fail at?',
          '2. Why did you choose this specific database architecture over alternatives?',
          '3. How does your system handle security, password hashing, and authentication?',
          '4. If your user base grew by 100x tomorrow, where would the primary bottleneck occur?'
        ]
      }
    ],
    studyNotes: [
      'Never walk into a viva without having a live working URL or local backup video demo in case of classroom Wi-Fi failure.',
      'Examiners appreciate honest answers: If you don\'t know an edge case, say "We haven\'t benchmarked that specific edge case yet, but based on our architecture, here is how we would approach it."'
    ]
  },
  {
    id: 'discrete-math-algorithms',
    title: 'Mathematics for Computer Science, Cryptography & Algorithms',
    subtitle: 'Discrete Mathematics, Graph Theory, Combinatorics, and Probability for Developers',
    slug: 'discrete-math-algorithms',
    author: 'MIT OpenCourseWare & HK HUB Faculty',
    authorId: 'hk-academic',
    authorBio: 'Computer Science & Mathematics educators.',
    publisher: 'MIT & HK HUB Academic Series',
    category: 'Science & Math',
    subcategory: 'Discrete Mathematics',
    genre: 'Academic Textbook',
    bookType: 'Handbook',
    description: 'The mathematical backbone of computer science explained with clarity and real-world code connections. Covers propositional logic, mathematical induction, graph theory proofs, modular arithmetic for RSA cryptography, and discrete probability.',
    shortDescription: 'Master the discrete math and graph theory foundations behind algorithms and cryptography.',
    pages: 460,
    format: 'Open Textbook',
    difficulty: 'Intermediate',
    rating: 4.86,
    reviewCount: 130,
    badge: 'Math Foundation',
    coverGradient: 'from-violet-700 via-purple-800 to-slate-950',
    downloadUrl: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/',
    readOnlineUrl: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/',
    tags: ['Math for CS', 'Discrete Math', 'Graph Theory', 'Cryptography', 'Algorithms'],
    topics: ['Propositional Logic', 'Induction Proofs', 'Modular Arithmetic', 'Graph Theory', 'Probability'],
    language: 'English',
    featured: false,
    trending: false,
    yearPublished: '2024 Edition',
    updatedDate: 'March 2025',
    isbn: '978-02-62033-84-8',
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    hasAudioBook: false,
    whatYoullLearn: [
      'Construct mathematical proofs using direct, contrapositive, and induction methods',
      'Understand modular arithmetic and Fermat’s Little Theorem behind RSA encryption',
      'Analyze graph connectivity, Euler tours, Hamiltonian cycles, and planar graphs',
      'Compute expected values and probabilities in randomized algorithms',
      'Bridge theoretical mathematics directly to algorithm design and competitive coding'
    ],
    tableOfContents: [
      '1. Propositional Logic, Truth Tables & Logical Equivalences',
      '2. Predicate Calculus & Quantifiers (Universal & Existential)',
      '3. Mathematical Induction & Strong Induction Proofs',
      '4. Number Theory: Divisibility, GCD, Euclidean Algorithm & Primes',
      '5. Modular Arithmetic & The RSA Cryptosystem',
      '6. Graph Theory: Degrees, Paths, Cycles, Trees & Bipartite Matching',
      '7. Combinatorics: Permutations, Combinations & Pigeonhole Principle',
      '8. Discrete Probability, Bayes Theorem & Random Variables'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 5: Modular Arithmetic & The RSA Cryptosystem',
        summary: 'How clock arithmetic and the difficulty of factoring huge prime numbers forms the foundation of internet e-commerce security.',
        keyPoints: [
          'Two integers a and b are congruent modulo m if their difference (a - b) is divisible by m.',
          'Euler’s totient function φ(n) counts the positive integers up to n that are relatively prime to n.',
          'RSA relies on asymmetric private/public keys generated from two large random prime numbers p and q.'
        ]
      }
    ],
    studyNotes: [
      'The Handshaking Lemma: In any graph, the sum of the degrees of all vertices equals 2 * |E|.',
      'Euler formula for planar connected graphs: V - E + F = 2.'
    ]
  },
  {
    id: 'tech-startup-handbook',
    title: 'Building Digital Businesses & Tech Products: Zero to Scale',
    subtitle: 'From Idea Validation and MVP Launch to Unit Economics, Pricing, and Product Growth',
    slug: 'tech-startup-handbook',
    author: 'HK HUB Product Guild',
    authorId: 'hk-academic',
    authorBio: 'Founders, Product Managers, and Growth Leads.',
    publisher: 'HK HUB Business Press',
    category: 'Business & Tech',
    subcategory: 'Tech Entrepreneurship',
    genre: 'Business Manual',
    bookType: 'Guide',
    description: 'A pragmatic, zero-fluff manual for developers, students, and engineers looking to launch their own software products and digital businesses. Covers problem validation, SaaS unit economics (CAC, LTV, Churn), flexible pricing strategies, and organic distribution.',
    shortDescription: 'Turn code into cash flow: validate startup ideas, price software, and acquire real customers.',
    pages: 310,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.9,
    reviewCount: 118,
    badge: 'Entrepreneur Blueprint',
    coverGradient: 'from-amber-600 via-rose-700 to-indigo-900',
    downloadUrl: 'https://hkhub.dev/library/tech-startup-handbook',
    readOnlineUrl: 'https://hkhub.dev/library/tech-startup-handbook',
    tags: ['Startup', 'SaaS', 'Business', 'Pricing', 'Product Management', 'Growth'],
    topics: ['Idea Validation', 'MVP Scoping', 'Pricing Strategies', 'SaaS Metrics', 'Distribution'],
    language: 'English',
    featured: false,
    trending: true,
    dealOfTheDay: false,
    yearPublished: '2025 Edition',
    updatedDate: 'August 2025',
    isbn: '978-93-89123-15-3',
    price: 299,
    originalPrice: 599,
    discountPercentage: 50,
    isFree: false,
    copyrightStatus: 'HK HUB Exclusive & Authorized',
    hasAudioBook: true,
    narrator: 'Sameer Sen',
    audioDuration: '5h 20m',
    whatYoullLearn: [
      'Validate customer pain points before writing a single line of backend code',
      'Scope a true Minimum Viable Product (MVP) and launch in under 30 days',
      'Implement flexible tiered and usage-based pricing architectures',
      'Calculate customer acquisition cost (CAC), lifetime value (LTV), and churn rate',
      'Harness organic developer marketing and programmatic SEO to drive users'
    ],
    tableOfContents: [
      '1. The Developer Founder Mindset: Solving Urgent Commercial Problems',
      '2. Idea Validation & Conducting Customer Discovery Interviews',
      '3. Scoping Your Minimum Viable Product (MVP) in 30 Days',
      '4. Pricing Psychology: Free vs Freemium vs One-Time vs Subscription',
      '5. Essential SaaS Metrics: CAC, LTV, MRR, Churn & Burn Multiple',
      '6. Building Distribution Channels: Content, Open-Source & Communities',
      '7. Legal Fundamentals: Incorporating, IP Protection & Contracts'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 4: Pricing Psychology & Architectural Flexibility',
        summary: 'Why underpricing kills startups faster than bad code and how to test price points from ₹99 to enterprise contracts.',
        keyPoints: [
          'Never compete on being the cheapest; compete on solving the problem faster and more reliably.',
          'Displaying clear annual discount incentives boosts upfront cash flow significantly.',
          'Keep checkout friction close to zero with unified payment options.'
        ]
      }
    ],
    studyNotes: [
      'Rule of thumb: If nobody complains that your product is too expensive, you are charging too little.',
      'Talk to at least 15 target users before deciding on your database schema.'
    ]
  },
  {
    id: 'how-to-practical-tech',
    title: 'The Practical Tech Handbook: Troubleshooting & Everyday Tools',
    subtitle: 'Diagnostic Blueprints for Windows, Linux, Networking, and Performance Optimization',
    slug: 'how-to-practical-tech',
    author: 'HK HUB Systems Support Community',
    authorId: 'hk-academic',
    authorBio: 'Systems administrators and hardware support technicians.',
    publisher: 'HK HUB Publications',
    category: 'Guides & Handbooks',
    subcategory: 'Hardware & OS Support',
    genre: 'Practical How-To',
    bookType: 'Tutorial',
    description: 'The ultimate practical survival manual for everyday tech problems. Covers diagnosing Wi-Fi latency, troubleshooting Windows Blue Screen of Death (BSOD), Linux command-line diagnostics, disk recovery, malware removal, and home lab setups.',
    shortDescription: 'Fix Windows crashes, solve Wi-Fi bottlenecks, recover lost files, and master Linux tools.',
    pages: 290,
    format: 'E-Book & PDF',
    difficulty: 'Beginner',
    rating: 4.89,
    reviewCount: 210,
    badge: 'Practical Survival',
    coverGradient: 'from-teal-600 via-cyan-700 to-slate-900',
    downloadUrl: 'https://hkhub.dev/library/practical-tech',
    readOnlineUrl: 'https://hkhub.dev/library/practical-tech',
    tags: ['Troubleshooting', 'How-To', 'Windows', 'Linux', 'Networking', 'Diagnostics'],
    topics: ['BSOD Fixing', 'Wi-Fi Latency', 'Linux CLI', 'Data Recovery', 'PC Optimization'],
    language: 'English & Hinglish Notes',
    featured: false,
    trending: false,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'June 2025',
    isbn: '978-93-89123-16-0',
    price: 0,
    isFree: true,
    copyrightStatus: 'Open Access / Creative Commons',
    hasAudioBook: false,
    whatYoullLearn: [
      'Read Windows Event Viewer and dump files to pinpoint crash causes',
      'Diagnose network packet loss, DNS issues, and Wi-Fi interference',
      'Master essential Linux terminal commands: grep, awk, top, htop, and netstat',
      'Recover deleted files safely and verify storage drive health using SMART data',
      'Optimize Windows startup performance by cleaning telemetry and startup services'
    ],
    tableOfContents: [
      '1. The Diagnostic Method: Isolating Hardware vs Software vs Network',
      '2. Troubleshooting Windows: Blue Screens, Driver Conflicts & System File Checker',
      '3. Linux Terminal Mastery for Troubleshooting: Logs, Processes & Disks',
      '4. Networking Diagnostics: Ping, Traceroute, DNS & Packet Loss Fixes',
      '5. Storage Health: SMART Attributes, SSD Wear Leveling & Safe Recovery',
      '6. Secure System Cleanup: Removing Adware, Malware & Bloatware'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: Troubleshooting Windows Blue Screens (BSOD)',
        summary: 'How to extract stop codes and analyze crash dumps with WinDbg to pinpoint faulty drivers or RAM corruption.',
        keyPoints: [
          'Run "sfc /scannow" and "DISM /Online /Cleanup-Image /RestoreHealth" from an elevated command prompt.',
          'Use Windows Memory Diagnostic tool to test for bad RAM sectors before replacing hardware.',
          'Check Device Manager for yellow exclamation marks indicating outdated or broken drivers.'
        ]
      }
    ],
    studyNotes: [
      '90% of strange computer issues are resolved by checking physical cable connections, thermals, and rebooting.',
      'Always test network connectivity from router gateway outward before assuming ISP outage.'
    ]
  }
];

export const EBOOK_CATEGORIES = [
  'All Books',
  'Coding & Programming',
  'Artificial Intelligence',
  'Student & Education',
  'Cybersecurity & Safety',
  'Web Development',
  'Cloud & Internet',
  'Computers & PC',
  'Smartphones & Mobile',
  'Digital Skills',
  'Science & Math',
  'Business & Tech',
  'Guides & Handbooks'
] as const;
