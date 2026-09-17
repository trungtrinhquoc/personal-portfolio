'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Server, Database, Cpu } from 'lucide-react'

const capabilities = [
    {
        icon: <Search size={20} />,
        title: 'Root Cause Analysis',
        description: 'Experience investigating and fixing complex bugs for enterprise clients. Deep-diving into thread dumps, logs, and runtime behavior to identify systemic issues.',
        tags: ['Enterprise Java', 'Bug Investigation'],
    },
    {
        icon: <Server size={20} />,
        title: 'High-Performance APIs',
        description: 'Designing RESTful APIs with FastAPI and .NET 8 — focusing on throughput, low latency, and clean contract design for both internal services and third-party integrations.',
        tags: ['FastAPI', '.NET 8', 'RESTful Design'],
    },
    {
        icon: <Database size={20} />,
        title: 'Database Optimization',
        description: 'Managing complex data flows across PostgreSQL and SQL Server. Query optimization, vector indexing (FAISS), and schema design for production workloads.',
        tags: ['PostgreSQL', 'SQL Server', 'FAISS Vector DB'],
    },
    {
        icon: <Cpu size={20} />,
        title: 'Concurrency & Async Processing',
        description: 'Ensuring thread-safe, non-blocking operations for heavy AI workloads. Async Python workers, concurrent scene generation, and background multimodal processing pipelines.',
        tags: ['Async Python', 'Thread Safety', 'Concurrent Workers'],
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
    }),
}

export default function BackendEngineering() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="backend" className="section-padding bg-black/20 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full"></div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Dual-Threat Capability</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 tracking-tight mb-4">
                        Backend Architecture &amp; <span className="font-serif italic text-gradient-gold">Reliability</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-3xl font-light">
                        Production AI requires a solid foundation. Combining deep AI engineering with battle-tested enterprise backend principles.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilities.map((cap, idx) => (
                        <motion.div
                            key={cap.title}
                            custom={idx}
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="glass-card p-6 sm:p-8"
                        >
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5C07B]">
                                    {cap.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-gray-100 mb-2">{cap.title}</h3>
                                    <p className="text-sm text-gray-400 font-light leading-relaxed mb-5">{cap.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {cap.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#E5C07B] bg-[#E5C07B]/10 border border-[#E5C07B]/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
