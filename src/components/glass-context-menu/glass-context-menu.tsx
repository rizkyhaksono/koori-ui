import { forwardRef, type ComponentPropsWithRef } from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "../../utils/cn";

export type GlassContextMenuProps = ComponentPropsWithRef<typeof ContextMenuPrimitive.Root>;
export const GlassContextMenu = ContextMenuPrimitive.Root;
GlassContextMenu.displayName = "GlassContextMenu";

export type GlassContextMenuTriggerProps = ComponentPropsWithRef<typeof ContextMenuPrimitive.Trigger>;
export const GlassContextMenuTrigger = ContextMenuPrimitive.Trigger;
GlassContextMenuTrigger.displayName = "GlassContextMenuTrigger";

export type GlassContextMenuContentProps = ComponentPropsWithRef<typeof ContextMenuPrimitive.Content>;
export const GlassContextMenuContent = forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Content>,
    GlassContextMenuContentProps
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
            ref={ref}
            className={cn(
                "glass-elevated z-50 min-w-[160px] overflow-hidden rounded-[var(--koori-radius-lg)] p-1",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                className,
            )}
            {...props}
        />
    </ContextMenuPrimitive.Portal>
));
GlassContextMenuContent.displayName = "GlassContextMenuContent";

export type GlassContextMenuItemProps = ComponentPropsWithRef<typeof ContextMenuPrimitive.Item>;
export const GlassContextMenuItem = forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Item>,
    GlassContextMenuItemProps
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex cursor-pointer select-none items-center gap-2 rounded-[var(--koori-radius-sm)] px-2 py-1.5 text-sm",
            "text-[var(--koori-text)] outline-none transition-colors duration-150",
            "hover:bg-white/10 focus:bg-white/10",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className,
        )}
        {...props}
    />
));
GlassContextMenuItem.displayName = "GlassContextMenuItem";

export type GlassContextMenuSeparatorProps = ComponentPropsWithRef<typeof ContextMenuPrimitive.Separator>;
export const GlassContextMenuSeparator = forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Separator>,
    GlassContextMenuSeparatorProps
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Separator
        ref={ref}
        className={cn("my-1 h-px bg-[var(--koori-border)]", className)}
        {...props}
    />
));
GlassContextMenuSeparator.displayName = "GlassContextMenuSeparator";

export type GlassContextMenuLabelProps = ComponentPropsWithRef<typeof ContextMenuPrimitive.Label>;
export const GlassContextMenuLabel = forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Label>,
    GlassContextMenuLabelProps
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Label
        ref={ref}
        className={cn("px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]", className)}
        {...props}
    />
));
GlassContextMenuLabel.displayName = "GlassContextMenuLabel";
