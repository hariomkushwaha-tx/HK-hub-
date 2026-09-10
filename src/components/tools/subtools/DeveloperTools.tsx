import React, { useState, useEffect } from 'react';
import { Copy, Check, Play, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';
import { copyToClipboard as safeCopy } from '../../../utils/clipboard';

interface SubToolProps {
  toolId: string;
}

export const DeveloperTools: React.FC<SubToolProps> = ({ toolId }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (str: string, key = 'res') => {
    await safeCopy(str);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  // 1. JSON Tool state
  const [jsonInput, setJsonInput] = useState(`{\n  "platform": "HK VELORA",\n  "type": "Student Digital Hub",\n  "toolsCount": 30,\n  "features": ["Coding", "AI Hub", "Free Tools", "Student Zone"]\n}`);
  const [jsonOutput, setJsonOutput] = useState('');
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [jsonIndent, setJsonIndent] = useState<number>(2);

  const handleFormatJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed, null, jsonIndent));
      setJsonError(null);
    } catch (err: any) {
      setJsonError(err.message);
      setJsonOutput('');
    }
  };

  const handleMinifyJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed));
      setJsonError(null);
    } catch (err: any) {
      setJsonError(err.message);
      setJsonOutput('');
    }
  };

  // 2. Base64 state
  const [base64Input, setBase64Input] = useState('Hello HK VELORA Developer!');
  const [base64Output, setBase64Output] = useState('');
  const [base64Mode, setBase64Mode] = useState<'encode' | 'decode'>('encode');

  const handleBase64Process = () => {
    try {
      if (base64Mode === 'encode') {
        setBase64Output(btoa(unescape(encodeURIComponent(base64Input))));
      } else {
        setBase64Output(decodeURIComponent(escape(atob(base64Input))));
      }
    } catch (err: any) {
      setBase64Output(`Error: Invalid string for ${base64Mode} (${err.message})`);
    }
  };

  // 3. URL Encoder / Decoder
  const [urlInput, setUrlInput] = useState('https://hkvelora.dev/search?q=technology & students=100%');
  const [urlOutput, setUrlOutput] = useState('');
  const [urlMode, setUrlMode] = useState<'encode' | 'decode'>('encode');

  const handleUrlProcess = () => {
    try {
      if (urlMode === 'encode') {
        setUrlOutput(encodeURIComponent(urlInput));
      } else {
        setUrlOutput(decodeURIComponent(urlInput));
      }
    } catch (err: any) {
      setUrlOutput(`Error: ${err.message}`);
    }
  };

  // 4. Regex Tester
  const [regexPattern, setRegexPattern] = useState('[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}');
  const [regexFlags, setRegexFlags] = useState('gi');
  const [regexTestText, setRegexTestText] = useState('Contact support@hkvelora.dev or student.lead@university.edu for queries. Invalid: test@');
  const [regexMatches, setRegexMatches] = useState<string[]>([]);
  const [regexError, setRegexError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (!regexPattern) {
        setRegexMatches([]);
        setRegexError(null);
        return;
      }
      const reg = new RegExp(regexPattern, regexFlags);
      const matches = regexTestText.match(reg);
      setRegexMatches(matches || []);
      setRegexError(null);
    } catch (err: any) {
      setRegexError(err.message);
      setRegexMatches([]);
    }
  }, [regexPattern, regexFlags, regexTestText]);

  // 5. UUID Generator
  const [uuidBatch, setUuidBatch] = useState<number>(5);
  const [uuids, setUuids] = useState<string[]>([]);

  const generateUUIDs = () => {
    const list: string[] = [];
    for (let i = 0; i < uuidBatch; i++) {
      list.push(crypto.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : ((r & 0x3) | 0x8);
        return v.toString(16);
      }));
    }
    setUuids(list);
  };

  useEffect(() => {
    if (toolId === 'uuid-generator' && uuids.length === 0) {
      generateUUIDs();
    }
  }, [toolId]);

  // 6. Timestamp Converter
  const [timestampInput, setTimestampInput] = useState<string>(Math.floor(Date.now() / 1000).toString());
  const [dateTimeString, setDateTimeString] = useState<string>(new Date().toISOString());

  const parseTimestamp = () => {
    const num = parseInt(timestampInput, 10);
    if (isNaN(num)) return;
    // determine seconds or millis
    const date = num > 1e11 ? new Date(num) : new Date(num * 1000);
    setDateTimeString(date.toISOString() + ` (${date.toLocaleString()})`);
  };

  const handleNowTimestamp = () => {
    const now = Math.floor(Date.now() / 1000);
    setTimestampInput(now.toString());
    const date = new Date(now * 1000);
    setDateTimeString(date.toISOString() + ` (${date.toLocaleString()})`);
  };

  // 7. Hash Generator (Web Crypto)
  const [hashInput, setHashInput] = useState('HK VELORA Security & Encryption');
  const [sha256Hash, setSha256Hash] = useState('');
  const [sha512Hash, setSha512Hash] = useState('');
  const [sha1Hash, setSha1Hash] = useState('');

  const computeHashes = async (textToHash: string) => {
    try {
      const msgUint8 = new TextEncoder().encode(textToHash);
      
      const hashBuffer256 = await crypto.subtle.digest('SHA-256', msgUint8);
      const hashArray256 = Array.from(new Uint8Array(hashBuffer256));
      setSha256Hash(hashArray256.map(b => b.toString(16).padStart(2, '0')).join(''));

      const hashBuffer512 = await crypto.subtle.digest('SHA-512', msgUint8);
      const hashArray512 = Array.from(new Uint8Array(hashBuffer512));
      setSha512Hash(hashArray512.map(b => b.toString(16).padStart(2, '0')).join(''));

      const hashBuffer1 = await crypto.subtle.digest('SHA-1', msgUint8);
      const hashArray1 = Array.from(new Uint8Array(hashBuffer1));
      setSha1Hash(hashArray1.map(b => b.toString(16).padStart(2, '0')).join(''));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    computeHashes(hashInput);
  }, [hashInput]);

  // 8. Code Beautifier
  const [codeLang, setCodeLang] = useState<'html' | 'css' | 'js'>('html');
  const [rawCode, setRawCode] = useState('<div class="box"><h1>HK VELORA</h1><p>Student tools</p></div>');
  const [beautifiedCode, setBeautifiedCode] = useState('');

  const formatCode = () => {
    // Lightweight standard indentation formatter
    try {
      if (codeLang === 'html') {
        const formatted = rawCode
          .replace(/>\s*</g, '>\n<')
          .split('\n')
          .map((line) => line.trim())
          .join('\n');
        setBeautifiedCode(formatted);
      } else if (codeLang === 'css') {
        const formatted = rawCode
          .replace(/\s*\{\s*/g, ' {\n  ')
          .replace(/;\s*/g, ';\n  ')
          .replace(/\s*\}\s*/g, '\n}\n');
        setBeautifiedCode(formatted);
      } else {
        // JS simple indentation
        const formatted = rawCode
          .replace(/\{/g, '{\n  ')
          .replace(/;/g, ';\n')
          .replace(/\}/g, '\n}');
        setBeautifiedCode(formatted);
      }
    } catch {
      setBeautifiedCode(rawCode);
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. JSON Formatter & Validator */}
      {toolId === 'json-formatter' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-300">Indent:</span>
              <select
                value={jsonIndent}
                onChange={e => setJsonIndent(Number(e.target.value))}
                className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-200 outline-none"
              >
                <option value={2}>2 Spaces</option>
                <option value={4}>4 Spaces</option>
                <option value={1}>1 Tab</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="format-json-btn"
                onClick={handleFormatJson}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1"
              >
                <Play className="w-3 h-3" />
                <span>Beautify & Validate</span>
              </button>
              <button
                id="minify-json-btn"
                onClick={handleMinifyJson}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
              >
                Minify JSON
              </button>
            </div>
          </div>

          {jsonError && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span><strong>Syntax Error:</strong> {jsonError}</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1.5 block">Input JSON</label>
              <textarea
                rows={12}
                value={jsonInput}
                onChange={e => setJsonInput(e.target.value)}
                className="w-full p-3 font-mono text-xs rounded-xl bg-slate-900 border border-slate-700 text-slate-100 outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-400">Formatted Output</label>
                {jsonOutput && (
                  <button
                    onClick={() => copyToClipboard(jsonOutput, 'json-out')}
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    {copied === 'json-out' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied === 'json-out' ? 'Copied' : 'Copy'}</span>
                  </button>
                )}
              </div>
              <textarea
                readOnly
                rows={12}
                value={jsonOutput || (jsonError ? 'Invalid JSON Syntax' : 'Click "Beautify & Validate" to format.')}
                className="w-full p-3 font-mono text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. Base64 Tool */}
      {toolId === 'base64-tool' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 w-fit">
            <button
              onClick={() => setBase64Mode('encode')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                base64Mode === 'encode' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Text → Base64 (Encode)
            </button>
            <button
              onClick={() => setBase64Mode('decode')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                base64Mode === 'decode' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Base64 → Text (Decode)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1.5 block">
                {base64Mode === 'encode' ? 'Plain Text Input' : 'Base64 String Input'}
              </label>
              <textarea
                rows={7}
                value={base64Input}
                onChange={e => setBase64Input(e.target.value)}
                className="w-full p-3 font-mono text-xs rounded-xl bg-slate-900 border border-slate-700 text-slate-100 outline-none focus:border-indigo-500"
              />
              <button
                onClick={handleBase64Process}
                className="mt-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold"
              >
                Execute {base64Mode === 'encode' ? 'Encoding' : 'Decoding'}
              </button>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-400">Result</label>
                {base64Output && (
                  <button
                    onClick={() => copyToClipboard(base64Output, 'b64')}
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    {copied === 'b64' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied === 'b64' ? 'Copied' : 'Copy'}</span>
                  </button>
                )}
              </div>
              <textarea
                readOnly
                rows={7}
                value={base64Output}
                placeholder="Result will appear here..."
                className="w-full p-3 font-mono text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* 3. URL Encoder / Decoder */}
      {toolId === 'url-encoder' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 w-fit">
            <button
              onClick={() => setUrlMode('encode')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                urlMode === 'encode' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Encode URL
            </button>
            <button
              onClick={() => setUrlMode('decode')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                urlMode === 'decode' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Decode URL
            </button>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              value={urlInput}
              onChange={e => setUrlInput(e.target.value)}
              placeholder="Paste URL string here..."
              className="w-full p-3 text-xs font-mono rounded-xl bg-slate-900 border border-slate-700 text-slate-100 outline-none focus:border-indigo-500"
            />
            <button
              onClick={handleUrlProcess}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold"
            >
              Convert
            </button>

            {urlOutput && (
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Processed Output</span>
                  <button
                    onClick={() => copyToClipboard(urlOutput, 'url')}
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    {copied === 'url' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied === 'url' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="font-mono text-xs break-all text-emerald-400">{urlOutput}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. Regex Tester */}
      {toolId === 'regex-tester' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="sm:col-span-3">
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Regex Pattern</label>
              <div className="flex items-center rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 font-mono text-xs">
                <span className="text-indigo-400 mr-1">/</span>
                <input
                  type="text"
                  value={regexPattern}
                  onChange={e => setRegexPattern(e.target.value)}
                  placeholder="e.g. [a-z0-9]+"
                  className="w-full bg-transparent text-slate-100 outline-none"
                />
                <span className="text-indigo-400 ml-1">/</span>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Flags</label>
              <input
                type="text"
                value={regexFlags}
                onChange={e => setRegexFlags(e.target.value)}
                placeholder="g, i, m, s"
                className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 font-mono text-xs text-slate-100 outline-none"
              />
            </div>
          </div>

          {regexError && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
              Regex Error: {regexError}
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-slate-400 mb-1 block">Test String</label>
            <textarea
              rows={5}
              value={regexTestText}
              onChange={e => setRegexTestText(e.target.value)}
              className="w-full p-3 font-mono text-xs rounded-xl bg-slate-900 border border-slate-700 text-slate-100 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Matches Found ({regexMatches.length})
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {regexMatches.length > 0 ? (
                regexMatches.map((m, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono text-xs"
                  >
                    {m}
                  </span>
                ))
              ) : (
                <span className="text-xs text-slate-500">No pattern matches detected in test string.</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 5. UUID Generator */}
      {toolId === 'uuid-generator' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-300">Quantity:</span>
              <input
                type="number"
                min={1}
                max={25}
                value={uuidBatch}
                onChange={e => setUuidBatch(Math.min(25, Math.max(1, parseInt(e.target.value) || 1)))}
                className="w-16 px-2 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-200 text-center outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={generateUUIDs}
                className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Regenerate v4 UUIDs</span>
              </button>
              <button
                onClick={() => copyToClipboard(uuids.join('\n'), 'all-uuid')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
              >
                {copied === 'all-uuid' ? 'Copied All!' : 'Copy All'}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {uuids.map((id, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200"
              >
                <span className="truncate mr-2">{id}</span>
                <button
                  onClick={() => copyToClipboard(id, `uuid-${index}`)}
                  className="p-1 rounded text-slate-400 hover:text-white"
                  title="Copy UUID"
                >
                  {copied === `uuid-${index}` ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Timestamp Converter */}
      {toolId === 'timestamp-converter' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label className="text-xs font-semibold text-slate-300">Unix Epoch Timestamp (Seconds or Milliseconds)</label>
              <button
                onClick={handleNowTimestamp}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Use Current Timestamp (Now)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={timestampInput}
                onChange={e => setTimestampInput(e.target.value)}
                className="flex-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-slate-100 outline-none"
              />
              <button
                onClick={parseTimestamp}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shrink-0"
              >
                Convert to Date
              </button>
            </div>
          </div>

          {dateTimeString && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-slate-400 block">Human Readable Date / Time</span>
              <p className="font-mono text-sm text-emerald-400 font-medium break-all">{dateTimeString}</p>
            </div>
          )}
        </div>
      )}

      {/* 7. Hash Generator */}
      {toolId === 'hash-generator' && (
        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-400 mb-1 block">Input Text to Hash</label>
            <input
              type="text"
              value={hashInput}
              onChange={e => setHashInput(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-100 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="space-y-3">
            {[
              { label: 'SHA-256 (Recommended)', val: sha256Hash },
              { label: 'SHA-512 (High Security)', val: sha512Hash },
              { label: 'SHA-1 (Legacy / Checksum)', val: sha1Hash },
            ].map((hash, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                    {hash.label}
                  </span>
                  <button
                    onClick={() => copyToClipboard(hash.val, `hash-${idx}`)}
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    {copied === `hash-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied === `hash-${idx}` ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="font-mono text-xs break-all text-indigo-300 font-medium">{hash.val || 'Computing...'}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 8. Code Beautifier */}
      {toolId === 'code-beautifier' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 w-fit">
            {(['html', 'css', 'js'] as const).map(l => (
              <button
                key={l}
                onClick={() => setCodeLang(l)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase ${
                  codeLang === l ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-400 mb-1 block">Raw Code</label>
              <textarea
                rows={9}
                value={rawCode}
                onChange={e => setRawCode(e.target.value)}
                className="w-full p-3 font-mono text-xs rounded-xl bg-slate-900 border border-slate-700 text-slate-100 outline-none"
              />
              <button
                onClick={formatCode}
                className="mt-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold"
              >
                Format & Indent Code
              </button>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-slate-400">Beautified Output</label>
                {beautifiedCode && (
                  <button
                    onClick={() => copyToClipboard(beautifiedCode, 'code')}
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    {copied === 'code' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied === 'code' ? 'Copied' : 'Copy'}</span>
                  </button>
                )}
              </div>
              <textarea
                readOnly
                rows={9}
                value={beautifiedCode}
                placeholder="Formatted code will appear here..."
                className="w-full p-3 font-mono text-xs rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
