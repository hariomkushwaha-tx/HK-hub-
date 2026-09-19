import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Cpu, 
  Layers, 
  Shield, 
  Wrench, 
  Sliders, 
  AlertTriangle, 
  FileText, 
  Copy, 
  Check, 
  Sparkles,
  Zap,
  Activity,
  ArrowRight
} from 'lucide-react';
import { EngineeringRecipe17 } from '../../../types/weapon';
import { ENGINEERING_RECIPE_17_STEPS } from '../../../data/weaponEngineeringData';
import { copyToClipboard } from '../../../utils/clipboard';

interface EngineeringRecipeViewProps {
  recipe: EngineeringRecipe17;
  chapterTitle: string;
  chapterNumber: number;
}

export const EngineeringRecipeView: React.FC<EngineeringRecipeViewProps> = ({
  recipe,
  chapterTitle,
  chapterNumber
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [copied, setCopied] = useState(false);

  const handleCopyRecipe = () => {
    const text = `HK WEAPON — 17-STEP DEFENCE ENGINEERING RECIPE
Chapter ${chapterNumber}: ${chapterTitle}

1. PROBLEM: ${recipe.problem}
2. OBJECTIVE: ${recipe.objective}
3. SCIENTIFIC PRINCIPLES: ${recipe.scientificPrinciples.join('; ')}
4. SYSTEM REQUIREMENTS: ${recipe.systemRequirements.join('; ')}
5. SYSTEM ARCHITECTURE: ${recipe.systemArchitecture}
6. MAJOR SUBSYSTEMS: ${recipe.majorSubsystems.map(s => `${s.name} (${s.specs}): ${s.function}`).join('; ')}
7. DESIGN PROCESS: ${recipe.engineeringDesignProcess}
8. SIMULATION & MODELLING: ${recipe.simulationAndModelling.map(m => `${m.tool} [${m.method}] -> ${m.focusArea}`).join('; ')}
9. MATERIALS & MANUFACTURING: ${recipe.materialsAndManufacturing.join('; ')}
10. PROTOTYPE: ${recipe.prototypeDevelopment}
11. TESTING METHODOLOGY: ${recipe.testingMethodology.map(t => `${t.testName}: ${t.procedure} (Pass: ${t.criteria})`).join('; ')}
12. FAILURE ANALYSIS: ${recipe.failureAnalysis.join('; ')}
13. VALIDATION: ${recipe.validation}
14. QUALITY ASSURANCE: ${recipe.qualityAssurance}
15. MAINTENANCE: ${recipe.maintenance}
16. UPGRADE PATH: ${recipe.upgradePath}
17. FUTURE TECHNOLOGY: ${recipe.futureTechnology}
`;
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-zinc-900 to-indigo-950/40 border border-amber-500/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500 text-black">
                17-STEP RECIPE
              </span>
              <span className="text-xs font-medium text-amber-400">
                Defence Systems Engineering Framework
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
              {chapterTitle} — इंजीनियरिंग विकास विधि (Recipe)
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
              रक्षा इंजीनियरिंग में किसी भी तकनीक को शोध (R&D) से लेकर अंतिम परिचालन (Deployment) और उन्नयन तक पहुंचाने का 17-चरणीय मानक ढांचा।
            </p>
          </div>

          <button
            onClick={handleCopyRecipe}
            className="self-start md:self-center px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium border border-zinc-700/80 flex items-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
            <span>{copied ? 'रेसिपी कॉपी हो गई!' : 'पूर्ण 17-स्टेप कॉपी करें'}</span>
          </button>
        </div>

        {/* 17 Step Horizontal Badge Scroller */}
        <div className="mt-6 pt-4 border-t border-zinc-800/80 overflow-x-auto pb-2 flex items-center gap-1.5 scrollbar-thin">
          {ENGINEERING_RECIPE_17_STEPS.map((s) => {
            const isSelected = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all flex-shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 border border-zinc-800'
                }`}
              >
                <span>{s.step < 10 ? `0${s.step}` : s.step}</span>
                <span className="truncate max-w-[110px]">{s.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Showcase Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Mobile Quick Step Selector Dropdown */}
        <div className="lg:hidden col-span-1 w-full bg-zinc-900/80 border border-zinc-800 p-3 rounded-xl space-y-1.5">
          <label className="text-[11px] font-mono font-bold text-amber-400 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" />
            <span>इंजीनियरिंग चरण चुनें (Select Step 1–17):</span>
          </label>
          <select
            value={activeStep}
            onChange={e => setActiveStep(Number(e.target.value))}
            className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-100 font-semibold focus:outline-none focus:border-amber-500"
          >
            {ENGINEERING_RECIPE_17_STEPS.map(s => (
              <option key={s.step} value={s.step} className="bg-zinc-950 text-zinc-200">
                Step {s.step < 10 ? `0${s.step}` : s.step}: {s.title} — {s.hindiTitle}
              </option>
            ))}
          </select>
        </div>

        {/* Left Side: Step Selector List (Desktop) */}
        <div className="hidden lg:block lg:col-span-4 space-y-1.5 max-h-[620px] overflow-y-auto pr-1">
          {ENGINEERING_RECIPE_17_STEPS.map((s) => {
            const isSelected = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`w-full text-left p-3 rounded-xl transition-all border flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500/10 border-amber-500/50 text-amber-400 shadow-sm'
                    : 'bg-zinc-900/40 hover:bg-zinc-800/60 border-zinc-800/60 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5 ${
                  isSelected ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {s.step}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold truncate">{s.title}</span>
                    <span className="text-[10px] font-mono opacity-70">{s.hindiTitle}</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 truncate mt-0.5">{s.focus}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Step Detail Content */}
        <div className="col-span-1 lg:col-span-8 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-4 sm:p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold">
                Step {activeStep} of 17
              </span>
              <h3 className="text-xl font-bold text-zinc-100 mt-0.5">
                {ENGINEERING_RECIPE_17_STEPS[activeStep - 1]?.title} ({ENGINEERING_RECIPE_17_STEPS[activeStep - 1]?.hindiTitle})
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                {ENGINEERING_RECIPE_17_STEPS[activeStep - 1]?.focus}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={activeStep <= 1}
                onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                className="px-2.5 py-1 rounded bg-zinc-800 disabled:opacity-30 text-xs font-medium text-zinc-300"
              >
                Previous
              </button>
              <button
                disabled={activeStep >= 17}
                onClick={() => setActiveStep(prev => Math.min(17, prev + 1))}
                className="px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 disabled:opacity-30 text-xs font-bold text-black"
              >
                Next
              </button>
            </div>
          </div>

          {/* Dynamic Content Rendering based on Active Step */}
          <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
            {activeStep === 1 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  1. Operational Problem Statement
                </h4>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-200">
                  {recipe.problem}
                </div>
                <p className="text-xs text-zinc-400">
                  रक्षा आवश्यकताओं (Staff Qualitative Requirements - SQR) का निर्माण यहीं से शुरू होता है। जब तक खतरे (Threat Vector) की सटीक गणितीय परिभाषा न हो, तब तक इंजीनियरिंग डिजाइन शुरू नहीं किया जाता।
                </p>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  2. Mission Objective & Quantitative Key Parameters
                </h4>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-200">
                  {recipe.objective}
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  3. Scientific Principles & Physics Foundations
                </h4>
                <ul className="space-y-2">
                  {recipe.scientificPrinciples.map((p, idx) => (
                    <li key={idx} className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-mono text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeStep === 4 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  4. System Requirements & Operational Constraints
                </h4>
                <ul className="space-y-2">
                  {recipe.systemRequirements.map((r, idx) => (
                    <li key={idx} className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeStep === 5 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  5. High-Level System Architecture
                </h4>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-200">
                  {recipe.systemArchitecture}
                </div>
              </div>
            )}

            {activeStep === 6 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  6. Major Subsystems & Line Replaceable Units (LRUs)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {recipe.majorSubsystems.map((sub, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-400 text-xs">{sub.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">{sub.specs}</span>
                      </div>
                      <p className="text-xs text-zinc-300">{sub.function}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeStep === 7 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  7. Engineering Design Process (CAD, GD&T, Tolerances)
                </h4>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-200">
                  {recipe.engineeringDesignProcess}
                </div>
              </div>
            )}

            {activeStep === 8 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  8. Simulation & Computational Modelling (CFD / FEA / HIL)
                </h4>
                <div className="space-y-2">
                  {recipe.simulationAndModelling.map((sim, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-bold text-zinc-100">{sim.tool}</span>
                        <span className="text-xs text-amber-400 ml-2 font-mono">[{sim.method}]</span>
                        <p className="text-xs text-zinc-400 mt-0.5">{sim.focusArea}</p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/50 text-indigo-300 border border-indigo-800/40 self-start sm:self-auto">
                        Validated
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeStep === 9 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  9. Materials Selection & Manufacturing Concepts
                </h4>
                <ul className="space-y-2">
                  {recipe.materialsAndManufacturing.map((mat, idx) => (
                    <li key={idx} className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-2.5">
                      <Layers className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeStep === 10 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  10. Prototype Development & Technology Demonstrators (TD)
                </h4>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-200">
                  {recipe.prototypeDevelopment}
                </div>
              </div>
            )}

            {activeStep === 11 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  11. Testing Methodology (Environmental, Vibration, Range)
                </h4>
                <div className="space-y-2">
                  {recipe.testingMethodology.map((t, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-400 text-xs">{t.testName}</span>
                        <span className="text-[10px] font-mono text-emerald-400">Pass: {t.criteria}</span>
                      </div>
                      <p className="text-xs text-zinc-300">{t.procedure}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeStep === 12 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  12. Failure Modes & Effects Analysis (FMEA)
                </h4>
                <ul className="space-y-2">
                  {recipe.failureAnalysis.map((fa, idx) => (
                    <li key={idx} className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{fa}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeStep === 13 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  13. Validation & User Acceptance Trials
                </h4>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-200">
                  {recipe.validation}
                </div>
              </div>
            )}

            {activeStep === 14 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  14. Quality Assurance (AS9100D & NDT)
                </h4>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-200">
                  {recipe.qualityAssurance}
                </div>
              </div>
            )}

            {activeStep === 15 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  15. Maintenance & Lifecycle Support (LRUs, Depot Overhauls)
                </h4>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-200">
                  {recipe.maintenance}
                </div>
              </div>
            )}

            {activeStep === 16 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  16. Upgrade Path & Modular Open Systems Architecture (MOSA)
                </h4>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-zinc-200">
                  {recipe.upgradePath}
                </div>
              </div>
            )}

            {activeStep === 17 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                  17. Future Technology Roadmap & 2047 Vision
                </h4>
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 to-zinc-900 border border-indigo-500/30 text-zinc-100">
                  {recipe.futureTechnology}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
