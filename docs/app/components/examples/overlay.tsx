"use client";

import {
  GlassAlertDialog, GlassAlertDialogTrigger, GlassAlertDialogContent,
  GlassAlertDialogTitle, GlassAlertDialogDescription,
  GlassAlertDialogAction, GlassAlertDialogCancel,
  GlassHoverCard, GlassHoverCardTrigger, GlassHoverCardContent,
  GlassContextMenu, GlassContextMenuTrigger, GlassContextMenuContent,
  GlassContextMenuItem, GlassContextMenuSeparator,
  GlassDrawer, GlassDrawerTrigger, GlassDrawerContent,
  GlassDrawerHeader, GlassDrawerFooter, GlassDrawerTitle, GlassDrawerDescription, GlassDrawerClose,
  GlassButton, GlassAvatar, GlassAvatarFallback,
} from "koori-ui";

export function AlertDialogDemo() {
  return (
    <GlassAlertDialog>
      <GlassAlertDialogTrigger asChild>
        <GlassButton variant="primary">Delete account</GlassButton>
      </GlassAlertDialogTrigger>
      <GlassAlertDialogContent>
        <GlassAlertDialogTitle>Are you absolutely sure?</GlassAlertDialogTitle>
        <GlassAlertDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your data.
        </GlassAlertDialogDescription>
        <div className="mt-6 flex justify-end gap-3">
          <GlassAlertDialogCancel asChild>
            <GlassButton>Cancel</GlassButton>
          </GlassAlertDialogCancel>
          <GlassAlertDialogAction asChild>
            <GlassButton variant="primary">Continue</GlassButton>
          </GlassAlertDialogAction>
        </div>
      </GlassAlertDialogContent>
    </GlassAlertDialog>
  );
}

export function HoverCardDemo() {
  return (
    <GlassHoverCard>
      <GlassHoverCardTrigger asChild>
        <GlassButton>Hover me</GlassButton>
      </GlassHoverCardTrigger>
      <GlassHoverCardContent>
        <div className="flex gap-3">
          <GlassAvatar>
            <GlassAvatarFallback>KU</GlassAvatarFallback>
          </GlassAvatar>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[var(--koori-text)]">@koori-ui</p>
            <p className="text-xs text-[var(--koori-muted)]">
              A glassmorphism component library for React 19.
            </p>
          </div>
        </div>
      </GlassHoverCardContent>
    </GlassHoverCard>
  );
}

export function ContextMenuDemo() {
  return (
    <GlassContextMenu>
      <GlassContextMenuTrigger asChild>
        <div className="glass-subtle flex h-28 w-64 items-center justify-center rounded-[var(--koori-radius-lg)] text-sm text-[var(--koori-muted)]">
          Right-click here
        </div>
      </GlassContextMenuTrigger>
      <GlassContextMenuContent>
        <GlassContextMenuItem>Cut</GlassContextMenuItem>
        <GlassContextMenuItem>Copy</GlassContextMenuItem>
        <GlassContextMenuSeparator />
        <GlassContextMenuItem>Paste</GlassContextMenuItem>
      </GlassContextMenuContent>
    </GlassContextMenu>
  );
}

export function DrawerDemo() {
  return (
    <GlassDrawer>
      <GlassDrawerTrigger asChild>
        <GlassButton variant="primary">Open Drawer</GlassButton>
      </GlassDrawerTrigger>
      <GlassDrawerContent>
        <GlassDrawerHeader>
          <GlassDrawerTitle>Edit profile</GlassDrawerTitle>
          <GlassDrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </GlassDrawerDescription>
        </GlassDrawerHeader>
        <GlassDrawerFooter>
          <GlassDrawerClose asChild>
            <GlassButton>Close</GlassButton>
          </GlassDrawerClose>
        </GlassDrawerFooter>
      </GlassDrawerContent>
    </GlassDrawer>
  );
}
