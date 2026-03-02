'use client'

import { motion } from 'framer-motion'
import { Github, Download, ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import avatarImage from '../public/avatar.jpg'

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.5 }}
                    className="absolute -top-20 left-1/4 w-[700px] h-[700px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)',
                        filter: 'blur(90px)',
                    }}
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)',
                        filter: 'blur(70px)',
                    }}
                />
            </div>

            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.022]"
                style={{
                    backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* ── Left: Text column ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: 'easeOut' }}
                    >
                        {/* Status badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-300 text-xs font-mono mb-7">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            Open to AI Engineer roles
                        </div>

                        {/* Name */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] mb-5">
                            <span className="text-white">Trinh Quoc Trung</span>
                        </h1>

                        {/* Role chips */}
                        <div className="flex items-center gap-2.5 flex-wrap mb-5">
                            <span className="text-xs font-mono text-indigo-300 tracking-widest uppercase px-3 py-1 rounded-full border border-indigo-500/35 bg-indigo-500/10">
                                AI Engineer
                            </span>
                            <span className="text-gray-600 text-xs">·</span>
                            <span className="text-xs font-mono text-violet-300 tracking-widest uppercase px-3 py-1 rounded-full border border-violet-500/35 bg-violet-500/10">
                                Backend Engineer
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6 max-w-[500px]">
                            I build{' '}
                            <span className="text-indigo-300 font-medium">production-grade AI pipelines</span>
                            {' '}— RAG systems, LLM integrations, and scalable backend APIs
                            that deliver real, measurable impact.
                        </p>

                        {/* Key capabilities */}
                        <ul className="space-y-2.5 mb-8">
                            {[
                                'RAG · Embeddings · Vector Search (FAISS)',
                                'LLM pipelines: GPT-4o, LangChain, Prompt Engineering',
                                'FastAPI · async workers · multimodal orchestration',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                                    <Check size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <motion.button
                                onClick={() =>
                                    document.querySelector('#featured-system')?.scrollIntoView({ behavior: 'smooth' })
                                }
                                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-200"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                View Projects
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                            </motion.button>

                            <motion.a
                                href="/cv.pdf"
                                download
                                className="flex items-center gap-2 px-6 py-3 border border-indigo-500/30 text-gray-300 text-sm font-semibold rounded-xl hover:border-indigo-400/60 hover:bg-indigo-500/5 transition-all duration-200"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Download size={14} className="text-indigo-400" />
                                Download CV
                            </motion.a>

                            <motion.a
                                href="https://github.com/trungtrinhquoc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 border border-white/10 text-gray-500 text-sm font-semibold rounded-xl hover:border-white/20 hover:text-gray-300 transition-all duration-200"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Github size={15} />
                                GitHub
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* ── Right: Photo card ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
                        className="flex flex-col items-center justify-center"
                    >
                        <div
                            className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-3xl overflow-hidden"
                            style={{
                                boxShadow:
                                    '0 0 0 1px rgba(99,102,241,0.15), 0 0 80px rgba(99,102,241,0.18), 0 24px 48px rgba(0,0,0,0.45)',
                            }}
                        >
                            {/* Gradient background (shown when no photo) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-[#111827] to-violet-900/40" />

                            <Image
                                src={avatarImage}
                                alt="Trinh Quoc Trung"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Decorative border glow */}
                            <div className="absolute inset-0 rounded-3xl ring-1 ring-indigo-500/20" />
                        </div>

                        {/* Name card below photo */}
                        <div className="mt-4 text-center">
                            <div className="text-sm font-semibold text-gray-300">Trinh Quoc Trung</div>
                            <div className="text-xs font-mono text-indigo-400 mt-0.5">AI + Backend Engineer</div>
                            <div className="flex items-center justify-center gap-1.5 mt-2">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="text-[11px] text-gray-500">Available for hire</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    className="flex justify-center mt-14"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="flex flex-col items-center gap-1.5 text-gray-700"
                    >
                        <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
                        <div className="w-px h-7 bg-gradient-to-b from-gray-600 to-transparent" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

