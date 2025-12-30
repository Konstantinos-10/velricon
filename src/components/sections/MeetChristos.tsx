'use client';

import { Container } from '@/components/ui/Container';
import { ImageZoomComponent } from '@/components/ui/image-zoom';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function MeetChristos() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Light gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8F9FA 30%, #F5F5F5 70%, #F0F2F5 100%)',
        }}
      />
      
      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-light tracking-tight leading-[1.05] mb-6" style={{ color: '#0E101A' }}>
                Meet Christos Makrygiannis
              </h2>
              <p className="text-lg md:text-xl font-body font-light tracking-tight leading-relaxed mb-4" style={{ color: '#1E293B' }}>
                Big-4 trained financial leader with deep expertise in Cyprus startup and SME ecosystems. Christos brings enterprise-level CFO experience to growing businesses, helping them navigate funding rounds, optimize cash flow, and scale with confidence.
              </p>
              <p className="text-base md:text-lg font-body font-light tracking-tight leading-relaxed" style={{ color: '#475569' }}>
                With a proven track record of preparing businesses for investor due diligence and bank financing, Christos combines strategic financial guidance with hands-on execution—delivering the CFO expertise you need, when you need it.
              </p>
            </div>
            
            {/* Call to Action */}
            <div className="pt-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image Zoom */}
          <div className="flex justify-center lg:justify-end">
            <ImageZoomComponent
              imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              imageAlt="Christos Makrygiannis"
              name="Christos Makrygiannis"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

