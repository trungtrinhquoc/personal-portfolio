'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })
    const [status, setStatus] = useState(false)

    const handleForm = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus(true)
        setTimeout(() => setStatus(false), 3000)
    }

    return (
        <section id="contact" className="section-padding">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 bg-[#E5C07B] rounded-full"></div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Connect</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-serif italic text-white tracking-tight leading-tight">
                        Let&apos;s build something <br className="hidden sm:block" />
                        <span className="text-[#E5C07B]">remarkable.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card p-6 sm:p-10"
                >
                    {status ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-16 h-16 bg-[#E5C07B]/10 rounded-full flex items-center justify-center text-[#E5C07B] mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                            <p className="text-gray-400">I will get back to you as soon as possible!</p>
                        </div>
                    ) : (
                        <form onSubmit={handleForm} className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest pl-1">Name</label>
                                    <input required type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5C07B]/50 focus:bg-white/10 transition-all font-light" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-mono text-gray-400 uppercase tracking-widest pl-1">Email</label>
                                    <input required type="email" placeholder="john@example.com" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5C07B]/50 focus:bg-white/10 transition-all font-light" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-mono text-gray-400 uppercase tracking-widest pl-1">Message</label>
                                <textarea required rows={4} placeholder="Tell me about your project or role..." className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5C07B]/50 focus:bg-white/10 transition-all font-light resize-none" />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full mt-2 flex items-center justify-center gap-2 bg-[#E5C07B] text-[#0a0a0a] font-bold py-4 rounded-xl hover:bg-white hover:text-black transition-colors"
                            >
                                Send Message <Send size={16} />
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
