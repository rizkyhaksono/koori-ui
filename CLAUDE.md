# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Koori UI** (`koori-ui` on npm) is a glassmorphism React component library targeting React 19. It ships dual CJS/ESM bundles with full TypeScript declarations and a separate processed CSS file.

## Commands

```bash
# Build (TypeScript + CSS)
npm run build

# Watch mode during development
npm run dev

# Type-check without emitting
npm run typecheck

# Clean dist
npm run clean

# Bump patch version, build, and pack tarball
npm run release:patch
```

There is no test runner configured. Type safety is validated via `npm run typecheck`.

## Build Pipeline

`npm run build` runs two steps:
1. `tsup` — transpiles `src/index.ts` to `dist/index.{js,mjs}` + declarations
2. Tailwind CLI — processes `src/styles/glass.css` → `dist/index.css`

Output consumers import components from `koori-ui` and styles from `koori-ui/styles.css`.

The `"use client"` banner is injected by tsup (RSC compatibility). React, react-dom, and tailwindcss are externalized (peer deps).

## Architecture

### Component Pattern

Every component lives under `src/components/<kebab-name>/` with two files:
- `<name>.tsx` — component implementation + TypeScript types
- `index.ts` — re-export

All components use `forwardRef`, extend the native HTML element props they render, accept a `className` prop merged via `cn()`, and set `displayName`.

**Simple components** (GlassPanel, GlassButton, GlassInput, GlassBadge): wrap a native element, apply glass CSS classes, expose variant/size props as typed string unions.

**Radix-backed components** (GlassDialog, GlassTabs, GlassAvatar): re-export Radix primitives directly for Root/Trigger/simple parts; wrap complex parts (Content, Portal) with glass styling. State-based styles use Radix data attributes (`data-[state=open]:animate-in`).

**Chart components** (GlassAreaChart, GlassBarChart): thin wrappers over Recharts with glass-styled tooltips.

### Styling System

`src/styles/glass.css` is the single CSS source. Key design:
- Three glass utility classes: `.glass`, `.glass-subtle`, `.glass-elevated` — applied directly in component `className` strings
- Theming via CSS custom properties (`--koori-*`): 8 color tokens scoped to `:root`, `.dark`, and `[data-theme="slate|zinc|neutral|violet"]`
- Tailwind v4 is used with `@source "../components"` to scan component files for class generation

### Exports

`src/index.ts` is the single barrel export. It exports:
- All named component exports + their TypeScript prop types
- The `cn()` utility from `src/utils/cn.ts` (wraps `clsx` + `tailwind-merge`)

When adding a new component, add its exports to `src/index.ts` following the existing grouped pattern.

## Adding a New Component

1. Create `src/components/glass-<name>/glass-<name>.tsx` following the `forwardRef` + `cn()` pattern
2. Create `src/components/glass-<name>/index.ts` re-exporting from the component file
3. Add glass CSS classes (`.glass`, `.glass-subtle`, `.glass-elevated`) or inline custom properties as needed
4. Export the component and its types from `src/index.ts`

## CSS Custom Properties Reference

The theme tokens available in component styles:
- `--koori-bg`, `--koori-text`, `--koori-muted` — surface/text
- `--koori-primary`, `--koori-accent` — brand colors
- `--koori-border` — border color
- `--koori-card`, `--koori-card-subtle`, `--koori-card-elevated` — card background surfaces
- `--koori-glass-border`, `--koori-glass-border-top`, `--koori-glass-border-left` — directional glass borders
- `--koori-glass-shadow`, `--koori-glass-inset`, `--koori-glass-hover-border` — shadow and hover state

## Notes

- `glass-chart` is the only component that does not follow the standard two-file pattern. It exports directly (no `index.ts`) and uses plain functions instead of `forwardRef`.
- `lucide-react` is a bundled dependency and available for use in components.
- New status color tokens: `--koori-success`, `--koori-warning`, `--koori-error`, `--koori-info` (light + dark values set).
- New radius tokens: `--koori-radius-sm/md/lg/xl/full`.
- New typography tokens: `--koori-font-sans`, `--koori-font-mono`, `--koori-font-display`.

## Repository Structure

```
koori-ui/
  src/            # Library source (components + styles)
  examples/nextjs/ # Next.js demo app showcasing all components
  docs/           # Fumadocs-based documentation site (Next.js + MDX)
  packages/mcp/   # MCP server for component search in Claude Code
```

## MCP Server Setup

To add Koori UI component search to Claude Code, add to `.claude/settings.json`:

```json
{
  "mcpServers": {
    "koori-ui": {
      "command": "node",
      "args": ["/home/sarana3/workspace/personal/koori-ui/packages/mcp/dist/index.js"]
    }
  }
}
```

Build the MCP server first: `cd packages/mcp && npm run build`

Available MCP tools: `list_components`, `get_component_docs`, `search_components`, `get_component_example`.
