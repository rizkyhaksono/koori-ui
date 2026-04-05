<p align="center">
  <strong>✦ Koori UI</strong>
</p>

<p align="center">
  Comprehensive glassmorphism component library built on <a href="https://www.radix-ui.com">Radix UI</a> for React&nbsp;19
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/koori-ui?style=flat-square&color=6C8CFF" alt="npm version" />
  <img src="https://img.shields.io/npm/l/koori-ui?style=flat-square" alt="license" />
  <img src="https://img.shields.io/bundlephobia/minzip/koori-ui?style=flat-square&color=6C8CFF" alt="bundle size" />
</p>

---

## Live Demo & Docs

**[View the interactive demo & documentation →](https://koori-ui.vercel.app)**

Explore all 27+ components, theming, and color presets in action. Full component documentation included.

---

## Features

- 🪟 **27+ components** — General, Layout, Form, Navigation, Data Display, Feedback
- ♿ **Accessible** — built on Radix UI primitives with keyboard nav and ARIA
- 🌗 **Dark / Light / System** — `KooriProvider` with localStorage persistence and no FOUC
- 🎨 **4 color presets** — Slate, Zinc, Neutral, Violet via `data-theme`
- 🤖 **MCP server** — search component docs from Claude Code
- ⚡ **React 19 ready** — RSC-safe (`"use client"` banner auto-injected)
- 📦 **Dual ESM + CJS** — tree-shakeable, TypeScript declarations included

---

## Quick Start

```bash
npx create-koori-app my-app
cd my-app && npm run dev
```

Or install manually:

```bash
npm install koori-ui
```

---

## Setup

### 1. Import styles

```tsx
// app/layout.tsx (or your entry point)
import "koori-ui/styles.css";
```

### 2. Wrap with KooriProvider

`KooriProvider` handles dark/light mode, color scheme, localStorage persistence, and prevents flash-of-unstyled-content.

```tsx
import { KooriProvider } from "koori-ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <KooriProvider defaultTheme="dark">
          {children}
        </KooriProvider>
      </body>
    </html>
  );
}
```

### 3. Use the theme hook

```tsx
"use client";
import { useKooriTheme, GlassButton } from "koori-ui";

export function ThemeToggle() {
  const { theme, setTheme } = useKooriTheme();
  return (
    <GlassButton onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </GlassButton>
  );
}
```

| `KooriProvider` prop | Type | Default | Description |
|---|---|---|---|
| `defaultTheme` | `"light" \| "dark" \| "system"` | `"system"` | Initial theme |
| `defaultColorScheme` | `"default" \| "slate" \| "zinc" \| "neutral" \| "violet"` | `"default"` | Initial color preset |

---

## Components

### General

| Component | Description |
|---|---|
| `GlassButton` | Button with `variant` (default/primary) and `size` (sm/md/lg) |
| `GlassBadge` | Pill badge — variants: default, primary, success, warning, danger |
| `GlassH1` `GlassH2` `GlassH3` `GlassH4` | Heading elements |
| `GlassText` | Paragraph — `size` (sm/md/lg), `muted` prop |
| `GlassCode` | Inline code snippet with glass background |
| `GlassLink` | Anchor with primary color and hover underline |
| `GlassBlockquote` | Blockquote with primary left border |

### Layout

| Component | Description |
|---|---|
| `GlassPanel` | Foundational container — variants: default, subtle, elevated |
| `GlassCard` + `GlassCardHeader` / `GlassCardBody` / `GlassCardFooter` | Structured card |
| `GlassSeparator` | Horizontal or vertical divider (`orientation` prop) |

### Form

| Component | Description |
|---|---|
| `GlassInput` | Text input, all native types supported |
| `GlassTextarea` | Multi-line input (`rows` prop) |
| `GlassCheckbox` | Accessible checkbox with optional `label` |
| `GlassSwitch` | Toggle switch with optional `label` |
| `GlassRadioGroup` + `GlassRadioItem` | Radio group powered by Radix UI |
| `GlassSelect` + sub-components | Dropdown select powered by Radix UI |
| `GlassSlider` | Range slider powered by Radix UI |

### Navigation

| Component | Description |
|---|---|
| `GlassTabs` + `GlassTabsList` / `GlassTabsTrigger` / `GlassTabsContent` | Tabbed interface |
| `GlassBreadcrumb` + `GlassBreadcrumbItem` / `GlassBreadcrumbSeparator` | Navigation breadcrumb |
| `GlassDropdownMenu` + sub-components | Context menu powered by Radix UI |

### Data Display

| Component | Description |
|---|---|
| `GlassAvatar` + `GlassAvatarImage` / `GlassAvatarFallback` | Avatar with image fallback |
| `GlassTable` + `GlassThead` / `GlassTbody` / `GlassTr` / `GlassTh` / `GlassTd` | Data table |
| `GlassStatCard` | KPI card with `value`, `label`, `trend`, `icon` props |
| `GlassAreaChart` / `GlassBarChart` | Recharts wrappers with glass tooltips |

### Feedback

| Component | Description |
|---|---|
| `GlassAlert` | Alert with variants: info, success, warning, error |
| `GlassDialog` + sub-components | Modal dialog powered by Radix UI |
| `GlassPopover` + sub-components | Floating panel powered by Radix UI |
| `GlassTooltip` + sub-components | Tooltip powered by Radix UI |
| `GlassToast` + `GlassToaster` | Toast notifications powered by Radix UI |
| `GlassProgress` | Progress bar — variants: default, success, warning, error |
| `GlassSkeleton` | Animated loading placeholder |

---

## Theming

### Color presets

Apply a preset via `KooriProvider` or directly on `<html>`:

```tsx
<KooriProvider defaultColorScheme="violet">...</KooriProvider>
// or
<html data-theme="slate">
```

Available presets: `slate`, `zinc`, `neutral`, `violet`

### CSS custom properties

Override any token to match your brand:

```css
:root {
  --koori-primary: #8b5cf6;
  --koori-accent: #a78bfa;
}
```

| Token | Description |
|---|---|
| `--koori-bg` | Page background |
| `--koori-text` | Primary text |
| `--koori-muted` | Secondary/muted text |
| `--koori-primary` | Brand primary |
| `--koori-accent` | Brand accent |
| `--koori-success` / `--koori-warning` / `--koori-error` / `--koori-info` | Status colors |
| `--koori-radius-sm/md/lg/xl/full` | Border radius scale |

### Glass CSS classes

Use directly when building custom components:

| Class | Description |
|---|---|
| `.glass` | Standard frosted glass |
| `.glass-subtle` | Lighter, more transparent |
| `.glass-elevated` | Strongest blur and drop shadow |

---

## MCP Server (Claude Code)

Search Koori UI component docs from within Claude Code:

```bash
cd packages/mcp && npm run build
```

Add to `.claude/settings.json`:

```json
{
  "mcpServers": {
    "koori-ui": {
      "command": "node",
      "args": ["./packages/mcp/dist/index.js"]
    }
  }
}
```

Available tools: `list_components`, `get_component_docs`, `search_components`, `get_component_example`

---

## create-koori-app

Scaffold a new project interactively:

```bash
npx create-koori-app my-app
```

Prompts for project name, default theme, and package manager. Outputs a Next.js app with `KooriProvider` pre-configured.

---

## Build

```bash
npm run build       # CJS + ESM + DTS + CSS → dist/
npm run typecheck   # tsc --noEmit
npm run dev         # watch mode
npm run release:patch  # bump version, build, pack tarball
```

---

## License

MIT
