/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/mattvegas_hero.png"
          alt="Matt Vegas speaking"
          className="w-full h-full object-cover brightness-[0.4] sm:brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* Content overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl text-center px-6 sm:px-10 py-12 backdrop-blur-md bg-black/30 dark:bg-black/40 rounded-xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Applied Intelligence, Engineered.
        </h1>
        <p className="text-lg text-neutral-300 mb-8">
          InferenceStack is the independent portfolio and consultancy of Matt Vegas.
          I design and deploy full-stack AI systems—from infrastructure to interface.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#projects"
            className="px-6 py-3 rounded-md bg-white text-black font-medium hover:opacity-90 transition"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 rounded-md border border-white text-white text-sm hover:border-primary hover:text-primary transition"
          >
            Contact Me
          </Link>
        </div>

        <p className="mt-6 text-sm text-neutral-400 italic">
          “I don't just build AI systems — I architect outcomes.”
        </p>
      </motion.div>
    </section>
  )
}
