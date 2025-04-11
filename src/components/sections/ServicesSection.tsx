export const ServicesSection = () => {
    return (
      <section
        id="services"
        className="w-full px-6 py-24 sm:px-10 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          What I Do
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto">
          InferenceStack is a full-stack AI consultancy for enterprise-scale systems.  
          I work with founders, product teams, and IT leaders to design intelligent architectures that ship fast — and scale clean.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            {
              title: 'Model Strategy & Orchestration',
              description:
                'Designing ML workflows that connect models to outcomes. From prompt engineering to API routing and versioning.',
            },
            {
              title: 'Infrastructure & System Design',
              description:
                'Helping enterprise teams build scalable data pipelines, cloud-native deployments, and intelligent services.',
            },
            {
              title: 'Workflow AI & UX',
              description:
                'Bridging machine intelligence with human-centered design. I build ambient interfaces and systems that feel like intuition.',
            },
            {
              title: 'Fractional CTO / Head of AI',
              description:
                'Helping teams move from prototype to platform. Strategic product planning, hiring, and roadmap alignment.',
            },
            {
              title: 'Technical Due Diligence',
              description:
                'For VCs, hospitals, and buyers evaluating AI tools or startups — I provide structured audits and vendor evaluations.',
            },
            {
              title: 'Documentation & Enablement',
              description:
                'I make systems legible: from API docs and playbooks to internal frameworks that scale across teams.',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-md border border-neutral-800 hover:border-primary transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  