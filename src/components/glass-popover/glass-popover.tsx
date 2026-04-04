import { forwardRef, type ComponentPropsWithRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { X } from "lucide-react";
import { cn } from "../../utils/cn";

/* ---------- Root ---------- */

export type GlassPopoverProps = ComponentPropsWithRef<typeof PopoverPrimitive.Root>;
export const GlassPopover = PopoverPrimitive.Root;
GlassPopover.displayName = "GlassPopover";

/* ---------- Trigger ---------- */

export type GlassPopoverTriggerProps = ComponentPropsWithRef<typeof PopoverPrimitive.Trigger>;
export const GlassPopoverTrigger = PopoverPrimitive.Trigger;
GlassPopoverTrigger.displayName = "GlassPopoverTrigger";

/* ---------- Content ---------- */

export type GlassPopoverContentProps = ComponentPropsWithRef<typeof PopoverPrimitive.Content>;

export const GlassPopoverContent = forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Content>,
    GlassPopoverContentProps
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
    <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
            ref={ref}
            align={align}
            sideOffset={sideOffset}
            className={cn(
                "glass-elevated z-50 w-72 rounded-[var(--koori-radius-xl)] p-4",
                "outline-none",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                "data-[side=bottom]:slide-in-from-top-2",
                "data-[side=top]:slide-in-from-bottom-2",
                className,
            )}
            {...props}
        />
    </PopoverPrimitive.Portal>
));
GlassPopoverContent.displayName = "GlassPopoverContent";

/* ---------- Close ---------- */

export type GlassPopoverCloseProps = ComponentPropsWithRef<typeof PopoverPrimitive.Close>;

export const GlassPopoverClose = forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Close>,
    GlassPopoverCloseProps
>(({ className, children, ...props }, ref) => (
    <PopoverPrimitive.Close
        ref={ref}
        className={cn(
            "absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full",
            "text-[var(--koori-muted)] hover:text-[var(--koori-text)] hover:bg-white/10",
            "transition-colors duration-150 outline-none",
            className,
        )}
        {...props}
    >
        {children ?? <X className="h-3.5 w-3.5" />}
    </PopoverPrimitive.Close>
));
GlassPopoverClose.displayName = "GlassPopoverClose";
