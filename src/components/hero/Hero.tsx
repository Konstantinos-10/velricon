'use client'

import { useState, memo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { InteractiveImageAccordion } from '@/components/ui/interactive-image-accordion'
import { trackEvent } from '@/lib/analytics'

type Category = 'startups' | 'scaleups' | 'smes' | null

interface CategoryContent {
  heading: string
  subheading: string
}

const categoryContent: Record<'startups' | 'scaleups' | 'smes', CategoryContent> = {
  startups: {
    heading: 'CFO-level clarity for founders moving fast.',
    subheading: 'Runway, cash flow, and the numbers that matter, so you stop guessing and start executing.',
  },
  scaleups: {
    heading: 'Finance leadership built for scaling decisions.',
    subheading: 'Forecasts, KPIs, and control systems that keep growth profitable, not chaotic.',
  },
  smes: {
    heading: 'Sharper performance for established businesses.',
    subheading: 'Improve margins, tighten cash, and build disciplined planning without a full-time CFO.',
  },
}

const defaultContent: CategoryContent = {
  heading: 'CFO-level financial leadership, without the full-time cost.',
  subheading: 'Make clearer decisions, control cash flow, and scale with confidence — backed by senior financial expertise.',
}

// Map href to category
function getCategoryFromHref(href: string | undefined): Category {
  if (!href) return null
  if (href.includes('/startups')) return 'startups'
  if (href.includes('/scaleups')) return 'scaleups'
  if (href.includes('/smes')) return 'smes'
  return null
}

export function Hero() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState<Category>(null)
  const [bgImageUrl, setBgImageUrl] = useState<string | null>(null)

  const handleStrategyCallClick = useCallback(() => {
    trackEvent('strategy_call_click', { location: 'hero' })
    window.location.href = '/contact'
  }, [])

  const handleActiveChange = (item: { href?: string; imageUrl: string } | null) => {
    if (item) {
      const category = getCategoryFromHref(item.href)
      setActiveCategory(category)
      setBgImageUrl(item.imageUrl)
      trackEvent('hero_accordion_hover', { category, title: item.href })
    } else {
      setActiveCategory(null)
      setBgImageUrl(null)
    }
  }

  const content = activeCategory ? categoryContent[activeCategory] : defaultContent

  return (
    <section className="relative min-h-screen pt-20 pb-16 lg:pb-24 flex items-center bg-deep-void overflow-hidden">
      {/* Background image layer */}
      <AnimatePresence>
        {bgImageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute inset-0 pointer-events-none z-0"
          >
            <div className="absolute inset-0">
              <Image
                src={bgImageUrl}
                alt=""
                fill
                className="object-cover scale-110 blur-xl"
                style={{ opacity: 0.08 }}
                unoptimized
              />
            </div>
            {/* Dark overlay gradient to maintain contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-deep-void/60 via-deep-void/80 to-deep-void" />
          </motion.div>
        )}
      </AnimatePresence>

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div
              key="text-content"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              layout
              className="min-h-[280px]"
            >
              <motion.div 
                layout
                className="relative min-h-[120px]"
              >
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={content.heading}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="text-[clamp(2.5rem,6vw,4rem)] font-extralight tracking-tight leading-[0.95] text-white"
                  >
                    {activeCategory ? (
                      content.heading
                    ) : (
                      <>
                        CFO-level financial leadership,{' '}
                        <span className="text-strategy-blue">without the full-time cost</span>.
                      </>
                    )}
                  </motion.h1>
                </AnimatePresence>
              </motion.div>

              <motion.div 
                layout
                className="relative mt-6 min-h-[60px]"
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={content.subheading}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
                    className="text-base md:text-lg font-light tracking-tight text-white/70 max-w-2xl"
                  >
                    {content.subheading}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Button - Static wrapper, prevents re-animation */}
            <StaticButton
              onClick={handleStrategyCallClick}
            />
          </div>

          {/* Right Column - Interactive Image Accordion */}
          <div
            className="hidden lg:flex items-center justify-center relative z-10"
            onMouseLeave={() => handleActiveChange(null)}
            onBlur={(e) => {
              // Reset when focus leaves the accordion area
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                handleActiveChange(null)
              }
            }}
          >
            <InteractiveImageAccordion
              onSelect={(item) => {
                trackEvent('hero_accordion_select', { title: item.title, href: item.href })
                if (item.href) router.push(item.href)
              }}
              onActiveChange={handleActiveChange}
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

// Static button component to prevent re-animation on category changes
const StaticButton = memo(function StaticButton({ onClick }: { onClick: () => void }) {
  return (
    <div>
      <Button
        onClick={onClick}
        variant="primary"
        size="lg"
        className="text-lg"
      >
        Book a Strategy Call
      </Button>
    </div>
  )
})
