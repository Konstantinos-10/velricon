import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Who We Are',
  description: 'Learn about Velricon and our approach to fractional CFO services.',
}

export default function WhoWeArePage() {
  return (
    <Section background="deep-void" className="pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight leading-[1.05] text-white mb-6">
          Who We Are
        </h1>
        <p className="text-base md:text-lg font-light tracking-tight text-white/70 mb-12">
          Expert financial leadership without the overhead of a full-time CFO.
        </p>

        <div className="space-y-8">
          <Card>
            <h2 className="text-2xl font-light tracking-tight leading-[1.05] text-white mb-4">
              Our Mission
            </h2>
            <p className="text-platinum font-normal tracking-tight leading-relaxed text-lg">
              We provide strategic financial leadership to businesses at every stage, helping them make informed decisions and achieve sustainable growth.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-light tracking-tight leading-[1.05] text-white mb-4">
              Our Approach
            </h2>
            <p className="text-platinum font-normal tracking-tight leading-relaxed text-lg">
              We combine deep financial expertise with a practical, business-focused approach. Our fractional CFO services give you the strategic insight you need, when you need it, without the cost of a full-time executive.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  )
}

