import { forwardRef, type ComponentPropsWithRef } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "../../utils/cn";

/* ---------- Root ---------- */

export type GlassDropdownMenuProps = ComponentPropsWithRef<typeof DropdownMenuPrimitive.Root>;
export const GlassDropdownMenu = DropdownMenuPrimitive.Root;
GlassDropdownMenu.displayName = "GlassDropdownMenu";

/* ---------- Trigger ---------- */

export type GlassDropdownMenuTriggerProps = ComponentPropsWithRef<typeof DropdownMenuPrimitive.Trigger>;
export const GlassDropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
GlassDropdownMenuTrigger.displayName = "GlassDropdownMenuTrigger";

/* ---------- Content ---------- */

export type GlassDropdownMenuContentProps = ComponentPropsWithRef<typeof DropdownMenuPrimitive.Content>;

export const GlassDropdownMenuContent = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Content>,
    GlassDropdownMenuContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                "glass-elevated z-50 min-w-[160px] overflow-hidden rounded-[var(--koori-radius-lg)] p-1",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                "data-[side=bottom]:slide-in-from-top-2",
                "data-[side=top]:slide-in-from-bottom-2",
                className,
            )}
            {...props}
        />
    </DropdownMenuPrimitive.Portal>
));
GlassDropdownMenuContent.displayName = "GlassDropdownMenuContent";

/* ---------- Item ---------- */

export type GlassDropdownMenuItemProps = ComponentPropsWithRef<typeof DropdownMenuPrimitive.Item>;

export const GlassDropdownMenuItem = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Item>,
    GlassDropdownMenuItemProps
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
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
GlassDropdownMenuItem.displayName = "GlassDropdownMenuItem";

/* ---------- Separator ---------- */

export type GlassDropdownMenuSeparatorProps = ComponentPropsWithRef<typeof DropdownMenuPrimitive.Separator>;

export const GlassDropdownMenuSeparator = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
    GlassDropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
        ref={ref}
        className={cn("my-1 h-px bg-[var(--koori-border)]", className)}
        {...props}
    />
));
GlassDropdownMenuSeparator.displayName = "GlassDropdownMenuSeparator";

/* ---------- Label ---------- */

export type GlassDropdownMenuLabelProps = ComponentPropsWithRef<typeof DropdownMenuPrimitive.Label>;

export const GlassDropdownMenuLabel = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Label>,
    GlassDropdownMenuLabelProps
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
        ref={ref}
        className={cn(
            "px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]",
            className,
        )}
        {...props}
    />
));
GlassDropdownMenuLabel.displayName = "GlassDropdownMenuLabel";
