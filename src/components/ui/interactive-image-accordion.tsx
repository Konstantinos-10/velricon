"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";

type AccordionItem = {
  id: number;
  title: string;
  subtitle?: string;
  imageUrl: string;
  href?: string;
  accent?: string;
};

type Props = {
  items?: AccordionItem[];
  defaultActiveIndex?: number;
  className?: string;
  onActiveChange?: (item: AccordionItem | null) => void;
  onSelect?: (item: AccordionItem) => void;
};

const DEFAULT_ITEMS: AccordionItem[] = [
  {
    id: 1,
    title: "For Startups",
    subtitle: "Runway, cashflow, founder clarity",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1974&auto=format&fit=crop",
    href: "/services/startups",
    accent: "#74B3FF",
  },
  {
    id: 2,
    title: "For Scaleups",
    subtitle: "Forecasting, KPIs, growth control",
    imageUrl:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1974&auto=format&fit=crop",
    href: "/services/scaleups",
    accent: "#60A5FA",
  },
  {
    id: 3,
    title: "For Established SMEs",
    subtitle: "Margins, performance, discipline",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1974&auto=format&fit=crop",
    href: "/services/smes",
    accent: "#3B82F6",
  },
];

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export function InteractiveImageAccordion({
  items,
  defaultActiveIndex = 0,
  className,
  onActiveChange,
  onSelect,
}: Props) {
  const data = useMemo(() => items?.length ? items : DEFAULT_ITEMS, [items]);
  const [activeIndex, setActiveIndex] = useState(() => {
    const safe = Math.min(Math.max(defaultActiveIndex, 0), data.length - 1);
    return safe;
  });

  const activeItem = data[activeIndex] ?? null;

  const setActive = (index: number) => {
    setActiveIndex(index);
    onActiveChange?.(data[index] ?? null);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="relative mx-auto w-full max-w-[520px]">
        {/* Subtle outer frame for "high-end" feel */}
        <div className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(116,179,255,0.18), rgba(14,16,26,0) 70%)",
          }}
        />

        <div className="relative flex items-center justify-center gap-3 rounded-[28px] border border-surface-border/70 bg-elevation-layer/25 p-3 backdrop-blur-md">
          {data.map((item, index) => {
            const isActive = index === activeIndex;
            const accent = item.accent ?? "#74B3FF";

            return (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => onSelect?.(item)}
                className={cn(
                  "group relative h-[420px] overflow-hidden rounded-2xl transition-all duration-700 ease-in-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strategy-blue/60",
                  isActive ? "w-[360px]" : "w-[64px]",
                )}
                aria-label={item.title}
              >
                {/* Background image */}
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes={isActive ? "360px" : "64px"}
                  className={cn(
                    "object-cover transition-transform duration-700 ease-out",
                    isActive ? "scale-[1.02]" : "scale-[1.08]",
                  )}
                  priority={index === 0}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/45" />

                {/* Premium edge glow on active */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                  style={{
                    boxShadow: `inset 0 0 0 1px rgba(148,163,184,0.18), 0 18px 50px rgba(0,0,0,0.55)`,
                  }}
                />

                {/* Accent glow */}
                <div
                  className={cn(
                    "pointer-events-none absolute -inset-8 opacity-0 blur-3xl transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                  style={{
                    background: `radial-gradient(60% 60% at 50% 60%, ${hexToRgba(
                      accent,
                      0.22,
                    )}, rgba(0,0,0,0) 70%)`,
                  }}
                />

                {/* Caption - Different layouts for active vs inactive */}
                {isActive ? (
                  // Active: Bottom center with pill
                  <div className="absolute inset-0 flex items-end justify-center p-5">
                    <div className="w-full">
                      <div className="mx-auto inline-flex max-w-[92%] items-center gap-2 rounded-full bg-black/25 px-4 py-2 backdrop-blur-sm border border-white/10">
                        <span className="text-sm font-medium tracking-tight text-[#E2E8F0] whitespace-nowrap">
                          {item.title}
                        </span>
                      </div>

                      {item.subtitle && (
                        <div className="mt-3 text-center text-sm font-light tracking-tight text-white/70">
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // Inactive: Vertical text centered on card
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center justify-center px-2 py-3 rounded-full bg-black/25 backdrop-blur-sm border border-white/10">
                      <span 
                        className="text-sm font-medium tracking-tight text-[#E2E8F0] whitespace-nowrap"
                        style={{
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed'
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Minimal hint line */}
        <div className="mt-3 text-center text-xs font-medium tracking-tight text-slate/80">
          Hover to preview. Click to open.
        </div>
      </div>
    </div>
  );
}

function hexToRgba(hex: string, alpha: number) {
  const safe = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex) ? hex : "#74B3FF";
  let c = safe.slice(1);
  if (c.length === 3) c = c.split("").map((x) => x + x).join("");
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}