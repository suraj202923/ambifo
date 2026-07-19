import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Clock, Users, ChevronRight, Sparkles, Bell, Video, BookOpen, MessageSquare, Globe, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import { Helmet } from 'react-helmet-async'

const upcomingEvents = [
  {
    id: 1,
    title: 'AWS re:Invent 2026',
    date: 'Dec 1, 2026',
    endDate: 'Dec 5, 2026',
    dateObj: new Date('2026-12-01'),
    location: 'Las Vegas, NV',
    type: 'Conference',
    desc: 'Join Ambifo at the premier cloud computing conference. Visit our booth to discuss your cloud and AI strategy with our solutions architects.',
    speakers: ['Rajesh Kumar', 'Priya Mehta'],
    capacity: null,
    virtual: false,
    featured: true,
    color: 'from-blue-600 to-cyan-500',
    icon: Globe,
  },
  {
    id: 2,
    title: 'Cloud & AI Innovation Summit',
    date: 'Oct 15, 2026',
    endDate: null,
    dateObj: new Date('2026-10-15'),
    location: 'Virtual',
    type: 'Webinar',
    desc: 'An exclusive virtual event featuring Ambifo experts discussing the latest trends in cloud architecture and AI-driven transformation.',
    speakers: ['Dr. Aisha Patel'],
    capacity: 500,
    virtual: true,
    featured: false,
    color: 'from-purple-600 to-pink-500',
    icon: Video,
  },
  {
    id: 3,
    title: 'Generative AI Workshop',
    date: 'Sep 22, 2026',
    endDate: null,
    dateObj: new Date('2026-09-22'),
    location: 'Bangalore, India',
    type: 'Workshop',
    desc: 'Hands-on workshop on implementing generative AI solutions for enterprise use cases. Limited seats available.',
    speakers: ['Vikram Singh', 'Sara Chen'],
    capacity: 60,
    virtual: false,
    featured: false,
    color: 'from-emerald-600 to-teal-500',
    icon: BookOpen,
  },
  {
    id: 4,
    title: 'Digital Transformation Roundtable',
    date: 'Aug 18, 2026',
    endDate: null,
    dateObj: new Date('2026-08-18'),
    location: 'Singapore',
    type: 'Roundtable',
    desc: 'An exclusive roundtable with industry leaders on navigating digital transformation challenges in the Asia-Pacific region.',
    speakers: ['Wei Lin Tan'],
    capacity: 30,
    virtual: false,
    featured: false,
    color: 'from-amber-600 to-orange-500',
    icon: MessageSquare,
  },
  {
    id: 5,
    title: 'Women in Tech Leadership Forum',
    date: 'Jul 12, 2026',
    endDate: null,
    dateObj: new Date('2026-07-12'),
    location: 'Hyderabad, India',
    type: 'Forum',
    desc: 'Ambifo hosts a forum celebrating women leaders in technology and fostering inclusive innovation across industries.',
    speakers: ['Priya Mehta', 'Dr. Nalini Rao'],
    capacity: 200,
    virtual: false,
    featured: false,
    color: 'from-pink-600 to-rose-500',
    icon: Users,
  },
]

const pastEvents = [
  { title: 'Data Engineering Masterclass', date: 'Mar 10, 2026', type: 'Workshop', attendees: 45 },
  { title: 'Cloud Security Webinar Series', date: 'Feb 22, 2026', type: 'Webinar', attendees: 320 },
  { title: 'Enterprise AI Roundtable', date: 'Jan 15, 2026', type: 'Roundtable', attendees: 28 },
]

const typeColors: Record<string, string> = {
  Conference: 'bg-blue-500/10 text-blue-600 border-blue-200',
  Webinar: 'bg-purple-500/10 text-purple-600 border-purple-200',
  Workshop: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
  Roundtable: 'bg-amber-500/10 text-amber-600 border-amber-200',
  Forum: 'bg-pink-500/10 text-pink-600 border-pink-200',
}

const typeFilters = ['All', 'Conference', 'Webinar', 'Workshop', 'Roundtable', 'Forum']

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calc = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      }
    }
    setTimeLeft(calc())
    const timer = setInterval(() => setTimeLeft(calc()), 1000)
    return () => clearInterval(timer)
  }, [target])

  return timeLeft
}

function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10">
        <span className="text-2xl md:text-3xl font-bold text-white font-montserrat">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-[11px] md:text-xs text-gray-400 mt-2 block uppercase tracking-wider font-semibold">{label}</span>
    </div>
  )
}

function FeaturedEvent({ event }: { event: typeof upcomingEvents[0] }) {
  const countdown = useCountdown(event.dateObj)

  return (
    <section className="relative py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest font-montserrat">Next Big Event</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-white mb-4 bg-gradient-to-r ${event.color}`}>
              {event.type}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-montserrat mb-4 leading-tight">{event.title}</h2>
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">{event.desc}</p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-400" /> {event.date} — {event.endDate}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" /> {event.location}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact-us" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 font-montserrat shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Register Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact-us" className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 font-montserrat hover:-translate-y-0.5">
                <Bell className="w-5 h-5" /> Get Reminded
              </Link>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex flex-col items-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-4 font-montserrat">Counting Down</p>
            <div className="flex items-center gap-3 md:gap-4">
              <CountdownBlock value={countdown.days} label="Days" />
              <span className="text-2xl text-gray-600 font-bold mt-[-20px]">:</span>
              <CountdownBlock value={countdown.hours} label="Hours" />
              <span className="text-2xl text-gray-600 font-bold mt-[-20px]">:</span>
              <CountdownBlock value={countdown.minutes} label="Mins" />
              <span className="text-2xl text-gray-600 font-bold mt-[-20px]">:</span>
              <CountdownBlock value={countdown.seconds} label="Secs" />
            </div>
            {event.speakers.length > 0 && (
              <div className="mt-8 text-center">
                <p className="text-xs text-gray-500 mb-2 font-semibold">Featured Speakers</p>
                <div className="flex items-center justify-center gap-3">
                  {event.speakers.map((s) => (
                    <div key={s} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-[10px] font-bold text-white">
                        {s.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-300">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Events() {
  const [filter, setFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const featured = upcomingEvents.find((e) => e.featured)
  const filteredEvents = upcomingEvents
    .filter((e) => !e.featured)
    .filter((e) => filter === 'All' || e.type === filter)
    .filter((e) =>
      searchQuery === '' ||
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="font-lato">
      <Helmet>
        <title>Events & Webinars | Ambifo Technology</title>
        <meta name="description" content="Upcoming events, webinars, and workshops from Ambifo Technology." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            Never Miss an Event
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            Events & Webinars
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Join us at upcoming events, webinars, and workshops to learn, connect, and explore the future of cloud and AI.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex items-center justify-center gap-8 text-center">
            {[
              { value: '12+', label: 'Events Per Year' },
              { value: '5K+', label: 'Attendees' },
              { value: '20+', label: 'Expert Speakers' },
              { value: '8', label: 'Countries' },
            ].map((stat) => (
              <div key={stat.label} className="hidden md:block">
                <div className="text-2xl md:text-3xl font-bold text-white font-montserrat">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Event with Countdown */}
      {featured && <FeaturedEvent event={featured} />}

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mb-3">More Upcoming Events</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Stay ahead of the curve with our upcoming sessions across the globe.</p>
          </motion.div>

          {/* Filters + Search */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap items-center gap-2">
              {typeFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 font-montserrat ${
                    filter === f
                      ? 'bg-navy-900 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
          </motion.div>

          {/* Event Grid */}
          <div className="grid gap-6">
            <AnimatePresence mode="wait">
              {filteredEvents.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-7 h-7 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 font-montserrat mb-1">No events found</h3>
                  <p className="text-gray-500 text-sm">Try adjusting your filters or search terms.</p>
                </motion.div>
              ) : (
                filteredEvents.map((event, i) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 group"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Color bar + icon */}
                      <div className={`hidden md:flex w-2 bg-gradient-to-b ${event.color}`} />
                      <div className="flex-1 p-7 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${typeColors[event.type] || 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                                {event.type}
                              </span>
                              {event.virtual && (
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-200">Virtual</span>
                              )}
                              {event.capacity && (
                                <span className="text-xs text-gray-400">{event.capacity} seats</span>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-2 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed max-w-2xl">{event.desc}</p>

                            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 mb-4">
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-blue-600" /> {event.date}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4 text-blue-600" /> {event.location}
                              </span>
                            </div>

                            {event.speakers.length > 0 && (
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs text-gray-400 font-semibold">Speakers:</span>
                                {event.speakers.map((s) => (
                                  <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{s}</span>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="shrink-0 flex flex-row md:flex-col items-center gap-3">
                            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 font-montserrat hover:-translate-y-0.5 shadow-md hover:shadow-lg">
                              Register <ChevronRight className="w-4 h-4" />
                            </Link>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Clock className="w-3.5 h-3.5" />
                              <span>
                                {Math.max(0, Math.ceil((event.dateObj.getTime() - Date.now()) / (1000 * 60 * 60 * 24)))} days left
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 font-montserrat mb-2">Past Events</h2>
            <p className="text-gray-500 text-sm">Missed something? Catch up on our recent events.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {pastEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all group"
              >
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border inline-block mb-3 ${typeColors[event.type] || 'bg-blue-50 text-blue-700 border-blue-100'}`}>{event.type}</span>
                <h3 className="text-base font-bold text-navy-900 font-montserrat mb-2 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {event.date}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {event.attendees} attendees</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Bell className="w-10 h-10 text-white/80 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-3">Never Miss an Event</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Get notified about upcoming events, exclusive webinars, and early-bird registration offers.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); window.open('https://www.google.com/search?q=ambifo+newsletter', '_blank') }}
              className="max-w-md mx-auto flex gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-xl text-sm outline-none bg-white/20 border border-white/30 text-white placeholder-white/60 focus:bg-white/30 transition-colors"
              />
              <button type="submit" className="px-6 py-3.5 bg-navy-900 text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-colors font-montserrat whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Host an Event With Us</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">Interested in collaborating on an event or webinar? Let's make it happen.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="primary" href="/contact-us">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
