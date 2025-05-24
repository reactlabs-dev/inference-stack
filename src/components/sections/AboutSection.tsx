/* eslint-disable @next/next/no-img-element */
export const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full px-6 py-16 sm:py-20 sm:px-10 max-w-5xl mx-auto text-center scroll-mt-16 mb-16"
      aria-labelledby="about-heading"
    >
      <div className="flex justify-center mb-6">
        <img
          src="/mattvegas.jpeg"
          alt="Portrait of Enterprise AI Consultant"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-neutral-700 object-cover"
        />
      </div>
      <h2
        id="about-heading"
        className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-neutral-900 dark:text-neutral-100"
      >
        Enterprise AI Consultant
      </h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mx-auto">
        I specialize in crafting tailored AI solutions that integrate seamlessly with your infrastructure, driving scalability, efficiency, and measurable ROI.
      </p>
    </section>
  )
}