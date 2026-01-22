'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const contactHeroGridStyles = `
  @keyframes grid-draw-contact { 
    0% { stroke-dashoffset: 1000; opacity: 0; } 
    50% { opacity: 0.3; } 
    100% { stroke-dashoffset: 0; opacity: 0.15; } 
  }
  .grid-line-dark-contact { 
    stroke: #64748B; 
    stroke-width: 0.5; 
    opacity: 0; 
    stroke-dasharray: 5 5; 
    stroke-dashoffset: 1000; 
    animation: grid-draw-contact 2s ease-out forwards; 
  }
  .detail-dot-dark-contact { 
    fill: #74B3FF; 
    opacity: 0; 
    animation: pulse-glow-dark-contact 3s ease-in-out infinite; 
  }
  @keyframes pulse-glow-dark-contact { 
    0%, 100% { opacity: 0.1; transform: scale(1); } 
    50% { opacity: 0.25; transform: scale(1.1); } 
  }
`

export function ContactHero() {
    const prefersReducedMotion = useReducedMotion()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <style>{contactHeroGridStyles}</style>
            <section className="relative min-h-[60svh] lg:min-h-[70svh] overflow-hidden bg-deep-void">
                {/* Background gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, #0E101A 0%, #0a0c12 100%)',
                    }}
                />

                {/* Animated Grid Background */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                        <pattern id="gridContactHero" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.08)" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#gridContactHero)" />
                    <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-dark-contact" style={{ animationDelay: '0.1s' }} />
                    <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-dark-contact" style={{ animationDelay: '0.2s' }} />
                    <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-dark-contact" style={{ animationDelay: '0.3s' }} />
                    <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-dark-contact" style={{ animationDelay: '0.4s' }} />
                    <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-dark-contact" style={{ animationDelay: '0.5s' }} />
                    <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-dark-contact" style={{ animationDelay: '0.6s' }} />
                    <circle cx="20%" cy="20%" r="2" className="detail-dot-dark-contact" style={{ animationDelay: '0.7s' }} />
                    <circle cx="80%" cy="20%" r="2" className="detail-dot-dark-contact" style={{ animationDelay: '0.8s' }} />
                    <circle cx="20%" cy="80%" r="2" className="detail-dot-dark-contact" style={{ animationDelay: '0.9s' }} />
                    <circle cx="80%" cy="80%" r="2" className="detail-dot-dark-contact" style={{ animationDelay: '1s' }} />
                    <circle cx="50%" cy="50%" r="2" className="detail-dot-dark-contact" style={{ animationDelay: '1.1s' }} />
                </svg>

                {/* Main Content */}
                <div className="relative z-10 min-h-[60svh] lg:min-h-[70svh] flex items-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-24 lg:py-32">
                    <div className="w-full max-w-4xl">
                        <div className="relative">

                            {/* Vertical Marker - Desktop */}
                            <div className="hidden md:block absolute -left-8 xl:-left-12 top-0 bottom-0 w-px">
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: isLoaded ? 1 : 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                                    className="w-full h-full origin-top"
                                    style={{
                                        background: 'linear-gradient(180deg, transparent 0%, #74B3FF 10%, #74B3FF 90%, transparent 100%)',
                                    }}
                                />
                            </div>

                            {/* Horizontal Marker - Mobile */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: isLoaded ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                                className="md:hidden absolute -top-8 left-0 w-16 h-px origin-left"
                                style={{
                                    background: 'linear-gradient(90deg, #74B3FF 0%, transparent 100%)',
                                }}
                            />

                            {/* Content Block */}
                            <div className="md:pl-8 xl:pl-12">

                                {/* Eyebrow */}
                                <motion.p
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 8 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="font-body text-xs font-medium tracking-[0.2em] text-platinum/60 uppercase mb-6 md:mb-8"
                                >
                                    Contact Us
                                </motion.p>

                                {/* Headline */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 12 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="text-[clamp(2.5rem,6vw,4.5rem)] font-accent font-light leading-[1.1] tracking-[-0.02em] text-white mb-6 md:mb-8"
                                >
                                    <span className="block text-electric-blue">Connect</span>
                                    <span className="block mt-2">with Velricon</span>
                                </motion.h1>

                                {/* Subline */}
                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 12 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="text-base md:text-lg font-body font-light text-slate/80 leading-relaxed max-w-2xl mb-8 md:mb-10"
                                >
                                    Whether you’re preparing for financing, navigating growth, or bringing structure to your financial decisions — we’re ready to discuss how we can support your situation.
                                </motion.p>

                                {/* Optional micro-line */}
                                <motion.p
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 8 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="font-body text-[11px] md:text-xs font-medium tracking-[0.15em] text-strategy-blue/60 uppercase"
                                >
                                    Clarify. Structure. Execute.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
