import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import type { ComponentPropsWithRef } from "react";

export type GlassAspectRatioProps = ComponentPropsWithRef<typeof AspectRatioPrimitive.Root>;

export const GlassAspectRatio = AspectRatioPrimitive.Root;
GlassAspectRatio.displayName = "GlassAspectRatio";
