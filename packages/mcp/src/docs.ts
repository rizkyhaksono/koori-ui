export interface ComponentProp {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface ComponentDoc {
  name: string;
  description: string;
  category: string;
  radix?: string;
  props: ComponentProp[];
  subComponents?: string[];
  example: string;
}

export const COMPONENT_DOCS: Record<string, ComponentDoc> = {
  GlassButton: {
    name: "GlassButton",
    description: "A glassmorphism-styled button with variant and size options.",
    category: "General",
    props: [
      { name: "variant", type: '"default" | "primary"', default: '"default"', description: "Visual style" },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Button size" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the button" },
    ],
    example: `import { GlassButton } from 'koori-ui'

<GlassButton variant="primary" size="md">Click me</GlassButton>`,
  },
  GlassInput: {
    name: "GlassInput",
    description: "Text input with glass styling. Supports all native input types.",
    category: "Form",
    props: [
      { name: "type", type: "string", default: '"text"', description: "HTML input type" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the input" },
    ],
    example: `import { GlassInput } from 'koori-ui'

<GlassInput type="email" placeholder="you@example.com" />`,
  },
  GlassTextarea: {
    name: "GlassTextarea",
    description: "Multi-line text input with glass styling.",
    category: "Form",
    props: [
      { name: "rows", type: "number", default: "3", description: "Visible row count" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
    ],
    example: `import { GlassTextarea } from 'koori-ui'

<GlassTextarea rows={4} placeholder="Write something..." />`,
  },
  GlassCheckbox: {
    name: "GlassCheckbox",
    description: "Accessible checkbox powered by Radix UI with glass styling.",
    category: "Form",
    radix: "@radix-ui/react-checkbox",
    props: [
      { name: "label", type: "string", description: "Optional visible label" },
      { name: "checked", type: "boolean", description: "Controlled checked state" },
      { name: "defaultChecked", type: "boolean", description: "Default checked state" },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Change handler" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the checkbox" },
    ],
    example: `import { GlassCheckbox } from 'koori-ui'

<GlassCheckbox label="Accept terms" id="terms" />`,
  },
  GlassSwitch: {
    name: "GlassSwitch",
    description: "Toggle switch powered by Radix UI with glass styling.",
    category: "Form",
    radix: "@radix-ui/react-switch",
    props: [
      { name: "label", type: "string", description: "Optional visible label" },
      { name: "checked", type: "boolean", description: "Controlled checked state" },
      { name: "defaultChecked", type: "boolean", description: "Default checked state" },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Change handler" },
    ],
    example: `import { GlassSwitch } from 'koori-ui'

<GlassSwitch label="Dark mode" id="dark" defaultChecked />`,
  },
  GlassRadioGroup: {
    name: "GlassRadioGroup",
    description: "Accessible radio group powered by Radix UI.",
    category: "Form",
    radix: "@radix-ui/react-radio-group",
    subComponents: ["GlassRadioItem"],
    props: [
      { name: "value", type: "string", description: "Controlled selected value" },
      { name: "defaultValue", type: "string", description: "Default selected value" },
      { name: "onValueChange", type: "(value: string) => void", description: "Change handler" },
    ],
    example: `import { GlassRadioGroup, GlassRadioItem } from 'koori-ui'

<GlassRadioGroup defaultValue="option1">
  <GlassRadioItem value="option1" label="Option 1" id="r1" />
  <GlassRadioItem value="option2" label="Option 2" id="r2" />
</GlassRadioGroup>`,
  },
  GlassSelect: {
    name: "GlassSelect",
    description: "Accessible dropdown select powered by Radix UI.",
    category: "Form",
    radix: "@radix-ui/react-select",
    subComponents: ["GlassSelectTrigger", "GlassSelectContent", "GlassSelectItem", "GlassSelectValue", "GlassSelectGroup", "GlassSelectLabel"],
    props: [
      { name: "value", type: "string", description: "Controlled value" },
      { name: "defaultValue", type: "string", description: "Default value" },
      { name: "onValueChange", type: "(value: string) => void", description: "Change handler" },
    ],
    example: `import { GlassSelect, GlassSelectTrigger, GlassSelectContent, GlassSelectItem, GlassSelectValue } from 'koori-ui'

<GlassSelect>
  <GlassSelectTrigger>
    <GlassSelectValue placeholder="Select..." />
  </GlassSelectTrigger>
  <GlassSelectContent>
    <GlassSelectItem value="a">Option A</GlassSelectItem>
    <GlassSelectItem value="b">Option B</GlassSelectItem>
  </GlassSelectContent>
</GlassSelect>`,
  },
  GlassSlider: {
    name: "GlassSlider",
    description: "Range slider powered by Radix UI with glass track and thumb.",
    category: "Form",
    radix: "@radix-ui/react-slider",
    props: [
      { name: "value", type: "number[]", description: "Controlled value" },
      { name: "defaultValue", type: "number[]", description: "Default value" },
      { name: "min", type: "number", default: "0", description: "Minimum value" },
      { name: "max", type: "number", default: "100", description: "Maximum value" },
      { name: "step", type: "number", default: "1", description: "Step increment" },
      { name: "onValueChange", type: "(value: number[]) => void", description: "Change handler" },
    ],
    example: `import { GlassSlider } from 'koori-ui'

<GlassSlider defaultValue={[60]} max={100} step={1} />`,
  },
  GlassAlert: {
    name: "GlassAlert",
    description: "Alert notification with variant colors and optional icon/title.",
    category: "Feedback",
    props: [
      { name: "variant", type: '"info" | "success" | "warning" | "error"', default: '"info"', description: "Color variant" },
      { name: "title", type: "string", description: "Optional bold title" },
      { name: "icon", type: "ReactNode", description: "Optional icon element" },
    ],
    example: `import { GlassAlert } from 'koori-ui'

<GlassAlert variant="success" title="Saved!">
  Your changes have been saved successfully.
</GlassAlert>`,
  },
  GlassBadge: {
    name: "GlassBadge",
    description: "Small pill badge with glassmorphism styling.",
    category: "General",
    props: [
      { name: "variant", type: '"default" | "primary" | "success" | "warning" | "danger"', default: '"default"', description: "Color variant" },
    ],
    example: `import { GlassBadge } from 'koori-ui'

<GlassBadge variant="success">Stable</GlassBadge>`,
  },
  GlassTooltip: {
    name: "GlassTooltip",
    description: "Accessible tooltip powered by Radix UI.",
    category: "Feedback",
    radix: "@radix-ui/react-tooltip",
    subComponents: ["GlassTooltipProvider", "GlassTooltipTrigger", "GlassTooltipContent"],
    props: [],
    example: `import { GlassTooltipProvider, GlassTooltip, GlassTooltipTrigger, GlassTooltipContent } from 'koori-ui'

<GlassTooltipProvider>
  <GlassTooltip>
    <GlassTooltipTrigger>Hover me</GlassTooltipTrigger>
    <GlassTooltipContent>Tooltip text</GlassTooltipContent>
  </GlassTooltip>
</GlassTooltipProvider>`,
  },
  GlassPopover: {
    name: "GlassPopover",
    description: "Floating popover panel powered by Radix UI.",
    category: "Feedback",
    radix: "@radix-ui/react-popover",
    subComponents: ["GlassPopoverTrigger", "GlassPopoverContent", "GlassPopoverClose"],
    props: [],
    example: `import { GlassPopover, GlassPopoverTrigger, GlassPopoverContent } from 'koori-ui'

<GlassPopover>
  <GlassPopoverTrigger>Open</GlassPopoverTrigger>
  <GlassPopoverContent>
    <p>Popover content here</p>
  </GlassPopoverContent>
</GlassPopover>`,
  },
  GlassDropdownMenu: {
    name: "GlassDropdownMenu",
    description: "Context menu / dropdown powered by Radix UI.",
    category: "Navigation",
    radix: "@radix-ui/react-dropdown-menu",
    subComponents: ["GlassDropdownMenuTrigger", "GlassDropdownMenuContent", "GlassDropdownMenuItem", "GlassDropdownMenuSeparator", "GlassDropdownMenuLabel"],
    props: [],
    example: `import { GlassDropdownMenu, GlassDropdownMenuTrigger, GlassDropdownMenuContent, GlassDropdownMenuItem } from 'koori-ui'

<GlassDropdownMenu>
  <GlassDropdownMenuTrigger asChild>
    <button>Open</button>
  </GlassDropdownMenuTrigger>
  <GlassDropdownMenuContent>
    <GlassDropdownMenuItem>Settings</GlassDropdownMenuItem>
    <GlassDropdownMenuItem>Sign out</GlassDropdownMenuItem>
  </GlassDropdownMenuContent>
</GlassDropdownMenu>`,
  },
  GlassDialog: {
    name: "GlassDialog",
    description: "Accessible modal dialog powered by Radix UI.",
    category: "Feedback",
    radix: "@radix-ui/react-dialog",
    subComponents: ["GlassDialogTrigger", "GlassDialogContent", "GlassDialogTitle", "GlassDialogDescription", "GlassDialogClose"],
    props: [
      { name: "hideOverlay", type: "boolean", default: "false", description: "Hide the backdrop overlay (on GlassDialogContent)" },
    ],
    example: `import { GlassDialog, GlassDialogTrigger, GlassDialogContent, GlassDialogTitle, GlassDialogClose } from 'koori-ui'
import { GlassButton } from 'koori-ui'

<GlassDialog>
  <GlassDialogTrigger asChild>
    <GlassButton variant="primary">Open Dialog</GlassButton>
  </GlassDialogTrigger>
  <GlassDialogContent>
    <GlassDialogTitle>Confirm</GlassDialogTitle>
    <GlassDialogClose asChild>
      <GlassButton>Close</GlassButton>
    </GlassDialogClose>
  </GlassDialogContent>
</GlassDialog>`,
  },
  GlassToast: {
    name: "GlassToast",
    description: "Toast notification system powered by Radix UI Toast.",
    category: "Feedback",
    radix: "@radix-ui/react-toast",
    subComponents: ["GlassToastProvider", "GlassToastTitle", "GlassToastDescription", "GlassToastAction", "GlassToastClose", "GlassToaster"],
    props: [
      { name: "variant", type: '"default" | "success" | "warning" | "error"', default: '"default"', description: "Left border color variant" },
      { name: "open", type: "boolean", description: "Controlled open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Open state handler" },
      { name: "duration", type: "number", default: "5000", description: "Auto-dismiss duration in ms" },
    ],
    example: `import { GlassToastProvider, GlassToast, GlassToastTitle, GlassToaster } from 'koori-ui'

<GlassToastProvider>
  <GlassToast variant="success" open>
    <GlassToastTitle>Saved!</GlassToastTitle>
  </GlassToast>
  <GlassToaster />
</GlassToastProvider>`,
  },
  GlassCard: {
    name: "GlassCard",
    description: "Structured card container with optional header, body, and footer sub-components.",
    category: "Layout",
    subComponents: ["GlassCardHeader", "GlassCardBody", "GlassCardFooter"],
    props: [
      { name: "variant", type: '"default" | "subtle" | "elevated"', default: '"default"', description: "Glass intensity" },
    ],
    example: `import { GlassCard, GlassCardHeader, GlassCardBody, GlassCardFooter, GlassButton } from 'koori-ui'

<GlassCard variant="elevated">
  <GlassCardHeader><h3>Title</h3></GlassCardHeader>
  <GlassCardBody><p>Content here</p></GlassCardBody>
  <GlassCardFooter>
    <GlassButton variant="primary">Action</GlassButton>
  </GlassCardFooter>
</GlassCard>`,
  },
  GlassPanel: {
    name: "GlassPanel",
    description: "Foundational glass container in three intensity levels.",
    category: "Layout",
    props: [
      { name: "variant", type: '"default" | "subtle" | "elevated"', default: '"default"', description: "Glass intensity" },
    ],
    example: `import { GlassPanel } from 'koori-ui'

<GlassPanel variant="elevated" className="p-6">
  Content here
</GlassPanel>`,
  },
  GlassTable: {
    name: "GlassTable",
    description: "Responsive data table with glass-subtle container.",
    category: "Data Display",
    subComponents: ["GlassThead", "GlassTbody", "GlassTr", "GlassTh", "GlassTd"],
    props: [],
    example: `import { GlassTable, GlassThead, GlassTbody, GlassTr, GlassTh, GlassTd } from 'koori-ui'

<GlassTable>
  <GlassThead>
    <GlassTr>
      <GlassTh>Name</GlassTh>
      <GlassTh>Status</GlassTh>
    </GlassTr>
  </GlassThead>
  <GlassTbody>
    <GlassTr>
      <GlassTd>GlassButton</GlassTd>
      <GlassTd>Stable</GlassTd>
    </GlassTr>
  </GlassTbody>
</GlassTable>`,
  },
  GlassStatCard: {
    name: "GlassStatCard",
    description: "KPI metric card with value, label, and optional trend indicator.",
    category: "Data Display",
    props: [
      { name: "label", type: "string", description: "Metric label" },
      { name: "value", type: "string | number", description: "Metric value" },
      { name: "trend", type: "number", description: "Trend % (positive = up, negative = down)" },
      { name: "icon", type: "ReactNode", description: "Optional icon" },
      { name: "variant", type: '"default" | "subtle" | "elevated"', default: '"default"', description: "Glass intensity" },
    ],
    example: `import { GlassStatCard } from 'koori-ui'

<GlassStatCard label="Revenue" value="$48.2k" trend={12.5} />`,
  },
  GlassAvatar: {
    name: "GlassAvatar",
    description: "Accessible avatar with image and fallback, powered by Radix UI.",
    category: "Data Display",
    radix: "@radix-ui/react-avatar",
    subComponents: ["GlassAvatarImage", "GlassAvatarFallback"],
    props: [],
    example: `import { GlassAvatar, GlassAvatarImage, GlassAvatarFallback } from 'koori-ui'

<GlassAvatar>
  <GlassAvatarImage src="https://github.com/shadcn.png" alt="User" />
  <GlassAvatarFallback>CN</GlassAvatarFallback>
</GlassAvatar>`,
  },
  GlassTabs: {
    name: "GlassTabs",
    description: "Accessible tabbed interface powered by Radix UI.",
    category: "Navigation",
    radix: "@radix-ui/react-tabs",
    subComponents: ["GlassTabsList", "GlassTabsTrigger", "GlassTabsContent"],
    props: [
      { name: "defaultValue", type: "string", description: "Initially active tab value" },
      { name: "value", type: "string", description: "Controlled active tab value" },
      { name: "onValueChange", type: "(value: string) => void", description: "Change handler" },
    ],
    example: `import { GlassTabs, GlassTabsList, GlassTabsTrigger, GlassTabsContent } from 'koori-ui'

<GlassTabs defaultValue="tab1">
  <GlassTabsList>
    <GlassTabsTrigger value="tab1">Tab 1</GlassTabsTrigger>
    <GlassTabsTrigger value="tab2">Tab 2</GlassTabsTrigger>
  </GlassTabsList>
  <GlassTabsContent value="tab1">Content 1</GlassTabsContent>
  <GlassTabsContent value="tab2">Content 2</GlassTabsContent>
</GlassTabs>`,
  },
  GlassProgress: {
    name: "GlassProgress",
    description: "Progress bar powered by Radix UI with color variants.",
    category: "Feedback",
    radix: "@radix-ui/react-progress",
    props: [
      { name: "value", type: "number", description: "Progress value 0-100" },
      { name: "variant", type: '"default" | "success" | "warning" | "error"', default: '"default"', description: "Color variant" },
    ],
    example: `import { GlassProgress } from 'koori-ui'

<GlassProgress value={72} />
<GlassProgress value={45} variant="success" />`,
  },
  GlassSkeleton: {
    name: "GlassSkeleton",
    description: "Animated loading placeholder with glass styling.",
    category: "Feedback",
    props: [
      { name: "width", type: "string | number", description: "Width of the skeleton" },
      { name: "height", type: "string | number", description: "Height of the skeleton" },
    ],
    example: `import { GlassSkeleton } from 'koori-ui'

<GlassSkeleton height={16} className="w-3/4" />
<GlassSkeleton width={40} height={40} className="rounded-full" />`,
  },
  GlassBreadcrumb: {
    name: "GlassBreadcrumb",
    description: "Navigation breadcrumb with separator and current-page indicator.",
    category: "Navigation",
    subComponents: ["GlassBreadcrumbItem", "GlassBreadcrumbSeparator"],
    props: [],
    example: `import { GlassBreadcrumb, GlassBreadcrumbItem, GlassBreadcrumbSeparator } from 'koori-ui'

<GlassBreadcrumb>
  <GlassBreadcrumbItem href="/">Home</GlassBreadcrumbItem>
  <GlassBreadcrumbSeparator />
  <GlassBreadcrumbItem href="/docs">Docs</GlassBreadcrumbItem>
  <GlassBreadcrumbSeparator />
  <GlassBreadcrumbItem isCurrent>Button</GlassBreadcrumbItem>
</GlassBreadcrumb>`,
  },
  GlassSeparator: {
    name: "GlassSeparator",
    description: "Horizontal or vertical separator line powered by Radix UI.",
    category: "Layout",
    radix: "@radix-ui/react-separator",
    props: [
      { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Separator direction" },
      { name: "decorative", type: "boolean", default: "true", description: "Whether separator is purely visual" },
    ],
    example: `import { GlassSeparator } from 'koori-ui'

<GlassSeparator />
<GlassSeparator orientation="vertical" className="h-8" />`,
  },
  GlassH1: {
    name: "GlassTypography",
    description: "Typography components: GlassH1-H4, GlassText, GlassCode, GlassLink, GlassBlockquote.",
    category: "General",
    subComponents: ["GlassH2", "GlassH3", "GlassH4", "GlassText", "GlassCode", "GlassLink", "GlassBlockquote"],
    props: [
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Text size (GlassText only)" },
      { name: "muted", type: "boolean", default: "false", description: "Use muted color (GlassText only)" },
    ],
    example: `import { GlassH1, GlassH2, GlassText, GlassCode, GlassLink, GlassBlockquote } from 'koori-ui'

<GlassH1>Main Heading</GlassH1>
<GlassH2>Sub Heading</GlassH2>
<GlassText muted>Secondary text content.</GlassText>
<GlassCode>npm install koori-ui</GlassCode>
<GlassLink href="/docs">Read docs →</GlassLink>
<GlassBlockquote>A wise quote goes here.</GlassBlockquote>`,
  },
  GlassAreaChart: {
    name: "GlassAreaChart",
    description: "Area chart built on Recharts with glass-styled tooltips.",
    category: "Data Display",
    subComponents: ["GlassBarChart", "GlassChartTooltip"],
    props: [
      { name: "data", type: "any[]", description: "Chart data array" },
      { name: "index", type: "string", description: "Key used for X-axis labels" },
      { name: "categories", type: "{ key: string; color: string; name?: string }[]", description: "Data series configuration" },
      { name: "height", type: "number", default: "300", description: "Chart height in px" },
    ],
    example: `import { GlassAreaChart } from 'koori-ui'

const data = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
]

<GlassAreaChart
  data={data}
  index="month"
  categories={[{ key: 'revenue', color: 'var(--koori-primary)', name: 'Revenue' }]}
/>`,
  },
  GlassAccordion: {
    name: "GlassAccordion",
    description: "Collapsible section groups powered by Radix UI.",
    category: "Disclosure",
    radix: "@radix-ui/react-accordion",
    subComponents: ["GlassAccordionItem", "GlassAccordionTrigger", "GlassAccordionContent"],
    props: [
      { name: "type", type: '"single" | "multiple"', description: "Single or multi-open behavior" },
      { name: "collapsible", type: "boolean", default: "false", description: "Allow closing (single type only)" },
      { name: "defaultValue", type: "string | string[]", description: "Default open item(s)" },
      { name: "value", type: "string | string[]", description: "Controlled open item(s)" },
      { name: "onValueChange", type: "(value: string | string[]) => void", description: "Change handler" },
    ],
    example: `import { GlassAccordion, GlassAccordionItem, GlassAccordionTrigger, GlassAccordionContent } from 'koori-ui'

<GlassAccordion type="single" collapsible>
  <GlassAccordionItem value="item-1">
    <GlassAccordionTrigger>Is it accessible?</GlassAccordionTrigger>
    <GlassAccordionContent>Yes. Uses Radix UI primitives.</GlassAccordionContent>
  </GlassAccordionItem>
</GlassAccordion>`,
  },
  GlassAlertDialog: {
    name: "GlassAlertDialog",
    description: "Confirmation modal for destructive actions powered by Radix UI.",
    category: "Overlay",
    radix: "@radix-ui/react-alert-dialog",
    subComponents: ["GlassAlertDialogTrigger", "GlassAlertDialogContent", "GlassAlertDialogTitle", "GlassAlertDialogDescription", "GlassAlertDialogAction", "GlassAlertDialogCancel"],
    props: [
      { name: "open", type: "boolean", description: "Controlled open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Change handler" },
    ],
    example: `import { GlassAlertDialog, GlassAlertDialogTrigger, GlassAlertDialogContent, GlassAlertDialogTitle, GlassAlertDialogAction, GlassAlertDialogCancel } from 'koori-ui'

<GlassAlertDialog>
  <GlassAlertDialogTrigger asChild><button>Delete</button></GlassAlertDialogTrigger>
  <GlassAlertDialogContent>
    <GlassAlertDialogTitle>Are you sure?</GlassAlertDialogTitle>
    <GlassAlertDialogAction>Confirm</GlassAlertDialogAction>
    <GlassAlertDialogCancel>Cancel</GlassAlertDialogCancel>
  </GlassAlertDialogContent>
</GlassAlertDialog>`,
  },
  GlassToggle: {
    name: "GlassToggle",
    description: "Pressable toggle button powered by Radix UI.",
    category: "Form",
    radix: "@radix-ui/react-toggle",
    props: [
      { name: "pressed", type: "boolean", description: "Controlled pressed state" },
      { name: "defaultPressed", type: "boolean", description: "Default pressed state" },
      { name: "onPressedChange", type: "(pressed: boolean) => void", description: "Change handler" },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Button size" },
      { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual style" },
    ],
    example: `import { GlassToggle } from 'koori-ui'

<GlassToggle aria-label="Toggle bold">B</GlassToggle>`,
  },
  GlassToggleGroup: {
    name: "GlassToggleGroup",
    description: "Group of toggle buttons (e.g. toolbar) powered by Radix UI.",
    category: "Form",
    radix: "@radix-ui/react-toggle-group",
    subComponents: ["GlassToggleGroupItem"],
    props: [
      { name: "type", type: '"single" | "multiple"', description: "Single or multi-selection" },
      { name: "value", type: "string | string[]", description: "Controlled value(s)" },
      { name: "defaultValue", type: "string | string[]", description: "Default value(s)" },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Item size" },
      { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual style" },
    ],
    example: `import { GlassToggleGroup, GlassToggleGroupItem } from 'koori-ui'

<GlassToggleGroup type="single" defaultValue="bold" variant="outline">
  <GlassToggleGroupItem value="bold">B</GlassToggleGroupItem>
  <GlassToggleGroupItem value="italic">I</GlassToggleGroupItem>
</GlassToggleGroup>`,
  },
  GlassLabel: {
    name: "GlassLabel",
    description: "Accessible form label powered by Radix UI.",
    category: "Form",
    radix: "@radix-ui/react-label",
    props: [
      { name: "htmlFor", type: "string", description: "Target input ID" },
    ],
    example: `import { GlassLabel, GlassInput } from 'koori-ui'

<GlassLabel htmlFor="email">Email</GlassLabel>
<GlassInput id="email" type="email" />`,
  },
  GlassHoverCard: {
    name: "GlassHoverCard",
    description: "Rich preview card on hover powered by Radix UI.",
    category: "Overlay",
    radix: "@radix-ui/react-hover-card",
    subComponents: ["GlassHoverCardTrigger", "GlassHoverCardContent"],
    props: [
      { name: "openDelay", type: "number", default: "700", description: "Open delay in ms" },
      { name: "closeDelay", type: "number", default: "300", description: "Close delay in ms" },
    ],
    example: `import { GlassHoverCard, GlassHoverCardTrigger, GlassHoverCardContent } from 'koori-ui'

<GlassHoverCard>
  <GlassHoverCardTrigger>Hover me</GlassHoverCardTrigger>
  <GlassHoverCardContent>Preview content here</GlassHoverCardContent>
</GlassHoverCard>`,
  },
  GlassScrollArea: {
    name: "GlassScrollArea",
    description: "Custom scrollbar container powered by Radix UI.",
    category: "Layout",
    radix: "@radix-ui/react-scroll-area",
    subComponents: ["GlassScrollBar"],
    props: [
      { name: "type", type: '"auto" | "always" | "scroll" | "hover"', default: '"hover"', description: "Scrollbar visibility" },
      { name: "scrollHideDelay", type: "number", default: "600", description: "Hide delay in ms" },
    ],
    example: `import { GlassScrollArea } from 'koori-ui'

<GlassScrollArea className="h-40 w-64">
  <div>Scrollable content...</div>
</GlassScrollArea>`,
  },
  GlassContextMenu: {
    name: "GlassContextMenu",
    description: "Right-click context menu powered by Radix UI.",
    category: "Navigation",
    radix: "@radix-ui/react-context-menu",
    subComponents: ["GlassContextMenuTrigger", "GlassContextMenuContent", "GlassContextMenuItem", "GlassContextMenuSeparator", "GlassContextMenuLabel"],
    props: [],
    example: `import { GlassContextMenu, GlassContextMenuTrigger, GlassContextMenuContent, GlassContextMenuItem } from 'koori-ui'

<GlassContextMenu>
  <GlassContextMenuTrigger>Right-click area</GlassContextMenuTrigger>
  <GlassContextMenuContent>
    <GlassContextMenuItem>Cut</GlassContextMenuItem>
    <GlassContextMenuItem>Copy</GlassContextMenuItem>
  </GlassContextMenuContent>
</GlassContextMenu>`,
  },
  GlassCollapsible: {
    name: "GlassCollapsible",
    description: "Single collapsible section powered by Radix UI.",
    category: "Disclosure",
    radix: "@radix-ui/react-collapsible",
    subComponents: ["GlassCollapsibleTrigger", "GlassCollapsibleContent"],
    props: [
      { name: "open", type: "boolean", description: "Controlled open state" },
      { name: "defaultOpen", type: "boolean", description: "Default open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Change handler" },
    ],
    example: `import { GlassCollapsible, GlassCollapsibleTrigger, GlassCollapsibleContent } from 'koori-ui'

<GlassCollapsible>
  <GlassCollapsibleTrigger>Toggle</GlassCollapsibleTrigger>
  <GlassCollapsibleContent>Hidden content</GlassCollapsibleContent>
</GlassCollapsible>`,
  },
  GlassNavigationMenu: {
    name: "GlassNavigationMenu",
    description: "Top navigation with dropdown panels powered by Radix UI.",
    category: "Navigation",
    radix: "@radix-ui/react-navigation-menu",
    subComponents: ["GlassNavigationMenuList", "GlassNavigationMenuItem", "GlassNavigationMenuTrigger", "GlassNavigationMenuContent", "GlassNavigationMenuLink"],
    props: [
      { name: "defaultValue", type: "string", description: "Initially active item" },
      { name: "value", type: "string", description: "Controlled active item" },
      { name: "onValueChange", type: "(value: string) => void", description: "Change handler" },
    ],
    example: `import { GlassNavigationMenu, GlassNavigationMenuList, GlassNavigationMenuItem, GlassNavigationMenuTrigger, GlassNavigationMenuContent } from 'koori-ui'

<GlassNavigationMenu>
  <GlassNavigationMenuList>
    <GlassNavigationMenuItem>
      <GlassNavigationMenuTrigger>Products</GlassNavigationMenuTrigger>
      <GlassNavigationMenuContent>Dropdown content</GlassNavigationMenuContent>
    </GlassNavigationMenuItem>
  </GlassNavigationMenuList>
</GlassNavigationMenu>`,
  },
  GlassMenubar: {
    name: "GlassMenubar",
    description: "Application-style menu bar powered by Radix UI.",
    category: "Navigation",
    radix: "@radix-ui/react-menubar",
    subComponents: ["GlassMenubarMenu", "GlassMenubarTrigger", "GlassMenubarContent", "GlassMenubarItem", "GlassMenubarSeparator"],
    props: [],
    example: `import { GlassMenubar, GlassMenubarMenu, GlassMenubarTrigger, GlassMenubarContent, GlassMenubarItem } from 'koori-ui'

<GlassMenubar>
  <GlassMenubarMenu>
    <GlassMenubarTrigger>File</GlassMenubarTrigger>
    <GlassMenubarContent>
      <GlassMenubarItem>New</GlassMenubarItem>
    </GlassMenubarContent>
  </GlassMenubarMenu>
</GlassMenubar>`,
  },
  GlassAspectRatio: {
    name: "GlassAspectRatio",
    description: "Maintain aspect ratio for media, powered by Radix UI.",
    category: "Layout",
    radix: "@radix-ui/react-aspect-ratio",
    props: [
      { name: "ratio", type: "number", default: "1", description: "Aspect ratio (e.g. 16/9)" },
    ],
    example: `import { GlassAspectRatio } from 'koori-ui'

<GlassAspectRatio ratio={16 / 9}>
  <img src="..." />
</GlassAspectRatio>`,
  },
  GlassDrawer: {
    name: "GlassDrawer",
    description: "Side/bottom drawer with drag-to-dismiss powered by Vaul.",
    category: "Overlay",
    radix: "vaul",
    subComponents: ["GlassDrawerTrigger", "GlassDrawerContent", "GlassDrawerHeader", "GlassDrawerTitle", "GlassDrawerDescription", "GlassDrawerFooter", "GlassDrawerClose"],
    props: [
      { name: "open", type: "boolean", description: "Controlled open state" },
      { name: "defaultOpen", type: "boolean", description: "Default open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Change handler" },
      { name: "shouldScaleBackground", type: "boolean", default: "true", description: "Scale background on open" },
    ],
    example: `import { GlassDrawer, GlassDrawerTrigger, GlassDrawerContent, GlassDrawerHeader, GlassDrawerTitle } from 'koori-ui'

<GlassDrawer>
  <GlassDrawerTrigger asChild><button>Open</button></GlassDrawerTrigger>
  <GlassDrawerContent>
    <GlassDrawerHeader><GlassDrawerTitle>Edit profile</GlassDrawerTitle></GlassDrawerHeader>
  </GlassDrawerContent>
</GlassDrawer>`,
  },
  GlassCalendar: {
    name: "GlassCalendar",
    description: "Date picker calendar powered by react-day-picker.",
    category: "Form",
    radix: "react-day-picker",
    props: [
      { name: "mode", type: '"single" | "multiple" | "range"', default: '"single"', description: "Selection mode" },
      { name: "selected", type: "Date | Date[] | DateRange", description: "Selected date(s)" },
      { name: "onSelect", type: "(date) => void", description: "Change handler" },
      { name: "disabled", type: "Date[] | ((date: Date) => boolean)", description: "Disabled dates" },
    ],
    example: `import { GlassCalendar } from 'koori-ui'
import { useState } from 'react'

const [date, setDate] = useState<Date | undefined>()
<GlassCalendar mode="single" selected={date} onSelect={setDate} />`,
  },
  GlassCommand: {
    name: "GlassCommand",
    description: "Command palette with fuzzy search (cmdk).",
    category: "Overlay",
    radix: "cmdk",
    subComponents: ["GlassCommandInput", "GlassCommandList", "GlassCommandEmpty", "GlassCommandGroup", "GlassCommandItem", "GlassCommandSeparator", "GlassCommandShortcut"],
    props: [],
    example: `import { GlassCommand, GlassCommandInput, GlassCommandList, GlassCommandGroup, GlassCommandItem, GlassCommandEmpty } from 'koori-ui'

<GlassCommand>
  <GlassCommandInput placeholder="Search..." />
  <GlassCommandList>
    <GlassCommandEmpty>No results.</GlassCommandEmpty>
    <GlassCommandGroup heading="Suggestions">
      <GlassCommandItem>Calendar</GlassCommandItem>
    </GlassCommandGroup>
  </GlassCommandList>
</GlassCommand>`,
  },
  GlassCarousel: {
    name: "GlassCarousel",
    description: "Touch-friendly carousel powered by embla-carousel-react.",
    category: "Data Display",
    radix: "embla-carousel-react",
    subComponents: ["GlassCarouselContent", "GlassCarouselItem", "GlassCarouselPrevious", "GlassCarouselNext"],
    props: [
      { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Scroll direction" },
      { name: "opts", type: "CarouselOptions", description: "Embla options" },
      { name: "setApi", type: "(api: CarouselApi) => void", description: "Get carousel API" },
    ],
    example: `import { GlassCarousel, GlassCarouselContent, GlassCarouselItem, GlassCarouselPrevious, GlassCarouselNext } from 'koori-ui'

<GlassCarousel>
  <GlassCarouselContent>
    <GlassCarouselItem>Slide 1</GlassCarouselItem>
    <GlassCarouselItem>Slide 2</GlassCarouselItem>
  </GlassCarouselContent>
  <GlassCarouselPrevious />
  <GlassCarouselNext />
</GlassCarousel>`,
  },
  GlassInputOTP: {
    name: "GlassInputOTP",
    description: "One-time password input (powered by input-otp).",
    category: "Form",
    radix: "input-otp",
    subComponents: ["GlassInputOTPGroup", "GlassInputOTPSlot", "GlassInputOTPSeparator"],
    props: [
      { name: "maxLength", type: "number", description: "Number of slots" },
      { name: "value", type: "string", description: "Controlled value" },
      { name: "onChange", type: "(value: string) => void", description: "Change handler" },
      { name: "onComplete", type: "(value: string) => void", description: "Complete handler" },
    ],
    example: `import { GlassInputOTP, GlassInputOTPGroup, GlassInputOTPSlot, GlassInputOTPSeparator } from 'koori-ui'

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
</GlassInputOTP>`,
  },
  GlassPagination: {
    name: "GlassPagination",
    description: "Page navigation with prev/next and numbered buttons.",
    category: "Navigation",
    props: [
      { name: "total", type: "number", description: "Total number of pages" },
      { name: "current", type: "number", description: "Currently active page (1-indexed)" },
      { name: "onPageChange", type: "(page: number) => void", description: "Page change handler" },
      { name: "siblingCount", type: "number", default: "1", description: "Pages shown around current" },
    ],
    example: `import { GlassPagination } from 'koori-ui'
import { useState } from 'react'

const [page, setPage] = useState(1)
<GlassPagination total={10} current={page} onPageChange={setPage} />`,
  },
  GlassSpinner: {
    name: "GlassSpinner",
    description: "Animated loading spinner with optional label.",
    category: "Feedback",
    props: [
      { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: "Spinner size" },
      { name: "label", type: "string", description: "Accessibility label + visible text" },
    ],
    example: `import { GlassSpinner } from 'koori-ui'

<GlassSpinner size="lg" label="Loading..." />`,
  },
  GlassEmpty: {
    name: "GlassEmpty",
    description: "Empty state placeholder with icon, title, and optional action.",
    category: "Feedback",
    props: [
      { name: "title", type: "string", description: "Primary message (required)" },
      { name: "description", type: "string", description: "Secondary explanation" },
      { name: "icon", type: "ReactNode", description: "Custom icon (defaults to Inbox)" },
      { name: "action", type: "ReactNode", description: "Optional action element (button)" },
    ],
    example: `import { GlassEmpty, GlassButton } from 'koori-ui'

<GlassEmpty
  title="No messages yet"
  description="When you receive messages, they'll appear here."
  action={<GlassButton size="sm" variant="primary">Compose</GlassButton>}
/>`,
  },
  GlassTimeline: {
    name: "GlassTimeline",
    description: "Vertical activity timeline with status-colored dots.",
    category: "Data Display",
    subComponents: ["GlassTimelineItem"],
    props: [
      { name: "time", type: "string", description: "Timestamp label (on GlassTimelineItem)" },
      { name: "title", type: "string", description: "Item title (required, on GlassTimelineItem)" },
      { name: "description", type: "string", description: "Item description (on GlassTimelineItem)" },
      { name: "status", type: '"default" | "success" | "warning" | "error"', default: '"default"', description: "Dot color (on GlassTimelineItem)" },
      { name: "icon", type: "ReactNode", description: "Icon inside the dot (on GlassTimelineItem)" },
    ],
    example: `import { GlassTimeline, GlassTimelineItem } from 'koori-ui'

<GlassTimeline>
  <GlassTimelineItem status="success" time="2h ago" title="Deployed v1.1.0" description="Release successful." />
  <GlassTimelineItem status="warning" time="1d ago" title="Build warning" description="Bundle size up." />
</GlassTimeline>`,
  },
  GlassLineChart: {
    name: "GlassLineChart",
    description: "Line chart built on Recharts with glass-styled tooltips.",
    category: "Data Display",
    radix: "recharts",
    props: [
      { name: "data", type: "any[]", description: "Chart data array" },
      { name: "index", type: "string", description: "Key used for X-axis labels" },
      { name: "categories", type: "{ key: string; color: string; name?: string }[]", description: "Data series" },
      { name: "height", type: "number", default: "300", description: "Chart height in px" },
    ],
    example: `import { GlassLineChart } from 'koori-ui'

<GlassLineChart
  data={data}
  index="month"
  categories={[{ key: 'revenue', color: 'var(--koori-primary)', name: 'Revenue' }]}
/>`,
  },
};
