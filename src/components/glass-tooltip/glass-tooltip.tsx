import { forwardRef, type ComponentPropsWithRef } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../../utils/cn";

/* ---------- Provider ---------- */

export type GlassTooltipProviderProps = ComponentPropsWithRef<typeof TooltipPrimitive.Provider>;
export const GlassTooltipProvider = TooltipPrimitive.Provider;
GlassTooltipProvider.displayName = "GlassTooltipProvider";

/* ---------- Root ---------- */

export type GlassTooltipProps = ComponentPropsWithRef<typeof TooltipPrimitive.Root>;
export const GlassTooltip = TooltipPrimitive.Root;
GlassTooltip.displayName = "GlassTooltip";

/* ---------- Trigger ---------- */

export type GlassTooltipTriggerProps = ComponentPropsWithRef<typeof TooltipPrimitive.Trigger>;
export const GlassTooltipTrigger = TooltipPrimitive.Trigger;
GlassTooltipTrigger.displayName = "GlassTooltipTrigger";

/* ---------- Content ---------- */

export type GlassTooltipContentProps = ComponentPropsWithRef<typeof TooltipPrimitive.Content>;

export const GlassTooltipContent = forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    GlassTooltipContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                "glass-elevated z-50 max-w-[200px] rounded-[var(--koori-radius-md)] px-3 py-1.5 text-xs text-[var(--koori-text)]",
                "animate-in fade-in-0 zoom-in-95",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
                "data-[side=bottom]:slide-in-from-top-2",
                "data-[side=top]:slide-in-from-bottom-2",
                "data-[side=left]:slide-in-from-right-2",
                "data-[side=right]:slide-in-from-left-2",
                className,
            )}
            {...props}
        />
    </TooltipPrimitive.Portal>
));
GlassTooltipContent.displayName = "GlassTooltipContent";
