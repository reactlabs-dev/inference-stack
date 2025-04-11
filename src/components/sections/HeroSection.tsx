import Link from 'next/link'

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-10 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Applied Intelligence, Engineered.
        </h1>
        <p className="text-lg mb-8">
          InferenceStack is the independent portfolio and consultancy of Matt Vegas.
          I design and deploy full-stack AI systems—from infrastructure to interface.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#projects"
            className="px-6 py-3 rounded-md bg-primary font-medium hover:opacity-90 transition hover:text-primary"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 rounded-md border border-[var(--foreground)] text-sm text-[var(--foreground)] hover:border-primary hover:text-primary transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}
