export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="w-full px-6 py-16 sm:py-20 sm:px-10 bg-black mx-auto text-center scroll-mt-16"
      aria-labelledby="services-heading"
    >
      <h2
        id="services-heading"
        className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-neutral-100"
      >
        AI Systems That Deliver Real Business Results
      </h2>
      <p className="text-lg text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        Whether you need to extract value from complex data, operationalize AI across your org, or build intelligent products from the ground up — we architect what works.
      </p>

      <div className="grid grid-cols-1 max-w-5xl sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {[
          {
            title: 'Custom AI Development',
            description: 'Designing AI models tailored to your business challenges.',
            icon: (
              <svg
                className="w-6 h-6 text-neutral-400 group-hover:text-white transition"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 0 0-8.84 14.78l-.78 2.34a1 1 0 0 0 1.26 1.26l2.34-.78A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.24-1.24l-1.6.53.53-1.6A8 8 0 1 1 12 20zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z" />
              </svg>
            ),
          },
          {
            title: 'Data Strategy Consulting',
            description: 'Crafting data roadmaps that align with your objectives.',
            icon: (
              <svg
                className="w-6 h-6 text-neutral-400 group-hover:text-white transition"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 4v10h14V7H5zm2 2h10v2H7V9zm0 4h6v2H7v-2z" />
              </svg>
            ),
          },
          {
            title: 'Machine Learning Integration',
            description: 'Implementing ML algorithms to enhance decision-making.',
            icon: (
              <svg
                className="w-6 h-6 text-neutral-400 group-hover:text-white transition"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-8a4 4 0 0 0-8 0 1 1 0 0 1-2 0 6 6 0 0 1 12 0 1 1 0 0 1-2 0z" />
              </svg>
            ),
          },
        ].map((service) => (
          <div
            key={service.title}
            className="p-6 rounded-md border border-neutral-800 hover:border-neutral-500 transition group"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-neutral-100">{service.title}</h3>
            <p className="text-sm text-neutral-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};