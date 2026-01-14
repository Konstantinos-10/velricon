// Sub-service interface for server-side config (uses string icon identifiers)
export interface SubServiceConfig {
  title: string
  icon: string
  description: string
}

export interface ServicePageContent {
  slug: string
  title: string
  metaDescription: string
  
  // Section 1: The Mandate (Hero)
  mandate: {
    headline: string
    subline: string
    highlightPhrases: string[]
    imageUrl: string
    imageAlt: string
  }
  
  // Section 2: The Discipline
  discipline: {
    authorityAndControl: string
    impactOnDecisions: string
  }
  
  // Section 3: Sub-Services
  subServices: SubServiceConfig[]
}

export const servicePages: ServicePageContent[] = [
  {
    slug: 'fractional-cfo',
    title: 'Fractional CFO',
    metaDescription: 'Senior financial leadership without full-time overhead. How Velricon applies CFO-level expertise to growing businesses.',
    mandate: {
      headline: 'Senior financial leadership without full-time overhead.',
      subline: 'This role applies when a business needs CFO-level financial guidance, but the scale or stage doesn\'t justify a full-time executive. The mandate is to provide the financial clarity, strategic oversight, and decision support that typically comes from a senior finance function, delivered in proportion to the business\'s actual needs.',
      highlightPhrases: ['CFO-level financial guidance', 'financial clarity, strategic oversight, and decision support', 'delivered in proportion to the business\'s actual needs'],
      imageUrl: '/assets/images/hero/sophisticated_boardroom.png',
      imageAlt: 'Sophisticated boardroom setting representing financial leadership',
    },
    discipline: {
      authorityAndControl: 'Velricon enters when complexity increases and decisions carry weight. The role is to impose clarity, structure, and financial discipline where uncertainty exists. Numbers are treated as instruments for judgment, not outputs. Financial structure exists to support decision-making, not to document history. The firm operates comfortably where ambiguity exists, because financial discipline functions as a constraint that enables rather than limits.',
      impactOnDecisions: 'Decisions become intentional, not reactive. Trade-offs are understood, not avoided. Financial conversations move from instinct to structure. Leadership gains confidence because the financial logic is sound. The business maintains financial discipline without building infrastructure for its own sake. Strategic choices receive financial validation before they become commitments, not after.',
    },
    subServices: [
      {
        title: 'Sub-service 1',
        icon: 'LineChart',
        description: 'Placeholder description for sub-service 1.',
      },
      {
        title: 'Sub-service 2',
        icon: 'TrendingUp',
        description: 'Placeholder description for sub-service 2.',
      },
      {
        title: 'Sub-service 3',
        icon: 'BarChart3',
        description: 'Placeholder description for sub-service 3.',
      },
    ],
  },
  {
    slug: 'bank-ready',
    title: 'Bank-Ready Packages',
    metaDescription: 'Financial structure built for bank scrutiny. How Velricon prepares businesses for serious financing conversations with Cyprus banks.',
    mandate: {
      headline: 'Financial structure built for bank scrutiny.',
      subline: 'This role applies when a business needs to present itself to banks for financing or credit facilities, and the financial documentation must meet the standards that Cyprus banks actually use to assess risk and viability. The mandate is to prepare financial materials that align with how banks evaluate businesses, not how businesses typically think about their own finances.',
      highlightPhrases: ['standards that Cyprus banks actually use', 'align with how banks evaluate businesses'],
      imageUrl: '/assets/images/hero/path_through_maze.png',
      imageAlt: 'Structured path representing organized financial preparation',
    },
    discipline: {
      authorityAndControl: 'Velricon enters when a business must present itself to institutions whose evaluation standards differ from how businesses typically think about their own finances. The role is to impose structure that aligns with how banks actually assess risk and viability, not how businesses wish to present themselves. Financial documentation becomes an instrument for credibility, not persuasion. The firm operates with knowledge of what credit committees examine, because understanding institutional logic is necessary for serious financing conversations.',
      impactOnDecisions: 'Financial documentation meets institutional standards. The story the numbers tell matches what the business actually does. Leadership enters bank conversations prepared for the questions that matter. The business presents itself with clarity that supports, rather than complicates, credit evaluation. Documentation quality ceases to be a variable that raises questions, because financial structure functions as evidence, not argument.',
    },
    subServices: [
      {
        title: 'Sub-service 1',
        icon: 'FileText',
        description: 'Placeholder description for sub-service 1.',
      },
      {
        title: 'Sub-service 2',
        icon: 'Landmark',
        description: 'Placeholder description for sub-service 2.',
      },
      {
        title: 'Sub-service 3',
        icon: 'Target',
        description: 'Placeholder description for sub-service 3.',
      },
    ],
  },
  {
    slug: 'investor-ready',
    title: 'Investor-Ready Packages',
    metaDescription: 'Financial clarity designed for investor decisions. How Velricon prepares businesses for investor scrutiny and due diligence.',
    mandate: {
      headline: 'Financial clarity designed for investor decisions.',
      subline: 'This role applies when a business needs to present itself to investors, whether for a funding round, a strategic partnership, or an exit, and the financial materials must withstand the scrutiny of due diligence. The mandate is to prepare financial documentation that investors trust, with models and analyses that support investment decisions rather than raise questions.',
      highlightPhrases: ['withstand the scrutiny of due diligence', 'support investment decisions rather than raise questions'],
      imageUrl: '/assets/images/hero/modern_cityscape.png',
      imageAlt: 'Modern cityscape representing strategic vision and scale',
    },
    discipline: {
      authorityAndControl: 'Velricon enters when a business must present itself to investors whose scrutiny will determine whether capital flows. The role is to impose structure that withstands due diligence, not that avoids it. Financial models function as instruments for judgment, not sales materials. The firm operates with understanding of what investors examine, because financial clarity exists to support investment decisions, not to persuade them. Documentation becomes evidence, not argument.',
      impactOnDecisions: 'Financial materials support the investment case. Due diligence questions receive answers before they are asked. Leadership enters investor conversations prepared for scrutiny that demonstrates, rather than questions, financial discipline. The business presents itself with clarity that enables, rather than complicates, investment evaluation. Financial presentation quality ceases to be a variable, because structure functions as confidence, not uncertainty.',
    },
    subServices: [
      {
        title: 'Sub-service 1',
        icon: 'Wallet',
        description: 'Placeholder description for sub-service 1.',
      },
      {
        title: 'Sub-service 2',
        icon: 'BarChart3',
        description: 'Placeholder description for sub-service 2.',
      },
      {
        title: 'Sub-service 3',
        icon: 'PieChart',
        description: 'Placeholder description for sub-service 3.',
      },
    ],
  },
]

export function getServicePageBySlug(slug: string): ServicePageContent | undefined {
  return servicePages.find((service) => service.slug === slug)
}
