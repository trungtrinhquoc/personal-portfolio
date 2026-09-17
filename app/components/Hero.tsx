'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import avatarImage from '../public/avatar.jpg'

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
            {/* Elegant abstract neural background pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-screen flex items-center justify-center">
                {/* CSS wave emulation overlapping circles */}
                <div className="absolute w-[60vw] h-[60vw] rounded-full border border-[#E5C07B]/40 blur-[4px] -right-[10vw]" />
                <div className="absolute w-[45vw] h-[45vw] rounded-full border border-[#E5C07B]/20 blur-[2px] right-[5vw]" />
                <div className="absolute w-[30vw] h-[30vw] rounded-full border border-[#E5C07B]/10 right-[15vw]" />
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* ── Left Content (Typographic Focus) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 flex flex-col justify-center"
                    >
                        <div className="inline-flex items-center gap-2 text-[#E5C07B] font-medium tracking-wide mb-6">
                            👋 <span className="text-[15px]">Hi there! I&apos;m Trung Trinh</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-1">
                            AI / ML
                        </h1>
                        <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] text-gradient-gold font-serif italic mb-6">
                            Engineer
                        </h2>

                        <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed max-w-[500px] mb-8 font-light">
                            Passionate about building production-grade AI pipelines and intelligent systems. Specializing in <span className="text-white font-medium">Computer Vision</span>, <span className="text-white font-medium">LLM orchestration</span>, and backend architecture that drives measurable impact.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <motion.button
                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-2 px-7 py-3.5 bg-[#E5C07B] text-[#0a0a0a] font-semibold rounded-full shadow-[0_0_20px_rgba(229,192,123,0.3)] transition-all hover:shadow-[0_0_30px_rgba(229,192,123,0.5)]"
                            >
                                Let&apos;s Talk <ArrowRight size={16} />
                            </motion.button>

                            <motion.a
                                href="/Resume_TrinhQuocTrung_AI Engineer.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-2 px-7 py-3.5 border border-white/10 text-white font-medium rounded-full hover:border-[#E5C07B]/50 hover:bg-[#E5C07B]/5 transition-all"
                            >
                                Download Resume <Download size={15} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* ── Right Content (Avatar & AI Vibe) ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 flex justify-center lg:justify-end py-10"
                    >
                        <div className="relative">
                            {/* Neural Vibe Decorator */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-4 border border-[#E5C07B]/20 rounded-full border-dashed opacity-70"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-8 border border-[#E5C07B]/10 rounded-full border-dotted opacity-50"
                            />

                            {/* Main Avatar Card */}
                            <div className="relative w-72 h-[380px] sm:w-[320px] sm:h-[420px] rounded-[30px] p-2 bg-[#121212] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] border-glow z-10 transition-all">
                                <div className="absolute top-4 right-4 z-20 flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#E5C07B] animate-pulse shadow-[0_0_8px_#E5C07B]" />
                                </div>

                                <div className="w-full h-full rounded-[24px] overflow-hidden relative transition-all duration-700 ease-in-out">
                                    <Image
                                        src={avatarImage}
                                        alt="Trinh Quoc Trung"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Vignette overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                                </div>

                                {/* Info block over avatar */}
                                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-4">
                                    <div className="text-[#a1a1aa] text-[11px] uppercase tracking-widest font-bold font-mono mb-1">Based in</div>
                                    <div className="text-white font-medium text-[15px] flex items-center justify-between">
                                        Da Nang, Vietnam
                                        <div className="flex gap-2">
                                            <a href="https://github.com/trungtrinhquoc" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E5C07B] transition-colors"><Github size={16} /></a>
                                            <a href="https://linkedin.com/in/trungtrinh10504" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E5C07B] transition-colors"><Linkedin size={16} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
