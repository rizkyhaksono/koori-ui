import { forwardRef, type ComponentPropsWithRef } from "react";
import { cn } from "../../utils/cn";

/* ---------- Table wrapper ---------- */

export type GlassTableProps = ComponentPropsWithRef<"table">;

export const GlassTable = forwardRef<HTMLTableElement, GlassTableProps>(
    ({ className, ...props }, ref) => (
        <div className="glass-subtle w-full overflow-x-auto rounded-[var(--koori-radius-lg)]">
            <table
                ref={ref}
                className={cn("w-full text-sm", className)}
                {...props}
            />
        </div>
    ),
);
GlassTable.displayName = "GlassTable";

/* ---------- Thead ---------- */

export type GlassTheadProps = ComponentPropsWithRef<"thead">;

export const GlassThead = forwardRef<HTMLTableSectionElement, GlassTheadProps>(
    ({ className, ...props }, ref) => (
        <thead
            ref={ref}
            className={cn("border-b border-[var(--koori-border)]", className)}
            {...props}
        />
    ),
);
GlassThead.displayName = "GlassThead";

/* ---------- Tbody ---------- */

export type GlassTbodyProps = ComponentPropsWithRef<"tbody">;

export const GlassTbody = forwardRef<HTMLTableSectionElement, GlassTbodyProps>(
    ({ className, ...props }, ref) => (
        <tbody
            ref={ref}
            className={cn("divide-y divide-[var(--koori-border)]", className)}
            {...props}
        />
    ),
);
GlassTbody.displayName = "GlassTbody";

/* ---------- Tr ---------- */

export type GlassTrProps = ComponentPropsWithRef<"tr">;

export const GlassTr = forwardRef<HTMLTableRowElement, GlassTrProps>(
    ({ className, ...props }, ref) => (
        <tr
            ref={ref}
            className={cn(
                "transition-colors hover:bg-white/5 dark:hover:bg-white/5",
                className,
            )}
            {...props}
        />
    ),
);
GlassTr.displayName = "GlassTr";

/* ---------- Th ---------- */

export type GlassThProps = ComponentPropsWithRef<"th">;

export const GlassTh = forwardRef<HTMLTableCellElement, GlassThProps>(
    ({ className, ...props }, ref) => (
        <th
            ref={ref}
            className={cn(
                "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]",
                className,
            )}
            {...props}
        />
    ),
);
GlassTh.displayName = "GlassTh";

/* ---------- Td ---------- */

export type GlassTdProps = ComponentPropsWithRef<"td">;

export const GlassTd = forwardRef<HTMLTableCellElement, GlassTdProps>(
    ({ className, ...props }, ref) => (
        <td
            ref={ref}
            className={cn(
                "px-4 py-3 text-[var(--koori-text)]",
                className,
            )}
            {...props}
        />
    ),
);
GlassTd.displayName = "GlassTd";
