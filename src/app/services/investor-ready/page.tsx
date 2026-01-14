import { Metadata } from 'next'
import { ServicePageLayout } from '@/components/services/ServicePageLayout'
import { getServicePageBySlug } from '@/config/service-pages'

export const metadata: Metadata = {
  title: 'Investor-Ready Packages',
  description: 'Financial clarity designed for investor decisions. How Velricon prepares businesses for investor scrutiny and due diligence.',
}

export default function InvestorReadyPage() {
  const content = getServicePageBySlug('investor-ready')

  if (!content) {
    return null
  }

  return <ServicePageLayout content={content} />
}

