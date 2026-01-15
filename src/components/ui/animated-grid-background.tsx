'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type AnimatedGridBackgroundProps = {
  className?: string
}

export function AnimatedGridBackground({ className }: AnimatedGridBackgroundProps) {
  const id = React.useId()
  const gridId = `${id}-grid`

  return (
    <div className={cn('absolute inset-0 pointer-events-none', className)}>
      <style>{`
        @keyframes grid-draw-${id} {
          0% { stroke-dashoffset: 1000; opacity: 0; }
          50% { opacity: 0.2; }
          100% { stroke-dashoffset: 0; opacity: 0.12; }
        }
        .grid-line-${id} {
          stroke: rgba(226, 232, 240, 0.2);
          stroke-width: 0.6;
          opacity: 0;
          stroke-dasharray: 5 5;
          stroke-dashoffset: 1000;
          animation: grid-draw-${id} 1.6s ease-out forwards;
        }
        .detail-dot-${id} {
          fill: rgba(226, 232, 240, 0.25);
          opacity: 0;
          animation: pulse-glow-${id} 3s ease-in-out infinite;
        }
        @keyframes pulse-glow-${id} {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.08); }
        }
      `}</style>

      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id={gridId} width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(226, 232, 240, 0.08)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${gridId})`} />
        <line x1="0" y1="20%" x2="100%" y2="20%" className={`grid-line-${id}`} style={{ animationDelay: '0.1s' }} />
        <line x1="0" y1="50%" x2="100%" y2="50%" className={`grid-line-${id}`} style={{ animationDelay: '0.3s' }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className={`grid-line-${id}`} style={{ animationDelay: '0.2s' }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className={`grid-line-${id}`} style={{ animationDelay: '0.4s' }} />
        <line x1="50%" y1="0" x2="50%" y2="100%" className={`grid-line-${id}`} style={{ animationDelay: '0.5s' }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className={`grid-line-${id}`} style={{ animationDelay: '0.6s' }} />
        <circle cx="20%" cy="20%" r="2" className={`detail-dot-${id}`} style={{ animationDelay: '0.7s' }} />
        <circle cx="80%" cy="20%" r="2" className={`detail-dot-${id}`} style={{ animationDelay: '0.9s' }} />
        <circle cx="20%" cy="80%" r="2" className={`detail-dot-${id}`} style={{ animationDelay: '1.1s' }} />
        <circle cx="80%" cy="80%" r="2" className={`detail-dot-${id}`} style={{ animationDelay: '1.3s' }} />
        <circle cx="50%" cy="50%" r="1.5" className={`detail-dot-${id}`} style={{ animationDelay: '1.5s' }} />
      </svg>
    </div>
  )
}
