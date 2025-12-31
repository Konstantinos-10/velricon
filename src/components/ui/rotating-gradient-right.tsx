"use client";

import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const rotatingGradientStyles = `
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

const differentiators = [
  {
    label: 'Flexible CFO Expertise',
    description: '30–50% cost of full-time, scale as needed',
  },
  {
    label: 'Complete Solutions',
    description: 'Virtual CFO + investor packages + bank packages',
  },
  {
    label: 'Strategic + Technical',
    description: "We don't just report—we guide decisions",
  },
  {
    label: 'Investor Credibility',
    description: 'Our financial models pass due diligence',
  },
  {
    label: 'Bank Relationships',
    description: 'We know what Cyprus banks require',
  },
  {
    label: 'Cyprus Ecosystem',
    description: 'Deep understanding of local startup/SME landscape',
  },
];

export default function RotatingGradientRight() {
  return (
    <>
      <style>{rotatingGradientStyles}</style>
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Whitesmoke background */}
      <div 
        className="absolute inset-0"
        style={{
            backgroundColor: '#F5F5F5',
            backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(245, 245, 245, 0.9), rgba(250, 250, 250, 0.95))',
        }}
      />
        
        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridRotatingGradient" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(30, 41, 59, 0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridRotatingGradient)" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Rotating gradient with card */}
          <div className="relative mx-auto flex h-[40rem] w-full max-w-[60rem] items-center justify-center overflow-hidden rounded-3xl">
            {/* Rotating conic gradient glow - using brand colors */}
            <div className="absolute -inset-10 flex items-center justify-center">
              <div
                className="
                  h-[120%] w-[120%] rounded-[36px] blur-3xl opacity-60
                  bg-[conic-gradient(from_0deg,#74B3FF,#3B82F6,#74B3FF,#002857,#74B3FF,#3B82F6,#74B3FF)]
                  animate-[spin_8s_linear_infinite]
                "
              />
            </div>

            {/* Card inside the glow */}
            <Card className="w-[340px] z-10 rounded-2xl border border-surface-border/50 bg-elevation-layer/95 shadow-2xl backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-body text-sm font-medium" style={{ color: '#0E101A' }}>Velricon</span>
                  <span className="font-body text-xs text-slate">CFO Services</span>
                </div>

                {/* Progress bar */}
                <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-surface-border/50">
                  <div className="h-full w-[92%] rounded-full bg-[linear-gradient(90deg,#74B3FF,#3B82F6,#74B3FF)]" />
                </div>

                <p className="font-body text-xs text-slate leading-relaxed mb-4">
                  Strategic financial leadership tailored to your business stage. Expert guidance when you need it.
                </p>

                <Button
                  variant="secondary"
                  className="mt-2 w-full rounded-lg bg-elevation-layer border border-surface-border text-platinum hover:bg-strategy-blue/10 hover:text-strategy-blue hover:border-strategy-blue/30 transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: The Velricon Difference Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-accent text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-[1.05] mb-8" style={{ color: '#0E101A' }}>
                The <span className="text-strategy-blue">Velricon</span> Difference
              </h2>
            </div>

            {/* Differentiators list */}
            <div className="space-y-4 mb-8">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group hover:bg-elevation-layer/30 rounded-lg p-2 -mx-2 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <Icon
                      name="check"
                      className="w-5 h-5"
                      style={{ color: '#002857' }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-body font-semibold tracking-tight mb-1" style={{ color: '#0E101A' }}>
                      {item.label}
                    </div>
                    <div className="font-body text-sm tracking-tight leading-relaxed" style={{ color: '#1E293B' }}>
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <Link
              href="/who-we-are"
              className="inline-flex items-center gap-2 font-body text-sm font-medium tracking-tight hover:opacity-80 transition-colors duration-200 group"
              style={{ color: '#002857' }}
            >
              Learn how we work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
