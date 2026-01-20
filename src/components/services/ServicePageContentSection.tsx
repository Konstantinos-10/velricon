'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ServicePageContentSectionProps {
  title: string
  authorityAndControl: string
  impactOnDecisions: string
  imageUrl: string
  imageAlt: string
}

export function ServicePageContentSection({ title, authorityAndControl, impactOnDecisions, imageUrl, imageAlt }: ServicePageContentSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="relative bg-soft-white py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, #F8F9FA 50%, #F4F6F9 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl lg:text-4xl font-accent font-light text-black mb-12 sm:mb-16 md:mb-20"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            {/* Paragraph 1 - Authority & Control */}
            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={prefersReducedMotion
                ? { duration: 0.3 }
                : { duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }
              }
              className="text-base md:text-lg font-body font-light text-dark-ink leading-relaxed"
            >
              {authorityAndControl}
            </motion.p>

            {/* Paragraph 2 - Impact on Decision-Making */}
            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={prefersReducedMotion
                ? { duration: 0.3 }
                : { duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }
              }
              className="text-base md:text-lg font-body font-light text-dark-ink leading-relaxed"
            >
              {impactOnDecisions}
            </motion.p>
          </div>

          {/* Right Column - Visual Element */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={prefersReducedMotion
                ? { duration: 0.3 }
                : { duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
              }
              className="relative aspect-square rounded-2xl overflow-hidden border border-platinum/30 bg-white/50"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  style={{
                    filter: 'grayscale(80%) contrast(0.95) brightness(1.15)',
                  }}
                  sizes="(max-width: 1024px) 0vw, 40vw"
                  aria-hidden="true"
                />
              </div>

              {/* Overlay for light theme integration */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(244, 246, 249, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                }}
              />

              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern id="serviceContentGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#94A3B8"
                        strokeWidth="0.5"
                        opacity="0.3"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#serviceContentGrid)" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
