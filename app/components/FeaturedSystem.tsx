'use client'

import { motion } from 'framer-motion'
import { AlertCircle, GitMerge, Zap } from 'lucide-react'

export default function FeaturedSystem() {
    const flowSteps = [
        { title: 'User (Mobile App)', desc: 'Initiates request' },
        { title: 'FastAPI Validation & Routing', desc: 'Async task queue' },
        { title: 'GPT-4o', desc: 'Structured JSON Output' },
        { title: 'Parallel Execution', desc: 'Vertex AI Imagen + Cloud TTS' },
    ]

    return (
        <section className="relative py-20 overflow-hidden bg-transparent">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center sm:text-left"
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5C07B] animate-pulse" />
                        <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">System Architecture</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight mb-2">
                        Production AI <span className="text-[#E5C07B]">Storytelling Pipeline</span>
                    </h2>
                    <p className="text-zinc-400 font-light text-xs sm:text-sm max-w-xl">
                        A multimodal generation system powering a mobile application — from core latency constraints to event-driven execution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Column */}
                    <div className="lg:col-span-5 flex flex-col gap-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.15 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-white/10 border-l-2 border-l-red-500/60 shadow-xl"
                        >
                            <div className="flex items-center gap-2.5 mb-3">
                                <AlertCircle size={16} className="text-red-400" />
                                <h3 className="font-semibold text-white text-sm">The Problem</h3>
                            </div>
                            <p className="text-xs text-zinc-300 font-light leading-relaxed mb-3">
                                Generating text, image, and audio for stories spanning 6–14 scenes each introduced bottleneck constraints:
                            </p>
                            <ul className="space-y-1.5 text-xs text-red-300/80 font-light">
                                <li className="flex items-center gap-2"><span className="text-red-400">×</span> High token consumption per request</li>
                                <li className="flex items-center gap-2"><span className="text-red-400">×</span> High end-to-end generation latency</li>
                                <li className="flex items-center gap-2"><span className="text-red-400">×</span> Slow initial response time (20s+)</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.15 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-white/10 border-l-2 border-l-[#E5C07B] shadow-xl"
                        >
                            <div className="flex items-center gap-2.5 mb-3">
                                <Zap size={16} className="text-[#E5C07B]" />
                                <h3 className="font-semibold text-white text-sm">Engineering Decisions</h3>
                            </div>
                            <p className="text-xs text-zinc-300 font-light leading-relaxed mb-2">
                                Migrated to an <strong className="text-white">asynchronous, event-driven</strong> FastAPI worker model.
                            </p>
                            <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                Employed compact JSON schemas for LLM compliance and parallelized Imagen/TTS calls.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column (Architecture Flow) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#121212] border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center gap-2.5 mb-6">
                            <GitMerge size={16} className="text-[#E5C07B]" />
                            <h3 className="font-semibold text-white text-sm">Architecture Flow</h3>
                        </div>

                        <div className="flex flex-col items-center">
                            {flowSteps.map((step, idx) => (
                                <div key={step.title} className="w-full flex flex-col items-center">
                                    <div className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-3.5 text-center group hover:bg-[#E5C07B]/5 hover:border-[#E5C07B]/40 transition-colors">
                                        <div className="text-xs font-semibold text-white group-hover:text-[#E5C07B] transition-colors">{step.title}</div>
                                        <div className="text-[10px] text-zinc-500 mt-0.5 font-mono uppercase tracking-widest">{step.desc}</div>
                                    </div>

                                    {idx < flowSteps.length - 1 && (
                                        <div className="h-4 w-px bg-gradient-to-b from-[#E5C07B]/40 to-transparent my-1"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
