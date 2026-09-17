'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Linkedin, Github, Cpu, Eye, Server, GraduationCap } from 'lucide-react'

const capabilities = [
    {
        icon: Cpu,
        title: 'Multimodal AI & LLM Systems',
        desc: 'Building production AI pipelines (Text → Image → Audio) with GPT-4o, Vertex AI, and Cloud TTS. Expert in prompt optimization (-44% tokens) and latency reduction.',
    },
    {
        icon: Eye,
        title: 'Industrial Computer Vision',
        desc: 'Developing specialized CV defect detection and anomaly inspection applications with Python, OpenCV, and YOLO in automotive manufacturing.',
    },
    {
        icon: Server,
        title: 'Backend Engineering & RAG',
        desc: 'Engineering high-performance async backends with Python (FastAPI), C# .NET 9, and Java. Building RAG search engines with FAISS and PostgreSQL.',
    },
]

// Framer motion variants for smooth, sequenced staggered animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
}

const slideRightVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
}

export default function AboutMe() {
    return (
        <section id="about" className="relative py-24 overflow-hidden bg-transparent">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E5C07B]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Changed from max-w-7xl to max-w-5xl for much tighter, harmonious proportions */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch"
                >

                    {/* Left: Bio & Education Card */}
                    <motion.div
                        variants={slideRightVariants}
                        className="lg:col-span-2 flex flex-col justify-between p-6 sm:p-8 rounded-[24px] bg-[#121212] border border-white/10 shadow-xl relative overflow-hidden group hover:border-[#E5C07B]/30 transition-all duration-500"
                    >
                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#E5C07B]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#E5C07B]/20 transition-all duration-500" />

                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C07B] animate-pulse" />
                                <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">Who I am</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-serif italic text-white mb-5">
                                About Me
                            </h2>

                            <p className="text-zinc-300 leading-relaxed font-light text-[13px] sm:text-sm mb-4">
                                <strong className="text-white font-medium">FPT University</strong> graduate holding a <strong className="text-white font-medium">Bachelor of Information Technology</strong> (Specialization: <span className="text-[#E5C07B] font-medium">Software Engineering</span>). Achieved GPA 8.2/10 and 30% Academic Scholarship.
                            </p>

                            <p className="text-zinc-400 leading-relaxed font-light text-[13px] sm:text-sm mb-4">
                                Beyond running notebooks, I build <strong className="text-zinc-200">production-grade AI systems</strong>. Focusing on real-world reliability, prompt engineering, and high-performance backend architecture.
                            </p>
                        </div>

                        {/* Education Badge */}
                        <div className="my-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#E5C07B]/10 border border-[#E5C07B]/20 flex items-center justify-center text-[#E5C07B] flex-shrink-0">
                                <GraduationCap size={16} />
                            </div>
                            <div>
                                <div className="text-white font-medium text-[13px]">IT Bachelor</div>
                                <div className="text-[11px] text-zinc-400 mt-0.5">Software Engineering (2022-2026)</div>
                            </div>
                        </div>

                        {/* Contact Info Footer */}
                        <div className="flex flex-col gap-2.5 pt-5 border-t border-white/10 text-[12px] text-zinc-400">
                            <div className="flex items-center gap-2.5">
                                <MapPin size={14} className="text-[#E5C07B] flex-shrink-0" />
                                <span>Da Nang, Vietnam <span className="text-[#E5C07B] text-[10px] font-mono font-medium ml-1">(Open to Remote)</span></span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Mail size={14} className="text-[#E5C07B] flex-shrink-0" />
                                <a href="mailto:trinhquoctrung10504@gmail.com" className="hover:text-white transition-colors truncate">trinhquoctrung10504@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                                <a href="https://linkedin.com/in/trungtrinh10504" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-zinc-400 hover:text-[#E5C07B] transition-colors"><Linkedin size={13} /> LinkedIn</a>
                                <span className="opacity-30">•</span>
                                <a href="https://github.com/trungtrinhquoc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-zinc-400 hover:text-[#E5C07B] transition-colors"><Github size={13} /> GitHub</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Engineering Capabilities Cards */}
                    <div className="lg:col-span-3 flex flex-col justify-center gap-4">
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center justify-between mb-1"
                        >
                            <h3 className="text-lg font-bold text-white tracking-tight">
                                Core Capabilities
                            </h3>
                        </motion.div>

                        {capabilities.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <motion.div
                                    key={item.title}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.015, x: -3 }}
                                    className="p-5 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#E5C07B]/50 hover:bg-[#161616] hover:shadow-[0_0_20px_rgba(229,192,123,0.1)] transition-all duration-300 group flex items-start gap-4 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#E5C07B]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="w-10 h-10 rounded-[10px] bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:border-[#E5C07B]/50 group-hover:bg-[#E5C07B]/10 group-hover:text-[#E5C07B] group-hover:rotate-6 transition-all duration-300 flex-shrink-0 z-10">
                                        <Icon size={18} />
                                    </div>
                                    <div className="flex flex-col gap-1 z-10 relative">
                                        <h4 className="text-[15px] font-semibold text-white group-hover:text-[#E5C07B] transition-colors">{item.title}</h4>
                                        <p className="text-[13px] text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
