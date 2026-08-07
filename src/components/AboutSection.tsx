import React from 'react';
import { Language } from '../types';
import { HERO_IMAGES } from '../data/portfolioData';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const specs = [
    { label: { en: 'Alias', ar: 'الاسم المعروف' }, val: 'Voidrey' },
    { label: { en: 'Role', ar: 'الدور التقني' }, val: 'AI Engineer & Systems Architect' },
    { label: { en: 'Languages', ar: 'اللغات الأساسية' }, val: 'Python • TypeScript • Rust • Bash' },
    { label: { en: 'Environment', ar: 'بيئة النظام' }, val: 'Arch Linux • Wayland • Neovim' },
    { label: { en: 'Primary AI', ar: 'نموذج الذكاء الاصطناعي' }, val: 'Gemini 2.5 Flash / Pro Multimodal' },
    { label: { en: 'Protocol', ar: 'البروتوكول' }, val: 'Model Context Protocol (MCP)' },
  ];

  return (
    <section id="about" className="relative py-24 px-4 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono-code text-[11px] text-blue-400 font-bold tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
          01
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 tracking-wide">
          {currentLang === 'en' ? 'About Voidrey' : 'نبذة عن فودري'}
        </h2>
        <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent flex-1 ml-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Portrait Column */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src={HERO_IMAGES.portrait}
              alt="Voidrey character portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[20%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800 text-xs font-mono-code">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ACTIVE
              </span>
              <span className="text-slate-400">VOID STATION 01</span>
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="space-y-4">
            <p className="font-display text-xl sm:text-2xl text-slate-200 leading-relaxed">
              {currentLang === 'en'
                ? 'Voidrey is an engineering identity built around extreme precision, minimalism, and perpetual automation.'
                : 'فودري هي هوية هندسية تتمحور حول الدقة الفائقة، البساطة، والأتمتة المستمرة.'}
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {currentLang === 'en'
                ? 'Focused on autonomous AI multi-agent runtimes, Model Context Protocol (MCP) servers, terminal utilities, and Linux-first infrastructure. Built to execute silently and solve complex engineering problems before they escalate.'
                : 'التركيز ينصب على أنظمة عملاء الذكاء الاصطناعي الذاتية، خوادم MCP، أدوات الطرفية، والبنية التحتية لنظام لينكس. أداء هادئ ومستقر لحل المشكلات المعقدة بكفاءة.'}
            </p>
          </div>

          {/* Specs Table Grid */}
          <div className="glass-card rounded-2xl p-5 shadow-xl space-y-3 font-mono-code text-xs">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-white/5 last:border-none"
              >
                <span className="text-slate-500">{currentLang === 'en' ? item.label.en : item.label.ar}</span>
                <span className="sm:col-span-2 text-slate-200 font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
