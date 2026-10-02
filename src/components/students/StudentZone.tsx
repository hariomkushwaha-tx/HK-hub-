import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EBOOKS_DATA } from '../../data/ebooksData';
import { EBookReaderModal } from '../ebooks/EBookReaderModal';
import { EBookItem } from '../../types';
import { GpaCalculator } from './GpaCalculator';
import { ExamRevisionHub } from './ExamRevisionHub';
import { ProjectBlueprintGenerator } from './ProjectBlueprintGenerator';
import { CareerRoadmapTracker } from './CareerRoadmapTracker';
import { ResumeBulletBuilder } from './ResumeBulletBuilder';
import { StudyPomodoroTimer } from './StudyPomodoroTimer';
import { LaptopGuide } from './LaptopGuide';
import { StudentDiscountsDirectory } from './StudentDiscountsDirectory';
import { DsaPatternsVisualizer } from './DsaPatternsVisualizer';
import { SystemDesignHub } from './SystemDesignHub';
import { JobApplicationTracker } from './JobApplicationTracker';
import { 
  GraduationCap, 
  Calculator, 
  Laptop, 
  FolderGit2, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Award, 
  BookMarked, 
  Clock, 
  FileText, 
  Star, 
  Download, 
  ArrowRight,
  Compass,
  Code2,
  Boxes,
  Briefcase
} from 'lucide-react';

export const StudentZone: React.FC = () => {
  const { setActiveTab: setGlobalTab, currentLanguage } = useApp();
  const [activeTab, setActiveTab] = useState<
    'revision' | 'dsa-patterns' | 'sysdesign' | 'job-tracker' | 'gpa-calc' | 'project-generator' | 'roadmap' | 'pomodoro' | 'resume' | 'discounts' | 'laptop' | 'ebooks-shelf'
  >('revision');

  const [activeReadingBook, setActiveReadingBook] = useState<EBookItem | null>(null);

  const isHindi = currentLanguage === 'hi';
  const isHinglish = currentLanguage === 'hinglish';

  const TABS = [
    { id: 'revision', label: isHindi ? 'परीक्षा रिवीजन हब' : isHinglish ? 'Exam Revision Hub' : 'Exam Revision Hub', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'dsa-patterns', label: isHindi ? '14 DSA पैटर्न्स' : '14 DSA Patterns', icon: <Code2 className="w-4 h-4" /> },
    { id: 'sysdesign', label: isHindi ? 'सिस्टम डिज़ाइन' : 'System Design', icon: <Boxes className="w-4 h-4" /> },
    { id: 'job-tracker', label: isHindi ? 'इंटर्नशिप व जॉब ट्रैकर' : isHinglish ? 'Job & Internship Tracker' : 'Internship & Job Tracker', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'gpa-calc', label: isHindi ? 'GPA कैलकुलेटर' : 'GPA & Target Planner', icon: <Calculator className="w-4 h-4" /> },
    { id: 'project-generator', label: isHindi ? 'कॉलेज प्रोजेक्ट आर्किटेक्ट' : isHinglish ? 'College Project Architect' : 'College Project Architect', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'roadmap', label: isHindi ? '4-वर्षीय करियर रोडमैप' : '4-Year Career Roadmap', icon: <Compass className="w-4 h-4" /> },
    { id: 'pomodoro', label: isHindi ? 'फोकस स्टडी टाइमर' : 'Focus Study Timer', icon: <Clock className="w-4 h-4" /> },
    { id: 'resume', label: isHindi ? 'ATS रेज़्यूमे बिल्डर' : 'ATS Resume Builder', icon: <FileText className="w-4 h-4" /> },
    { id: 'discounts', label: isHindi ? 'मुफ़्त स्टूडेंट पैक्स' : isHinglish ? 'Free Student Packs' : 'Free Student Packs', icon: <Award className="w-4 h-4" /> },
    { id: 'laptop', label: isHindi ? 'लैपटॉप बाइंग गाइड' : 'Laptop Specs Guide', icon: <Laptop className="w-4 h-4" /> },
    { id: 'ebooks-shelf', label: isHindi ? 'टेक्स्टबुक्स शेल्फ' : 'Textbooks Shelf', icon: <BookMarked className="w-4 h-4" /> },
  ] as const;

  return (
    <div id="student-zone-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Editorial Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          <span>{isHindi ? 'विद्यार्थी डिजिटल एवं शैक्षणिक एक्सेलरेटर' : 'Student Digital & Academic Accelerator'}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
          {isHindi ? 'विद्यार्थी टेक एवं अध्ययन ज़ोन' : isHinglish ? 'Student Tech & Study Zone' : 'Student Tech & Academic Zone'}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {isHindi 
            ? 'कक्षा 6 से 12 तक के नोट्स, 14 DSA मास्टर पैटर्न्स, सिस्टम डिज़ाइन, 4-वर्षीय इंजीनियरिंग करियर रोडमैप, क्रेडिट-वेटेड GPA कैलकुलेटर और 1,530+ मुफ़्त किताबें।'
            : isHinglish
            ? 'Class 6-12 revision notes, 14 DSA master patterns, system design, 4-year engineering roadmap, GPA calculator aur 1,530+ free books.'
            : 'High-yield exam cheatsheets, credit-weighted SGPA & target CGPA forecasters, capstone project blueprints, 4-year engineering roadmaps, and free student developer licenses.'
          }
        </p>
      </div>

      {/* Horizontal Scroll Navigation Bar with Single-Line Controls */}
      <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-1 scrollbar-none">
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs max-w-full">
          {TABS.map(tab => (
            <button
              key={tab.id}
              id={`student-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab View Rendering */}
      <div className="pt-2">
        {/* 1. Exam Revision Hub */}
        {activeTab === 'revision' && <ExamRevisionHub />}

        {/* 2. 14 Master DSA Patterns */}
        {activeTab === 'dsa-patterns' && <DsaPatternsVisualizer />}

        {/* 3. System Design Architecture Blueprints */}
        {activeTab === 'sysdesign' && <SystemDesignHub />}

        {/* 4. Internship & Job Application Kanban Tracker */}
        {activeTab === 'job-tracker' && <JobApplicationTracker />}

        {/* 5. GPA & CGPA Calculator with Target Forecaster */}
        {activeTab === 'gpa-calc' && <GpaCalculator />}

        {/* 6. College Project Generator & SRS Architect */}
        {activeTab === 'project-generator' && <ProjectBlueprintGenerator />}

        {/* 7. 4-Year Engineering Career Roadmap Tracker */}
        {activeTab === 'roadmap' && <CareerRoadmapTracker />}

        {/* 8. Study Pomodoro Timer */}
        {activeTab === 'pomodoro' && <StudyPomodoroTimer />}

        {/* 6. ATS Resume Bullet Generator */}
        {activeTab === 'resume' && <ResumeBulletBuilder />}

        {/* 7. Student Software Developer Packs & Discounts */}
        {activeTab === 'discounts' && <StudentDiscountsDirectory />}

        {/* 8. Laptop Hardware & Spec Advisor */}
        {activeTab === 'laptop' && <LaptopGuide />}

        {/* 9. E-Books & Textbooks Shelf */}
        {activeTab === 'ebooks-shelf' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400">
                  Engineering Textbook Library
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Recommended Textbooks &amp; Handbooks
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl">
                  Free standard engineering textbooks for university semester exams, Gate/competitive assessments, and placement revision.
                </p>
              </div>
              <button
                onClick={() => setGlobalTab('ebooks')}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shrink-0 transition-colors shadow-xs self-start sm:self-auto"
              >
                <span>Browse Full 14+ Books</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EBOOKS_DATA.slice(0, 6).map(book => (
                <div
                  key={book.id}
                  className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 p-5 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[10px] font-mono font-bold uppercase text-blue-600 dark:text-blue-400">
                        {book.category}
                      </span>
                      <span className="flex items-center gap-1 text-amber-500 dark:text-amber-300 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        {book.rating}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {book.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {book.description}
                    </p>

                    <div className="text-[11px] text-slate-400 dark:text-slate-500">
                      By {book.author} · {book.pages} pages
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveReadingBook(book)}
                      className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Preview</span>
                    </button>

                    <a
                      href={book.downloadUrl || book.readOnlineUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs"
                      title="Download / External Link"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

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
