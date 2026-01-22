'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { CallToAction } from '@/components/cta-3'
import { highlightText } from '@/lib/text-utils'

interface ServicePageCTASectionProps {
  title: string
  description: string
  buttonText: string
}

const ctaSectionStyles = `
  @keyframes grid-draw-cta { 
    0% { stroke-dashoffset: 1000; opacity: 0; } 
    50% { opacity: 0.3; } 
    100% { stroke-dashoffset: 0; opacity: 0.15; } 
  }
  .grid-line-cta { 
    stroke: #64748B; 
    stroke-width: 0.5; 
    opacity: 0; 
    stroke-dasharray: 5 5; 
    stroke-dashoffset: 1000; 
    animation: grid-draw-cta 2s ease-out forwards; 
  }
  .detail-dot-cta { 
    fill: #94A3B8; 
    opacity: 0; 
    animation: pulse-glow-cta 3s ease-in-out infinite; 
  }
  @keyframes pulse-glow-cta { 
    0%, 100% { opacity: 0.1; transform: scale(1); } 
    50% { opacity: 0.3; transform: scale(1.1); } 
  }
`

export function ServicePageCTASection({ title, description, buttonText }: ServicePageCTASectionProps) {
  return (
    <>
      <style>{ctaSectionStyles}</style>
      <section className="relative py-24 lg:py-32 bg-[#0E101A] overflow-hidden">
        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridCTA" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridCTA)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-cta" style={{ animationDelay: '0.1s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-cta" style={{ animationDelay: '0.2s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-cta" style={{ animationDelay: '0.3s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-cta" style={{ animationDelay: '0.4s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-cta" style={{ animationDelay: '0.5s', opacity: '0.05' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-cta" style={{ animationDelay: '0.6s', opacity: '0.05' }} />
          <circle cx="20%" cy="20%" r="2" className="detail-dot-cta" style={{ animationDelay: '0.7s' }} />
          <circle cx="80%" cy="20%" r="2" className="detail-dot-cta" style={{ animationDelay: '0.8s' }} />
          <circle cx="20%" cy="80%" r="2" className="detail-dot-cta" style={{ animationDelay: '0.9s' }} />
          <circle cx="80%" cy="80%" r="2" className="detail-dot-cta" style={{ animationDelay: '1s' }} />
          <circle cx="50%" cy="50%" r="1.5" className="detail-dot-cta" style={{ animationDelay: '1.1s' }} />
        </svg>

        <Container size="xl" className="relative z-10">
          <CallToAction
            title={highlightText(title, ['clarity and structure', 'financial decisions', 'clarity and confidence', 'bank', 'banks', 'investor', 'investor discussions'], 'text-electric-blue font-bold')}
            description={description}
            buttonText={buttonText}
          />
        </Container>
      </section>
    </>
  )
}
