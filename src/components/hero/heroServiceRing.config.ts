// src/components/hero/heroServiceRing.config.ts

export type SegmentKey = "ongoing" | "bank-ready" | "investor-ready";

export interface Segment {
  key: SegmentKey;
  label: string;
  route: string;
  baseHeight: number;
  startAngle: number;
  endAngle: number;
  color: string;
  gradientStart: string;
  gradientEnd: string;
}

export const SEGMENTS: Segment[] = [
  {
    key: "ongoing",
    label: "Ongoing Leadership",
    route: "/services/ongoing-financial-leadership",
    baseHeight: 0.02,
    startAngle: 0,
    endAngle: 115,
    color: "#74B3FF",
    gradientStart: "#74B3FF",
    gradientEnd: "#4A90E2",
  },
  {
    key: "bank-ready",
    label: "Bank Ready",
    route: "/services/bank-ready",
    baseHeight: 0.03,
    startAngle: 125,
    endAngle: 235,
    color: "#3B82F6",
    gradientStart: "#3B82F6",
    gradientEnd: "#2563EB",
  },
  {
    key: "investor-ready",
    label: "Investor Ready",
    route: "/services/investor-ready",
    baseHeight: 0.025,
    startAngle: 245,
    endAngle: 350,
    color: "#002857",
    gradientStart: "#1E40AF",
    gradientEnd: "#002857",
  },
];

export const RING_CONFIG = {
  outerRadius: 180,
  innerRadius: 110,
  gapWidth: 10,
  hoverLift: 15,
  hoverScale: 1.03,
  hoverGlow: 0.4,
  transitionDuration: 0.4,
  transitionEasing: [0.34, 1.56, 0.64, 1], // Cubic-bezier array for Framer Motion
  floatAmplitude: 8,
  floatDuration: 4,
  shadowColor: "rgba(116, 179, 255, 0.2)",
  glowColor: "rgba(116, 179, 255, 0.6)",
  labelColor: "#E2E8F0",
  mobileSize: 280,
  desktopSize: 460,
};
