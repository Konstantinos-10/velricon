'use client'

import React, { useState } from 'react'

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Fractional CFO',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1974&auto=format&fit=crop',
    href: '/services/fractional-cfo',
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
  onClick 
}: { 
  item: typeof accordionItems[0]
  isActive: boolean
  onMouseEnter: () => void
  onClick?: () => void
}) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-[400ms] ease-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { 
          const target = e.target as HTMLImageElement
          target.onerror = null
          target.src = 'https://placehold.co/400x450/1A1F2E/ffffff?text=Image+Error'
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-base font-light tracking-tight whitespace-nowrap
          transition-all duration-[250ms] ease-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom, for all screen sizes
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
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

  return (
    <div 
      className={`flex flex-row items-center justify-center gap-4 overflow-x-auto p-4 ${className}`}
      onMouseLeave={handleMouseLeave}
    >
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => handleItemHover(index)}
          onClick={() => handleItemClick(item)}
        />
      ))}
    </div>
  )
}

