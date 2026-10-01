import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Star } from 'lucide-react'
import Button from '../../components/common/Button'
import { Helmet } from 'react-helmet-async'

const leaders = [
  {
    name: 'Suraj K',
    role: 'Solution Architect',
    initials: 'SK',
    image: '/images/team/surajK_updated.png',
    linkedin: 'https://www.linkedin.com/in/suraj-k-5b025a411/',
    desc: 'Designs scalable, secure cloud architectures tailored to enterprise needs. Transforms complex business requirements into robust technical solutions across AWS, Azure, and GCP.',
    expertise: ['Cloud Architecture', 'AWS', 'Azure', 'System Design', 'Migration Strategy'],
    experience: '12+ Years',
    projects: '100+',
  },
  {
    name: 'Nilesh A',
    role: 'Delivery Head',
    initials: 'NA',
    desc: 'Leads end-to-end project delivery with a focus on quality, timelines, and client satisfaction. Ensures seamless execution of cloud transformation initiatives across the organization.',
    expertise: ['Project Delivery', 'Agile/DevOps', 'Team Leadership', 'Client Management', 'Cloud Operations'],
    experience: '20+ Years',
    projects: '150+',
  },
  {
    name: 'Prabhasini M',
    role: 'Business Analyst',
    initials: 'PM',
    desc: 'Bridges the gap between business needs and technical solutions. Analyzes requirements, identifies opportunities, and ensures every project delivers measurable business value.',
    expertise: ['Business Analysis', 'Requirements Gathering', 'Stakeholder Management', 'Process Optimization', 'Data Analysis'],
    experience: '10+ Years',
    projects: '80+',
  },
] as { name: string; role: string; initials: string; image?: string; linkedin?: string; desc: string; expertise: string[]; experience: string; projects: string }[]

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Leadership() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>Leadership Team | Ambifo Technology</title>
        <meta name="description" content="Meet the leadership team at Ambifo Technology." />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Our Leadership
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experienced team driving Ambifo's vision and delivering excellence for our clients.
          </motion.p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">The Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4 font-montserrat">Leadership That Delivers</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-lato">Passionate experts committed to driving cloud excellence and client success.</p>
          </motion.div>

          <div className="space-y-8">
            {leaders.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-600/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className="w-full md:w-72 shrink-0">
                    <div className="aspect-square bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                      {person.image ? (
                        <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <span className="relative text-6xl md:text-7xl font-bold text-white font-montserrat group-hover:scale-110 transition-transform duration-500">
                            {person.initials}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-blue-600 uppercase tracking-wider font-montserrat">{person.role}</span>
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${person.name} on LinkedIn`}
                          className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 text-blue-700 border border-blue-100 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
                        >
                          <LinkedInIcon />
                        </a>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-navy-900 font-montserrat mb-4">{person.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{person.desc}</p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-navy-900">{person.experience}</span> Experience
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Star className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-navy-900">{person.projects}</span> Projects
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {person.expertise.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Want to Join Our Team?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">Work alongside industry leaders and make an impact.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="primary" href="/careers">
              View Open Positions <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
