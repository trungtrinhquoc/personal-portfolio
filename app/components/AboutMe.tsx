'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Calendar, Mail, Linkedin, Github, Code2, Brain, Server } from 'lucide-react'

const highlights = [
    {
        icon: Brain,
        title: 'AI Engineering',
        desc: 'Designing and optimizing LLM-powered systems for production — from prompt engineering to fine-tuning and multimodal pipelines.',
    },
    {
        icon: Server,
        title: 'Backend Engineering',
        desc: 'Building scalable APIs, microservices, and data pipelines that power AI workloads at enterprise scale.',
    },
    {
        icon: Code2,
        title: 'Systems Thinking',
        desc: 'Obsessed with root-cause analysis, latency reduction, and shipping solutions that are measurably better.',
    },
]

const tags = [
    'Python', 'FastAPI', 'Java', 'Spring MVC',
    'TypeScript', 'JavaScript', 'HTML/CSS',
    'PostgreSQL', 'MySQL', 'SQL Server', 'Firebase',
    'Git', 'OpenAI API', 'ASP.NET Core',
]

export default function AboutMe() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="about" className="section-padding">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3">
                        About
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 tracking-tight">
                        Who I am
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Left — personal card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-2 flex flex-col gap-5"
                    >
                        {/* Avatar / initials */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-500/20">
                            T
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-100 mb-0.5">Trinh Quoc Trung</h3>
                            <p className="text-sm font-mono text-indigo-400">AI Engineer &amp; Backend Engineer</p>
                        </div>

                        <p className="text-sm text-gray-400 leading-relaxed">
                            Final-year Software Engineering student at FPT University, building AI-powered and backend systems.
                            I care about writing code that{' '}
                            <span className="text-gray-300 font-medium">actually runs well in production</span>
                            {' '}— not just passing tests.
                        </p>

                        <p className="text-sm text-gray-400 leading-relaxed">
                            Currently focusing on LLM integrations, prompt engineering, and full-stack development.
                            Comfortable in Python and Java, learning fast in everything else.
                        </p>

                        {/* Meta info */}
                        <div className="flex flex-col gap-2 pt-1">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <MapPin size={12} className="text-indigo-400 flex-shrink-0" />
                                <span>Danang - Vietnam</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Mail size={12} className="text-indigo-400 flex-shrink-0" />
                                <a href="mailto:trinhquoctrung10504@gmail.com" className="hover:text-indigo-400 transition-colors duration-150 truncate">
                                    trinhquoctrung10504@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Linkedin size={12} className="text-indigo-400 flex-shrink-0" />
                                <a href="https://linkedin.com/in/trungtrinh10504" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-150">
                                    linkedin.com/in/trungtrinh10504
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Github size={12} className="text-indigo-400 flex-shrink-0" />
                                <a href="https://github.com/trungtrinhquoc" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-150">
                                    github.com/trungtrinhquoc
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Calendar size={12} className="text-indigo-400 flex-shrink-0" />
                                <span>Open to opportunities</span>
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                            </div>
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                            {tags.map((tag) => (
                                <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.12] text-gray-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-3 flex flex-col gap-4"
                    >
                        {highlights.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.45, delay: 0.25 + i * 0.1 }}
                                    className="flex gap-4 p-4 rounded-xl border border-white/[0.10] bg-white/[0.025] hover:bg-white/[0.04] transition-colors duration-200"
                                >
                                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-300">
                                        <Icon size={16} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-200 mb-1">{item.title}</div>
                                        <div className="text-sm text-gray-500 leading-relaxed">{item.desc}</div>
                                    </div>
                                </motion.div>
                            )
                        })}

                        {/* Quote */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mt-2 px-4 py-3.5 rounded-xl border border-indigo-500/25 bg-indigo-500/[0.08]"
                        >
                            <p className="text-sm text-gray-300 leading-relaxed italic">
                                "I build things to understand them — and then make them faster."
                            </p>
                            <p className="text-xs text-gray-600 font-mono mt-1.5">— engineering mindset</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
