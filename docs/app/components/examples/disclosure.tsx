"use client";

import {
  GlassAccordion, GlassAccordionItem, GlassAccordionTrigger, GlassAccordionContent,
  GlassCollapsible, GlassCollapsibleTrigger, GlassCollapsibleContent,
  GlassButton,
} from "koori-ui";

export function AccordionDemo() {
  return (
    <GlassAccordion type="single" collapsible className="w-full max-w-md">
      <GlassAccordionItem value="item-1">
        <GlassAccordionTrigger>Is it accessible?</GlassAccordionTrigger>
        <GlassAccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and ships with keyboard support.
        </GlassAccordionContent>
      </GlassAccordionItem>
      <GlassAccordionItem value="item-2">
        <GlassAccordionTrigger>Is it styled?</GlassAccordionTrigger>
        <GlassAccordionContent>
          Yes. It inherits glass tokens and respects light/dark themes.
        </GlassAccordionContent>
      </GlassAccordionItem>
      <GlassAccordionItem value="item-3">
        <GlassAccordionTrigger>Is it animated?</GlassAccordionTrigger>
        <GlassAccordionContent>
          Yes. Expand and collapse transitions use the accordion animations.
        </GlassAccordionContent>
      </GlassAccordionItem>
    </GlassAccordion>
  );
}

export function CollapsibleDemo() {
  return (
    <GlassCollapsible className="w-full max-w-md space-y-2">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-[var(--koori-text)]">@koori/ui starred 3 repositories</p>
        <GlassCollapsibleTrigger asChild>
          <GlassButton size="sm">Toggle</GlassButton>
        </GlassCollapsibleTrigger>
      </div>
      <GlassCollapsibleContent className="space-y-2">
        <div className="glass-subtle rounded-md px-3 py-2 text-sm text-[var(--koori-muted)]">@radix-ui/primitives</div>
        <div className="glass-subtle rounded-md px-3 py-2 text-sm text-[var(--koori-muted)]">@shadcn/ui</div>
        <div className="glass-subtle rounded-md px-3 py-2 text-sm text-[var(--koori-muted)]">tailwindlabs/tailwindcss</div>
      </GlassCollapsibleContent>
    </GlassCollapsible>
  );
}
