'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ShoppingCart, Smartphone, UtensilsCrossed, BookOpen, X, ChevronRight } from 'lucide-react'

type Project = {
    icon: React.ReactNode
    title: string
    subtitle: string
    description: string
    highlight: string
    tags: string[]
    accent: string
    glowColor: string
    borderColor: string
    labelColor: string
    bg: string
    github?: string
    demo?: string
    details: {
        problem: string
        solution: string
        bullets: string[]
        outcome: string
    }
}

const projects: Project[] = [
    {
        icon: <BookOpen size={20} />,
        title: 'Mini RAG System',
        subtitle: 'Document Q&A with Vector Search',
        description:
            'End-to-end Retrieval-Augmented Generation pipeline: upload PDFs, generate embeddings, store in FAISS, retrieve top-k chunks, generate answers via LLM.',
        highlight: 'PDF → Embeddings → FAISS → LLM Answer',
        tags: ['Python', 'OpenAI API', 'FAISS', 'FastAPI'],
        accent: 'from-emerald-500 to-teal-500',
        glowColor: 'rgba(16,185,129,0.15)',
        borderColor: 'rgba(16,185,129,0.25)',
        labelColor: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        github: 'https://github.com/trungtrinhquoc',
        details: {
            problem: 'Searching large documents manually is slow and error-prone — users need instant, precise answers from their own files.',
            solution: 'Built a complete RAG pipeline using FastAPI as the backend, OpenAI embeddings to vectorise document chunks, FAISS for fast nearest-neighbour retrieval, and GPT-4o to synthesise final answers from retrieved context.',
            bullets: [
                'PDF ingestion → text extraction → chunk splitting (512 tokens, 64 overlap)',
                'Embedding generation via OpenAI text-embedding-3-small',
                'Vector storage and similarity search with FAISS (L2 index)',
                'Top-k = 5 chunks passed as context into GPT-4o prompt',
                'FastAPI REST endpoint with async request handling',
                'Average query latency: ~1.4s end-to-end',
            ],
            outcome: 'Fully functional local Q&A system able to answer domain-specific questions from uploaded PDFs with high accuracy.',
        },
    },
    {
        icon: <ShoppingCart size={20} />,
        title: 'RetailX',
        subtitle: 'Multi-tenant Sales & HR System',
        description:
            'AI-powered financial chatbot + multi-tenant RBAC system for retail SMEs — manages sales, inventory, HR, and financial analytics.',
        highlight: 'AI Financial Chatbot + Multi-tenant RBAC',
        tags: ['ASP.NET Core MVC', 'SQL Server', 'OpenAI API', 'C#'],
        accent: 'from-indigo-500 to-violet-600',
        glowColor: 'rgba(99,102,241,0.15)',
        borderColor: 'rgba(99,102,241,0.25)',
        labelColor: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        github: 'https://github.com/trungtrinhquoc',
        details: {
            problem: 'Retail store owners lacked real-time financial insight and struggled with multi-branch management across different roles.',
            solution: 'Built a full-stack multi-tenant SaaS with ASP.NET Core MVC, featuring an AI chatbot powered by OpenAI API that reads live SQL data to give revenue analysis and business strategy recommendations.',
            bullets: [
                'Multi-tenant architecture with tenant isolation at the database schema level',
                'Role-Based Access Control (RBAC): Owner, Manager, Staff, Accountant roles',
                'AI chatbot: queries SQL Server in real-time, passes structured financial data to GPT-4 for insights',
                'Modules: Sales tracking, Inventory management, Payroll, Financial reporting',
                'Chart dashboards with real-time revenue, cost, and profit visualisation',
                'Deployed with IIS + SQL Server on local infrastructure',
            ],
            outcome: 'End-to-end retail management system with an AI financial advisor — usable by store chains with role-scoped data access.',
        },
    },
    {
        icon: <Smartphone size={20} />,
        title: 'Zen App',
        subtitle: 'High-Performance Mobile Backend',
        description:
            'Mobile application backend focused on caching strategies to cut API latency and support high-concurrency read workloads.',
        highlight: 'Redis Caching Architecture for Mobile APIs',
        tags: ['FastAPI', 'PostgreSQL', 'Redis', 'Python'],
        accent: 'from-violet-500 to-purple-600',
        glowColor: 'rgba(139,92,246,0.15)',
        borderColor: 'rgba(139,92,246,0.25)',
        labelColor: 'text-violet-400',
        bg: 'bg-violet-500/10',
        github: 'https://github.com/trungtrinhquoc',
        details: {
            problem: 'The mobile app suffered from slow API responses on popular content endpoints under concurrent user load.',
            solution: 'Re-architected the data layer using Redis as a read-through cache in front of PostgreSQL, with cache warming on startup and TTL-based invalidation per content type.',
            bullets: [
                'Redis cache layer with TTL invalidation for hot-path endpoints',
                'Cache-aside pattern: read from Redis → fallback to PostgreSQL on miss',
                'Async FastAPI workers to handle concurrent requests without blocking',
                'Reduced average API response time by ~60% on cached resources',
                'PostgreSQL query optimisation: composite indexes on frequently joined columns',
                'Health-check and cache metrics endpoints for monitoring',
            ],
            outcome: 'Significantly reduced backend load and API latency, supporting mobile users under high-concurrency conditions.',
        },
    },
    {
        icon: <UtensilsCrossed size={20} />,
        title: 'FoodCare',
        subtitle: 'Food Delivery Service Platform',
        description:
            'Backend platform with real-time chat, secure auth, product pipelines, and Firebase integration for a food delivery service.',
        highlight: 'Real-time Chat + Auth + Product Pipeline',
        tags: ['Spring MVC', 'Firebase', 'Java', 'Real-time'],
        accent: 'from-blue-500 to-indigo-500',
        glowColor: 'rgba(59,130,246,0.15)',
        borderColor: 'rgba(59,130,246,0.25)',
        labelColor: 'text-blue-400',
        bg: 'bg-blue-500/10',
        github: 'https://github.com/trungtrinhquoc',
        details: {
            problem: 'A food delivery startup needed a reliable backend supporting real-time customer-restaurant communication, order management, and secure auth.',
            solution: 'Built a Spring MVC backend integrated with Firebase Realtime Database for live chat and order status updates, with full JWT-based authentication and product/order pipeline APIs.',
            bullets: [
                'JWT authentication: registration, login, token refresh, role-based guards',
                'Firebase Realtime Database for customer ↔ restaurant live chat',
                'Product management: CRUD, category filtering, stock tracking',
                'Order pipeline: cart → checkout → kitchen → delivery state machine',
                'Spring MVC REST API with layered architecture (Controller → Service → Repository)',
                'Firebase Storage integration for restaurant menu image uploads',
            ],
            outcome: 'Fully functional food delivery backend with real-time capabilities, auth, and a structured order pipeline.',
        },
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
}

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [selected, setSelected] = useState<Project | null>(null)

    return (
        <section id="projects" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
                        Selected Work
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-100 tracking-tight mb-4">
                        Selected Projects
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                        Click any project to see the full technical breakdown.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            custom={idx}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            onClick={() => setSelected(project)}
                            className="group relative flex flex-col rounded-2xl bg-[#111827] overflow-hidden cursor-pointer"
                            style={{
                                border: `1px solid ${project.borderColor}`,
                                boxShadow: `0 0 30px ${project.glowColor}`,
                            }}
                        >
                            {/* Top gradient bar */}
                            <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

                            <div className="p-5 flex flex-col flex-1">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`w-9 h-9 rounded-xl ${project.bg} flex items-center justify-center ${project.labelColor} flex-shrink-0`}
                                            style={{ border: `1px solid ${project.borderColor}` }}
                                        >
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-100 text-sm leading-tight">{project.title}</h3>
                                            <p className="text-[11px] text-gray-500 mt-0.5">{project.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Highlight badge */}
                                <div
                                    className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold ${project.bg} ${project.labelColor} mb-3 w-fit`}
                                    style={{ border: `1px solid ${project.borderColor}` }}
                                >
                                    {project.highlight}
                                </div>

                                {/* Description */}
                                <p className="text-xs text-gray-400 leading-relaxed flex-1 mb-4">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 rounded-md text-[10px] font-mono text-gray-500 bg-white/5 border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* View details hint */}
                                <div className={`flex items-center gap-1.5 text-xs font-medium ${project.labelColor} opacity-60 group-hover:opacity-100 transition-opacity duration-200`}>
                                    <ChevronRight size={13} />
                                    View details
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Detail Modal ── */}
            <AnimatePresence>
                {selected && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setSelected(null)}
                            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                        />

                        {/* Modal panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 30, scale: 0.97 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div
                                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F172A] pointer-events-auto"
                                style={{
                                    border: `1px solid ${selected.borderColor}`,
                                    boxShadow: `0 0 80px ${selected.glowColor}, 0 32px 64px rgba(0,0,0,0.6)`,
                                }}
                            >
                                {/* Top bar */}
                                <div className={`h-1.5 w-full bg-gradient-to-r ${selected.accent} rounded-t-2xl`} />

                                <div className="p-6 sm:p-8">
                                    {/* Close */}
                                    <button
                                        onClick={() => setSelected(null)}
                                        className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gray-200 hover:bg-white/10 transition-colors"
                                    >
                                        <X size={15} />
                                    </button>

                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-6 pr-10">
                                        <div
                                            className={`w-11 h-11 rounded-xl ${selected.bg} flex items-center justify-center ${selected.labelColor} flex-shrink-0`}
                                            style={{ border: `1px solid ${selected.borderColor}` }}
                                        >
                                            {selected.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-100 text-lg">{selected.title}</h3>
                                            <p className="text-sm text-gray-500 mt-0.5">{selected.subtitle}</p>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selected.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-md text-xs font-mono text-gray-400 bg-white/5 border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Problem */}
                                    <div className="mb-5">
                                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-2">Problem</div>
                                        <p className="text-sm text-gray-300 leading-relaxed">{selected.details.problem}</p>
                                    </div>

                                    {/* Solution */}
                                    <div className="mb-5">
                                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-2">Solution</div>
                                        <p className="text-sm text-gray-300 leading-relaxed">{selected.details.solution}</p>
                                    </div>

                                    {/* Technical breakdown */}
                                    <div className="mb-5">
                                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3">Technical Breakdown</div>
                                        <ul className="space-y-2">
                                            {selected.details.bullets.map((b, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                                                    <span className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full ${selected.labelColor} opacity-70`} style={{ background: 'currentColor' }} />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Outcome */}
                                    <div
                                        className="rounded-xl px-4 py-3.5 mb-6"
                                        style={{
                                            background: `${selected.glowColor}`,
                                            border: `1px solid ${selected.borderColor}`,
                                        }}
                                    >
                                        <div className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-1.5">Outcome</div>
                                        <p className="text-sm text-gray-300 leading-relaxed">{selected.details.outcome}</p>
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-3">
                                        {selected.github && (
                                            <a
                                                href={selected.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-gray-400 text-sm hover:text-gray-200 hover:border-white/20 transition-colors"
                                            >
                                                <Github size={14} />
                                                GitHub
                                            </a>
                                        )}
                                        {selected.demo && (
                                            <a
                                                href={selected.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${selected.accent} text-white text-sm font-semibold`}
                                            >
                                                <ExternalLink size={14} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    )
}

