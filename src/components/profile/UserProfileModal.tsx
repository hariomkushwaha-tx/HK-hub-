import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ALL_TOOLS } from '../../data/toolsData';
import { COMPREHENSIVE_GUIDES } from '../../data/guidesData';
import { 
  X, 
  User, 
  Star, 
  Award, 
  Code2, 
  Wrench, 
  BookOpen, 
  Check, 
  Trash2, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const UserProfileModal: React.FC = () => {
  const { 
    userModalOpen, 
    setUserModalOpen, 
    userProfile, 
    updateProfile, 
    bookmarkedIds, 
    openTool, 
    openGuide, 
    theme 
  } = useApp();

  const displayName = userProfile?.name || userProfile?.fullName || 'Alex Student';
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(displayName);
  const [username, setUsername] = useState(userProfile?.username || 'tech_explorer');
  const [bio, setBio] = useState(userProfile?.bio || '');
  const [skillsInput, setSkillsInput] = useState((userProfile?.skills || []).join(', '));

  if (!userModalOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const skills = skillsInput.split(',').map(s => s.trim()).filter(Boolean);
    updateProfile({
      name,
      fullName: name,
      username: username.toLowerCase().replace(/\s+/g, '_'),
      bio,
      skills
    });
    setIsEditing(false);
  };

  const savedTools = ALL_TOOLS.filter(t => (bookmarkedIds || []).includes(t.id));
  const savedGuides = COMPREHENSIVE_GUIDES.filter(g => (bookmarkedIds || []).includes(g.id));

  return (
    <div
      id="user-profile-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={() => setUserModalOpen(false)}
    >
      <div
        id="user-profile-dialog"
        className={`w-full max-w-2xl max-h-[90vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden ${
          theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-sm">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="font-bold text-base">{displayName}</h3>
              <p className="text-xs text-slate-400">@{userProfile?.username || 'tech_explorer'} • Student & Tech Explorer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
              >
                Edit Profile
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs"
              >
                Cancel
              </button>
            )}
            <button
              onClick={() => setUserModalOpen(false)}
              className="p-1 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {/* Edit Form or Profile Bio */}
          {isEditing ? (
            <form onSubmit={handleSaveProfile} className="space-y-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Handle / Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Bio</label>
                <input
                  type="text"
                  value={bio}
                  onChange={e => setBio(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Skills (Comma separated)</label>
                <input
                  type="text"
                  value={skillsInput}
                  onChange={e => setSkillsInput(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-xs"
              >
                Save Profile Updates
              </button>
            </form>
          ) : (
            <div className="space-y-3">
              <p className="text-slate-300 text-sm leading-relaxed">{userProfile.bio}</p>
              <div className="flex flex-wrap gap-1.5">
                {userProfile.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-mono font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Badges / Achievements */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Learner Achievements</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { title: 'Tool Master', desc: 'Explored 30+ tools', icon: '🛠️' },
                { title: 'Code Explorer', desc: 'Ran playground code', icon: '💻' },
                { title: 'Privacy First', desc: 'Client-side processing', icon: '🔒' },
                { title: 'Scholar', desc: 'Saved student guides', icon: '🎓' },
              ].map((b, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                  <span className="text-xl block">{b.icon}</span>
                  <span className="font-bold text-xs text-slate-200 block">{b.title}</span>
                  <span className="text-[10px] text-slate-500 block">{b.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bookmarked Tools */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Saved Tools ({savedTools.length})</span>
              </h4>
            </div>

            {savedTools.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {savedTools.map(tool => (
                  <div
                    key={tool.id}
                    onClick={() => {
                      openTool(tool.id);
                      setUserModalOpen(false);
                    }}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 cursor-pointer flex items-center justify-between"
                  >
                    <div className="min-w-0 pr-2">
                      <p className="font-semibold text-xs text-slate-200 truncate">{tool.name}</p>
                      <p className="text-[11px] text-slate-400 truncate">{tool.category}</p>
                    </div>
                    <span className="text-xs text-indigo-400 font-semibold shrink-0">Open →</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">No bookmarked tools yet. Click the star on any tool to save it here!</p>
            )}
          </div>

          {/* Bookmarked Guides */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Saved Guides ({savedGuides.length})</span>
            </h4>

            {savedGuides.length > 0 ? (
              <div className="space-y-2">
                {savedGuides.map(guide => (
                  <div
                    key={guide.id}
                    onClick={() => {
                      openGuide(guide.id);
                      setUserModalOpen(false);
                    }}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/40 cursor-pointer flex items-center justify-between"
                  >
                    <div className="min-w-0 pr-2">
                      <p className="font-semibold text-xs text-slate-200 truncate">{guide.title}</p>
                      <p className="text-[11px] text-slate-400">{guide.readTime} • {guide.category}</p>
                    </div>
                    <span className="text-xs text-indigo-400 font-semibold shrink-0">Read →</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">No saved guides yet.</p>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Local Device Privacy
          </span>
          <button
            onClick={() => setUserModalOpen(false)}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
