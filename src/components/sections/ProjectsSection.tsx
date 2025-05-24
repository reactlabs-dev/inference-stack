/* eslint-disable @next/next/no-img-element */

type CaseStudy = {
  title: string
  description: string
  tags: string[]
  link: string
  icon: string
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Soluna AI',
    description:
      'Deployed ambient intelligence infrastructure for clinical workflows. Architected an end-to-end RAG system that integrates with HIPAA-compliant data pipelines and delivers real-time AI-driven decision support.',
    tags: ['Healthcare AI', 'RAG Systems', 'Workflow Automation'],
    link: 'https://www.solunaai.app',
    icon: 'solunaflow2.png',
  },
  {
    title: 'OutcomeIQ',
    description:
      'Built an outcome intelligence platform for payers and health systems. Translated real-time clinical and operational signals into predictive insight using custom embeddings and FHIR-aligned architecture.',
    tags: ['Predictive Analytics', 'FHIR Integration', 'Signal Engineering'],
    link: '#',
    icon: 'outcomeiq2.png',
  },
  {
    title: 'RadiologyStream (Prototype)',
    description:
      'Developed a generative AI tool for radiology prioritization. Auto-surfaced high-risk imaging patterns and sequenced cases by criticality, enhancing diagnostic throughput by 25% in initial pilots.',
    tags: ['Generative AI', 'Medical Imaging', 'UX/Clinical Ops'],
    link: '#',
    icon: 'ai_data.jpg',
  },
]

export const CaseStudiesSection = () => {
  return (
    <section
      id="case-studies"
      className="w-full px-6 py-16 sm:py-20 sm:px-10 max-w-6xl mx-auto text-center scroll-mt-16"
      aria-labelledby="case-studies-heading"
    >
      <h2
        id="case-studies-heading"
        className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white"
      >
        Case Studies
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        These aren’t demos — they’re working systems designed for real-world outcomes. Each case study reflects our ability to turn complex technical challenges into operational leverage at scale.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <a
            key={study.title}
            href={study.link}
            target='_blank'
            className="max-w-sm bg-black border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 transition block group text-left relative"
            aria-label={`Case study: ${study.title}`}
          >
            <img className="rounded-t-lg" src={study.icon} alt="" />
            <div className="p-5">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {study.title}
              </h3>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {study.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {study.link !== '#' && (
                <button
                  className="absolute bottom-5 right-5 text-white text-sm px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4B41E9]"
                  style={{ backgroundColor: '#4B41E9' }}
                  aria-label={`Visit ${study.title} website`}
                >
                  Visit Site
                </button>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}