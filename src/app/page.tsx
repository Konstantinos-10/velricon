import { Hero } from '@/components/hero/Hero'
import { HomeAchievements } from '@/components/sections/home-achievements'
import { LogoCloudSection } from '@/components/sections/logo-cloud-section'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { WhoWeServe } from '@/components/sections/WhoWeServe'
import { LifecycleInterventionMap } from '@/components/sections/lifecycle-intervention-map'
import { ConnectSection } from '@/components/sections/ConnectSection'
import RotatingGradientRight from '@/components/ui/rotating-gradient-right'
import { InfiniteMovingCardsDemo } from '@/components/sections/InfiniteMovingCardsDemo'
import { MeetChristos } from '@/components/sections/MeetChristos'
import { ContactFaq } from '@/components/sections/contact-faq'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAchievements />
      
      <WhatWeDo />
      
      <WhoWeServe />

      <LogoCloudSection />

      <LifecycleInterventionMap />
        
      <RotatingGradientRight />
          
      <InfiniteMovingCardsDemo />
          
      <MeetChristos />

      <ContactFaq />
    </>
  )
}
