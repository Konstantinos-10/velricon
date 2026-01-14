'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'

interface ServicePageImplementationProps {
  paragraphs: string[]
  subtleCTA?: {
    text: string
    link: string
  }
}

export function ServicePageImplementation({ paragraphs, subtleCTA }: ServicePageImplementationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      ref={ref}
      className="relative bg-deep-void py-24 md:py-32 lg:py-40"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-accent font-light leading-[1.05] tracking-tight text-white mb-12 md:mb-16"
        >
          How Velricon applies this role in practice
        </motion.h2>

        {/* Narrative Paragraphs */}
        <div className="space-y-8 md:space-y-10">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-base md:text-lg lg:text-xl font-body font-light text-platinum/80 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Optional Subtle CTA */}
        {subtleCTA && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + paragraphs.length * 0.1 }}
            className="mt-12 md:mt-16 pt-8 border-t border-surface-border/30"
          >
            <Link
              href={subtleCTA.link}
              className="inline-block text-base font-body font-light text-platinum/60 hover:text-platinum/90 transition-colors duration-200"
            >
              {subtleCTA.text}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
