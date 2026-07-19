import { motion } from 'framer-motion'
import { ArrowRight, Bot, Cpu, Network, CheckCircle, Users, Zap, ArrowUpRight, Quote, Brain, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Button from '../../components/common/Button'

const solutions = [
  {
    icon: Bot,
    title: 'Swayam.AI',
    desc: 'An AI-powered platform that enables organizations to build, deploy, and manage intelligent applications at scale.',
    highlights: ['No-code model building', 'Multi-environment deploy', 'Centralized management'],
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
  },
  {
    icon: Cpu,
    title: 'ML Model Marketplace',
    desc: 'Access pre-trained machine learning models and accelerate your AI initiatives with ready-to-deploy solutions.',
    highlights: ['200+ pre-trained models', 'One-click deployment', 'Custom fine-tuning'],
    color: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
  },
  {
    icon: Network,
    title: 'AI Orchestration Engine',
    desc: 'Orchestrate complex AI workflows and pipelines with an intuitive drag-and-drop interface.',
    highlights: ['Visual pipeline builder', 'Auto-scaling inference', 'Real-time monitoring'],
    color: 'from-teal-500 to-cyan-500',
    bg: 'bg-teal-50',
    text: 'text-teal-600',
  },
]

const stats = [
  { value: '10x', label: 'Faster AI Deployment', icon: Zap },
  { value: '85%', label: 'Model Accuracy', icon: Brain },
  { value: '200+', label: 'Pre-trained Models', icon: Cpu },
  { value: '50+', label: 'Enterprise Clients', icon: Users },
]

const processSteps = [
  { num: '01', title: 'Discover', desc: 'Identify high-impact AI use cases aligned with your business objectives.' },
  { num: '02', title: 'Build', desc: 'Develop and train models using our AI Factory framework and tools.' },
  { num: '03', title: 'Deploy', desc: 'Launch models to production with automated pipelines and monitoring.' },
  { num: '04', title: 'Scale', desc: 'Expand AI capabilities across your organization with governance and control.' },
]

const capabilities = [
  { icon: Brain, title: 'Predictive Analytics', desc: 'Forecast trends and outcomes with ML-powered prediction engines.' },
  { icon: Sparkles, title: 'Natural Language', desc: 'Process, understand, and generate human language at scale.' },
  { icon: Network, title: 'Computer Vision', desc: 'Extract insights from images, video, and visual data streams.' },
  { icon: Bot, title: 'AI Agents', desc: 'Deploy autonomous agents that reason, plan, and execute complex tasks.' },
]

const testimonials = [
  { quote: 'Swayam.AI cut our model deployment time from weeks to hours. The marketplace alone saved us months of development.', author: 'Head of AI', company: 'Fortune 500 Client' },
  { quote: 'The AI Orchestration Engine transformed how our data science team collaborates and delivers models to production.', author: 'CTO', company: 'Enterprise Client' },
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

export default function AISolutionFactory() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>AI Solution Factory | Ambifo Technology</title>
        <meta name="description" content="Deploy enterprise AI at scale with Ambifo's pre-built AI solutions, ML pipelines, and orchestration tools." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <FloatingOrb delay={0} x="5%" y="15%" size="w-96 h-96" color="bg-purple-500 opacity-[0.08]" />
        <FloatingOrb delay={2.5} x="70%" y="55%" size="w-80 h-80" color="bg-pink-500 opacity-[0.06]" />
        <FloatingOrb delay={4.5} x="40%" y="5%" size="w-64 h-64" color="bg-blue-500 opacity-[0.04]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            <Brain className="w-4 h-4" /> Solutions
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-montserrat mb-6 leading-tight">
            AI Solution<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">Factory</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Build, deploy, and scale AI-powered solutions rapidly with our AI Solution Factory framework and platform.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="secondary" href="/contact-us">
              Start Building <ArrowRight className="w-5 h-5" />
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
              <stat.icon className="w-6 h-6 text-purple-600 mx-auto mb-2" />
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
            <span className="text-sm font-semibold tracking-widest text-purple-600 uppercase font-montserrat">What We Build</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">Our AI Solutions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Enterprise AI platforms that turn data into decisions and automation into advantage.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <Link to="/this-solution-is-not-available" key={s.title}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl p-7 hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-purple-600/20 group relative overflow-hidden h-full">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-500`} />
                  <div className="relative">
                    <span className="text-5xl font-bold text-gray-100 font-montserrat absolute -top-2 -left-1 select-none">{String(i + 1).padStart(2, '0')}</span>
                    <div className={`relative w-16 h-16 ${s.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <s.icon className={`w-8 h-8 ${s.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-3 group-hover:text-purple-600 transition-colors">{s.title}</h3>
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

      {/* ── Capabilities ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-purple-600 uppercase font-montserrat">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">AI Technologies We Master</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-purple-200 transition-all duration-500 text-center group">
                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-500">
                  <c.icon className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-base font-bold text-navy-900 font-montserrat mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-purple-600 uppercase font-montserrat">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">How We Deliver AI</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
            {processSteps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="relative text-center">
                <div className="relative w-12 h-12 mx-auto mb-5 rounded-full bg-purple-600 flex items-center justify-center shadow-lg z-10">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white relative overflow-hidden">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5" />
                <p className="text-gray-300 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">{t.author.charAt(0)}</div>
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
        <FloatingOrb delay={0} x="10%" y="20%" size="w-72 h-72" color="bg-purple-500 opacity-[0.06]" />
        <FloatingOrb delay={2} x="70%" y="60%" size="w-80 h-80" color="bg-pink-500 opacity-[0.05]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Accelerate Your AI Journey</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-10 text-lg">Let our AI experts help you build intelligent solutions that drive business value.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="secondary" href="/contact-us">Start Building <ArrowRight className="w-5 h-5" /></Button>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 font-montserrat hover:-translate-y-0.5">
              Schedule a Demo <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
