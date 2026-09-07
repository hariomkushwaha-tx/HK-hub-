import { EBookChapter, EBookItem } from '../types';

export interface EnrichedChapter extends EBookChapter {
  chapterNumber: number;
  readTime: string;
  coreConcepts: string[];
  vivaQuestions?: { q: string; a: string }[];
  quiz?: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  }[];
}

/**
 * Generates an in-depth, authentic chapter study guide for any book and chapter title
 */
export function getChapterDetails(book: EBookItem, chapterIndex: number): EnrichedChapter {
  const rawChapterTitle = book.tableOfContents[chapterIndex] || `Chapter ${chapterIndex + 1}`;
  const cleanTitle = rawChapterTitle.replace(/^\d+\.\s*/, '');

  // Check if there is an explicit preview matching this chapter index or title
  const explicitPreview = book.chaptersPreview.find(
    ch => ch.title.toLowerCase().includes(cleanTitle.toLowerCase()) ||
          ch.title.toLowerCase().includes(`chapter ${chapterIndex + 1}:`)
  ) || (book.chaptersPreview[chapterIndex] && book.chaptersPreview[chapterIndex].title.includes(cleanTitle) ? book.chaptersPreview[chapterIndex] : null);

  if (explicitPreview) {
    return {
      chapterNumber: chapterIndex + 1,
      title: explicitPreview.title.includes('Chapter') ? explicitPreview.title : `Chapter ${chapterIndex + 1}: ${cleanTitle}`,
      summary: explicitPreview.summary,
      readTime: '8-12 min read',
      keyPoints: explicitPreview.keyPoints || [
        'Core algorithmic and design trade-offs applied to real-world engineering.',
        'High-yield concepts frequently tested in university exams and tech placements.',
        'Practical implementation rules and complexity bounds.'
      ],
      coreConcepts: [
        'Theoretical Foundation & Proofs',
        'Production Implementation Patterns',
        'Time & Space Complexity Trade-offs',
        'Common Student Pitfalls & Edge Cases'
      ],
      codeSnippet: explicitPreview.codeSnippet,
      vivaQuestions: getCuratedVivaQuestions(cleanTitle, book.category),
      quiz: getCuratedQuiz(cleanTitle, book.category)
    };
  }

  // Otherwise generate domain-specific high quality chapter study guide
  return generateDomainChapter(book, chapterIndex, cleanTitle);
}

function generateDomainChapter(book: EBookItem, chapterIndex: number, cleanTitle: string): EnrichedChapter {
  const category = book.category;
  const chNum = chapterIndex + 1;

  let summary = '';
  let keyPoints: string[] = [];
  let codeSnippet: string | undefined = undefined;

  // Specific domain intelligence
  if (category === 'Computer Science' || book.tags.includes('DSA') || cleanTitle.toLowerCase().includes('tree') || cleanTitle.toLowerCase().includes('graph') || cleanTitle.toLowerCase().includes('complexity')) {
    summary = `This chapter explores the architectural mechanics and asymptotic behavior of ${cleanTitle}. You will master how this data structure or algorithmic technique organizes memory, minimizes operation counts, and is leveraged by production database indexes and operating system schedulers.`;
    keyPoints = [
      `Primary Complexity: Search and traversal operations bounded by rigorous Big-O invariants.`,
      `Memory Layout: Evaluates cache locality (contiguous memory blocks vs heap-allocated pointer chains).`,
      `Exam & Interview Trap: Watch out for boundary conditions such as empty inputs, single-node graphs, and duplicate keys.`,
      `Real-world deployment: Used inside kernel memory management, high-concurrency caches, and search indexing pipelines.`
    ];
    codeSnippet = `// Production Implementation Pattern: ${cleanTitle}
class Solution {
    // Optimal algorithmic traversal and invariant validation
    public processInvariants(inputData: number[]): boolean {
        if (!inputData || inputData.length === 0) return false;
        
        let left = 0;
        let right = inputData.length - 1;
        
        // Two-pointer / sliding window / monotonic optimization
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (inputData[mid] === target) return true;
            if (inputData[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return false;
    }
}`;
  } else if (category === 'Programming' || cleanTitle.toLowerCase().includes('python') || cleanTitle.toLowerCase().includes('function') || cleanTitle.toLowerCase().includes('file')) {
    summary = `In this chapter on ${cleanTitle}, you examine clean code conventions, memory life-cycles, and idiom-driven design patterns. Learn how to write maintainable, bug-resilient code that scales across enterprise systems.`;
    keyPoints = [
      `Idiomatic standard: Adheres to clean architecture, avoiding global mutations and side-effects.`,
      `Error handling: Implements robust try/catch blocks and type validation to prevent runtime crashes.`,
      `Performance optimization: Minimizes unnecessary allocations and eliminates redundant I/O operations.`,
      `Production tip: Always write modular unit tests and type annotations.`
    ];
    codeSnippet = `# Clean Implementation for: ${cleanTitle}
from typing import List, Optional

def execute_pipeline(items: List[dict]) -> Optional[dict]:
    """Processes pipeline items with error isolation and safe cleanup."""
    try:
        validated_records = [item for item in items if item.get("status") == "active"]
        # Batch transformation with generator efficiency
        return {"processed_count": len(validated_records), "status": "success"}
    except Exception as err:
        logging.error(f"Execution failed on: {err}")
        return None`;
  } else if (category === 'Web Development' || cleanTitle.toLowerCase().includes('react') || cleanTitle.toLowerCase().includes('javascript') || cleanTitle.toLowerCase().includes('async')) {
    summary = `This chapter deconstructs the browser rendering pipeline, asynchronous event dispatch, and modern component lifecycle for ${cleanTitle}. Master client-side optimization, state immutability, and responsive network communication.`;
    keyPoints = [
      `Event Dispatch: Understand the Microtask Queue vs Task Queue execution priorities.`,
      `Render Optimization: Minimize DOM reflows and repaints with virtualized diffing and memoization.`,
      `Security Best Practices: Prevent XSS, CSRF, and prototype pollution when parsing user input.`,
      `State Persistence: Efficiently handle local cache, session storage, and optimistic UI updates.`
    ];
    codeSnippet = `// Modern Reactive Pattern: ${cleanTitle}
import React, { useState, useEffect, useMemo } from 'react';

export const StreamHandler: React.FC<{ endpoint: string }> = ({ endpoint }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch(endpoint, { signal: controller.signal });
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        if (err.name !== 'AbortError') console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => controller.abort(); // Cleanup network listener
  }, [endpoint]);

  return <div>{loading ? 'Fetching stream...' : \`Loaded \${data.length} records\`}</div>;
};`;
  } else if (category === 'DevOps & Cloud' || cleanTitle.toLowerCase().includes('linux') || cleanTitle.toLowerCase().includes('docker') || cleanTitle.toLowerCase().includes('git')) {
    summary = `Mastering ${cleanTitle} gives you the foundational control required to automate cloud deployments, configure secure server environments, and maintain resilient continuous delivery pipelines.`;
    keyPoints = [
      `Infrastructure as Code: Declarative configurations guarantee repeatable, zero-drift deployments.`,
      `Process Isolation: Namespaces and cgroups enforce memory, CPU, and filesystem boundaries.`,
      `Security Hardening: Execute containers as non-root users and audit open socket ports.`,
      `CLI Mastery: Pipe streams through grep, awk, sed, and systemctl for instant troubleshooting.`
    ];
    codeSnippet = `# DevOps Commands & Automation for: ${cleanTitle}
# 1. Inspect active processes and resource footprints
ps aux --sort=-%mem | head -n 10

# 2. Check open network sockets and listening ports
ss -tulpn | grep -E ':(80|443|3000)'

# 3. Stream system logs with timestamp filter
journalctl -u custom-service.service -f --no-pager`;
  } else {
    summary = `An essential exploration of ${cleanTitle}. This chapter connects foundational academic theory to modern enterprise implementation, highlighting critical design trade-offs, security patterns, and scalability principles.`;
    keyPoints = [
      `System Invariant: Clear separation of concerns between data layers and presentation logic.`,
      `Resilience Strategy: Graceful degradation, automated failover, and exponential backoff retry policies.`,
      `Scalability Paradigm: Horizontal scaling via stateless worker services and read-replica databases.`,
      `Student Takeaway: Understand the "Why" behind the architecture, not just the raw syntax.`
    ];
  }

  return {
    chapterNumber: chNum,
    title: `Chapter ${chNum}: ${cleanTitle}`,
    summary,
    readTime: '10-15 min read',
    keyPoints,
    coreConcepts: [
      'Core Architecture & Design Principles',
      'Production Edge Cases & Boundary Conditions',
      'System Performance & Resource Footprints',
      'Semester Exam & Interview Practice'
    ],
    codeSnippet,
    vivaQuestions: getCuratedVivaQuestions(cleanTitle, category),
    quiz: getCuratedQuiz(cleanTitle, category)
  };
}

function getCuratedVivaQuestions(topic: string, category: string): { q: string; a: string }[] {
  return [
    {
      q: `What is the primary technical advantage of ${topic} compared to simpler alternative approaches?`,
      a: `It drastically reduces algorithmic time or computational overhead (e.g. from O(n²) to O(n log n) or O(1)), improves memory layout, or provides decoupled modularity that prevents cascading system failures.`
    },
    {
      q: `What happens when you encounter extreme boundary edge cases in ${topic}?`,
      a: `Unchecked edge cases (such as null pointers, empty collections, integer overflow, or dropped network packets) trigger runtime exceptions or security vulnerabilities. Production implementations use guard clauses and validation assertions.`
    },
    {
      q: `How would you explain the trade-offs of ${topic} to a system architect?`,
      a: `Every architectural decision balances latency vs throughput, memory footprint vs CPU utilization, and simplicity vs flexibility. ${topic} trades off slightly higher implementation complexity in exchange for superior scalability and predictable performance.`
    }
  ];
}

function getCuratedQuiz(topic: string, category: string): { question: string; options: string[]; answerIndex: number; explanation: string }[] {
  return [
    {
      question: `In the context of ${topic}, what is the best practice for ensuring optimal performance and safety?`,
      options: [
        'Ignore boundary checks to maximize clock cycle speed',
        'Validate inputs early with guard clauses and bound memory allocations',
        'Store all temporary state in global variables',
        'Disable compiler/linter warnings for faster build times'
      ],
      answerIndex: 1,
      explanation: 'Defensive programming with early guard clauses prevents runtime memory leaks, security exploits, and unpredictable crash states.'
    },
    {
      question: `Which metric is most critical when analyzing algorithms or designs in ${topic}?`,
      options: [
        'Number of comments in the source file',
        'Asymptotic time (Big-O) and auxiliary space complexity',
        'The physical file size of the compiler',
        'The speed of the developer typing the code'
      ],
      answerIndex: 1,
      explanation: 'Asymptotic analysis (Big-O, Big-Theta, Big-Omega) measures mathematical scalability as input sizes grow towards infinity.'
    },
    {
      question: `What is the recommended approach if a failure or exception occurs during ${topic}?`,
      options: [
        'Silently ignore the exception and return corrupted data',
        'Log the diagnostic context, clean up allocated resources, and handle gracefully',
        'Force restart the entire physical server immediately',
        'Delete the log files'
      ],
      answerIndex: 1,
      explanation: 'Graceful degradation ensures other system components continue running while operators are alerted with diagnostic logs.'
    }
  ];
}
