import { forwardRef, type ComponentPropsWithRef } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "../../utils/cn";

export interface GlassCheckboxProps
    extends ComponentPropsWithRef<typeof CheckboxPrimitive.Root> {
    label?: string;
}

export const GlassCheckbox = forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    GlassCheckboxProps
>(({ className, label, id, ...props }, ref) => (
    <label
        htmlFor={id}
        className={cn("flex cursor-pointer items-center gap-2.5 select-none", label ? "" : "w-fit")}
    >
        <CheckboxPrimitive.Root
            ref={ref}
            id={id}
            className={cn(
                "glass-subtle flex h-4 w-4 shrink-0 items-center justify-center rounded-[var(--koori-radius-sm)]",
                "border border-[var(--koori-glass-border)] outline-none",
                "data-[state=checked]:bg-[var(--koori-primary)]/20 data-[state=checked]:border-[var(--koori-primary)]/50",
                "focus-visible:ring-2 focus-visible:ring-[var(--koori-primary)]/30",
                "transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator>
                <Check className="h-3 w-3 text-[var(--koori-primary)]" strokeWidth={3} />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
            <span className="text-sm text-[var(--koori-text)]">{label}</span>
        )}
    </label>
));

GlassCheckbox.displayName = "GlassCheckbox";
