import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'

export const metadata: Metadata = {
  title: 'Services for Scaleups',
  description: 'Financial leadership services designed for growing scaleup companies.',
}

export default function ScaleupsPage() {
  const features = [
    'Scalable finance function design',
    'Advanced financial modeling',
    'Growth metrics and KPIs',
    'Strategic planning and forecasting',
    'Team building and hiring support',
  ]

  return (
    <Section background="deep-void" className="pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-accent font-light tracking-tight leading-[1.05] text-white mb-6">
          Financial Leadership for Scaleups
        </h1>
        <p className="text-base md:text-lg font-body font-light tracking-tight text-platinum/90 mb-12">
          Scale your finance function and make data-driven decisions to accelerate growth.
        </p>

        <Card className="mb-8">
          <h2 className="text-2xl font-accent font-light tracking-tight leading-[1.05] text-white mb-6">
            What We Offer
          </h2>
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Icon name="check" className="text-strategy-blue mt-1 flex-shrink-0" />
                <span className="text-platinum/90 font-body font-light tracking-tight leading-relaxed text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}

