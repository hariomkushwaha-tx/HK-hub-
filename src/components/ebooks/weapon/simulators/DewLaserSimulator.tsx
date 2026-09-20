import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Target, 
  Flame, 
  ShieldAlert, 
  CheckCircle2, 
  Radio, 
  Sliders, 
  Gauge, 
  RefreshCw, 
  Play, 
  AlertTriangle,
  Layers,
  Thermometer
} from 'lucide-react';

export const DewLaserSimulator: React.FC = () => {
  // Laser System Parameters
  const [laserPowerKw, setLaserPowerKw] = useState<number>(100); // 25 to 300 kW
  const [targetRangeKm, setTargetRangeKm] = useState<number>(3.2); // 0.5 to 8.0 km
  const [targetType, setTargetType] = useState<'drone' | 'cruise-missile' | 'mortar' | 'optical-seeker'>('drone');
  const [atmosphere, setAtmosphere] = useState<'clear' | 'haze' | 'sandstorm'>('clear');
  const [adaptiveOpticsOn, setAdaptiveOpticsOn] = useState<boolean>(true);
  const [apertureDiameterM, setApertureDiameterM] = useState<number>(0.5); // 0.3 to 0.8 m telescope

  // Live Firing Simulation State
  const [isFiring, setIsFiring] = useState<boolean>(false);
  const [targetTempC, setTargetTempC] = useState<number>(28);
  const [burnProgressPercent, setBurnProgressPercent] = useState<number>(0);
  const [isTargetDestroyed, setIsTargetDestroyed] = useState<number>(0); // 0: alive, 1: destroyed
  const [elapsedFireTimeS, setElapsedFireTimeS] = useState<number>(0);
  const [shotsFiredCount, setShotsFiredCount] = useState<number>(14);

  // Target Physical Constants
  const targetData = {
    'drone': {
      name: 'कामिकेज ड्रोन रोटर आर्म (Carbon Composite)',
      meltTempC: 380, // resin burn & structural snap
      criticalEnergyJ: 45000,
      baseDwellTimeS: 1.4,
      icon: '🛸'
    },
    'cruise-missile': {
      name: 'क्रूज़ मिसाइल एयरफ्रेम (3mm 7075-T6 Al-Alloy)',
      meltTempC: 640,
      criticalEnergyJ: 160000,
      baseDwellTimeS: 3.2,
      icon: '🚀'
    },
    'mortar': {
      name: 'मोर्टार शेल (8mm Cast Steel Shell)',
      meltTempC: 1450,
      criticalEnergyJ: 380000,
      baseDwellTimeS: 5.6,
      icon: '💣'
    },
    'optical-seeker': {
      name: 'मिसाइल EO/IR ऑप्टिकल सीकर (Germanium Lens)',
      meltTempC: 220, // lens thermal cracking / sensor blinding
      criticalEnergyJ: 8000,
      baseDwellTimeS: 0.35,
      icon: '👁️'
    }
  }[targetType];

  // Atmospheric Extinction Coefficient (gamma in km^-1) at 1070 nm
  const extinctionCoeff = {
    'clear': 0.05,
    'haze': 0.22,
    'sandstorm': 0.65
  }[atmosphere];

  // Atmospheric Transmission: tau = exp(-gamma * R)
  const transmissionFactor = Math.exp(-extinctionCoeff * targetRangeKm);
  const powerOnTargetKw = laserPowerKw * transmissionFactor;

  // Strehl Ratio (Beam Quality reduced by turbulence, restored by Adaptive Optics)
  const baseStrehl = { 'clear': 0.45, 'haze': 0.28, 'sandstorm': 0.12 }[atmosphere];
  const strehlRatio = adaptiveOpticsOn ? Math.min(0.85, baseStrehl * 2.8) : baseStrehl;

  // Beam Spot Diameter at Target: D_spot ~ 2.44 * (lambda * R / D_aper) * (1 / sqrt(Strehl))
  const wavelengthUm = 1.07; // 1070 nm Yb fiber laser
  const diffractionSpotMm = (2.44 * (wavelengthUm * 1e-6 * (targetRangeKm * 1000)) / apertureDiameterM) * 1000;
  const spotDiameterCm = Number(((diffractionSpotMm / 10) / Math.sqrt(strehlRatio)).toFixed(2));
  const spotAreaCm2 = Math.PI * Math.pow(spotDiameterCm / 2, 2);

  // Power Density on Target (W/cm^2)
  const powerDensityWcm2 = Math.round((powerOnTargetKw * 1000) / spotAreaCm2);

  // Dynamic Dwell Time Required for Kill
  const requiredDwellTimeS = Number((targetData.baseDwellTimeS * (100 / powerOnTargetKw) * (spotAreaCm2 / 12) * (1 / (strehlRatio / 0.5))).toFixed(2));

  // Live Firing Animation Loop
  useEffect(() => {
    let interval: any = null;
    if (isFiring && !isTargetDestroyed) {
      interval = setInterval(() => {
        setElapsedFireTimeS(prev => {
          const next = Number((prev + 0.1).toFixed(1));
          const progress = Math.min(100, Math.round((next / requiredDwellTimeS) * 100));
          setBurnProgressPercent(progress);

          const tempRise = (targetData.meltTempC - 28) * (progress / 100);
          setTargetTempC(Math.round(28 + tempRise));

          if (progress >= 100) {
            setIsTargetDestroyed(1);
            setIsFiring(false);
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isFiring, isTargetDestroyed, requiredDwellTimeS, targetData.meltTempC]);

  const handleStartFiring = () => {
    setIsTargetDestroyed(0);
    setElapsedFireTimeS(0);
    setBurnProgressPercent(0);
    setTargetTempC(28);
    setIsFiring(true);
    setShotsFiredCount(prev => prev + 1);
  };

  const handleResetTarget = () => {
    setIsFiring(false);
    setIsTargetDestroyed(0);
    setElapsedFireTimeS(0);
    setBurnProgressPercent(0);
    setTargetTempC(28);
  };

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-zinc-900 to-orange-950/30 border border-amber-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono text-[11px] font-bold border border-amber-500/30">
              100 kW High-Power Fiber Laser (HEL)
            </span>
            <span className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 font-mono text-[10px]">
              DURGA-II Beam-Director
            </span>
          </div>
          <h3 className="text-base font-bold text-zinc-100">
            डायरेक्टेड एनर्जी लेजर वेपन व एडाप्टिव बीम-डायरेक्टर सिमुलेटर
          </h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-2xl">
            प्रकाश की गति (Speed of Light) पर सुसंगत लेजर प्रहार, वायुमंडलीय अशांति सुधार (Adaptive Optics), और लक्ष्य एब्लेशन/मेल्टिंग ड्वेल-टाइम का लाइव सिमुलेशन।
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="px-3 py-1.5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-300">
            <span className="text-zinc-500">कुल शॉट्स:</span>
            <span className="text-amber-400 font-bold">{shotsFiredCount}</span>
            <span className="text-zinc-500">| लागत/शॉट:</span>
            <span className="text-emerald-400 font-bold">₹750 (बिजली)</span>
          </div>
        </div>
      </div>

      {/* Grid: Controls & Beam Director Firing Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: DEW Controls (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              <span>लेजर बीम पैरामीटर्स</span>
            </span>
            <span className="text-[11px] font-mono text-zinc-400">
              λ = 1070 nm (Yb Fiber)
            </span>
          </div>

          <div className="space-y-3.5 text-xs">
            {/* Laser Power Slider */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>लेजर आउटपुट पावर (Laser Power):</span>
                <span className="text-amber-400 font-bold">{laserPowerKw} kW</span>
              </div>
              <input
                type="range"
                min="25"
                max="300"
                step="5"
                value={laserPowerKw}
                onChange={(e) => setLaserPowerKw(Number(e.target.value))}
                className="w-full accent-amber-500 bg-zinc-800"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 mt-0.5 font-mono">
                <span>25 kW (Tactical C-UAS)</span>
                <span>100 kW (DURGA-II)</span>
                <span>300 kW (Anti-Missile)</span>
              </div>
            </div>

            {/* Target Range Slider */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>लक्ष्य की दूरी (Target Range):</span>
                <span className="text-cyan-400 font-bold">{targetRangeKm} km</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.1"
                value={targetRangeKm}
                onChange={(e) => setTargetRangeKm(Number(e.target.value))}
                className="w-full accent-cyan-500 bg-zinc-800"
              />
            </div>

            {/* Target Type Selector */}
            <div>
              <label className="text-zinc-300 font-mono mb-1.5 block">आने वाला लक्ष्य (Incoming Threat):</label>
              <div className="grid grid-cols-2 gap-2">
                {(['drone', 'cruise-missile', 'mortar', 'optical-seeker'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => {
                      setTargetType(t);
                      handleResetTarget();
                    }}
                    className={`py-1.5 px-2.5 rounded-lg font-mono text-[11px] text-left transition-all border cursor-pointer ${
                      targetType === t
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 font-bold'
                        : 'bg-zinc-800/60 text-zinc-400 border-zinc-700 hover:bg-zinc-800'
                    }`}
                  >
                    <div className="truncate">{t === 'drone' ? '🛸 ड्रोन रोटर' : t === 'cruise-missile' ? '🚀 क्रूज़ मिसाइल' : t === 'mortar' ? '💣 मोर्टार गोला' : '👁️ ऑप्टिकल सीकर'}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Atmosphere Environment */}
            <div>
              <label className="text-zinc-300 font-mono mb-1.5 block">वायुमंडलीय दशा (Atmospheric Conditions):</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'clear', label: 'स्वच्छ आकाश', desc: 'Low scattering' },
                  { id: 'haze', label: 'धुंध / नमी', desc: 'Moderate loss' },
                  { id: 'sandstorm', label: 'रेगिस्तानी आंधी', desc: 'High scatter' }
                ].map(env => (
                  <button
                    key={env.id}
                    onClick={() => setAtmosphere(env.id as any)}
                    className={`p-2 rounded-lg font-mono text-center text-[11px] transition-all border cursor-pointer ${
                      atmosphere === env.id
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/60 font-bold'
                        : 'bg-zinc-800/60 text-zinc-400 border-zinc-700 hover:bg-zinc-800'
                    }`}
                  >
                    <div>{env.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Adaptive Optics Toggle */}
            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-zinc-200 font-mono font-medium block">एडाप्टिव ऑप्टिक्स (Closed-Loop AO):</span>
                <span className="text-[10px] text-zinc-400">1.2 kHz Deformable Mirror वेवफ्रंट सुधार</span>
              </div>
              <button
                onClick={() => setAdaptiveOpticsOn(!adaptiveOpticsOn)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  adaptiveOpticsOn
                    ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                {adaptiveOpticsOn ? 'ACTIVE (1.2 kHz)' : 'DISABLED'}
              </button>
            </div>
          </div>

          {/* Real-time Computed Physical Optics Readouts */}
          <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-1.5 text-xs font-mono text-zinc-300">
            <div className="flex justify-between">
              <span className="text-zinc-400">स्ट्रेहल रेशियो (Strehl Ratio):</span>
              <span className={`font-bold ${strehlRatio > 0.6 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {strehlRatio.toFixed(2)} (बीम फोकस गुणवत्ता)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">लक्ष्य पर बीम स्पॉट व्यास:</span>
              <span className="text-cyan-400 font-bold">{spotDiameterCm} cm ({spotAreaCm2.toFixed(1)} cm²)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">लक्ष्य पर पावर डेंसिटी:</span>
              <span className="text-amber-400 font-bold">{powerDensityWcm2.toLocaleString()} W/cm²</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">अनुमानित विनाश समय (Dwell Time):</span>
              <span className="text-red-400 font-bold">{requiredDwellTimeS} seconds</span>
            </div>
          </div>
        </div>

        {/* Right Column: Firing Simulation Arena (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold text-zinc-200">
                  DURGA-II बीम डायरेक्टर - टारगेट एंगेजमेंट एरीना
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                {targetData.name}
              </span>
            </div>

            {/* Interactive Firing Canvas Display */}
            <div className="relative w-full h-64 bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800/80 flex items-center justify-between px-6">
              {/* Background Stars / Grid */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* 1. Laser Turret / Beam Director (Left side) */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-amber-500/60 flex items-center justify-center relative shadow-lg shadow-amber-500/10">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                  </div>
                  {/* Telescope Barrel */}
                  <div className="absolute -right-5 w-6 h-4 bg-zinc-700 border border-zinc-600 rounded-r" />
                </div>
                <span className="text-[10px] font-mono text-zinc-400 mt-2">50cm Director</span>
                <span className="text-[9px] font-mono text-amber-400">{laserPowerKw} kW Yb-Laser</span>
              </div>

              {/* 2. Coherent High Energy Laser Beam (Center) */}
              {isFiring && (
                <div className="absolute left-24 right-28 top-1/2 -translate-y-1/2 pointer-events-none z-20">
                  {/* Outer atmospheric blooming glow */}
                  <div 
                    className="w-full h-3 bg-amber-500/40 blur-[4px] rounded-full" 
                    style={{ opacity: strehlRatio }}
                  />
                  {/* Core sharp laser beam */}
                  <div className="w-full h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-white shadow-[0_0_12px_#f59e0b] -mt-2 animate-pulse" />
                </div>
              )}

              {/* 3. Target (Right side) */}
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-24 h-24 rounded-2xl border-2 flex flex-col items-center justify-center relative transition-all duration-300 ${
                  isTargetDestroyed 
                    ? 'border-red-600 bg-red-950/70 shadow-2xl shadow-red-600/40' 
                    : isFiring 
                    ? 'border-amber-500 bg-orange-950/40 shadow-lg shadow-amber-500/30' 
                    : 'border-zinc-700 bg-zinc-900/80'
                }`}>
                  <span className="text-3xl mb-1">{targetData.icon}</span>
                  <span className="text-[9px] font-mono text-zinc-300 text-center px-1 truncate max-w-[80px]">
                    {targetType}
                  </span>

                  {/* Laser impact hotspot */}
                  {isFiring && !isTargetDestroyed && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white shadow-[0_0_20px_#f59e0b] animate-ping" />
                      <div className="absolute w-3 h-3 rounded-full bg-yellow-200" />
                    </div>
                  )}

                  {/* Destroyed Explosion Overlay */}
                  {isTargetDestroyed === 1 && (
                    <div className="absolute inset-0 bg-red-600/30 rounded-2xl flex items-center justify-center animate-bounce">
                      <span className="text-xs font-mono font-bold text-red-200 uppercase bg-black/80 px-1 py-0.5 rounded">
                        KILLED!
                      </span>
                    </div>
                  )}
                </div>

                {/* Target Status Label */}
                <div className="mt-2 text-center">
                  <span className="text-[10px] font-mono text-zinc-400 block">
                    {isTargetDestroyed ? '💥 स्ट्रक्चरल फेल्योर' : isFiring ? '🔥 बीम ड्वेलिंग...' : 'ट्रैक्ड & लॉक्ड'}
                  </span>
                  <span className={`text-xs font-mono font-bold ${targetTempC > 400 ? 'text-red-400' : 'text-amber-300'}`}>
                    {targetTempC}°C (गलन: {targetData.meltTempC}°C)
                  </span>
                </div>
              </div>
            </div>

            {/* Firing Progress Bar & Dwell Time Display */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                  <span>थर्मल एब्लेशन व ड्वेल प्रोग्रेस:</span>
                </span>
                <span className="text-amber-400 font-bold">
                  {elapsedFireTimeS}s / {requiredDwellTimeS}s ({burnProgressPercent}%)
                </span>
              </div>

              <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700">
                <div 
                  className={`h-full transition-all duration-100 ${
                    burnProgressPercent >= 100 
                      ? 'bg-red-500' 
                      : 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500'
                  }`}
                  style={{ width: `${burnProgressPercent}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleStartFiring}
                disabled={isFiring || isTargetDestroyed === 1}
                className={`flex-1 py-3 px-4 rounded-xl font-bold font-mono text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isFiring
                    ? 'bg-amber-600/50 text-amber-200 cursor-not-allowed'
                    : isTargetDestroyed === 1
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    : 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/25'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>{isFiring ? '⚡ लेजर फायरिंग जारी...' : '🔥 FIRE 100 kW LASER (DURGA-II)'}</span>
              </button>

              <button
                onClick={handleResetTarget}
                className="py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-zinc-400" />
                <span>नया टारगेट लॉक</span>
              </button>
            </div>

            {/* Operational Insight */}
            <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/40 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-300 leading-relaxed">
                <strong className="text-zinc-100 font-medium">डीईडब्ल्यू सामरिक श्रेष्ठता:</strong> {targetRangeKm} किमी पर 100 kW लेजर का प्रहार 
                मात्र <strong>{requiredDwellTimeS} सेकंड</strong> में धातु को {targetTempC}°C तक गर्म कर छेद कर देता है। 
                पारंपरिक मिसाइल डिफेंस की तुलना में इसमें शून्य रीलोड समय है—जनरेटर में ईंधन रहने तक 
                यह प्रणाली बिना रुके 100+ ड्रोन्स के झुंड को एक-एक कर समाप्त कर सकती है।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
