"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

/* ---------- Types ---------- */

export type KooriTheme = "light" | "dark" | "system";
export type KooriColorScheme = "default" | "slate" | "zinc" | "neutral" | "violet";

export interface KooriThemeContextValue {
    /** Current theme setting (may be "system") */
    theme: KooriTheme;
    /** Resolved to "light" | "dark" after system preference lookup */
    resolvedTheme: "light" | "dark";
    /** Active color preset */
    colorScheme: KooriColorScheme;
    setTheme: (theme: KooriTheme) => void;
    setColorScheme: (scheme: KooriColorScheme) => void;
}

const STORAGE_THEME = "koori-theme";
const STORAGE_SCHEME = "koori-color-scheme";

/* ---------- Context ---------- */

const KooriThemeContext = createContext<KooriThemeContextValue>({
    theme: "system",
    resolvedTheme: "dark",
    colorScheme: "default",
    setTheme: () => {},
    setColorScheme: () => {},
});

/* ---------- Hook ---------- */

export function useKooriTheme(): KooriThemeContextValue {
    return useContext(KooriThemeContext);
}

/* ---------- Inline script (prevents FOUC) ---------- */

const FOUC_SCRIPT = `(function(){try{var t=localStorage.getItem('koori-theme')||'system';var s=localStorage.getItem('koori-color-scheme')||'default';var resolved=t==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t;if(resolved==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')};if(s&&s!=='default'){document.documentElement.setAttribute('data-theme',s)}else{document.documentElement.removeAttribute('data-theme')}}catch(e){}})();`;

/* ---------- Provider ---------- */

export interface KooriProviderProps {
    children: ReactNode;
    /** Initial theme. Reads from localStorage first, then falls back to this. Default: "system" */
    defaultTheme?: KooriTheme;
    /** Initial color scheme. Reads from localStorage first. Default: "default" */
    defaultColorScheme?: KooriColorScheme;
}

function getSystemTheme(): "light" | "dark" {
    if (typeof window === "undefined") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveTheme(theme: KooriTheme): "light" | "dark" {
    return theme === "system" ? getSystemTheme() : theme;
}

export function KooriProvider({
    children,
    defaultTheme = "system",
    defaultColorScheme = "default",
}: KooriProviderProps) {
    const [theme, setThemeState] = useState<KooriTheme>(defaultTheme);
    const [colorScheme, setColorSchemeState] = useState<KooriColorScheme>(defaultColorScheme);
    const [mounted, setMounted] = useState(false);

    /* Read persisted values once on mount */
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_THEME) as KooriTheme | null;
        const storedScheme = localStorage.getItem(STORAGE_SCHEME) as KooriColorScheme | null;
        if (stored) setThemeState(stored);
        if (storedScheme) setColorSchemeState(storedScheme);
        setMounted(true);
    }, []);

    /* Apply theme class to <html> */
    useEffect(() => {
        if (!mounted) return;
        const html = document.documentElement;
        const resolved = resolveTheme(theme);
        if (resolved === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
        localStorage.setItem(STORAGE_THEME, theme);
    }, [theme, mounted]);

    /* Apply color scheme data attribute to <html> */
    useEffect(() => {
        if (!mounted) return;
        const html = document.documentElement;
        if (colorScheme === "default") {
            html.removeAttribute("data-theme");
        } else {
            html.setAttribute("data-theme", colorScheme);
        }
        localStorage.setItem(STORAGE_SCHEME, colorScheme);
    }, [colorScheme, mounted]);

    /* Listen for system theme changes when theme === "system" */
    useEffect(() => {
        if (!mounted || theme !== "system") return;
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e: MediaQueryListEvent) => {
            const html = document.documentElement;
            if (e.matches) {
                html.classList.add("dark");
            } else {
                html.classList.remove("dark");
            }
        };
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [theme, mounted]);

    const setTheme = useCallback((t: KooriTheme) => setThemeState(t), []);
    const setColorScheme = useCallback((s: KooriColorScheme) => setColorSchemeState(s), []);

    return (
        <KooriThemeContext.Provider
            value={{
                theme,
                resolvedTheme: resolveTheme(theme),
                colorScheme,
                setTheme,
                setColorScheme,
            }}
        >
            {/* Anti-FOUC inline script — runs before React hydrates */}
            <script dangerouslySetInnerHTML={{ __html: FOUC_SCRIPT }} />
            {children}
        </KooriThemeContext.Provider>
    );
}
