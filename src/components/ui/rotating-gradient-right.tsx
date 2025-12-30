"use client";

import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Whitesmoke background */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#F5F5F5',
        }}
      />
      
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
              <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-[1.05] mb-8" style={{ color: '#0E101A' }}>
                The Velricon Difference
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
  );
}
