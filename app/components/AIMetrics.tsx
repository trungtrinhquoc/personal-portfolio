'use client'

import { motion } from 'framer-motion'
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
    return (
        <section className="relative py-20 overflow-hidden bg-transparent border-y border-white/5">
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
                        <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">Production Impact</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight mb-2">
                        Measurable Results
                    </h2>
                    <p className="text-zinc-400 font-light text-xs sm:text-sm">
                        Real performance optimization metrics from deployed production systems.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {metrics.map((m, i) => {
                        const Icon = m.icon
                        return (
                            <motion.div
                                key={m.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.15 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#E5C07B]/40 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 group shadow-xl"
                            >
                                <div className="flex items-center gap-4 md:w-1/3">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#E5C07B] transition-colors flex-shrink-0">
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-0.5">{m.category}</div>
                                        <div className="text-white text-sm font-semibold">{m.title}</div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 flex items-center gap-3">
                                    <div className="flex-1 h-1.5 bg-black/50 rounded-full overflow-hidden border border-white/5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${m.progress}%` }}
                                            viewport={{ once: false, amount: 0.15 }}
                                            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-yellow-700 via-[#E5C07B] to-yellow-200"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between md:justify-end gap-5 md:w-1/3 w-full">
                                    <div className="text-[11px] font-mono text-zinc-400 text-right">
                                        {m.before} → <strong className="text-white font-mono">{m.after}</strong>
                                    </div>
                                    <div className="text-2xl font-bold font-serif italic text-white group-hover:text-[#E5C07B] transition-colors">
                                        {m.percentage}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="mt-6 text-[10px] font-mono text-zinc-500 tracking-widest uppercase text-center sm:text-left">
                    * Measured on internal production systems • 2025-2026
                </div>
            </div>
        </section>
    )
}
