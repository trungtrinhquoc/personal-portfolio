'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Github, X, ArrowRight } from 'lucide-react'

// Condensed array data structure for the elegant style
const projects = [
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

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    const [selected, setSelected] = useState<typeof projects[0] | null>(null)

    return (
        <section id="projects" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full"></div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Featured Work</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white tracking-tight">
                        Personal Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={proj.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelected(proj)}
                            className="glass-card p-6 sm:p-8 cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-[11px] font-bold text-[#E5C07B] uppercase tracking-widest mb-2">{proj.category}</div>
                                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-gradient-gold transition-all">{proj.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{proj.desc}</p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="px-2.5 py-1 text-[11px] font-mono text-gray-300 bg-white/5 border border-white/10 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                    <span className="text-xs text-gray-500 font-serif italic">{proj.metric}</span>
                                    <ArrowRight size={16} className="text-[#E5C07B] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
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
                            className="glass-card relative w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-10 z-10"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="text-[11px] font-bold text-[#E5C07B] uppercase tracking-widest mb-2">{selected.category}</div>
                            <h3 className="text-3xl font-semibold text-white mb-4">{selected.title}</h3>
                            <p className="text-gray-300 leading-relaxed mb-6 font-light">{selected.desc}</p>

                            <div className="bg-black/30 border border-[#E5C07B]/20 rounded-xl p-5 mb-6 border-glow">
                                <div className="text-xs text-[#E5C07B] font-mono uppercase tracking-widest mb-2">Technical Details</div>
                                <div className="text-sm text-gray-300 font-light leading-relaxed whitespace-pre-wrap">{selected.details}</div>
                            </div>

                            <div className="flex items-center gap-4">
                                {selected.github && (
                                    <a
                                        href={selected.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm hover:border-[#E5C07B] hover:text-[#E5C07B] transition-all"
                                    >
                                        <Github size={16} /> Code Repository
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
