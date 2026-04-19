"use client";

import { forwardRef, useContext, type ComponentPropsWithRef } from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import { cn } from "../../utils/cn";

export type GlassInputOTPProps = ComponentPropsWithRef<typeof OTPInput>;

export const GlassInputOTP = forwardRef<React.ElementRef<typeof OTPInput>, GlassInputOTPProps>(
    ({ className, containerClassName, ...props }, ref) => (
        <OTPInput
            ref={ref}
            containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
            className={cn("disabled:cursor-not-allowed", className)}
            {...props}
        />
    ),
);
GlassInputOTP.displayName = "GlassInputOTP";

export const GlassInputOTPGroup = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("flex items-center", className)} {...props} />
    ),
);
GlassInputOTPGroup.displayName = "GlassInputOTPGroup";

export interface GlassInputOTPSlotProps extends ComponentPropsWithRef<"div"> {
    index: number;
}

export const GlassInputOTPSlot = forwardRef<HTMLDivElement, GlassInputOTPSlotProps>(
    ({ index, className, ...props }, ref) => {
        const inputOTPContext = useContext(OTPInputContext);
        const slot = inputOTPContext?.slots?.[index];

        return (
            <div
                ref={ref}
                className={cn(
                    "glass-subtle relative flex h-10 w-10 items-center justify-center text-sm",
                    "border border-[var(--koori-glass-border)] rounded-[var(--koori-radius-md)]",
                    "transition-all duration-150",
                    slot?.isActive && "ring-2 ring-[var(--koori-primary)]/40 border-[var(--koori-primary)]/50",
                    className,
                )}
                {...props}
            >
                {slot?.char}
                {slot?.hasFakeCaret && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div className="h-4 w-px animate-caret-blink bg-[var(--koori-text)] duration-1000" />
                    </div>
                )}
            </div>
        );
    },
);
GlassInputOTPSlot.displayName = "GlassInputOTPSlot";

export const GlassInputOTPSeparator = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(
    ({ ...props }, ref) => (
        <div ref={ref} role="separator" {...props}>
            <Dot className="h-4 w-4 text-[var(--koori-muted)]" />
        </div>
    ),
);
GlassInputOTPSeparator.displayName = "GlassInputOTPSeparator";
