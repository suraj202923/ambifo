import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export default function Terms() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>Terms of Service | Ambifo Technology</title>
        <meta name="description" content="Ambifo Technology terms of service." />
      </Helmet>
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold text-white font-montserrat mb-6">
            Terms of Service
          </motion.h1>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-500 text-sm mb-6">Last updated: January 2026</p>
          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-navy-900 font-montserrat">1. Acceptance of Terms</h2>
            <p>By accessing and using the Ambifo Technology website, you accept and agree to be bound by these Terms of Service.</p>
            <h2 className="text-2xl font-bold text-navy-900 font-montserrat">2. Services</h2>
            <p>Ambifo Technology provides cloud consulting, DevOps, and AI/ML services. Specific terms may apply to individual service agreements.</p>
            <h2 className="text-2xl font-bold text-navy-900 font-montserrat">3. Intellectual Property</h2>
            <p>All content on this website is the property of Ambifo Technology Pvt Ltd and is protected by applicable intellectual property laws.</p>
            <h2 className="text-2xl font-bold text-navy-900 font-montserrat">4. Contact</h2>
            <p>For questions, contact us at <a href="mailto:support@ambifo.com" className="text-blue-600 hover:underline">support@ambifo.com</a>.</p>
          </div>
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mt-10 hover:text-blue-800 transition-colors font-montserrat">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
