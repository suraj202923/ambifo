import { motion } from 'framer-motion'
import { Award, Target, Users, Lightbulb, ChevronRight } from 'lucide-react'
import { edgeYouNeed } from '../../data/services'

const iconMap: Record<string, React.ElementType> = {
  'Applied Expertise': Target,
  'End-to-End Delivery': Users,
  'Industry-Specific Solutions': Award,
  'Human-Centered AI': Lightbulb,
}

const stats = [
  { value: '500+', label: 'Cloud Projects Delivered' },
  { value: '150+', label: 'Enterprise Clients' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '40%', label: 'Avg Cost Savings' },
]

export default function EdgeYouNeed() {
  return (
    <section id="edge-you-need" className="relative py-24 bg-navy-900 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header + Stats Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 mb-16">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/15 text-cyan-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase font-montserrat mb-5">
              <Award className="w-4 h-4" />
              Why Ambifo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5 font-montserrat">
              The Edge<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">You Need</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-lato max-w-xl">
              What sets us apart is our commitment to delivering real, measurable impact.
            </p>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-x-12 gap-y-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="text-right"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-montserrat">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-lato mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {edgeYouNeed.map((item, i) => {
            const Icon = iconMap[item.title] || Target
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group rounded-2xl overflow-hidden h-80 cursor-pointer"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-navy-900/20 group-hover:from-navy-900/95 group-hover:via-navy-900/70 transition-all duration-500" />

                {/* Top-left icon */}
                <div className="absolute top-5 left-5">
                  <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30 transition-all duration-500">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-cyan-400/80 uppercase font-montserrat mb-2 block">
                    {item.label}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 font-montserrat group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-lato leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-cyan-400 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/20 transition-all duration-500" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
