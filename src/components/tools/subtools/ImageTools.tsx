import React, { useState, useRef, useEffect } from 'react';
import { Upload, Download, Image as ImageIcon, Sliders, RefreshCw, Check, ArrowRight } from 'lucide-react';

interface SubToolProps {
  toolId: string;
}

export const ImageTools: React.FC<SubToolProps> = ({ toolId }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [originalDimensions, setOriginalDimensions] = useState<{ width: number; height: number } | null>(null);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [statusError, setStatusError] = useState<string | null>(null);

  // Compressor states
  const [quality, setQuality] = useState<number>(75);
  const [compressedSrc, setCompressedSrc] = useState<string | null>(null);
  const [compressedSize, setCompressedSize] = useState<number>(0);

  // Resizer states
  const [targetWidth, setTargetWidth] = useState<number>(800);
  const [targetHeight, setTargetHeight] = useState<number>(600);
  const [lockAspectRatio, setLockAspectRatio] = useState<boolean>(true);
  const [resizedSrc, setResizedSrc] = useState<string | null>(null);

  // Converter states
  const [targetFormat, setTargetFormat] = useState<'image/jpeg' | 'image/png' | 'image/webp'>('image/webp');
  const [convertedSrc, setConvertedSrc] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (!file || !file.type.startsWith('image/')) {
      setStatusError('Please upload a valid image file (PNG, JPG, WebP).');
      return;
    }
    setStatusError(null);
    setSelectedFile(file);
    setOriginalSize(file.size);

    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      setImageSrc(src);

      const img = new Image();
      img.onload = () => {
        setOriginalDimensions({ width: img.width, height: img.height });
        setTargetWidth(img.width);
        setTargetHeight(img.height);
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  // Compression process
  useEffect(() => {
    if (toolId !== 'image-compressor' || !imageSrc || !originalDimensions) return;
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            setCompressedSize(blob.size);
            const url = URL.createObjectURL(blob);
            setCompressedSrc(url);
          }
        },
        'image/jpeg',
        quality / 100
      );
    };
  }, [toolId, imageSrc, quality, originalDimensions]);

  // Resizing process
  const processResize = () => {
    if (!imageSrc) return;
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
      setResizedSrc(canvas.toDataURL('image/png'));
    };
  };

  // Format conversion process
  const processConversion = () => {
    if (!imageSrc) return;
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      setConvertedSrc(canvas.toDataURL(targetFormat, 0.9));
    };
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      {statusError && (
        <div className="p-4 rounded-xl border bg-rose-500/10 border-rose-500/30 text-rose-400 text-xs font-semibold flex items-center justify-between">
          <span>{statusError}</span>
          <button onClick={() => setStatusError(null)} className="text-slate-400 hover:text-slate-200">✕</button>
        </div>
      )}
      {/* Upload Zone */}
      {!imageSrc ? (
        <div
          onDragOver={e => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-colors bg-slate-900/40 hover:bg-slate-900/80"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={e => e.target.files && handleFileSelect(e.target.files[0])}
          />
          <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mx-auto mb-4 border border-indigo-500/30">
            <Upload className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-slate-100">Drop an image here or click to browse</h4>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            Supports PNG, JPEG, and WebP. All processing is 100% private in browser memory without server uploads.
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
          <div className="flex items-center gap-3">
            <img src={imageSrc} alt="Preview" className="w-10 h-10 object-cover rounded-lg border border-slate-700" />
            <div>
              <p className="font-semibold text-slate-200 truncate max-w-xs">{selectedFile?.name}</p>
              <p className="text-slate-400">
                {originalDimensions?.width} × {originalDimensions?.height} px • {formatFileSize(originalSize)}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setImageSrc(null);
              setSelectedFile(null);
              setCompressedSrc(null);
              setResizedSrc(null);
              setConvertedSrc(null);
            }}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium"
          >
            Change Image
          </button>
        </div>
      )}

      {/* 1. Image Compressor */}
      {toolId === 'image-compressor' && imageSrc && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">Compression Quality: {quality}%</label>
              <span className="text-xs font-mono text-indigo-400">
                {compressedSize > 0 && originalSize > 0 && (
                  `Saved ${Math.max(0, Math.round(((originalSize - compressedSize) / originalSize) * 100))}%`
                )}
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={95}
              value={quality}
              onChange={e => setQuality(parseInt(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-center">
              <span className="text-xs font-semibold text-slate-400 uppercase">Original ({formatFileSize(originalSize)})</span>
              <div className="h-48 flex items-center justify-center overflow-hidden rounded-lg bg-slate-900/50">
                <img src={imageSrc} alt="Original" className="max-h-full max-w-full object-contain" />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/30 space-y-2 text-center">
              <span className="text-xs font-semibold text-emerald-400 uppercase">
                Compressed ({formatFileSize(compressedSize)})
              </span>
              <div className="h-48 flex items-center justify-center overflow-hidden rounded-lg bg-slate-900/50">
                {compressedSrc && (
                  <img src={compressedSrc} alt="Compressed" className="max-h-full max-w-full object-contain" />
                )}
              </div>
            </div>
          </div>

          {compressedSrc && (
            <div className="flex justify-end">
              <a
                href={compressedSrc}
                download={`compressed-${selectedFile?.name || 'image.jpg'}`}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Compressed Image</span>
              </a>
            </div>
          )}
        </div>
      )}

      {/* 2. Image Resizer */}
      {toolId === 'image-resizer' && imageSrc && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Width (px)</label>
                <input
                  type="number"
                  value={targetWidth}
                  onChange={e => {
                    const w = parseInt(e.target.value) || 1;
                    setTargetWidth(w);
                    if (lockAspectRatio && originalDimensions) {
                      setTargetHeight(Math.round(w * (originalDimensions.height / originalDimensions.width)));
                    }
                  }}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 mb-1 block">Height (px)</label>
                <input
                  type="number"
                  value={targetHeight}
                  onChange={e => {
                    const h = parseInt(e.target.value) || 1;
                    setTargetHeight(h);
                    if (lockAspectRatio && originalDimensions) {
                      setTargetWidth(Math.round(h * (originalDimensions.width / originalDimensions.height)));
                    }
                  }}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 outline-none"
                />
              </div>
              <div className="flex items-center pt-5">
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={lockAspectRatio}
                    onChange={e => setLockAspectRatio(e.target.checked)}
                    className="accent-indigo-600 rounded"
                  />
                  <span>Maintain Aspect Ratio</span>
                </label>
              </div>
            </div>

            <button
              onClick={processResize}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Apply Dimensions</span>
            </button>
          </div>

          {resizedSrc && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-center">
              <span className="text-xs font-semibold text-slate-400 uppercase">Resized Output ({targetWidth} × {targetHeight} px)</span>
              <div className="h-60 flex items-center justify-center overflow-hidden rounded-lg bg-slate-900/50">
                <img src={resizedSrc} alt="Resized" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex justify-end">
                <a
                  href={resizedSrc}
                  download={`resized-${targetWidth}x${targetHeight}.png`}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resized Image</span>
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. Image Converter */}
      {toolId === 'image-converter' && imageSrc && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <label className="text-xs font-semibold text-slate-300 block">Select Output Target Format:</label>
            <div className="flex items-center gap-2">
              {[
                { id: 'image/webp', label: 'WebP (Modern & Lightweight)' },
                { id: 'image/jpeg', label: 'JPEG / JPG (Universal)' },
                { id: 'image/png', label: 'PNG (Lossless Transparency)' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setTargetFormat(f.id as any)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    targetFormat === f.id ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <button
              onClick={processConversion}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Convert Format</span>
            </button>
          </div>

          {convertedSrc && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-3">
              <span className="text-xs font-semibold text-emerald-400 uppercase">Converted Image Ready!</span>
              <div className="flex justify-center">
                <a
                  href={convertedSrc}
                  download={`converted-image.${targetFormat === 'image/webp' ? 'webp' : targetFormat === 'image/png' ? 'png' : 'jpg'}`}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Converted Image</span>
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. Metadata Checker */}
      {toolId === 'image-metadata' && imageSrc && originalDimensions && (
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h4 className="font-bold text-sm text-slate-200">Image Inspection & Specifications</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] uppercase font-bold text-slate-400">Dimensions</span>
              <p className="text-sm font-mono font-bold text-indigo-400 mt-0.5">
                {originalDimensions.width} × {originalDimensions.height} px
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] uppercase font-bold text-slate-400">File Size</span>
              <p className="text-sm font-mono font-bold text-slate-200 mt-0.5">
                {formatFileSize(originalSize)}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] uppercase font-bold text-slate-400">Aspect Ratio</span>
              <p className="text-sm font-mono font-bold text-cyan-400 mt-0.5">
                {(originalDimensions.width / originalDimensions.height).toFixed(2)} : 1
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] uppercase font-bold text-slate-400">MIME Type</span>
              <p className="text-sm font-mono font-bold text-emerald-400 mt-0.5 truncate">
                {selectedFile?.type || 'image/jpeg'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
