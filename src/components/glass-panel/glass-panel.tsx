import { forwardRef, type ComponentPropsWithRef } from "react";
import { cn } from "../../utils/cn";

export interface GlassPanelProps extends ComponentPropsWithRef<"div"> {
    /** Additional glass variant class */
    variant?: "default" | "subtle" | "elevated";
}

/**
 * GlassPanel — A container wrapper with glassmorphism styling.
 *
 * Use as a layout primitive to wrap content in a frosted‑glass surface.
 */
export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        const variantClass =
            variant === "subtle"
                ? "glass-subtle"
                : variant === "elevated"
                    ? "glass-elevated"
                    : "glass";

        return (
            <div ref={ref} className={cn(variantClass, "p-6", className)} {...props}>
                {children}
            </div>
        );
    },
);

GlassPanel.displayName = "GlassPanel";
