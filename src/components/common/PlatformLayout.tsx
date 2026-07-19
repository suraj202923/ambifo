import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, AlertTriangle, ChevronRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Button from '../common/Button'
import type { PlatformData } from '../../data/platformsData'

const anchors = [
  { label: 'Platform', href: '#the-platform' },
  { label: 'Challenges', href: '#the-challenge' },
  { label: 'Capabilities', href: '#capability' },
  { label: 'Engagement', href: '#engagement' },
]

function FloatingOrb({ color, size, top, left, delay = 0 }: { color: string; size: number; top: string; left: string; delay?: number }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-20"
      style={{ width: size, height: size, top, left, background: color }}
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  )
}

function PlatformLayout({ data }: { data: PlatformData }) {
  const [activeAnchor, setActiveAnchor] = useState(0)

  return (
    <div className="font-lato">
      <Helmet>
        <title>{data.heroTitle} | Ambifo Technology</title>
        <meta name="description" content={data.heroDescription} />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <FloatingOrb color="#00d4ff" size={400} top="10%" left="70%" delay={0} />
        <FloatingOrb color="#0fb8a9" size={300} top="60%" left="20%" delay={2} />
        <FloatingOrb color="#facc15" size={250} top="30%" left="50%" delay={4} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Anchor nav */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 mb-10">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {anchors.map((a, i) => (
              <a
                key={a.href}
                href={a.href}
                onClick={() => setActiveAnchor(i)}
                className={`transition-all px-5 py-2.5 rounded-full font-medium ${activeAnchor === i ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 shadow-lg shadow-yellow-400/10' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
              >
                {a.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-6 py-2.5 bg-gradient-to-r from-yellow-400/10 to-blue-500/10 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-bold mb-8 font-montserrat tracking-widest uppercase shadow-lg shadow-yellow-400/5">
            {data.heroTag}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat mb-8 max-w-5xl mx-auto leading-tight"
          >
            {data.heroTitle.split(' ').map((word, i) => {
              const highlightWords = ['explainable', 'ranked', '2-3ms', '912K', 'Zero', 'loss', 'Intelligence', 'chaos']
              const isHighlight = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()))
              return isHighlight ? <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">{word} </span> : <span key={i}>{word} </span>
            })}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-gray-300/90 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            {data.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="secondary" href="#contact-form">
              {data.ctaText} <ArrowRight className="w-5 h-5" />
            </Button>
            <a href="#the-platform" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 rounded-xl text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300 font-montserrat">
              Explore Platform <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      </section>

      {/* Stats Strip */}
      <section className="relative -mt-10 z-20 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-navy-800 to-navy-900 border border-navy-700 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-2xl shadow-navy-900/50"
        >
          {data.outcomes.slice(0, 4).map((outcome, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 font-montserrat">{outcome.label}</div>
              <div className="text-gray-400 text-xs mt-1">{outcome.description.split('—')[0].split('.')[0]}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Platform Description */}
      <section id="the-platform" className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-yellow-400 uppercase font-montserrat">The Platform</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mt-3 mb-6">{data.platformTitle}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300/90 text-lg max-w-4xl mx-auto mb-16 leading-relaxed text-center"
          >
            {data.platformDescription}
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.platformFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-gradient-to-br from-navy-800/80 to-navy-800/40 border border-navy-700/50 rounded-2xl p-7 hover:border-yellow-400/30 hover:shadow-2xl hover:shadow-yellow-400/5 transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl group-hover:bg-yellow-400/10 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-blue-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 border border-yellow-400/10">
                    <feature.icon className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-montserrat mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section id="the-challenge" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-red-500 uppercase font-montserrat">The Challenge</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">{data.problemsTitle}</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-red-100 p-8 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500" />
              <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500 text-lg">!</span>
                {data.problemsTitle}
              </h3>
              <ul className="space-y-4">
                {data.problems.map((p, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 text-sm leading-relaxed">{p.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-blue-100 p-8 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-lg">✓</span>
                {data.solutionsTitle}
              </h3>
              <ul className="space-y-4">
                {data.solutions.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 text-sm leading-relaxed">{s.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-center"
          >
            <p className="text-gray-300 text-lg leading-relaxed italic max-w-4xl mx-auto">
              "{data.reframeText}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capability Areas */}
      <section id="capability" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">{data.capabilitiesTitle}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-7 border border-gray-100 hover:shadow-2xl hover:border-blue-600/20 transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/5 rounded-full group-hover:bg-blue-600/10 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-600/20">
                    <cap.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-3">{cap.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-yellow-400 uppercase font-montserrat">Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mt-3 mb-4">{data.outcomesTitle}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {data.outcomes.map((outcome, i) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-gradient-to-br from-navy-800/80 to-navy-800/40 border border-navy-700/50 rounded-2xl p-5 text-center hover:border-yellow-400/30 hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 group"
              >
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 font-montserrat mb-2 group-hover:scale-110 transition-transform duration-500">{outcome.label}</div>
                <p className="text-gray-400 text-xs leading-relaxed">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Why Different</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">What Sets Us Apart</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.differentiators.map((diff, i) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-blue-600/20">
                  <diff.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-3">{diff.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section id="engagement" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-widest text-yellow-400 uppercase font-montserrat">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">{data.engagementTitle}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {data.engagementStages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl border border-gray-200 p-7 h-full hover:shadow-2xl hover:border-yellow-400/30 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-yellow-400/20">
                    <stage.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xs font-bold text-yellow-400 mb-2 font-montserrat tracking-wider">STEP 0{i + 1}</div>
                  <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-3">{stage.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{stage.description}</p>
                </div>
                {i < data.engagementStages.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full items-center justify-center shadow-lg z-10">
                    <ChevronRight className="w-4 h-4 text-navy-900" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision to Reality */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Case Study</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">Vision To Reality</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="h-56 bg-gradient-to-br from-blue-600 via-navy-800 to-navy-900 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-montserrat">Case Study</span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-montserrat">Case Studies</span>
                <h3 className="text-lg font-semibold text-navy-900 font-montserrat mt-2 mb-3">Leading US-based Surveillance Solution Provider</h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">Enhancing Security and Scalability for a US Surveillance Leader</p>
                <Link to="/insights-resources/case-study" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all group/link">
                  Read More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center"
            >
              <Link to="/insights-resources/case-study" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-navy-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-yellow-400/20 hover:scale-105 transition-all duration-500 font-montserrat">
                View More Case Studies <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-form" className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-6"
          >
            {data.ctaHeading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {data.ctaDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="secondary" href="/contact-us">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PlatformLayout
