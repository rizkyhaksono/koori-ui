import { forwardRef, type ComponentPropsWithRef, type ComponentPropsWithoutRef } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../utils/cn";

export type GlassTabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;

/**
 * GlassTabs — Accessible tabs powered by Radix UI with glassmorphism styling.
 */
export const GlassTabs = TabsPrimitive.Root;

export type GlassTabsListProps = ComponentPropsWithRef<typeof TabsPrimitive.List>;

export const GlassTabsList = forwardRef<HTMLDivElement, GlassTabsListProps>(
    ({ className, ...props }, ref) => (
        <TabsPrimitive.List
            ref={ref}
            className={cn(
                "glass inline-flex h-11 items-center justify-center rounded-xl bg-white/[0.04] p-1 text-[var(--koori-muted)]",
                className,
            )}
            {...props}
        />
    ),
);
GlassTabsList.displayName = "GlassTabsList";

export type GlassTabsTriggerProps = ComponentPropsWithRef<typeof TabsPrimitive.Trigger>;

export const GlassTabsTrigger = forwardRef<HTMLButtonElement, GlassTabsTriggerProps>(
    ({ className, ...props }, ref) => (
        <TabsPrimitive.Trigger
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-transparent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                "data-[state=active]:bg-white/[0.12] data-[state=active]:text-[var(--koori-text)] data-[state=active]:shadow-sm",
                "hover:text-[var(--koori-text)]",
                className,
            )}
            {...props}
        />
    ),
);
GlassTabsTrigger.displayName = "GlassTabsTrigger";

export type GlassTabsContentProps = ComponentPropsWithRef<typeof TabsPrimitive.Content>;

export const GlassTabsContent = forwardRef<HTMLDivElement, GlassTabsContentProps>(
    ({ className, ...props }, ref) => (
        <TabsPrimitive.Content
            ref={ref}
            className={cn(
                "mt-4 ring-offset-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2",
                className,
            )}
            {...props}
        />
    ),
);
GlassTabsContent.displayName = "GlassTabsContent";
