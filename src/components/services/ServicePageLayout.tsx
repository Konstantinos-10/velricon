import { ReactNode } from 'react'
import { ServicePageHero } from './ServicePageHero'
import { ServicePageContentSection } from './ServicePageContentSection'
import { ServiceSubServices } from './ServiceSubServices'
import { ServicePageContent } from '@/config/service-pages'

interface ServicePageLayoutProps {
  content: ServicePageContent
}

export function ServicePageLayout({ content }: ServicePageLayoutProps) {
  return (
    <>
      <ServicePageHero
        serviceName={content.title}
        headline={content.mandate.headline}
        subline={content.mandate.subline}
        highlightPhrases={content.mandate.highlightPhrases}
        imageUrl={content.mandate.imageUrl}
        imageAlt={content.mandate.imageAlt}
      />
      <ServicePageContentSection
        authorityAndControl={content.discipline.authorityAndControl}
        impactOnDecisions={content.discipline.impactOnDecisions}
      />
      <ServiceSubServices subServices={content.subServices} />
    </>
  )
}
