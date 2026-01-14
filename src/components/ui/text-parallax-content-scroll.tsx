'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const IMG_PADDING = 12

interface TextParallaxContentProps {
  imgUrl: string
  imgAlt?: string
  subheading: string
  heading: string
  children?: React.ReactNode
}

export function TextParallaxContent({ 
  imgUrl, 
  imgAlt = '',
  subheading, 
  heading, 
  children 
}: TextParallaxContentProps) {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className="bg-deep-void"
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} imgAlt={imgAlt} />
        <OverlayCopy subheading={subheading} heading={heading} />
      </div>
      {children && (
        <div className="bg-deep-void">
          {children}
        </div>
      )}
    </div>
  )
}

interface StickyImageProps {
  imgUrl: string
  imgAlt?: string
}

const StickyImage = ({ imgUrl, imgAlt = '' }: StickyImageProps) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      ref={targetRef}
      style={{
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <div className="absolute inset-0">
        <Image
          src={imgUrl}
          alt={imgAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <motion.div
        className="absolute inset-0 bg-deep-void/80"
        style={{
          opacity,
        }}
      />
    </motion.div>
  )
}

interface OverlayCopyProps {
  subheading: string
  heading: string
}

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      ref={targetRef}
      style={{
        y,
        opacity,
      }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white z-10"
    >
      <p className="mb-2 text-center text-sm md:text-base font-body font-medium tracking-[0.2em] text-platinum/70 uppercase">
        {subheading}
      </p>
      <p className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-accent font-light tracking-tight leading-[1.05]">
        {heading}
      </p>
    </motion.div>
  )
}
