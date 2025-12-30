'use client'

import { memo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { InteractiveImageAccordion } from '@/components/ui/interactive-image-accordion'
import { NeonButton } from '@/components/ui/neon-button'
import { DottedSurface } from '@/components/ui/dotted-surface'
import { trackEvent } from '@/lib/analytics'

export function Hero() {
  const router = useRouter()

  const handleStrategyCallClick = useCallback(() => {
    trackEvent('strategy_call_click', { location: 'hero' })
    router.push('/contact')
  }, [router])

  const handleExploreSolutionsClick = useCallback(() => {
    trackEvent('explore_solutions_click', { location: 'hero' })
    router.push('/services')
  }, [router])

  return (
    <section className="relative min-h-screen pt-20 pb-16 lg:pb-24 flex items-center bg-deep-void overflow-hidden">
      {/* Dotted Surface Background */}
      <DottedSurface theme="dark" className="absolute inset-0 z-0" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.02 }}
                className="font-accent text-sm tracking-widest text-strategy-blue uppercase"
              >
                Make sense of your money
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-[clamp(2.5rem,6vw,4rem)] font-extralight tracking-tight leading-[0.95] text-white"
              >
                CFO-level financial leadership,{' '}
                <span className="text-strategy-blue">without the full-time cost</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base md:text-lg font-light tracking-tight text-platinum max-w-2xl"
              >
                Make clearer decisions, control cash flow, and scale with confidence — backed by senior financial expertise.
              </motion.p>
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
          <div className="hidden lg:flex items-center justify-center relative z-10">
            <InteractiveImageAccordion
              onSelect={(item) => {
                trackEvent('hero_accordion_select', { title: item.title, href: item.href })
                if (item.href) router.push(item.href)
              }}
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
      className="text-lg font-light tracking-tight w-[280px] h-[56px]"
    >
      Explore Solutions
    </NeonButton>
  )
})
