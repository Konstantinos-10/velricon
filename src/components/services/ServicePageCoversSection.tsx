'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CardSpotlight } from '@/components/ui/card-spotlight'

interface ServicePageCoversSectionProps {
    intro: string
    items: string[]
    exit: string
}

const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-strategy-blue mt-1 flex-shrink-0"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                fill="currentColor"
                strokeWidth="0"
            />
        </svg>
    )
}

const Step = ({ title }: { title: string }) => {
    return (
        <li className="flex gap-3 items-start py-2">
            <CheckIcon />
            <span className="text-platinum/90 font-body font-light text-base leading-snug">
                {title}
            </span>
        </li>
    )
}

const coversGridStyles = `
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
`;

export function ServicePageCoversSection({ intro, items, exit }: ServicePageCoversSectionProps) {
    return (
        <section className="relative bg-[#FAFAFA] py-24 md:py-32 overflow-hidden">
            <style>{coversGridStyles}</style>

            {/* Subtle texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #0E101A 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Animated Grid Background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                    <pattern id="gridCoversSection" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(30, 41, 59, 0.2)" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gridCoversSection)" />
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl lg:text-4xl font-accent font-light text-black">
                        What this typically <span className="text-electric-blue font-bold">covers</span>
                    </h2>
                </motion.div>

                <div className="flex justify-center">
                    <CardSpotlight className="w-full max-w-4xl bg-[#0E101A] border-platinum/10 p-8 md:p-12 shadow-2xl">
                        <div className="relative z-20 space-y-8">
                            {/* Intro Sentence */}
                            <p className="text-platinum/80 font-body font-light text-lg leading-relaxed max-w-3xl">
                                {intro}
                            </p>

                            {/* Bullet Points */}
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                                {items.map((item, index) => (
                                    <Step key={index} title={item} />
                                ))}
                            </ul>

                            {/* Exiting Sentence */}
                            <p className="text-platinum/70 font-body font-light text-base italic leading-relaxed pt-4 border-t border-platinum/10">
                                {exit}
                            </p>
                        </div>
                    </CardSpotlight>
                </div>
            </div>
        </section>
    )
}
