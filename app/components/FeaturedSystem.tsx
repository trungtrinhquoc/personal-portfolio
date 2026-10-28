'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, GitMerge, Zap, Eye, Sparkles } from 'lucide-react'

const systems = [
    {
        id: 'vision',
        name: 'Industrial Computer Vision',
        icon: Eye,
        badge: 'Automotive Edge AI',
        title: 'Wire-Harness Defect Inspection & Alignment',
        subtitle: 'PySide6 desktop vision application engineered for high-precision automotive assembly with sub-pixel alignment and real-time ONNX CPU inference.',
        problem: {
            title: 'Manufacturing Bottlenecks',
            desc: 'Real-time production line inspection required sub-pixel defect detection under harsh conditions:',
            points: [
                'Perspective distortion & mechanical vibrations causing false positives',
                'Standard deep learning models exceeding line cycle time on production CPUs',
                'Hardware trigger sensors prone to mechanical wear and electrical noise'
            ]
        },
        decisions: {
            title: 'Vision Engineering Solutions',
            summary: 'Engineered a resilient PySide6 (Qt6) desktop AI vision suite combining classical CV and deep learning:',
            detail: 'SIFT + RANSAC Homography alignment against Golden Reference, YOLOv8 deployed on ONNX Runtime (~12ms/frame on CPU), and software-driven optical debounced triggering.'
        },
        flow: [
            { title: 'Optical Trigger Detection', desc: 'OpenCV & temporal debounce replaces physical sensor' },
            { title: 'Golden Reference Alignment', desc: 'SIFT + RANSAC Homography perspective correction' },
            { title: 'YOLOv8 ONNX CPU Engine', desc: '~12 ms/frame low-latency neural defect detection' },
            { title: 'PySide6 Real-time UI Verdict', desc: 'Instant pass/fail inspection feedback & telemetry' },
        ]
    },
    {
        id: 'genai',
        name: 'Multimodal GenAI Pipeline',
        icon: Sparkles,
        badge: 'Mobile App GenAI',
        title: 'Production AI Storytelling Pipeline',
        subtitle: 'A multimodal generation system powering a mobile application — from core latency constraints to event-driven execution.',
        problem: {
            title: 'Generation Bottlenecks',
            desc: 'Generating text, image, and audio for stories spanning 6–14 scenes each introduced bottleneck constraints:',
            points: [
                'High token consumption per request (850+ tokens)',
                'High end-to-end generation latency (49s per request)',
                'Slow initial response time (20s+ Time-to-Interaction)'
            ]
        },
        decisions: {
            title: 'Architectural Decisions',
            summary: 'Migrated to an asynchronous, event-driven FastAPI worker model:',
            detail: 'Employed compact JSON schemas (-44% tokens), concurrent scene generation via async workers (-27% latency), and progressive text-first streaming (-60% TTI).'
        },
        flow: [
            { title: 'User (Mobile App)', desc: 'Initiates personalized story request' },
            { title: 'FastAPI Validation & Routing', desc: 'Async task queue & worker orchestration' },
            { title: 'GPT-4o Structured Synthesis', desc: 'Compact strict JSON schema generation' },
            { title: 'Parallel Multimodal Streaming', desc: 'Concurrent Vertex AI Imagen + Cloud TTS' },
        ]
    }
]

export default function FeaturedSystem() {
    const [activeTab, setActiveTab] = useState(systems[0].id)
    const current = systems.find(s => s.id === activeTab) || systems[0]

    return (
        <section className="relative py-20 overflow-hidden bg-transparent">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C07B] animate-pulse" />
                            <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">System Architecture</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight mb-2">
                            Production <span className="text-[#E5C07B]">Architectures</span>
                        </h2>
                        <p className="text-zinc-400 font-light text-xs sm:text-sm max-w-xl">
                            Real-world AI architectures deployed to resolve manufacturing & mobile latency constraints.
                        </p>
                    </div>

                    {/* Tab Selector */}
                    <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/10 self-center sm:self-auto">
                        {systems.map(s => {
                            const Icon = s.icon
                            const isActive = s.id === activeTab
                            return (
                                <button
                                    key={s.id}
                                    onClick={() => setActiveTab(s.id)}
                                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                                        isActive
                                            ? 'bg-[#E5C07B] text-[#0a0a0a] font-semibold shadow-lg'
                                            : 'text-zinc-400 hover:text-white'
                                    }`}
                                >
                                    <Icon size={14} />
                                    <span>{s.name}</span>
                                </button>
                            )
                        })}
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
                    >
                        {/* Left Column */}
                        <div className="lg:col-span-5 flex flex-col gap-5">
                            <div className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-white/10 border-l-2 border-l-red-500/60 shadow-xl">
                                <div className="flex items-center gap-2.5 mb-3">
                                    <AlertCircle size={16} className="text-red-400" />
                                    <h3 className="font-semibold text-white text-sm">{current.problem.title}</h3>
                                </div>
                                <p className="text-xs text-zinc-300 font-light leading-relaxed mb-3">
                                    {current.problem.desc}
                                </p>
                                <ul className="space-y-1.5 text-xs text-red-300/80 font-light">
                                    {current.problem.points.map((pt, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-red-400 flex-shrink-0">×</span>
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-white/10 border-l-2 border-l-[#E5C07B] shadow-xl">
                                <div className="flex items-center gap-2.5 mb-3">
                                    <Zap size={16} className="text-[#E5C07B]" />
                                    <h3 className="font-semibold text-white text-sm">{current.decisions.title}</h3>
                                </div>
                                <p className="text-xs text-zinc-300 font-light leading-relaxed mb-2">
                                    {current.decisions.summary}
                                </p>
                                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                    {current.decisions.detail}
                                </p>
                            </div>
                        </div>

                        {/* Right Column (Architecture Flow) */}
                        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#121212] border border-white/10 shadow-xl flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between gap-2.5 mb-2">
                                    <div className="flex items-center gap-2.5">
                                        <GitMerge size={16} className="text-[#E5C07B]" />
                                        <h3 className="font-semibold text-white text-sm">Architecture Flow</h3>
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#E5C07B] bg-[#E5C07B]/10 border border-[#E5C07B]/20">
                                        {current.badge}
                                    </span>
                                </div>
                                <div className="text-xs text-zinc-400 font-light mb-6">
                                    {current.subtitle}
                                </div>

                                <div className="flex flex-col items-center">
                                    {current.flow.map((step, idx) => (
                                        <div key={step.title} className="w-full flex flex-col items-center">
                                            <div className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-3.5 text-center group hover:bg-[#E5C07B]/5 hover:border-[#E5C07B]/40 transition-colors">
                                                <div className="text-xs font-semibold text-white group-hover:text-[#E5C07B] transition-colors">{step.title}</div>
                                                <div className="text-[10px] text-zinc-500 mt-0.5 font-mono uppercase tracking-widest">{step.desc}</div>
                                            </div>

                                            {idx < current.flow.length - 1 && (
                                                <div className="h-4 w-px bg-gradient-to-b from-[#E5C07B]/40 to-transparent my-1"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    )
}
