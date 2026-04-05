"use client";

import { useState } from "react";
import {
  GlassAlert, GlassProgress, GlassSkeleton,
  GlassDialog, GlassDialogTrigger, GlassDialogContent, GlassDialogTitle, GlassDialogDescription, GlassDialogClose,
  GlassTooltipProvider, GlassTooltip, GlassTooltipTrigger, GlassTooltipContent,
  GlassPopover, GlassPopoverTrigger, GlassPopoverContent,
  GlassToastProvider, GlassToast, GlassToastTitle, GlassToastDescription, GlassToastClose, GlassToaster,
  GlassButton,
} from "koori-ui";

export function AlertDemo() {
  return (
    <div className="w-full space-y-3">
      <GlassAlert variant="info" title="Update available">A new version is ready to install.</GlassAlert>
      <GlassAlert variant="success" title="Deployed">Your app is live.</GlassAlert>
      <GlassAlert variant="warning" title="High memory">Usage is at 87%.</GlassAlert>
      <GlassAlert variant="error" title="Build failed">TypeScript errors found.</GlassAlert>
    </div>
  );
}

export function ProgressDemo() {
  return (
    <div className="w-full space-y-3">
      <GlassProgress value={72} />
      <GlassProgress value={45} variant="success" />
      <GlassProgress value={60} variant="warning" />
      <GlassProgress value={25} variant="error" />
    </div>
  );
}

export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-3">
      <GlassSkeleton width={40} height={40} className="rounded-full" />
      <div className="flex-1 space-y-2">
        <GlassSkeleton height={14} className="w-3/4" />
        <GlassSkeleton height={10} className="w-1/2" />
      </div>
    </div>
  );
}

export function DialogDemo() {
  return (
    <GlassDialog>
      <GlassDialogTrigger asChild>
        <GlassButton variant="primary">Open Dialog</GlassButton>
      </GlassDialogTrigger>
      <GlassDialogContent>
        <GlassDialogTitle>Confirm Action</GlassDialogTitle>
        <GlassDialogDescription>
          This is an accessible dialog with a glass-elevated surface.
        </GlassDialogDescription>
        <div className="mt-6 flex justify-end gap-3">
          <GlassDialogClose asChild><GlassButton>Cancel</GlassButton></GlassDialogClose>
          <GlassDialogClose asChild><GlassButton variant="primary">Confirm</GlassButton></GlassDialogClose>
        </div>
      </GlassDialogContent>
    </GlassDialog>
  );
}

export function TooltipDemo() {
  return (
    <GlassTooltipProvider>
      <GlassTooltip>
        <GlassTooltipTrigger asChild>
          <GlassButton>Hover me</GlassButton>
        </GlassTooltipTrigger>
        <GlassTooltipContent>This is a glassmorphism tooltip</GlassTooltipContent>
      </GlassTooltip>
    </GlassTooltipProvider>
  );
}

export function PopoverDemo() {
  return (
    <GlassPopover>
      <GlassPopoverTrigger asChild>
        <GlassButton>Open Popover</GlassButton>
      </GlassPopoverTrigger>
      <GlassPopoverContent>
        <p className="text-sm font-semibold text-[var(--koori-text)] mb-1">Popover Title</p>
        <p className="text-xs text-[var(--koori-muted)]">Glassmorphism popover with animated entry and exit.</p>
      </GlassPopoverContent>
    </GlassPopover>
  );
}

export function ToastDemo() {
  const [toasts, setToasts] = useState<{ id: number; variant: "default" | "success" | "error"; title: string }[]>([]);
  const add = (variant: "default" | "success" | "error", title: string) => {
    const id = Date.now();
    setToasts((p) => [...p, { id, variant, title }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3000);
  };
  return (
    <GlassToastProvider>
      <div className="flex flex-wrap gap-3">
        <GlassButton size="sm" onClick={() => add("default", "Info notification")}>Default</GlassButton>
        <GlassButton size="sm" onClick={() => add("success", "Saved!")}>Success</GlassButton>
        <GlassButton size="sm" onClick={() => add("error", "Something went wrong")}>Error</GlassButton>
      </div>
      {toasts.map((t) => (
        <GlassToast key={t.id} variant={t.variant} open>
          <div className="flex-1">
            <GlassToastTitle>{t.title}</GlassToastTitle>
            <GlassToastDescription>Auto-dismisses in 3s</GlassToastDescription>
          </div>
          <GlassToastClose onClick={() => setToasts((p) => p.filter((x) => x.id !== t.id))} />
        </GlassToast>
      ))}
      <GlassToaster />
    </GlassToastProvider>
  );
}
