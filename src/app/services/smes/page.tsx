import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'

export const metadata: Metadata = {
  title: 'Services for Established SMEs',
  description: 'Financial leadership services for established small and medium enterprises.',
}

export default function SMEsPage() {
  const features = [
    'Financial optimization',
    'Strategic planning and M&A support',
    'Process improvement',
    'Risk management',
    'Succession planning',
  ]

  return (
    <Section background="deep-void" className="pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-header font-bold text-white mb-6">
          Financial Leadership for Established SMEs
        </h1>
        <p className="text-xl text-platinum font-body mb-12">
          Optimize operations and prepare for strategic transitions with expert financial leadership.
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

