'use client'

import { useState, useEffect, useRef, KeyboardEvent } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type SegmentKey = 'startups' | 'scaleups' | 'smes'

interface Segment {
  key: SegmentKey
  label: string
  route: string
  angle: number // Start angle in degrees
  baseHeight: number // Base z-offset
  color: string
  gradientFrom: string
  gradientTo: string
}

const segments: Segment[] = [
  {
    key: 'startups',
    label: 'For Startups',
    route: '/services/startups',
    angle: 0,
    baseHeight: 0.02,
    color: 'strategy-blue',
    gradientFrom: '#74B3FF',
    gradientTo: '#3B82F6',
  },
  {
    key: 'scaleups',
    label: 'For Scaleups',
    route: '/services/scaleups',
    angle: 120,
    baseHeight: 0.03,
    color: 'electric-blue',
    gradientFrom: '#3B82F6',
    gradientTo: '#60A5FA',
  },
  {
    key: 'smes',
    label: 'For Established SMEs',
    route: '/services/smes',
    angle: 240,
    baseHeight: 0.025,
    color: 'strategy-blue',
    gradientFrom: '#74B3FF',
    gradientTo: '#3B82F6',
  },
]

interface HeroServiceRingProps {
  active?: SegmentKey | null
  onHoverChange?: (key: SegmentKey | null) => void
  onSelect?: (key: SegmentKey) => void
  className?: string
}

export function HeroServiceRing({
  active,
  onHoverChange,
  onSelect,
  className = '',
}: HeroServiceRingProps) {
  const router = useRouter()
  const [hovered, setHovered] = useState<SegmentKey | null>(null)
  const [focused, setFocused] = useState<SegmentKey | null>(null)
  const [webglSupported, setWebglSupported] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  // Idle floating animation
  const floatY = useMotionValue(0)
  const floatSpring = useSpring(floatY, {
    stiffness: 50,
    damping: 20,
  })

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) {
        setWebglSupported(false)
      }
    } catch {
      setWebglSupported(false)
    }

    // Idle float animation (only if motion is allowed)
    if (!prefersReducedMotion) {
      const interval = setInterval(() => {
        floatY.set(Math.sin(Date.now() / 3000) * 8)
      }, 16)
      return () => clearInterval(interval)
    }
  }, [floatY, prefersReducedMotion])

  const handleHover = (key: SegmentKey | null) => {
    setHovered(key)
    onHoverChange?.(key)
  }

  const handleSelect = (key: SegmentKey) => {
    onSelect?.(key)
    router.push(segments.find((s) => s.key === key)?.route || '/')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, key: SegmentKey) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSelect(key)
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      const currentIndex = segments.findIndex((s) => s.key === key)
      const nextIndex = (currentIndex + 1) % segments.length
      const nextSegment = segments[nextIndex]
      setFocused(nextSegment.key)
      containerRef.current
        ?.querySelector(`[data-segment="${nextSegment.key}"]`)
        ?.focus()
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      const currentIndex = segments.findIndex((s) => s.key === key)
      const prevIndex = (currentIndex - 1 + segments.length) % segments.length
      const prevSegment = segments[prevIndex]
      setFocused(prevSegment.key)
      containerRef.current
        ?.querySelector(`[data-segment="${prevSegment.key}"]`)
        ?.focus()
    }
  }

  const effectiveHover = active || hovered
  const is2DFallback = !webglSupported || prefersReducedMotion

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
      role="group"
      aria-label="Service selection ring"
    >
      {/* Floating glow shadow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-strategy-blue/10 blur-3xl"
        style={{
          y: floatSpring,
          scale: 1.1,
        }}
        animate={
          !prefersReducedMotion
            ? {
                opacity: [0.3, 0.5, 0.3],
              }
            : {}
        }
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Ring container */}
      <motion.div
        className="relative"
        style={{
          y: prefersReducedMotion ? 0 : floatSpring,
        }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px]"
          aria-hidden="true"
        >
          <defs>
            {/* Gradients for each segment */}
            {segments.map((segment) => (
              <linearGradient
                key={`gradient-${segment.key}`}
                id={`gradient-${segment.key}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={segment.gradientFrom} stopOpacity="0.9" />
                <stop offset="50%" stopColor={segment.gradientTo} stopOpacity="0.8" />
                <stop offset="100%" stopColor={segment.gradientFrom} stopOpacity="0.7" />
              </linearGradient>
            ))}

            {/* Inner shadow filter */}
            <filter id="innerShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="0" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Outer glow filter */}
            <filter id="outerGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Ring segments */}
          {segments.map((segment, index) => {
            const isHovered = effectiveHover === segment.key
            const isFocused = focused === segment.key
            const isActive = active === segment.key

            // Calculate path for 120-degree segment
            const centerX = 200
            const centerY = 200
            const innerRadius = 120
            const outerRadius = 160
            const startAngle = (segment.angle - 60) * (Math.PI / 180)
            const endAngle = (segment.angle + 60) * (Math.PI / 180)

            const x1 = centerX + innerRadius * Math.cos(startAngle)
            const y1 = centerY + innerRadius * Math.sin(startAngle)
            const x2 = centerX + outerRadius * Math.cos(startAngle)
            const y2 = centerY + outerRadius * Math.sin(startAngle)
            const x3 = centerX + outerRadius * Math.cos(endAngle)
            const y3 = centerY + outerRadius * Math.sin(endAngle)
            const x4 = centerX + innerRadius * Math.cos(endAngle)
            const y4 = centerY + innerRadius * Math.sin(endAngle)

            const largeArc = 0 // 120 degrees is less than 180

            const pathData = `
              M ${x1} ${y1}
              L ${x2} ${y2}
              A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3}
              L ${x4} ${y4}
              A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1}
              Z
            `

            // Calculate 3D transform
            const baseZ = is2DFallback ? 0 : segment.baseHeight * 100
            const hoverLift = isHovered || isActive ? 15 : 0
            const focusLift = isFocused ? 10 : 0
            const totalZ = baseZ + hoverLift + focusLift

            // 3D perspective transform
            const perspective = 1000
            const translateZ = totalZ
            const scale = 1 + translateZ / perspective

            // Rotation for depth effect
            const rotationX = isHovered || isActive ? -5 : 0

            return (
              <g key={segment.key}>
                <motion.path
                  data-segment={segment.key}
                  d={pathData}
                  fill={`url(#gradient-${segment.key})`}
                  filter={isHovered || isActive ? 'url(#outerGlow)' : 'url(#innerShadow)'}
                  className="pointer-events-none transition-all duration-300"
                  style={{
                    transform: is2DFallback
                      ? 'none'
                      : `perspective(${perspective}px) translateZ(${translateZ}px) scale(${scale}) rotateX(${rotationX}deg)`,
                    transformOrigin: 'center center',
                  }}
                  initial={false}
                  animate={{
                    opacity: isHovered || isActive || isFocused ? 1 : 0.85,
                    filter: isHovered || isActive ? 'url(#outerGlow)' : 'url(#innerShadow)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </g>
            )
          })}
        </svg>

        {/* Invisible button overlays for keyboard navigation */}
        {segments.map((segment) => {
          const centerX = 200
          const centerY = 200
          const midRadius = 140
          const midAngle = segment.angle * (Math.PI / 180)
          const buttonX = centerX + midRadius * Math.cos(midAngle)
          const buttonY = centerY + midRadius * Math.sin(midAngle)

          return (
            <button
              key={`button-${segment.key}`}
              data-segment={segment.key}
              className="absolute cursor-pointer focus:outline-none focus:ring-2 focus:ring-strategy-blue focus:ring-offset-2 focus:ring-offset-deep-void rounded-full opacity-0 w-20 h-20 md:w-24 md:h-24 transition-all"
              style={{
                left: `${(buttonX / 400) * 100}%`,
                top: `${(buttonY / 400) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => handleHover(segment.key)}
              onMouseLeave={() => handleHover(null)}
              onFocus={() => {
                setFocused(segment.key)
                handleHover(segment.key)
              }}
              onBlur={() => {
                setFocused(null)
                handleHover(null)
              }}
              onClick={() => handleSelect(segment.key)}
              onKeyDown={(e) => handleKeyDown(e, segment.key)}
              tabIndex={0}
              aria-label={`Select ${segment.label}`}
            />
          )
        })}

        {/* Labels */}
        <div className="absolute inset-0 pointer-events-none">
          {segments.map((segment) => {
            const isHovered = effectiveHover === segment.key
            const isFocused = focused === segment.key
            const showLabel = isHovered || isFocused || active === segment.key

            // Position label outside the ring
            const labelAngle = segment.angle * (Math.PI / 180)
            const labelRadius = 200
            const labelX = 200 + labelRadius * Math.cos(labelAngle)
            const labelY = 200 + labelRadius * Math.sin(labelAngle)

            return (
              <AnimatePresence key={segment.key}>
                {showLabel && (
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{
                      left: `${(labelX / 400) * 100}%`,
                      top: `${(labelY / 400) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-elevation-layer/95 backdrop-blur-sm px-4 py-2 rounded-xl border border-surface-border shadow-lg">
                      <p className="text-platinum font-body text-sm md:text-base whitespace-nowrap">
                        {segment.label}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

