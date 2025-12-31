'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const services = [
  {
    number: '01',
    verb: 'See',
    noun: 'Clarity',
    line: 'Know exactly where you stand.',
    detail: 'Monthly reporting • KPIs • Dashboards',
  },
  {
    number: '02',
    verb: 'Plan',
    noun: 'Confidence',
    line: "Know exactly where you're going.",
    detail: 'Forecasts • Budgets • Scenarios',
  },
  {
    number: '03',
    verb: 'Decide',
    noun: 'Certainty',
    line: 'Know exactly what to do next.',
    detail: 'Strategy • Growth • Fundraising',
  },
];

export function WhatWeDo() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
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

      <Container size="xl" className="relative z-10">
        {/* Opening Statement */}
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

        {/* The System - Three Pillars */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute top-[60px] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-[#74B3FF]/30 to-transparent origin-left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
            {services.map((service, index) => (
              <ServicePillar
                key={service.number}
                service={service}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* Closing Micro-statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-24 lg:mt-32 text-center"
        >
          <p className="text-[#64748B] text-lg font-light tracking-tight">
            Not a service list. <span className="text-[#0E101A]">A system for growth.</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

function ServicePillar({ 
  service, 
  index, 
  isInView 
}: { 
  service: typeof services[0];
  index: number;
  isInView: boolean;
}) {
  const delay = 0.6 + index * 0.2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative text-center lg:text-left"
    >
      {/* Node indicator */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: delay + 0.3 }}
        className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#FAFAFA] border-2 border-[#74B3FF]/30 items-center justify-center"
      >
        <div className="w-2 h-2 rounded-full bg-strategy-blue" />
      </motion.div>

      {/* Number */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.1 }}
        className="block font-accent text-[10rem] lg:text-[8rem] xl:text-[10rem] leading-none tracking-tighter lg:text-center"
        style={{ 
          color: 'transparent',
          WebkitTextStroke: '1px rgba(116, 179, 255, 0.2)',
        }}
      >
        {service.number}
      </motion.span>

      {/* Content container - overlapping the number */}
      <div className="-mt-16 lg:-mt-20 relative z-10 lg:text-center">
        {/* Verb */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
          className="font-accent text-4xl lg:text-5xl tracking-tight mb-1"
          style={{ color: '#0E101A' }}
        >
          {service.verb}
        </motion.h3>

        {/* Noun */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="font-accent text-2xl lg:text-3xl tracking-tight text-strategy-blue mb-6"
        >
          {service.noun}
        </motion.p>

        {/* Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          className="text-[#475569] text-lg font-light tracking-tight mb-4"
        >
          {service.line}
        </motion.p>

        {/* Detail */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.5 }}
          className="text-[#94A3B8] text-sm tracking-wide"
        >
          {service.detail}
        </motion.p>
      </div>
    </motion.div>
  );
}
