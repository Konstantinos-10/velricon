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
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <span className="inline-block w-12 h-px bg-[#74B3FF] mr-4 align-middle" />
                <span className="text-[#74B3FF] font-accent text-xs tracking-[0.3em] uppercase">
                  The difference
                </span>
              </motion.div>

              {/* The Main Statement */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-accent text-3xl lg:text-4xl xl:text-5xl leading-[0.95] tracking-tight mb-12"
                style={{ color: '#0E101A' }}
              >
                Most CFOs
                <br />
                <span className="text-[#94A3B8]">report history.</span>
              </motion.h2>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className="font-accent text-3xl lg:text-4xl xl:text-5xl leading-[0.95] tracking-tight mb-16"
                style={{ color: '#0E101A' }}
              >
                We architect
                <br />
                <span className="text-strategy-blue">possibility.</span>
              </motion.h2>

              {/* The Quiet Detail */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="space-y-6"
              >
                <p className="text-[#475569] text-lg lg:text-xl font-light leading-relaxed max-w-md">
                  Not outsourced accounting with a fancy title.
                  <br />
                  Strategic partnership that shapes your future.
                </p>
                
                {/* Subtle indicator */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-strategy-blue" />
                    <span className="w-2 h-2 rounded-full bg-strategy-blue/50" />
                    <span className="w-2 h-2 rounded-full bg-strategy-blue/25" />
                  </div>
                  <span className="text-[#94A3B8] text-sm tracking-wide">
                    Big-4 trained. Startup tested.
                  </span>
                </div>
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

              {/* Floating Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-8 left-8 lg:bottom-24 lg:-left-8 bg-white/95 backdrop-blur-sm p-6 max-w-[280px] shadow-xl"
              >
                <p className="text-[#0E101A] font-accent text-lg leading-snug mb-3">
                  "The numbers told a story we couldn't see. Now we write our own."
                </p>
                <p className="text-[#94A3B8] text-sm">
                  — Series A Founder, Limassol
                </p>
              </motion.div>
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
