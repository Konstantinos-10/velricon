import { Metadata } from 'next'
import { ServicesHero } from '@/components/sections/ServicesHero'
import { OurServicePaths } from '@/components/sections/OurServicePaths'
import { StickyScrollCardsSection } from '@/components/ui/sticky-scroll-cards-section'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Financial leadership services tailored to your business needs. Fractional CFO, Bank-Ready Packages, and Investor-Ready Packages.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <OurServicePaths />
      <StickyScrollCardsSection />
    </>
  )
}
