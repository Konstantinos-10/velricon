'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimate } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HighlighterItem, HighlightGroup, Particles } from '@/components/ui/highlighter';

export function ServicesCTA() {
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
    <section className="relative bg-deep-void py-20 md:py-28 lg:py-36">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
                            <Button variant="link" size="default" className="text-sm px-6 py-2.5">
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
    </section>
  );
}
