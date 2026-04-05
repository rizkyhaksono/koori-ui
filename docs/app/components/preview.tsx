"use client";

import { type ReactNode } from "react";

export function Preview({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-4 rounded-xl border border-fd-border bg-fd-card p-6">
      <div className="flex flex-wrap items-start gap-4">{children}</div>
    </div>
  );
}

export function PreviewColumn({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-4 rounded-xl border border-fd-border bg-fd-card p-6">
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

export function PreviewGrid({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-4 rounded-xl border border-fd-border bg-fd-card p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}
