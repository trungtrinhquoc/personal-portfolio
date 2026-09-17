'use client'

import { motion } from 'framer-motion'
import { Search, Server, Database, Cpu } from 'lucide-react'

const capabilities = [
    {
        icon: <Search size={18} />,
        title: 'Root Cause Analysis',
        description: 'Experience investigating and fixing complex bugs for enterprise clients. Deep-diving into thread dumps, logs, and runtime behavior to identify systemic issues.',
        tags: ['Enterprise Java', 'Bug Investigation'],
    },
    {
        icon: <Server size={18} />,
        title: 'High-Performance APIs',
        description: 'Designing RESTful APIs with FastAPI and .NET — focusing on throughput, low latency, and clean contract design for production services.',
        tags: ['FastAPI', '.NET 9', 'RESTful Design'],
    },
    {
        icon: <Database size={18} />,
        title: 'Database Optimization',
        description: 'Managing complex data flows across PostgreSQL and SQL Server. Query optimization, vector indexing (FAISS), and schema design for production workloads.',
        tags: ['PostgreSQL', 'SQL Server', 'FAISS Vector DB'],
    },
    {
        icon: <Cpu size={18} />,
        title: 'Concurrency & Async Processing',
        description: 'Ensuring thread-safe, non-blocking operations for heavy AI workloads. Async Python workers, concurrent scene generation, and background multimodal processing pipelines.',
        tags: ['Async Python', 'Thread Safety', 'Concurrent Workers'],
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

export default function BackendEngineering() {
    return (
        <section id="backend" className="relative py-20 overflow-hidden bg-transparent border-y border-white/5">
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
                        <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">Engineering Strength</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight mb-2">
                        Backend Architecture &amp; <span className="text-[#E5C07B]">Reliability</span>
                    </h2>
                    <p className="text-zinc-400 text-xs sm:text-sm max-w-xl font-light">
                        Combining deep AI engineering with battle-tested enterprise backend principles.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    {capabilities.map((cap) => (
                        <motion.div
                            key={cap.title}
                            variants={itemVariants}
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#E5C07B]/40 transition-all duration-300 shadow-xl"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#E5C07B]">
                                    {cap.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-semibold text-white mb-1.5">{cap.title}</h3>
                                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">{cap.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cap.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 rounded-md text-[10px] font-mono text-[#E5C07B] bg-[#E5C07B]/10 border border-[#E5C07B]/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
