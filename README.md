<p align="center">
  <strong>✦ Aether UI</strong>
</p>

<p align="center">
  Soft glass UI components built on <a href="https://www.radix-ui.com">Radix UI</a> for React&nbsp;19
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/aether-ui?style=flat-square&color=6C8CFF" alt="npm version" />
  <img src="https://img.shields.io/npm/l/aether-ui?style=flat-square" alt="license" />
  <img src="https://img.shields.io/bundlephobia/minzip/aether-ui?style=flat-square&color=6C8CFF" alt="bundle size" />
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
npm install aether-ui
```

> **Peer dependencies:** `react >= 19` and `react-dom >= 19`

---

## Quick Start

Import the styles **once** in your app's entry point:

```tsx
import "aether-ui/styles.css";
```

Then use the components:

```tsx
import { GlassPanel, GlassButton, GlassInput } from "aether-ui";

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
} from "aether-ui";

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
} from "aether-ui";

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

## Theming

Override CSS custom properties to customize the palette:

```css
:root {
  --aether-bg: #0b0f19;
  --aether-text: #e6eaf2;
  --aether-muted: #a1a7b3;
  --aether-primary: #6c8cff;
}
```

For example, switch to a purple accent:

```css
:root {
  --aether-primary: #a78bfa;
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

---

## Publishing to npm

See [PUBLISHING.md](./PUBLISHING.md) for step-by-step instructions.

---

## License

MIT
