import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../../components/common/Button'
import { Helmet } from 'react-helmet-async'

const cloudPartners = [
  { name: 'AWS', image: '/images/logos/tech/aws.avif', desc: 'Advance Consulting Partner with deep expertise across migration, DevOps, security, and AI/ML on AWS.' },
  { name: 'Microsoft Azure', image: '/images/logos/tech/azure.avif', desc: 'Managed Services Partner delivering enterprise cloud solutions, hybrid infrastructure, and intelligent automation on Azure.' },
  { name: 'Google Cloud', image: '/images/logos/tech/gcp.avif', desc: 'Specialized partner for data analytics, AI/ML, and cloud-native application development on Google Cloud Platform.' },
]

export default function Partners() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>Partners | Ambifo Technology</title>
        <meta name="description" content="Our technology partnerships with AWS, Azure, and Google Cloud." />
      </Helmet>
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Our Partners
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with the world's leading cloud platforms to deliver enterprise-grade solutions.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {cloudPartners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-600/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className={`flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/3 flex items-center justify-center">
                  <div className="bg-gray-50 rounded-2xl p-8 group-hover:bg-blue-50 transition-colors duration-500 w-full flex items-center justify-center">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="h-16 md:h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold text-navy-900 font-montserrat mb-4">{partner.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{partner.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Become a Partner</h2>
          <p className="text-gray-300 mb-8">Interested in partnering with Ambifo? Let's explore how we can work together.</p>
          <Button variant="primary" href="/contact-us">
            Partner With Us <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
