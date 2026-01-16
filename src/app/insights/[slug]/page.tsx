import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/client'
import { urlForImage } from '@/sanity/image'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { ArrowLeft } from 'lucide-react'

// Revalidate every hour
export const revalidate = 3600;

// Fetch a single post/caseStudy/news by slug
async function getPostBySlug(slug: string) {
  const query = `
    *[slug.current == $slug && (_type == "post" || _type == "caseStudy" || _type == "news")][0] {
      _type,
      title,
      "slug": slug.current,
      description,
      mainImage,
      publishedAt,
      author,
      readTime,
      body
    }
  `;
  return await client.fetch(query, { slug });
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description || '',
  }
}

// Custom PortableText components for styling
const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl lg:text-4xl font-accent font-light text-platinum mt-12 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl lg:text-3xl font-accent font-light text-platinum mt-10 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl lg:text-2xl font-accent font-light text-platinum mt-8 mb-4">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-base lg:text-lg font-body text-platinum/80 leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-strategy-blue pl-6 my-8 italic text-platinum/70 font-body">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-platinum/80 font-body">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-platinum/80 font-body">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-base lg:text-lg">{children}</li>,
    number: ({ children }) => <li className="text-base lg:text-lg">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-platinum">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-strategy-blue hover:text-electric-blue underline transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-8 rounded-xl overflow-hidden">
          <Image
            src={urlForImage(value).url()}
            alt={value.alt || 'Article image'}
            width={800}
            height={450}
            className="w-full h-auto"
          />
          {value.caption && (
            <p className="text-sm text-platinum/50 mt-2 text-center font-body">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
};

export default async function InsightPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : '';

  const typeLabel = post._type === 'caseStudy' ? 'Case Study' : post._type === 'news' ? 'News' : 'Article';

  return (
    <main className="relative bg-deep-void min-h-screen" style={{ background: 'linear-gradient(180deg, #0E101A 0%, #0a0c12 100%)' }}>
      {/* Hero/Header Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-body text-platinum/60 hover:text-platinum mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Insights</span>
          </Link>

          {/* Type Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-body font-medium tracking-wider uppercase text-strategy-blue border border-strategy-blue/30 rounded-full">
              {typeLabel}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-accent font-light tracking-tight text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-body text-platinum/50 mb-8">
            {post.author && <span>By {post.author}</span>}
            {post.author && formattedDate && <span className="w-1 h-1 rounded-full bg-platinum/30" />}
            {formattedDate && <span>{formattedDate}</span>}
            {post.readTime && (
              <>
                <span className="w-1 h-1 rounded-full bg-platinum/30" />
                <span>{post.readTime}</span>
              </>
            )}
          </div>

          {/* Description */}
          {post.description && (
            <p className="text-lg lg:text-xl font-body text-platinum/70 leading-relaxed max-w-3xl">
              {post.description}
            </p>
          )}
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <section className="pb-12 lg:pb-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={urlForImage(post.mainImage).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Body */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {post.body ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : (
            <p className="text-platinum/60 font-body italic">
              No content available for this post.
            </p>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 lg:pb-32 border-t border-white/10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 pt-16">
          <div className="text-center">
            <p className="text-sm font-body text-platinum/50 uppercase tracking-wider mb-4">
              Ready to discuss your financial strategy?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium text-white border border-white/60 rounded-full hover:border-white hover:shadow-[0_0_24px_rgba(116,179,255,0.2)] transition-all"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
