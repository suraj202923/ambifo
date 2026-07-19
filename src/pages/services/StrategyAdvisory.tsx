import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import { strategyAdvisory, whyChooseIcons, blueTickIcon } from '../../data/servicesData'
import { Helmet } from 'react-helmet-async'

const serviceLinks: Record<string, string> = {
  'Digital Maturity Assessment': '/services/strategy-and-advisory/digital-maturity-assessment',
  'AI Readiness Assessment': '/services/strategy-and-advisory/ai-readiness-assessment',
  'Cloud Advisory Services': '/services/strategy-and-advisory/cloud-advisory-services',
  'Well-Architected Framework Review': '/services/strategy-and-advisory/well-architected-framework-review',
  'DevSecOps Maturity Assessment': '/services/strategy-and-advisory/dev-secops-maturity-assessments',
  'Modernization Assessment': '/services/strategy-and-advisory/modernization-assessment',
}

const details = [
  { title: 'Digital Maturity Assessment', items: ['Evaluate current digital capabilities across people, process, and technology', 'Benchmark against industry best practices', 'Identify growth opportunities and gaps', 'Receive a prioritized strategic roadmap', 'Define measurable KPIs for transformation'] },
  { title: 'AI Readiness Assessment', items: ['Assess data infrastructure and quality for AI adoption', 'Evaluate organizational AI maturity and talent gaps', 'Identify high-impact AI use cases', 'Develop a structured AI adoption roadmap', 'Define governance and ethical AI frameworks'] },
  { title: 'Cloud Advisory Services', items: ['Develop comprehensive cloud adoption strategy', 'Design cloud operating models and governance', 'Implement FinOps for cost optimization', 'Architecture consulting for cloud-native design', 'Multi-cloud and hybrid cloud strategy'] },
  { title: 'Well-Architected Framework Review', items: ['Review architecture against AWS/Azure best practices', 'Assess security, reliability, and performance pillars', 'Identify cost optimization opportunities', 'Generate actionable improvement recommendations', 'Establish ongoing architecture governance'] },
  { title: 'DevSecOps Maturity Assessment', items: ['Evaluate CI/CD pipeline security and automation', 'Assess security integration across development lifecycle', 'Identify process bottlenecks and risks', 'Recommend toolchain improvements', 'Create DevSecOps transformation roadmap'] },
  { title: 'Modernization Assessment', items: ['Analyze legacy application portfolio and dependencies', 'Identify modernization patterns (rehost, refactor, rebuild)', 'Assess technical debt and business impact', 'Create phased modernization roadmap', 'Estimate cost-benefit and ROI for each approach'] },
]

export default function StrategyAdvisory() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="font-lato">
      <Helmet>
        <title>Strategy & Advisory Services | Ambifo Technology</title>
        <meta name="description" content="Cloud strategy, digital maturity assessment, AI readiness, and enterprise transformation advisory." />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            Strategy & Advisory
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            {strategyAdvisory.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Navigate the Digital Frontier — Your Strategic Partner
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            <Button variant="secondary" href="/contact-us">
              Request Now <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">Explore Our Digital Transformation Strategy and Advisory Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive assessments and strategic guidance to accelerate your cloud and AI journey.</p>
          </motion.div>
          <div className="space-y-10">
            {strategyAdvisory.services.map((s, i) => {
              const ServiceIcon = s.icon
              const items = details.find(d => d.title === s.title)?.items || []
              return (
                <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-0 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 group`}>
                  {/* Image */}
                  {s.image && (
                    <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                      <div className="absolute top-5 left-5 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-lg">
                        <ServiceIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="absolute bottom-5 left-5 px-3 py-1 bg-navy-900/70 backdrop-blur text-white text-xs font-bold rounded-full font-montserrat">
                        0{i + 1}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className={`flex-1 p-8 md:p-10 ${!s.image ? 'flex flex-col justify-center' : ''}`}>
                    {!s.image && (
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                          <ServiceIcon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider font-montserrat">Service 0{i + 1}</div>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-navy-900 font-montserrat mb-3">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                    <ul className="space-y-2.5 mb-6">
                      {items.slice(0, 3).map(item => (
                        <li key={item} className="flex items-start gap-3 text-sm text-gray-700 bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-100">
                          <img src={blueTickIcon} alt="" className="w-4 h-4 mt-0.5 shrink-0" loading="lazy" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={serviceLinks[s.title] || '/services/strategy-and-advisory'} className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest text-yellow-400 uppercase font-montserrat">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mt-3 mb-4">Why Choose Ambifo?</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {whyChooseIcons.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="text-center">
                <img src={item.icon} alt="" className="w-12 h-12 mx-auto mb-3 filter brightness-0 invert" loading="lazy" />
                <p className="text-sm font-lato">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Deep Dive</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">Detailed Service Breakdown</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Explore each service in detail with our comprehensive breakdown of what we deliver.</p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-4">
            {details.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-500">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold text-navy-900 font-montserrat">{item.title}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                        <ul className="space-y-3">
                          {item.items.map((it) => (
                            <li key={it} className="flex items-start gap-3 text-gray-700">
                              <img src={blueTickIcon} alt="" className="w-4 h-4 mt-1 shrink-0" loading="lazy" />
                              <span>{it}</span>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Ready to Start Your Transformation?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8 max-w-2xl mx-auto">Let our experts guide you with a tailored strategy that aligns technology with your business goals.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="secondary" href="/contact-us">
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
