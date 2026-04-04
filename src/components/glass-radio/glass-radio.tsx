import { forwardRef, type ComponentPropsWithRef } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../utils/cn";

/* ---------- Root ---------- */

export type GlassRadioGroupProps = ComponentPropsWithRef<typeof RadioGroupPrimitive.Root>;

export const GlassRadioGroup = forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    GlassRadioGroupProps
>(({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Root
        ref={ref}
        className={cn("flex flex-col gap-2", className)}
        {...props}
    />
));
GlassRadioGroup.displayName = "GlassRadioGroup";

/* ---------- Item ---------- */

export interface GlassRadioItemProps
    extends ComponentPropsWithRef<typeof RadioGroupPrimitive.Item> {
    label?: string;
}

export const GlassRadioItem = forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    GlassRadioItemProps
>(({ className, label, id, ...props }, ref) => (
    <label
        htmlFor={id}
        className="flex cursor-pointer items-center gap-2.5 select-none"
    >
        <RadioGroupPrimitive.Item
            ref={ref}
            id={id}
            className={cn(
                "glass-subtle flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                "border border-[var(--koori-glass-border)] outline-none transition-all duration-150",
                "data-[state=checked]:border-[var(--koori-primary)]/50",
                "focus-visible:ring-2 focus-visible:ring-[var(--koori-primary)]/30",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            {...props}
        >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <span className="block h-2 w-2 rounded-full bg-[var(--koori-primary)]" />
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {label && (
            <span className="text-sm text-[var(--koori-text)]">{label}</span>
        )}
    </label>
));
GlassRadioItem.displayName = "GlassRadioItem";
