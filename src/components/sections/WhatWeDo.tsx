'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import CardFlip from '@/components/ui/flip-card';
import { LineChart, Wallet, Target, Lightbulb } from 'lucide-react';

export function WhatWeDo() {
  const cards = [
    {
      title: "Financial Clarity",
      subtitle: "Monthly reporting, KPIs, and dashboards",
      description: "Monthly reporting, KPIs, and dashboards that show you exactly what's happening in your business.",
      icon: LineChart,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Cash Management",
      subtitle: "Forecasting and working capital",
      description: "Forecasting, working capital optimization, and runway visibility—so you never run out of cash.",
      icon: Wallet,
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Strategic Planning",
      subtitle: "Budgets and financial modeling",
      description: "Budgets, financial modeling, scenario planning, and growth strategy support.",
      icon: Target,
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Decision Support",
      subtitle: "Your thinking partner",
      description: "Your thinking partner for major decisions—from hiring to expansion to fundraising.",
      icon: Lightbulb,
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1974&auto=format&fit=crop"
    },
  ];

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-accent text-sm tracking-widest uppercase mb-4"
            style={{ color: '#002857' }}
          >
            What we do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-[1.05] mb-6"
            style={{ color: '#0E101A' }}
          >
            Virtual CFO Services for Growing Cyprus Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg font-light tracking-tight max-w-3xl mx-auto"
            style={{ color: '#1E293B' }}
          >
            Whether you're a startup building your foundation, a scale-up navigating rapid growth, or an established business optimizing for value—we deliver the CFO expertise you need, when you need it.
          </motion.p>
        </motion.div>

        {/* Core CFO Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 lg:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                custom={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full flex justify-center"
              >
                <CardFlip
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  features={[]}
                  color="#74B3FF"
                  icon={card.icon}
                  backIcon={card.icon}
                  imageUrl={card.imageUrl}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </Container>
    </section>
  );
}

