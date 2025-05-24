/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

export const HeroSection = () => {
  return (
    <>
      {/* 💻 Desktop / Tablet Layout */}
      <section
        id="hero"
        className="hidden sm:flex relative w-full min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/ai_data.jpg"
            alt="Matt Vegas speaking"
            className="w-full h-full object-cover brightness-[0.5] sm:brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        </div>

        {/* Content overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl text-center px-6 sm:px-10 py-12 backdrop-blur-md bg-black/30 dark:bg-black/40 rounded-xl min-h-[180px]"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 min-h-[96px]">
            Transforming Complex Data into Strategic Insights with Precision AI Solutions
            {/* <Typewriter
              words={[
                'From Infrastructure to Interface.',
                'LLM systems, production-ready.',
                'Deploy faster. Scale smarter.',
                'Architecting AI outcomes.',
                'Applied Intelligence, Engineered.'
              ]}
              loop={1}
              typeSpeed={40}
              deleteSpeed={25}
              delaySpeed={2000}
              cursor={false}
            /> */}
          </h1>
          <p className="text-lg text-neutral-300 mb-8">
            At Inference Stack, I engineer bespoke AI systems that drive decision-making and operational excellence.
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
              Schedule a Strategic Consultation
            </Link>
          </div>

          <p className="mt-6 text-sm text-neutral-400 italic">
            “I don't just build AI systems — I architect outcomes.”
          </p>

          <Link href="#cheatsheet" className="mt-4 text-sm text-primary-300 smooth-scroll">
            ↓ Scroll to download the 57-page AI Engineering Cheatsheet. 🔥
          </Link>
        </motion.div>
      </section>

      {/* 📱 Mobile Layout */}
      <section className="sm:hidden">
        <div className="w-full">
          <img
            src="/mattvegas_hero.png"
            alt="Matt Vegas speaking"
            className="w-full h-[60vh] object-cover brightness-[0.5]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 py-10 text-center bg-black"
        >
          <h1 className="text-2xl font-bold text-white mb-4 min-h-[88px]">
            <span className="typewriter-cursor">
              <Typewriter
                words={[
                  'From Infrastructure to Interface.',
                  'LLM systems, production-ready.',
                  'Deploy faster. Scale smarter.',
                  'Architecting AI outcomes.',
                  'Applied Intelligence, Engineered.'
                ]}
                loop={1}
                typeSpeed={40}
                deleteSpeed={25}
                delaySpeed={2000}
                cursor
                cursorStyle="|"
                onLoopDone={() => {
                  const cursor = document.querySelector('.typewriter-cursor');
                  if (cursor) cursor.classList.add('opacity-0');
                }}
              />
            </span>
          </h1>

          <p className="text-base text-neutral-300 mb-6">
            InferenceStack is the independent portfolio and consultancy of Matt Vegas.
            I design and deploy full-stack AI systems—from infrastructure to interface.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link
              href="#projects"
              className="w-full max-w-xs px-6 py-3 rounded-md bg-white text-black font-medium hover:opacity-90 transition"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="w-full max-w-xs px-6 py-3 rounded-md border border-white text-white text-sm hover:border-primary hover:text-primary transition"
            >
              Contact Me
            </Link>
          </div>

          <p className="mt-6 text-sm text-neutral-400 italic">
            “I don't just build AI systems — I architect outcomes.”
          </p>

          <p className="mt-4 text-sm text-primary-300 text-center">
            ↓ Scroll to download the 57-page AI Engineering Cheatsheet. 🔥
          </p>
        </motion.div>
      </section>
    </>
  )
}
