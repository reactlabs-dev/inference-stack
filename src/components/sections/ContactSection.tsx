import { SocialIcons } from '../SocialIcons'

export const ContactSection = () => {
    return (
      <section
        id="contact"
        className="w-full px-6 py-24 sm:px-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Unlock Exponential Growth Now
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
          Organizations are racing to harness AI but struggling to stay relevant. With a shortage of skilled AI talent, I deliver the rare expertise to execute flawlessly and skyrocket your growth. Secure your edge today.
        </p>
  
        <a
          href="mailto:matt.vegas@inference-stack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium hover:opacity-90 hover:scale-105 transition transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label="Send email to matt.vegas@inference-stack.com"
        >
          matt.vegas@inference-stack.com
        </a>
  
        <SocialIcons />
      </section>
    )
}