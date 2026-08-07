import React from 'react';

export type Language = 'en' | 'ar';

export interface FocusArea {
  id: string;
  iconName: string;
  title: {
    en: string;
    ar: string;
  };
  subtitle: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  tags: string[];
  codeSnippet: string;
}

export interface TechStackCategory {
  id: string;
  title: { en: string; ar: string };
  icon: string;
  items: {
    name: string;
    badge?: string;
    desc: { en: string; ar: string };
  }[];
}

export interface Artifact {
  id: string;
  title: { en: string; ar: string };
  category: { en: string; ar: string };
  imageSrc: string;
  aspectRatio: '1:1' | '16:9' | '3:4';
  description: { en: string; ar: string };
  tags: string[];
}

export interface PhilosophyMantra {
  quote: { en: string; ar: string };
  author: string;
  subtext: { en: string; ar: string };
}

export interface SocialLink {
  id: string;
  platform: string;
  handle: string;
  url: string;
  iconName: string;
  color: string;
}

export interface TerminalLog {
  id: string;
  type: 'input' | 'output' | 'error' | 'system' | 'matrix';
  content: string | React.ReactNode;
}
