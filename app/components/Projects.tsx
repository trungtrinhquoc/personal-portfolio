'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, X, ArrowRight } from 'lucide-react'

const projects = [
    {
        title: 'RetailX - Multi-tenant Sales & HR Ecosystem',
        category: 'AI Engineer',
        desc: 'Web-based platform designed to help retail stores and SMEs manage sales, inventory, HR, and financial reports with AI-driven analytics.',
        tags: ['ASP.NET Core MVC', 'SQL Server', 'OpenAI API', 'JavaScript/HTML/CSS'],
        metric: 'AI Financial Analysis & Strategy',
        github: 'https://github.com/trungtrinhquoc/RetailX',
        details: 'RetailX is a web-based platform designed to help retail stores, chains, and SMEs manage sales, inventory, human resources, and financial reports.\n\nKey Highlights:\n- Developed an AI chatbot that helps users analyze revenue, costs, and profits, providing real-time insights and actionable recommendations.\n- Designed AI prompts to process financial data and generate tailored business strategies.'
    },
    {
        title: 'Mini RAG System',
        category: 'AI Engineer',
        desc: "Built a complete RAG pipeline using FastAPI as the backend, OpenAI embeddings, and FAISS for fast nearest-neighbour retrieval.",
        tags: ['Python', 'FastAPI', 'OpenAI API', 'FAISS', 'Hugging Face'],
        metric: 'Optimized chunk splitting & retrieval',
        github: 'https://github.com/trungtrinhquoc',
        details: 'Built a complete RAG pipeline using FastAPI as the backend, OpenAI embeddings to vectorize document chunks, FAISS for fast nearest-neighbour retrieval, and GPT-4o to synthesise final answers from retrieved context.\nPDF ingestion → text extraction → chunk splitting, Embedding generation via OpenAI text, Vector storage and similarity search with FAISS, Top-k = 5 chunks passed as context into GPT-4o prompt.'
    },
    {
        title: 'FUOJT - OJT Management Ecosystem',
        category: 'AI Engineer',
        desc: "Built a Multimodal LLM pipeline that parses raw text and PDF/Word to extract structured fields and autofill job posting forms.",
        tags: ['C# .NET 9', 'PostgreSQL', 'Gemini API', 'TypeScript', 'JavaScript/HTML/CSS'],
        metric: 'Candidate evaluation automation',
        github: 'https://github.com/trungtrinhquoc',
        details: 'Combined basic format checks with Gemini API to automatically evaluate candidate suitability based on skills and job requirements. Built a Multimodal LLM pipeline that parses raw text and PDF/Word to extract structured fields and autofill job posting forms. Designed and optimized domain-specific prompts to guide LLMs in generating accurate candidate evaluations and strict JSON responses.'
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
}

export default function Projects() {
    const [selected, setSelected] = useState<typeof projects[0] | null>(null)

    return (
        <section id="projects" className="relative py-20 overflow-hidden bg-transparent">
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
                        <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">Featured Work</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight">
                        Personal Projects
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((proj) => (
                        <motion.div
                            key={proj.title}
                            variants={itemVariants}
                            whileHover={{ y: -4, scale: 1.01 }}
                            onClick={() => setSelected(proj)}
                            className="p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#E5C07B]/40 hover:bg-[#161616] cursor-pointer group flex flex-col justify-between transition-all duration-300 shadow-xl"
                        >
                            <div>
                                <div className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest mb-2">{proj.category}</div>
                                <h3 className="text-base font-semibold text-white mb-2.5 group-hover:text-[#E5C07B] transition-colors leading-snug">{proj.title}</h3>
                                <p className="text-zinc-400 text-xs leading-relaxed mb-5 font-light">{proj.desc}</p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="px-2 py-0.5 text-[10px] font-mono text-zinc-300 bg-white/[0.04] border border-white/10 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                                    <span className="text-[11px] text-zinc-500 font-serif italic">{proj.metric}</span>
                                    <ArrowRight size={14} className="text-[#E5C07B] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#E5C07B]/30 shadow-2xl z-10"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-5 right-5 text-zinc-400 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>

                            <div className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest mb-1.5">{selected.category}</div>
                            <h3 className="text-xl font-semibold text-white mb-3">{selected.title}</h3>
                            <p className="text-zinc-300 text-xs leading-relaxed mb-5 font-light">{selected.desc}</p>

                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 mb-5">
                                <div className="text-[10px] text-[#E5C07B] font-mono uppercase tracking-widest mb-2 font-semibold">Technical Overview</div>
                                <div className="text-xs text-zinc-300 font-light leading-relaxed whitespace-pre-wrap">{selected.details}</div>
                            </div>

                            <div className="flex items-center gap-3">
                                {selected.github && (
                                    <a
                                        href={selected.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs hover:border-[#E5C07B] hover:text-[#E5C07B] transition-all"
                                    >
                                        <Github size={14} /> Repository
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
