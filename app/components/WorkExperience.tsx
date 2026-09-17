'use client'

import { motion } from 'framer-motion'

const timeline = [
    {
        role: 'AI Engineer',
        company: 'Dräxlmaier Automotive Vietnam',
        period: 'June 2026 — present',
        desc: 'Developing internal automation and industrial machine vision tools to streamline manufacturing.',
        highlights: [
            'Develop internal automation tools and scripts in Python to streamline daily manufacturing and engineering workflows.',
            'Build and deploy computer vision and image processing solutions to detect visual defects and anomalies on industrial products.',
            'Implement robust error-handling, data processing pipelines, and logical checks to maintain high production accuracy.'
        ]
    },
    {
        role: 'AI Engineer Intern',
        company: 'Open Web Technology Vietnam',
        period: 'August 2025 — March 2026',
        desc: 'Built production multimodal AI pipeline synthesizing stories into mobile app experiences.',
        highlights: [
            'Built production AI storytelling pipeline for mobile app, orchestrating GPT-4o (text), Vertex AI Imagen (images), and Cloud TTS (audio) to generate personalized children\'s stories.',
            'Integrated a multimodal AI pipeline (text → image → audio) while maintaining consistent character design across 6–14 scene story sequences.',
            'Token Optimization: Reduced consumption 44% (850→480 tokens) via compact prompt templates and structured output design',
            'Reduced generation latency 27% (49s→36s) by generating 5 scenes concurrently in Python with async workers progressive result streaming',
            'Improved user experience by reducing Time-to-Interaction 60% (20s→8s) by delivering text first while multimedia generated in the background'
        ]
    },
    {
        role: 'Java Developer',
        company: 'FPT Software',
        period: 'May 2025 — August 2025',
        desc: 'Collaborated with Japanese enterprise clients on system debugging, root-cause analysis, and feature maintenance.',
        highlights: [
            'Worked directly with Japanese enterprise clients when software bugs were reported.',
            'Investigated system behavior and identified root causes of reported bugs.',
            'Implemented bug fixes and verified system stability to ensure seamless application functionality.'
        ]
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

export default function WorkExperience() {
    return (
        <section id="experience" className="relative py-20 overflow-hidden bg-transparent">
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
                        <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">Career Path</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight">
                        Work Experience
                    </h2>
                </motion.div>

                <div className="relative pl-4 sm:pl-0">
                    <div className="absolute left-[20px] sm:left-1/2 sm:-translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#E5C07B]/40 via-[#E5C07B]/10 to-transparent" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                        className="flex flex-col gap-8"
                    >
                        {timeline.map((item, i) => (
                            <motion.div
                                key={item.company}
                                variants={itemVariants}
                                className={`relative w-full flex flex-col sm:flex-row items-start ${i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
                            >
                                <div className="absolute left-[15px] sm:left-1/2 sm:-translate-x-1/2 top-2.5 w-2.5 h-2.5 rounded-full bg-[#E5C07B] shadow-[0_0_10px_#E5C07B]" />

                                <div className={`ml-10 sm:ml-0 sm:w-[46%] p-5 sm:p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#E5C07B]/40 transition-all duration-300 shadow-xl ${i % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                                    <div className="text-[11px] font-mono text-[#E5C07B] mb-1.5">{item.period}</div>
                                    <h3 className="text-base font-semibold text-white leading-snug mb-0.5">{item.role}</h3>
                                    <div className="text-xs font-medium text-zinc-400 mb-3">{item.company}</div>

                                    <ul className="flex flex-col gap-2 pt-3 border-t border-white/10">
                                        {item.highlights.map((h, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-[12px] text-zinc-300 leading-relaxed font-light">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C07B]/60 mt-1.5 flex-shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
