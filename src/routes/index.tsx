import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Github, Instagram, Youtube } from "lucide-react";
import { useEffect, useRef, type MouseEvent } from "react";

import avatarOne from "../assets/voidrey-avatar-1.png.asset.json";
import sigil from "../assets/voidrey-symbol-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voidrey — AI Engineer & Systems Architect" },
      {
        name: "description",
        content: "Voidrey builds AI systems, developer tools, and automation architecture. Build once. Automate forever.",
      },
      { property: "og:title", content: "Voidrey — AI Engineer & Systems Architect" },
      {
        property: "og:description",
        content: "Building AI agents, MCP servers, developer tools, and automation systems in silence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VoidreyPortfolio,
});

const domains = [
  ["01", "AI Engineering", "LLM systems, agents, inference pipelines, and production-grade intelligence."],
  ["02", "Systems Architecture", "Resilient infrastructure designed around clarity, observability, and scale."],
  ["03", "Developer Tooling", "Linux-first CLI applications and internal platforms that remove repetition."],
];

function VoidreyPortfolio() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.15 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const trackPointer = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroRef.current?.style.setProperty("--mx", `${x * 18}px`);
    heroRef.current?.style.setProperty("--my", `${y * 14}px`);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="fixed inset-0 z-50 pointer-events-none archive-noise" aria-hidden="true" />

      <header className="relative z-30 mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
        <a href="#top" className="group flex items-center gap-3" aria-label="Voidrey home">
          <img src={sigil.url} alt="" className="size-9 object-contain transition-transform duration-700 group-hover:rotate-45" />
          <span className="font-display text-xs font-semibold tracking-[0.28em]">VOIDREY</span>
        </a>
        <nav className="flex gap-6 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          <a href="#work" className="signal-link hover:text-primary">Work</a>
          <a href="#contact" className="signal-link hover:text-primary">Contact</a>
        </nav>
      </header>

      <section id="top" className="mx-auto grid max-w-[1320px] grid-cols-12 items-end gap-5 px-5 pb-16 pt-3 sm:px-8 lg:px-14 lg:pt-8">
        <div className="col-span-12 lg:col-span-8">
          <div ref={heroRef} onMouseMove={trackPointer} className="hero-frame group relative h-[62svh] min-h-[440px] max-h-[720px] overflow-hidden border border-border bg-card">
            <img src={avatarOne.url} alt="Voidrey, AI engineer and systems architect" className="hero-portrait absolute inset-0 h-full w-full object-cover object-[center_26%]" />
            <div className="absolute inset-0 hero-shade" />
            <div className="absolute inset-0 scan-grid" />
            <div className="scan-beam absolute inset-y-0 w-px bg-primary/70" />
            <div className="absolute left-5 top-5 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-foreground/45">
              <span className="size-1.5 bg-primary animate-pulse" /> Live system
            </div>
            <div className="absolute bottom-5 right-5 text-[9px] uppercase tracking-[0.25em] text-foreground/45">VDRY / PORTRAIT—01</div>
          </div>
        </div>

        <div className="col-span-12 flex h-full flex-col justify-end lg:col-span-4 lg:pl-4">
          <div className="mb-auto hidden justify-end lg:flex"><img src={sigil.url} alt="Voidrey sigil" className="sigil-float size-28 object-contain opacity-50" /></div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-primary">AI Engineer · Systems Architect</p>
          <h1 className="font-display text-[clamp(3.6rem,9vw,7rem)] font-bold leading-[0.8]">VOID<span className="text-primary">REY</span></h1>
          <p className="mt-7 max-w-[40ch] text-sm leading-7 text-muted-foreground">Building AI agents, developer tools, and automation systems in silence. Precision over speed. Architecture over hacks.</p>
          <div className="mt-8 grid grid-cols-2 border-y border-border py-4 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>Build once.</span><span className="text-right text-foreground">Automate forever.</span>
          </div>
          <a href="#work" className="mt-8 inline-flex w-fit items-center gap-3 bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground hover:text-background">
            See the work <ArrowDownRight className="size-4" />
          </a>
        </div>
      </section>

      <div className="ticker border-y border-border py-3" aria-hidden="true"><div>AI SYSTEMS · MCP SERVERS · AUTOMATION · LINUX · ARCHITECTURE · TOOLSMITHING · AI SYSTEMS · MCP SERVERS · AUTOMATION · LINUX · ARCHITECTURE · TOOLSMITHING ·</div></div>

      <section id="domains" className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
        <SectionLabel index="A" title="Engineering Domains" />
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {domains.map(([number, title, body], index) => (
            <article key={title} data-reveal style={{ "--delay": `${index * 110}ms` } as React.CSSProperties} className="reveal group relative min-h-64 overflow-hidden bg-background p-7">
              <span className="font-display text-xs text-primary">{number}</span>
              <div className="absolute right-0 top-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
              <h2 className="mt-20 font-display text-2xl font-medium">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{body}</p>
              <ArrowUpRight className="absolute right-7 top-7 size-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
          <SectionLabel index="B" title="Deployed Project" />
          <article className="mt-12 grid overflow-hidden border border-border bg-background lg:grid-cols-12" data-reveal>
            <div className="reveal-none flex flex-col justify-between border-b border-border p-7 sm:p-10 lg:col-span-7 lg:min-h-[500px] lg:border-b-0 lg:border-r">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                  <span className="bg-primary px-3 py-1.5 text-primary-foreground">Public release</span>
                  <span>Python · Bash · Linux</span>
                </div>
                <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-primary">Featured tooling / 001</p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.95] sm:text-6xl">
                  release-dl-<span className="text-primary">toolkit</span>
                </h2>
                <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground">
                  Six interactive CLI downloaders for anime, series, movies, games, and manga. Search, select quality, download, and track progress through one consistent terminal language.
                </p>
              </div>
              <div className="mt-12 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="grid grid-cols-3 gap-8">
                  <ProjectStat value="06" label="CLI tools" />
                  <ProjectStat value="250+" label="Manga sites" />
                  <ProjectStat value="03" label="Export formats" />
                </div>
                <a href="https://github.com/Voidrey-Kaine/release-dl-toolkit" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between gap-8 bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground hover:text-background">
                  View repository <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="relative flex min-h-[400px] flex-col justify-between gap-7 overflow-hidden bg-card p-7 sm:p-10 lg:col-span-5">
              <div className="scan-grid absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative flex items-center justify-between border-b border-border pb-4 text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                <span>Terminal / active</span>
                <span className="flex items-center gap-2"><i className="size-1.5 bg-primary not-italic animate-pulse" /> Python</span>
              </div>
              <div className="relative font-mono text-xs leading-7 text-muted-foreground sm:text-sm">
                <p><span className="text-primary">$</span> anime-dl 'jujutsu kaisen' -s 3</p>
                <p className="mt-4">[→] Searching nyaa.si...</p>
                <p className="text-foreground">[+] Full season batch selected</p>
                <p>[+] 1080p / x265 · 4.2 GiB</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="h-2 flex-1 overflow-hidden bg-muted"><span className="block h-full w-[78%] bg-primary" /></span>
                  <span className="text-foreground">78.4%</span>
                </div>
              </div>
              <div className="relative flex flex-wrap gap-2 text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                {["anime-dl", "series-dl", "movie-dl", "dodi-dl", "fitgirl-dl", "manga-dl"].map((tool) => (
                  <span key={tool} className="border border-border px-2.5 py-1.5 transition-colors hover:border-primary hover:text-primary">{tool}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-[1320px] gap-10 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:items-end lg:px-14 lg:py-36">
        <div className="lg:col-span-8" data-reveal>
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Signal available</p>
          <h2 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">Build something that lasts.</h2>
        </div>
        <div className="flex flex-col justify-end lg:col-span-4">
          <p className="max-w-sm text-sm leading-7 text-muted-foreground">For AI systems, infrastructure, and tools worth maintaining. No noise. No hype.</p>
          <a href="https://github.com/Voidrey-Kaine" target="_blank" rel="noreferrer" className="mt-8 flex items-center justify-between border-y border-border py-5 font-display text-sm hover:text-primary">Initiate contact <ArrowUpRight className="size-4" /></a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1320px] flex-col gap-6 border-t border-border px-5 py-8 text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between lg:px-14">
        <span>© 2026 Voidrey · Engineered, not templated.</span>
        <div className="flex items-center gap-5">
          <Social href="https://github.com/Voidrey-Kaine" label="GitHub"><Github className="size-4" /></Social>
          <Social href="https://www.youtube.com/@Voidrey-Kaine" label="YouTube"><Youtube className="size-4" /></Social>
          <Social href="https://www.instagram.com/voidrey_kaine/" label="Instagram"><Instagram className="size-4" /></Social>
        </div>
      </footer>
    </main>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground"><span className="text-primary">({index})</span><span>{title}</span><span className="h-px flex-1 bg-border" /></div>;
}

function ProjectStat({ value, label }: { value: string; label: string }) {
  return <div><strong className="block font-display text-xl font-medium text-foreground sm:text-2xl">{value}</strong><span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-muted-foreground">{label}</span></div>;
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="transition-colors hover:text-primary">{children}</a>;
}
