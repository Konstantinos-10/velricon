import { Metadata } from 'next'
import { WhoWeAreHero } from '@/components/sections/WhoWeAreHero'
import { AboutUsSection } from '@/components/sections/AboutUsSection'
import { Stats } from '@/components/ui/stats-section-with-text'
import { Feature } from '@/components/ui/feature-with-advantages'
import { ServicesCTA } from '@/components/sections/ServicesCTA'

export const metadata: Metadata = {
  title: 'Who We Are',
  description: 'Learn about Velricon and our approach to fractional CFO services.',
}

export default function WhoWeArePage() {
  return (
    <>
      <WhoWeAreHero />
      <AboutUsSection />
      <Stats />
      <Feature />
      <ServicesCTA />
    </>
  )
}
