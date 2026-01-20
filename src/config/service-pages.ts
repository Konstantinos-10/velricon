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
    cta: string
    highlightPhrases: string[]
    imageUrl: string
    imageAlt: string
  }

  // Section 2: The Discipline
  discipline: {
    title: string
    authorityAndControl: string
    impactOnDecisions: string
    imageUrl: string
    imageAlt: string
  }

  // Optional Section: Secondary Content (e.g. "What changes...")
  secondaryContent?: {
    title: string
    items: string[]
    imageUrl: string
    imageAlt: string
  }

  // Section 3: Sub-Services (Optional)
  subServices?: SubServiceConfig[]
}

export const servicePages: ServicePageContent[] = [
  {
    slug: 'on-going-financial-leadership',
    title: 'On-going Financial Leadership (Your Virtual CFO Partner)',
    metaDescription: 'Senior financial leadership without full-time overhead. How Velricon applies CFO-level expertise to growing businesses.',
    mandate: {
      headline: 'Financial leadership to bring clarity, control, and better decisions',
      subline: 'Financial leadership means having someone who looks beyond accounting and helps you understand what the numbers are telling you — and what to do next. We work with business owners to improve financial visibility, strengthen cash-flow control, and support important decisions around growth, financing, and risk.This support is ongoing and tailored to your needs, providing senior financial guidance without the cost or complexity of a full-time executive.',
      cta: 'Financial Strategy Call',
      highlightPhrases: ['Financial Leadership', 'understand what the numbers are telling you', 'growth, financing, and risk.'],
      imageUrl: '/assets/images/hero/sophisticated_boardroom.png',
      imageAlt: 'Sophisticated boardroom setting representing financial leadership',
    },
    discipline: {
      title: 'When financial decisions start to matter more',
      authorityAndControl: 'Velricon typically steps in when complexity increases and financial decisions carry real consequences. At this stage, businesses need more than reports — they need clarity, structure, and financial discipline to support sound judgment. Numbers are used to guide decisions, not simply to record the past.',
      impactOnDecisions: 'The objective is to reduce uncertainty, bring structure to financial thinking, and ensure that important decisions are supported by clear financial logic before commitments are made.',
      imageUrl: '/assets/images/hero/path_through_maze.png',
      imageAlt: 'Visual representing clarity and path through financial complexity',
    },
    secondaryContent: {
      title: 'What changes when financial leadership is in place',
      items: [
        'With proper financial leadership in place, decisions become intentional rather than reactive. Trade-offs are clearly understood, cash flow is anticipated, and risks are evaluated before they materialise.',
        'Financial conversations shift from instinct to structure. Leadership gains confidence because decisions are grounded in financial reality, without the burden of building unnecessary internal infrastructure.',
        'This allows the business to move forward with discipline, flexibility, and confidence — knowing that strategic choices are financially validated before they become commitments.',
      ],
      imageUrl: '/assets/images/hero/sophisticated_boardroom.png', // Reusing for now or user can update
      imageAlt: 'Confident financial leadership in action',
    },
    subServices: [
      {
        title: 'Financial visibility and control',
        icon: 'LineChart',
        description: 'Clear management reporting, budgeting, and cash-flow forecasting that gives leadership an accurate view of performance, risks, and short-term liquidity — without relying solely on historical accounts.',
      },
      {
        title: 'Decision support and financial planning',
        icon: 'TrendingUp',
        description: 'Financial analysis and scenario planning to support key decisions — pricing, investments, hiring, financing, and growth — ensuring trade-offs are understood before commitments are made.',
      },
      {
        title: 'Strategic oversight and financial discipline',
        icon: 'BarChart3',
        description: 'Ongoing oversight to ensure financial discipline is maintained as the business evolves, supporting strategic priorities, governance needs, and alignment between operations, cash flow, and long-term objectives.',
      },
    ],
  },
  {
    slug: 'bank-financing-and-refinancing',
    title: 'Bank Financing & Refinancing',
    metaDescription: 'Financial structure built for bank scrutiny. How Velricon prepares businesses for serious financing conversations with Cyprus banks.',
    mandate: {
      headline: 'Financial preparation for confident bank decisions',
      subline: 'Bank decisions are based on risk, repayment capacity, and financial discipline — not just projections. We support businesses by structuring financial information, cash-flow analysis, and assumptions in a way that enables clear, confident discussions with lenders.',
      cta: 'Financial Strategy Call',
      highlightPhrases: ['financial information, cash-flow analysis, and assumptions', 'clear, confident discussions'],
      imageUrl: '/assets/images/hero/path_through_maze.png',
      imageAlt: 'Structured path representing organized financial preparation',
    },
    discipline: {
      title: 'When bank financing decisions start to matter',
      authorityAndControl: 'Businesses typically seek bank financing or refinancing when financial commitments increase, cash-flow pressure rises, or existing debt structures no longer support how the business operates.',
      impactOnDecisions: 'At this stage, decisions are no longer about access to funds alone. Banks evaluate repayment capacity, risk exposure, and financial discipline — and they expect clarity around assumptions, cash flows, and contingencies before committing.',
      imageUrl: '/assets/images/hero/modern_cityscape.png',
      imageAlt: 'Visual representing stability and growth through financing',
    },
    secondaryContent: {
      title: 'What changes with proper financing preparation',
      items: [
        'With proper preparation in place, bank discussions shift from uncertainty to structure. Financial assumptions are clear, cash-flow capacity is understood, and potential risks are identified before they become objections.',
        'Conversations become more focused and efficient. Business owners are better prepared to explain how the financing will be used, how it will be repaid, and how the business performs under different scenarios — rather than reacting to questions as they arise.',
        'The objective is not to “sell” a loan, but to ensure that financing decisions are grounded in realistic financial logic that both the business and the bank can stand behind.',
      ],
      imageUrl: '/assets/images/hero/path_through_maze.png',
      imageAlt: 'Structured path representing organized financial preparation',
    },
  },
  {
    slug: 'investor-ready',
    title: 'Investor-Ready Packages',
    metaDescription: 'Financial clarity designed for investor decisions. How Velricon prepares businesses for investor scrutiny and due diligence.',
    mandate: {
      headline: 'Financial clarity designed for investor decisions.',
      subline: 'This support is relevant when a business is preparing for investor discussions — whether for funding, a strategic partnership, or an exit — and financial information must stand up to detailed scrutiny.\nThis applies equally to early-stage companies and established businesses seeking growth capital, strategic investment, or exit-related funding.\nThe focus is on preparing clear, credible financial models and analysis that help investors understand the opportunity, assess risk, and make informed decisions — without unnecessary complexity or unanswered questions.',
      cta: 'Financial Strategy Call',
      highlightPhrases: ['clear, credible financial models and analysis', 'support investment decisions'],
      imageUrl: '/assets/images/hero/modern_cityscape.png',
      imageAlt: 'Modern cityscape representing strategic vision and scale',
    },
    discipline: {
      title: 'When investor discussions start to matter',
      authorityAndControl: 'Investor discussions typically begin when a business reaches a point where growth ambitions, capital requirements, or strategic options require external validation. At this stage, the quality and consistency of financial information become central to the conversation.',
      impactOnDecisions: 'Investors look beyond headline numbers. They examine assumptions, scalability, risks, and how funding will translate into value. Without clear structure and logic, even strong businesses can struggle to communicate their potential effectively.',
      imageUrl: '/assets/images/hero/sophisticated_boardroom.png',
      imageAlt: 'Visual representing strategic boardroom investor discussions',
    },
    secondaryContent: {
      title: 'What changes with proper investor preparation',
      items: [
        'With proper preparation in place, investor discussions become more structured and focused. Financial assumptions are clear, scenarios are thought through, and funding requirements are aligned with the business plan rather than adjusted on the fly.',
        'Conversations shift from defending numbers to discussing strategy, execution, and risk. Founders are better prepared to explain how capital will be used, how value is created, and how downside scenarios are managed — allowing investors to evaluate the opportunity with confidence.',
        'The objective is not to persuade, but to ensure that investment decisions are based on transparent, well-reasoned financial logic that stands up to scrutiny.',
      ],
      imageUrl: '/assets/images/hero/modern_cityscape.png',
      imageAlt: 'Modern cityscape representing strategic vision and scale',
    },
  },
]

export function getServicePageBySlug(slug: string): ServicePageContent | undefined {
  return servicePages.find((service) => service.slug === slug)
}
