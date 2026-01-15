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
            Dedicated to enhancing businesses by offering comprehensive solutions for substantial progress.
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
                <p className="text-lg md:text-xl font-accent font-normal md:font-light text-[#888888] md:text-[#A0A0A0]">
                  Your Trusted CFO
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
              At Velricon, we meticulously assess your operations to increase business value and propel growth. We help your business achieve a competitive advantage that will allow you to fulfil your business goals.
            </p>

            {/* Second Paragraph */}
            <p className="text-base md:text-lg font-body font-normal text-[#333333] leading-relaxed">
              Our team consists of highly qualified professionals, dedicated to client satisfaction and building enduring relationships. With extensive hands-on financial and managerial experience, we offer tailored solutions, aiming for timely delivery of client-focused services.
            </p>

            {/* Accent Line Below Second Paragraph */}
            <div className="w-1/4 h-0.5 bg-strategy-blue"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
