"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../../utils/cn";

export interface GlassPaginationProps extends ComponentPropsWithRef<"nav"> {
    total: number;
    current: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
}

function getPageRange(total: number, current: number, siblings: number): (number | "ellipsis")[] {
    const totalPageNumbers = siblings * 2 + 5;
    if (total <= totalPageNumbers) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }

    const leftSibling = Math.max(current - siblings, 1);
    const rightSibling = Math.min(current + siblings, total);
    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < total - 1;

    if (!showLeftDots && showRightDots) {
        const leftRange = Array.from({ length: 3 + 2 * siblings }, (_, i) => i + 1);
        return [...leftRange, "ellipsis", total];
    }
    if (showLeftDots && !showRightDots) {
        const rightRange = Array.from({ length: 3 + 2 * siblings }, (_, i) => total - (3 + 2 * siblings) + 1 + i);
        return [1, "ellipsis", ...rightRange];
    }
    const middleRange = Array.from({ length: rightSibling - leftSibling + 1 }, (_, i) => leftSibling + i);
    return [1, "ellipsis", ...middleRange, "ellipsis", total];
}

export const GlassPagination = forwardRef<HTMLElement, GlassPaginationProps>(
    ({ total, current, onPageChange, siblingCount = 1, className, ...props }, ref) => {
        const pages = getPageRange(total, current, siblingCount);

        const buttonBase = cn(
            "inline-flex h-9 min-w-9 items-center justify-center rounded-[var(--koori-radius-md)] px-3 text-sm font-medium",
            "transition-all duration-150 outline-none",
            "focus-visible:ring-2 focus-visible:ring-[var(--koori-primary)]/30",
            "disabled:cursor-not-allowed disabled:opacity-40",
        );

        return (
            <nav
                ref={ref}
                role="navigation"
                aria-label="Pagination"
                className={cn("flex items-center gap-1", className)}
                {...props}
            >
                <button
                    type="button"
                    onClick={() => onPageChange(Math.max(1, current - 1))}
                    disabled={current === 1}
                    className={cn(buttonBase, "glass-subtle gap-1 text-[var(--koori-text)] hover:bg-white/10")}
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                </button>

                {pages.map((p, i) =>
                    p === "ellipsis" ? (
                        <span key={`e-${i}`} className="inline-flex h-9 w-9 items-center justify-center text-[var(--koori-muted)]">
                            <MoreHorizontal className="h-4 w-4" />
                        </span>
                    ) : (
                        <button
                            key={p}
                            type="button"
                            onClick={() => onPageChange(p)}
                            aria-current={p === current ? "page" : undefined}
                            className={cn(
                                buttonBase,
                                p === current
                                    ? "bg-[var(--koori-primary)]/20 text-[var(--koori-primary)] border border-[var(--koori-primary)]/30"
                                    : "text-[var(--koori-text)] hover:bg-white/10",
                            )}
                        >
                            {p}
                        </button>
                    ),
                )}

                <button
                    type="button"
                    onClick={() => onPageChange(Math.min(total, current + 1))}
                    disabled={current === total}
                    className={cn(buttonBase, "glass-subtle gap-1 text-[var(--koori-text)] hover:bg-white/10")}
                >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                </button>
            </nav>
        );
    },
);
GlassPagination.displayName = "GlassPagination";
