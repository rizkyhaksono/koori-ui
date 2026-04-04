import { forwardRef, type ComponentPropsWithRef } from "react";
import { cn } from "../../utils/cn";

export interface GlassInputProps extends ComponentPropsWithRef<"input"> { }

/**
 * GlassInput — A text input with glassmorphism styling.
 *
 * Works as both controlled and uncontrolled.
 * Focus ring is a subtle white/20 glow.
 */
export const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
    ({ className, type = "text", ...props }, ref) => (
        <input
            ref={ref}
            type={type}
            className={cn(
                "glass w-full px-4 py-2.5 text-sm",
                "text-[var(--aether-text)] placeholder:text-[var(--aether-muted)]",
                "bg-white/[0.04]",
                "outline-none transition-all duration-150 ease-out",
                "focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent",
                "disabled:pointer-events-none disabled:opacity-50",
                className,
            )}
            {...props}
        />
    ),
);

GlassInput.displayName = "GlassInput";
