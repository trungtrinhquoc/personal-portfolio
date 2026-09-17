'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function Contact() {
    const [status, setStatus] = useState(false)

    const handleForm = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus(true)
        setTimeout(() => setStatus(false), 3000)
    }

    return (
        <section id="contact" className="relative py-20 overflow-hidden bg-transparent">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-mono text-[#E5C07B] uppercase tracking-widest font-semibold">Connect</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-serif italic text-white tracking-tight leading-tight">
                        Let&apos;s build something <br className="hidden sm:block" />
                        <span className="text-[#E5C07B]">remarkable together.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 hover:border-[#E5C07B]/30 transition-all duration-300 shadow-2xl"
                >
                    {status ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="w-12 h-12 bg-[#E5C07B]/10 rounded-full flex items-center justify-center text-[#E5C07B] mb-3">
                                <CheckCircle size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">Message Sent</h3>
                            <p className="text-xs text-zinc-400">I will get back to you as soon as possible!</p>
                        </div>
                    ) : (
                        <form onSubmit={handleForm} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest pl-1">Name</label>
                                    <input required type="text" placeholder="John Doe" className="bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#E5C07B]/50 focus:bg-white/[0.06] transition-all font-light" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest pl-1">Email</label>
                                    <input required type="email" placeholder="john@example.com" className="bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#E5C07B]/50 focus:bg-white/[0.06] transition-all font-light" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest pl-1">Message</label>
                                <textarea required rows={4} placeholder="Tell me about your project or role..." className="bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#E5C07B]/50 focus:bg-white/[0.06] transition-all font-light resize-none" />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full mt-1 flex items-center justify-center gap-2 bg-[#E5C07B] text-[#0a0a0a] text-xs font-bold py-3.5 rounded-xl hover:bg-white transition-colors cursor-pointer"
                            >
                                Send Message <Send size={14} />
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
