'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

const lines = [
  'left-0 top-0 h-full w-px',
  'left-1/4 top-[10%] h-[80%] w-px',
  'left-1/2 top-[6%] h-[88%] w-px',
  'right-1/4 top-[12%] h-[76%] w-px',
  'right-0 top-0 h-full w-px',
  'left-[6%] top-[18%] h-px w-[28%]',
  'left-[6%] top-[42%] h-px w-[36%]',
  'left-[6%] top-[66%] h-px w-[30%]',
  'right-[6%] top-[28%] h-px w-[26%]',
  'right-[6%] top-[54%] h-px w-[34%]',
  'right-[6%] top-[78%] h-px w-[22%]',
]

export function BeliefSystemSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' })

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] overflow-hidden"
      style={{ background: '#FAFAFA' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {lines.map((line, index) => (
          <motion.span
            key={`${line}-${index}`}
            className={cn('absolute bg-strategy-blue/15', line)}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.03 }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-12 xl:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-lg lg:text-xl font-body font-light text-[#1E293B] leading-relaxed"
            >
              We choose clarity over noise. Every structure we build reduces ambiguity,
              so decisions move from reaction to intent.
            </motion.p>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-lg lg:text-xl font-body font-light text-[#1E293B] leading-relaxed"
            >
              We favor structure over chaos. The system is intentional, measured,
              and designed to hold when pressure is highest.
            </motion.p>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-lg lg:text-xl font-body font-light text-[#1E293B] leading-relaxed"
            >
              We trust judgment over automation. Process matters, but discernment is
              what protects value when complexity rises.
            </motion.p>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative h-[320px] lg:h-[360px] w-full overflow-hidden border border-surface-border"
            >
              <Image
                src="/assets/images/sticky-scroll/modular_architecture.png"
                alt="Structural geometry"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
