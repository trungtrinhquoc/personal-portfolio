'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stack', href: '#tech-stack' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href: string) => {
        setMobileOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 shadow-xl'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-3 group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="w-8 h-8 rounded-full border border-[#E5C07B]/40 flex items-center justify-center text-[#E5C07B] font-serif italic font-bold text-sm shadow-[0_0_12px_rgba(229,192,123,0.15)] group-hover:bg-[#E5C07B]/10 transition-colors">
                            T
                        </div>
                        <span className="font-semibold text-gray-100 tracking-tight hidden sm:block">
                            Trinh Quoc Trung
                        </span>
                        <span className="text-[#a1a1aa] text-xs font-mono hidden md:block">
                            // AI &amp; Backend
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.label}
                                onClick={() => handleNavClick(link.href)}
                                className="px-4 py-2 text-sm text-gray-400 hover:text-[#E5C07B] hover:bg-[#E5C07B]/5 rounded-lg transition-all duration-200 cursor-pointer"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {link.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden p-2 text-gray-400 hover:text-[#E5C07B] rounded-md transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5"
                    >
                        <div className="px-4 py-6 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className="w-full text-left px-4 py-3 text-gray-400 hover:text-[#E5C07B] hover:bg-[#E5C07B]/5 rounded-xl font-medium transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
