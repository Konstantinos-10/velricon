// src/components/hero/HeroServiceRing.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SEGMENTS, RING_CONFIG, type SegmentKey, type Segment } from "./heroServiceRing.config";

export interface HeroServiceRingProps {
  active?: SegmentKey | null;
  onHoverChange?: (key: SegmentKey | null) => void;
  onSelect?: (key: SegmentKey) => void;
  className?: string;
}

export function HeroServiceRing({
  active,
  onHoverChange,
  onSelect,
  className = "",
}: HeroServiceRingProps) {
  const router = useRouter();
  const [hoveredSegment, setHoveredSegment] = useState<SegmentKey | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const activeSegment = hoveredSegment || active;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (focusedIndex === -1) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % SEGMENTS.length);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + SEGMENTS.length) % SEGMENTS.length);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSegmentSelect(SEGMENTS[focusedIndex].key);
      } else if (e.key === "Escape") {
        setFocusedIndex(-1);
        containerRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedIndex]);

  const handleSegmentHover = (key: SegmentKey | null) => {
    setHoveredSegment(key);
    onHoverChange?.(key);
  };

  const handleSegmentSelect = (key: SegmentKey) => {
    onSelect?.(key);
    const segment = SEGMENTS.find((s) => s.key === key);
    if (segment) {
      router.push(segment.route);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ perspective: "1200px" }}
      onMouseLeave={() => handleSegmentHover(null)}
    >
      <motion.div
        className="relative"
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -RING_CONFIG.floatAmplitude, 0],
              }
        }
        transition={{
          duration: RING_CONFIG.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            filter: "blur(40px)",
            opacity: 0.3,
            transform: "translateZ(-50px) scale(0.8)",
          }}
          animate={
            activeSegment
              ? {
                  opacity: 0.5,
                  scale: 0.85,
                }
              : {
                  opacity: 0.3,
                  scale: 0.8,
                }
          }
          transition={{ duration: 0.4 }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(ellipse, ${RING_CONFIG.shadowColor} 0%, transparent 70%)`,
            }}
          />
        </motion.div>

        <svg
          viewBox="-220 -220 440 440"
          className="w-full h-auto max-w-[280px] md:max-w-[460px]"
          style={{ filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4))" }}
        >
          <defs>
            {SEGMENTS.map((segment) => (
              <radialGradient
                key={`gradient-${segment.key}`}
                id={`gradient-${segment.key}`}
                cx="50%"
                cy="50%"
                r="50%"
              >
                <stop offset="0%" stopColor={segment.gradientStart} />
                <stop offset="100%" stopColor={segment.gradientEnd} />
              </radialGradient>
            ))}

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {SEGMENTS.map((segment, index) => {
            const isActive = activeSegment === segment.key;
            const isFocused = focusedIndex === index;

            return (
              <DonutSegment
                key={segment.key}
                segment={segment}
                isActive={isActive}
                isFocused={isFocused}
                shouldReduceMotion={shouldReduceMotion}
                onHover={() => handleSegmentHover(segment.key)}
                onFocus={() => setFocusedIndex(index)}
                onClick={() => handleSegmentSelect(segment.key)}
              />
            );
          })}
        </svg>

        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: activeSegment ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p
            className="text-sm md:text-base font-medium tracking-wide"
            style={{ color: RING_CONFIG.labelColor }}
          >
            {activeSegment && SEGMENTS.find((s) => s.key === activeSegment)?.label}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

interface DonutSegmentProps {
  segment: Segment;
  isActive: boolean;
  isFocused: boolean;
  shouldReduceMotion: boolean;
  onHover: () => void;
  onFocus: () => void;
  onClick: () => void;
}

function DonutSegment({
  segment,
  isActive,
  isFocused,
  shouldReduceMotion,
  onHover,
  onFocus,
  onClick,
}: DonutSegmentProps) {
  const path = createDonutPath(
    segment.startAngle,
    segment.endAngle,
    RING_CONFIG.outerRadius,
    RING_CONFIG.innerRadius
  );

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={segment.label}
      onMouseEnter={onHover}
      onFocus={onFocus}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      style={{ cursor: "pointer", outline: "none" }}
    >
      <motion.path
        d={path}
        fill={`url(#gradient-${segment.key})`}
        stroke="rgba(14, 16, 26, 0.8)"
        strokeWidth="2"
        filter={isActive ? "url(#glow)" : undefined}
        initial={false}
        animate={
          shouldReduceMotion
            ? {
                opacity: isActive ? 1 : 0.85,
              }
            : {
                opacity: isActive ? 1 : 0.85,
                scale: isActive ? RING_CONFIG.hoverScale : 1,
                y: isActive ? -RING_CONFIG.hoverLift : segment.baseHeight * 100,
              }
        }
        transition={{
          duration: RING_CONFIG.transitionDuration,
          ease: RING_CONFIG.transitionEasing,
        }}
        style={{
          transformOrigin: "center",
          transformBox: "fill-box",
        }}
      />

      {isFocused && (
        <motion.path
          d={path}
          fill="none"
          stroke={RING_CONFIG.glowColor}
          strokeWidth="3"
          strokeDasharray="8 4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </g>
  );
}
function createDonutPath(
  startAngle: number,
  endAngle: number,
  outerRadius: number,
  innerRadius: number
): string {
  const toRadians = (deg: number) => (deg * Math.PI) / 180;

  const x1 = outerRadius * Math.cos(toRadians(startAngle - 90));
  const y1 = outerRadius * Math.sin(toRadians(startAngle - 90));
  const x2 = outerRadius * Math.cos(toRadians(endAngle - 90));
  const y2 = outerRadius * Math.sin(toRadians(endAngle - 90));

  const x3 = innerRadius * Math.cos(toRadians(endAngle - 90));
  const y3 = innerRadius * Math.sin(toRadians(endAngle - 90));
  const x4 = innerRadius * Math.cos(toRadians(startAngle - 90));
  const y4 = innerRadius * Math.sin(toRadians(startAngle - 90));

  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  return `
    M ${x1} ${y1}
    A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2}
    L ${x3} ${y3}
    A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}
    Z
  `;
}
