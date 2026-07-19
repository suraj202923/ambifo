import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import { appModernization, accentMap } from '../../data/servicesData'
import { Helmet } from 'react-helmet-async'

const serviceLinks: Record<string, string> = {
  'Cloud-Native Rapid Application Development': '/services/app-modernization/devsecops',
  'DevSecOps Implementation': '/services/app-modernization/devsecops',
  'Microsoft Workloads Modernization': '/services/app-modernization/microsoft-workloads-modernization',
  'Legacy Modernization': '/services/app-modernization/legacy-modernization',
}

const details = [
  { title: 'Cloud-Native Rapid Application Development', items: ['Build applications using microservices and container architectures', 'Leverage serverless computing for auto-scaling and cost efficiency', 'Implement CI/CD pipelines for rapid, reliable deployments', 'Design for resilience with distributed systems patterns', 'Use managed cloud services to reduce operational overhead'] },
  { title: 'DevSecOps Implementation', items: ['Integrate security scanning into CI/CD pipelines', 'Implement infrastructure as code with security best practices', 'Automate compliance validation and policy enforcement', 'Establish secrets management and access controls', 'Create immutable infrastructure for reproducible deployments'] },
  { title: 'Microsoft Workloads Modernization', items: ['Migrate .NET applications to Azure App Service or AKS', 'Modernize SQL Server databases with Azure SQL Managed Instance', 'Implement Azure DevOps for end-to-end automation', 'Optimize Office 365 and SharePoint with cloud integration', 'Modernize Active Directory with Azure AD and hybrid identity'] },
  { title: 'Legacy Modernization', items: ['Assess legacy application portfolio and technical debt', 'Choose optimal modernization strategy (rehost, refactor, rebuild)', 'Extract monoliths into microservices incrementally', 'Modernize data access and storage layers', 'Implement strangler fig pattern for risk-free migration'] },
]

export default function AppModernization() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const a = accentMap[appModernization.accent as keyof typeof accentMap]

  return (
    <div className="font-lato">
      <Helmet>
        <title>App Modernization Services | Ambifo Technology</title>
        <meta name="description" content="Legacy modernization, DevSecOps, and Microsoft workloads migration." />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            App Modernization
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            {appModernization.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            {appModernization.subtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            <Button variant="secondary" href="/contact-us">
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">Modernization Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">End-to-end application modernization to accelerate innovation and reduce operational overhead.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appModernization.services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-xl hover:border-blue-600/20 transition-all duration-500 group">
                <Link to={serviceLinks[s.title] || '/services/app-modernization'} className="block">
                  <div className={`w-14 h-14 ${a.bg} rounded-xl flex items-center justify-center mb-5 ${a.group} transition-colors duration-500 group-hover:scale-110`}>
                    <s.icon className={`w-7 h-7 ${a.text} ${a.groupText} transition-colors duration-500`} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-blue-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
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
            <p className="text-gray-500 max-w-2xl mx-auto">Explore each modernization service in detail.</p>
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
                              <CheckCircle className={`w-5 h-5 ${a.text} mt-0.5 flex-shrink-0`} />
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
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Modernize Your Applications Today</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8 max-w-2xl mx-auto">Unlock the full potential of your application portfolio with our modernization expertise.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="secondary" href="/contact-us">
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
