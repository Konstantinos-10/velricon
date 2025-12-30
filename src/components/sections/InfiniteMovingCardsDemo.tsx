"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Velricon transformed our financial operations. Their strategic guidance helped us secure Series A funding and scale with confidence. The fractional CFO model gave us enterprise-level expertise without the full-time cost.",
    name: "Sarah Chen",
    title: "CEO, TechScale Cyprus",
  },
  {
    quote:
      "Working with Velricon was a game-changer. They set up our financial infrastructure from scratch, prepared investor-ready reports, and guided us through our seed round. Their deep understanding of the Cyprus ecosystem was invaluable.",
    name: "Michael Petrou",
    title: "Founder, StartupCyprus",
  },
  {
    quote:
      "The team at Velricon doesn't just report numbers—they guide strategic decisions. Their Big-4 trained expertise combined with local market knowledge helped us optimize cash flow and prepare for our bank financing.",
    name: "Elena Demetriou",
    title: "CFO, GrowthSME Ltd",
  },
  {
    quote:
      "Velricon's investor-ready packages are exceptional. Our financial models passed due diligence seamlessly, and their strategic support throughout the fundraising process was instrumental in our success.",
    name: "Andreas Ioannou",
    title: "Co-founder, ScaleUp Ventures",
  },
  {
    quote:
      "As a scale-up, we needed sophisticated financial planning without the overhead. Velricon delivered rolling forecasts, KPI dashboards, and strategic decision support that helped us navigate rapid growth.",
    name: "Maria Constantinou",
    title: "Operations Director, FastTrack Cyprus",
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Deep void background */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#0E101A',
        }}
      />
      
      <Container size="xl" className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 lg:mb-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-accent text-sm tracking-widest text-strategy-blue uppercase mb-4"
          >
            Client Success
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-heading font-light tracking-tight leading-[1.05] text-white mb-4"
          >
            Trusted by Growing Businesses in Cyprus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg font-body font-light tracking-tight text-slate max-w-3xl mx-auto"
          >
            See how we've helped startups, scale-ups, and established businesses achieve their financial goals.
          </motion.p>
        </motion.div>

        {/* Infinite Moving Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-[28rem] lg:h-[32rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </motion.div>
      </Container>
    </section>
  );
}

