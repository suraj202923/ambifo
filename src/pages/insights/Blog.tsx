import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Tag, TrendingUp, BookOpen, Search, ArrowUpRight, User, Mail, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'
import { Helmet } from 'react-helmet-async'

const categories = ['All', 'AI & ML', 'Cloud', 'Data', 'DevOps', 'Enterprise', 'Industry']

const blogPosts = [
  { title: 'Enterprise Adoption Starts Where Most AI Demos End', category: 'AI & ML', date: 'July 10, 2025', image: '/images/blog/governed-data.jpg', excerpt: 'Why the gap between AI proof-of-concept and production deployment remains the biggest challenge for enterprises — and how to bridge it.', readTime: '8 min', author: 'Suraj K', tags: ['AI', 'Enterprise', 'Production'] },
  { title: 'The Last-Mile Problem in Enterprise Data Access', category: 'Data', date: 'May 5, 2025', image: '/images/blog/governed-data.jpg', excerpt: 'How governed data platforms solve the final barrier between data lakes and business-ready insights.', readTime: '6 min', author: 'Nilesh A', tags: ['Data Engineering', 'Governance'] },
  { title: 'Enterprise RAG Application for Knowledge Discovery and Proposal Automation', category: 'AI & ML', date: 'February 9, 2025', image: '/images/blog/document-intelligence.jpg', excerpt: 'Building retrieval-augmented generation systems that turn internal knowledge into competitive advantage.', readTime: '10 min', author: 'Suraj K', tags: ['RAG', 'GenAI', 'Automation'] },
  { title: 'From Monolith to Modern: Modernizing a Decade-Old Healthcare RCM Platform', category: 'Cloud', date: 'September 5, 2025', image: '/images/blog/monolith-modern.jpg', excerpt: 'A deep dive into the architecture decisions, migration strategy, and lessons learned from modernizing a legacy healthcare platform.', readTime: '12 min', author: 'Shiwani K', tags: ['Healthcare', 'Migration', 'Modernization'] },
  { title: 'How Ambifo Uses Data-Driven Delivery to Engineer Project Success', category: 'DevOps', date: 'August 29, 2025', image: '/images/blog/data-driven.jpg', excerpt: 'Our framework for measuring delivery health, predicting risks, and ensuring every sprint ships business value.', readTime: '7 min', author: 'Nilesh A', tags: ['Delivery', 'Metrics', 'DevOps'] },
  { title: 'Accelerating AI Adoption — A Tactical Look at Model Context Protocol (MCP)', category: 'AI & ML', date: 'June 16, 2025', image: '/images/blog/digital-x.jpg', excerpt: 'Understanding MCP and how it enables AI agents to interact with enterprise tools and data sources seamlessly.', readTime: '9 min', author: 'Suraj K', tags: ['MCP', 'AI Agents', 'Protocol'] },
  { title: "BrokerReady's Complete Cloud Pivot: From VMware Lock-In to AWS-Driven Innovation", category: 'Cloud', date: 'May 28, 2025', image: '/images/blog/cloud-it.jpg', excerpt: 'How a leading insurance platform migrated off VMware, cut costs by 40%, and unlocked generative AI capabilities on AWS.', readTime: '11 min', author: 'Shiwani K', tags: ['AWS', 'VMware', 'Migration'] },
  { title: 'Top 3 Cloud Computing Trends for AWS Customers in 2025', category: 'Cloud', date: 'May 19, 2025', image: '/images/blog/blog-thumb.jpg', excerpt: 'From serverless-first architectures to AI-powered operations — the trends shaping cloud strategy this year.', readTime: '5 min', author: 'Nilesh A', tags: ['AWS', 'Trends', 'Cloud'] },
  { title: "Ambifo's EGIRA Framework — Powering Enterprise General Intelligence", category: 'Enterprise', date: 'May 17, 2025', image: '/images/blog/neural-network.jpg', excerpt: 'Introducing our proprietary framework that unifies AI, data, and operations into a single intelligent enterprise layer.', readTime: '8 min', author: 'Suraj K', tags: ['EGIRA', 'Framework', 'Intelligence'] },
  { title: "India's Space Tech Revolution — AWS & Ambifo Unlocking a New Era", category: 'Industry', date: 'March 28, 2025', image: '/images/blog/satellite.jpg', excerpt: 'How cloud computing and AI are transforming India\'s space technology ecosystem — from satellite data to launch analytics.', readTime: '7 min', author: 'Shiwani K', tags: ['Space', 'AWS', 'India'] },
  { title: 'The Question Took Two Seconds. Safely Joining Five Systems, Masking Sensitive Fields...', category: 'Data', date: 'May 29, 2025', image: '/images/blog/governed-data.jpg', excerpt: 'Why governed data access matters more than ever, and how to build systems that are both fast and secure.', readTime: '6 min', author: 'Nilesh A', tags: ['Data Security', 'Architecture'] },
]

const trendingTopics = [
  { label: 'Generative AI', count: 4 },
  { label: 'Cloud Migration', count: 3 },
  { label: 'Data Governance', count: 3 },
  { label: 'DevSecOps', count: 2 },
  { label: 'MLOps', count: 2 },
  { label: 'Enterprise Architecture', count: 2 },
  { label: 'FinOps', count: 1 },
  { label: 'Kubernetes', count: 1 },
]

const categoryColors: Record<string, string> = {
  'AI & ML': 'bg-purple-500',
  'Cloud': 'bg-blue-500',
  'Data': 'bg-teal-500',
  'DevOps': 'bg-orange-500',
  'Enterprise': 'bg-indigo-500',
  'Industry': 'bg-green-500',
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const featured = blogPosts[0]

  const filtered = blogPosts.slice(1).filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = searchQuery === '' || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <div className="font-lato">
      <Helmet>
        <title>Blog | Ambifo Technology</title>
        <meta name="description" content="Thought leadership and insights on cloud computing, AI, data analytics, and digital transformation from Ambifo Technology." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            <BookOpen className="w-4 h-4" /> Insights & Resources
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-montserrat mb-6 leading-tight">
            Blog Posts
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dives, case studies, and tactical guides from our engineering and leadership teams.
          </motion.p>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer bg-white border border-gray-100 shadow-lg"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto bg-gray-200 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-900/20 md:to-navy-900/40" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-yellow-400 text-navy-900 text-xs font-bold uppercase tracking-wider rounded-full">Featured</span>
                  <span className={`px-3 py-1 text-white text-xs font-bold uppercase tracking-wider rounded-full ${categoryColors[featured.category] || 'bg-blue-500'}`}>{featured.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 font-montserrat mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featured.readTime} read</span>
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {featured.author}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">{tag}</span>
                  ))}
                </div>
                <Link to="/this-article-is-not-available" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all font-montserrat">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search + Filter + Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-sm bg-gray-50"
                  />
                </div>
              </motion.div>

              {/* Category Tabs */}
              <div className="flex flex-wrap items-center gap-2 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeCategory === cat
                        ? 'bg-navy-900 text-white shadow-lg shadow-navy-900/20'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Blog Grid */}
              <div className="grid md:grid-cols-2 gap-7">
                <AnimatePresence mode="wait">
                  {filtered.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-full text-center py-16"
                    >
                      <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg font-medium">No articles found matching your criteria.</p>
                      <button onClick={() => { setActiveCategory('All'); setSearchQuery('') }} className="text-blue-600 font-semibold text-sm mt-3 hover:underline">
                        Clear filters
                      </button>
                    </motion.div>
                  ) : (
                    filtered.map((post, i) => (
                      <motion.div
                        key={post.title}
                        layout
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-blue-600/20 transition-all duration-500"
                      >
                        <div className="relative h-48 bg-gray-200 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-4 left-4">
                            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${categoryColors[post.category] || 'bg-blue-500'}`}>
                              {post.category}
                            </span>
                          </div>
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link to="/this-article-is-not-available" className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                              <ArrowUpRight className="w-5 h-5 text-navy-900" />
                            </Link>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                          </div>
                          <h3 className="text-lg font-bold text-navy-900 font-montserrat mb-2 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((tag) => (
                              <span key={tag} className="px-2.5 py-0.5 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 shrink-0 space-y-8">
              {/* Trending Topics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-navy-900 font-montserrat">Trending Topics</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <button
                      key={topic.label}
                      onClick={() => setSearchQuery(topic.label)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm transition-all duration-300"
                    >
                      <Tag className="w-3 h-3" />
                      {topic.label}
                      <span className="text-xs text-gray-400">{topic.count}</span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter Subscription */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 text-white"
              >
                <Mail className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-bold font-montserrat mb-2">Stay in the Loop</h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">Get the latest articles and insights delivered to your inbox every week.</p>
                {subscribed ? (
                  <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                    <CheckCircle className="w-5 h-5" /> You're subscribed!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 text-sm outline-none focus:border-yellow-400/50 transition-all"
                    />
                    <button type="submit" className="w-full px-4 py-3 bg-yellow-400 text-navy-900 font-semibold text-sm rounded-xl hover:bg-yellow-500 transition-colors font-montserrat">
                      Subscribe
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Popular Posts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-navy-900 font-montserrat mb-5">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(1, 5).map((post, i) => (
                    <Link to="/this-article-is-not-available" key={post.title} className="flex gap-3 group cursor-pointer">
                      <span className="text-2xl font-bold text-blue-600/20 font-montserrat shrink-0 w-8 text-center leading-none pt-1">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-navy-900 font-montserrat group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '11+', label: 'Published Articles' },
              { value: '6+', label: 'Expert Authors' },
              { value: '50+', label: 'Topics Covered' },
              { value: '10K+', label: 'Monthly Readers' },
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
      <section className="relative py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
            Never Miss an Update
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">
            Subscribe to our blog for the latest insights on cloud, AI, and digital transformation delivered to your inbox.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="secondary" href="/contact-us">
              Subscribe <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
