'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useRouter } from 'next/navigation'
import { trackEvent } from '@/lib/analytics'

export function ServicesHero() {
  const router = useRouter()
  const prefersReducedMotion = useReducedMotion()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleStrategyCallClick = () => {
    trackEvent('strategy_call_click', { location: 'services_hero' })
    router.push('/contact')
  }

  return (
    <section className="relative min-h-[70svh] overflow-hidden bg-deep-void">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0E101A 0%, #0a0c12 100%)',
        }}
      />

      {/* Abstract Ledger Background - Structural lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ledgerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#74B3FF" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#74B3FF" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#74B3FF" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Vertical ledger columns - structural, not grid-like */}
          {[15, 25, 35, 50, 65, 75, 85].map((x, idx) => (
            <motion.line
              key={`vertical-${idx}`}
              x1={`${x}%`}
              y1="0%"
              x2={`${x}%`}
              y2="100%"
              stroke="url(#ledgerGradient)"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isLoaded ? (prefersReducedMotion ? 0.3 : [0.2, 0.35, 0.2]) : 0
              }}
              transition={{
                opacity: prefersReducedMotion 
                  ? { duration: 1, delay: idx * 0.1 }
                  : { 
                      duration: 25,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: idx * 0.3
                    }
              }}
            />
          ))}

          {/* Horizontal balance lines - subtle */}
          {[20, 40, 60, 80].map((y, idx) => (
            <motion.line
              key={`horizontal-${idx}`}
              x1="0%"
              y1={`${y}%`}
              x2="100%"
              y2={`${y}%`}
              stroke="url(#ledgerGradient)"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isLoaded ? (prefersReducedMotion ? 0.2 : [0.15, 0.25, 0.15]) : 0
              }}
              transition={{
                opacity: prefersReducedMotion 
                  ? { duration: 1, delay: idx * 0.15 + 0.5 }
                  : { 
                      duration: 30,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: idx * 0.4 + 1
                    }
              }}
            />
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-[70svh] flex items-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-24 lg:py-32">
        <div className="w-full max-w-4xl">
          <div className="relative">
            
            {/* Vertical Marker - Desktop */}
            <div className="hidden md:block absolute -left-8 xl:-left-12 top-0 bottom-0 w-px">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="w-full h-full origin-top"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, #74B3FF 10%, #74B3FF 90%, transparent 100%)',
                }}
              />
            </div>

            {/* Horizontal Marker - Mobile */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="md:hidden absolute -top-8 left-0 w-16 h-px origin-left"
              style={{
                background: 'linear-gradient(90deg, #74B3FF 0%, transparent 100%)',
              }}
            />

            {/* Content Block */}
            <div className="md:pl-8 xl:pl-12">
              
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 8 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-body text-xs font-medium tracking-[0.2em] text-platinum/60 uppercase mb-6 md:mb-8"
              >
                Services
              </motion.p>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 12 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[clamp(2.5rem,6vw,4.5rem)] font-accent font-light leading-[1.1] tracking-[-0.02em] text-white mb-6 md:mb-8"
              >
                <span className="block">Financial leadership,</span>
                <span className="block mt-2">delivered when it matters</span>
              </motion.h1>

              {/* Subline */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 12 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-base md:text-lg font-body font-light text-slate/80 leading-relaxed max-w-2xl mb-8 md:mb-10"
              >
                Three focused ways we support Cyprus businesses through growth, financing, and investment.
              </motion.p>

              {/* Optional micro-line */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 8 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-body text-[11px] md:text-xs font-medium tracking-[0.15em] text-strategy-blue/60 uppercase"
              >
                Strategic. Structured. Senior.
              </motion.p>

              {/* Optional CTA - Minimal */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 8 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-10 md:mt-12"
              >
                <button
                  onClick={handleStrategyCallClick}
                  className="inline-flex items-center gap-2 text-sm font-body text-platinum/70 hover:text-white transition-colors duration-200 tracking-wide group"
                >
                  <span>Book a Strategy Call</span>
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                  >
                    <path 
                      d="M5 2L11 7L5 12" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
