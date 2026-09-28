import React, { useState } from 'react';
import { Copy, Check, FileText, Sparkles, ArrowRight } from 'lucide-react';

interface ResumeExample {
  category: string;
  bullet: string;
}

const SAMPLE_BULLETS: ResumeExample[] = [
  {
    category: 'Full-Stack Web App',
    bullet: 'Architected a responsive campus portal using React, TypeScript, and Node.js, reducing item claim resolution turnaround by 65% across 2,400+ active student users.'
  },
  {
    category: 'Machine Learning / AI',
    bullet: 'Engineered an automated handwritten answer grading pipeline using PyTorch and Sentence-Transformers, achieving 91.4% grading alignment with human evaluators across 500+ test papers.'
  },
  {
    category: 'Database & Backend',
    bullet: 'Optimized PostgreSQL relational schemas and query execution plans with B-Tree indexing, decreasing average API response latency from 420ms to 48ms under simulated 1,000 req/sec loads.'
  },
  {
    category: 'DevOps & Cloud',
    bullet: 'Implemented Docker containerization and GitHub Actions CI/CD workflows, eliminating manual deployment errors and reducing release cycle time from 2 hours to 4 minutes.'
  },
  {
    category: 'Cybersecurity',
    bullet: 'Constructed an asynchronous packet anomaly detection daemon in Python and eBPF, successfully identifying 98.2% of SYN-flood and Slowloris attack vectors in simulated lab testing.'
  }
];

export const ResumeBulletBuilder: React.FC = () => {
  const [actionVerb, setActionVerb] = useState('Architected');
  const [whatBuilt, setWhatBuilt] = useState('a fullstack campus grievance redressal system');
  const [impactMetric, setImpactMetric] = useState('reducing administrative ticket backlog by 45%');
  const [methodTech, setMethodTech] = useState('using React, Express, PostgreSQL, and Redis caching');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const generatedBullet = `${actionVerb} ${whatBuilt.trim()}, ${impactMetric.trim()} ${methodTech.trim()}.`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Builder Form Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Google XYZ Resume Formula</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            ATS-Engineered Resume Bullet Point Generator
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Top engineering recruiters prioritize bullets structured as: <span className="font-semibold text-slate-700 dark:text-slate-300">"Accomplished [X] as measured by [Y] by doing [Z]"</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
              1. Strong Action Verb
            </label>
            <select
              value={actionVerb}
              onChange={e => setActionVerb(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 outline-none"
            >
              <option value="Architected">Architected</option>
              <option value="Engineered">Engineered</option>
              <option value="Optimized">Optimized</option>
              <option value="Constructed">Constructed</option>
              <option value="Implemented">Implemented</option>
              <option value="Streamlined">Streamlined</option>
              <option value="Automated">Automated</option>
              <option value="Refactored">Refactored</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
              2. Core Deliverable [X]
            </label>
            <input
              type="text"
              value={whatBuilt}
              onChange={e => setWhatBuilt(e.target.value)}
              placeholder="e.g. a high-throughput video transcoding microservice"
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
              3. Quantified Impact / Metric [Y]
            </label>
            <input
              type="text"
              value={impactMetric}
              onChange={e => setImpactMetric(e.target.value)}
              placeholder="e.g. reducing memory consumption by 35% across 10k items"
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
              4. Tools, Tech &amp; Method [Z]
            </label>
            <input
              type="text"
              value={methodTech}
              onChange={e => setMethodTech(e.target.value)}
              placeholder="e.g. using Golang, RabbitMQ, and FFmpeg parallel workers"
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 outline-none"
            />
          </div>
        </div>

        {/* Live Output Preview */}
        <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 space-y-2">
          <span className="text-[10px] font-mono uppercase font-bold text-blue-600 dark:text-blue-400 tracking-wider">
            Ready-to-Paste Resume Bullet
          </span>
          <p className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
            • {generatedBullet}
          </p>
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => copyToClipboard(`• ${generatedBullet}`)}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              {copiedText === `• ${generatedBullet}` ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Bullet Point</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Pre-Engineered Examples */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
          Pre-Engineered High-Yield Project Bullet Points
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Click copy on any bullet to adapt it to your university resume:
        </p>

        <div className="space-y-3">
          {SAMPLE_BULLETS.map((sample, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 flex items-start justify-between gap-4 text-xs"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-semibold uppercase text-blue-600 dark:text-blue-400">
                  {sample.category}
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  • {sample.bullet}
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(`• ${sample.bullet}`)}
                className="p-1.5 text-slate-400 hover:text-blue-600 shrink-0 transition-colors"
                title="Copy bullet"
              >
                {copiedText === `• ${sample.bullet}` ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
