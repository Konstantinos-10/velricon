import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'

export const metadata: Metadata = {
  title: 'Services for Startups',
  description: 'Financial leadership services designed for early-stage startups.',
}

export default function StartupsPage() {
  const features = [
    'Financial model development',
    'Investor-ready reporting',
    'Cash flow management',
    'Budget planning and forecasting',
    'Fundraising support',
  ]

  return (
    <Section background="deep-void" className="pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-header font-bold text-white mb-6">
          Financial Leadership for Startups
        </h1>
        <p className="text-xl text-platinum font-body mb-12">
          Build strong financial foundations from day one with expert guidance tailored to early-stage companies.
        </p>

        <Card className="mb-8">
          <h2 className="text-2xl font-header font-semibold text-white mb-6">
            What We Offer
          </h2>
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Icon name="check" className="text-strategy-blue mt-1 flex-shrink-0" />
                <span className="text-platinum font-body text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}

