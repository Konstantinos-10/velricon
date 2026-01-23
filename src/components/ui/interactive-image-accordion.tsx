'use client'

import React, { useState, useEffect, useRef } from 'react'

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Fractional CFO',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1974&auto=format&fit=crop',
    href: '/services/ongoing-financial-leadership',
  },
  {
    id: 2,
    title: 'Bank Ready Packages',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1974&auto=format&fit=crop',
    href: '/services/bank-ready',
  },
  {
    id: 3,
    title: 'Investor ready packages',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1974&auto=format&fit=crop',
    href: '/services/investor-ready',
  },
]

// --- Accordion Item Component ---
const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
  onClick,
  index
}: {
  item: typeof accordionItems[0]
  isActive: boolean
  onMouseEnter: () => void
  onClick?: () => void
  index: number
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 150)
        }
      },
      { threshold: 0.1 }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [index])

  return (
    <div
      ref={itemRef}
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0
        transition-all [transition-duration:400ms] ease-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{
        transition: isVisible
          ? 'all 400ms ease-out, opacity 0.6s ease-out, transform 0.6s ease-out'
          : 'opacity 0.6s ease-out, transform 0.6s ease-out',
        filter: isActive ? 'drop-shadow(0 0 20px rgba(116, 179, 255, 0.3))' : 'none',
        willChange: isVisible ? 'transform, opacity' : 'auto',
      }}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
        style={{
          transform: isActive ? 'scale(1.05)' : 'scale(1)',
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.onerror = null
          target.src = 'https://placehold.co/400x450/1A1F2E/ffffff?text=Image+Error'
        }}
      />

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: isActive
            ? 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)'
            : 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent)',
        }}
      />

      {/* Glow effect when active */}
      {isActive && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(116, 179, 255, 0.1), transparent 70%)',
            animation: 'pulse-glow 3s ease-in-out infinite',
          }}
        />
      )}

      {/* Caption Text with word animation */}
      <span
        className={`
          absolute text-white text-base font-light tracking-tight whitespace-nowrap
          transition-all [transition-duration:250ms] ease-out
          ${isActive ? 'text-shadow-glow' : ''}
          ${isActive
            ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
            : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
        style={{
          textShadow: isActive ? '0 0 20px rgba(116, 179, 255, 0.6), 0 0 40px rgba(116, 179, 255, 0.3)' : 'none',
        }}
      >
        {item.title.split(' ').map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="word-animate-accordion inline-block"
            style={{
              animationDelay: isActive ? `${wordIndex * 50}ms` : '0ms',
            }}
          >
            {word}{wordIndex < item.title.split(' ').length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>

      {/* Floating decorative elements */}
      {isActive && (
        <>
          <div
            className="absolute w-1 h-1 bg-[#74B3FF] rounded-full opacity-60"
            style={{
              top: '20%',
              left: '10%',
              animation: 'float-accordion 4s ease-in-out infinite',
              animationDelay: '0s',
            }}
          />
          <div
            className="absolute w-1 h-1 bg-[#74B3FF] rounded-full opacity-40"
            style={{
              top: '60%',
              right: '15%',
              animation: 'float-accordion 4s ease-in-out infinite',
              animationDelay: '1s',
            }}
          />
          <div
            className="absolute w-1 h-1 bg-[#74B3FF] rounded-full opacity-50"
            style={{
              bottom: '30%',
              left: '20%',
              animation: 'float-accordion 4s ease-in-out infinite',
              animationDelay: '2s',
            }}
          />
        </>
      )}
    </div>
  )
}

// --- Main Accordion Component ---
export interface AccordionItem {
  id: number
  title: string
  imageUrl: string
  href?: string
}

interface InteractiveImageAccordionProps {
  onActiveChange?: (item: AccordionItem | null) => void
  onSelect?: (item: AccordionItem) => void
  className?: string
}

export function InteractiveImageAccordion({
  onActiveChange,
  onSelect,
  className = ''
}: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleItemHover = (index: number) => {
    setActiveIndex(index)
    onActiveChange?.(accordionItems[index])
  }

  const handleItemClick = (item: AccordionItem) => {
    onSelect?.(item)
  }

  const handleMouseLeave = () => {
    setActiveIndex(0)
    onActiveChange?.(null)
  }

  const accordionStyles = `
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50% { opacity: 0.3; transform: scale(1.05); }
    }
    @keyframes float-accordion {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
      25% { transform: translateY(-8px) translateX(4px); opacity: 0.7; }
      50% { transform: translateY(-4px) translateX(-2px); opacity: 0.5; }
      75% { transform: translateY(-12px) translateX(6px); opacity: 0.8; }
    }
    .word-animate-accordion {
      opacity: 0;
      animation: word-appear-accordion 0.5s ease-out forwards;
    }
    @keyframes word-appear-accordion {
      0% { opacity: 0; transform: translateY(10px) scale(0.9); filter: blur(4px); }
      100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `

  return (
    <>
      <style>{accordionStyles}</style>
      <div
        className={`flex flex-row items-center justify-center gap-4 p-4 hide-scrollbar ${className}`}
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
        onMouseLeave={handleMouseLeave}
      >
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onMouseEnter={() => handleItemHover(index)}
            onClick={() => handleItemClick(item)}
            index={index}
          />
        ))}
      </div>
    </>
  )
}

