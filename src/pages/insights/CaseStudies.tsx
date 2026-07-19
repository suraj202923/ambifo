import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Briefcase, TrendingUp } from 'lucide-react'
import Button from '../../components/common/Button'
import { caseStudies } from '../../data/caseStudies'
import { Helmet } from 'react-helmet-async'

const categories = ['All', ...Array.from(new Set(caseStudies.map((cs) => cs.category)))]

const stats = [
  { number: '450+', label: 'Transformations Delivered' },
  { number: '40%', label: 'Average Cost Reduction' },
  { number: '9', label: 'Industries Served' },
  { number: '10', label: 'Countries' },
]

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? caseStudies : caseStudies.filter((cs) => cs.category === activeCategory)

  return (
    <div className="font-lato">
      <Helmet>
        <title>Case Studies | Ambifo Technology</title>
        <meta name="description" content="Success stories and case studies from Ambifo Technology clients." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            Success Stories
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Case Studies
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped organizations achieve measurable results through cloud and AI transformation.
          </motion.p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat">{stat.number}</div>
                <div className="text-gray-500 text-sm mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer bg-gray-900"
          >
            <div className="grid lg:grid-cols-2 min-h-[400px]">
              {/* Image side */}
              <div className="relative overflow-hidden">
                <img
                  src={filtered[0]?.image || caseStudies[0].image}
                  alt={filtered[0]?.title || caseStudies[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[300px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-900/80 lg:block hidden" />
              </div>
              {/* Content side */}
              <div className="relative p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-yellow-400 text-navy-900 text-xs font-bold uppercase tracking-wider rounded-full">Featured</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full">{filtered[0]?.category || caseStudies[0].category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-montserrat mb-4 group-hover:text-yellow-400 transition-colors leading-snug">
                  {filtered[0]?.title || caseStudies[0].title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {filtered[0]?.description || caseStudies[0].description}
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">{filtered[0]?.industry || caseStudies[0].industry}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-green-400 text-sm font-semibold">{filtered[0]?.results || caseStudies[0].results}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter + Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mb-4">All Case Studies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our work across industries and technology solutions.</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-lg shadow-navy-900/20'
                    : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            <AnimatePresence mode="wait">
              {filtered.map((cs, i) => (
                <motion.div
                  key={cs.title}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-blue-600/20 transition-all duration-500 group"
                >
                  {/* Thumbnail */}
                  <div className="relative h-52 bg-gray-200 overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-navy-900/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full">
                        {cs.category}
                      </span>
                    </div>
                    {/* Arrow overlay */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                        <ArrowUpRight className="w-5 h-5 text-navy-900" />
                      </div>
                    </div>
                    {/* Bottom gradient info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-300 text-sm font-semibold">{cs.results}</span>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">{cs.industry}</span>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 font-montserrat mb-3 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                      {cs.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{cs.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Process / How We Work */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Every engagement follows a proven methodology to deliver measurable outcomes.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Discover & Assess', desc: 'Deep-dive into your current architecture, identify pain points, and map opportunities for cloud and AI optimization.' },
              { step: '02', title: 'Design & Build', desc: 'Architect tailored solutions using cloud-native patterns, DevOps best practices, and AI/ML capabilities.' },
              { step: '03', title: 'Deliver & Scale', desc: 'Execute with agile delivery, continuous monitoring, and iterative improvement for sustained business impact.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:border-blue-600/20 transition-all duration-500 group"
              >
                <div className="text-5xl font-bold text-blue-600/10 font-montserrat mb-4 group-hover:text-blue-600/20 transition-colors">{item.step}</div>
                <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Want to See Similar Results?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">Let's discuss how we can help your organization achieve measurable outcomes.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="primary" href="/contact-us">
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
