import { forwardRef, type ComponentPropsWithRef } from "react";
import { cn } from "../../utils/cn";

export type GlassButtonVariant = "default" | "primary";
export type GlassButtonSize = "sm" | "md" | "lg";

export interface GlassButtonProps extends ComponentPropsWithRef<"button"> {
    /** Visual variant */
    variant?: GlassButtonVariant;
    /** Size preset */
    size?: GlassButtonSize;
}

const sizeClasses: Record<GlassButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
};

/**
 * GlassButton — A button with glassmorphism styling and hover glow.
 *
 * Supports `default` and `primary` variants with three size presets.
 */
export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
    (
        {
            className,
            variant = "default",
            size = "md",
            type = "button",
            children,
            ...props
        },
        ref,
    ) => {
        const base = cn(
            "glass inline-flex items-center justify-center gap-2 font-medium",
            "transition-all duration-150 ease-out",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
            "disabled:pointer-events-none disabled:opacity-50",
            sizeClasses[size],
        );

        const variantClasses =
            variant === "primary"
                ? "bg-[var(--aether-primary)]/20 text-[var(--aether-primary)] hover:bg-[var(--aether-primary)]/30 border-[var(--aether-primary)]/30"
                : "text-[var(--aether-text)] hover:bg-white/10";

        return (
            <button
                ref={ref}
                type={type}
                className={cn(base, variantClasses, className)}
                {...props}
            >
                {children}
            </button>
        );
    },
);

GlassButton.displayName = "GlassButton";
