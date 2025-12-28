import { Hero } from '@/components/hero/Hero'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'

export default function Home() {
  return (
    <>
      <Hero />
      
      <Section background="soft-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight leading-[1.05] text-dark-ink mb-4">
            How We Help
          </h2>
          <p className="text-base md:text-lg font-light tracking-tight text-slate max-w-2xl mx-auto">
            Strategic financial leadership tailored to your business stage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-xl font-light tracking-tight text-white mb-3">
              For Startups
            </h3>
            <p className="text-platinum font-normal tracking-tight leading-relaxed">
              Build financial foundations and investor-ready reporting from day one.
            </p>
          </Card>
          
          <Card>
            <h3 className="text-xl font-light tracking-tight text-white mb-3">
              For Scaleups
            </h3>
            <p className="text-platinum font-normal tracking-tight leading-relaxed">
              Scale your finance function and make data-driven growth decisions.
            </p>
          </Card>
          
          <Card>
            <h3 className="text-xl font-light tracking-tight text-white mb-3">
              For Established SMEs
            </h3>
            <p className="text-platinum font-normal tracking-tight leading-relaxed">
              Optimize operations and prepare for strategic transitions.
            </p>
          </Card>
        </div>
      </Section>
    </>
  )
}

