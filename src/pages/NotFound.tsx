import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Search, Compass, Rocket, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const quickLinks = [
  { label: 'Services', path: '/services/strategy-and-advisory', desc: 'Explore our cloud, AI & data solutions' },
  { label: 'Case Studies', path: '/insights-resources/case-study', desc: 'See real results from real clients' },
  { label: 'Blog', path: '/insights-resources/blog-posts', desc: 'Insights and thought leadership' },
  { label: 'Contact Us', path: '/contact-us', desc: 'Talk to our team' },
]

const funFacts = [
  'This page is exploring the cloud...',
  'Looks like this page took a wrong turn at the data center.',
  'Even our best AI couldn\'t find this page.',
  '404 — but our cloud infrastructure is still 99.99% up.',
]

function FloatingOrb({ delay, x, y, size, color }: { delay: number; x: string; y: string; size: string; color: string }) {
  return (
    <motion.div
      className={`absolute ${size} rounded-full blur-3xl ${color}`}
      style={{ left: x, top: y }}
      animate={{
        y: [0, -20, 0, 20, 0],
        x: [0, 10, 0, -10, 0],
        scale: [1, 1.1, 1, 0.9, 1],
      }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function AstronautIllustration() {
  return (
    <motion.div
      className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[60px]" />
      {/* Body */}
      <svg viewBox="0 0 200 200" className="relative w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Backpack */}
        <rect x="62" y="65" width="76" height="85" rx="16" fill="#0d2d6b" opacity="0.3" />
        {/* Body */}
        <rect x="58" y="60" width="84" height="90" rx="20" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
        {/* Visor */}
        <rect x="70" y="68" width="60" height="40" rx="12" fill="#0a2463" />
        <rect x="74" y="72" width="52" height="32" rx="10" fill="url(#visorGrad)" />
        <ellipse cx="90" cy="82" rx="8" ry="5" fill="rgba(255,255,255,0.15)" />
        {/* Antenna */}
        <line x1="100" y1="60" x2="100" y2="42" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="38" r="5" fill="#0fb8a9" />
        <circle cx="100" cy="38" r="5" fill="#0fb8a9" opacity="0.4">
          <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Arms */}
        <rect x="30" y="78" width="28" height="14" rx="7" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5">
          <animateTransform attributeName="transform" type="rotate" values="-10 44 85;10 44 85;-10 44 85" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="142" y="78" width="28" height="14" rx="7" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5">
          <animateTransform attributeName="transform" type="rotate" values="10 156 85;-10 156 85;10 156 85" dur="3s" repeatCount="indefinite" />
        </rect>
        {/* Belt */}
        <rect x="58" y="112" width="84" height="10" rx="3" fill="#0a2463" opacity="0.6" />
        <circle cx="100" cy="117" r="4" fill="#0fb8a9" />
        {/* Legs */}
        <rect x="68" y="150" width="24" height="28" rx="10" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
        <rect x="108" y="150" width="24" height="28" rx="10" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
        {/* Boots */}
        <rect x="66" y="172" width="28" height="12" rx="6" fill="#0d2d6b" opacity="0.5" />
        <rect x="106" y="172" width="28" height="12" rx="6" fill="#0d2d6b" opacity="0.5" />
        {/* Stars around */}
        <circle cx="30" cy="50" r="2" fill="#0fb8a9" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="170" cy="40" r="1.5" fill="#00d4ff" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="25" cy="140" r="1.5" fill="#0fb8a9" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="175" cy="130" r="2" fill="#00d4ff" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <defs>
          <linearGradient id="visorGrad" x1="74" y1="72" x2="126" y2="104" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0a2463" />
            <stop offset="1" stopColor="#0d2d6b" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('')
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `https://www.google.com/search?q=site:ambifo.com+${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 font-lato relative overflow-hidden">
      <Helmet>
        <title>404 - Page Not Found | Ambifo Technology</title>
        <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
      </Helmet>

      {/* Floating orbs */}
      <FloatingOrb delay={0} x="10%" y="20%" size="w-72 h-72" color="bg-blue-500/8" />
      <FloatingOrb delay={2} x="70%" y="60%" size="w-96 h-96" color="bg-cyan-500/6" />
      <FloatingOrb delay={4} x="50%" y="10%" size="w-64 h-64" color="bg-purple-500/5" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Astronaut Illustration */}
        <AstronautIllustration />

        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
          className="mb-4"
        >
          <span className="text-[120px] md:text-[180px] font-bold font-montserrat leading-none bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent select-none">
            404
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-3xl md:text-5xl font-bold text-white font-montserrat mb-4"
        >
          Lost in the Cloud?
        </motion.h1>

        {/* Fun subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-gray-400 text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed"
        >
          {randomFact}
        </motion.p>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          onSubmit={handleSearch}
          className="max-w-lg mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search our site..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-28 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors font-montserrat"
            >
              Search
            </button>
          </div>
        </motion.form>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-all duration-300 font-montserrat shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-montserrat hover:-translate-y-0.5"
          >
            <Rocket className="w-5 h-5" />
            Contact Us
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider font-montserrat">Or explore these pages</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
              >
                <Link
                  to={link.path}
                  className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-white font-montserrat group-hover:text-blue-400 transition-colors">{link.label}</h3>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{link.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
