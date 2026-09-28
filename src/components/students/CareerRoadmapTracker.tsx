import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Trophy, Terminal, Code2, Briefcase, GraduationCap } from 'lucide-react';

interface Milestone {
  id: string;
  year: 1 | 2 | 3 | 4;
  category: 'core' | 'skills' | 'projects' | 'career';
  title: string;
  description: string;
  actionableStep: string;
}

const MILESTONES: Milestone[] = [
  // Year 1
  {
    id: 'y1-1',
    year: 1,
    category: 'core',
    title: 'Master First Programming Language (C++ or Python)',
    description: 'Learn pointers, memory models, functions, loops, and object-oriented paradigms.',
    actionableStep: 'Solve 50 fundamental syntax and algorithmic logic problems on standard platforms.'
  },
  {
    id: 'y1-2',
    year: 1,
    category: 'skills',
    title: 'Git Version Control & Terminal Literacy',
    description: 'Learn git commit, branch, merge, pull requests, and standard Linux bash commands.',
    actionableStep: 'Create a GitHub account and push daily code repositories with clean README files.'
  },
  {
    id: 'y1-3',
    year: 1,
    category: 'career',
    title: 'Explore Tech Domains & Student Clubs',
    description: 'Attend college coding club meetups, tech seminars, and build your developer peer network.',
    actionableStep: 'Form a study group with 2-3 motivated peers for hackathon collaborations.'
  },

  // Year 2
  {
    id: 'y2-1',
    year: 2,
    category: 'core',
    title: 'Data Structures & Algorithms (DSA Mastery)',
    description: 'Master Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Heaps, and Graphs.',
    actionableStep: 'Solve 150+ standard problems on LeetCode/NeetCode covering Two Pointers and BFS/DFS.'
  },
  {
    id: 'y2-2',
    year: 2,
    category: 'core',
    title: 'Core CS Subjects (DBMS, OS, Computer Networks)',
    description: 'Focus on ACID properties, SQL joins, process scheduling, virtual memory, and TCP/IP.',
    actionableStep: 'Build a relational database project with normalized tables and write raw complex SQL queries.'
  },
  {
    id: 'y2-3',
    year: 2,
    category: 'projects',
    title: 'First Fullstack or Mobile App Project',
    description: 'Build an end-to-end CRUD application with authentic database persistence and deployed API.',
    actionableStep: 'Deploy a working web application to Vercel/Render with real user authentication.'
  },

  // Year 3
  {
    id: 'y3-1',
    year: 3,
    category: 'skills',
    title: 'System Design & Modern Architectural Patterns',
    description: 'Learn caching (Redis), message queues, database indexing, rate limiting, and RESTful APIs.',
    actionableStep: 'Read "Designing Data-Intensive Applications" chapters and diagram high-level architectures.'
  },
  {
    id: 'y3-2',
    year: 3,
    category: 'career',
    title: 'Internship Hunting & Open Source Contributions',
    description: 'Participate in GSoC, Hacktoberfest, or apply for off-campus summer engineering internships.',
    actionableStep: 'Submit 2-3 genuine Pull Requests to active open-source GitHub repositories.'
  },
  {
    id: 'y3-3',
    year: 3,
    category: 'projects',
    title: 'Advanced Capstone or Domain Specialization Project',
    description: 'Build a production-grade application in AI, Cloud/DevOps, or Fullstack with live users.',
    actionableStep: 'Implement CI/CD pipeline, Docker containerization, and unit tests for your project.'
  },

  // Year 4
  {
    id: 'y4-1',
    year: 4,
    category: 'career',
    title: 'Mock Technical & Behavioral Interview Speedruns',
    description: 'Practice timed coding rounds, CS fundamentals viva, and STAR method behavioral questions.',
    actionableStep: 'Conduct at least 10 peer mock interviews and solve medium problems within 25 minutes.'
  },
  {
    id: 'y4-2',
    year: 4,
    category: 'career',
    title: 'ATS-Engineered Resume & Cold Outreach Strategy',
    description: 'Tailor resume with quantified metrics (Google XYZ formula) and reach out to tech recruiters.',
    actionableStep: 'Network with 20+ college alumni working in target engineering organizations on LinkedIn.'
  },
  {
    id: 'y4-3',
    year: 4,
    category: 'core',
    title: 'Final Capstone Thesis & Viva Defense',
    description: 'Write rigorous project documentation, system architecture papers, and demonstrate live product.',
    actionableStep: 'Prepare clear presentation slides with architecture diagrams and live backup video demo.'
  }
];

export const CareerRoadmapTracker: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<1 | 2 | 3 | 4>(1);
  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('hk_velora_student_roadmap');
      return saved ? JSON.parse(saved) : ['y1-1', 'y1-2'];
    } catch {
      return ['y1-1', 'y1-2'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('hk_velora_student_roadmap', JSON.stringify(completedIds));
    } catch {}
  }, [completedIds]);

  const toggleMilestone = (id: string) => {
    setCompletedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const currentYearMilestones = MILESTONES.filter(m => m.year === selectedYear);
  const totalCompleted = completedIds.length;
  const totalMilestones = MILESTONES.length;
  const progressPercent = Math.round((totalCompleted / totalMilestones) * 100);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Progress Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Engineering &amp; BCA Career Roadmap</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
              4-Year Computer Science &amp; Engineering Milestones
            </h3>
          </div>

          <div className="text-right">
            <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 tabular-nums">
              {progressPercent}%
            </span>
            <span className="text-xs text-slate-500 block">
              {totalCompleted} of {totalMilestones} Milestones Completed
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Year Selector Tabs */}
        <div className="flex items-center gap-2 pt-2 overflow-x-auto scrollbar-none">
          {[
            { year: 1 as const, label: '1st Year (Foundations)' },
            { year: 2 as const, label: '2nd Year (Core DSA & Tech)' },
            { year: 3 as const, label: '3rd Year (Specialization & Internships)' },
            { year: 4 as const, label: '4th Year (Placements & Capstone)' },
          ].map(tab => (
            <button
              key={tab.year}
              onClick={() => setSelectedYear(tab.year)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedYear === tab.year
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Milestones Cards */}
      <div className="space-y-4">
        {currentYearMilestones.map(milestone => {
          const isDone = completedIds.includes(milestone.id);

          return (
            <div
              key={milestone.id}
              onClick={() => toggleMilestone(milestone.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                isDone
                  ? 'bg-blue-50/40 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/40 shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                )}
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className={`text-base font-bold transition-colors ${
                    isDone ? 'line-through text-slate-500 dark:text-slate-400' : 'text-slate-900 dark:text-slate-100'
                  }`}>
                    {milestone.title}
                  </h4>
                  <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 shrink-0">
                    {milestone.category}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {milestone.description}
                </p>

                <div className="pt-1.5 text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1.5">
                  <span className="font-bold">Target Action:</span>
                  <span>{milestone.actionableStep}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
