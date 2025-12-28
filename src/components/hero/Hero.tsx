'use client'

import { useState, memo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { InteractiveImageAccordion } from '@/components/ui/interactive-image-accordion'
import { NeonButton } from '@/components/ui/neon-button'
import { DottedSurface } from '@/components/ui/dotted-surface'
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

  const handleStrategyCallClick = useCallback(() => {
    trackEvent('strategy_call_click', { location: 'hero' })
    router.push('/contact')
  }, [router])

  const handleExploreSolutionsClick = useCallback(() => {
    trackEvent('explore_solutions_click', { location: 'hero' })
    router.push('/services')
  }, [router])

  const handleActiveChange = (item: { href?: string; imageUrl: string } | null) => {
    if (item) {
      const category = getCategoryFromHref(item.href)
      setActiveCategory(category)
      // Background image change disabled - keeping text changes only
      trackEvent('hero_accordion_hover', { category, title: item.href })
    } else {
      setActiveCategory(null)
    }
  }

  const content = activeCategory ? categoryContent[activeCategory] : defaultContent

  return (
    <section className="relative min-h-screen pt-20 pb-16 lg:pb-24 flex items-center bg-deep-void overflow-hidden">
      {/* Dotted Surface Background */}
      <DottedSurface theme="dark" className="absolute inset-0 z-0" />

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

            {/* Buttons - Static wrapper, prevents re-animation */}
            <div className="flex flex-col gap-4 items-start">
              <StaticButton
                onClick={handleStrategyCallClick}
              />
              <StaticNeonButton
                onClick={handleExploreSolutionsClick}
              />
            </div>
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
    <Button
      onClick={onClick}
      variant="primary"
      size="lg"
      className="text-lg w-[280px] h-[56px]"
    >
      Book a Strategy Call
    </Button>
  )
})

// Static neon button component to prevent re-animation on category changes
const StaticNeonButton = memo(function StaticNeonButton({ onClick }: { onClick: () => void }) {
  return (
    <NeonButton
      onClick={onClick}
      variant="default"
      size="lg"
      className="text-lg font-medium tracking-tight w-[280px] h-[56px]"
    >
      Explore Solutions
    </NeonButton>
  )
})
