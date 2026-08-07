import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Globe, Menu, X, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { soundFx } from '../utils/soundEffects';

interface NavbarProps {
  currentLang: Language;
  onLanguageToggle: () => void;
  onOpenTerminal: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageToggle,
  onOpenTerminal,
  isAudioMuted,
  onToggleAudio,
  activeSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', labelEn: 'About', labelAr: 'نبذة', idx: '01' },
    { id: 'focus', labelEn: 'Focus', labelAr: 'المجالات', idx: '02' },
    { id: 'stack', labelEn: 'Stack', labelAr: 'البيئة', idx: '03' },
    { id: 'artifacts', labelEn: 'Artifacts', labelAr: 'الأعمال', idx: '04' },
    { id: 'philosophy', labelEn: 'Philosophy', labelAr: 'الفلسفة', idx: '05' },
    { id: 'connect', labelEn: 'Connect', labelAr: 'التواصل', idx: '06' },
  ];

  const handleNavClick = (id: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020205]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Mark */}
        <a
          href="#top"
          onClick={() => handleNavClick('top')}
          onMouseEnter={() => soundFx.playHover()}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-all duration-300">
            <span className="text-white font-bold text-sm tracking-tighter">
              V
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black tracking-tighter text-xl text-slate-100 group-hover:text-blue-400 transition-colors">
              VOIDREY
            </span>
            <span className="font-mono-code text-[10px] text-slate-400 tracking-wider -mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ECLIPSE OS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 font-mono-code text-xs tracking-wider">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative py-1 cursor-pointer transition-colors flex items-center gap-1.5 ${
                  isActive ? 'text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="text-blue-400 text-[10px]">{link.idx}</span>
                <span>{currentLang === 'en' ? link.labelEn : link.labelAr}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions Dock */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Terminal Launcher */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenTerminal();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-red-500/50 hover:bg-slate-800/80 text-xs font-mono-code transition-all shadow-md group cursor-pointer"
            title="Open CLI Terminal (Ctrl+K)"
          >
            <Terminal className="w-3.5 h-3.5 text-red-500 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">CLI</span>
            <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700/60 hidden md:inline">
              Ctrl+K
            </span>
          </button>

          {/* Audio Ambient Toggle */}
          <button
            onClick={() => {
              soundFx.playClick();
              onToggleAudio();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className={`p-2 rounded-lg border text-xs transition-all cursor-pointer ${
              !isAudioMuted
                ? 'bg-purple-950/40 border-purple-500/60 text-purple-300 shadow-md shadow-purple-950/30'
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
            title={isAudioMuted ? 'Unmute SFX & Drone' : 'Mute Sound Effects'}
          >
            {!isAudioMuted ? (
              <Volume2 className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Language Switch */}
          <button
            onClick={() => {
              soundFx.playClick();
              onLanguageToggle();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 text-xs font-mono-code transition-all cursor-pointer"
            title="Toggle Language (English / العربية)"
          >
            <Globe className="w-3.5 h-3.5 text-amber-500" />
            <span className="uppercase font-bold text-[11px]">{currentLang}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#07080c]/98 backdrop-blur-2xl border-b border-slate-800 py-6 px-6 shadow-2xl flex flex-col gap-4 font-mono-code text-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="flex items-center justify-between text-left py-2 border-b border-slate-900 text-slate-300 hover:text-red-400 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-xs">{link.idx}</span>
                <span>{currentLang === 'en' ? link.labelEn : link.labelAr}</span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-purple-500 opacity-60" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
