// LeadCaptureForm.tsx

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
    <div className="max-w-xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Get The Ultimate AI Engineering Cheatsheet 2025
      </h2>

      {status === 'success' ? (
        <div className="text-green-400 text-center font-medium">
          ✅ Success! Check your inbox for the download link.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-black/50 p-6 rounded-xl border border-neutral-700"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            onChange={handleChange}
            value={formData.name}
            className="w-full px-4 py-2 rounded-md bg-black border border-neutral-700 text-white placeholder-neutral-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            value={formData.email}
            className="w-full px-4 py-2 rounded-md bg-black border border-neutral-700 text-white placeholder-neutral-500"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company (optional)"
            onChange={handleChange}
            value={formData.company}
            className="w-full px-4 py-2 rounded-md bg-black border border-neutral-700 text-white placeholder-neutral-500"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            {status === 'loading' ? 'Submitting...' : 'Get the Cheatsheet'}
          </button>

          {status === 'error' && (
            <p className="text-red-400 text-center mt-4">Something went wrong. Please try again.</p>
          )}
        </form>
      )}
    </div>
  )
}
