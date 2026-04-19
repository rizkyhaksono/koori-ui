"use client";

import {
  GlassNavigationMenu, GlassNavigationMenuList, GlassNavigationMenuItem,
  GlassNavigationMenuTrigger, GlassNavigationMenuContent, GlassNavigationMenuLink,
  GlassMenubar, GlassMenubarMenu, GlassMenubarTrigger, GlassMenubarContent,
  GlassMenubarItem, GlassMenubarSeparator,
} from "koori-ui";

export function NavigationMenuDemo() {
  return (
    <GlassNavigationMenu>
      <GlassNavigationMenuList>
        <GlassNavigationMenuItem>
          <GlassNavigationMenuTrigger>Getting Started</GlassNavigationMenuTrigger>
          <GlassNavigationMenuContent>
            <div className="grid w-64 gap-2 p-4">
              <GlassNavigationMenuLink className="rounded-md p-2 text-sm hover:bg-white/10" href="#">
                Introduction
              </GlassNavigationMenuLink>
              <GlassNavigationMenuLink className="rounded-md p-2 text-sm hover:bg-white/10" href="#">
                Installation
              </GlassNavigationMenuLink>
            </div>
          </GlassNavigationMenuContent>
        </GlassNavigationMenuItem>
        <GlassNavigationMenuItem>
          <GlassNavigationMenuTrigger>Components</GlassNavigationMenuTrigger>
          <GlassNavigationMenuContent>
            <div className="grid w-64 gap-2 p-4">
              <GlassNavigationMenuLink className="rounded-md p-2 text-sm hover:bg-white/10" href="#">
                Button
              </GlassNavigationMenuLink>
              <GlassNavigationMenuLink className="rounded-md p-2 text-sm hover:bg-white/10" href="#">
                Dialog
              </GlassNavigationMenuLink>
            </div>
          </GlassNavigationMenuContent>
        </GlassNavigationMenuItem>
      </GlassNavigationMenuList>
    </GlassNavigationMenu>
  );
}

export function MenubarDemo() {
  return (
    <GlassMenubar>
      <GlassMenubarMenu>
        <GlassMenubarTrigger>File</GlassMenubarTrigger>
        <GlassMenubarContent>
          <GlassMenubarItem>New Tab</GlassMenubarItem>
          <GlassMenubarItem>New Window</GlassMenubarItem>
          <GlassMenubarSeparator />
          <GlassMenubarItem>Print…</GlassMenubarItem>
        </GlassMenubarContent>
      </GlassMenubarMenu>
      <GlassMenubarMenu>
        <GlassMenubarTrigger>Edit</GlassMenubarTrigger>
        <GlassMenubarContent>
          <GlassMenubarItem>Undo</GlassMenubarItem>
          <GlassMenubarItem>Redo</GlassMenubarItem>
          <GlassMenubarSeparator />
          <GlassMenubarItem>Cut</GlassMenubarItem>
          <GlassMenubarItem>Copy</GlassMenubarItem>
          <GlassMenubarItem>Paste</GlassMenubarItem>
        </GlassMenubarContent>
      </GlassMenubarMenu>
      <GlassMenubarMenu>
        <GlassMenubarTrigger>View</GlassMenubarTrigger>
        <GlassMenubarContent>
          <GlassMenubarItem>Reload</GlassMenubarItem>
          <GlassMenubarItem>Toggle Fullscreen</GlassMenubarItem>
        </GlassMenubarContent>
      </GlassMenubarMenu>
    </GlassMenubar>
  );
}
