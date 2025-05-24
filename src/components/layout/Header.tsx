/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#cheatsheet', label: 'Free Download' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
]

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [, setDarkMode] = useState(false)

    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark'
        setDarkMode(isDark)
        document.documentElement.classList.toggle('dark', isDark)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-white/90 dark:bg-black/90 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full text-neutral-400 group-hover:text-white transition text-2xl">
                        <img className="rounded-full" src="/inferencestack.png" alt="official inference stack logo" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                            Inference-Stack.com
                        </span>
                        <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 leading-tight">
                            AI Systems That Deliver Real Business Results
                        </span>
                    </div>
                </Link>

                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                        className="cursor-pointer"
                    >
                        {mobileOpen ? (
                            <XMarkIcon className="h-6 w-6 text-neutral-900 dark:text-neutral-100" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-neutral-900 dark:text-neutral-100" />
                        )}
                    </button>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="text-neutral-900 hover:text-neutral-500 transition dark:text-neutral-100 dark:hover:text-neutral-400"
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="md:hidden px-6 pb-4">
                    {navLinks.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="block py-2 text-sm font-medium text-neutral-900 hover:text-neutral-500 transition dark:text-neutral-100 dark:hover:text-neutral-400"
                            onClick={() => setMobileOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}