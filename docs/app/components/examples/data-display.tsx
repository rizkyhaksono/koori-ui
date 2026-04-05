"use client";

import {
  GlassAvatar, GlassAvatarImage, GlassAvatarFallback,
  GlassTable, GlassThead, GlassTbody, GlassTr, GlassTh, GlassTd,
  GlassStatCard, GlassBadge, GlassCode,
} from "koori-ui";
import { User, Bell } from "lucide-react";

export function AvatarDemo() {
  return (
    <div className="flex gap-4">
      <GlassAvatar>
        <GlassAvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <GlassAvatarFallback>CN</GlassAvatarFallback>
      </GlassAvatar>
      <GlassAvatar>
        <GlassAvatarFallback><User size={20} className="opacity-50" /></GlassAvatarFallback>
      </GlassAvatar>
    </div>
  );
}

export function TableDemo() {
  return (
    <GlassTable>
      <GlassThead>
        <GlassTr>
          <GlassTh>Component</GlassTh>
          <GlassTh>Type</GlassTh>
          <GlassTh>Status</GlassTh>
        </GlassTr>
      </GlassThead>
      <GlassTbody>
        {[
          { name: "GlassButton", type: "General", status: "Stable" },
          { name: "GlassDialog", type: "Feedback", status: "Stable" },
          { name: "GlassSelect", type: "Form", status: "Stable" },
        ].map((r) => (
          <GlassTr key={r.name}>
            <GlassTd><GlassCode>{r.name}</GlassCode></GlassTd>
            <GlassTd>{r.type}</GlassTd>
            <GlassTd><GlassBadge variant="success">{r.status}</GlassBadge></GlassTd>
          </GlassTr>
        ))}
      </GlassTbody>
    </GlassTable>
  );
}

export function StatCardDemo() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <GlassStatCard label="Total Revenue" value="$48.2k" trend={12.5} icon={<Bell className="h-5 w-5" />} />
      <GlassStatCard label="Churn Rate" value="2.1%" trend={-0.4} variant="subtle" />
    </div>
  );
}
