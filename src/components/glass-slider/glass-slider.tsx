import { forwardRef, type ComponentPropsWithRef } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../../utils/cn";

export type GlassSliderProps = ComponentPropsWithRef<typeof SliderPrimitive.Root>;

export const GlassSlider = forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    GlassSliderProps
>(({ className, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex w-full touch-none select-none items-center",
            className,
        )}
        {...props}
    >
        <SliderPrimitive.Track className="glass-subtle relative h-2 w-full grow overflow-hidden rounded-full">
            <SliderPrimitive.Range className="absolute h-full bg-[var(--koori-primary)] transition-all" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
            className={cn(
                "glass-elevated block h-4 w-4 rounded-full",
                "border border-[var(--koori-primary)]/40",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--koori-primary)]/30",
                "transition-transform duration-150 hover:scale-110",
                "disabled:pointer-events-none disabled:opacity-50",
            )}
        />
    </SliderPrimitive.Root>
));

GlassSlider.displayName = "GlassSlider";
