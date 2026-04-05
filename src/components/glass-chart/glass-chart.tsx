import * as React from "react";
import { useState, useEffect } from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { cn } from "../../utils/cn";

/* ---------- GlassTooltip ---------- */
export function GlassChartTooltip({
    active,
    payload,
    label,
    valuePrefix = "",
    valueSuffix = "",
}: any) {
    if (active && payload && payload.length) {
        return (
            <div className="glass-elevated rounded-xl border p-3 shadow-xl z-50 min-w-[8rem]">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--koori-muted)]">
                    {label}
                </p>
                <div className="space-y-1.5">
                    {payload.map((item: any, index: number) => (
                        <div key={index} className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{ backgroundColor: item.color || "var(--koori-primary)" }}
                                />
                                <span className="text-sm text-[var(--koori-muted)]">{item.name}</span>
                            </div>
                            <span className="text-sm font-semibold text-[var(--koori-text)]">
                                {valuePrefix}{item.value}{valueSuffix}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
}

/* ---------- GlassAreaChart ---------- */
export function GlassAreaChart({
    data,
    className,
    height = 300,
    categories,
    index,
}: {
    data: any[];
    className?: string;
    height?: number;
    categories: { key: string; color: string; name?: string }[];
    index: string;
}) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const raf = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    if (!mounted) {
        return <div className={cn("w-full", className)} style={{ height, minHeight: height }} />;
    }

    return (
        <div className={cn("w-full", className)} style={{ height, minHeight: height, minWidth: 0 }}>
            <ResponsiveContainer width="100%" height="100%" minWidth={200}>
                <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                        {categories.map((cat, i) => (
                            <linearGradient key={cat.key} id={`grad-${cat.key}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={cat.color} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={cat.color} stopOpacity={0} />
                            </linearGradient>
                        ))}
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.06)" />
                    <XAxis
                        dataKey={index}
                        stroke="rgba(255,255,255,0.4)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        dy={10}
                    />
                    <YAxis
                        stroke="rgba(255,255,255,0.4)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}`}
                    />
                    <Tooltip content={<GlassChartTooltip />} cursor={{ stroke: "rgba(255,255,255,0.1)", strokeWidth: 1, strokeDasharray: "4 4" }} />
                    {categories.map((cat, i) => (
                        <Area
                            key={cat.key}
                            type="monotone"
                            dataKey={cat.key}
                            name={cat.name || cat.key}
                            stroke={cat.color}
                            strokeWidth={2}
                            fillOpacity={1}
                            fill={`url(#grad-${cat.key})`}
                            activeDot={{ r: 4, strokeWidth: 0, fill: cat.color }}
                        />
                    ))}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

/* ---------- GlassBarChart ---------- */
export function GlassBarChart({
    data,
    className,
    height = 300,
    categories,
    index,
}: {
    data: any[];
    className?: string;
    height?: number;
    categories: { key: string; color: string; name?: string }[];
    index: string;
}) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const raf = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    if (!mounted) {
        return <div className={cn("w-full", className)} style={{ height, minHeight: height }} />;
    }

    return (
        <div className={cn("w-full", className)} style={{ height, minHeight: height, minWidth: 0 }}>
            <ResponsiveContainer width="100%" height="100%" minWidth={200}>
                <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }} barSize={32}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.06)" />
                    <XAxis
                        dataKey={index}
                        stroke="rgba(255,255,255,0.4)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        dy={10}
                    />
                    <YAxis
                        stroke="rgba(255,255,255,0.4)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}`}
                    />
                    <Tooltip content={<GlassChartTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                    {categories.map((cat, i) => (
                        <Bar
                            key={cat.key}
                            dataKey={cat.key}
                            name={cat.name || cat.key}
                            fill={cat.color}
                            radius={[4, 4, 0, 0]}
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
