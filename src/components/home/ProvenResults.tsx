import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { provenResults } from '../../data/caseStudies'

export default function ProvenResults() {
  return (
    <section id="proven-results" className="py-20 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase font-montserrat">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 font-montserrat">
            Solving Real-World Challenges with Strategy, Cloud, AI, Data Analytics, and Generative AI.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {provenResults.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 font-montserrat">
                {item.number}
              </div>
              <div className="text-sm text-gray-300 leading-tight font-lato">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-center max-w-3xl mx-auto mb-8 font-lato"
        >
          Ambifo has been featured as one of Asia Pacific's fastest-growing companies, recognized for its
          commitment to innovation and excellence in cloud, AI, and data analytics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="/services/strategy-and-advisory"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 font-montserrat"
          >
            Discover
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
