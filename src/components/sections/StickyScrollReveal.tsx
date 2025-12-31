'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useAnimate } from 'framer-motion';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HighlighterItem, HighlightGroup, Particles } from '@/components/ui/highlighter';
import { Sprout, TrendingUp, Building2, LineChart } from 'lucide-react';

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

const content = [
  {
    title: 'Start-ups',
    description:
      'Set up financial infrastructure from scratch • Monthly reporting & cash tracking • Build your first budgets & forecasts • Prepare for investor conversations • Guide founder on financial decision-making',
    backgroundColor: '#0F172A', // Slate-900 - darker blue-gray for startups
    content: (
      <div className="flex h-full w-full items-center justify-center text-white p-8">
        <Sprout className="h-24 w-24 text-[#74B3FF]" />
      </div>
    ),
  },
  {
    title: 'Scale-ups',
    description:
      'Advanced reporting & KPI dashboards • Rolling 18-month forecasts & scenario planning • Working capital optimization • Strategic decision support for growth • Build and oversee your finance team',
    backgroundColor: '#1E293B', // Slate-800 - medium blue-gray for scale-ups
    content: (
      <div className="flex h-full w-full items-center justify-center text-white p-8">
        <TrendingUp className="h-24 w-24 text-[#74B3FF]" />
      </div>
    ),
  },
  {
    title: 'Established SMEs',
    description:
      'Complete CFO function (reporting, planning, strategy) • Board-level financial leadership • Exit preparation & value maximization • M&A support and due diligence • Sophisticated risk management & controls',
    backgroundColor: '#0E101A', // Deep void - darkest for established businesses
    content: (
      <div className="flex h-full w-full items-center justify-center text-white p-8">
        <Building2 className="h-24 w-24 text-[#74B3FF]" />
      </div>
    ),
  },
];

export function StickyScrollReveal() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [scope, animate] = useAnimate();

  const getSectionBackground = () => {
    return content[activeCardIndex]?.backgroundColor || '#0E101A';
  };

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
          backgroundColor: content[0]?.backgroundColor || '#0E101A',
        }}
        animate={{
          backgroundColor: getSectionBackground(),
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          backgroundImage: 'linear-gradient(to bottom right, rgb(15, 23, 42), rgb(14, 16, 26), rgb(30, 41, 59))',
        }}
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-accent text-sm tracking-widest text-strategy-blue uppercase mb-4"
          >
            Who we serve
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-[1.05] text-white mb-6"
          >
            Your Virtual CFO Partner Through <span className="text-strategy-blue">Every Growth Stage</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl font-light tracking-tight text-platinum max-w-3xl"
          >
            From startup launch to scale-up acceleration to established business optimization—tailored CFO services that grow with you.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full py-4"
        >
          <StickyScroll 
            content={content} 
            onActiveCardChange={setActiveCardIndex}
          />
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
                  <div className="flex justify-center">
                    <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                      <div
                        className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                        ref={scope}
                      >
                        <LineChart className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-strategy-blue" />

                        <div
                          id="financial-clarity"
                          className="absolute bottom-12 left-14 rounded-3xl border border-surface-border bg-elevation-layer px-2 py-1.5 text-xs opacity-50"
                        >
                          Financial Clarity
                        </div>

                        <div
                          id="cash-management"
                          className="absolute left-2 top-20 rounded-3xl border border-surface-border bg-elevation-layer px-2 py-1.5 text-xs opacity-50"
                        >
                          Cash Management
                        </div>

                        <div
                          id="strategic-planning"
                          className="absolute bottom-20 right-1 rounded-3xl border border-surface-border bg-elevation-layer px-2 py-1.5 text-xs opacity-50"
                        >
                          Strategic Planning
                        </div>

                        <div
                          id="decision-support"
                          className="absolute right-12 top-10 rounded-3xl border border-surface-border bg-elevation-layer px-2 py-1.5 text-xs opacity-50"
                        >
                          Decision Support
                        </div>

                        <div id="pointer" className="absolute">
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

                      <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                        <div className="flex flex-col items-center">
                          <h3 className="mt-6 pb-1 font-accent font-light">
                            <span className="text-2xl md:text-4xl text-white tracking-tight">
                              Ready to <span className="text-strategy-blue">transform your finances</span>?
                            </span>
                          </h3>
                        </div>
                        <p className="mb-4 text-slate text-center md:text-left">
                          Let's discuss how we can help your business grow.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          <Link href="/contact">
                            <Button variant="primary" size="lg">
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

