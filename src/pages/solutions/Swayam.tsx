import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronRight, CheckCircle, Cloud, Brain, BarChart3, Eye, ArrowUpRight, Quote, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Button from '../../components/common/Button'

const tabs = [
  { id: 'cloud', label: 'Swayam.Cloud', icon: Cloud, color: 'from-blue-500 to-cyan-500', accent: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'ai', label: 'Swayam.AI', icon: Brain, color: 'from-purple-500 to-pink-500', accent: 'text-purple-600', bg: 'bg-purple-50' },
  { id: 'mlops', label: 'MLOps', icon: BarChart3, color: 'from-teal-500 to-emerald-500', accent: 'text-teal-600', bg: 'bg-teal-50' },
  { id: 'observe', label: 'Swayam.Observe', icon: Eye, color: 'from-orange-500 to-amber-500', accent: 'text-orange-600', bg: 'bg-orange-50' },
]

const tabContent: Record<string, {
  title: string
  subtitle: string
  description: string
  features: string[]
  highlights: string[]
  useCases: string[]
  stats: { value: string; label: string }[]
}> = {
  cloud: {
    title: 'Swayam.Cloud',
    subtitle: 'Streamlining Cloud Adoption',
    description: "Ambifo's flagship platform that simplifies the cloud adoption process. It is designed to make cloud migration seamless, secure, and highly efficient, allowing businesses to focus on growth rather than infrastructure challenges.",
    features: [
      'Cloud Management: Monitor, manage, and optimize your entire cloud environment using intuitive dashboards and real-time insights',
      'Compliance and Security: Stay compliant with industry regulations while ensuring your data is protected with advanced security measures',
      'Cost Optimization: Automate cost management with intelligent recommendations and adjustments, helping you minimize spend and maximize value',
      'Well-Architected Framework Review (WAFR): Swayam.Cloud automates the WAFR process by combining AI with expert analysis',
    ],
    highlights: [
      'Trusted by AWS for conducting 100+ Well-Architected Framework Reviews',
      'Up to 60% Enhanced Cost Optimization',
      'Up to 40% Improved Performance Efficiency',
      'Up to 80% Increased Operational Resilience',
    ],
    useCases: [
      'Multi-cloud environment management and governance',
      'Automated compliance monitoring and reporting',
      'Cost optimization across cloud subscriptions',
      'Well-Architected Framework Reviews at scale',
    ],
    stats: [
      { value: '100+', label: 'WAFRs Completed' },
      { value: '60%', label: 'Cost Savings' },
      { value: '40%', label: 'Performance Gain' },
      { value: '80%', label: 'Resilience Boost' },
    ],
  },
  ai: {
    title: 'Swayam.AI',
    subtitle: 'Unleash the Power of AI for Your Business',
    description: 'Swayam.AI brings the power of Artificial Intelligence to your fingertips, enabling businesses to analyze data, gain insights, and automate tasks with ease. From streamlining AI development to deploying models in various environments.',
    features: [
      'Streamlined AI Model Development: Simplify the development of custom AI models, even for non-technical teams',
      'Seamless Deployment: Deploy AI models across cloud, on-premises, and edge environments with minimal effort',
      'Centralized Model Management: Manage the entire AI lifecycle from development to deployment',
      'Actionable Insights: Unlock real-time analytics and insights that empower data-driven decision-making',
      'Intelligent Automation: Automate routine tasks and workflows, freeing up time for strategic initiatives',
      'Self-Learning Models: Leverage models that continuously improve over time',
    ],
    highlights: [
      'Accelerate Innovation: Shorten the time to deploy AI solutions',
      'Boost Efficiency and Productivity: Automate labor-intensive tasks',
      'Data-Driven Decision Making: Make real-time, informed decisions with AI-powered insights',
    ],
    useCases: [
      'Manufacturing: Automate production processes, improve quality control',
      'Finance: Detect fraud, segment customers, forecast market trends',
      'Healthcare: Enhance diagnostic accuracy, personalize treatment plans',
      'Retail: Personalize customer experiences, optimize marketing campaigns',
    ],
    stats: [
      { value: '10x', label: 'Faster Deployment' },
      { value: '85%', label: 'Model Accuracy' },
      { value: '50%', label: 'Cost Reduction' },
      { value: '3x', label: 'ROI Improvement' },
    ],
  },
  mlops: {
    title: 'MLOps with Swayam.AI',
    subtitle: 'Powering Your Machine Learning Journey',
    description: "Swayam.AI's MLOps platform streamlines the machine learning lifecycle, simplifying collaboration, model deployment, and experiment tracking. It's the one-stop solution for managing your AI and ML operations.",
    features: [
      'Collaborative Workspace: Facilitate seamless collaboration between data scientists and ML engineers',
      'Centralized Feature Store: Reuse features across multiple models, reducing duplication',
      'Effortless Experiment Tracking: Track, compare, and optimize machine learning experiments',
      'Streamlined Model Deployment: Deploy ML models as APIs effortlessly',
      'Open Source & Community-Driven: Leverage and contribute to open-source tools',
    ],
    highlights: [
      'Accelerate Innovation: Speed up development cycles and deploy models faster',
      'Enhanced Collaboration: Ensure smooth teamwork between data scientists and engineers',
      'Simplified Management: Manage the entire ML lifecycle from a single platform',
      'Cost-Effective: Eliminate the need for multiple tools',
    ],
    useCases: [
      'Data Science Teams: Manage AI projects efficiently, collaborate seamlessly',
      'Machine Learning Engineers: Deploy models into production quickly',
      'Enterprises of All Sizes: Implement a robust MLOps platform that scales',
    ],
    stats: [
      { value: '5x', label: 'Faster Iteration' },
      { value: '90%', label: 'Reproducibility' },
      { value: '60%', label: 'Less Tooling Cost' },
      { value: '100%', label: 'Audit Trail' },
    ],
  },
  observe: {
    title: 'Swayam.Observe',
    subtitle: 'Intelligent Observability for Containers',
    description: "Ambifo's advanced container observability platform, providing real-time monitoring, alerting, and diagnostics to ensure the reliability and performance of your infrastructure and applications.",
    features: [
      'Real-Time Monitoring: Gain immediate insights into the health and performance of your containers',
      'AI/ML Diagnostic Insights: Utilize AI-driven diagnostics for faster troubleshooting and predictive analytics',
      'Unified Data Collection: Aggregate and analyze data from various sources',
      'Customizable Dashboards: Leverage Grafana-powered dashboards tailored to specific workloads',
    ],
    highlights: [
      'Predictive Monitoring: Use AI/ML to forecast potential issues',
      'Automated Insights: Receive AI-generated insights and alerts',
      'Proactive Optimization: Identify areas for improvement through AI-driven analytics',
    ],
    useCases: [
      'Containerized Application Monitoring: Track performance of containerized apps',
      'Infrastructure Management: Monitor complex infrastructures with centralized visibility',
      'DevOps & CI/CD Integration: Seamlessly integrate observability with CI/CD pipelines',
      'Regulatory Compliance & Reporting: Ensure compliance with audit logs and real-time monitoring',
    ],
    stats: [
      { value: '99.99%', label: 'Uptime' },
      { value: '<1min', label: 'MTTD' },
      { value: '70%', label: 'Fewer Incidents' },
      { value: '360°', label: 'Visibility' },
    ],
  },
}

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

export default function Swayam() {
  const [activeTab, setActiveTab] = useState('cloud')
  const content = tabContent[activeTab]
  const activeTabData = tabs.find((t) => t.id === activeTab)!

  return (
    <div className="font-lato">
      <Helmet>
        <title>Swayam Platform | Ambifo Technology</title>
        <meta name="description" content="Ambifo's Swayam platform — unified cloud, AI, MLOps, and observability solutions for enterprise." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <FloatingOrb delay={0} x="5%" y="15%" size="w-96 h-96" color="bg-yellow-400 opacity-[0.06]" />
        <FloatingOrb delay={2.5} x="70%" y="55%" size="w-80 h-80" color="bg-blue-500 opacity-[0.06]" />
        <FloatingOrb delay={4.5} x="40%" y="5%" size="w-64 h-64" color="bg-purple-500 opacity-[0.04]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            <Star className="w-4 h-4" /> Platform
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-montserrat mb-6 leading-tight">
            Swayam — The Intelligent<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">Cloud & AI Platform</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Ambifo's Swayam suite empowers organizations to embrace digital transformation with advanced AI, streamlined cloud adoption, and intelligent observability.
          </motion.p>

          {/* Tab Switcher */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-yellow-400 text-navy-900 shadow-lg shadow-yellow-400/20'
                      : 'bg-navy-800/50 text-gray-300 hover:bg-navy-700/50 hover:text-white border border-navy-700'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {tab.label}
                </button>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Tab Stats Strip ── */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative -mt-8 z-10 max-w-5xl mx-auto px-4"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-navy-900 font-montserrat">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>
      </AnimatePresence>

      {/* ── Tab Content ── */}
      <section id={activeTab} className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-16">
                <span className={`text-sm font-semibold tracking-widest ${activeTabData.accent} uppercase font-montserrat`}>Active Platform</span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-2">{content.title}</h2>
                <p className={`${activeTabData.accent} text-lg font-semibold font-montserrat`}>{content.subtitle}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Description + Features */}
                <div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{content.description}</p>
                  <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {content.features.map((f, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-500"
                      >
                        <ChevronRight className={`w-5 h-5 ${activeTabData.accent} mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700 text-sm leading-relaxed">{f}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Highlights + Use Cases */}
                <div>
                  <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 mb-8">
                    <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-4">Highlights</h3>
                    <ul className="space-y-3">
                      {content.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${activeTabData.bg} rounded-2xl p-7 border`}>
                    <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-4">Use Cases</h3>
                    <ul className="space-y-3">
                      {content.useCases.map((u, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ArrowRight className={`w-5 h-5 ${activeTabData.accent} mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700 text-sm leading-relaxed">{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Why Choose Swayam ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-yellow-500 uppercase font-montserrat">Why Swayam</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">Why Choose Swayam?</h2>
            <p className="text-gray-500 max-w-3xl mx-auto">
              Ambifo's Swayam suite is built to empower businesses of all sizes to embrace innovation. With solutions for AI, cloud management, and observability, Swayam is your partner in the digital era.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tabs.map((tab, i) => {
              const Icon = tab.icon
              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-blue-600/20 transition-all duration-500 cursor-pointer group"
                  onClick={() => { setActiveTab(tab.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                >
                  <div className={`w-16 h-16 ${tab.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${tab.accent}`} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-3">{tab.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tabContent[tab.id].subtitle}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <Quote className="absolute top-6 left-8 w-16 h-16 text-white/5" />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic max-w-2xl mx-auto">
              "Swayam transformed our entire cloud and AI operations. The unified platform approach eliminated tool sprawl and gave us a single pane of glass for everything."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-navy-900 font-bold text-sm">R</div>
              <div className="text-left">
                <div className="text-white font-semibold font-montserrat text-sm">Rajesh Kumar</div>
                <div className="text-gray-400 text-xs">CTO, Enterprise Client</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-center overflow-hidden">
        <FloatingOrb delay={0} x="10%" y="20%" size="w-72 h-72" color="bg-yellow-400 opacity-[0.05]" />
        <FloatingOrb delay={2} x="70%" y="60%" size="w-80 h-80" color="bg-blue-500 opacity-[0.05]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Ready to Transform Your Business?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">Explore our Swayam suite and find the right platform for your digital transformation journey.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="secondary" href="/contact-us">Request a Demo <ArrowRight className="w-5 h-5" /></Button>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 font-montserrat hover:-translate-y-0.5">
              Talk to an Expert <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
