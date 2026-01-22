'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { highlightText } from '@/lib/text-utils'

interface ServicePageReverseContentProps {
    title: string
    items: string[]
    imageUrl: string
    imageAlt: string
}

export function ServicePageReverseContent({ title, items, imageUrl, imageAlt }: ServicePageReverseContentProps) {
    const sectionRef = useRef<HTMLElement>(null)
    const prefersReducedMotion = useReducedMotion()
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section
            ref={sectionRef}
            className="relative bg-soft-white py-12 pb-24 md:pb-32 lg:pb-40 overflow-hidden"
        >
            {/* Subtle background gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, #F4F6F9 0%, #F8F9FA 50%, #FFFFFF 100%)',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Block - Above image and particles, centered on mobile, left on desktop */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-2xl lg:text-4xl font-accent font-light text-black mb-12 sm:mb-16 md:mb-20 text-left"
                >
                    {highlightText(title, ['financial leadership', 'financing preparation', 'proper investor preparation'], 'text-electric-blue font-bold')}
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Column - Visual Element */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }} // Coming from left
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={prefersReducedMotion
                                ? { duration: 0.3 }
                                : { duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
                            }
                            className="relative aspect-square rounded-2xl overflow-hidden border border-platinum/30 bg-white/50"
                        >
                            {/* Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={imageUrl}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Subtle grid pattern overlay */}
                            <div className="absolute inset-0 pointer-events-none opacity-20">
                                <svg
                                    viewBox="0 0 400 400"
                                    className="w-full h-full"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <pattern id="serviceContentReverseGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path
                                                d="M 40 0 L 0 0 0 40"
                                                fill="none"
                                                stroke="#94A3B8"
                                                strokeWidth="0.5"
                                                opacity="0.3"
                                            />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#serviceContentReverseGrid)" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Main Content */}
                    <div className="lg:col-span-7 space-y-8 md:space-y-10 order-1 lg:order-2">

                        {items.map((item, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={prefersReducedMotion
                                    ? { duration: 0.3 }
                                    : { duration: 0.7, delay: 0.1 + (index * 0.2), ease: [0.22, 1, 0.36, 1] }
                                }
                                className="text-base md:text-lg font-body font-light text-dark-ink leading-relaxed"
                            >
                                {item}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
