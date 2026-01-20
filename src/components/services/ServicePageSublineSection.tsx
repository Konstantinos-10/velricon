'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { highlightText } from '@/lib/text-utils'

interface ServicePageSublineSectionProps {
    subline: string
    highlightPhrases: string[]
}

export function ServicePageSublineSection({ subline, highlightPhrases }: ServicePageSublineSectionProps) {
    const highlightedSubline = useMemo(() => highlightText(subline, highlightPhrases), [subline, highlightPhrases])

    return (
        <section className="bg-soft-white py-16 md:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    <p className="text-sm md:text-2xl lg:text-3xl font-body font-light text-dark-ink leading-relaxed">
                        {highlightedSubline}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
