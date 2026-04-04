import { forwardRef, type ComponentPropsWithRef, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../../utils/cn";

/* ---------- Root ---------- */

export type GlassBreadcrumbProps = ComponentPropsWithRef<"ol">;

export const GlassBreadcrumb = forwardRef<HTMLOListElement, GlassBreadcrumbProps>(
    ({ className, ...props }, ref) => (
        <ol
            ref={ref}
            className={cn("flex flex-wrap items-center gap-1.5 text-sm", className)}
            {...props}
        />
    ),
);
GlassBreadcrumb.displayName = "GlassBreadcrumb";

/* ---------- Item ---------- */

export interface GlassBreadcrumbItemProps extends ComponentPropsWithRef<"li"> {
    href?: string;
    isCurrent?: boolean;
}

export const GlassBreadcrumbItem = forwardRef<HTMLLIElement, GlassBreadcrumbItemProps>(
    ({ className, href, isCurrent = false, children, ...props }, ref) => (
        <li
            ref={ref}
            className={cn("flex items-center gap-1.5", className)}
            aria-current={isCurrent ? "page" : undefined}
            {...props}
        >
            {href && !isCurrent ? (
                <a
                    href={href}
                    className="text-[var(--koori-muted)] hover:text-[var(--koori-text)] transition-colors"
                >
                    {children}
                </a>
            ) : (
                <span className={cn(isCurrent ? "text-[var(--koori-text)] font-medium" : "text-[var(--koori-muted)]")}>
                    {children}
                </span>
            )}
        </li>
    ),
);
GlassBreadcrumbItem.displayName = "GlassBreadcrumbItem";

/* ---------- Separator ---------- */

export interface GlassBreadcrumbSeparatorProps extends ComponentPropsWithRef<"li"> {
    icon?: ReactNode;
}

export const GlassBreadcrumbSeparator = forwardRef<HTMLLIElement, GlassBreadcrumbSeparatorProps>(
    ({ className, icon, ...props }, ref) => (
        <li
            ref={ref}
            className={cn("text-[var(--koori-muted)]", className)}
            aria-hidden="true"
            {...props}
        >
            {icon ?? <ChevronRight className="h-3.5 w-3.5" />}
        </li>
    ),
);
GlassBreadcrumbSeparator.displayName = "GlassBreadcrumbSeparator";
