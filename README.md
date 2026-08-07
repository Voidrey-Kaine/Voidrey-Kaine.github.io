# Voidrey — Portfolio

Interactive gothic-cyberpunk portfolio for Voidrey — AI Engineer, Systems
Architect, Toolsmith. Built with React 19 + TypeScript + Vite + Tailwind CSS v4.

Features an interactive terminal easter egg (press `Ctrl+K` or click the
sigil), scroll-triggered reveals, an animated starfield background, and
Web Audio–synthesized sound effects (muted by default).

## Run locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Structure

```
src/
  components/     UI sections (Hero, About, Focus, Stack, Artifacts,
                   Philosophy, Connect, Navbar, Footer) + the
                   Terminal/Code modals
  data/           portfolioData.ts — all site copy and content
  utils/          soundEffects.ts — Web Audio SFX engine
  types.ts        shared TypeScript types
  index.css       Tailwind v4 theme — brand colors are defined once
                   in the @theme block and apply everywhere
```

## Editing content

Almost everything text-based lives in `src/data/portfolioData.ts` — focus
areas, tech stack, artifacts, philosophy quotes, and social links. Edit
there rather than in the components.

## Editing colors

Tailwind's default `blue`/`purple`/`red` scales are remapped to the actual
Voidrey brand (crimson / amber / navy) in `src/index.css` under `@theme`.
Change a value there and every component using e.g. `text-blue-400` or
`bg-purple-950` updates automatically — no need to touch component files.

## Deploy

This repo includes `.github/workflows/deploy.yml`, which builds and deploys
to GitHub Pages automatically on every push to `main`.

**One-time setup**, since this is meant to live at
`Voidrey-Kaine.github.io` (a user Pages site, served at the root domain):

1. Push this repo's contents to `Voidrey-Kaine/Voidrey-Kaine.github.io`,
   branch `main`.
2. Repo → **Settings → Pages** → Source: **GitHub Actions** (not
   "Deploy from a branch" — that would try to serve the raw source files
   instead of the built site).
3. Push to `main` (or re-run the workflow from the **Actions** tab) —
   it builds with `npm ci && npm run build` and publishes `dist/`.
4. Live at `https://voidrey-kaine.github.io/` in a minute or two.

No `base` path config needed in `vite.config.ts` — user/org Pages sites
serve from the domain root, which is Vite's default.

Any other static host (Vercel, Netlify, Cloudflare Pages) also works —
just point it at `npm run build` → `dist/`.
