import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { awards } from '../../data/caseStudies'

export default function Awards() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % awards.length)
  const prev = () => setCurrent((prev) => (prev - 1 + awards.length) % awards.length)

  const item = awards[current]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">
            Awards
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 font-montserrat">
            Honored For Innovation and Leadership
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 h-48 md:h-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <span className="text-3xl font-bold text-blue-600 mb-3 font-montserrat">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-navy-900 font-montserrat">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2.5 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
              aria-label="Previous award"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {awards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to award ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2.5 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
              aria-label="Next award"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
