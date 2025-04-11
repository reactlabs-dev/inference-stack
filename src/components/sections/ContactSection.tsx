import { SocialIcons } from '../SocialIcons'

export const ContactSection = () => {
    return (
      <section
        id="contact"
        className="w-full px-6 py-24 sm:px-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Let’s Work Together
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
          I collaborate with founders, product leaders, and innovation teams to turn AI from abstraction into operational advantage.
          If you’re building something that needs architectural clarity or applied intelligence — let’s talk.
        </p>
  
        <a
          href="mailto:matt.vegas@inference-stack.com"
          className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium hover:opacity-90 transition"
        >
          matt.vegas@inference-stack.com
        </a>
  
        <SocialIcons />
      </section>
    )
  }
  