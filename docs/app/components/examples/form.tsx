"use client";

import {
  GlassInput, GlassTextarea,
  GlassCheckbox, GlassSwitch,
  GlassRadioGroup, GlassRadioItem,
  GlassSelect, GlassSelectTrigger, GlassSelectContent, GlassSelectItem, GlassSelectValue,
  GlassSlider,
} from "koori-ui";

export function InputDemo() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[var(--koori-muted)]">Name</label>
        <GlassInput placeholder="Your name" />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[var(--koori-muted)]">Email</label>
        <GlassInput type="email" placeholder="you@example.com" />
      </div>
    </div>
  );
}

export function TextareaDemo() {
  return (
    <div className="w-full max-w-md">
      <label className="mb-1.5 block text-xs font-medium text-[var(--koori-muted)]">Message</label>
      <GlassTextarea placeholder="Write something..." rows={4} />
    </div>
  );
}

export function CheckboxDemo() {
  return (
    <div className="space-y-2.5">
      <GlassCheckbox label="Enable notifications" id="cb-1" />
      <GlassCheckbox label="Subscribe to updates" id="cb-2" defaultChecked />
      <GlassCheckbox label="Disabled option" id="cb-3" disabled />
    </div>
  );
}

export function SwitchDemo() {
  return (
    <div className="space-y-2.5">
      <GlassSwitch label="Dark mode" id="sw-1" defaultChecked />
      <GlassSwitch label="Notifications" id="sw-2" />
      <GlassSwitch label="Disabled" id="sw-3" disabled />
    </div>
  );
}

export function RadioDemo() {
  return (
    <GlassRadioGroup defaultValue="option1">
      <GlassRadioItem value="option1" label="Default plan (free)" id="rd-1" />
      <GlassRadioItem value="option2" label="Pro plan ($19/mo)" id="rd-2" />
      <GlassRadioItem value="option3" label="Studio plan ($59/mo)" id="rd-3" />
    </GlassRadioGroup>
  );
}

export function SelectDemo() {
  return (
    <div className="w-full max-w-xs">
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
  );
}

export function SliderDemo() {
  return (
    <div className="w-full max-w-xs">
      <GlassSlider defaultValue={[60]} max={100} step={1} />
    </div>
  );
}
