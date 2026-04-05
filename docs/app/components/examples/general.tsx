"use client";

import {
  GlassButton,
  GlassBadge,
  GlassH1, GlassH2, GlassH3, GlassH4,
  GlassText, GlassCode, GlassLink, GlassBlockquote,
} from "koori-ui";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <GlassButton>Default</GlassButton>
      <GlassButton variant="primary">Primary</GlassButton>
      <GlassButton size="sm">Small</GlassButton>
      <GlassButton size="lg">Large</GlassButton>
      <GlassButton disabled>Disabled</GlassButton>
    </div>
  );
}

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <GlassBadge>Default</GlassBadge>
      <GlassBadge variant="primary">Primary</GlassBadge>
      <GlassBadge variant="success">Success</GlassBadge>
      <GlassBadge variant="warning">Warning</GlassBadge>
      <GlassBadge variant="danger">Danger</GlassBadge>
    </div>
  );
}

export function TypographyDemo() {
  return (
    <div className="space-y-3">
      <GlassH1>Heading One</GlassH1>
      <GlassH2>Heading Two</GlassH2>
      <GlassH3>Heading Three</GlassH3>
      <GlassH4>Heading Four</GlassH4>
      <GlassText>Default body text with comfortable line height.</GlassText>
      <GlassText muted>Muted secondary text.</GlassText>
      <div className="flex items-center gap-2">
        <span className="text-sm">Inline code:</span>
        <GlassCode>npm install koori-ui</GlassCode>
      </div>
      <GlassBlockquote>Glassmorphism is about depth, light, and translucency.</GlassBlockquote>
      <GlassLink href="#">Read the documentation →</GlassLink>
    </div>
  );
}
