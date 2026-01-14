'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimate } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HighlighterItem, HighlightGroup, Particles } from '@/components/ui/highlighter';

interface StageData {
  title: string;
  subtitle: string;
  description: string;
  support: string;
  image: string;
  imageAlt: string;
  bgColor: string;
}

const stagesData: StageData[] = [
  {
    title: "Start-ups",
    subtitle: "Building your financial foundation",
    description: "You're in the early stages of building your business, and financial structure is still taking shape. Decisions matter, but the systems to support them often don't exist yet. Cash visibility is more important than perfect reports, and you need someone who can guide you through financial choices without slowing you down.",
    support: "Velricon helps you set up your financial foundation from the ground up. From tracking cash and producing clear monthly reporting, to building your first budgets and forecasts, we give you clarity early. We also support you as a founder, helping you prepare for investor conversations and make financial decisions with confidence, not guesswork.",
    image: "/assets/images/hero/path_through_maze.png",
    imageAlt: "Early stage business building financial foundation",
    bgColor: "#1A1F2E",
  },
  {
    title: "Scale-ups",
    subtitle: "Structuring growth with control",
    description: "You're growing, and the pace is faster than your financial structure can comfortably handle. Reporting exists, but it's no longer enough. You need forward-looking insight, not just hindsight. Decisions around growth, cash, and operations now carry real weight.",
    support: "Velricon steps in to bring structure and control to that growth. We introduce advanced reporting and KPI visibility, rolling forecasts that account for different scenarios, and a sharper focus on working capital. At this stage, we don't just support decisions, we help shape them, while also building and overseeing a finance function that can scale with the business.",
    image: "/assets/images/hero/modern_cityscape.png",
    imageAlt: "Growing business scaling financial operations",
    bgColor: "#1E2538",
  },
  {
    title: "Established SMEs",
    subtitle: "Senior financial leadership for complexity",
    description: "Your business is established, but complexity is increasing. Financial decisions now affect long-term value, governance, and risk. You may be thinking about exits, acquisitions, or strategic restructuring, and you need financial leadership that operates comfortably at board level.",
    support: "Velricon provides a complete CFO function tailored to this stage. We lead reporting, planning, and financial strategy, support board-level discussions, and prepare the business for value maximization. From exit readiness and M&A support to due diligence and risk management, our role is to bring senior financial judgment where it matters most.",
    image: "/assets/images/hero/sophisticated_boardroom.png",
    imageAlt: "Established business with board-level financial strategy",
    bgColor: "#15202B",
  },
];

const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
};

const AnimatedHeader = () => {
  const [headerRef, headerInView] = useScrollAnimation();
  const [pRef, pInView] = useScrollAnimation();

  return (
    <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
      <h2
        ref={headerRef}
        className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-accent font-light tracking-tight transition-all duration-700 ease-out text-white ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        Your Virtual CFO Partner Through{' '}
        <span className="text-strategy-blue">Every Growth Stage</span>
      </h2>
      <p
        ref={pRef}
        className={`text-lg md:text-xl font-body font-light tracking-tight text-platinum/90 mt-6 transition-all duration-700 ease-out delay-200 ${pInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        From startup launch to scale-up acceleration to established business optimization - tailored CFO services that grow with you.
      </p>
    </div>
  );
};

export function StickyScrollCardsSection() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
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
      }
    );
  }, [animate]);

  return (
    <section className="relative bg-deep-void">
      <Container size="xl" className="relative z-10">
        <div className="py-20 md:py-28 lg:py-36">
          <AnimatedHeader />

          <div className="w-full pb-24 lg:pb-32">
            {stagesData.map((stage, index) => (
              <div
                key={`${stage.title}-${index}`}
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 lg:p-10 rounded-3xl mb-12 lg:mb-14 sticky border border-surface-border/50"
                style={{ top: '140px', backgroundColor: stage.bgColor }}
              >
                <div className="flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-accent font-light tracking-tight text-white mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-sm md:text-base font-body font-medium text-strategy-blue/90 mb-4 tracking-wide">
                    {stage.subtitle}
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm md:text-base font-body font-light text-slate/80 leading-relaxed">
                      {stage.description}
                    </p>
                    <p className="text-sm md:text-base font-body font-light text-platinum/90 leading-relaxed">
                      {stage.support}
                    </p>
                  </div>
                </div>

                <div className="order-1 md:order-2 mt-6 md:mt-0">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.1]">
                    <Image
                      src={stage.image}
                      alt={stage.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(0, 40, 87, 0.3) 0%, rgba(14, 16, 26, 0.5) 50%, rgba(0, 40, 87, 0.4) 100%)',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
        </div>
      </Container>
    </section>
  );
}
