import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { PHILOSOPHY_MANTRAS } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

interface PhilosophySectionProps {
  currentLang: Language;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ currentLang }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    soundFx.playClick();
    setActiveIndex((prev) => (prev + 1) % PHILOSOPHY_MANTRAS.length);
  };

  const handlePrev = () => {
    soundFx.playClick();
    setActiveIndex((prev) => (prev - 1 + PHILOSOPHY_MANTRAS.length) % PHILOSOPHY_MANTRAS.length);
  };

  const activeMantra = PHILOSOPHY_MANTRAS[activeIndex];

  const valuesList = [
    { en: 'Precision over speed', ar: 'الدقة فوق السرعة' },
    { en: 'Simplicity over cleverness', ar: 'البساطة فوق التعقيد' },
    { en: 'Automation over repetition', ar: 'الأتمتة فوق التكرار' },
    { en: 'Architecture over hacks', ar: 'المعمارية فوق الحلول المؤقتة' },
    { en: 'Ownership over dependency', ar: 'الاستقلالية فوق التبعية' },
    { en: 'Quality over quantity', ar: 'الجودة فوق الكثرة' },
  ];

  return (
    <section id="philosophy" className="relative py-24 px-4 max-w-5xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono-code text-[11px] text-blue-400 font-bold tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
          05
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 tracking-wide">
          {currentLang === 'en' ? 'Philosophy & Mantras' : 'الفلسفة والمبادئ'}
        </h2>
        <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent flex-1 ml-4" />
      </div>

      {/* Quote Card Box */}
      <div className="relative glass-card glass-card-hover rounded-3xl p-8 sm:p-12 shadow-2xl text-center overflow-hidden mb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <Quote className="w-12 h-12 mx-auto text-blue-400/40 mb-6" />

        <blockquote className="font-display text-2xl sm:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-slate-100 leading-relaxed mb-4 max-w-3xl mx-auto">
          "{currentLang === 'en' ? activeMantra.quote.en : activeMantra.quote.ar}"
        </blockquote>

        <p className="font-mono-code text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-8">
          {currentLang === 'en' ? activeMantra.subtext.en : activeMantra.subtext.ar}
        </p>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 font-mono-code text-xs">
          <button
            onClick={handlePrev}
            onMouseEnter={() => soundFx.playHover()}
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-red-500/60 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-slate-500">
            {activeIndex + 1} / {PHILOSOPHY_MANTRAS.length}
          </span>

          <button
            onClick={handleNext}
            onMouseEnter={() => soundFx.playHover()}
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-red-500/60 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Values Strip */}
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 font-mono-code text-xs text-slate-400">
        {valuesList.map((val, idx) => (
          <React.Fragment key={idx}>
            <span className="hover:text-amber-400 transition-colors cursor-default flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              {currentLang === 'en' ? val.en : val.ar}
            </span>
            {idx < valuesList.length - 1 && <span className="text-slate-700">/</span>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
