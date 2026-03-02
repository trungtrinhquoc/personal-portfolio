'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingDown, Timer, MousePointerClick, ArrowRight } from 'lucide-react'

const metrics = [
    {
        icon: TrendingDown,
        category: 'Token Optimization',
        value: '44%',
        pct: 44,
        label: 'LLM token reduction',
        before: '850 tokens',
        after: '480 tokens',
        unit: 'per request',
        color: 'text-indigo-300',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/25',
        barColor: 'bg-indigo-400',
    },
    {
        icon: Timer,
        category: 'Latency Engineering',
        value: '27%',
        pct: 27,
        label: 'Generation latency drop',
        before: '49s',
        after: '36s',
        unit: 'end-to-end',
        color: 'text-violet-300',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/25',
        barColor: 'bg-violet-400',
    },
    {
        icon: MousePointerClick,
        category: 'UX Optimization',
        value: '60%',
        pct: 60,
        label: 'Time-to-Interaction',
        before: '20s',
        after: '8s',
        unit: 'first response',
        color: 'text-purple-300',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/25',
        barColor: 'bg-purple-400',
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function AIMetrics() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="metrics" className="section-padding">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3">
                        Production Impact
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 tracking-tight mb-2">
                        Measurable Results
                    </h2>
                    <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                        Real numbers from production systems — not benchmarks.
                    </p>
                </motion.div>

                {/* Metric rows */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="flex flex-col gap-2.5"
                >
                    {metrics.map((m) => {
                        const Icon = m.icon
                        return (
                            <motion.div
                                key={m.category}
                                variants={itemVariants}
                                className={`group flex items-center gap-4 sm:gap-5 px-4 sm:px-5 py-3.5 rounded-xl border ${m.border} ${m.bg} hover:bg-white/[0.04] transition-colors duration-200`}
                            >
                                {/* Icon */}
                                <div className={`flex-shrink-0 w-8 h-8 rounded-lg border ${m.border} flex items-center justify-center ${m.color} opacity-80`}>
                                    <Icon size={15} />
                                </div>

                                {/* Category */}
                                <div className="flex-shrink-0 w-36 hidden sm:block">
                                    <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-0.5">{m.category}</div>
                                    <div className="text-xs text-gray-400 font-medium">{m.label}</div>
                                </div>

                                {/* Progress bar */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5 mb-1.5">
                                        <span className="text-xs text-gray-600 font-mono sm:hidden">{m.label}</span>
                                        <div className="ml-auto flex items-center gap-1 text-[11px] font-mono">
                                            <span className="text-gray-600">{m.before}</span>
                                            <ArrowRight size={9} className="text-gray-700" />
                                            <span className={`${m.color}`}>{m.after}</span>
                                            <span className="text-gray-700 ml-0.5">{m.unit}</span>
                                        </div>
                                    </div>
                                    <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
                                        <motion.div
                                            className={`h-full rounded-full ${m.barColor} opacity-75`}
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${m.pct}%` } : { width: 0 }}
                                            transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
                                        />
                                    </div>
                                </div>

                                {/* Value */}
                                <div className={`flex-shrink-0 text-xl font-bold ${m.color} tracking-tight w-12 text-right`}>
                                    {m.value}
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="mt-5 text-[11px] text-gray-700 font-mono"
                >
                    * Measured on internal production systems · 2024–2025
                </motion.p>
            </div>
        </section>
    )
}
