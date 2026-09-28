import React, { useState, useMemo } from 'react';
import { Plus, Trash2, Copy, Check, Calculator, Target, Award, ArrowRight } from 'lucide-react';

interface CourseGrade {
  id: string;
  name: string;
  gradePoint: number;
  credits: number;
}

export const GpaCalculator: React.FC = () => {
  // Semester SGPA Courses
  const [courses, setCourses] = useState<CourseGrade[]>([
    { id: '1', name: 'Data Structures & Algorithms', gradePoint: 10, credits: 4 },
    { id: '2', name: 'Computer Organization & Architecture', gradePoint: 9, credits: 4 },
    { id: '3', name: 'Database Management Systems', gradePoint: 9, credits: 3 },
    { id: '4', name: 'Discrete Mathematics', gradePoint: 8, credits: 3 },
    { id: '5', name: 'DSA Laboratory', gradePoint: 10, credits: 2 },
  ]);

  const [cgpaMultiplier, setCgpaMultiplier] = useState<number>(9.5);
  const [copied, setCopied] = useState(false);

  // Target CGPA Planner States
  const [currentCgpa, setCurrentCgpa] = useState<number>(7.8);
  const [completedCredits, setCompletedCredits] = useState<number>(60);
  const [targetCgpa, setTargetCgpa] = useState<number>(8.5);
  const [remainingCredits, setRemainingCredits] = useState<number>(60);

  // Calculate Semester SGPA
  const sgpaResult = useMemo(() => {
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
      totalPoints,
      percentage: parseFloat((gpa * cgpaMultiplier).toFixed(2))
    };
  }, [courses, cgpaMultiplier]);

  // Calculate Required SGPA for Target CGPA
  const targetRequiredSgpa = useMemo(() => {
    const totalCreditsAll = completedCredits + remainingCredits;
    if (totalCreditsAll === 0 || remainingCredits === 0) return 0;
    const requiredTotalPoints = targetCgpa * totalCreditsAll;
    const currentPoints = currentCgpa * completedCredits;
    const neededPoints = requiredTotalPoints - currentPoints;
    const requiredSgpa = neededPoints / remainingCredits;
    return parseFloat(requiredSgpa.toFixed(2));
  }, [currentCgpa, completedCredits, targetCgpa, remainingCredits]);

  const addCourse = () => {
    setCourses(prev => [
      ...prev,
      { id: Date.now().toString(), name: `Subject ${prev.length + 1}`, gradePoint: 9, credits: 3 }
    ]);
  };

  const removeCourse = (id: string) => {
    if (courses.length <= 1) return;
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  const handleCopySummary = () => {
    const lines = [
      `=== HK VELORA Academic SGPA Report ===`,
      `Semester SGPA: ${sgpaResult.gpa} / 10.0`,
      `Equivalent Percentage: ${sgpaResult.percentage}% (Formula: ${cgpaMultiplier}x)`,
      `Total Credit Hours: ${sgpaResult.totalCredits}`,
      `--------------------------------------`,
      ...courses.map((c, i) => `${i + 1}. ${c.name} | Credits: ${c.credits} | Grade Point: ${c.gradePoint}`),
      `--------------------------------------`,
      `Generated via HK VELORA Student Zone`
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* 1. Top Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Semester SGPA
            </span>
            <div className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 tabular-nums">
              {sgpaResult.gpa.toFixed(2)}
            </div>
          </div>
          <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
            Across <span className="font-semibold text-slate-700 dark:text-slate-300">{sgpaResult.totalCredits} credit hours</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Equivalent Percentage
            </span>
            <div className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums">
              {sgpaResult.percentage.toFixed(1)}%
            </div>
          </div>
          <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
            Multiplier scale: <span className="font-semibold text-slate-700 dark:text-slate-300">{cgpaMultiplier}×</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-3">
          <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider block">
            University Formula
          </label>
          <select
            value={cgpaMultiplier}
            onChange={e => setCgpaMultiplier(parseFloat(e.target.value))}
            className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value={9.5}>CBSE / AICTE / UGC Standard (9.5×)</option>
            <option value={10}>Direct 10-Point Scale (10.0×)</option>
            <option value={8.9}>VTU / State Technical (8.9×)</option>
            <option value={9.0}>Autonomous Institutes (9.0×)</option>
          </select>
          <button
            onClick={handleCopySummary}
            className="w-full py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Report Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Grade Report</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Course Table */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Semester Subjects &amp; Credit Allocations
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Enter subject titles, letter grade points, and course credit weights:
            </p>
          </div>
          <button
            onClick={addCourse}
            className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Subject</span>
          </button>
        </div>

        <div className="space-y-2">
          {courses.map(course => (
            <div
              key={course.id}
              className="grid grid-cols-12 gap-2 sm:gap-3 items-center p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80"
            >
              <div className="col-span-5 sm:col-span-6">
                <input
                  type="text"
                  value={course.name}
                  onChange={e => {
                    const val = e.target.value;
                    setCourses(prev => prev.map(c => c.id === course.id ? { ...c, name: val } : c));
                  }}
                  placeholder="Subject name..."
                  className="w-full bg-transparent text-xs text-slate-800 dark:text-slate-200 font-medium outline-none focus:underline"
                />
              </div>

              <div className="col-span-4 sm:col-span-3">
                <select
                  value={course.gradePoint}
                  onChange={e => {
                    const val = parseFloat(e.target.value);
                    setCourses(prev => prev.map(c => c.id === course.id ? { ...c, gradePoint: val } : c));
                  }}
                  className="w-full p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 outline-none"
                >
                  <option value={10}>O / A+ (10 pts)</option>
                  <option value={9}>A (9 pts)</option>
                  <option value={8}>B+ (8 pts)</option>
                  <option value={7}>B (7 pts)</option>
                  <option value={6}>C (6 pts)</option>
                  <option value={5}>P / Pass (5 pts)</option>
                  <option value={0}>F / Reappear (0 pts)</option>
                </select>
              </div>

              <div className="col-span-2">
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min={1}
                    max={12}
                    value={course.credits}
                    onChange={e => {
                      const val = parseInt(e.target.value) || 1;
                      setCourses(prev => prev.map(c => c.id === course.id ? { ...c, credits: val } : c));
                    }}
                    className="w-full p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 text-center outline-none tabular-nums"
                  />
                  <span className="hidden sm:inline text-[11px] text-slate-400">cr</span>
                </div>
              </div>

              <div className="col-span-1 flex justify-end">
                <button
                  onClick={() => removeCourse(course.id)}
                  disabled={courses.length <= 1}
                  className="p-1.5 text-slate-400 hover:text-rose-500 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  title="Remove course"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Target CGPA Planner (Academic Goal Forecaster) */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Target CGPA Goal Forecaster
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Know the exact SGPA you must score in remaining semesters to achieve your dream placement or graduation cutoff:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
              Current CGPA
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              value={currentCgpa}
              onChange={e => setCurrentCgpa(parseFloat(e.target.value) || 0)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-slate-100 tabular-nums outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
              Completed Credits
            </label>
            <input
              type="number"
              min="0"
              max="240"
              value={completedCredits}
              onChange={e => setCompletedCredits(parseInt(e.target.value) || 0)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-slate-100 tabular-nums outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
              Target Final CGPA
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              value={targetCgpa}
              onChange={e => setTargetCgpa(parseFloat(e.target.value) || 0)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-slate-100 tabular-nums outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1">
              Remaining Credits
            </label>
            <input
              type="number"
              min="1"
              max="240"
              value={remainingCredits}
              onChange={e => setRemainingCredits(parseInt(e.target.value) || 1)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-slate-100 tabular-nums outline-none"
            />
          </div>
        </div>

        {/* Forecast Output Badge */}
        <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
          targetRequiredSgpa <= 10 && targetRequiredSgpa >= 0
            ? 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50'
            : 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/50'
        }`}>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Required Average SGPA in Future Semesters
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className={`text-2xl font-extrabold tabular-nums ${
                targetRequiredSgpa <= 10 && targetRequiredSgpa >= 0 ? 'text-blue-600 dark:text-blue-400' : 'text-rose-600 dark:text-rose-400'
              }`}>
                {targetRequiredSgpa > 10 ? 'Impossible (> 10.0)' : `${targetRequiredSgpa.toFixed(2)} / 10.0`}
              </span>
              <span className="text-xs text-slate-500">
                {targetRequiredSgpa <= 10 && targetRequiredSgpa >= 0
                  ? `Maintain this across remaining ${remainingCredits} credits to secure ${targetCgpa} CGPA.`
                  : `Even with straight 10.0 SGPA, target ${targetCgpa} cannot be reached in ${remainingCredits} credits.`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
