import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Newspaper, Mic, Calendar, ArrowUpRight, Video, Radio, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import { Helmet } from 'react-helmet-async'

const categories = ['All', 'Video', 'Press Release', 'Podcast', 'Webinar']

const featuredMedia = {
  type: 'Video',
  title: 'Ambifo at AWS re:Invent 2025',
  desc: 'Our experts discuss the latest cloud innovations and AI advancements from the premier cloud computing conference in Las Vegas.',
  image: '/images/media/featured.jpg',
  date: 'December 2025',
  duration: '12:45',
}

const mediaItems = [
  { icon: Play, type: 'Video', title: 'Cloud Transformation at Scale: Ambifo x AWS', desc: 'Watch how we helped a Fortune 500 enterprise migrate 500+ workloads to AWS in under 6 months.', image: '/images/media/video1.jpg', date: 'Jan 2026', color: 'bg-red-500' },
  { icon: Newspaper, type: 'Press Release', title: 'Ambifo Recognised as Bootstrap Champ at ET Startup Awards 2025', desc: 'Economic Times recognizes Ambifo for exceptional growth and innovation in the cloud and AI space.', image: '/images/media/press1.jpg', date: 'Nov 2025', color: 'bg-blue-500' },
  { icon: Mic, type: 'Podcast', title: 'The Future of AI in Enterprise', desc: 'Listen to our leadership team discuss how generative AI is reshaping enterprise technology strategies.', image: '/images/media/podcast1.jpg', date: 'Oct 2025', color: 'bg-purple-500' },
  { icon: Play, type: 'Video', title: 'DevSecOps Best Practices for Modern Teams', desc: 'A deep dive into building secure, compliant pipelines without slowing down development velocity.', image: '/images/media/video2.jpg', date: 'Sep 2025', color: 'bg-red-500' },
  { icon: Newspaper, type: 'Press Release', title: 'Ambifo Expands to Singapore, Bolstering APAC Presence', desc: 'New office strengthens Ambifo\'s ability to serve enterprises across the Asia-Pacific region.', image: '/images/media/press2.jpg', date: 'Aug 2025', color: 'bg-blue-500' },
  { icon: Mic, type: 'Podcast', title: 'Building Resilient Cloud Architectures', desc: 'Our solutions architects share lessons learned from designing fault-tolerant systems for high-traffic applications.', image: '/images/media/podcast2.jpg', date: 'Jul 2025', color: 'bg-purple-500' },
]

const newsItems = [
  { source: 'Economic Times', title: 'Ambifo Named Among Top 20 Cloud Startups to Watch in 2025', date: 'Dec 2025' },
  { source: 'Forbes', title: 'How Ambifo is Democratizing AI for Mid-Market Enterprises', date: 'Nov 2025' },
  { source: 'TechCrunch', title: 'Ambifo Raises Series A to Expand AI-Powered Cloud Platform', date: 'Oct 2025' },
  { source: 'India Today', title: 'From Nagpur to the World: Ambifo\'s Cloud Computing Journey', date: 'Sep 2025' },
]

const typeIcons: Record<string, typeof Play> = {
  Video: Video,
  'Press Release': Newspaper,
  Podcast: Radio,
  Webinar: Globe,
}

export default function Media() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? mediaItems : mediaItems.filter((m) => m.type === activeCategory)

  return (
    <div className="font-lato">
      <Helmet>
        <title>Media | Ambifo Technology</title>
        <meta name="description" content="Videos, press releases, podcasts, and webinars from Ambifo Technology." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            Media
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Media & Press
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Watch, listen, and read the latest from Ambifo — including videos, press releases, podcasts, and webinars.
          </motion.p>
        </div>
      </section>

      {/* Featured Media */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[21/9] md:aspect-[21/7] bg-gray-900 overflow-hidden">
              <img
                src={featuredMedia.image}
                alt={featuredMedia.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">Featured</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full">{featuredMedia.type}</span>
                <span className="flex items-center gap-1 text-gray-300 text-sm">
                  <Calendar className="w-3.5 h-3.5" /> {featuredMedia.date}
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white font-montserrat mb-3 group-hover:text-yellow-400 transition-colors max-w-2xl">
                {featuredMedia.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
                {featuredMedia.desc}
              </p>
              <div className="flex items-center gap-4">
                <Link to="/this-video-is-not-available" className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-navy-900 font-semibold text-sm rounded-lg hover:bg-yellow-500 transition-colors">
                  <Play className="w-5 h-5 fill-current" /> Watch Now
                </Link>
                <span className="text-gray-400 text-sm">{featuredMedia.duration}</span>
              </div>
            </div>
            {/* Play button overlay */}
            <Link to="/this-video-is-not-available" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-20 h-20 bg-yellow-400/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                <Play className="w-8 h-8 text-navy-900 fill-current ml-1" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Filter + Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {categories.map((cat) => {
              const Icon = typeIcons[cat]
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-navy-900 text-white shadow-lg shadow-navy-900/20'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            <AnimatePresence mode="wait">
              {filtered.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-blue-600/20 transition-all duration-500"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* Type badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${item.color}`}>
                          <Icon className="w-3.5 h-3.5" /> {item.type}
                        </span>
                      </div>
                      {/* Play overlay for videos */}
                      {item.type === 'Video' && (
                        <Link to="/this-video-is-not-available" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                            <Play className="w-6 h-6 text-navy-900 fill-current ml-0.5" />
                          </div>
                        </Link>
                      )}
                      {/* Arrow overlay for articles */}
                      {item.type === 'Press Release' && (
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                            <ArrowUpRight className="w-5 h-5 text-navy-900" />
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-navy-900 font-montserrat mb-2 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* In the News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mb-4">In the News</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ambifo Technology featured across leading publications and media outlets.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-blue-600/20 transition-all duration-500 group"
              >
                <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Newspaper className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-montserrat">{item.source}</span>
                <h4 className="text-sm font-bold text-navy-900 font-montserrat mt-2 mb-3 group-hover:text-blue-600 transition-colors leading-snug line-clamp-3">
                  {item.title}
                </h4>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar className="w-3 h-3" /> {item.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Media Mentions' },
              { value: '10+', label: 'Video Features' },
              { value: '25+', label: 'Press Releases' },
              { value: '15+', label: 'Podcast Episodes' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 font-montserrat mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Stay Updated</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">Follow Ambifo for the latest insights on cloud, AI, and digital transformation.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="primary" href="/contact-us">
              Subscribe <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
