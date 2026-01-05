'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'
import { ArrowRight } from 'lucide-react'

// Client questions that map to services with background images
const clientQuestions = [
  {
    id: 'investor',
    question: 'Ready to raise your next round?',
    context: 'Get investor-ready financials that pass due diligence.',
    serviceLabel: 'Investor Ready Packages',
    href: '/services/investor-ready',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
  {
    id: 'cfo',
    question: 'Need financial clarity on demand?',
    context: 'Strategic CFO expertise without the full-time commitment.',
    serviceLabel: 'Fractional CFO',
    href: '/services/fractional-cfo',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'bank',
    question: 'Preparing for bank financing?',
    context: 'We know what Cyprus banks require. Let us guide you.',
    serviceLabel: 'Bank Ready Packages',
    href: '/services/bank-ready',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
]

// Navigation links
const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

// Timing constants
const CAROUSEL_DURATION = 3000 // 3 seconds per slide

export function Hero() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isCardHovered, setIsCardHovered] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const currentSlide = clientQuestions[currentIndex]

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    if (!isLoaded || isPaused) return

    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % clientQuestions.length)
    }, CAROUSEL_DURATION)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [currentIndex, isLoaded, isPaused])

  const handleStrategyCallClick = useCallback(() => {
    trackEvent('strategy_call_click', { location: 'hero' })
    router.push('/contact')
  }, [router])

  const handleExploreSolutionsClick = useCallback(() => {
    trackEvent('explore_solutions_click', { location: 'hero' })
    router.push('/services')
  }, [router])

  const handleServiceClick = useCallback(() => {
    trackEvent('hero_service_click', { service: currentSlide.id })
    router.push(currentSlide.href)
  }, [router, currentSlide])

  const handleCardHover = useCallback((hovered: boolean) => {
    setIsCardHovered(hovered)
    setIsPaused(hovered)
  }, [])

  return (
    <section className="relative h-screen flex overflow-hidden">
      
      {/* ═══════════════════════════════════════════════════════════════════
          LEFT COLUMN - 2/3 WIDTH - SELF-CONTAINED CONTENT ZONE
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full lg:w-2/3 h-full flex flex-col">
        
        {/* Background with gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #0a0c12 0%, #0E101A 100%)',
          }}
        />
        
        {/* Animated Grid Background */}
        <style>{`
          @keyframes hero-grid-draw { 
      0% { stroke-dashoffset: 1000; opacity: 0; } 
      50% { opacity: 0.3; } 
      100% { stroke-dashoffset: 0; opacity: 0.15; } 
    }
          .hero-grid-line { 
      stroke: #64748B; 
      stroke-width: 0.5; 
      opacity: 0; 
      stroke-dasharray: 5 5; 
      stroke-dashoffset: 1000; 
            animation: hero-grid-draw 2s ease-out forwards; 
    }
          .hero-detail-dot { 
            fill: #74B3FF; 
      opacity: 0; 
            animation: hero-pulse-dot 3s ease-in-out infinite; 
          }
          @keyframes hero-pulse-dot { 
            0%, 100% { opacity: 0.1; transform: scale(1); } 
            50% { opacity: 0.25; transform: scale(1.1); } 
          }
        `}</style>
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="heroGridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGridPattern)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="hero-grid-line" style={{ animationDelay: '0.1s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="hero-grid-line" style={{ animationDelay: '0.2s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="hero-grid-line" style={{ animationDelay: '0.3s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="hero-grid-line" style={{ animationDelay: '0.4s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="hero-grid-line" style={{ animationDelay: '0.5s', opacity: '0.05' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="hero-grid-line" style={{ animationDelay: '0.6s', opacity: '0.05' }} />
          <circle cx="20%" cy="20%" r="2" className="hero-detail-dot" style={{ animationDelay: '0.7s' }} />
          <circle cx="80%" cy="20%" r="2" className="hero-detail-dot" style={{ animationDelay: '0.8s' }} />
          <circle cx="20%" cy="80%" r="2" className="hero-detail-dot" style={{ animationDelay: '0.9s' }} />
          <circle cx="80%" cy="80%" r="2" className="hero-detail-dot" style={{ animationDelay: '1s' }} />
          <circle cx="50%" cy="50%" r="1.5" className="hero-detail-dot" style={{ animationDelay: '1.1s' }} />
        </svg>

        {/* ─────────────────────────────────────────────────────────────────
            NAVIGATION - Anchored at top of left column
            ───────────────────────────────────────────────────────────────── */}
        <motion.header 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 flex items-center justify-between px-10 lg:px-16 xl:px-20 py-8"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img
              src="/assets/images/logo.png"
              alt="Velricon"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[13px] text-platinum/60 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.header>

        {/* ─────────────────────────────────────────────────────────────────
            MAIN CONTENT - Generous whitespace
            ───────────────────────────────────────────────────────────────── */}
        <div className="relative z-10 flex-1 flex items-center px-10 lg:px-16 xl:px-20">
          <div className="max-w-xl space-y-10">
            
            {/* Mini title - eyebrow */}
            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 12 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-body text-[11px] font-medium tracking-[0.2em] text-strategy-blue/90 uppercase"
            >
              Virtual CFO for Cyprus Businesses
            </motion.p>
            
            {/* H1 Headline - Refined, not shouting */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[clamp(1.75rem,4vw,3rem)] font-accent leading-[1.15] tracking-[-0.01em]"
            >
              <span className="block text-white font-light">
                CFO-level financial leadership
              </span>
              <span className="block text-platinum/60 font-light mt-1">
                without the full-time cost
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 16 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[15px] lg:text-base font-body font-light text-slate/80 leading-[1.7] max-w-md"
            >
              Big-4 trained expertise. Deep Cyprus market knowledge. 
              Trusted by startups and SMEs to navigate funding, banking, 
              and sustainable growth.
            </motion.p>

            {/* CTAs - Refined, smaller */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 16 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                onClick={handleStrategyCallClick}
                variant="primary"
                size="default"
                className="text-sm px-6 py-2.5 h-auto font-medium tracking-wide"
              >
                Book a Strategy Call
              </Button>
              <button
                onClick={handleExploreSolutionsClick}
                className="inline-flex items-center justify-center gap-2 text-sm font-body text-platinum/70 hover:text-white transition-colors duration-200 tracking-wide"
              >
                Explore Solutions
                <ArrowRight size={14} className="opacity-60" />
              </button>
            </motion.div>
                  </div>
                  </div>

        {/* Bottom breathing space */}
        <div className="h-20 lg:h-28" />
              </div>

      {/* ═══════════════════════════════════════════════════════════════════
          RIGHT COLUMN - 1/3 WIDTH - VISUAL STORYTELLING
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block relative w-1/3 h-full">
        
        {/* Full-height Image Carousel - FADE ONLY, no scale */}
        <div className="absolute inset-0">
          {clientQuestions.map((slide, idx) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex === idx ? 1 : 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0"
              style={{ zIndex: currentIndex === idx ? 1 : 0 }}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover"
                sizes="33vw"
                priority={idx === 0}
              />
              {/* Subtle color grade */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(14, 16, 26, 0.25) 0%, rgba(14, 16, 26, 0.15) 50%, rgba(14, 16, 26, 0.4) 100%)',
                }}
              />
            </motion.div>
          ))}
          </div>

        {/* Left edge blend */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-20 z-10"
          style={{
            background: 'linear-gradient(90deg, #0E101A 0%, transparent 100%)',
          }}
        />

        {/* ─────────────────────────────────────────────────────────────────
            FLOATING CARD - Glassmorphism
            ───────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            y: isLoaded ? (isCardHovered ? -4 : 0) : 24,
          }}
          transition={{ 
            opacity: { duration: 0.7, delay: 0.4 },
            y: { duration: 0.3, ease: 'easeOut' },
          }}
          onMouseEnter={() => handleCardHover(true)}
          onMouseLeave={() => handleCardHover(false)}
          className="absolute z-20"
          style={{
            top: '50%',
            left: '10%',
            transform: 'translateY(-50%)',
            width: 'calc(100% - 56px)',
            maxWidth: '340px',
          }}
        >
          {/* Soft glow behind card */}
          <div 
            className="absolute -inset-4 rounded-2xl opacity-40 blur-2xl"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(116, 179, 255, 0.15) 0%, transparent 70%)',
            }}
          />
          
          {/* Glassmorphism Card */}
          <div 
            className="relative rounded-2xl overflow-hidden border border-white/[0.15]"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `,
            }}
          >
            {/* Top highlight line */}
            <div 
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2) 50%, transparent)',
              }}
            />

            {/* Card content */}
            <div className="relative p-6">
              
              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-accent text-lg text-white leading-snug tracking-tight mb-2.5">
                    {currentSlide.question}
                  </p>
                  
                  <p className="font-body text-[13px] text-white/50 leading-relaxed mb-5">
                    {currentSlide.context}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Service link */}
              <button
                onClick={handleServiceClick}
                className="group inline-flex items-center gap-2 text-left"
              >
                <span className="font-body text-[13px] font-medium text-strategy-blue group-hover:text-white transition-colors duration-200">
                  {currentSlide.serviceLabel}
                </span>
                <ArrowRight 
                  size={14} 
                  className="text-strategy-blue group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" 
                />
              </button>

              {/* Progress & indicators */}
              <div className="mt-6">
                <div className="h-[2px] bg-white/[0.1] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-strategy-blue rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: isPaused ? undefined : '100%' }}
                    transition={{ 
                      duration: CAROUSEL_DURATION / 1000,
                      ease: 'linear'
                    }}
                    key={`progress-${currentIndex}`}
                  />
                </div>
                
                <div className="flex gap-2 mt-4">
                  {clientQuestions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`
                        w-6 h-1 rounded-full transition-all duration-300
                        ${idx === currentIndex 
                          ? 'bg-strategy-blue' 
                          : 'bg-white/[0.15] hover:bg-white/[0.3]'
                        }
                      `}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
          </div>
        </div>
        </motion.div>

        {/* Bottom fade */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 z-10"
          style={{
            background: 'linear-gradient(to top, #0E101A 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE - Simplified single-column
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden absolute inset-0 pointer-events-none" />
    </section>
  )
}
