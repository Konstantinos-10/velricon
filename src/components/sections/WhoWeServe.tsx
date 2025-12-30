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

  
}

