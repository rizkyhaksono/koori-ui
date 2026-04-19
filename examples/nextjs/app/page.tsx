import { GlassButton, GlassPanel } from "koori-ui";
import { ComponentsShowcase } from "./components/showcase";
import { ComponentsShowcaseV2 } from "./components/showcase-v2";
import { ThemeControls } from "./components/theme-controls";

export default function Home() {
  return (
    <>
      {/* Background effects */}
      <div className="glow-grid" />
      <div className="noise-overlay" />
      <div className="ambient-orb ambient-orb--one" />
      <div className="ambient-orb ambient-orb--two" />

      <main className="site-wrap relative min-h-screen py-16 md:py-20">
        <header className="hero-wrap mb-12 md:mb-16">
          <span className="hero-badge">Open Source React Component Library</span>
          <h1 className="hero-title">Koori UI</h1>
          <p className="hero-subtitle">
            Frosted glass components for React 19 with Radix under the hood.
            Accessible, composable, and production ready.
          </p>

          <div className="hero-actions">
            <GlassButton variant="primary" size="lg">npm i koori-ui</GlassButton>
            <GlassButton size="lg">Preview Components</GlassButton>
          </div>

          <div className="code-block mx-auto max-w-md text-left">
            <span className="kw">import</span> {"{ "}
            <span className="comp">GlassCard</span>
            {", "}
            <span className="comp">GlassButton</span>
            {" }"} <span className="kw">from</span>{" "}
            <span className="str">&quot;koori-ui&quot;</span>
          </div>
        </header>

        <section>
          {/* Theme Controls */}
          <ThemeControls />

          <GlassPanel variant="elevated" className="showcase-shell p-5 sm:p-8 lg:p-10">
            <ComponentsShowcase />
          </GlassPanel>

          <GlassPanel variant="elevated" className="showcase-shell mt-10 p-5 sm:p-8 lg:p-10">
            <h2 className="section-label mb-4">v2.0 — 21 New Components</h2>
            <ComponentsShowcaseV2 />
          </GlassPanel>
        </section>

        <footer className="demo-footer mx-auto mt-16 max-w-5xl">
          Built with ♥ using{" "}
          <a
            href="https://github.com/rizkyhaksono/koori-ui"
            target="_blank"
            rel="noreferrer"
          >
            koori-ui
          </a>
        </footer>
      </main>
    </>
  );
}
