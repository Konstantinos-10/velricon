'use client'

import { memo, useCallback, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { InteractiveImageAccordion } from '@/components/ui/interactive-image-accordion'
import { NeonButton } from '@/components/ui/neon-button'
import { trackEvent } from '@/lib/analytics'

export function Hero() {
  const router = useRouter()
  const [mouseGradientStyle, setMouseGradientStyle] = useState({
    left: '0px',
    top: '0px',
    opacity: 0,
  })
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [scrolled, setScrolled] = useState(false)
  const floatingElementsRef = useRef<HTMLElement[]>([])

  const handleStrategyCallClick = useCallback(() => {
    trackEvent('strategy_call_click', { location: 'hero' })
    router.push('/contact')
  }, [router])

  const handleExploreSolutionsClick = useCallback(() => {
    trackEvent('explore_solutions_click', { location: 'hero' })
    router.push('/services')
  }, [router])

  // Word animations
  useEffect(() => {
    const animateWords = () => {
      const wordElements = document.querySelectorAll('.word-animate')
      wordElements.forEach((word) => {
        const delay = parseInt(word.getAttribute('data-delay') || '0')
        setTimeout(() => {
          if (word instanceof HTMLElement) {
            word.style.animation = 'word-appear 0.4s ease-out forwards'
          }
        }, delay)
      })
    }
    const timeoutId = setTimeout(animateWords, 100)
    return () => clearTimeout(timeoutId)
  }, [])

  // Mouse gradient tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseGradientStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      })
    }

    const handleMouseLeave = () => {
      setMouseGradientStyle((prev) => ({ ...prev, opacity: 0 }))
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Ripple effects on click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY }
      setRipples((prev) => [...prev, newRipple])
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== newRipple.id)), 1000)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Word hover effects
  useEffect(() => {
    const wordElements = document.querySelectorAll('.word-animate')
    const handleMouseEnter = (e: Event) => {
      if (e.target instanceof HTMLElement) {
        e.target.style.textShadow = '0 0 20px rgba(116, 179, 255, 0.5)'
      }
    }
    const handleMouseLeave = (e: Event) => {
      if (e.target instanceof HTMLElement) {
        e.target.style.textShadow = 'none'
      }
    }

    wordElements.forEach((word) => {
      word.addEventListener('mouseenter', handleMouseEnter)
      word.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      wordElements.forEach((word) => {
        word.removeEventListener('mouseenter', handleMouseEnter)
        word.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  // Floating elements animation
  useEffect(() => {
    const elements = document.querySelectorAll('.floating-element-animate')
    floatingElementsRef.current = Array.from(elements) as HTMLElement[]

    const handleScroll = () => {
      if (!scrolled) {
        setScrolled(true)
        floatingElementsRef.current.forEach((el, index) => {
          setTimeout(() => {
            if (el) {
              el.style.animationPlayState = 'running'
              el.style.opacity = ''
            }
          }, (parseFloat(el.style.animationDelay || '0') * 1000) + index * 100)
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const pageStyles = `
    #mouse-gradient-react {
      position: fixed;
      pointer-events: none;
      border-radius: 9999px;
      background-image: radial-gradient(circle, rgba(116, 179, 255, 0.08), rgba(116, 179, 255, 0.05), transparent 70%);
      transform: translate(-50%, -50%);
      will-change: left, top, opacity;
      transition: left 70ms linear, top 70ms linear, opacity 300ms ease-out;
      z-index: 1;
    }
    @keyframes word-appear { 
      0% { opacity: 0; transform: translateY(15px) scale(0.95); filter: blur(5px); } 
      60% { opacity: 0.9; transform: translateY(3px) scale(0.98); filter: blur(1px); } 
      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } 
    }
    @keyframes grid-draw { 
      0% { stroke-dashoffset: 1000; opacity: 0; } 
      50% { opacity: 0.3; } 
      100% { stroke-dashoffset: 0; opacity: 0.15; } 
    }
    .grid-line {
      animation-duration: 0.8s !important;
    }
    @keyframes pulse-glow { 
      0%, 100% { opacity: 0.1; transform: scale(1); } 
      50% { opacity: 0.3; transform: scale(1.1); } 
    }
    .word-animate { 
      display: inline-block; 
      opacity: 0; 
      margin: 0 0.1em; 
      transition: color 0.3s ease, transform 0.3s ease; 
    }
    .word-animate:hover { 
      color: #74B3FF; 
      transform: translateY(-2px); 
    }
    .grid-line { 
      stroke: #64748B; 
      stroke-width: 0.5; 
      opacity: 0; 
      stroke-dasharray: 5 5; 
      stroke-dashoffset: 1000; 
      animation: grid-draw 2s ease-out forwards; 
    }
    .detail-dot { 
      fill: #94A3B8; 
      opacity: 0; 
      animation: pulse-glow 3s ease-in-out infinite; 
    }
    .corner-element-animate { 
      position: absolute; 
      width: 40px; 
      height: 40px; 
      border: 1px solid rgba(148, 163, 184, 0.2); 
      opacity: 0; 
      animation: word-appear 0.4s ease-out forwards; 
    }
    .floating-element-animate { 
      position: absolute; 
      width: 2px; 
      height: 2px; 
      background: #94A3B8; 
      border-radius: 50%; 
      opacity: 0; 
      animation: float 4s ease-in-out infinite; 
      animation-play-state: paused; 
    }
    @keyframes float { 
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; } 
      25% { transform: translateY(-10px) translateX(5px); opacity: 0.6; } 
      50% { transform: translateY(-5px) translateX(-3px); opacity: 0.4; } 
      75% { transform: translateY(-15px) translateX(7px); opacity: 0.8; } 
    }
    .ripple-effect { 
      position: fixed; 
      width: 4px; 
      height: 4px; 
      background: rgba(116, 179, 255, 0.6); 
      border-radius: 50%; 
      transform: translate(-50%, -50%); 
      pointer-events: none; 
      animation: pulse-glow 1s ease-out forwards; 
      z-index: 9999; 
    }
  `

  return (
    <>
      <style>{pageStyles}</style>
      <section 
        className="relative min-h-screen pt-20 pb-16 lg:pb-24 flex items-center overflow-hidden text-white"
        style={{
          backgroundColor: '#0E101A',
          backgroundImage: 'linear-gradient(to bottom right, rgb(15, 23, 42), rgb(14, 16, 26), rgb(30, 41, 59))',
        }}
      >
        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridReactDarkResponsive" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridReactDarkResponsive)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.1s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '0.2s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '0.3s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '0.4s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line" style={{ animationDelay: '0.5s', opacity: '0.05' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line" style={{ animationDelay: '0.6s', opacity: '0.05' }} />
          <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '0.7s' }} />
          <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '0.8s' }} />
          <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '0.9s' }} />
          <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '1s' }} />
          <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: '1.1s' }} />
        </svg>

        {/* Corner Elements */}
        <div className="corner-element-animate top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8" style={{ animationDelay: '0.8s' }}>
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#74B3FF] opacity-30 rounded-full"></div>
        </div>
        <div className="corner-element-animate top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8" style={{ animationDelay: '0.9s' }}>
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#74B3FF] opacity-30 rounded-full"></div>
        </div>
        <div className="corner-element-animate bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8" style={{ animationDelay: '1s' }}>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#74B3FF] opacity-30 rounded-full"></div>
        </div>
        <div className="corner-element-animate bottom-4 right-4 sm:bottom-6 sm:right-6 md:top-8 md:right-8" style={{ animationDelay: '1.1s' }}>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#74B3FF] opacity-30 rounded-full"></div>
        </div>

        {/* Floating Elements */}
        <div className="floating-element-animate" style={{ top: '25%', left: '15%', animationDelay: '0.2s' }}></div>
        <div className="floating-element-animate" style={{ top: '60%', left: '85%', animationDelay: '0.3s' }}></div>
        <div className="floating-element-animate" style={{ top: '40%', left: '10%', animationDelay: '0.4s' }}></div>
        <div className="floating-element-animate" style={{ top: '75%', left: '90%', animationDelay: '0.5s' }}></div>

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
              <div className="space-y-6">
                <p className="font-accent text-sm tracking-widest text-strategy-blue uppercase">
                  <span className="word-animate" data-delay="0">Make</span>{' '}
                  <span className="word-animate" data-delay="40">sense</span>{' '}
                  <span className="word-animate" data-delay="80">of</span>{' '}
                  <span className="word-animate" data-delay="120">your</span>{' '}
                  <span className="word-animate" data-delay="160">money</span>
                </p>
                <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-accent tracking-tight leading-[0.95] text-white">
                  <div className="mb-2 font-normal">
                    <span className="word-animate" data-delay="200">CFO-level</span>{' '}
                    <span className="word-animate" data-delay="260">financial</span>{' '}
                    <span className="word-animate" data-delay="320">leadership</span>
                  </div>
                  <div className="font-bold">
                    <span className="word-animate text-strategy-blue" data-delay="400">without</span>{' '}
                    <span className="word-animate text-strategy-blue" data-delay="460">the</span>{' '}
                    <span className="word-animate text-strategy-blue" data-delay="520">full-time</span>{' '}
                    <span className="word-animate text-strategy-blue" data-delay="580">cost</span>
                  </div>
                </h1>

                <p className="text-base md:text-lg font-light tracking-tight text-platinum max-w-2xl">
                  <span className="word-animate" data-delay="700">Make</span>{' '}
                  <span className="word-animate" data-delay="740">clearer</span>{' '}
                  <span className="word-animate" data-delay="780">decisions,</span>{' '}
                  <span className="word-animate" data-delay="820">control</span>{' '}
                  <span className="word-animate" data-delay="860">cash</span>{' '}
                  <span className="word-animate" data-delay="900">flow,</span>{' '}
                  <span className="word-animate" data-delay="940">and</span>{' '}
                  <span className="word-animate" data-delay="980">scale</span>{' '}
                  <span className="word-animate" data-delay="1020">with</span>{' '}
                  <span className="word-animate" data-delay="1060">confidence</span>{' '}
                  <span className="word-animate" data-delay="1100">—</span>{' '}
                  <span className="word-animate" data-delay="1140">backed</span>{' '}
                  <span className="word-animate" data-delay="1180">by</span>{' '}
                  <span className="word-animate" data-delay="1220">senior</span>{' '}
                  <span className="word-animate" data-delay="1260">financial</span>{' '}
                  <span className="word-animate" data-delay="1300">expertise.</span>
                </p>
              </div>

              {/* Buttons */}
              <div 
                className="flex flex-col gap-4 items-start opacity-0"
                style={{ animation: 'word-appear 0.5s ease-out forwards', animationDelay: '1400ms' }}
              >
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

        {/* Mouse Gradient */}
        <div 
          id="mouse-gradient-react"
          className="w-60 h-60 blur-xl sm:w-80 sm:h-80 sm:blur-2xl md:w-96 md:h-96 md:blur-3xl"
          style={{
            left: mouseGradientStyle.left,
            top: mouseGradientStyle.top,
            opacity: mouseGradientStyle.opacity,
          }}
        ></div>

        {/* Ripple Effects */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="ripple-effect"
            style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
          ></div>
        ))}
    </section>
    </>
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
