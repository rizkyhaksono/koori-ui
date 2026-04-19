import { forwardRef, type ComponentPropsWithRef } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";

export type GlassAccordionProps = ComponentPropsWithRef<typeof AccordionPrimitive.Root>;
export const GlassAccordion = AccordionPrimitive.Root;
GlassAccordion.displayName = "GlassAccordion";

export type GlassAccordionItemProps = ComponentPropsWithRef<typeof AccordionPrimitive.Item>;
export const GlassAccordionItem = forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    GlassAccordionItemProps
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("border-b border-[var(--koori-border)]", className)}
        {...props}
    />
));
GlassAccordionItem.displayName = "GlassAccordionItem";

export type GlassAccordionTriggerProps = ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>;
export const GlassAccordionTrigger = forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    GlassAccordionTriggerProps
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center justify-between py-4 text-sm font-medium",
                "text-[var(--koori-text)] hover:text-[var(--koori-primary)]",
                "transition-colors duration-200 outline-none",
                "[&[data-state=open]>svg]:rotate-180",
                className,
            )}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-[var(--koori-muted)]" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
GlassAccordionTrigger.displayName = "GlassAccordionTrigger";

export type GlassAccordionContentProps = ComponentPropsWithRef<typeof AccordionPrimitive.Content>;
export const GlassAccordionContent = forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    GlassAccordionContentProps
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={cn(
            "overflow-hidden text-sm text-[var(--koori-muted)]",
            "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
            className,
        )}
        {...props}
    >
        <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
));
GlassAccordionContent.displayName = "GlassAccordionContent";
