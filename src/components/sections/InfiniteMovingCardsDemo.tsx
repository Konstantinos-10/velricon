"use client";

import React from "react";
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
        <div className="text-center mb-8 lg:mb-10">
          <p className="font-accent text-sm tracking-widest text-strategy-blue uppercase mb-4">
            Client Success
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-light tracking-tight leading-[1.05] text-white mb-4">
            Trusted by Growing Businesses in Cyprus
          </h2>
          <p className="text-base md:text-lg font-body font-light tracking-tight text-slate max-w-3xl mx-auto">
            See how we've helped startups, scale-ups, and established businesses achieve their financial goals.
          </p>
        </div>

        {/* Infinite Moving Cards */}
        <div className="h-[28rem] lg:h-[32rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </Container>
    </section>
  );
}

