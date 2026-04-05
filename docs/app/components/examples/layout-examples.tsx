"use client";

import {
  GlassPanel,
  GlassCard, GlassCardHeader, GlassCardBody, GlassCardFooter,
  GlassButton, GlassSeparator,
} from "koori-ui";

export function PanelDemo() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-3">
      <GlassPanel variant="subtle" className="flex items-center justify-center p-6 text-center">
        <div><p className="text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]">Subtle</p></div>
      </GlassPanel>
      <GlassPanel variant="default" className="flex items-center justify-center p-6 text-center">
        <div><p className="text-xs font-semibold uppercase tracking-wider">Default</p></div>
      </GlassPanel>
      <GlassPanel variant="elevated" className="flex items-center justify-center p-6 text-center">
        <div><p className="text-xs font-semibold uppercase tracking-wider">Elevated</p></div>
      </GlassPanel>
    </div>
  );
}

export function CardDemo() {
  return (
    <GlassCard className="w-full max-w-sm">
      <GlassCardHeader><h3 className="text-base font-semibold">Getting Started</h3></GlassCardHeader>
      <GlassCardBody>
        <p className="text-sm text-[var(--koori-muted)]">Install koori-ui and start building glass interfaces in minutes.</p>
      </GlassCardBody>
      <GlassCardFooter><GlassButton size="sm" variant="primary">Read Docs →</GlassButton></GlassCardFooter>
    </GlassCard>
  );
}

export function SeparatorDemo() {
  return (
    <div className="w-full space-y-4">
      <GlassSeparator />
      <div className="flex h-8 items-center gap-4 text-sm text-[var(--koori-muted)]">
        <span>Components</span>
        <GlassSeparator orientation="vertical" className="h-full" />
        <span>Docs</span>
        <GlassSeparator orientation="vertical" className="h-full" />
        <span>Examples</span>
      </div>
      <GlassSeparator />
    </div>
  );
}
