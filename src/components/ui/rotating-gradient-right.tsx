"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const differenceStyles = `
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

export default function RotatingGradientRight() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <>
      <style>{differenceStyles}</style>
      <section 
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden"
        style={{ background: '#FAFAFA' }}
      >
        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridDifference" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(30, 41, 59, 0.15)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridDifference)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-light" style={{ animationDelay: '0.1s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-light" style={{ animationDelay: '0.2s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.3s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.4s' }} />
        </svg>

        {/* Main Content - Editorial Layout */}
        <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
          
          {/* Left: The Statement */}
          <div className="flex-1 flex items-center px-8 lg:px-16 xl:px-24 py-24 lg:py-0">
            <div className="max-w-2xl">
              {/* The Main Statement */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-accent text-3xl lg:text-4xl xl:text-5xl leading-[0.95] tracking-tight mb-12"
              >
                <span className="text-electric-blue">The Velricon</span>{" "}
                <span className="text-[#0E101A]">Difference</span>
              </motion.h2>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className="font-accent text-xl md:text-2xl leading-[1.2] tracking-tight mb-12 text-[#0E101A] border-l-2 border-electric-blue pl-4"
              >
                Clarity before action.
                <br />
                Structure before growth.
              </motion.h2>

              {/* The Quiet Detail */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="space-y-6"
              >
                <p className="text-[#475569] text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                  We don't start with templates or generic advice.
                </p>
                <p className="text-[#475569] text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                  We take the time to understand how your business actually works its numbers, constraints, and decisions.
                </p>
                <p className="text-[#475569] text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                  From there, we build financial clarity around what matters most, so decisions are based on structure and insight rather than assumptions.
                </p>
                <p className="text-[#475569] text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                  The result is financial information you can trust and use when it matters.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right: The Image */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="lg:w-[45%] xl:w-[50%] relative"
          >
            <div className="relative h-[50vh] lg:h-full min-h-[400px] lg:min-h-0">
              {/* Image Container */}
              <div className="absolute inset-0 lg:inset-y-16 lg:right-0 lg:left-8 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                  alt="Strategic perspective"
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: '50% 30%',
                  }}
                />
                
                {/* Overlay gradient */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(14, 16, 26, 0.4) 0%, transparent 50%, rgba(116, 179, 255, 0.1) 100%)',
                  }}
                />

                {/* Corner accent */}
                <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-strategy-blue/30" />
                <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-strategy-blue/30" />
              </div>

              {/* Floating Quote removed */}
            </div>
          </motion.div>
        </div>

        {/* Bottom Edge Detail */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#74B3FF]/30 to-transparent origin-left"
        />
      </section>
    </>
  );
}
