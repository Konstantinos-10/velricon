export interface Service {
  id: string
  slug: string
  title: string
  description: string
  metaDescription: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'bank-ready',
    slug: 'bank-ready',
    title: 'Bank-Ready Packages',
    description: 'Prepare your business for bank financing and credit facilities with professional financial documentation.',
    metaDescription: 'Prepare your business for bank financing and credit facilities with professional financial documentation.',
    features: [
      'Financial statement preparation',
      'Credit application support',
      'Covenant compliance planning',
      'Cash flow projections',
      'Bank relationship management',
    ],
  },
  {
    id: 'investor-ready',
    slug: 'investor-ready',
    title: 'Investor-Ready Packages',
    description: 'Comprehensive financial package to attract and secure investment. Get investor-ready financials that pass due diligence.',
    metaDescription: 'Comprehensive financial package to attract and secure investment. Get investor-ready financials that pass due diligence.',
    features: [
      'Financial model development',
      'Due diligence preparation',
      'Investor pitch deck support',
      'Valuation analysis',
      'Term sheet review',
      'Post-investment financial planning',
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
