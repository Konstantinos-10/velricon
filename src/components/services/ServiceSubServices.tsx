'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FeatureCard } from '@/components/ui/grid-feature-cards'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { LineChart, TrendingUp, BarChart3, Target, FileText, Landmark, Wallet, PieChart, LucideIcon } from 'lucide-react'
import { SubServiceConfig } from '@/config/service-pages'

export interface SubService {
	title: string
	icon: LucideIcon
	description: string
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
	LineChart,
	TrendingUp,
	BarChart3,
	Target,
	FileText,
	Landmark,
	Wallet,
	PieChart,
}

interface ServiceSubServicesProps {
	subServices: SubServiceConfig[]
}

function AnimatedContainer({
	className,
	delay = 0.1,
	children
}: {
	className?: string
	delay?: number
	children: React.ReactNode
}) {
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export function ServiceSubServices({ subServices }: ServiceSubServicesProps) {
	const sectionRef = useRef<HTMLElement>(null)
	const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
	const gridStyles = `
		@keyframes grid-draw-dark {
			0% { stroke-dashoffset: 1000; opacity: 0; }
			50% { opacity: 0.4; }
			100% { stroke-dashoffset: 0; opacity: 0.35; }
		}
		.grid-line-dark {
			stroke: rgba(226, 232, 240, 0.18);
			stroke-width: 1;
			opacity: 0;
			stroke-dasharray: 5 5;
			stroke-dashoffset: 1000;
			animation: grid-draw-dark 1.5s ease-out forwards;
		}
		.detail-dot-dark {
			fill: rgba(226, 232, 240, 0.22);
			opacity: 0;
			animation: pulse-glow-dark 3s ease-in-out infinite;
		}
		@keyframes pulse-glow-dark {
			0%, 100% { opacity: 0.25; transform: scale(1); }
			50% { opacity: 0.55; transform: scale(1.1); }
		}
	`

	// Map string icon identifiers to icon components
	const mappedSubServices = useMemo(() => {
		return subServices.map((subService) => ({
			title: subService.title,
			icon: iconMap[subService.icon] || LineChart,
			description: subService.description,
		}))
	}, [subServices])

	return (
		<section
			ref={sectionRef}
			className="relative bg-deep-void py-24 md:py-32 lg:py-40 overflow-hidden"
		>
			<style>{gridStyles}</style>
			{/* Subtle texture */}
			<div
				className="absolute inset-0 opacity-[0.05]"
				style={{
					backgroundImage: 'radial-gradient(circle at 1px 1px, #E2E8F0 1px, transparent 0)',
					backgroundSize: '32px 32px',
				}}
			/>

			{/* Animated Grid Background */}
			<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<defs>
					<pattern id="gridSubServicesDark" width="60" height="60" patternUnits="userSpaceOnUse">
						<path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(226, 232, 240, 0.12)" strokeWidth="0.5" />
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#gridSubServicesDark)" />
				<line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-dark" style={{ animationDelay: '0.1s' }} />
				<line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-dark" style={{ animationDelay: '0.2s' }} />
				<line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-dark" style={{ animationDelay: '0.3s' }} />
				<line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-dark" style={{ animationDelay: '0.4s' }} />
				<line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line-dark" style={{ animationDelay: '0.5s' }} />
				<line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line-dark" style={{ animationDelay: '0.6s' }} />
				<circle cx="20%" cy="20%" r="3" className="detail-dot-dark" style={{ animationDelay: '0.8s' }} />
				<circle cx="80%" cy="20%" r="3" className="detail-dot-dark" style={{ animationDelay: '0.9s' }} />
				<circle cx="20%" cy="80%" r="3" className="detail-dot-dark" style={{ animationDelay: '1s' }} />
				<circle cx="80%" cy="80%" r="3" className="detail-dot-dark" style={{ animationDelay: '1.1s' }} />
				<circle cx="50%" cy="50%" r="2.5" className="detail-dot-dark" style={{ animationDelay: '1.2s' }} />
			</svg>

			<div className="mx-auto w-full max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<h2 className="text-2xl font-accent font-light tracking-tight text-balance lg:text-4xl text-platinum">
						<span className="text-electric-blue">Capabilities</span>
					</h2>
					<p className="text-platinum/70 mt-4 text-sm tracking-wide text-balance md:text-base font-body font-light">
						What this service includes in practice.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 border border-white/10 sm:grid-cols-2 md:grid-cols-3 bg-elevation-layer/40 rounded-2xl overflow-hidden"
				>
					{mappedSubServices.map((subService, i) => (
						<FeatureCard
							key={i}
							feature={subService}
							className="bg-transparent border-0 [&_h3]:text-platinum [&_p]:text-platinum/70"
						/>
					))}
				</AnimatedContainer>
			</div>
		</section>
	)
}
