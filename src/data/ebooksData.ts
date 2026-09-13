import { EBookItem } from '../types';
import { SCHOOL_BOOKS_DATA } from './schoolBooksData';
import { STORIES_BOOKS_DATA } from './storiesBooksData';
import { PUZZLES_BOOKS_DATA } from './puzzlesBooksData';
import { EXPANDED_BOOKS_DATA } from './expandedBooksData';
import { SCHOOL_BOOKS_EXPANDED_DATA } from './schoolBooksExpandedData';
import { TECH_BOOKS_EXPANDED_DATA } from './techBooksExpandedData';
import { GENERAL_BOOKS_EXPANDED_DATA } from './generalBooksExpandedData';
import { MILESTONE_BOOKS_DATA } from './milestoneBooksData';
import { COMPETITIVE_EXAMS_BOOKS_DATA } from './competitiveExamsBooksData';
import { ADVANCED_TECH_BOOKS_DATA } from './advancedTechBooksData';
import { MIDDLE_SCHOOL_BOOKS_DATA } from './middleSchoolBooksData';
import { BUSINESS_AND_LIFE_BOOKS_DATA } from './businessAndLifeBooksData';
import { MORE_STORIES_AND_APTITUDE_DATA } from './moreStoriesAndAptitudeData';
import { SENIOR_SCHOOL_ACADEMIC_DATA } from './seniorSchoolAcademicData';
import { BATCH_B_BOOKS_DATA } from './batchBBooksData';
import { NEW_SPECIAL_BOOKS_DATA } from './newSpecialBooksData';
import { NATIONAL_HEROES_AND_CORE_EXAMS_DATA } from './nationalHeroesAndCoreExamsData';
import { BHARATVARSH_EBOOK_ITEM } from './bharatvarshBookItem';
import { MEGA_CATALOG_PART1_DATA } from './megaCatalogPart1Data';
import { MEGA_CATALOG_EXTENDED_DATA } from './megaCatalogExtendedData';
import { MEGA_CATALOG_PART3_DATA } from './megaCatalogPart3Data';
import { MEGA_CATALOG_PART4_DATA } from './megaCatalogPart4Data';

const CORE_TECH_EBOOKS: EBookItem[] = [
  {
    id: 'dsa-handbook',
    title: 'Mastering Data Structures & Algorithms (DSA Master Handbook)',
    subtitle: 'From Big-O Basics to Tree Traversal, Graphs & Dynamic Programming in Simple Terms',
    slug: 'dsa-handbook',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Software architect, author, and educator helping students crack top tech interviews.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Coding & Programming',
    subcategory: 'Algorithms & Data Structures',
    genre: 'Computer Science Master Handbook',
    bookType: 'Handbook',
    description: 'A comprehensive, student-friendly deep dive into Data Structures and Algorithms designed by Hariom Kushwaha. Explains complex concepts using everyday real-life analogies (like cinema ticket lines for queues, family trees for binary trees, and Google Maps for graphs), step-by-step Big-O proofs, LeetCode patterns, and exam-winning tips in easy-to-understand language.',
    shortDescription: 'Master DSA, Big-O, Trees, Graphs & Dynamic Programming with practical code and exam-tested notes.',
    pages: 480,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.95,
    reviewCount: 540,
    badge: 'HK Bestseller',
    coverGradient: 'from-indigo-600 via-blue-700 to-cyan-800',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['DSA', 'Algorithms', 'Hariom Kushwaha', 'HK Tech World', 'LeetCode', 'Interview Prep', 'C++', 'Python', 'Java'],
    topics: ['Big-O Analysis', 'Two-Pointer & Sliding Window', 'Trees & BSTs', 'Graphs & Dijkstra', 'Dynamic Programming'],
    language: 'English & Hinglish Simplified Notes',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-01-1',
    price: 0,
    isFree: true,
    copyrightStatus: 'HK Tech World Original Press / Free for Students',
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '7h 30m',
    whatYoullLearn: [
      'Understand Big-O time and space complexity without confusing mathematical jargon',
      'Solve sliding window, two-pointer, and fast & slow pointer array questions effortlessly',
      'Master Linked Lists, Stacks, Monotonic Queues, and Hash Map collision resolution',
      'Visualize Binary Trees, Binary Search Trees (BST), AVL balance, and Trie structures',
      'Traverse Graphs using BFS, DFS, Dijkstra shortest-path, and Topological Sort',
      'Deconstruct complex Dynamic Programming problems using state transition equations'
    ],
    tableOfContents: [
      '1. Big-O Complexity & Master Theorem (समय और मेमोरी का सही विश्लेषण)',
      '2. Arrays, Strings & Two-Pointer / Sliding Window Techniques',
      '3. Linked Lists: Singly, Doubly, Circular & Fast-Slow Pointer Traversal',
      '4. Stacks & Queues: Monotonic Stacks, Expression Parsing & Real-Life Queues',
      '5. Hash Tables: Hash Functions, Collisions & O(1) Lookups in Production',
      '6. Binary Trees & BSTs: Inorder, Preorder, Postorder & Level Order BFS',
      '7. Priority Queues & Heaps: Min-Heap, Max-Heap & Top-K Problems',
      '8. Graph Traversal: BFS, DFS, Dijkstra Shortest Path & Cycle Detection',
      '9. Dynamic Programming: 1D, 2D Memoization, Tabulation & Knapsack Patterns',
      '10. Technical Interview Master Blueprint: Top 50 LeetCode Patterns'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Big-O Complexity Analysis (Big-O को आसान भाषा में समझें)',
        summary: 'Big-O complexity is not measuring execution time in seconds (because a supercomputer runs code faster than an old laptop). Instead, Big-O counts how the number of fundamental operations scales as the input size n grows to thousands or millions.',
        keyPoints: [
          'O(1) - Constant Time: Instant lookups like array index access arr[i] or Hash Map search.',
          'O(log n) - Logarithmic Time: Binary Search, where the search space halves in each step.',
          'O(n) - Linear Time: A single loop iterating through all n elements once.',
          'O(n log n) - Optimal Sorting: Merge Sort and Heap Sort divide-and-conquer efficiency.',
          'O(n²) - Quadratic Time: Nested loops checking pairs, like Bubble Sort.',
          'Hariom Note: Interviewers always expect you to state Time AND Auxiliary Space complexity.'
        ],
        codeSnippet: `// Binary Search in TypeScript / JavaScript
// Time Complexity: O(log n) | Space: O(1)
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Avoid integer overflow: left + Math.floor((right - left) / 2)
    const mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) return mid; // Target found at index mid!
    if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }
  return -1; // Element not present
}`
      },
      {
        title: 'Chapter 2: Arrays, Strings & Two-Pointer Optimization',
        summary: 'How to convert brute-force O(n²) pair comparisons into blazingly fast O(n) solutions using left and right pointers or sliding window boundaries.',
        keyPoints: [
          'Two-Pointer works reliably when the input array is sorted or directional properties hold.',
          'Sliding Window dynamically expands right pointer and shrinks left pointer based on conditions.',
          'Prefix Sum array allows answering range queries (sum of elements from index L to R) in O(1).'
        ],
        codeSnippet: `// Two-Pointer Pattern: Two Sum on a Sorted Array
// Time: O(n) | Auxiliary Space: O(1)
function twoSumSorted(nums: number[], target: number): [number, number] | null {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];
    if (currentSum === target) {
      return [left, right]; // Found the pair!
    } else if (currentSum < target) {
      left++; // Need a bigger sum, move left pointer rightward
    } else {
      right--; // Need a smaller sum, move right pointer leftward
    }
  }
  return null; // No matching pair
}`
      },
      {
        title: 'Chapter 8: Graph Traversal & Dijkstra Algorithm (रास्तों का गणित)',
        summary: 'Graphs model networks like friends on Facebook, routers on the Internet, or roads on Google Maps. Learn how BFS finds the shortest path in unweighted networks and Dijkstra in weighted road maps.',
        keyPoints: [
          'Adjacency List is preferred over Adjacency Matrix because sparse graphs save huge memory O(V + E) vs O(V²).',
          'BFS (Breadth-First Search) uses a Queue and explores level by level — guaranteed shortest path for unweighted graphs.',
          'DFS (Depth-First Search) uses recursion or a Stack — ideal for backtracking, maze-solving, and topological ordering.',
          'Dijkstra uses a Min-Heap Priority Queue to find the shortest path with positive weights in O((V + E) log V).'
        ],
        codeSnippet: `// BFS Algorithm using Adjacency List
function bfsTraversal(graph: Map<string, string[]>, startNode: string): string[] {
  const visited = new Set<string>([startNode]);
  const queue: string[] = [startNode];
  const visitOrder: string[] = [];

  while (queue.length > 0) {
    const node = queue.shift()!;
    visitOrder.push(node);

    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return visitOrder;
}`
      }
    ],
    studyNotes: [
      'Exam Tip by Hariom: Always draw the data structure on paper (dry-run) before writing code in exam or interview.',
      'Always test 4 edge cases: (1) Empty input [], (2) Single element [1], (3) All duplicate elements [5, 5, 5], (4) Extreme numbers (very large or negative).',
      'Never panic in coding rounds. State your brute-force approach first, then explain why Two-Pointer or Hash Map makes it O(n).'
    ]
  },
  {
    id: 'web-development-handbook',
    title: 'The Modern Web Developer’s Complete Handbook',
    subtitle: 'From HTML5 & Tailwind CSS to Modern JavaScript, React 18 & Full-Stack Deployment',
    slug: 'web-development-handbook',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Full-stack engineer specialized in high-performance web systems and developer tooling.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Web Development',
    subcategory: 'Frontend & Full-Stack',
    genre: 'Web Architecture Guide',
    bookType: 'Handbook',
    description: 'The definitive hands-on manual written by Hariom Kushwaha for learning web development from zero to production. Covers semantic HTML5, modern Flexbox/Grid styling, modern JavaScript (ES6+, Promises, Async/Await), React component design, hooks, state management, and deploying live apps to Vercel and cloud platforms.',
    shortDescription: 'Build modern responsive websites and React web apps with production-grade code and best practices.',
    pages: 520,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.98,
    reviewCount: 460,
    badge: 'Most Comprehensive',
    coverGradient: 'from-emerald-600 via-teal-700 to-cyan-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Web Development', 'React', 'JavaScript', 'HTML5', 'CSS', 'Tailwind', 'Hariom Kushwaha', 'Full Stack'],
    topics: ['HTML5 Semantics', 'CSS Flexbox & Grid', 'JavaScript Async/Await', 'React Hooks', 'Full-Stack Deployment'],
    language: 'English & Hinglish Simplified Notes',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-02-8',
    price: 0,
    isFree: true,
    copyrightStatus: 'HK Tech World Original Press / Free for Students',
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '8h 10m',
    whatYoullLearn: [
      'Write clean, accessible, SEO-friendly semantic HTML5 structure',
      'Master responsive mobile-first layouts using CSS Flexbox, Grid, and Tailwind CSS',
      'Understand the JavaScript Event Loop, Microtasks, Promises, and Async/Await deeply',
      'Build scalable single-page applications using React functional components and custom hooks',
      'Connect frontend apps to backend REST APIs and handle loading/error states cleanly',
      'Deploy full-stack projects to Vercel, Cloud Run, and custom domains with free SSL'
    ],
    tableOfContents: [
      '1. How the Internet & Web Browsers Work (DNS, HTTP Requests & DOM Rendering)',
      '2. Modern HTML5: Semantic Structure, Forms, SEO & Web Accessibility',
      '3. CSS Architecture: Box Model, Flexbox, CSS Grid & Tailwind Utility Classes',
      '4. Modern JavaScript Fundamentals: Variables (let/const), Arrow Functions & Destructuring',
      '5. Asynchronous JavaScript: Callbacks, Promises, Async/Await & Fetch API',
      '6. React 18 Core: JSX, Virtual DOM, Components, Props & Reconciliation',
      '7. React State & Hooks Mastery: useState, useEffect, useMemo & useCallback',
      '8. Client-Side Routing, Context API & Global State Management',
      '9. Connecting Frontend to Backend REST APIs & Safe Error Handling',
      '10. Production Build, Performance Optimization & Deploying to Vercel'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 5: Asynchronous JavaScript (Promises & Async/Await आसान शब्दों में)',
        summary: 'JavaScript is single-threaded (it can only execute one command at a time). To prevent heavy tasks like network requests or file downloads from freezing the browser UI, JavaScript uses the Event Loop, Call Stack, and Task Queues.',
        keyPoints: [
          'Call Stack executes synchronous code line by line.',
          'Web APIs handle asynchronous operations (like fetch, setTimeout) in the background.',
          'Microtask Queue (Promises) has higher priority than Macrotask Queue (setTimeout).',
          'async/await is simply syntactic sugar over Promises, making code look synchronous and clean.'
        ],
        codeSnippet: `// Clean Async/Await Pattern with Proper Error Handling
async function fetchUserProjects(userId: string) {
  try {
    const response = await fetch(\`/api/users/\${userId}/projects\`);
    
    // Always check response.ok before parsing JSON!
    if (!response.ok) {
      throw new Error(\`HTTP Error \${response.status}: Failed to fetch projects\`);
    }
    
    const projects = await response.json();
    return { success: true, data: projects };
  } catch (error: any) {
    console.error('Fetch error:', error.message);
    return { success: false, error: error.message };
  }
}`
      },
      {
        title: 'Chapter 7: React Hooks Deep Dive (useState, useEffect & Clean Lifecycle)',
        summary: 'Learn how React re-renders components, why state immutability is essential, and how to write cleanup functions to avoid memory leaks.',
        keyPoints: [
          'Never mutate state directly (e.g. state.push(x)); always create a new object or array [...state, x].',
          'useEffect dependency array tells React when to rerun the effect. Empty [] runs once on mount.',
          'Always return a cleanup function from useEffect when subscribing to timers or WebSocket events.'
        ],
        codeSnippet: `// Example: Clean React Hook with Lifecycle Cleanup
import React, { useState, useEffect } from 'react';

export function WindowWidthTracker() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // CRITICAL: Cleanup listener when component unmounts to prevent memory leak!
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div className="text-sm">Current Window Width: {width}px</div>;
}`
      }
    ],
    studyNotes: [
      'Golden Rule by Hariom: Always build responsive UI for mobile screens first (Mobile-First Design), then expand for tablets and laptops.',
      'In React, keys in list mapping must be unique and stable (use item.id, never array index if items can be reordered).'
    ]
  },
  {
    id: 'automate-python',
    title: 'Python Programming & Real-World Automation Handbook',
    subtitle: 'From Basic Syntax to Web Scraping, File Automation, Excel Scripts & Bot Building',
    slug: 'automate-python',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Passionate Python automator and software developer.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Coding & Programming',
    subcategory: 'Python & Automation',
    genre: 'Practical Programming Guide',
    bookType: 'Handbook',
    description: 'Master Python through practical, real-world utility scripts written by Hariom Kushwaha. Learn how to automate boring, repetitive tasks like renaming 1,000 files in seconds, scraping live data from websites, generating automated Excel reports, sending automated WhatsApp/Telegram alerts, and building custom CLI tools.',
    shortDescription: 'Master Python fundamentals and build real automation scripts for files, web data, and APIs.',
    pages: 410,
    format: 'E-Book & Interactive',
    difficulty: 'Beginner',
    rating: 4.93,
    reviewCount: 380,
    badge: 'Student Favorite',
    coverGradient: 'from-amber-600 via-orange-600 to-yellow-700',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Python', 'Automation', 'Hariom Kushwaha', 'Web Scraping', 'Scripts', 'HK Tech World'],
    topics: ['Python Syntax', 'File Management', 'Web Scraping (BeautifulSoup)', 'Excel & CSV Automation', 'Telegram Bots'],
    language: 'English & Hinglish Simplified Notes',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-03-5',
    price: 0,
    isFree: true,
    copyrightStatus: 'HK Tech World Original Press / Free for Students',
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '6h 45m',
    whatYoullLearn: [
      'Write clean, readable Python code using loops, list comprehensions, and dictionaries',
      'Automate file organization: bulk rename files, organize downloads, and parse text',
      'Scrape data from modern websites using BeautifulSoup, Requests, and regular expressions',
      'Read, modify, and create professional Excel sheets and CSV datasets automatically',
      'Connect to public REST APIs to fetch weather, stock prices, or news feeds',
      'Create Telegram and Discord notification bots that run 24/7 on the cloud'
    ],
    tableOfContents: [
      '1. Python Essentials: Variables, Datatypes, If-Else & Loops (पायथन की शुरुआत)',
      '2. Power of Python Data Structures: Lists, Tuples, Dictionaries & Sets',
      '3. Writing Modular Code: Functions, Scope, Modules & Virtual Environments',
      '4. File I/O & OS Module: Reading, Writing & Bulk File Management Automation',
      '5. Regular Expressions (RegEx): Extracting Emails, Phone Numbers & URLs',
      '6. Web Scraping: Extracting Real-Time Data with Requests & BeautifulSoup',
      '7. Excel & CSV Automation: Processing Spreadsheets with OpenPyXL & Pandas',
      '8. Working with JSON, REST APIs & Sending Automated Emails',
      '9. Building a 24/7 Automated Telegram Alert Bot in 50 Lines of Python',
      '10. Best Practices: PEP 8 Clean Code, Type Hinting & Virtual Environments'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 6: Web Scraping with Requests & BeautifulSoup',
        summary: 'Web scraping allows you to write Python scripts that visit websites, download HTML, and extract desired data (like product prices or job postings) automatically.',
        keyPoints: [
          'requests.get(url) fetches the raw HTML webpage.',
          'BeautifulSoup parses the HTML tree into searchable Python objects.',
          'soup.find_all("tag", class_="name") targets specific elements.',
          'Always respect robots.txt and add headers={"User-Agent": "..."} so websites do not block your script.'
        ],
        codeSnippet: `# Automated Web Scraper by Hariom Kushwaha
import requests
from bs4 import BeautifulSoup

def scrape_headlines(url):
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        headlines = []
        for h in soup.find_all(["h1", "h2"]):
            text = h.get_text(strip=True)
            if text:
                headlines.append(text)
        return headlines
    return []`
      }
    ],
    studyNotes: [
      'Automation Mindset: If you have to do something on a computer more than 3 times, write a Python script to do it forever.',
      'Always use a virtual environment: python -m venv venv and activate it to keep dependencies clean.'
    ]
  },
  {
    id: 'genai-prompt-engineering',
    title: 'Generative AI & Prompt Engineering Masterclass',
    subtitle: 'From Transformer Architecture to Gemini, RAG Systems, Function Calling & AI Agents',
    slug: 'genai-prompt-engineering',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. AI systems architect and author of practical machine intelligence guides.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Artificial Intelligence',
    subcategory: 'Generative AI & LLMs',
    genre: 'AI Systems Handbook',
    bookType: 'Handbook',
    description: 'A cutting-edge masterclass authored by Hariom Kushwaha on how modern Generative AI and Large Language Models (LLMs) like Gemini and GPT work under the hood. Learn prompt engineering frameworks (Chain-of-Thought, ReAct), building Retrieval Augmented Generation (RAG) with vector databases, function calling, and creating autonomous AI agents.',
    shortDescription: 'Build next-generation AI apps, master prompt engineering, RAG pipelines, and autonomous agents.',
    pages: 360,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.96,
    reviewCount: 395,
    badge: 'Trending AI Masterclass',
    coverGradient: 'from-purple-600 via-indigo-700 to-pink-700',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['AI', 'Generative AI', 'Gemini', 'Prompt Engineering', 'RAG', 'LLMs', 'Hariom Kushwaha'],
    topics: ['System Prompts', 'Chain-of-Thought', 'Vector Embeddings', 'RAG Pipelines', 'AI Agents'],
    language: 'English & Hinglish Simplified Notes',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-04-2',
    price: 0,
    isFree: true,
    copyrightStatus: 'HK Tech World Original Press / Free for Students',
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '6h 15m',
    whatYoullLearn: [
      'Understand how Transformers, Self-Attention, and next-token prediction work',
      'Design unbreakable system prompts using few-shot examples and negative constraints',
      'Master Chain-of-Thought (CoT) prompting to dramatically improve logical accuracy',
      'Build production RAG pipelines using text chunking, embeddings, and vector databases',
      'Implement Structured JSON output and Function Calling with Google Gemini SDK',
      'Architect autonomous AI agents that can browse, execute code, and correct errors'
    ],
    tableOfContents: [
      '1. Fundamentals of LLMs: Tokens, Embeddings & Transformer Attention',
      '2. Modern Prompt Engineering Frameworks: Zero-Shot, Few-Shot & Chain-of-Thought',
      '3. System Instructions & Formatting: Markdown, XML Delimiters & JSON Schemas',
      '4. Vector Embeddings & Similarity Search: Cosine Similarity, HNSW & Vector Stores',
      '5. Retrieval-Augmented Generation (RAG): Document Chunking & Semantic Search',
      '6. Function Calling & Tool Use: Giving AI the Ability to Call Your APIs',
      '7. Multimodal AI: Processing Images, Audio & Video with Gemini',
      '8. AI Safety & Security: Preventing Prompt Injection & Jailbreaks',
      '9. Building Autonomous AI Agents: ReAct Loops, Memory & Tool Orchestration',
      '10. The Future of AI Engineering: Cost, Latency Optimization & Fine-Tuning'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: Advanced Prompt Engineering & Chain-of-Thought',
        summary: 'Why generic questions produce hallucinated answers and how to write structured system prompts that guarantee accurate, deterministic results.',
        keyPoints: [
          'Chain-of-Thought (CoT) forces the model to write out intermediate steps before final answers.',
          'Always specify: Role, Context, Task, Input Format, Output Constraints, and Negative Rules.',
          'Temperature controls randomness: use 0.0 - 0.2 for coding/facts, and 0.7 for creative writing.'
        ],
        codeSnippet: `// Production Prompt Template by Hariom Kushwaha
const SYSTEM_PROMPT = \`You are an expert technical code reviewer.
Role: Analyze the student's code submission for Big-O efficiency and memory leaks.
Rules:
1. First verify if the logic handles empty input edge cases.
2. Calculate time complexity O(...) and explain why.
3. Respond ONLY in valid JSON matching this schema:
{
  "status": "APPROVED" | "NEEDS_OPTIMIZATION",
  "timeComplexity": string,
  "spaceComplexity": string,
  "suggestions": string[]
}\`;`
      }
    ],
    studyNotes: [
      'Hariom Prompt Formula: Context + Clear Task + Explicit Format + Examples = 99% Success Rate.',
      'Never put sensitive API keys in client-side code; always call AI models from your backend server.'
    ]
  },
  {
    id: 'cybersecurity-handbook',
    title: 'Cybersecurity & Ethical Hacking Essentials',
    subtitle: 'Digital Defense, Network Security, Kali Linux, OWASP Top 10 & Personal Privacy',
    slug: 'cybersecurity-handbook',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Security researcher and ethical hacker advocating for student digital safety.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Cybersecurity & Safety',
    subcategory: 'Ethical Hacking & Defense',
    genre: 'Security Handbook',
    bookType: 'Handbook',
    description: 'A practical, defensive cybersecurity handbook authored by Hariom Kushwaha. Explains how hackers exploit systems and how students and engineers can protect their networks, applications, and personal digital identity. Covers Kali Linux tools, Wireshark, Nmap, SQL Injection, XSS, phishing defense, password management, and digital privacy.',
    shortDescription: 'Master ethical hacking fundamentals, web app security, Kali Linux, and digital privacy protection.',
    pages: 440,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.94,
    reviewCount: 350,
    badge: 'Essential Security',
    coverGradient: 'from-red-600 via-rose-700 to-slate-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Cybersecurity', 'Ethical Hacking', 'Hariom Kushwaha', 'Kali Linux', 'OWASP', 'HK Tech World'],
    topics: ['Network Scanning', 'OWASP Top 10', 'SQL Injection & XSS', 'Password Security', 'Digital Privacy & VPNs'],
    language: 'English & Hinglish Simplified Notes',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-05-9',
    price: 0,
    isFree: true,
    copyrightStatus: 'HK Tech World Original Press / Free for Students',
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '7h 00m',
    whatYoullLearn: [
      'Understand how IP addresses, ports, protocols (TCP/UDP), and firewalls communicate',
      'Perform safe network discovery and reconnaissance with Nmap and Wireshark',
      'Identify and remediate OWASP Top 10 web vulnerabilities (SQLi, XSS, CSRF)',
      'Protect passwords using cryptographic hashing (bcrypt, Argon2) and Two-Factor Authentication',
      'Detect phishing emails, malicious links, and social engineering attempts',
      'Harden personal devices, browse anonymously with VPNs, and secure home Wi-Fi networks'
    ],
    tableOfContents: [
      '1. Introduction to Ethical Hacking: White Hat vs Black Hat & Legal Boundaries',
      '2. Networking for Hackers: IP, MAC, Subnetting, TCP 3-Way Handshake & Ports',
      '3. Kali Linux Command Line & Essential Security Tools (Nmap, Netcat)',
      '4. Information Gathering & Reconnaissance: OSINT, Shodan & WHOIS',
      '5. Network Sniffing & Traffic Analysis with Wireshark',
      '6. Web Application Vulnerabilities: OWASP Top 10 Explained Clearly',
      '7. SQL Injection (SQLi) & Cross-Site Scripting (XSS): Proof & Prevention',
      '8. Cryptography Foundations: Symmetric, Asymmetric (RSA), Hashing & SSL/TLS',
      '9. Social Engineering & Phishing Attacks: How Attackers Trick Humans',
      '10. Personal Digital Privacy Blueprint: 2FA, Password Managers & VPN Safety'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 6: OWASP Top 10 Web Security & Prevention',
        summary: 'The Open Web Application Security Project (OWASP) lists the most dangerous vulnerabilities in modern websites. Learn how SQL Injection and Cross-Site Scripting work, and how developers prevent them.',
        keyPoints: [
          'SQL Injection occurs when user input is concatenated directly into SQL queries without sanitization.',
          'Always use Prepared Statements (Parameterized Queries) to completely defeat SQL Injection.',
          'Cross-Site Scripting (XSS) happens when unescaped user HTML/JavaScript executes in other users’ browsers.',
          'Always sanitize and HTML-encode user inputs before rendering them on screen.'
        ],
        codeSnippet: `// Insecure vs Secure Database Query in Node.js
// ❌ VULNERABLE: Direct string concatenation allows SQL Injection!
// query = "SELECT * FROM users WHERE email = '" + req.body.email + "'";

//  SECURE: Parameterized Query separates SQL logic from data!
const query = 'SELECT id, username, email FROM users WHERE email = $1';
const result = await db.query(query, [req.body.email]);`
      }
    ],
    studyNotes: [
      'Hariom Security Rule: Never trust user input. Treat all incoming data from forms, headers, and cookies as untrusted and potentially malicious.',
      'Enable 2FA (Two-Factor Authentication) on all your personal accounts using an authenticator app (never rely purely on SMS OTP).'
    ]
  },
  {
    id: 'os-networks-handbook',
    title: 'Computer Networks & Operating Systems: The Core Engineering Handbook',
    subtitle: 'Processes, Threads, Deadlocks, Memory Management, TCP/IP & HTTP/3 Explained Clearly',
    slug: 'os-networks-handbook',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Computer engineering architect and educator.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Computers & PC',
    subcategory: 'Core Computer Science',
    genre: 'Core Engineering Textbook',
    bookType: 'Handbook',
    description: 'A master textbook written by Hariom Kushwaha demystifying the two core pillars of Computer Science: Operating Systems and Computer Networks. Explains how CPUs schedule processes, virtual memory paging, deadlock prevention, the 7 layers of OSI, TCP handshakes, DNS resolution, and HTTP/3 protocol evolution with visual diagrams and exam questions.',
    shortDescription: 'Master OS processes, threads, virtual memory, and TCP/IP networking for semester exams and interviews.',
    pages: 490,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.95,
    reviewCount: 310,
    badge: 'Core CS Bible',
    coverGradient: 'from-blue-700 via-indigo-800 to-slate-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Operating Systems', 'Computer Networks', 'Hariom Kushwaha', 'Core CS', 'GATE Prep', 'HK Tech World'],
    topics: ['Process vs Thread', 'CPU Scheduling', 'Deadlocks', 'Virtual Memory & Paging', 'TCP/IP & OSI Models'],
    language: 'English & Hinglish Simplified Notes',
    featured: true,
    trending: false,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'August 2025',
    isbn: '978-93-89101-06-6',
    price: 0,
    isFree: true,
    copyrightStatus: 'HK Tech World Original Press / Free for Students',
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '7h 15m',
    whatYoullLearn: [
      'Understand the difference between a Process (isolated memory) and a Thread (shared memory)',
      'Master CPU scheduling algorithms: FCFS, SJF, Round Robin, and Priority Scheduling',
      'Solve Deadlock conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait)',
      'Understand Virtual Memory, Page Tables, TLB cache, and Page Replacement (FIFO, LRU)',
      'Trace how data travels through the 7 layers of OSI and 4 layers of TCP/IP model',
      'Explain what happens when you type "google.com" in a browser: DNS, TCP, TLS, and HTTP'
    ],
    tableOfContents: [
      '1. Operating System Architecture: Kernel vs User Space & System Calls',
      '2. Process Management: Process States, PCB, Context Switching & Forking',
      '3. Threads & Concurrency: Race Conditions, Mutex Locks & Semaphores',
      '4. CPU Scheduling Algorithms: FCFS, SJF, Round Robin & Priority Scheduling',
      '5. Deadlocks: 4 Coffman Conditions, Resource Allocation Graphs & Banker’s Algorithm',
      '6. Memory Management: Contiguous Allocation, Paging, Segmentation & Virtual Memory',
      '7. Computer Networks Foundation: OSI 7-Layer vs TCP/IP 4-Layer Architecture',
      '8. Transport Layer: TCP (Reliable Connection-Oriented) vs UDP (Fast Datagrams)',
      '9. Network Layer: IP Addressing (IPv4 vs IPv6), Subnetting & Routing Protocols',
      '10. Application Layer & The Modern Web: DNS, HTTP/1.1, HTTP/2, HTTP/3 & WebSockets'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 8: TCP 3-Way Handshake vs UDP (इंटरनेट कनेक्शन कैसे बनता है)',
        summary: 'Why video streaming and online gaming use UDP while banking and web pages use TCP. Learn how TCP establishes a reliable connection using SYN, SYN-ACK, and ACK packets.',
        keyPoints: [
          'TCP (Transmission Control Protocol) guarantees delivery, packet order, and error checking.',
          'TCP 3-Way Handshake: Client sends SYN -> Server responds SYN-ACK -> Client confirms with ACK.',
          'UDP (User Datagram Protocol) is connectionless and sends packets without waiting for receipt acknowledgment (low latency).',
          'HTTP/3 runs over QUIC (which is built on UDP), solving TCP Head-of-Line blocking issues.'
        ],
        codeSnippet: `// Visual Representation of TCP 3-Way Handshake:
// Client                          Server
//   |                               |
//   |------- 1. SYN (seq=100) ----->|  "Let us connect!"
//   |                               |
//   |<-- 2. SYN-ACK (ack=101) ------|  "Connection accepted!"
//   |                               |
//   |------- 3. ACK (seq=101) ----->|  "Confirmed! Sending data..."
//   |                               |
// Connection Established (ESTABLISHED State)`
      }
    ],
    studyNotes: [
      'Exam Question: What happens when you type a URL in browser? Step 1: Local DNS cache -> Step 2: Resolver DNS query -> Step 3: IP resolved -> Step 4: TCP 3-way handshake -> Step 5: TLS handshake -> Step 6: HTTP GET -> Step 7: DOM render.',
      'Remember: Banker\'s Algorithm is used for Deadlock Avoidance, not Deadlock Detection.'
    ]
  },
  {
    id: 'database-sql-handbook',
    title: 'Database Engineering & SQL Mastery: From Relational Schemas to NoSQL',
    subtitle: 'Master Queries, JOINs, Normalization, ACID Transactions, Indexing & MongoDB',
    slug: 'database-sql-handbook',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Database engineer and backend architect.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Coding & Programming',
    subcategory: 'Databases & SQL',
    genre: 'Database Engineering Manual',
    bookType: 'Handbook',
    description: 'A complete, practical database engineering textbook written by Hariom Kushwaha. Covers relational database design, advanced SQL queries, multi-table JOINs, database normalization up to BCNF, ACID transaction guarantees, B-Tree indexing for millisecond query performance, and NoSQL document storage with MongoDB.',
    shortDescription: 'Master SQL queries, JOINs, indexing, normalization, and ACID transactions with real-world examples.',
    pages: 430,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.93,
    reviewCount: 320,
    badge: 'Database Master',
    coverGradient: 'from-amber-700 via-yellow-700 to-stone-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['SQL', 'Databases', 'PostgreSQL', 'MySQL', 'MongoDB', 'Hariom Kushwaha', 'HK Tech World'],
    topics: ['SQL Queries & JOINs', 'Normalization (1NF-3NF)', 'ACID Transactions', 'B-Tree Indexing', 'SQL vs NoSQL'],
    language: 'English & Hinglish Simplified Notes',
    featured: false,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-07-3',
    price: 0,
    isFree: true,
    copyrightStatus: 'HK Tech World Original Press / Free for Students',
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '6h 30m',
    whatYoullLearn: [
      'Write complex SQL queries with INNER JOIN, LEFT JOIN, GROUP BY, and HAVING clauses',
      'Normalize messy database tables into clean 1NF, 2NF, 3NF, and BCNF structures',
      'Ensure data integrity with ACID properties (Atomicity, Consistency, Isolation, Durability)',
      'Speed up slow queries by 100x using B-Tree and Hash database indexes',
      'Understand when to choose Relational SQL (PostgreSQL) vs Document NoSQL (MongoDB)',
      'Design production schemas for real-world apps like E-commerce, Social Media, and EdTech'
    ],
    tableOfContents: [
      '1. Introduction to Databases: File Systems vs DBMS & Relational Model',
      '2. SQL Data Definition & Manipulation (DDL, DML, Constraints & Data Types)',
      '3. Querying Data: SELECT, WHERE, LIKE, ORDER BY & Aggregate Functions',
      '4. Relational JOINs: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN & Self JOIN',
      '5. Subqueries, Views & Window Functions (ROW_NUMBER, RANK, DENSE_RANK)',
      '6. Database Normalization: Functional Dependencies, 1NF, 2NF, 3NF & BCNF',
      '7. ACID Transactions: Commit, Rollback, Savepoints & Transaction Isolation Levels',
      '8. Database Indexing & Query Execution Plans: B-Trees, Clustered vs Non-Clustered',
      '9. NoSQL Foundations: Document Stores (MongoDB), Key-Value (Redis) & Use Cases',
      '10. Production Schema Design: E-Commerce & Social Media Case Studies'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 4: Mastering SQL JOINs (सभी JOINs को चित्र व उदाहरण से समझें)',
        summary: 'JOINs allow you to connect multiple related tables using Primary Key and Foreign Key relationships. Master INNER, LEFT, RIGHT, and FULL joins with clear visual logic.',
        keyPoints: [
          'INNER JOIN returns only rows that match in BOTH tables.',
          'LEFT JOIN returns ALL rows from the left table and matching rows from the right (NULL if no match).',
          'RIGHT JOIN returns all rows from the right table and matching from the left.',
          'FULL OUTER JOIN returns all rows when there is a match in either left or right table.'
        ],
        codeSnippet: `-- Example: Fetching Student Details along with their Course Name
SELECT 
    students.id AS student_id,
    students.full_name,
    students.email,
    courses.course_name,
    courses.instructor
FROM students
INNER JOIN courses ON students.course_id = courses.id
WHERE students.status = 'ACTIVE'
ORDER BY students.enrollment_date DESC;`
      }
    ],
    studyNotes: [
      'Index Rule: Do not put indexes on every single column. Indexes speed up SELECT queries but slow down INSERT and UPDATE operations.',
      'Remember ACID: Atomicity (All or Nothing), Consistency (Rules stay valid), Isolation (Concurrent transactions do not corrupt), Durability (Committed data survives power failure).'
    ]
  },
  {
    id: 'cpp-systems-handbook',
    title: 'Modern C & C++ Programming: Systems, Pointers & Memory Architecture',
    subtitle: 'Low-Level Mechanics, Dynamic Memory Allocation, STL & Object-Oriented Principles',
    slug: 'cpp-systems-handbook',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Systems engineer and high-performance software specialist.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Coding & Programming',
    subcategory: 'C & C++ Programming',
    genre: 'Systems Programming Guide',
    bookType: 'Handbook',
    description: 'An authoritative manual written by Hariom Kushwaha for students mastering C and C++. Takes you inside computer RAM, stack vs heap memory, pointer arithmetic, dynamic memory allocation (malloc/free, new/delete), classes, inheritance, polymorphism, the Standard Template Library (STL vectors, maps, sets), and modern C++ smart pointers.',
    shortDescription: 'Master C and C++ pointers, memory management, OOP, and the Standard Template Library (STL).',
    pages: 460,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.96,
    reviewCount: 340,
    badge: 'Performance Master',
    coverGradient: 'from-blue-600 via-indigo-700 to-teal-800',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['C++', 'C Programming', 'Pointers', 'Memory Management', 'STL', 'Hariom Kushwaha', 'HK Tech World'],
    topics: ['Pointers & Addresses', 'Stack vs Heap', 'C++ Classes & OOP', 'STL Vectors & Maps', 'Smart Pointers'],
    language: 'English & Hinglish Simplified Notes',
    featured: false,
    trending: false,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'August 2025',
    isbn: '978-93-89101-08-0',
    price: 0,
    isFree: true,
    copyrightStatus: 'HK Tech World Original Press / Free for Students',
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '7h 10m',
    whatYoullLearn: [
      'Understand computer RAM memory addresses, pointers, and the dereference operator (*)',
      'Master Stack memory (fast, automatic) vs Heap memory (dynamic, manual control)',
      'Prevent segmentation faults, dangling pointers, and memory leaks',
      'Implement Object-Oriented Programming (Encapsulation, Inheritance, Polymorphism, Virtual Functions)',
      'Use the C++ Standard Template Library (STL): std::vector, std::map, std::set, and std::sort',
      'Write safe Modern C++ with std::unique_ptr, std::shared_ptr, and RAII principles'
    ],
    tableOfContents: [
      '1. Compilation Pipeline: Preprocessor, Compiler, Assembler & Linker',
      '2. Data Types, Modifiers, Bitwise Operators & Memory Footprints in C/C++',
      '3. Pointers Demystified: Memory Addresses, Pointer Arithmetic & Arrays as Pointers',
      '4. Dynamic Memory Allocation: malloc(), calloc(), free() vs new, delete',
      '5. Structs, Unions & Memory Alignment / Padding in Hardware',
      '6. Object-Oriented C++: Classes, Constructors, Destructors & Access Specifiers',
      '7. Polymorphism: Function Overloading, Operator Overloading & Virtual Functions',
      '8. The C++ Standard Template Library (STL): Vectors, Lists, Deques & Iterators',
      '9. Associative STL Containers: Maps, Unordered Maps, Sets & Custom Hash Functions',
      '10. Modern C++ (C++11 to C++20): Lambdas, Move Semantics & Smart Pointers'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: Pointers Demystified (पॉइंटर्स को पानी की तरह आसान समझें)',
        summary: 'Pointers are variables that store the memory address of another variable. Once you realize every variable lives at a specific numeric hexadecimal house address in RAM, pointers become simple.',
        keyPoints: [
          '& (Address-Of operator) gives you the memory location: &x gives address of x.',
          '* (Dereference operator) looks inside the address: *ptr gives the actual value stored there.',
          'Dangling Pointer: A pointer pointing to memory that has already been deallocated. Always set ptr = nullptr after delete!',
          'Memory Leak: Allocating memory with new/malloc and never calling delete/free.'
        ],
        codeSnippet: `// Pointer Demonstration in C++ by Hariom Kushwaha
#include <iostream>

int main() {
    int score = 100;
    int* ptr = &score; // ptr holds the memory address of score

    std::cout << "Value of score: " << score << std::endl;         // 100
    std::cout << "Memory address of score (&score): " << ptr << std::endl; // e.g. 0x7ffd9b...
    std::cout << "Dereferenced pointer (*ptr): " << *ptr << std::endl; // 100

    *ptr = 150; // Change value through the pointer!
    std::cout << "Updated score: " << score << std::endl;         // 150
    return 0;
}`
      }
    ],
    studyNotes: [
      'RAII (Resource Acquisition Is Initialization): In modern C++, wrap raw pointers in std::unique_ptr or std::shared_ptr so memory is automatically freed when leaving scope.',
      'Always check: sizeof(int) is typically 4 bytes; pointers on 64-bit systems are always 8 bytes regardless of datatype.'
    ]
  },
  {
    id: 'java-oop-handbook',
    title: 'Java Programming & Enterprise Software Design Masterclass',
    subtitle: 'JVM Architecture, Multithreading, Spring Boot Fundamentals & Clean OOP Architecture',
    slug: 'java-oop-handbook',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Enterprise software architect and educator.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Coding & Programming',
    subcategory: 'Java & Enterprise Architecture',
    genre: 'Enterprise Software Guide',
    bookType: 'Handbook',
    description: 'A comprehensive Java masterclass written by Hariom Kushwaha for university students and aspiring software engineers. Deep dive into Java Virtual Machine (JVM) internals (Bytecode, Heap, Garbage Collection), the Four Pillars of OOP, the Java Collections Framework (ArrayList, HashMap, LinkedList), Multithreading, and building REST APIs with Spring Boot.',
    shortDescription: 'Master Java OOP, JVM internals, Collections framework, Multithreading, and Spring Boot.',
    pages: 470,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.94,
    reviewCount: 310,
    badge: 'Enterprise Gold',
    coverGradient: 'from-orange-600 via-red-700 to-amber-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Java', 'OOP', 'Spring Boot', 'Multithreading', 'JVM', 'Hariom Kushwaha', 'HK Tech World'],
    topics: ['JVM Internals', 'Four Pillars of OOP', 'Java Collections', 'Multithreading', 'Spring Boot Basics'],
    language: 'English & Hinglish Simplified Notes',
    featured: false,
    trending: false,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'August 2025',
    isbn: '978-93-89101-09-7',
    price: 0,
    isFree: true,
    copyrightStatus: 'HK Tech World Original Press / Free for Students',
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '7h 20m',
    whatYoullLearn: [
      'Understand how Java achieves "Write Once, Run Anywhere" via Bytecode and the JVM',
      'Master the Four Pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism',
      'Use the Java Collections Framework (ArrayList, LinkedList, HashMap, HashSet) like a pro',
      'Handle exceptions gracefully with try-catch-finally and custom checked/unchecked exceptions',
      'Write safe multithreaded applications using synchronized blocks and ExecutorService',
      'Build your first enterprise REST API using Java, Spring Boot, and PostgreSQL'
    ],
    tableOfContents: [
      '1. Java Architecture: JDK, JRE, JVM, Bytecode & ClassLoader Internals',
      '2. Core Java Fundamentals: Data Types, Flow Control, Arrays & String Immutability',
      '3. Object-Oriented Programming (OOP) in Java: Classes, Objects & Memory Allocation',
      '4. The Four Pillars of OOP: Encapsulation, Abstraction, Inheritance & Polymorphism',
      '5. Interfaces vs Abstract Classes: Modern Default Methods & Multiple Inheritance',
      '6. Java Exception Handling: Checked vs Unchecked Exceptions & Robust Error Recovery',
      '7. Java Collections Framework: List, Set, Queue & Map Implementations',
      '8. Java Generics & Lambda Expressions / Stream API (filter, map, collect)',
      '9. Java Multithreading: Thread Lifecycle, Synchronization, Volatile & Thread Pools',
      '10. Introduction to Enterprise Spring Boot: Dependency Injection & RESTful APIs'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 4: The Four Pillars of OOP (चार मुख्य स्तम्भ आसान शब्दों में)',
        summary: 'The 4 fundamental pillars that make software modular, maintainable, and scalable: Encapsulation (data hiding), Abstraction (hiding complexity), Inheritance (reusability), and Polymorphism (many forms).',
        keyPoints: [
          'Encapsulation: Make fields private and expose them via getters/setters to protect internal state.',
          'Abstraction: Show only what is necessary using Interfaces and Abstract classes.',
          'Inheritance: Subclass inherits properties from superclass using the "extends" keyword.',
          'Polymorphism: Method Overloading (compile-time) and Method Overriding (runtime with @Override).'
        ],
        codeSnippet: `// Clean Java OOP Example by Hariom Kushwaha
public abstract class PaymentMethod {
    private String userEmail; // Encapsulated

    public PaymentMethod(String email) {
        this.userEmail = email;
    }

    public String getUserEmail() { return userEmail; }

    // Abstract method must be implemented by subclasses
    public abstract boolean processPayment(double amount);
}

public class UpiPayment extends PaymentMethod {
    private String upiId;

    public UpiPayment(String email, String upiId) {
        super(email);
        this.upiId = upiId;
    }

    @Override
    public boolean processPayment(double amount) {
        System.out.println("Processing ₹" + amount + " via UPI: " + upiId);
        return true;
    }
}`
      }
    ],
    studyNotes: [
      'Interview Question: Why is String immutable in Java? For security, caching (String Pool), thread safety, and Hash Code calculation in HashMaps.',
      'In Java, == compares memory references, while .equals() compares the actual content value!'
    ]
  },
  {
    id: 'tech-career-blueprint',
    title: 'The Ultimate Student Tech Career & Freelancing Blueprint',
    subtitle: 'From College Classroom to High-Paying Tech Jobs, Remote Clients & Global Freelancing',
    slug: 'tech-career-blueprint',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Mentoring students into top careers and independent digital freedom.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Student & Education',
    subcategory: 'Career & Freelancing',
    genre: 'Career Roadmap & Strategy',
    bookType: 'Handbook',
    description: 'An inspiring and ultra-actionable career handbook authored by Hariom Kushwaha for college students and self-taught developers. Learn how to choose your tech niche, build a killer GitHub portfolio that recruiters notice, craft an ATS-optimized resume, land remote freelance clients on Upwork and LinkedIn, crack technical coding interviews, and build lasting financial independence.',
    shortDescription: 'The step-by-step roadmap to building high-value projects, landing tech jobs, and earning through freelancing.',
    pages: 350,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.98,
    reviewCount: 620,
    badge: 'Career Gamechanger',
    coverGradient: 'from-fuchsia-600 via-purple-700 to-indigo-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Career', 'Freelancing', 'Resume', 'Interview Prep', 'Hariom Kushwaha', 'Students', 'HK Tech World'],
    topics: ['Choosing Your Tech Path', 'GitHub Portfolio', 'ATS Resume Secrets', 'Freelancing Mastery', 'Interview Cracking'],
    language: 'English & Hinglish Simplified Notes',
    featured: true,
    trending: true,
    studentPick: true,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-10-3',
    price: 0,
    isFree: true,
    copyrightStatus: 'HK Tech World Original Press / Free for Students',
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '5h 45m',
    whatYoullLearn: [
      'Choose the right career path (Web Dev, AI/ML, DevOps, App Dev, or Cybersecurity)',
      'Build 3 standout, real-world portfolio projects instead of boring clone apps',
      'Create an ATS-proof single-page resume with measurable impact metrics (X-Y-Z formula)',
      'Optimize your LinkedIn and GitHub profiles to attract recruiters automatically',
      'Win high-paying remote freelancing projects on Upwork and through direct cold email outreach',
      'Ace technical interviews, handle behavioral questions, and negotiate your starting salary'
    ],
    tableOfContents: [
      '1. The Tech Mindset: Why College Degrees Aren’t Enough & What Companies Really Want',
      '2. Picking Your High-Income Tech Skill (Web Dev, AI, Cloud, Apps, Security)',
      '3. Project-Based Learning: How to Stop Tutorial Hell & Build Original Software',
      '4. Crafting a Killer GitHub Profile: READMEs, Clean Commits & Open Source Contributions',
      '5. The Perfect Single-Page ATS Tech Resume (With Hariom’s Proven Template)',
      '6. LinkedIn Mastery: Networking with Founders, Tech Leads & Recruiters',
      '7. Freelancing 101: Finding Your First Client on Upwork, Fiverr & Direct Outreach',
      '8. Pricing Your Freelance Services & Handling Contracts, Revisions & Client Payments',
      '9. Mastering the Tech Interview: Coding Rounds, System Design & Behavioral HR Rounds',
      '10. Long-Term Growth: Building Personal Brand, Tech Products & Financial Freedom'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 5: The Perfect ATS Tech Resume (रिज़्यूमे बनाने का सही तरीका)',
        summary: 'Applicant Tracking Systems (ATS) automatically discard 75% of student resumes before any human recruiter reads them. Learn how to format your resume so it scores 95%+ on ATS scanners.',
        keyPoints: [
          'Keep your resume strictly to ONE single page.',
          'No two-column graphics, fancy icons, or progress bars (ATS cannot parse them).',
          'Use the Google X-Y-Z Formula for project bullet points: "Accomplished [X], as measured by [Y], by doing [Z]".',
          'Include live deployment links (e.g. Vercel, Netlify) and GitHub source links for every project.'
        ],
        codeSnippet: `// Example of a High-Impact Resume Bullet Point:
// ❌ BAD: "Made an e-commerce website using React and Node.js."
//  EXCELLENT: "Architected a full-stack e-commerce web app using React 18 and Node.js, reducing API response latency by 45% through Redis caching and serving 2,000+ monthly active users with 99.9% uptime."`
      }
    ],
    studyNotes: [
      'Hariom Career Secret: Don’t wait until final year to start building projects. Start in your 1st and 2nd year, push commits daily on GitHub, and your career will be set before graduation!',
      'Proof of work is 10 times more powerful than a piece of paper certificate.'
    ]
  },
  {
    id: 'mobile-app-handbook',
    title: 'Mobile App Development with React Native & Flutter',
    subtitle: 'Build Stunning iOS & Android Apps with Single Codebase, State Management & API Integration',
    slug: 'mobile-app-handbook',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Cross-platform mobile developer and application architect.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Smartphones & Mobile',
    subcategory: 'Mobile App Development',
    genre: 'Mobile Engineering Handbook',
    bookType: 'Handbook',
    description: 'A complete student guide written by Hariom Kushwaha for building cross-platform mobile apps for Android and iOS using React Native and Flutter. Learn mobile UI components, navigation, camera and GPS device integration, offline SQLite storage, push notifications, and publishing apps to the Google Play Store and Apple App Store.',
    shortDescription: 'Build professional cross-platform mobile apps for Android & iOS with React Native & Flutter.',
    pages: 420,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.92,
    reviewCount: 290,
    badge: 'Mobile Master',
    coverGradient: 'from-cyan-600 via-blue-700 to-indigo-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['React Native', 'Flutter', 'Mobile Apps', 'Android', 'iOS', 'Hariom Kushwaha', 'HK Tech World'],
    topics: ['Cross-Platform Mobile', 'Mobile Navigation', 'State Management', 'Device Hardware APIs', 'Play Store Publishing'],
    language: 'English & Hinglish Simplified Notes',
    featured: false,
    trending: false,
    studentPick: false,
    yearPublished: '2025 Edition',
    updatedDate: 'August 2025',
    isbn: '978-93-89101-11-0',
    price: 0,
    isFree: true,
    copyrightStatus: 'HK Tech World Original Press / Free for Students',
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '6h 50m',
    whatYoullLearn: [
      'Compare Native (Kotlin/Swift) vs Cross-Platform (React Native / Flutter)',
      'Build fluid mobile UIs that adapt perfectly across Android phones and iPhones',
      'Implement smooth screen transitions using React Navigation and Flutter Navigator',
      'Integrate device hardware: Camera, Geolocation, Accelerometer, and Biometric Auth',
      'Store data locally for offline operation using AsyncStorage and SQLite',
      'Generate signed APKs/AAB bundles and publish to the Google Play Console'
    ],
    tableOfContents: [
      '1. Mobile App Landscape: Native Android/iOS vs Hybrid vs Cross-Platform',
      '2. Setting up the Development Environment: Expo, Android Studio & Xcode',
      '3. React Native Core Components: View, Text, Image, ScrollView & FlatList',
      '4. Mobile Styling: Flexbox in Mobile, Screen Dimensions & Responsive Layouts',
      '5. Mobile Navigation: Stack Navigation, Bottom Tabs & Drawer Menus',
      '6. State Management in Mobile: Managing Global App State without Re-render Lag',
      '7. Accessing Native Device APIs: Camera, Gallery, Location & Local Notifications',
      '8. Offline Data Persistence & Secure Token Storage (AsyncStorage, EncryptedStorage)',
      '9. Flutter & Dart Fundamentals: Everything is a Widget (Stateless vs Stateful)',
      '10. Building, Signing & Publishing to Google Play Store & Apple App Store'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: React Native Core Components & FlatList Optimization',
        summary: 'Unlike the web where <div> and <span> rule, mobile uses native components that map directly to Android and iOS views. Learn why FlatList is essential for rendering long lists with zero stutter.',
        keyPoints: [
          '<View> is the equivalent of <div>; <Text> is required for all text (raw strings outside <Text> crash in React Native).',
          'FlatList virtualizes list items, only rendering elements visible on the current screen.',
          'Always provide keyExtractor and initialNumToRender to maintain 60 FPS smooth scrolling.'
        ],
        codeSnippet: `// High-Performance Mobile List in React Native
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Item { id: string; title: string; }

export function ProductList({ data }: { data: Item[] }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      initialNumToRender={10}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#1e293b', marginVertical: 6, borderRadius: 12 },
  title: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold' }
});`
      }
    ],
    studyNotes: [
      'Expo makes testing on your physical phone effortless: just scan the QR code with the Expo Go app.',
      'Always test touch targets: buttons should be at least 44x44 pixels so thumbs can easily tap them.'
    ]
  },
  {
    id: 'devops-cloud-handbook',
    title: 'Cloud Computing, DevOps & Docker: The Modern Infrastructure Handbook',
    subtitle: 'Linux Systems, CI/CD Pipelines, Docker Containers, Kubernetes & Production Cloud',
    slug: 'devops-cloud-handbook',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. Cloud architect and DevOps specialist.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Cloud & Internet',
    subcategory: 'DevOps & Cloud Systems',
    genre: 'DevOps Architecture Manual',
    bookType: 'Handbook',
    description: 'A masterclass manual written by Hariom Kushwaha on modern cloud computing and DevOps. Learn the core Linux terminal commands, Git branching strategies, automating builds with GitHub Actions CI/CD, packaging applications with Docker containers, orchestrating microservices with Kubernetes, and managing scalable cloud servers on AWS and Google Cloud.',
    shortDescription: 'Master Linux servers, Docker containers, CI/CD automation, and cloud deployments.',
    pages: 450,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.95,
    reviewCount: 330,
    badge: 'DevOps Standard',
    coverGradient: 'from-slate-700 via-indigo-900 to-blue-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['DevOps', 'Docker', 'Linux', 'Kubernetes', 'Cloud', 'CI/CD', 'Hariom Kushwaha', 'HK Tech World'],
    topics: ['Linux Administration', 'Git & CI/CD Pipelines', 'Docker & Dockerfile', 'Kubernetes Basics', 'Cloud Infrastructure'],
    language: 'English & Hinglish Simplified Notes',
    featured: false,
    trending: true,
    studentPick: false,
    yearPublished: '2025 Edition',
    updatedDate: 'September 2025',
    isbn: '978-93-89101-12-7',
    price: 0,
    isFree: true,
    copyrightStatus: 'HK Tech World Original Press / Free for Students',
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '7h 00m',
    whatYoullLearn: [
      'Master the essential Linux command-line tools (bash, grep, awk, curl, systemctl)',
      'Automate testing and deployments with GitHub Actions CI/CD workflows',
      'Build lightweight, secure Docker container images using multi-stage Dockerfiles',
      'Orchestrate multi-container applications using Docker Compose (App + Database + Redis)',
      'Understand Kubernetes Pods, Deployments, Services, and Ingress routing',
      'Deploy applications to the cloud with zero downtime and automatic SSL certificates'
    ],
    tableOfContents: [
      '1. Introduction to DevOps: Breaking the Wall Between Developers & Operations',
      '2. Linux Administration Essentials: File Permissions, Process Management & SSH',
      '3. Advanced Git & GitHub: Trunk-Based Development, Rebase & Pull Request Best Practices',
      '4. Continuous Integration & Continuous Deployment (CI/CD) with GitHub Actions',
      '5. Containerization Foundations: Virtual Machines vs Docker Containers',
      '6. Writing Multi-Stage Dockerfiles: Minimizing Image Size & Hardening Security',
      '7. Multi-Container Orchestration with Docker Compose (Node.js + PostgreSQL + Nginx)',
      '8. Introduction to Kubernetes (K8s): Pods, ReplicaSets, Deployments & Services',
      '9. Cloud Providers: AWS (EC2, S3), Google Cloud (Cloud Run) & Serverless Platforms',
      '10. Monitoring & Observability: Logs, Metrics, Prometheus & Uptime Health Checks'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 5: Docker Containerization (कंटेनर टेक्नोलॉजी को आसान भाषा में समझें)',
        summary: 'Why "It works on my machine" is solved forever by Docker. A container packages your application code along with its exact runtime, libraries, dependencies, and configuration files into an immutable lightweight image.',
        keyPoints: [
          'A Container is NOT a Virtual Machine. Containers share the host OS kernel and boot in milliseconds.',
          'Dockerfile is the blueprint recipe used to build a Docker Image.',
          'Multi-stage builds allow compiling in a heavy build container and copying only the binary into a tiny production Alpine image (e.g. 1GB down to 50MB).'
        ],
        codeSnippet: `# Production Multi-Stage Dockerfile by Hariom Kushwaha
# Stage 1: Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production runtime stage (Small & Secure!)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["node", "dist/server.cjs"]`
      }
    ],
    studyNotes: [
      'Security Tip by Hariom: Never run Docker containers as the root user. Always add USER node or create a non-root user in your Dockerfile.',
      'Always add a .dockerignore file to exclude node_modules and .git folders when building images.'
    ]
  }
];

const RAW_EBOOKS_DATA: EBookItem[] = [
  BHARATVARSH_EBOOK_ITEM,
  ...CORE_TECH_EBOOKS,
  ...BATCH_B_BOOKS_DATA,
  ...EXPANDED_BOOKS_DATA,
  ...TECH_BOOKS_EXPANDED_DATA,
  ...ADVANCED_TECH_BOOKS_DATA,
  ...SCHOOL_BOOKS_DATA,
  ...SCHOOL_BOOKS_EXPANDED_DATA,
  ...SENIOR_SCHOOL_ACADEMIC_DATA,
  ...MIDDLE_SCHOOL_BOOKS_DATA,
  ...COMPETITIVE_EXAMS_BOOKS_DATA,
  ...GENERAL_BOOKS_EXPANDED_DATA,
  ...BUSINESS_AND_LIFE_BOOKS_DATA,
  ...MILESTONE_BOOKS_DATA,
  ...STORIES_BOOKS_DATA,
  ...MORE_STORIES_AND_APTITUDE_DATA,
  ...PUZZLES_BOOKS_DATA,
  ...NEW_SPECIAL_BOOKS_DATA,
  ...NATIONAL_HEROES_AND_CORE_EXAMS_DATA,
  ...MEGA_CATALOG_PART1_DATA,
  ...MEGA_CATALOG_EXTENDED_DATA,
  ...MEGA_CATALOG_PART3_DATA,
  ...MEGA_CATALOG_PART4_DATA
];

export const EBOOKS_DATA: EBookItem[] = RAW_EBOOKS_DATA.map(b => {
  const cleanChapters = (b.tableOfContents || []).map(t => 
    t.replace(/^(?:Chapter|अध्याय|पाठ)?\s*\d+[:.\-\s]*/i, '').trim()
  ).filter(Boolean);

  const topics = (b.topics && b.topics.length > 0)
    ? b.topics
    : [
        ...(b.tags || []),
        ...cleanChapters.slice(0, 4)
      ].filter((v, i, a) => v && a.indexOf(v) === i).slice(0, 6);

  const whatYoullLearn = (b.whatYoullLearn && b.whatYoullLearn.length > 0)
    ? b.whatYoullLearn
    : cleanChapters.slice(0, 4).map(clean => `इस पुस्तक में ${clean} की बुनियादी और व्यावहारिक समझ प्राप्त करना`);

  const fallbackDesc = (b.subtitle && b.subtitle.trim().length > 0)
    ? `${b.title} — ${b.subtitle}. A comprehensive, curated study guide and master reference authored by ${b.author}. Featuring in-depth chapter notes, step-by-step conceptual breakdowns, high-yield examination takeaways, interactive viva voce interview practice, and knowledge-check quizzes.`
    : `${b.title}: A structured, in-depth academic and reference handbook authored by ${b.author} in ${b.category}. Covers foundational concepts, chapter-by-chapter detailed theory, practical applications, interactive viva voce preparation, and self-evaluation quizzes for students and self-learners.`;

  const description = (b.description && b.description.trim().length > 0)
    ? b.description
    : fallbackDesc;

  const shortDescription = (b.shortDescription && b.shortDescription.trim().length > 0)
    ? b.shortDescription
    : (b.subtitle && b.subtitle.trim().length > 0)
      ? b.subtitle
      : (description.length > 130 ? description.slice(0, 127) + '...' : description);

  // Smart Pricing assignment:
  // - School books (Classes 6-12), Indian Heritage / Bharatvarsh, Stories, and Foundation Guides remain 100% Free for students.
  // - Advanced Technology, High-Level AI, Competitive Exam Guides, and Professional Handbooks are priced between ₹49 and ₹499.
  const isSchoolOrHeritage = 
    b.category === 'Class 9–12 / School' || 
    b.category === 'Middle School (Class 6–8)' || 
    Boolean(b.schoolClass) || 
    b.category === 'Stories & Literature' || 
    b.category === 'General Knowledge' || 
    b.id === 'bharatvarsh-complete-history' ||
    b.id.startsWith('ncert') ||
    b.id.startsWith('class-') ||
    (b.difficulty === 'Beginner' && (b.category === 'Science & Mathematics' || b.category === 'Puzzles & Brain'));

  let calculatedPrice = 0;
  let calculatedOriginalPrice: number | undefined = undefined;
  let calculatedIsFree = true;
  let calculatedDiscountPercentage: number | undefined = undefined;

  if (isSchoolOrHeritage) {
    calculatedPrice = 0;
    calculatedIsFree = true;
    calculatedOriginalPrice = undefined;
    calculatedDiscountPercentage = undefined;
  } else if (b.category === 'Artificial Intelligence' || b.title.includes('AI') || b.title.includes('LLM') || b.title.includes('Microservices') || b.title.includes('Kubernetes')) {
    // Top Advanced Engineering & AI Mastery
    calculatedPrice = 499;
    calculatedOriginalPrice = 999;
    calculatedDiscountPercentage = 50;
    calculatedIsFree = false;
  } else if (b.category === 'Coding & Programming' || b.category === 'Technology & Computers') {
    if (b.difficulty === 'Advanced') {
      calculatedPrice = 299;
      calculatedOriginalPrice = 599;
      calculatedDiscountPercentage = 50;
    } else if (b.difficulty === 'Intermediate') {
      calculatedPrice = 149;
      calculatedOriginalPrice = 299;
      calculatedDiscountPercentage = 50;
    } else {
      calculatedPrice = 99;
      calculatedOriginalPrice = 199;
      calculatedDiscountPercentage = 50;
    }
    calculatedIsFree = false;
  } else if (b.category === 'Competitive Exams') {
    calculatedPrice = 199;
    calculatedOriginalPrice = 399;
    calculatedDiscountPercentage = 50;
    calculatedIsFree = false;
  } else if (b.category === 'Business & Self-Help' || b.category === 'Web Development' || b.category === 'Cybersecurity & Digital Safety') {
    calculatedPrice = 99;
    calculatedOriginalPrice = 199;
    calculatedDiscountPercentage = 50;
    calculatedIsFree = false;
  } else {
    // Core Quick Guides & Pocket Books
    calculatedPrice = 49;
    calculatedOriginalPrice = 99;
    calculatedDiscountPercentage = 50;
    calculatedIsFree = false;
  }

  return {
    ...b,
    price: calculatedPrice,
    originalPrice: calculatedOriginalPrice,
    isFree: calculatedIsFree,
    discountPercentage: calculatedDiscountPercentage,
    description,
    shortDescription,
    topics: topics.length > 0 ? topics : [b.category, b.title],
    whatYoullLearn: whatYoullLearn.length > 0 ? whatYoullLearn : [`${b.title} के प्रमुख सिद्धांतों का अध्ययन`]
  };
});

export const EBOOK_CATEGORIES = [
  'All Books',
  'Competitive Exams',
  'Middle School (Class 6–8)',
  'Class 9–12 / School',
  'Technology & Computers',
  'Artificial Intelligence',
  'Coding & Programming',
  'Web Development',
  'Cybersecurity & Digital Safety',
  'Smartphones & Internet',
  'Digital Skills & Practical Guides',
  'Science & Mathematics',
  'General Knowledge',
  'Stories & Literature',
  'Puzzles & Brain',
  'Business & Self-Help'
] as const;

