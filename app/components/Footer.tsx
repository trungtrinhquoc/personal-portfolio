'use client'

import { Github, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="border-t border-indigo-500/10 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
                            T
                        </div>
                        <span className="text-sm text-gray-500">
                            Trinh Quoc Trung · AI Systems Engineer
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/trungtrinhquoc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-600 hover:text-gray-300 transition-colors"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="mailto:trinhquoctrung@gmail.com"
                            className="p-2 text-gray-600 hover:text-gray-300 transition-colors"
                        >
                            <Mail size={18} />
                        </a>
                    </div>

                    <p className="text-xs text-gray-700 font-mono">
                        © {new Date().getFullYear()} · Built with Next.js & TailwindCSS
                    </p>
                </div>
            </div>
        </footer>
    )
}
