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
    quote: (
      <>
        We prepared a{" "}
        <span className="text-electric-blue">
          financing package for a 50 million funding request
        </span>
        , including detailed financial models, cash-flow analysis, and supporting
        presentation materials.
        <span className="block mt-4">
          The model and analysis were subsequently used by an{" "}
          <span className="text-electric-blue">
            independent professional valuation firm
          </span>{" "}
          as part of its valuation work, and later by a{" "}
          <span className="text-electric-blue">Big-4 audit firm</span> to support a
          broader market analysis and sector report.
        </span>
      </>
    ),
    name: "Financing Preparation",
    role: "01",
    company: "TechScale Cyprus",
    outcome: "Secured Series A funding",
  },
  {
    id: 2,
    quote: (
      <>
        We supported a business through{" "}
        <span className="text-electric-blue">investor preparation and strategy</span>,
        developing the full set of financial materials, valuation analysis, and
        funding narrative.
        <span className="block mt-4">
          The work supported progression to the{" "}
          <span className="text-electric-blue">RIF interview stage.</span> In
          separate, ongoing engagements, we are supporting{" "}
          <span className="text-electric-blue">
            active funding roadshows of 2 million and 1 million
          </span>
          , providing financial models, investor materials, and ongoing support
          during investor meetings.
        </span>
      </>
    ),
    name: "Investor Preparation",
    role: "02",
    company: "GrowthSME Ltd",
    outcome: "Optimized cash flow",
  },
  {
    id: 3,
    quote: (
      <>
        Across different engagements, we have supported businesses in{" "}
        <span className="text-electric-blue">improving liquidity</span> through more
        effective working capital management, including reducing days outstanding
        and strengthening cash discipline.
        <span className="block mt-4">
          We have also helped{" "}
          <span className="text-electric-blue">improve profitability and margins</span>{" "}
          by analysing product mix and pricing, identifying inefficiencies, and
          supporting operational improvements.
        </span>
        <span className="block mt-4">
          In parallel, we worked with owners and management teams to{" "}
          <span className="text-electric-blue">
            set clear short- and long-term financial goals
          </span>
          , align strategy with financial capacity, and bring structure to ongoing
          decision-making.
        </span>
      </>
    ),
    name: "Ongoing Financial Leadership",
    role: "03",
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
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-accent font-light tracking-tight leading-[1.1] text-white max-w-2xl">
              Our work is <span className="text-electric-blue">structured</span>, transparent, and focused on supporting{" "}
              <span className="text-electric-blue">financial decisions</span>
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
                <blockquote className="text-lg lg:text-xl font-body font-light leading-[1.4] text-platinum/80 tracking-tight">
                  {activeTestimonial.quote}
                </blockquote>
                
                {/* Attribution */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-strategy-blue/40" />
                  <div>
                    <p className="font-body text-[14px] font-medium text-white">
                      {activeTestimonial.name}
                    </p>
                    <p className="font-body text-[12px] text-platinum/60">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>

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
                  <blockquote className="text-lg lg:text-xl font-body font-light leading-[1.4] text-platinum/80 tracking-tight">
                    {activeTestimonial.quote}
                  </blockquote>
                  
                  {/* Attribution */}
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-px bg-strategy-blue/40" />
                    <div>
                      <p className="font-body text-[15px] font-medium text-white mb-1">
                        {activeTestimonial.name}
                      </p>
                      <p className="font-body text-[13px] text-platinum/60">
                        {activeTestimonial.role}
                      </p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Client Navigator */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="pl-8 border-l border-white/[0.06]">
                <p className="font-body text-[11px] font-medium tracking-[0.15em] text-platinum/40 uppercase mb-6">
                  Select a client situation
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
                              ? 'bg-electric-blue' 
                              : 'bg-electric-blue/30'
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
                            {testimonial.role}
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
