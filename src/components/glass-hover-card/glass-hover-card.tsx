import { forwardRef, type ComponentPropsWithRef } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "../../utils/cn";

export type GlassHoverCardProps = ComponentPropsWithRef<typeof HoverCardPrimitive.Root>;
export const GlassHoverCard = HoverCardPrimitive.Root;
GlassHoverCard.displayName = "GlassHoverCard";

export type GlassHoverCardTriggerProps = ComponentPropsWithRef<typeof HoverCardPrimitive.Trigger>;
export const GlassHoverCardTrigger = HoverCardPrimitive.Trigger;
GlassHoverCardTrigger.displayName = "GlassHoverCardTrigger";

export type GlassHoverCardContentProps = ComponentPropsWithRef<typeof HoverCardPrimitive.Content>;

export const GlassHoverCardContent = forwardRef<
    React.ElementRef<typeof HoverCardPrimitive.Content>,
    GlassHoverCardContentProps
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
    <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
            ref={ref}
            align={align}
            sideOffset={sideOffset}
            className={cn(
                "glass-elevated z-50 w-64 rounded-[var(--koori-radius-xl)] p-4 outline-none",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                className,
            )}
            {...props}
        />
    </HoverCardPrimitive.Portal>
));
GlassHoverCardContent.displayName = "GlassHoverCardContent";
