import { client } from "@/sanity/client";
import { BlogSection, BlogItem } from "@/components/ui/blog-section";
import { InsightsHero } from "@/components/sections/InsightsHero";
import { urlForImage } from "@/sanity/image";

// Revalidate every hour
export const revalidate = 3600;

async function getInsights() {
  try {
    const query = `
      {
        "posts": *[_type == "post"] | order(publishedAt desc) {
          title,
          "slug": slug.current,
          description,
          mainImage,
          publishedAt,
          "author": author->name,
          "readTime": readTime
        },
        "caseStudies": *[_type == "caseStudy"] | order(publishedAt desc) {
          title,
          "slug": slug.current,
          description,
          mainImage,
          publishedAt,
          "author": author->name,
          "readTime": readTime
        },
        "news": *[_type == "news"] | order(publishedAt desc) {
          title,
          "slug": slug.current,
          description,
          mainImage,
          publishedAt,
          "author": null,
          "readTime": null
        }
      }
    `;
    return await client.fetch(query);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return { posts: [], caseStudies: [], news: [] };
  }
}

export default async function InsightsPage() {
  const data = await getInsights();

  const mapToBlogItem = (item: any): BlogItem => ({
    title: item.title,
    slug: item.slug ? `/insights/${item.slug}` : '#',
    description: item.description,
    image: item.mainImage ? urlForImage(item.mainImage).url() : 'https://placehold.co/640x360?text=No+Image',
    createdAt: item.publishedAt ? new Date(item.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : '',
    author: item.author || 'Velricon Team',
    readTime: item.readTime || ''
  });

  const posts = (data.posts || []).map(mapToBlogItem);
  const caseStudies = (data.caseStudies || []).map(mapToBlogItem);
  const newsItems = (data.news || []).map(mapToBlogItem);

  return (
    <main className="relative bg-deep-void" style={{ background: 'linear-gradient(180deg, #0E101A 0%, #0a0c12 100%)' }}>
      {/* Hero Section */}
      <InsightsHero />

      {/* Articles Section */}
      <BlogSection
        title="Latest Articles"
        description="Our latest thoughts on finance, strategy, and leadership."
        items={posts}
      />
      {posts.length === 0 && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-8">
          <p className="text-platinum/50 italic font-body text-sm">
            No articles found. Please configure Sanity CMS and publish a 'post' document.
          </p>
        </div>
      )}

      {/* Case Studies Section */}
      <BlogSection
        title="Case Studies"
        description="Real-world examples of how we help our clients succeed."
        items={caseStudies}
      />
      {caseStudies.length === 0 && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-8">
          <p className="text-platinum/50 italic font-body text-sm">
            No case studies found. Please configure Sanity CMS and publish a 'caseStudy' document.
          </p>
        </div>
      )}

      {/* Company News Section */}
      <BlogSection
        title="Company News"
        description="Updates, announcements, and press releases from Velricon."
        items={newsItems}
      />
      {newsItems.length === 0 && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
          <p className="text-platinum/50 italic font-body text-sm">
            No news found. Please configure Sanity CMS and publish a 'news' document.
          </p>
        </div>
      )}
    </main>
  );
}
