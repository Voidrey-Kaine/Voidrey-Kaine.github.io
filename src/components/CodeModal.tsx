import React, { useState } from 'react';
import { X, Copy, Check, Code, Terminal } from 'lucide-react';
import { FocusArea, Language } from '../types';
import { soundFx } from '../utils/soundEffects';

interface CodeModalProps {
  focusArea: FocusArea | null;
  onClose: () => void;
  currentLang: Language;
}

export const CodeModal: React.FC<CodeModalProps> = ({
  focusArea,
  onClose,
  currentLang,
}) => {
  const [copied, setCopied] = useState(false);

  if (!focusArea) return null;

  const handleCopy = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(focusArea.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0c0e14] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-950/60 border border-red-800/80 text-red-400">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-100">
                {currentLang === 'en' ? focusArea.title.en : focusArea.title.ar}
              </h3>
              <p className="font-mono-code text-xs text-slate-400">
                {currentLang === 'en' ? focusArea.subtitle.en : focusArea.subtitle.ar}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {currentLang === 'en' ? focusArea.description.en : focusArea.description.ar}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {focusArea.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono-code text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Code Snippet Box */}
          <div className="relative rounded-xl bg-[#050609] border border-slate-800 p-4 font-mono-code text-xs text-slate-300 overflow-x-auto">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-900 text-slate-500">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>Architecture Snippet</span>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-slate-200 leading-relaxed font-mono-code">
              <code>{focusArea.codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white font-mono-code text-xs transition-colors cursor-pointer"
          >
            {currentLang === 'en' ? 'Close Window' : 'إغلاق النافذة'}
          </button>
        </div>
      </div>
    </div>
  );
};
