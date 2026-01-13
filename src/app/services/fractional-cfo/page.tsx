import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { getServiceBySlug } from '@/config/services'

export const metadata: Metadata = {
  title: 'Fractional CFO',
  description: 'Strategic CFO expertise without the full-time commitment. Get the financial leadership you need, when you need it.',
}

export default function FractionalCFOPage() {
  const service = getServiceBySlug('fractional-cfo')

  if (!service) {
    return null
  }

  return (
    <Section background="deep-void" className="pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight leading-[1.05] text-white mb-6">
          {service.title}
        </h1>
        <p className="text-base md:text-lg font-light tracking-tight text-white/70 mb-12">
          {service.description}
        </p>

        <Card className="mb-8">
          <h2 className="text-2xl font-light tracking-tight leading-[1.05] text-white mb-6">
            What's Included
          </h2>
          <ul className="space-y-4">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Icon name="check" className="text-strategy-blue mt-1 flex-shrink-0" />
                <span className="text-platinum font-normal tracking-tight leading-relaxed text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}
