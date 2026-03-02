'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
    slug: string
    title: string
    date: string
    description: string
    readingTime: string
    tags: string[]
}

interface BlogSectionProps {
    posts: BlogPost[]
}

const postColors = [
    {
        accent: 'from-indigo-500 to-violet-600',
        tagBg: 'bg-indigo-500/10',
        tagColor: 'text-indigo-400',
        tagBorder: 'border-indigo-500/20',
        glowColor: 'rgba(99,102,241,0.1)',
    },
    {
        accent: 'from-violet-500 to-purple-600',
        tagBg: 'bg-violet-500/10',
        tagColor: 'text-violet-400',
        tagBorder: 'border-violet-500/20',
        glowColor: 'rgba(139,92,246,0.1)',
    },
    {
        accent: 'from-blue-500 to-indigo-500',
        tagBg: 'bg-blue-500/10',
        tagColor: 'text-blue-400',
        tagBorder: 'border-blue-500/20',
        glowColor: 'rgba(59,130,246,0.1)',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
    }),
}

export default function BlogSection({ posts }: BlogSectionProps) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="blog" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-16 gap-4"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
                            Writing
                        </div>
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-100 tracking-tight mb-3">
                            Technical Blog
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
                            Deep dives into AI engineering, system design, and production lessons learned.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="flex-shrink-0 flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors group"
                    >
                        View all posts
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {posts.map((post, idx) => {
                        const colors = postColors[idx % postColors.length]
                        return (
                            <motion.div
                                key={post.slug}
                                custom={idx}
                                variants={fadeUp}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="group"
                            >
                                <Link href={`/blog/${post.slug}`} className="block h-full">
                                    <div
                                        className="h-full flex flex-col rounded-2xl bg-[#111827] border border-indigo-500/15 overflow-hidden hover:border-indigo-500/35 transition-all duration-300"
                                        style={{ boxShadow: `0 0 30px ${colors.glowColor}` }}
                                    >
                                        {/* Top gradient bar */}
                                        <div className={`h-[2px] w-full bg-gradient-to-r ${colors.accent}`} />

                                        <div className="p-6 flex flex-col flex-1">
                                            {/* Date and reading time */}
                                            <div className="flex items-center gap-4 text-xs text-gray-600 font-mono mb-4">
                                                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                                <div className="flex items-center gap-1">
                                                    <Clock size={11} />
                                                    <span>{post.readingTime}</span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-base font-bold text-gray-100 leading-snug mb-3 group-hover:text-white transition-colors duration-200 flex-1">
                                                {post.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
                                                {post.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {post.tags.slice(0, 3).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs ${colors.tagBg} ${colors.tagColor} border ${colors.tagBorder} font-mono`}
                                                    >
                                                        <Tag size={9} />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <div className={`flex items-center gap-1.5 text-xs ${colors.tagColor} font-medium group-hover:gap-2.5 transition-all duration-200`}>
                                                Read article
                                                <ArrowRight size={12} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
