'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// The services - distilled to their essence
const services = [
  {
    number: '01',
    word: 'See',
    expanded: 'See clearly',
    description: 'Monthly reporting. KPIs. Dashboards. The numbers that matter, when they matter.',
  },
  {
    number: '02', 
    word: 'Plan',
    expanded: 'Plan confidently',
    description: 'Forecasts. Scenarios. Budgets. The roadmap from where you are to where you want to be.',
  },
  {
    number: '03',
    word: 'Decide',
    expanded: 'Decide strategically',
    description: 'Hire. Expand. Fundraise. A thinking partner for the decisions that shape your future.',
  },
];

export default function ServicesDemoPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div ref={containerRef} className="bg-[#FAFAFA] min-h-screen">
      {/* Section 1: The Opening */}
      <OpeningSection />
      
      {/* Section 2: The Tension */}
      <TensionSection />
      
      {/* Section 3: The Services - Progressive Reveal */}
      {services.map((service, index) => (
        <ServiceSection 
          key={service.number}
          service={service}
          index={index}
          onInView={() => setActiveIndex(index)}
        />
      ))}
      
      {/* Section 4: The Resolution */}
      <ResolutionSection />
      
      {/* Section 5: The Close */}
      <CloseSection />
    </div>
  );
}

function OpeningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 relative"
      style={{
        background: 'linear-gradient(180deg, #0E101A 0%, #1A1F2E 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-strategy-blue font-accent text-sm tracking-[0.3em] uppercase mb-12"
        >
          What we do
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-accent text-white text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight"
        >
          We turn financial complexity
        </motion.h1>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-accent text-strategy-blue text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight mt-2"
        >
          into clarity.
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20"
        >
          <div className="w-px h-24 bg-gradient-to-b from-strategy-blue/50 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}

function TensionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  
  return (
    <section 
      ref={ref}
      className="py-32 lg:py-48 px-6 relative overflow-hidden"
      style={{ background: '#FAFAFA' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: The chaos visualization */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square relative">
              {/* Abstract representation of chaos - scattered elements */}
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="chaosGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E293B" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#1E293B" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                
                {/* Scattered, chaotic lines */}
                {[...Array(12)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1={50 + Math.random() * 300}
                    y1={50 + Math.random() * 300}
                    x2={50 + Math.random() * 300}
                    y2={50 + Math.random() * 300}
                    stroke="#1E293B"
                    strokeWidth="0.5"
                    strokeOpacity={0.15 + Math.random() * 0.2}
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.1 * i }}
                  />
                ))}
                
                {/* Scattered dots representing data points */}
                {[...Array(20)].map((_, i) => (
                  <motion.circle
                    key={`dot-${i}`}
                    cx={40 + Math.random() * 320}
                    cy={40 + Math.random() * 320}
                    r={2 + Math.random() * 3}
                    fill="#1E293B"
                    fillOpacity={0.1 + Math.random() * 0.15}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + 0.05 * i }}
                  />
                ))}
              </svg>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="font-accent text-[#1E293B]/20 text-[8rem] lg:text-[12rem] leading-none">?</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right: The statement */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="font-accent text-[#0E101A] text-3xl lg:text-4xl xl:text-5xl leading-[1.1] tracking-tight mb-8">
              Most businesses don't lack data.
              <br />
              <span className="text-[#94A3B8]">They lack meaning.</span>
            </h2>
            
            <p className="text-[#475569] text-lg lg:text-xl leading-relaxed font-light max-w-lg">
              Spreadsheets multiply. Reports pile up. Decisions get harder, not easier. 
              The problem isn't information—it's interpretation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceSection({ 
  service, 
  index,
  onInView 
}: { 
  service: typeof services[0];
  index: number;
  onInView: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40%" });
  
  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);
  
  const isEven = index % 2 === 0;
  const bgColor = isEven ? '#FAFAFA' : '#F5F5F5';
  
  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center px-6 relative"
      style={{ background: bgColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
          {/* The number - large, decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <span 
              className="font-accent text-[12rem] lg:text-[20rem] leading-none tracking-tighter"
              style={{ 
                color: 'transparent',
                WebkitTextStroke: '1px rgba(116, 179, 255, 0.3)',
              }}
            >
              {service.number}
            </span>
          </motion.div>
          
          {/* The content */}
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* The word */}
              <h2 className="font-accent text-[#0E101A] text-5xl lg:text-7xl tracking-tight mb-2">
                {service.word}
              </h2>
              
              {/* The expansion */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-strategy-blue text-2xl lg:text-3xl font-accent tracking-tight mb-8"
              >
                {service.expanded}
              </motion.p>
              
              {/* The description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-[#475569] text-lg lg:text-xl leading-relaxed font-light"
              >
                {service.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Visual connector to next section */}
      {index < services.length - 1 && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#1E293B]/20 to-transparent origin-top"
        />
      )}
    </section>
  );
}

function ResolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  
  return (
    <section 
      ref={ref}
      className="py-32 lg:py-48 px-6 relative overflow-hidden"
      style={{ background: '#0E101A' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: The statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="font-accent text-white text-3xl lg:text-4xl xl:text-5xl leading-[1.1] tracking-tight mb-8">
              From scattered data
              <br />
              <span className="text-strategy-blue">to strategic clarity.</span>
            </h2>
            
            <p className="text-platinum text-lg lg:text-xl leading-relaxed font-light max-w-lg mb-8">
              We don't just organize your numbers. We translate them into insight, 
              foresight, and the confidence to act.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-3 text-strategy-blue group cursor-pointer"
            >
              <span className="text-lg font-light tracking-tight">See how we work</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.div>
          </motion.div>
          
          {/* Right: The clarity visualization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square relative">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Clean, organized structure */}
                <motion.line
                  x1="200" y1="40" x2="200" y2="360"
                  stroke="#74B3FF"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.line
                  x1="40" y1="200" x2="360" y2="200"
                  stroke="#74B3FF"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.7 }}
                />
                
                {/* Concentric circles - representing clarity/focus */}
                {[80, 120, 160].map((r, i) => (
                  <motion.circle
                    key={r}
                    cx="200"
                    cy="200"
                    r={r}
                    fill="none"
                    stroke="#74B3FF"
                    strokeWidth="0.5"
                    strokeOpacity={0.2 - i * 0.05}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1 + i * 0.2 }}
                  />
                ))}
                
                {/* Center point - the focus */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="8"
                  fill="#74B3FF"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.8 }}
                />
                
                {/* Aligned data points */}
                {[
                  { x: 200, y: 100 },
                  { x: 200, y: 300 },
                  { x: 100, y: 200 },
                  { x: 300, y: 200 },
                ].map((pos, i) => (
                  <motion.circle
                    key={i}
                    cx={pos.x}
                    cy={pos.y}
                    r="4"
                    fill="#74B3FF"
                    fillOpacity="0.5"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CloseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section 
      ref={ref}
      className="py-32 lg:py-48 px-6 relative"
      style={{ background: '#FAFAFA' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-[#94A3B8] font-accent text-sm tracking-[0.3em] uppercase mb-8"
        >
          The next step
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-accent text-[#0E101A] text-3xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight mb-12"
        >
          Ready to see your business
          <br />
          <span className="text-strategy-blue">with clarity?</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link 
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#0E101A] text-white px-10 py-5 rounded-full text-lg font-light tracking-tight hover:bg-[#1A1F2E] transition-colors group"
          >
            Book a Strategy Call
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[#94A3B8] text-sm mt-8"
        >
          30-minute conversation. No commitment. Just clarity.
        </motion.p>
      </div>
    </section>
  );
}

