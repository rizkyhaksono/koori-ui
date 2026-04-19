import { forwardRef, type ComponentPropsWithRef } from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "../../utils/cn";

export type GlassMenubarProps = ComponentPropsWithRef<typeof MenubarPrimitive.Root>;
export const GlassMenubar = forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Root>,
    GlassMenubarProps
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Root
        ref={ref}
        className={cn("glass-subtle flex h-10 items-center gap-1 rounded-[var(--koori-radius-md)] px-2", className)}
        {...props}
    />
));
GlassMenubar.displayName = "GlassMenubar";

export const GlassMenubarMenu = MenubarPrimitive.Menu;
GlassMenubarMenu.displayName = "GlassMenubarMenu";
export type GlassMenubarMenuProps = ComponentPropsWithRef<typeof MenubarPrimitive.Menu>;

export type GlassMenubarTriggerProps = ComponentPropsWithRef<typeof MenubarPrimitive.Trigger>;
export const GlassMenubarTrigger = forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Trigger>,
    GlassMenubarTriggerProps
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Trigger
        ref={ref}
        className={cn(
            "flex cursor-pointer select-none items-center rounded-[var(--koori-radius-sm)] px-3 py-1 text-sm font-medium",
            "text-[var(--koori-text)] outline-none",
            "hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10",
            className,
        )}
        {...props}
    />
));
GlassMenubarTrigger.displayName = "GlassMenubarTrigger";

export type GlassMenubarContentProps = ComponentPropsWithRef<typeof MenubarPrimitive.Content>;
export const GlassMenubarContent = forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Content>,
    GlassMenubarContentProps
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
    <MenubarPrimitive.Portal>
        <MenubarPrimitive.Content
            ref={ref}
            align={align}
            alignOffset={alignOffset}
            sideOffset={sideOffset}
            className={cn(
                "glass-elevated z-50 min-w-[12rem] overflow-hidden rounded-[var(--koori-radius-lg)] p-1",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                className,
            )}
            {...props}
        />
    </MenubarPrimitive.Portal>
));
GlassMenubarContent.displayName = "GlassMenubarContent";

export type GlassMenubarItemProps = ComponentPropsWithRef<typeof MenubarPrimitive.Item>;
export const GlassMenubarItem = forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Item>,
    GlassMenubarItemProps
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Item
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
GlassMenubarItem.displayName = "GlassMenubarItem";

export type GlassMenubarSeparatorProps = ComponentPropsWithRef<typeof MenubarPrimitive.Separator>;
export const GlassMenubarSeparator = forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Separator>,
    GlassMenubarSeparatorProps
>(({ className, ...props }, ref) => (
    <MenubarPrimitive.Separator
        ref={ref}
        className={cn("my-1 h-px bg-[var(--koori-border)]", className)}
        {...props}
    />
));
GlassMenubarSeparator.displayName = "GlassMenubarSeparator";
