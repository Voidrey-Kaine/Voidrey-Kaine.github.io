import React from 'react';
import { Terminal, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { Language } from '../types';
import { HERO_IMAGES } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

interface HeroProps {
  currentLang: Language;
  onOpenTerminal: () => void;
  onToggleAudio: () => void;
  isAudioMuted: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenTerminal,
}) => {
  const wordmarkChars = 'VOIDREY'.split('');

  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden z-10">
      {/* Hero Background Image with Mask */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={HERO_IMAGES.heroBg}
          alt="Voidrey cosmic nebula background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 scale-105 filter saturate-125 contrast-125 animate-pulse-glow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050609]/60 via-[#07080c]/80 to-[#050609]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Floating Eclipse Sigil */}
        <div className="relative mb-6 group cursor-pointer" onClick={onOpenTerminal}>
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-red-600/30 via-purple-600/30 to-amber-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-slate-950/90 border border-slate-800 p-2 shadow-2xl flex items-center justify-center overflow-hidden group-hover:border-red-500/80 transition-all duration-500">
            <img
              src={HERO_IMAGES.sigil}
              alt="Voidrey Sigil Emblem"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] group-hover:rotate-180 transition-transform duration-1000 ease-out"
            />
          </div>
          <div className="absolute -bottom-2 bg-slate-900/90 border border-red-500/50 text-[10px] font-mono-code text-red-400 px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <Zap className="w-2.5 h-2.5 text-amber-400 animate-bounce" />
            <span>CLICK TO RUN CLI</span>
          </div>
        </div>

        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-mono-code text-[11px] tracking-[0.3em] font-bold uppercase mb-6 shadow-lg shadow-blue-500/10">
          <span>{currentLang === 'en' ? 'HEIR OF THE ECLIPSE' : 'وريث الكسوف'}</span>
        </div>

        {/* Wordmark Headline */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-gray-500 drop-shadow-[0_0_35px_rgba(59,130,246,0.2)] my-3">
          {wordmarkChars.map((char, index) => (
            <span
              key={index}
              className="inline-block hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-default"
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Subtitle & Role */}
        <p className="font-mono-code text-sm sm:text-lg text-slate-300 tracking-wider mt-2 max-w-2xl">
          {currentLang === 'en'
            ? 'AI Engineer • Systems Architect • Toolsmith'
            : 'مهندس ذكاء اصطناعي • معمار أنظمة • مطور أدوات'}
        </p>

        <p className="font-display italic text-lg sm:text-xl text-amber-400/90 tracking-wide mt-2 mb-8">
          "{currentLang === 'en' ? 'Build once. Automate forever.' : 'ابنِ مرة واحدة. وأتمت إلى الأبد.'}"
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenTerminal();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-purple-700 text-white font-mono-code text-xs sm:text-sm font-semibold tracking-wider flex items-center gap-2.5 shadow-lg shadow-red-900/40 hover:shadow-red-600/50 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-red-500/50"
          >
            <Terminal className="w-4 h-4 text-slate-100" />
            <span>{currentLang === 'en' ? 'LAUNCH TERMINAL' : 'تشغيل الطرفية'}</span>
          </button>

          <a
            href="#focus"
            onClick={() => soundFx.playClick()}
            onMouseEnter={() => soundFx.playHover()}
            className="px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-purple-500/60 font-mono-code text-xs sm:text-sm font-medium tracking-wider flex items-center gap-2 shadow-md hover:bg-slate-800/80 transition-all cursor-pointer"
          >
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>{currentLang === 'en' ? 'EXPLORE DOMAINS' : 'استعراض المجالات'}</span>
          </a>
        </div>

        {/* System Info Bar */}
        <div className="w-full max-w-2xl glass-card rounded-2xl p-4 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-wrap items-center justify-around gap-4 text-xs font-mono-code text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span className="text-slate-500">OS:</span>
            <span className="text-slate-200 font-medium">ARCH LINUX / WAYLAND</span>
          </div>

          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span className="text-slate-500">EDITOR:</span>
            <span className="text-slate-200 font-medium">NEOVIM + KITTY</span>
          </div>
        </div>
      </div>

      {/* Scroll Cue Indicator */}
      <a
        href="#about"
        onClick={() => soundFx.playClick()}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-red-400 transition-colors group cursor-pointer"
      >
        <span className="font-mono-code text-[10px] tracking-[0.2em]">SCROLL</span>
        <div className="w-6 h-10 rounded-full border border-slate-700 flex items-start justify-center p-1 group-hover:border-red-500/60 transition-colors">
          <div className="w-1.5 h-2 bg-red-500 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
