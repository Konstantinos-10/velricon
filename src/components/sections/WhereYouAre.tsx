'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import Image from 'next/image'

interface StageData {
  title: string
  subtitle: string
  description: string
  support: string
  image: string
  imageAlt: string
}

const stagesData: StageData[] = [
  {
    title: 'Start-ups',
    subtitle: 'Building your financial foundation',
    description: 'You\'re in the early stages of building your business, and financial structure is still taking shape. Decisions matter, but the systems to support them often don\'t exist yet. Cash visibility is more important than perfect reports, and you need someone who can guide you through financial choices without slowing you down.',
    support: 'Velricon helps you set up your financial foundation from the ground up. From tracking cash and producing clear monthly reporting, to building your first budgets and forecasts, we give you clarity early. We also support you as a founder, helping you prepare for investor conversations and make financial decisions with confidence, not guesswork.',
    image: '/assets/images/hero/path_through_maze.png',
    imageAlt: 'Early stage business building financial foundation',
  },
  {
    title: 'Scale-ups',
    subtitle: 'Structuring growth with control',
    description: 'You\'re growing, and the pace is faster than your financial structure can comfortably handle. Reporting exists, but it\'s no longer enough. You need forward-looking insight, not just hindsight. Decisions around growth, cash, and operations now carry real weight.',
    support: 'Velricon steps in to bring structure and control to that growth. We introduce advanced reporting and KPI visibility, rolling forecasts that account for different scenarios, and a sharper focus on working capital. At this stage, we don\'t just support decisions, we help shape them, while also building and overseeing a finance function that can scale with the business.',
    image: '/assets/images/hero/modern_cityscape.png',
    imageAlt: 'Growing business scaling financial operations',
  },
  {
    title: 'Established SMEs',
    subtitle: 'Senior financial leadership for complexity',
    description: 'Your business is established, but complexity is increasing. Financial decisions now affect long-term value, governance, and risk. You may be thinking about exits, acquisitions, or strategic restructuring, and you need financial leadership that operates comfortably at board level.',
    support: 'Velricon provides a complete CFO function tailored to this stage. We lead reporting, planning, and financial strategy, support board-level discussions, and prepare the business for value maximization. From exit readiness and M&A support to due diligence and risk management, our role is to bring senior financial judgment where it matters most.',
    image: '/assets/images/hero/sophisticated_boardroom.png',
    imageAlt: 'Established business with board-level financial strategy',
  },
]

export function WhereYouAre() {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Window Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      // Start scroll animation earlier (when section is 30% of viewport height away)
      const earlyStartOffset = windowHeight * 0.3
      const scrollProgress = scrollY - sectionTop + windowHeight - earlyStartOffset
      const progressRatio = Math.max(0, Math.min(1, scrollProgress / sectionHeight))
      
      // Determine active index based on scroll progress
      const newActiveIndex = Math.min(
        stagesData.length - 1,
        Math.floor(progressRatio * stagesData.length)
      )
      
      setActiveIndex(newActiveIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePaginationClick = (index: number) => {
    if (!sectionRef.current) return

    const sectionTop = sectionRef.current.offsetTop
    const sectionHeight = sectionRef.current.offsetHeight
    const windowHeight = window.innerHeight
    
    // Calculate target scroll position for this stage
    const stageProgress = index / stagesData.length
    const targetScroll = sectionTop - windowHeight + (sectionHeight * stageProgress)

    window.scrollTo({ 
      top: targetScroll, 
      behavior: prefersReducedMotion ? 'auto' : 'smooth' 
    })
  }

  return (
    <section 
      ref={sectionRef}
      className="relative bg-deep-void"
      style={{ height: `${stagesData.length * 100}vh` }}
    >
      <div 
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full max-w-7xl mx-auto">
          
          {/* Left Column: Text Content, Pagination */}
          <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16 lg:border-r border-white/[0.08]">
            {/* Pagination Bars */}
            <div className="absolute top-8 md:top-12 lg:top-16 left-8 md:left-12 lg:left-16 flex space-x-2 z-10">
              {stagesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePaginationClick(index)}
                  className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                    index === activeIndex 
                      ? 'w-12 bg-strategy-blue' 
                      : 'w-6 bg-white/[0.15] hover:bg-white/[0.25]'
                  }`}
                  aria-label={`Go to ${stagesData[index].title}`}
                />
              ))}
            </div>
            
            {/* Content Area */}
            <div className="relative min-h-[400px] md:min-h-[500px]">
              {stagesData.map((stage, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10 pointer-events-none'
                  }`}
                >
                  {/* Stage Title */}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-accent font-light tracking-tight text-white mb-4">
                    {stage.title}
                  </h2>
                  
                  {/* Subtitle */}
                  <p className="text-base md:text-lg font-body font-medium text-strategy-blue/90 mb-6 tracking-wide">
                    {stage.subtitle}
                  </p>
                  
                  {/* Description */}
                  <div className="space-y-4 mb-8">
                    <p className="text-base md:text-lg font-body font-light text-slate/80 leading-relaxed">
                      {stage.description}
                    </p>
                    
                    <p className="text-base md:text-lg font-body font-light text-platinum/90 leading-relaxed">
                      {stage.support}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image Content with Grid Background */}
          <div className="hidden lg:flex items-center justify-center p-8 relative">
            {/* Subtle grid pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(116, 179, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(116, 179, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '3.5rem 3.5rem',
              }}
            />
            
            {/* Image Container */}
            <div className="relative w-[70%] h-[75vh] max-h-[600px] rounded-2xl overflow-hidden border border-white/[0.1]">
              <div 
                className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateY(-${activeIndex * 100}%)`,
                  transition: prefersReducedMotion ? 'none' : 'transform 0.7s ease-in-out'
                }}
              >
                {stagesData.map((stage, index) => (
                  <div key={index} className="w-full h-full relative">
                    <Image
                      src={stage.image}
                      alt={stage.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 0vw, 50vw"
                      priority={index === 0}
                    />
                    
                    {/* Deep navy overlay for text harmony */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 40, 87, 0.4) 0%, rgba(14, 16, 26, 0.6) 50%, rgba(0, 40, 87, 0.5) 100%)',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
