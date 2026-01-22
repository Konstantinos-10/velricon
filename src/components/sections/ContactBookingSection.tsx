'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const bookingSectionGridStyles = `
  @keyframes grid-draw-booking { 
    0% { stroke-dashoffset: 1000; opacity: 0; } 
    50% { opacity: 0.15; } 
    100% { stroke-dashoffset: 0; opacity: 0.08; } 
  }
  .grid-line-light-booking { 
    stroke: #94A3B8; 
    stroke-width: 1; 
    opacity: 0.05; 
    stroke-dasharray: 4 4; 
    stroke-dashoffset: 1000; 
    animation: grid-draw-booking 2s ease-out forwards; 
  }
  .detail-dot-light-booking { 
    fill: #74B3FF; 
    opacity: 0.1; 
  }
`

export function ContactBookingSection() {
    return (
        <>
            <style>{bookingSectionGridStyles}</style>
            <section className="relative py-24 lg:py-32 bg-soft-white overflow-hidden">
                {/* Subtle background gradient */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, #F8F9FA 50%, #F4F6F9 100%)',
                    }}
                />

                {/* Animated Grid Background - Adapted for Light Theme */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                        <pattern id="gridBooking" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#gridBooking)" />

                    {/* Animated Accent Lines */}
                    <line x1="0" y1="30%" x2="100%" y2="30%" className="grid-line-light-booking" style={{ animationDelay: '0.1s' }} />
                    <line x1="0" y1="70%" x2="100%" y2="70%" className="grid-line-light-booking" style={{ animationDelay: '0.4s' }} />
                    <line x1="30%" y1="0" x2="30%" y2="100%" className="grid-line-light-booking" style={{ animationDelay: '0.6s' }} />
                    <line x1="70%" y1="0" x2="70%" y2="100%" className="grid-line-light-booking" style={{ animationDelay: '0.9s' }} />

                    {/* Static Details */}
                    <circle cx="30%" cy="30%" r="2" className="detail-dot-light-booking" />
                    <circle cx="70%" cy="30%" r="2" className="detail-dot-light-booking" />
                    <circle cx="30%" cy="70%" r="2" className="detail-dot-light-booking" />
                    <circle cx="70%" cy="70%" r="2" className="detail-dot-light-booking" />
                </svg>

                <Container size="lg" className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white/80 backdrop-blur-xl rounded-3xl border border-platinum/50 p-12 md:p-20 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.08)] text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-strategy-blue/10 border border-strategy-blue/20 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-strategy-blue opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-strategy-blue"></span>
                                </span>
                                <span className="text-[10px] sm:text-xs font-body font-medium uppercase tracking-[0.1em] text-strategy-blue">
                                    Integration Pending
                                </span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-accent font-light text-black mb-6">
                                Schedule a Strategic Call
                            </h2>

                            <p className="text-base md:text-lg font-body font-light text-dark-ink/70 leading-relaxed mb-10 max-w-2xl mx-auto">
                                We are currently setting up our direct booking system. In the meantime, please use the contact form below to request a call, or check back soon to book directly through HubSpot or Calendly.
                            </p>

                            <div className="h-[300px] w-full border-2 border-dashed border-platinum/60 rounded-2xl flex flex-col items-center justify-center bg-soft-white/30 group">
                                <div className="p-4 rounded-full bg-platinum/20 text-platinum group-hover:bg-strategy-blue/10 group-hover:text-strategy-blue transition-colors mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                </div>
                                <p className="text-sm font-body text-platinum group-hover:text-strategy-blue transition-colors">
                                    HubSpot / Calendly Embed Area
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </>
    )
}
