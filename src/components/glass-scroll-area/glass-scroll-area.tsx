import { forwardRef, type ComponentPropsWithRef } from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "../../utils/cn";

export type GlassScrollAreaProps = ComponentPropsWithRef<typeof ScrollAreaPrimitive.Root>;

export const GlassScrollArea = forwardRef<
    React.ElementRef<typeof ScrollAreaPrimitive.Root>,
    GlassScrollAreaProps
>(({ className, children, ...props }, ref) => (
    <ScrollAreaPrimitive.Root
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
    >
        <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
            {children}
        </ScrollAreaPrimitive.Viewport>
        <GlassScrollBar />
        <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
));
GlassScrollArea.displayName = "GlassScrollArea";

export type GlassScrollBarProps = ComponentPropsWithRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>;

export const GlassScrollBar = forwardRef<
    React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
    GlassScrollBarProps
>(({ className, orientation = "vertical", ...props }, ref) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
            "flex touch-none select-none transition-colors",
            orientation === "vertical" && "h-full w-2 border-l border-l-transparent p-[1px]",
            orientation === "horizontal" && "h-2 flex-col border-t border-t-transparent p-[1px]",
            className,
        )}
        {...props}
    >
        <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-[var(--koori-muted)]/40 hover:bg-[var(--koori-muted)]/60 transition-colors" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
GlassScrollBar.displayName = "GlassScrollBar";
