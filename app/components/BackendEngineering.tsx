'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Server, Database, Cpu } from 'lucide-react'

const capabilities = [
    {
        icon: <Search size={20} />,
        title: 'Root Cause Analysis',
        description:
            'Experience investigating and fixing complex bugs for Japanese enterprise clients at FPT Software. Deep-diving into thread dumps, logs, and runtime behavior to identify systemic issues.',
        tags: ['Enterprise Java', 'Bug Investigation', 'FPT Software'],
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/25',
    },
    {
        icon: <Server size={20} />,
        title: 'High-Performance APIs',
        description:
            'Designing RESTful APIs with FastAPI and ASP.NET Core MVC — focusing on throughput, low latency, and clean contract design for both internal services and third-party integrations.',
        tags: ['FastAPI', 'ASP.NET Core MVC', 'RESTful Design'],
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/25',
    },
    {
        icon: <Database size={20} />,
        title: 'Database Optimization',
        description:
            'Managing complex data flows across Supabase (PostgreSQL), SQL Server, and Firebase. Query optimization, indexing strategies, and schema design for production workloads.',
        tags: ['PostgreSQL', 'SQL Server', 'Firebase'],
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/25',
    },
    {
        icon: <Cpu size={20} />,
        title: 'Concurrency & Async Processing',
        description:
            'Ensuring thread-safe, non-blocking operations for heavy AI workloads. Async Python workers, concurrent scene generation, and background media processing pipelines.',
        tags: ['Async Python', 'Thread Safety', 'Concurrent Workers'],
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/25',
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
        <section id="backend" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-8 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
                        Dual-Threat Capability
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-100 tracking-tight mb-4">
                        Backend Architecture &amp; Enterprise Reliability
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-3xl">
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
                            className={`rounded-2xl bg-[#111827] border ${cap.border} p-5 sm:p-7 group`}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`flex-shrink-0 w-11 h-11 rounded-xl ${cap.bg} border ${cap.border} flex items-center justify-center ${cap.color}`}
                                >
                                    {cap.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-bold text-gray-100 mb-2">{cap.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{cap.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {cap.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`px-2.5 py-1 rounded-md text-xs font-mono ${cap.bg} ${cap.color} border ${cap.border}`}
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
