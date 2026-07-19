import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Database, Shield, CheckCircle, Clock, Users, Zap, ArrowUpRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Button from '../../components/common/Button'

const solutions = [
  {
    icon: Cloud,
    title: 'Swayam.Cloud',
    desc: 'A self-service cloud management platform that simplifies multi-cloud operations, governance, and cost optimization.',
    highlights: ['Multi-cloud visibility', 'Automated governance', 'Cost intelligence'],
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
  },
  {
    icon: Database,
    title: 'CloudStorz',
    desc: 'Enterprise-grade cloud storage solution with built-in security, encryption, and seamless scalability.',
    highlights: ['End-to-end encryption', 'Auto-scaling storage', '99.999% durability'],
    color: 'from-teal-500 to-emerald-500',
    bg: 'bg-teal-50',
    text: 'text-teal-600',
  },
  {
    icon: Shield,
    title: 'Cloud Governance Suite',
    desc: 'Comprehensive governance tools to enforce policies, manage compliance, and monitor cloud usage across your organization.',
    highlights: ['Policy automation', 'Compliance reporting', 'Real-time monitoring'],
    color: 'from-indigo-500 to-purple-500',
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
  },
]

const stats = [
  { value: '60%', label: 'Cost Reduction', icon: Zap },
  { value: '3x', label: 'Faster Deployment', icon: Clock },
  { value: '99.99%', label: 'Uptime SLA', icon: Shield },
  { value: '500+', label: 'Cloud Environments', icon: Users },
]

const processSteps = [
  { num: '01', title: 'Assess', desc: 'Evaluate your current cloud infrastructure and identify optimization opportunities.' },
  { num: '02', title: 'Architect', desc: 'Design a tailored cloud solution aligned with your business goals and compliance needs.' },
  { num: '03', title: 'Implement', desc: 'Deploy our cloud solutions with minimal disruption and maximum performance.' },
  { num: '04', title: 'Optimize', desc: 'Continuously monitor, tune, and evolve your cloud environment for peak efficiency.' },
]

const testimonials = [
  { quote: 'Swayam.Cloud reduced our cloud costs by 45% in the first quarter while improving governance across all our accounts.', author: 'Cloud Director', company: 'Enterprise Client' },
  { quote: 'The Cloud Governance Suite gave us complete visibility and control over our multi-cloud environment overnight.', author: 'VP of Infrastructure', company: 'Global Enterprise' },
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

export default function CloudSolutionFactory() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>Cloud Solution Factory | Ambifo Technology</title>
        <meta name="description" content="Accelerate cloud adoption with Ambifo's pre-built cloud solutions, governance tools, and best practices." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <FloatingOrb delay={0} x="5%" y="15%" size="w-96 h-96" color="bg-blue-500 opacity-[0.08]" />
        <FloatingOrb delay={2.5} x="70%" y="55%" size="w-80 h-80" color="bg-cyan-500 opacity-[0.06]" />
        <FloatingOrb delay={4.5} x="40%" y="5%" size="w-64 h-64" color="bg-purple-500 opacity-[0.04]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            <Cloud className="w-4 h-4" /> Solutions
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-montserrat mb-6 leading-tight">
            Cloud Solution<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">Factory</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Accelerate your cloud journey with our suite of purpose-built cloud solutions designed for enterprise scale and efficiency.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="secondary" href="/contact-us">
              Explore Solutions <ArrowRight className="w-5 h-5" />
            </Button>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 font-montserrat hover:-translate-y-0.5">
              Talk to an Expert <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative -mt-10 z-10 max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-xl md:text-2xl font-bold text-navy-900 font-montserrat">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Solutions ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">What We Build</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">Our Cloud Solutions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Enterprise-ready solutions that simplify cloud management, governance, and optimization.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <Link to="/this-solution-is-not-available" key={s.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-7 hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-blue-600/20 group relative overflow-hidden h-full"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500`} />
                  <div className="relative">
                    <span className="text-5xl font-bold text-gray-100 font-montserrat absolute -top-2 -left-1 select-none">{String(i + 1).padStart(2, '0')}</span>
                    <div className={`relative w-16 h-16 ${s.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <s.icon className={`w-8 h-8 ${s.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-5">{s.desc}</p>
                    <div className="space-y-2">
                      {s.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className={`w-4 h-4 ${s.text} flex-shrink-0`} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">How We Deliver</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
            {processSteps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="relative text-center">
                <div className="relative w-12 h-12 mx-auto mb-5 rounded-full bg-blue-600 flex items-center justify-center shadow-lg z-10">
                  <span className="text-sm font-bold text-white font-montserrat">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 font-montserrat mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white relative overflow-hidden"
              >
                <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5" />
                <p className="text-gray-300 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">{t.author.charAt(0)}</div>
                  <div>
                    <div className="text-sm font-semibold font-montserrat">{t.author}</div>
                    <div className="text-xs text-gray-500">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-center overflow-hidden">
        <FloatingOrb delay={0} x="10%" y="20%" size="w-72 h-72" color="bg-blue-500 opacity-[0.06]" />
        <FloatingOrb delay={2} x="70%" y="60%" size="w-80 h-80" color="bg-cyan-500 opacity-[0.05]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Ready to Transform Your Cloud?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-10 text-lg">Explore our cloud solutions and find the right fit for your business.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="secondary" href="/contact-us">Learn More <ArrowRight className="w-5 h-5" /></Button>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 font-montserrat hover:-translate-y-0.5">
              Schedule a Demo <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
