'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Sprout, TrendingUp, Building2, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WhoWeServe() {
  const [openStage, setOpenStage] = useState<number | null>(0);

  const stages = [
    {
      id: 0,
      icon: Sprout,
      phaseLabel: 'Building Your Foundation',
      challenges: [
        'No financial infrastructure in place',
        'Cash flow uncertainty and runway concerns',
        'Need to make your first key hires',
        'Preparing to raise your first funding round',
      ],
      howWeHelp: [
        'Set up financial infrastructure from scratch',
        'Monthly reporting & cash tracking',
        'Build your first budgets & forecasts',
        'Prepare for investor conversations',
        'Guide founder on financial decision-making',
      ],
      whatYouGet: 'Your first CFO—part-time, affordable, experienced.',
      engagement: '2–3 days/month',
      successStory: '"[Startup Name] built investor-ready financials and raised their seed round"',
    },
    {
      id: 1,
      icon: TrendingUp,
      phaseLabel: 'Accelerating Growth',
      challenges: [
        'Rapid growth straining cash flow',
        'Financial systems not keeping up',
        'Need sophisticated planning and forecasting',
        'Preparing for Series A/B or significant bank financing',
      ],
      howWeHelp: [
        'Advanced reporting & KPI dashboards',
        'Rolling 18-month forecasts & scenario planning',
        'Working capital optimization',
        'Strategic decision support for growth',
        'Build and oversee your finance team',
      ],
      whatYouGet: 'A strategic CFO partner who guides your scaling journey.',
      engagement: '3–5 days/month',
      successStory: '"[Scale-up Name] optimized cash flow and secured growth financing"',
    },
    {
      id: 2,
      icon: Building2,
      phaseLabel: 'Optimizing for Value',
      challenges: [
        'Considering exit, sale, or strategic partnership',
        'Need complete CFO function without full-time hire',
        'Complex financial operations requiring oversight',
        'Desire to maximize business value',
      ],
      howWeHelp: [
        'Complete CFO function (reporting, planning, strategy)',
        'Board-level financial leadership',
        'Exit preparation & value maximization',
        'M&A support and due diligence',
        'Sophisticated risk management & controls',
      ],
      whatYouGet: 'Enterprise-level CFO expertise on a flexible basis.',
      engagement: '5–10 days/month',
      successStory: '"[Company Name] achieved successful exit with strategic CFO guidance"',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <Container size="xl" className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-accent text-sm tracking-widest uppercase mb-4" style={{ color: '#002857' }}>
            Who we serve
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-[1.05] mb-6" style={{ color: '#0E101A' }}>
            CFO Services Tailored to Your Stage
          </h2>
          <p className="text-base md:text-lg font-light tracking-tight max-w-3xl mx-auto" style={{ color: '#1E293B' }}>
            From startup to scale-up to exit—we adapt our services to match where you are in your journey.
          </p>
        </div>

        {/* Stages Accordion */}
        <div className="space-y-4">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isOpen = openStage === stage.id;

            return (
              <div
                key={stage.id}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all"
                style={{ backgroundColor: isOpen ? '#F8FAFC' : 'white' }}
              >
                <button
                  onClick={() => setOpenStage(isOpen ? null : stage.id)}
                  className="w-full p-6 lg:p-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#74B3FF20' }}>
                      <Icon className="w-6 h-6" style={{ color: '#74B3FF' }} />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-semibold mb-1" style={{ color: '#0E101A' }}>
                        {stage.phaseLabel}
                      </h3>
                      <p className="text-sm" style={{ color: '#64748B' }}>
                        {stage.engagement}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 transition-transform',
                      isOpen && 'rotate-180'
                    )}
                    style={{ color: '#64748B' }}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
                      {/* Challenges */}
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: '#0E101A' }}>
                          Challenges
                        </h4>
                        <ul className="space-y-2">
                          {stage.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2" style={{ color: '#64748B' }}>
                              <span className="mt-1">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* How We Help */}
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: '#0E101A' }}>
                          How We Help
                        </h4>
                        <ul className="space-y-2">
                          {stage.howWeHelp.map((help, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2" style={{ color: '#64748B' }}>
                              <span className="mt-1">•</span>
                              <span>{help}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What You Get */}
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: '#0E101A' }}>
                          What You Get
                        </h4>
                        <p className="text-sm mb-4" style={{ color: '#64748B' }}>
                          {stage.whatYouGet}
                        </p>
                        <div className="p-4 rounded-lg bg-gray-50">
                          <p className="text-xs italic" style={{ color: '#64748B' }}>
                            {stage.successStory}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

