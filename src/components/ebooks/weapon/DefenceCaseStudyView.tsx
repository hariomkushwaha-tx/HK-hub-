import React, { useState } from 'react';
import { 
  Award, 
  Shield, 
  CheckCircle, 
  ChevronRight, 
  Clock, 
  FileText, 
  Layers, 
  Cpu, 
  Activity, 
  Zap,
  Target,
  Wrench,
  Building,
  Flame
} from 'lucide-react';
import { DefenceCaseStudy } from '../../../types/weapon';
import { DEFENCE_CASE_STUDIES } from '../../../data/weaponEngineeringData';

interface DefenceCaseStudyViewProps {
  initialCaseStudy?: DefenceCaseStudy;
  chapterTitle: string;
}

export const DefenceCaseStudyView: React.FC<DefenceCaseStudyViewProps> = ({
  initialCaseStudy,
  chapterTitle
}) => {
  const [selectedKey, setSelectedKey] = useState<string>(() => {
    if (initialCaseStudy) {
      const match = Object.entries(DEFENCE_CASE_STUDIES).find(([_, v]) => v.programmeName === initialCaseStudy.programmeName);
      if (match) return match[0];
    }
    return 'lca-tejas';
  });

  const caseStudy = DEFENCE_CASE_STUDIES[selectedKey] || initialCaseStudy || DEFENCE_CASE_STUDIES['lca-tejas'];

  const stages = [
    { num: 1, title: '1. Research Problem', hindi: 'अनुसंधान चुनौती', content: caseStudy.researchProblem, icon: Target, color: 'text-rose-400' },
    { num: 2, title: '2. Technology Development', hindi: 'प्रौद्योगिकी विकास', content: caseStudy.technologyDevelopment, icon: Cpu, color: 'text-amber-400' },
    { num: 3, title: '3. Prototype Milestone', hindi: 'प्रोटोटाइप उड़ान/परीक्षण', content: caseStudy.prototypeMilestone, icon: Zap, color: 'text-cyan-400' },
    { num: 4, title: '4. Testing Methodology', hindi: 'कठोर परीक्षण विधियां', content: caseStudy.testingMethod, icon: Activity, color: 'text-indigo-400' },
    { num: 5, title: '5. Evaluation Results', hindi: 'मूल्यांकन व सटीकता परिणाम', content: caseStudy.evaluationResults, icon: CheckCircle, color: 'text-emerald-400' },
    { num: 6, title: '6. Serial Production', hindi: 'औद्योगिक विनिर्माण पैमाना', content: caseStudy.productionScale, icon: Building, color: 'text-blue-400' },
    { num: 7, title: '7. Operational Deployment', hindi: 'सशस्त्र सेनाओं में तैनाती', content: caseStudy.deploymentStatus, icon: Shield, color: 'text-amber-400' },
    { num: 8, title: '8. Modernization & Upgrades', hindi: 'भावी उन्नयन एवं रोडमैप', content: caseStudy.upgradesAndRoadmap, icon: Flame, color: 'text-purple-400' },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Case Study Selector Ribbon */}
      <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500 text-black">
                CASE STUDY
              </span>
              <span className="text-xs font-mono text-zinc-400">Public Defence Engineering Milestones</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
              भारतीय रक्षा इंजीनियरिंग केस स्टडी (Indigenous Case Studies)
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
              खुले स्रोतों पर आधारित वास्तविक रक्षा कार्यक्रमों का 8-चरणीय केस-स्टडी विश्लेषण: Research → Tech → Proto → Test → Eval → Prod → Deploy → Upgrade.
            </p>
          </div>
        </div>

        {/* Case Study Selection Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
          {Object.entries(DEFENCE_CASE_STUDIES).map(([key, cs]) => {
            const isSelected = selectedKey === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                    : 'bg-zinc-950/60 hover:bg-zinc-800/60 text-zinc-400 border border-zinc-800'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>{cs.programmeName.split('(')[0]?.trim() || cs.programmeName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Program Header Profile */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-amber-950/30 border border-amber-500/30 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              {caseStudy.leadAgency}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              {caseStudy.programmeName}
            </h3>
          </div>
          <span className="self-start md:self-auto px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
            Active Strategic Programme
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80">
          <strong className="text-amber-400">ऐतिहासिक पृष्ठभूमि (Context):</strong> {caseStudy.historicalBackground}
        </p>
      </div>

      {/* 8-Stage Sequential Roadmap */}
      <div className="space-y-4">
        <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider font-semibold">
          8-Stage Engineering Progression:
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stages.map((st) => {
            const IconComponent = st.icon;
            return (
              <div
                key={st.num}
                className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700/80 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-zinc-800 text-amber-400 font-mono text-xs font-bold flex items-center justify-center">
                      {st.num}
                    </span>
                    <span className="text-xs font-bold text-zinc-200">{st.title}</span>
                  </div>
                  <IconComponent className={`w-4 h-4 ${st.color}`} />
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed pl-8">
                  {st.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
