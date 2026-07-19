import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Rocket, Building2, Cpu, Truck, Landmark, HeartPulse, Zap, TowerControl, GraduationCap } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const industries = [
  { icon: Rocket, title: 'Aerospace & Satellite', slug: 'aerospace-satellite', desc: 'Cloud and AI solutions for aerospace engineering, satellite data processing, and mission-critical operations.' },
  { icon: Building2, title: 'Public Sector', slug: 'public-sector', desc: 'Digital transformation for government agencies with secure, compliant cloud and AI solutions.' },
  { icon: Cpu, title: 'Manufacturing', slug: 'manufacturing', desc: 'Smart manufacturing solutions with IoT, AI-driven quality control, and supply chain optimization.' },
  { icon: Truck, title: 'Logistics', slug: 'logistics', desc: 'Intelligent logistics and supply chain solutions powered by AI, ML, and real-time analytics.' },
  { icon: Landmark, title: 'BFSI', slug: 'bfsi', desc: 'Secure, compliant cloud and AI solutions for banking, financial services, and insurance.' },
  { icon: HeartPulse, title: 'Healthcare & Life Sciences', slug: 'healthcare-lifesciences', desc: 'Transform healthcare delivery with AI-powered diagnostics, data platforms, and secure cloud infrastructure.' },
  { icon: Zap, title: 'Power & Utilities', slug: 'power-utilities', desc: 'Modernize power and utility operations with smart grid analytics and predictive maintenance.' },
  { icon: TowerControl, title: 'Telco Towers', slug: 'telco-towers', desc: 'Optimize telecom infrastructure with AI-driven network management and predictive analytics.' },
  { icon: GraduationCap, title: 'Education', slug: 'education', desc: 'Empower educational institutions with cloud-based learning platforms and AI-driven personalization.' },
]

export default function Industries() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>Industries | Ambifo Technology</title>
        <meta name="description" content="Cloud and AI solutions for aerospace, manufacturing, healthcare, BFSI, and more." />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            Industry Expertise
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Industries We Serve
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Deep industry expertise combined with cutting-edge technology to deliver transformative solutions across sectors.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={`/industries/${ind.slug}`}
                  className="block bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:border-blue-600/20 transition-all duration-500 group h-full"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-500">
                    <ind.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-2 group-hover:text-blue-600 transition-colors">{ind.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{ind.desc}</p>
                  <span className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
