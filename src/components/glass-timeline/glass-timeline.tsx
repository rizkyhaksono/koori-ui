import { forwardRef, type ComponentPropsWithRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";

export type GlassTimelineProps = ComponentPropsWithRef<"ol">;

export const GlassTimeline = forwardRef<HTMLOListElement, GlassTimelineProps>(
    ({ className, ...props }, ref) => (
        <ol
            ref={ref}
            className={cn("relative space-y-4 border-l border-[var(--koori-border)] pl-6", className)}
            {...props}
        />
    ),
);
GlassTimeline.displayName = "GlassTimeline";

export type GlassTimelineItemStatus = "default" | "success" | "warning" | "error";

export interface GlassTimelineItemProps extends ComponentPropsWithRef<"li"> {
    time?: string;
    title: string;
    description?: string;
    status?: GlassTimelineItemStatus;
    icon?: ReactNode;
}

const dotColor: Record<GlassTimelineItemStatus, string> = {
    default: "bg-[var(--koori-primary)]",
    success: "bg-[var(--koori-success)]",
    warning: "bg-[var(--koori-warning)]",
    error: "bg-[var(--koori-error)]",
};

export const GlassTimelineItem = forwardRef<HTMLLIElement, GlassTimelineItemProps>(
    ({ time, title, description, status = "default", icon, className, children, ...props }, ref) => (
        <li ref={ref} className={cn("relative", className)} {...props}>
            <span
                className={cn(
                    "absolute -left-[29px] top-1 flex h-3 w-3 items-center justify-center rounded-full ring-4 ring-[var(--koori-bg)]",
                    dotColor[status],
                )}
            >
                {icon}
            </span>
            <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-2">
                    <p className="text-sm font-semibold text-[var(--koori-text)]">{title}</p>
                    {time && <span className="text-xs text-[var(--koori-muted)]">{time}</span>}
                </div>
                {description && <p className="text-sm text-[var(--koori-muted)]">{description}</p>}
                {children}
            </div>
        </li>
    ),
);
GlassTimelineItem.displayName = "GlassTimelineItem";
