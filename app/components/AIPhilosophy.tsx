'use client'

import { motion } from 'framer-motion'
import { DollarSign, Clock, Layout, Radio } from 'lucide-react'

const philosophies = [
    {
        icon: <DollarSign size={18} />,
        title: 'Cost-aware design',
        body: 'LLM cost scales fast. Token optimization is the first engineering constraint, not an afterthought.',
    },
    {
        icon: <Clock size={18} />,
        title: 'Latency-aware architecture',
        body: 'Perceived speed matters more than perfect output. Users feel latency long before they judge quality.',
    },
    {
        icon: <Layout size={18} />,
        title: 'Structured output over free-form',
        body: "Predictability equals maintainability. Structured JSON from LLMs enables reliable downstream processing.",
    },
    {
        icon: <Radio size={18} />,
        title: 'Streaming-first mindset',
        body: 'Ship the text first. Generate media in the background. User experience starts before full completion.',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
}

export default function AIPhilosophy() {
    return (
        <section id="philosophy" className="relative py-20 overflow-hidden bg-transparent">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">Principles</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight mb-2">
                        How I Think About AI Systems
                    </h2>
                    <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto font-light">
                        Four core engineering principles guiding production AI choices.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {philosophies.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="p-5 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#E5C07B]/40 transition-all duration-300 relative group flex flex-col justify-between shadow-xl"
                        >
                            <div className="text-2xl font-black text-white/5 absolute top-4 right-4 select-none font-mono">
                                {String(idx + 1).padStart(2, '0')}
                            </div>

                            <div className="w-9 h-9 border border-[#E5C07B]/30 rounded-xl bg-[#E5C07B]/10 text-[#E5C07B] flex items-center justify-center mb-4">
                                {item.icon}
                            </div>

                            <h3 className="text-sm font-semibold text-white mb-2 leading-snug">{item.title}</h3>
                            <p className="text-xs text-zinc-400 font-light leading-relaxed">{item.body}</p>

                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5C07B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
