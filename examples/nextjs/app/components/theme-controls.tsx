"use client";

import { GlassButton, GlassPanel, useKooriTheme } from "koori-ui";

const THEMES = [
    { value: "default" as const, label: "Default", dot: "bg-blue-400" },
    { value: "slate" as const, label: "Slate", dot: "bg-indigo-400" },
    { value: "zinc" as const, label: "Zinc", dot: "bg-zinc-400" },
    { value: "neutral" as const, label: "Neutral", dot: "bg-orange-400" },
    { value: "violet" as const, label: "Violet", dot: "bg-violet-400" },
] as const;

export function ThemeControls() {
    const { theme, setTheme, colorScheme, setColorScheme } = useKooriTheme();

    return (
        <GlassPanel variant="subtle" className="mb-6 flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Mode Toggle */}
            <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--koori-muted)]">Mode</span>
                <GlassButton
                    size="sm"
                    variant={theme === "dark" ? "primary" : "default"}
                    onClick={() => setTheme("dark")}
                >
                    🌙 Dark
                </GlassButton>
                <GlassButton
                    size="sm"
                    variant={theme === "light" ? "primary" : "default"}
                    onClick={() => setTheme("light")}
                >
                    ☀️ Light
                </GlassButton>
                <GlassButton
                    size="sm"
                    variant={theme === "system" ? "primary" : "default"}
                    onClick={() => setTheme("system")}
                >
                    💻 System
                </GlassButton>
            </div>

            {/* Theme Swatches */}
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--koori-muted)]">Theme</span>
                {THEMES.map((t) => (
                    <button
                        key={t.value}
                        onClick={() => setColorScheme(t.value)}
                        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                            colorScheme === t.value
                                ? "bg-[var(--koori-primary)] text-white shadow-lg"
                                : "text-[var(--koori-muted)] hover:text-[var(--koori-text)]"
                        }`}
                        style={{
                            border: colorScheme === t.value
                                ? "1px solid var(--koori-primary)"
                                : "1px solid var(--koori-border)",
                        }}
                    >
                        <span className={`inline-block h-2 w-2 rounded-full ${t.dot}`} />
                        {t.label}
                    </button>
                ))}
            </div>
        </GlassPanel>
    );
}
