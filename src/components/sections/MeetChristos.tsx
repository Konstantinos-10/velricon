'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ImageZoomComponent } from '@/components/ui/image-zoom';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const meetChristosStyles = `
  @keyframes grid-draw-light { 
    0% { stroke-dashoffset: 1000; opacity: 0; } 
    50% { opacity: 0.5; } 
    100% { stroke-dashoffset: 0; opacity: 0.4; } 
  }
  .grid-line-light { 
    stroke: rgba(30, 41, 59, 0.4); 
    stroke-width: 1; 
    opacity: 0; 
    stroke-dasharray: 5 5; 
    stroke-dashoffset: 1000; 
    animation: grid-draw-light 1.5s ease-out forwards; 
  }
  .detail-dot-light { 
    fill: rgba(30, 41, 59, 0.5); 
    opacity: 0; 
    animation: pulse-glow-light 3s ease-in-out infinite; 
  }
  @keyframes pulse-glow-light { 
    0%, 100% { opacity: 0.3; transform: scale(1); } 
    50% { opacity: 0.6; transform: scale(1.1); } 
  }
`;

export function MeetChristos() {
  return (
    <>
      <style>{meetChristosStyles}</style>
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Light gradient background */}
      <div 
        className="absolute inset-0"
        style={{
            backgroundColor: '#F5F5F5',
            backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, #F8F9FA 30%, #F5F5F5 70%, #F0F2F5 100%)',
        }}
      />
        
        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridMeetChristos" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(30, 41, 59, 0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridMeetChristos)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-light" style={{ animationDelay: '0.1s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-light" style={{ animationDelay: '0.2s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.3s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.4s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-light" style={{ animationDelay: '0.6s' }} />
          <circle cx="20%" cy="20%" r="3" className="detail-dot-light" style={{ animationDelay: '0.8s' }} />
          <circle cx="80%" cy="20%" r="3" className="detail-dot-light" style={{ animationDelay: '0.9s' }} />
          <circle cx="20%" cy="80%" r="3" className="detail-dot-light" style={{ animationDelay: '1s' }} />
          <circle cx="80%" cy="80%" r="3" className="detail-dot-light" style={{ animationDelay: '1.1s' }} />
          <circle cx="50%" cy="50%" r="2.5" className="detail-dot-light" style={{ animationDelay: '1.2s' }} />
        </svg>
      
      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-accent font-light tracking-tight leading-[1.05] mb-6" style={{ color: '#0E101A' }}>
                Meet <span className="text-strategy-blue">Christos Makrygiannis</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl font-body font-light tracking-tight leading-relaxed mb-4"
              style={{ color: '#1E293B' }}
            >
                Big-4 trained financial leader with deep expertise in Cyprus startup and SME ecosystems. Christos brings enterprise-level CFO experience to growing businesses, helping them navigate funding rounds, optimize cash flow, and scale with confidence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg font-body font-light tracking-tight leading-relaxed"
              style={{ color: '#475569' }}
            >
                With a proven track record of preparing businesses for investor due diligence and bank financing, Christos combines strategic financial guidance with hands-on execution—delivering the CFO expertise you need, when you need it.
            </motion.p>
            
            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Book a Strategy Call
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Zoom */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <ImageZoomComponent
              imageSrc="/assets/images/christos_makrygiannis.jpg"
              imageAlt="Christos Makrygiannis"
              name="Christos Makrygiannis"
            />
          </motion.div>
        </div>
      </Container>
    </section>
    </>
  );
}

