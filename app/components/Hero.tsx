'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import avatarImage from '../public/avatar.jpg'

const roleItems = [
    { prefix: "AI / ML", title: "Engineer" },
    { prefix: "AI / ML", title: "Developer" },
    { prefix: "Fullstack", title: "Developer" },
    { prefix: "Backend", title: "Developer" }
]

function GreetingTypewriter() {
    const text = "Hi there! I'm Trung Trịnh"
    const [charIdx, setCharIdx] = useState(0)

    useEffect(() => {
        if (charIdx < text.length) {
            const timer = setTimeout(() => {
                setCharIdx((prev) => prev + 1)
            }, 60)
            return () => clearTimeout(timer)
        }
    }, [charIdx, text.length])

    return (
        <div className="inline-flex items-center gap-2 text-[#E5C07B] font-medium tracking-wide mb-6">
            <motion.span
                initial={{ rotate: -20, opacity: 0 }}
                animate={{ rotate: [0, 20, -10, 20, -10, 10, 0], opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="inline-block origin-bottom-right"
            >
                👋
            </motion.span>
            <span className="text-[15px] font-mono tracking-wide">
                {text.slice(0, charIdx)}
                <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    className="inline-block ml-0.5 text-[#E5C07B]"
                >
                    |
                </motion.span>
            </span>
        </div>
    )
}

function RoleTypewriter() {
    const [roleIdx, setRoleIdx] = useState(0)
    const [charIdx, setCharIdx] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const currentRole = roleItems[roleIdx]
    const fullText = `${currentRole.prefix} ${currentRole.title}`

    useEffect(() => {
        let timer: NodeJS.Timeout

        if (!isDeleting && charIdx === fullText.length) {
            timer = setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && charIdx === 0) {
            setIsDeleting(false)
            setRoleIdx((prev) => (prev + 1) % roleItems.length)
        } else {
            const speed = isDeleting ? 35 : 75
            timer = setTimeout(() => {
                setCharIdx((prev) => prev + (isDeleting ? -1 : 1))
            }, speed)
        }

        return () => clearTimeout(timer)
    }, [charIdx, isDeleting, fullText.length])

    const prefixLen = currentRole.prefix.length
    let typedPrefix = ""
    let typedTitle = ""

    if (charIdx <= prefixLen) {
        typedPrefix = fullText.slice(0, charIdx)
        typedTitle = ""
    } else {
        typedPrefix = currentRole.prefix
        typedTitle = fullText.slice(prefixLen + 1, charIdx)
    }

    return (
        <div className="flex flex-col justify-center min-h-[7.5rem] sm:min-h-[8.5rem] lg:min-h-[9.5rem] mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem] flex items-center">
                {typedPrefix}
                {charIdx <= prefixLen && (
                    <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.4, repeat: Infinity, repeatType: 'reverse' }}
                        className="inline-block ml-1 opacity-80 text-[#E5C07B]"
                    >
                        |
                    </motion.span>
                )}
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] text-gradient-gold font-serif italic leading-tight min-h-[3rem] sm:min-h-[3.5rem] lg:min-h-[4rem] flex items-center">
                {typedTitle}
                {charIdx > prefixLen && (
                    <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.4, repeat: Infinity, repeatType: 'reverse' }}
                        className="inline-block ml-1 opacity-80 text-[#E5C07B]"
                    >
                        |
                    </motion.span>
                )}
            </h2>
        </div>
    )
}

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-transparent">
            {/* Elegant abstract neural background pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-screen flex items-center justify-center">
                <div className="absolute w-[60vw] h-[60vw] rounded-full border border-[#E5C07B]/40 blur-[4px] -right-[10vw]" />
                <div className="absolute w-[45vw] h-[45vw] rounded-full border border-[#E5C07B]/20 blur-[2px] right-[5vw]" />
                <div className="absolute w-[30vw] h-[30vw] rounded-full border border-[#E5C07B]/10 right-[15vw]" />
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10" />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* ── Left Content ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 flex flex-col justify-center"
                    >
                        {/* Status availability badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-4 w-fit">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                            <span>Open to Remote · Freelance · Relocation</span>
                        </div>

                        <GreetingTypewriter />

                        <RoleTypewriter />

                        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-[560px] mb-8 font-normal">
                            I&apos;m an <span className="text-white font-semibold">AI Engineer</span> interested in <span className="text-[#E5C07B] font-medium">Computer Vision</span>, <span className="text-[#E5C07B] font-medium">LLMs</span>, and <span className="text-[#E5C07B] font-medium">AI system development</span>. I&apos;m particularly passionate about building AI applications that are <span className="text-white font-semibold">practical, reliable, and useful in real-world environments</span>.
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

                    {/* ── Right Content (Avatar) ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 flex justify-center lg:justify-end py-10"
                    >
                        <div className="relative">
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

                            <div className="relative w-72 h-[390px] sm:w-[320px] sm:h-[430px] rounded-[30px] p-2 bg-[#121212] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] border-glow z-10 transition-all">
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                                </div>

                                <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-black/50 border border-white/10 rounded-2xl p-3.5">
                                    <div className="text-[#a1a1aa] text-[10px] uppercase tracking-widest font-bold font-mono mb-0.5">Based in</div>
                                    <div className="text-white font-medium text-[14px] flex items-center justify-between mb-1.5">
                                        Da Nang, Vietnam
                                        <div className="flex gap-2">
                                            <a href="https://github.com/trungtrinhquoc" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E5C07B] transition-colors"><Github size={15} /></a>
                                            <a href="https://linkedin.com/in/trungtrinh10504" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#E5C07B] transition-colors"><Linkedin size={15} /></a>
                                        </div>
                                    </div>
                                    <div className="text-[11px] text-[#E5C07B] pt-1.5 border-t border-white/10 flex items-center gap-1.5 font-mono">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        Available for Remote / Relocation
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
