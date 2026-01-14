import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Section background="deep-void" className="pt-32 min-h-screen flex items-center">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl lg:text-8xl font-accent font-light tracking-tight text-white mb-6">
          404
        </h1>
        <h2 className="text-3xl lg:text-4xl font-accent font-light tracking-tight text-platinum mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-slate font-body mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg" shiny={false} className="rounded-full font-body font-medium">
            Go Home
          </Button>
        </Link>
      </div>
    </Section>
  )
}

