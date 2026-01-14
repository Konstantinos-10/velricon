'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const whatWeDoGridStyles = `
  @keyframes grid-draw-light { 
    0% { stroke-dashoffset: 1000; opacity: 0; } 
    50% { opacity: 0.5; } 
    100% { stroke-dashoffset: 0; opacity: 0.4; } 
  }
  .grid-line-light { 
    stroke: rgba(30, 41, 59, 0.4); 
    stroke-width: 1; 
    opacity: 0; 
    stroke-dasharray: 5 5; 
    stroke-dashoffset: 1000; 
    animation: grid-draw-light 1.5s ease-out forwards; 
  }
  .detail-dot-light { 
    fill: rgba(30, 41, 59, 0.5); 
    opacity: 0; 
    animation: pulse-glow-light 3s ease-in-out infinite; 
  }
  @keyframes pulse-glow-light { 
    0%, 100% { opacity: 0.3; transform: scale(1); } 
    50% { opacity: 0.6; transform: scale(1.1); } 
  }
`;

const services = [
  {
    id: 'fractional-cfo',
    title: 'Fractional CFO',
    description: 'Strategic CFO expertise without the full-time commitment. Get the financial leadership you need, when you need it.',
    details: 'Monthly reporting • Financial strategy • Cash flow management • Growth planning',
    href: '/services/fractional-cfo',
    image: '/assets/images/hero/path_through_maze.png',
  },
  {
    id: 'bank-ready',
    title: 'Bank-Ready Packages',
    description: 'We know what Cyprus banks require. Let us prepare your financial documentation to meet their exacting standards.',
    details: 'Financial statements • Business plans • Cash flow forecasts • Compliance documentation',
    href: '/services/bank-ready',
    image: '/assets/images/hero/modern_cityscape.png',
  },
  {
    id: 'investor-ready',
    title: 'Investor-Ready Packages',
    description: 'Get investor-ready financials that pass due diligence. Present your business with confidence and clarity.',
    details: 'Due diligence prep • Financial models • Valuation support • Investor presentations',
    href: '/services/investor-ready',
    image: '/assets/images/hero/sophisticated_boardroom.png',
  },
];

export function WhatWeDo() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentService = services[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  return (
    <>
      <style>{whatWeDoGridStyles}</style>
      <section 
        ref={sectionRef}
        className="relative py-32 lg:py-40 overflow-hidden"
        style={{ background: '#FAFAFA' }}
      >
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
            <pattern id="gridWhatWeDo" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(30, 41, 59, 0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridWhatWeDo)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-light" style={{ animationDelay: '0.1s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-light" style={{ animationDelay: '0.2s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.3s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.4s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-light" style={{ animationDelay: '0.6s' }} />
          <circle cx="20%" cy="20%" r="3" className="detail-dot-light" style={{ animationDelay: '0.8s' }} />
          <circle cx="80%" cy="20%" r="3" className="detail-dot-light" style={{ animationDelay: '0.9s' }} />
          <circle cx="20%" cy="80%" r="3" className="detail-dot-light" style={{ animationDelay: '1s' }} />
          <circle cx="80%" cy="80%" r="3" className="detail-dot-light" style={{ animationDelay: '1.1s' }} />
          <circle cx="50%" cy="50%" r="2.5" className="detail-dot-light" style={{ animationDelay: '1.2s' }} />
        </svg>
      
      <Container size="xl" className="relative z-10">
        {/* Opening Statement - KEPT UNCHANGED */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-24 lg:mb-32"
        >
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-accent text-sm tracking-[0.2em] uppercase mb-6"
              style={{ color: '#74B3FF' }}
            >
            What we do
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-accent text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1] tracking-tight"
              style={{ color: '#0E101A' }}
            >
              We give you the{' '}
              <span className="text-strategy-blue">financial clarity</span>
              {' '}to make decisions that matter.
            </motion.h2>
          </div>
        </motion.div>

        {/* Services Showcase - One at a time */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Left: Text Content */}
              <div className="order-2 lg:order-1">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-accent text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-6"
                  style={{ color: '#0E101A' }}
                >
                  {currentService.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-[#475569] text-lg lg:text-xl font-light tracking-tight mb-6 leading-relaxed"
                >
                  {currentService.description}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-[#94A3B8] text-sm lg:text-base tracking-wide mb-8"
                >
                  {currentService.details}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Link href={currentService.href}>
                    <Button
                      variant="primary"
                      size="lg"
                      className="text-base px-8 py-3"
                    >
                      Learn More
                    </Button>
                  </Link>
                </motion.div>
        </div>

              {/* Right: Image */}
              <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentService.image}
                    alt={currentService.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={currentIndex === 0}
                  />
                  {/* Subtle overlay for depth */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 0.1) 100%)',
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-12 lg:mt-16">
            <button
              onClick={handlePrevious}
              aria-label="Previous service"
              className="flex items-center justify-center w-12 h-12 rounded-full border border-[#74B3FF]/30 bg-white/50 hover:bg-white hover:border-[#74B3FF]/50 transition-all duration-200 group"
              style={{ color: '#74B3FF' }}
            >
              <ChevronLeft size={20} className="group-hover:translate-x-[-2px] transition-transform" />
            </button>

            {/* Service Indicators */}
            <div className="flex items-center gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to ${services[idx].title}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-strategy-blue'
                      : 'bg-[#74B3FF]/30 hover:bg-[#74B3FF]/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next service"
              className="flex items-center justify-center w-12 h-12 rounded-full border border-[#74B3FF]/30 bg-white/50 hover:bg-white hover:border-[#74B3FF]/50 transition-all duration-200 group"
              style={{ color: '#74B3FF' }}
            >
              <ChevronRight size={20} className="group-hover:translate-x-[2px] transition-transform" />
            </button>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
