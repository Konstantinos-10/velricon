import { Metadata } from 'next'
import { ServicePageLayout } from '@/components/services/ServicePageLayout'
import { getServicePageBySlug } from '@/config/service-pages'

export const metadata: Metadata = {
    title: 'Ongoing Financial Leadership',
    description: 'Senior financial leadership without full-time overhead. How Velricon applies CFO-level expertise to growing businesses.',
}

export default function OngoingFinancialLeadershipPage() {
    const content = getServicePageBySlug('ongoing-financial-leadership')

    if (!content) {
        return null
    }

    return <ServicePageLayout content={content} />
}
