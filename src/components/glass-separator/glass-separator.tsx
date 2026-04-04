import { forwardRef, type ComponentPropsWithRef } from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../../utils/cn";

export type GlassSeparatorProps = ComponentPropsWithRef<typeof SeparatorPrimitive.Root>;

export const GlassSeparator = forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    GlassSeparatorProps
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
            "bg-[var(--koori-border)] shrink-0",
            orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
            className,
        )}
        {...props}
    />
));

GlassSeparator.displayName = "GlassSeparator";
