"use client";

import {
  GlassCard,
  GlassCardHeader,
  GlassCardBody,
  GlassCardFooter,
  GlassButton,
  GlassH1,
  GlassText,
  GlassBadge,
  useKooriTheme,
} from "koori-ui";

export default function Home() {
  const { theme, setTheme } = useKooriTheme();

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      {/* Background effects */}
      <div className="ambient-orb ambient-orb--one" />
      <div className="ambient-orb ambient-orb--two" />

      <GlassCard variant="elevated" className="w-full max-w-md">
        <GlassCardHeader>
          <div className="flex items-center justify-between">
            <GlassBadge variant="primary">Koori UI</GlassBadge>
            <GlassButton
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </GlassButton>
          </div>
          <GlassH1 className="mt-4 text-2xl">Welcome to Koori UI</GlassH1>
        </GlassCardHeader>
        <GlassCardBody>
          <GlassText muted>
            You&apos;re running a glassmorphism React app. Edit{" "}
            <code className="text-[var(--koori-primary)] text-sm">app/page.tsx</code>{" "}
            to get started.
          </GlassText>
        </GlassCardBody>
        <GlassCardFooter className="flex gap-2">
          <GlassButton variant="primary" className="flex-1">
            Get Started
          </GlassButton>
          <GlassButton className="flex-1">
            View Docs
          </GlassButton>
        </GlassCardFooter>
      </GlassCard>
    </main>
  );
}
