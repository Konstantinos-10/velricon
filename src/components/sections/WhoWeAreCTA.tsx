'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { CallToAction } from '@/components/cta-3';

const whoWeAreCTAStyles = `
  @keyframes grid-draw-wwa { 
    0% { stroke-dashoffset: 1000; opacity: 0; } 
    50% { opacity: 0.3; } 
    100% { stroke-dashoffset: 0; opacity: 0.15; } 
  }
  .grid-line-wwa { 
    stroke: #64748B; 
    stroke-width: 0.5; 
    opacity: 0; 
    stroke-dasharray: 5 5; 
    stroke-dashoffset: 1000; 
    animation: grid-draw-wwa 2s ease-out forwards; 
  }
  .detail-dot-wwa { 
    fill: #94A3B8; 
    opacity: 0; 
    animation: pulse-glow-wwa 3s ease-in-out infinite; 
  }
  @keyframes pulse-glow-wwa { 
    0%, 100% { opacity: 0.1; transform: scale(1); } 
    50% { opacity: 0.3; transform: scale(1.1); } 
  }
`;

export function WhoWeAreCTA() {
    return (
        <>
            <style>{whoWeAreCTAStyles}</style>
            <section className="relative py-24 lg:py-32 bg-[#0E101A] overflow-hidden">
                {/* Animated Grid Background - Matching StickyScrollReveal/WhoWeServe */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                        <pattern id="gridWWA" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#gridWWA)" />
                    <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-wwa" style={{ animationDelay: '0.1s' }} />
                    <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-wwa" style={{ animationDelay: '0.2s' }} />
                    <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-wwa" style={{ animationDelay: '0.3s' }} />
                    <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-wwa" style={{ animationDelay: '0.4s' }} />
                    <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-wwa" style={{ animationDelay: '0.5s', opacity: '0.05' }} />
                    <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-wwa" style={{ animationDelay: '0.6s', opacity: '0.05' }} />
                    <circle cx="20%" cy="20%" r="2" className="detail-dot-wwa" style={{ animationDelay: '0.7s' }} />
                    <circle cx="80%" cy="20%" r="2" className="detail-dot-wwa" style={{ animationDelay: '0.8s' }} />
                    <circle cx="20%" cy="80%" r="2" className="detail-dot-wwa" style={{ animationDelay: '0.9s' }} />
                    <circle cx="80%" cy="80%" r="2" className="detail-dot-wwa" style={{ animationDelay: '1s' }} />
                    <circle cx="50%" cy="50%" r="1.5" className="detail-dot-wwa" style={{ animationDelay: '1.1s' }} />
                </svg>

                <Container size="xl" className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <CallToAction
                            title="Ready to move forward with clarity?"
                            description="Lets discuss your situation and see how we can support your next financial decision."
                            buttonText="Financial Strategy Call"
                        />
                    </motion.div>
                </Container>
            </section>
        </>
    );
}
