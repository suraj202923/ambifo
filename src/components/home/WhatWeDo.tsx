import { ArrowRight, Zap, Shield, Cloud, Brain, Code2, Sparkles, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { whatWeDo } from '../../data/services'

const iconMap: Record<string, React.ElementType> = {
  'Strategy & Advisory': Target,
  'Cloud Infrastructure & Security': Shield,
  'App Modernization': Code2,
  'AI, Data & Analytics': Brain,
  'Generative AI': Sparkles,
}

const accentMap: Record<string, string> = {
  'Strategy & Advisory': 'from-blue-500 to-blue-700',
  'Cloud Infrastructure & Security': 'from-cyan-500 to-teal-600',
  'App Modernization': 'from-purple-500 to-purple-700',
  'AI, Data & Analytics': 'from-orange-500 to-red-500',
  'Generative AI': 'from-green-500 to-emerald-600',
}

const bgMap: Record<string, string> = {
  'Strategy & Advisory': '/images/whatwedo/strategy.jpg',
  'Cloud Infrastructure & Security': '/images/whatwedo/cloud.jpg',
  'App Modernization': '/images/whatwedo/hardware.jpg',
  'AI, Data & Analytics': '/images/whatwedo/data.jpg',
  'Generative AI': '/images/whatwedo/ai.jpg',
  'Data & AI Platforms': '/images/whatwedo/network.jpg',
}

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-28 overflow-hidden">
      {/* Full background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-blue-900" />
      <img
        src="/images/whatwedo/banner.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.07]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900/90" />

      {/* Decorative blurs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-cyan-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase font-montserrat mb-5 border border-white/10">
              <Zap className="w-4 h-4" />
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 font-montserrat">
              Navigate Change<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">with Confidence</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-lato max-w-xl">
              We help organizations transform with cutting-edge technology, delivering measurable outcomes across industries.
            </p>
          </motion.div>

          {/* Right — stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex gap-4"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center w-32 hover:bg-white/10 transition-colors">
              <p className="text-3xl font-bold text-cyan-400 font-montserrat">6+</p>
              <p className="text-gray-400 text-xs mt-1 font-lato">Service Lines</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center w-32 hover:bg-white/10 transition-colors">
              <p className="text-3xl font-bold text-blue-400 font-montserrat">500+</p>
              <p className="text-gray-400 text-xs mt-1 font-lato">Projects</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center w-32 hover:bg-white/10 transition-colors">
              <p className="text-3xl font-bold text-teal-400 font-montserrat">50+</p>
              <p className="text-gray-400 text-xs mt-1 font-lato">Experts</p>
            </div>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeDo.map((item, i) => {
            const Icon = iconMap[item.title] || Cloud
            const accent = accentMap[item.title] || 'from-blue-500 to-blue-700'
            const bg = bgMap[item.title]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Card background image */}
                <div className="absolute inset-0">
                  <img src={bg} alt="" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-navy-900/80 group-hover:bg-navy-900/70 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="relative p-7 flex flex-col min-h-[320px]">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-montserrat group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cyan-400 font-semibold mb-4 font-lato">
                    {item.subtitle}
                  </p>

                  <ul className="text-gray-300 space-y-1.5 mb-6 flex-1 font-lato text-sm">
                    {item.description.split(', ').map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors font-montserrat group/link mt-auto"
                  >
                    Explore Service
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
