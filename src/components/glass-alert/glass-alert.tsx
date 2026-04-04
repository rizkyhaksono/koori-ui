import { forwardRef, type ComponentPropsWithRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";

export type GlassAlertVariant = "info" | "success" | "warning" | "error";

export interface GlassAlertProps extends ComponentPropsWithRef<"div"> {
    variant?: GlassAlertVariant;
    title?: string;
    icon?: ReactNode;
}

const variantStyles: Record<GlassAlertVariant, string> = {
    info: "border-l-[var(--koori-info)] text-[var(--koori-info)]",
    success: "border-l-[var(--koori-success)] text-[var(--koori-success)]",
    warning: "border-l-[var(--koori-warning)] text-[var(--koori-warning)]",
    error: "border-l-[var(--koori-error)] text-[var(--koori-error)]",
};

export const GlassAlert = forwardRef<HTMLDivElement, GlassAlertProps>(
    ({ className, variant = "info", title, icon, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "glass-subtle flex gap-3 rounded-[var(--koori-radius-md)] p-4",
                "border-l-4",
                variantStyles[variant],
                className,
            )}
            {...props}
        >
            {icon && <div className="mt-0.5 shrink-0">{icon}</div>}
            <div className="flex-1">
                {title && (
                    <p className="mb-1 text-sm font-semibold">{title}</p>
                )}
                <div className="text-sm text-[var(--koori-muted)]">{children}</div>
            </div>
        </div>
    ),
);

GlassAlert.displayName = "GlassAlert";
