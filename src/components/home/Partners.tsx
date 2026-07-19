import { motion } from 'framer-motion'

const cloudPartners = [
  { name: 'AWS', image: '/images/logos/tech/aws.avif' },
  { name: 'Microsoft Azure', image: '/images/logos/tech/azure.avif' },
  { name: 'Google Cloud', image: '/images/logos/tech/gcp.avif' },
]

export default function Partners() {
  return (
    <section id="stronger_together" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">
            Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4 font-montserrat">
            Stronger Together
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-lato">
            We collaborate with the world's leading cloud platforms to deliver enterprise-grade solutions.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {cloudPartners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-600/20 transition-all duration-500 px-12 py-10 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <img
                src={partner.image}
                alt={partner.name}
                className="relative h-14 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="/partners"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 font-montserrat"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  )
}
