import { source } from "@/app/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Preview, PreviewColumn, PreviewGrid } from "@/app/components/preview";
import { ButtonDemo, BadgeDemo, TypographyDemo } from "@/app/components/examples/general";
import { PanelDemo, CardDemo, SeparatorDemo } from "@/app/components/examples/layout-examples";
import { InputDemo, TextareaDemo, CheckboxDemo, SwitchDemo, RadioDemo, SelectDemo, SliderDemo } from "@/app/components/examples/form";
import { AlertDemo, ProgressDemo, SkeletonDemo, DialogDemo, TooltipDemo, PopoverDemo, ToastDemo } from "@/app/components/examples/feedback";
import { TabsDemo, BreadcrumbDemo, DropdownMenuDemo } from "@/app/components/examples/navigation";
import { AvatarDemo, TableDemo, StatCardDemo, LineChartDemo } from "@/app/components/examples/data-display";
import { AccordionDemo, CollapsibleDemo } from "@/app/components/examples/disclosure";
import { AlertDialogDemo, HoverCardDemo, ContextMenuDemo, DrawerDemo } from "@/app/components/examples/overlay";
import { ToggleDemo, ToggleGroupDemo, LabelDemo, CalendarDemo, InputOTPDemo } from "@/app/components/examples/advanced-form";
import { NavigationMenuDemo, MenubarDemo } from "@/app/components/examples/advanced-nav";
import { CarouselDemo, AspectRatioDemo, ScrollAreaDemo } from "@/app/components/examples/media";
import { PaginationDemo, SpinnerDemo, EmptyDemo, TimelineDemo, CommandDemo } from "@/app/components/examples/utility";

const customComponents = {
  Preview, PreviewColumn, PreviewGrid,
  ButtonDemo, BadgeDemo, TypographyDemo,
  PanelDemo, CardDemo, SeparatorDemo,
  InputDemo, TextareaDemo, CheckboxDemo, SwitchDemo, RadioDemo, SelectDemo, SliderDemo,
  AlertDemo, ProgressDemo, SkeletonDemo, DialogDemo, TooltipDemo, PopoverDemo, ToastDemo,
  TabsDemo, BreadcrumbDemo, DropdownMenuDemo,
  AvatarDemo, TableDemo, StatCardDemo, LineChartDemo,
  AccordionDemo, CollapsibleDemo,
  AlertDialogDemo, HoverCardDemo, ContextMenuDemo, DrawerDemo,
  ToggleDemo, ToggleGroupDemo, LabelDemo, CalendarDemo, InputOTPDemo,
  NavigationMenuDemo, MenubarDemo,
  CarouselDemo, AspectRatioDemo, ScrollAreaDemo,
  PaginationDemo, SpinnerDemo, EmptyDemo, TimelineDemo, CommandDemo,
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents, ...customComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  return {
    title: `${page.data.title} — Koori UI`,
    description: page.data.description,
  };
}
