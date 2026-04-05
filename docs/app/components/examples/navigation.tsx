"use client";

import {
  GlassTabs, GlassTabsList, GlassTabsTrigger, GlassTabsContent,
  GlassBreadcrumb, GlassBreadcrumbItem, GlassBreadcrumbSeparator,
  GlassDropdownMenu, GlassDropdownMenuTrigger, GlassDropdownMenuContent, GlassDropdownMenuItem, GlassDropdownMenuSeparator, GlassDropdownMenuLabel,
  GlassButton, GlassCard,
} from "koori-ui";
import { Settings, Bell, MoreHorizontal } from "lucide-react";

export function TabsDemo() {
  return (
    <GlassTabs defaultValue="account" className="w-full max-w-sm">
      <GlassTabsList className="grid w-full grid-cols-2">
        <GlassTabsTrigger value="account">Account</GlassTabsTrigger>
        <GlassTabsTrigger value="password">Password</GlassTabsTrigger>
      </GlassTabsList>
      <GlassTabsContent value="account">
        <GlassCard className="mt-2 p-4 text-sm text-[var(--koori-muted)]">
          Make changes to your account here.
        </GlassCard>
      </GlassTabsContent>
      <GlassTabsContent value="password">
        <GlassCard className="mt-2 p-4 text-sm text-[var(--koori-muted)]">
          Change your password here.
        </GlassCard>
      </GlassTabsContent>
    </GlassTabs>
  );
}

export function BreadcrumbDemo() {
  return (
    <GlassBreadcrumb>
      <GlassBreadcrumbItem href="#">Home</GlassBreadcrumbItem>
      <GlassBreadcrumbSeparator />
      <GlassBreadcrumbItem href="#">Components</GlassBreadcrumbItem>
      <GlassBreadcrumbSeparator />
      <GlassBreadcrumbItem isCurrent>Breadcrumb</GlassBreadcrumbItem>
    </GlassBreadcrumb>
  );
}

export function DropdownMenuDemo() {
  return (
    <GlassDropdownMenu>
      <GlassDropdownMenuTrigger asChild>
        <GlassButton size="sm"><MoreHorizontal className="h-4 w-4 mr-1" /> Actions</GlassButton>
      </GlassDropdownMenuTrigger>
      <GlassDropdownMenuContent>
        <GlassDropdownMenuLabel>My Account</GlassDropdownMenuLabel>
        <GlassDropdownMenuSeparator />
        <GlassDropdownMenuItem><Settings className="h-4 w-4" /> Settings</GlassDropdownMenuItem>
        <GlassDropdownMenuItem><Bell className="h-4 w-4" /> Notifications</GlassDropdownMenuItem>
        <GlassDropdownMenuSeparator />
        <GlassDropdownMenuItem className="text-[var(--koori-error)]">Sign out</GlassDropdownMenuItem>
      </GlassDropdownMenuContent>
    </GlassDropdownMenu>
  );
}
