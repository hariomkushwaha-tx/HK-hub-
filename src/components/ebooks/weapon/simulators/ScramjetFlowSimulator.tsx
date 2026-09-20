import React, { useState } from 'react';
import { 
  Flame, 
  Wind, 
  Gauge, 
  Thermometer, 
  AlertTriangle, 
  CheckCircle, 
  Radio, 
  Sliders, 
  Zap,
  ShieldCheck,
  RotateCw
} from 'lucide-react';

export const ScramjetFlowSimulator: React.FC = () => {
  // Simulator Parameters
  const [machNumber, setMachNumber] = useState<number>(6.5); // Mach 4.0 to 8.5
  const [altitudeKm, setAltitudeKm] = useState<number>(30); // 18 to 38 km
  const [rampAngleDeg, setRampAngleDeg] = useState<number>(14); // 8 to 22 deg
  const [phiRatio, setPhiRatio] = useState<number>(1.0); // 0.4 to 1.6 equivalence ratio
  const [fuelType, setFuelType] = useState<'kerosene' | 'hydrogen'>('kerosene');
  const [aoaDeg, setAoaDeg] = useState<number>(2); // Angle of attack -2 to +6 deg

  // Atmospheric Model at given altitude (US Standard Atmosphere approx)
  const ambientTempK = Math.max(210, 288.15 - 6.5 * Math.min(11, altitudeKm) + (altitudeKm > 20 ? 1.0 * (altitudeKm - 20) : 0));
  const ambientPressureKPa = 101.3 * Math.exp(-altitudeKm / 7.2);
  const ambientSoundSpeedMs = Math.sqrt(1.4 * 287 * ambientTempK);
  const flightVelocityMs = machNumber * ambientSoundSpeedMs;

  // Stagnation Temperature: T_stag = T_amb * (1 + 0.2 * M^2)
  const stagnationTempK = ambientTempK * (1 + 0.2 * Math.pow(machNumber, 2));
  const stagnationTempC = Math.round(stagnationTempK - 273.15);

  // Shockwave Calculation: approximate oblique shock angle beta
  // theta-beta-M approximation for gamma=1.4
  const effectiveTheta = (rampAngleDeg + aoaDeg) * (Math.PI / 180);
  const sinBetaApprox = Math.min(0.95, (1 / machNumber) * Math.sqrt((1.4 + 1) / 2 * (1 + 0.4 * Math.pow(machNumber, 2) * Math.sin(effectiveTheta))));
  const shockAngleDeg = Math.min(48, Math.max(12, Math.round(Math.asin(sinBetaApprox) * (180 / Math.PI))));

  // Compression Pressure Ratio P2/P1 across intake ramps
  const compressionRatio = Math.round(Math.pow(1 + 0.2 * Math.pow(machNumber * Math.sin(effectiveTheta), 2), 3.5) * 4.2);
  const combustorStaticPressureKPa = (ambientPressureKPa * compressionRatio).toFixed(1);

  // Combustor entrance Mach number (remains supersonic in scramjet!)
  const mnInCombustor = Math.max(1.1, Number((machNumber / (1 + 0.18 * Math.pow(machNumber, 0.8) * Math.sin(effectiveTheta))).toFixed(2)));

  // Air velocity in combustor
  const combustorFlowVelocityMs = Math.round(mnInCombustor * Math.sqrt(1.4 * 287 * (stagnationTempK * 0.65)));

  // Residence Time in 1.2-meter combustor: tau = L / v (in milliseconds)
  const combustorLengthM = 1.2;
  const residenceTimeMs = Number(((combustorLengthM / combustorFlowVelocityMs) * 1000).toFixed(2));

  // Combustion State
  const isOptimalResidence = residenceTimeMs >= 0.75;
  const isBackpressureUnstart = phiRatio > 1.35 && machNumber < 5.0; // Inflow choking
  const isPlasmaBlackout = stagnationTempC > 1900;

  // Net Thrust Calculation (kN)
  const massFlowKgS = Math.max(2, Math.round(0.08 * (ambientPressureKPa / 10) * machNumber * Math.cos(effectiveTheta) * 12));
  const heatOfCombustionMjKg = fuelType === 'hydrogen' ? 120 : 43;
  const fuelFlowKgS = (massFlowKgS * (fuelType === 'hydrogen' ? 0.029 : 0.068) * phiRatio).toFixed(2);
  const netThrustKn = isBackpressureUnstart 
    ? 0 
    : Number((massFlowKgS * (combustorFlowVelocityMs * 0.45 * Math.sqrt(phiRatio)) / 1000).toFixed(1));
  const ispSeconds = isBackpressureUnstart ? 0 : Math.round(fuelType === 'hydrogen' ? 2400 * Math.min(1.2, 1/phiRatio) : 1150 * Math.min(1.2, 1/phiRatio));

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-red-950/40 via-zinc-900 to-amber-950/30 border border-red-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 font-mono text-[11px] font-bold border border-red-500/30">
              Mach 6+ HSTDV Aerothermodynamics
            </span>
            <span className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 font-mono text-[10px]">
              DRDO Scramjet Flow Engine
            </span>
          </div>
          <h3 className="text-base font-bold text-zinc-100">
            हाइपरसोनिक स्क्रैमजेट प्रवाह एवं सुपरसोनिक दहन सिमुलेटर
          </h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-2xl">
            सुपरसोनिक वायु प्रवाह (Mach {mnInCombustor} इन-कम्बस्टर), ओब्लिक शॉकवेव संपीडन, और मात्र {residenceTimeMs} मिलीसेकंड के निवास समय (Residence Time) में दहन का लाइव भौतिकीय अनुकरण।
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 text-xs font-mono font-bold ${
            isBackpressureUnstart 
              ? 'bg-red-950 text-red-400 border-red-600 animate-pulse'
              : 'bg-emerald-950/70 text-emerald-300 border-emerald-800'
          }`}>
            {isBackpressureUnstart ? (
              <>
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>INLET UNSTART! (शॉक निष्कासन)</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>SUPERSONIC FLOW STABLE</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid: Controls & Visual Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              <span>हाइपरसोनिक उड़ान नियंत्रण</span>
            </span>
            <span className="text-[11px] font-mono text-zinc-400">
              V = {flightVelocityMs.toFixed(0)} m/s ({(flightVelocityMs * 3.6).toFixed(0)} km/h)
            </span>
          </div>

          <div className="space-y-3 text-xs">
            {/* Mach Slider */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>उड़ान गति (Flight Mach):</span>
                <span className="text-red-400 font-bold">Mach {machNumber}</span>
              </div>
              <input
                type="range"
                min="4.0"
                max="8.5"
                step="0.1"
                value={machNumber}
                onChange={(e) => setMachNumber(Number(e.target.value))}
                className="w-full accent-red-500 bg-zinc-800"
              />
            </div>

            {/* Altitude Slider */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>क्रूज़ ऊंचाई (Altitude):</span>
                <span className="text-cyan-400 font-bold">{altitudeKm} km (स्ट्रैटोस्फियर)</span>
              </div>
              <input
                type="range"
                min="18"
                max="38"
                step="1"
                value={altitudeKm}
                onChange={(e) => setAltitudeKm(Number(e.target.value))}
                className="w-full accent-cyan-500 bg-zinc-800"
              />
            </div>

            {/* Ramp Angle */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>इनटेक रैंप कोण (Wedge Angle θ):</span>
                <span className="text-amber-400 font-bold">{rampAngleDeg}°</span>
              </div>
              <input
                type="range"
                min="8"
                max="22"
                step="1"
                value={rampAngleDeg}
                onChange={(e) => setRampAngleDeg(Number(e.target.value))}
                className="w-full accent-amber-500 bg-zinc-800"
              />
            </div>

            {/* Equivalence Ratio */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>ईंधन-हवा समतुल्यता अनुपात (Equivalence Ratio Φ):</span>
                <span className="text-emerald-400 font-bold">{phiRatio.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.4"
                max="1.6"
                step="0.05"
                value={phiRatio}
                onChange={(e) => setPhiRatio(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-zinc-800"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 mt-0.5">
                <span>लीन (Φ &lt; 1)</span>
                <span>स्टॉइकिओमेट्रिक (1.0)</span>
                <span>रिच (Φ &gt; 1)</span>
              </div>
            </div>

            {/* Angle of Attack */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>आक्रमण कोण (Angle of Attack α):</span>
                <span className="text-purple-400 font-bold">{aoaDeg}°</span>
              </div>
              <input
                type="range"
                min="-2"
                max="6"
                step="1"
                value={aoaDeg}
                onChange={(e) => setAoaDeg(Number(e.target.value))}
                className="w-full accent-purple-500 bg-zinc-800"
              />
            </div>

            {/* Fuel Type Switch */}
            <div className="pt-2 border-t border-zinc-800">
              <label className="text-zinc-300 font-mono mb-1.5 block">ईंधन चयन (Fuel Selection):</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setFuelType('kerosene')}
                  className={`py-1.5 px-3 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                    fuelType === 'kerosene'
                      ? 'bg-amber-500 text-black font-bold'
                      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                  }`}
                >
                  ATF / केरोसिन (HSTDV)
                </button>
                <button
                  onClick={() => setFuelType('hydrogen')}
                  className={`py-1.5 px-3 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                    fuelType === 'hydrogen'
                      ? 'bg-cyan-500 text-black font-bold'
                      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                  }`}
                >
                  क्रायो लिक्विड H2 (High Isp)
                </button>
              </div>
            </div>
          </div>

          {/* Critical Warnings */}
          <div className="space-y-2 pt-2 border-t border-zinc-800">
            {isPlasmaBlackout && (
              <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/80 flex items-center gap-2 text-xs text-purple-300 font-mono">
                <Radio className="w-4 h-4 text-purple-400 animate-pulse flex-shrink-0" />
                <span>प्लाज्मा शीथ ब्लैकआउट: T &gt; 1900°C पर आयनित गैस RF रोक रही है। Ka-बैंड / लेजर लिंक सक्रिय।</span>
              </div>
            )}
            <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800 text-xs font-mono text-zinc-300 space-y-1">
              <div className="flex justify-between">
                <span className="text-zinc-400">शॉकवेव कोण (β):</span>
                <span className="text-amber-400 font-bold">{shockAngleDeg}°</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">कम्बस्टर स्टैटिक प्रेशर:</span>
                <span className="text-cyan-400 font-bold">{combustorStaticPressureKPa} kPa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">ईंधन प्रवाह दर:</span>
                <span className="text-emerald-400 font-bold">{fuelFlowKgS} kg/s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Engine Display Column (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Engine Cross-Section Interactive Schematic */}
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-mono font-bold text-zinc-200">
                HSTDV स्क्रैमजेट गैस-डायनामिक फ्लोफील्ड
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-amber-300">
                Inlet Mach: {machNumber} → Combustor: Mach {mnInCombustor}
              </span>
            </div>

            {/* SVG Flowfield Canvas */}
            <div className="relative w-full h-64 bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800/80 p-2">
              <svg viewBox="0 0 600 240" className="w-full h-full">
                <defs>
                  {/* High Temperature Plasma Gradient */}
                  <linearGradient id="plasmaGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                    <stop offset="30%" stopColor="#f97316" stopOpacity="0.7" />
                    <stop offset="60%" stopColor="#eab308" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
                  </linearGradient>

                  {/* Supersonic Flame Gradient */}
                  <linearGradient id="flameGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                    <stop offset="35%" stopColor="#f59e0b" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#ef4444" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
                  </linearGradient>

                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#27272a" strokeWidth="0.5" />
                  </pattern>
                </defs>

                <rect width="600" height="240" fill="url(#grid)" />

                {/* 1. Incoming Hypersonic Streamlines (Mach 6+) */}
                <g stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6">
                  <line x1="20" y1="40" x2="160" y2="40" />
                  <line x1="20" y1="80" x2="180" y2="80" />
                  <line x1="20" y1="120" x2="200" y2="120" />
                  <line x1="20" y1="160" x2="220" y2="160" />
                </g>

                {/* 2. Airframe Profile (Forebody Ramp + Cowl + Nozzle) */}
                {/* Upper Body */}
                <path d="M 40 40 L 580 40 L 580 60 L 360 60 L 260 75 L 40 40 Z" fill="#27272a" stroke="#71717a" strokeWidth="1.5" />

                {/* Lower Forebody Compression Ramp (Waverider wedge) */}
                <path 
                  d={`M 40 40 L ${160 + rampAngleDeg * 3} ${130 + rampAngleDeg} L 260 140 L 380 140 L 580 200 L 580 215 L 40 40 Z`} 
                  fill="#18181b" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                />

                {/* Cowl Lip (Intake opening) */}
                <path d="M 230 75 L 380 75 L 380 65 L 230 65 Z" fill="#3f3f46" stroke="#fbbf24" strokeWidth="1.5" />

                {/* 3. Oblique Shockwaves (Reflecting in Intake) */}
                {/* Bow shock from nose */}
                <line 
                  x1="40" y1="40" 
                  x2={230} y2={75 + (shockAngleDeg - 25) * 2} 
                  stroke="#ef4444" 
                  strokeWidth="2.5" 
                  strokeDasharray="4,2" 
                />
                {/* Second oblique shock */}
                <line 
                  x1={160 + rampAngleDeg * 3} y1={130 + rampAngleDeg} 
                  x2="245" y2="75" 
                  stroke="#f97316" 
                  strokeWidth="2" 
                />
                {/* Shock train inside isolator */}
                <line x1="245" y1="75" x2="280" y2="140" stroke="#eab308" strokeWidth="1.5" />
                <line x1="280" y1="140" x2="310" y2="75" stroke="#eab308" strokeWidth="1.5" />
                <line x1="310" y1="75" x2="340" y2="140" stroke="#eab308" strokeWidth="1.5" />

                {/* 4. Supersonic Combustor & Flameholding Cavities */}
                {/* Cavity Flameholder */}
                <rect x="290" y="140" width="30" height="12" fill="#450a0a" stroke="#ef4444" />
                <text x="292" y="149" fill="#fca5a5" fontSize="8" fontFamily="monospace">CAVITY</text>

                {/* Fuel Injector Strut */}
                <rect x="300" y="75" width="6" height="30" fill="#0284c7" />
                {/* Fuel spray lines */}
                <line x1="303" y1="105" x2="320" y2="108" stroke="#38bdf8" strokeWidth="2" />
                <line x1="303" y1="95" x2="325" y2="92" stroke="#38bdf8" strokeWidth="2" />

                {/* Supersonic Flame Plume (M=2 in combustor) */}
                {!isBackpressureUnstart ? (
                  <path 
                    d="M 315 85 Q 360 90 410 80 Q 480 110 580 170 L 580 195 Q 460 145 375 135 Z" 
                    fill="url(#flameGradient)" 
                    opacity="0.85" 
                  />
                ) : (
                  /* Shock Unstart Blowout */
                  <g>
                    <ellipse cx="230" cy="75" rx="25" ry="35" fill="#ef4444" opacity="0.6" className="animate-pulse" />
                    <text x="210" y="80" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="monospace">UNSTART</text>
                  </g>
                )}

                {/* 5. Extreme Plasma Sheath Layer at Stagnation Point */}
                <path d="M 38 38 Q 44 42 42 48" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
                <text x="50" y="32" fill="#fb7185" fontSize="9" fontFamily="monospace">UHTC Nose Tip (2200°C+)</text>

                {/* Labels */}
                <text x="240" y="60" fill="#fbbf24" fontSize="9" fontFamily="monospace">Cowl Lip</text>
                <text x="330" y="70" fill="#38bdf8" fontSize="9" fontFamily="monospace">Fuel Strut</text>
                <text x="440" y="160" fill="#a855f7" fontSize="9" fontFamily="monospace">Expansion Nozzle</text>
                <text x="20" y="225" fill="#71717a" fontSize="10" fontFamily="monospace">
                  DRDO HSTDV Geometry | Shock-Captured Supersonic Combustion
                </text>
              </svg>
            </div>

            {/* Performance Gauges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
                <span className="text-[10px] font-mono text-zinc-400 block mb-1">स्टैग्नेशन तापमान (T_stag)</span>
                <span className="text-sm font-mono font-bold text-red-400 flex items-center justify-center gap-1">
                  <Thermometer className="w-4 h-4 text-red-400" />
                  {stagnationTempC}°C
                </span>
                <span className="text-[9px] text-zinc-500 font-mono">UHTC 2500°C सेफ</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
                <span className="text-[10px] font-mono text-zinc-400 block mb-1">कम्बस्टर निवास समय (τ)</span>
                <span className="text-sm font-mono font-bold text-amber-400 flex items-center justify-center gap-1">
                  <RotateCw className="w-4 h-4 text-amber-400" />
                  {residenceTimeMs} ms
                </span>
                <span className="text-[9px] text-zinc-500 font-mono">
                  {isOptimalResidence ? '✓ स्थिर प्रज्वलन' : '⚠️ फ्लेमहोल्डिंग रिस्क'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
                <span className="text-[10px] font-mono text-zinc-400 block mb-1">सकल स्क्रैमजेट थ्रस्ट</span>
                <span className="text-sm font-mono font-bold text-emerald-400 flex items-center justify-center gap-1">
                  <Flame className="w-4 h-4 text-emerald-400" />
                  {netThrustKn} kN
                </span>
                <span className="text-[9px] text-zinc-500 font-mono">Net Positive Thrust</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
                <span className="text-[10px] font-mono text-zinc-400 block mb-1">विशिष्ट आवेग (Isp)</span>
                <span className="text-sm font-mono font-bold text-cyan-400 flex items-center justify-center gap-1">
                  <Gauge className="w-4 h-4 text-cyan-400" />
                  {ispSeconds} s
                </span>
                <span className="text-[9px] text-zinc-500 font-mono">{fuelType === 'hydrogen' ? 'Liquid H2' : 'ATF Kerosene'}</span>
              </div>
            </div>

            {/* Scientific Analysis Note */}
            <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/40 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-zinc-300 space-y-1">
                <p>
                  <strong className="text-zinc-100 font-medium">"आंधी में माचिस जलाना" भौतिकी:</strong> Mach {machNumber} पर हवा दहन कक्ष को पार करने में मात्र <strong>{residenceTimeMs} मिलीसेकंड</strong> लेती है।
                  हवा को सबसोनिक धीमा किए बिना, कैविटी फ्लेमहोल्डर वोर्टेक्स और पायरोफोरिक इग्निशन की सहायता से स्थिर सुपरसोनिक ज्वाला बनाई रखी जाती है।
                </p>
                <p className="text-zinc-400 text-[11px]">
                  DRDO HSTDV ने 7 सितंबर 2020 को 30 किमी ऊंचाई पर ठीक इसी स्क्रैमजेट चक्र का 20 सेकंड से अधिक समय तक सफल परीक्षण दर्ज किया था।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
