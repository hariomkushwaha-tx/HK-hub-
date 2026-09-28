import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Copy, 
  Check, 
  Calculator, 
  Database, 
  Cpu, 
  ArrowRight, 
  Sliders,
  DollarSign,
  Layers,
  Terminal
} from 'lucide-react';

interface SystemPrompt {
  id: string;
  title: string;
  category: string;
  targetRole: string;
  description: string;
  promptText: string;
}

const SYSTEM_PROMPTS: SystemPrompt[] = [
  {
    id: 'code-reviewer',
    title: 'Senior Staff Software Engineer Code Reviewer',
    category: 'Engineering Quality',
    targetRole: 'Code Review & Security Auditing',
    description: 'Enforces memory safety, O(N) complexity checks, race condition detection, and modern idiomatic patterns.',
    promptText: `You are an elite Senior Staff Software Engineer and Technical Lead.
Your role is to rigorously review the provided code diff or pull request.

Evaluate the code according to the following strict criteria:
1. CORRECTNESS & EDGE CASES:
   - Identify off-by-one errors, null/undefined dereferences, uncaught promise rejections, and infinite loop conditions.
   - Verify boundary conditions (empty arrays, negative numbers, maximum integer limits).

2. ASYMPTOTIC COMPLEXITY:
   - Explicitly compute Time and Space complexity in Big-O notation for every modified function.
   - Reject unnecessary O(N²) nested iterations where hash lookups or two pointers can achieve O(N).

3. SECURITY & MEMORY HYGIENE:
   - Check for SQL injection, cross-site scripting (XSS), path traversal, and unvalidated user inputs.
   - Verify proper resource cleanup (closing database connection pools, clearing interval timers, aborting fetch signals).

4. ACTIONABLE FEEDBACK FORMAT:
   - Provide feedback prioritized by severity: [CRITICAL], [WARNING], [OPTIMIZATION], [NITPICK].
   - Always include the concrete, corrected code block illustrating the exact fix.`
  },
  {
    id: 'sql-optimizer',
    title: 'High-Performance Database Query Optimizer & Architect',
    category: 'Database & Backend',
    targetRole: 'PostgreSQL / MySQL Query Optimization',
    description: 'Analyzes query execution plans, identifies missing indexes, avoids sequential table scans, and rewrites complex joins.',
    promptText: `You are a Principal Database Administrator (DBA) and PostgreSQL/MySQL Performance Architect.

Analyze the user's schema and SQL query with relentless performance discipline:
1. EXECUTION PLAN ANALYSIS:
   - Explain how EXPLAIN ANALYZE would interpret this query.
   - Point out Sequential Scans (Seq Scan) on tables with more than 1,000 rows.
   - Flag N+1 query patterns and correlated subqueries.

2. INDEXING STRATEGY:
   - Recommend exact Composite B-Tree or GIN indexes to achieve Index-Only scans.
   - Pay strict attention to index column ordering (Equality columns first, Range/Inequality columns last).

3. REWRITTEN QUERY:
   - Output the optimized, rewritten SQL query using CTEs, window functions, or proper INNER/LEFT joins.
   - Provide expected latency reduction estimates.`
  },
  {
    id: 'rag-agent',
    title: 'Autonomous RAG & Retrieval Agent Prompt',
    category: 'AI & Machine Learning',
    targetRole: 'Context-Grounded Question Answering',
    description: 'Guarantees zero hallucinations by restricting answers strictly to retrieved context chunks with source citations.',
    promptText: `You are a factual, context-grounded AI Retrieval-Augmented Generation (RAG) assistant.

OPERATIONAL INSTRUCTIONS:
1. STRICT CONTEXT ADHERENCE:
   - Answer the question solely and strictly using the provided context passages below.
   - If the provided context does not contain sufficient facts to answer the question, state: "The provided reference documents do not contain information regarding [topic]." Do not extrapolate or guess.

2. CITATION DISCIPLINE:
   - Every factual assertion MUST end with an inline bracket citation matching the source document ID, e.g. [Doc-1, Page 4].

3. ANTI-HALLUCINATION GUARD:
   - Never introduce outside knowledge, historical dates, or technical claims not explicitly stated in the context snippets.`
  },
  {
    id: 'bug-triage',
    title: 'Root Cause Incident Investigator & Debugger',
    category: 'DevOps & SRE',
    targetRole: 'Production Incident Triage',
    description: 'Deconstructs stack traces, race conditions, memory leaks, and distributed microservice failures.',
    promptText: `You are a Senior Site Reliability Engineer (SRE) and Production Incident Commander.

Given the error log, stack trace, or incident description:
1. IMMEDIATE ROOT CAUSE HYPOTHESIS:
   - Identify the exact line of failure and the underlying architectural reason (e.g. connection pool exhaustion, memory heap overflow, deadlocked database transaction, TLS handshake expiration).

2. STEP-BY-STEP REPRODUCTION:
   - Provide minimal reproducible steps to recreate the defect locally.

3. RESILIENCE REMEDIATION:
   - Provide both an immediate hotfix and a long-term architectural safeguard (e.g. exponential backoff with jitter, circuit breaker pattern, graceful degradation).`
  }
];

export const AiEngineeringHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'prompts' | 'calculator' | 'rag-guide'>('prompts');
  const [selectedPromptId, setSelectedPromptId] = useState<string>('code-reviewer');
  const [copied, setCopied] = useState(false);

  // LLM Calculator States
  const [inputTokens, setInputTokens] = useState<number>(1000);
  const [outputTokens, setOutputTokens] = useState<number>(500);
  const [dailyRequests, setDailyRequests] = useState<number>(500);

  const selectedPrompt = SYSTEM_PROMPTS.find(p => p.id === selectedPromptId) || SYSTEM_PROMPTS[0];

  const copyPromptText = () => {
    navigator.clipboard.writeText(selectedPrompt.promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pricing Matrix per Million Tokens (USD) - 2026 Standards
  const MODELS = [
    { name: 'Gemini 2.0 Flash', inputPerM: 0.10, outputPerM: 0.40, provider: 'Google AI' },
    { name: 'Gemini 1.5 Pro', inputPerM: 1.25, outputPerM: 5.00, provider: 'Google AI' },
    { name: 'GPT-4o mini', inputPerM: 0.15, outputPerM: 0.60, provider: 'OpenAI' },
    { name: 'GPT-4o', inputPerM: 2.50, outputPerM: 10.00, provider: 'OpenAI' },
    { name: 'Claude 3.5 Sonnet', inputPerM: 3.00, outputPerM: 15.00, provider: 'Anthropic' },
    { name: 'Llama 3.3 70B (Groq)', inputPerM: 0.59, outputPerM: 0.79, provider: 'Groq Cloud' },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-blue-600 dark:text-blue-400">
          <Bot className="w-4 h-4" />
          <span>Modern 2026 AI Developer &amp; Agentic Engineering Suite</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
          AI &amp; Prompt Engineering Command Center
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Production-tested system prompts for code reviews and SQL optimization, real-time LLM token cost calculators across Gemini, OpenAI, Claude, and RAG architectural blueprints.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 overflow-x-auto scrollbar-none">
        {[
          { id: 'prompts', label: '1. Production System Prompts' },
          { id: 'calculator', label: '2. LLM Token & Cost Calculator' },
          { id: 'rag-guide', label: '3. RAG Architecture Blueprint' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: System Prompts */}
      {activeTab === 'prompts' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-2">
            {SYSTEM_PROMPTS.map(p => {
              const isSelected = p.id === selectedPrompt.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPromptId(p.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all space-y-1 ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-500/50 shadow-xs'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-slate-100'}`}>
                      {p.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                    {p.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-blue-600 dark:text-blue-400">
                    {selectedPrompt.category} · {selectedPrompt.targetRole}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                    {selectedPrompt.title}
                  </h3>
                </div>

                <button
                  onClick={copyPromptText}
                  className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs self-start sm:self-auto shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied Prompt</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy System Prompt</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 sm:p-6 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed whitespace-pre-wrap shadow-inner">
                {selectedPrompt.promptText}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: LLM Token & Cost Calculator */}
      {activeTab === 'calculator' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Interactive LLM Token Volume &amp; API Billing Estimator
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">Input Tokens / Req:</span>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{inputTokens.toLocaleString()} tokens</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={30000}
                  step={100}
                  value={inputTokens}
                  onChange={e => setInputTokens(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">Output Tokens / Req:</span>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{outputTokens.toLocaleString()} tokens</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={8000}
                  step={50}
                  value={outputTokens}
                  onChange={e => setOutputTokens(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">Daily Requests:</span>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{dailyRequests.toLocaleString()} req/day</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={25000}
                  step={100}
                  value={dailyRequests}
                  onChange={e => setDailyRequests(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Pricing Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-mono uppercase">
                <tr>
                  <th className="p-3.5 pl-6 font-semibold">Model Name</th>
                  <th className="p-3.5 font-semibold">Provider</th>
                  <th className="p-3.5 font-semibold">Cost / Request</th>
                  <th className="p-3.5 font-semibold">Daily Cost</th>
                  <th className="p-3.5 pr-6 font-semibold">Monthly Estimate (30d)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 font-medium">
                {MODELS.map((model, i) => {
                  const inputCostPerReq = (inputTokens / 1_000_000) * model.inputPerM;
                  const outputCostPerReq = (outputTokens / 1_000_000) * model.outputPerM;
                  const totalPerReq = inputCostPerReq + outputCostPerReq;
                  const dailyTotal = totalPerReq * dailyRequests;
                  const monthlyTotal = dailyTotal * 30;

                  return (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="p-3.5 pl-6 font-bold text-slate-900 dark:text-slate-100">
                        {model.name}
                      </td>
                      <td className="p-3.5 text-slate-500">
                        {model.provider}
                      </td>
                      <td className="p-3.5 font-mono text-slate-700 dark:text-slate-300">
                        ${totalPerReq.toFixed(5)}
                      </td>
                      <td className="p-3.5 font-mono text-slate-700 dark:text-slate-300">
                        ${dailyTotal.toFixed(2)}
                      </td>
                      <td className="p-3.5 pr-6 font-mono font-bold text-blue-600 dark:text-blue-400">
                        ${monthlyTotal.toFixed(2)} / mo
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: RAG Architecture Blueprint */}
      {activeTab === 'rag-guide' && (
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400">
              Retrieval-Augmented Generation Architecture
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Production RAG Pipeline &amp; Vector Database Matrix
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              How production engineering systems ground LLMs in private documents without costly fine-tuning:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block font-mono">1. INGESTION</span>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Split raw PDFs, markdown, and code into overlapping chunks (512 tokens with 50-token overlap).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block font-mono">2. EMBEDDINGS</span>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Vectorize chunks using text-embedding models (e.g. Gemini text-embedding-004 or OpenAI text-embedding-3-small).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block font-mono">3. VECTOR SEARCH</span>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Index vectors via HNSW (Hierarchical Navigable Small World) in pgvector or Pinecone. Top-K similarity via Cosine distance.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block font-mono">4. SYNTHESIS</span>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Inject top retrieved passages into the LLM system prompt context window for fact-grounded answering.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
