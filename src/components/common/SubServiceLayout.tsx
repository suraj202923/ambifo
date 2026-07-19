import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown, ArrowRight, CheckCircle, Lightbulb, Star, Zap,
  Database, Brain, Target, Route, Shield, Settings, BarChart3,
  RefreshCw, Code, Cloud, Monitor, MessageSquare, Image, Layers,
  Server, Clock, Award, Users, TrendingUp, ArrowUpRight, Quote,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Button from './Button'
import { accentMap } from '../../data/servicesData'

interface Feature {
  icon: string
  title: string
  desc: string
}

interface Detail {
  title: string
  items: string[]
}

interface SubServiceLayoutProps {
  title: string
  subtitle: string
  heroDesc: string
  accent: keyof typeof accentMap
  features: Feature[]
  details: Detail[]
  ctaText?: string
  ctaDesc?: string
  parentService: string
}

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Star, Zap, CheckCircle, ArrowRight,
  Database, Brain, Target, Route, Shield, Settings,
  BarChart3, RefreshCw, Code, Cloud, Monitor,
  MessageSquare, Image, Layers, Server,
}

const processSteps = [
  { num: '01', title: 'Discover', desc: 'We analyze your current state, challenges, and goals to build a clear picture.' },
  { num: '02', title: 'Design', desc: 'Our architects craft a tailored solution aligned with your business objectives.' },
  { num: '03', title: 'Deliver', desc: 'Agile implementation with continuous feedback, testing, and optimization.' },
  { num: '04', title: 'Optimize', desc: 'Ongoing monitoring, tuning, and evolution to maximize long-term value.' },
]

const techLogos = [
  { name: 'AWS', color: 'text-orange-500' },
  { name: 'Azure', color: 'text-blue-500' },
  { name: 'GCP', color: 'text-red-500' },
  { name: 'K8s', color: 'text-blue-600' },
  { name: 'Python', color: 'text-yellow-500' },
  { name: 'Terraform', color: 'text-purple-600' },
  { name: 'Docker', color: 'text-cyan-500' },
  { name: 'Spark', color: 'text-orange-400' },
]

const testimonials = [
  { quote: 'Their team delivered a solution that exceeded our expectations and transformed how we operate.', author: 'CTO', company: 'Fortune 500 Client' },
  { quote: 'Ambifo brought deep expertise and a collaborative approach that made our cloud journey seamless.', author: 'VP Engineering', company: 'Enterprise Client' },
  { quote: 'The ROI was evident within the first quarter. Their approach to modernization is truly best-in-class.', author: 'Director of IT', company: 'Global Enterprise' },
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

export default function SubServiceLayout({
  title, subtitle, heroDesc, accent, features, details,
  ctaText, ctaDesc, parentService,
}: SubServiceLayoutProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const a = accentMap[accent]

  const gradientMap: Record<string, string> = {
    blue: 'from-blue-500',
    teal: 'from-teal-500',
    purple: 'from-purple-500',
    orange: 'from-orange-500',
    green: 'from-green-500',
  }

  const accentBorderMap: Record<string, string> = {
    blue: 'border-blue-500/20',
    teal: 'border-teal-500/20',
    purple: 'border-purple-500/20',
    orange: 'border-orange-500/20',
    green: 'border-green-500/20',
  }

  const accentBgMap: Record<string, string> = {
    blue: 'bg-blue-500',
    teal: 'bg-teal-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
  }

  return (
    <div className="font-lato">
      <Helmet>
        <title>{title} | Ambifo Technology</title>
        <meta name="description" content={heroDesc} />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <FloatingOrb delay={0} x="5%" y="15%" size="w-80 h-80" color={`${gradientMap[accent]} opacity-[0.08]`} />
        <FloatingOrb delay={2.5} x="75%" y="60%" size="w-96 h-96" color={`${gradientMap[accent]} opacity-[0.06]`} />
        <FloatingOrb delay={4} x="40%" y="5%" size="w-64 h-64" color="bg-purple-500 opacity-[0.04]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className={`inline-flex items-center gap-2 px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full ${a.text} text-xs font-bold mb-6 font-montserrat tracking-widest uppercase`}>
              <span className={`w-2 h-2 rounded-full ${accentBgMap[accent]}`} />
              {parentService}
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat mb-6 leading-tight">
              {title}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              {heroDesc}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-wrap items-center gap-4">
              <Button variant="secondary" href="/contact-us">
                {ctaText || 'Get Started'} <ArrowRight className="w-5 h-5" />
              </Button>
              <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 font-montserrat hover:-translate-y-0.5">
                Talk to an Expert <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="relative -mt-10 z-10 max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`bg-white rounded-2xl shadow-xl border ${accentBorderMap[accent]} p-8 grid grid-cols-2 md:grid-cols-4 gap-6`}>
          {[
            { icon: Clock, label: 'Avg. Delivery', value: '6–12 Weeks' },
            { icon: Award, label: 'Success Rate', value: '99.9%' },
            { icon: Users, label: 'Engineers', value: '200+' },
            { icon: TrendingUp, label: 'Projects Delivered', value: '500+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className={`w-6 h-6 ${a.text} mx-auto mb-2`} />
              <div className="text-xl md:text-2xl font-bold text-navy-900 font-montserrat">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className={`text-sm font-semibold tracking-widest ${a.text} uppercase font-montserrat`}>What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">{subtitle}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Discover how our {title.toLowerCase()} service can transform your business.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = iconMap[f.icon] || Lightbulb
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-xl hover:border-blue-600/20 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${gradientMap[accent]} opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500`} />
                  <div className={`relative w-14 h-14 ${a.bg} rounded-xl flex items-center justify-center mb-5 ${a.group} transition-colors duration-500 group-hover:scale-110`}>
                    <Icon className={`relative w-7 h-7 ${a.text} ${a.groupText} transition-colors duration-500`} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Process Timeline ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className={`text-sm font-semibold tracking-widest ${a.text} uppercase font-montserrat`}>Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">How We Work</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A proven methodology refined across hundreds of enterprise engagements.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className={`relative w-12 h-12 mx-auto mb-5 rounded-full ${accentBgMap[accent]} flex items-center justify-center shadow-lg z-10`}>
                  <span className="text-sm font-bold text-white font-montserrat">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 font-montserrat mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Details Accordion ── */}
      {details.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className={`text-sm font-semibold tracking-widest ${a.text} uppercase font-montserrat`}>Deep Dive</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">How We Deliver</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">A comprehensive approach to delivering measurable results.</p>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-4">
              {details.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`rounded-2xl border overflow-hidden transition-all duration-500 ${openIndex === i ? `bg-white shadow-xl ${accentBorderMap[accent]}` : 'bg-gray-50 border-gray-200 hover:shadow-md'}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-10 h-10 rounded-xl ${a.bg} flex items-center justify-center text-sm font-bold ${a.text} font-montserrat`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-lg font-semibold text-navy-900 font-montserrat">{item.title}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                          <ul className="space-y-3">
                            {item.items.map((it) => (
                              <li key={it} className="flex items-start gap-3 text-gray-700">
                                <CheckCircle className={`w-5 h-5 ${a.text} mt-0.5 flex-shrink-0`} />
                                <span className="text-sm leading-relaxed">{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Technologies ── */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <span className={`text-sm font-semibold tracking-widest ${a.text} uppercase font-montserrat`}>Tech Stack</span>
            <h3 className="text-2xl font-bold text-navy-900 font-montserrat mt-2">Technologies We Work With</h3>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-wrap items-center justify-center gap-6">
            {techLogos.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-gray-300 transition-all duration-300"
              >
                <span className={`text-lg font-bold font-montserrat ${tech.color}`}>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute top-6 left-8 opacity-10">
              <Quote className="w-20 h-20 text-white" />
            </div>
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto italic">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${accentBgMap[accent]} flex items-center justify-center text-white font-bold text-sm`}>
                      {testimonials[activeTestimonial].author.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold font-montserrat text-sm">{testimonials[activeTestimonial].author}</div>
                      <div className="text-gray-400 text-xs">{testimonials[activeTestimonial].company}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="flex items-center justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'bg-yellow-400 w-8' : 'bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-center overflow-hidden">
        <FloatingOrb delay={0} x="10%" y="20%" size="w-72 h-72" color={`${gradientMap[accent]} opacity-[0.06]`} />
        <FloatingOrb delay={2} x="70%" y="60%" size="w-80 h-80" color="bg-cyan-500 opacity-[0.05]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
            Ready to Get Started?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
            {ctaDesc || 'Let our experts help you transform your business with our proven approach.'}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="secondary" href="/contact-us">
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Button>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 font-montserrat hover:-translate-y-0.5">
              Explore All Services <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
