'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { HeroServiceRing } from './HeroServiceRing'
import { trackEvent } from '@/lib/analytics'

type SegmentKey = 'startups' | 'scaleups' | 'smes' | null

const segmentContent = {
  startups: {
    heading: 'Financial Leadership for Startups',
    subheading: 'Build strong financial foundations and investor-ready reporting from day one.',
  },
  scaleups: {
    heading: 'Financial Leadership for Scaleups',
    subheading: 'Scale your finance function and make data-driven decisions to accelerate growth.',
  },
  smes: {
    heading: 'Financial Leadership for Established SMEs',
    subheading: 'Optimize operations and prepare for strategic transitions with expert financial leadership.',
  },
  default: {
    heading: 'Financial Leadership without the cost of a full time CFO',
    subheading: 'Strategic decision-making and business growth through expert financial leadership.',
  },
}

export function Hero() {
  const [hoveredSegment, setHoveredSegment] = useState<SegmentKey>(null)

  const handleStrategyCallClick = () => {
    trackEvent('strategy_call_click', { location: 'hero' })
    window.location.href = '/contact'
  }

  const handleHoverChange = (key: SegmentKey) => {
    setHoveredSegment(key)
  }

  const handleSelect = (key: SegmentKey) => {
    trackEvent('service_ring_select', { service: key })
  }

  const content = hoveredSegment
    ? segmentContent[hoveredSegment]
    : segmentContent.default

  return (
    <section
      className="relative min-h-screen pt-20 pb-16 lg:pb-24 flex items-center transition-colors duration-500"
      style={{
        backgroundColor: hoveredSegment === 'startups'
          ? '#0E101A'
          : hoveredSegment === 'scaleups'
          ? '#0E101A'
          : hoveredSegment === 'smes'
          ? '#0E101A'
          : '#0E101A',
      }}
    >
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.h1
              key={content.heading}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-header font-bold text-white leading-tight"
            >
              {hoveredSegment ? (
                content.heading
              ) : (
                <>
                  Financial Leadership{' '}
                  <span className="font-accent text-strategy-blue">without the cost</span>{' '}
                  of a full time CFO
                </>
              )}
            </motion.h1>
            
            <motion.p
              key={content.subheading}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="text-xl lg:text-2xl text-platinum font-body max-w-2xl"
            >
              {content.subheading}
            </motion.p>
            
            <div>
              <Button
                onClick={handleStrategyCallClick}
                variant="primary"
                size="lg"
                className="text-lg"
              >
                Book a Strategy Call
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Service Ring */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full flex items-center justify-center"
          >
            <HeroServiceRing
              active={hoveredSegment}
              onHoverChange={handleHoverChange}
              onSelect={handleSelect}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

