'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Server, Database, Wrench } from 'lucide-react'

const layers = [
    {
        icon: <Brain size={20} />,
        label: 'AI Layer',
        color: 'text-violet-400',
        accent: 'from-violet-500 to-indigo-500',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/25',
        glowColor: 'rgba(139,92,246,0.12)',
        items: [
            { name: 'OpenAI API · Gemini', desc: 'GPT-4o, function calling, structured output' },
            { name: 'RAG · Embeddings', desc: 'Retrieval-augmented generation, semantic chunking' },
            { name: 'FAISS · Pinecone', desc: 'Vector indexing, ANN search, top-k retrieval' },
            { name: 'LangChain · LlamaIndex', desc: 'LLM chains, document loaders, agent memory' },
            { name: 'HuggingFace · Fine-tuning', desc: 'Transformers, LoRA, open-source LLM adaptation' },
        ],
    },
    {
        icon: <Server size={20} />,
        label: 'Backend Layer',
        color: 'text-indigo-400',
        accent: 'from-indigo-500 to-blue-500',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/25',
        glowColor: 'rgba(99,102,241,0.12)',
        items: [
            { name: 'Python / FastAPI', desc: 'Async workers, REST APIs, AI integrations' },
            { name: 'Java / Spring MVC', desc: 'Enterprise backend, service layers' },
            { name: 'C# / ASP.NET Core', desc: 'MVC, Web API, multi-tenant apps' },
        ],
    },
    {
        icon: <Database size={20} />,
        label: 'Data Layer',
        color: 'text-blue-400',
        accent: 'from-blue-500 to-cyan-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/25',
        glowColor: 'rgba(59,130,246,0.12)',
        items: [
            { name: 'PostgreSQL / Supabase', desc: 'Complex queries, indexing, row-level security' },
            { name: 'SQL Server', desc: 'Enterprise data management, stored procedures' },
            { name: 'Firebase / Redis', desc: 'Real-time data, caching, NoSQL storage' },
        ],
    },
    {
        icon: <Wrench size={20} />,
        label: 'DevOps & Tools',
        color: 'text-amber-400',
        accent: 'from-amber-500 to-orange-500',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/25',
        glowColor: 'rgba(245,158,11,0.10)',
        items: [
            { name: 'Git / GitHub', desc: 'Version control, branching, pull requests, CI workflows' },
            { name: 'Docker', desc: 'Containerisation, multi-stage builds, docker-compose' },
            { name: 'AWS', desc: 'EC2, S3, Lambda, API Gateway basics' },
            { name: 'Google Cloud', desc: 'Vertex AI, Cloud Run, GCS, Cloud TTS / Imagen' },
            { name: 'Linux / Shell', desc: 'Server setup, cron jobs, deployment scripting' },
        ],
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.55, ease: 'easeOut' },
    }),
}

export default function TechStack() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="tech-stack" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-widest mb-4">
                        Tech Expertise
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-100 tracking-tight mb-4">
                        Tech Stack
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                        A layered toolkit — from AI inference down to persistent storage.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
                    {layers.map((layer, idx) => (
                        <motion.div
                            key={layer.label}
                            custom={idx}
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className={`rounded-2xl bg-[#111827] border ${layer.border} p-5 sm:p-7 relative overflow-hidden group`}
                            style={{ boxShadow: `0 0 40px ${layer.glowColor}` }}
                        >
                            {/* Top gradient bar */}
                            <div className={`h-[3px] absolute top-0 left-0 right-0 bg-gradient-to-r ${layer.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                            {/* Header */}
                            <div className="flex items-center gap-3 mb-7">
                                <div
                                    className={`w-10 h-10 rounded-xl ${layer.bg} border ${layer.border} flex items-center justify-center ${layer.color}`}
                                >
                                    {layer.icon}
                                </div>
                                <h3 className={`font-bold text-base ${layer.color}`}>{layer.label}</h3>
                            </div>

                            {/* Items */}
                            <div className="space-y-4">
                                {layer.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + idx * 0.1 + itemIdx * 0.07, duration: 0.4 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${layer.accent} flex-shrink-0`} />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-200 font-mono">{item.name}</div>
                                            <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
