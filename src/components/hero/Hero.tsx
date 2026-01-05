'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { NeonButton } from '@/components/ui/neon-button'
import { trackEvent } from '@/lib/analytics'
import { ArrowRight } from 'lucide-react'

// Client questions that map to services
const clientQuestions = [
  {
    id: 'investor',
    question: 'Ready to raise your next round?',
    serviceLabel: 'Investor Ready Packages',
    href: '/services/investor-ready',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
  {
    id: 'cfo',
    question: 'Need financial clarity on demand?',
    serviceLabel: 'Fractional CFO',
    href: '/services/fractional-cfo',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'bank',
    question: 'Preparing for bank financing?',
    serviceLabel: 'Bank Ready Packages',
    href: '/services/bank-ready',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
]

// Default background
const defaultImage = 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop'

// Timing constants
const QUESTION_DURATION = 3000 // 3 seconds per question
const SERVICE_REVEAL_DELAY = 800 // Show service after 0.8 seconds

export function Hero() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showService, setShowService] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const serviceTimerRef = useRef<NodeJS.Timeout | null>(null)

  const currentQuestion = clientQuestions[currentIndex]

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Auto-advance questions
  useEffect(() => {
    if (!isLoaded) return

    // Show service label after delay
    serviceTimerRef.current = setTimeout(() => {
      setShowService(true)
    }, SERVICE_REVEAL_DELAY)

    // Advance to next question
    timerRef.current = setTimeout(() => {
      setShowService(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % clientQuestions.length)
      }, 100)
    }, QUESTION_DURATION)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (serviceTimerRef.current) clearTimeout(serviceTimerRef.current)
    }
  }, [currentIndex, isLoaded])

  // Reset service visibility when question changes
  useEffect(() => {
    setShowService(false)
  }, [currentIndex])

  const handleStrategyCallClick = useCallback(() => {
    trackEvent('strategy_call_click', { location: 'hero' })
    router.push('/contact')
  }, [router])

  const handleExploreSolutionsClick = useCallback(() => {
    trackEvent('explore_solutions_click', { location: 'hero' })
    router.push('/services')
  }, [router])

  const handleServiceClick = useCallback(() => {
    trackEvent('hero_question_service_click', { service: currentQuestion.id })
    router.push(currentQuestion.href)
  }, [router, currentQuestion])

  const handleDotClick = useCallback((index: number) => {
    setShowService(false)
    setCurrentIndex(index)
  }, [])

  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background Image Carousel - synced with questions */}
      <div className="absolute inset-0">
        {/* Base layer */}
        <div className="absolute inset-0">
          <Image
            src={defaultImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Question-specific backgrounds */}
        <AnimatePresence mode="sync">
          {clientQuestions.map((q, idx) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentIndex === idx ? 1 : 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
              style={{ zIndex: currentIndex === idx ? 2 : 1 }}
            >
              <Image
                src={q.image}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Dark overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to right, rgba(14, 16, 26, 0.95) 0%, rgba(14, 16, 26, 0.88) 40%, rgba(14, 16, 26, 0.75) 100%)',
          }}
        />

        {/* Subtle vignette */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(14, 16, 26, 0.3) 100%)',
          }}
        />
      </div>

      <Container size="xl" className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-10rem)]">
          
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              {/* Mini title */}
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-accent text-sm tracking-[0.2em] text-strategy-blue uppercase"
              >
                Make sense of your money
              </motion.p>
              
              {/* Primary heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[clamp(2.25rem,5vw,3.5rem)] font-accent font-light tracking-tight leading-[1.1] text-white"
              >
                <span className="block">CFO-level financial leadership</span>
                <span className="block mt-2 text-strategy-blue font-normal">
                  without the full-time cost
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-lg font-body font-light tracking-tight text-platinum max-w-xl leading-relaxed"
              >
                Make clearer decisions, control cash flow, and scale with confidence.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={handleStrategyCallClick}
                variant="primary"
                size="lg"
                className="text-base sm:text-lg px-8 py-4 h-auto"
              >
                Book a Strategy Call
              </Button>
              <NeonButton
                onClick={handleExploreSolutionsClick}
                variant="default"
                size="lg"
                className="text-base sm:text-lg font-light tracking-tight px-8 py-4 h-auto"
              >
                Explore Solutions
              </NeonButton>
            </motion.div>
          </div>

          {/* Right Column - Client Questions */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glassy Container */}
            <div className="relative w-full max-w-xl">
              
              {/* Ambient glow behind the card */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(116, 179, 255, 0.15) 0%, transparent 70%)',
                }}
              />
              
              {/* Glass card */}
              <div 
                className="relative rounded-2xl border border-white/[0.08] overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                {/* Inner highlight */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%)',
                  }}
                />
                
                {/* Subtle top border glow */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(116, 179, 255, 0.3), transparent)',
                  }}
                />

                {/* Question content */}
                <div className="relative text-center py-14 px-10">
                  
                  {/* Small decorative element */}
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-px bg-gradient-to-r from-transparent to-strategy-blue/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-strategy-blue/60" />
                      <div className="w-8 h-px bg-gradient-to-l from-transparent to-strategy-blue/40" />
                    </div>
                  </div>
                  
                  {/* The Question */}
                  <div className="min-h-[100px] flex items-center justify-center mb-8">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentQuestion.id}
                        initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="text-[clamp(1.375rem,2.5vw,1.75rem)] font-accent italic font-light tracking-tight leading-relaxed text-white/95"
                      >
                        "{currentQuestion.question}"
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Service Reveal - Pill Button Style */}
                  <div className="h-14 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {showService && (
                        <motion.button
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.95 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                          onClick={handleServiceClick}
                          className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full 
                                   border border-strategy-blue/30 bg-strategy-blue/10
                                   hover:bg-strategy-blue/20 hover:border-strategy-blue/50
                                   transition-all duration-300"
                        >
                          {/* Button glow on hover */}
                          <div 
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                            style={{ backgroundColor: 'rgba(116, 179, 255, 0.2)' }}
                          />
                          
                          <span className="relative font-body text-sm font-medium tracking-tight text-strategy-blue group-hover:text-white transition-colors duration-300">
                            {currentQuestion.serviceLabel}
                          </span>
                          <ArrowRight 
                            size={16} 
                            className="relative text-strategy-blue group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" 
                          />
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Progress Indicators - Refined */}
                  <div className="flex items-center justify-center gap-2 mt-8">
                    {clientQuestions.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className="group relative p-1.5"
                        aria-label={`Go to question ${idx + 1}`}
                      >
                        {/* Progress bar style indicator */}
                        <div 
                          className={`
                            relative w-8 h-1 rounded-full overflow-hidden transition-all duration-300
                            ${idx === currentIndex 
                              ? 'bg-white/10' 
                              : 'bg-white/5 group-hover:bg-white/10'
                            }
                          `}
                        >
                          {/* Fill animation for active */}
                          {idx === currentIndex && (
                            <motion.div
                              className="absolute inset-y-0 left-0 bg-strategy-blue rounded-full"
                              initial={{ width: '0%' }}
                              animate={{ width: '100%' }}
                              transition={{ 
                                duration: QUESTION_DURATION / 1000,
                                ease: 'linear'
                              }}
                            />
                          )}
                          
                          {/* Static fill for completed/inactive */}
                          {idx !== currentIndex && (
                            <div 
                              className={`
                                absolute inset-0 rounded-full transition-colors duration-300
                                ${idx < currentIndex ? 'bg-strategy-blue/40' : 'bg-transparent'}
                                group-hover:bg-strategy-blue/30
                              `}
                            />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Questions - Glassy Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:hidden space-y-3"
          >
            {clientQuestions.map((q, idx) => (
              <motion.button
                key={q.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                onClick={() => {
                  trackEvent('hero_question_service_click', { service: q.id })
                  router.push(q.href)
                }}
                className="group w-full text-left p-5 rounded-xl border border-white/[0.08]
                         backdrop-blur-md transition-all duration-300
                         hover:border-strategy-blue/30 hover:bg-white/[0.03]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%)',
                }}
              >
                <p className="font-accent italic text-base text-white/80 group-hover:text-white transition-colors mb-3">
                  "{q.question}"
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-strategy-blue/20 bg-strategy-blue/5">
                  <span className="font-body text-xs font-medium tracking-tight text-strategy-blue">
                    {q.serviceLabel}
                  </span>
                  <ArrowRight 
                    size={12} 
                    className="text-strategy-blue transition-transform duration-300 group-hover:translate-x-0.5" 
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, #0E101A 0%, transparent 100%)',
        }}
      />
    </section>
  )
}
