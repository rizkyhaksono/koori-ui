import { forwardRef, type ComponentPropsWithRef } from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "../../utils/cn";

export type GlassToggleSize = "sm" | "md" | "lg";
export type GlassToggleVariant = "default" | "outline";

export interface GlassToggleProps
    extends ComponentPropsWithRef<typeof TogglePrimitive.Root> {
    size?: GlassToggleSize;
    variant?: GlassToggleVariant;
}

const sizeMap: Record<GlassToggleSize, string> = {
    sm: "h-8 px-2 text-xs",
    md: "h-9 px-3 text-sm",
    lg: "h-10 px-4 text-sm",
};

export const GlassToggle = forwardRef<
    React.ElementRef<typeof TogglePrimitive.Root>,
    GlassToggleProps
>(({ className, size = "md", variant = "default", ...props }, ref) => (
    <TogglePrimitive.Root
        ref={ref}
        className={cn(
            "inline-flex items-center justify-center gap-2 rounded-[var(--koori-radius-md)] font-medium",
            "text-[var(--koori-text)] outline-none transition-all duration-200",
            "hover:bg-white/10",
            "focus-visible:ring-2 focus-visible:ring-[var(--koori-primary)]/30",
            "data-[state=on]:bg-[var(--koori-primary)]/20 data-[state=on]:text-[var(--koori-primary)]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            variant === "outline" && "glass-subtle border border-[var(--koori-glass-border)]",
            sizeMap[size],
            className,
        )}
        {...props}
    />
));
GlassToggle.displayName = "GlassToggle";
