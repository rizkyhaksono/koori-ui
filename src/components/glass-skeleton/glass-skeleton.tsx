import { forwardRef, type ComponentPropsWithRef } from "react";
import { cn } from "../../utils/cn";

export interface GlassSkeletonProps extends ComponentPropsWithRef<"div"> {
    width?: string | number;
    height?: string | number;
}

export const GlassSkeleton = forwardRef<HTMLDivElement, GlassSkeletonProps>(
    ({ className, width, height, style, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "glass-subtle animate-pulse rounded-[var(--koori-radius-md)]",
                className,
            )}
            style={{ width, height, ...style }}
            {...props}
        />
    ),
);

GlassSkeleton.displayName = "GlassSkeleton";
