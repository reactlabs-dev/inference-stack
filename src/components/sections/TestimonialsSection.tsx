/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from 'react'

type Testimonial = {
  quote: string
  author: string
  role: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Matt delivered a custom AI/ML model for our agency workflow in just days, automating content scheduling and client reporting. This slashed our manual workload by 30%, letting our team focus on creative strategy. His expertise in rapid AI deployment is unmatched.',
    author: 'Valencia Von',
    role: 'Creative Director',
    company: 'Fluid Motion',
  },
  {
    quote:
      'Matt built us a custom AI chatbot with machine learning that transformed our sales pipeline. By predicting customer needs and personalizing interactions, it boosted our conversion rates by 25%. His ability to align AI with business goals is phenomenal.',
    author: 'Matt Anderson',
    role: 'Founder',
    company: 'Anderson Consulting',
  },
  {
    quote:
      'Matt’s AI solution revolutionized our operations, automating data analysis and decision-making. His strategic approach turned complex challenges into a competitive edge, positioning us as market leaders. Working with him was a game-changer.',
    author: 'Sarah Mitchell',
    role: 'CEO',
    company: 'Innovate Solutions',
  },
  {
    quote:
      'I had the opportunity to work with Matt at VieCure. We needed a team member with strong technical skills who could speed up our product development. Matt fit the bill perfectly. He got up to speed within 2 weeks and contributed to a key feature. Matt is more than a front-end developer, he is an all-rounder - promoting best practices, team player, user experience designer, visionary, passionate, and pragmatic.',
    author: 'Ramesh Peesapaty',
    role: 'Servant Leader | Program and Product Management',
    company: 'VieCure',
  },
  {
    quote:
      'Matt always brings great positive energy to our daily stand-ups. I’m glad to have had an opportunity to work with an experienced senior developer like him on the team, whose contributions have immensely improved the team’s performance. Matt has always been very proactive in acknowledging the work of his colleagues and identifying gaps in the process.',
    author: 'Swetha Batta',
    role: 'Technical Product Manager, CSPO',
    company: 'BillGO',
  },
  {
    quote:
      'Matt came up to speed quickly in a complex environment. He is a very capable developer with a good eye for design and usability. He had many ideas for how to improve our development processes and product.',
    author: 'Patrick Conant',
    role: 'Software Engineering Leader',
    company: 'BillGO',
  },
  {
    quote:
      'Matt produced the best product while motivating the team to learn and excel.',
    author: 'Todd Nash',
    role: 'Software Engineering Manager',
    company: 'YSG',
  },
  {
    quote:
      'Outstanding frontend developer and UX designer is what comes to mind when I think about Matt. I’ve had the pleasure of working with Matt on a project where he was responsible for the frontend development and design. I was impressed with Matt’s meticulous job of improving the product and codebase.',
    author: 'Joshua Hendricks',
    role: 'Senior Architect',
    company: 'YSG',
  },
  {
    quote:
      'As a product manager, working with Matt is a dream. He brings a wealth of knowledge in both front end web development and UX design. He is excellent at collaborating rapidly through ideas, and always brings a fresh perspective by staying up to date on the latest best practices and design trends.',
    author: 'Anthony Boyd',
    role: 'Product Manager',
    company: 'TalentReef',
  },
  {
    quote:
      'Matt has a unique set of skills that combine technology with thoughtful creativity. He has a profound understanding of software engineering principles that allow him to create amazing solutions. I’ve always known Matt as a React advocate, but recently he’s taken up Angular development as well.',
    author: 'Matthew Vaughn',
    role: 'UI Solutions Architect | Angular Architect',
    company: 'Dr First',
  },
  {
    quote:
      'I’ve worked with Matt for over a year, and he consistently stands out with his knowledge and skills in getting the right solution in place for our users. He’s diligent in design and research, and his outstanding React and Javascript skills have introduced me to many coding solutions.',
    author: 'Mehdi Tahiri',
    role: 'SVP of Engineering',
    company: 'Topia',
  },
  {
    quote:
      'Matt brought so much insight and a fresh UX approach to the business. He took the lead in simplifying core system functionality by focusing on the customer experience. This has played heavily in our strategic planning. I would highly recommend Matt; he is technical, approachable, and a great team player.',
    author: 'Chris Peacock',
    role: 'CPO, COO, CTO, and CIO',
    company: 'GPS Insight',
  },
  {
    quote:
      'Matt managed the solution architect, DBAs, and programmers for our SaaS software. He was key in transitioning from Waterfall to Agile, ensuring smooth twice-monthly releases with minimal defects. His high-energy and encouraging management style brought positive changes to our team.',
    author: 'Ellen Frost',
    role: 'Senior IT Manager',
    company: 'Black Knight',
  },
  {
    quote:
      'It was a pleasure working with Matt. I was impressed with his enthusiasm for learning new technologies and tools. Matt is an excellent leader with high technical expertise, strong analytical skills, and a charismatic personality. He is capable of surpassing any employer’s expectations.',
    author: 'Natalia Zosimova',
    role: 'Sr. Software Developer',
    company: 'MGMA',
  },
  {
    quote:
      'Working with Matt is every UX designer’s dream. A master of communication and strategy, he’s always one step ahead, keeping the bigger picture in mind. He has a deep understanding of lean processes and is a tactical problem solver, creative implementer, and empathetic leader.',
    author: 'Kaitlin Wright',
    role: 'Staff Product Designer',
    company: 'Eventbrite',
  },
  {
    quote:
      'Matt was the lead developer on our Agile product team at Healthgrades. He connected strong technical skills with business and strategic objectives. His knowledge of Lean & Six Sigma was extremely helpful in our continuous improvement initiatives, leading to time and cost savings.',
    author: 'Paul Thompson',
    role: 'Owner and Founder',
    company: 'Red Rocks Beer Garden',
  },
  {
    quote:
      'Matt Vegas is one of the rare talents to bring strong development skills, broad experience, and leadership to a team. He identifies solutions to complex business challenges, forms bonds of respect with developers, and ensures a stable product that customers love.',
    author: 'Matt Hill',
    role: 'DevOps Team Lead',
    company: 'YSG',
  },
  {
    quote:
      'Matt designed 6 features for Adobe. Delivering accessible templates for global markets. His contemporary designs and interactive animations were spot-on, meeting Adobe’s strict schedule and high standards.',
    author: 'John Daigle',
    role: 'Adobe Certified Captivate and RoboHelp Consultant',
    company: 'Evergreen, Colorado',
  },
]

export const TestimonialsSection = () => {
  const testimonialsPerPage = 6
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)
  const [currentPage, setCurrentPage] = useState(0)

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
  }

  const startIndex = currentPage * testimonialsPerPage
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  )

  return (
    <section
      id="testimonials"
      className="w-full px-6 py-16 sm:py-20 sm:px-10 max-w-6xl mx-auto text-center scroll-mt-16"
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white"
      >
        What Leaders Say
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        Trusted by innovators to deliver AI-driven excellence, my work earns consistent praise from industry leaders for transforming complex challenges into impactful solutions.
      </p>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="region" aria-live="polite" aria-label="Testimonials carousel">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={`${testimonial.author}-${testimonial.company}`}
              className="max-w-sm bg-black border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 transition transform hover:scale-105 text-left"
              aria-label={`Testimonial by ${testimonial.author}`}
            >
              <div className="p-5">
                <div className="mb-3 text-yellow-400 font-bold text-xl">
                  ★★★★★
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {testimonial.quote.length > 120
                    ? `${testimonial.quote.slice(0, 100)}...`
                    : testimonial.quote}
                </p>
                <footer className="text-sm text-gray-900 dark:text-white font-medium">
                  — {testimonial.author}, {testimonial.role} - {testimonial.company}
                </footer>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="absolute top-1/2 -left-12 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full disabled:opacity-50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="Previous testimonials page"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full disabled:opacity-50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="Next testimonials page"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index)}
              className={`w-3 h-3 rounded-full ${
                currentPage === index
                  ? 'bg-white dark:bg-gray-300'
                  : 'bg-gray-500 dark:bg-gray-600'
              } focus:outline-none focus:ring-2 focus:ring-gray-500`}
              aria-label={`Go to testimonials page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}