import { forwardRef, type ComponentPropsWithRef } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../utils/cn";

export interface GlassSwitchProps
    extends ComponentPropsWithRef<typeof SwitchPrimitive.Root> {
    label?: string;
}

export const GlassSwitch = forwardRef<
    React.ElementRef<typeof SwitchPrimitive.Root>,
    GlassSwitchProps
>(({ className, label, id, ...props }, ref) => (
    <label
        htmlFor={id}
        className={cn("flex cursor-pointer items-center gap-2.5 select-none", label ? "" : "w-fit")}
    >
        <SwitchPrimitive.Root
            ref={ref}
            id={id}
            className={cn(
                "glass-subtle relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full",
                "border border-[var(--koori-glass-border)] outline-none transition-all duration-200",
                "data-[state=checked]:bg-[var(--koori-primary)]/30 data-[state=checked]:border-[var(--koori-primary)]/50",
                "focus-visible:ring-2 focus-visible:ring-[var(--koori-primary)]/30",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            {...props}
        >
            <SwitchPrimitive.Thumb
                className={cn(
                    "pointer-events-none block h-3.5 w-3.5 rounded-full shadow-sm",
                    "bg-[var(--koori-muted)] transition-transform duration-200",
                    "translate-x-0.5 data-[state=checked]:translate-x-[18px]",
                    "data-[state=checked]:bg-[var(--koori-primary)]",
                )}
            />
        </SwitchPrimitive.Root>
        {label && (
            <span className="text-sm text-[var(--koori-text)]">{label}</span>
        )}
    </label>
));

GlassSwitch.displayName = "GlassSwitch";
