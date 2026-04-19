import { forwardRef, type ComponentPropsWithRef } from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "../../utils/cn";

export type GlassCollapsibleProps = ComponentPropsWithRef<typeof CollapsiblePrimitive.Root>;
export const GlassCollapsible = CollapsiblePrimitive.Root;
GlassCollapsible.displayName = "GlassCollapsible";

export type GlassCollapsibleTriggerProps = ComponentPropsWithRef<typeof CollapsiblePrimitive.Trigger>;
export const GlassCollapsibleTrigger = CollapsiblePrimitive.Trigger;
GlassCollapsibleTrigger.displayName = "GlassCollapsibleTrigger";

export type GlassCollapsibleContentProps = ComponentPropsWithRef<typeof CollapsiblePrimitive.Content>;
export const GlassCollapsibleContent = forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive.Content>,
    GlassCollapsibleContentProps
>(({ className, ...props }, ref) => (
    <CollapsiblePrimitive.Content
        ref={ref}
        className={cn(
            "overflow-hidden",
            "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
            className,
        )}
        {...props}
    />
));
GlassCollapsibleContent.displayName = "GlassCollapsibleContent";
