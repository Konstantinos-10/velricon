'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

// Client questions that map to services with background images
const clientQuestions = [
  {
    id: 'investor',
    question: 'Ready to raise your next round?',
    context: 'Get investor-ready financials that pass due diligence.',
    serviceLabel: 'Investor Ready Packages',
    href: '/services/investor-ready',
    image: '/assets/images/hero/sophisticated_boardroom.png',
  },
  {
    id: 'cfo',
    question: 'Need financial clarity on demand?',
    context: 'Strategic CFO expertise without the full-time commitment.',
    serviceLabel: 'Fractional CFO',
    href: '/services/fractional-cfo',
    image: '/assets/images/hero/path_through_maze.png',
  },
  {
    id: 'bank',
    question: 'Preparing for bank financing?',
    context: 'We know what Cyprus banks require. Let us guide you.',
    serviceLabel: 'Bank Ready Packages',
    href: '/services/bank-ready',
    image: '/assets/images/hero/modern_cityscape.png',
  },
]

// Navigation links
const navLinks = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

// Services dropdown items
const servicesItems = [
  { label: 'Fractional CFO', href: '/services/fractional-cfo' },
  { label: 'Bank-Ready Packages', href: '/services/bank-ready' },
  { label: 'Investor-Ready Packages', href: '/services/investor-ready' },
]

// Timing constants
const CAROUSEL_DURATION = 3000 // 3 seconds per slide

export function Hero() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isCardHovered, setIsCardHovered] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false)
      }
    }

    if (isServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isServicesDropdownOpen])

  return (
    <section className="relative h-screen flex overflow-hidden">
      
      {/* Background with gradient - Applied to entire section */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0a0c12 0%, #0E101A 100%)',
        }}
      />
      
      {/* Animated Grid Background - Applied to entire section */}
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

      {/* ═══════════════════════════════════════════════════════════════════
          NAVIGATION BAR - Full width, separate component
          ═══════════════════════════════════════════════════════════════════ */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-6 md:py-7 lg:py-8"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img
            src="/assets/images/logo.png"
            alt="Velricon"
            className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-platinum/60 hover:text-white hover:bg-white/5 transition-all duration-200"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
          {/* Services Dropdown */}
          <div 
            ref={servicesDropdownRef}
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="font-body text-xs md:text-[13px] text-platinum/60 hover:text-white transition-colors duration-200 tracking-wide flex items-center gap-1 md:gap-1.5"
            >
              Services
              <ChevronDown 
                size={12}
                className={`md:w-[14px] md:h-[14px] transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 min-w-[200px] md:min-w-[220px] z-30"
                >
                  <div 
                    className="rounded-xl overflow-hidden border border-white/[0.15]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(14, 16, 26, 0.95) 0%, rgba(10, 12, 18, 0.98) 100%)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      boxShadow: `
                        0 8px 32px rgba(0, 0, 0, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                    }}
                  >
                    {/* Subtle glassmorphism overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      }}
                    />
                    
                    {/* Top highlight line */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-px z-10"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2) 50%, transparent)',
                      }}
                    />

                    <div className="relative z-10 py-1.5 md:py-2">
                      {servicesItems.map((item, idx) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setIsServicesDropdownOpen(false)
                            trackEvent('nav_service_click', { service: item.label })
                          }}
                          className="block px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-[13px] font-body text-platinum/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200 tracking-wide"
                        >
                          {item.label}
                        </Link>
                      ))}
                  </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
              </div>

          {/* Other Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs md:text-[13px] text-platinum/60 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.header>

      {/* ═══════════════════════════════════════════════════════════════════
          LEFT COLUMN - FULL WIDTH - SELF-CONTAINED CONTENT ZONE
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full h-full flex flex-col">
        
        {/* ─────────────────────────────────────────────────────────────────
            LEFT COLUMN - Content container
            ───────────────────────────────────────────────────────────────── */}
        <div className="relative z-10 flex-1 flex flex-col px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 2xl:pt-48">
          <div className="max-w-4xl w-full md:w-auto flex-1 flex flex-col">
            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center md:justify-start">
              <div className="space-y-6 sm:space-y-8 md:space-y-9 lg:space-y-10 w-full text-center md:text-left">
            
            {/* Mini title - eyebrow */}
            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 12 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-body text-[10px] sm:text-[11px] md:text-xs font-medium tracking-[0.2em] text-strategy-blue/90 uppercase"
            >
              Virtual CFO for Cyprus Businesses
            </motion.p>
            
            {/* H1 Headline - Refined, not shouting */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[clamp(1.5rem,3.5vw,2.5rem)] sm:text-[clamp(1.75rem,4vw,3rem)] md:text-[clamp(2rem,4.5vw,3.5rem)] font-accent leading-[1.15] tracking-[-0.01em]"
            >
              <span className="block text-white font-light">
                CFO-level financial leadership
              </span>
              <span className="block text-platinum/60 font-light mt-1 sm:mt-1.5">
                without the full-time cost
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 16 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm sm:text-[15px] md:text-base lg:text-lg font-body font-light text-slate/80 leading-[1.7] max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0"
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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 md:pt-10 lg:pt-12 justify-center md:justify-start"
            >
              <Button
                onClick={handleStrategyCallClick}
                variant="primary"
                size="default"
                className="text-xs sm:text-sm px-5 sm:px-6 py-2 sm:py-2.5 h-auto font-medium tracking-wide"
              >
                Book a Strategy Call
              </Button>
              <button
                onClick={handleExploreSolutionsClick}
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-body text-platinum/70 hover:text-white transition-colors duration-200 tracking-wide"
              >
                Explore Solutions
                <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px] opacity-60" />
              </button>
            </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          IMAGE CAROUSEL - Absolute positioned on right side
          ═══════════════════════════════════════════════════════════════════ */}
      <div 
        className="hidden md:block absolute right-0 w-[45%] md:w-[48%] lg:w-1/2 pointer-events-none relative"
        style={{
          top: 'calc(50% + clamp(4rem, 8vw, 7rem))', // Responsive alignment with mini title
          transform: 'translateY(-50%)',
        }}
      >
        
        {/* Image Carousel - FADE ONLY, no scale */}
        <div className="relative w-full aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden pointer-events-auto">
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
                sizes="(max-width: 768px) 0vw, (max-width: 1024px) 45vw, 50vw"
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

        {/* ─────────────────────────────────────────────────────────────────
            FLOATING CARD - Glassmorphism (positioned inside carousel, higher up)
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
          className="absolute z-20 pointer-events-auto"
          style={{
            top: '32%', // Positioned higher than center
            left: '0%',
            transform: 'translate(-50%, -50%)', // Center on the left edge of carousel
            width: 'clamp(280px, 22vw, 340px)',
            maxWidth: '340px',
          }}
        >
          {/* Soft glow behind card */}
          <div 
            className="absolute -inset-3 md:-inset-4 rounded-xl md:rounded-2xl opacity-40 blur-2xl"
          style={{
              background: 'radial-gradient(ellipse at center, rgba(116, 179, 255, 0.15) 0%, transparent 70%)',
            }}
          />
          
          {/* Glassmorphism Card */}
          <div 
            className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.15]"
            style={{
              background: 'linear-gradient(135deg, rgba(14, 16, 26, 0.85) 0%, rgba(10, 12, 18, 0.9) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `,
            }}
          >
            {/* Subtle glassmorphism overlay for depth */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              }}
            />
            
            {/* Top highlight line */}
            <div 
              className="absolute top-0 left-0 right-0 h-px z-10"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2) 50%, transparent)',
              }}
            />

            {/* Card content */}
            <div className="relative p-4 md:p-5 lg:p-6 z-10">
              
              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-accent text-base md:text-lg text-white leading-snug tracking-tight mb-2 md:mb-2.5">
                    {currentSlide.question}
                  </p>
                  
                  <p className="font-body text-xs md:text-[13px] text-white/50 leading-relaxed mb-4 md:mb-5">
                    {currentSlide.context}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Service link */}
              <button
                onClick={handleServiceClick}
                className="group inline-flex items-center gap-2 text-left"
              >
                <span className="font-body text-xs md:text-[13px] font-medium text-strategy-blue group-hover:text-white transition-colors duration-200">
                  {currentSlide.serviceLabel}
                </span>
                <ArrowRight 
                  size={12}
                  className="md:w-[14px] md:h-[14px] text-strategy-blue group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" 
                />
              </button>

              {/* Progress & indicators */}
              <div className="mt-4 md:mt-5 lg:mt-6">
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
                
                <div className="flex gap-1.5 md:gap-2 mt-3 md:mt-4">
                  {clientQuestions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`
                        w-5 md:w-6 h-1 rounded-full transition-all duration-300
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
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE MENU - Slide in overlay
          ═══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 md:hidden overflow-y-auto"
              style={{
                background: 'linear-gradient(180deg, rgba(14, 16, 26, 0.98) 0%, rgba(10, 12, 18, 0.98) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.5)',
              }}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center"
                >
                  <img
                    src="/assets/images/logo.png"
                    alt="Velricon"
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-platinum/60 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Content */}
              <div className="p-6 space-y-1">
                {/* Services Section */}
                <div className="mb-6">
                  <p className="text-xs font-medium tracking-wider text-strategy-blue/80 uppercase mb-4 px-3">
                    Services
                  </p>
                  <div className="space-y-1">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          trackEvent('nav_service_click', { service: item.label })
                        }}
                        className="block px-4 py-3 rounded-lg text-base font-body text-platinum/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 my-6" />

                {/* Other Links */}
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-base font-body text-platinum/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-6 mt-6 border-t border-white/10">
    <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      handleStrategyCallClick()
                    }}
      variant="primary"
                    size="default"
                    className="w-full text-sm px-6 py-3 h-auto font-medium"
    >
      Book a Strategy Call
    </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
