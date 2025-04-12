// ConsultingPackages.tsx

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export const ConsultingPackages = () => {
  return (
    <section id="consulting" className="py-24 px-6 bg-black text-white border-t border-neutral-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Consulting Engagements
        </motion.h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-12">
          From AI infrastructure and deployment strategy to end-to-end prototypes and LLM integration, I partner with organizations to deliver applied intelligence with impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'Starter Engagement',
              price: 'From $2,500',
              description:
                'Great for startups or teams who need a technical assessment, architecture roadmap, or fast prototype.',
              deliverables: ['1:1 discovery session', 'Architecture diagram or prototype', 'Follow-up action plan'],
            },
            {
              title: 'Fractional AI Engineer',
              price: 'From $6,000/mo',
              description:
                'Hands-on engineering support for organizations building production AI infrastructure or LLM apps.',
              deliverables: ['Weekly sprints', 'Infra + app deployment', 'Slack async support'],
            },
            {
              title: 'Enterprise Advisory',
              price: 'Custom',
              description:
                'Strategic AI advising for digital health, R&D, or enterprise AI innovation teams.',
              deliverables: ['Bespoke roadmap', 'Workshops or reviews', 'Access to full Soluna toolkit'],
            },
          ].map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-neutral-900 rounded-xl border border-neutral-700 p-6 text-left shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{pkg.title}</h3>
              <p className="text-sm text-neutral-400 mb-4">{pkg.description}</p>
              <p className="text-lg font-medium text-white mb-4">{pkg.price}</p>
              <ul className="text-sm text-neutral-400 list-disc pl-5 space-y-1">
                {pkg.deliverables.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Link
          href="https://calendly.com/contact-protomedica/consultation"
          target='_blank'
          className="inline-block px-6 py-3 rounded-md bg-white text-black font-medium hover:opacity-90 transition"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  )
}
