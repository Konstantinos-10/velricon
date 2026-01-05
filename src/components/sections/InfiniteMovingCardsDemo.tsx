"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialStyles = `
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
    fill: #74B3FF; 
    opacity: 0; 
    animation: pulse-glow-dark 3s ease-in-out infinite; 
  }
  @keyframes pulse-glow-dark { 
    0%, 100% { opacity: 0.1; transform: scale(1); } 
    50% { opacity: 0.25; transform: scale(1.1); } 
  }
`;

const testimonials = [
  {
    id: 1,
    quote: "Velricon transformed our financial operations. Their strategic guidance helped us secure Series A funding and scale with confidence.",
    name: "Sarah Chen",
    role: "CEO",
    company: "TechScale Cyprus",
    outcome: "Secured Series A funding",
  },
  {
    id: 2,
    quote: "They set up our financial infrastructure from scratch, prepared investor-ready reports, and guided us through our seed round. Invaluable.",
    name: "Michael Petrou",
    role: "Founder",
    company: "StartupCyprus",
    outcome: "Successful seed round",
  },
  {
    id: 3,
    quote: "The team doesn't just report numbers—they guide strategic decisions. Their Big-4 expertise helped us optimize cash flow.",
    name: "Elena Demetriou",
    role: "CFO",
    company: "GrowthSME Ltd",
    outcome: "Optimized cash flow",
  },
  {
    id: 4,
    quote: "Our financial models passed due diligence seamlessly. Their support throughout fundraising was instrumental in our success.",
    name: "Andreas Ioannou",
    role: "Co-founder",
    company: "ScaleUp Ventures",
    outcome: "Passed due diligence",
  },
  {
    id: 5,
    quote: "Rolling forecasts, KPI dashboards, and strategic decision support that helped us navigate rapid growth. Exactly what we needed.",
    name: "Maria Constantinou",
    role: "Operations Director",
    company: "FastTrack Cyprus",
    outcome: "Navigated rapid growth",
  },
];

export function InfiniteMovingCardsDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <style>{testimonialStyles}</style>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #0E101A 0%, #0a0c12 100%)',
          }}
        />
        
        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridTestimonials" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.08)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridTestimonials)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-dark" style={{ animationDelay: '0.1s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-dark" style={{ animationDelay: '0.2s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-dark" style={{ animationDelay: '0.3s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-dark" style={{ animationDelay: '0.4s' }} />
          <circle cx="20%" cy="20%" r="2" className="detail-dot-dark" style={{ animationDelay: '0.7s' }} />
          <circle cx="80%" cy="20%" r="2" className="detail-dot-dark" style={{ animationDelay: '0.8s' }} />
          <circle cx="20%" cy="80%" r="2" className="detail-dot-dark" style={{ animationDelay: '0.9s' }} />
          <circle cx="80%" cy="80%" r="2" className="detail-dot-dark" style={{ animationDelay: '1s' }} />
        </svg>
      
        <Container size="xl" className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 lg:mb-20"
          >
            <p className="font-body text-[11px] font-medium tracking-[0.2em] text-strategy-blue/90 uppercase mb-4">
              Client Experiences
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-accent font-light tracking-tight leading-[1.1] text-white max-w-lg">
              Trusted by growing businesses in Cyprus
            </h2>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════
              MOBILE LAYOUT - Compact with navigation below
              ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:hidden">
            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="space-y-6 mb-8"
              >
                {/* Quote */}
                <blockquote className="text-xl font-accent font-light leading-[1.4] text-white/90 tracking-tight">
                  "{activeTestimonial.quote}"
                </blockquote>
                
                {/* Attribution */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-strategy-blue/40" />
                  <div>
                    <p className="font-body text-[14px] font-medium text-white">
                      {activeTestimonial.name}
                    </p>
                    <p className="font-body text-[12px] text-platinum/60">
                      {activeTestimonial.role}, {activeTestimonial.company}
                    </p>
                  </div>
                </div>

                {/* Outcome tag */}
                {activeTestimonial.outcome && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-strategy-blue/20 bg-strategy-blue/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-strategy-blue" />
                    <span className="font-body text-[11px] font-medium text-strategy-blue/90">
                      {activeTestimonial.outcome}
                    </span>
                  </span>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-white/[0.06]">
              {/* Prev Button */}
              <button
                onClick={goToPrev}
                className="p-2 rounded-lg text-platinum/60 hover:text-white hover:bg-white/[0.04] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-200
                      ${index === activeIndex 
                        ? 'bg-strategy-blue w-6' 
                        : 'bg-white/[0.15] hover:bg-white/[0.3]'
                      }
                    `}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="p-2 rounded-lg text-platinum/60 hover:text-white hover:bg-white/[0.04] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              DESKTOP LAYOUT - Two columns with client navigator
              ═══════════════════════════════════════════════════════════════ */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-16">
            
            {/* Left: Featured Testimonial */}
            <div className="lg:col-span-7 xl:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-8"
                >
                  {/* Quote */}
                  <blockquote className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-accent font-light leading-[1.4] text-white/90 tracking-tight">
                    "{activeTestimonial.quote}"
                  </blockquote>
                  
                  {/* Attribution */}
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-px bg-strategy-blue/40" />
                    <div>
                      <p className="font-body text-[15px] font-medium text-white mb-1">
                        {activeTestimonial.name}
                      </p>
                      <p className="font-body text-[13px] text-platinum/60">
                        {activeTestimonial.role}, {activeTestimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Outcome tag */}
                  {activeTestimonial.outcome && (
                    <div className="pt-4">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-strategy-blue/20 bg-strategy-blue/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-strategy-blue" />
                        <span className="font-body text-[12px] font-medium text-strategy-blue/90 tracking-wide">
                          {activeTestimonial.outcome}
                        </span>
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Client Navigator */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="pl-8 border-l border-white/[0.06]">
                <p className="font-body text-[11px] font-medium tracking-[0.15em] text-platinum/40 uppercase mb-6">
                  Select a client
                </p>
                
                <nav className="space-y-1" aria-label="Testimonial navigation">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      onClick={() => setActiveIndex(index)}
                      className={`
                        w-full text-left px-4 py-3.5 rounded-lg transition-all duration-200
                        ${index === activeIndex 
                          ? 'bg-white/[0.04]' 
                          : 'hover:bg-white/[0.02]'
                        }
                      `}
                      aria-current={index === activeIndex ? 'true' : undefined}
                    >
                      <div className="flex items-center gap-4">
                        <div 
                          className={`
                            w-1 h-8 rounded-full transition-all duration-200
                            ${index === activeIndex 
                              ? 'bg-strategy-blue' 
                              : 'bg-white/[0.08]'
                            }
                          `}
                        />
                        <div>
                          <p className={`
                            font-body text-[14px] font-medium transition-colors duration-200
                            ${index === activeIndex ? 'text-white' : 'text-platinum/60'}
                          `}>
                            {testimonial.name}
                          </p>
                          <p className="font-body text-[12px] text-platinum/40">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <p className="font-body text-[12px] text-platinum/40 tabular-nums">
                    {activeIndex + 1} / {testimonials.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
