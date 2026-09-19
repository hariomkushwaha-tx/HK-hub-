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
  Compass
} from 'lucide-react';
import { SafePracticalProject } from '../../../types/weapon';
import { SAFE_PRACTICAL_PROJECTS } from '../../../data/weaponEngineeringData';

interface PracticalSimulatorsViewProps {
  projects?: SafePracticalProject[];
  chapterTitle: string;
}

export const PracticalSimulatorsView: React.FC<PracticalSimulatorsViewProps> = ({
  projects = SAFE_PRACTICAL_PROJECTS,
  chapterTitle
}) => {
  const [activeProjectTab, setActiveProjectTab] = useState<string>('uav-flight');

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
    </div>
  );
};
