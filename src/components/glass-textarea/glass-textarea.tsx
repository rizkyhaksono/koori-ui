import { forwardRef, type ComponentPropsWithRef } from "react";
import { cn } from "../../utils/cn";

export interface GlassTextareaProps extends ComponentPropsWithRef<"textarea"> {
    /** Minimum number of visible rows */
    rows?: number;
}

export const GlassTextarea = forwardRef<HTMLTextAreaElement, GlassTextareaProps>(
    ({ className, rows = 3, ...props }, ref) => (
        <textarea
            ref={ref}
            rows={rows}
            className={cn(
                "glass-subtle w-full resize-y rounded-[var(--koori-radius-md)] px-4 py-2.5 text-sm",
                "text-[var(--koori-text)] placeholder:text-[var(--koori-muted)]",
                "border border-[var(--koori-glass-border)] outline-none",
                "focus:ring-2 focus:ring-[var(--koori-primary)]/30 focus:border-[var(--koori-primary)]/50",
                "transition-all duration-200",
                "min-h-[80px]",
                className,
            )}
            {...props}
        />
    ),
);

GlassTextarea.displayName = "GlassTextarea";
