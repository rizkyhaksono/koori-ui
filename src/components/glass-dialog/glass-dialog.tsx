import {
    forwardRef,
    type ComponentPropsWithRef,
    type ComponentPropsWithoutRef,
} from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../utils/cn";

/* ---------- Root ---------- */

export type GlassDialogProps = ComponentPropsWithoutRef<
    typeof DialogPrimitive.Root
>;

/**
 * GlassDialog — Accessible dialog/modal powered by Radix UI with glass styling.
 */
export const GlassDialog = DialogPrimitive.Root;

/* ---------- Trigger ---------- */

export type GlassDialogTriggerProps = ComponentPropsWithRef<
    typeof DialogPrimitive.Trigger
>;

export const GlassDialogTrigger = DialogPrimitive.Trigger;

/* ---------- Close ---------- */

export type GlassDialogCloseProps = ComponentPropsWithRef<
    typeof DialogPrimitive.Close
>;

export const GlassDialogClose = DialogPrimitive.Close;

/* ---------- Portal + Overlay + Content ---------- */

export interface GlassDialogContentProps
    extends ComponentPropsWithRef<typeof DialogPrimitive.Content> {
    /** Hide the default overlay */
    hideOverlay?: boolean;
}

const GlassDialogOverlay = forwardRef<
    HTMLDivElement,
    ComponentPropsWithRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className,
        )}
        {...props}
    />
));

GlassDialogOverlay.displayName = "GlassDialogOverlay";

export const GlassDialogContent = forwardRef<
    HTMLDivElement,
    GlassDialogContentProps
>(({ className, children, hideOverlay = false, ...props }, ref) => (
    <DialogPrimitive.Portal>
        {!hideOverlay && <GlassDialogOverlay />}
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                "glass-elevated fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-6",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
                "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
                "focus:outline-none",
                className,
            )}
            {...props}
        >
            {children}
        </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
));

GlassDialogContent.displayName = "GlassDialogContent";

/* ---------- Title & Description ---------- */

export type GlassDialogTitleProps = ComponentPropsWithRef<
    typeof DialogPrimitive.Title
>;

export const GlassDialogTitle = forwardRef<
    HTMLHeadingElement,
    GlassDialogTitleProps
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(
            "text-lg font-semibold text-[var(--aether-text)]",
            className,
        )}
        {...props}
    />
));

GlassDialogTitle.displayName = "GlassDialogTitle";

export type GlassDialogDescriptionProps = ComponentPropsWithRef<
    typeof DialogPrimitive.Description
>;

export const GlassDialogDescription = forwardRef<
    HTMLParagraphElement,
    GlassDialogDescriptionProps
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn("mt-2 text-sm text-[var(--aether-muted)]", className)}
        {...props}
    />
));

GlassDialogDescription.displayName = "GlassDialogDescription";
