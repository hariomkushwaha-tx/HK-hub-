import React, { useState, useMemo } from 'react';
import { Search, Copy, Check, BookOpen, Layers, Cpu, Database, Network, Server } from 'lucide-react';

interface CheatCard {
  id: string;
  subject: 'dsa' | 'os' | 'dbms' | 'cn' | 'sysdesign';
  title: string;
  summary: string;
  bullets: string[];
  codeSnippet?: string;
  examTip: string;
}

const CHEAT_DATA: CheatCard[] = [
  // DSA
  {
    id: 'dsa-1',
    subject: 'dsa',
    title: 'Time & Space Complexity Reference (Master Matrix)',
    summary: 'Standard asymptotic bounds for primary algorithms tested in university exams and tech interviews:',
    bullets: [
      'Array Access: O(1) | Search: O(N) | Insertion/Deletion: O(N)',
      'Hash Map: Average Search/Insert/Delete O(1) | Worst Case O(N) on hash collisions',
      'Binary Search Tree: Average O(log N) | Skewed Tree Worst Case O(N)',
      'Balanced BST (AVL / Red-Black): Guaranteed O(log N) for Search, Insert, and Delete',
      'QuickSort: Average O(N log N), Space O(log N) | Worst Case O(N²) on bad pivot choices',
      'MergeSort: Guaranteed O(N log N) in all cases | Auxiliary Space O(N) for merging arrays'
    ],
    codeSnippet: `// Sliding Window standard template (Substring / Subarray problems)
int left = 0, currentSum = 0, maxLen = 0;
for (int right = 0; right < n; right++) {
    currentSum += arr[right];
    while (currentSum > target && left <= right) {
        currentSum -= arr[left++];
    }
    maxLen = Math.max(maxLen, right - left + 1);
}`,
    examTip: 'Examiners frequently ask to prove MergeSort space complexity O(N) vs QuickSort in-place O(log N) recursion stack.'
  },
  {
    id: 'dsa-2',
    subject: 'dsa',
    title: 'Dynamic Programming vs Divide & Conquer',
    summary: 'Essential distinction for exam theoretical questions and interview problem classification:',
    bullets: [
      'Divide & Conquer partitions problem into independent sub-problems (e.g. MergeSort, QuickSort, Binary Search).',
      'Dynamic Programming is applied when sub-problems OVERLAP and possess OPTIMAL SUBSTRUCTURE (e.g. 0/1 Knapsack, LCS, Floyd-Warshall).',
      'Memoization (Top-Down): Recursive approach with lookup cache to prevent re-computation.',
      'Tabulation (Bottom-Up): Iterative approach starting from base cases, filling table sequentially (saves stack overhead).'
    ],
    examTip: 'In exams, always write both the recursive state transition equation (Recurrence relation) and base condition before drafting the loop.'
  },

  // Operating Systems
  {
    id: 'os-1',
    subject: 'os',
    title: 'The 4 Coffman Deadlock Conditions & Prevention',
    summary: 'A deadlock can occur IF AND ONLY IF all four conditions hold simultaneously:',
    bullets: [
      '1. Mutual Exclusion: At least one resource must be held in a non-shareable mode.',
      '2. Hold and Wait: A process is holding at least one resource and requesting additional resources held by other processes.',
      '3. No Preemption: Resources cannot be forcibly preempted; they are released only voluntarily by the holding process.',
      '4. Circular Wait: A closed chain of processes exists where each process holds resources needed by the next process in the cycle.'
    ],
    codeSnippet: `// Banker's Algorithm Safety Condition:
// Need[i][j] = Max[i][j] - Allocation[i][j]
// If Need[i] <= Available, Process Pi finishes and releases Allocation[i] to Available pool.`,
    examTip: 'To PREVENT deadlock, invalidate at least ONE of the four conditions (e.g., impose global linear resource ordering to eliminate Circular Wait).'
  },
  {
    id: 'os-2',
    subject: 'os',
    title: 'Paging, TLB & Belady’s Anomaly',
    summary: 'Memory management fundamentals tested in GATE, university finals, and technical assessments:',
    bullets: [
      'Logical Address is divided into Page Number (p) and Page Offset (d).',
      'TLB (Translation Lookaside Buffer): High-speed associative hardware cache. Effective Access Time = (Hit ratio × (TLB + Mem)) + ((1 - Hit) × (TLB + 2×Mem)).',
      'Thrashing: High paging activity where system spends more time servicing page faults than executing instructions (CPU utilization collapses).',
      'Belady’s Anomaly: Under FIFO page replacement, increasing the number of page frames can paradoxically INCREASE page fault frequency. (LRU and Optimal never suffer Belady’s anomaly).'
    ],
    examTip: 'Always remember: Stack algorithms like LRU (Least Recently Used) and LFU never exhibit Belady’s anomaly because frames for size n are always a subset of size n+1.'
  },

  // DBMS
  {
    id: 'dbms-1',
    subject: 'dbms',
    title: 'ACID Properties & Transaction States',
    summary: 'The bedrock of relational database engines and transaction management:',
    bullets: [
      'Atomicity (All or Nothing): Handled by Recovery Manager using Write-Ahead Logging (WAL) and Undo logs.',
      'Consistency: Ensures database transitions from one valid state to another satisfying all schema constraints, checks, and foreign keys.',
      'Isolation: Handled by Concurrency Control Manager using Two-Phase Locking (2PL) or MVCC (Multi-Version Concurrency Control).',
      'Durability: Once committed, updates survive system crashes, handled by Redo logs and non-volatile storage flushing.'
    ],
    codeSnippet: `-- Transaction Isolation Anomalies:
-- 1. Dirty Read: Read uncommitted changes of another Tx
-- 2. Non-repeatable Read: Re-reading same row returns changed values
-- 3. Phantom Read: Re-running query returns newly inserted rows`,
    examTip: 'Serializability is the gold standard of correctness. Conflict serializable schedules are tested via Precedence (Serialization) Graph cycle detection.'
  },
  {
    id: 'dbms-2',
    subject: 'dbms',
    title: 'Normalization Rules (1NF to BCNF)',
    summary: 'Step-by-step schema decomposition to eliminate update, insertion, and deletion anomalies:',
    bullets: [
      '1NF: Atomic values only. No repeating groups or multivalued attributes.',
      '2NF: Must be in 1NF AND no Partial Dependency (every non-prime attribute must depend on whole candidate key, not subset).',
      '3NF: Must be in 2NF AND no Transitive Dependency (if X → Y, either X is a Superkey OR Y is a Prime attribute).',
      'BCNF (Boyce-Codd NF): Stricter 3NF. For every non-trivial functional dependency X → Y, X MUST be a Superkey.'
    ],
    examTip: 'BCNF decomposition guarantees Lossless Join, but does NOT always guarantee Dependency Preservation. 3NF always guarantees both.'
  },

  // Computer Networks
  {
    id: 'cn-1',
    subject: 'cn',
    title: 'OSI 7-Layer vs TCP/IP Protocol Stack',
    summary: 'End-to-end data communication model with respective protocol data units (PDUs):',
    bullets: [
      '7. Application: HTTP/HTTPS, DNS, SMTP, FTP, SSH (PDU: Data)',
      '6. Presentation: Encryption (TLS), Compression, Serialization',
      '5. Session: RPC, NetBIOS, Session checkpointing and recovery',
      '4. Transport: TCP (Reliable, Connection-Oriented), UDP (Low-Latency, Datagram) (PDU: Segment)',
      '3. Network: IP, ICMP, OSPF, BGP, ARP (PDU: Packet / Datagram)',
      '2. Data Link: Ethernet, Wi-Fi 802.11, MAC addressing, Framing, CSMA/CD (PDU: Frame)',
      '1. Physical: Bits, voltage levels, fiber optics, cables, repeaters (PDU: Bit stream)'
    ],
    examTip: 'TCP 3-Way Handshake involves: Client sends SYN (seq=x) → Server responds SYN-ACK (seq=y, ack=x+1) → Client confirms ACK (seq=x+1, ack=y+1).'
  },
  {
    id: 'cn-2',
    subject: 'cn',
    title: 'IPv4 Subnetting & CIDR Calculation',
    summary: 'Formulas and shortcuts for calculating network address, broadcast address, and usable hosts:',
    bullets: [
      'IPv4 is 32 bits divided into 4 octets (e.g. 192.168.1.0/24).',
      'Subnet Mask /24 = 255.255.255.0 (8 host bits remaining).',
      'Total IP addresses in subnet = 2^(32 - prefix) = 2^h.',
      'Usable Host IPs = 2^h - 2 (subtract Network ID and Directed Broadcast Address).',
      '/28 has 4 host bits: 2^4 = 16 total IPs, 14 usable hosts. Subnet Mask = 255.255.255.240.'
    ],
    examTip: 'Private IP ranges to memorize: Class A (10.0.0.0/8), Class B (172.16.0.0/12), Class C (192.168.0.0/16).'
  },

  // System Design
  {
    id: 'sys-1',
    subject: 'sysdesign',
    title: 'The CAP Theorem & PACELC Theorem',
    summary: 'Distributed system trade-offs in presence of network partitions:',
    bullets: [
      'Consistency (C): Every read receives the most recent write or an error.',
      'Availability (A): Every non-failing node returns a non-error response, but without guarantee it contains the latest write.',
      'Partition Tolerance (P): The system continues to operate despite arbitrary message loss or delay across network nodes.',
      'In any distributed network, Network Partitions (P) are inevitable; hence you must choose between CP (e.g. MongoDB, HBase) or AP (e.g. Cassandra, DynamoDB).',
      'PACELC: If Partition (P), choose Availability (A) or Consistency (C); Else (E), choose Latency (L) or Consistency (C).'
    ],
    examTip: 'Relational SQL databases (PostgreSQL, MySQL) default to ACID consistency on single node; distributed NoSQL databases explicitly trade strong consistency for high availability.'
  }
];

export const ExamRevisionHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<'all' | 'dsa' | 'os' | 'dbms' | 'cn' | 'sysdesign'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCards = useMemo(() => {
    return CHEAT_DATA.filter(card => {
      const matchesSubject = selectedSubject === 'all' || card.subject === selectedSubject;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesSubject;
      const matchesText = 
        card.title.toLowerCase().includes(q) ||
        card.summary.toLowerCase().includes(q) ||
        card.bullets.some(b => b.toLowerCase().includes(q)) ||
        card.examTip.toLowerCase().includes(q);
      return matchesSubject && matchesText;
    });
  }, [searchQuery, selectedSubject]);

  const copyCard = (card: CheatCard) => {
    const text = [
      `== ${card.title} ==`,
      card.summary,
      '',
      'Key Points:',
      ...card.bullets.map(b => `• ${b}`),
      card.codeSnippet ? `\nReference Code:\n${card.codeSnippet}` : '',
      `\nExam Focus Tip: ${card.examTip}`,
      `\nSource: HK VELORA Student Zone`
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(text);
    setCopiedId(card.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Search & Subject Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search Big-O, Deadlocks, ACID, Subnetting, CAP theorem, or SQL..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none focus:ring-1 focus:ring-blue-500 shadow-xs"
          />
        </div>

        {/* Subject Filter Buttons */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-none">
          {[
            { id: 'all', label: 'All Subjects' },
            { id: 'dsa', label: 'DSA' },
            { id: 'os', label: 'OS' },
            { id: 'dbms', label: 'DBMS' },
            { id: 'cn', label: 'Networks' },
            { id: 'sysdesign', label: 'System Design' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedSubject(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedSubject === tab.id
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards List */}
      <div className="space-y-6">
        {filteredCards.map(card => (
          <div
            key={card.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono">
                    {card.subject.toUpperCase()}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>High-Yield Revision Card</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  {card.title}
                </h3>
              </div>

              <button
                onClick={() => copyCard(card)}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors shrink-0"
                title="Copy revision card notes"
              >
                {copiedId === card.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[11px]">Copy Card</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {card.summary}
            </p>

            {/* Bullets */}
            <div className="space-y-2 pt-1">
              {card.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Code / Math Snippet if present */}
            {card.codeSnippet && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-[11px] overflow-x-auto leading-relaxed">
                <pre>{card.codeSnippet}</pre>
              </div>
            )}

            {/* Exam Tip Callout */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs leading-relaxed flex items-start gap-2">
              <span className="font-bold shrink-0">💡 Semester Exam Tip:</span>
              <span>{card.examTip}</span>
            </div>
          </div>
        ))}

        {filteredCards.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500">
            No revision topics matched your query. Try searching for "Big-O", "ACID", or "OSI".
          </div>
        )}
      </div>
    </div>
  );
};
