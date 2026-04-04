import { forwardRef, type ComponentPropsWithRef } from "react";
import { cn } from "../../utils/cn";

export type GlassBadgeVariant = "default" | "primary" | "success" | "warning" | "danger";

export interface GlassBadgeProps extends ComponentPropsWithRef<"div"> {
    /** Visual variant */
    variant?: GlassBadgeVariant;
}

const variantClasses: Record<GlassBadgeVariant, string> = {
    default: "bg-white/[0.08] text-[var(--koori-text)] border-white/10",
    primary: "bg-[var(--koori-primary)]/20 text-[var(--koori-primary)] border-[var(--koori-primary)]/30",
    success: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    warning: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    danger: "bg-rose-500/20 text-rose-300 border-rose-500/30",
};

/**
 * GlassBadge — A small tag or label with glassmorphism styling.
 *
 * Perfect for statuses, categories, or notifications.
 */
export const GlassBadge = forwardRef<HTMLDivElement, GlassBadgeProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "glass inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2",
                    variantClasses[variant],
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        );
    },
);

GlassBadge.displayName = "GlassBadge";
