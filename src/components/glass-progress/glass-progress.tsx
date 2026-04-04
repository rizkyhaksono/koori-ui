import { forwardRef, type ComponentPropsWithRef } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../utils/cn";

export type GlassProgressVariant = "default" | "success" | "warning" | "error";

export interface GlassProgressProps
    extends ComponentPropsWithRef<typeof ProgressPrimitive.Root> {
    variant?: GlassProgressVariant;
}

const indicatorColor: Record<GlassProgressVariant, string> = {
    default: "bg-[var(--koori-primary)]",
    success: "bg-[var(--koori-success)]",
    warning: "bg-[var(--koori-warning)]",
    error: "bg-[var(--koori-error)]",
};

export const GlassProgress = forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    GlassProgressProps
>(({ className, value, variant = "default", ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            "glass-subtle relative h-2 w-full overflow-hidden rounded-full",
            className,
        )}
        {...props}
    >
        <ProgressPrimitive.Indicator
            className={cn(
                "h-full rounded-full transition-all duration-500 ease-out",
                indicatorColor[variant],
            )}
            style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
        />
    </ProgressPrimitive.Root>
));

GlassProgress.displayName = "GlassProgress";
