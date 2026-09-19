import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Radio, 
  Compass, 
  ArrowRight, 
  Info, 
  Shield, 
  Zap, 
  Maximize2 
} from 'lucide-react';
import { EducationalDiagram } from '../../../types/weapon';
import { EDUCATIONAL_DIAGRAMS } from '../../../data/weaponEngineeringData';

interface EducationalDiagramsViewProps {
  diagrams?: EducationalDiagram[];
  chapterTitle: string;
}

export const EducationalDiagramsView: React.FC<EducationalDiagramsViewProps> = ({
  diagrams = EDUCATIONAL_DIAGRAMS,
  chapterTitle
}) => {
  const [selectedDiagramId, setSelectedDiagramId] = useState<string>(diagrams[0]?.id || 'diag-lifecycle');
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const currentDiagram = diagrams.find(d => d.id === selectedDiagramId) || diagrams[0];
  const activeNode = currentDiagram.nodes.find(n => n.id === activeNodeId) || currentDiagram.nodes[0];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header & Diagram Selector */}
      <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500 text-black">
                SCHEMATICS & ARCHITECTURE
              </span>
              <span className="text-xs text-zinc-400">Interactive Systems Engineering Diagrams</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
              प्रणालीगत आरेख व आर्किटेक्चर (System Schematics)
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
              प्रत्येक घटक, डेटा बस, सिग्नल फ्लो और निर्णय नोड्स का विस्तृत इंटरेक्टिव आर्किटेक्चरल मानचित्र।
            </p>
          </div>
        </div>

        {/* Diagram Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
          {diagrams.map((d) => {
            const isSelected = selectedDiagramId === d.id;
            return (
              <button
                key={d.id}
                onClick={() => {
                  setSelectedDiagramId(d.id);
                  setActiveNodeId(null);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                    : 'bg-zinc-950/60 hover:bg-zinc-800/60 text-zinc-400 border border-zinc-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{d.title.split(':')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Diagram Canvas Area */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
        <div>
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
            Interactive Node Exploration
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            {currentDiagram.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            {currentDiagram.description}
          </p>
        </div>

        {/* Nodes Sequential Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {currentDiagram.nodes.map((node) => {
            const isSelected = activeNode?.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg ring-1 ring-amber-400/40'
                    : 'bg-zinc-900/50 border-zinc-800/80 hover:bg-zinc-800/50 text-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-amber-400'
                  }`}>
                    {node.role}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">ID: {node.id}</span>
                </div>
                <h4 className="text-xs font-bold text-zinc-100">{node.label}</h4>
                <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">{node.details}</p>
              </button>
            );
          })}
        </div>

        {/* Node Deep Inspection Card */}
        {activeNode && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-indigo-950/30 border border-amber-500/40 space-y-2 animate-in fade-in duration-150">
            <div className="flex items-center gap-2 text-amber-400">
              <Info className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                घटक विनिर्देश विवरण (Component Specification Detail)
              </span>
            </div>
            <h4 className="text-lg font-bold text-white">
              {activeNode.label} — <span className="text-amber-400 font-mono text-sm">{activeNode.role}</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeNode.details}
            </p>
          </div>
        )}

        {/* Connections Flow List */}
        <div className="space-y-2 pt-2 border-t border-zinc-800">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
            सिग्नल एवं डेटा ट्रांसमिशन प्रवाह (Data & Signal Interconnects):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentDiagram.connections.map((conn, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-between">
                <span className="text-amber-400">{conn.from}</span>
                <span className="text-[10px] text-zinc-500 flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-zinc-500" />
                  {conn.label || 'Passes To'}
                  <ArrowRight className="w-3 h-3 text-zinc-500" />
                </span>
                <span className="text-cyan-400">{conn.to}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
