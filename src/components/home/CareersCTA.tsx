import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CareersCTA() {
  return (
    <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Together, Making World a Better Place
          </h2>
          <p className="text-gray-300 text-lg mb-8 font-lato max-w-2xl mx-auto">
            At Ambifo, we foster a culture of innovation, collaboration, and continuous learning.
            Join our team of passionate technologists solving real-world challenges with cutting-edge
            cloud, AI, and data solutions.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 font-montserrat"
          >
            See Open Positions
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
