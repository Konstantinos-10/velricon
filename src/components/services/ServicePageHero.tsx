'use client'

import React, { useRef, useMemo } from 'react'
import { TextParallaxContent } from '@/components/ui/text-parallax-content-scroll'
import { motion, useInView } from 'framer-motion'

interface ServicePageHeroProps {
  serviceName: string
  headline: string
  subline: string
  highlightPhrases: string[]
  imageUrl: string
  imageAlt: string
}

function highlightText(text: string, phrases: string[]): React.ReactNode[] {
  if (!phrases || phrases.length === 0) return [text]
  
  // Sort phrases by length (longest first) to handle overlapping matches correctly
  const sortedPhrases = [...phrases].sort((a, b) => b.length - a.length)
  
  let parts: Array<{ text: string; highlight: boolean }> = [{ text, highlight: false }]
  
  sortedPhrases.forEach(phrase => {
    const newParts: Array<{ text: string; highlight: boolean }> = []
    
    parts.forEach(part => {
      if (part.highlight) {
        // Don't highlight already highlighted parts
        newParts.push(part)
        return
      }
      
      const text = part.text
      const lowerText = text.toLowerCase()
      const lowerPhrase = phrase.toLowerCase()
      let lastIndex = 0
      let index = lowerText.indexOf(lowerPhrase, lastIndex)
      
      if (index === -1) {
        // Phrase not found, keep original part
        newParts.push(part)
        return
      }
      
      while (index !== -1) {
        // Add text before the match
        if (index > lastIndex) {
          newParts.push({ text: text.slice(lastIndex, index), highlight: false })
        }
        
        // Add the highlighted match (using original case)
        newParts.push({ text: text.slice(index, index + phrase.length), highlight: true })
        
        lastIndex = index + phrase.length
        index = lowerText.indexOf(lowerPhrase, lastIndex)
      }
      
      // Add remaining text after last match
      if (lastIndex < text.length) {
        newParts.push({ text: text.slice(lastIndex), highlight: false })
      }
    })
    
    parts = newParts
  })
  
  return parts.map((part, index) => 
    part.highlight ? (
      <span key={index} className="text-strategy-blue">
        {part.text}
      </span>
    ) : (
      <span key={index}>{part.text}</span>
    )
  )
}

export function ServicePageHero({ serviceName, headline, subline, highlightPhrases = [], imageUrl, imageAlt }: ServicePageHeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const highlightedSubline = useMemo(() => highlightText(subline, highlightPhrases || []), [subline, highlightPhrases])

  return (
    <section ref={ref} className="bg-deep-void">
      <TextParallaxContent
        imgUrl={imageUrl}
        imgAlt={imageAlt}
        subheading={serviceName}
        heading={headline}
      >
        {/* Subline appears after parallax scroll */}
        <div className="mx-auto max-w-4xl px-4 pb-16 pt-12 md:pb-24 md:pt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl font-body font-light text-platinum/80 leading-relaxed"
          >
            {highlightedSubline}
          </motion.p>
        </div>
      </TextParallaxContent>
    </section>
  )
}
