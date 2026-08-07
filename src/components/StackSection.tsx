import React, { useState } from 'react';
import { Code2, Terminal, Sparkles, Cloud, Zap } from 'lucide-react';
import { Language } from '../types';
import { TECH_STACK_CATEGORIES } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

interface StackSectionProps {
  currentLang: Language;
}

export const StackSection: React.FC<StackSectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? TECH_STACK_CATEGORIES
      : TECH_STACK_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-red-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="stack" className="relative py-24 px-4 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono-code text-[11px] text-blue-400 font-bold tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
          03
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 tracking-wide">
          {currentLang === 'en' ? 'Stack & Workstation' : 'البيئة والأدوات التقنية'}
        </h2>
        <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent flex-1 ml-4" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 font-mono-code text-xs">
        <button
          onClick={() => {
            soundFx.playClick();
            setSelectedCategory('all');
          }}
          className={`px-4 py-2 rounded-full border transition-all cursor-pointer font-bold tracking-wider ${
            selectedCategory === 'all'
              ? 'bg-blue-500/20 border-blue-500/60 text-blue-300 shadow-lg shadow-blue-500/10'
              : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10'
          }`}
        >
          {currentLang === 'en' ? 'ALL CATEGORIES' : 'جميع الفئات'}
        </button>

        {TECH_STACK_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              soundFx.playClick();
              setSelectedCategory(cat.id);
            }}
            className={`px-4 py-2 rounded-full border transition-all cursor-pointer font-bold tracking-wider ${
              selectedCategory === cat.id
                ? 'bg-blue-500/20 border-blue-500/60 text-blue-300 shadow-lg shadow-blue-500/10'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10'
            }`}
          >
            {currentLang === 'en' ? cat.title.en : cat.title.ar}
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredCategories.map((cat) => (
          <div
            key={cat.id}
            className="glass-card rounded-2xl p-6 shadow-xl space-y-6"
          >
            {/* Category Title */}
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                {getCategoryIcon(cat.icon)}
              </div>
              <h3 className="font-display text-xl font-medium text-slate-100">
                {currentLang === 'en' ? cat.title.en : cat.title.ar}
              </h3>
            </div>

            {/* Items List */}
            <div className="space-y-4">
              {cat.items.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => soundFx.playHover()}
                  className="space-y-2 p-3 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-mono-code">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-slate-200 font-semibold text-sm">{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-purple-950/60 border border-purple-800/60 text-purple-300 text-[10px]">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 font-sans">
                    {currentLang === 'en' ? item.desc.en : item.desc.ar}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
