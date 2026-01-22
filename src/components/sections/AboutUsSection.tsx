'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

export function AboutUsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-accent font-normal md:font-medium text-black mb-4 md:mb-6"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl font-body font-normal text-[#333333] max-w-3xl mx-auto leading-relaxed"
          >
            Focused on bringing clarity, structure, and sound financial judgment to important business decisions.
          </motion.p>
        </div>

        {/* Two-Column Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/images/hero/path_through_maze.png"
                alt="Maze with light path"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* White Overlay Box */}
              <div className="absolute bottom-0 right-0 bg-white p-6 md:p-8 max-w-[80%] translate-x-4 md:translate-x-6 -translate-y-4 md:-translate-y-6">
                <h3 className="text-xl md:text-2xl font-accent font-semibold md:font-bold text-black mb-2">
                  We Are Velricon
                </h3>
                <p className="text-md md:text-lg font-accent font-normal md:font-light text-[#888888] md:text-[#A0A0A0]">
                  Your Financial Strategy Partner
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text with Accent Lines */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col justify-center space-y-6 md:space-y-8"
          >
            {/* Accent Line Above First Paragraph */}
            <div className="w-1/4 h-0.5 bg-strategy-blue"></div>

            {/* First Paragraph */}
            <p className="text-base md:text-lg font-body font-normal text-[#333333] leading-relaxed">
              Velricon was founded to bring clarity and structure to financial decision-making when complexity increases.
            </p>

            {/* Second Paragraph */}
            <p className="text-base md:text-lg font-body font-normal text-[#333333] leading-relaxed">
              We work alongside business owners and leadership teams to help them understand what their numbers are really telling them — and how those insights should inform important decisions around growth, financing, and risk.
            </p>

            {/* Second Paragraph */}
            <p className="text-base md:text-lg font-body font-normal text-[#333333] leading-relaxed">
              Our approach is grounded in disciplined financial logic, not generic advice or off-the-shelf frameworks. We focus on building financial understanding that supports sound judgment, long-term value, and confident leadership.
            </p>

            {/* Accent Line Below Second Paragraph */}
            <div className="w-1/4 h-0.5 bg-strategy-blue"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
