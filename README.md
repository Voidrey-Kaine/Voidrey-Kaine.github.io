![voidrey portfolio banner](https://capsule-render.vercel.app/api?type=waving&color=0:111214,100:0F2238&height=210&section=header&text=voidrey.dev&fontSize=42&fontColor=EDEDEC&animation=fadeIn&fontAlignY=36&desc=AI%20Engineer%20%C2%B7%20Systems%20Architect%20%C2%B7%20Toolsmith&descAlignY=55&descSize=17&descColor=8B939B)

<p align="center">
<img src="https://readme-typing-svg.herokuapp.com/?font=Fira+Code&weight=600&size=20&duration=3000&pause=800&color=EDEDEC&background=00000000&center=true&vCenter=true&width=650&lines=Precision+over+speed.;Simplicity+over+cleverness.;Architecture+over+hacks." alt="Typing SVG" />
</p>

<p align="center">
<a href="https://react.dev/"><img src="https://img.shields.io/badge/React_19-111214?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"></a>
<a href="https://tanstack.com/start"><img src="https://img.shields.io/badge/TanStack_Start-EF4444?style=for-the-badge&logo=react&logoColor=white" alt="TanStack Start"></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"></a>
<a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"></a>
</p>

---

## 📖 About

This is **Voidrey's** personal portfolio — a single-page, motion-driven identity site for an AI engineer and systems architect. No blog, no CMS, no filler: a hero portrait with pointer-tracked parallax, an engineering-domains grid, an operating-principles ledger, a hover-driven project archive, and one deployed project spotlight ([`release-dl-toolkit`](https://github.com/Voidrey-Kaine/release-dl-toolkit)).

Built with **TanStack Start** (file-based routing + SSR on Vite) and **React 19**, styled with **Tailwind CSS v4** using OKLCH design tokens — black, deep crimson, and burgundy, high-contrast, no color outside the palette. Originally scaffolded and iterated on through [Lovable](https://lovable.dev).

---

## ✨ Features

- 🎯 **Pointer-tracked hero** — the portrait parallaxes against cursor position via CSS custom properties, no external animation library
- 🖱️ **Scroll-reveal sections** — `IntersectionObserver`-driven fade/slide-in on every section (`data-reveal`), staggered per item via `--delay`
- 🗂️ **Interactive system archive** — hover/focus any archive row to swap the adjacent portrait crop and active-state styling, driven by a single `useState`
- 🎞️ **Terminal-style project spotlight** — a fake live terminal panel (scanline grid, blinking status dot, progress bar) framing the featured CLI project
- 🌓 **OKLCH dark theme** — background/foreground/primary/muted all defined as CSS variables in `styles.css`, easy to retheme without touching components
- 🧩 **Full shadcn/ui component set** vendored under `src/components/ui/` (accordion, dialog, dropdown, sidebar, tabs, form, etc.) — available for future pages even though the landing page itself is hand-built, not composed from them
- 🔍 **SEO-ready head tags** — title, description, and Open Graph / Twitter card meta set per-route via TanStack Router's `head()`

---

## 🖼️ Preview

```
┌──────────────────────────────────────────────────────────┐
│  VOIDREY                          Identity Archive · 003  │
├──────────────────────────────────────────────────────────┤
│                                                            │
│   [ hero portrait, pointer-parallax, scanline overlay ]   │
│                                            VOIDREY         │
│                                Building AI agents,         │
│                                dev tools, and automation   │
│                                systems in silence.         │
│                                                            │
│  AI SYSTEMS · MCP SERVERS · AUTOMATION · LINUX · ...       │
│                                                            │
│  (A) Engineering Domains     (B) Operating Principles      │
│  (C) System Archive          (D) Deployed Project          │
│                                                            │
│  $ anime-dl 'jujutsu kaisen' -s 3                          │
│  [→] Searching nyaa.si...                                  │
│  [+] Full season batch selected · 1080p / x265 · 4.2 GiB   │
│  ████████████████████░░░░  78.4%                           │
└──────────────────────────────────────────────────────────┘
```

---

## 📦 Requirements

- [Bun](https://bun.sh/) (lockfile is `bun.lock`) — or Node.js 18+ with npm/pnpm if you prefer
- No backend, database, or API keys — fully static content, SSR handled by TanStack Start at build/serve time

```bash
# Arch / Omarchy
sudo pacman -S bun

# or Node.js via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts
```

---

## 🚀 Installation & Development

```bash
# 1. Clone the repo
git clone <this-repository-url>
cd vivid-web-creations

# 2. Install dependencies
bun install        # or: npm i

# 3. Run the dev server
bun run dev         # or: npm run dev
```

The dev server prints a local URL (Vite default `http://localhost:3000`) — open it and edit `src/routes/index.tsx`; HMR picks up changes instantly.

### Scripts

| Command | Purpose |
|---|---|
| `bun run dev` | Start the Vite dev server with HMR |
| `bun run build` | Production build (SSR + client bundle via Nitro/Vite) |
| `bun run build:dev` | Development-mode build (unminified, for debugging build output) |
| `bun run preview` | Serve the production build locally |
| `bun run lint` | Run ESLint across the project |
| `bun run format` | Format the codebase with Prettier |

---

## 🗂️ Project Structure

```
vivid-web-creations/
├── public/
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── assets/                    # Portrait + sigil image assets (Lovable-managed .asset.json refs)
│   ├── components/
│   │   └── ui/                    # Vendored shadcn/ui primitives (Radix-based)
│   ├── hooks/
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   ├── utils.ts                # cn() class merge helper
│   │   ├── error-capture.ts        # Runtime error capture → Lovable dev overlay
│   │   ├── error-page.ts           # Fallback error page renderer
│   │   └── lovable-error-reporting.ts
│   ├── routes/
│   │   ├── __root.tsx              # Root layout, global providers
│   │   └── index.tsx                # The entire landing page (hero → domains → principles → archive → project → contact)
│   ├── router.tsx                  # TanStack Router instance
│   ├── server.ts                   # SSR entry
│   ├── start.ts                    # TanStack Start entry
│   ├── styles.css                  # Tailwind v4 + OKLCH design tokens, custom animations
│   └── routeTree.gen.ts            # Auto-generated route tree — do not edit by hand
├── components.json                  # shadcn/ui config
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

| Token | Value (OKLCH) | Role |
|---|---|---|
| `--background` | `oklch(0.115 0.002 25)` | Near-black base |
| `--foreground` | `oklch(0.805 0.018 73)` | Warm off-white text |
| `--primary` | `oklch(0.43 0.15 22)` | Deep crimson accent |
| `--muted-foreground` | `oklch(0.61 0.02 73)` | Secondary text / labels |

Typography: **Space Grotesk** (`--font-display`) for headings and UI labels, **DM Sans** (`--font-body`) for running text — set once in `styles.css` and consumed everywhere via Tailwind's `font-display` / default font utilities.

---

## 🧭 Roadmap

- [ ] Extract the landing page's repeated section pattern (`SectionLabel`, reveal wrapper) into shared layout components
- [ ] Add a `/projects` route once more public tools ship, instead of a single hardcoded spotlight
- [ ] Wire the vendored shadcn/ui set into an actual second page (currently unused by the landing page itself)
- [ ] Lighthouse pass — verify the pointer-parallax and scan-grid effects stay cheap on low-end devices

---

## 📜 License

Personal portfolio — content and branding (name, sigil, avatars, copy) are not open for reuse. Code structure may be referenced for learning purposes.

---

### 👤 Author

**Voidrey** — AI Engineer · Systems Architect · Toolsmith

<p align="left">
<a href="https://github.com/Voidrey-Kaine"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
<a href="https://x.com/Voidrey_Kaine"><img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X"></a>
<a href="https://www.youtube.com/@Voidrey-Kaine"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"></a>
<a href="https://www.instagram.com/voidrey_kaine/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"></a>
</p>

![voidrey portfolio footer](https://capsule-render.vercel.app/api?type=waving&color=0:0F2238,100:111214&height=100&section=footer)
