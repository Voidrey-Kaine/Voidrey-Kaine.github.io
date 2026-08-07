import { FocusArea, TechStackCategory, Artifact, PhilosophyMantra, SocialLink } from '../types';

export const HERO_IMAGES = {
  heroBg: '/src/assets/images/voidrey_hero_bg_1786058759398.jpg',
  portrait: '/src/assets/images/voidrey_portrait_1786058773655.jpg',
  sigil: '/src/assets/images/voidrey_sigil_1786058784380.jpg',
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'ai-engineering',
    iconName: 'Cpu',
    title: {
      en: 'AI Engineering & Agents',
      ar: 'هندسة الذكاء الاصطناعي والعملاء',
    },
    subtitle: {
      en: 'Autonomous Agent Runtimes & LLM Pipelines',
      ar: 'أنظمة الذكاء الاصطناعي وربط النماذج اللغوية',
    },
    description: {
      en: 'Building custom multi-agent orchestration systems, context window managers, tool calling protocols, and production GenAI backends.',
      ar: 'بناء أنظمة وكلاء متكاملة، إدارة السياق، بروتوكولات تنفيذ المهام، وبنيات تحتية فائقة الأداء للنماذج اللغوية.',
    },
    tags: ['Gemini API', 'Multi-Agent', 'Context Caching', 'Function Calling', 'RAG Engine'],
    codeSnippet: `// Voidrey Agent Runtime Core (TypeScript)
import { GoogleGenAI } from "@google/genai";

export class VoidreyAgent {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }

  async executeTask(prompt: string, tools: any[]) {
    const response = await this.ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an autonomous systems agent for Voidrey. Execute tools with zero latency.",
        tools: tools,
      }
    });
    return response.functionCalls || response.text;
  }
}`
  },
  {
    id: 'mcp-servers',
    iconName: 'Server',
    title: {
      en: 'MCP Servers & Tooling',
      ar: 'خوادم وأدوات MCP',
    },
    subtitle: {
      en: 'Model Context Protocol Integrations',
      ar: 'تكامل بروتوكول سياق النماذج',
    },
    description: {
      en: 'Creating high-speed Model Context Protocol (MCP) servers connecting LLMs with terminal execution, local file systems, and custom APIs.',
      ar: 'تطوير خوادم MCP سريعة لربط النماذج بالطرفية، ملفات النظام المحلية، والواجهات البرمجية الخاصة.',
    },
    tags: ['MCP SDK', 'Stdio Transport', 'Tool Definitions', 'JSON-RPC', 'Rust/Python'],
    codeSnippet: `# Voidrey Custom MCP Server (Python Async)
import asyncio
from mcp.server import Server
from mcp.types import Tool, TextContent

mcp = Server("voidrey-mcp-core")

@mcp.list_tools()
async def list_tools():
    return [
        Tool(
            name="execute_system_command",
            description="Run sandboxed command on Arch Linux terminal",
            inputSchema={"type": "object", "properties": {"cmd": {"type": "string"}}}
        )
    ]

if __name__ == "__main__":
    asyncio.run(mcp.run_stdio())`
  },
  {
    id: 'automation-frameworks',
    iconName: 'Workflow',
    title: {
      en: 'Automation Frameworks',
      ar: 'أطر الأتمتة الشاملة',
    },
    subtitle: {
      en: 'Build Once. Automate Forever.',
      ar: 'ابنِ مرة واحدة. وأتمت إلى الأبد.',
    },
    description: {
      en: 'Designing zero-maintenance automated pipelines, scheduled task runners, cron orchestrators, and headless scraping engines.',
      ar: 'تصميم أنابيب أتمتة عديمة الصيانة، خطط تنفيذ المهام الدورية، ومحركات المعالجة التلقائية خلف الكواليس.',
    },
    tags: ['Cron Engines', 'Headless Browser', 'Webhook Router', 'Daemon Process'],
    codeSnippet: `// Voidrey Daemon Orchestrator
import { schedule } from 'node-cron';

export function initSystemAutomation() {
  console.log('[VOIDREY] Automation daemon spawned...');
  
  // Continuous sync & metric monitoring
  schedule('*/15 * * * *', async () => {
    console.log('[CRON] Synchronizing state & purging logs...');
    await performHealthCheck();
  });
}`
  },
  {
    id: 'cli-developer-tools',
    iconName: 'Terminal',
    title: {
      en: 'CLI & Terminal Tools',
      ar: 'أدوات الطرفية والأمر المباشر',
    },
    subtitle: {
      en: 'Keyboard-Driven Terminal Interfaces',
      ar: 'أدوات طرفية سريعة لوحة المفاتيح',
    },
    description: {
      en: 'Ultra-fast command line utilities built in Rust and Go for Linux environments. Focused on Neovim integration and Wayland window managers.',
      ar: 'أدوات طرفية سريعة جداً مكتوبة برست وجو لبيئات لينكس. مخصصة للعمل مع محرر Neovim ومدير نوافذ Wayland.',
    },
    tags: ['Rust CLI', 'Neovim Plugins', 'Wayland Utilities', 'Kitty Terminal', 'Zsh Shell'],
    codeSnippet: `// Rust CLI Utility for Voidrey Workstation
use clap::Parser;

#[derive(Parser)]
#[command(name = "voidrey")]
#[command(about = "System control & AI agent runner")]
struct Cli {
    #[arg(short, long)]
    target: Option<String>,
}

fn main() {
    let args = Cli::parse();
    println!("Voidrey system initialized for: {:?}", args.target.unwrap_or_default());
}`
  },
  {
    id: 'backend-infrastructure',
    iconName: 'Layers',
    title: {
      en: 'Backend & Infrastructure',
      ar: 'البنية التحتية والأنظمة الخلفية',
    },
    subtitle: {
      en: 'Cloud Run, Docker & Arch Linux Kernels',
      ar: 'خوادم كلاود ورن ودواكر ونواة لينكس',
    },
    description: {
      en: 'Containerized Express/Node & Python APIs running on Cloud Run with high throughput, strict security headers, and rate-limited endpoints.',
      ar: 'تطبيقات وسيطة مشفرة داخل حاويات Docker تعمل على Cloud Run بسرعة فائقة وأمان مرتفع.',
    },
    tags: ['Express TS', 'Cloud Run', 'Docker Multi-stage', 'REST/gRPC', 'Security Rules'],
    codeSnippet: `// Express Production Server Configuration
import express from 'express';
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Voidrey OS');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});`
  },
  {
    id: 'open-source',
    iconName: 'Wrench',
    title: {
      en: 'Open Source & Dotfiles',
      ar: 'المشاريع مفتوحة المصدر والتهيئة',
    },
    subtitle: {
      en: 'Public Repos, Arch Dotfiles & Scripts',
      ar: 'المستودعات العامة وملفات التهيئة',
    },
    description: {
      en: 'Public repositories, custom Omarchy/Arch dotfiles, shell scripts, and modular tools built to be freely owned, modified, and used.',
      ar: 'مستودعات مفتوحة المصدر، ملفات تهيئة نظام Arch Linux، وسكربتات شيل مبنية للأداء العالي.',
    },
    tags: ['GitHub Repos', 'Arch Dotfiles', 'Bash Scripts', 'MIT License'],
    codeSnippet: `# Voidrey Installation One-Liner
# Clone & Bootstrap Arch Environment
git clone https://github.com/Voidrey-Kaine/dotfiles.git ~/.config/voidrey
cd ~/.config/voidrey && ./bootstrap.sh --minimal`
  }
];

export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    id: 'languages',
    title: { en: 'Languages', ar: 'لغات البرمجة' },
    icon: 'Code2',
    items: [
      { name: 'Python', badge: 'Core', desc: { en: 'AI Systems, PyTorch, FastAPIs', ar: 'أنظمة الذكاء الاصطناعي وبايثون' } },
      { name: 'TypeScript', badge: 'Core', desc: { en: 'Full-stack React, Node, Express', ar: 'تطبيقات ويب وNode.js' } },
      { name: 'Rust', badge: 'Systems', desc: { en: 'CLI binaries, memory-safe tooling', ar: 'أدوات النظم والطرفيات' } },
      { name: 'Bash / Zsh', badge: 'Shell', desc: { en: 'System scripting, automation daemons', ar: 'سكربتات لينكس والأتمتة' } },
    ]
  },
  {
    id: 'environment',
    title: { en: 'Environment & Workstation', ar: 'بيئة العمل والنظام' },
    icon: 'Terminal',
    items: [
      { name: 'Arch Linux', badge: 'OS', desc: { en: 'Custom minimalist kernel & Hyprland', ar: 'نظام أرتش لينكس المخصص' } },
      { name: 'Neovim', badge: 'Editor', desc: { en: 'Lua configs, zero-delay keybindings', ar: 'محرر النصوص السريع' } },
      { name: 'Kitty Terminal', badge: 'GPU Term', desc: { en: 'GPU-accelerated terminal emulator', ar: 'الطرفية السريعة المعالجة' } },
      { name: 'Wayland / Hyprland', badge: 'Compositor', desc: { en: 'Tile management, fluid shaders', ar: 'مدير النوافذ والرسوم' } },
    ]
  },
  {
    id: 'ai-agents',
    title: { en: 'AI & Model Architecture', ar: 'بنية الذكاء الاصطناعي' },
    icon: 'Sparkles',
    items: [
      { name: 'Gemini SDK', badge: 'Primary', desc: { en: 'Google GenAI SDK, Multimodal, Flash 2.5', ar: 'حزمة Gemini المتقدمة' } },
      { name: 'Model Context Protocol', badge: 'Protocol', desc: { en: 'MCP servers, custom client transports', ar: 'بروتوكول MCP للربط' } },
      { name: 'Vector Databases', badge: 'RAG', desc: { en: 'ChromaDB, Pinecone, Semantic Search', ar: 'قواعد البيانات الشعاعية' } },
      { name: 'Function Calling', badge: 'Agents', desc: { en: 'Structured output & schema execution', ar: 'تنفيذ المهام المهيكلة' } },
    ]
  },
  {
    id: 'tooling-cloud',
    title: { en: 'Cloud & Infrastructure', ar: 'السحابية والخدمات' },
    icon: 'Cloud',
    items: [
      { name: 'Google Cloud Run', badge: 'Deploy', desc: { en: 'Serverless container execution', ar: 'استضافة الحاويات السريعة' } },
      { name: 'Docker', badge: 'Containers', desc: { en: 'Multi-stage lightweight images', ar: 'حاويات دوكر المعزولة' } },
      { name: 'Git & GitHub Actions', badge: 'CI/CD', desc: { en: 'Automated test & deploy pipelines', ar: 'أنابيب النشر التلقائي' } },
      { name: 'Vite & Tailwind CSS', badge: 'Frontend', desc: { en: 'Rapid build tools & atomic styling', ar: 'أدوات بناء الواجهات' } },
    ]
  }
];

export const ARTIFACTS: Artifact[] = [
  {
    id: 'portrait-study',
    title: { en: 'Character Portrait', ar: 'دراسة الشخصية' },
    category: { en: 'Visual Identity', ar: 'الهوية البصرية' },
    imageSrc: HERO_IMAGES.portrait,
    aspectRatio: '1:1',
    description: {
      en: 'Voidrey core visual identity study — high collar, gothic obsidian aesthetics, and glowing violet eyes.',
      ar: 'دراسة الهوية البصرية الرئيسية لشخصية Voidrey — الياقة العالية، الجمالية القوطية السوداء، والعيون البنفسجية المضيئة.',
    },
    tags: ['Gothic', 'Cyberpunk', 'Visual Identity']
  },
  {
    id: 'sigil-emblem',
    title: { en: 'Eclipse Sigil', ar: 'شعار الكسوف' },
    category: { en: 'Emblem Design', ar: 'تصميم الشعار' },
    imageSrc: HERO_IMAGES.sigil,
    aspectRatio: '1:1',
    description: {
      en: 'The Voidrey celestial compass emblem with sharp obsidian blades and central purple core.',
      ar: 'شعار البوصلة السماوية الخاصة بـ Voidrey بأصلاب البركانية والنواة الأرجوانية المضيئة.',
    },
    tags: ['Sigil', 'Vector Symbol', 'Eclipse']
  },
  {
    id: 'void-horizon',
    title: { en: 'Void Horizon Canvas', ar: 'لوحة أفق الفراغ' },
    category: { en: 'Background Art', ar: 'خلفية المشهد' },
    imageSrc: HERO_IMAGES.heroBg,
    aspectRatio: '16:9',
    description: {
      en: 'Deep space cosmic nebula with crimson stardust and obsidian silhouette geometric structures.',
      ar: 'سديم فضائي عميق بجسيمات حمراء وبنية هندسية سوداء داكنة.',
    },
    tags: ['Space Nebula', 'Dark Canvas', 'Procedural']
  }
];

export const PHILOSOPHY_MANTRAS: PhilosophyMantra[] = [
  {
    quote: {
      en: 'Build once. Automate forever.',
      ar: 'ابنِ مرة واحدة. وأتمت إلى الأبد.',
    },
    author: 'Voidrey',
    subtext: {
      en: 'Every repetitive task solved manually is a failure of system architecture.',
      ar: 'كل مهمة مكررة تُنفذ يدوياً هي قصور في معمارية النظام.',
    }
  },
  {
    quote: {
      en: 'Precision over speed. Architecture over hacks.',
      ar: 'الدقة قبل السرعة. والمعمارية قبل الحلول المؤقتة.',
    },
    author: 'Voidrey',
    subtext: {
      en: 'Clean abstractions last years. Quick hacks cost days every week.',
      ar: 'التجريد النظيف يدوم لسنوات، بينما الترقيع السريع يكلف أياماً كل أسبوع.',
    }
  },
  {
    quote: {
      en: 'Silence over noise. Code built to last.',
      ar: 'الهدوء فوق الضجيج. كود بُني ليستمر.',
    },
    author: 'Voidrey',
    subtext: {
      en: 'Software should execute silently, reliably, and without constant intervention.',
      ar: 'يجب أن يعمل البرمجيات بهدوء، وموثوقية، ودون الحاجة للتدخل المستمر.',
    }
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    platform: 'GitHub',
    handle: 'Voidrey-Kaine',
    url: 'https://github.com/Voidrey-Kaine',
    iconName: 'Github',
    color: '#f8fafc',
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: '@Voidrey-Kaine',
    url: 'https://www.youtube.com/@Voidrey-Kaine',
    iconName: 'Youtube',
    color: '#ef4444',
  },
  {
    id: 'x',
    platform: 'X (Twitter)',
    handle: '@Voidrey_Kaine',
    url: 'https://x.com/Voidrey_Kaine',
    iconName: 'Twitter',
    color: '#38bdf8',
  },
  {
    id: 'reddit',
    platform: 'Reddit',
    handle: 'u/Voidrey-Kaine',
    url: 'https://www.reddit.com/user/Voidrey-Kaine/',
    iconName: 'MessageSquare',
    color: '#f97316',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@voidrey_kaine',
    url: 'https://www.instagram.com/voidrey_kaine/',
    iconName: 'Instagram',
    color: '#ec4899',
  },
  {
    id: 'pinterest',
    platform: 'Pinterest',
    handle: 'Voidrey_Kaine',
    url: 'https://www.pinterest.com/Voidrey_Kaine/',
    iconName: 'Image',
    color: '#e11d48',
  }
];
