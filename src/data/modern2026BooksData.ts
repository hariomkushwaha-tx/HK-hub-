import { EBookItem } from '../types';

export const MODERN_2026_BOOKS_DATA: EBookItem[] = [
  {
    id: 'modern-genai-llm-handbook',
    title: 'Generative AI & LLM Systems: Production Engineering Handbook (2026 Edition)',
    subtitle: 'RAG Architecture, Vector DBs, LangChain/LlamaIndex, Function Calling & Cost Optimization',
    slug: 'modern-genai-llm-handbook',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World & Creator of HK VELORA. AI systems architect and educator helping developers deploy production-grade LLM applications.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Artificial Intelligence',
    subcategory: 'Generative AI & LLMs',
    genre: 'AI Engineering Handbook',
    bookType: 'Handbook',
    description: 'The definitive 2026 production playbook for building generative AI applications that scale reliably. Covers Retrieval-Augmented Generation (RAG) with advanced hybrid search, vector indexing (HNSW, Cosine Similarity, Chroma/Pinecone), structured tool calling, prompt caching, evaluation frameworks (RAGAS), and enterprise cost minimization.',
    shortDescription: 'Build production RAG pipelines, master vector databases, function calling, prompt caching, and LLM optimization.',
    pages: 520,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.98,
    reviewCount: 680,
    badge: '2026 Flagship',
    coverGradient: 'from-violet-600 via-purple-700 to-indigo-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Generative AI', 'LLM', 'RAG', 'Prompt Engineering', 'LangChain', 'Vector Database', 'Hariom Kushwaha', 'Python', 'AI 2026'],
    topics: ['Retrieval-Augmented Generation', 'Vector Search & HNSW', 'Prompt Engineering & Caching', 'Function Calling & Tools', 'LLM Cost Reduction'],
    language: 'English & Hinglish Notes',
    featured: true,
    trending: true,
    studentPick: true,
    isNewRelease: true,
    yearPublished: '2026 Edition',
    updatedDate: 'September 2026',
    isbn: '978-93-92026-01-0',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '8h 45m',
    whatYoullLearn: [
      'Architect modular, low-latency Retrieval-Augmented Generation (RAG) systems with re-ranking',
      'Optimize vector databases using dense and sparse hybrid search with pgvector and ChromaDB',
      'Design unbreakable system prompts with structured JSON outputs and function calling',
      'Slash token consumption by 60%+ using prompt caching and semantic request deduplication',
      'Build autonomous multi-agent workflows with human-in-the-loop validation'
    ],
    tableOfContents: [
      '1. Modern LLM Architecture: Attention Mechanism, Context Windows & Tokens (2026 View)',
      '2. Prompt Engineering as Code: Zero-Shot, Few-Shot, Chain-of-Thought & System Guardrails',
      '3. Embeddings & Vector Mathematics: Cosine Similarity, Dot Product & Euclidean Distance',
      '4. Vector Databases in Production: Chroma, Pinecone, Qdrant & pgvector Optimization',
      '5. Advanced RAG: Chunking Strategies, Parent-Document Retrieval & Cross-Encoder Re-Ranking',
      '6. Function Calling & Tool Execution: Connecting LLMs to SQL, APIs & External Systems',
      '7. Multi-Agent Systems & Orchestration: LangChain, LangGraph & CrewAI Frameworks',
      '8. Prompt Caching & Token Economics: Reducing Latency and Cloud Bills by 70%',
      '9. Evaluation & Hallucination Mitigation: RAGAS Metrics, Groundedness & Faithfulness Checks',
      '10. Deploying AI APIs to Production: Streaming SSE, Rate Limiting & Monitoring'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Modern LLM Architecture & Tokens (2026 परिप्रेक्ष्य)',
        summary: 'Understand how tokenizers convert text to numerical token IDs and how self-attention weights compute contextual meaning across 100K+ token context windows.',
        keyPoints: [
          'A token is roughly 4 characters or 0.75 words in English; Hinglish often consumes 2-3x more tokens due to subword splitting.',
          'Prompt caching preserves KV (Key-Value) cache states in GPU VRAM, cutting repeat input costs by up to 80%.',
          'Self-attention calculates Q (Query), K (Key), and V (Value) vectors for every token in parallel.',
          'Hariom Note: Always validate structured JSON schema responses using Pydantic or Zod.'
        ],
        codeSnippet: `// Production RAG Query Pipeline in TypeScript / Node.js
import { GoogleGenAI } from '@google/genai';

async function askRAGWithContext(query: string, retrievedContext: string[]): Promise<string> {
  const ai = new GoogleGenAI();
  const contextBlock = retrievedContext.join('\\n---\\n');

  const systemInstruction = \`You are an expert technical tutor for HK VELORA.
Answer the student's question accurately using ONLY the provided reference documents.
If the answer is not in the context, clearly say "This topic is not covered in the given notes".\`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: [
      { role: 'user', text: \`Context:\\n\${contextBlock}\\n\\nStudent Question: \${query}\` }
    ],
    config: {
      systemInstruction: { parts: [{ text: systemInstruction }] },
      temperature: 0.2
    }
  });

  return response.text || '';
}`
      }
    ]
  },
  {
    id: 'modern-system-design-mastery',
    title: 'System Design & Scalable Distributed Architectures: 2026 Engineering Blueprint',
    subtitle: 'Microservices, High Throughput, CAP Theorem, Kafka Streaming, Redis & Database Sharding',
    slug: 'modern-system-design-mastery',
    author: 'Hariom Kushwaha & HK VELORA Architecture Team',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World. Specializes in building distributed systems that handle millions of requests per second.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Coding & Programming',
    subcategory: 'System Design & Distributed Systems',
    genre: 'Engineering Architecture Handbook',
    bookType: 'Handbook',
    description: 'The holy grail for acing System Design interviews at top tech companies and building bulletproof distributed platforms. Covers real-world capacity estimation, consistent hashing, distributed locking (Redlock), message queuing with Apache Kafka, event sourcing, CDN caching layers, and database sharding patterns.',
    shortDescription: 'Master scalable system design: Microservices, Kafka, Redis caching, CAP theorem, and distributed databases.',
    pages: 495,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.97,
    reviewCount: 520,
    badge: 'System Design Pro',
    coverGradient: 'from-blue-700 via-indigo-900 to-slate-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['System Design', 'Microservices', 'Distributed Systems', 'Kafka', 'Redis', 'Hariom Kushwaha', 'Scalability', 'Interview Prep'],
    topics: ['Capacity Estimation & Back-of-the-Envelope', 'Consistent Hashing & Load Balancing', 'Redis Distributed Caching', 'Event-Driven Systems with Kafka', 'Database Sharding & Replication'],
    language: 'English & Hinglish Notes',
    featured: true,
    trending: true,
    studentPick: true,
    isNewRelease: true,
    yearPublished: '2026 Edition',
    updatedDate: 'September 2026',
    isbn: '978-93-92026-02-7',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '9h 15m',
    whatYoullLearn: [
      'Perform lightning-fast back-of-the-envelope capacity estimations for storage, QPS, and bandwidth',
      'Implement multi-tier caching architectures with Cache-Aside, Write-Through, and Cache Invalidation',
      'Scale relational and NoSQL databases horizontally with range-based, hash-based, and directory sharding',
      'Design decoupled, event-driven pipelines using Apache Kafka topics, partitions, and consumer groups',
      'Prevent cascading failures using circuit breakers (Hystrix/Resilience4j), retries, and backoff'
    ],
    tableOfContents: [
      '1. Back-of-the-Envelope Calculations: Numbers Every Engineer Must Know in 2026',
      '2. Scalability Fundamentals: Vertical vs Horizontal Scaling, Stateless vs Stateful Services',
      '3. Load Balancing & Reverse Proxies: Layer 4 vs Layer 7, Consistent Hashing Algorithms',
      '4. Caching Strategies: Redis & Memcached, Eviction Policies (LRU, LFU), Thundering Herd Prevention',
      '5. Database Scaling: Master-Replica Replication, Sharding, Federation & Split-Brain Scenarios',
      '6. Distributed Message Brokers: Apache Kafka vs RabbitMQ vs AWS SQS Architecture',
      '7. Designing a Scalable URL Shortener (TinyURL) with 100M Daily Requests',
      '8. Designing a Real-Time Chat & Notification System (WhatsApp/Telegram Architecture)',
      '9. Designing a Distributed Rate Limiter with Redis Lua Scripts',
      '10. Designing a Global Video Streaming Platform (Netflix/YouTube CDN Architecture)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Back-of-the-Envelope Estimation (इंटरव्यू के लिए महत्वपूर्ण गणनाएँ)',
        summary: 'Master the fundamental powers of 2 and latency numbers to accurately predict servers, storage, and memory required for any system in 2 minutes.',
        keyPoints: [
          '1 Day = 86,400 seconds ≈ 10^5 seconds. If an app handles 10M active users with 10 requests/day = 100M reqs/day ≈ 1,000 QPS average (peak 2,000 to 5,000 QPS).',
          'L1 cache reference ≈ 1 ns, RAM access ≈ 100 ns, SSD random read ≈ 150 µs, Round-trip intra-datacenter ≈ 0.5 ms, Cross-continent packet ≈ 150 ms.',
          'Always account for 80/20 rule: 20% of content generates 80% of read traffic (ideal for in-memory Redis cache sizing).',
          'Hariom Rule: Always design storage with a 3-5 year growth runway factored in.'
        ],
        codeSnippet: `// Sliding Window Rate Limiter in Redis Lua (Atomic Execution)
local key = KEYS[1]
local now = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local maxRequests = tonumber(ARGV[3])
local clearBefore = now - window

-- Remove old request timestamps outside current sliding window
redis.call('ZREMRANGEBYSCORE', key, 0, clearBefore)

-- Count remaining requests inside window
local currentCount = redis.call('ZCARD', key)

if currentCount < maxRequests then
    -- Record this request with unique member (timestamp + random)
    redis.call('ZADD', key, now, now .. '-' .. ARGV[4])
    redis.call('EXPIRE', key, math.ceil(window / 1000) + 1)
    return 1 -- Allowed
else
    return 0 -- Rate Limited
end`
      }
    ]
  },
  {
    id: 'modern-devops-docker-k8s',
    title: 'Modern DevOps Bible: Docker, Kubernetes, Helm & GitHub Actions (2026 Edition)',
    subtitle: 'Multi-Stage Container Builds, Ingress Controllers, CI/CD Automation & Terraform IaC',
    slug: 'modern-devops-docker-k8s',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Cloud architect and educator with deep expertise in automated container deployments and cloud resilience.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Technology & Computers',
    subcategory: 'DevOps & Cloud Engineering',
    genre: 'DevOps Engineering Handbook',
    bookType: 'Handbook',
    description: 'A comprehensive, zero-fluff manual to modern containerization and automated deployments. Learn how to write featherweight multi-stage Dockerfiles, orchestrate production Kubernetes clusters with Helm charts and Ingress-Nginx, build automated GitHub Actions pipelines with automated testing, and provision infrastructure as code using Terraform.',
    shortDescription: 'Master Docker, Kubernetes pods & services, Helm, GitHub Actions CI/CD pipelines, and Terraform IaC.',
    pages: 440,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.96,
    reviewCount: 430,
    badge: 'DevOps Best Seller',
    coverGradient: 'from-cyan-700 via-teal-800 to-slate-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Terraform', 'Hariom Kushwaha', 'Cloud'],
    topics: ['Docker Multi-Stage Optimization', 'Kubernetes Deployments & Services', 'Helm Package Management', 'GitHub Actions Workflows', 'Infrastructure as Code (IaC)'],
    language: 'English & Hinglish Notes',
    featured: true,
    trending: true,
    studentPick: true,
    isNewRelease: true,
    yearPublished: '2026 Edition',
    updatedDate: 'September 2026',
    isbn: '978-93-92026-03-4',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '7h 50m',
    whatYoullLearn: [
      'Write ultra-secure, small footprint multi-stage Dockerfiles reducing image sizes from 1GB to under 50MB',
      'Configure Kubernetes Pods, ReplicaSets, Deployments, ClusterIP, and NodePort services',
      'Deploy TLS-encrypted Ingress controllers with Cert-Manager for automatic Let’s Encrypt certificates',
      'Automate linting, unit testing, Docker image pushing, and zero-downtime rolling updates in GitHub Actions',
      'Provision scalable VPCs, managed databases, and cloud compute using declarative Terraform'
    ],
    tableOfContents: [
      '1. Containerization Principles: Linux Namespaces, Cgroups & Union File Systems',
      '2. Production Dockerfiles: Multi-Stage Builds, Alpine vs Distroless, Non-Root Users & Caching',
      '3. Docker Compose for Local Microservices: Networking, Volumes & Healthchecks',
      '4. Kubernetes Architecture: Control Plane (API Server, etcd, Scheduler) vs Worker Nodes (Kubelet)',
      '5. Core K8s Objects: Pods, Deployments, ConfigMaps, Secrets & Persistent Volume Claims',
      '6. Kubernetes Networking: ClusterIP, NodePort, LoadBalancer & Ingress-Nginx Controllers',
      '7. Helm 3 Package Management: Writing Reusable Charts, Values.yaml & Release Lifecycles',
      '8. GitHub Actions CI/CD Mastery: Matrix Builds, Artifacts, Secrets & Automated Deployments',
      '9. Infrastructure as Code (IaC) with Terraform: Providers, State Management & Modules',
      '10. Cloud Observability & Monitoring: Prometheus Metrics, Grafana Dashboards & AlertManager'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: Production Dockerfiles & Multi-Stage Builds',
        summary: 'Learn how to separate compilation dependencies from runtime dependencies to produce minimal, non-root production container images.',
        keyPoints: [
          'Never leave development build tools (npm, compiler, git) inside production containers.',
          'Always create an unprivileged user (e.g., node, nonroot) instead of running processes as root.',
          'Leverage layer caching: Copy package.json and lock files first before copying application source code.',
          'Hariom Tip: Use distroless or alpine base images to shrink attack surface drastically.'
        ],
        codeSnippet: `# Production Multi-Stage Dockerfile for Node.js / React
# Stage 1: Dependency & Build Stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --prefer-offline
COPY . .
RUN npm run build

# Stage 2: Minimal Production Runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S hkgroup && adduser -S hkuser -G hkgroup
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /app/dist ./dist
USER hkuser
EXPOSE 3000
CMD ["node", "dist/server.js"]`
      }
    ]
  },
  {
    id: 'modern-dsa-14-patterns',
    title: '14 Master DSA Patterns for Coding Interviews: Visual & Intuitive Guide (2026 Edition)',
    subtitle: 'Sliding Window, Two Pointers, Fast & Slow, Monotonic Stack, Backtracking & DP Knapsack',
    slug: 'modern-dsa-14-patterns',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Competitive programmer and interview mentor. Simplified hundreds of LeetCode problems into 14 reusable algorithmic patterns.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Coding & Programming',
    subcategory: 'Algorithms & Data Structures',
    genre: 'Algorithms Playbook',
    bookType: 'Handbook',
    description: 'Stop memorizing 500 individual LeetCode solutions. Instead, master the 14 core underlying patterns that solve 95% of interview questions. Includes step-by-step logic, edge cases, visual diagrams, and multi-language solutions (Python, C++, Java, TypeScript) for Sliding Window, Fast & Slow Pointers, Monotonic Stack, Top-K Elements, Cyclic Sort, and Dynamic Programming.',
    shortDescription: 'Master the 14 foundational algorithmic patterns to solve any LeetCode coding interview problem with ease.',
    pages: 460,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.99,
    reviewCount: 780,
    badge: 'FAANG Must-Have',
    coverGradient: 'from-amber-600 via-orange-700 to-rose-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['DSA', 'LeetCode', '14 Patterns', 'Sliding Window', 'Two Pointers', 'Hariom Kushwaha', 'FAANG', 'Interview Prep'],
    topics: ['Sliding Window Dynamic Sizing', 'Fast & Slow Pointer Cycle Detection', 'Monotonic Stack for Next Greater Element', 'Two Heaps for Median Finding', 'Dynamic Programming Patterns'],
    language: 'English & Hinglish Simplified Notes',
    featured: true,
    trending: true,
    studentPick: true,
    isNewRelease: true,
    yearPublished: '2026 Edition',
    updatedDate: 'September 2026',
    isbn: '978-93-92026-04-1',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '8h 20m',
    whatYoullLearn: [
      'Identify which of the 14 patterns applies within 60 seconds of reading a problem prompt',
      'Solve contiguous subarray problems in O(n) time using fixed and dynamic Sliding Window techniques',
      'Detect linked list cycles and find middle nodes effortlessly using Fast & Slow pointers',
      'Find Next Greater Element and largest rectangle in histogram using Monotonic Stacks',
      'Deconstruct complex 1D and 2D Dynamic Programming problems into base cases and recurrence relations'
    ],
    tableOfContents: [
      '1. Pattern 1: Sliding Window (Fixed Size vs Dynamic Contiguous Subarrays)',
      '2. Pattern 2: Two Pointers (Converging, Diverging & Sorted Array Pair Search)',
      '3. Pattern 3: Fast & Slow Pointers (Floyd Tortoise and Hare Cycle Detection)',
      '4. Pattern 4: Merge Intervals & Overlap Resolution (Scheduling & Range Merging)',
      '5. Pattern 5: Cyclic Sort (O(n) In-Place Number Mapping for 1 to n Arrays)',
      '6. Pattern 6: In-Place Reversal of a Linked List (Single & Sub-List Reversals)',
      '7. Pattern 7: Tree Breadth-First Search (Level Order Traversal, Zig-Zag, Max Depth)',
      '8. Pattern 8: Tree Depth-First Search (Path Sum, All Paths, Lowest Common Ancestor)',
      '9. Pattern 9: Two Heaps (Find Median from Data Stream & Sliding Window Median)',
      '10. Pattern 10: Subsets & Backtracking (Permutations, Combinations & Phone Mnemonics)',
      '11. Pattern 11: Modified Binary Search (Search in Rotated Sorted Array & Unknown Length)',
      '12. Pattern 12: Top K Elements (Min-Heap vs QuickSelect for O(n) Average Selection)',
      '13. Pattern 13: K-Way Merge (Merge K Sorted Lists, Smallest Range Covering Elements)',
      '14. Pattern 14: 0/1 Knapsack & Unbounded Dynamic Programming Patterns'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: Pattern 1 - Sliding Window (स्लाइडिंग विंडो पैटर्न)',
        summary: 'Learn how to transform nested O(n²) subarray brute-force searches into single-pass O(n) linear scans by maintaining a sliding window state.',
        keyPoints: [
          'Trigger Words in Question: "Contiguous subarray", "substring", "longest/shortest with condition k", "maximum sum of size k".',
          'Template Structure: Expand right pointer each iteration, add element to window state, while window is invalid, shrink left pointer and subtract element.',
          'Time Complexity: O(n) because each element is added by right and removed by left at most once.',
          'Hariom Tip: Never slice or copy subarrays inside the loop; simply track pointers and frequency counts.'
        ],
        codeSnippet: `// Longest Substring Without Repeating Characters (LeetCode #3)
// Time: O(n) | Space: O(min(m, n))
function lengthOfLongestSubstring(s: string): number {
  const charMap = new Map<string, number>();
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    // If character exists inside current window, jump left pointer
    if (charMap.has(char) && charMap.get(char)! >= left) {
      left = charMap.get(char)! + 1;
    }
    charMap.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}`
      }
    ]
  },
  {
    id: 'modern-nextjs15-react19',
    title: 'Full-Stack Next.js 15, React 19 & TypeScript: Modern Web Architecture',
    subtitle: 'Server Components (RSC), Server Actions, Turbopack, App Router, Tailwind & PostgreSQL',
    slug: 'modern-nextjs15-react19',
    author: 'Hariom Kushwaha & HK VELORA Web Team',
    authorId: 'hariom-kushwaha',
    authorBio: 'Frontend and full-stack systems engineer. Built modern web applications serving global student communities.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Web Development',
    subcategory: 'Full-Stack Modern Web',
    genre: 'Web Architecture Handbook',
    bookType: 'Handbook',
    description: 'The complete architectural guide to building blazing-fast modern full-stack web applications with Next.js 15 and React 19. Deep dive into React Server Components (RSC), Server Actions for mutation without manual API routes, Turbopack bundling, streaming SSR with Suspense, caching layers, Tailwind CSS styling, and secure database connections with Drizzle ORM and PostgreSQL.',
    shortDescription: 'Master Next.js 15 App Router, React 19 Server Components, Server Actions, TypeScript, and PostgreSQL.',
    pages: 475,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.95,
    reviewCount: 460,
    badge: 'Full-Stack 2026',
    coverGradient: 'from-slate-900 via-zinc-800 to-indigo-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Server Components', 'Hariom Kushwaha'],
    topics: ['React Server Components (RSC) Paradigm', 'Next.js 15 Server Actions & Mutations', 'Streaming SSR with Suspense', 'Caching Lifecycle (Data Cache, Full Route Cache)', 'Authentication & RBAC'],
    language: 'English & Hinglish Notes',
    featured: true,
    trending: true,
    studentPick: true,
    isNewRelease: true,
    yearPublished: '2026 Edition',
    updatedDate: 'September 2026',
    isbn: '978-93-92026-05-8',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '8h 00m',
    whatYoullLearn: [
      'Understand the boundary between Server Components and Client Components in React 19',
      'Execute database queries and mutations securely using Server Actions without API boilerplate',
      'Implement streaming SSR with React Suspense to achieve sub-second First Contentful Paint (FCP)',
      'Manage global state without Redux using React Context, Server State, and URL search parameters',
      'Build secure user authentication using HTTP-only cookies, JWT verification, and Role-Based Access Control'
    ],
    tableOfContents: [
      '1. React 19 Architectural Shift: Actions, useActionState, useOptimistic & use() Hook',
      '2. Next.js 15 App Router Fundamentals: Layouts, Templates, Error Boundaries & Loading UI',
      '3. React Server Components (RSC): Zero-Bundle-Size Architecture & Data Fetching Patterns',
      '4. Server Actions in Depth: Form Validation with Zod, Mutations & Revalidation (revalidatePath)',
      '5. The Next.js 15 Caching Matrix: Request Memoization, Data Cache & Router Cache Explained',
      '6. Modern Database Integration: PostgreSQL, Neon / Supabase, Drizzle ORM Schema Migrations',
      '7. Production Authentication: Session Cookies, JWT, Middleware Protection & RBAC',
      '8. Styling Systems: Tailwind CSS v4, CSS Variables, Theme Toggles & Mobile Responsive UI',
      '9. Performance Optimization: Core Web Vitals (LCP, CLS, INP), Image & Font Optimization',
      '10. Deploying Next.js: Vercel, Docker Standalone Mode & Self-Hosted Linux VPS'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 1: React 19 Architectural Shift & Server Components',
        summary: 'Demystifies why Server Components keep zero JavaScript in the client bundle and how Server Actions modernize form handling.',
        keyPoints: [
          'Server Components execute exclusively on the server, generating HTML and a virtual DOM representation without sending library code to the browser.',
          'Client components (`use client`) are only needed when you require interactive event listeners (onClick, onChange) or browser hooks (useState, useEffect).',
          'Data fetching belongs in Server Components: You can directly `await db.query()` without setting up Express or fetch endpoints.',
          'Hariom Tip: Push `use client` to the furthest leaf nodes of your component tree to keep bundle size tiny.'
        ],
        codeSnippet: `// Next.js 15 Server Action with Zod Validation & Optimistic UI
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const NoteSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  content: z.string().min(10, "Content must be detailed")
});

export async function createStudentNote(prevState: any, formData: FormData) {
  const parsed = NoteSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content')
  });

  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors, success: false };
  }

  // Direct database query on server
  // await db.insert(notes).values(parsed.data);
  revalidatePath('/notes');
  return { success: true, error: null };
}`
      }
    ]
  },
  {
    id: 'modern-cybersecurity-zero-trust',
    title: 'Cybersecurity, Ethical Hacking & Zero-Trust Defense (2026 Edition)',
    subtitle: 'OWASP Top 10, API Penetration Testing, JWT Security, XSS/SQLi Mitigation & DevSecOps',
    slug: 'modern-cybersecurity-zero-trust',
    author: 'Hariom Kushwaha & HK Security Labs',
    authorId: 'hariom-kushwaha',
    authorBio: 'Cybersecurity researcher and systems analyst specializing in web defense, zero-trust protocols, and safe computing.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Cybersecurity & Digital Safety',
    subcategory: 'Web Security & Ethical Hacking',
    genre: 'Cyber Defense Handbook',
    bookType: 'Handbook',
    description: 'A cutting-edge guide to modern cyber defense and ethical penetration testing. Covers the updated OWASP Top 10 vulnerabilities (including API security risks, broken object-level authorization BOLA, and SSRF), practical exploit analysis in safe sandboxes, defensive cryptography (AES-GCM, RSA, Argon2id), securing JWTs, and implementing Zero Trust architecture across enterprise networks.',
    shortDescription: 'Master web security, OWASP Top 10, JWT attacks, API vulnerability defense, and Zero Trust architecture.',
    pages: 450,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.97,
    reviewCount: 390,
    badge: 'Cyber Defense',
    coverGradient: 'from-emerald-700 via-teal-900 to-slate-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Cybersecurity', 'Ethical Hacking', 'OWASP', 'Zero Trust', 'JWT', 'Web Security', 'Hariom Kushwaha'],
    topics: ['OWASP Top 10 Vulnerabilities', 'Broken Object-Level Authorization (BOLA)', 'JWT Exploitation & Hardening', 'Secure Password Hashing (Argon2id)', 'Zero Trust Network Architecture'],
    language: 'English & Hinglish Notes',
    featured: true,
    trending: true,
    studentPick: true,
    isNewRelease: true,
    yearPublished: '2026 Edition',
    updatedDate: 'September 2026',
    isbn: '978-93-92026-06-5',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '7h 40m',
    whatYoullLearn: [
      'Identify and remediate SQL Injection, Cross-Site Scripting (XSS), and CSRF attacks in production code',
      'Prevent Broken Object Level Authorization (BOLA/IDOR), the #1 vulnerability in modern REST & GraphQL APIs',
      'Harden JSON Web Tokens (JWT) against algorithm switching (none exploit) and secret brute-forcing',
      'Hash user passwords securely using modern memory-hard algorithms (Argon2id, bcrypt) with high work factors',
      'Enforce Zero Trust: "Never Trust, Always Verify" with mutual TLS (mTLS), strict IAM, and micro-segmentation'
    ],
    tableOfContents: [
      '1. The Modern Threat Landscape: Cyber Warfare, Ransomware & Social Engineering in 2026',
      '2. Web Application Security: In-Depth Breakdown of the OWASP Top 10 Vulnerabilities',
      '3. SQL Injection & Parameterized Queries: How Prepared Statements Eliminate Injection at the Driver Level',
      '4. Cross-Site Scripting (XSS): Stored, Reflected, DOM-Based & Content Security Policy (CSP)',
      '5. API Vulnerabilities: BOLA, Broken Authentication, Mass Assignment & Excessive Data Exposure',
      '6. Authentication Engineering: Password Hashing (Argon2id vs PBKDF2), Salting & 2FA / WebAuthn Passkeys',
      '7. JWT Cryptography: Anatomy of JWS, Secret Key Entropy, Expiration Policies & Refresh Token Rotation',
      '8. Network Defense & Cryptography: TLS 1.3 Handshake, Perfect Forward Secrecy & Asymmetric Encryption',
      '9. Zero Trust Architecture (ZTA): Identity-Centric Security, Least Privilege & Micro-Segmentation',
      '10. DevSecOps: Automated Dependency Scanning (Dependabot, Snyk) & Secrets Auditing (GitGuardian)'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: OWASP Top 10 & Broken Object-Level Authorization (BOLA)',
        summary: 'Examines why BOLA/IDOR continues to be the most critical vulnerability in modern mobile and web APIs and how to enforce object-level authorization checks.',
        keyPoints: [
          'BOLA occurs when an endpoint accepts an ID from user input (e.g., /api/orders/458) without checking if the authenticated user actually owns order #458.',
          'Never rely on front-end obscurity (like hiding buttons) to prevent unauthorized access; the server must always validate ownership.',
          'Always use UUIDv4 or NanoID instead of sequential auto-incrementing integers to prevent ID enumeration attacks.',
          'Hariom Rule: Every database query that fetches user-scoped data must include `WHERE id = :id AND user_id = :authUserId`.'
        ],
        codeSnippet: `// Secure API Route Enforcing Strict Ownership Authorization
import { Request, Response } from 'express';

export async function getDocumentById(req: Request, res: Response) {
  const documentId = req.params.id;
  const authenticatedUserId = req.user?.id; // Extracted from verified JWT session

  if (!authenticatedUserId) {
    return res.status(401).json({ error: 'Unauthorized: Valid session required' });
  }

  // SECURE: Enforce that document ID must match AND belong to the requester
  const doc = await db.query(
    \`SELECT * FROM documents WHERE id = $1 AND owner_id = $2\`,
    [documentId, authenticatedUserId]
  );

  if (doc.rows.length === 0) {
    // Return 404 instead of 403 to prevent attackers from probing existence of IDs
    return res.status(404).json({ error: 'Document not found' });
  }

  return res.json({ data: doc.rows[0] });
}`
      }
    ]
  },
  {
    id: 'modern-cloud-aws-gcp-serverless',
    title: 'Cloud Architecture Masterclass: AWS, GCP & Serverless Microservices (2026)',
    subtitle: 'Cloud Native Systems, Serverless Event-Driven Compute, VPC Networking & Cost Optimization',
    slug: 'modern-cloud-aws-gcp-serverless',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Systems engineer with deep practical knowledge in multi-cloud cost optimization and resilient serverless architectures.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Technology & Computers',
    subcategory: 'Cloud Architecture & Computing',
    genre: 'Cloud Engineering Handbook',
    bookType: 'Handbook',
    description: 'A pragmatic, cost-conscious architectural blueprint for AWS, Google Cloud Platform (GCP), and Serverless architectures. Learn how to design enterprise VPCs, configure IAM with least privilege, utilize Cloud Run and AWS Lambda for auto-scaling from 0 to 10,000 instances, manage object storage with lifecycle policies, and keep cloud costs lean.',
    shortDescription: 'Master AWS & GCP cloud architectures: VPCs, IAM least privilege, Serverless Cloud Run/Lambda, and cost optimization.',
    pages: 420,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.94,
    reviewCount: 340,
    badge: 'Cloud Master',
    coverGradient: 'from-amber-600 via-orange-800 to-slate-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Cloud Computing', 'AWS', 'GCP', 'Serverless', 'Lambda', 'Cloud Run', 'Hariom Kushwaha', 'DevOps'],
    topics: ['Cloud Native Architecture Principles', 'VPC Subnets, NAT Gateways & Security Groups', 'Serverless Functions & Scale-to-Zero', 'IAM Roles & Least Privilege Security', 'Cloud Billing & FinOps Optimization'],
    language: 'English & Hinglish Notes',
    featured: true,
    trending: true,
    studentPick: true,
    isNewRelease: true,
    yearPublished: '2026 Edition',
    updatedDate: 'September 2026',
    isbn: '978-93-92026-07-2',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '7h 15m',
    whatYoullLearn: [
      'Design fault-tolerant Virtual Private Clouds (VPCs) across multiple Availability Zones',
      'Deploy serverless containers on Google Cloud Run and AWS Lambda that scale instantly to zero',
      'Enforce strict Identity & Access Management (IAM) role policies with zero wildcard permissions',
      'Configure S3 and Google Cloud Storage lifecycle rules to archive cold data and slash storage costs by 80%',
      'Implement multi-region disaster recovery and DNS failover with Route 53 / Cloud DNS'
    ],
    tableOfContents: [
      '1. Cloud Computing Foundations: IaaS vs PaaS vs CaaS vs Serverless (FaaS)',
      '2. Networking Architecture: VPCs, Public vs Private Subnets, Route Tables & NAT Gateways',
      '3. Compute Engines: EC2 / Compute Engine vs Container Orchestration (ECS / GKE)',
      '4. Serverless in Action: AWS Lambda & Google Cloud Run Architecture and Cold-Start Mitigation',
      '5. Identity & Access Management (IAM): Role-Based Access, Temporary STS Credentials & Service Accounts',
      '6. Cloud Storage: S3 / Cloud Storage Buckets, Presigned URLs, Versioning & Glacier Lifecycle Rules',
      '7. Managed Cloud Databases: AWS RDS, Aurora Serverless, DynamoDB & Google Cloud SQL',
      '8. Content Delivery & Edge Compute: CloudFront, Cloudflare Workers & Global CDN Caching',
      '9. Security & Governance: KMS Encryption at Rest, Security Groups, WAF & CloudTrail Audit Logs',
      '10. FinOps: Cost Monitoring, Reserved Instances, Spot Instances & Cost Budgets'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 2: VPC Networking & Security Architecture',
        summary: 'Step-by-step design of production VPC networks that isolate database servers inside private subnets without public internet exposure.',
        keyPoints: [
          'Public subnets host Internet-facing components (Load Balancers, Ingress Gateways) with an attached Internet Gateway (IGW).',
          'Private subnets host application servers and databases. Outbound internet updates flow strictly through a NAT Gateway.',
          'Security Groups act as stateful firewalls at the instance level; Network ACLs (NACLs) act as stateless subnet-level packet filters.',
          'Hariom Tip: Never assign public IP addresses to production database instances.'
        ],
        codeSnippet: `// AWS CDK / Terraform Concept: Least Privilege IAM Policy
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowS3InvoiceReadWrite",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::hkvelora-invoices-2026/users/\${aws:PrincipalTag/UserId}/*"
    }
  ]
}`
      }
    ]
  },
  {
    id: 'modern-python-ai-deep-learning',
    title: 'Python for Deep Learning, PyTorch & Transformers: Practical Hands-On',
    subtitle: 'Tensors, Autograd, Attention Mechanism, Hugging Face Fine-Tuning & Model Deployment',
    slug: 'modern-python-ai-deep-learning',
    author: 'Hariom Kushwaha & AI Research Group',
    authorId: 'hariom-kushwaha',
    authorBio: 'AI researcher and author specializing in deep learning architectures, transformer models, and PyTorch optimization.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Artificial Intelligence',
    subcategory: 'Machine Learning & Deep Learning',
    genre: 'Machine Learning Masterclass',
    bookType: 'Handbook',
    description: 'A comprehensive, math-intuitive walkthrough of modern deep learning and neural network architectures using PyTorch and Python. Covers vector and tensor manipulations, autograd backpropagation mechanics, convolutional neural networks (CNNs), the Transformer self-attention architecture (Vaswani et al.), fine-tuning pre-trained models with Hugging Face, and quantized deployment with ONNX.',
    shortDescription: 'Master PyTorch tensors, backpropagation, attention mechanisms, Hugging Face Transformers, and model inference.',
    pages: 490,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.96,
    reviewCount: 410,
    badge: 'Deep Learning',
    coverGradient: 'from-fuchsia-700 via-purple-900 to-slate-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Python', 'Deep Learning', 'PyTorch', 'Transformers', 'Machine Learning', 'Hugging Face', 'Hariom Kushwaha'],
    topics: ['PyTorch Tensors & GPU CUDA Acceleration', 'Autograd & Loss Optimization', 'Neural Network Architectures', 'Self-Attention & Multi-Head Attention', 'Hugging Face Transformers Fine-Tuning'],
    language: 'English & Hinglish Notes',
    featured: true,
    trending: true,
    studentPick: true,
    isNewRelease: true,
    yearPublished: '2026 Edition',
    updatedDate: 'September 2026',
    isbn: '978-93-92026-08-9',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '8h 10m',
    whatYoullLearn: [
      'Master PyTorch tensors, shape manipulations, broadcasting rules, and GPU CUDA memory allocation',
      'Understand how Autograd computes gradients through computational graphs during backpropagation',
      'Build feedforward and convolutional neural networks from scratch with proper weight initialization',
      'Implement multi-head self-attention mechanisms with scaled dot-product formulas from first principles',
      'Fine-tune Hugging Face transformer models (BERT, Llama, Gemma) for classification and text generation'
    ],
    tableOfContents: [
      '1. Python for AI: Vectorized Operations with NumPy & Tensor Operations in PyTorch',
      '2. PyTorch Fundamentals: Tensors, CUDA Device Placement, In-Place Operations & Memory Management',
      '3. Autograd & Optimization: Computational Graphs, Loss Functions (MSE, Cross-Entropy) & AdamW Optimizer',
      '4. Building Feedforward Neural Networks: Linear Layers, Activations (ReLU, GeLU) & Dropout Regularization',
      '5. Computer Vision Foundations: Convolutions, Pooling, ResNet Skip-Connections & Transfer Learning',
      '6. Sequence Modeling: From RNNs and LSTMs to the Limitations of Recurrence',
      '7. The Transformer Revolution: "Attention Is All You Need" — Q, K, V Matrices & Scaled Dot Product',
      '8. Multi-Head Attention & Positional Encoding: Preserving Token Order without Recurrence',
      '9. Hugging Face Ecosystem: Datasets, Tokenizers, AutoModel, Trainer API & PEFT / LoRA Fine-Tuning',
      '10. Model Inference & Quantization: INT8 / INT4 Quantization, ONNX Runtime & vLLM High-Throughput Serving'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 7: The Transformer Architecture & Self-Attention Demystified',
        summary: 'Deconstructs the mathematical core of the Transformer model that powers modern LLMs like GPT-4 and Gemini.',
        keyPoints: [
          'Attention Formula: Attention(Q, K, V) = softmax((Q * K^T) / sqrt(d_k)) * V.',
          'Scaling by sqrt(d_k) prevents the dot products from growing excessively large, which would push softmax gradients into vanishing regions.',
          'Multi-Head Attention enables the model to jointly attend to information from different representation subspaces at different positions.',
          'Hariom Tip: Always ensure batch size and sequence lengths are aligned to powers of 2 for maximum GPU Tensor Core utilization.'
        ],
        codeSnippet: `# PyTorch Implementation of Scaled Dot-Product Attention
import torch
import torch.nn as nn
import math

class ScaledDotProductAttention(nn.Module):
    def __init__(self, d_k: int):
        super().__init__()
        self.d_k = d_k

    def forward(self, Q: torch.Tensor, K: torch.Tensor, V: torch.Tensor, mask: torch.Tensor = None):
        # Q, K, V shape: [batch_size, num_heads, seq_len, d_k]
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(self.d_k)
        
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)
            
        attention_weights = torch.softmax(scores, dim=-1)
        output = torch.matmul(attention_weights, V)
        return output, attention_weights`
      }
    ]
  },
  {
    id: 'modern-offcampus-placement-mastery',
    title: 'The Off-Campus Placement & Tech Career Playbook (2026 Edition)',
    subtitle: 'Cold Emailing, ATS-Proof Resume Engineering, Behavioral STAR Method & Salary Negotiation',
    slug: 'modern-offcampus-placement-mastery',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Founder of HK Tech World. Mentored thousands of Tier-2 and Tier-3 college students to crack high-paying tech jobs.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Business & Self-Help',
    subcategory: 'Career & Tech Placements',
    genre: 'Career Success Playbook',
    bookType: 'Guide',
    description: 'The definitive blueprint for engineering and BCA/MCA students to crack high-paying tech jobs and remote international internships through off-campus drives. Covers building a 95+ score ATS resume using the Google XYZ formula, cold emailing recruiters with verified response templates, mastering coding rounds, tackling live system design for freshers, and negotiating initial compensation packages with confidence.',
    shortDescription: 'Master off-campus tech placements: ATS resumes, cold emailing recruiters, STAR interview method, and salary negotiation.',
    pages: 360,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.99,
    reviewCount: 940,
    badge: 'Career Booster',
    coverGradient: 'from-emerald-600 via-teal-700 to-blue-900',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Placement', 'Off-Campus', 'Resume', 'ATS', 'Interview Prep', 'Cold Email', 'Hariom Kushwaha', 'Salary Negotiation'],
    topics: ['ATS Resume Optimization (Google XYZ Formula)', 'Cold Outreach & LinkedIn Networking Scripts', 'Technical Coding Round Strategy', 'Behavioral Interviews (STAR Method)', 'CTC Breakdown & Salary Negotiation'],
    language: 'English & Hinglish Guide',
    featured: true,
    trending: true,
    studentPick: true,
    isNewRelease: true,
    yearPublished: '2026 Edition',
    updatedDate: 'September 2026',
    isbn: '978-93-92026-09-6',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '6h 30m',
    whatYoullLearn: [
      'Write impact-driven resume bullet points using the Google XYZ formula: "Accomplished [X] as measured by [Y], by doing [Z]"',
      'Format single-page ATS resumes that pass automated screening filters with a 95%+ success rate',
      'Send personalized cold emails to startup founders and engineering managers that get a 30%+ response rate',
      'Ace technical interviews by communicating thought process aloud and handling hints constructively',
      'Analyze CTC offer letters (Fixed Base vs Joining Bonus vs ESOPs) and negotiate 15-30% higher compensation'
    ],
    tableOfContents: [
      '1. The Off-Campus Landscape in 2026: Why Tier-3 Students Win Big with Proof of Work',
      '2. The ATS-Proof Resume: Single-Page Layout, Section Hierarchy & Keyword Strategy',
      '3. The Google XYZ Formula: Transforming Generic Student Tasks into Quantifiable Achievements',
      '4. Proof-of-Work Projects: 3 Flagship Projects that Make Recruiters Stop Scrolling',
      '5. Cold Outreach Masterclass: Finding Decision-Maker Emails & 5 Tested Outreach Templates',
      '6. LinkedIn Personal Branding: Crafting Your Headline, Featured Projects & Thoughtful Engagement',
      '7. Coding Interview Strategy: 45-Minute Interview Timeline, Thinking Aloud & Test Case Generation',
      '8. Behavioral Rounds & Culture Fit: The STAR Method (Situation, Task, Action, Result) for 20 Common Questions',
      '9. Deconstructing Job Offers: CTC vs In-Hand Salary, PF, Gratuity & ESOP Vesting Schedules',
      '10. Salary Negotiation Playbook: Scripts to Counter Lowball Offers Without Risking the Opportunity'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 3: The Google XYZ Formula for ATS Resumes',
        summary: 'Learn how to transform weak student resume bullets into high-impact engineering accomplishments that pass ATS parsers and impress senior engineering managers.',
        keyPoints: [
          'Weak Bullet: "Built an e-commerce website using React and Node.js."',
          'XYZ Strong Bullet: "Architected a full-stack e-commerce platform using Next.js and PostgreSQL, decreasing page load latency by 42% (FCP 0.8s) and supporting 1,500 concurrent checkout sessions."',
          'Formula: Accomplished [X] (Specific action verb + feature), measured by [Y] (Quantified metric, % improvement, latency, users), by doing [Z] (Technical stack, algorithm, caching).',
          'Hariom Rule: Every single project bullet point must contain at least one numerical metric.'
        ],
        codeSnippet: `// Cold Email Template for Reaching Engineering Managers
Subject: Full-Stack Engineer portfolio inspired by [Company Product feature] — [Your Name]

Hi [Manager Name],

I noticed [Company Name] recently rolled out [specific feature or scaling milestone]. 
As a software engineer who specializes in high-performance web systems, I was inspired by that engineering challenge.

Recently, I built HK VELORA — an open educational engine featuring real-time collaborative state, 
sub-second caching with Redis, and 100% test-covered microservices:
• Live URL: [Your Project URL]
• GitHub: [Your GitHub Repo]

I would love to contribute to your engineering team as a Junior Full-Stack / Backend Engineer. 
My single-page resume is attached for your quick review.

Are you free for a brief 10-minute chat this Thursday at 3 PM?

Best regards,
[Your Name] | [Your Phone] | [LinkedIn Link]`
      }
    ]
  },
  {
    id: 'modern-database-internals-vector',
    title: 'Modern Database Internals: SQL, NoSQL & Vector DBs (2026 Edition)',
    subtitle: 'B-Trees vs LSM-Trees, PostgreSQL Indexing, Redis In-Memory Caching & HNSW Vector Embeddings',
    slug: 'modern-database-internals-vector',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Systems engineer with deep practical knowledge of storage engines, database indexing, and query optimization.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Coding & Programming',
    subcategory: 'Databases & Storage Engines',
    genre: 'Database Engineering Handbook',
    bookType: 'Handbook',
    description: 'A deep architectural journey into how modern databases read and write data to disk and memory. Learn the mechanics of B-Trees, Log-Structured Merge Trees (LSM), Write-Ahead Logging (WAL) for durability, PostgreSQL index internals (B-Tree, GIN, GiST, BRIN), query optimization with EXPLAIN ANALYZE, transaction isolation levels (MVCC), and vector indexing (HNSW, IVFFlat) for AI search.',
    shortDescription: 'Master database internals: B-Trees, LSM-Trees, PostgreSQL indexing, MVCC transactions, and HNSW vector search.',
    pages: 430,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.96,
    reviewCount: 380,
    badge: 'DB Internals',
    coverGradient: 'from-blue-600 via-indigo-800 to-slate-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Database', 'PostgreSQL', 'SQL', 'B-Tree', 'Redis', 'Vector DB', 'HNSW', 'Hariom Kushwaha'],
    topics: ['Storage Engines: B-Trees vs LSM-Trees', 'PostgreSQL Index Types (B-Tree, GIN, BRIN)', 'ACID Guarantees & MVCC Concurrency', 'Redis In-Memory Data Structures', 'Vector Search: HNSW & Cosine Distance'],
    language: 'English & Hinglish Notes',
    featured: true,
    trending: true,
    studentPick: true,
    isNewRelease: true,
    yearPublished: '2026 Edition',
    updatedDate: 'September 2026',
    isbn: '978-93-92026-10-2',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '7h 35m',
    whatYoullLearn: [
      'Understand the trade-offs between read-optimized B-Trees and write-optimized LSM-Trees',
      'Optimize slow database queries using EXPLAIN (ANALYZE, BUFFERS) in PostgreSQL',
      'Choose the right index type: B-Tree for equality/ranges, GIN for full-text/JSON, BRIN for time-series',
      'Master transaction isolation levels (Read Committed, Repeatable Read, Serializable) and prevent phantom reads',
      'Implement fast approximate nearest neighbor (ANN) vector searches with HNSW indexes in pgvector'
    ],
    tableOfContents: [
      '1. Storage Engine Mechanics: Pages, Blocks, Cache Line Alignment & Memory Hierarchy',
      '2. Read-Optimized Storage: B-Trees & B+ Trees Internals, Node Splitting & Fan-Out',
      '3. Write-Optimized Storage: LSM-Trees, Memtables, SSTables & Compaction Strategies (LevelDB, RocksDB)',
      '4. Durability & Recovery: Write-Ahead Logging (WAL), Checkpointing & Crash Recovery',
      '5. PostgreSQL Index Deep Dive: B-Tree, GIN (Generalized Inverted Index), GiST & BRIN',
      '6. Query Planning & Optimization: EXPLAIN ANALYZE, Cost Estimation & Sequential vs Index Scans',
      '7. Concurrency Control: Multi-Version Concurrency Control (MVCC), Vacuuming & Deadlocks',
      '8. In-Memory Power: Redis Architecture, Single-Threaded Event Loop & Dict / SkipList Internals',
      '9. Vector Search Foundations: High-Dimensional Vectors, Cosine Distance & Dot Product',
      '10. Vector Indexing in Practice: Hierarchical Navigable Small World (HNSW) vs IVFFlat'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 5: PostgreSQL Index Deep Dive & Query Optimization',
        summary: 'Learn how to inspect query execution plans and choose the optimal index type to turn multi-second table scans into sub-millisecond index lookups.',
        keyPoints: [
          'Sequential Scan (Seq Scan) reads every block on disk; Index Scan traverses the B-Tree index to grab only matching tuple pointers.',
          'Bitmap Index Scan combines multiple indexes using bitmap AND/OR operations before visiting heap pages.',
          'GIN indexes are ideal for arrays, full-text search, and JSONB columns containing key-value lookups.',
          'Hariom Tip: Never create indexes on columns with low cardinality (like gender boolean) where index overhead exceeds sequential scan cost.'
        ],
        codeSnippet: `-- Optimizing Vector Search with pgvector and HNSW in PostgreSQL
CREATE EXTENSION IF NOT EXISTS vector;

-- Create documents table with 768-dimensional embeddings
CREATE TABLE tech_articles (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    embedding vector(768) NOT NULL
);

-- Build Hierarchical Navigable Small World (HNSW) index for sub-5ms cosine similarity search
CREATE INDEX idx_articles_hnsw_embedding 
ON tech_articles 
USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);

-- Query nearest 5 articles given a search vector query
SELECT id, title, 1 - (embedding <=> $1) AS cosine_similarity
FROM tech_articles
ORDER BY embedding <=> $1
LIMIT 5;`
      }
    ]
  },
  {
    id: 'modern-api-graphql-grpc-websockets',
    title: 'Modern API Architecture: REST, GraphQL, gRPC & WebSockets',
    subtitle: 'High-Throughput Microservice Protocols, Protobuf, Real-Time Bidirectional Streaming & Rate Limiting',
    slug: 'modern-api-graphql-grpc-websockets',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Backend architect specializing in high-throughput API systems, binary serialization, and bidirectional real-time communications.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Coding & Programming',
    subcategory: 'API Design & Networking',
    genre: 'API Engineering Handbook',
    bookType: 'Handbook',
    description: 'The definitive architectural guide to designing and scaling APIs across modern distributed systems. Learn when to use RESTful JSON APIs, when to adopt GraphQL to eliminate over-fetching, how to implement ultra-low latency internal microservice communication using gRPC and Protocol Buffers, and how to maintain high-concurrency real-time WebSocket connections.',
    shortDescription: 'Master modern API architectures: REST, GraphQL, gRPC Protocol Buffers, WebSockets, and API gateways.',
    pages: 410,
    format: 'E-Book & PDF',
    difficulty: 'Intermediate',
    rating: 4.95,
    reviewCount: 350,
    badge: 'API Architect',
    coverGradient: 'from-teal-600 via-cyan-800 to-slate-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['API', 'REST', 'GraphQL', 'gRPC', 'WebSockets', 'Protobuf', 'Microservices', 'Hariom Kushwaha'],
    topics: ['REST API Design Best Practices', 'GraphQL Schemas, Resolvers & N+1 Problem', 'gRPC & Protocol Buffers Binary Serialization', 'Real-Time WebSockets & SSE (Server-Sent Events)', 'API Gateways, Rate Limiting & OpenAPI Spec'],
    language: 'English & Hinglish Notes',
    featured: true,
    trending: true,
    studentPick: true,
    isNewRelease: true,
    yearPublished: '2026 Edition',
    updatedDate: 'September 2026',
    isbn: '978-93-92026-11-9',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '7h 10m',
    whatYoullLearn: [
      'Design clean, predictable REST APIs adhering to HTTP status codes, idempotency, and semantic verbs',
      'Solve the GraphQL N+1 query problem using DataLoader batching and caching mechanisms',
      'Write Protocol Buffer (.proto) definitions and generate high-throughput gRPC clients in multiple languages',
      'Maintain reliable WebSocket connections with heartbeat pings, reconnect backoff, and state recovery',
      'Implement API gateways with token bucket rate limiting and automatic OpenAPI / Swagger documentation'
    ],
    tableOfContents: [
      '1. The Modern API Spectrum: Comparing REST, GraphQL, gRPC & WebSockets for 2026 Architectures',
      '2. Production REST Design: Idempotency Keys, Versioning Strategies, HTTP 422 vs 400 & Pagination',
      '3. GraphQL Architecture: Schema Definition Language (SDL), Queries, Mutations & Subscriptions',
      '4. Solving GraphQL Pitfalls: The N+1 Query Problem, DataLoader Batching & Query Complexity Analysis',
      '5. Protocol Buffers (Protobuf): Binary Wire Format, Compact Serialization & Schema Evolution Rules',
      '6. gRPC in Microservices: Unary RPCs, Client Streaming, Server Streaming & Bidirectional Streaming',
      '7. Real-Time WebSockets: TCP Handshake, Framing, Ping/Pong Heartbeats & Connection Pooling',
      '8. Server-Sent Events (SSE): HTTP/2 Streaming for AI Token Generation and Live Feeds',
      '9. API Gateway Patterns: Routing, SSL Termination, Token Bucket Rate Limiting & Auth Offloading',
      '10. Automated Documentation & Testing: OpenAPI 3.1, Swagger UI, Contract Testing & Postman Workflows'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 5: Protocol Buffers & gRPC Microservice Communication',
        summary: 'Discover why top tech firms use gRPC for internal service-to-service communication, achieving up to 10x faster serialization and lower network bandwidth than JSON.',
        keyPoints: [
          'JSON is human-readable text requiring costly string parsing; Protobuf encodes typed fields into compact binary tags and varints.',
          'gRPC runs over HTTP/2, providing multiplexed streams over a single TCP connection without head-of-line blocking.',
          'Schema Evolution: Never change field tag numbers in .proto files; simply mark deprecated fields as reserved.',
          'Hariom Tip: Use REST/GraphQL for public client-facing APIs, and gRPC for internal service-to-service communication.'
        ],
        codeSnippet: `// Example Protocol Buffer Definition for an HK VELORA Student Service
syntax = "proto3";

package student.v1;

service StudentService {
  rpc GetStudentProfile (StudentRequest) returns (StudentResponse);
  rpc StreamStudyNotes (NotesStreamRequest) returns (stream NoteChunk);
}

message StudentRequest {
  string student_id = 1;
}

message StudentResponse {
  string student_id = 1;
  string full_name = 2;
  string college = 3;
  double gpa = 4;
  repeated string completed_courses = 5;
}

message NotesStreamRequest {
  string subject_id = 1;
}

message NoteChunk {
  int32 chunk_number = 1;
  string text_content = 2;
  bool is_final = 3;
}`
      }
    ]
  },
  {
    id: 'modern-linux-bash-cli-mastery',
    title: 'Linux Kernel Internals, Bash Scripting & Shell Superpowers for Developers',
    subtitle: 'Process Trees, POSIX Signals, Memory Management, Automations & Command-Line Wizardry',
    slug: 'modern-linux-bash-cli-mastery',
    author: 'Hariom Kushwaha (HK Tech World)',
    authorId: 'hariom-kushwaha',
    authorBio: 'Systems engineer with deep practical mastery of Linux OS internals, shell automation, and performance debugging.',
    publisher: 'HK Tech World & HK VELORA Press',
    category: 'Technology & Computers',
    subcategory: 'Operating Systems & Linux',
    genre: 'Linux Systems Playbook',
    bookType: 'Handbook',
    description: 'The master key to understanding what actually happens inside the Linux operating system beneath your code. Learn how Linux manages process lifecycles (fork/exec, zombies, orphans), file descriptors, standard I/O pipes, POSIX signals (SIGTERM, SIGKILL), virtual memory and page caches, advanced Bash scripting with error handling (set -euo pipefail), and command-line diagnostics with htop, strace, lsof, and netstat.',
    shortDescription: 'Master Linux internals: process trees, POSIX signals, file descriptors, Bash automations, and performance tools.',
    pages: 390,
    format: 'E-Book & PDF',
    difficulty: 'All Levels',
    rating: 4.96,
    reviewCount: 370,
    badge: 'Linux Hacker',
    coverGradient: 'from-slate-800 via-neutral-900 to-indigo-950',
    downloadUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    readOnlineUrl: 'https://hk-velora.vercel.app/?tab=ebooks',
    tags: ['Linux', 'Bash', 'CLI', 'Shell Scripting', 'Operating System', 'Sysadmin', 'Hariom Kushwaha'],
    topics: ['Process Management & Fork/Exec Internals', 'POSIX Signals & Graceful Shutdown', 'File Descriptors & Standard I/O Redirections', 'Robust Bash Scripting (set -euo pipefail)', 'System Debugging with strace, lsof & htop'],
    language: 'English & Hinglish Notes',
    featured: true,
    trending: true,
    studentPick: true,
    isNewRelease: true,
    yearPublished: '2026 Edition',
    updatedDate: 'September 2026',
    isbn: '978-93-92026-12-6',
    price: 0,
    isFree: true,
    hasAudioBook: true,
    narrator: 'Hariom Kushwaha',
    audioDuration: '6h 50m',
    whatYoullLearn: [
      'Understand how the Linux kernel spawns processes using fork() and execve() system calls',
      'Handle POSIX signals like SIGTERM and SIGINT to implement graceful server shutdowns in containers',
      'Master file descriptors (0 stdin, 1 stdout, 2 stderr) and redirection wizardry like 2>&1 | tee',
      'Write indestructible Bash automation scripts with `set -euo pipefail` and trap cleanup hooks',
      'Diagnose stuck processes, memory leaks, and network socket bottlenecks using strace, lsof, and vmstat'
    ],
    tableOfContents: [
      '1. Linux Architecture: User Space vs Kernel Space, System Calls & The VFS (Virtual File System)',
      '2. Process Lifecycle: PID 1 (systemd/init), Process States, Zombie Processes & Orphan Adoption',
      '3. Signal Handling: POSIX Signals, Graceful Shutdown in Node/Go/Python & The Danger of SIGKILL',
      '4. File Descriptors & Pipes: Everything Is a File, Anon Pipes, Named Pipes (FIFOs) & Socket Descriptors',
      '5. Memory Internals: Virtual Memory, Page Tables, Anonymous Memory vs Page Cache & The OOM Killer',
      '6. Indestructible Bash Scripting: Shell Strict Mode (set -euo pipefail), Parameter Expansion & Arrays',
      '7. Defensive Automation: Trap Hooks for Temp Cleanup, Logging Functions & Safe Exit Codes',
      '8. Text Processing Power: grep (PCRE regex), sed stream editing & awk tabular data manipulation',
      '9. Networking Diagnostic Toolkit: curl, dig, traceroute, ss, lsof -i, and tcpdump packet analysis',
      '10. Systems Profiling: Diagnosing CPU Bottlenecks with htop, System Call Tracing with strace & dmesg'
    ],
    chaptersPreview: [
      {
        title: 'Chapter 6: Indestructible Bash Scripting & Shell Strict Mode',
        summary: 'Learn the strict mode settings that prevent 99% of accidental script bugs, silent failures, and unintended file deletions.',
        keyPoints: [
          '`set -e`: Exits script immediately if any command returns a non-zero exit code.',
          '`set -u`: Treats unset variables as an error and exits immediately (prevents accidental `rm -rf $DIR/*` if DIR is empty!).',
          '`set -o pipefail`: Returns the exit code of the last command in a pipeline that failed, rather than ignoring upstream errors.',
          'Hariom Rule: Every bash script should begin with `set -euo pipefail` and a `trap cleanup EXIT` routine.'
        ],
        codeSnippet: `#!/usr/bin/env bash
# Production Robust Bash Automation Script Template
# Authored by Hariom Kushwaha (HK Tech World)

set -euo pipefail
IFS=$'\\n\\t'

# Setup safe temporary directory with automatic cleanup on exit
TEMP_DIR="$(mktemp -d -t hk_deploy_XXXXXX)"

cleanup() {
  echo "[INFO] Cleaning up temporary files in \${TEMP_DIR}..."
  rm -rf "\${TEMP_DIR}"
}
trap cleanup EXIT ERR INT TERM

log_info() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [INFO] $*"
}

log_error() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] [ERROR] $*" >&2
}

log_info "Deployment pipeline started successfully..."
# Your production commands here...`
      }
    ]
  }
];
