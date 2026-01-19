'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CallToAction } from '@/components/cta-3';
import Image from 'next/image';

const stickyScrollStyles = `
  @keyframes grid-draw { 
    0% { stroke-dashoffset: 1000; opacity: 0; } 
    50% { opacity: 0.3; } 
    100% { stroke-dashoffset: 0; opacity: 0.15; } 
  }
  .grid-line-dark { 
    stroke: #64748B; 
    stroke-width: 0.5; 
    opacity: 0; 
    stroke-dasharray: 5 5; 
    stroke-dashoffset: 1000; 
    animation: grid-draw 2s ease-out forwards; 
  }
  .detail-dot-dark { 
    fill: #94A3B8; 
    opacity: 0; 
    animation: pulse-glow-dark 3s ease-in-out infinite; 
  }
  @keyframes pulse-glow-dark { 
    0%, 100% { opacity: 0.1; transform: scale(1); } 
    50% { opacity: 0.3; transform: scale(1.1); } 
  }
`;



export function StickyScrollReveal() {
  return (
    <>
      <style>{stickyScrollStyles}</style>
      <motion.section
        className="relative py-24 lg:py-32 overflow-x-clip"
        initial={{
          backgroundColor: '#0E101A',
        }}
        animate={{
          backgroundColor: '#0E101A',
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridStickyScroll" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridStickyScroll)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-dark" style={{ animationDelay: '0.1s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-dark" style={{ animationDelay: '0.2s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-dark" style={{ animationDelay: '0.3s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-dark" style={{ animationDelay: '0.4s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-dark" style={{ animationDelay: '0.5s', opacity: '0.05' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-dark" style={{ animationDelay: '0.6s', opacity: '0.05' }} />
          <circle cx="20%" cy="20%" r="2" className="detail-dot-dark" style={{ animationDelay: '0.7s' }} />
          <circle cx="80%" cy="20%" r="2" className="detail-dot-dark" style={{ animationDelay: '0.8s' }} />
          <circle cx="20%" cy="80%" r="2" className="detail-dot-dark" style={{ animationDelay: '0.9s' }} />
          <circle cx="80%" cy="80%" r="2" className="detail-dot-dark" style={{ animationDelay: '1s' }} />
          <circle cx="50%" cy="50%" r="1.5" className="detail-dot-dark" style={{ animationDelay: '1.1s' }} />
        </svg>
        <Container size="xl" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-left mb-12 lg:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-[1.05] text-white mb-6"
            >
              Who We <span className="text-electric-blue">Support</span>
            </motion.h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full py-4"
          >
            <div className="grid gap-10 md:grid-cols-2 items-start">
              <div className="space-y-5">
                <p className="text-base md:text-lg font-light tracking-tight text-white">
                  We work with business owners and management teams who need financial clarity to make important decisions.
                </p>
                <p className="text-base md:text-lg font-light tracking-tight text-white">
                  Our work typically starts when a business is:
                </p>
                <ul className="list-disc space-y-3 pl-5 text-base md:text-lg font-light text-slate">
                  <li>Preparing for bank financing or refinancing</li>
                  <li>Getting ready for investor discussions or funding</li>
                  <li>Seeking management reporting, budgeting, and deeper financial analysis</li>
                  <li>Strengthening cash flow forecasting and financial planning</li>
                  <li>Bringing structure and discipline to financial decision-making</li>
                  <li>Needing senior financial insight during periods of growth or change</li>
                  <li>Navigating restructuring, ownership changes, or complex financial decisions</li>
                </ul>
                <p className="text-base md:text-lg font-light text-white">
                  Our focus is on practical financial leadership that helps businesses move forward with confidence.
                </p>
              </div>
              <div className="relative h-[280px] md:h-[420px] w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/assets/images/sticky-scroll/modular_architecture.png"
                  alt="Modular architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-deep-void/40 via-transparent to-elevation-layer/60" />
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 lg:mt-24"
          >
            <CallToAction />
          </motion.div>
        </Container>
      </motion.section>
    </>
  );
}

