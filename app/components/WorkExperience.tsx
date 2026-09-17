'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
    }
]

export default function WorkExperience() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section id="experience" className="section-padding">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full"></div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Career Path</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white tracking-tight">
                        Work Experience
                    </h2>
                </motion.div>

                <div className="relative pl-4 sm:pl-0">
                    <div className="absolute left-[20px] sm:left-1/2 sm:-translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#E5C07B]/40 via-[#E5C07B]/10 to-transparent" />

                    <div className="flex flex-col gap-10">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={item.company}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className={`relative w-full flex flex-col sm:flex-row items-start ${i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
                            >
                                <div className="absolute left-[15px] sm:left-1/2 sm:-translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-[#E5C07B] shadow-[0_0_10px_#E5C07B]" />

                                <div className={`ml-12 sm:ml-0 sm:w-[45%] glass-card p-6 border-l-2 ${i % 2 === 0 ? 'border-transparent sm:border-l-transparent sm:border-r-2 sm:border-r-[#E5C07B]' : 'border-l-[#E5C07B]'}`}>
                                    <div className="text-xs font-mono text-[#E5C07B] mb-2">{item.period}</div>
                                    <h3 className="text-lg font-bold text-white leading-tight mb-1">{item.role}</h3>
                                    <div className="text-sm font-medium text-gray-400 mb-4">{item.company}</div>

                                    <ul className="flex flex-col gap-2 mt-4 border-t border-white/5 pt-4">
                                        {item.highlights.map((h, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-[13px] text-gray-300 leading-relaxed font-light">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C07B]/60 mt-1.5 flex-shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
