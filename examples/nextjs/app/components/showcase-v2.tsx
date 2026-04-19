"use client";

import { useState } from "react";
import {
    GlassAccordion, GlassAccordionItem, GlassAccordionTrigger, GlassAccordionContent,
    GlassAlertDialog, GlassAlertDialogTrigger, GlassAlertDialogContent, GlassAlertDialogTitle, GlassAlertDialogDescription, GlassAlertDialogAction, GlassAlertDialogCancel,
    GlassToggle, GlassToggleGroup, GlassToggleGroupItem,
    GlassLabel,
    GlassHoverCard, GlassHoverCardTrigger, GlassHoverCardContent,
    GlassScrollArea,
    GlassContextMenu, GlassContextMenuTrigger, GlassContextMenuContent, GlassContextMenuItem, GlassContextMenuSeparator,
    GlassCollapsible, GlassCollapsibleTrigger, GlassCollapsibleContent,
    GlassNavigationMenu, GlassNavigationMenuList, GlassNavigationMenuItem, GlassNavigationMenuTrigger, GlassNavigationMenuContent, GlassNavigationMenuLink,
    GlassMenubar, GlassMenubarMenu, GlassMenubarTrigger, GlassMenubarContent, GlassMenubarItem, GlassMenubarSeparator,
    GlassAspectRatio,
    GlassDrawer, GlassDrawerTrigger, GlassDrawerContent, GlassDrawerHeader, GlassDrawerTitle, GlassDrawerDescription, GlassDrawerFooter, GlassDrawerClose,
    GlassCalendar,
    GlassCommand, GlassCommandInput, GlassCommandList, GlassCommandEmpty, GlassCommandGroup, GlassCommandItem, GlassCommandShortcut,
    GlassCarousel, GlassCarouselContent, GlassCarouselItem, GlassCarouselPrevious, GlassCarouselNext,
    GlassInputOTP, GlassInputOTPGroup, GlassInputOTPSlot, GlassInputOTPSeparator,
    GlassPagination,
    GlassSpinner,
    GlassEmpty,
    GlassTimeline, GlassTimelineItem,
    GlassLineChart,
    GlassButton, GlassInput, GlassPanel, GlassBadge,
} from "koori-ui";
import { Bold, Italic, Underline, FileText, User, Settings, Mail, MessageSquare, PlusCircle, Inbox } from "lucide-react";

const lineChartData = [
    { name: "Mon", users: 400, revenue: 2400 },
    { name: "Tue", users: 300, revenue: 1398 },
    { name: "Wed", users: 800, revenue: 9800 },
    { name: "Thu", users: 508, revenue: 3908 },
    { name: "Fri", users: 480, revenue: 4800 },
    { name: "Sat", users: 280, revenue: 3800 },
    { name: "Sun", users: 430, revenue: 4300 },
];

export function ComponentsShowcaseV2() {
    const [page, setPage] = useState(1);
    return (
        <div className="space-y-1">
            <Section title="GlassAccordion" description="Collapsible FAQ-style sections built on Radix UI.">
                <GlassAccordion type="single" collapsible className="w-full max-w-lg">
                    <GlassAccordionItem value="item-1">
                        <GlassAccordionTrigger>Is it accessible?</GlassAccordionTrigger>
                        <GlassAccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</GlassAccordionContent>
                    </GlassAccordionItem>
                    <GlassAccordionItem value="item-2">
                        <GlassAccordionTrigger>Is it styled?</GlassAccordionTrigger>
                        <GlassAccordionContent>Yes. Glassmorphism styling with open/close animations.</GlassAccordionContent>
                    </GlassAccordionItem>
                    <GlassAccordionItem value="item-3">
                        <GlassAccordionTrigger>Is it animated?</GlassAccordionTrigger>
                        <GlassAccordionContent>Yes. Uses Radix data-state attributes for smooth transitions.</GlassAccordionContent>
                    </GlassAccordionItem>
                </GlassAccordion>
            </Section>

            <Section title="GlassAlertDialog" description="Confirmation dialogs for destructive actions.">
                <GlassAlertDialog>
                    <GlassAlertDialogTrigger asChild>
                        <GlassButton variant="primary">Delete Account</GlassButton>
                    </GlassAlertDialogTrigger>
                    <GlassAlertDialogContent>
                        <GlassAlertDialogTitle>Are you absolutely sure?</GlassAlertDialogTitle>
                        <GlassAlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account and remove your data.
                        </GlassAlertDialogDescription>
                        <div className="mt-6 flex justify-end gap-3">
                            <GlassAlertDialogCancel asChild><GlassButton>Cancel</GlassButton></GlassAlertDialogCancel>
                            <GlassAlertDialogAction asChild><GlassButton variant="primary">Confirm</GlassButton></GlassAlertDialogAction>
                        </div>
                    </GlassAlertDialogContent>
                </GlassAlertDialog>
            </Section>

            <Section title="GlassToggle & GlassToggleGroup" description="Pressable toggle buttons and grouped toolbars.">
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        <GlassToggle aria-label="Toggle bold"><Bold className="h-4 w-4" /></GlassToggle>
                        <GlassToggle aria-label="Toggle italic" defaultPressed><Italic className="h-4 w-4" /></GlassToggle>
                        <GlassToggle aria-label="Toggle underline"><Underline className="h-4 w-4" /></GlassToggle>
                    </div>
                    <GlassToggleGroup type="single" defaultValue="bold" variant="outline">
                        <GlassToggleGroupItem value="bold"><Bold className="h-4 w-4" /></GlassToggleGroupItem>
                        <GlassToggleGroupItem value="italic"><Italic className="h-4 w-4" /></GlassToggleGroupItem>
                        <GlassToggleGroupItem value="underline"><Underline className="h-4 w-4" /></GlassToggleGroupItem>
                    </GlassToggleGroup>
                </div>
            </Section>

            <Section title="GlassLabel" description="Accessible form label paired with inputs.">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <GlassLabel htmlFor="email-demo">Email address</GlassLabel>
                    <GlassInput type="email" id="email-demo" placeholder="you@example.com" />
                </div>
            </Section>

            <Section title="GlassHoverCard" description="Rich preview on hover.">
                <GlassHoverCard>
                    <GlassHoverCardTrigger asChild>
                        <GlassButton>@rizkyhaksono</GlassButton>
                    </GlassHoverCardTrigger>
                    <GlassHoverCardContent>
                        <div className="flex items-start gap-3">
                            <div className="glass-subtle h-10 w-10 rounded-full flex items-center justify-center">
                                <User className="h-5 w-5 text-[var(--koori-muted)]" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[var(--koori-text)]">Rizky Haksono</p>
                                <p className="text-xs text-[var(--koori-muted)]">Building Koori UI — a glassmorphism React component library.</p>
                            </div>
                        </div>
                    </GlassHoverCardContent>
                </GlassHoverCard>
            </Section>

            <Section title="GlassScrollArea" description="Glass-styled custom scrollbar.">
                <GlassScrollArea className="glass-subtle h-40 w-64 rounded-[var(--koori-radius-lg)] p-4">
                    <div className="space-y-2">
                        {Array.from({ length: 20 }, (_, i) => (
                            <div key={i} className="text-sm text-[var(--koori-text)]">Item {i + 1}</div>
                        ))}
                    </div>
                </GlassScrollArea>
            </Section>

            <Section title="GlassContextMenu" description="Right-click context menu.">
                <GlassContextMenu>
                    <GlassContextMenuTrigger className="glass-subtle flex h-32 w-64 items-center justify-center rounded-[var(--koori-radius-lg)] text-sm text-[var(--koori-muted)]">
                        Right-click here
                    </GlassContextMenuTrigger>
                    <GlassContextMenuContent>
                        <GlassContextMenuItem>Cut</GlassContextMenuItem>
                        <GlassContextMenuItem>Copy</GlassContextMenuItem>
                        <GlassContextMenuItem>Paste</GlassContextMenuItem>
                        <GlassContextMenuSeparator />
                        <GlassContextMenuItem className="text-[var(--koori-error)]">Delete</GlassContextMenuItem>
                    </GlassContextMenuContent>
                </GlassContextMenu>
            </Section>

            <Section title="GlassCollapsible" description="Simple single-section collapsible.">
                <GlassCollapsible className="w-full max-w-sm space-y-2">
                    <div className="flex items-center justify-between glass-subtle p-3 rounded-[var(--koori-radius-md)]">
                        <p className="text-sm font-semibold">Recent activity</p>
                        <GlassCollapsibleTrigger asChild>
                            <GlassButton size="sm">Toggle</GlassButton>
                        </GlassCollapsibleTrigger>
                    </div>
                    <GlassCollapsibleContent className="space-y-2">
                        <div className="glass-subtle p-3 rounded-[var(--koori-radius-md)] text-sm">Commit pushed 2h ago</div>
                        <div className="glass-subtle p-3 rounded-[var(--koori-radius-md)] text-sm">PR opened 4h ago</div>
                    </GlassCollapsibleContent>
                </GlassCollapsible>
            </Section>

            <Section title="GlassNavigationMenu" description="Top navigation with dropdown panels.">
                <GlassNavigationMenu>
                    <GlassNavigationMenuList>
                        <GlassNavigationMenuItem>
                            <GlassNavigationMenuTrigger>Products</GlassNavigationMenuTrigger>
                            <GlassNavigationMenuContent>
                                <div className="grid gap-2 p-4 w-[300px]">
                                    <GlassNavigationMenuLink className="text-sm hover:text-[var(--koori-primary)]">Dashboard</GlassNavigationMenuLink>
                                    <GlassNavigationMenuLink className="text-sm hover:text-[var(--koori-primary)]">Analytics</GlassNavigationMenuLink>
                                    <GlassNavigationMenuLink className="text-sm hover:text-[var(--koori-primary)]">Reports</GlassNavigationMenuLink>
                                </div>
                            </GlassNavigationMenuContent>
                        </GlassNavigationMenuItem>
                        <GlassNavigationMenuItem>
                            <GlassNavigationMenuTrigger>Resources</GlassNavigationMenuTrigger>
                            <GlassNavigationMenuContent>
                                <div className="grid gap-2 p-4 w-[300px]">
                                    <GlassNavigationMenuLink className="text-sm hover:text-[var(--koori-primary)]">Docs</GlassNavigationMenuLink>
                                    <GlassNavigationMenuLink className="text-sm hover:text-[var(--koori-primary)]">Blog</GlassNavigationMenuLink>
                                </div>
                            </GlassNavigationMenuContent>
                        </GlassNavigationMenuItem>
                    </GlassNavigationMenuList>
                </GlassNavigationMenu>
            </Section>

            <Section title="GlassMenubar" description="Application-style menu bar.">
                <GlassMenubar>
                    <GlassMenubarMenu>
                        <GlassMenubarTrigger>File</GlassMenubarTrigger>
                        <GlassMenubarContent>
                            <GlassMenubarItem>New File</GlassMenubarItem>
                            <GlassMenubarItem>Open...</GlassMenubarItem>
                            <GlassMenubarSeparator />
                            <GlassMenubarItem>Save</GlassMenubarItem>
                            <GlassMenubarItem>Save As...</GlassMenubarItem>
                        </GlassMenubarContent>
                    </GlassMenubarMenu>
                    <GlassMenubarMenu>
                        <GlassMenubarTrigger>Edit</GlassMenubarTrigger>
                        <GlassMenubarContent>
                            <GlassMenubarItem>Undo</GlassMenubarItem>
                            <GlassMenubarItem>Redo</GlassMenubarItem>
                        </GlassMenubarContent>
                    </GlassMenubarMenu>
                    <GlassMenubarMenu>
                        <GlassMenubarTrigger>View</GlassMenubarTrigger>
                        <GlassMenubarContent>
                            <GlassMenubarItem>Zoom In</GlassMenubarItem>
                            <GlassMenubarItem>Zoom Out</GlassMenubarItem>
                        </GlassMenubarContent>
                    </GlassMenubarMenu>
                </GlassMenubar>
            </Section>

            <Section title="GlassAspectRatio" description="Maintain aspect ratio for media.">
                <div className="w-64">
                    <GlassAspectRatio ratio={16 / 9}>
                        <div className="glass-subtle flex h-full w-full items-center justify-center rounded-[var(--koori-radius-lg)] text-sm text-[var(--koori-muted)]">16:9</div>
                    </GlassAspectRatio>
                </div>
            </Section>

            <Section title="GlassDrawer" description="Slide-up drawer with drag-to-dismiss.">
                <GlassDrawer>
                    <GlassDrawerTrigger asChild>
                        <GlassButton variant="primary">Open Drawer</GlassButton>
                    </GlassDrawerTrigger>
                    <GlassDrawerContent>
                        <div className="mx-auto w-full max-w-sm">
                            <GlassDrawerHeader>
                                <GlassDrawerTitle>Edit profile</GlassDrawerTitle>
                                <GlassDrawerDescription>Make changes to your profile here.</GlassDrawerDescription>
                            </GlassDrawerHeader>
                            <div className="p-4 pb-0">
                                <GlassInput placeholder="Your name" />
                            </div>
                            <GlassDrawerFooter>
                                <GlassButton variant="primary">Save</GlassButton>
                                <GlassDrawerClose asChild><GlassButton>Cancel</GlassButton></GlassDrawerClose>
                            </GlassDrawerFooter>
                        </div>
                    </GlassDrawerContent>
                </GlassDrawer>
            </Section>

            <Section title="GlassCalendar" description="Date picker powered by react-day-picker.">
                <GlassCalendar mode="single" className="w-fit" />
            </Section>

            <Section title="GlassCommand" description="Command palette with fuzzy search (cmdk).">
                <GlassCommand className="max-w-md">
                    <GlassCommandInput placeholder="Type a command or search..." />
                    <GlassCommandList>
                        <GlassCommandEmpty>No results found.</GlassCommandEmpty>
                        <GlassCommandGroup heading="Suggestions">
                            <GlassCommandItem><FileText className="h-4 w-4" /> Calendar<GlassCommandShortcut>⌘K</GlassCommandShortcut></GlassCommandItem>
                            <GlassCommandItem><Mail className="h-4 w-4" /> Email<GlassCommandShortcut>⌘E</GlassCommandShortcut></GlassCommandItem>
                            <GlassCommandItem><MessageSquare className="h-4 w-4" /> Messages</GlassCommandItem>
                        </GlassCommandGroup>
                        <GlassCommandGroup heading="Settings">
                            <GlassCommandItem><Settings className="h-4 w-4" /> Profile</GlassCommandItem>
                            <GlassCommandItem><PlusCircle className="h-4 w-4" /> New Project</GlassCommandItem>
                        </GlassCommandGroup>
                    </GlassCommandList>
                </GlassCommand>
            </Section>

            <Section title="GlassCarousel" description="Touch-friendly carousel powered by Embla.">
                <GlassCarousel className="w-full max-w-xs mx-auto">
                    <GlassCarouselContent>
                        {Array.from({ length: 5 }, (_, i) => (
                            <GlassCarouselItem key={i}>
                                <GlassPanel variant="elevated" className="flex h-40 items-center justify-center text-2xl font-bold">
                                    Slide {i + 1}
                                </GlassPanel>
                            </GlassCarouselItem>
                        ))}
                    </GlassCarouselContent>
                    <GlassCarouselPrevious />
                    <GlassCarouselNext />
                </GlassCarousel>
            </Section>

            <Section title="GlassInputOTP" description="Six-digit one-time password input.">
                <GlassInputOTP maxLength={6}>
                    <GlassInputOTPGroup>
                        <GlassInputOTPSlot index={0} />
                        <GlassInputOTPSlot index={1} />
                        <GlassInputOTPSlot index={2} />
                    </GlassInputOTPGroup>
                    <GlassInputOTPSeparator />
                    <GlassInputOTPGroup>
                        <GlassInputOTPSlot index={3} />
                        <GlassInputOTPSlot index={4} />
                        <GlassInputOTPSlot index={5} />
                    </GlassInputOTPGroup>
                </GlassInputOTP>
            </Section>

            <Section title="GlassPagination" description="Page navigation with ellipsis.">
                <GlassPagination total={10} current={page} onPageChange={setPage} />
            </Section>

            <Section title="GlassSpinner" description="Animated loading spinner.">
                <div className="flex items-center gap-6">
                    <GlassSpinner size="sm" />
                    <GlassSpinner size="md" />
                    <GlassSpinner size="lg" />
                    <GlassSpinner size="xl" label="Loading..." />
                </div>
            </Section>

            <Section title="GlassEmpty" description="Empty state placeholder.">
                <GlassEmpty
                    icon={<Inbox className="h-6 w-6" />}
                    title="No messages yet"
                    description="When you receive a message, it will appear here."
                    action={<GlassButton size="sm" variant="primary">Compose</GlassButton>}
                />
            </Section>

            <Section title="GlassTimeline" description="Vertical activity timeline.">
                <GlassTimeline>
                    <GlassTimelineItem status="success" time="2h ago" title="Deployed v1.1.0" description="Production release successful." />
                    <GlassTimelineItem status="default" time="5h ago" title="PR merged" description="feat: add 21 new components." />
                    <GlassTimelineItem status="warning" time="1d ago" title="CI warning" description="Bundle size increased by 51KB." />
                    <GlassTimelineItem status="error" time="3d ago" title="Build failed" description="TypeScript error in module X." />
                </GlassTimeline>
            </Section>

            <Section title="GlassLineChart" description="Line chart built on Recharts with glass styling.">
                <GlassPanel variant="subtle" className="p-4">
                    <GlassLineChart
                        data={lineChartData}
                        index="name"
                        categories={[
                            { key: "users", color: "var(--koori-primary)", name: "Users" },
                            { key: "revenue", color: "var(--koori-accent)", name: "Revenue" },
                        ]}
                    />
                </GlassPanel>
            </Section>
        </div>
    );
}

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
    return (
        <section className="demo-section">
            <span className="section-label">{title}</span>
            {description && <p className="section-description">{description}</p>}
            {children}
        </section>
    );
}
