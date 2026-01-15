'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export interface CountUpNumberProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  format?: (value: number) => string
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export function CountUpNumber({
  value,
  duration = 1500,
  prefix = '',
  suffix = '',
  format,
}: CountUpNumberProps) {
  const prefersReducedMotion = useReducedMotion()
  const elementRef = useRef<HTMLSpanElement>(null)
  const hasAnimatedRef = useRef(false)
  const formatter = useMemo(() => {
    return format ?? ((val: number) => Math.round(val).toLocaleString('en-US'))
  }, [format])

  const [displayValue, setDisplayValue] = useState(() => {
    return prefersReducedMotion ? formatter(value) : formatter(0)
  })

  useEffect(() => {
    if (prefersReducedMotion) {
      hasAnimatedRef.current = true
      setDisplayValue(formatter(value))
      return
    }

    if (!elementRef.current || hasAnimatedRef.current) {
      return
    }

    const startAnimation = () => {
      if (hasAnimatedRef.current) {
        return
      }
      hasAnimatedRef.current = true
      const startTime = performance.now()

      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = easeOutCubic(progress)
        const currentValue = value * eased
        setDisplayValue(formatter(currentValue))

        if (progress < 1) {
          requestAnimationFrame(tick)
        } else {
          setDisplayValue(formatter(value))
        }
      }

      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          startAnimation()
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(elementRef.current)

    return () => {
      observer.disconnect()
    }
  }, [duration, formatter, prefersReducedMotion, value])

  return (
    <span ref={elementRef}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
