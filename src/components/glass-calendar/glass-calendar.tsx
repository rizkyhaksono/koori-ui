"use client";

import { DayPicker } from "react-day-picker";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../utils/cn";

export type GlassCalendarProps = React.ComponentProps<typeof DayPicker>;

export function GlassCalendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: GlassCalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("glass-subtle p-3 rounded-[var(--koori-radius-lg)]", className)}
            classNames={{
                months: "flex flex-col sm:flex-row gap-4",
                month: "space-y-4",
                month_caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium text-[var(--koori-text)]",
                nav: "flex items-center justify-between absolute inset-x-1 top-0",
                button_previous: cn(
                    "inline-flex items-center justify-center h-7 w-7 rounded-[var(--koori-radius-sm)]",
                    "text-[var(--koori-muted)] hover:text-[var(--koori-text)] hover:bg-white/10 transition-colors outline-none",
                ),
                button_next: cn(
                    "inline-flex items-center justify-center h-7 w-7 rounded-[var(--koori-radius-sm)]",
                    "text-[var(--koori-muted)] hover:text-[var(--koori-text)] hover:bg-white/10 transition-colors outline-none",
                ),
                month_grid: "w-full border-collapse space-y-1",
                weekdays: "flex",
                weekday: "text-[var(--koori-muted)] rounded-md w-9 font-normal text-[0.75rem] uppercase tracking-wider",
                week: "flex w-full mt-2",
                day: "relative p-0 text-center text-sm",
                day_button: cn(
                    "inline-flex items-center justify-center h-9 w-9 rounded-[var(--koori-radius-sm)] p-0 font-normal",
                    "text-[var(--koori-text)] hover:bg-white/10 transition-colors outline-none",
                    "aria-selected:bg-[var(--koori-primary)] aria-selected:text-white aria-selected:hover:bg-[var(--koori-primary)]/90",
                ),
                today: "bg-white/5 text-[var(--koori-primary)] font-semibold",
                outside: "text-[var(--koori-muted)]/40 aria-selected:text-[var(--koori-muted)]/40",
                disabled: "text-[var(--koori-muted)]/30 opacity-50",
                hidden: "invisible",
                range_middle: "aria-selected:bg-[var(--koori-primary)]/20 aria-selected:text-[var(--koori-text)]",
                ...classNames,
            }}
            components={{
                Chevron: ({ orientation }) =>
                    orientation === "left" ? (
                        <ChevronLeft className="h-4 w-4" />
                    ) : (
                        <ChevronRight className="h-4 w-4" />
                    ),
            }}
            {...props}
        />
    );
}

GlassCalendar.displayName = "GlassCalendar";
