'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import CardFlip from '@/components/ui/flip-card';
import { BarChart3, FileText, Landmark, LineChart, TrendingUp, Wallet } from 'lucide-react';

const whatWeDoGridStyles = `
  @keyframes grid-draw-light { 
    0% { stroke-dashoffset: 1000; opacity: 0; } 
    50% { opacity: 0.5; } 
    100% { stroke-dashoffset: 0; opacity: 0.4; } 
  }
  .grid-line-light { 
    stroke: rgba(30, 41, 59, 0.4); 
    stroke-width: 1; 
    opacity: 0; 
    stroke-dasharray: 5 5; 
    stroke-dashoffset: 1000; 
    animation: grid-draw-light 1.5s ease-out forwards; 
  }
  .detail-dot-light { 
    fill: rgba(30, 41, 59, 0.5); 
    opacity: 0; 
    animation: pulse-glow-light 3s ease-in-out infinite; 
  }
  @keyframes pulse-glow-light { 
    0%, 100% { opacity: 0.3; transform: scale(1); } 
    50% { opacity: 0.6; transform: scale(1.1); } 
  }
`;

const services = [
  {
    id: 'fractional-cfo',
    title: 'Ongoing Financial Leadership (Your Virtual CFO Partner)',
    subtitle: 'Senior financial leadership supporting planning and control.',
    description: 'Ongoing support with management reporting, budgeting, cash flow forecasting, and financial planning — helping owners stay in control as the business grows.\nThis can include support during special situations such as restructuring, shareholder changes, or transaction preparation.',
    features: [
      'Monthly reporting',
      'Financial strategy',
      'Cash flow management',
      'Growth planning',
    ],
    linkLabel: 'Explore Financial Support',
    href: '/services/fractional-cfo',
    color: '#74B3FF',
    icon: TrendingUp,
    backIcon: LineChart,
  },
  {
    id: 'bank-ready',
    title: 'Bank Financing & Refinancing',
    subtitle: 'Financial projections and analysis aligned with bank requirements.',
    description: 'Bank-ready projections and cash-flow forecasts aligned with lender requirements to support approvals and refinancing.',
    features: [
      'Financial statements',
      'Business plans',
      'Cash flow forecasts',
      'Compliance documentation',
    ],
    linkLabel: 'Prepare for Bank Financing',
    href: '/services/bank-ready',
    color: '#74B3FF',
    icon: Landmark,
    backIcon: FileText,
  },
  {
    id: 'investor-ready',
    title: 'Investor-Ready Packages',
    subtitle: 'Clear financial models and analysis designed for investor scrutiny.',
    description: 'Financial models, valuations, and forecasts that stand up to investor scrutiny and support funding discussions.',
    features: [
      'Due diligence prep',
      'Financial models',
      'Valuation support',
      'Investor presentations',
    ],
    linkLabel: 'Prepare for Funding',
    href: '/services/investor-ready',
    color: '#74B3FF',
    icon: Wallet,
    backIcon: BarChart3,
  },
];

export function WhatWeDo() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <>
      <style>{whatWeDoGridStyles}</style>
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

        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridWhatWeDo" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(30, 41, 59, 0.2)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridWhatWeDo)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-light" style={{ animationDelay: '0.1s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-light" style={{ animationDelay: '0.2s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.3s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.4s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-light" style={{ animationDelay: '0.6s' }} />
          <circle cx="20%" cy="20%" r="3" className="detail-dot-light" style={{ animationDelay: '0.8s' }} />
          <circle cx="80%" cy="20%" r="3" className="detail-dot-light" style={{ animationDelay: '0.9s' }} />
          <circle cx="20%" cy="80%" r="3" className="detail-dot-light" style={{ animationDelay: '1s' }} />
          <circle cx="80%" cy="80%" r="3" className="detail-dot-light" style={{ animationDelay: '1.1s' }} />
          <circle cx="50%" cy="50%" r="2.5" className="detail-dot-light" style={{ animationDelay: '1.2s' }} />
        </svg>

        <Container size="xl" className="relative z-10">
          {/* Opening Statement - KEPT UNCHANGED */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="mb-24 lg:mb-32"
          >
            <div className="max-w-4xl">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-accent text-3xl lg:text-4xl xl:text-5xl leading-[1.05] tracking-tight text-dark-ink"
              >
                How We Help <span className="text-electric-blue">Businesses</span> Grow with{' '}
                <span className="text-electric-blue">Confidence</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-5 text-xl md:text-2xl font-body font-light tracking-tight text-dark-ink/70"
              >
                We give you the financial clarity to make decisions that matter.
              </motion.p>
            </div>
          </motion.div>

          {/* Services Showcase - Cards */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="flex justify-center"
              >
                <div className="block w-full max-w-[320px]">
                  <CardFlip
                    title={service.title}
                    subtitle={service.subtitle}
                    description={service.description}
                    features={service.features}
                    color={service.color}
                    icon={service.icon}
                    backIcon={service.backIcon}
                    href={service.href}
                    linkLabel={service.linkLabel}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
