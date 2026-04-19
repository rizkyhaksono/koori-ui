"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { cn } from "../../utils/cn";

export type GlassCommandProps = ComponentPropsWithRef<typeof CommandPrimitive>;

export const GlassCommand = forwardRef<
    React.ElementRef<typeof CommandPrimitive>,
    GlassCommandProps
>(({ className, ...props }, ref) => (
    <CommandPrimitive
        ref={ref}
        className={cn(
            "glass-elevated flex h-full w-full flex-col overflow-hidden rounded-[var(--koori-radius-lg)]",
            "text-[var(--koori-text)]",
            className,
        )}
        {...props}
    />
));
GlassCommand.displayName = "GlassCommand";

export type GlassCommandInputProps = ComponentPropsWithRef<typeof CommandPrimitive.Input>;

export const GlassCommandInput = forwardRef<
    React.ElementRef<typeof CommandPrimitive.Input>,
    GlassCommandInputProps
>(({ className, ...props }, ref) => (
    <div className="flex items-center gap-2 border-b border-[var(--koori-border)] px-3" cmdk-input-wrapper="">
        <Search className="h-4 w-4 shrink-0 text-[var(--koori-muted)]" />
        <CommandPrimitive.Input
            ref={ref}
            className={cn(
                "flex h-11 w-full bg-transparent py-3 text-sm outline-none",
                "placeholder:text-[var(--koori-muted)]",
                "disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            {...props}
        />
    </div>
));
GlassCommandInput.displayName = "GlassCommandInput";

export type GlassCommandListProps = ComponentPropsWithRef<typeof CommandPrimitive.List>;

export const GlassCommandList = forwardRef<
    React.ElementRef<typeof CommandPrimitive.List>,
    GlassCommandListProps
>(({ className, ...props }, ref) => (
    <CommandPrimitive.List
        ref={ref}
        className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden p-1", className)}
        {...props}
    />
));
GlassCommandList.displayName = "GlassCommandList";

export type GlassCommandEmptyProps = ComponentPropsWithRef<typeof CommandPrimitive.Empty>;

export const GlassCommandEmpty = forwardRef<
    React.ElementRef<typeof CommandPrimitive.Empty>,
    GlassCommandEmptyProps
>((props, ref) => (
    <CommandPrimitive.Empty
        ref={ref}
        className="py-6 text-center text-sm text-[var(--koori-muted)]"
        {...props}
    />
));
GlassCommandEmpty.displayName = "GlassCommandEmpty";

export type GlassCommandGroupProps = ComponentPropsWithRef<typeof CommandPrimitive.Group>;

export const GlassCommandGroup = forwardRef<
    React.ElementRef<typeof CommandPrimitive.Group>,
    GlassCommandGroupProps
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Group
        ref={ref}
        className={cn(
            "overflow-hidden p-1 text-[var(--koori-text)]",
            "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-[var(--koori-muted)]",
            className,
        )}
        {...props}
    />
));
GlassCommandGroup.displayName = "GlassCommandGroup";

export type GlassCommandItemProps = ComponentPropsWithRef<typeof CommandPrimitive.Item>;

export const GlassCommandItem = forwardRef<
    React.ElementRef<typeof CommandPrimitive.Item>,
    GlassCommandItemProps
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex cursor-pointer select-none items-center gap-2 rounded-[var(--koori-radius-sm)] px-2 py-1.5 text-sm",
            "text-[var(--koori-text)] outline-none",
            "data-[selected=true]:bg-white/10",
            "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
            className,
        )}
        {...props}
    />
));
GlassCommandItem.displayName = "GlassCommandItem";

export type GlassCommandSeparatorProps = ComponentPropsWithRef<typeof CommandPrimitive.Separator>;

export const GlassCommandSeparator = forwardRef<
    React.ElementRef<typeof CommandPrimitive.Separator>,
    GlassCommandSeparatorProps
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Separator
        ref={ref}
        className={cn("-mx-1 h-px bg-[var(--koori-border)]", className)}
        {...props}
    />
));
GlassCommandSeparator.displayName = "GlassCommandSeparator";

export function GlassCommandShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn("ml-auto text-xs tracking-widest text-[var(--koori-muted)]", className)}
            {...props}
        />
    );
}
GlassCommandShortcut.displayName = "GlassCommandShortcut";
