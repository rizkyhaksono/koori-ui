import { forwardRef, type ComponentPropsWithRef } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../utils/cn";

export type GlassAvatarProps = ComponentPropsWithRef<typeof AvatarPrimitive.Root>;

/**
 * GlassAvatar — Accessible avatar powered by Radix UI with glassmorphism styling.
 */
export const GlassAvatar = forwardRef<HTMLSpanElement, GlassAvatarProps>(
    ({ className, ...props }, ref) => (
        <AvatarPrimitive.Root
            ref={ref}
            className={cn(
                "glass relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
                className,
            )}
            {...props}
        />
    ),
);
GlassAvatar.displayName = "GlassAvatar";

export type GlassAvatarImageProps = ComponentPropsWithRef<typeof AvatarPrimitive.Image>;

export const GlassAvatarImage = forwardRef<HTMLImageElement, GlassAvatarImageProps>(
    ({ className, ...props }, ref) => (
        <AvatarPrimitive.Image
            ref={ref}
            className={cn("aspect-square h-full w-full", className)}
            {...props}
        />
    ),
);
GlassAvatarImage.displayName = "GlassAvatarImage";

export type GlassAvatarFallbackProps = ComponentPropsWithRef<typeof AvatarPrimitive.Fallback>;

export const GlassAvatarFallback = forwardRef<HTMLSpanElement, GlassAvatarFallbackProps>(
    ({ className, ...props }, ref) => (
        <AvatarPrimitive.Fallback
            ref={ref}
            className={cn(
                "flex h-full w-full items-center justify-center rounded-full bg-white/[0.04] text-[var(--koori-text)]",
                className,
            )}
            {...props}
        />
    ),
);
GlassAvatarFallback.displayName = "GlassAvatarFallback";
