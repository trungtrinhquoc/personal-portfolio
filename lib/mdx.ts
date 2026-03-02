import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDir = path.join(process.cwd(), 'content', 'blog')

export interface PostMeta {
    slug: string
    title: string
    date: string
    description: string
    readingTime: string
    tags: string[]
}

export interface Post extends PostMeta {
    content: string
}

export function getAllPosts(): PostMeta[] {
    if (!fs.existsSync(contentDir)) return []

    const files = fs.readdirSync(contentDir).filter((f) => /\.mdx?$/.test(f))

    return files
        .map((filename) => {
            const slug = filename.replace(/\.mdx?$/, '')
            const fullPath = path.join(contentDir, filename)
            const raw = fs.readFileSync(fullPath, 'utf-8')
            const { data, content } = matter(raw)
            const rt = readingTime(content)

            return {
                slug,
                title: data.title ?? slug,
                date: data.date ?? '',
                description: data.description ?? '',
                readingTime: rt.text,
                tags: data.tags ?? [],
            } as PostMeta
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
    const mdxPath = path.join(contentDir, `${slug}.mdx`)
    const mdPath = path.join(contentDir, `${slug}.md`)
    const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null

    if (!filePath) return null

    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)
    const rt = readingTime(content)

    return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        description: data.description ?? '',
        readingTime: rt.text,
        tags: data.tags ?? [],
        content,
    }
}
