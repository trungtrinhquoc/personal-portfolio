'use client'

import { motion } from 'framer-motion'
import { Scale, Activity, DollarSign, Wrench, ShieldCheck, ArrowRight } from 'lucide-react'

const principles = [
    {
        icon: <Scale size={16} />,
        label: 'Scalability',
        desc: 'Systems engineered to scale without rewrites.',
    },
    {
        icon: <Activity size={16} />,
        label: 'Observability',
        desc: 'Metrics and logging built in from day one.',
    },
    {
        icon: <DollarSign size={16} />,
        label: 'Cost control',
        desc: 'Token and hardware efficiency embedded.',
    },
    {
        icon: <Wrench size={16} />,
        label: 'Maintainability',
        desc: 'Code that future engineers can reason about.',
    },
    {
        icon: <ShieldCheck size={16} />,
        label: 'Fail-safe logic',
        desc: 'Graceful degradation over hard failures.',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
}

export default function SystemDesign() {
    return (
        <section id="system-design" className="relative py-20 overflow-hidden bg-transparent">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="p-6 sm:p-10 rounded-3xl bg-[#121212] border border-[#E5C07B]/30 shadow-2xl"
                >
                    <div className="mb-8 text-center sm:text-left">
                        <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">Design Philosophy</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight leading-tight mb-2">
                            I design <span className="text-[#E5C07B]">production systems</span>, not just demos.
                        </h2>
                        <p className="text-zinc-400 font-light text-xs sm:text-sm max-w-xl">
                            Architectural decisions built around real engineering constraints.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5"
                    >
                        {principles.map((p) => (
                            <motion.div
                                key={p.label}
                                variants={itemVariants}
                                whileHover={{ y: -3, scale: 1.01 }}
                                className="rounded-2xl p-4 bg-white/[0.03] border border-white/10 group hover:border-[#E5C07B]/40 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="text-zinc-500 group-hover:text-[#E5C07B] transition-colors mb-3">{p.icon}</div>
                                    <div className="font-semibold text-xs text-white mb-1 flex items-center gap-1">
                                        <ArrowRight size={10} className="opacity-40 text-[#E5C07B] group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                                        {p.label}
                                    </div>
                                    <p className="text-[11px] font-light text-zinc-400 leading-normal">{p.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
