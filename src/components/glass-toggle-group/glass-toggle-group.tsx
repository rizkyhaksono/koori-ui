import { forwardRef, type ComponentPropsWithRef, createContext, useContext } from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "../../utils/cn";

type GlassToggleGroupSize = "sm" | "md" | "lg";
type GlassToggleGroupVariant = "default" | "outline";

const ToggleGroupContext = createContext<{
    size: GlassToggleGroupSize;
    variant: GlassToggleGroupVariant;
}>({ size: "md", variant: "default" });

export type GlassToggleGroupProps = ComponentPropsWithRef<typeof ToggleGroupPrimitive.Root> & {
    size?: GlassToggleGroupSize;
    variant?: GlassToggleGroupVariant;
};

export const GlassToggleGroup = forwardRef<
    React.ElementRef<typeof ToggleGroupPrimitive.Root>,
    GlassToggleGroupProps
>(({ className, size = "md", variant = "default", children, ...props }, ref) => (
    <ToggleGroupPrimitive.Root
        ref={ref}
        className={cn(
            "flex items-center gap-1",
            variant === "outline" && "glass-subtle rounded-[var(--koori-radius-md)] p-1",
            className,
        )}
        {...props}
    >
        <ToggleGroupContext.Provider value={{ size, variant }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
));
GlassToggleGroup.displayName = "GlassToggleGroup";

const sizeMap: Record<GlassToggleGroupSize, string> = {
    sm: "h-8 px-2 text-xs",
    md: "h-9 px-3 text-sm",
    lg: "h-10 px-4 text-sm",
};

export type GlassToggleGroupItemProps = ComponentPropsWithRef<typeof ToggleGroupPrimitive.Item>;
export const GlassToggleGroupItem = forwardRef<
    React.ElementRef<typeof ToggleGroupPrimitive.Item>,
    GlassToggleGroupItemProps
>(({ className, ...props }, ref) => {
    const { size } = useContext(ToggleGroupContext);
    return (
        <ToggleGroupPrimitive.Item
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-[var(--koori-radius-sm)] font-medium",
                "text-[var(--koori-text)] outline-none transition-all duration-200",
                "hover:bg-white/10",
                "focus-visible:ring-2 focus-visible:ring-[var(--koori-primary)]/30",
                "data-[state=on]:bg-[var(--koori-primary)]/20 data-[state=on]:text-[var(--koori-primary)]",
                "disabled:cursor-not-allowed disabled:opacity-50",
                sizeMap[size],
                className,
            )}
            {...props}
        />
    );
});
GlassToggleGroupItem.displayName = "GlassToggleGroupItem";
