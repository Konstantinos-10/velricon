'use client'

import React, { useMemo } from 'react'
import { TextParallaxContent } from '@/components/ui/text-parallax-content-scroll'
import { highlightText } from '@/lib/text-utils'

interface ServicePageHeroProps {
  serviceName: string
  headline: string
  subline: string
  highlightPhrases: string[]
  imageUrl: string
  imageAlt: string
  cta?: string
}

export function ServicePageHero({ serviceName, headline, subline, highlightPhrases = [], imageUrl, imageAlt, cta }: ServicePageHeroProps) {
  // Subline is now rendered in its own section, but we keep the logic here if needed for other hero types
  // For now, we pass undefined to subline in TextParallaxContent to remove it from the hero overlay

  return (
    <section className="bg-deep-void">
      <TextParallaxContent
        imgUrl={imageUrl}
        imgAlt={imageAlt}
        subheading={serviceName}
        heading={headline}
        subline={undefined}
        cta={cta}
      />
    </section>
  )
}
