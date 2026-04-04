/* ---------- Styles (side-effect import) ---------- */
import "./styles/glass.css";

/* ---------- Utilities ---------- */
export { cn } from "./utils/cn";

/* ---------- GlassPanel ---------- */
export { GlassPanel } from "./components/glass-panel";
export type { GlassPanelProps } from "./components/glass-panel";

/* ---------- GlassCard ---------- */
export {
    GlassCard,
    GlassCardHeader,
    GlassCardBody,
    GlassCardFooter,
} from "./components/glass-card";
export type {
    GlassCardProps,
    GlassCardHeaderProps,
    GlassCardBodyProps,
    GlassCardFooterProps,
} from "./components/glass-card";

/* ---------- GlassButton ---------- */
export { GlassButton } from "./components/glass-button";
export type {
    GlassButtonProps,
    GlassButtonVariant,
    GlassButtonSize,
} from "./components/glass-button";

/* ---------- GlassInput ---------- */
export { GlassInput } from "./components/glass-input";
export type { GlassInputProps } from "./components/glass-input";

/* ---------- GlassDialog ---------- */
export {
    GlassDialog,
    GlassDialogTrigger,
    GlassDialogContent,
    GlassDialogClose,
    GlassDialogTitle,
    GlassDialogDescription,
} from "./components/glass-dialog";
export type {
    GlassDialogProps,
    GlassDialogTriggerProps,
    GlassDialogContentProps,
    GlassDialogCloseProps,
    GlassDialogTitleProps,
    GlassDialogDescriptionProps,
} from "./components/glass-dialog";
