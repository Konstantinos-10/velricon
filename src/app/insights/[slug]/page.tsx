import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { notFound } from 'next/navigation'

// Placeholder - replace with actual MDX content later
const posts: Record<string, { title: string; date: string; content: string }> = {
  'getting-started-with-financial-modeling': {
    title: 'Getting Started with Financial Modeling',
    date: '2024-01-15',
    content: 'This is a placeholder post. Replace with MDX content later.',
  },
  'investor-ready-financials': {
    title: 'Preparing Investor-Ready Financials',
    date: '2024-01-10',
    content: 'This is a placeholder post. Replace with MDX content later.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  return {
    title: post.title,
    description: post.content,
  }
}

export default function InsightPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <Section background="deep-void" className="pt-32">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-accent font-light tracking-tight text-white mb-6">
          {post.title}
        </h1>
        <p className="text-slate font-body mb-12">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <div className="prose prose-invert max-w-none">
          <p className="text-platinum font-body text-lg leading-relaxed">
            {post.content}
          </p>
        </div>
      </article>
    </Section>
  )
}

