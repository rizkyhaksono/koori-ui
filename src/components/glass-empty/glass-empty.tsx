import { forwardRef, type ComponentPropsWithRef, type ReactNode } from "react";
import { Inbox } from "lucide-react";
import { cn } from "../../utils/cn";

export interface GlassEmptyProps extends ComponentPropsWithRef<"div"> {
    icon?: ReactNode;
    title: string;
    description?: string;
    action?: ReactNode;
}

export const GlassEmpty = forwardRef<HTMLDivElement, GlassEmptyProps>(
    ({ icon, title, description, action, className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex flex-col items-center justify-center gap-3 p-8 text-center",
                className,
            )}
            {...props}
        >
            <div className="glass-subtle flex h-14 w-14 items-center justify-center rounded-full text-[var(--koori-muted)]">
                {icon ?? <Inbox className="h-6 w-6" />}
            </div>
            <div className="space-y-1">
                <p className="text-sm font-semibold text-[var(--koori-text)]">{title}</p>
                {description && (
                    <p className="text-xs text-[var(--koori-muted)] max-w-xs">{description}</p>
                )}
            </div>
            {action && <div className="mt-2">{action}</div>}
        </div>
    ),
);
GlassEmpty.displayName = "GlassEmpty";
