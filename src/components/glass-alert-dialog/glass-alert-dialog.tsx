import { forwardRef, type ComponentPropsWithRef } from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "../../utils/cn";

export type GlassAlertDialogProps = ComponentPropsWithRef<typeof AlertDialogPrimitive.Root>;
export const GlassAlertDialog = AlertDialogPrimitive.Root;
GlassAlertDialog.displayName = "GlassAlertDialog";

export type GlassAlertDialogTriggerProps = ComponentPropsWithRef<typeof AlertDialogPrimitive.Trigger>;
export const GlassAlertDialogTrigger = AlertDialogPrimitive.Trigger;
GlassAlertDialogTrigger.displayName = "GlassAlertDialogTrigger";

const GlassAlertDialogOverlay = forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
    ComponentPropsWithRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Overlay
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
GlassAlertDialogOverlay.displayName = "GlassAlertDialogOverlay";

export type GlassAlertDialogContentProps = ComponentPropsWithRef<typeof AlertDialogPrimitive.Content>;
export const GlassAlertDialogContent = forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Content>,
    GlassAlertDialogContentProps
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Portal>
        <GlassAlertDialogOverlay />
        <AlertDialogPrimitive.Content
            ref={ref}
            className={cn(
                "glass-elevated fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-6",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                "focus:outline-none",
                className,
            )}
            {...props}
        />
    </AlertDialogPrimitive.Portal>
));
GlassAlertDialogContent.displayName = "GlassAlertDialogContent";

export type GlassAlertDialogTitleProps = ComponentPropsWithRef<typeof AlertDialogPrimitive.Title>;
export const GlassAlertDialogTitle = forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Title>,
    GlassAlertDialogTitleProps
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Title
        ref={ref}
        className={cn("text-lg font-semibold text-[var(--koori-text)]", className)}
        {...props}
    />
));
GlassAlertDialogTitle.displayName = "GlassAlertDialogTitle";

export type GlassAlertDialogDescriptionProps = ComponentPropsWithRef<typeof AlertDialogPrimitive.Description>;
export const GlassAlertDialogDescription = forwardRef<
    React.ElementRef<typeof AlertDialogPrimitive.Description>,
    GlassAlertDialogDescriptionProps
>(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Description
        ref={ref}
        className={cn("mt-2 text-sm text-[var(--koori-muted)]", className)}
        {...props}
    />
));
GlassAlertDialogDescription.displayName = "GlassAlertDialogDescription";

export type GlassAlertDialogActionProps = ComponentPropsWithRef<typeof AlertDialogPrimitive.Action>;
export const GlassAlertDialogAction = AlertDialogPrimitive.Action;
GlassAlertDialogAction.displayName = "GlassAlertDialogAction";

export type GlassAlertDialogCancelProps = ComponentPropsWithRef<typeof AlertDialogPrimitive.Cancel>;
export const GlassAlertDialogCancel = AlertDialogPrimitive.Cancel;
GlassAlertDialogCancel.displayName = "GlassAlertDialogCancel";
