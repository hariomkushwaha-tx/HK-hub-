import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Plus, 
  Trash2, 
  Copy, 
  Check, 
  Send, 
  Building2, 
  Calendar, 
  DollarSign, 
  ChevronRight, 
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';

interface JobApplication {
  id: string;
  company: string;
  role: string;
  status: 'wishlist' | 'applied' | 'oa' | 'interview' | 'offer' | 'rejected';
  appliedDate: string;
  stipendOrSalary?: string;
  referralName?: string;
  notes?: string;
}

const DEFAULT_APPLICATIONS: JobApplication[] = [
  {
    id: '1',
    company: 'Razorpay',
    role: 'Software Development Engineering Intern (Backend)',
    status: 'oa',
    appliedDate: '2026-09-20',
    stipendOrSalary: '₹50,000 / month',
    referralName: 'College Alumni (Senior SDE)',
    notes: 'Completed HackerEarth coding assessment. Expecting round 1 call.'
  },
  {
    id: '2',
    company: 'Postman',
    role: 'Frontend Engineering Intern (React / TS)',
    status: 'applied',
    appliedDate: '2026-09-24',
    stipendOrSalary: '₹45,000 / month',
    notes: 'Submitted resume tailored with Google XYZ project bullets.'
  },
  {
    id: '3',
    company: 'Zerodha',
    role: 'Systems Engineer Trainee (Go / Postgres)',
    status: 'wishlist',
    appliedDate: '2026-09-28',
    notes: 'Need to complete distributed rate limiter project before cold emailing CTO.'
  }
];

const COLUMNS: { id: JobApplication['status']; label: string; color: string }[] = [
  { id: 'wishlist', label: 'Wishlist & Target', color: 'bg-slate-500/10 text-slate-700 dark:text-slate-300' },
  { id: 'applied', label: 'Applied', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
  { id: 'oa', label: 'Online Assessment (OA)', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
  { id: 'interview', label: 'Tech Interview', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400' },
  { id: 'offer', label: 'Offer Received 🎉', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
  { id: 'rejected', label: 'Archived / Rejection', color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400' },
];

export const JobApplicationTracker: React.FC = () => {
  const [applications, setApplications] = useState<JobApplication[]>(() => {
    try {
      const saved = localStorage.getItem('hk_velora_job_applications');
      return saved ? JSON.parse(saved) : DEFAULT_APPLICATIONS;
    } catch {
      return DEFAULT_APPLICATIONS;
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeOutreachTab, setActiveOutreachTab] = useState<'recruiter' | 'alumni' | 'thankyou'>('recruiter');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // New Application Form State
  const [formCompany, setFormCompany] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formStatus, setFormStatus] = useState<JobApplication['status']>('applied');
  const [formStipend, setFormStipend] = useState('');
  const [formNotes, setFormNotes] = useState('');

  // Outreach Template Variables
  const [targetCompany, setTargetCompany] = useState('Google');
  const [targetRole, setTargetRole] = useState('Software Engineering Intern');
  const [candidateName, setCandidateName] = useState('Hariom Kushwaha');
  const [keyProject, setKeyProject] = useState('a high-throughput distributed URL shortening engine in Go & Redis');

  useEffect(() => {
    try {
      localStorage.setItem('hk_velora_job_applications', JSON.stringify(applications));
    } catch {}
  }, [applications]);

  const handleAddApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formCompany.trim() || !formRole.trim()) return;

    const newApp: JobApplication = {
      id: Date.now().toString(),
      company: formCompany.trim(),
      role: formRole.trim(),
      status: formStatus,
      appliedDate: new Date().toISOString().split('T')[0],
      stipendOrSalary: formStipend.trim() || undefined,
      notes: formNotes.trim() || undefined
    };

    setApplications(prev => [newApp, ...prev]);
    setIsModalOpen(false);
    setFormCompany('');
    setFormRole('');
    setFormStipend('');
    setFormNotes('');
  };

  const moveApplicationStatus = (id: string, newStatus: JobApplication['status']) => {
    setApplications(prev => prev.map(app => app.id === id ? { ...app, status: newStatus } : app));
  };

  const deleteApplication = (id: string) => {
    setApplications(prev => prev.filter(app => app.id !== id));
  };

  const getOutreachEmailContent = () => {
    if (activeOutreachTab === 'recruiter') {
      return `Subject: Application: ${targetRole} — ${candidateName} (Computer Science & Engineering)

Hi [Recruiter Name],

I hope you are doing well!

I noticed ${targetCompany} is currently evaluating candidates for the ${targetRole} opening. As an engineering student with hands-on experience building production full-stack systems and algorithmic software, I wanted to reach out directly.

Recently, I built ${keyProject}, which optimized query response latency by 85% and handles high-concurrency client connections. My technical core covers TypeScript/React, Python, Go, and relational database systems.

I would love the opportunity to interview and contribute to ${targetCompany}'s engineering team this upcoming term. My resume and project portfolio are attached for your quick review.

Thank you very much for your time and consideration!

Warm regards,
${candidateName}
Portfolio / GitHub: https://github.com/
LinkedIn: https://linkedin.com/`;
    }

    if (activeOutreachTab === 'alumni') {
      return `Subject: College Senior Advice & Referral Inquiry for ${targetRole} at ${targetCompany}

Hi [Senior Name],

Hope you're having a great week!

I came across your profile and was thrilled to see a fellow college alumnus working as an engineer at ${targetCompany}! 

I am currently a student pursuing Computer Science, actively preparing for technical recruitment cycles. Over the past year, I have built ${keyProject} and solved 200+ core data structure problems.

I am applying for the ${targetRole} position at ${targetCompany} (Req ID: [Job ID]). If my profile aligns with your team's technical expectations, would you be open to providing an internal employee referral?

I have attached my 1-page ATS-formatted resume for your perusal. Either way, I would love to hear any advice you have for cracking the engineering rounds at ${targetCompany}.

Thank you for your guidance!

Best regards,
${candidateName}`;
    }

    return `Subject: Thank You — Technical Interview for ${targetRole} (${candidateName})

Hi [Interviewer Name],

Thank you for taking the time to speak with me today regarding the ${targetRole} opening at ${targetCompany}.

I thoroughly enjoyed our technical discussion, especially exploring our trade-offs between sliding window memory constraints and database indexing strategies. Your insights on how ${targetCompany} handles zero-downtime microservice migrations were incredibly enlightening.

Our conversation reinforced my enthusiasm for joining the team. Please let me know if there are any follow-up questions or code samples I can provide.

Looking forward to the next steps!

Warmly,
${candidateName}`;
  };

  const copyOutreachEmail = () => {
    navigator.clipboard.writeText(getOutreachEmailContent());
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* 1. Header and Quick Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-blue-600 dark:text-blue-400">
            <Briefcase className="w-4 h-4" />
            <span>Off-Campus Placement &amp; Internship Command Center</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
            Internship &amp; Job Application Tracker
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Track off-campus technical applications, interviews, OA test links, and generated cold outreach notes with 100% private local storage.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-xs shrink-0 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Application</span>
        </button>
      </div>

      {/* 2. Kanban Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {COLUMNS.map(col => {
          const colApps = applications.filter(a => a.status === col.id);

          return (
            <div
              key={col.id}
              className="flex flex-col rounded-2xl bg-slate-50/70 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 p-3 space-y-3 min-h-[340px]"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between px-1">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${col.color}`}>
                  {col.label}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {colApps.length}
                </span>
              </div>

              {/* Cards list */}
              <div className="space-y-2.5 flex-1">
                {colApps.map(app => (
                  <div
                    key={app.id}
                    className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 text-xs"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-bold text-slate-900 dark:text-slate-100 text-xs">
                        {app.company}
                      </span>
                      <button
                        onClick={() => deleteApplication(app.id)}
                        className="text-slate-400 hover:text-rose-500 p-0.5 transition-colors"
                        title="Delete application"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] font-medium text-slate-600 dark:text-slate-300 line-clamp-2">
                      {app.role}
                    </div>

                    {app.stipendOrSalary && (
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                        {app.stipendOrSalary}
                      </div>
                    )}

                    {app.notes && (
                      <div className="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                        {app.notes}
                      </div>
                    )}

                    {/* Quick Move Status Selector */}
                    <div className="pt-1.5 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Move to:</span>
                      <select
                        value={app.status}
                        onChange={e => moveApplicationStatus(app.id, e.target.value as any)}
                        className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded px-1.5 py-0.5 outline-none font-medium"
                      >
                        <option value="wishlist">Wishlist</option>
                        <option value="applied">Applied</option>
                        <option value="oa">OA</option>
                        <option value="interview">Interview</option>
                        <option value="offer">Offer</option>
                        <option value="rejected">Archived</option>
                      </select>
                    </div>
                  </div>
                ))}

                {colApps.length === 0 && (
                  <div className="h-24 flex items-center justify-center text-[11px] text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                    No roles here
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. High-Conversion Cold Outreach & Referral Message Generator */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-blue-600 dark:text-blue-400">
              <Sparkles className="w-4 h-4" />
              <span>Personalized Recruiter &amp; Referral Templates</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              High-Conversion Cold Outreach Generator
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Generate personalized LinkedIn messages and emails tested to double recruiter response rates:
            </p>
          </div>

          <button
            onClick={copyOutreachEmail}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs shrink-0 self-start sm:self-auto"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Outreach Email</span>
              </>
            )}
          </button>
        </div>

        {/* Dynamic Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
              Target Company
            </label>
            <input
              type="text"
              value={targetCompany}
              onChange={e => setTargetCompany(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-slate-100 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
              Target Role
            </label>
            <input
              type="text"
              value={targetRole}
              onChange={e => setTargetRole(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-slate-100 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={candidateName}
              onChange={e => setCandidateName(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-slate-100 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
              Key Technical Project Mention
            </label>
            <input
              type="text"
              value={keyProject}
              onChange={e => setKeyProject(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-slate-100 outline-none"
            />
          </div>
        </div>

        {/* Template Selector Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          {[
            { id: 'recruiter', label: '1. Cold Email to Recruiter' },
            { id: 'alumni', label: '2. College Alumni Referral Request' },
            { id: 'thankyou', label: '3. Post-Interview Thank You Note' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveOutreachTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeOutreachTab === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Live Preview Container */}
        <div className="p-4 sm:p-6 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed whitespace-pre-wrap">
          {getOutreachEmailContent()}
        </div>
      </div>

      {/* Modal: Add New Application */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Log New Job / Internship Application
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddApplication} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formCompany}
                  onChange={e => setFormCompany(e.target.value)}
                  placeholder="e.g. Razorpay, Swiggy, Atlassian..."
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Role Title *
                </label>
                <input
                  type="text"
                  required
                  value={formRole}
                  onChange={e => setFormRole(e.target.value)}
                  placeholder="e.g. Software Development Engineer Intern"
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                    Initial Status
                  </label>
                  <select
                    value={formStatus}
                    onChange={e => setFormStatus(e.target.value as any)}
                    className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 outline-none"
                  >
                    <option value="wishlist">Wishlist</option>
                    <option value="applied">Applied</option>
                    <option value="oa">OA</option>
                    <option value="interview">Interview</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                    Stipend / CTC (Optional)
                  </label>
                  <input
                    type="text"
                    value={formStipend}
                    onChange={e => setFormStipend(e.target.value)}
                    placeholder="e.g. ₹50k/mo"
                    className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
                  Notes / Referral Info
                </label>
                <textarea
                  rows={2}
                  value={formNotes}
                  onChange={e => setFormNotes(e.target.value)}
                  placeholder="e.g. Applied via Careers portal, referral by senior..."
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 outline-none resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                >
                  Save Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
