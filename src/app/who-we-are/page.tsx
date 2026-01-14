import { Metadata } from 'next'
import { WhoWeAreHero } from '@/components/sections/WhoWeAreHero'
import { BeliefSystemSection } from '@/components/sections/BeliefSystem'

export const metadata: Metadata = {
  title: 'Who We Are',
  description: 'Learn about Velricon and our approach to fractional CFO services.',
}

export default function WhoWeArePage() {
  return (
    <>
      <WhoWeAreHero />
      <BeliefSystemSection />
    </>
  )
}
