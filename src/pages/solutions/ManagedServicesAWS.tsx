import { motion } from 'framer-motion'
import { ArrowRight, Clock, Shield, TrendingDown, Users, ArrowUpRight, CheckCircle, Activity, DollarSign, ShieldCheck, RefreshCw, Settings, Quote, Cloud } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Button from '../../components/common/Button'

const solutions = [
  {
    icon: Activity,
    title: '24x7 Monitoring & Incident Management',
    desc: 'Maintain high availability through proactive monitoring, automated alerting, and swift issue resolution.',
    highlights: ['Real-time visibility', 'Reduced downtime', 'Proactive remediation'],
    color: 'from-green-500 to-emerald-500',
    bg: 'bg-green-50',
    text: 'text-green-600',
    link: '/solutions/managed-services/monitoring-incident-management',
  },
  {
    icon: DollarSign,
    title: 'Cloud Cost Optimization & FinOps',
    desc: 'Keep spend under control with data-driven cost analysis, forecasting, and optimization.',
    highlights: ['Full budget visibility', 'Up to 30%+ savings', 'FinOps at every stage'],
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    link: '/solutions/managed-services/cost-optimization-finops',
  },
  {
    icon: ShieldCheck,
    title: 'Security, Governance & Compliance',
    desc: 'Protect your assets with comprehensive cloud security, identity management, and regulatory compliance.',
    highlights: ['PCI-DSS, HIPAA, ISO compliant', 'Automated security policies', 'Guardrails and policies'],
    color: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    link: '/solutions/managed-services/security-governance-compliance',
  },
  {
    icon: RefreshCw,
    title: 'Backup, DR & Business Continuity',
    desc: 'Safeguard critical workloads through resilient backups, cross-region redundancy, and DR planning.',
    highlights: ['Reliable RTO/RPO targets', 'Always-on resilience', 'Business continuity'],
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    link: '/solutions/managed-services/backup-dr-business-continuity',
  },
  {
    icon: Settings,
    title: 'DevOps & Infrastructure Automation',
    desc: 'Accelerate deployments with automated provisioning, CI/CD pipelines, and infrastructure as code.',
    highlights: ['Fewer manual errors', 'Faster release cycles', 'Scalable IaC'],
    color: 'from-teal-500 to-green-500',
    bg: 'bg-teal-50',
    text: 'text-teal-600',
    link: '/solutions/managed-services/devops-infrastructure-automation',
  },
]

const stats = [
  { value: '24/7', label: 'Monitoring', icon: Clock },
  { value: '99.9%', label: 'Uptime SLA', icon: Shield },
  { value: '30%', label: 'Cost Savings', icon: TrendingDown },
  { value: '150+', label: 'Managed Accounts', icon: Users },
]

const processSteps = [
  { num: '01', title: 'Discover', desc: 'Assess your current infrastructure, workloads, and operational requirements.' },
  { num: '02', title: 'Design', desc: 'Build tailored management frameworks aligned with your business goals.' },
  { num: '03', title: 'Implement', desc: 'Deploy monitoring, security, and automation tools across your environment.' },
  { num: '04', title: 'Operate', desc: 'Provide ongoing 24/7 management, optimization, and continuous improvement.' },
]

const testimonials = [
  { quote: 'Their managed services reduced our operational overhead by 50% while improving our SLA from 99.5% to 99.99%.', author: 'VP of Infrastructure', company: 'Financial Services Client' },
  { quote: 'The FinOps practice alone saved us $200K annually without any performance degradation.', author: 'CFO', company: 'Enterprise Client' },
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

export default function ManagedServicesAWS() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>Managed Services – AWS | Ambifo Technology</title>
        <meta name="description" content="24/7 AWS managed services including monitoring, cost optimization, security, and infrastructure automation." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <FloatingOrb delay={0} x="5%" y="15%" size="w-96 h-96" color="bg-green-500 opacity-[0.08]" />
        <FloatingOrb delay={2.5} x="70%" y="55%" size="w-80 h-80" color="bg-emerald-500 opacity-[0.06]" />
        <FloatingOrb delay={4.5} x="40%" y="5%" size="w-64 h-64" color="bg-teal-500 opacity-[0.04]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            <Cloud className="w-4 h-4" /> Managed Services
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-montserrat mb-6 leading-tight">
            Managed Services<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">AWS</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            End-to-end AWS management covering monitoring, cost optimization, security, compliance, and infrastructure automation — so you can focus on your business.
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
              <stat.icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-xl md:text-2xl font-bold text-navy-900 font-montserrat">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Solutions Grid ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-green-600 uppercase font-montserrat">What We Manage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">Our Managed Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive AWS managed services designed to keep your cloud secure, optimized, and running smoothly around the clock.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <Link to={s.link} key={s.title}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-2xl p-7 hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-green-600/20 group relative overflow-hidden h-full">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500`} />
                  <div className="relative">
                    <span className="text-5xl font-bold text-gray-100 font-montserrat absolute -top-2 -left-1 select-none">{String(i + 1).padStart(2, '0')}</span>
                    <div className={`relative w-16 h-16 ${s.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <s.icon className={`w-8 h-8 ${s.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-3 group-hover:text-green-600 transition-colors">{s.title}</h3>
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
            <span className="text-sm font-semibold tracking-widest text-green-600 uppercase font-montserrat">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">How We Deliver</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
            {processSteps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="relative text-center">
                <div className="relative w-12 h-12 mx-auto mb-5 rounded-full bg-green-600 flex items-center justify-center shadow-lg z-10">
                  <span className="text-sm font-bold text-white font-montserrat">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 font-montserrat mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white relative overflow-hidden">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5" />
                <p className="text-gray-300 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">{t.author.charAt(0)}</div>
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
        <FloatingOrb delay={0} x="10%" y="20%" size="w-72 h-72" color="bg-green-500 opacity-[0.06]" />
        <FloatingOrb delay={2} x="70%" y="60%" size="w-80 h-80" color="bg-emerald-500 opacity-[0.05]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Simplify Your Cloud Operations</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-10 text-lg">Let our team manage your AWS environment so you can focus on innovation and growth.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="secondary" href="/contact-us">Get Started <ArrowRight className="w-5 h-5" /></Button>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 font-montserrat hover:-translate-y-0.5">
              Schedule a Demo <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
