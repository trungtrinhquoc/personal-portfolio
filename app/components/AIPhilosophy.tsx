'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DollarSign, Clock, Layout, Radio } from 'lucide-react'

const philosophies = [
    {
        icon: <DollarSign size={22} />,
        title: 'Cost-aware design',
        body: 'LLM cost scales fast. Token optimization is the first engineering constraint, not an afterthought.',
        accent: 'from-indigo-500 to-blue-500',
        glowColor: 'rgba(99,102,241,0.15)',
        borderColor: 'rgba(99,102,241,0.25)',
    },
    {
        icon: <Clock size={22} />,
        title: 'Latency-aware architecture',
        body: 'Perceived speed matters more than perfect output. Users feel latency long before they judge quality.',
        accent: 'from-violet-500 to-purple-600',
        glowColor: 'rgba(139,92,246,0.15)',
        borderColor: 'rgba(139,92,246,0.25)',
    },
    {
        icon: <Layout size={22} />,
        title: 'Structured output over free-form',
        body: "Predictability equals maintainability. Structured JSON from LLMs enables reliable downstream processing.",
        accent: 'from-purple-500 to-violet-600',
        glowColor: 'rgba(168,85,247,0.15)',
        borderColor: 'rgba(168,85,247,0.25)',
    },
    {
        icon: <Radio size={22} />,
        title: 'Streaming-first mindset',
        body: 'Ship the text first. Generate media in the background. User experience starts before full completion.',
        accent: 'from-blue-500 to-indigo-500',
        glowColor: 'rgba(59,130,246,0.15)',
        borderColor: 'rgba(59,130,246,0.25)',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
    }),
}

export default function AIPhilosophy() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="philosophy" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
                        Principles
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-100 tracking-tight mb-4">
                        How I Think About AI Systems
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                        Four engineering principles that guide every production AI decision I make.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {philosophies.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            custom={idx}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="relative rounded-2xl bg-[#111827] p-6 overflow-hidden group"
                            style={{
                                border: `1px solid ${item.borderColor}`,
                                boxShadow: `0 0 30px ${item.glowColor}`,
                            }}
                        >
                            {/* BG glow */}
                            <div
                                className={`absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-br ${item.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                            />

                            {/* Index number */}
                            <div className="text-5xl font-black text-gray-800/50 absolute top-4 right-5 select-none leading-none font-mono">
                                {String(idx + 1).padStart(2, '0')}
                            </div>

                            {/* Icon */}
                            <div
                                className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${item.accent} text-white mb-5 shadow-md`}
                            >
                                {item.icon}
                            </div>

                            <h3 className="text-base font-bold text-gray-100 mb-3 leading-snug">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>

                            {/* Bottom accent line */}
                            <div
                                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accent} opacity-30 group-hover:opacity-70 transition-opacity duration-300`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
