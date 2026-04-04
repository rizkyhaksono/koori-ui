import { forwardRef, type ComponentPropsWithRef } from "react";
import { cn } from "../../utils/cn";

export interface GlassCardProps extends ComponentPropsWithRef<"div"> {
    /** Glass intensity variant */
    variant?: "default" | "subtle" | "elevated";
}

/**
 * GlassCard — A card component with glassmorphism styling.
 *
 * Features an inner padding preset and optional header/body/footer layout.
 * Ideal for displaying discrete content blocks.
 */
export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        const variantClass =
            variant === "subtle"
                ? "glass-subtle"
                : variant === "elevated"
                    ? "glass-elevated"
                    : "glass";

        return (
            <div
                ref={ref}
                className={cn(
                    variantClass,
                    "p-5 transition-all duration-200 ease-out hover:bg-white/[0.08] hover:shadow-lg hover:shadow-black/20",
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        );
    },
);

GlassCard.displayName = "GlassCard";

/* ---------- Sub‑components ---------- */

export interface GlassCardHeaderProps extends ComponentPropsWithRef<"div"> { }

export const GlassCardHeader = forwardRef<HTMLDivElement, GlassCardHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "mb-4 border-b border-white/10 pb-4",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    ),
);

GlassCardHeader.displayName = "GlassCardHeader";

export interface GlassCardBodyProps extends ComponentPropsWithRef<"div"> { }

export const GlassCardBody = forwardRef<HTMLDivElement, GlassCardBodyProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn("flex-1", className)} {...props}>
            {children}
        </div>
    ),
);

GlassCardBody.displayName = "GlassCardBody";

export interface GlassCardFooterProps extends ComponentPropsWithRef<"div"> { }

export const GlassCardFooter = forwardRef<HTMLDivElement, GlassCardFooterProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "mt-4 border-t border-white/10 pt-4",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    ),
);

GlassCardFooter.displayName = "GlassCardFooter";
