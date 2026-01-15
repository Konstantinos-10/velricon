'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useAnimate } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HighlighterItem, HighlightGroup, Particles } from '@/components/ui/highlighter';
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
  const [scope, animate] = useAnimate();



  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#financial-clarity", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#financial-clarity", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#cash-management", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#cash-management", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#strategic-planning", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#strategic-planning", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#decision-support", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#decision-support", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      },
    );
  }, [animate]);

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
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5"/>
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
          <HighlightGroup className="group h-full">
            <div className="group/item h-full">
              <HighlighterItem className="rounded-3xl p-6">
                <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-surface-border bg-elevation-layer">
                  <Particles
                    className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                    quantity={200}
                    color={"#74B3FF"}
                    vy={-0.2}
                  />
                  <div className="flex justify-center w-full">
                    <div className="flex h-full flex-col justify-center gap-10 w-full md:h-[300px] md:flex-row md:gap-0 md:p-0">
                      <div
                        className="relative h-[270px] w-full mb-8 md:mb-0 md:h-full md:w-1/2 overflow-hidden rounded-xl md:rounded-l-xl md:rounded-r-none"
                        ref={scope}
                      >
                        {/* Background Image - covers entire left container, no blue background visible */}
                        <div className="absolute inset-0 z-0">
                          <Image
                            src="/assets/images/sticky-scroll/cozy_meeting_space.png"
                            alt="Cozy meeting space"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 300px, 300px"
                          />
                        </div>

                        <div
                          id="financial-clarity"
                          className="absolute bottom-12 left-14 z-10 rounded-3xl border border-surface-border bg-elevation-layer px-2 py-1.5 text-xs opacity-50"
                        >
                          Financial Clarity
                        </div>

                        <div
                          id="cash-management"
                          className="absolute left-2 top-20 z-10 rounded-3xl border border-surface-border bg-elevation-layer px-2 py-1.5 text-xs opacity-50"
                        >
                          Cash Management
                        </div>

                        <div
                          id="strategic-planning"
                          className="absolute bottom-20 right-1 z-10 rounded-3xl border border-surface-border bg-elevation-layer px-2 py-1.5 text-xs opacity-50"
                        >
                          Strategic Planning
                        </div>

                        <div
                          id="decision-support"
                          className="absolute right-12 top-10 z-10 rounded-3xl border border-surface-border bg-elevation-layer px-2 py-1.5 text-xs opacity-50"
                        >
                          Decision Support
                        </div>

                        <div id="pointer" className="absolute z-20">
                          <svg
                            width="16.8"
                            height="18.2"
                            viewBox="0 0 12 13"
                            className="fill-strategy-blue"
                            stroke="white"
                            strokeWidth="1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                            />
                          </svg>
                          <span className="bg-strategy-blue relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-white">
                            CFO
                          </span>
                        </div>
                      </div>

                      <div className="-mt-20 flex h-full flex-col justify-center p-4 md:-mt-0 md:ml-0 md:w-1/2 md:p-8 md:pb-12">
                        <div className="flex flex-col items-center md:items-start">
                          <h3 className="mt-6 pb-1 font-accent font-light">
                            <span className="text-2xl md:text-4xl text-white tracking-tight leading-tight">
                              Ready to <span className="text-strategy-blue">transform your finances</span>?
                            </span>
                          </h3>
                        </div>
                        <p className="mb-6 text-slate text-center md:text-left">
                          Let's discuss how we can help your business grow.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start pb-8 md:pb-0">
                          <Link href="/contact">
                            <Button variant="primary" size="default" className="text-sm px-6 py-2.5">
                              Book a Strategy Call
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>
        </motion.div>
      </Container>
    </motion.section>
    </>
  );
}

