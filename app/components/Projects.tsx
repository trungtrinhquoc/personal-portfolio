'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, X, ArrowRight, Eye, ZoomIn, Layers } from 'lucide-react'
import Image from 'next/image'

interface ProjectItem {
    title: string
    category: string
    desc: string
    tags: string[]
    metric: string
    github?: string
    details: string
    image?: string
    imageTitle?: string
}

const projects: ProjectItem[] = [
    {
        title: 'FUOJT – OJT Management Ecosystem',
        category: 'AI Engineer',
        desc: 'AI-assisted screening workflow and multimodal document-processing pipeline for automated student internship management.',
        tags: ['C# .NET 9', 'PostgreSQL', 'Gemini API', 'TypeScript'],
        metric: 'Candidate evaluation automation',
        github: 'https://github.com/trungtrinhquoc',
        details: 'Key Highlights:\n- Developed an AI-assisted candidate screening workflow combining format validation with Gemini-based candidate-job suitability assessment.\n- Built a multimodal document-processing pipeline for raw text, PDF, and Word documents; designed strict JSON output schemas for automated form completion and downstream recruitment workflows.',
        image: '/fuojt-pipeline.png',
        imageTitle: 'FUOJT – AI-Assisted OJT Management Pipeline'
    },
    {
        title: 'Mini RAG System',
        category: 'AI Engineer',
        desc: 'Complete retrieval-augmented generation engine orchestrating PDF ingestion, vector search, and context-grounded synthesis.',
        tags: ['Python', 'FastAPI', 'OpenAI API', 'FAISS', 'Hugging Face'],
        metric: 'Vector search top-k=5 retrieval',
        github: 'https://github.com/trungtrinhquoc',
        details: 'Key Highlights:\n- Engineered a complete RAG pipeline via FastAPI, orchestrating PDF ingestion, text extraction, and chunk splitting.\n- Generated embeddings via OpenAI, stored in FAISS for fast similarity search.\n- Top-k = 5 chunks passed as context into GPT-4o prompt to synthesize accurate, context-grounded answers without hallucination.',
        image: '/mini-rag-pipeline.png',
        imageTitle: 'Mini RAG System for Document Question Answering – Pipeline'
    },
    {
        title: 'RetailX – Multi-tenant Sales & HR Ecosystem',
        category: 'AI & Fullstack Engineer',
        desc: 'Web-based platform designed to help retail stores and SMEs manage sales, inventory, HR, and financial reports with AI analytics.',
        tags: ['ASP.NET Core MVC', 'SQL Server', 'OpenAI API', 'JavaScript'],
        metric: 'AI Financial Analysis & Strategy',
        github: 'https://github.com/trungtrinhquoc/RetailX',
        details: 'Key Highlights:\n- Developed an AI chatbot that helps users analyze revenue, costs, and profits, providing real-time insights and actionable recommendations.\n- Designed AI prompts to process financial data and generate tailored business strategies.',
        image: '/retailx-pipeline.png',
        imageTitle: 'RetailX – Multi-tenant Sales & HR Ecosystem Pipeline'
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
    const [selected, setSelected] = useState<ProjectItem | null>(null)
    const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

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
                                <div className="text-xs font-semibold text-[#E5C07B] tracking-wide mb-2">{proj.category}</div>
                                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#E5C07B] transition-colors leading-snug">{proj.title}</h3>
                                <p className="text-zinc-400 text-xs leading-relaxed mb-4 font-light">{proj.desc}</p>

                                {/* Project Image Preview (if available) */}
                                {proj.image && (
                                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 mb-4 bg-[#0a0a0a] group/img">
                                        <Image
                                            src={proj.image}
                                            alt={proj.imageTitle || proj.title}
                                            fill
                                            className="object-contain p-1 group-hover/img:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors flex items-center justify-center">
                                            <span className="opacity-0 group-hover/img:opacity-100 transition-opacity inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E5C07B] text-[#0a0a0a] text-[10px] font-semibold shadow-md">
                                                <ZoomIn size={12} /> View Pipeline
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="px-2.5 py-1 text-[11px] font-medium text-zinc-300 bg-white/[0.04] border border-white/10 rounded-lg">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                                    <span className="text-[11px] text-zinc-400 font-serif italic">{proj.metric}</span>
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
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
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
                            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#E5C07B]/30 shadow-2xl z-10"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-5 right-5 text-zinc-400 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>

                            <div className="text-xs font-semibold text-[#E5C07B] tracking-wide mb-1.5">{selected.category}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{selected.title}</h3>
                            <p className="text-zinc-300 text-xs leading-relaxed mb-4 font-light">{selected.desc}</p>

                            {/* Modal Diagram Image */}
                            {selected.image && (
                                <div className="mb-5 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] p-2">
                                    <div className="text-[11px] font-semibold text-zinc-300 px-2 py-1 mb-1.5 flex items-center gap-1.5">
                                        <Eye size={13} className="text-[#E5C07B]" />
                                        <span>{selected.imageTitle || 'Architecture Pipeline'}</span>
                                    </div>
                                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
                                        <img
                                            src={selected.image}
                                            alt={selected.imageTitle || selected.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 mb-5">
                                <div className="text-xs text-[#E5C07B] font-semibold uppercase tracking-wider mb-2">Technical Overview</div>
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
