'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stacks = [
    {
        title: 'Programming Languages',
        desc: 'Comfortable with Python(FastAPI), OpenCV, YOLO, Numpy; Solid in Java (familiar with Spring MVC); basic in TypeScript/JavaScript, HTML, CSS.',
        tools: ['Python', 'FastAPI', 'OpenCV', 'YOLO', 'Numpy', 'Java', 'Spring MVC', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
    },
    {
        title: 'Databases',
        desc: 'Relational and NoSQL storage engines.',
        tools: ['Firebase', 'PostgreSQL (Supabase)', 'MySQL', 'SQL Server']
    },
    {
        title: 'Tools',
        desc: 'Development, deployment, and version control.',
        tools: ['VSCode', 'Cursor', 'IntelliJ IDEA', 'Git', 'Github']
    }
]

export default function TechStack() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section id="tech-stack" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full"></div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Capabilities</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-white tracking-tight">
                        Technical Skills
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {stacks.map((stack, i) => (
                        <motion.div
                            key={stack.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="glass-card p-8 border-t-[3px] border-t-white/5 hover:border-t-[#E5C07B] transition-all duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-white mb-2">{stack.title}</h3>
                            <p className="text-[13px] leading-relaxed text-gray-400 font-light mb-6">{stack.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {stack.tools.map(t => (
                                    <span key={t} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-[#E5C07B] hover:border-[#E5C07B]/40 transition-colors cursor-default">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
