import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Star } from 'lucide-react'
import Button from '../../components/common/Button'
import { Helmet } from 'react-helmet-async'

const leaders = [
  {
    name: 'Suraj K',
    role: 'Solution Architect',
    initials: 'SK',
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
    name: 'Shiwani K',
    role: 'Business Analyst',
    initials: 'SK',
    desc: 'Bridges the gap between business needs and technical solutions. Analyzes requirements, identifies opportunities, and ensures every project delivers measurable business value.',
    expertise: ['Business Analysis', 'Requirements Gathering', 'Stakeholder Management', 'Process Optimization', 'Data Analysis'],
    experience: '10+ Years',
    projects: '80+',
  },
]

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
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative text-6xl md:text-7xl font-bold text-white font-montserrat group-hover:scale-110 transition-transform duration-500">
                        {person.initials}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-blue-600 uppercase tracking-wider font-montserrat">{person.role}</span>
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
