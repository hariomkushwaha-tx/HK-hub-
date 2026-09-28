import React, { useState } from 'react';
import { Laptop, Cpu, CheckCircle2, AlertTriangle, Check, ArrowRight } from 'lucide-react';

interface SpecProfile {
  title: string;
  recommendedCpu: string;
  minRam: string;
  gpuRequirement: string;
  storageRecommendation: string;
  batteryLife: string;
  displayRecommendation: string;
  pitfalls: string[];
}

const SPEC_PROFILES: Record<string, Record<string, SpecProfile>> = {
  'general': {
    'budget': {
      title: 'BCA / CS Foundations & College Coursework (Budget Tier)',
      recommendedCpu: 'AMD Ryzen 5 7520U / 5500U or Intel Core i5 12th/13th Gen',
      minRam: '16GB DDR4/DDR5 (or 8GB with an empty expandable SODIMM slot)',
      gpuRequirement: 'Integrated Graphics (AMD Radeon 610M/Vega or Intel Iris Xe)',
      storageRecommendation: '512GB PCIe NVMe SSD (Avoid older SATA SSDs)',
      batteryLife: '6 to 8 hours actual web/code playback',
      displayRecommendation: '14" to 15.6" Full HD (1920x1080) IPS anti-glare panel',
      pitfalls: [
        'NEVER buy laptops with non-upgradable 8GB soldered RAM; running VS Code and 10 Chrome tabs consumes 6.5GB immediately.',
        'Avoid eMMC 64GB/128GB flash storage marketed under ultra-cheap student laptops.',
        'Avoid TN (Twisted Nematic) display panels with washed-out viewing angles that cause eye fatigue.'
      ]
    },
    'mid': {
      title: 'Full-Stack Web & Software Engineering (Mid-Range)',
      recommendedCpu: 'Intel Core i5 13500H / Core Ultra 5 or AMD Ryzen 7 7730U/7735HS (6-8 Performance Cores)',
      minRam: '16GB to 32GB Dual-Channel LPDDR5/DDR5',
      gpuRequirement: 'Integrated Intel Arc / AMD 680M/780M (Discrete GPU optional)',
      storageRecommendation: '1TB NVMe M.2 SSD (Gen 4)',
      batteryLife: '8+ hours with USB Type-C 65W Power Delivery charging',
      displayRecommendation: '14" 16:10 aspect ratio 100% sRGB or 2.2K IPS',
      pitfalls: [
        'Check that the laptop supports USB-C Power Delivery charging so you do not carry heavy proprietary power bricks.',
        'Ensure dual-channel memory configuration; single-channel memory reduces integrated GPU and compiler throughput by up to 25%.'
      ]
    },
    'high': {
      title: 'Power Development & System Virtualization (High-Tier)',
      recommendedCpu: 'Apple M2/M3 Pro or Intel Core i7 14700H / AMD Ryzen 9 7940HS',
      minRam: '32GB DDR5 / Unified Memory',
      gpuRequirement: 'NVIDIA RTX 4060 (8GB VRAM) or Apple M-Series GPU',
      storageRecommendation: '1TB to 2TB PCIe 4.0 NVMe SSD',
      batteryLife: '10+ hours (MacBook) or 5-6 hours (x86 Gaming chassis)',
      displayRecommendation: '100% DCI-P3, 120Hz refresh rate, 400+ nits brightness',
      pitfalls: [
        'High-performance gaming laptops often weigh 2.4kg+ and have 2-3 hour battery lives; if you commute daily to college, a MacBook Air 16GB or AMD thin-and-light is vastly more practical.'
      ]
    }
  },
  'ai': {
    'budget': {
      title: 'Machine Learning & Deep Learning Student Setup',
      recommendedCpu: 'Intel Core i5 13420H / AMD Ryzen 5 7640HS',
      minRam: '16GB DDR5 expandable to 32GB',
      gpuRequirement: 'NVIDIA RTX 3050 (6GB VRAM) / RTX 4050 (6GB VRAM) - Mandatory NVIDIA CUDA Support',
      storageRecommendation: '512GB to 1TB NVMe SSD for storing datasets',
      batteryLife: '3 to 5 hours (requires power brick during model training)',
      displayRecommendation: '15.6" FHD 144Hz IPS',
      pitfalls: [
        'Never buy an AMD Radeon or Intel Arc discrete GPU for machine learning coursework; PyTorch and TensorFlow require NVIDIA CUDA cores.',
        'Ensure the RTX GPU has at least 6GB VRAM; older 4GB VRAM variants trigger Out-Of-Memory (OOM) errors on modern LLMs and vision batches.'
      ]
    },
    'mid': {
      title: 'Computer Vision & Deep Learning Practitioner',
      recommendedCpu: 'Intel Core i7 13700H or AMD Ryzen 7 7840HS / 8845HS',
      minRam: '32GB DDR5',
      gpuRequirement: 'NVIDIA GeForce RTX 4060 / 4070 (8GB GDDR6 VRAM, 100W+ TGP)',
      storageRecommendation: '1TB NVMe Gen 4 SSD',
      batteryLife: '4 to 6 hours',
      displayRecommendation: '15.6" or 16" QHD (2560x1440) 100% sRGB',
      pitfalls: [
        'Pay attention to the GPU Total Graphics Power (TGP). An RTX 4060 running at 45W delivers nearly 30% lower training throughput than one running at 105W-140W.'
      ]
    },
    'high': {
      title: 'AI Researcher & Local LLM Fine-Tuning Rig',
      recommendedCpu: 'Intel Core i9 14900HX or Apple M3 Max',
      minRam: '32GB to 64GB',
      gpuRequirement: 'NVIDIA RTX 4080 (12GB VRAM) or Apple M3 Max (36GB+ Unified Memory)',
      storageRecommendation: '2TB PCIe 4.0 SSD',
      batteryLife: '4 hours (x86) / 12 hours (Apple M3 Max)',
      displayRecommendation: '16" Mini-LED or high-gamut IPS',
      pitfalls: [
        'For heavy multi-billion parameter model fine-tuning, cloud instances (Google Colab Pro, RunPod, AWS EC2) are often significantly cheaper than spending $3,000 on an ultra-high-end laptop.'
      ]
    }
  },
  'android': {
    'budget': {
      title: 'Android & Cross-Platform Mobile Dev (Flutter/React Native)',
      recommendedCpu: 'AMD Ryzen 5 7530U or Intel Core i5 12450H (Minimum 8 threads for AVD emulator)',
      minRam: '16GB DDR4/DDR5 (Mandatory: Android Studio + Emulator takes 12GB+)',
      gpuRequirement: 'Integrated or Entry discrete GPU',
      storageRecommendation: '512GB NVMe SSD',
      batteryLife: '6 hours',
      displayRecommendation: '15.6" FHD IPS',
      pitfalls: [
        'Do NOT attempt Android Studio development on 8GB RAM. The Gradle build daemon and Android Virtual Device (AVD) will freeze your operating system.'
      ]
    },
    'mid': {
      title: 'Production Mobile Dev & iOS/Android Cross-Platform',
      recommendedCpu: 'Apple M2 / M3 (8-core CPU / 10-core GPU) or Intel Core i7 13700H',
      minRam: '16GB to 24GB Unified Memory',
      gpuRequirement: 'Integrated Apple Silicon GPU or NVIDIA RTX 4050',
      storageRecommendation: '512GB to 1TB SSD',
      batteryLife: '12+ hours (MacBook)',
      displayRecommendation: 'Retina / 100% DCI-P3 500 nits',
      pitfalls: [
        'If iOS / Swift / Xcode development is in your college curriculum, a MacBook is non-negotiable since macOS is required to compile iOS binaries.'
      ]
    },
    'high': {
      title: 'Enterprise Mobile & Multi-Emulator Farm',
      recommendedCpu: 'Apple MacBook Pro M3 Pro (12-core CPU) or Intel Core i9',
      minRam: '36GB Unified Memory or 32GB DDR5',
      gpuRequirement: 'High-tier GPU',
      storageRecommendation: '1TB to 2TB SSD',
      batteryLife: '14+ hours',
      displayRecommendation: 'Liquid Retina XDR',
      pitfalls: [
        'Storage fills up rapidly with Android SDK platforms, emulator system images, and Xcode simulator runtimes (50GB+ easily); plan for at least 512GB.'
      ]
    }
  }
};

export const LaptopGuide: React.FC = () => {
  const [domain, setDomain] = useState<'general' | 'ai' | 'android'>('general');
  const [budgetTier, setBudgetTier] = useState<'budget' | 'mid' | 'high'>('budget');

  const profile = SPEC_PROFILES[domain]?.[budgetTier] || SPEC_PROFILES['general']['budget'];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Selector Filters */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Laptop className="w-4 h-4" />
            <span>Hardware Architecture Guide</span>
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            Engineering &amp; BCA Laptop Specification Advisor
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Select your discipline and budget tier to see exact hardware minimums to survive 4 years of college without lag:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">
              Academic Discipline / Workload
            </label>
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              {[
                { id: 'general', label: 'BCA & Web Dev' },
                { id: 'ai', label: 'AI & Machine Learning' },
                { id: 'android', label: 'Android & Mobile' },
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setDomain(t.id as any)}
                  className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-colors ${
                    domain === t.id
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 block mb-1.5">
              Budget Tier
            </label>
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              {[
                { id: 'budget', label: 'Entry (< ₹45k / $500)' },
                { id: 'mid', label: 'Mid (< ₹65k / $800)' },
                { id: 'high', label: 'Pro (₹85k+ / $1000+)' },
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setBudgetTier(t.id as any)}
                  className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-colors ${
                    budgetTier === t.id
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Spec Matrix */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400">
            Recommended Configuration Blueprint
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {profile.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">PROCESSOR (CPU)</span>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{profile.recommendedCpu}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">MINIMUM SYSTEM MEMORY (RAM)</span>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{profile.minRam}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">GRAPHICS PROCESSOR (GPU)</span>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{profile.gpuRequirement}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">STORAGE CAPACITY &amp; TYPE</span>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{profile.storageRecommendation}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">BATTERY &amp; MOBILITY</span>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{profile.batteryLife}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">DISPLAY ERGONOMICS</span>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{profile.displayRecommendation}</p>
          </div>
        </div>

        {/* Red Flags / Pitfalls to avoid */}
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-rose-700 dark:text-rose-300">
            <AlertTriangle className="w-4 h-4" />
            <span>Critical Purchasing Pitfalls To Avoid In 2026:</span>
          </div>
          <div className="space-y-1.5 text-rose-900 dark:text-rose-200">
            {profile.pitfalls.map((pitfall, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="shrink-0">•</span>
                <span>{pitfall}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
