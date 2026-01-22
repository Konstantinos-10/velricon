import { ServicePageHero } from './ServicePageHero'
import { ServicePageSublineSection } from './ServicePageSublineSection'
import { ServicePageContentSection } from './ServicePageContentSection'
import { ServicePageReverseContent } from './ServicePageReverseContent'
import { ServiceSubServices } from './ServiceSubServices'
import { Feature } from '@/components/ui/feature'
import { ServicePageCoversSection } from './ServicePageCoversSection'
import { ServicePageCTASection } from './ServicePageCTASection'
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
        cta={content.mandate.cta}
      />
      <ServicePageSublineSection
        subline={content.mandate.subline}
        highlightPhrases={content.mandate.highlightPhrases}
      />
      <ServicePageContentSection
        title={content.discipline.title}
        authorityAndControl={content.discipline.authorityAndControl}
        impactOnDecisions={content.discipline.impactOnDecisions}
        imageUrl={content.discipline.imageUrl}
        imageAlt={content.discipline.imageAlt}
      />
      {content.secondaryContent && (
        <ServicePageReverseContent
          title={content.secondaryContent.title}
          items={content.secondaryContent.items}
          imageUrl={content.secondaryContent.imageUrl}
          imageAlt={content.secondaryContent.imageAlt}
        />
      )}
      {content.subServices && <ServiceSubServices subServices={content.subServices} />}

      {/* Case 1: For Fractional CFO, process (Support Section) comes before coverage */}
      {content.slug === 'ongoing-financial-leadership' && content.supportSection && (
        <Feature
          sectionTitle={content.supportSection.title}
          paragraphs={content.supportSection.paragraphs}
          imageUrl={content.supportSection.imageUrl}
          imageAlt={content.supportSection.imageAlt}
          showBullets={true}
        />
      )}

      {content.typicalCoverage && (
        <ServicePageCoversSection
          intro={content.typicalCoverage.intro}
          items={content.typicalCoverage.items}
          exit={content.typicalCoverage.exit}
        />
      )}

      {/* Case 2: For Bank Ready and Investor Ready, support section comes at the absolute bottom */}
      {content.slug !== 'ongoing-financial-leadership' && content.supportSection && (
        <Feature
          sectionTitle={content.supportSection.title}
          paragraphs={content.supportSection.paragraphs}
          imageUrl={content.supportSection.imageUrl}
          imageAlt={content.supportSection.imageAlt}
          showBullets={false}
        />
      )}

      {content.finalCta && (
        <ServicePageCTASection
          title={content.finalCta.title}
          description={content.finalCta.description}
          buttonText={content.finalCta.buttonText}
        />
      )}
    </>
  )
}
