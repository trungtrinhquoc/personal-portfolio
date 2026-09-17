'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DollarSign, Clock, Layout, Radio } from 'lucide-react'

const philosophies = [
    {
        icon: <DollarSign size={22} />,
        title: 'Cost-aware design',
        body: 'LLM cost scales fast. Token optimization is the first engineering constraint, not an afterthought.',
    },
    {
        icon: <Clock size={22} />,
        title: 'Latency-aware architecture',
        body: 'Perceived speed matters more than perfect output. Users feel latency long before they judge quality.',
    },
    {
        icon: <Layout size={22} />,
        title: 'Structured output over free-form',
        body: "Predictability equals maintainability. Structured JSON from LLMs enables reliable downstream processing.",
    },
    {
        icon: <Radio size={22} />,
        title: 'Streaming-first mindset',
        body: 'Ship the text first. Generate media in the background. User experience starts before full completion.',
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
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full"></div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Principles</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white tracking-tight mb-4">
                        How I Think About AI Systems
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-light">
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
                            className="glass-card relative p-6 overflow-hidden group"
                        >
                            {/* Index number */}
                            <div className="text-3xl font-black text-white/5 absolute top-5 right-5 select-none leading-none font-mono">
                                {String(idx + 1).padStart(2, '0')}
                            </div>

                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-11 h-11 border border-[#E5C07B]/30 rounded-xl bg-[#E5C07B]/10 text-[#E5C07B] mb-5 shadow-md">
                                {item.icon}
                            </div>

                            <h3 className="text-base font-bold text-gray-100 mb-3 leading-snug">{item.title}</h3>
                            <p className="text-sm text-gray-400 font-light leading-relaxed">{item.body}</p>

                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5C07B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
