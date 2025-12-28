import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Financial insights and thought leadership from Velricon.',
}

// Placeholder posts - replace with actual MDX content later
const posts = [
  {
    slug: 'getting-started-with-financial-modeling',
    title: 'Getting Started with Financial Modeling',
    excerpt: 'Learn the fundamentals of building a robust financial model for your business.',
    date: '2024-01-15',
  },
  {
    slug: 'investor-ready-financials',
    title: 'Preparing Investor-Ready Financials',
    excerpt: 'Key steps to prepare your financial statements for investor presentations.',
    date: '2024-01-10',
  },
]

export default function InsightsPage() {
  return (
    <Section background="deep-void" className="pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-header font-bold text-white mb-6">
          Insights
        </h1>
        <p className="text-xl text-platinum font-body mb-12">
          Financial insights and thought leadership to help you make better business decisions.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`}>
              <Card hover>
                <h2 className="text-2xl font-header font-semibold text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-platinum font-body mb-4">
                  {post.excerpt}
                </p>
                <p className="text-slate font-body text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

