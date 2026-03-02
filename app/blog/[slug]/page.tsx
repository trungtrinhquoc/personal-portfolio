import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import MDXContent from './MDXContent'

interface PageProps {
    params: { slug: string }
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps) {
    const post = getPostBySlug(params.slug)
    if (!post) return { title: 'Not Found' }
    return {
        title: `${post.title} — Trinh Quoc Trung`,
        description: post.description,
    }
}

export default function BlogPost({ params }: PageProps) {
    const post = getPostBySlug(params.slug)
    if (!post) notFound()

    return (
        <main className="min-h-screen bg-[#0F172A] pt-24 pb-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-400 mb-10 transition-colors"
                >
                    <ArrowLeft size={14} />
                    All posts
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono"
                            >
                                <Tag size={9} />
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-100 tracking-tight leading-tight mb-5">
                        {post.title}
                    </h1>

                    <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6">{post.description}</p>

                    <div className="flex items-center gap-5 text-sm text-gray-600 font-mono border-t border-indigo-500/10 pt-5">
                        <div className="flex items-center gap-1.5">
                            <Calendar size={13} />
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock size={13} />
                            {post.readingTime}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-indigo-400">Trinh Quoc Trung</span>
                        </div>
                    </div>
                </header>

                {/* MDX Content */}
                <article className="prose prose-invert prose-lg max-w-none
          prose-headings:text-gray-100 prose-headings:font-bold
          prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
          prose-p:text-gray-400 prose-p:leading-relaxed
          prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-200 prose-strong:font-semibold
          prose-code:text-indigo-300 prose-code:bg-indigo-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#111827] prose-pre:border prose-pre:border-indigo-500/20 prose-pre:rounded-xl
          prose-blockquote:border-l-indigo-500 prose-blockquote:text-gray-400
          prose-li:text-gray-400
          prose-table:text-gray-400 prose-thead:border-gray-700 prose-tbody:divide-gray-800 prose-th:text-gray-200
          prose-hr:border-indigo-500/20">
                    <MDXContent source={post.content} />
                </article>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-indigo-500/10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        <ArrowLeft size={14} />
                        Back to all posts
                    </Link>
                </div>
            </div>
        </main>
    )
}
