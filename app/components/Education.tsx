'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const certifications = [
    {
        name: 'Databases and SQL for Data Science with Python',
        issuer: 'IBM / Coursera',
        badge: 'SQL',
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/25',
    },
    {
        name: 'Software Development Lifecycle',
        issuer: 'Coursera',
        badge: 'SDLC',
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/25',
    },
    {
        name: 'Web Design for Everybody — Basics of Web Development & Coding',
        issuer: 'Coursera / University of Michigan',
        badge: 'WEB',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/25',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
    }),
}

export default function Education() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="education" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
                        Academic Foundation
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-100 tracking-tight mb-4">
                        Education &amp; Certifications
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Education card */}
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="rounded-2xl bg-[#111827] border border-indigo-500/20 p-8 relative overflow-hidden"
                        style={{ boxShadow: '0 0 40px rgba(99,102,241,0.1)' }}
                    >
                        {/* BG glow */}
                        <div
                            className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
                                filter: 'blur(30px)',
                            }}
                        />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Degree</div>
                                    <h3 className="font-bold text-gray-100 text-base">FPT University</h3>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="font-semibold text-gray-100 text-lg leading-snug">
                                        Bachelor of Information Technology
                                    </div>
                                    <div className="text-indigo-400 text-sm font-medium mt-0.5">
                                        Software Engineering
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
                                        <Award size={14} />
                                        GPA: 8.2 / 10
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold">
                                        <Award size={14} />
                                        30% Academic Scholarship
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                                    <BookOpen size={14} className="text-gray-600" />
                                    Algorithms · System Design · Software Architecture · Databases
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        custom={1}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="space-y-5"
                    >
                        <div className="mb-4">
                            <h3 className="font-bold text-gray-200 text-lg">Certifications</h3>
                            <p className="text-gray-500 text-sm mt-1">Professional development and verified skills</p>
                        </div>

                        {certifications.map((cert) => (
                            <motion.div
                                key={cert.name}
                                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                className={`rounded-xl bg-[#111827] border ${cert.border} p-5 flex items-center gap-4 group cursor-default`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl ${cert.bg} border ${cert.border} flex items-center justify-center ${cert.color} font-bold text-sm font-mono flex-shrink-0`}
                                >
                                    {cert.badge}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-100">{cert.name}</div>
                                    <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-1.5">
                                        <Award size={11} className={cert.color} />
                                        {cert.issuer}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Continuous learning note */}
                        <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/15 p-5">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5">
                                    <BookOpen size={15} />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-200 mb-1">Continuous Learning</div>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        Actively studying LLM systems architecture, distributed inference optimization, and multimodal AI pipeline design.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
