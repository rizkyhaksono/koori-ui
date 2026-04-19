"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "../../utils/cn";

export type GlassDrawerProps = ComponentPropsWithRef<typeof DrawerPrimitive.Root>;
export const GlassDrawer = ({ shouldScaleBackground = true, ...props }: GlassDrawerProps) => (
    <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
GlassDrawer.displayName = "GlassDrawer";

export const GlassDrawerTrigger = DrawerPrimitive.Trigger;
GlassDrawerTrigger.displayName = "GlassDrawerTrigger";
export type GlassDrawerTriggerProps = ComponentPropsWithRef<typeof DrawerPrimitive.Trigger>;

export const GlassDrawerPortal = DrawerPrimitive.Portal;
export const GlassDrawerClose = DrawerPrimitive.Close;
GlassDrawerClose.displayName = "GlassDrawerClose";
export type GlassDrawerCloseProps = ComponentPropsWithRef<typeof DrawerPrimitive.Close>;

const GlassDrawerOverlay = forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Overlay>,
    ComponentPropsWithRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Overlay
        ref={ref}
        className={cn("fixed inset-0 z-50 bg-black/40 backdrop-blur-sm", className)}
        {...props}
    />
));
GlassDrawerOverlay.displayName = "GlassDrawerOverlay";

export type GlassDrawerContentProps = ComponentPropsWithRef<typeof DrawerPrimitive.Content>;
export const GlassDrawerContent = forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Content>,
    GlassDrawerContentProps
>(({ className, children, ...props }, ref) => (
    <GlassDrawerPortal>
        <GlassDrawerOverlay />
        <DrawerPrimitive.Content
            ref={ref}
            className={cn(
                "glass-elevated fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[var(--koori-radius-xl)] border-t border-[var(--koori-glass-border)]",
                className,
            )}
            {...props}
        >
            <div className="mx-auto mt-4 h-1.5 w-[60px] rounded-full bg-[var(--koori-muted)]/40" />
            {children}
        </DrawerPrimitive.Content>
    </GlassDrawerPortal>
));
GlassDrawerContent.displayName = "GlassDrawerContent";

export interface GlassDrawerHeaderProps extends ComponentPropsWithRef<"div"> {}
export const GlassDrawerHeader = ({ className, ...props }: GlassDrawerHeaderProps) => (
    <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
GlassDrawerHeader.displayName = "GlassDrawerHeader";

export interface GlassDrawerFooterProps extends ComponentPropsWithRef<"div"> {}
export const GlassDrawerFooter = ({ className, ...props }: GlassDrawerFooterProps) => (
    <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
GlassDrawerFooter.displayName = "GlassDrawerFooter";

export type GlassDrawerTitleProps = ComponentPropsWithRef<typeof DrawerPrimitive.Title>;
export const GlassDrawerTitle = forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Title>,
    GlassDrawerTitleProps
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
        ref={ref}
        className={cn("text-lg font-semibold text-[var(--koori-text)]", className)}
        {...props}
    />
));
GlassDrawerTitle.displayName = "GlassDrawerTitle";

export type GlassDrawerDescriptionProps = ComponentPropsWithRef<typeof DrawerPrimitive.Description>;
export const GlassDrawerDescription = forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Description>,
    GlassDrawerDescriptionProps
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Description
        ref={ref}
        className={cn("text-sm text-[var(--koori-muted)]", className)}
        {...props}
    />
));
GlassDrawerDescription.displayName = "GlassDrawerDescription";
