import { Metadata } from 'next'
import { WhoWeAreHero } from '@/components/sections/WhoWeAreHero'
import { AboutUsSection } from '@/components/sections/AboutUsSection'
import { Feature } from '@/components/ui/feature-with-advantages'
import { WhoWeAreCTA } from '@/components/sections/WhoWeAreCTA'

export const metadata: Metadata = {
  title: 'Who We Are',
  description: 'Learn about Velricon and our approach to financial strategy and leadership.',
}

export default function WhoWeArePage() {
  return (
    <>
      <WhoWeAreHero />
      <AboutUsSection />
      <Feature />
      <WhoWeAreCTA />
    </>
  )
}
