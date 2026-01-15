'use client'

import { CountUpNumber } from '@/components/ui/count-up-number'

type Achievement = {
  value: number
  label: string
  prefix?: string
  suffix?: string
  hoverCaption?: string
  format?: (value: number) => string
}

const achievements: Achievement[] = [
  {
    value: 50,
    suffix: '+',
    label: 'Happy clients',
    hoverCaption: 'Long-term partnerships built on trust.',
  },
  {
    value: 25,
    label: 'Years of experience',
    hoverCaption: 'Depth across cycles and scale stages.',
  },
  {
    value: 150,
    suffix: 'M+',
    label: 'Capital supported / raised',
    hoverCaption: 'Supportive guidance, not a guarantee.',
    format: (value) => Math.round(value).toLocaleString('en-US'),
  },
]

export function HomeAchievements() {
  const gridStyles = `
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
  `

  return (
    <section aria-label="Key achievements" className="relative bg-white overflow-hidden">
      <style>{gridStyles}</style>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0E101A 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="gridAchievements" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(30, 41, 59, 0.2)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridAchievements)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-light" style={{ animationDelay: '0.1s' }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-light" style={{ animationDelay: '0.2s' }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.3s' }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.4s' }} />
        <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-light" style={{ animationDelay: '0.5s' }} />
        <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-light" style={{ animationDelay: '0.6s' }} />
        <circle cx="20%" cy="20%" r="3" className="detail-dot-light" style={{ animationDelay: '0.8s' }} />
        <circle cx="80%" cy="20%" r="3" className="detail-dot-light" style={{ animationDelay: '0.9s' }} />
        <circle cx="20%" cy="80%" r="3" className="detail-dot-light" style={{ animationDelay: '1s' }} />
        <circle cx="80%" cy="80%" r="3" className="detail-dot-light" style={{ animationDelay: '1.1s' }} />
        <circle cx="50%" cy="50%" r="2.5" className="detail-dot-light" style={{ animationDelay: '1.2s' }} />
      </svg>
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12 lg:px-20">
        <div className="relative z-10 rounded-2xl border border-slate/20 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
          <div className="grid grid-cols-1 divide-y divide-slate/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {achievements.map((item) => {
              const formattedValue = `${item.prefix ?? ''}${
                item.format ? item.format(item.value) : item.value.toLocaleString('en-US')
              }${item.suffix ?? ''}`

              return (
                <div
                  key={`${item.label}-${formattedValue}`}
                  className="group relative px-6 py-6 text-center transition-all duration-500 ease-out sm:px-8 hover:bg-slate/5"
                >
                  <span className="sr-only">{formattedValue} {item.label}</span>
                  <div
                    aria-hidden="true"
                    className="text-[clamp(2rem,3.4vw,3.5rem)] font-accent font-light tracking-tight text-dark-ink transition-transform duration-500 ease-out group-hover:-translate-y-1"
                  >
                    <CountUpNumber
                      value={item.value}
                      duration={1600}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      format={item.format}
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-center">
                    <span className="h-px w-10 bg-strategy-blue/80 transition-all duration-500 ease-out group-hover:w-16" />
                  </div>
                  <p
                    aria-hidden="true"
                    className="mt-3 text-xs font-body uppercase tracking-[0.2em] text-dark-ink/85 transition-colors duration-300 group-hover:text-dark-ink"
                  >
                    {item.label}
                  </p>
                  {item.hoverCaption && (
                    <p className="mt-2 text-[10px] font-body tracking-wide text-dark-ink/70 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">
                      {item.hoverCaption}
                    </p>
                  )}
                  <div className="pointer-events-none absolute inset-2 rounded-xl border border-transparent transition-all duration-500 ease-out group-hover:border-strategy-blue/30 group-hover:shadow-[0_0_35px_rgba(116,179,255,0.28)]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
