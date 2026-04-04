import { forwardRef, type ComponentPropsWithRef } from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { cn } from "../../utils/cn";

/* ---------- Provider ---------- */

export type GlassToastProviderProps = ComponentPropsWithRef<typeof ToastPrimitive.Provider>;
export const GlassToastProvider = ToastPrimitive.Provider;
GlassToastProvider.displayName = "GlassToastProvider";

/* ---------- Root (Toast) ---------- */

export type GlassToastVariant = "default" | "success" | "warning" | "error";

export interface GlassToastProps extends ComponentPropsWithRef<typeof ToastPrimitive.Root> {
    variant?: GlassToastVariant;
}

const variantBorder: Record<GlassToastVariant, string> = {
    default: "border-l-[var(--koori-primary)]",
    success: "border-l-[var(--koori-success)]",
    warning: "border-l-[var(--koori-warning)]",
    error: "border-l-[var(--koori-error)]",
};

export const GlassToast = forwardRef<
    React.ElementRef<typeof ToastPrimitive.Root>,
    GlassToastProps
>(({ className, variant = "default", ...props }, ref) => (
    <ToastPrimitive.Root
        ref={ref}
        className={cn(
            "glass-elevated pointer-events-auto relative flex w-full max-w-sm items-start gap-3 overflow-hidden rounded-[var(--koori-radius-lg)] p-4",
            "border-l-4",
            variantBorder[variant],
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:slide-in-from-right-full data-[state=closed]:slide-out-to-right-full",
            "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
            className,
        )}
        {...props}
    />
));
GlassToast.displayName = "GlassToast";

/* ---------- Title ---------- */

export type GlassToastTitleProps = ComponentPropsWithRef<typeof ToastPrimitive.Title>;

export const GlassToastTitle = forwardRef<
    React.ElementRef<typeof ToastPrimitive.Title>,
    GlassToastTitleProps
>(({ className, ...props }, ref) => (
    <ToastPrimitive.Title
        ref={ref}
        className={cn("text-sm font-semibold text-[var(--koori-text)]", className)}
        {...props}
    />
));
GlassToastTitle.displayName = "GlassToastTitle";

/* ---------- Description ---------- */

export type GlassToastDescriptionProps = ComponentPropsWithRef<typeof ToastPrimitive.Description>;

export const GlassToastDescription = forwardRef<
    React.ElementRef<typeof ToastPrimitive.Description>,
    GlassToastDescriptionProps
>(({ className, ...props }, ref) => (
    <ToastPrimitive.Description
        ref={ref}
        className={cn("mt-0.5 text-xs text-[var(--koori-muted)]", className)}
        {...props}
    />
));
GlassToastDescription.displayName = "GlassToastDescription";

/* ---------- Action ---------- */

export type GlassToastActionProps = ComponentPropsWithRef<typeof ToastPrimitive.Action>;

export const GlassToastAction = forwardRef<
    React.ElementRef<typeof ToastPrimitive.Action>,
    GlassToastActionProps
>(({ className, ...props }, ref) => (
    <ToastPrimitive.Action
        ref={ref}
        className={cn(
            "shrink-0 rounded-[var(--koori-radius-sm)] px-3 py-1.5 text-xs font-medium",
            "glass-subtle border border-[var(--koori-glass-border)]",
            "text-[var(--koori-text)] hover:bg-white/10 transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-[var(--koori-primary)]/30",
            className,
        )}
        {...props}
    />
));
GlassToastAction.displayName = "GlassToastAction";

/* ---------- Close ---------- */

export type GlassToastCloseProps = ComponentPropsWithRef<typeof ToastPrimitive.Close>;

export const GlassToastClose = forwardRef<
    React.ElementRef<typeof ToastPrimitive.Close>,
    GlassToastCloseProps
>(({ className, ...props }, ref) => (
    <ToastPrimitive.Close
        ref={ref}
        className={cn(
            "absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full",
            "text-[var(--koori-muted)] hover:text-[var(--koori-text)] hover:bg-white/10",
            "transition-colors duration-150 outline-none",
            className,
        )}
        {...props}
    >
        <X className="h-3 w-3" />
    </ToastPrimitive.Close>
));
GlassToastClose.displayName = "GlassToastClose";

/* ---------- Toaster (Viewport) ---------- */

export type GlassToasterProps = ComponentPropsWithRef<typeof ToastPrimitive.Viewport>;

export const GlassToaster = forwardRef<
    React.ElementRef<typeof ToastPrimitive.Viewport>,
    GlassToasterProps
>(({ className, ...props }, ref) => (
    <ToastPrimitive.Viewport
        ref={ref}
        className={cn(
            "fixed bottom-4 right-4 z-[100] flex max-h-screen w-full max-w-sm flex-col gap-2",
            className,
        )}
        {...props}
    />
));
GlassToaster.displayName = "GlassToaster";
