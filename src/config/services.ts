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
    id: 'fractional-cfo',
    slug: 'fractional-cfo',
    title: 'Fractional CFO',
    description: 'Strategic CFO expertise without the full-time commitment. Get the financial leadership you need, when you need it.',
    metaDescription: 'Strategic CFO expertise without the full-time commitment. Get the financial leadership you need, when you need it.',
    features: [
      'Strategic financial planning and analysis',
      'Monthly financial reporting and insights',
      'Budgeting and forecasting',
      'Cash flow management',
      'Financial decision-making support',
      'Investor and stakeholder communication',
    ],
  },
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
