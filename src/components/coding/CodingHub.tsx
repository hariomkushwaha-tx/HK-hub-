import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { CODING_LESSONS, CODING_SANDBOX_TEMPLATES, STUDENT_PROJECT_IDEAS } from '../../data/codingCurriculum';
import { copyToClipboard } from '../../utils/clipboard';
import { 
  Code2, 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  BookOpen, 
  Terminal, 
  FolderGit2, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';

export const CodingHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'playground' | 'lessons' | 'projects' | 'roadmap'>('playground');
  
  // Playground State
  const [activeSnippetKey, setActiveSnippetKey] = useState<string>('counter');
  const [htmlCode, setHtmlCode] = useState<string>(CODING_SANDBOX_TEMPLATES.counter.html);
  const [cssCode, setCssCode] = useState<string>(CODING_SANDBOX_TEMPLATES.counter.css);
  const [jsCode, setJsCode] = useState<string>(CODING_SANDBOX_TEMPLATES.counter.js);
  const [activeEditorTab, setActiveEditorTab] = useState<'html' | 'css' | 'js'>('html');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [copiedLessonCode, setCopiedLessonCode] = useState<boolean>(false);
  const [srcDocContent, setSrcDocContent] = useState<string>('');

  // Lesson State
  const [selectedLessonId, setSelectedLessonId] = useState<string>(CODING_LESSONS[0].id);
  const currentLesson = CODING_LESSONS.find(l => l.id === selectedLessonId) || CODING_LESSONS[0];

  // Update iframe preview using srcDoc safely
  const runCode = () => {
    const documentContent = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
      ${cssCode}
    </style>
  </head>
  <body>
    ${htmlCode}
    <script>
      try {
        ${jsCode}
      } catch (err) {
        console.error(err);
      }
    <\/script>
  </body>
</html>`;
    setSrcDocContent(documentContent);
  };

  useEffect(() => {
    runCode();
  }, [htmlCode, cssCode, jsCode]);

  const loadTemplate = (key: string) => {
    const tpl = CODING_SANDBOX_TEMPLATES[key];
    if (tpl) {
      setActiveSnippetKey(key);
      setHtmlCode(tpl.html);
      setCssCode(tpl.css);
      setJsCode(tpl.js);
    }
  };

  const copyCurrentCode = async () => {
    const combined = `<!-- HTML -->\n${htmlCode}\n\n/* CSS */\n${cssCode}\n\n// JavaScript\n${jsCode}`;
    await copyToClipboard(combined);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div id="coding-hub-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
          <Code2 className="w-3.5 h-3.5" />
          <span>Interactive Developer Academy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
          Coding & Engineering Hub
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Master web development, JavaScript, and computer science fundamentals. Test and run code directly in your browser with our live interactive playground.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-center">
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 overflow-x-auto max-w-full">
          {[
            { id: 'playground', label: 'Live Code Playground', icon: <Terminal className="w-4 h-4" /> },
            { id: 'lessons', label: 'Curriculum & Lessons', icon: <BookOpen className="w-4 h-4" /> },
            { id: 'projects', label: 'Project Blueprints', icon: <FolderGit2 className="w-4 h-4" /> },
            { id: 'roadmap', label: 'Developer Roadmaps', icon: <Layers className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              id={`coding-tab-${tab.id}`}
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

      {/* 1. Live Code Playground */}
      {activeTab === 'playground' && (
        <div className="space-y-4">
          {/* Preset templates selector */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-300">Templates:</span>
              <button
                onClick={() => loadTemplate('counter')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                  activeSnippetKey === 'counter' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Interactive Counter
              </button>
              <button
                onClick={() => loadTemplate('clock')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                  activeSnippetKey === 'clock' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Digital Clock
              </button>
              <button
                onClick={() => loadTemplate('todo')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                  activeSnippetKey === 'todo' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Todo Mini App
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={runCode}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Run Code</span>
              </button>
              <button
                onClick={copyCurrentCode}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 flex items-center gap-1"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>
          </div>

          {/* Editor & Preview Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Code Editor Surface */}
            <div className="flex flex-col rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden h-[480px]">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  {(['html', 'css', 'js'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveEditorTab(tab)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase ${
                        activeEditorTab === tab
                          ? 'bg-indigo-600 text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <span className="text-[11px] font-mono text-slate-500">Live Browser Engine</span>
              </div>

              <div className="flex-1 p-2 bg-slate-950/50">
                {activeEditorTab === 'html' && (
                  <textarea
                    rows={18}
                    value={htmlCode}
                    onChange={e => setHtmlCode(e.target.value)}
                    className="w-full h-full p-3 font-mono text-xs text-slate-100 bg-transparent outline-none resize-none"
                    spellCheck={false}
                  />
                )}
                {activeEditorTab === 'css' && (
                  <textarea
                    rows={18}
                    value={cssCode}
                    onChange={e => setCssCode(e.target.value)}
                    className="w-full h-full p-3 font-mono text-xs text-indigo-300 bg-transparent outline-none resize-none"
                    spellCheck={false}
                  />
                )}
                {activeEditorTab === 'js' && (
                  <textarea
                    rows={18}
                    value={jsCode}
                    onChange={e => setJsCode(e.target.value)}
                    className="w-full h-full p-3 font-mono text-xs text-emerald-300 bg-transparent outline-none resize-none"
                    spellCheck={false}
                  />
                )}
              </div>
            </div>

            {/* Live Render Output Window */}
            <div className="flex flex-col rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden h-[480px]">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-slate-300">Live Preview Output</span>
                </div>
                <button
                  onClick={runCode}
                  className="text-xs text-slate-400 hover:text-indigo-400 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Refresh</span>
                </button>
              </div>
              <div className="flex-1 bg-white">
                <iframe
                  title="Code Preview"
                  srcDoc={srcDocContent}
                  sandbox="allow-scripts"
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Curriculum & Lessons */}
      {activeTab === 'lessons' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Lessons List */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 mb-2">
              Structured Modules
            </h4>
            {CODING_LESSONS.map(lesson => (
              <div
                key={lesson.id}
                onClick={() => setSelectedLessonId(lesson.id)}
                className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                  selectedLessonId === lesson.id
                    ? 'bg-indigo-600/20 border-indigo-500/50 text-white'
                    : 'bg-slate-900 border-slate-800 hover:bg-slate-800/60 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-semibold uppercase">
                    {lesson.language}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">{lesson.level}</span>
                </div>
                <h5 className="font-bold text-sm">{lesson.title}</h5>
                <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{lesson.description}</p>
              </div>
            ))}
          </div>

          {/* Lesson Content Area */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="space-y-2 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-indigo-600/20 text-indigo-300 font-semibold">
                  {currentLesson.language}
                </span>
                <span className="text-xs text-slate-400 font-medium">• {currentLesson.level} Level</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-100">{currentLesson.title}</h3>
              <p className="text-xs text-slate-400">{currentLesson.description}</p>
            </div>

            <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-4">
              {currentLesson.content}
            </div>

            {currentLesson.codeExample && (
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-slate-400">Code Syntax Example</span>
                  <button
                    onClick={async () => {
                      await copyToClipboard(currentLesson.codeExample);
                      setCopiedLessonCode(true);
                      setTimeout(() => setCopiedLessonCode(false), 2000);
                    }}
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    {copiedLessonCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedLessonCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto">
                  {currentLesson.codeExample}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. Project Blueprints */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STUDENT_PROJECT_IDEAS.map((proj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-indigo-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase font-mono ${
                      proj.level === 'Beginner'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : proj.level === 'Intermediate'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-purple-500/20 text-purple-300'
                    }`}>
                      {proj.level}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Blueprint #{idx + 1}</span>
                  </div>

                  <h4 className="font-bold text-slate-100 text-base">{proj.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{proj.description}</p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-semibold text-slate-300 block">Core Features:</span>
                    {proj.features.map((f, i) => (
                      <div key={i} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Developer Roadmaps */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Web Development Career Roadmap</h3>
            <p className="text-xs text-slate-400">
              Step-by-step milestones to transform from absolute beginner to industry-ready engineer.
            </p>

            <div className="space-y-6 pt-4">
              {[
                {
                  step: 'Phase 1',
                  title: 'Core Foundations & Web Semantics',
                  desc: 'HTML5 semantic tags, CSS box model, Flexbox, CSS Grid, and responsive design fundamentals for mobile screens.',
                  tools: 'HTML, CSS, Git basics, VS Code'
                },
                {
                  step: 'Phase 2',
                  title: 'Programming Logic & JavaScript',
                  desc: 'Variables, loops, DOM manipulation, asynchronous JavaScript (Fetch API, Promises), and ES6+ modern syntax.',
                  tools: 'JavaScript, Chrome DevTools, GitHub'
                },
                {
                  step: 'Phase 3',
                  title: 'Modern Frontend Frameworks',
                  desc: 'Component architecture, state management, routing, Tailwind CSS, and build pipelines.',
                  tools: 'React, TypeScript, Vite, Tailwind CSS'
                },
                {
                  step: 'Phase 4',
                  title: 'Backend Services & Cloud Databases',
                  desc: 'REST APIs, server-side logic, relational & document databases, authentication (JWT/OAuth), and deployment.',
                  tools: 'Node.js, Express, PostgreSQL / Firestore, Cloud Run'
                }
              ].map((phase, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="px-2.5 py-1 rounded-lg bg-indigo-600/20 text-indigo-300 text-xs font-bold font-mono shrink-0">
                    {phase.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-slate-100">{phase.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{phase.desc}</p>
                    <span className="text-[11px] font-mono text-cyan-400 block pt-1">
                      Key Skills: {phase.tools}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
