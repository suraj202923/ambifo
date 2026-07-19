import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Target, Zap } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import Button from '../../components/common/Button'

const industryData: Record<string, { title: string; desc: string; highlights: string[]; capabilities: string[] }> = {
  'aerospace-satellite': {
    title: 'Aerospace & Satellite',
    desc: 'Transform aerospace and satellite operations with cutting-edge cloud, AI, and data analytics solutions. We help you process vast amounts of telemetry data, optimize satellite communications, and accelerate engineering workflows.',
    highlights: ['Satellite data processing and analytics', 'Predictive maintenance for aerospace equipment', 'Cloud-native engineering simulations', 'Secure data management for defense contracts'],
    capabilities: ['Real-time telemetry analytics', 'AI-powered anomaly detection', 'Digital twin solutions', 'Compliant cloud infrastructure'],
  },
  'public-sector': {
    title: 'Public Sector',
    desc: 'Modernize government services with secure, compliant cloud solutions that improve citizen experiences and operational efficiency.',
    highlights: ['Digital citizen services', 'Secure cloud migration', 'Data-driven policy making', 'Inter-agency data sharing'],
    capabilities: ['Compliant cloud architecture', 'Citizen portal solutions', 'Legacy system modernization', 'Analytics & reporting dashboards'],
  },
  'manufacturing': {
    title: 'Manufacturing',
    desc: 'Drive Industry 4.0 transformation with smart manufacturing solutions powered by IoT, AI, and cloud technologies.',
    highlights: ['Smart factory automation', 'Predictive quality control', 'Supply chain optimization', 'Digital twin implementation'],
    capabilities: ['IoT sensor integration', 'AI visual inspection', 'Inventory optimization', 'Production analytics'],
  },
  'logistics': {
    title: 'Logistics',
    desc: 'Optimize logistics and supply chain operations with real-time tracking, predictive analytics, and intelligent automation.',
    highlights: ['Real-time shipment tracking', 'Route optimization', 'Warehouse automation', 'Last-mile delivery optimization'],
    capabilities: ['GPS and IoT tracking', 'Predictive ETA models', 'Warehouse management systems', 'Carrier performance analytics'],
  },
  'bfsi': {
    title: 'BFSI',
    desc: 'Transform banking and financial services with secure, compliant cloud and AI solutions that drive innovation and customer trust.',
    highlights: ['Fraud detection & prevention', 'Risk analytics', 'Customer 360 platforms', 'Regulatory compliance automation'],
    capabilities: ['Real-time fraud detection', 'Credit risk modeling', 'Customer data platforms', 'RegTech solutions'],
  },
  'healthcare-lifesciences': {
    title: 'Healthcare & Life Sciences',
    desc: 'Revolutionize healthcare delivery with AI-powered diagnostics, interoperable data platforms, and secure cloud infrastructure.',
    highlights: ['AI-powered diagnostics', 'Electronic health records modernization', 'Drug discovery acceleration', 'Telehealth platforms'],
    capabilities: ['Medical imaging AI', 'HIPAA-compliant cloud', 'Clinical trial analytics', 'Patient engagement portals'],
  },
  'power-utilities': {
    title: 'Power & Utilities',
    desc: 'Modernize power generation, transmission, and distribution with smart grid technologies and predictive analytics.',
    highlights: ['Smart grid management', 'Predictive maintenance', 'Energy consumption analytics', 'Renewable energy integration'],
    capabilities: ['Grid monitoring solutions', 'Asset performance management', 'Demand forecasting', 'Outage management systems'],
  },
  'telco-towers': {
    title: 'Telco Towers',
    desc: 'Optimize telecom tower operations with AI-driven monitoring, predictive maintenance, and automated field operations.',
    highlights: ['Tower monitoring & alerting', 'Field workforce optimization', 'Energy management', 'Asset lifecycle management'],
    capabilities: ['Remote tower monitoring', 'Predictive maintenance AI', 'Field service automation', 'Energy optimization analytics'],
  },
  'education': {
    title: 'Education',
    desc: 'Empower educational institutions with cloud-based learning platforms, AI-driven personalization, and data-driven insights.',
    highlights: ['Online learning platforms', 'Student performance analytics', 'Administrative automation', 'Personalized learning paths'],
    capabilities: ['LMS cloud migration', 'Student success analytics', 'Automated admissions', 'Virtual classroom solutions'],
  },
}

export default function IndustryDetail() {
  const { industry } = useParams<{ industry: string }>()
  const data = industry ? industryData[industry] : undefined

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 font-montserrat mb-4">Industry Not Found</h1>
          <p className="text-gray-600 mb-6">The industry page you're looking for doesn't exist.</p>
          <Button variant="primary" href="/industries">Back to Industries</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="font-lato">
      <Helmet>
        <title>{data.title} Industry Solutions | Ambifo Technology</title>
        <meta name="description" content={data.desc} />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            Industry Solutions
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            {data.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {data.desc}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-navy-900 font-montserrat">Key Highlights</h2>
              </div>
              <ul className="space-y-4">
                {data.highlights.map((h, i) => (
                  <motion.li key={h} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-500">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{h}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-navy-900 font-montserrat">Our Capabilities</h2>
              </div>
              <ul className="space-y-4">
                {data.capabilities.map((c, i) => (
                  <motion.li key={c} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-500">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{c}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Transform Your Industry</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">Let's discuss how we can help your organization achieve more with cloud and AI.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="primary" href="/contact-us">
              Talk to Our Team <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
