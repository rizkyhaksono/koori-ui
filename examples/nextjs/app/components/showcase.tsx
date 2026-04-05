"use client";

import { useState } from "react";
import {
    GlassPanel,
    GlassCard,
    GlassCardHeader,
    GlassCardBody,
    GlassCardFooter,
    GlassButton,
    GlassInput,
    GlassDialog,
    GlassDialogTrigger,
    GlassDialogContent,
    GlassDialogTitle,
    GlassDialogDescription,
    GlassDialogClose,
    GlassBadge,
    GlassTabs,
    GlassTabsList,
    GlassTabsTrigger,
    GlassTabsContent,
    GlassAvatar,
    GlassAvatarFallback,
    GlassAvatarImage,
    GlassAreaChart,
    GlassBarChart,
    // New components
    GlassTextarea,
    GlassAlert,
    GlassH1,
    GlassH2,
    GlassH3,
    GlassH4,
    GlassText,
    GlassCode,
    GlassLink,
    GlassBlockquote,
    GlassSkeleton,
    GlassBreadcrumb,
    GlassBreadcrumbItem,
    GlassBreadcrumbSeparator,
    GlassTable,
    GlassThead,
    GlassTbody,
    GlassTr,
    GlassTh,
    GlassTd,
    GlassStatCard,
    GlassCheckbox,
    GlassSwitch,
    GlassRadioGroup,
    GlassRadioItem,
    GlassSelect,
    GlassSelectTrigger,
    GlassSelectContent,
    GlassSelectItem,
    GlassSelectValue,
    GlassTooltipProvider,
    GlassTooltip,
    GlassTooltipTrigger,
    GlassTooltipContent,
    GlassSeparator,
    GlassProgress,
    GlassDropdownMenu,
    GlassDropdownMenuTrigger,
    GlassDropdownMenuContent,
    GlassDropdownMenuItem,
    GlassDropdownMenuSeparator,
    GlassDropdownMenuLabel,
    GlassPopover,
    GlassPopoverTrigger,
    GlassPopoverContent,
    GlassSlider,
    GlassToastProvider,
    GlassToast,
    GlassToastTitle,
    GlassToastDescription,
    GlassToastClose,
    GlassToaster,
} from "koori-ui";
import { User, Bell, Settings, MoreHorizontal, ChevronDown } from "lucide-react";

const chartData = [
    { name: "Jan", revenue: 4000, users: 2400 },
    { name: "Feb", revenue: 3000, users: 1398 },
    { name: "Mar", revenue: 2000, users: 9800 },
    { name: "Apr", revenue: 2780, users: 3908 },
    { name: "May", revenue: 1890, users: 4800 },
    { name: "Jun", revenue: 2390, users: 3800 },
    { name: "Jul", revenue: 3490, users: 4300 },
];

export function ComponentsShowcase() {
    return (
        <div className="space-y-1">
            <Section
                title="GlassPanel"
                description="The foundational container in three intensity levels with stronger glass contrast."
            >
                <div className="grid gap-4 sm:grid-cols-3">
                    <GlassPanel variant="subtle" className="flex min-h-28 items-center justify-center rounded-[1.1rem] p-6 text-center">
                        <PanelLabel tone="muted" title="Subtle" caption="Light frost for backgrounds" />
                    </GlassPanel>
                    <GlassPanel variant="default" className="flex min-h-28 items-center justify-center rounded-[1.1rem] p-6 text-center">
                        <PanelLabel title="Default" caption="Balanced depth and blur" />
                    </GlassPanel>
                    <GlassPanel variant="elevated" className="flex min-h-28 items-center justify-center rounded-[1.1rem] p-6 text-center">
                        <PanelLabel title="Elevated" caption="Hero cards and modals" />
                    </GlassPanel>
                </div>
            </Section>

            <Section
                title="GlassCard"
                description="Structured containers for product, feature, and dashboard cards."
            >
                <div className="grid gap-6 sm:grid-cols-2">
                    <GlassCard>
                        <GlassCardHeader>
                            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(108,140,255,0.12)] text-sm">
                                📦
                            </div>
                            <h3 className="text-base font-semibold">Getting Started</h3>
                        </GlassCardHeader>
                        <GlassCardBody>
                            <p className="text-sm leading-relaxed text-[var(--koori-muted)] sm:text-[0.95rem]">
                                Install koori-ui and import the styles to start building
                                beautiful glass interfaces in minutes.
                            </p>
                        </GlassCardBody>
                        <GlassCardFooter>
                            <GlassButton size="sm" variant="primary">
                                Read Docs →
                            </GlassButton>
                        </GlassCardFooter>
                    </GlassCard>

                    <GlassCard variant="elevated">
                        <GlassCardHeader>
                            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(167,139,250,0.12)] text-sm">
                                🎨
                            </div>
                            <h3 className="text-base font-semibold">Customization</h3>
                        </GlassCardHeader>
                        <GlassCardBody>
                            <p className="text-sm leading-relaxed text-[var(--koori-muted)] sm:text-[0.95rem]">
                                Override CSS custom properties to match your brand colors
                                and create unique glass effects.
                            </p>
                        </GlassCardBody>
                        <GlassCardFooter>
                            <GlassButton size="sm">Learn More →</GlassButton>
                        </GlassCardFooter>
                    </GlassCard>
                </div>
            </Section>

            <Section
                title="GlassButton"
                description="Versatile buttons in default and primary variants with three size options."
            >
                <div className="space-y-4">
                    <div>
                        <p className="mb-2.5 text-xs font-semibold tracking-[0.12em] text-[var(--koori-muted)] uppercase">
                            Default Variant
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <GlassButton size="sm">Small</GlassButton>
                            <GlassButton size="md">Medium</GlassButton>
                            <GlassButton size="lg">Large</GlassButton>
                            <GlassButton disabled>Disabled</GlassButton>
                        </div>
                    </div>
                    <div>
                        <p className="mb-2.5 text-xs font-semibold tracking-[0.12em] text-[var(--koori-muted)] uppercase">
                            Primary Variant
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <GlassButton variant="primary" size="sm">
                                Small
                            </GlassButton>
                            <GlassButton variant="primary" size="md">
                                Medium
                            </GlassButton>
                            <GlassButton variant="primary" size="lg">
                                Large
                            </GlassButton>
                        </div>
                    </div>

                    <GlassPanel variant="subtle" className="rounded-[1rem] p-4">
                        <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-[var(--koori-muted)] uppercase">
                            Quick Actions
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <GlassButton size="sm">Export CSV</GlassButton>
                            <GlassButton size="sm">Duplicate Layout</GlassButton>
                            <GlassButton size="sm" variant="primary">Deploy</GlassButton>
                        </div>
                    </GlassPanel>
                </div>
            </Section>

            <Section
                title="GlassInput"
                description="Text inputs with glass styling. Supports all native input types."
            >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-[var(--koori-muted)]">
                            Name
                        </label>
                        <GlassInput placeholder="Your name" />
                    </div>
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-[var(--koori-muted)]">
                            Email
                        </label>
                        <GlassInput type="email" placeholder="you@sarana.ai" />
                    </div>
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-[var(--koori-muted)]">
                            Password
                        </label>
                        <GlassInput type="password" placeholder="••••••••" />
                    </div>
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-[var(--koori-muted)]">
                            Disabled
                        </label>
                        <GlassInput placeholder="Disabled field" disabled />
                    </div>
                    <div className="sm:col-span-2 lg:col-span-1">
                        <label className="mb-1.5 block text-xs font-medium text-[var(--koori-muted)]">
                            Search
                        </label>
                        <div className="relative">
                            <GlassInput placeholder="Find component..." className="pl-9" />
                            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[var(--koori-muted)]">⌕</span>
                        </div>
                    </div>
                </div>
            </Section>

            <Section
                title="Dashboard Widgets"
                description="KPI cards, trends, and compact metrics for admin and analytics screens."
            >
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <MetricCard label="Active Sessions" value="12.4k" delta="+8.2%" positive />
                    <MetricCard label="New Signups" value="1,328" delta="+5.1%" positive />
                    <MetricCard label="Error Rate" value="0.17%" delta="-0.03%" positive />
                    <MetricCard label="Avg Response" value="184 ms" delta="+21 ms" />
                </div>
            </Section>

            <Section
                title="Pricing Blocks"
                description="Example pricing cards using GlassCard and GlassButton combinations."
            >
                <div className="grid gap-5 lg:grid-cols-3">
                    <PricingCard
                        title="Starter"
                        price="$0"
                        subtitle="Best for experimentation"
                        features={["3 projects", "Community support", "Basic themes"]}
                    />
                    <PricingCard
                        title="Pro"
                        price="$19"
                        subtitle="Best for production teams"
                        features={["Unlimited projects", "Priority support", "Theme tokens"]}
                        highlighted
                    />
                    <PricingCard
                        title="Studio"
                        price="$59"
                        subtitle="Best for agencies"
                        features={["Team workspaces", "Design reviews", "SLA support"]}
                    />
                </div>
            </Section>

            <Section
                title="Activity Timeline"
                description="GlassPanel can present timeline rows for feeds, changelogs, and workflow activity."
            >
                <div className="space-y-3">
                    <TimelineItem
                        title="Release v1.0.0 published"
                        detail="New glass tokens, updated docs, and improved install guide."
                        when="2 hours ago"
                    />
                    <TimelineItem
                        title="Design review approved"
                        detail="Marketing landing and product dashboard passed QA checks."
                        when="Yesterday"
                    />
                    <TimelineItem
                        title="Theme preset added"
                        detail="Arctic, Neon Ocean, and Midnight presets now available."
                        when="3 days ago"
                    />
                </div>
            </Section>

            <Section
                title="GlassBadge"
                description="Small tags or labels with glassmorphism styling."
            >
                <div className="flex flex-wrap gap-3">
                    <GlassBadge>Default</GlassBadge>
                    <GlassBadge variant="primary">Primary</GlassBadge>
                    <GlassBadge variant="success">Success</GlassBadge>
                    <GlassBadge variant="warning">Warning</GlassBadge>
                    <GlassBadge variant="danger">Danger</GlassBadge>
                </div>
            </Section>

            <Section
                title="GlassTabs"
                description="Accessible tabs powered by Radix UI."
            >
                <GlassTabs defaultValue="account" className="w-[400px]">
                    <GlassTabsList className="grid w-full grid-cols-2">
                        <GlassTabsTrigger value="account">Account</GlassTabsTrigger>
                        <GlassTabsTrigger value="password">Password</GlassTabsTrigger>
                    </GlassTabsList>
                    <GlassTabsContent value="account">
                        <GlassCard className="mt-2 text-sm p-4 text-[var(--koori-muted)]">
                            Make changes to your account here. Click save when you're done.
                        </GlassCard>
                    </GlassTabsContent>
                    <GlassTabsContent value="password">
                        <GlassCard className="mt-2 text-sm p-4 text-[var(--koori-muted)]">
                            Change your password here. After saving, you'll be logged out.
                        </GlassCard>
                    </GlassTabsContent>
                </GlassTabs>
            </Section>

            <Section
                title="GlassAvatar"
                description="Accessible avatar powered by Radix UI."
            >
                <div className="flex gap-4">
                    <GlassAvatar>
                        <GlassAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <GlassAvatarFallback>CN</GlassAvatarFallback>
                    </GlassAvatar>
                    <GlassAvatar>
                        <GlassAvatarFallback><User size={20} className="opacity-50" /></GlassAvatarFallback>
                    </GlassAvatar>
                </div>
            </Section>

            <Section
                title="GlassChart"
                description="Responsive charts with premium glassmorphism tooltips using recharts."
            >
                <div className="grid gap-6 md:grid-cols-2">
                    <GlassCard className="p-4">
                        <GlassCardHeader className="pb-4">
                            <h3 className="text-sm font-semibold tracking-tight">Revenue Over Time</h3>
                        </GlassCardHeader>
                        <GlassCardBody>
                            <GlassAreaChart
                                data={chartData}
                                index="name"
                                categories={[{ key: "revenue", color: "var(--koori-primary)", name: "Revenue" }]}
                            />
                        </GlassCardBody>
                    </GlassCard>
                    <GlassCard className="p-4">
                        <GlassCardHeader className="pb-4">
                            <h3 className="text-sm font-semibold tracking-tight">User Check-ins</h3>
                        </GlassCardHeader>
                        <GlassCardBody>
                            <GlassBarChart
                                data={chartData}
                                index="name"
                                categories={[{ key: "users", color: "var(--koori-accent)", name: "Users" }]}
                            />
                        </GlassCardBody>
                    </GlassCard>
                </div>
            </Section>

            <Section
                title="GlassDialog"
                description="Accessible modal dialogs built on Radix UI with glass overlay and surface."
            >
                <GlassDialog>
                    <GlassDialogTrigger asChild>
                        <GlassButton variant="primary">Open Dialog ↗</GlassButton>
                    </GlassDialogTrigger>
                    <GlassDialogContent>
                        <GlassDialogTitle>Confirm Action</GlassDialogTitle>
                        <GlassDialogDescription>
                            This is an accessible dialog built on Radix UI with a
                            glass-elevated surface and blurred overlay.
                        </GlassDialogDescription>
                        <div className="mt-6 flex justify-end gap-3">
                            <GlassDialogClose asChild>
                                <GlassButton>Cancel</GlassButton>
                            </GlassDialogClose>
                            <GlassDialogClose asChild>
                                <GlassButton variant="primary">Confirm</GlassButton>
                            </GlassDialogClose>
                        </div>
                    </GlassDialogContent>
                </GlassDialog>
            </Section>

            <Section
                title="Combined Example"
                description="A realistic sign-in card showing how components compose together."
            >
                <GlassCard className="mx-auto max-w-sm">
                    <GlassCardHeader>
                        <h3 className="text-lg font-semibold">Sign In</h3>
                        <p className="mt-1 text-sm text-[var(--koori-muted)]">
                            Welcome back to Koori
                        </p>
                    </GlassCardHeader>
                    <GlassCardBody className="space-y-4">
                        <div>
                            <label className="mb-1.5 block text-sm font-medium">
                                Email
                            </label>
                            <GlassInput
                                type="email"
                                placeholder="you@email.com"
                            />
                        </div>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium">
                                Password
                            </label>
                            <GlassInput
                                type="password"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="flex items-center justify-between text-xs text-[var(--koori-muted)]">
                            <GlassCheckbox label="Remember me" id="remember" />
                            <button type="button" className="text-[var(--koori-primary)] hover:text-[var(--koori-accent)]">
                                Forgot password?
                            </button>
                        </div>
                    </GlassCardBody>
                    <GlassCardFooter className="flex flex-col gap-3">
                        <GlassButton variant="primary" className="w-full">
                            Sign In
                        </GlassButton>
                        <GlassButton className="w-full">Continue with GitHub</GlassButton>
                        <p className="text-center text-xs text-[var(--koori-muted)]">
                            Don&apos;t have an account?{" "}
                            <span className="cursor-pointer text-[var(--koori-primary)] transition-colors hover:text-[var(--koori-accent)] hover:underline">
                                Sign Up
                            </span>
                        </p>
                    </GlassCardFooter>
                </GlassCard>
            </Section>
            <Section title="GlassTypography" description="Heading levels, body text, inline code, links, and blockquotes with glass theming.">
                <div className="space-y-3">
                    <GlassH1>Heading One</GlassH1>
                    <GlassH2>Heading Two</GlassH2>
                    <GlassH3>Heading Three</GlassH3>
                    <GlassH4>Heading Four</GlassH4>
                    <GlassText>Default body text with comfortable line height and theme-aware color.</GlassText>
                    <GlassText muted>Muted body text for secondary content and captions.</GlassText>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="text-[var(--koori-text)]">Install with</span>
                        <GlassCode>npm install koori-ui</GlassCode>
                        <span className="text-[var(--koori-text)]">then import</span>
                        <GlassCode>from &apos;koori-ui&apos;</GlassCode>
                    </div>
                    <GlassBlockquote>
                        Glassmorphism is about depth, light, and translucency — not just blur.
                    </GlassBlockquote>
                    <GlassLink href="#">Read the documentation →</GlassLink>
                </div>
            </Section>

            <Section title="Form Components" description="Textarea, Checkbox, Switch, Radio, Select, and Slider — all styled with glassmorphism.">
                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-4">
                        <div>
                            <label className="mb-1.5 block text-xs font-medium text-[var(--koori-muted)]">Message</label>
                            <GlassTextarea placeholder="Write something..." rows={4} />
                        </div>
                        <div className="space-y-2.5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]">Checkboxes</p>
                            <GlassCheckbox label="Enable notifications" id="notif" />
                            <GlassCheckbox label="Subscribe to updates" id="updates" defaultChecked />
                            <GlassCheckbox label="Disabled option" id="disabled-cb" disabled />
                        </div>
                        <div className="space-y-2.5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]">Toggles</p>
                            <GlassSwitch label="Dark mode" id="dark-toggle" defaultChecked />
                            <GlassSwitch label="Notifications" id="notif-toggle" />
                            <GlassSwitch label="Disabled" id="disabled-sw" disabled />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]">Radio Group</p>
                            <GlassRadioGroup defaultValue="option1">
                                <GlassRadioItem value="option1" label="Default plan (free)" id="r1" />
                                <GlassRadioItem value="option2" label="Pro plan ($19/mo)" id="r2" />
                                <GlassRadioItem value="option3" label="Studio plan ($59/mo)" id="r3" />
                            </GlassRadioGroup>
                        </div>
                        <div>
                            <label className="mb-1.5 block text-xs font-medium text-[var(--koori-muted)]">Select Theme</label>
                            <GlassSelect>
                                <GlassSelectTrigger className="w-full">
                                    <GlassSelectValue placeholder="Choose a theme..." />
                                </GlassSelectTrigger>
                                <GlassSelectContent>
                                    <GlassSelectItem value="default">Default Blue</GlassSelectItem>
                                    <GlassSelectItem value="slate">Slate</GlassSelectItem>
                                    <GlassSelectItem value="zinc">Zinc</GlassSelectItem>
                                    <GlassSelectItem value="neutral">Neutral</GlassSelectItem>
                                    <GlassSelectItem value="violet">Violet</GlassSelectItem>
                                </GlassSelectContent>
                            </GlassSelect>
                        </div>
                        <div>
                            <label className="mb-2 block text-xs font-medium text-[var(--koori-muted)]">Volume</label>
                            <GlassSlider defaultValue={[60]} max={100} step={1} className="mt-2" />
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="Feedback" description="Alerts, progress indicators, and skeleton loaders.">
                <div className="space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                        <GlassAlert variant="info" title="Update available">A new version of Koori UI is ready to install.</GlassAlert>
                        <GlassAlert variant="success" title="Deployment complete">Your app was deployed successfully.</GlassAlert>
                        <GlassAlert variant="warning" title="High memory usage">Usage is at 87%. Consider scaling.</GlassAlert>
                        <GlassAlert variant="error" title="Build failed">TypeScript errors found. Run typecheck.</GlassAlert>
                    </div>
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]">Progress</p>
                        <GlassProgress value={72} />
                        <GlassProgress value={45} variant="success" />
                        <GlassProgress value={60} variant="warning" />
                        <GlassProgress value={25} variant="error" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]">Skeleton</p>
                        <div className="flex items-center gap-3">
                            <GlassSkeleton width={40} height={40} className="rounded-full" />
                            <div className="flex-1 space-y-2">
                                <GlassSkeleton height={14} className="w-3/4" />
                                <GlassSkeleton height={10} className="w-1/2" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="Navigation & Overlays" description="Breadcrumb, Tooltip, Dropdown, and Popover components.">
                <div className="space-y-6">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]">Breadcrumb</p>
                        <GlassBreadcrumb>
                            <GlassBreadcrumbItem href="#">Home</GlassBreadcrumbItem>
                            <GlassBreadcrumbSeparator />
                            <GlassBreadcrumbItem href="#">Components</GlassBreadcrumbItem>
                            <GlassBreadcrumbSeparator />
                            <GlassBreadcrumbItem isCurrent>Breadcrumb</GlassBreadcrumbItem>
                        </GlassBreadcrumb>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <GlassTooltipProvider>
                            <GlassTooltip>
                                <GlassTooltipTrigger asChild>
                                    <GlassButton size="sm">Hover for Tooltip</GlassButton>
                                </GlassTooltipTrigger>
                                <GlassTooltipContent>This is a glassmorphism tooltip</GlassTooltipContent>
                            </GlassTooltip>
                        </GlassTooltipProvider>

                        <GlassDropdownMenu>
                            <GlassDropdownMenuTrigger asChild>
                                <GlassButton size="sm">
                                    <MoreHorizontal className="h-4 w-4 mr-1" /> Dropdown
                                </GlassButton>
                            </GlassDropdownMenuTrigger>
                            <GlassDropdownMenuContent>
                                <GlassDropdownMenuLabel>Actions</GlassDropdownMenuLabel>
                                <GlassDropdownMenuSeparator />
                                <GlassDropdownMenuItem><Settings className="h-4 w-4" /> Settings</GlassDropdownMenuItem>
                                <GlassDropdownMenuItem><Bell className="h-4 w-4" /> Notifications</GlassDropdownMenuItem>
                                <GlassDropdownMenuSeparator />
                                <GlassDropdownMenuItem className="text-[var(--koori-error)]">Sign out</GlassDropdownMenuItem>
                            </GlassDropdownMenuContent>
                        </GlassDropdownMenu>

                        <GlassPopover>
                            <GlassPopoverTrigger asChild>
                                <GlassButton size="sm">Open Popover</GlassButton>
                            </GlassPopoverTrigger>
                            <GlassPopoverContent>
                                <p className="text-sm font-semibold text-[var(--koori-text)] mb-1">Popover</p>
                                <p className="text-xs text-[var(--koori-muted)]">Glassmorphism popover built on Radix UI with animated entry and exit.</p>
                            </GlassPopoverContent>
                        </GlassPopover>
                    </div>
                </div>
            </Section>

            <Section title="GlassTable" description="Responsive data table with glass-subtle container and hover rows.">
                <GlassTable>
                    <GlassThead>
                        <GlassTr>
                            <GlassTh>Component</GlassTh>
                            <GlassTh>Type</GlassTh>
                            <GlassTh>Radix</GlassTh>
                            <GlassTh>Status</GlassTh>
                        </GlassTr>
                    </GlassThead>
                    <GlassTbody>
                        {[
                            { name: "GlassButton", type: "General", radix: "—", status: "Stable" },
                            { name: "GlassDialog", type: "Feedback", radix: "✓", status: "Stable" },
                            { name: "GlassSelect", type: "Form", radix: "✓", status: "Stable" },
                            { name: "GlassToast", type: "Feedback", radix: "✓", status: "Stable" },
                            { name: "GlassSlider", type: "Form", radix: "✓", status: "Stable" },
                        ].map((row) => (
                            <GlassTr key={row.name}>
                                <GlassTd><GlassCode>{row.name}</GlassCode></GlassTd>
                                <GlassTd>{row.type}</GlassTd>
                                <GlassTd>{row.radix}</GlassTd>
                                <GlassTd><GlassBadge variant="success">{row.status}</GlassBadge></GlassTd>
                            </GlassTr>
                        ))}
                    </GlassTbody>
                </GlassTable>
            </Section>

            <Section title="GlassStatCard" description="KPI stat cards with trend indicators.">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <GlassStatCard label="Total Revenue" value="$48.2k" trend={12.5} icon={<Bell className="h-5 w-5" />} />
                    <GlassStatCard label="Active Users" value="8,431" trend={3.2} variant="subtle" />
                    <GlassStatCard label="Churn Rate" value="2.1%" trend={-0.4} variant="elevated" />
                    <GlassStatCard label="Avg Session" value="4m 12s" trend={-8} />
                </div>
            </Section>

            <Section title="GlassSeparator" description="Horizontal and vertical separators using Radix UI.">
                <div className="space-y-4">
                    <GlassSeparator />
                    <div className="flex h-8 items-center gap-4 text-sm text-[var(--koori-muted)]">
                        <span>Components</span>
                        <GlassSeparator orientation="vertical" className="h-full" />
                        <span>Docs</span>
                        <GlassSeparator orientation="vertical" className="h-full" />
                        <span>Examples</span>
                    </div>
                    <GlassSeparator />
                </div>
            </Section>

            <ToastDemo />
        </div>
    );
}

function ToastDemo() {
    const [toasts, setToasts] = useState<{ id: number; variant: "default" | "success" | "warning" | "error"; title: string }[]>([]);
    const addToast = (variant: "default" | "success" | "warning" | "error", title: string) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, variant, title }]);
        setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000);
    };
    return (
        <Section title="GlassToast" description="Notifications powered by Radix UI Toast, fixed bottom-right.">
            <GlassToastProvider>
                <div className="flex flex-wrap gap-3">
                    <GlassButton size="sm" onClick={() => addToast("default", "Info notification")}>Default</GlassButton>
                    <GlassButton size="sm" onClick={() => addToast("success", "Saved successfully!")}>Success</GlassButton>
                    <GlassButton size="sm" onClick={() => addToast("warning", "Rate limit approaching")}>Warning</GlassButton>
                    <GlassButton size="sm" onClick={() => addToast("error", "Something went wrong")}>Error</GlassButton>
                </div>
                {toasts.map((t) => (
                    <GlassToast key={t.id} variant={t.variant} open>
                        <div className="flex-1">
                            <GlassToastTitle>{t.title}</GlassToastTitle>
                            <GlassToastDescription>Click × to dismiss</GlassToastDescription>
                        </div>
                        <GlassToastClose onClick={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))} />
                    </GlassToast>
                ))}
                <GlassToaster />
            </GlassToastProvider>
        </Section>
    );
}

function PanelLabel({
    title,
    caption,
    tone,
}: {
    title: string;
    caption: string;
    tone?: "default" | "muted";
}) {
    return (
        <div className="space-y-1">
            <p className={tone === "muted" ? "text-xs font-semibold tracking-[0.16em] uppercase text-[var(--koori-muted)]" : "text-xs font-semibold tracking-[0.16em] uppercase text-[var(--koori-text)]"}>
                {title}
            </p>
            <p className="text-sm text-[var(--koori-muted)]">{caption}</p>
        </div>
    );
}

function MetricCard({
    label,
    value,
    delta,
    positive,
}: {
    label: string;
    value: string;
    delta: string;
    positive?: boolean;
}) {
    return (
        <GlassCard variant="subtle" className="rounded-[1rem] p-4">
            <GlassCardBody className="space-y-2">
                <p className="text-xs font-medium tracking-[0.08em] uppercase text-[var(--koori-muted)]">{label}</p>
                <p className="text-2xl font-semibold tracking-tight">{value}</p>
                <p className={positive ? "text-xs font-medium text-emerald-300" : "text-xs font-medium text-amber-300"}>
                    {delta} this week
                </p>
            </GlassCardBody>
        </GlassCard>
    );
}

function PricingCard({
    title,
    price,
    subtitle,
    features,
    highlighted,
}: {
    title: string;
    price: string;
    subtitle: string;
    features: string[];
    highlighted?: boolean;
}) {
    return (
        <GlassCard variant={highlighted ? "elevated" : "default"} className="rounded-[1.1rem] p-5">
            <GlassCardHeader className="mb-4 border-b border-white/15 pb-4">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="mt-1 text-sm text-[var(--koori-muted)]">{subtitle}</p>
                    </div>
                    {highlighted && (
                        <span className="rounded-full bg-[var(--koori-primary)]/20 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--koori-primary)]">
                            Popular
                        </span>
                    )}
                </div>
                <p className="mt-4 text-3xl font-semibold tracking-tight">
                    {price}
                    <span className="text-sm font-medium text-[var(--koori-muted)]"> /mo</span>
                </p>
            </GlassCardHeader>

            <GlassCardBody>
                <ul className="space-y-2.5 text-sm text-[var(--koori-muted)]">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                            <span className="timeline-dot" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </GlassCardBody>

            <GlassCardFooter className="pt-5">
                <GlassButton variant={highlighted ? "primary" : "default"} className="w-full">
                    Choose {title}
                </GlassButton>
            </GlassCardFooter>
        </GlassCard>
    );
}

function TimelineItem({
    title,
    detail,
    when,
}: {
    title: string;
    detail: string;
    when: string;
}) {
    return (
        <GlassPanel variant="subtle" className="rounded-[1rem] p-4">
            <div className="flex items-start gap-3">
                <span className="timeline-dot mt-1" />
                <div className="space-y-1">
                    <p className="text-sm font-semibold sm:text-base">{title}</p>
                    <p className="text-sm leading-relaxed text-[var(--koori-muted)]">{detail}</p>
                </div>
                <span className="ml-auto text-xs text-[var(--koori-muted)]">{when}</span>
            </div>
        </GlassPanel>
    );
}

function Section({
    title,
    description,
    children,
}: {
    title: string;
    description?: string;
    children: React.ReactNode;
}) {
    return (
        <section className="demo-section">
            <span className="section-label">{title}</span>
            {description && <p className="section-description">{description}</p>}
            {children}
        </section>
    );
}
