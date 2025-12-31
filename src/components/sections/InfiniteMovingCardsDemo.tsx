"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const infiniteCardsStyles = `
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
    <>
      <style>{infiniteCardsStyles}</style>
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Deep void background with gradient */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: '#0E101A',
            backgroundImage: 'linear-gradient(to bottom right, rgb(15, 23, 42), rgb(14, 16, 26), rgb(30, 41, 59))',
          }}
        />
        
        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridInfiniteCards" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridInfiniteCards)" />
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
            className="text-3xl lg:text-4xl xl:text-5xl font-accent font-light tracking-tight leading-[1.05] text-white mb-4"
          >
            Trusted by <span className="text-strategy-blue">Growing Businesses</span> in Cyprus
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
    </>
  );
}

