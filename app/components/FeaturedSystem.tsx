'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    AlertCircle,
    ChevronDown,
    Layers,
    Zap,
    GitBranch,
    PlayCircle,
} from 'lucide-react'

const archFlow = [
    { label: 'User', sublabel: '(Mobile App)', color: 'border-gray-600 bg-gray-800/60', textColor: 'text-gray-200' },
    { label: 'FastAPI', sublabel: 'Validation & Routing', color: 'border-indigo-500/50 bg-indigo-500/10', textColor: 'text-indigo-300' },
    { label: 'GPT-4o', sublabel: 'Structured JSON Output', color: 'border-violet-500/50 bg-violet-500/10', textColor: 'text-violet-300' },
    { label: 'Async Workers', sublabel: '5 scenes concurrently', color: 'border-blue-500/50 bg-blue-500/10', textColor: 'text-blue-300' },
    { label: 'Vertex Imagen', sublabel: 'Image generation', color: 'border-emerald-500/50 bg-emerald-500/10', textColor: 'text-emerald-300' },
    { label: 'Cloud TTS', sublabel: 'Audio synthesis', color: 'border-amber-500/50 bg-amber-500/10', textColor: 'text-amber-300' },
    { label: 'Progressive Streaming', sublabel: 'Delivered to client', color: 'border-indigo-500/50 bg-indigo-500/10', textColor: 'text-indigo-300' },
]

const engineeringDecisions = [
    {
        icon: <Zap size={18} />,
        title: 'Token Optimization',
        items: ['Compact prompt templates', 'Structured output design'],
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/20',
    },
    {
        icon: <GitBranch size={18} />,
        title: 'Concurrency',
        items: ['Async Python workers', 'Generate 5 scenes concurrently'],
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
    },
    {
        icon: <PlayCircle size={18} />,
        title: 'Streaming Strategy',
        items: ['Deliver text first', 'Multimedia generated in background'],
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
    }),
}

export default function FeaturedSystem() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="featured-system" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-8 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-widest mb-4">
                        Featured Case Study
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-100 tracking-tight mb-4">
                        Production AI Storytelling Pipeline
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-3xl">
                        A multimodal generation system powering a mobile application — from problem to architecture to measurable impact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left column: Problem + Engineering Decisions */}
                    <div className="space-y-8">
                        {/* Problem */}
                        <motion.div
                            custom={0}
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            className="rounded-2xl bg-[#111827] border border-indigo-500/20 p-5 sm:p-7"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                                    <AlertCircle size={18} className="text-red-400" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-100">The Problem</h3>
                            </div>

                            <div className="mb-5">
                                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                                    Mobile app needed to generate <span className="text-gray-200 font-medium">text, image, and audio</span> for stories spanning{' '}
                                    <span className="text-gray-200 font-medium">6–14 scenes each</span> — synchronously:
                                </p>
                                <div className="space-y-2">
                                    {[
                                        'High token cost per request',
                                        'High end-to-end generation latency',
                                        'Slow user interaction (20s+ wait)',
                                    ].map((issue) => (
                                        <div key={issue} className="flex items-start gap-2 text-sm text-red-400">
                                            <span className="mt-0.5 text-red-500 font-bold">×</span>
                                            <span>{issue}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Engineering Decisions */}
                        <motion.div
                            custom={1}
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            className="rounded-2xl bg-[#111827] border border-indigo-500/20 p-5 sm:p-7"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                                    <Layers size={18} className="text-indigo-400" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-100">Engineering Decisions</h3>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {engineeringDecisions.map((dec) => (
                                    <div
                                        key={dec.title}
                                        className={`rounded-xl p-4 ${dec.bg} border ${dec.border}`}
                                    >
                                        <div className={`flex items-center gap-2 ${dec.color} font-semibold text-sm mb-2`}>
                                            {dec.icon}
                                            {dec.title}
                                        </div>
                                        <ul className="space-y-1">
                                            {dec.items.map((item) => (
                                                <li key={item} className="text-gray-400 text-xs flex items-center gap-1.5">
                                                    <span className={`${dec.color} font-bold`}>→</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right column: Architecture */}
                    <motion.div
                        custom={2}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="rounded-2xl bg-[#111827] border border-indigo-500/20 p-5 sm:p-7 flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-7">
                            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                                <GitBranch size={18} className="text-indigo-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-100">Architecture Flow</h3>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center gap-0">
                            {archFlow.map((node, idx) => (
                                <div key={node.label} className="flex flex-col items-center w-full max-w-xs">
                                    {/* Node box */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.3 + idx * 0.08, duration: 0.4 }}
                                        className={`w-full rounded-xl border px-4 py-3 text-center ${node.color}`}
                                    >
                                        <div className={`font-bold text-sm ${node.textColor}`}>{node.label}</div>
                                        <div className="text-xs text-gray-500 mt-0.5">{node.sublabel}</div>
                                    </motion.div>

                                    {/* Arrow connector (except after last) */}
                                    {idx < archFlow.length - 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, scaleY: 0 }}
                                            animate={inView ? { opacity: 1, scaleY: 1 } : {}}
                                            transition={{ delay: 0.38 + idx * 0.08, duration: 0.3 }}
                                            className="flex flex-col items-center my-1"
                                            style={{ originY: 0 }}
                                        >
                                            <div className="w-[1px] h-5 bg-gradient-to-b from-indigo-500/60 to-violet-500/30" />
                                            <ChevronDown size={12} className="text-indigo-500/60 -mt-1" />
                                        </motion.div>
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
