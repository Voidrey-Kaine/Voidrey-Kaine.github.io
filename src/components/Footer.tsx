import React from 'react';
import { HERO_IMAGES } from '../data/portfolioData';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  return (
    <footer className="relative py-12 px-4 border-t border-white/10 bg-[#020205] text-center z-10 font-mono-code text-xs">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Sigil Emblem */}
        <div className="w-10 h-10 rounded-xl border border-white/10 bg-slate-950 p-1.5 shadow-lg shadow-blue-500/10">
          <img
            src={HERO_IMAGES.sigil}
            alt="Voidrey Sigil"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
          />
        </div>

        {/* Status Line */}
        <div className="flex items-center gap-2 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>VOID STATION 01 • ALL SYSTEMS NOMINAL</span>
        </div>

        {/* Mantras */}
        <p className="text-slate-500 max-w-lg">
          Void • Focus • Precision • Architecture • Automation • Silence • Mastery
        </p>

        {/* Copyright */}
        <div className="text-slate-600 text-[11px] pt-2">
          © {new Date().getFullYear()} VOIDREY. {currentLang === 'en' ? 'Build once. Automate forever.' : 'ابنِ مرة واحدة. وأتمت إلى الأبد.'}
        </div>
      </div>
    </footer>
  );
};
