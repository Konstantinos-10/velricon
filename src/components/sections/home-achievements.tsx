'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CountUpNumber } from '@/components/ui/count-up-number'
import { Users, Clock, TrendingUp } from 'lucide-react'

type Achievement = {
    value: number
    label: string
    prefix?: string
    suffix?: string
    description: string
    icon: React.ElementType
    format?: (value: number) => string
}

const achievements: Achievement[] = [
    {
        value: 50,
        suffix: '+',
        label: 'Happy Clients',
        description: 'Long-term partnerships built on trust and results.',
        icon: Users,
    },
    {
        value: 25,
        label: 'Years Experience',
        description: 'Depth across economic cycles and growth stages.',
        icon: Clock,
    },
    {
        value: 150,
        suffix: 'M+',
        label: 'Capital Supported',
        description: 'Strategic guidance for funding and financing.',
        icon: TrendingUp,
        format: (value) => Math.round(value).toLocaleString('en-US'),
    },
]

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
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-4px); }
  }
`

export function HomeAchievements() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <>
            <style>{gridStyles}</style>
            <section
                ref={sectionRef}
                aria-label="Key achievements"
                className="relative py-16 lg:py-20 overflow-hidden"
                style={{ background: '#FAFAFA' }}
            >
                {/* Subtle texture */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #0E101A 1px, transparent 0)`,
                        backgroundSize: '32px 32px',
                    }}
                />

                {/* Animated Grid Background */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern id="gridAchievementsLight" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(30, 41, 59, 0.2)" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#gridAchievementsLight)" />
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

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                        {achievements.map((item, index) => {
                            const Icon = item.icon

                            return (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.1 + index * 0.1,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="group relative"
                                >
                                    {/* Card */}
                                    <div
                                        className="relative h-full rounded-2xl px-6 py-5 lg:px-8 lg:py-6 overflow-hidden transition-all duration-500 ease-out
                      bg-white
                      border border-slate-200
                      shadow-[0_4px_20px_rgba(15,23,42,0.06)]
                      hover:border-strategy-blue/40
                      hover:shadow-[0_8px_40px_rgba(116,179,255,0.15)]
                      hover:-translate-y-1
                    "
                                    >
                                        {/* Glow Effect on Hover */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                                            style={{
                                                background: 'radial-gradient(ellipse at 50% 0%, rgba(116, 179, 255, 0.08) 0%, transparent 70%)',
                                            }}
                                        />

                                        {/* Content */}
                                        <div className="relative z-10 flex items-center gap-5">
                                            {/* Icon Container */}
                                            <div
                                                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                          bg-gradient-to-br from-strategy-blue/10 to-electric-blue/5
                          border border-strategy-blue/20
                          group-hover:border-strategy-blue/40
                          group-hover:shadow-[0_0_20px_rgba(116,179,255,0.2)]
                          transition-all duration-500
                        "
                                                style={{ animation: 'float 3s ease-in-out infinite', animationDelay: `${index * 0.2}s` }}
                                            >
                                                <Icon className="w-5 h-5 text-strategy-blue group-hover:text-electric-blue transition-colors duration-300" />
                                            </div>

                                            {/* Text Content */}
                                            <div className="flex-1 min-w-0">
                                                {/* Number + Label Row */}
                                                <div className="flex items-center gap-3">
                                                    <span className="text-3xl lg:text-4xl font-accent font-light tracking-tight text-dark-ink group-hover:text-electric-blue transition-colors duration-300 leading-none">
                                                        <CountUpNumber
                                                            value={item.value}
                                                            duration={1800}
                                                            prefix={item.prefix}
                                                            suffix={item.suffix}
                                                            format={item.format}
                                                        />
                                                    </span>
                                                    <span className="text-sm font-body font-medium text-dark-ink/70 uppercase tracking-wider leading-none mt-1">
                                                        {item.label}
                                                    </span>
                                                </div>

                                                {/* Description */}
                                                <p className="mt-1 text-sm font-body text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
