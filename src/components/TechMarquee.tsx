/* eslint-disable @next/next/no-img-element */
'use client'

import './tech-marquee.css'

const logos = [
    { name: 'OpenAI', file: 'openai.svg' },
    { name: 'Claude', file: 'anthropic.svg' },
    { name: 'LangChain', file: 'langchain2.svg' },
    { name: 'Weaviate', file: 'weaviate.jpeg' },
    { name: 'AWS', file: 'aws.svg' },
    { name: 'Vercel', file: 'vercel.svg' },
    { name: 'Python', file: 'python.svg' },
    { name: 'TypeScript', file: 'typescript.svg' },
    { name: 'Next.js', file: 'nextjs.svg' },
    { name: 'Docker', file: 'docker.svg' },
    { name: 'PostgreSQL', file: 'postgresql.svg' },
    { name: 'Hugging Face', file: 'huggingface.svg' },
    { name: 'Supabase', file: 'supabase.svg' },
    { name: 'Replicate', file: 'replicate.svg' },
]

export const TechMarquee = () => {
    return (
        <section className="relative py-16 border-t border-neutral-800 dark:border-neutral-700 bg-white dark:bg-black overflow-hidden">
            <p className="text-center text-sm uppercase tracking-wide text-neutral-500 mb-6">
                Trusted tools. Active deployments. Real systems.
            </p>

            {/* Fade overlays */}
            <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-text-gray-200 to-transparent dark:from-black" />
            <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-text-gray-200 to-transparent dark:from-black" />
            <div className="marquee-container overflow-hidden">
                <div className="marquee-track flex items-center mt-4 animate-marquee">
                    {[...logos, ...logos].map((logo, i) => (
                        <span key={i} className="flex items-center text-gray-200 text-lg font-semibold">
                            {logo.name}
                            <span className="mx-3 text-gray-600 text-base">•</span>
                        </span>

                    ))}
                </div>
            </div>

        </section>
    )
}
