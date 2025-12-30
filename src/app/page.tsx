import { Hero } from '@/components/hero/Hero'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { WhoWeServe } from '@/components/sections/WhoWeServe'
import { StickyScrollReveal } from '@/components/sections/StickyScrollReveal'
import { ConnectSection } from '@/components/sections/ConnectSection'
import RotatingGradientRight from '@/components/ui/rotating-gradient-right'
import { InfiniteMovingCardsDemo } from '@/components/sections/InfiniteMovingCardsDemo'
import { MeetChristos } from '@/components/sections/MeetChristos'

export default function Home() {
  return (
    <>
      <Hero />
      
      <WhatWeDo />
      
      <StickyScrollReveal />
      
      <WhoWeServe />
      
      <ConnectSection />
        
      <RotatingGradientRight />
          
      <InfiniteMovingCardsDemo />
          
      <MeetChristos />
    </>
  )
}

