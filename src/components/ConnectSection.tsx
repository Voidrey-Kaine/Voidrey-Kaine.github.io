import React, { useState } from 'react';
import {
  Github,
  Youtube,
  Twitter,
  MessageSquare,
  Instagram,
  Image as ImageIcon,
  ArrowUpRight,
  Mail,
  Copy,
  Check,
  Send,
  Sparkles
} from 'lucide-react';
import { Language, SocialLink } from '../types';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

interface ConnectSectionProps {
  currentLang: Language;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({ currentLang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [msgText, setMsgText] = useState('');

  const email = 'voidrey.kaine@gmail.com';

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgText.trim()) return;
    soundFx.playClick();
    const subject = encodeURIComponent('Message from voidrey.dev');
    const body = encodeURIComponent(msgText);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setMsgSent(true);
    setTimeout(() => {
      setMsgSent(false);
      setMsgText('');
    }, 3000);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-5 h-5" />;
      case 'Youtube':
        return <Youtube className="w-5 h-5" />;
      case 'Twitter':
        return <Twitter className="w-5 h-5" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'Image':
        return <ImageIcon className="w-5 h-5" />;
      default:
        return <Github className="w-5 h-5" />;
    }
  };

  return (
    <section id="connect" className="relative py-24 px-4 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono-code text-[11px] text-blue-400 font-bold tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
          06
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-100 tracking-wide">
          {currentLang === 'en' ? 'Connect & Transmission' : 'التواصل والارتباط المباشر'}
        </h2>
        <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent flex-1 ml-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Social Links List */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono-code text-xs text-slate-400">
              {currentLang === 'en' ? 'PUBLIC NETWORK HANDLES' : 'شبكات التواصل المباشر'}
            </span>
            <button
              onClick={handleCopyEmail}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono-code text-blue-300 hover:bg-blue-500/20 transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{email}</span>
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="divide-y divide-white/5 glass-card rounded-2xl overflow-hidden shadow-2xl">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="group flex items-center justify-between p-4 sm:p-5 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform"
                    style={{ color: link.color }}
                  >
                    {getSocialIcon(link.iconName)}
                  </div>
                  <div>
                    <div className="font-display text-lg font-medium text-slate-100 group-hover:text-red-400 transition-colors">
                      {link.platform}
                    </div>
                    <div className="font-mono-code text-xs text-slate-500">{link.handle}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center gap-2 text-blue-400 font-mono-code text-xs uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>{currentLang === 'en' ? 'DIRECT TRANSMISSION' : 'إرسال رسالة مباشرة'}</span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            {currentLang === 'en'
              ? 'Send a direct message — this opens your email client with the message pre-filled.'
              : 'أرسل رسالة مباشرة — سيفتح هذا برنامج البريد الإلكتروني برسالتك جاهزة للإرسال.'}
          </p>

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div>
              <label className="block font-mono-code text-xs text-slate-400 mb-1">
                {currentLang === 'en' ? 'YOUR TRANSMISSION / MESSAGE' : 'محتوى الرسالة'}
              </label>
              <textarea
                rows={4}
                value={msgText}
                onChange={(e) => setMsgText(e.target.value)}
                placeholder={
                  currentLang === 'en'
                    ? 'Enter message or system query...'
                    : 'اكتب رسالتك أو استفسارك هنا...'
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono-code text-slate-200 focus:outline-none focus:border-red-500/80 transition-colors placeholder:text-slate-600"
              />
            </div>

            <button
              type="submit"
              onMouseEnter={() => soundFx.playHover()}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-purple-700 text-white font-mono-code text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-red-900/40 transition-all cursor-pointer"
            >
              {msgSent ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>TRANSMITTED TO VOID</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>DISPATCH MESSAGE</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
