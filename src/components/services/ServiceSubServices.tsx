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
			className="relative bg-soft-white py-24 md:py-32 lg:py-40"
		>
			<div className="mx-auto w-full max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-accent font-light tracking-tight text-balance md:text-4xl lg:text-5xl text-dark-ink">
						Capabilities
					</h2>
					<p className="text-slate mt-4 text-sm tracking-wide text-balance md:text-base font-body font-light">
						What this service includes in practice.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-platinum/30 sm:grid-cols-2 md:grid-cols-3 bg-white/50 rounded-2xl overflow-hidden"
				>
					{mappedSubServices.map((subService, i) => (
						<FeatureCard key={i} feature={subService} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	)
}
