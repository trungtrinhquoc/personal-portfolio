'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Github, Code2 } from 'lucide-react'

const timeline = [
    {
        type: 'work',
        role: 'AI Engineer',
        company: 'Open Web Technology Vietnam',
        period: 'Aug 2025 — Present',
        location: 'Đà Nẵng, VN',
        url: null,
        description:
            'Built a production AI storytelling pipeline for a mobile app, orchestrating GPT-4o (text), Vertex AI Imagen (images), and Cloud TTS (audio) to generate personalized children\'s stories.',
        highlights: [
            'Integrated a multimodal AI pipeline (text → image → audio) while maintaining consistent character design across 6–14 scene story sequences',
            'Token Optimization: reduced consumption 44% (850→480 tokens) via compact prompt templates and structured output design',
            'Reduced generation latency 27% (49s→36s) by generating 5 scenes concurrently with Python async workers and progressive result streaming',
            'Improved Time-to-Interaction 60% (20s→8s) by delivering text first while multimedia generated in the background',
        ],
        tags: ['Python', 'GPT-4o', 'Vertex AI Imagen', 'Cloud TTS', 'Async', 'FastAPI'],
        color: 'indigo',
    },
    {
        type: 'work',
        role: 'Java Developer',
        company: 'FPT Software',
        period: 'May 2025 — Aug 2025',
        location: 'Đà Nẵng, VN',
        url: null,
        description:
            'Supported Japanese clients on a legacy enterprise system — responsible for bug triage, root cause analysis, and quality verification.',
        highlights: [
            'Collaborated with Japanese clients to understand and reproduce reported software bugs',
            'Investigated and identified root causes across the codebase',
            'Fixed bugs and performed regression testing to ensure system stability',
        ],
        tags: ['Java', 'Bug Fixing', 'Root Cause Analysis', 'Japanese Client'],
        color: 'violet',
    },
]

const colorMap: Record<string, { dot: string; border: string; tag: string; label: string; iconBg: string }> = {
    indigo: {
        dot: 'bg-indigo-400',
        border: 'border-indigo-500/30',
        tag: 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300',
        label: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25',
        iconBg: 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300',
    },
    violet: {
        dot: 'bg-violet-400',
        border: 'border-violet-500/30',
        tag: 'bg-violet-500/10 border-violet-500/25 text-violet-300',
        label: 'bg-violet-500/10 text-violet-300 border-violet-500/25',
        iconBg: 'bg-violet-500/10 border-violet-500/25 text-violet-300',
    },
    purple: {
        dot: 'bg-purple-400',
        border: 'border-purple-500/30',
        tag: 'bg-purple-500/10 border-purple-500/25 text-purple-300',
        label: 'bg-purple-500/10 text-purple-300 border-purple-500/25',
        iconBg: 'bg-purple-500/10 border-purple-500/25 text-purple-300',
    },
}

export default function WorkExperience() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="experience" className="section-padding">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-10 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
                        Work Experience
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-100 tracking-tight mb-4">
                        Experience
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
                        AI Engineer · Backend Developer · building production systems with real impact.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative mb-10">
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.05] hidden sm:block" />
                    <div className="flex flex-col gap-5">
                        {timeline.map((item, i) => {
                            const c = colorMap[item.color]
                            const Icon = item.type === 'project' ? Code2 : Briefcase
                            return (
                                <motion.div
                                    key={item.company}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.45, delay: 0.1 + i * 0.12 }}
                                    className="sm:pl-8 relative"
                                >
                                    <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#0F172A] ${c.dot} hidden sm:block`} />

                                    <div className={`rounded-xl border ${c.border} bg-white/[0.025] hover:bg-white/[0.04] transition-colors duration-200 p-5`}>
                                        {/* Top row */}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-2.5">
                                            <div>
                                                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                                                    <span className="text-sm font-semibold text-gray-100">{item.role}</span>
                                                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${c.label}`}>
                                                        {item.type === 'education' ? 'Education' : item.type === 'work' ? 'Full-time' : 'Project'}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1.5 flex-wrap">
                                                    <span className="text-sm text-gray-400 font-medium">{item.company}</span>
                                                    {item.url && (
                                                        <a
                                                            href={item.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-600 hover:text-indigo-400 transition-colors duration-150"
                                                        >
                                                            <Github size={12} />
                                                        </a>
                                                    )}
                                                    <span className="text-gray-700 text-xs">·</span>
                                                    <span className="text-gray-600 text-xs">{item.location}</span>
                                                </div>
                                            </div>
                                            <span className="text-xs font-mono text-gray-600 whitespace-nowrap">{item.period}</span>
                                        </div>

                                        <p className="text-sm text-gray-400 leading-relaxed mb-3">{item.description}</p>

                                        <ul className="flex flex-col gap-1.5 mb-3">
                                            {item.highlights.map((h) => (
                                                <li key={h} className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                                                    <span className={`flex-shrink-0 mt-[5px] w-1 h-1 rounded-full ${c.dot} opacity-60`} />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-1.5">
                                            {item.tags.map((tag) => (
                                                <span key={tag} className={`text-[11px] font-mono px-2 py-0.5 rounded border ${c.tag}`}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>


            </div>
        </section>
    )
}

