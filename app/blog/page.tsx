import Link from 'next/link'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import { getAllPosts } from '@/lib/mdx'

export const metadata = {
    title: 'Blog — Trinh Quoc Trung',
    description: 'Technical writing on AI engineering, system design, and production lessons.',
}

export default function BlogIndex() {
    const posts = getAllPosts()

    return (
        <main className="min-h-screen bg-[#0F172A] pt-24 pb-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-400 mb-10 transition-colors"
                >
                    <ArrowLeft size={14} />
                    Back to portfolio
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
                        Writing
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black text-gray-100 tracking-tight mb-3">Blog</h1>
                    <p className="text-gray-400 text-base sm:text-lg">
                        Deep dives into AI engineering, system design, and production lessons.
                    </p>
                </div>

                {/* Posts */}
                <div className="space-y-6">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <div className="group rounded-2xl bg-[#111827] border border-indigo-500/15 hover:border-indigo-500/35 p-6 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center gap-4 text-xs text-gray-600 font-mono mb-3">
                                    <span>
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <Clock size={11} />
                                        <span>{post.readingTime}</span>
                                    </div>
                                </div>

                                <h2 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-white transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.description}</p>

                                <div className="flex flex-wrap gap-1.5">
                                    {post.tags.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag}
                                            className="flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono"
                                        >
                                            <Tag size={9} />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
