"use client";

import { forwardRef, createContext, useContext, useState, useEffect, useCallback, type ComponentPropsWithRef, type ReactNode } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../utils/cn";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type GlassCarouselContextProps = {
    carouselRef: UseEmblaCarouselType[0];
    api: CarouselApi;
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
    orientation: "horizontal" | "vertical";
    opts?: CarouselOptions;
};

const CarouselContext = createContext<GlassCarouselContextProps | null>(null);

function useCarousel() {
    const ctx = useContext(CarouselContext);
    if (!ctx) throw new Error("useCarousel must be used within a <GlassCarousel />");
    return ctx;
}

export interface GlassCarouselProps extends ComponentPropsWithRef<"div"> {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
    children?: ReactNode;
}

export const GlassCarousel = forwardRef<HTMLDivElement, GlassCarouselProps>(
    ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
        const [carouselRef, api] = useEmblaCarousel(
            { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
            plugins,
        );
        const [canScrollPrev, setCanScrollPrev] = useState(false);
        const [canScrollNext, setCanScrollNext] = useState(false);

        const onSelect = useCallback((api: CarouselApi) => {
            if (!api) return;
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        }, []);

        const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
        const scrollNext = useCallback(() => api?.scrollNext(), [api]);

        useEffect(() => {
            if (!api || !setApi) return;
            setApi(api);
        }, [api, setApi]);

        useEffect(() => {
            if (!api) return;
            onSelect(api);
            api.on("reInit", onSelect);
            api.on("select", onSelect);
            return () => {
                api?.off("select", onSelect);
            };
        }, [api, onSelect]);

        return (
            <CarouselContext.Provider
                value={{ carouselRef, api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}
            >
                <div
                    ref={ref}
                    className={cn("relative", className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        );
    },
);
GlassCarousel.displayName = "GlassCarousel";

export const GlassCarouselContent = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(
    ({ className, ...props }, ref) => {
        const { carouselRef, orientation } = useCarousel();
        return (
            <div ref={carouselRef} className="overflow-hidden">
                <div
                    ref={ref}
                    className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
                    {...props}
                />
            </div>
        );
    },
);
GlassCarouselContent.displayName = "GlassCarouselContent";

export const GlassCarouselItem = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>(
    ({ className, ...props }, ref) => {
        const { orientation } = useCarousel();
        return (
            <div
                ref={ref}
                role="group"
                aria-roledescription="slide"
                className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
                {...props}
            />
        );
    },
);
GlassCarouselItem.displayName = "GlassCarouselItem";

export const GlassCarouselPrevious = forwardRef<HTMLButtonElement, ComponentPropsWithRef<"button">>(
    ({ className, ...props }, ref) => {
        const { orientation, scrollPrev, canScrollPrev } = useCarousel();
        return (
            <button
                ref={ref}
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className={cn(
                    "glass-subtle absolute z-10 h-8 w-8 inline-flex items-center justify-center rounded-full",
                    "text-[var(--koori-text)] hover:bg-white/15 transition-colors outline-none",
                    "disabled:cursor-not-allowed disabled:opacity-40",
                    orientation === "horizontal"
                        ? "-left-3 top-1/2 -translate-y-1/2"
                        : "-top-3 left-1/2 -translate-x-1/2 rotate-90",
                    className,
                )}
                {...props}
            >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
            </button>
        );
    },
);
GlassCarouselPrevious.displayName = "GlassCarouselPrevious";

export const GlassCarouselNext = forwardRef<HTMLButtonElement, ComponentPropsWithRef<"button">>(
    ({ className, ...props }, ref) => {
        const { orientation, scrollNext, canScrollNext } = useCarousel();
        return (
            <button
                ref={ref}
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={cn(
                    "glass-subtle absolute z-10 h-8 w-8 inline-flex items-center justify-center rounded-full",
                    "text-[var(--koori-text)] hover:bg-white/15 transition-colors outline-none",
                    "disabled:cursor-not-allowed disabled:opacity-40",
                    orientation === "horizontal"
                        ? "-right-3 top-1/2 -translate-y-1/2"
                        : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90",
                    className,
                )}
                {...props}
            >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
            </button>
        );
    },
);
GlassCarouselNext.displayName = "GlassCarouselNext";

export type { CarouselApi };
