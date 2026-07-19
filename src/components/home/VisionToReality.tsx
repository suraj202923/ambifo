import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { caseStudies } from '../../data/caseStudies'

export default function VisionToReality() {
  const [current, setCurrent] = useState(0)
  const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage)

  const next = () => setCurrent((prev) => (prev + 1) % totalPages)
  const prev = () => setCurrent((prev) => (prev - 1 + totalPages) % totalPages)

  const visible = caseStudies.slice(current * itemsPerPage, current * itemsPerPage + itemsPerPage)

  return (
    <section id="case-study" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 font-montserrat">
              Vision To Reality
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="wait">
            {visible.map((study) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {study.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-navy-900 mb-2 font-montserrat">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-lato">
                    {study.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors font-montserrat"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex md:hidden items-center justify-center gap-2 mb-6">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center">
          <a
            href="/insights-resources/case-study"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 font-montserrat"
          >
            View More
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
