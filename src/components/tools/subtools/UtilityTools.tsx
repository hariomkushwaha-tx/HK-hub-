import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { copyToClipboard } from '../../../utils/clipboard';
import { 
  Download, 
  Copy, 
  Check, 
  RefreshCw, 
  Play, 
  Pause, 
  RotateCcw, 
  Flag,
  Lock,
  Palette,
  Shuffle
} from 'lucide-react';

interface SubToolProps {
  toolId: string;
}

export const UtilityTools: React.FC<SubToolProps> = ({ toolId }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyText = async (txt: string, key = 'gen') => {
    await copyToClipboard(txt);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  // 1. QR Code Generator
  const [qrType, setQrType] = useState<'url' | 'wifi' | 'text'>('url');
  const [qrContent, setQrContent] = useState<string>('https://hkhub.dev');
  const [wifiSsid, setWifiSsid] = useState<string>('Campus-Student-WiFi');
  const [wifiPassword, setWifiPassword] = useState<string>('StudyTech2026');
  const [wifiSecurity, setWifiSecurity] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');
  const [qrColor, setQrColor] = useState<string>('#6366f1');
  const [qrBg, setQrBg] = useState<string>('#ffffff');
  const qrCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (toolId !== 'qr-generator') return;
    let finalString = qrContent;
    if (qrType === 'wifi') {
      finalString = `WIFI:S:${wifiSsid};T:${wifiSecurity};P:${wifiPassword};;`;
    }

    if (qrCanvasRef.current && finalString) {
      QRCode.toCanvas(
        qrCanvasRef.current,
        finalString,
        {
          width: 240,
          margin: 2,
          color: {
            dark: qrColor,
            light: qrBg
          }
        },
        (error) => {
          if (error) console.error(error);
        }
      );
    }
  }, [toolId, qrType, qrContent, wifiSsid, wifiPassword, wifiSecurity, qrColor, qrBg]);

  const downloadQR = () => {
    if (!qrCanvasRef.current) return;
    const link = document.createElement('a');
    link.download = 'hkhub-qrcode.png';
    link.href = qrCanvasRef.current.toDataURL('image/png');
    link.click();
  };

  // 2. Color Picker & Converter
  const [colorHex, setColorHex] = useState<string>('#6366f1');

  // Convert Hex to RGB, HSL, CMYK
  const colorDetails = (() => {
    let hex = colorHex.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    const r = parseInt(hex.substring(0, 2), 16) || 0;
    const g = parseInt(hex.substring(2, 4), 16) || 0;
    const b = parseInt(hex.substring(4, 6), 16) || 0;

    // HSL
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
        case gNorm: h = (bNorm - rNorm) / d + 2; break;
        case bNorm: h = (rNorm - gNorm) / d + 4; break;
      }
      h /= 6;
    }

    // CMYK
    const k = 1 - Math.max(rNorm, gNorm, bNorm);
    const c = k === 1 ? 0 : (1 - rNorm - k) / (1 - k);
    const m = k === 1 ? 0 : (1 - gNorm - k) / (1 - k);
    const y = k === 1 ? 0 : (1 - bNorm - k) / (1 - k);

    return {
      hex: `#${hex}`,
      rgb: `rgb(${r}, ${g}, ${b})`,
      hsl: `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`,
      cmyk: `cmyk(${Math.round(c * 100)}%, ${Math.round(m * 100)}%, ${Math.round(y * 100)}%, ${Math.round(k * 100)}%)`
    };
  })();

  // 3. Password Generator
  const [passLength, setPassLength] = useState<number>(16);
  const [includeUpper, setIncludeUpper] = useState<boolean>(true);
  const [includeLower, setIncludeLower] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [generatedPassword, setGeneratedPassword] = useState<string>('');

  const generatePassword = () => {
    let chars = '';
    if (includeUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';

    const array = new Uint32Array(passLength);
    crypto.getRandomValues(array);
    let pass = '';
    for (let i = 0; i < passLength; i++) {
      pass += chars[array[i] % chars.length];
    }
    setGeneratedPassword(pass);
  };

  useEffect(() => {
    if (toolId === 'password-generator' && !generatedPassword) {
      generatePassword();
    }
  }, [toolId]);

  // 4. Random Number Generator
  const [minNum, setMinNum] = useState<number>(1);
  const [maxNum, setMaxNum] = useState<number>(100);
  const [randCount, setRandCount] = useState<number>(5);
  const [uniqueRand, setUniqueRand] = useState<boolean>(true);
  const [randomResults, setRandomResults] = useState<number[]>([]);
  const [randError, setRandError] = useState<string | null>(null);

  const handleGenerateRandom = () => {
    setRandError(null);
    const results: number[] = [];
    if (uniqueRand && maxNum - minNum + 1 < randCount) {
      setRandError('Range is too small for the requested number of unique values.');
      return;
    }
    const used = new Set<number>();
    while (results.length < randCount) {
      const val = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      if (uniqueRand) {
        if (!used.has(val)) {
          used.add(val);
          results.push(val);
        }
      } else {
        results.push(val);
      }
    }
    setRandomResults(results);
  };

  // 5. Timer & Stopwatch
  const [activeTabMode, setActiveTabMode] = useState<'timer' | 'stopwatch'>('timer');
  // Timer
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(25 * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  // Stopwatch
  const [stopwatchMs, setStopwatchMs] = useState<number>(0);
  const [stopwatchRunning, setStopwatchRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerSecondsLeft > 0) {
      interval = setInterval(() => {
        setTimerSecondsLeft(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSecondsLeft]);

  useEffect(() => {
    let interval: any = null;
    if (stopwatchRunning) {
      interval = setInterval(() => {
        setStopwatchMs(prev => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [stopwatchRunning]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatStopwatch = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* 1. QR Code Generator */}
      {toolId === 'qr-generator' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 w-fit">
            {(['url', 'wifi', 'text'] as const).map(t => (
              <button
                key={t}
                onClick={() => setQrType(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize ${
                  qrType === t ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {t === 'url' ? 'URL / Link' : t === 'wifi' ? 'WiFi Login' : 'Plain Text'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              {qrType === 'url' && (
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1 block">Target Website URL</label>
                  <input
                    type="url"
                    value={qrContent}
                    onChange={e => setQrContent(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none focus:border-indigo-500"
                  />
                </div>
              )}

              {qrType === 'text' && (
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1 block">Plain Text or Note</label>
                  <textarea
                    rows={4}
                    value={qrContent}
                    onChange={e => setQrContent(e.target.value)}
                    placeholder="Enter any text message..."
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none"
                  />
                </div>
              )}

              {qrType === 'wifi' && (
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-400 mb-1 block">Network Name (SSID)</label>
                    <input
                      type="text"
                      value={wifiSsid}
                      onChange={e => setWifiSsid(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-400 mb-1 block">Password</label>
                    <input
                      type="text"
                      value={wifiPassword}
                      onChange={e => setWifiPassword(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-400 mb-1 block">Security Encryption</label>
                    <select
                      value={wifiSecurity}
                      onChange={e => setWifiSecurity(e.target.value as any)}
                      className="w-full p-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none"
                    >
                      <option value="WPA">WPA / WPA2 / WPA3</option>
                      <option value="WEP">WEP</option>
                      <option value="nopass">No Password (Open)</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1 block">QR Color</label>
                  <input
                    type="color"
                    value={qrColor}
                    onChange={e => setQrColor(e.target.value)}
                    className="w-full h-9 rounded-lg cursor-pointer bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1 block">Background</label>
                  <input
                    type="color"
                    value={qrBg}
                    onChange={e => setQrBg(e.target.value)}
                    className="w-full h-9 rounded-lg cursor-pointer bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Preview Box */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-center">
              <div className="p-3 bg-white rounded-xl shadow-lg">
                <canvas ref={qrCanvasRef} />
              </div>
              <button
                onClick={downloadQR}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
              >
                <Download className="w-4 h-4" />
                <span>Download PNG QR Code</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Color Picker & Converter */}
      {toolId === 'color-picker' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center gap-4">
              <input
                type="color"
                value={colorHex}
                onChange={e => setColorHex(e.target.value)}
                className="w-32 h-32 rounded-2xl cursor-pointer bg-transparent border-0"
              />
              <span className="text-xs text-slate-400">Click circle to open visual color palette</span>
            </div>

            <div className="space-y-3">
              {[
                { label: 'HEX', val: colorDetails.hex },
                { label: 'RGB', val: colorDetails.rgb },
                { label: 'HSL', val: colorDetails.hsl },
                { label: 'CMYK', val: colorDetails.cmyk },
              ].map((c, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">{c.label}</span>
                    <span className="font-mono text-xs font-semibold text-slate-100">{c.val}</span>
                  </div>
                  <button
                    onClick={() => copyText(c.val, `color-${idx}`)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 border border-slate-700"
                  >
                    {copied === `color-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. Password Generator */}
      {toolId === 'password-generator' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/30 flex items-center justify-between gap-3">
            <span className="font-mono text-base sm:text-lg font-bold text-emerald-400 break-all">
              {generatedPassword || 'Click Generate'}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={generatePassword}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                title="Regenerate password"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => copyText(generatedPassword, 'pass')}
                className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1"
              >
                {copied === 'pass' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied === 'pass' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">Length: {passLength} Characters</span>
              <input
                type="range"
                min={8}
                max={48}
                value={passLength}
                onChange={e => setPassLength(parseInt(e.target.value))}
                className="w-48 accent-indigo-600"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Uppercase (A-Z)', state: includeUpper, set: setIncludeUpper },
                { label: 'Lowercase (a-z)', state: includeLower, set: setIncludeLower },
                { label: 'Numbers (0-9)', state: includeNumbers, set: setIncludeNumbers },
                { label: 'Symbols (!@#$)', state: includeSymbols, set: setIncludeSymbols },
              ].map((opt, i) => (
                <label key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={opt.state}
                    onChange={e => opt.set(e.target.checked)}
                    className="rounded accent-indigo-600 w-4 h-4"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. Random Number Generator */}
      {toolId === 'random-generator' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Minimum Number</label>
              <input
                type="number"
                value={minNum}
                onChange={e => setMinNum(parseInt(e.target.value) || 0)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Maximum Number</label>
              <input
                type="number"
                value={maxNum}
                onChange={e => setMaxNum(parseInt(e.target.value) || 100)}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Numbers Count</label>
              <input
                type="number"
                min={1}
                max={50}
                value={randCount}
                onChange={e => setRandCount(Math.min(50, Math.max(1, parseInt(e.target.value) || 1)))}
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={uniqueRand}
                onChange={e => setUniqueRand(e.target.checked)}
                className="accent-indigo-600 rounded"
              />
              <span>Generate Unique Numbers (No Duplicates)</span>
            </label>

            <button
              onClick={handleGenerateRandom}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Generate Numbers</span>
            </button>
          </div>

          {randError && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
              {randError}
            </div>
          )}

          {randomResults.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-bold uppercase text-slate-400">Generated Numbers</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {randomResults.map((n, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 font-mono font-bold text-sm">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 5. Focus Timer & Stopwatch */}
      {toolId === 'timer-stopwatch' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 w-fit">
            <button
              onClick={() => setActiveTabMode('timer')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold ${
                activeTabMode === 'timer' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Study Focus Timer
            </button>
            <button
              onClick={() => setActiveTabMode('stopwatch')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold ${
                activeTabMode === 'stopwatch' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Precision Stopwatch
            </button>
          </div>

          {activeTabMode === 'timer' ? (
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-center space-y-6">
              <div className="flex justify-center gap-2">
                {[
                  { label: 'Pomodoro (25m)', sec: 25 * 60 },
                  { label: 'Short Break (5m)', sec: 5 * 60 },
                  { label: 'Deep Focus (50m)', sec: 50 * 60 },
                ].map(p => (
                  <button
                    key={p.label}
                    onClick={() => { setTimerSecondsLeft(p.sec); setTimerRunning(false); }}
                    className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700"
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <div className="text-6xl sm:text-7xl font-mono font-black text-indigo-400 tracking-tight">
                {formatTimer(timerSecondsLeft)}
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setTimerRunning(!timerRunning)}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center gap-2"
                >
                  {timerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{timerRunning ? 'Pause' : 'Start Timer'}</span>
                </button>
                <button
                  onClick={() => { setTimerSecondsLeft(25 * 60); setTimerRunning(false); }}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title="Reset timer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-center space-y-6">
              <div className="text-6xl sm:text-7xl font-mono font-black text-cyan-400 tracking-tight">
                {formatStopwatch(stopwatchMs)}
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setStopwatchRunning(!stopwatchRunning)}
                  className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm flex items-center gap-2"
                >
                  {stopwatchRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{stopwatchRunning ? 'Pause' : 'Start'}</span>
                </button>
                {stopwatchRunning && (
                  <button
                    onClick={() => setLaps(prev => [stopwatchMs, ...prev])}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Flag className="w-4 h-4" />
                    <span>Lap Split</span>
                  </button>
                )}
                <button
                  onClick={() => { setStopwatchMs(0); setStopwatchRunning(false); setLaps([]); }}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title="Reset stopwatch"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {laps.length > 0 && (
                <div className="max-h-48 overflow-y-auto space-y-1.5 max-w-sm mx-auto pt-4 border-t border-slate-800">
                  {laps.map((l, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 font-mono">
                      <span>Lap {laps.length - idx}</span>
                      <span className="text-cyan-400 font-bold">{formatStopwatch(l)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
