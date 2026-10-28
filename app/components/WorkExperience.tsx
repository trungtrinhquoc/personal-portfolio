'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, ExternalLink, Cpu, Eye } from 'lucide-react'
import Image from 'next/image'

interface TimelineItem {
    role: string
    company: string
    period: string
    desc: string
    highlights: string[]
    technologies: string[]
    image?: string
    imageTitle?: string
}

const timeline: TimelineItem[] = [
    {
        role: 'AI Engineer',
        company: 'Dräxlmaier Automotive Vietnam',
        period: 'June 2026 — present',
        desc: 'Developing internal automation tools and industrial AI computer vision systems for automotive manufacturing.',
        highlights: [
            'Developed a PySide6 (Qt6) desktop application AI vision system for wire-harness defect inspection.',
            'Implemented OpenCV image alignment (SIFT + RANSAC Homography) against a Golden Reference to correct perspective distortion and mechanical vibration.',
            'Trained YOLOv8 models using PyTorch and deployed optimized ONNX models for CPU inference, achieving ~12 ms/frame latency.',
            'Engineered an optical LED trigger (OpenCV & temporal debounce) for automated cycle detection, replacing hardware sensors.'
        ],
        technologies: ['Python', 'OpenCV', 'YOLOv8', 'PyTorch', 'ONNX Runtime', 'PySide6 (Qt6)', 'FastAPI', 'NumPy'],
        image: '/draxlmaier-defect-inspection.jpg',
        imageTitle: 'Industrial Computer Vision – Defect Detection Pipeline'
    },
    {
        role: 'AI Engineer Intern',
        company: 'Open Web Technology Vietnam',
        period: 'August 2025 — March 2026',
        desc: 'Built production multimodal AI pipeline synthesizing stories into mobile app experiences.',
        highlights: [
            'Engineered a production multimodal AI storytelling pipeline (GPT-4o, Vertex AI Imagen, Cloud TTS), maintaining consistent character design across 6–14 scenes.',
            'Reduced API token consumption by 44% via compact prompt templates and structured outputs.',
            'Decreased generation latency by 27% via Python async workers, and improved Time-to-Interaction by 60% through progressive content streaming.'
        ],
        technologies: ['Python', 'FastAPI', 'GPT-4o', 'Vertex AI Imagen', 'Google Cloud TTS', 'AsyncIO'],
        image: '/openweb-multimodal-pipeline.jpg',
        imageTitle: 'Multimodal AI Storytelling Pipeline – Architecture & Case Study'
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
        ],
        technologies: ['Java', 'Spring MVC', 'SQL', 'Root Cause Analysis', 'Bug Fixing']
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
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; company?: string } | null>(null)

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

                                    {/* Highlights */}
                                    <ul className="flex flex-col gap-2 pt-3 border-t border-white/10 mb-4">
                                        {item.highlights.map((h, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-[12px] text-zinc-300 leading-relaxed font-light">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C07B]/60 mt-1.5 flex-shrink-0" />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies Used */}
                                    {item.technologies && item.technologies.length > 0 && (
                                        <div className="pt-3 border-t border-white/5">
                                            <div className="text-xs font-semibold text-zinc-300 mb-2.5 flex items-center gap-1.5">
                                                <Cpu size={13} className="text-[#E5C07B]" />
                                                <span>Technologies Used</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                {item.technologies.map(tech => (
                                                    <span
                                                        key={tech}
                                                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-[#E5C07B] bg-[#E5C07B]/10 border border-[#E5C07B]/20 hover:border-[#E5C07B]/50 transition-colors"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Image / Diagram Showcase */}
                                    {item.image && (
                                        <div className="mt-3 pt-3 border-t border-white/5">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                                                    <Eye size={13} className="text-[#E5C07B]" />
                                                    <span className="truncate max-w-[200px]">{item.imageTitle || 'Pipeline & Case Study'}</span>
                                                </div>
                                                <button
                                                    onClick={() => setSelectedImage({ src: item.image!, title: item.imageTitle || item.company, company: item.company })}
                                                    className="inline-flex items-center gap-1 text-xs text-[#E5C07B] hover:text-white transition-colors font-medium cursor-pointer"
                                                >
                                                    <ZoomIn size={13} />
                                                    <span>View full</span>
                                                </button>
                                            </div>

                                            {/* Uncropped, clean container without text obstruction */}
                                            <div
                                                onClick={() => setSelectedImage({ src: item.image!, title: item.imageTitle || item.company, company: item.company })}
                                                className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 group cursor-pointer hover:border-[#E5C07B]/60 transition-all bg-[#0a0a0a] shadow-md"
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.imageTitle || item.company}
                                                    fill
                                                    className="object-contain p-1 group-hover:scale-[1.02] transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E5C07B] text-[#0a0a0a] text-xs font-semibold shadow-xl">
                                                        <ZoomIn size={14} /> Click to expand
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 20 }}
                            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl bg-[#121212] border border-[#E5C07B]/40 shadow-2xl overflow-hidden z-10"
                        >
                            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/40">
                                <div>
                                    <div className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">
                                        {selectedImage.company ? `${selectedImage.company} — Case Study` : 'Technical Case Study'}
                                    </div>
                                    <h4 className="text-sm font-semibold text-white">
                                        {selectedImage.title}
                                    </h4>
                                </div>
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="relative w-full flex-1 min-h-[400px] max-h-[75vh] overflow-auto p-2 bg-[#0a0a0a] flex items-center justify-center">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
