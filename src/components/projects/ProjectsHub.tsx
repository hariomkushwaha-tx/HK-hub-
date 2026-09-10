import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { ProjectShowcaseItem } from '../../types';
import { 
  FolderGit2, 
  Plus, 
  ThumbsUp, 
  ExternalLink, 
  Github, 
  Search, 
  X, 
  Sparkles, 
  CheckCircle2, 
  Code2,
  Calendar
} from 'lucide-react';

export const ProjectsHub: React.FC = () => {
  const { projects, addProject, toggleLikeProject, theme } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);

  // Form states
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCategory, setNewCategory] = useState<'Web' | 'AI' | 'Mobile' | 'Python' | 'DevTool' | 'IoT'>('Web');
  const [newTech, setNewTech] = useState('React, TypeScript, Tailwind');
  const [newGithub, setNewGithub] = useState('');
  const [newLive, setNewLive] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch = !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDescription.trim()) return;

    const techArray = newTech.split(',').map(t => t.trim()).filter(Boolean);

    addProject({
      title: newTitle,
      description: newDescription,
      category: newCategory,
      technologies: techArray.length > 0 ? techArray : ['Web Tech'],
      githubUrl: newGithub || undefined,
      liveDemoUrl: newLive || undefined,
      authorName: newAuthor || 'Student Developer',
      authorUsername: (newAuthor || 'student').toLowerCase().replace(/\s+/g, '_')
    });

    // Reset and close
    setNewTitle('');
    setNewDescription('');
    setNewGithub('');
    setNewLive('');
    setNewAuthor('');
    setIsSubmitModalOpen(false);
  };

  return (
    <div id="projects-hub-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Community Innovation Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
          Student & Developer Projects
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Showcase your web apps, AI models, developer tools, and academic software. Discover real-world blueprints created by peers worldwide.
        </p>
        <div className="pt-2">
          <button
            id="open-submit-project-modal-btn"
            onClick={() => setIsSubmitModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs inline-flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02]"
          >
            <Plus className="w-4 h-4" />
            <span>Showcase Your Project</span>
          </button>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {['all', 'Web', 'AI', 'Mobile', 'Python', 'DevTool'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Domains' : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search projects by tech or name..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-indigo-500/40 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 font-mono px-2 py-0.5 rounded bg-slate-800">
                  {project.category}
                </span>
                <button
                  onClick={() => toggleLikeProject(project.id)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <ThumbsUp className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{project.likes}</span>
                </button>
              </div>

              <div>
                <h3 className="font-bold text-slate-100 text-base">{project.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-1 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-1">
                {project.technologies.map((t, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                By <strong className="text-slate-300">@{project.authorUsername}</strong>
              </span>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                    title="View Source Code"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-semibold flex items-center gap-1"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submission Modal */}
      {isSubmitModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setIsSubmitModalOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 space-y-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-base text-slate-100 flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-indigo-400" />
                <span>Showcase Your Project</span>
              </h3>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 block">Project Title *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="e.g. Campus Connect Study Portal"
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1 block">Category</label>
                  <select
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 outline-none"
                  >
                    <option value="Web">Web Application</option>
                    <option value="AI">AI / Machine Learning</option>
                    <option value="Mobile">Mobile Application</option>
                    <option value="Python">Python Utility</option>
                    <option value="DevTool">Developer Tool</option>
                    <option value="IoT">IoT / Embedded</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1 block">Your Name / Handle</label>
                  <input
                    type="text"
                    value={newAuthor}
                    onChange={e => setNewAuthor(e.target.value)}
                    placeholder="e.g. Alex Kumar"
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 block">Tech Stack (comma separated)</label>
                <input
                  type="text"
                  value={newTech}
                  onChange={e => setNewTech(e.target.value)}
                  placeholder="e.g. React, Tailwind CSS, Python, SQLite"
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 block">Short Description & Highlights *</label>
                <textarea
                  rows={3}
                  required
                  value={newDescription}
                  onChange={e => setNewDescription(e.target.value)}
                  placeholder="What problem does your project solve? What did you learn building it?"
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1 block">GitHub Repository URL</label>
                  <input
                    type="url"
                    value={newGithub}
                    onChange={e => setNewGithub(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1 block">Live Demo URL</label>
                  <input
                    type="url"
                    value={newLive}
                    onChange={e => setNewLive(e.target.value)}
                    placeholder="https://myproject.app"
                    className="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shadow-md shadow-indigo-600/20"
              >
                Publish Project to HK VELORA
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
