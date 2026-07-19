import { motion } from 'framer-motion'
import { Building2, Globe, Landmark, Shield, Zap, Server, Factory, Briefcase, Users, HeartPulse, GraduationCap, Plane, Leaf, Car, Hotel, Tv } from 'lucide-react'

const placeholderClients = [
  { icon: Building2, color: 'text-blue-500 bg-blue-500/10' },
  { icon: Globe, color: 'text-teal-500 bg-teal-500/10' },
  { icon: Landmark, color: 'text-purple-500 bg-purple-500/10' },
  { icon: Shield, color: 'text-orange-500 bg-orange-500/10' },
  { icon: Zap, color: 'text-yellow-500 bg-yellow-500/10' },
  { icon: Server, color: 'text-cyan-500 bg-cyan-500/10' },
  { icon: Factory, color: 'text-red-500 bg-red-500/10' },
  { icon: Briefcase, color: 'text-indigo-500 bg-indigo-500/10' },
  { icon: Users, color: 'text-green-500 bg-green-500/10' },
  { icon: HeartPulse, color: 'text-pink-500 bg-pink-500/10' },
  { icon: GraduationCap, color: 'text-violet-500 bg-violet-500/10' },
  { icon: Plane, color: 'text-sky-500 bg-sky-500/10' },
  { icon: Leaf, color: 'text-emerald-500 bg-emerald-500/10' },
  { icon: Car, color: 'text-amber-500 bg-amber-500/10' },
  { icon: Hotel, color: 'text-rose-500 bg-rose-500/10' },
  { icon: Tv, color: 'text-blue-600 bg-blue-600/10' },
]

export default function ClientLogos() {
  const items = [...placeholderClients, ...placeholderClients]

  return (
    <section id="clientale" className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 font-montserrat">
            In Good Company
          </h2>
          <p className="text-gray-500 mt-2 font-lato">
            Trusted by industry leaders worldwide
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-marquee" style={{ width: 'max-content' }}>
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="flex items-center justify-center h-16 w-36 shrink-0 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <Icon className={`w-7 h-7 ${item.color.split(' ')[0]}`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
