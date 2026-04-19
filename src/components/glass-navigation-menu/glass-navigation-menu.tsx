import { forwardRef, type ComponentPropsWithRef } from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";

export type GlassNavigationMenuProps = ComponentPropsWithRef<typeof NavigationMenuPrimitive.Root>;
export const GlassNavigationMenu = forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    GlassNavigationMenuProps
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
        ref={ref}
        className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
        {...props}
    >
        {children}
        <GlassNavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
));
GlassNavigationMenu.displayName = "GlassNavigationMenu";

export type GlassNavigationMenuListProps = ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>;
export const GlassNavigationMenuList = forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.List>,
    GlassNavigationMenuListProps
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={cn("group flex flex-1 list-none items-center justify-center gap-1", className)}
        {...props}
    />
));
GlassNavigationMenuList.displayName = "GlassNavigationMenuList";

export const GlassNavigationMenuItem = NavigationMenuPrimitive.Item;
GlassNavigationMenuItem.displayName = "GlassNavigationMenuItem";
export type GlassNavigationMenuItemProps = ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>;

export type GlassNavigationMenuTriggerProps = ComponentPropsWithRef<typeof NavigationMenuPrimitive.Trigger>;
export const GlassNavigationMenuTrigger = forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    GlassNavigationMenuTriggerProps
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(
            "group inline-flex h-9 w-max items-center justify-center gap-1 rounded-[var(--koori-radius-md)] px-3 py-2 text-sm font-medium",
            "text-[var(--koori-text)] outline-none transition-colors",
            "hover:bg-white/10",
            "data-[state=open]:bg-white/10",
            "disabled:pointer-events-none disabled:opacity-50",
            className,
        )}
        {...props}
    >
        {children}
        <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
    </NavigationMenuPrimitive.Trigger>
));
GlassNavigationMenuTrigger.displayName = "GlassNavigationMenuTrigger";

export type GlassNavigationMenuContentProps = ComponentPropsWithRef<typeof NavigationMenuPrimitive.Content>;
export const GlassNavigationMenuContent = forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Content>,
    GlassNavigationMenuContentProps
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
            "left-0 top-0 w-full md:absolute md:w-auto",
            "data-[motion=from-end]:animate-in data-[motion=from-end]:slide-in-from-right-52",
            "data-[motion=from-start]:animate-in data-[motion=from-start]:slide-in-from-left-52",
            "data-[motion=to-end]:animate-out data-[motion=to-end]:slide-out-to-right-52",
            "data-[motion=to-start]:animate-out data-[motion=to-start]:slide-out-to-left-52",
            className,
        )}
        {...props}
    />
));
GlassNavigationMenuContent.displayName = "GlassNavigationMenuContent";

export const GlassNavigationMenuLink = NavigationMenuPrimitive.Link;
GlassNavigationMenuLink.displayName = "GlassNavigationMenuLink";
export type GlassNavigationMenuLinkProps = ComponentPropsWithRef<typeof NavigationMenuPrimitive.Link>;

const GlassNavigationMenuViewport = forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    ComponentPropsWithRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <div className="absolute left-0 top-full flex justify-center">
        <NavigationMenuPrimitive.Viewport
            ref={ref}
            className={cn(
                "glass-elevated relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-[var(--koori-radius-lg)] md:w-[var(--radix-navigation-menu-viewport-width)]",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90",
                className,
            )}
            {...props}
        />
    </div>
));
GlassNavigationMenuViewport.displayName = "GlassNavigationMenuViewport";
