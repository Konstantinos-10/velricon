'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const IMG_PADDING = 12

interface TextParallaxContentProps {
  imgUrl: string
  imgAlt?: string
  subheading: string
  heading: string
  subline?: React.ReactNode
  cta?: string
  children?: React.ReactNode
}

export function TextParallaxContent({
  imgUrl,
  imgAlt = '',
  subheading,
  heading,
  subline,
  cta,
  children
}: TextParallaxContentProps) {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className="bg-white"
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} imgAlt={imgAlt} />
        <OverlayCopy subheading={subheading} heading={heading} subline={subline} cta={cta} />
      </div>
      {children && (
        <div className="bg-white">
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
  subline?: React.ReactNode
  cta?: string
}

const OverlayCopy = ({ subheading, heading, subline, cta }: OverlayCopyProps) => {
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
      <p className="text-center text-3xl lg:text-4xl xl:text-5xl font-accent font-light tracking-tight leading-[1.05]">
        {heading}
      </p>
      {subline && (
        <div className="mt-6 max-w-3xl px-4 text-center text-base md:text-lg lg:text-xl font-body font-light text-platinum/80 leading-relaxed">
          {subline}
        </div>
      )}
      {cta && (
        <div className="mt-8">
          <Link href="/contact" passHref>
            <Button size="lg" className="bg-strategy-blue hover:bg-strategy-blue/90 text-white border-none min-w-[200px] text-base font-medium font-body tracking-wide">
              {cta}
            </Button>
          </Link>
        </div>
      )}
    </motion.div>
  )
}
