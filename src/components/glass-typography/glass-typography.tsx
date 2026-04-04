import { forwardRef, type ComponentPropsWithRef } from "react";
import { cn } from "../../utils/cn";

/* ---------- Headings ---------- */

export type GlassH1Props = ComponentPropsWithRef<"h1">;
export const GlassH1 = forwardRef<HTMLHeadingElement, GlassH1Props>(
    ({ className, ...props }, ref) => (
        <h1
            ref={ref}
            className={cn(
                "scroll-m-20 text-4xl font-extrabold tracking-tight text-[var(--koori-text)]",
                className,
            )}
            {...props}
        />
    ),
);
GlassH1.displayName = "GlassH1";

export type GlassH2Props = ComponentPropsWithRef<"h2">;
export const GlassH2 = forwardRef<HTMLHeadingElement, GlassH2Props>(
    ({ className, ...props }, ref) => (
        <h2
            ref={ref}
            className={cn(
                "scroll-m-20 text-3xl font-bold tracking-tight text-[var(--koori-text)]",
                className,
            )}
            {...props}
        />
    ),
);
GlassH2.displayName = "GlassH2";

export type GlassH3Props = ComponentPropsWithRef<"h3">;
export const GlassH3 = forwardRef<HTMLHeadingElement, GlassH3Props>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn(
                "scroll-m-20 text-2xl font-semibold tracking-tight text-[var(--koori-text)]",
                className,
            )}
            {...props}
        />
    ),
);
GlassH3.displayName = "GlassH3";

export type GlassH4Props = ComponentPropsWithRef<"h4">;
export const GlassH4 = forwardRef<HTMLHeadingElement, GlassH4Props>(
    ({ className, ...props }, ref) => (
        <h4
            ref={ref}
            className={cn(
                "scroll-m-20 text-xl font-semibold tracking-tight text-[var(--koori-text)]",
                className,
            )}
            {...props}
        />
    ),
);
GlassH4.displayName = "GlassH4";

/* ---------- Text ---------- */

export interface GlassTextProps extends ComponentPropsWithRef<"p"> {
    size?: "sm" | "md" | "lg";
    muted?: boolean;
}

export const GlassText = forwardRef<HTMLParagraphElement, GlassTextProps>(
    ({ className, size = "md", muted = false, ...props }, ref) => (
        <p
            ref={ref}
            className={cn(
                "leading-7",
                size === "sm" && "text-sm",
                size === "md" && "text-base",
                size === "lg" && "text-lg",
                muted ? "text-[var(--koori-muted)]" : "text-[var(--koori-text)]",
                className,
            )}
            {...props}
        />
    ),
);
GlassText.displayName = "GlassText";

/* ---------- Code ---------- */

export type GlassCodeProps = ComponentPropsWithRef<"code">;
export const GlassCode = forwardRef<HTMLElement, GlassCodeProps>(
    ({ className, ...props }, ref) => (
        <code
            ref={ref}
            className={cn(
                "glass-subtle rounded-[var(--koori-radius-sm)] px-1.5 py-0.5",
                "font-mono text-sm text-[var(--koori-primary)]",
                className,
            )}
            {...props}
        />
    ),
);
GlassCode.displayName = "GlassCode";

/* ---------- Link ---------- */

export type GlassLinkProps = ComponentPropsWithRef<"a">;
export const GlassLink = forwardRef<HTMLAnchorElement, GlassLinkProps>(
    ({ className, ...props }, ref) => (
        <a
            ref={ref}
            className={cn(
                "text-[var(--koori-primary)] underline-offset-4 hover:underline transition-colors",
                className,
            )}
            {...props}
        />
    ),
);
GlassLink.displayName = "GlassLink";

/* ---------- Blockquote ---------- */

export type GlassBlockquoteProps = ComponentPropsWithRef<"blockquote">;
export const GlassBlockquote = forwardRef<HTMLQuoteElement, GlassBlockquoteProps>(
    ({ className, ...props }, ref) => (
        <blockquote
            ref={ref}
            className={cn(
                "border-l-4 border-[var(--koori-primary)] pl-4 py-1",
                "text-[var(--koori-muted)] italic",
                className,
            )}
            {...props}
        />
    ),
);
GlassBlockquote.displayName = "GlassBlockquote";
