'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { trackEvent } from '@/lib/analytics'
import { ChevronDown, Menu, X } from 'lucide-react'
import { ShinyButton } from '@/components/ui/shiny-button'

// Navigation links matching Figma design
const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact Us', href: '/contact' },
]

// Services dropdown items
const servicesItems = [
  { label: 'Ongoing Financial Leadership', href: '/services/fractional-cfo' },
  { label: 'Bank Financing & Refinancing', href: '/services/bank-ready' },
  { label: 'Investor-Ready Packages', href: '/services/investor-ready' },
]

// Trusted client avatars
const trustedClientAvatars = [
  '/assets/images/hero/avatar_1.png',
  '/assets/images/hero/avatar_2.png',
  '/assets/images/hero/avatar_3.png',
  '/assets/images/hero/avatar_4.png',
]

// Social links
const socialLinks = [
  { icon: '/assets/images/hero/linkedin_icon.svg', href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: '/assets/images/hero/facebook_icon.svg', href: 'https://facebook.com', label: 'Facebook' },
  { icon: '/assets/images/hero/instagram_icon.svg', href: 'https://instagram.com', label: 'Instagram' },
]

export function Hero() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleConsultationClick = useCallback(() => {
    trackEvent('consultation_call_click', { location: 'hero' })
    router.push('/contact')
  }, [router])

  const handleExploreSolutionsClick = useCallback(() => {
    trackEvent('explore_solutions_click', { location: 'hero' })
    router.push('/services')
  }, [router])

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

  // Grid styles matching WhatWeDo section
  const heroGridStyles = `
    @keyframes grid-draw-hero { 
      0% { stroke-dashoffset: 1000; opacity: 0; } 
      50% { opacity: 0.5; } 
      100% { stroke-dashoffset: 0; opacity: 0.4; } 
    }
    .grid-line-hero { 
      stroke: rgba(30, 41, 59, 0.4); 
      stroke-width: 1; 
      opacity: 0; 
      stroke-dasharray: 5 5; 
      stroke-dashoffset: 1000; 
      animation: grid-draw-hero 1.5s ease-out forwards; 
    }
    .detail-dot-hero { 
      fill: rgba(30, 41, 59, 0.5); 
      opacity: 0; 
      animation: pulse-glow-hero 3s ease-in-out infinite; 
    }
    @keyframes pulse-glow-hero { 
      0%, 100% { opacity: 0.3; transform: scale(1); } 
      50% { opacity: 0.6; transform: scale(1.1); } 
    }
  `

  return (
    <>
      <style>{heroGridStyles}</style>
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0E101A 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridHeroSection" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(30, 41, 59, 0.2)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridHeroSection)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-hero" style={{ animationDelay: '0.1s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-hero" style={{ animationDelay: '0.2s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-hero" style={{ animationDelay: '0.3s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-hero" style={{ animationDelay: '0.4s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-hero" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-hero" style={{ animationDelay: '0.6s' }} />
          <circle cx="20%" cy="20%" r="3" className="detail-dot-hero" style={{ animationDelay: '0.8s' }} />
          <circle cx="80%" cy="20%" r="3" className="detail-dot-hero" style={{ animationDelay: '0.9s' }} />
          <circle cx="20%" cy="80%" r="3" className="detail-dot-hero" style={{ animationDelay: '1s' }} />
          <circle cx="80%" cy="80%" r="3" className="detail-dot-hero" style={{ animationDelay: '1.1s' }} />
          <circle cx="50%" cy="50%" r="2.5" className="detail-dot-hero" style={{ animationDelay: '1.2s' }} />
        </svg>
        {/* ═══════════════════════════════════════════════════════════════════
          LEFT SIDEBAR - White area with vertical logo and social icons
          ═══════════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-[140px] xl:w-[180px] flex-col items-center justify-between py-10 z-20">
          {/* Logo Area removed */}

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {socialLinks.map((social, idx) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 xl:w-12 xl:h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
                aria-label={social.label}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
          MAIN PHOTO CONTAINER - Large rounded container with overlay
          ═══════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.98 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative m-4 lg:absolute lg:inset-y-6 lg:left-[140px] xl:left-[180px] lg:right-6 rounded-[40px] lg:rounded-[60px] xl:rounded-[73px] overflow-hidden min-h-[calc(100vh-2rem)] lg:min-h-0"
        >
          {/* Background Photo */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images/hero/background_maze.png"
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* Grid Background - Same as WhatWeDo section */}
          <div className="absolute inset-0 z-0">
            {/* Subtle texture */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #0E101A 1px, transparent 0)`,
                backgroundSize: '32px 32px',
              }}
            />

            {/* Animated Grid Background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <pattern id="gridHero" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(30, 41, 59, 0.2)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridHero)" />
              <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-hero" style={{ animationDelay: '0.1s' }} />
              <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-hero" style={{ animationDelay: '0.2s' }} />
              <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-hero" style={{ animationDelay: '0.3s' }} />
              <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-hero" style={{ animationDelay: '0.4s' }} />
              <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-hero" style={{ animationDelay: '0.5s' }} />
              <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-hero" style={{ animationDelay: '0.6s' }} />
              <circle cx="20%" cy="20%" r="3" className="detail-dot-hero" style={{ animationDelay: '0.8s' }} />
              <circle cx="80%" cy="20%" r="3" className="detail-dot-hero" style={{ animationDelay: '0.9s' }} />
              <circle cx="20%" cy="80%" r="3" className="detail-dot-hero" style={{ animationDelay: '1s' }} />
              <circle cx="80%" cy="80%" r="3" className="detail-dot-hero" style={{ animationDelay: '1.1s' }} />
              <circle cx="50%" cy="50%" r="2.5" className="detail-dot-hero" style={{ animationDelay: '1.2s' }} />
            </svg>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
            NAVIGATION BAR - Inside photo container
            ───────────────────────────────────────────────────────────────── */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16 py-6 lg:py-8"
          >
            {/* Mobile Logo - Only visible on mobile */}
            <Link href="/" className="lg:hidden flex items-center">
              <img
                src="/assets/images/logo.png"
                alt="Velricon"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Logo */}
            <Link href="/" className="hidden lg:flex items-center hover:opacity-80 transition-opacity">
              <img
                src="/assets/images/logo.png"
                alt="Velricon"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10 ml-auto">
              {/* Services with Dropdown */}
              <div
                ref={servicesDropdownRef}
                className="relative"
                onPointerEnter={() => setIsServicesDropdownOpen(true)}
                onPointerLeave={() => setIsServicesDropdownOpen(false)}
              >
                <Link
                  href="/services"
                  onClick={() => setIsServicesDropdownOpen(false)}
                  className="font-body text-base xl:text-lg text-white/90 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.12, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-2 min-w-[220px] z-30"
                    >
                      <div
                        className="rounded-xl overflow-hidden border border-white/[0.15]"
                        style={{
                          background: 'rgba(14, 16, 26, 0.95)',
                          backdropFilter: 'blur(24px)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                        }}
                      >
                        <div className="py-2">
                          {servicesItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setIsServicesDropdownOpen(false)
                                trackEvent('nav_service_click', { service: item.label })
                              }}
                              className="block px-4 py-2.5 text-sm font-body text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
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

              {/* Other Nav Links */}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-base xl:text-lg text-white/90 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>


          </motion.header>



          {/* ─────────────────────────────────────────────────────────────────
            MAIN HERO CONTENT
            ───────────────────────────────────────────────────────────────── */}
          <div className="relative z-10 min-h-full flex flex-col justify-start lg:justify-center px-6 sm:px-8 lg:px-12 xl:px-16 pt-20 pb-6 sm:pt-24 sm:pb-8 md:pt-28 md:pb-10 lg:pt-32 lg:pb-40 lg:h-full">
            <div className="max-w-3xl xl:max-w-4xl mb-8 sm:mb-10 md:mb-12 lg:mb-0">
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-[1.05] mb-6"
              >
                <span className="block font-accent font-light text-white">
                  Financial leadership that helps
                </span>
                <span className="block font-accent font-light text-[#a8a8a8] mt-2">
                  businesses grow with confidence.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base md:text-lg font-body font-light text-[#a8a8a8] leading-relaxed max-w-2xl mb-8"
              >
                We help business owners build strong financial control and prepare for bank financing and investor funding
              </motion.p>

              {/* CTA Button - Outlined */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <ShinyButton
                  onClick={handleConsultationClick}
                  className="text-sm px-6 py-2.5"
                >
                  Start a Financial Conversation
                </ShinyButton>
              </motion.div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
            BOTTOM SECTION - Trusted Clients & Secondary CTA
            ───────────────────────────────────────────────────────────────── */}

          {/* Desktop: Absolute positioned elements */}

          {/* Secondary CTA - Bottom Right - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden lg:block absolute bottom-8 right-12 xl:right-16 z-10 text-right"
          >
            <p className="font-accent text-base lg:text-lg font-normal text-white leading-tight mb-2">
              EXPLORE HOW WE WORK
            </p>
            <button
              onClick={handleExploreSolutionsClick}
              className="font-accent text-sm lg:text-base font-normal text-[#a8a8a8] hover:text-white transition-colors duration-300"
            >
              View our services
            </button>
          </motion.div>

          {/* Mobile: Secondary CTA only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="lg:hidden relative z-10 flex flex-col items-center gap-4 px-6 sm:px-8 pb-6 pt-4"
          >
            <div className="text-center">
              <p className="font-accent text-xs font-normal text-white leading-tight mb-1">
                EXPLORE HOW WE WORK
              </p>
              <button
                onClick={handleExploreSolutionsClick}
                className="font-accent text-xs font-normal text-[#a8a8a8] hover:text-white transition-colors duration-300"
              >
                See Solutions
              </button>
            </div>
          </motion.div>
        </motion.div>

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
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 lg:hidden overflow-y-auto"
                style={{
                  background: 'linear-gradient(180deg, rgba(14, 16, 26, 0.98) 0%, rgba(10, 12, 18, 0.98) 100%)',
                  backdropFilter: 'blur(24px)',
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
                    {navLinks.slice(1).map((link) => (
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
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        handleConsultationClick()
                      }}
                      className="w-full flex items-center justify-center px-6 py-3.5 bg-white text-black font-body text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-300"
                    >
                      Consultation Call
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>


      </section>
    </>
  )
}
