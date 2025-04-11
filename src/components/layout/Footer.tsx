'use client'

import { useState } from 'react'
import CreditsModal from '@/components/CreditsModal';

export const Footer = () => {
  const [showCredits, setShowCredits] = useState(false)

  return (
    <>
      <footer className="w-full border-t border-neutral-800 py-6 px-4 text-sm text-neutral-800 bg-white dark:bg-black relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <span>
            © {new Date().getFullYear()} InferenceStack. All rights reserved.
          </span>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowCredits(true)}
              className="hover:text-primary transition"
            >
              Credits
            </button>
          </div>
        </div>
      </footer>

      <CreditsModal isOpen={showCredits} onClose={() => setShowCredits(false)} />
    </>
  )
}
