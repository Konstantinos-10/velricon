'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { Container } from '@/components/ui/Container';
import { Sprout, TrendingUp, Building2 } from 'lucide-react';

const content = [
  {
    title: 'Start-ups',
    description:
      'Set up financial infrastructure from scratch • Monthly reporting & cash tracking • Build your first budgets & forecasts • Prepare for investor conversations • Guide founder on financial decision-making',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[#1A1F2E] text-white p-8">
        <Sprout className="h-24 w-24 text-[#74B3FF]" />
      </div>
    ),
  },
  {
    title: 'Scale-ups',
    description:
      'Advanced reporting & KPI dashboards • Rolling 18-month forecasts & scenario planning • Working capital optimization • Strategic decision support for growth • Build and oversee your finance team',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[#1A1F2E] text-white p-8">
        <TrendingUp className="h-24 w-24 text-[#74B3FF]" />
      </div>
    ),
  },
  {
    title: 'Established SMEs',
    description:
      'Complete CFO function (reporting, planning, strategy) • Board-level financial leadership • Exit preparation & value maximization • M&A support and due diligence • Sophisticated risk management & controls',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[#1A1F2E] text-white p-8">
        <Building2 className="h-24 w-24 text-[#74B3FF]" />
      </div>
    ),
  },
];

export function StickyScrollReveal() {
  return (
    <section className="relative py-24 lg:py-32 bg-deep-void">
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
            Your Virtual CFO Partner Through Every Growth Stage
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
          <StickyScroll content={content} />
        </motion.div>
      </Container>
    </section>
  );
}

