'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const ourServicePathsGridStyles = `
  @keyframes grid-draw-light { 
    0% { stroke-dashoffset: 1000; opacity: 0; } 
    50% { opacity: 0.5; } 
    100% { stroke-dashoffset: 0; opacity: 0.4; } 
  }
  .grid-line-light { 
    stroke: rgba(30, 41, 59, 0.4); 
    stroke-width: 1; 
    opacity: 0; 
    stroke-dasharray: 5 5; 
    stroke-dashoffset: 1000; 
    animation: grid-draw-light 1.5s ease-out forwards; 
  }
  .detail-dot-light { 
    fill: rgba(30, 41, 59, 0.5); 
    opacity: 0; 
    animation: pulse-glow-light 3s ease-in-out infinite; 
  }
  @keyframes pulse-glow-light { 
    0%, 100% { opacity: 0.3; transform: scale(1); } 
    50% { opacity: 0.6; transform: scale(1.1); } 
  }
`

interface ServicePath {
  id: string
  slug: string
  title: React.ReactNode
  shortTitle: string
  positioningLine: string
  description: string[]
  image: string
  imageAlt: string
}


const servicePaths: ServicePath[] = [
  {
    id: 'ongoing-financial-leadership',
    slug: 'ongoing-financial-leadership',
    title: (
      <>
        Ongoing Financial Leadership{' '}
        <span className="text-zinc-400 italic font-normal text-[0.85em]">
          (Your Virtual CFO Partner)
        </span>
      </>
    ),
    shortTitle: 'Ongoing Financial Leadership',
    positioningLine: 'Senior financial oversight that brings structure, clarity, and better decisions',
    description: [
      'Financial leadership tailored to your business’s needs - bringing clarity, structure, and insight to support decisions, operations, and planning without a full-time hire.',
    ],
    image: '/assets/images/hero/sophisticated_boardroom.png',
    imageAlt: 'Sophisticated boardroom setting representing financial leadership',
  },
  {
    id: 'bank-ready',
    slug: 'bank-ready',
    title: 'Bank Financing & Refinancing',
    shortTitle: 'Bank Financing & Refinancing',
    positioningLine: 'Senior financial oversight that brings structure, clarity, and better decisions',
    description: [
      'Structured preparation aligned with how banks assess risk and viability.',
    ],
    image: '/assets/images/hero/path_through_maze.png',
    imageAlt: 'Structured path representing organized financial preparation',
  },
  {
    id: 'investor-ready',
    slug: 'investor-ready',
    title: 'Investor-Ready Packages',
    shortTitle: 'Investor-Ready Packages',
    positioningLine: 'Senior financial oversight that brings structure, clarity, and better decisions.',
    description: [
      'Preparation for investor scrutiny through clear narrative and defensible financials.',
    ],
    image: '/assets/images/hero/modern_cityscape.png',
    imageAlt: 'Modern cityscape representing strategic vision and scale',
  },
]

export function OurServicePaths() {
  const prefersReducedMotion = useReducedMotion()
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style>{ourServicePathsGridStyles}</style>
      <section
        ref={sectionRef}
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{ background: '#FAFAFA' }}
      >
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0E101A 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridOurServicePaths" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(30, 41, 59, 0.2)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridOurServicePaths)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-light" style={{ animationDelay: '0.1s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-light" style={{ animationDelay: '0.2s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.3s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.4s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-light" style={{ animationDelay: '0.6s' }} />
          <circle cx="20%" cy="20%" r="3" className="detail-dot-light" style={{ animationDelay: '0.8s' }} />
          <circle cx="80%" cy="20%" r="3" className="detail-dot-light" style={{ animationDelay: '0.9s' }} />
          <circle cx="20%" cy="80%" r="3" className="detail-dot-light" style={{ animationDelay: '1s' }} />
          <circle cx="80%" cy="80%" r="3" className="detail-dot-light" style={{ animationDelay: '1.1s' }} />
          <circle cx="50%" cy="50%" r="2.5" className="detail-dot-light" style={{ animationDelay: '1.2s' }} />
        </svg>

        <div className="relative z-10 mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl">

          {/* Section Header */}
          <div className="mb-16 lg:mb-24">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 8 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-xs font-medium tracking-[0.2em] text-slate/60 uppercase mb-6"
            >
              Our Service Paths
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 12 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[clamp(2rem,5vw,3.5rem)] font-accent font-light leading-[1.1] tracking-[-0.02em] text-dark-ink mb-4"
            >
              Three focused ways we support your business
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 8 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg font-body font-light text-dark-ink leading-relaxed max-w-2xl"
            >
              Each path supports a specific financial moment - from ongoing leadership to financing and investor readiness.
            </motion.p>
          </div>

          {/* Service Path Bands - Alternating Layout */}
          <div className="space-y-16 lg:space-y-24">
            {servicePaths.map((path, idx) => {
              const isEven = idx % 2 === 0
              const isImageLeft = isEven // Row 1 & 3: Image left, Row 2: Image right

              return (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.6 : 0.8,
                    delay: prefersReducedMotion ? 0 : idx * 0.15,
                    ease: 'easeOut'
                  }}
                  className="group"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center`}>

                    {/* Image Block */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{
                        duration: prefersReducedMotion ? 0.6 : 0.8,
                        delay: prefersReducedMotion ? 0 : (idx * 0.15) + 0.1,
                      }}
                      className={`relative aspect-[4/3] overflow-hidden rounded-lg ${isImageLeft ? 'lg:order-1' : 'lg:order-2'
                        }`}
                    >
                      <Image
                        src={path.image}
                        alt={path.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={idx === 0}
                      />

                      {/* Subtle film grain for editorial feel */}
                      <div
                        className="absolute inset-0 opacity-[0.02] pointer-events-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                          mixBlendMode: 'overlay',
                        }}
                      />
                    </motion.div>

                    {/* Text Block */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{
                        duration: prefersReducedMotion ? 0.6 : 0.8,
                        delay: prefersReducedMotion ? 0 : idx * 0.15,
                        ease: 'easeOut'
                      }}
                      className={`relative flex flex-col justify-center ${isImageLeft ? 'lg:order-2' : 'lg:order-1'
                        }`}
                    >
                      {/* Thin strategy-blue accent line - left edge on desktop, top edge on mobile */}
                      <div className="absolute -left-4 lg:-left-6 top-0 bottom-0 w-px hidden lg:block">
                        <div
                          className="w-full h-full transition-opacity duration-300 group-hover:opacity-100"
                          style={{
                            background: 'linear-gradient(180deg, transparent 0%, rgba(116, 179, 255, 0.4) 20%, rgba(116, 179, 255, 0.4) 80%, transparent 100%)',
                            opacity: 0.6,
                          }}
                        />
                      </div>
                      <div className="absolute -top-4 left-0 right-0 h-px lg:hidden">
                        <div
                          className="w-full h-full"
                          style={{
                            background: 'linear-gradient(90deg, rgba(116, 179, 255, 0.4) 0%, transparent 100%)',
                          }}
                        />
                      </div>

                      <div className="pl-6 lg:pl-0">
                        {/* Service Title */}
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-accent font-light leading-[1.1] tracking-tight text-dark-ink mb-4">
                          {path.title}
                        </h3>

                        {/* Positioning Line */}
                        <p className="text-base md:text-lg font-body font-medium text-strategy-blue/90 leading-snug mb-6">
                          {path.positioningLine}
                        </p>

                        {/* Description */}
                        <div className="space-y-4 mb-8">
                          {path.description.map((paragraph, pIdx) => (
                            <p
                              key={pIdx}
                              className="text-base md:text-lg font-body font-light text-dark-ink leading-relaxed"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {/* Directional CTA */}
                        <Link
                          href={`/services/${path.slug}`}
                          className="group/cta inline-flex items-center gap-2 text-sm md:text-base font-body text-strategy-blue hover:text-dark-ink transition-colors duration-200 tracking-wide"
                        >
                          <span>View {path.shortTitle}</span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-70 group-hover/cta:opacity-100 group-hover/cta:translate-x-1 transition-all duration-200"
                          >
                            <path
                              d="M5 2L11 7L5 12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
