'use client';

import { Container } from '@/components/ui/Container';
import CardFlip from '@/components/ui/flip-card';
import { LineChart, Wallet, Target, Lightbulb } from 'lucide-react';

export function WhatWeDo() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Light background */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#F5F5F5',
        }}
      />
      
      <Container size="xl" className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-accent text-sm tracking-widest uppercase mb-4" style={{ color: '#002857' }}>
            What we do
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-[1.05] mb-6" style={{ color: '#0E101A' }}>
            Virtual CFO Services for Growing Cyprus Businesses
          </h2>
          <p className="text-base md:text-lg font-light tracking-tight max-w-3xl mx-auto" style={{ color: '#1E293B' }}>
            Whether you're a startup building your foundation, a scale-up navigating rapid growth, or an established business optimizing for value—we deliver the CFO expertise you need, when you need it.
          </p>
        </div>

        {/* Core CFO Services */}
        <div className="mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
            <CardFlip
              title="Financial Clarity"
              subtitle="Monthly reporting, KPIs, and dashboards"
              description="Monthly reporting, KPIs, and dashboards that show you exactly what's happening in your business."
              features={[]}
              color="#74B3FF"
              icon={LineChart}
              backIcon={LineChart}
              imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1974&auto=format&fit=crop"
            />
            
            <CardFlip
              title="Cash Management"
              subtitle="Forecasting and working capital"
              description="Forecasting, working capital optimization, and runway visibility—so you never run out of cash."
              features={[]}
              color="#74B3FF"
              icon={Wallet}
              backIcon={Wallet}
              imageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1974&auto=format&fit=crop"
            />
            
            <CardFlip
              title="Strategic Planning"
              subtitle="Budgets and financial modeling"
              description="Budgets, financial modeling, scenario planning, and growth strategy support."
              features={[]}
              color="#74B3FF"
              icon={Target}
              backIcon={Target}
              imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1974&auto=format&fit=crop"
            />
            
            <CardFlip
              title="Decision Support"
              subtitle="Your thinking partner"
              description="Your thinking partner for major decisions—from hiring to expansion to fundraising."
              features={[]}
              color="#74B3FF"
              icon={Lightbulb}
              backIcon={Lightbulb}
              imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1974&auto=format&fit=crop"
            />
          </div>
        </div>

      </Container>
    </section>
  );
}

