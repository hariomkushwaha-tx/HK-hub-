import React, { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Upload, FileText, Download, Check, Trash2, ArrowUpDown, Plus, Sparkles } from 'lucide-react';

interface SubToolProps {
  toolId: string;
}

export const PdfTools: React.FC<SubToolProps> = ({ toolId }) => {
  const [statusMessage, setStatusMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  // 1. PDF Merger states
  const [mergeFiles, setMergeFiles] = useState<{ file: File; name: string; size: number }[]>([]);
  const [isMerging, setIsMerging] = useState<boolean>(false);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);

  // 2. PDF Splitter states
  const [splitFile, setSplitFile] = useState<File | null>(null);
  const [splitPageCount, setSplitPageCount] = useState<number>(0);
  const [splitRange, setSplitRange] = useState<string>('1');
  const [isSplitting, setIsSplitting] = useState<boolean>(false);
  const [splitPdfUrl, setSplitPdfUrl] = useState<string | null>(null);

  // 3. Image to PDF states
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isConvertingImages, setIsConvertingImages] = useState<boolean>(false);
  const [imagesPdfUrl, setImagesPdfUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle PDF files for merger
  const handleAddMergeFiles = (files: FileList | null) => {
    if (!files) return;
    setStatusMessage(null);
    const newFiles: { file: File; name: string; size: number }[] = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type === 'application/pdf' || files[i].name.endsWith('.pdf')) {
        newFiles.push({ file: files[i], name: files[i].name, size: files[i].size });
      }
    }
    setMergeFiles(prev => [...prev, ...newFiles]);
  };

  const removeMergeFile = (index: number) => {
    setMergeFiles(prev => prev.filter((_, i) => i !== index));
  };

  const moveMergeFile = (index: number, direction: 'up' | 'down') => {
    const nextList = [...mergeFiles];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= nextList.length) return;
    const temp = nextList[index];
    nextList[index] = nextList[targetIdx];
    nextList[targetIdx] = temp;
    setMergeFiles(nextList);
  };

  const processMergePdfs = async () => {
    if (mergeFiles.length < 2) {
      setStatusMessage({ type: 'error', text: 'Please select at least 2 PDF documents to merge.' });
      return;
    }
    try {
      setStatusMessage(null);
      setIsMerging(true);
      const mergedPdf = await PDFDocument.create();

      for (const item of mergeFiles) {
        const arrayBuffer = await item.file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      setMergedPdfUrl(URL.createObjectURL(blob));
      setStatusMessage({ type: 'success', text: 'PDF documents merged successfully! Download ready below.' });
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: `Merge error: ${err.message || 'Operation failed'}` });
    } finally {
      setIsMerging(false);
    }
  };

  // Handle Split file
  const handleSelectSplitFile = async (file: File) => {
    if (!file || !file.name.endsWith('.pdf')) {
      setStatusMessage({ type: 'error', text: 'Please select a valid PDF file.' });
      return;
    }
    setStatusMessage(null);
    setSplitFile(file);
    try {
      const buffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(buffer);
      setSplitPageCount(pdf.getPageCount());
      setSplitRange(`1-${Math.min(3, pdf.getPageCount())}`);
    } catch (e: any) {
      setStatusMessage({ type: 'error', text: `Failed to read PDF: ${e.message || 'Corrupted file'}` });
    }
  };

  const processSplitPdf = async () => {
    if (!splitFile) return;
    try {
      setStatusMessage(null);
      setIsSplitting(true);
      const buffer = await splitFile.arrayBuffer();
      const pdf = await PDFDocument.load(buffer);
      const totalPages = pdf.getPageCount();

      // Parse range: e.g. "1, 3-5"
      const pagesToExtract: number[] = [];
      const parts = splitRange.split(',');
      for (const part of parts) {
        const trimmedPart = part.trim();
        if (trimmedPart.includes('-')) {
          const [startStr, endStr] = trimmedPart.split('-');
          const start = parseInt(startStr, 10);
          const end = parseInt(endStr, 10);
          if (!isNaN(start) && !isNaN(end)) {
            for (let i = start; i <= end; i++) {
              if (i >= 1 && i <= totalPages && !pagesToExtract.includes(i - 1)) {
                pagesToExtract.push(i - 1);
              }
            }
          }
        } else {
          const pageNum = parseInt(trimmedPart, 10);
          if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages && !pagesToExtract.includes(pageNum - 1)) {
            pagesToExtract.push(pageNum - 1);
          }
        }
      }

      if (pagesToExtract.length === 0) {
        setStatusMessage({ type: 'error', text: 'Please provide valid page numbers within the document range.' });
        setIsSplitting(false);
        return;
      }

      const newPdf = await PDFDocument.create();
      const copiedPages = await newPdf.copyPages(pdf, pagesToExtract);
      copiedPages.forEach(p => newPdf.addPage(p));

      const newPdfBytes = await newPdf.save();
      const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
      setSplitPdfUrl(URL.createObjectURL(blob));
      setStatusMessage({ type: 'success', text: `Extracted ${pagesToExtract.length} pages successfully!` });
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: `Split error: ${err.message || 'Operation failed'}` });
    } finally {
      setIsSplitting(false);
    }
  };

  // Handle Images to PDF
  const handleAddImages = (files: FileList | null) => {
    if (!files) return;
    setStatusMessage(null);
    const list: File[] = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.startsWith('image/')) {
        list.push(files[i]);
      }
    }
    setImageFiles(prev => [...prev, ...list]);
  };

  const processImagesToPdf = async () => {
    if (imageFiles.length === 0) return;
    try {
      setStatusMessage(null);
      setIsConvertingImages(true);
      const pdf = await PDFDocument.create();

      for (const file of imageFiles) {
        const arrayBuffer = await file.arrayBuffer();
        let image;
        if (file.type === 'image/png') {
          image = await pdf.embedPng(arrayBuffer);
        } else {
          image = await pdf.embedJpg(arrayBuffer);
        }

        const page = pdf.addPage([image.width, image.height]);
        page.drawImage(image, {
          x: 0,
          y: 0,
          width: image.width,
          height: image.height,
        });
      }

      const pdfBytes = await pdf.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      setImagesPdfUrl(URL.createObjectURL(blob));
      setStatusMessage({ type: 'success', text: 'Images converted to PDF document successfully!' });
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: `Image conversion error: ${err.message || 'Failed'}` });
    } finally {
      setIsConvertingImages(false);
    }
  };

  const formatSize = (bytes: number) => {
    return (bytes / 1024).toFixed(1) + ' KB';
  };

  return (
    <div className="space-y-6">
      {statusMessage && (
        <div className={`p-4 rounded-xl border text-xs font-semibold flex items-center justify-between ${
          statusMessage.type === 'error'
            ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
            : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
        }`}>
          <span>{statusMessage.text}</span>
          <button onClick={() => setStatusMessage(null)} className="text-slate-400 hover:text-slate-200">✕</button>
        </div>
      )}
      {/* 1. PDF Merger */}
      {toolId === 'pdf-merger' && (
        <div className="space-y-4">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-2xl p-6 text-center cursor-pointer bg-slate-900/40 hover:bg-slate-900/80 transition-colors"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              multiple
              className="hidden"
              onChange={e => handleAddMergeFiles(e.target.files)}
            />
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mx-auto mb-2 border border-indigo-500/30">
              <Plus className="w-5 h-5" />
            </div>
            <p className="text-sm font-bold text-slate-200">Click to Select Multiple PDF Files to Merge</p>
            <p className="text-xs text-slate-400 mt-0.5">Drag and reorder files below. Entirely client-side with 0 server upload.</p>
          </div>

          {mergeFiles.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">
                  Files to Merge ({mergeFiles.length})
                </span>
                <button
                  onClick={() => setMergeFiles([])}
                  className="text-xs text-rose-400 hover:text-rose-300"
                >
                  Clear all
                </button>
              </div>

              <div className="space-y-1.5">
                {mergeFiles.map((f, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="truncate font-medium">{f.name}</span>
                      <span className="text-slate-500 shrink-0 font-mono">({formatSize(f.size)})</span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => moveMergeFile(idx, 'up')}
                        disabled={idx === 0}
                        className="p-1 text-slate-400 hover:text-white disabled:opacity-30"
                        title="Move Up"
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => moveMergeFile(idx, 'down')}
                        disabled={idx === mergeFiles.length - 1}
                        className="p-1 text-slate-400 hover:text-white disabled:opacity-30"
                        title="Move Down"
                      >
                        ↓
                      </button>
                      <button
                        onClick={() => removeMergeFile(idx)}
                        className="p-1 text-slate-400 hover:text-rose-400"
                        title="Remove file"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={processMergePdfs}
                  disabled={isMerging || mergeFiles.length < 2}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isMerging ? 'Merging In Browser...' : 'Merge All Documents'}</span>
                </button>

                {mergedPdfUrl && (
                  <a
                    href={mergedPdfUrl}
                    download="hkvelora-merged-document.pdf"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-emerald-600/20"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Merged PDF</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. PDF Splitter / Page Extractor */}
      {toolId === 'pdf-splitter' && (
        <div className="space-y-4">
          {!splitFile ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-2xl p-8 text-center cursor-pointer bg-slate-900/40 hover:bg-slate-900/80 transition-colors"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={e => e.target.files && handleSelectSplitFile(e.target.files[0])}
              />
              <FileText className="w-10 h-10 text-indigo-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-200">Select PDF to Split or Extract Pages</p>
              <p className="text-xs text-slate-400 mt-1">Upload a single PDF to extract specific page ranges.</p>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-200">{splitFile.name}</h4>
                  <p className="text-xs text-slate-400">Total Document Pages: <strong className="text-indigo-400">{splitPageCount}</strong></p>
                </div>
                <button
                  onClick={() => { setSplitFile(null); setSplitPdfUrl(null); }}
                  className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Choose Another PDF
                </button>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 block">
                  Page Range to Extract (e.g. 1, 3-5, 7)
                </label>
                <input
                  type="text"
                  value={splitRange}
                  onChange={e => setSplitRange(e.target.value)}
                  placeholder="e.g. 1, 2-4"
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-100 font-mono outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={processSplitPdf}
                  disabled={isSplitting}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold"
                >
                  {isSplitting ? 'Extracting Pages...' : 'Extract & Generate PDF'}
                </button>

                {splitPdfUrl && (
                  <a
                    href={splitPdfUrl}
                    download={`extracted-${splitRange}.pdf`}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Extracted PDF</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. Images to PDF */}
      {toolId === 'pdf-converter' && (
        <div className="space-y-4">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-2xl p-6 text-center cursor-pointer bg-slate-900/40 hover:bg-slate-900/80 transition-colors"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              multiple
              className="hidden"
              onChange={e => handleAddImages(e.target.files)}
            />
            <div className="w-12 h-12 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center mx-auto mb-2 border border-cyan-500/30">
              <Upload className="w-5 h-5" />
            </div>
            <p className="text-sm font-bold text-slate-200">Select Images to Combine into a PDF</p>
            <p className="text-xs text-slate-400 mt-0.5">Supports PNG and JPG images.</p>
          </div>

          {imageFiles.length > 0 && (
            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-300">
                Selected Images ({imageFiles.length} pages)
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {imageFiles.map((img, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center text-[10px] text-slate-300 truncate">
                    Page {idx + 1}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={processImagesToPdf}
                  disabled={isConvertingImages}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold"
                >
                  {isConvertingImages ? 'Compiling PDF...' : 'Convert Images to PDF'}
                </button>

                {imagesPdfUrl && (
                  <a
                    href={imagesPdfUrl}
                    download="images-document.pdf"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF Document</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
