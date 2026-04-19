"use client";

import { useState } from "react";
import {
  GlassToggle,
  GlassToggleGroup, GlassToggleGroupItem,
  GlassLabel, GlassInput,
  GlassCalendar,
  GlassInputOTP, GlassInputOTPGroup, GlassInputOTPSlot, GlassInputOTPSeparator,
} from "koori-ui";
import { Bold, Italic, Underline } from "lucide-react";

export function ToggleDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <GlassToggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </GlassToggle>
      <GlassToggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </GlassToggle>
      <GlassToggle aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </GlassToggle>
    </div>
  );
}

export function ToggleGroupDemo() {
  return (
    <GlassToggleGroup type="single" defaultValue="bold" variant="outline">
      <GlassToggleGroupItem value="bold" aria-label="Bold">
        <Bold className="h-4 w-4" />
      </GlassToggleGroupItem>
      <GlassToggleGroupItem value="italic" aria-label="Italic">
        <Italic className="h-4 w-4" />
      </GlassToggleGroupItem>
      <GlassToggleGroupItem value="underline" aria-label="Underline">
        <Underline className="h-4 w-4" />
      </GlassToggleGroupItem>
    </GlassToggleGroup>
  );
}

export function LabelDemo() {
  return (
    <div className="w-full max-w-xs space-y-1.5">
      <GlassLabel htmlFor="label-email">Email</GlassLabel>
      <GlassInput id="label-email" type="email" placeholder="you@example.com" />
    </div>
  );
}

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return <GlassCalendar mode="single" selected={date} onSelect={setDate} />;
}

export function InputOTPDemo() {
  const [value, setValue] = useState("");
  return (
    <GlassInputOTP maxLength={6} value={value} onChange={setValue}>
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
  );
}
