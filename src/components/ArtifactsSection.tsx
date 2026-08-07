import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { Artifact, Language } from '../types';
import { ARTIFACTS } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

interface ArtifactsSectionProps {
  currentLang: Language;
}

export const ArtifactsSection: React.FC<ArtifactsSectionProps> = ({ currentLang }) => {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);

  return (
    <section id="artifacts" className="relative py-24 px-4 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono-code text-[11px] text-blue-400 font-bold tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
          04
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 tracking-wide">
          {currentLang === 'en' ? 'Visual Artifacts' : 'المعروضات البصرية والرسومات'}
        </h2>
        <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent flex-1 ml-4" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTIFACTS.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              soundFx.playClick();
              setSelectedArtifact(item);
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="group relative glass-card glass-card-hover rounded-2xl overflow-hidden shadow-xl cursor-pointer flex flex-col"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-square bg-slate-950">
              <img
                src={item.imageSrc}
                alt={currentLang === 'en' ? item.title.en : item.title.ar}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent opacity-80" />

              {/* Hover Badge */}
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-purple-400" />
              </div>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <span className="font-mono-code text-[10px] text-purple-400 uppercase tracking-widest">
                  {currentLang === 'en' ? item.category.en : item.category.ar}
                </span>
                <h3 className="font-display text-xl font-medium text-slate-100 mt-1 mb-2 group-hover:text-red-400 transition-colors">
                  {currentLang === 'en' ? item.title.en : item.title.ar}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {currentLang === 'en' ? item.description.en : item.description.ar}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 font-mono-code text-[10px]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedArtifact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
          <div className="relative max-w-4xl w-full bg-[#0c0e14] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArtifact(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image View */}
            <div className="md:w-3/5 bg-slate-950 flex items-center justify-center p-6">
              <img
                src={selectedArtifact.imageSrc}
                alt={currentLang === 'en' ? selectedArtifact.title.en : selectedArtifact.title.ar}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-slate-800"
              />
            </div>

            {/* Content Details */}
            <div className="md:w-2/5 p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono-code text-xs text-purple-400 uppercase tracking-widest">
                  {currentLang === 'en' ? selectedArtifact.category.en : selectedArtifact.category.ar}
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-100 mt-2 mb-4">
                  {currentLang === 'en' ? selectedArtifact.title.en : selectedArtifact.title.ar}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  {currentLang === 'en' ? selectedArtifact.description.en : selectedArtifact.description.ar}
                </p>

                <div className="space-y-2">
                  <span className="font-mono-code text-xs text-slate-500">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedArtifact.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono-code text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 font-mono-code text-xs text-slate-500">
                <span>SYSTEM ARTIFACT // VOIDREY ARCHIVES</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
