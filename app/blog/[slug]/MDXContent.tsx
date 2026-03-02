'use client'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect, useState } from 'react'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

interface MDXContentProps {
    source: string
}

export default function MDXContent({ source }: MDXContentProps) {
    const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null)

    useEffect(() => {
        async function compileMDX() {
            const compiled = await serialize(source)
            setMdxSource(compiled)
        }
        compileMDX()
    }, [source])

    if (!mdxSource) {
        return (
            <div className="space-y-4 animate-pulse">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-4 bg-white/5 rounded" style={{ width: `${85 + Math.random() * 15}%` }} />
                ))}
            </div>
        )
    }

    return <MDXRemote {...mdxSource} />
}
