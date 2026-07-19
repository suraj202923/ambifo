import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/caseStudies'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const item = testimonials[current]

  return (
    <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-900 to-blue-900 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/15 text-cyan-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase font-montserrat mb-5">
            <Quote className="w-4 h-4" />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 font-montserrat">
            Client experience{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">says it all</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 font-lato italic">
                "{item.quote}"
              </p>

              {/* Anonymous author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white font-montserrat">Enterprise Client</div>
                  <div className="text-sm text-gray-400 font-lato">Verified Customer</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-white/20 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-cyan-400 w-8' : 'bg-white/20 w-2 hover:bg-white/40'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full border border-white/20 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
