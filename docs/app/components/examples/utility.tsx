"use client";

import { useState } from "react";
import {
  GlassPagination,
  GlassSpinner,
  GlassEmpty,
  GlassTimeline, GlassTimelineItem,
  GlassCommand, GlassCommandInput, GlassCommandList, GlassCommandEmpty,
  GlassCommandGroup, GlassCommandItem, GlassCommandSeparator,
  GlassButton,
} from "koori-ui";
import { Inbox, Search, FileText, Settings } from "lucide-react";

export function PaginationDemo() {
  const [page, setPage] = useState(1);
  return <GlassPagination total={10} current={page} onPageChange={setPage} />;
}

export function SpinnerDemo() {
  return (
    <div className="flex flex-wrap items-end gap-6">
      <GlassSpinner size="sm" />
      <GlassSpinner size="md" />
      <GlassSpinner size="lg" />
      <GlassSpinner size="xl" />
    </div>
  );
}

export function EmptyDemo() {
  return (
    <GlassEmpty
      icon={<Inbox className="h-6 w-6" />}
      title="No messages"
      description="When you receive new messages they will show up here."
      action={<GlassButton size="sm" variant="primary">Refresh</GlassButton>}
    />
  );
}

export function TimelineDemo() {
  return (
    <GlassTimeline className="w-full max-w-md">
      <GlassTimelineItem
        time="10:24 AM"
        title="Deploy succeeded"
        description="Production build deployed without errors."
        status="success"
      />
      <GlassTimelineItem
        time="10:18 AM"
        title="Build started"
        description="CI pipeline triggered from main branch."
      />
      <GlassTimelineItem
        time="09:55 AM"
        title="Memory usage high"
        description="Usage peaked at 87% for 2 minutes."
        status="warning"
      />
      <GlassTimelineItem
        time="09:30 AM"
        title="Deploy failed"
        description="TypeScript errors blocked the build."
        status="error"
      />
    </GlassTimeline>
  );
}

export function CommandDemo() {
  return (
    <GlassCommand className="w-full max-w-md">
      <GlassCommandInput placeholder="Type a command or search..." />
      <GlassCommandList>
        <GlassCommandEmpty>No results found.</GlassCommandEmpty>
        <GlassCommandGroup heading="Suggestions">
          <GlassCommandItem>
            <Search className="h-4 w-4" />
            <span>Search docs</span>
          </GlassCommandItem>
          <GlassCommandItem>
            <FileText className="h-4 w-4" />
            <span>New file</span>
          </GlassCommandItem>
        </GlassCommandGroup>
        <GlassCommandSeparator />
        <GlassCommandGroup heading="Settings">
          <GlassCommandItem>
            <Settings className="h-4 w-4" />
            <span>Preferences</span>
          </GlassCommandItem>
        </GlassCommandGroup>
      </GlassCommandList>
    </GlassCommand>
  );
}
