'use client'

import { motion } from 'framer-motion'

const stacks = [
    {
        title: 'AI, Computer Vision & Machine Learning',
        desc: 'Industrial defect inspection, real-time edge inference optimization, and multimodal generative AI pipelines.',
        tools: ['Computer Vision', 'Object Detection', 'YOLOv8', 'PyTorch', 'ONNX Runtime', 'OpenCV (SIFT + RANSAC)', 'RAG', 'Generative AI', 'FAISS', 'Hugging Face']
    },
    {
        title: 'Frameworks & Programming Languages',
        desc: 'High-throughput async APIs, cross-platform desktop UI vision systems, and robust backend engineering.',
        tools: ['Python', 'FastAPI', 'PySide6 (Qt6)', 'C# / .NET 9', 'Java', 'SQL', 'TypeScript', 'JavaScript']
    },
    {
        title: 'Databases, Cloud & DevOps Tools',
        desc: 'Vector and relational database storage, containerization, LLM APIs, and developer toolchains.',
        tools: ['PostgreSQL', 'Supabase', 'SQL Server', 'Firebase', 'Docker', 'Git / GitHub', 'GPT-4o', 'Vertex AI Imagen', 'Google Cloud TTS']
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

export default function TechStack() {
    return (
        <section id="tech-stack" className="relative py-20 overflow-hidden bg-transparent">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">Capabilities</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight">
                        Technical Stack
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {stacks.map((stack) => (
                        <motion.div
                            key={stack.title}
                            variants={itemVariants}
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#E5C07B]/40 hover:bg-[#161616] transition-all duration-300 shadow-xl flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-base font-semibold text-white mb-2">{stack.title}</h3>
                                <p className="text-xs leading-relaxed text-zinc-400 font-light mb-5">{stack.desc}</p>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {stack.tools.map(t => (
                                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300 hover:text-[#E5C07B] hover:border-[#E5C07B]/40 transition-colors cursor-default">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
