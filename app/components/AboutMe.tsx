'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Mail, Linkedin, Github, Monitor, Cog, Cpu } from 'lucide-react'

const highlights = [
    {
        icon: Cpu,
        title: 'Core AI Systems',
        desc: 'Engineering RAG pipelines, fine-tuning LLMs, and building robust Multimodal AI pipelines that scale efficiently in production environments.',
    },
    {
        icon: Monitor,
        title: 'Computer Vision',
        desc: 'Developing specialized CV applications with OpenCV and YOLO for high-accuracy industrial inspection and anomaly detection.',
    },
    {
        icon: Cog,
        title: 'Backend Architecture',
        desc: 'Writing optimized async services using Python (FastAPI), C# .NET, and Java to serve intelligent endpoints effortlessly.',
    },
]

export default function AboutMe() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <section id="about" className="section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    {/* Left Intro Card */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex flex-col gap-5 glass-card p-8 lg:p-10"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full"></div>
                            <span className="text-xs font-mono text-[#E5C07B] uppercase tracking-widest">About Me</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-serif italic text-white mb-2">My Philosophy</h2>

                        <p className="text-gray-300 leading-relaxed font-light mt-2 text-sm sm:text-base">
                            I am a Software Engineering student at <strong className="text-white font-medium">FPT University</strong> (September 2022 - September 2026). My core focus lies at the intersection of powerful AI models and reliable software architecture.
                        </p>

                        <p className="text-gray-400 leading-relaxed font-light mt-1 mb-4 text-sm sm:text-base">
                            Beyond just running experiments or writing notebooks, I build <strong className="text-gray-200">real-world, end-to-end intelligent systems</strong>. I care deeply about prompt optimization, latency reduction, and delivering measurable enterprise value.
                        </p>

                        <div className="flex flex-col gap-3 pt-6 border-t border-white/5">
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <MapPin size={16} className="text-[#E5C07B]" />
                                Da Nang, Vietnam (Open to Remote)
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <Mail size={16} className="text-[#E5C07B]" />
                                <a href="mailto:trinhquoctrung@gmail.com" className="hover:text-white transition-colors">trinhquoctrung@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400 mt-2">
                                <a href="https://linkedin.com/in/trungtrinh10504" className="flex items-center gap-2 text-gray-400 hover:text-white"><Linkedin size={15} /> LinkedIn</a>
                                <span className="opacity-30">•</span>
                                <a href="https://github.com/trungtrinhquoc" className="flex items-center gap-2 text-gray-400 hover:text-white"><Github size={15} /> GitHub</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 flex flex-col justify-center gap-6"
                    >
                        <h3 className="text-xl font-bold text-white mb-2">Engineering Capabilities</h3>

                        {highlights.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                    className="flex gap-5 group"
                                >
                                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 group-hover:border-[#E5C07B]/40 group-hover:text-[#E5C07B] transition-colors flex-shrink-0">
                                        <Icon size={20} />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <h4 className="text-lg font-semibold text-gray-100">{item.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed font-light max-w-lg">{item.desc}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
