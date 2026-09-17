'use client'

import { Github, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <span className="text-lg font-serif italic text-white tracking-wide">Trung Trinh</span>
                        <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">
                            AI / Machine Learning Engineer
                        </span>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-5">
                            <a href="https://github.com/trungtrinhquoc" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#E5C07B] transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="mailto:trinhquoctrung@gmail.com" className="text-gray-500 hover:text-[#E5C07B] transition-colors">
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
