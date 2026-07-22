import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Briefcase, Users, TrendingUp, Globe, Heart, Zap, GraduationCap, MapPin, ChevronRight, X, Send, CheckCircle } from 'lucide-react'
import Button from '../../components/common/Button'
import { Helmet } from 'react-helmet-async'

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

const positions = [
  { title: 'Senior Cloud Architect', location: 'Hyderabad, India', type: 'Full-time', level: 'Senior', team: 'Cloud Solutions' },
  { title: 'AI/ML Engineer', location: 'Bangalore, India', type: 'Full-time', level: 'Mid-Senior', team: 'AI/ML Practice' },
  { title: 'DevSecOps Consultant', location: 'Remote', type: 'Full-time', level: 'Senior', team: 'DevOps' },
  { title: 'Data Engineer', location: 'Hyderabad, India', type: 'Full-time', level: 'Mid', team: 'Data & Analytics' },
  { title: 'Solution Architect - AWS', location: 'Singapore', type: 'Full-time', level: 'Senior', team: 'Cloud Solutions' },
  { title: 'Project Manager - Cloud Migration', location: 'Malaysia', type: 'Contract', level: 'Senior', team: 'Delivery' },
]

interface ApplicationFormProps {
  position: string
  onClose: () => void
}

function ApplicationForm({ position, onClose }: ApplicationFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setSending(true)

    try {
      const API_URL = import.meta.env.VITE_API_URL || ''
      const response = await fetch(`${API_URL}/api/careers/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, position }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors)
        } else {
          setErrors({ submit: data.error || 'Failed to submit application. Please try again.' })
        }
        return
      }

      setSubmitted(true)
    } catch {
      setErrors({ submit: 'Network error. Please check your connection and try again.' })
    } finally {
      setSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
              className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-200"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-2">Application Submitted!</h3>
            <p className="text-gray-500 text-sm mb-6">Thank you for applying for the <strong>{position}</strong> position. Our team will review your application and get back to you within 5 business days.</p>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold text-sm rounded-xl hover:bg-navy-800 transition-colors font-montserrat"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-navy-900 font-montserrat">Apply for Position</h3>
                <p className="text-sm text-gray-500 mt-1">{position}</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                    errors.name ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/30'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                    errors.email ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/30'
                  }`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-blue-50/30 outline-none transition-all text-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">
                  Cover Letter / Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-blue-50/30 outline-none transition-all text-sm resize-none"
                  placeholder="Tell us why you're a great fit for this role..."
                />
              </div>

              {errors.submit && (
                <p className="text-red-500 text-xs text-center font-medium">{errors.submit}</p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 font-semibold text-sm rounded-xl hover:bg-gray-50 transition-all font-montserrat"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-navy-900 font-semibold text-sm rounded-xl hover:bg-green-600 transition-all font-montserrat disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-center text-xs text-gray-400">We'll review your application and get back to you within 5 business days.</p>
            </form>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)

  return (
    <div className="font-lato">
      <Helmet>
        <title>Careers | Ambifo Technology</title>
        <meta name="description" content="Join Ambifo Technology - explore open positions in cloud, AI, and DevOps." />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            We're Hiring
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Build Your Future<br />With Ambifo
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Join Ambifo and be part of a team that's shaping the future of cloud and AI technology across the globe.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            <Button variant="primary" href="#positions">
              View Open Positions <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Ambifo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Why Ambifo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4 font-montserrat">Why You'll Love Working Here</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We offer an environment where talented professionals can thrive and grow.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:border-blue-600/20 transition-all duration-500">
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
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Our Culture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4 font-montserrat">What Drives Us</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-500 text-center group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors duration-500">
                  <v.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
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
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4 font-montserrat">Find Your Role</h2>
            <p className="text-gray-500">Explore current opportunities and find your perfect fit at Ambifo.</p>
          </motion.div>
          <div className="space-y-4">
            {positions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-white rounded-2xl p-6 md:p-7 border border-gray-200 hover:border-blue-600/30 hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-navy-900 font-montserrat">{pos.title}</h3>
                    <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${pos.type === 'Full-time' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-amber-50 text-amber-700 border border-amber-100'}`}>
                      {pos.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{pos.location}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{pos.level}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{pos.team}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPosition(pos.title)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-navy-900 font-semibold text-sm rounded-lg transition-all duration-300 font-montserrat shrink-0"
                >
                  Apply Now <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Don't See the Right Role?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">We're always looking for talented individuals. Send us your resume and we'll get in touch.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="primary" href="/contact-us">
              Send Your Resume <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedPosition && (
          <ApplicationForm
            position={selectedPosition}
            onClose={() => setSelectedPosition(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
