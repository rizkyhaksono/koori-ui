<p align="center">
  <strong>✦ Koori UI</strong>
</p>

<p align="center">
  Soft glass UI components built on <a href="https://www.radix-ui.com">Radix UI</a> for React&nbsp;19
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/koori-ui?style=flat-square&color=6C8CFF" alt="npm version" />
  <img src="https://img.shields.io/npm/l/koori-ui?style=flat-square" alt="license" />
  <img src="https://img.shields.io/bundlephobia/minzip/koori-ui?style=flat-square&color=6C8CFF" alt="bundle size" />
</p>

---

## Features

- 🪟 **Glassmorphism design system** — translucent surfaces, blur, and layered depth
- ♿ **Accessible** — built on Radix UI primitives
- 🌲 **Tree-shakeable** — only import what you use
- ⚡ **React 19 ready** — RSC-safe, concurrent rendering compatible
- 🎨 **Themeable** — override CSS custom properties to match your brand
- 📦 **Tiny footprint** — ESM + CJS, ~7 KB gzipped

---

## Installation

```bash
npm install koori-ui
```

> **Peer dependencies:** `react >= 19` and `react-dom >= 19`

---

## Quick Start

Import the styles **once** in your app's entry point:

```tsx
import "koori-ui/styles.css";
```

Then use the components:

```tsx
import { GlassPanel, GlassButton, GlassInput } from "koori-ui";

export default function App() {
  return (
    <div style={{ background: "#0B0F19", minHeight: "100vh", padding: 40 }}>
      <GlassPanel className="max-w-md mx-auto space-y-4">
        <h1 className="text-xl font-bold text-white">Welcome</h1>
        <GlassInput placeholder="Enter your email" />
        <GlassButton variant="primary">Get Started</GlassButton>
      </GlassPanel>
    </div>
  );
}
```

---

## Components

### GlassPanel

A container wrapper with glassmorphism styling.

```tsx
<GlassPanel variant="elevated">
  {/* content */}
</GlassPanel>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "subtle" \| "elevated"` | `"default"` | Glass intensity |
| `className` | `string` | — | Additional classes |

---

### GlassCard

A card with optional `Header`, `Body`, and `Footer` sub-components.

```tsx
import {
  GlassCard,
  GlassCardHeader,
  GlassCardBody,
  GlassCardFooter,
} from "koori-ui";

<GlassCard>
  <GlassCardHeader>Title</GlassCardHeader>
  <GlassCardBody>Content goes here.</GlassCardBody>
  <GlassCardFooter>
    <GlassButton>Action</GlassButton>
  </GlassCardFooter>
</GlassCard>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "subtle" \| "elevated"` | `"default"` | Glass intensity |

---

### GlassButton

A button with hover glow and variants.

```tsx
<GlassButton variant="primary" size="lg">Submit</GlassButton>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "primary"` | `"default"` | Visual style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size preset |

---

### GlassInput

A styled text input with subtle focus ring.

```tsx
<GlassInput placeholder="Search..." type="email" />
```

Supports all native `<input>` props. Works controlled and uncontrolled.

---

### GlassDialog

An accessible modal dialog powered by Radix UI.

```tsx
import {
  GlassDialog,
  GlassDialogTrigger,
  GlassDialogContent,
  GlassDialogTitle,
  GlassDialogDescription,
  GlassDialogClose,
} from "koori-ui";

<GlassDialog>
  <GlassDialogTrigger asChild>
    <GlassButton>Open</GlassButton>
  </GlassDialogTrigger>
  <GlassDialogContent>
    <GlassDialogTitle>Confirm</GlassDialogTitle>
    <GlassDialogDescription>Are you sure?</GlassDialogDescription>
    <GlassDialogClose asChild>
      <GlassButton>Close</GlassButton>
    </GlassDialogClose>
  </GlassDialogContent>
</GlassDialog>
```

---

### GlassChart (Recharts Component)

Premium, automatically responsive glassmorphism wrappers for Recharts.

```tsx
import { GlassAreaChart, GlassBarChart } from "koori-ui";

const chartData = [
  { name: "Jan", revenue: 4000, users: 2400 },
  { name: "Feb", revenue: 3000, users: 1398 },
];

<GlassAreaChart
  data={chartData}
  index="name"
  categories={[{ key: "revenue", color: "var(--koori-primary)", name: "Revenue" }]}
/>
```

---

## 🤖 Model Context Protocol (MCP) & Copy-Paste Setup [SOON]

We are currently building **native MCP (Model Context Protocol)** support! Soon, you will be able to simply expose Koori UI to any agent and have it automatically scaffold React components for you. 

We will also provide copy-pasteable Markdown recipes for every complex component directly in our documentation so your AI assistants can use them perfectly every time!

---

## Theming

Override CSS custom properties to customize the palette:

```css
:root {
  --koori-bg: #0b0f19;
  --koori-text: #e6eaf2;
  --koori-muted: #a1a7b3;
  --koori-primary: #6c8cff;
}
```

For example, switch to a purple accent:

```css
:root {
  --koori-primary: #a78bfa;
}
```

---

## Glass CSS Classes

You can also use the raw CSS classes directly:

| Class | Description |
|-------|-------------|
| `.glass` | Standard frosted glass |
| `.glass-subtle` | Lighter, more transparent |
| `.glass-elevated` | Stronger blur + drop shadow |

---

## Build

```bash
npm run build       # CJS + ESM + DTS → dist/
npm run typecheck   # tsc --noEmit
npm run dev         # watch mode
```

## License

MIT
