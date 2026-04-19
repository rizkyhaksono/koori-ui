import { forwardRef, type ComponentPropsWithRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../utils/cn";

export type GlassSpinnerSize = "sm" | "md" | "lg" | "xl";

export interface GlassSpinnerProps extends ComponentPropsWithRef<"div"> {
    size?: GlassSpinnerSize;
    label?: string;
}

const sizeMap: Record<GlassSpinnerSize, string> = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
};

export const GlassSpinner = forwardRef<HTMLDivElement, GlassSpinnerProps>(
    ({ size = "md", label, className, ...props }, ref) => (
        <div
            ref={ref}
            role="status"
            aria-label={label ?? "Loading"}
            className={cn("inline-flex flex-col items-center gap-2 text-[var(--koori-primary)]", className)}
            {...props}
        >
            <Loader2 className={cn("animate-spin", sizeMap[size])} />
            {label && <span className="text-xs text-[var(--koori-muted)]">{label}</span>}
        </div>
    ),
);
GlassSpinner.displayName = "GlassSpinner";
