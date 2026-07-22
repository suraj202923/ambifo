import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Briefcase, Users, TrendingUp, Globe, Heart, Zap, GraduationCap,
  MapPin, Cloud, Brain, Shield, Database, Server, ClipboardList,
  ChevronRight, DollarSign, Clock,
} from 'lucide-react'
import Button from '../../components/common/Button'
import ResumeModal from '../../components/ResumeModal'
import { Helmet } from 'react-helmet-async'
import { positions } from '../../data/careersData'

const perks = [
  { icon: Briefcase, title: 'Meaningful Work', desc: 'Work on projects that make a real impact for Fortune 500 companies and global organizations.', color: 'from-blue-600 to-blue-500' },
  { icon: Users, title: 'Great Culture', desc: 'Join a collaborative, inclusive team that values innovation, learning, and growth.', color: 'from-navy-900 to-navy-700' },
  { icon: TrendingUp, title: 'Career Growth', desc: 'Continuous learning opportunities, certifications, and clear career progression paths.', color: 'from-blue-500 to-blue-400' },
  { icon: Globe, title: 'Global Exposure', desc: 'Work with clients and teams across 10 countries, gaining diverse experience.', color: 'from-navy-800 to-navy-600' },
]

const values = [
  { icon: Heart, title: 'Passion', desc: 'We are passionate about technology and the impact it can have on businesses and society.' },
  { icon: Zap, title: 'Innovation', desc: 'We encourage creative thinking and exploring new frontiers in cloud and AI.' },
  { icon: GraduationCap, title: 'Learning', desc: 'A culture of continuous learning with sponsored certifications and training programs.' },
]

const iconMap: Record<string, React.ElementType> = {
  Cloud, Brain, Shield, Database, Server, ClipboardList,
}

const stats = [
  { value: '50+', label: 'Team Members', icon: Users },
  { value: '10', label: 'Countries', icon: Globe },
  { value: '500+', label: 'Projects Delivered', icon: Briefcase },
  { value: '99.9%', label: 'Client Satisfaction', icon: TrendingUp },
]

export default function Careers() {
  const [showResumeModal, setShowResumeModal] = useState(false)

  return (
    <div className="font-lato">
      <Helmet>
        <title>Careers | Ambifo Technology</title>
        <meta name="description" content="Join Ambifo Technology - explore open positions in cloud, AI, and DevOps." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            We're Hiring
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Build Your Future<br />With Ambifo
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Join Ambifo and be part of a team that's shaping the future of cloud and AI technology across the globe.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" href="#positions">
              View Open Positions <ArrowRight className="w-5 h-5" />
            </Button>
            <button
              onClick={() => setShowResumeModal(true)}
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all duration-300 font-montserrat border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-navy-900"
            >
              Send Open Application
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative -mt-10 z-10 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-xl shadow-gray-200/50 border border-gray-100 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-navy-900 font-montserrat">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Ambifo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest text-green-500 uppercase font-montserrat">Why Ambifo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4 font-montserrat">Why You'll Love Working Here</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We offer an environment where talented professionals can thrive and grow.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:border-green-600/20 transition-all duration-500">
                <div className={`w-14 h-14 bg-gradient-to-br ${p.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest text-green-500 uppercase font-montserrat">Our Culture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4 font-montserrat">What Drives Us</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-500 text-center group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-green-500 transition-colors duration-500">
                  <v.icon className="w-8 h-8 text-green-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest text-green-500 uppercase font-montserrat">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4 font-montserrat">Find Your Role</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Explore current opportunities and find your perfect fit at Ambifo.</p>
          </motion.div>

          <div className="space-y-5">
            {positions.map((pos, i) => {
              const Icon = iconMap[pos.icon] || Briefcase
              return (
                <motion.div
                  key={pos.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-green-500/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Icon Side */}
                    <div className="lg:w-20 shrink-0 flex items-center justify-center bg-gradient-to-br from-navy-900 to-navy-800 p-6 lg:p-0">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-green-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 lg:p-7">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-navy-900 font-montserrat">{pos.title}</h3>
                            <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${pos.type === 'Full-time' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-amber-50 text-amber-700 border border-amber-100'}`}>
                              {pos.type}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm mb-3 leading-relaxed">{pos.shortDesc}</p>
                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-green-500" />{pos.location}</span>
                            <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-green-500" />{pos.level}</span>
                            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-green-500" />{pos.team}</span>
                            <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-green-500" />{pos.salary}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-green-500" />{pos.posted}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {pos.tags.map((tag) => (
                              <span key={tag} className="px-2.5 py-1 bg-navy-50 text-navy-700 text-[11px] font-medium rounded-lg border border-navy-100">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Link
                          to={`/careers/${pos.slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-navy-900 font-bold text-sm rounded-xl hover:bg-green-600 transition-all duration-300 font-montserrat shrink-0 shadow-md hover:shadow-lg self-start"
                        >
                          View & Apply <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Don't See the Right Role?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">We're always looking for talented individuals. Send us your resume and we'll get in touch.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <button
              onClick={() => setShowResumeModal(true)}
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all duration-300 font-montserrat bg-green-500 hover:bg-green-600 text-navy-900"
            >
              Send Your Resume <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Resume Modal */}
      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </div>
  )
}
