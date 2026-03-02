'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Scale, Activity, DollarSign, Wrench, ShieldCheck, ArrowRight } from 'lucide-react'

const principles = [
    {
        icon: <Scale size={20} />,
        label: 'Scalability',
        desc: 'Systems that grow without rewrites.',
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/20',
    },
    {
        icon: <Activity size={20} />,
        label: 'Observability',
        desc: 'If you can&apos;t measure it, you can&apos;t improve it.',
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
    },
    {
        icon: <DollarSign size={20} />,
        label: 'Cost control',
        desc: 'Efficiency embedded from day one.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
    },
    {
        icon: <Wrench size={20} />,
        label: 'Maintainability',
        desc: 'Code that future engineers can reason about.',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
    },
    {
        icon: <ShieldCheck size={20} />,
        label: 'Fail-safe logic',
        desc: 'Graceful degradation over hard failures.',
        color: 'text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/20',
    },
]

export default function SystemDesign() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="system-design" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <div className="rounded-2xl bg-[#111827] border border-indigo-500/20 p-8 sm:p-12 overflow-hidden relative">
                    {/* Background large text */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-black text-white/[0.015] select-none whitespace-nowrap pointer-events-none"
                        aria-hidden="true"
                    >
                        SYSTEMS
                    </div>

                    {/* Glow orb */}
                    <div
                        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
                            filter: 'blur(40px)',
                        }}
                    />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="mb-10"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-5">
                                Design Philosophy
                            </div>
                            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-gray-100 tracking-tight leading-tight mb-4">
                                I design{' '}
                                <span className="text-gradient">systems</span>,<br />
                                not demos.
                            </h2>
                            <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
                                Every architectural decision is made with production constraints in mind — not just for the happy path.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {principles.map((p, idx) => (
                                <motion.div
                                    key={p.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    className={`rounded-xl p-5 ${p.bg} border ${p.border} group`}
                                >
                                    <div className={`${p.color} mb-3`}>{p.icon}</div>
                                    <div className={`font-bold text-sm ${p.color} mb-1.5 flex items-center gap-1`}>
                                        <ArrowRight size={12} className="opacity-60" />
                                        {p.label}
                                    </div>
                                    <p
                                        className="text-xs text-gray-500"
                                        dangerouslySetInnerHTML={{ __html: p.desc }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
