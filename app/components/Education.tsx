'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
    const certs = [
        { name: 'Databases and SQL for Data Science with Python', issuer: 'IBM / Coursera' }
    ]

    return (
        <section id="education" className="relative py-20 overflow-hidden bg-transparent">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Education Degree */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        transition={{ duration: 0.6 }}
                        className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#E5C07B]/40 transition-all duration-300 shadow-xl flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">Academic Background</span>
                        </div>

                        <h3 className="text-xl font-serif italic text-white mb-1">FPT University</h3>
                        <p className="text-xs text-[#E5C07B] mb-2 font-mono tracking-wide">Sept 2022 — Sept 2026</p>
                        <p className="text-zinc-300 mb-5 font-light text-xs leading-relaxed">Bachelor of Information Technology | Specialization: Software Engineering</p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5">
                                <Award className="text-[#E5C07B]" size={16} />
                                <div>
                                    <div className="text-xs font-bold text-white">GPA: 8.2 / 10</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5">
                                <GraduationCap className="text-[#E5C07B]" size={16} />
                                <div>
                                    <div className="text-xs font-bold text-white">30% Scholarship</div>
                                    <div className="text-[10px] text-zinc-400">Academic Award</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#E5C07B]/40 transition-all duration-300 shadow-xl flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">Certifications</span>
                        </div>
                        <div className="space-y-3">
                            {certs.map((c) => (
                                <div
                                    key={c.name}
                                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between group hover:border-[#E5C07B]/40 transition-colors"
                                >
                                    <div>
                                        <div className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors">{c.name}</div>
                                        <div className="text-[10px] font-mono text-zinc-400 mt-0.5">{c.issuer}</div>
                                    </div>
                                    <Award size={16} className="text-zinc-500 group-hover:text-[#E5C07B] transition-colors ml-3 flex-shrink-0" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
