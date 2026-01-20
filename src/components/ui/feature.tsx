'use client'

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

function Feature() {
    const gridStyles = `
    @keyframes grid-draw-feature {
      0% { stroke-dashoffset: 1000; opacity: 0; }
      50% { opacity: 0.3; }
      100% { stroke-dashoffset: 0; opacity: 0.25; }
    }
    .grid-line-feature {
      stroke: rgba(226, 232, 240, 0.15);
      stroke-width: 1;
      opacity: 0;
      stroke-dasharray: 5 5;
      stroke-dashoffset: 1000;
      animation: grid-draw-feature 1.5s ease-out forwards;
    }
  `;

    return (
        <section className="relative w-full py-10 lg:py-16 bg-deep-void overflow-hidden">
            <style>{gridStyles}</style>

            {/* Animated Grid Background mapping the sub-services style */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                    <pattern id="gridFeatureDark" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(226, 232, 240, 0.08)" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gridFeatureDark)" />
                <line x1="0" y1="30%" x2="100%" y2="30%" className="grid-line-feature" style={{ animationDelay: '0.2s' }} />
                <line x1="70%" y1="0" x2="70%" y2="100%" className="grid-line-feature" style={{ animationDelay: '0.4s' }} />
            </svg>

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="grid border border-white/10 rounded-2xl bg-elevation-layer/30 backdrop-blur-sm p-6 lg:p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex gap-10 flex-col"
                    >
                        <div className="flex gap-4 flex-col">
                            <div className="flex gap-6 flex-col">
                                <h2 className="text-xl lg:text-3xl tracking-tighter max-w-xl text-left font-accent font-light text-platinum leading-[1.1]">
                                    How ongoing financial leadership works
                                </h2>
                            </div>
                        </div>

                        <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-2 items-start lg:grid-cols-1 gap-8">
                            <div className="flex flex-row gap-6 items-start group">
                                <div className="mt-1 bg-strategy-blue/10 p-2 rounded-lg border border-strategy-blue/20 group-hover:bg-strategy-blue/20 transition-colors">
                                    <Check className="w-4 h-4 text-strategy-blue" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-platinum font-body font-medium">Structured, ongoing involvement</p>
                                    <p className="text-platinum/50 text-sm font-body font-light">
                                        Support is provided on a recurring basis, with clear priorities and regular engagement — without the commitment of a full-time executive.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row gap-6 items-start group">
                                <div className="mt-1 bg-strategy-blue/10 p-2 rounded-lg border border-strategy-blue/20 group-hover:bg-strategy-blue/20 transition-colors">
                                    <Check className="w-4 h-4 text-strategy-blue" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-platinum font-body font-medium">Collaborative by design</p>
                                    <p className="text-platinum/50 text-sm font-body font-light">
                                        We work alongside management and existing accountants, strengthening financial insight without disrupting established operations.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row gap-6 items-start group">
                                <div className="mt-1 bg-strategy-blue/10 p-2 rounded-lg border border-strategy-blue/20 group-hover:bg-strategy-blue/20 transition-colors">
                                    <Check className="w-4 h-4 text-strategy-blue" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-platinum font-body font-medium">Proportional to your needs</p>
                                    <p className="text-platinum/50 text-sm font-body font-light">
                                        The level of involvement adjusts as the business evolves, focusing effort where decisions carry the most weight.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row gap-6 items-start group">
                                <div className="mt-1 bg-strategy-blue/10 p-2 rounded-lg border border-strategy-blue/20 group-hover:bg-strategy-blue/20 transition-colors">
                                    <Check className="w-4 h-4 text-strategy-blue" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-platinum font-body font-medium">Decision-focused, not report-driven</p>
                                    <p className="text-platinum/50 text-sm font-body font-light">
                                        Financial work is guided by upcoming decisions, risks, and opportunities — not by reporting for its own sake.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 flex-col">
                            <div className="flex gap-6 flex-col">
                                <p className="text-md md:text-lg leading-relaxed tracking-tight text-platinum/70 max-w-xl text-left font-body font-light">
                                    <span className="text-electric-blue font-medium">Best when:</span> You want clarity, structure, and senior financial input embedded into day-to-day decision-making.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative bg-velricon-navy rounded-xl aspect-[16/9] lg:aspect-[16/11] overflow-hidden shadow-2xl border border-white/5"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                            alt="Financial data and strategy"
                            fill
                            className="object-cover opacity-60 mix-blend-luminosity hover:opacity-80 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-deep-void/80 via-transparent to-velricon-navy/30 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export { Feature };
