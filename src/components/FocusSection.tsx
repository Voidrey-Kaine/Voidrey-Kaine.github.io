import React, { useState } from 'react';
import { Cpu, Server, Workflow, Terminal, Layers, Wrench, Code } from 'lucide-react';
import { FocusArea, Language } from '../types';
import { FOCUS_AREAS } from '../data/portfolioData';
import { CodeModal } from './CodeModal';
import { soundFx } from '../utils/soundEffects';

interface FocusSectionProps {
  currentLang: Language;
}

export const FocusSection: React.FC<FocusSectionProps> = ({ currentLang }) => {
  const [activeModalFocus, setActiveModalFocus] = useState<FocusArea | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-red-500" />;
      case 'Server':
        return <Server className="w-6 h-6 text-purple-400" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-amber-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-indigo-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-sky-400" />;
      default:
        return <Cpu className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="focus" className="relative py-24 px-4 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono-code text-[11px] text-blue-400 font-bold tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
          02
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 tracking-wide">
          {currentLang === 'en' ? 'Engineering Focus' : 'مجالات الهندسة والتطوير'}
        </h2>
        <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent flex-1 ml-4" />
      </div>

      {/* Grid of Focus Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FOCUS_AREAS.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => soundFx.playHover()}
            className="group relative glass-card glass-card-hover rounded-2xl p-6 shadow-xl flex flex-col justify-between"
          >
            {/* Top Row: Icon + Code Inspect Trigger */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-red-500/40 group-hover:scale-110 transition-all">
                  {getIcon(item.iconName)}
                </div>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    setActiveModalFocus(item);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-amber-400 group-hover:border-amber-500/40 font-mono-code text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Inspect Architecture & Code Snippet"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>INSPECT</span>
                </button>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display text-xl font-medium text-slate-100 group-hover:text-red-400 transition-colors">
                {currentLang === 'en' ? item.title.en : item.title.ar}
              </h3>
              <p className="font-mono-code text-xs text-purple-400/90 mb-3">
                {currentLang === 'en' ? item.subtitle.en : item.subtitle.ar}
              </p>

              {/* Concise Description */}
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {currentLang === 'en' ? item.description.en : item.description.ar}
              </p>
            </div>

            {/* Bottom Row: Tags */}
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 font-mono-code text-[10px]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Code Modal */}
      <CodeModal
        focusArea={activeModalFocus}
        onClose={() => setActiveModalFocus(null)}
        currentLang={currentLang}
      />
    </section>
  );
};
