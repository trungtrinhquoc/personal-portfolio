'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Mail, MapPin, Phone, Send, Linkedin } from 'lucide-react'

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In production, replace with actual form submission logic
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setFormState({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
                        Get In Touch
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-100 tracking-tight mb-4">
                        Let&apos;s Build Something
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                        Available for production AI engineering projects, consulting, and full-time opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Left: Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="rounded-2xl bg-[#111827] border border-indigo-500/20 p-5 sm:p-7 space-y-6">
                            {[
                                {
                                    icon: <Mail size={18} />,
                                    label: 'Email',
                                    value: 'trinhquoctrung@gmail.com',
                                    href: 'mailto:trinhquoctrung@gmail.com',
                                    color: 'text-indigo-400',
                                    bg: 'bg-indigo-500/10',
                                    border: 'border-indigo-500/20',
                                },
                                {
                                    icon: <Phone size={18} />,
                                    label: 'Phone',
                                    value: '0865 498 733',
                                    href: 'tel:0865498733',
                                    color: 'text-emerald-400',
                                    bg: 'bg-emerald-500/10',
                                    border: 'border-emerald-500/20',
                                },
                                {
                                    icon: <Github size={18} />,
                                    label: 'GitHub',
                                    value: 'github.com/trungtrinhquoc',
                                    href: 'https://github.com/trungtrinhquoc',
                                    color: 'text-violet-400',
                                    bg: 'bg-violet-500/10',
                                    border: 'border-violet-500/20',
                                },
                                {
                                    icon: <MapPin size={18} />,
                                    label: 'Location',
                                    value: 'Ho Chi Minh City, Vietnam',
                                    href: null,
                                    color: 'text-blue-400',
                                    bg: 'bg-blue-500/10',
                                    border: 'border-blue-500/20',
                                },
                            ].map((contact) => (
                                <div key={contact.label} className="flex items-center gap-4">
                                    <div
                                        className={`w-10 h-10 rounded-xl ${contact.bg} border ${contact.border} flex items-center justify-center ${contact.color} flex-shrink-0`}
                                    >
                                        {contact.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-600 font-mono uppercase tracking-wider">{contact.label}</div>
                                        {contact.href ? (
                                            <a
                                                href={contact.href}
                                                target={contact.href.startsWith('http') ? '_blank' : undefined}
                                                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className={`text-sm ${contact.color} hover:underline font-medium break-all`}
                                            >
                                                {contact.value}
                                            </a>
                                        ) : (
                                            <div className={`text-sm ${contact.color} font-medium`}>{contact.value}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Status */}
                        <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 px-5 py-4 flex items-center gap-3">
                            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
                            <div>
                                <div className="text-sm font-semibold text-emerald-400">Available for opportunities</div>
                                <div className="text-xs text-gray-500 mt-0.5">Open to AI/backend engineering roles</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.25, duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <div className="rounded-2xl bg-[#111827] border border-indigo-500/20 p-5 sm:p-7">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4">
                                        <Send size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-100 mb-2">Message sent!</h3>
                                    <p className="text-gray-400 text-sm">I&apos;ll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formState.name}
                                                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                                                placeholder="Your name"
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-indigo-500/20 text-gray-100 placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 transition-all duration-200"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-indigo-500/20 text-gray-100 placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 transition-all duration-200"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                                            placeholder="Tell me about the project or opportunity..."
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-indigo-500/20 text-gray-100 placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 transition-all duration-200 resize-none"
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Send size={16} />
                                        Send Message
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
