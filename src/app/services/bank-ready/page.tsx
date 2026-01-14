import { Metadata } from 'next'
import { ServicePageLayout } from '@/components/services/ServicePageLayout'
import { getServicePageBySlug } from '@/config/service-pages'

export const metadata: Metadata = {
  title: 'Bank-Ready Packages',
  description: 'Financial structure built for bank scrutiny. How Velricon prepares businesses for serious financing conversations with Cyprus banks.',
}

export default function BankReadyPage() {
  const content = getServicePageBySlug('bank-ready')

  if (!content) {
    return null
  }

  return <ServicePageLayout content={content} />
}

