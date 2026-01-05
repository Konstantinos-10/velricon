'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { NeonButton } from '@/components/ui/neon-button'
import { trackEvent } from '@/lib/analytics'
import { ArrowRight, ChevronDown } from 'lucide-react'

// Client questions that map to services with background images
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

// Timing constants
const QUESTION_DURATION = 3000 // 3 seconds per question

export function Hero() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Auto-advance questions
  useEffect(() => {
    if (!isLoaded) return

    // Advance to next question
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % clientQuestions.length)
    }, QUESTION_DURATION)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [currentIndex, isLoaded])

  const handleStrategyCallClick = useCallback(() => {
    trackEvent('strategy_call_click', { location: 'hero' })
    router.push('/contact')
  }, [router])

  const handleExploreSolutionsClick = useCallback(() => {
    trackEvent('explore_solutions_click', { location: 'hero' })
    router.push('/services')
  }, [router])

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Abstract geometric background with animated grid */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0a0c12 0%, #0E101A 40%, #111827 100%)',
          }}
        />
        
        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="heroGridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.08)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGridPattern)" />
          {/* Accent grid lines */}
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#64748B" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="5 5" />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#64748B" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="5 5" />
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#64748B" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="5 5" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#64748B" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="5 5" />
          {/* Center crosshair - subtle */}
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#64748B" strokeWidth="0.5" strokeOpacity="0.05" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#64748B" strokeWidth="0.5" strokeOpacity="0.05" />
          {/* Corner detail dots */}
          <circle cx="20%" cy="20%" r="2" fill="#74B3FF" fillOpacity="0.15" />
          <circle cx="80%" cy="20%" r="2" fill="#74B3FF" fillOpacity="0.15" />
          <circle cx="20%" cy="80%" r="2" fill="#74B3FF" fillOpacity="0.15" />
          <circle cx="80%" cy="80%" r="2" fill="#74B3FF" fillOpacity="0.15" />
          <circle cx="50%" cy="50%" r="1.5" fill="#74B3FF" fillOpacity="0.1" />
        </svg>

        {/* Accent gradient orbs - branded, not stock */}
        <div 
          className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, #74B3FF 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
          }}
        />
      </div>

      <Container size="xl" className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-10rem)]">
          
          {/* Left Column - Primary Content (7 columns for dominance) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              {/* Mini title - strategic, specific */}
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-body text-sm font-medium tracking-widest text-strategy-blue uppercase"
              >
                Virtual CFO for Cyprus Businesses
              </motion.p>
              
              {/* Primary heading - larger, bolder */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[clamp(2.5rem,6vw,4rem)] font-accent font-light tracking-tight leading-[1.05] text-white"
              >
                <span className="block">CFO-level financial leadership</span>
                <span className="block mt-1 text-strategy-blue">
                  without the full-time cost
                </span>
              </motion.h1>

              {/* Description - credibility focused */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-lg font-body font-light tracking-tight text-platinum max-w-xl leading-relaxed"
              >
                Big-4 trained expertise. Deep Cyprus market knowledge. Trusted by startups and SMEs to navigate funding, banking, and sustainable growth.
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

          {/* Right Column - Questions Accordion (5 columns, supportive) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
          >
            {/* Accordion Container */}
            <div className="relative w-full max-w-md">
              
              {/* Ambient glow behind the accordion */}
              <div 
                className="absolute -inset-6 rounded-3xl opacity-30 blur-2xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(116, 179, 255, 0.2) 0%, transparent 70%)',
                }}
              />
              
              {/* Glass accordion wrapper */}
              <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/40">
                
                {/* Background Image Carousel */}
                <div className="absolute inset-0">
                  {clientQuestions.map((q, idx) => (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: currentIndex === idx ? 1 : 0,
                      }}
                      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute inset-0"
                      style={{ zIndex: currentIndex === idx ? 1 : 0 }}
                    >
                      <Image
                        src={q.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </motion.div>
                  ))}
                  
                  {/* Dark overlay for glass effect - reduced opacity for more visible images */}
                  <div 
                    className="absolute inset-0 z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(14, 16, 26, 0.65) 0%, rgba(14, 16, 26, 0.55) 100%)',
                      backdropFilter: 'blur(4px)',
                      WebkitBackdropFilter: 'blur(4px)',
                    }}
                  />
                </div>
                
                {/* Glass overlay */}
                <div 
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  }}
                />
                
                {/* Subtle top border glow */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px z-20"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(116, 179, 255, 0.5), transparent)',
                  }}
                />

                {/* Accordion Items */}
                <div className="relative z-30">
                  {clientQuestions.map((q, idx) => {
                    const isExpanded = currentIndex === idx
                    
                    return (
                      <div 
                        key={q.id}
                        className={`
                          border-b border-white/[0.06] last:border-b-0
                          transition-colors duration-300
                          ${isExpanded ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'}
                        `}
                      >
                        {/* Accordion Header */}
                        <button
                          onClick={() => handleDotClick(idx)}
                          className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200"
                        >
                          <span 
                            className={`
                              font-accent text-base tracking-tight transition-colors duration-300
                              ${isExpanded ? 'text-white' : 'text-white/60'}
                            `}
                          >
                            {q.question}
                          </span>
                          <ChevronDown 
                            size={18} 
                            className={`
                              flex-shrink-0 ml-3 transition-all duration-300
                              ${isExpanded ? 'text-strategy-blue rotate-180' : 'text-white/40'}
                            `}
                          />
                        </button>
                        
                        {/* Accordion Content */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0,
                          }}
                          transition={{ 
                            height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                            opacity: { duration: 0.2, ease: 'easeOut' }
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5">
                            {/* Service Link Button */}
                            <button
                              onClick={() => {
                                trackEvent('hero_question_service_click', { service: q.id })
                                router.push(q.href)
                              }}
                              className="group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-xl 
                                       border border-strategy-blue/40 bg-strategy-blue/15
                                       hover:bg-strategy-blue/25 hover:border-strategy-blue/60
                                       transition-all duration-300"
                            >
                              {/* Button glow on hover */}
                              <div 
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                                style={{ backgroundColor: 'rgba(116, 179, 255, 0.15)' }}
                              />
                              
                              <span className="relative font-body text-sm font-semibold tracking-tight text-white">
                                {q.serviceLabel}
                              </span>
                              <ArrowRight 
                                size={15} 
                                className="relative text-strategy-blue group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" 
                              />
                            </button>
                            
                            {/* Progress bar for active item */}
                            <div className="mt-4">
                              <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                                <motion.div
                                  className="h-full bg-strategy-blue rounded-full"
                                  initial={{ width: '0%' }}
                                  animate={{ width: '100%' }}
                                  transition={{ 
                                    duration: QUESTION_DURATION / 1000,
                                    ease: 'linear'
                                  }}
                                  key={`progress-${currentIndex}`}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Questions - Accordion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:hidden"
          >
            <div 
              className="rounded-xl border border-white/[0.08] overflow-hidden backdrop-blur-md"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
              }}
            >
              {clientQuestions.map((q, idx) => {
                const isExpanded = currentIndex === idx
                
                return (
                  <div 
                    key={q.id}
                    className={`
                      border-b border-white/[0.06] last:border-b-0
                      transition-colors duration-300
                      ${isExpanded ? 'bg-white/[0.03]' : ''}
                    `}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => handleDotClick(idx)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span 
                        className={`
                          font-accent text-sm tracking-tight transition-colors duration-300
                          ${isExpanded ? 'text-white' : 'text-white/60'}
                        `}
                      >
                        {q.question}
                      </span>
                      <ChevronDown 
                        size={16} 
                        className={`
                          flex-shrink-0 ml-2 transition-all duration-300
                          ${isExpanded ? 'text-strategy-blue rotate-180' : 'text-white/40'}
                        `}
                      />
                    </button>
                    
                    {/* Accordion Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ 
                        height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.2, ease: 'easeOut' }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <button
                          onClick={() => {
                            trackEvent('hero_question_service_click', { service: q.id })
                            router.push(q.href)
                          }}
                          className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg 
                                   border border-strategy-blue/30 bg-strategy-blue/10
                                   active:bg-strategy-blue/20 transition-all duration-200"
                        >
                          <span className="font-body text-sm font-semibold tracking-tight text-white">
                            {q.serviceLabel}
                          </span>
                          <ArrowRight 
                            size={14} 
                            className="text-strategy-blue" 
                          />
                        </button>
                        
                        {/* Progress bar */}
                        <div className="mt-3">
                          <div className="w-full h-0.5 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              className="h-full bg-strategy-blue rounded-full"
                              initial={{ width: '0%' }}
                              animate={{ width: '100%' }}
                              transition={{ 
                                duration: QUESTION_DURATION / 1000,
                                ease: 'linear'
                              }}
                              key={`mobile-progress-${currentIndex}`}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </div>
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
