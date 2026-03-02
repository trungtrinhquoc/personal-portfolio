import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Trinh Quoc Trung — AI Systems Engineer',
    description:
        'AI Systems Engineer specializing in LLM optimization, multimodal pipelines, and enterprise-grade backend architecture. Building production AI systems with measurable performance impact.',
    keywords: [
        'AI Systems Engineer',
        'LLM Optimization',
        'Multimodal Pipeline',
        'FastAPI',
        'GPT-4',
        'Backend Engineer',
        'Trinh Quoc Trung',
    ],
    authors: [{ name: 'Trinh Quoc Trung' }],
    openGraph: {
        title: 'Trinh Quoc Trung — AI Systems Engineer',
        description:
            'Building production AI systems with measurable performance impact & scalable backend architecture.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trinh Quoc Trung — AI Systems Engineer',
        description:
            'Building production AI systems with measurable performance impact & scalable backend architecture.',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-[#0F172A] text-gray-100 antialiased overflow-x-hidden" suppressHydrationWarning>
                {children}
            </body>
        </html>
    )
}
