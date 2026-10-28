'use client'

import { Github, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <span className="text-lg font-serif italic text-white tracking-wide">Trung Trinh</span>
                        <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">
                            AI Engineer
                        </span>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-5">
                            <a href="https://github.com/trungtrinhquoc" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-[#E5C07B] transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/trungtrinh10504" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-[#E5C07B] transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:trinhquoctrung10504@gmail.com" aria-label="Email" className="text-gray-500 hover:text-[#E5C07B] transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="text-xs text-gray-600 font-mono">
                        © {new Date().getFullYear()} All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
