import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { soundFx } from './utils/soundEffects';
import { CosmicCanvas } from './components/CosmicCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FocusSection } from './components/FocusSection';
import { StackSection } from './components/StackSection';
import { ArtifactsSection } from './components/ArtifactsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ConnectSection } from './components/ConnectSection';
import { TerminalModal } from './components/TerminalModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('top');

  // Handle Ctrl+K shortcut to open CLI terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        soundFx.playClick();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Intersection observer to track active section
  useEffect(() => {
    const sections = ['top', 'about', 'focus', 'stack', 'artifacts', 'philosophy', 'connect'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageToggle = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleToggleAudio = () => {
    const muted = soundFx.toggleMute();
    setIsAudioMuted(muted);
    soundFx.toggleAmbientDrone(!muted);
  };

  return (
    <div
      className={`min-h-screen bg-[#020205] text-slate-200 selection:bg-blue-600 selection:text-white relative overflow-x-hidden ${
        currentLang === 'ar' ? 'font-sans' : 'font-sans'
      }`}
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Immersive Background Orbs */}
      <div className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Perspective Overlay Frame */}
      <div className="fixed inset-2 sm:inset-4 pointer-events-none border border-white/5 rounded-[32px] sm:rounded-[40px] z-40" />

      {/* Background Interactive Starfield */}
      <CosmicCanvas interactive={true} intensity="medium" />

      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        isAudioMuted={isAudioMuted}
        onToggleAudio={handleToggleAudio}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          currentLang={currentLang}
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onToggleAudio={handleToggleAudio}
          isAudioMuted={isAudioMuted}
        />

        <AboutSection currentLang={currentLang} />

        <FocusSection currentLang={currentLang} />

        <StackSection currentLang={currentLang} />

        <ArtifactsSection currentLang={currentLang} />

        <PhilosophySection currentLang={currentLang} />

        <ConnectSection currentLang={currentLang} />
      </main>

      {/* Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        currentLang={currentLang}
      />

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}
