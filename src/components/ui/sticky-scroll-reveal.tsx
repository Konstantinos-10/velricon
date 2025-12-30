'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const StickyScroll = ({
  content,
  contentClassName,
  onActiveCardChange,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
    backgroundColor?: string;
  }[];
  contentClassName?: string;
  onActiveCardChange?: (index: number) => void;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const lastIndex = Math.max(0, content.length - 1);

  // Calculate progress based on scroll position
  const progress = useMemo(() => {
    if (lastIndex <= 0) return 0;
    return activeCard / lastIndex;
  }, [activeCard, lastIndex]);

  // Accurate scroll-based detection
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      
      // Find which card is closest to the viewport center
      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        // Only consider cards that are visible
        if (rect.bottom >= 0 && rect.top <= viewportHeight) {
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      if (closestIndex !== activeCard) {
        setActiveCard(closestIndex);
      }
    };

    // Initial check
    handleScroll();

    // Throttled scroll handler for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    window.addEventListener('resize', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', throttledHandleScroll);
    };
  }, [content.length, activeCard]);

  // Notify parent when activeCard changes
  useEffect(() => {
    onActiveCardChange?.(activeCard);
  }, [activeCard, onActiveCardChange]);

  return (
    <div className="relative w-full py-10 md:py-12">
      <div ref={containerRef} className={cn('relative', 'bg-transparent')}>
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: stages */}
          <div className="relative">
            {/* Progress rail */}
            <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-[#1E293B] lg:block" />
            <motion.div
              className="pointer-events-none absolute left-0 top-0 hidden w-px bg-[#3B82F6] lg:block"
              initial={{ height: '0%' }}
              animate={{ height: `${progress * 100}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />

            <div className="max-w-2xl lg:pl-6">
              {content.map((item, index) => {
                const isActive = index === activeCard;
                return (
                  <div
                    key={item.title + index}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="py-10 md:py-14 min-h-[200px] flex flex-col justify-center"
                  >
                    <motion.h2
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.35 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="text-2xl font-light tracking-tight text-white"
                    >
                      {item.title}
                    </motion.h2>

                    <motion.p
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.35 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="mt-6 max-w-xl text-lg font-light tracking-tight leading-relaxed text-[#E2E8F0]"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: sticky reveal panel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.div
              className={cn(
                'overflow-hidden rounded-2xl border border-[#1E293B] h-[400px]',
                contentClassName,
              )}
              animate={{
                backgroundColor: content[activeCard]?.backgroundColor || '#1A1F2E',
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <motion.div
                key={activeCard}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full"
              >
                {content[activeCard]?.content ?? null}
              </motion.div>
            </motion.div>

            <div className="mt-4 text-sm text-[#94A3B8]">
              Scroll to progress through stages.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
