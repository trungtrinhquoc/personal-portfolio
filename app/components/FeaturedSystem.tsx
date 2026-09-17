'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertCircle, GitMerge, Zap } from 'lucide-react'

export default function FeaturedSystem() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    const flowSteps = [
        { title: 'User (Mobile App)', desc: 'Initiates request' },
        { title: 'FastAPI Validation & Routing', desc: 'Async task queue' },
        { title: 'GPT-4o', desc: 'Structured JSON Output' },
        { title: 'Parallel Execution', desc: 'Vertex AI Imagen + Cloud TTS' },
    ]

    return (
        <section className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
                        Production AI <span className="font-serif italic text-gradient-gold">Storytelling Pipeline</span>
                    </h2>
                    <p className="text-gray-400 font-light text-sm sm:text-base max-w-2xl">
                        A multimodal generation system powering a mobile application — from challenging problem constraints to a scalable architectural solution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="glass-card p-6 border-l-2 border-l-red-900/50 hover:border-l-red-500/50"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <AlertCircle size={18} className="text-red-400" />
                                <h3 className="font-semibold text-white">The Problem</h3>
                            </div>
                            <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">
                                The mobile app needed to synchronously generate <strong className="text-gray-200 font-medium">text, image, and audio</strong> for personalized stories spanning 6–14 scenes each. The initial approach faced massive bottlenecks:
                            </p>
                            <ul className="space-y-2 text-sm text-red-200/50 font-light">
                                <li className="flex items-center gap-2"><span className="text-red-500">×</span> High token cost per request</li>
                                <li className="flex items-center gap-2"><span className="text-red-500">×</span> High end-to-end generation latency</li>
                                <li className="flex items-center gap-2"><span className="text-red-500">×</span> Slow user interaction (20s+ wait)</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="glass-card p-6 border-l-2 border-l-[#E5C07B]/30 hover:border-l-[#E5C07B]"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Zap size={18} className="text-[#E5C07B]" />
                                <h3 className="font-semibold text-white">Engineering Decisions</h3>
                            </div>
                            <p className="text-sm text-gray-400 font-light leading-relaxed mb-3">
                                Migrated from a monolithic synchronous block to an <strong className="text-white">asynchronous, event-driven</strong> FastAPI worker model.
                            </p>
                            <p className="text-sm text-gray-400 font-light leading-relaxed">
                                Used structured prompt templates (strict JSON schemas) to ensure LLM compliance without verbose retry penalties, and parallelized the Imagen/TTS external API calls.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column (Architecture Flow) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:col-span-7 glass-card p-8 lg:p-10"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <GitMerge size={18} className="text-gray-500" />
                            <h3 className="font-semibold text-white">Architecture Flow</h3>
                        </div>

                        <div className="flex flex-col items-center">
                            {flowSteps.map((step, idx) => (
                                <div key={step.title} className="w-full flex flex-col items-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.4 + idx * 0.15 }}
                                        className="w-full sm:w-[80%] bg-white/5 border border-white/10 rounded-xl p-4 text-center group hover:bg-[#E5C07B]/5 hover:border-[#E5C07B]/40 transition-colors"
                                    >
                                        <div className="font-semibold text-white group-hover:text-[#E5C07B] transition-colors">{step.title}</div>
                                        <div className="text-xs text-gray-500 mt-1 font-mono uppercase tracking-widest">{step.desc}</div>
                                    </motion.div>

                                    {idx < flowSteps.length - 1 && (
                                        <div className="h-6 w-px bg-gradient-to-b from-white/20 to-transparent my-1"></div>
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
