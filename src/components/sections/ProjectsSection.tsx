type Project = {
    title: string
    description: string
    tags: string[]
    link: string
  }
  
  const projects: Project[] = [
    {
      title: 'ProtoMedica',
      description: 'Ambient AI infrastructure for clinical workflows. Designed and deployed end-to-end from model logic to UX interface.',
      tags: ['Healthcare AI', 'UX Systems', 'Infra'],
      link: '#',
    },
    {
      title: 'OutcomeIQ',
      description: 'Outcome intelligence platform that translates raw signals into orchestrated action. Built for health systems & payers.',
      tags: ['Signal Layer', 'Predictive Models', 'FHIR'],
      link: '#',
    },
    {
      title: 'RadiologyStream (Prototype)',
      description: 'A lightweight PACS extension that auto-surfaces abnormal findings and displays risk-aware sequencing.',
      tags: ['Imaging UX', 'Generative AI', 'Clinical Ops'],
      link: '#',
    },
  ]
  
  export const ProjectsSection = () => {
    return (
      <section
        id="projects"
        className="w-full px-6 py-24 sm:px-10 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Projects
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto">
          Select work from real-world deployments, prototypes, and experimental labs. These systems were built to deliver value, not just velocity.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="p-6 rounded-md border border-neutral-800 hover:border-primary transition block"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-neutral-900 text-white dark:bg-neutral-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    )
  }
  