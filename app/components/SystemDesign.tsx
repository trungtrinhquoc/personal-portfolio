'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Scale, Activity, DollarSign, Wrench, ShieldCheck, ArrowRight } from 'lucide-react'

const principles = [
    {
        icon: <Scale size={20} />,
        label: 'Scalability',
        desc: 'Systems that grow without rewrites.',
    },
    {
        icon: <Activity size={20} />,
        label: 'Observability',
        desc: 'If you can&apos;t measure it, you can&apos;t improve it.',
    },
    {
        icon: <DollarSign size={20} />,
        label: 'Cost control',
        desc: 'Efficiency embedded from day one.',
    },
    {
        icon: <Wrench size={20} />,
        label: 'Maintainability',
        desc: 'Code that future engineers can reason about.',
    },
    {
        icon: <ShieldCheck size={20} />,
        label: 'Fail-safe logic',
        desc: 'Graceful degradation over hard failures.',
    },
]

export default function SystemDesign() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="system-design" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <div className="glass-card p-8 sm:p-12 overflow-hidden relative border border-[#E5C07B]/20">
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="mb-10 text-center sm:text-left"
                        >
                            <div className="inline-flex items-center center sm:items-start gap-2 mb-3">
                                <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full"></div>
                                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Design Philosophy</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-100 tracking-tight leading-tight mb-4">
                                I design <span className="font-serif italic text-gradient-gold font-medium">systems</span>,<br />
                                not demos.
                            </h2>
                            <p className="text-gray-400 font-light text-sm sm:text-lg max-w-2xl mx-auto sm:mx-0">
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
                                    className="rounded-xl p-5 bg-white/5 border border-white/10 group hover:border-[#E5C07B]/40 transition-all"
                                >
                                    <div className="text-gray-500 group-hover:text-[#E5C07B] transition-colors mb-4">{p.icon}</div>
                                    <div className="font-bold text-sm text-gray-200 mb-2 flex items-center gap-1.5">
                                        <ArrowRight size={12} className="opacity-40 text-[#E5C07B] group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                                        {p.label}
                                    </div>
                                    <p
                                        className="text-[13px] font-light text-gray-400"
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
