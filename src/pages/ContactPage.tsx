import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle,
  ArrowRight, Sparkles, Globe, Headphones, Zap, ChevronDown,
  HelpCircle, Shield, Award, Users, Building2, Wifi,
  Rocket, Star,
} from 'lucide-react'
import Button from '../components/common/Button'
import { Helmet } from 'react-helmet-async'

const offices = [
  {
    city: 'Bangalore (HQ)',
    address: 'Building No 674, 18th Main, 3rd Phase, Front of New Land ISRO Quarter, Domlur, Bangalore - 560071',
    phone: ['+91 7776809021', '+91 9827135213'],
    email: 'support@ambifo.com',
    hours: 'Mon - Fri, 9:00 AM - 6:00 PM IST',
    flag: '\uD83C\uDDEE\uD83C\uDDF3',
    timezone: 'IST (UTC+5:30)',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    city: 'Nagpur',
    address: 'G/1, Mahalaxmi Residency, Narsala, Nagpur, 440034, Maharashtra',
    phone: ['+91 7776809021', '+91 9827135213'],
    email: 'support@ambifo.com',
    hours: 'Mon - Fri, 9:00 AM - 6:00 PM IST',
    flag: '\uD83C\uDDEE\uD83C\uDDF3',
    timezone: 'IST (UTC+5:30)',
    color: 'from-teal-500 to-emerald-600',
  },
]

const features = [
  { icon: Zap, title: '24h Response', desc: 'We reply to every inquiry within one business day.', gradient: 'from-amber-400 to-orange-500' },
  { icon: Headphones, title: 'Expert Guidance', desc: 'Speak directly with certified cloud architects.', gradient: 'from-blue-500 to-indigo-600' },
  { icon: Globe, title: 'Global Delivery', desc: 'Onshore, offshore, and hybrid models worldwide.', gradient: 'from-teal-400 to-cyan-600' },
  { icon: Sparkles, title: 'Free Discovery Call', desc: 'Complimentary 30-min strategy session.', gradient: 'from-purple-500 to-pink-600' },
]

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: Rocket },
  { value: '99.9%', label: 'Client Satisfaction', icon: Star },
  { value: '200+', label: 'Cloud Engineers', icon: Users },
  { value: '24h', label: 'Avg. Response Time', icon: Clock },
]

const trustBadges = [
  { icon: Shield, label: 'AWS Advanced Partner' },
  { icon: Award, label: 'Azure Expert MSP' },
  { icon: Building2, label: 'ISO 27001 Certified' },
  { icon: Globe, label: 'Serving 8+ Countries' },
]

const faqs = [
  { q: 'What services does Ambifo offer?', a: 'We offer Cloud Migration, DevOps, AI & Data Analytics, App Modernization, Generative AI, and Cybersecurity consulting for enterprises across industries.' },
  { q: 'How quickly can you start a project?', a: 'We can kick off most projects within 1-2 weeks. For urgent needs, we offer accelerated onboarding with dedicated teams.' },
  { q: 'Do you work with startups or only enterprises?', a: 'We work with both. Our flexible engagement models scale from early-stage startups to Fortune 500 enterprises.' },
  { q: 'What is the typical project engagement model?', a: 'We offer fixed-price, time & material, and dedicated team models. We will recommend the best fit based on your requirements during the discovery call.' },
  { q: 'Do you offer free consultations?', a: 'Yes! We offer a complimentary 30-minute discovery call with a certified cloud architect to understand your needs and recommend a path forward.' },
  { q: 'What industries do you serve?', a: 'We serve healthcare, fintech, e-commerce, manufacturing, SaaS, logistics, and government sectors with industry-specific solutions.' },
]

function FloatingOrb({ delay, x, y, size, color }: { delay: number; x: string; y: string; size: string; color: string }) {
  return (
    <motion.div
      className={`absolute ${size} rounded-full blur-3xl ${color}`}
      style={{ left: x, top: y }}
      animate={{ y: [0, -15, 0, 15, 0], x: [0, 8, 0, -8, 0], scale: [1, 1.08, 1, 0.92, 1] }}
      transition={{ duration: 7, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0)
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10)
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (isNaN(numericPart)) { setCount(0); return }
    let start = 0
    const duration = 1500
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * numericPart))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [numericPart])

  return <span>{count}{suffix}</span>
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', phone: '', service: '', message: '' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formStep, setFormStep] = useState(0)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.firstName.trim()) errs.firstName = 'First name is required'
    if (!form.lastName.trim()) errs.lastName = 'Last name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const formFields = [
    [
      { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'John', required: true },
      { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Doe', required: true },
    ],
    [
      { name: 'email', label: 'Email', type: 'email', placeholder: 'john@company.com', required: true },
      { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: false },
    ],
    [
      { name: 'company', label: 'Company', type: 'text', placeholder: 'Company name', required: false },
      { name: 'service', label: 'Service Interest', type: 'select', placeholder: '', required: false, options: ['Cloud Migration', 'AI & Data Analytics', 'App Modernization', 'DevSecOps', 'Managed Services', 'Strategy & Advisory', 'Other'] },
    ],
    [
      { name: 'message', label: 'How can we help?', type: 'textarea', placeholder: 'Tell us about your project, goals, or questions...', required: true },
    ],
  ]

  return (
    <div className="font-lato">
      <Helmet>
        <title>Contact Us | Ambifo Technology</title>
        <meta name="description" content="Get in touch with Ambifo Technology for cloud consulting, DevOps, and AI solutions." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <FloatingOrb delay={0} x="5%" y="15%" size="w-96 h-96" color="bg-blue-500 opacity-[0.08]" />
        <FloatingOrb delay={2.5} x="70%" y="55%" size="w-80 h-80" color="bg-cyan-500 opacity-[0.06]" />
        <FloatingOrb delay={4.5} x="40%" y="5%" size="w-64 h-64" color="bg-purple-500 opacity-[0.04]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600/15 border border-blue-500/20 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            <MessageSquare className="w-4 h-4" /> Let's Build Something Great
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-montserrat mb-6 leading-tight">
            Ready to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Transform?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Whether you have a question, need a quote, or want to discuss your cloud strategy — we're here to help.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-400" /> +91 7776809021</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-400" /> +91 9827135213</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-cyan-400" /> support@ambifo.com</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400" /> Mon-Fri, 9AM-6PM IST</span>
          </motion.div>
        </div>
      </section>

      {/* ── Features Strip ── */}
      <section className="relative -mt-10 z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-navy-900 font-montserrat text-sm mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-7 h-7 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Offices ── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — 3 cols */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/40 border border-gray-100 relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-2xl" />

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
                      className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-navy-900 font-montserrat mb-3">Message Sent!</h3>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">Thank you for reaching out. Our team will review your message and get back to you within 24 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', company: '', phone: '', service: '', message: '' }); setFormStep(0) }}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors font-montserrat"
                    >
                      Send another message <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-navy-900 font-montserrat">Send a Message</h2>
                    </div>
                    <p className="text-gray-500 text-sm mb-6 ml-[52px]">Fill out the form and we'll get back to you promptly.</p>

                    {/* Step indicator */}
                    <div className="flex items-center gap-2 mb-8 ml-[52px]">
                      {formFields.map((_, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-montserrat transition-all duration-300 ${
                              i <= formStep
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                                : 'bg-gray-100 text-gray-400'
                            }`}
                          >
                            {i < formStep ? <CheckCircle className="w-4 h-4" /> : i + 1}
                          </div>
                          {i < formFields.length - 1 && (
                            <div className={`w-8 h-0.5 rounded-full transition-all duration-300 ${i < formStep ? 'bg-blue-600' : 'bg-gray-200'}`} />
                          )}
                        </div>
                      ))}
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={formStep}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-5"
                        >
                          {formFields[formStep].map((field) => (
                            <div key={field.name}>
                              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">
                                {field.label} {field.required && '*'}
                              </label>
                              {field.type === 'textarea' ? (
                                <textarea
                                  name={field.name}
                                  value={(form as Record<string, string>)[field.name] || ''}
                                  onChange={handleChange}
                                  rows={4}
                                  className={`w-full px-4 py-3 rounded-xl border ${
                                    errors[field.name]
                                      ? 'border-red-400 bg-red-50/50'
                                      : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/30'
                                  } outline-none transition-all resize-none text-sm`}
                                  placeholder={field.placeholder}
                                />
                              ) : field.type === 'select' ? (
                                <select
                                  name={field.name}
                                  value={(form as Record<string, string>)[field.name] || ''}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:bg-blue-50/30 outline-none transition-all text-sm bg-white"
                                >
                                  <option value="">Select a service</option>
                                  {field.options?.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                  ))}
                                </select>
                              ) : (
                                <input
                                  type={field.type}
                                  name={field.name}
                                  value={(form as Record<string, string>)[field.name] || ''}
                                  onChange={handleChange}
                                  className={`w-full px-4 py-3 rounded-xl border ${
                                    errors[field.name]
                                      ? 'border-red-400 bg-red-50/50'
                                      : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50/30'
                                  } outline-none transition-all text-sm`}
                                  placeholder={field.placeholder}
                                />
                              )}
                              {errors[field.name] && <p className="text-red-500 text-xs mt-1 font-medium">{errors[field.name]}</p>}
                            </div>
                          ))}
                        </motion.div>
                      </AnimatePresence>

                      <div className="flex items-center gap-3 pt-2">
                        {formStep > 0 && (
                          <button
                            type="button"
                            onClick={() => setFormStep(formStep - 1)}
                            className="px-6 py-3 border border-gray-200 text-gray-600 font-semibold text-sm rounded-xl hover:bg-gray-50 transition-all font-montserrat"
                          >
                            Back
                          </button>
                        )}
                        {formStep < formFields.length - 1 ? (
                          <button
                            type="button"
                            onClick={() => setFormStep(formStep + 1)}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold text-sm rounded-xl hover:bg-blue-600 transition-all font-montserrat shadow-md hover:shadow-lg hover:-translate-y-0.5"
                          >
                            Continue <ArrowRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <Button className="w-full justify-center group" type="submit">
                            Send Message <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </Button>
                        )}
                      </div>
                      <p className="text-center text-xs text-gray-400">We'll never share your information. Read our <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>.</p>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Offices — 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-2xl font-bold text-navy-900 font-montserrat mb-6">Our Offices</h2>
              </motion.div>

              {offices.map((office, i) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${office.color}`} />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-[60px] group-hover:from-blue-500/10 transition-colors" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${office.color} flex items-center justify-center`}>
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 font-montserrat">{office.flag} {office.city}</h3>
                      <span className="text-xs text-gray-400 flex items-center gap-1"><Wifi className="w-3 h-3" /> {office.timezone}</span>
                    </div>
                  </div>
                  <div className="space-y-2.5 text-gray-600 text-sm ml-[52px]">
                    <p className="flex items-start gap-2.5"><MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" /> <span className="leading-relaxed">{office.address}</span></p>
                    {office.phone.map((p) => (
                      <p key={p} className="flex items-center gap-2.5"><Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" /> {p}</p>
                    ))}
                    <p className="flex items-center gap-2.5"><Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" /> {office.email}</p>
                    <p className="flex items-center gap-2.5"><Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" /> {office.hours}</p>
                  </div>
                </motion.div>
              ))}

              {/* Need Help Card */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Headphones className="w-5 h-5 text-cyan-300" />
                    <h4 className="font-bold font-montserrat">Need Immediate Help?</h4>
                  </div>
                  <p className="text-blue-100 text-sm mb-4 leading-relaxed">Call us directly or schedule a free 30-minute consultation with one of our cloud experts.</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="tel:+917776809021" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-semibold transition-all border border-white/10 hover:-translate-y-0.5">
                      <Phone className="w-3.5 h-3.5" /> 7776809021
                    </a>
                    <a href="tel:+919827135213" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-semibold transition-all border border-white/10 hover:-translate-y-0.5">
                      <Phone className="w-3.5 h-3.5" /> 9827135213
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badges */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="text-sm font-bold text-navy-900 font-montserrat mb-4">Certifications & Partners</h4>
                <div className="grid grid-cols-2 gap-3">
                  {trustBadges.map((badge) => (
                    <div key={badge.label} className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 border border-gray-100">
                      <badge.icon className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-xs font-medium text-gray-700">{badge.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-montserrat">
              <HelpCircle className="w-4 h-4" /> FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-sm">Got questions? We've got answers.</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`rounded-2xl border transition-all duration-300 ${openFaq === i ? 'bg-blue-50/50 border-blue-200 shadow-md shadow-blue-100/30' : 'bg-gray-50 border-gray-100 hover:border-gray-200 hover:shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-navy-900 font-montserrat text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-blue-500' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <FloatingOrb delay={0} x="10%" y="20%" size="w-72 h-72" color="bg-blue-500 opacity-[0.06]" />
        <FloatingOrb delay={2} x="70%" y="60%" size="w-80 h-80" color="bg-cyan-500 opacity-[0.05]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
            Start Your Cloud Journey Today
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-10 text-lg">
            Book a free consultation call with our experts and discover how Ambifo can accelerate your digital transformation.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" href="tel:+917776809021" className="shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/30 hover:-translate-y-0.5">
              <Phone className="w-4 h-4" /> Call: 7776809021
            </Button>
            <Button variant="secondary" href="tel:+919827135213" className="shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/30 hover:-translate-y-0.5">
              <Phone className="w-4 h-4" /> Call: 9827135213
            </Button>
            <Button variant="outline" href="/services/strategy-and-advisory" className="border-white/20 text-white hover:bg-white/10 hover:-translate-y-0.5">
              Explore Services <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
