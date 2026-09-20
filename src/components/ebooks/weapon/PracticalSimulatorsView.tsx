import React, { useState, useEffect, useRef } from 'react';
import { 
  Sliders, 
  Activity, 
  RotateCw, 
  Radio, 
  Play, 
  Pause, 
  CheckCircle, 
  AlertTriangle, 
  Cpu, 
  Layers, 
  ShieldCheck,
  Zap,
  RefreshCw,
  Compass,
  Flame,
  Gauge,
  Wind,
  Thermometer
} from 'lucide-react';
import { SafePracticalProject } from '../../../types/weapon';
import { SAFE_PRACTICAL_PROJECTS } from '../../../data/weaponEngineeringData';
import { ScramjetFlowSimulator } from './simulators/ScramjetFlowSimulator';
import { DewLaserSimulator } from './simulators/DewLaserSimulator';
import { QuantumRadarSimulator } from './simulators/QuantumRadarSimulator';
import { SwarmIntelligenceSimulator } from './simulators/SwarmIntelligenceSimulator';

interface PracticalSimulatorsViewProps {
  projects?: SafePracticalProject[];
  chapterTitle: string;
  initialTab?: string;
}

export const PracticalSimulatorsView: React.FC<PracticalSimulatorsViewProps> = ({
  projects = SAFE_PRACTICAL_PROJECTS,
  chapterTitle,
  initialTab
}) => {
  const [activeProjectTab, setActiveProjectTab] = useState<string>(() => {
    if (initialTab) return initialTab;
    if (chapterTitle.includes('हाइपरसोनिक') || chapterTitle.includes('43')) return 'scramjet-flow';
    if (chapterTitle.includes('डायरेक्टेड') || chapterTitle.includes('लेजर') || chapterTitle.includes('48')) return 'dew-laser';
    if (chapterTitle.includes('क्वांटम') || chapterTitle.includes('47')) return 'quantum-radar';
    if (chapterTitle.includes('मानवरहित') || chapterTitle.includes('स्वार्म') || chapterTitle.includes('42')) return 'swarm-intelligence';
    if (chapterTitle.includes('इंजन') || chapterTitle.includes('21')) return 'jet-engine';
    return 'uav-flight';
  });

  useEffect(() => {
    if (initialTab) {
      setActiveProjectTab(initialTab);
    } else if (chapterTitle.includes('हाइपरसोनिक') || chapterTitle.includes('43')) {
      setActiveProjectTab('scramjet-flow');
    } else if (chapterTitle.includes('डायरेक्टेड') || chapterTitle.includes('लेजर') || chapterTitle.includes('48')) {
      setActiveProjectTab('dew-laser');
    } else if (chapterTitle.includes('क्वांटम') || chapterTitle.includes('47')) {
      setActiveProjectTab('quantum-radar');
    } else if (chapterTitle.includes('मानवरहित') || chapterTitle.includes('स्वार्म') || chapterTitle.includes('42')) {
      setActiveProjectTab('swarm-intelligence');
    } else if (chapterTitle.includes('इंजन') || chapterTitle.includes('21')) {
      setActiveProjectTab('jet-engine');
    }
  }, [chapterTitle, initialTab]);

  // -------------------------------------------------------------
  // 1. UAV Flight Dynamics State
  // -------------------------------------------------------------
  const [throttle, setThrottle] = useState<number>(60);
  const [pitch, setPitch] = useState<number>(5);
  const [roll, setRoll] = useState<number>(0);
  const [kp, setKp] = useState<number>(2.4);
  const [kd, setKd] = useState<number>(1.1);
  const [simRunning, setSimRunning] = useState<boolean>(true);
  const [altitude, setAltitude] = useState<number>(45.2);
  const [velocity, setVelocity] = useState<number>(18.5);

  // -------------------------------------------------------------
  // 2. Radar Range & Doppler State
  // -------------------------------------------------------------
  const [targetRangeKm, setTargetRangeKm] = useState<number>(45);
  const [targetVelocityMs, setTargetVelocityMs] = useState<number>(340); // Mach ~1
  const [targetRcs, setTargetRcs] = useState<number>(1.5); // m^2
  const [rfFreqGhz, setRfFreqGhz] = useState<number>(10.0); // X-band
  const [txPowerKw, setTxPowerKw] = useState<number>(15);

  // Calculations for Radar
  // Doppler shift: fd = 2 * v / lambda, lambda = c / f = 3e8 / (rfFreqGhz * 1e9)
  const wavelength = 0.3 / rfFreqGhz; // in meters
  const dopplerShiftKhz = (2 * targetVelocityMs / wavelength) / 1000;
  // Simplified Radar Range Eq SNR: SNR ~ Pt * G^2 * lambda^2 * RCS / (R^4)
  const calculatedSnrDb = Math.max(
    -5,
    Math.min(45, (10 * Math.log10((txPowerKw * 1000 * Math.pow(wavelength, 2) * targetRcs) / Math.pow(targetRangeKm * 1000, 4)) + 195))
  );
  const isDetected = calculatedSnrDb > 10;

  // -------------------------------------------------------------
  // 3. Quad-Redundant Fly-By-Wire Voting State
  // -------------------------------------------------------------
  const [fccFault, setFccFault] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false
  });
  const [pilotStickDemand, setPilotStickDemand] = useState<number>(12); // degrees elevator

  const toggleFccFault = (num: number) => {
    setFccFault(prev => ({ ...prev, [num]: !prev[num] }));
  };

  const activeFccs = [1, 2, 3, 4].filter(num => !fccFault[num]);
  const votingPassed = activeFccs.length >= 2;
  const actuatorCommand = votingPassed ? pilotStickDemand : 0;

  // -------------------------------------------------------------
  // 4. Turbofan Jet Engine FADEC & Brayton Simulator State
  // -------------------------------------------------------------
  const [tlaPercent, setTlaPercent] = useState<number>(85); // Throttle Lever Angle (10% to 110%)
  const [opr, setOpr] = useState<number>(28); // Overall Pressure Ratio (15 to 32)
  const [titK, setTitK] = useState<number>(1850); // Turbine Inlet Temperature (1300 to 1950 K)
  const [altitudeKm, setAltitudeKm] = useState<number>(2.5); // Altitude (0 to 15 km)
  const [tvcPitchDeg, setTvcPitchDeg] = useState<number>(0); // 3D TVC Pitch (-20 to +20 deg)
  const [fadecChannel, setFadecChannel] = useState<'dual' | 'channelA' | 'channelB'>('dual');

  const isAfterburner = tlaPercent > 100;
  const airDensityRatio = Math.exp(-altitudeKm / 8.5);
  const n1Rpm = Math.min(105, Number((45 + 55 * (Math.min(100, tlaPercent) / 100)).toFixed(1)));
  const n2Rpm = Math.min(105, Number((58 + 42 * (Math.min(100, tlaPercent) / 100)).toFixed(1)));
  const dryThrustKn = Number((54 * (Math.min(100, tlaPercent) / 100) * Math.pow(opr / 28, 0.35) * Math.pow(titK / 1850, 0.5) * airDensityRatio).toFixed(1));
  const wetThrustKn = isAfterburner 
    ? Number((dryThrustKn * (1 + 0.55 * ((tlaPercent - 100) / 10))).toFixed(1)) 
    : dryThrustKn;
  const bladeMetalTempC = Math.round((titK - 273.15) - 450); // 450°C reduction from TBC + Film Cooling
  const coolingSafetyMarginC = 1455 - bladeMetalTempC; // vs Nickel melting point (1455°C)
  const surgeMarginPercent = Math.max(12, Math.round(28 - (opr - 24) * 0.7 - (isAfterburner ? 4 : 0)));
  const sfcKgDanH = isAfterburner 
    ? (1.75 + ((tlaPercent - 100) / 10) * 0.15).toFixed(2) 
    : (0.78 - (opr - 28) * 0.005).toFixed(2);

  // Animation Loop for Flight Sim
  useEffect(() => {
    if (!simRunning) return;
    const interval = setInterval(() => {
      setAltitude(prev => {
        const targetAlt = throttle * 0.8;
        const diff = targetAlt - prev;
        return Number((prev + diff * 0.05).toFixed(1));
      });
      setVelocity(prev => {
        const targetVel = (throttle * 0.4) + Math.abs(pitch) * 0.5;
        return Number((prev + (targetVel - prev) * 0.08).toFixed(1));
      });
    }, 100);
    return () => clearInterval(interval);
  }, [simRunning, throttle, pitch]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500 text-black">
                PRACTICAL ENGINEERING LABS
              </span>
              <span className="text-xs text-zinc-400">Safe Interactive Web Simulations</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
              प्रायोगिक रक्षा इंजीनियरिंग सिमुलेटर (Interactive Simulators)
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
              बिना किसी भौतिक खतरे के, शुद्ध भौतिक विज्ञान और नियंत्रण गणित के आधार पर रीयल-टाइम सिमुलेशन का प्रत्यक्ष अनुभव।
            </p>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
          <button
            onClick={() => setActiveProjectTab('uav-flight')}
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeProjectTab === 'uav-flight'
                ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                : 'bg-zinc-950/60 hover:bg-zinc-800/60 text-zinc-400 border border-zinc-800'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>1. UAV फ्लाइट डायनामिक्स & PID</span>
          </button>

          <button
            onClick={() => setActiveProjectTab('radar-doppler')}
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeProjectTab === 'radar-doppler'
                ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                : 'bg-zinc-950/60 hover:bg-zinc-800/60 text-zinc-400 border border-zinc-800'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>2. रडार समीकरण व डॉपलर स्पेक्ट्रम</span>
          </button>

          <button
            onClick={() => setActiveProjectTab('fly-by-wire')}
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeProjectTab === 'fly-by-wire'
                ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                : 'bg-zinc-950/60 hover:bg-zinc-800/60 text-zinc-400 border border-zinc-800'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>3. क्वाड-रिडंडेंट FBW वोटिंग लूप</span>
          </button>

          <button
            onClick={() => setActiveProjectTab('jet-engine')}
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeProjectTab === 'jet-engine'
                ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                : 'bg-zinc-950/60 hover:bg-zinc-800/60 text-zinc-400 border border-zinc-800'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>4. टर्बोफैन जेट इंजन FADEC व ब्रेटन चक्र</span>
          </button>

          <button
            onClick={() => setActiveProjectTab('scramjet-flow')}
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeProjectTab === 'scramjet-flow'
                ? 'bg-red-500 text-black font-bold shadow-md shadow-red-500/20'
                : 'bg-zinc-950/60 hover:bg-zinc-800/60 text-zinc-400 border border-zinc-800'
            }`}
          >
            <Wind className="w-3.5 h-3.5 text-red-400" />
            <span>🚀 5. स्क्रैमजेट Mach 6+ फ्लो (Ch 43)</span>
          </button>

          <button
            onClick={() => setActiveProjectTab('dew-laser')}
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeProjectTab === 'dew-laser'
                ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                : 'bg-zinc-950/60 hover:bg-zinc-800/60 text-zinc-400 border border-zinc-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>⚡ 6. 100 kW लेजर DEW (Ch 48)</span>
          </button>

          <button
            onClick={() => setActiveProjectTab('quantum-radar')}
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeProjectTab === 'quantum-radar'
                ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                : 'bg-zinc-950/60 hover:bg-zinc-800/60 text-zinc-400 border border-zinc-800'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-cyan-400" />
            <span>⚛️ 7. क्वांटम रडार (Ch 47)</span>
          </button>

          <button
            onClick={() => setActiveProjectTab('swarm-intelligence')}
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
              activeProjectTab === 'swarm-intelligence'
                ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                : 'bg-zinc-950/60 hover:bg-zinc-800/60 text-zinc-400 border border-zinc-800'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>🤖 8. स्वार्म MUM-T (Ch 42)</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SIMULATOR 1: UAV FLIGHT DYNAMICS */}
      {/* ========================================================= */}
      {activeProjectTab === 'uav-flight' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-150">
          {/* Controls Panel */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                Flight Control Inputs
              </span>
              <button
                onClick={() => setSimRunning(!simRunning)}
                className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 flex items-center gap-1.5"
              >
                {simRunning ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
                <span>{simRunning ? 'Pause' : 'Resume'}</span>
              </button>
            </div>

            {/* Sliders */}
            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex justify-between text-zinc-300 font-mono mb-1">
                  <span>थ्रॉटल (Throttle %):</span>
                  <span className="text-amber-400 font-bold">{throttle}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={throttle}
                  onChange={(e) => setThrottle(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-zinc-800"
                />
              </div>

              <div>
                <div className="flex justify-between text-zinc-300 font-mono mb-1">
                  <span>पिच कोण (Pitch Angle):</span>
                  <span className="text-cyan-400 font-bold">{pitch}°</span>
                </div>
                <input
                  type="range"
                  min="-30"
                  max="30"
                  value={pitch}
                  onChange={(e) => setPitch(Number(e.target.value))}
                  className="w-full accent-cyan-500 bg-zinc-800"
                />
              </div>

              <div>
                <div className="flex justify-between text-zinc-300 font-mono mb-1">
                  <span>रोल कोण (Roll Angle):</span>
                  <span className="text-indigo-400 font-bold">{roll}°</span>
                </div>
                <input
                  type="range"
                  min="-30"
                  max="30"
                  value={roll}
                  onChange={(e) => setRoll(Number(e.target.value))}
                  className="w-full accent-indigo-500 bg-zinc-800"
                />
              </div>

              <div className="pt-2 border-t border-zinc-800 space-y-3">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  PID Tuning Parameters
                </span>
                <div>
                  <div className="flex justify-between text-zinc-400 font-mono mb-1 text-[11px]">
                    <span>Proportional (Kp):</span>
                    <span className="text-amber-400">{kp}</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.1"
                    value={kp}
                    onChange={(e) => setKp(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-zinc-800"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-zinc-400 font-mono mb-1 text-[11px]">
                    <span>Derivative (Kd):</span>
                    <span className="text-emerald-400">{kd}</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="3.0"
                    step="0.1"
                    value={kd}
                    onChange={(e) => setKd(Number(e.target.value))}
                    className="w-full accent-emerald-500 bg-zinc-800"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Artificial Horizon & Telemetry Stage */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Attitude Director Indicator (ADI)
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Physics Model
              </span>
            </div>

            {/* Horizon Graphic */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden border-4 border-zinc-700 shadow-2xl bg-sky-900 flex items-center justify-center">
              {/* Sky and Ground transition based on pitch & roll */}
              <div
                className="absolute w-full h-[300px] transition-transform duration-100 ease-out"
                style={{
                  transform: `translateY(${-pitch * 2.5}px) rotate(${roll}deg)`,
                  background: 'linear-gradient(to bottom, #0284c7 50%, #78350f 50%)'
                }}
              />
              {/* Center Crosshair Reference */}
              <div className="absolute w-16 h-1 bg-amber-400 z-10 rounded-full shadow" />
              <div className="absolute w-2.5 h-2.5 rounded-full border-2 border-amber-400 z-10" />
              <div className="absolute w-1 h-6 bg-amber-400 z-10" />
            </div>

            {/* Live Telemetry Readouts */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-800 font-mono text-center">
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-[10px] text-zinc-500 uppercase block">Altitude</span>
                <span className="text-base font-bold text-emerald-400">{altitude} m</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-[10px] text-zinc-500 uppercase block">Airspeed</span>
                <span className="text-base font-bold text-cyan-400">{velocity} m/s</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-[10px] text-zinc-500 uppercase block">Status</span>
                <span className="text-xs font-bold text-amber-400 block mt-0.5">
                  {altitude > 10 ? 'Stable Hover' : 'Ground'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SIMULATOR 2: RADAR RANGE & DOPPLER */}
      {/* ========================================================= */}
      {activeProjectTab === 'radar-doppler' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-150">
          {/* Radar Inputs */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase block border-b border-zinc-800 pb-3">
              Radar System Parameters
            </span>

            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex justify-between text-zinc-300 font-mono mb-1">
                  <span>लक्ष्य की दूरी (Range Km):</span>
                  <span className="text-amber-400 font-bold">{targetRangeKm} km</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  value={targetRangeKm}
                  onChange={(e) => setTargetRangeKm(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-zinc-800"
                />
              </div>

              <div>
                <div className="flex justify-between text-zinc-300 font-mono mb-1">
                  <span>लक्ष्य का वेग (Target Velocity):</span>
                  <span className="text-cyan-400 font-bold">{targetVelocityMs} m/s ({((targetVelocityMs * 3.6)).toFixed(0)} km/h)</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1200"
                  step="10"
                  value={targetVelocityMs}
                  onChange={(e) => setTargetVelocityMs(Number(e.target.value))}
                  className="w-full accent-cyan-500 bg-zinc-800"
                />
              </div>

              <div>
                <div className="flex justify-between text-zinc-300 font-mono mb-1">
                  <span>रडार क्रॉस-सेक्शन (RCS σ m²):</span>
                  <span className="text-emerald-400 font-bold">{targetRcs} m²</span>
                </div>
                <input
                  type="range"
                  min="0.01"
                  max="10.0"
                  step="0.1"
                  value={targetRcs}
                  onChange={(e) => setTargetRcs(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-zinc-800"
                />
              </div>

              <div>
                <div className="flex justify-between text-zinc-300 font-mono mb-1">
                  <span>कैरियर आवृत्ति (RF Freq GHz):</span>
                  <span className="text-indigo-400 font-bold">{rfFreqGhz} GHz</span>
                </div>
                <input
                  type="range"
                  min="2.0"
                  max="18.0"
                  step="0.5"
                  value={rfFreqGhz}
                  onChange={(e) => setRfFreqGhz(Number(e.target.value))}
                  className="w-full accent-indigo-500 bg-zinc-800"
                />
              </div>
            </div>
          </div>

          {/* Radar FFT Spectrum & Output Display */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Doppler Filter Bank & A-Scope
              </span>
              <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${
                isDetected ? 'bg-emerald-950 border border-emerald-500/40 text-emerald-300' : 'bg-rose-950 border border-rose-500/40 text-rose-300'
              }`}>
                {isDetected ? 'TARGET ACQUIRED (LOCKED)' : 'BELOW DETECTION THRESHOLD'}
              </span>
            </div>

            {/* Visual Signal Spectrum Bar */}
            <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 font-mono space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Signal-to-Noise Ratio (SNR):</span>
                <span className={`font-bold ${isDetected ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {calculatedSnrDb.toFixed(1)} dB (Threshold: 10 dB)
                </span>
              </div>
              <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-200 ${isDetected ? 'bg-gradient-to-r from-amber-500 to-emerald-400' : 'bg-rose-500'}`}
                  style={{ width: `${Math.max(5, Math.min(100, (calculatedSnrDb + 10) * 2))}%` }}
                />
              </div>

              <div className="pt-3 border-t border-zinc-800 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-zinc-500 block text-[10px]">WAVELENGTH (λ):</span>
                  <span className="text-zinc-200 font-bold font-mono">{(wavelength * 100).toFixed(2)} cm</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">DOPPLER SHIFT (fd):</span>
                  <span className="text-cyan-400 font-bold font-mono">{dopplerShiftKhz.toFixed(2)} kHz</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              <strong className="text-amber-400">इंजीनियरिंग नियम:</strong> रडार समीकरण के अनुसार, दूरी दोगुनी करने पर लौटने वाली ऊर्जा 16 गुना (2⁴) घट जाती है। उच्च डॉपलर शिफ्ट उच्च गति वाले लड़ाकू विमानों को ग्राउंड क्लटर से अलग पहचानने में मदद करता है।
            </p>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SIMULATOR 3: QUAD-REDUNDANT FLY-BY-WIRE */}
      {/* ========================================================= */}
      {activeProjectTab === 'fly-by-wire' && (
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-6 animate-in fade-in duration-150">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                Quadruplex Fly-By-Wire Architecture (LCA Tejas DFCS Logic)
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                त्रुटि-सहिष्णु वोटिंग प्रणाली (Fault-Tolerant Voting)
              </h3>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold self-start sm:self-auto ${
              votingPassed ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-rose-950 text-rose-300 border border-rose-500/30'
            }`}>
              {votingPassed ? 'SYSTEM HEALTHY • FLIGHT CLEARED' : 'CRITICAL FLIGHT SYSTEM DEGRADED'}
            </span>
          </div>

          {/* 4 FCC Computers Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => {
              const hasFault = fccFault[num];
              return (
                <div
                  key={num}
                  className={`p-4 rounded-xl border transition-all ${
                    hasFault
                      ? 'bg-rose-950/20 border-rose-500/50 text-rose-300'
                      : 'bg-zinc-950/80 border-emerald-500/40 text-emerald-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold">FCC CHANNEL {num}</span>
                    <span className={`w-2 h-2 rounded-full ${hasFault ? 'bg-rose-500 animate-ping' : 'bg-emerald-400'}`} />
                  </div>
                  <p className="text-xs font-mono mt-2">
                    Status: <span className="font-bold">{hasFault ? 'CHANNEL FAULT' : 'NORMAL ACTIVE'}</span>
                  </p>
                  <p className="text-[11px] font-mono opacity-80 mt-1">
                    Output: {hasFault ? 'ERR / INVALID' : `${pilotStickDemand}° Deflection`}
                  </p>
                  <button
                    onClick={() => toggleFccFault(num)}
                    className={`mt-3 w-full py-1 rounded text-[11px] font-mono font-bold transition-all cursor-pointer ${
                      hasFault ? 'bg-rose-600 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
                    }`}
                  >
                    {hasFault ? 'त्रुटि हटाएं (Restore)' : 'त्रुटि इंजेक्ट करें (Inject Fault)'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Pilot Stick & Actuator Output */}
          <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center font-mono text-xs">
            <div>
              <span className="text-zinc-400 block mb-1">पायलट स्टिक इनपुट (Pilot Demand):</span>
              <input
                type="range"
                min="-20"
                max="20"
                value={pilotStickDemand}
                onChange={(e) => setPilotStickDemand(Number(e.target.value))}
                className="w-full accent-amber-500 bg-zinc-800"
              />
              <span className="text-amber-400 font-bold block mt-1">{pilotStickDemand}°</span>
            </div>

            <div className="text-center sm:border-x sm:border-zinc-800 px-4">
              <span className="text-zinc-400 block">सक्रिय मतदान कोर (Active Votes):</span>
              <span className="text-xl font-bold text-white block mt-1">{activeFccs.length} / 4</span>
              <span className="text-[10px] text-zinc-500">2-of-4 Minimum Required</span>
            </div>

            <div className="text-right">
              <span className="text-zinc-400 block">एक्चुएटर परिणाम (Elevon Position):</span>
              <span className={`text-xl font-bold block mt-1 ${votingPassed ? 'text-emerald-400' : 'text-rose-500'}`}>
                {actuatorCommand}°
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SIMULATOR 4: TURBOFAN JET ENGINE FADEC & BRAYTON CYCLE */}
      {/* ========================================================= */}
      {activeProjectTab === 'jet-engine' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-150">
          {/* Controls Panel */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-5">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-400" />
                FADEC Propulsion Controls
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                MIL-E-5007E Core
              </span>
            </div>

            {/* Throttle Lever Angle (TLA) Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-300 flex items-center gap-1">
                  <Gauge className="w-3.5 h-3.5 text-amber-400" />
                  थ्रॉटल लिवर एंगल (TLA %):
                </span>
                <span className={`font-bold ${isAfterburner ? 'text-orange-400 animate-pulse' : 'text-cyan-400'}`}>
                  {tlaPercent}% {isAfterburner ? '(REHEAT / AFTERBURNER)' : tlaPercent > 60 ? '(MILITARY DRY)' : '(IDLE)'}
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="110"
                step="1"
                value={tlaPercent}
                onChange={(e) => setTlaPercent(Number(e.target.value))}
                className="w-full accent-amber-500 bg-zinc-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>Idle (15%)</span>
                <span>Mil Dry (100%)</span>
                <span className="text-orange-400 font-semibold">Afterburner (110%)</span>
              </div>
            </div>

            {/* Overall Pressure Ratio (OPR) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-300">कंप्रेसर ओवरऑल प्रेशर रेशियो (OPR):</span>
                <span className="text-amber-400 font-bold">{opr}:1</span>
              </div>
              <input
                type="range"
                min="18"
                max="32"
                step="1"
                value={opr}
                onChange={(e) => setOpr(Number(e.target.value))}
                className="w-full accent-amber-500 bg-zinc-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>18:1 (Older Gen)</span>
                <span className="text-cyan-400">28:1 (Kaveri / 4.5 Gen)</span>
                <span className="text-emerald-400">32:1 (Next-Gen AMCA)</span>
              </div>
            </div>

            {/* Turbine Inlet Temperature (TIT) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-300 flex items-center gap-1">
                  <Thermometer className="w-3.5 h-3.5 text-rose-400" />
                  टर्बाइन इनलेट तापमान (TIT):
                </span>
                <span className={`font-bold ${titK > 1850 ? 'text-rose-400' : 'text-amber-400'}`}>
                  {titK} K ({(titK - 273.15).toFixed(0)}°C)
                </span>
              </div>
              <input
                type="range"
                min="1400"
                max="1950"
                step="25"
                value={titK}
                onChange={(e) => setTitK(Number(e.target.value))}
                className="w-full accent-rose-500 bg-zinc-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>1400 K</span>
                <span>1800 K (Nickel Melt Point)</span>
                <span className="text-rose-400">1950 K (SX Blade + TBC)</span>
              </div>
            </div>

            {/* Altitude & Air Density */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-300 flex items-center gap-1">
                  <Wind className="w-3.5 h-3.5 text-cyan-400" />
                  उड़ान ऊंचाई (Flight Altitude):
                </span>
                <span className="text-cyan-400 font-bold">{altitudeKm.toFixed(1)} km</span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="0.5"
                value={altitudeKm}
                onChange={(e) => setAltitudeKm(Number(e.target.value))}
                className="w-full accent-cyan-500 bg-zinc-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>0 km (Sea Level)</span>
                <span>8 km</span>
                <span>15 km (Stratosphere)</span>
              </div>
            </div>

            {/* 3D TVC Pitch Angle */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-300">3D थ्रस्ट वेक्टरिंग नोजल पिच (TVC Pitch):</span>
                <span className="text-amber-400 font-bold">{tvcPitchDeg > 0 ? `+${tvcPitchDeg}°` : `${tvcPitchDeg}°`}</span>
              </div>
              <input
                type="range"
                min="-20"
                max="20"
                step="1"
                value={tvcPitchDeg}
                onChange={(e) => setTvcPitchDeg(Number(e.target.value))}
                className="w-full accent-amber-500 bg-zinc-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>-20° (Nose Down)</span>
                <span>0° (Axial)</span>
                <span>+20° (Pitch Up / Pugachev Cobra)</span>
              </div>
            </div>

            {/* FADEC Redundancy Channel Selector */}
            <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400">FADEC डिजिटल कंट्रोलर चैनल:</span>
                <span className="text-emerald-400 font-bold">10 ms लूप सक्रिय</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setFadecChannel('dual')}
                  className={`px-2 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
                    fadecChannel === 'dual'
                      ? 'bg-emerald-500 text-black font-bold'
                      : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Dual Channel A+B
                </button>
                <button
                  onClick={() => setFadecChannel('channelA')}
                  className={`px-2 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
                    fadecChannel === 'channelA'
                      ? 'bg-amber-500 text-black font-bold'
                      : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Channel A Only
                </button>
                <button
                  onClick={() => setFadecChannel('channelB')}
                  className={`px-2 py-1.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
                    fadecChannel === 'channelB'
                      ? 'bg-cyan-500 text-black font-bold'
                      : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Channel B Only
                </button>
              </div>
            </div>
          </div>

          {/* Visual Engine Cross-Section & Telemetry Dashboard */}
          <div className="lg:col-span-7 space-y-5">
            {/* Real-Time Telemetry Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                  कुल निकास थ्रस्ट (Thrust)
                </span>
                <div className="flex items-baseline gap-1">
                  <span className={`text-2xl font-black font-mono ${isAfterburner ? 'text-orange-400' : 'text-cyan-300'}`}>
                    {wetThrustKn}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">kN</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono block">
                  ड्राई: {dryThrustKn} kN {isAfterburner && `(+${(wetThrustKn - dryThrustKn).toFixed(1)} kN Reheat)`}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                  विशिष्ट ईंधन खपत (SFC)
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black font-mono text-amber-400">
                    {sfcKgDanH}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">kg/daN·h</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono block">
                  {isAfterburner ? 'उच्च आफ्टरबर्नर प्रवाह' : 'अनुकूलित क्रूज़ दक्षता'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                  कंप्रेसर सर्ज मार्जिन
                </span>
                <div className="flex items-baseline gap-1">
                  <span className={`text-2xl font-black font-mono ${surgeMarginPercent > 18 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {surgeMarginPercent}%
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono block">
                  {surgeMarginPercent > 18 ? 'सर्ज सुरक्षित (VSV Active)' : 'सीमांत मार्जिन'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                  SX ब्लेड तापमान मार्जिन
                </span>
                <div className="flex items-baseline gap-1">
                  <span className={`text-2xl font-black font-mono ${coolingSafetyMarginC > 200 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    +{coolingSafetyMarginC}°C
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono block">
                  धातु: {bladeMetalTempC}°C (गलनांक 1455°C)
                </span>
              </div>
            </div>

            {/* Spool RPM Gauges */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-300 font-bold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  डुअल-स्पूल घूर्णन गति (Coaxial Dual-Spool Speeds)
                </span>
                <span className="text-zinc-500 text-[11px]">Dynamic Shaft Feedback</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* LP Spool (N1) */}
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400">लो-प्रेशर फैन (LP Spool N1):</span>
                    <span className="text-cyan-400 font-bold">{n1Rpm}% ({Math.round(n1Rpm * 115)} RPM)</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-200"
                      style={{ width: `${Math.min(100, n1Rpm)}%` }}
                    />
                  </div>
                </div>

                {/* HP Spool (N2) */}
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-400">हाई-प्रेशर कोर (HP Spool N2):</span>
                    <span className="text-amber-400 font-bold">{n2Rpm}% ({Math.round(n2Rpm * 172)} RPM)</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-200"
                      style={{ width: `${Math.min(100, n2Rpm)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Engine Cross-Section Graphic */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-zinc-300">
                  गैस टर्बाइन आंतरिक प्रवाह व आफ्टरबर्नर स्टेट (Aero-Thermodynamic Flowfield)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                  TVC Deflection: {tvcPitchDeg}°
                </span>
              </div>

              {/* Animated Engine Schematic */}
              <div className="h-44 w-full bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 rounded-xl border border-zinc-800 relative flex items-center justify-between px-3 sm:px-6 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

                {/* 1. DSI / Intake Stage */}
                <div className="relative z-10 flex flex-col items-center space-y-1">
                  <div className="w-12 h-24 border-2 border-cyan-500/50 rounded-l-2xl bg-cyan-950/30 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-cyan-400 animate-pulse" />
                  </div>
                  <span className="text-[9px] font-mono text-cyan-400">Inlet Fan</span>
                </div>

                {/* 2. Compressor Stage */}
                <div className="relative z-10 flex flex-col items-center space-y-1">
                  <div className="w-14 h-20 border-2 border-zinc-600 rounded-lg bg-zinc-900 flex flex-col justify-around py-1 px-1">
                    <div className="h-1 bg-zinc-500 rounded" />
                    <div className="h-1 bg-zinc-400 rounded" />
                    <div className="h-1 bg-zinc-500 rounded" />
                    <div className="h-1 bg-zinc-400 rounded" />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400">HPC {opr}:1</span>
                </div>

                {/* 3. Combustor */}
                <div className="relative z-10 flex flex-col items-center space-y-1">
                  <div className="w-14 h-16 border-2 border-orange-500/60 rounded-xl bg-orange-950/40 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-orange-500/20 animate-pulse" />
                    <Flame className="w-6 h-6 text-orange-400 relative z-10 animate-bounce" />
                  </div>
                  <span className="text-[9px] font-mono text-orange-400">{titK}K Core</span>
                </div>

                {/* 4. Single-Crystal Turbine */}
                <div className="relative z-10 flex flex-col items-center space-y-1">
                  <div className="w-12 h-18 border-2 border-amber-500/60 rounded-lg bg-amber-950/30 flex items-center justify-center">
                    <RotateCw className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: `${Math.max(0.3, 2 - (tlaPercent / 60))}s` }} />
                  </div>
                  <span className="text-[9px] font-mono text-amber-400">SX Turbine</span>
                </div>

                {/* 5. Afterburner Duct & Reheat Flame */}
                <div className="relative z-10 flex flex-col items-center space-y-1 flex-1 px-2">
                  <div className={`w-full h-20 border-2 rounded-lg relative flex items-center justify-center transition-all duration-300 ${
                    isAfterburner 
                      ? 'border-orange-500 bg-gradient-to-r from-orange-950/60 via-amber-900/60 to-orange-600/50 shadow-lg shadow-orange-500/20' 
                      : 'border-zinc-800 bg-zinc-900/40'
                  }`}>
                    {isAfterburner ? (
                      <div className="flex items-center gap-1 animate-pulse">
                        <Flame className="w-7 h-7 text-orange-400" />
                        <span className="text-[11px] font-mono font-bold text-orange-200">
                          REHEAT ACTIVE (2200 K)
                        </span>
                      </div>
                    ) : (
                      <span className="text-[10px] font-mono text-zinc-500">Dry Exhaust Flow</span>
                    )}
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400">Afterburner Reheat</span>
                </div>

                {/* 6. 3D Con-Di TVC Nozzle */}
                <div 
                  className="relative z-10 flex flex-col items-center space-y-1 transition-transform duration-200"
                  style={{ transform: `rotate(${tvcPitchDeg}deg)` }}
                >
                  <div className={`w-14 h-22 border-2 rounded-r-2xl flex items-center justify-center relative ${
                    isAfterburner ? 'border-orange-400 bg-orange-900/50' : 'border-cyan-500/60 bg-zinc-900'
                  }`}>
                    {isAfterburner && (
                      <div className="absolute -right-8 w-10 h-8 bg-gradient-to-r from-orange-500 via-amber-400 to-transparent blur-[2px] rounded-full animate-pulse" />
                    )}
                    <span className="text-[10px] font-mono text-zinc-200 font-bold">TVC</span>
                  </div>
                  <span className="text-[9px] font-mono text-amber-400">{tvcPitchDeg}° Pitch</span>
                </div>
              </div>

              {/* Physical Insight Note */}
              <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-300 leading-relaxed">
                  <strong className="text-zinc-100 font-medium">थर्मल इंजीनियरिंग रहस्य:</strong> टर्बाइन गैस का तापमान {titK} K ({(titK - 273.15).toFixed(0)}°C) होने के बावजूद, 
                  येट्रिआ-स्टेबिलाइज्ड जिरकोनिया (YSZ) सिरेमिक कोटिंग और 3D लेजर फिल्म कूलिंग तकनीक ब्लेड धातु का तापमान मात्र {bladeMetalTempC}°C पर बनाए रखती है, 
                  जिससे निकेल के 1455°C गलनांक से <strong>+{coolingSafetyMarginC}°C का सुरक्षित मार्जिन</strong> मिलता है।
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* SIMULATOR 5: HYPERSONIC SCRAMJET FLOW SIMULATOR */}
      {/* ========================================================= */}
      {activeProjectTab === 'scramjet-flow' && (
        <div className="animate-in fade-in duration-150">
          <ScramjetFlowSimulator />
        </div>
      )}

      {/* ========================================================= */}
      {/* SIMULATOR 6: DIRECTED ENERGY WEAPON (DEW) LASER SIMULATOR */}
      {/* ========================================================= */}
      {activeProjectTab === 'dew-laser' && (
        <div className="animate-in fade-in duration-150">
          <DewLaserSimulator />
        </div>
      )}

      {/* ========================================================= */}
      {/* SIMULATOR 7: QUANTUM ILLUMINATION RADAR & QKD SIMULATOR */}
      {/* ========================================================= */}
      {activeProjectTab === 'quantum-radar' && (
        <div className="animate-in fade-in duration-150">
          <QuantumRadarSimulator />
        </div>
      )}

      {/* ========================================================= */}
      {/* SIMULATOR 8: AUTONOMOUS DRONE SWARM & MUM-T SIMULATOR */}
      {/* ========================================================= */}
      {activeProjectTab === 'swarm-intelligence' && (
        <div className="animate-in fade-in duration-150">
          <SwarmIntelligenceSimulator />
        </div>
      )}
    </div>
  );
};
