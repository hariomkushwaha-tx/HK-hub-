import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { EBOOKS_DATA } from '../../data/ebooksData';
import { EBookReaderModal } from '../ebooks/EBookReaderModal';
import { EBookItem } from '../../types';
import { 
  GraduationCap, 
  Calculator, 
  Laptop, 
  FolderGit2, 
  Sparkles, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  ExternalLink,
  BookOpen,
  Award,
  BookMarked,
  Star,
  Download,
  ArrowRight
} from 'lucide-react';

interface CourseGrade {
  id: string;
  name: string;
  gradePoint: number;
  credits: number;
}

export const StudentZone: React.FC = () => {
  const { setActiveTab: setGlobalTab } = useApp();
  const [activeTab, setActiveTab] = useState<'study-hub' | 'gpa-calc' | 'discounts' | 'project-generator' | 'ebooks-shelf'>('study-hub');
  const [activeReadingBook, setActiveReadingBook] = useState<EBookItem | null>(null);

  // GPA Calculator States
  const [courses, setCourses] = useState<CourseGrade[]>([
    { id: '1', name: 'Data Structures & Algorithms', gradePoint: 10, credits: 4 },
    { id: '2', name: 'Computer Networks', gradePoint: 9, credits: 4 },
    { id: '3', name: 'Web Architecture', gradePoint: 9, credits: 3 },
    { id: '4', name: 'Database Management Systems', gradePoint: 8, credits: 3 },
  ]);
  const [cgpaMultiplier, setCgpaMultiplier] = useState<number>(9.5);
  const [customCgpa, setCustomCgpa] = useState<number>(8.5);

  const gpaResult = useMemo(() => {
    let totalCredits = 0;
    let totalPoints = 0;
    courses.forEach(c => {
      totalCredits += c.credits;
      totalPoints += c.gradePoint * c.credits;
    });
    const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    return {
      gpa: parseFloat(gpa.toFixed(2)),
      totalCredits,
      percentage: parseFloat((gpa * cgpaMultiplier).toFixed(2))
    };
  }, [courses, cgpaMultiplier]);

  const addCourse = () => {
    setCourses(prev => [
      ...prev,
      { id: Date.now().toString(), name: `Course ${prev.length + 1}`, gradePoint: 9, credits: 3 }
    ]);
  };

  const removeCourse = (id: string) => {
    if (courses.length <= 1) return;
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  // Project Idea Generator State
  const [selectedDomain, setSelectedDomain] = useState<string>('Web Development');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Intermediate');
  const [generatedBrief, setGeneratedBrief] = useState<any>(null);

  const generateProjectBrief = () => {
    const briefs: Record<string, any> = {
      'Web Development': {
        title: 'Smart Campus Lost & Found Digital Portal',
        desc: 'A college community web platform where students report lost student IDs, keys, calculators, or laptops with photo uploads and privacy-protected contact claims.',
        features: ['Category filtering (Keys, Electronics, Books)', 'Secure claim verification modal', 'Telegram/Email notifications to student desk'],
        tech: ['React', 'Node.js/Express', 'Tailwind CSS', 'IndexedDB / SQLite']
      },
      'AI / Machine Learning': {
        title: 'Smart Lecture Audio Summarizer & Study Flashcards',
        desc: 'An AI assistant that ingests lecture transcripts, extracts high-yield definitions, and auto-generates Spaced Repetition flashcards for exam review.',
        features: ['Audio to text transcription', 'Key summary points with citations', 'Interactive flip card practice mode'],
        tech: ['Python', 'Gemini API', 'FastAPI', 'React Frontend']
      },
      'Python & Automation': {
        title: 'Automated Academic Schedule & Assignment Deadline Tracker',
        desc: 'A background desktop script that syncs university LMS announcements, sends WhatsApp/Discord deadline alerts, and organizes lecture PDF slides by subject.',
        features: ['Automatic folder organizer for downloaded PDFs', 'Calendar ICS file export', 'Priority task dashboard'],
        tech: ['Python', 'BeautifulSoup / Requests', 'Tkinter or Web UI']
      }
    };

    setGeneratedBrief(briefs[selectedDomain] || briefs['Web Development']);
  };

  return (
    <div id="student-zone-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Student Digital Empowerment</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
          Student Tech & Academic Zone
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Curated guides, GPA & percentage converters, student software discounts, and semester project roadmaps tailored for college and university learners.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-center">
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 overflow-x-auto max-w-full">
          {[
            { id: 'study-hub', label: 'Student Tech Guides', icon: <BookOpen className="w-4 h-4" /> },
            { id: 'ebooks-shelf', label: 'E-Books & Textbooks', icon: <BookMarked className="w-4 h-4" /> },
            { id: 'gpa-calc', label: 'GPA & CGPA Calculator', icon: <Calculator className="w-4 h-4" /> },
            { id: 'discounts', label: 'Free Student Developer Packs', icon: <Award className="w-4 h-4" /> },
            { id: 'project-generator', label: 'College Project Generator', icon: <Sparkles className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              id={`student-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 1. Student Tech Guides */}
      {activeTab === 'study-hub' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 w-fit">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Engineering & BCA Laptop Buying Checklist</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                What hardware specifications actually matter for 4 years of college without overspending:
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>RAM:</strong> 16GB is the minimum sweet spot for running IDEs, Android emulators, and Docker containers simultaneously. Avoid 8GB non-upgradable laptops.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Processor:</strong> At least 6-8 cores (Intel Core i5 13th gen+, AMD Ryzen 5 7000+, or Apple M2/M3).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Storage:</strong> 512GB NVMe SSD. Mechanical HDDs are obsolete.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Battery & Weight:</strong> Aim for 6+ hours actual battery life and under 1.8kg for commuting between lecture halls.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-400 w-fit">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Must-Have Free Productivity Apps</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Software tools used by top university students to keep notes organized and retain concepts:
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Obsidian / Notion:</strong> Markdown-based note-taking and knowledge graph linking for interconnected syllabus concepts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Anki:</strong> Spaced repetition flashcards with active recall algorithms for memorizing formulas, definitions, and syntax.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Zotero:</strong> Automatic reference and academic citation manager for research papers and thesis reports.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* E-Books & Textbooks Shelf */}
      {activeTab === 'ebooks-shelf' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/50 via-slate-900 to-slate-900 border border-indigo-500/30">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase text-indigo-400">
                Official Open-Access Engineering Library
              </span>
              <h3 className="text-xl font-bold text-white">Recommended Textbooks & Handbooks</h3>
              <p className="text-xs text-slate-400 max-w-xl">
                Free standard computer science and software engineering books for coursework, university semester exams, and placement preparation.
              </p>
            </div>
            <button
              onClick={() => setGlobalTab('ebooks')}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-2 shrink-0 transition-colors shadow-xs self-start sm:self-auto"
            >
              <span>Explore All 14+ E-Books</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EBOOKS_DATA.slice(0, 6).map(book => (
              <div
                key={book.id}
                className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 p-5 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400">
                      {book.category}
                    </span>
                    <span className="flex items-center gap-1 text-amber-300 font-bold text-xs">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {book.rating}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-100 text-base group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {book.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {book.description}
                  </p>

                  <div className="text-[11px] text-slate-500">
                    By {book.author} • {book.pages} pages
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveReadingBook(book)}
                    className="flex-1 py-1.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Preview</span>
                  </button>

                  <a
                    href={book.downloadUrl || book.readOnlineUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs"
                    title="Download / Open Source"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. GPA & CGPA Calculator */}
      {activeTab === 'gpa-calc' && (
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-center">
              <span className="text-xs font-semibold text-indigo-300 uppercase">Calculated Semester GPA</span>
              <h3 className="text-4xl font-black text-white mt-1">{gpaResult.gpa}</h3>
              <p className="text-xs text-slate-400 mt-1">Based on {gpaResult.totalCredits} total credits</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-xs font-semibold text-slate-400 uppercase">Equivalent Percentage</span>
              <h3 className="text-4xl font-black text-emerald-400 mt-1">{gpaResult.percentage}%</h3>
              <p className="text-xs text-slate-400 mt-1">Multiplier: {cgpaMultiplier}x</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase block">Percentage Formula Multiplier</span>
              <select
                value={cgpaMultiplier}
                onChange={e => setCgpaMultiplier(parseFloat(e.target.value))}
                className="w-full p-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 outline-none"
              >
                <option value={9.5}>CBSE / Standard (9.5x)</option>
                <option value={10}>Direct 10-Point Scale (10x)</option>
                <option value={8.9}>State Technical University (8.9x)</option>
              </select>
            </div>
          </div>

          {/* Courses Table */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-100 text-sm">Course Grades & Credit Hours</h4>
              <button
                onClick={addCourse}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Subject</span>
              </button>
            </div>

            <div className="space-y-2">
              {courses.map(course => (
                <div
                  key={course.id}
                  className="grid grid-cols-12 gap-3 items-center p-2.5 rounded-xl bg-slate-950 border border-slate-800"
                >
                  <div className="col-span-6">
                    <input
                      type="text"
                      value={course.name}
                      onChange={e => {
                        const val = e.target.value;
                        setCourses(prev => prev.map(c => c.id === course.id ? { ...c, name: val } : c));
                      }}
                      className="w-full bg-transparent text-xs text-slate-200 font-medium outline-none"
                    />
                  </div>
                  <div className="col-span-3">
                    <select
                      value={course.gradePoint}
                      onChange={e => {
                        const val = parseFloat(e.target.value);
                        setCourses(prev => prev.map(c => c.id === course.id ? { ...c, gradePoint: val } : c));
                      }}
                      className="w-full p-1.5 rounded bg-slate-900 border border-slate-700 text-xs text-slate-200 outline-none"
                    >
                      <option value={10}>O / A+ (10 pts)</option>
                      <option value={9}>A (9 pts)</option>
                      <option value={8}>B+ (8 pts)</option>
                      <option value={7}>B (7 pts)</option>
                      <option value={6}>C (6 pts)</option>
                      <option value={5}>P (5 pts)</option>
                      <option value={0}>F (0 pts)</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={course.credits}
                      onChange={e => {
                        const val = parseInt(e.target.value) || 1;
                        setCourses(prev => prev.map(c => c.id === course.id ? { ...c, credits: val } : c));
                      }}
                      className="w-full p-1.5 rounded bg-slate-900 border border-slate-700 text-xs text-slate-200 text-center outline-none"
                    />
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <button
                      onClick={() => removeCourse(course.id)}
                      className="p-1 text-slate-500 hover:text-rose-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. Student Software Discounts */}
      {activeTab === 'discounts' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: 'GitHub Student Developer Pack',
                benefit: 'Free GitHub Pro, domain names, Canva Pro, $100 DigitalOcean credit, JetBrains IDEs & 50+ developer utilities free.',
                req: 'College .edu / university student email or student ID card',
                link: 'https://education.github.com/pack'
              },
              {
                name: 'JetBrains All Products Pack',
                benefit: 'Free access to professional IDEs including IntelliJ IDEA Ultimate, PyCharm Pro, WebStorm, and CLion.',
                req: 'Student ID card or university email verification',
                link: 'https://www.jetbrains.com/community/education/'
              },
              {
                name: 'Notion for Education',
                benefit: 'Free Plus plan upgrade with unlimited file uploads, version history, and collaborator invites.',
                req: 'College / university email address',
                link: 'https://www.notion.so/product/notion-for-education'
              },
              {
                name: 'Spotify & Apple Music Student',
                benefit: '50% off monthly music streaming with free Hulu (US) or discounts on Apple TV+ bundle.',
                req: 'SheerID student status verification',
                link: 'https://www.spotify.com/student/'
              },
              {
                name: 'Figma for Education',
                benefit: 'Free Figma Professional tier for design, wireframing, and UI prototype building.',
                req: 'Proof of enrollment in school/college',
                link: 'https://www.figma.com/education/'
              },
              {
                name: 'AWS Educate & Google Cloud',
                benefit: '$100+ free cloud hosting credits, hands-on training labs, and certification course vouchers.',
                req: 'Student account creation',
                link: 'https://aws.amazon.com/education/awseducate/'
              }
            ].map((pack, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 font-mono">
                    100% Free Benefit
                  </span>
                  <h4 className="font-bold text-slate-100 text-sm">{pack.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pack.benefit}</p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    <strong>Eligibility:</strong> {pack.req}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <a
                    href={pack.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    <span>Claim Student Offer</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. College Project Idea Generator */}
      {activeTab === 'project-generator' && (
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Semester Project Specification Generator</h3>
            <p className="text-xs text-slate-400">
              Need a standout mini or final-year capstone project? Select your domain and generate an engineering blueprint with deliverables:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Domain</label>
                <select
                  value={selectedDomain}
                  onChange={e => setSelectedDomain(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 outline-none"
                >
                  <option value="Web Development">Fullstack Web Development</option>
                  <option value="AI / Machine Learning">AI & Machine Learning</option>
                  <option value="Python & Automation">Python Automation & Scripting</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={e => setSelectedDifficulty(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 outline-none"
                >
                  <option value="Beginner">Beginner (1st/2nd Year)</option>
                  <option value="Intermediate">Intermediate (3rd Year)</option>
                  <option value="Advanced">Advanced (Final Year Capstone)</option>
                </select>
              </div>
            </div>

            <button
              onClick={generateProjectBrief}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-2 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate Project Blueprint</span>
            </button>
          </div>

          {generatedBrief && (
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-indigo-500/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-indigo-400">
                  {selectedDomain} • {selectedDifficulty}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                  Approved College Scope
                </span>
              </div>

              <h4 className="text-xl font-bold text-white">{generatedBrief.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{generatedBrief.desc}</p>

              <div className="space-y-1.5 pt-2 border-t border-slate-800">
                <span className="text-xs font-bold text-slate-200">Key Functional Requirements:</span>
                {generatedBrief.features.map((f: string, i: number) => (
                  <div key={i} className="text-xs text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {generatedBrief.tech.map((t: string, i: number) => (
                  <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-800 text-indigo-300 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* In-app E-Book Reader Modal */}
      {activeReadingBook && (
        <EBookReaderModal
          book={activeReadingBook}
          onClose={() => setActiveReadingBook(null)}
        />
      )}
    </div>
  );
};
