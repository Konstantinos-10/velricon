'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Hand, MousePointer2 } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type LifecycleNode = {
  id: number
  title: string
  panelTitle?: string
  caption: string
  label: string
  detail: string
  imageUrl: string
  imageAlt: string
  services: Array<{ label: string; href: string }>
}

const nodes: LifecycleNode[] = [
  {
    id: 1,
    title: 'Early stage',
    panelTitle: 'When structure matters before growth.',
    caption: 'Foundation',
    label: '01',
    detail:
      'Early decisions around pricing, costs, and cash flow shape everything that follows. Financial clarity at this stage prevents avoidable problems later.',
    imageUrl: '/assets/images/sticky-scroll/vault_with_organized_interior.png',
    imageAlt: 'Vault with organized interior',
    services: [{ label: 'On-going Financial Leadership', href: '/services/fractional-cfo' }],
  },
  {
    id: 2,
    title: 'Growth',
    panelTitle: 'When complexity increases faster than visibility.',
    caption: 'Scaling',
    label: '02',
    detail:
      'As the business grows, reporting, budgeting, and cash flow discipline become essential to support hiring, expansion, and operational decisions.',
    imageUrl: '/assets/images/sticky-scroll/modular_architecture.png',
    imageAlt: 'Modular architecture',
    services: [{ label: 'On-going Financial Leadership', href: '/services/fractional-cfo' }],
  },
  {
    id: 3,
    title: 'Financing',
    panelTitle: 'When numbers are tested by third parties.',
    caption: 'Scrutiny',
    label: '03',
    detail:
      'Banks and investors require structured projections, clear assumptions, and defensible analysis to support financing or funding decisions.',
    imageUrl: '/assets/images/sticky-scroll/modern_office_with_city_view.png',
    imageAlt: 'Modern office with city view',
    services: [
      { label: 'Bank Financing & Refinancing', href: '/services/bank-ready' },
      { label: 'Investor-Ready Packages', href: '/services/investor-ready' },
    ],
  },
  {
    id: 4,
    title: 'Maturity',
    panelTitle: 'When value, risk, and options are reassessed.',
    caption: 'TRANSITION',
    label: '04',
    detail:
      'At this stage, financial leadership supports strategic choices around optimisation, restructuring, or longer-term transition planning.',
    imageUrl: '/assets/images/sticky-scroll/cozy_meeting_space.png',
    imageAlt: 'Cozy meeting space',
    services: [{ label: 'Investor-Ready Packages', href: '/services/investor-ready' }],
  },
]

export function LifecycleInterventionMap() {
  const sectionRef = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-120px' })
  const prefersReducedMotion = useReducedMotion()
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [lockedId, setLockedId] = useState<number | null>(null)
  const activeId = lockedId ?? hoveredId
  const activeNode = useMemo(() => nodes.find((node) => node.id === activeId), [activeId])

  const [isCoarsePointer, setIsCoarsePointer] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia('(pointer: coarse)')
    const update = () => setIsCoarsePointer(media.matches)
    update()
    media.addEventListener?.('change', update)
    return () => media.removeEventListener?.('change', update)
  }, [])

  const handleActivate = (id: number) => {
    if (lockedId === id) {
      setLockedId(null)
      setHoveredId(null)
      return
    }
    setLockedId(id)
    setHoveredId(id)
    if (isCoarsePointer && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleReset = () => {
    if (!lockedId) {
      setHoveredId(null)
    }
  }

  const gridStyles = `
    @keyframes grid-draw {
      0% { stroke-dashoffset: 1000; opacity: 0; }
      50% { opacity: 0.3; }
      100% { stroke-dashoffset: 0; opacity: 0.15; }
    }
    .grid-line-dark {
      stroke: #64748B;
      stroke-width: 0.5;
      opacity: 0;
      stroke-dasharray: 5 5;
      stroke-dashoffset: 1000;
      animation: grid-draw 2s ease-out forwards;
    }
    .detail-dot-dark {
      fill: #94A3B8;
      opacity: 0;
      animation: pulse-glow-dark 3s ease-in-out infinite;
    }
    @keyframes pulse-glow-dark {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50% { opacity: 0.3; transform: scale(1.1); }
    }
  `

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{
        backgroundColor: '#0E101A',
      }}
    >
      <style>{gridStyles}</style>
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="gridLifecycle" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridLifecycle)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-dark" style={{ animationDelay: '0.1s' }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-dark" style={{ animationDelay: '0.2s' }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-dark" style={{ animationDelay: '0.3s' }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-dark" style={{ animationDelay: '0.4s' }} />
        <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-dark" style={{ animationDelay: '0.5s', opacity: '0.05' }} />
        <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-dark" style={{ animationDelay: '0.6s', opacity: '0.05' }} />
        <circle cx="20%" cy="20%" r="2" className="detail-dot-dark" style={{ animationDelay: '0.7s' }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot-dark" style={{ animationDelay: '0.8s' }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot-dark" style={{ animationDelay: '0.9s' }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot-dark" style={{ animationDelay: '1s' }} />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot-dark" style={{ animationDelay: '1.1s' }} />
      </svg>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="max-w-3xl"
        >
          <h2 className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-accent font-light tracking-tight text-platinum">
            Where <span className="text-electric-blue">Velricon</span> typically steps in
          </h2>
          <p className="mt-4 text-base md:text-lg font-body text-platinum/70">
            A view of the moments where financial leadership brings clarity to decisions.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] items-start">
          <div onMouseLeave={handleReset} className="relative">
            <div className="relative rounded-3xl border border-white/15 bg-elevation-layer/40 backdrop-blur-[24px] p-8 md:p-10">
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute left-10 right-10 top-1/2 hidden h-px origin-left bg-white/10 md:block"
              />

              {/* Hint Indicator - Matching Flip Card Style */}
              <div className="absolute top-4 right-4 z-20">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-deep-void/60 backdrop-blur-md border border-white/10 text-[10px] font-medium tracking-wide uppercase text-platinum/80 shadow-sm">
                  {isCoarsePointer ? (
                    <>
                      <Hand className="w-3 h-3 text-strategy-blue" />
                      <span>Tap node</span>
                    </>
                  ) : (
                    <>
                      <MousePointer2 className="w-3 h-3 text-strategy-blue" />
                      <span>Hover & Click</span>
                    </>
                  )}
                </div>
              </div>

              <div className="hidden md:grid grid-cols-4 gap-6 relative z-10">
                {nodes.map((node, index) => {
                  const isActive = activeId === node.id
                  return (
                    <motion.button
                      key={node.id}
                      type="button"
                      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.08, ease: 'easeInOut' }}
                      onMouseEnter={() => {
                        if (!lockedId) setHoveredId(node.id)
                      }}
                      onFocus={() => {
                        if (!lockedId) setHoveredId(node.id)
                      }}
                      onClick={() => handleActivate(node.id)}
                      className={cn(
                        'text-left rounded-2xl p-4 transition-colors duration-300',
                        isActive ? 'bg-white/5' : 'bg-transparent'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            'h-3 w-3 rounded-full border transition-all duration-300',
                            isActive
                              ? 'border-strategy-blue bg-strategy-blue/40 shadow-[0_0_12px_rgba(116,179,255,0.6)]'
                              : 'border-white/20 bg-white/10'
                          )}
                        />
                        <span className="text-xs font-body tracking-[0.25em] text-slate">{node.label}</span>
                      </div>
                      <div className="mt-4 text-base font-accent font-light text-platinum">
                        {node.title}
                      </div>
                      <div className="mt-2 text-xs font-body uppercase tracking-[0.2em] text-slate/80">
                        {node.caption}
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              <div className="md:hidden space-y-4 relative z-10">
                <div className="absolute left-5 top-6 bottom-6 w-px bg-white/10" />
                {nodes.map((node, index) => {
                  const isActive = activeId === node.id
                  return (
                    <motion.button
                      key={node.id}
                      type="button"
                      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.08, ease: 'easeInOut' }}
                      onClick={() => handleActivate(node.id)}
                      className={cn(
                        'relative w-full rounded-2xl p-4 pl-10 text-left transition-colors duration-300',
                        isActive ? 'bg-white/5' : 'bg-transparent'
                      )}
                    >
                      <div
                        className={cn(
                          'absolute left-3 top-7 h-3 w-3 rounded-full border transition-all duration-300',
                          isActive
                            ? 'border-strategy-blue bg-strategy-blue/40 shadow-[0_0_12px_rgba(116,179,255,0.6)]'
                            : 'border-white/20 bg-white/10'
                        )}
                      />
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-body tracking-[0.25em] text-slate">{node.label}</span>
                        <span className="text-base font-accent font-light text-platinum">{node.title}</span>
                      </div>
                      <div className="mt-2 text-xs font-body uppercase tracking-[0.2em] text-slate/80">
                        {node.caption}
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className={cn(
                  'absolute left-[5%] top-[15%] h-[70%] w-[55%] rounded-full blur-3xl transition-opacity duration-300',
                  activeId === 1 || activeId === 2 ? 'opacity-60' : 'opacity-35'
                )} style={{ background: 'radial-gradient(circle, rgba(116,179,255,0.22), transparent 70%)' }} />
                <div className={cn(
                  'absolute left-[55%] top-[30%] h-[40%] w-[25%] rounded-full blur-3xl transition-opacity duration-300',
                  activeId === 3 ? 'opacity-60' : 'opacity-35'
                )} style={{ background: 'radial-gradient(circle, rgba(116,179,255,0.2), transparent 70%)' }} />
                <div className={cn(
                  'absolute left-[65%] top-[10%] h-[70%] w-[30%] rounded-full blur-3xl transition-opacity duration-300',
                  activeId === 3 || activeId === 4 ? 'opacity-60' : 'opacity-35'
                )} style={{ background: 'radial-gradient(circle, rgba(0,40,87,0.5), transparent 70%)' }} />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
            className="rounded-2xl border border-white/15 bg-elevation-layer/60 backdrop-blur-[24px] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            ref={panelRef}
          >
            {activeNode ? (
              <motion.div
                key={activeNode.id}
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={activeNode.imageUrl}
                    alt={activeNode.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-deep-void/50 via-transparent to-elevation-layer/60" />
                </div>
                <p className="text-xs font-body tracking-[0.3em] uppercase text-slate">{activeNode.label}</p>
                <h3 className="mt-3 text-2xl font-accent font-light text-platinum">
                  {activeNode.panelTitle ?? activeNode.title}
                </h3>
                <p className="mt-3 text-sm font-body text-platinum/70 leading-relaxed">
                  {activeNode.detail}
                </p>
                <div className="mt-6 space-y-3">
                  {activeNode.services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group inline-flex items-center gap-2 text-sm font-body text-strategy-blue hover:text-platinum transition-colors"
                    >
                      <span>{service.label}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <p className="text-xs font-body tracking-[0.3em] uppercase text-slate">Where we step in</p>
                <h3 className="mt-3 text-2xl font-accent font-light text-platinum">
                  Moments where financial leadership makes a difference.
                </h3>
                <p className="mt-3 text-sm font-body text-platinum/60 leading-relaxed">
                  Each point reflects a stage in the business lifecycle where structure, clarity, and financial decision-making shape the outcome.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
