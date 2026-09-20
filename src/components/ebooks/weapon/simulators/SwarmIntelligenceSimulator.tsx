import React, { useState, useEffect, useRef } from 'react';
import { 
  Radio, 
  ShieldAlert, 
  Target, 
  Play, 
  Pause, 
  RefreshCw, 
  Sliders, 
  Cpu, 
  CheckCircle, 
  AlertTriangle,
  Zap,
  Activity
} from 'lucide-react';

interface DroneBoid {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  role: 'striker' | 'jammer' | 'decoy';
  alive: boolean;
}

export const SwarmIntelligenceSimulator: React.FC = () => {
  // Swarm Parameters
  const [swarmSize, setSwarmSize] = useState<number>(24); // 12 to 48 drones
  const [separationWeight, setSeparationWeight] = useState<number>(1.5);
  const [alignmentWeight, setAlignmentWeight] = useState<number>(1.0);
  const [cohesionWeight, setCohesionWeight] = useState<number>(0.8);
  const [gpsDenied, setGpsDenied] = useState<boolean>(false);
  const [missionState, setMissionState] = useState<'patrol' | 'attack' | 'disperse'>('patrol');
  const [simRunning, setSimRunning] = useState<boolean>(true);

  // Target Threat Coordinates (Enemy SAM / Radar site)
  const targetThreat = { x: 420, y: 140, radius: 24, hp: 100 };
  const [enemyHp, setEnemyHp] = useState<number>(100);
  const [survivingDrones, setSurvivingDrones] = useState<number>(24);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dronesRef = useRef<DroneBoid[]>([]);

  // Initialize Swarm
  const initSwarm = (size: number) => {
    const arr: DroneBoid[] = [];
    for (let i = 0; i < size; i++) {
      const role: 'striker' | 'jammer' | 'decoy' = i % 3 === 0 ? 'jammer' : i % 3 === 1 ? 'decoy' : 'striker';
      arr.push({
        id: i,
        x: 80 + Math.random() * 80,
        y: 80 + Math.random() * 120,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        role,
        alive: true
      });
    }
    dronesRef.current = arr;
    setEnemyHp(100);
    setSurvivingDrones(size);
  };

  useEffect(() => {
    initSwarm(swarmSize);
  }, [swarmSize]);

  // Simulation Animation Loop
  useEffect(() => {
    let animationFrameId: number;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;

      // Clear Canvas
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, width, height);

      // Draw Grid Lines
      ctx.strokeStyle = '#27272a';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Mother Aircraft (MUM-T Tejas / Rafale command center at left)
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.moveTo(35, 140);
      ctx.lineTo(15, 125);
      ctx.lineTo(20, 140);
      ctx.lineTo(15, 155);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#60a5fa';
      ctx.stroke();

      ctx.font = '9px monospace';
      ctx.fillStyle = '#93c5fd';
      ctx.fillText('MUM-T Lead (Tejas)', 10, 175);

      // Draw Enemy SAM Site (Threat Target)
      if (enemyHp > 0) {
        // SAM Engagement Bubble
        ctx.strokeStyle = gpsDenied ? '#ef4444' : '#f97316';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(targetThreat.x, targetThreat.y, 90, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Threat Core
        ctx.fillStyle = enemyHp < 40 ? '#991b1b' : '#dc2626';
        ctx.beginPath();
        ctx.arc(targetThreat.x, targetThreat.y, targetThreat.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#f87171';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.font = 'bold 10px monospace';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('HQ-9 SAM', targetThreat.x - 24, targetThreat.y + 4);
        ctx.font = '9px monospace';
        ctx.fillStyle = '#fca5a5';
        ctx.fillText(`HP: ${Math.max(0, enemyHp)}%`, targetThreat.x - 18, targetThreat.y + 16);
      } else {
        // Destroyed Marker
        ctx.fillStyle = '#22c55e';
        ctx.font = 'bold 12px monospace';
        ctx.fillText('✓ SAM NEUTRALIZED', targetThreat.x - 55, targetThreat.y);
      }

      const drones = dronesRef.current;

      // Update Boid Physics if running
      if (simRunning) {
        for (let i = 0; i < drones.length; i++) {
          const d = drones[i];
          if (!d.alive) continue;

          let sepX = 0, sepY = 0;
          let alignX = 0, alignY = 0;
          let cohX = 0, cohY = 0;
          let neighbors = 0;

          // Flocking rules against other drones
          for (let j = 0; j < drones.length; j++) {
            if (i === j || !drones[j].alive) continue;
            const other = drones[j];
            const dist = Math.hypot(d.x - other.x, d.y - other.y);

            // Draw MANET Mesh Link if within communication range
            if (dist < 60) {
              ctx.strokeStyle = gpsDenied ? 'rgba(234, 179, 8, 0.2)' : 'rgba(6, 182, 212, 0.25)';
              ctx.lineWidth = 0.75;
              ctx.beginPath();
              ctx.moveTo(d.x, d.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }

            // Separation
            if (dist < 22) {
              sepX += (d.x - other.x) / (dist || 1);
              sepY += (d.y - other.y) / (dist || 1);
            }

            // Alignment & Cohesion
            if (dist < 70) {
              alignX += other.vx;
              alignY += other.vy;
              cohX += other.x;
              cohY += other.y;
              neighbors++;
            }
          }

          if (neighbors > 0) {
            alignX = (alignX / neighbors - d.vx) * 0.1;
            alignY = (alignY / neighbors - d.vy) * 0.1;
            cohX = ((cohX / neighbors) - d.x) * 0.02;
            cohY = ((cohY / neighbors) - d.y) * 0.02;
          }

          // Mission target attraction
          let targetAttractX = 0;
          let targetAttractY = 0;

          if (missionState === 'attack' && enemyHp > 0) {
            const dx = targetThreat.x - d.x;
            const dy = targetThreat.y - d.y;
            const distToTarget = Math.hypot(dx, dy);

            targetAttractX = (dx / distToTarget) * 0.4;
            targetAttractY = (dy / distToTarget) * 0.4;

            // Attack proximity strike
            if (distToTarget < targetThreat.radius + 8) {
              if (d.role === 'striker') {
                d.alive = false; // Kamikaze strike
                setEnemyHp(prev => Math.max(0, prev - 25));
              }
            }
          } else if (missionState === 'patrol') {
            // Circle formation around midpoint
            const midX = 220;
            const midY = 140;
            const angle = Math.atan2(d.y - midY, d.x - midX) + 0.03;
            const radius = 90;
            const desiredX = midX + Math.cos(angle) * radius;
            const desiredY = midY + Math.sin(angle) * radius;
            targetAttractX = (desiredX - d.x) * 0.03;
            targetAttractY = (desiredY - d.y) * 0.03;
          }

          // Apply forces
          d.vx += (sepX * separationWeight * 0.15) + (alignX * alignmentWeight) + (cohX * cohesionWeight) + targetAttractX;
          d.vy += (sepY * separationWeight * 0.15) + (alignY * alignmentWeight) + (cohY * cohesionWeight) + targetAttractY;

          // Clamp speed
          const speed = Math.hypot(d.vx, d.vy);
          const maxSpeed = gpsDenied ? 2.2 : 3.0;
          if (speed > maxSpeed) {
            d.vx = (d.vx / speed) * maxSpeed;
            d.vy = (d.vy / speed) * maxSpeed;
          }

          // Move
          d.x += d.vx;
          d.y += d.vy;

          // Bounce walls
          if (d.x < 30) { d.x = 30; d.vx *= -1; }
          if (d.x > width - 20) { d.x = width - 20; d.vx *= -1; }
          if (d.y < 20) { d.y = 20; d.vy *= -1; }
          if (d.y > height - 20) { d.y = height - 20; d.vy *= -1; }
        }
      }

      // Draw Drones
      let liveCount = 0;
      for (const d of drones) {
        if (!d.alive) continue;
        liveCount++;

        const angle = Math.atan2(d.vy, d.vx);
        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(angle);

        // Drone Color based on Role
        if (d.role === 'striker') ctx.fillStyle = '#ef4444'; // Red Kinetic
        else if (d.role === 'jammer') ctx.fillStyle = '#06b6d4'; // Cyan EW
        else ctx.fillStyle = '#eab308'; // Amber Decoy

        // Delta wing drone shape
        ctx.beginPath();
        ctx.moveTo(8, 0);
        ctx.lineTo(-6, -4);
        ctx.lineTo(-4, 0);
        ctx.lineTo(-6, 4);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }
      setSurvivingDrones(liveCount);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [simRunning, missionState, separationWeight, alignmentWeight, cohesionWeight, gpsDenied, enemyHp]);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-cyan-950/30 border border-emerald-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold border border-emerald-500/30">
              Decentralized Swarm Intelligence
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-zinc-800 text-zinc-300 font-mono text-[10px]">
              CATS Warrior MUM-T Mesh
            </span>
          </div>
          <h3 className="text-base font-bold text-zinc-100">
            ऑटोनॉमस ड्रोन स्वॉर्म इंटेलिजेंस एवं MUM-T सिमुलेटर
          </h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-2xl">
            रेनॉल्ड्स फ्लॉकिंग एल्गोरिदम (अलगाव, संरेखण, एकजुटता), जीपीएस-मुक्त विजुअल ओडोमेट्री, और स्वायत्त लक्ष्य आबंटन (Hungarian Auction Algorithm) का लाइव 2D सिमुलेशन।
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSimRunning(!simRunning)}
            className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono font-medium flex items-center gap-1.5 cursor-pointer"
          >
            {simRunning ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{simRunning ? 'Pause' : 'Resume'}</span>
          </button>
        </div>
      </div>

      {/* Grid: Controls & Live 2D Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Swarm Controls (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              <span>स्वॉर्म फ्लॉकिंग पैरामीटर्स</span>
            </span>
            <span className="text-[11px] font-mono text-zinc-400">
              Mesh Latency: &lt; 14 ms
            </span>
          </div>

          <div className="space-y-3.5 text-xs">
            {/* Swarm Size */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>स्वॉर्म में ड्रोन्स की संख्या (Swarm Size):</span>
                <span className="text-emerald-400 font-bold">{swarmSize} ड्रोन्स</span>
              </div>
              <input
                type="range"
                min="12"
                max="42"
                step="3"
                value={swarmSize}
                onChange={(e) => setSwarmSize(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-zinc-800"
              />
            </div>

            {/* Separation */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>अलगाव बल (Separation - Anti-Collision):</span>
                <span className="text-cyan-400 font-bold">{separationWeight.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3.0"
                step="0.1"
                value={separationWeight}
                onChange={(e) => setSeparationWeight(Number(e.target.value))}
                className="w-full accent-cyan-500 bg-zinc-800"
              />
            </div>

            {/* Alignment */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>संरेखण बल (Alignment - Velocity Match):</span>
                <span className="text-amber-400 font-bold">{alignmentWeight.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="2.0"
                step="0.1"
                value={alignmentWeight}
                onChange={(e) => setAlignmentWeight(Number(e.target.value))}
                className="w-full accent-amber-500 bg-zinc-800"
              />
            </div>

            {/* Cohesion */}
            <div>
              <div className="flex justify-between text-zinc-300 font-mono mb-1">
                <span>एकजुटता बल (Cohesion - Centroid Attraction):</span>
                <span className="text-purple-400 font-bold">{cohesionWeight.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="1.8"
                step="0.1"
                value={cohesionWeight}
                onChange={(e) => setCohesionWeight(Number(e.target.value))}
                className="w-full accent-purple-500 bg-zinc-800"
              />
            </div>

            {/* GPS Jamming Toggle */}
            <div className="pt-2 border-t border-zinc-800">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-zinc-200 font-mono font-medium block">जीपीएस-जैमिंग वातावरण (GPS Status):</span>
                  <span className="text-[10px] text-zinc-400">
                    {gpsDenied ? 'नेविगेशन: VIO + UWB मेश सर्वसम्मति' : 'मानक GPS L1/L2 नेविगेशन'}
                  </span>
                </div>
                <button
                  onClick={() => setGpsDenied(!gpsDenied)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    gpsDenied
                      ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                  }`}
                >
                  {gpsDenied ? 'GPS JAMMED (VIO)' : 'GPS NORMAL'}
                </button>
              </div>
            </div>

            {/* Mission Mode Switcher */}
            <div className="pt-2 border-t border-zinc-800">
              <label className="text-zinc-300 font-mono mb-1.5 block">मिशन कमान (MUM-T Command):</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setMissionState('patrol')}
                  className={`py-2 px-3 rounded-lg font-mono text-xs font-bold transition-all border cursor-pointer ${
                    missionState === 'patrol'
                      ? 'bg-cyan-500 text-black border-cyan-400'
                      : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700'
                  }`}
                >
                  🔄 हवाई गश्त (Patrol Orbit)
                </button>
                <button
                  onClick={() => setMissionState('attack')}
                  className={`py-2 px-3 rounded-lg font-mono text-xs font-bold transition-all border cursor-pointer ${
                    missionState === 'attack'
                      ? 'bg-red-500 text-white border-red-400 shadow-md shadow-red-500/20'
                      : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700'
                  }`}
                >
                  ⚔️ SAM पर स्वॉर्म हमला
                </button>
              </div>
            </div>
          </div>

          {/* Real-time Status Readouts */}
          <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-1.5 text-xs font-mono text-zinc-300">
            <div className="flex justify-between">
              <span className="text-zinc-400">सक्रिय नोड्स (Drones):</span>
              <span className="text-emerald-400 font-bold">{survivingDrones} / {swarmSize}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">शत्रु SAM एयर डिफेंस स्थिति:</span>
              <span className={`font-bold ${enemyHp === 0 ? 'text-emerald-400' : enemyHp < 50 ? 'text-amber-400' : 'text-red-400'}`}>
                {enemyHp === 0 ? '✓ पूर्णतः नष्ट (Neutralized)' : `${enemyHp}% HP शेष`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">स्वार्म भूमिकाएं:</span>
              <span className="text-zinc-300">
                <span className="text-red-400 font-bold">🔴 काइनेटिक स्ट्राइकर</span> | 
                <span className="text-cyan-400 font-bold"> 🔵 EW जैमर</span> | 
                <span className="text-amber-400 font-bold"> 🟡 डिकॉय</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 2D Tactical Swarm Arena (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-zinc-200">
                  CATS Warrior मेश ऑटोनॉमी विजुअलाइज़र
                </span>
              </div>
              <button
                onClick={() => initSwarm(swarmSize)}
                className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-[11px] font-mono text-zinc-300 flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3 text-zinc-400" />
                <span>रीसेट स्वॉर्म</span>
              </button>
            </div>

            {/* Live Interactive Canvas */}
            <div className="relative w-full h-72 bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800/80">
              <canvas
                ref={canvasRef}
                width={540}
                height={288}
                className="w-full h-full block"
              />

              {/* Status Overlay */}
              <div className="absolute top-2 left-2 px-2 py-1 rounded bg-black/70 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                <span>MANET Links: </span>
                <span className="text-cyan-400 font-bold">Active Ad-Hoc Mesh</span>
              </div>

              {gpsDenied && (
                <div className="absolute top-2 right-2 px-2 py-1 rounded bg-amber-950/80 border border-amber-800 text-[10px] font-mono text-amber-300 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  <span>GPS Denied - VIO Flocking</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMissionState('attack')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs shadow-md shadow-red-600/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Target className="w-4 h-4" />
                <span>संतुष्ट स्ट्राइक कमान जारी करें (Coordinated Swarm Strike)</span>
              </button>
            </div>

            {/* Tactical MUM-T Insight */}
            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/40 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-300 leading-relaxed">
                <strong className="text-zinc-100 font-medium">MUM-T रणनीति:</strong> मानव-पायलट (तेजस या राफेल) सुरक्षित 80 किमी पीछे रहता है। 
                स्वार्म के <strong>डिकॉय ड्रोन्स</strong> दुश्मन के रडार को खुद पर मिसाइल दागने के लिए मजबूर करते हैं, 
                <strong>EW ड्रोन्स</strong> मिसाइल गाइडेंस को जैम करते हैं, और <strong>काइनेटिक स्ट्राइकर्स</strong> वायु रक्षा प्रणाली को समाप्त कर देते हैं।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
