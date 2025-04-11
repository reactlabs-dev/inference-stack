/* eslint-disable react/no-unescaped-entities */
type Resource = {
    title: string
    description: string
    link: string
    type: 'PDF' | 'Playbook' | 'Strategy' | 'Code' | 'Deck'
  }
  
  const resources: Resource[] = [
    {
      title: 'Care Friction Index™ Framework',
      description: 'Quantifying the UX cost of clinical interfaces. PDF download includes metrics, scoring model, and EHR UX playbook.',
      link: '#',
      type: 'PDF',
    },
    {
      title: 'OutcomeIQ Signal Stack Deck',
      description: '5-layer architectural model for outcomes-based orchestration. Strategic walkthrough of the OutcomeIQ prototype.',
      link: '#',
      type: 'Deck',
    },
    {
      title: 'Ambient AI Design Guide',
      description: 'Interface and interaction principles for building predictive systems that support—not interrupt—clinical work.',
      link: '#',
      type: 'Playbook',
    },
  ]
  
  export const ResourcesSection = () => {
    return (
      <section
        id="resources"
        className="w-full px-6 py-24 sm:px-10 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Resources
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto">
          Strategic documents and frameworks I've created while building AI systems at scale. These are here to educate, align, and accelerate.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {resources.map((res) => (
            <a
              key={res.title}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-md border border-neutral-800 hover:border-primary transition block"
            >
              <div className="text-sm text-primary font-medium mb-1">{res.type}</div>
              <h3 className="text-lg font-semibold mb-2">{res.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {res.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    )
  }
  