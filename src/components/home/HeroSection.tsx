import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const heroSlides = [
  {
    title: 'Cloud Migration',
    subtitle: 'Seamless transition to scalable cloud infrastructure',
    image: '/images/hero/globe.jpg',
    icon: '☁️',
  },
  {
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent solutions powered by data-driven insights',
    image: '/images/hero/ai.jpg',
    icon: '🧠',
  },
  {
    title: 'DevOps & Automation',
    subtitle: 'Accelerate delivery with CI/CD and infrastructure as code',
    image: '/images/hero/circuit.jpg',
    icon: '⚡',
  },
  {
    title: 'Data Analytics',
    subtitle: 'Transform raw data into actionable business intelligence',
    image: '/images/hero/data.jpg',
    icon: '📊',
  },
  {
    title: 'Cybersecurity',
    subtitle: 'Protect your digital assets with enterprise-grade security',
    image: '/images/hero/security.jpg',
    icon: '🔒',
  },
]

export default function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0 opacity-30">
        <img
          src="/images/hero/globe.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex-1 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-montserrat leading-tight mb-6"
        >
          Applied Technology.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Smarter Business.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-lato"
        >
          Unlock growth with intelligent cloud, AI, and data solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <Link
            to="/services/strategy-and-advisory"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 font-montserrat mx-auto"
          >
            Discover
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 w-full pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="relative h-52 sm:h-64 md:h-80 rounded-2xl overflow-hidden"
              >
                <img
                  src={heroSlides[slideIndex].image}
                  alt={heroSlides[slideIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-3xl mb-2 block">{heroSlides[slideIndex].icon}</span>
                      <h3 className="text-white text-xl md:text-2xl font-bold font-montserrat mb-1">
                        {heroSlides[slideIndex].title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base font-lato max-w-md">
                        {heroSlides[slideIndex].subtitle}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-1 text-blue-400 font-semibold text-sm font-montserrat bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-white/20 transition-all cursor-pointer">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center gap-2 mt-5">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === slideIndex ? 'w-8 bg-blue-400' : 'w-2 bg-gray-500 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
