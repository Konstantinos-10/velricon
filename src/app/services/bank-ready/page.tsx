import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'

export const metadata: Metadata = {
  title: 'Bank Ready Package',
  description: 'Prepare your business for bank financing and credit facilities.',
}

export default function BankReadyPage() {
  const features = [
    'Financial statement preparation',
    'Credit application support',
    'Covenant compliance planning',
    'Cash flow projections',
    'Bank relationship management',
  ]

  return (
    <Section background="deep-void" className="pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight leading-[1.05] text-white mb-6">
          Bank Ready Package
        </h1>
        <p className="text-base md:text-lg font-light tracking-tight text-white/70 mb-12">
          Prepare your business for bank financing and credit facilities with professional financial documentation.
        </p>

        <Card className="mb-8">
          <h2 className="text-2xl font-light tracking-tight leading-[1.05] text-white mb-6">
            Package Includes
          </h2>
          <ul className="space-y-4">
            {features.map((feature) => (
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

