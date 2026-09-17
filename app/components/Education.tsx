'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    const certs = [
        { name: 'Databases and SQL for Data Science with Python', issuer: 'IBM / Coursera' }
    ]

    return (
        <section id="education" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Education Degree */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full"></div>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Academic Background</span>
                        </div>

                        <h3 className="text-2xl font-serif italic text-white mb-1">FPT University</h3>
                        <p className="text-sm text-[#E5C07B] mb-2 font-mono tracking-wide">Sept 2022 — Sept 2026</p>
                        <p className="text-gray-300 mb-6 font-light text-sm">Bachelor of Information Technology | Specialization: Software Engineering</p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-2">
                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                                <Award className="text-[#E5C07B]" size={18} />
                                <div>
                                    <div className="text-sm font-bold text-white">GPA: 8.2 / 10</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                                <GraduationCap className="text-[#E5C07B]" size={18} />
                                <div>
                                    <div className="text-sm font-bold text-white">30% Scholarship</div>
                                    <div className="text-xs text-gray-400">Academic Award</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <h4 className="text-lg font-semibold text-white mb-6 pl-4 border-l-2 border-[#E5C07B]">CERTIFICATIONS</h4>
                        <div className="space-y-4">
                            {certs.map((c, i) => (
                                <motion.div
                                    key={c.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                    className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-[#E5C07B]/30 transition-colors"
                                >
                                    <div>
                                        <div className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">{c.name}</div>
                                    </div>
                                    <Award size={18} className="text-gray-600 group-hover:text-[#E5C07B] transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
