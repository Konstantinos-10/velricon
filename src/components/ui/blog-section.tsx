'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface BlogItem {
    title: string;
    slug: string;
    description: string;
    image: string;
    createdAt: string;
    author: string;
    readTime: string;
}

interface BlogSectionProps {
    title: string;
    description: string;
    items: BlogItem[];
}

export function BlogSection({ title, description, items }: BlogSectionProps) {
    return (
        <section className="relative py-16 lg:py-24">
            {/* Section Header */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 lg:mb-16"
                >
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-accent font-light tracking-tight text-platinum mb-4">
                        {title}
                    </h2>
                    <p className="text-base lg:text-lg font-body text-platinum/60 max-w-2xl">
                        {description}
                    </p>
                    {/* Decorative line */}
                    <div className="mt-6 h-px w-24 bg-gradient-to-r from-strategy-blue to-transparent" />
                </motion.div>

                {/* Blog Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((blog, index) => (
                        <motion.div
                            key={blog.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={blog.slug}
                                className="group block rounded-2xl border border-white/10 bg-elevation-layer/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-strategy-blue/40 hover:shadow-[0_8px_32px_rgba(116,179,255,0.15)]"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-void/60 via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-5 lg:p-6">
                                    {/* Meta */}
                                    <div className="flex items-center gap-3 text-xs font-body text-platinum/50 mb-3">
                                        <span>{blog.author}</span>
                                        <span className="w-1 h-1 rounded-full bg-platinum/30" />
                                        <span>{blog.createdAt}</span>
                                        {blog.readTime && (
                                            <>
                                                <span className="w-1 h-1 rounded-full bg-platinum/30" />
                                                <span>{blog.readTime}</span>
                                            </>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg lg:text-xl font-accent font-light text-platinum leading-snug mb-3 line-clamp-2 group-hover:text-white transition-colors">
                                        {blog.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm font-body text-platinum/60 leading-relaxed line-clamp-3">
                                        {blog.description}
                                    </p>

                                    {/* Read More Link */}
                                    <div className="mt-4 flex items-center gap-2 text-sm font-body text-strategy-blue group-hover:text-electric-blue transition-colors">
                                        <span>Read more</span>
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            className="transition-transform duration-200 group-hover:translate-x-1"
                                        >
                                            <path
                                                d="M5 2L11 7L5 12"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
