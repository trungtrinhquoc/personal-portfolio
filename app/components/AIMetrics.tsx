'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Activity, Zap, Clock } from 'lucide-react'

const metrics = [
    {
        icon: Activity,
        category: 'TOKEN OPTIMIZATION',
        title: 'LLM token reduction',
        before: '850 tokens',
        after: '480 tokens per request',
        percentage: '44%',
        progress: 44,
    },
    {
        icon: Clock,
        category: 'LATENCY ENGINEERING',
        title: 'Generation latency drop',
        before: '49s',
        after: '36s end-to-end',
        percentage: '27%',
        progress: 27,
    },
    {
        icon: Zap,
        category: 'UX OPTIMIZATION',
        title: 'Time-to-Interaction',
        before: '20s',
        after: '8s first response',
        percentage: '60%',
        progress: 60,
    }
]

export default function AIMetrics() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section className="section-padding bg-black/20 border-y border-white/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#E5C07B]/30 rounded-full mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5C07B] animate-pulse"></span>
                        <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest">Production Impact</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white tracking-tight mb-3">
                        Measurable Results
                    </h2>
                    <p className="text-gray-400 font-light text-sm sm:text-base">
                        Real numbers from production systems — not just benchmarks.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {metrics.map((m, i) => {
                        const Icon = m.icon
                        return (
                            <motion.div
                                key={m.title}
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="glass-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:border-[#E5C07B]/30 transition-all"
                            >
                                <div className="flex items-center gap-5 md:w-1/3">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-[#E5C07B] transition-colors flex-shrink-0">
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">{m.category}</div>
                                        <div className="text-white font-semibold">{m.title}</div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 flex items-center gap-4">
                                    <div className="flex-1 h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${m.progress}%` } : {}}
                                            transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-yellow-700 via-[#E5C07B] to-yellow-200"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/3 w-full">
                                    <div className="text-xs font-mono text-gray-500 text-right">
                                        {m.before} → <strong className="text-gray-300 font-mono">{m.after}</strong>
                                    </div>
                                    <div className="text-3xl font-bold font-serif italic text-white group-hover:text-[#E5C07B] transition-colors">
                                        {m.percentage}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.5 }}
                    className="mt-6 text-[11px] font-mono text-gray-600 tracking-widest uppercase"
                >
                    * Measured on internal production systems • 2024-2025
                </motion.div>
            </div>
        </section>
    )
}
