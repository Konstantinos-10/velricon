import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Financial leadership services tailored to startups, scaleups, and established SMEs.',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'For Startups',
      href: '/services/startups',
      description: 'Build financial foundations and investor-ready reporting from day one.',
    },
    {
      title: 'For Scaleups',
      href: '/services/scaleups',
      description: 'Scale your finance function and make data-driven growth decisions.',
    },
    {
      title: 'For Established SMEs',
      href: '/services/smes',
      description: 'Optimize operations and prepare for strategic transitions.',
    },
    {
      title: 'Investor Ready Package',
      href: '/services/investor-ready',
      description: 'Comprehensive financial package to attract and secure investment.',
    },
    {
      title: 'Bank Ready Package',
      href: '/services/bank-ready',
      description: 'Prepare your business for bank financing and credit facilities.',
    },
  ]

  return (
    <Section background="deep-void" className="pt-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-header font-bold text-white mb-4">
          Our Services
        </h1>
        <p className="text-xl text-platinum font-body max-w-3xl mx-auto">
          Financial leadership tailored to your business stage and goals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => (
          <Card key={service.href} hover>
            <h2 className="text-2xl font-header font-semibold text-white mb-3">
              {service.title}
            </h2>
            <p className="text-platinum font-body mb-6">
              {service.description}
            </p>
            <Link href={service.href}>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  )
}

