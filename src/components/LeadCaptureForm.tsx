'use client'

import { useState } from 'react'

export const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to subscribe')

      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="max-w-full">
      <section
        id="cheatsheet"
        className="max-w-4xl mx-auto px-6 py-16 sm:py-20 scroll-mt-16"
        aria-labelledby="cheatsheet-heading"
      >
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-neutral-700 text-neutral-400 group-hover:text-white transition text-3xl">
            <span aria-hidden="true">🔥</span>
          </div>
        </div>
        <h2
          id="cheatsheet-heading"
          className="text-xl font-bold text-center mb-2 text-neutral-100 tracking-tight"
        >
          FREE: Get The Ultimate AI Engineering Cheatsheet 2025
        </h2>
        <p className="text-center text-neutral-400 mb-2 leading-relaxed">
          A 57-page engineering resource created for builders, not theorists.
        </p>
        <p className="text-center text-neutral-500 mb-6 text-sm leading-relaxed">
          This AI Engineering Cheatsheet was created to provide practical guidance for building production-grade AI systems using Large Language Models. It focuses on real-world engineering patterns rather than theoretical machine learning concepts.
        </p>

        {status === 'success' ? (
          <div className="text-green-400 text-center font-medium">
            ✅ Success! Check your inbox for the download link.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-black/50 p-6 rounded-xl border border-neutral-700"
            aria-describedby="form-description"
          >
            <p id="form-description" className="sr-only">
              Enter your name, email, and optional company name to receive the AI Engineering Cheatsheet.
            </p>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                onChange={handleChange}
                value={formData.name}
                className="w-full px-4 py-2 rounded-md bg-black border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
                value={formData.email}
                className="w-full px-4 py-2 rounded-md bg-black border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-500"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="sr-only">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company (optional)"
                onChange={handleChange}
                value={formData.company}
                className="w-full px-4 py-2 rounded-md bg-black border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-500"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-4 py-2 rounded-md bg-neutral-100 text-neutral-900 font-semibold hover:bg-neutral-200 transition disabled:bg-neutral-500 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Submitting...' : 'Get the Cheatsheet'}
            </button>

            {status === 'error' && (
              <p className="text-red-400 text-center mt-4">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </section>
    </div>
  )
}