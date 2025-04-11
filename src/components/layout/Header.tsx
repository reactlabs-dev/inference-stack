/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#resources', label: 'Resources' },
  { href: '#contact', label: 'Contact' },
]

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !darkMode
    setDarkMode(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-white/90 dark:bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary dark:text-white">
        <img
            src="/inferencestack_logo_light.svg"
            alt="InferenceStack logo"
            className="h-12 w-auto"
        />
        </Link>

        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="cursor-pointer">
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" className="cursor-pointer">
            {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-primary transition dark:text-white">
              {label}
            </a>
          ))}
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block py-2 text-sm font-medium hover:text-primary transition"
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
