import { forwardRef, type ComponentPropsWithRef } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "../../utils/cn";

/* ---------- Root ---------- */

export type GlassSelectProps = ComponentPropsWithRef<typeof SelectPrimitive.Root>;
export const GlassSelect = SelectPrimitive.Root;
GlassSelect.displayName = "GlassSelect";

/* ---------- Trigger ---------- */

export type GlassSelectTriggerProps = ComponentPropsWithRef<typeof SelectPrimitive.Trigger>;

export const GlassSelectTrigger = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    GlassSelectTriggerProps
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
            "glass-subtle flex h-9 w-full items-center justify-between gap-2 rounded-[var(--koori-radius-md)] px-3 py-2 text-sm",
            "border border-[var(--koori-glass-border)] outline-none",
            "text-[var(--koori-text)] placeholder:text-[var(--koori-muted)]",
            "focus:ring-2 focus:ring-[var(--koori-primary)]/30 focus:border-[var(--koori-primary)]/50",
            "data-[placeholder]:text-[var(--koori-muted)]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "transition-all duration-200",
            className,
        )}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <ChevronDown className="h-4 w-4 text-[var(--koori-muted)] shrink-0" />
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
));
GlassSelectTrigger.displayName = "GlassSelectTrigger";

/* ---------- Content ---------- */

export type GlassSelectContentProps = ComponentPropsWithRef<typeof SelectPrimitive.Content>;

export const GlassSelectContent = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Content>,
    GlassSelectContentProps
>(({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            position={position}
            className={cn(
                "glass-elevated z-50 min-w-[8rem] overflow-hidden rounded-[var(--koori-radius-lg)] p-1",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
                className,
            )}
            {...props}
        >
            <SelectPrimitive.Viewport
                className={cn(
                    "p-1",
                    position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
                )}
            >
                {children}
            </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
));
GlassSelectContent.displayName = "GlassSelectContent";

/* ---------- Item ---------- */

export type GlassSelectItemProps = ComponentPropsWithRef<typeof SelectPrimitive.Item>;

export const GlassSelectItem = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    GlassSelectItemProps
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex w-full cursor-pointer select-none items-center rounded-[var(--koori-radius-sm)] py-1.5 pl-8 pr-2 text-sm",
            "text-[var(--koori-text)] outline-none",
            "hover:bg-white/10 focus:bg-white/10",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            "transition-colors duration-150",
            className,
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <SelectPrimitive.ItemIndicator>
                <Check className="h-3.5 w-3.5 text-[var(--koori-primary)]" />
            </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
));
GlassSelectItem.displayName = "GlassSelectItem";

/* ---------- Group ---------- */

export type GlassSelectGroupProps = ComponentPropsWithRef<typeof SelectPrimitive.Group>;
export const GlassSelectGroup = SelectPrimitive.Group;
GlassSelectGroup.displayName = "GlassSelectGroup";

/* ---------- Label ---------- */

export type GlassSelectLabelProps = ComponentPropsWithRef<typeof SelectPrimitive.Label>;

export const GlassSelectLabel = forwardRef<
    React.ElementRef<typeof SelectPrimitive.Label>,
    GlassSelectLabelProps
>(({ className, ...props }, ref) => (
    <SelectPrimitive.Label
        ref={ref}
        className={cn(
            "px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]",
            className,
        )}
        {...props}
    />
));
GlassSelectLabel.displayName = "GlassSelectLabel";

/* ---------- Value ---------- */

export type GlassSelectValueProps = ComponentPropsWithRef<typeof SelectPrimitive.Value>;
export const GlassSelectValue = SelectPrimitive.Value;
GlassSelectValue.displayName = "GlassSelectValue";
