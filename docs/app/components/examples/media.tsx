"use client";

import {
  GlassCarousel, GlassCarouselContent, GlassCarouselItem, GlassCarouselPrevious, GlassCarouselNext,
  GlassAspectRatio,
  GlassScrollArea,
  GlassPanel,
} from "koori-ui";

export function CarouselDemo() {
  return (
    <div className="w-full max-w-sm px-8">
      <GlassCarousel>
        <GlassCarouselContent>
          {Array.from({ length: 5 }).map((_, i) => (
            <GlassCarouselItem key={i}>
              <GlassPanel variant="elevated" className="flex h-32 items-center justify-center">
                <span className="text-lg font-semibold text-[var(--koori-text)]">Slide {i + 1}</span>
              </GlassPanel>
            </GlassCarouselItem>
          ))}
        </GlassCarouselContent>
        <GlassCarouselPrevious />
        <GlassCarouselNext />
      </GlassCarousel>
    </div>
  );
}

export function AspectRatioDemo() {
  return (
    <div className="w-full max-w-sm">
      <GlassAspectRatio ratio={16 / 9}>
        <div className="glass-subtle flex h-full w-full items-center justify-center rounded-[var(--koori-radius-lg)] text-sm text-[var(--koori-muted)]">
          16:9
        </div>
      </GlassAspectRatio>
    </div>
  );
}

export function ScrollAreaDemo() {
  return (
    <GlassScrollArea className="glass-subtle h-40 w-64 rounded-[var(--koori-radius-md)] p-3">
      <div className="space-y-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="text-sm text-[var(--koori-text)]">
            Item {i + 1}
          </div>
        ))}
      </div>
    </GlassScrollArea>
  );
}
