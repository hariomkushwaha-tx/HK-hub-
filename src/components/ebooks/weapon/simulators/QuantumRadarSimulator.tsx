import React, { useState } from 'react';
import { 
  Radio, 
  Cpu, 
  ShieldCheck, 
  AlertTriangle, 
  Zap, 
  Sliders, 
  RefreshCw, 
  Lock, 
  Key, 
  Activity,
  Layers
} from 'lucide-react';

export const QuantumRadarSimulator: React.FC = () => {
  // Quantum Radar Parameters
  const [photonRateLog, setPhotonRateLog] = useState<number>(7); // 10^6 to 10^9 pairs/sec
  const [targetRcsM2, setTargetRcsM2] = useState<number>(0.0005); // Stealth fighter RCS (0.0001 to 0.1 m^2)
  const [targetDistanceKm, setTargetDistanceKm] = useState<number>(45); // 10 to 120 km
  const [thermalNoiseTempK, setThermalNoiseTempK] = useState<number>(400); // 100K (ambient) to 2500K (active DRFM jammer)
  const [detectionMode, setDetectionMode] = useState<'quantum' | 'classical'>('quantum');
  const [simulateEavesdropper, setSimulateEavesdropper] = useState<boolean>(false);

  // Physics Calculations
  // Signal photon frequency: X-band ~ 10 GHz
  const photonRate = Math.pow(10, photonRateLog);
  // Free space attenuation: 1 / R^4
  const pathLoss = Math.min(1e-12, (targetRcsM2 * 0.03 * 0.03) / (4 * Math.PI * Math.pow(targetDistanceKm * 1000, 4)));

  // Thermal noise background photons per mode: N_B = 1 / (exp(h*nu / k*T) - 1) ~ k*T / (h*nu)
  const noisePhotonsPerMode = (1.38e-23 * thermalNoiseTempK) / (6.626e-34 * 10e9);

  // Classical SNR (Standard Radar)
  const classicalSnrRaw = (photonRate * pathLoss * 1e18) / Math.max(1, noisePhotonsPerMode * 0.001);
  const classicalSnrDb = Number((10 * Math.log10(Math.max(0.01, classicalSnrRaw))).toFixed(1));

  // Quantum Advantage: Quantum Illumination provides up to 6 dB enhancement over classical matched filter
  // in high-noise low-brightness regime
  const quantumAdvantageDb = 6.0 * (1 / (1 + 0.05 * targetRcsM2 * 1000));
  const effectiveSnrDb = detectionMode === 'quantum' 
    ? Number((classicalSnrDb + quantumAdvantageDb).toFixed(1)) 
    : classicalSnrDb;

  // Detection Probability (Marcum Q-function approximation)
  const detectionProbabilityPercent = Math.max(
    2, 
    Math.min(99.9, Number((100 / (1 + Math.exp(-0.35 * (effectiveSnrDb - 4)))).toFixed(1)))
  );

  // QKD (Quantum Key Distribution) Parameters
  const baseQber = 2.1; // % natural channel noise
  const eavesdropPenalty = simulateEavesdropper ? 18.4 : 0; // Heisenberg disturbance
  const totalQber = Number((baseQber + eavesdropPenalty + (thermalNoiseTempK / 500)).toFixed(1));
  const isChannelSecure = totalQber < 11.0; // 11% is the Shor-Preskill threshold for BB84

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-indigo-950/30 border border-cyan-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-[11px] font-bold border border-cyan-500/30">
              Quantum Entanglement & Discord
            </span>
            <span className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 font-mono text-[10px]">
              SPDC Microwave-Optics Hybrid
            </span>
          </div>
          <h3 className="text-base font-bold text-zinc-100">
            क्वांटम इल्यूमिनेशन रडार एवं QKD डिफेंस एनक्रिप्शन सिमुलेटर
          </h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-2xl">
            उलझे हुए फोटॉन (Entangled Signal-Idler Pairs) की सहायता से 0.0005 m² स्टेल्थ लक्ष्यों का पता लगाने और नो-क्लोनिंग प्रमेय पर आधारित सुरक्षित संचार का प्रत्यक्ष परीक्षण।
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 text-xs font-mono font-bold ${
            detectionProbabilityPercent > 80 
              ? 'bg-cyan-950/70 text-cyan-300 border-cyan-700' 
              : 'bg-zinc-900 text-zinc-400 border-zinc-700'
          }`}>
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>लक्ष्य खोज संभावना: {detectionProbabilityPercent}%</span>
          </div>
        </div>
      </div>

      {/* Grid: Controls & Quantum Phase Correlation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Quantum Controls (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              <span>क्वांटम रडार पैरामीटर्स</span>
            </span>
            <span className="text-[11px] font-mono text-zinc-400">
              SPDC Non-Classical State
            </span>
          </div>

          <div className="space-y-3.5 text-xs">
            {/* Detection Mode Toggle */}
            <div>
              <label className="text-zinc-300 font-mono mb-1.5 block">रडार संचालन प्रणाली (Radar Architecture):</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setDetectionMode('quantum')}
                  className={`py-2 px-3 rounded-lg font-mono text-xs font-bold transition-all border cursor-pointer ${
                    detectionMode === 'quantum'
                      ? 'bg-cyan-500 text-black border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700'
                  }`}
                >
                  ⚛️ क्वांटम इल्यूमिनेशन (+6dB)
                </button>
                <button
                  onClick={() => setDetectionMode('classical')}
                  className={`py-2 px-3 rounded-lg font-mono text-xs font-bold transition-all border cursor-pointer ${
                    detectionMode === 'classical'
                      ? 'bg-amber-500 text-black border-amber-400'
                      : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700'
                  }`}
                >
                  📡 पारंपरिक AESA रडार
                </button>
              </div>
            </div>

            {/* Target RCS Slider */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>लक्ष्य का स्टेल्थ RCS (Radar Cross Section):</span>
                <span className="text-cyan-400 font-bold">{targetRcsM2} m²</span>
              </div>
              <input
                type="range"
                min="0.0001"
                max="0.05"
                step="0.0005"
                value={targetRcsM2}
                onChange={(e) => setTargetRcsM2(Number(e.target.value))}
                className="w-full accent-cyan-500 bg-zinc-800"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 mt-0.5 font-mono">
                <span>0.0001 m² (VLO F-35/AMCA)</span>
                <span>0.01 m² (Su-57)</span>
                <span>0.05 m² (4.5th Gen)</span>
              </div>
            </div>

            {/* Distance Slider */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>लक्ष्य दूरी (Target Distance):</span>
                <span className="text-amber-400 font-bold">{targetDistanceKm} km</span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                step="2"
                value={targetDistanceKm}
                onChange={(e) => setTargetDistanceKm(Number(e.target.value))}
                className="w-full accent-amber-500 bg-zinc-800"
              />
            </div>

            {/* Active Jamming / Thermal Noise */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>पर्यावरणीय शोर व DRFM जैमिंग (Noise Temp):</span>
                <span className="text-red-400 font-bold">{thermalNoiseTempK} Kelvin</span>
              </div>
              <input
                type="range"
                min="100"
                max="2500"
                step="50"
                value={thermalNoiseTempK}
                onChange={(e) => setThermalNoiseTempK(Number(e.target.value))}
                className="w-full accent-red-500 bg-zinc-800"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 mt-0.5 font-mono">
                <span>100 K (शांत आकाश)</span>
                <span>800 K (रेडियो पृष्ठभूमि)</span>
                <span>2500 K (तीव्र DRFM जैमिंग)</span>
              </div>
            </div>

            {/* QKD Eavesdropper Injection */}
            <div className="pt-2 border-t border-zinc-800">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-zinc-200 font-mono font-medium block">शत्रु जासूसी/ईव्सड्रॉपिंग टेस्ट (QKD):</span>
                  <span className="text-[10px] text-zinc-400">क्वांटम चैनल को इंटरसेप्ट करने का प्रयास</span>
                </div>
                <button
                  onClick={() => setSimulateEavesdropper(!simulateEavesdropper)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    simulateEavesdropper
                      ? 'bg-red-500 text-white shadow-md shadow-red-500/20'
                      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                  }`}
                >
                  {simulateEavesdropper ? 'ईव्सड्रॉपर सक्रिय' : 'कोई जासूसी नहीं'}
                </button>
              </div>
            </div>
          </div>

          {/* Mathematical & Quantum State Readout */}
          <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-1.5 text-xs font-mono text-zinc-300">
            <div className="flex justify-between">
              <span className="text-zinc-400">प्रभावी सिग्नल-टू-नॉइज़ रेशियो (SNR):</span>
              <span className={`font-bold ${effectiveSnrDb > 10 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {effectiveSnrDb} dB {detectionMode === 'quantum' && <span className="text-cyan-400">(+{quantumAdvantageDb.toFixed(1)} dB QI लाभ)</span>}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">क्वांटम बिट एरर रेट (QBER):</span>
              <span className={`font-bold ${isChannelSecure ? 'text-emerald-400' : 'text-red-400'}`}>
                {totalQber}% {isChannelSecure ? '(सुरक्षित < 11%)' : '(अलार्म: चैनल समझौता!)'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">क्वांटम डिस्कोर्ड स्थिति:</span>
              <span className="text-indigo-400 font-bold">Non-Zero Quantum Discord Correlated</span>
            </div>
          </div>
        </div>

        {/* Right Column: Quantum Entanglement & Detection Display (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-zinc-200">
                  सिग्नल-आइडलर जॉइंट क्वांटम कोरिलेटर (Signal-Idler Correlator)
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                Mode: {detectionMode.toUpperCase()}
              </span>
            </div>

            {/* Quantum Entanglement Visualizer Canvas */}
            <div className="relative w-full h-64 bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800/80 p-3">
              <svg viewBox="0 0 540 220" className="w-full h-full">
                <defs>
                  <linearGradient id="quantumWave" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Grid */}
                <path d="M 0 110 L 540 110" stroke="#27272a" strokeWidth="1" strokeDasharray="4,4" />
                <path d="M 270 0 L 270 220" stroke="#27272a" strokeWidth="1" strokeDasharray="4,4" />

                {/* 1. Cryogenic SPDC Source */}
                <rect x="20" y="80" width="70" height="60" rx="8" fill="#18181b" stroke="#06b6d4" strokeWidth="1.5" />
                <text x="32" y="105" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">SPDC</text>
                <text x="26" y="122" fill="#94a3b8" fontSize="8" fontFamily="monospace">15 mK Dilution</text>

                {/* 2. Idler Photon (Stored in Cavity) */}
                <path 
                  d="M 90 95 C 130 60, 150 60, 190 95 C 230 130, 250 130, 270 95" 
                  fill="none" 
                  stroke="#a855f7" 
                  strokeWidth="2.5" 
                  strokeDasharray="4,2" 
                />
                <circle cx="270" cy="95" r="5" fill="#c084fc" className="animate-ping" />
                <text x="130" y="50" fill="#c084fc" fontSize="9" fontFamily="monospace">
                  Idler Photon (Stored)
                </text>

                {/* 3. Signal Photon sent towards Stealth Target */}
                <path 
                  d="M 90 125 C 150 160, 230 160, 310 125 C 390 90, 430 90, 480 110" 
                  fill="none" 
                  stroke="url(#quantumWave)" 
                  strokeWidth="2" 
                />
                <text x="160" y="180" fill="#38bdf8" fontSize="9" fontFamily="monospace">
                  Signal Microwave Photon (X-Band)
                </text>

                {/* Noise Jamming Rain */}
                {thermalNoiseTempK > 500 && (
                  <g stroke="#ef4444" strokeWidth="1" opacity="0.4" strokeDasharray="3,3">
                    <line x1="200" y1="20" x2="260" y2="200" />
                    <line x1="250" y1="20" x2="310" y2="200" />
                    <line x1="300" y1="20" x2="360" y2="200" />
                    <line x1="350" y1="20" x2="410" y2="200" />
                  </g>
                )}

                {/* 4. Stealth Target (AMCA / F-35 Shape) */}
                <g transform="translate(460, 90)">
                  <polygon 
                    points="30,20 0,0 10,20 0,40" 
                    fill={detectionProbabilityPercent > 60 ? '#ef4444' : '#52525b'} 
                    stroke={detectionProbabilityPercent > 60 ? '#f87171' : '#71717a'} 
                    strokeWidth="1.5" 
                  />
                  <text x="-40" y="10" fill="#fbbf24" fontSize="9" fontFamily="monospace">
                    RCS: {targetRcsM2}m²
                  </text>
                  {detectionProbabilityPercent > 60 && (
                    <text x="-45" y="48" fill="#4ade80" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      ACQUIRED!
                    </text>
                  )}
                </g>

                {/* Correlator Box */}
                <rect x="230" y="180" width="160" height="30" rx="6" fill="#1e1e24" stroke="#6366f1" />
                <text x="242" y="198" fill="#a5b4fc" fontSize="9" fontFamily="monospace">
                  Joint Quantum Correlator
                </text>
              </svg>
            </div>

            {/* Performance Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
                <span className="text-[10px] font-mono text-zinc-400 block mb-1">क्वांटम खोज संभावना (Pd)</span>
                <span className={`text-sm font-mono font-bold flex items-center justify-center gap-1 ${
                  detectionProbabilityPercent > 75 ? 'text-emerald-400' : 'text-amber-400'
                }`}>
                  {detectionProbabilityPercent}%
                </span>
                <span className="text-[9px] text-zinc-500 font-mono">
                  {detectionMode === 'quantum' ? 'Quantum Illumination' : 'Classical Radar'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
                <span className="text-[10px] font-mono text-zinc-400 block mb-1">एंटी-स्टेल्थ लाभ (Advantage)</span>
                <span className="text-sm font-mono font-bold text-cyan-400 flex items-center justify-center gap-1">
                  +{quantumAdvantageDb.toFixed(1)} dB
                </span>
                <span className="text-[9px] text-zinc-500 font-mono">शोर के भीतर छिपे सिग्नल की पहचान</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
                <span className="text-[10px] font-mono text-zinc-400 block mb-1">QKD सुरक्षा स्थिति</span>
                <span className={`text-sm font-mono font-bold flex items-center justify-center gap-1 ${
                  isChannelSecure ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {isChannelSecure ? <Lock className="w-3.5 h-3.5 text-emerald-400" /> : <AlertTriangle className="w-3.5 h-3.5 text-red-400" />}
                  {isChannelSecure ? 'UNCONDITIONAL' : 'EAVESDROPPER!'}
                </span>
                <span className="text-[9px] text-zinc-500 font-mono">QBER: {totalQber}%</span>
              </div>
            </div>

            {/* Scientific Explanation Note */}
            <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-900/40 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-300 leading-relaxed">
                <strong className="text-zinc-100 font-medium">स्टेल्थ का अंत (Quantum Advantage):</strong> पारंपरिक रडार में दुश्मन की जैमिंग 
                सिग्नल को दबा देती है। परंतु क्वांटम इल्यूमिनेशन में भले ही वातावरण में उलझाव (Entanglement) टूट जाए, 
                <strong>क्वांटम डिस्कोर्ड (Quantum Discord)</strong> सुरक्षित रहता है। जब सिग्नल लौटता है, तो कैविटी में सुरक्षित रखे 
                आइडलर फोटॉन के साथ संयुक्त माप करने पर जैमिंग नॉइज़ में छिपे स्टेल्थ विमान का सटीक पता चल जाता है।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
