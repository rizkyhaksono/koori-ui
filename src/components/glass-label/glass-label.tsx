import { forwardRef, type ComponentPropsWithRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../../utils/cn";

export type GlassLabelProps = ComponentPropsWithRef<typeof LabelPrimitive.Root>;

export const GlassLabel = forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    GlassLabelProps
>(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(
            "text-sm font-medium leading-none text-[var(--koori-text)]",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            className,
        )}
        {...props}
    />
));
GlassLabel.displayName = "GlassLabel";
