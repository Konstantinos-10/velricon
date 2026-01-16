'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, TrendingUp, FileText, BarChart3, LucideIcon, Hand, MousePointer2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  color?: string;
  icon?: LucideIcon;
  backIcon?: LucideIcon;
  imageUrl?: string;
  href?: string;
  linkLabel?: string;
}

export default function CardFlip({
  title = 'Fractional CFO',
  subtitle = 'Strategic financial leadership',
  description = 'Senior CFO expertise without the full-time cost. Strategic guidance, forecasting, and decision support tailored to your business.',
  features = [
    'Strategic Planning',
    'Financial Forecasting',
    'Cash Flow Management',
    'Decision Support',
  ],
  color = '#74B3FF', // Strategy Blue
  icon: IconComponent = TrendingUp,
  backIcon: BackIconComponent = FileText,
  imageUrl,
  href,
  linkLabel = 'Learn More',
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const shimmerBars = [62, 84, 70, 56, 92, 66];
  const shimmerOffsets = [0, 10, 18, 6, 14, 22];
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const media = window.matchMedia('(hover: none), (pointer: coarse)');
    const update = () => setIsTouch(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  useEffect(() => {
    if (!isTouch || !isFlipped) {
      return;
    }
    const handleOutside = (event: PointerEvent) => {
      if (!cardRef.current) {
        return;
      }
      if (!cardRef.current.contains(event.target as Node)) {
        setIsFlipped(false);
      }
    };
    document.addEventListener('pointerdown', handleOutside);
    return () => document.removeEventListener('pointerdown', handleOutside);
  }, [isTouch, isFlipped]);

  const handleActivate = (event?: React.MouseEvent | React.KeyboardEvent) => {
    if (!href) {
      return;
    }
    if (isTouch && !isFlipped) {
      event?.preventDefault();
      event?.stopPropagation();
      setIsFlipped(true);
      return;
    }
    router.push(href);
  };

  return (
    <>
      <div
        ref={cardRef}
        style={{
          ['--primary' as any]: color ?? '#74B3FF',
        }}
        className={cn(
          'group relative h-[360px] w-full max-w-[300px] [perspective:2000px]',
          href && 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strategy-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-soft-white'
        )}
        role={href ? 'link' : undefined}
        tabIndex={href ? 0 : undefined}
        aria-label={href ? title : undefined}
        onMouseEnter={() => {
          if (!isTouch) {
            setIsFlipped(true);
          }
        }}
        onMouseLeave={() => {
          if (!isTouch) {
            setIsFlipped(false);
          }
        }}
        onClick={handleActivate}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleActivate(event);
          }
        }}
      >
        <div
          className={cn(
            'relative h-full w-full',
            '[transform-style:preserve-3d]',
            'transition-all duration-500 ease-out',
            isFlipped
              ? '[transform:rotateY(180deg)]'
              : '[transform:rotateY(0deg)]',
          )}
        >
          {/* Front of card */}
          <div
            className={cn(
              'absolute inset-0 h-full w-full',
              '[transform:rotateY(0deg)] [backface-visibility:hidden]',
              'overflow-hidden rounded-2xl',
              !imageUrl && 'bg-gradient-to-br from-elevation-layer via-elevation-layer to-deep-void',
              'border border-surface-border',
              'shadow-lg',
              'transition-all duration-500',
              'group-hover:shadow-xl',
              'group-hover:border-strategy-blue/30',
              isFlipped ? 'opacity-0' : 'opacity-100',
            )}
          >
            {/* Background image (if provided) */}
            {imageUrl && (
              <img
                src={imageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            )}

            {/* Dark overlay for text readability */}
            <div className={cn(
              'absolute inset-0',
              imageUrl
                ? 'bg-gradient-to-br from-deep-void/85 via-elevation-layer/75 to-deep-void/85'
                : 'bg-gradient-to-br from-strategy-blue/5 via-transparent to-strategy-blue/5'
            )} />

            {/* Hint Indicator */}
            <div className="absolute top-4 right-4 z-20">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-deep-void/60 backdrop-blur-md border border-white/10 text-[10px] font-medium tracking-wide uppercase text-platinum/80 shadow-sm">
                {isTouch ? (
                  <>
                    <Hand className="w-3 h-3 text-strategy-blue" />
                    <span>Tap to flip</span>
                  </>
                ) : (
                  <>
                    <MousePointer2 className="w-3 h-3 text-strategy-blue" />
                    <span>Hover</span>
                  </>
                )}
              </div>
            </div>

            {/* Icon section */}
            <div className="absolute inset-0 flex items-center justify-center pt-20">
              <div className="relative flex h-[100px] w-[200px] flex-col items-center justify-center gap-2">
                {/* Animated background bars */}
                {shimmerBars.map((width, index) => (
                  <div
                    key={`bar-${width}-${index}`}
                    className={cn(
                      'h-2 w-full rounded-sm',
                      'bg-gradient-to-r from-strategy-blue/20 via-strategy-blue/30 to-strategy-blue/20',
                      'animate-[flipCardSlide_2.2s_ease-in-out_infinite]',
                      'opacity-0',
                    )}
                    style={{
                      width: `${width}%`,
                      marginLeft: `${shimmerOffsets[index]}%`,
                      animationDelay: `${index * 0.18}s`,
                    }}
                  />
                ))}

                {/* Central icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={cn(
                      'h-12 w-12 rounded-xl',
                      'bg-strategy-blue/20',
                      'flex items-center justify-center',
                      'border border-strategy-blue/30',
                      'transition-all duration-300 group-hover:scale-105',
                    )}
                  >
                    <IconComponent className="h-6 w-6 text-strategy-blue" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom content */}
            <div className="absolute right-0 bottom-0 left-0 p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="space-y-1.5">
                  <h3 className="text-lg leading-snug font-light tracking-tight text-white transition-all duration-300 ease-out group-hover:translate-y-[-2px]">
                    {title}
                  </h3>
                  <p className="line-clamp-2 text-sm tracking-tight text-platinum transition-all delay-[50ms] duration-300 ease-out group-hover:translate-y-[-2px]">
                    {subtitle}
                  </p>
                </div>
                <div className="group/icon relative">
                  <div
                    className={cn(
                      'absolute inset-[-8px] rounded-lg transition-opacity duration-200',
                      'bg-strategy-blue/10',
                      'opacity-0 group-hover/icon:opacity-100',
                    )}
                  />
                  <BarChart3 className="text-strategy-blue relative z-10 h-5 w-5 transition-all duration-200 group-hover/icon:scale-105" />
                </div>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div
            className={cn(
              'absolute inset-0 h-full w-full',
              '[transform:rotateY(180deg)] [backface-visibility:hidden]',
              'rounded-2xl p-5',
              'bg-gradient-to-br from-elevation-layer via-elevation-layer to-deep-void',
              'border border-surface-border',
              'shadow-lg',
              'flex flex-col',
              'transition-all duration-500',
              'group-hover:shadow-xl',
              'group-hover:border-strategy-blue/30',
              !isFlipped ? 'opacity-0' : 'opacity-100',
            )}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-strategy-blue/5 via-transparent to-strategy-blue/5" />

            <div className="relative z-10 flex-1 space-y-5">
              <div className="space-y-2">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-strategy-blue/20 border border-strategy-blue/30">
                    <BackIconComponent className="h-4 w-4 text-strategy-blue" />
                  </div>
                  <h3 className="text-lg leading-snug font-light tracking-tight text-white transition-all duration-300 ease-out group-hover:translate-y-[-2px]">
                    {title}
                  </h3>
                </div>
                <p className="text-sm tracking-tight text-platinum leading-relaxed transition-all duration-300 ease-out group-hover:translate-y-[-2px]">
                  {description}
                </p>
              </div>

              {false && features && features.length > 0 && (
                <div className="space-y-2.5">
                  {features.map((feature, index) => {
                    const icons = [TrendingUp, FileText, BarChart3, ArrowRight];
                    const FeatureIcon = icons[index % icons.length];

                    return (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-platinum transition-all duration-300"
                        style={{
                          transform: isFlipped
                            ? 'translateX(0)'
                            : 'translateX(-10px)',
                          opacity: isFlipped ? 1 : 0,
                          transitionDelay: `${index * 50 + 100}ms`,
                        }}
                      >
                        <div className="bg-strategy-blue/10 border border-strategy-blue/20 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md">
                          <FeatureIcon className="text-strategy-blue h-3 w-3" />
                        </div>
                        <span className="font-light">{feature}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="relative z-10 mt-auto border-t border-surface-border pt-4">
              <div
                className={cn(
                  'group/start relative',
                  'flex items-center justify-between',
                  'rounded-lg p-2.5',
                  'transition-all duration-200',
                  'bg-elevation-layer',
                  'hover:bg-strategy-blue/10',
                  'hover:scale-[1.01] hover:cursor-pointer',
                  'border border-transparent hover:border-strategy-blue/20',
                )}
              >
                <span className="group-hover/start:text-strategy-blue text-sm font-light text-platinum transition-colors duration-200">
                  {linkLabel}
                </span>
                <div className="group/icon relative">
                  <div
                    className={cn(
                      'absolute inset-[-6px] rounded-lg transition-all duration-200',
                      'bg-strategy-blue/10',
                      'scale-90 opacity-0 group-hover/start:scale-100 group-hover/start:opacity-100',
                    )}
                  />
                  <ArrowRight className="text-strategy-blue relative z-10 h-4 w-4 transition-all duration-200 group-hover/start:translate-x-1 group-hover/start:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes flipCardSlide {
          0% {
            transform: translateX(-80px);
            opacity: 0;
          }
          45% {
            transform: translateX(0);
            opacity: 0.7;
          }
          100% {
            transform: translateX(80px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
