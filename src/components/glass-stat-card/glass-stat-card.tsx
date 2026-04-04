import { forwardRef, type ComponentPropsWithRef, type ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "../../utils/cn";

export type GlassStatCardVariant = "default" | "subtle" | "elevated";

export interface GlassStatCardProps extends ComponentPropsWithRef<"div"> {
    label: string;
    value: string | number;
    trend?: number;
    icon?: ReactNode;
    variant?: GlassStatCardVariant;
}

const variantClass: Record<GlassStatCardVariant, string> = {
    default: "glass",
    subtle: "glass-subtle",
    elevated: "glass-elevated",
};

export const GlassStatCard = forwardRef<HTMLDivElement, GlassStatCardProps>(
    ({ className, label, value, trend, icon, variant = "default", ...props }, ref) => {
        const isPositive = trend !== undefined && trend >= 0;
        return (
            <div
                ref={ref}
                className={cn(variantClass[variant], "p-5 flex flex-col gap-2", className)}
                {...props}
            >
                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]">
                        {label}
                    </span>
                    {icon && (
                        <span className="text-[var(--koori-primary)] opacity-80">{icon}</span>
                    )}
                </div>
                <p className="text-3xl font-bold text-[var(--koori-text)]">{value}</p>
                {trend !== undefined && (
                    <div
                        className={cn(
                            "flex items-center gap-1 text-xs font-semibold",
                            isPositive ? "text-[var(--koori-success)]" : "text-[var(--koori-error)]",
                        )}
                    >
                        {isPositive ? (
                            <TrendingUp className="h-3.5 w-3.5" />
                        ) : (
                            <TrendingDown className="h-3.5 w-3.5" />
                        )}
                        <span>
                            {isPositive ? "+" : ""}
                            {trend}%
                        </span>
                    </div>
                )}
            </div>
        );
    },
);

GlassStatCard.displayName = "GlassStatCard";
