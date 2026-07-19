import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, CheckCircle } from 'lucide-react'
import Button from '../../components/common/Button'
import { generativeAI, accentMap } from '../../data/servicesData'
import { Helmet } from 'react-helmet-async'

const details = [
  { title: 'Intelligent Automation', items: ['Automate complex business processes with LLM-powered agents', 'Implement document processing and data extraction pipelines', 'Build AI assistants for internal knowledge management', 'Automate code generation, review, and documentation', 'Deploy intelligent workflow orchestration with AI decision-making'] },
  { title: 'Advanced Data Analysis', items: ['Analyze unstructured data with natural language queries', 'Generate comprehensive reports and summaries automatically', 'Uncover hidden patterns and trends in large datasets', 'Create interactive dashboards with AI-generated insights', 'Implement real-time data analysis with streaming AI'] },
  { title: 'AI-Powered Content Generation', items: ['Generate marketing copy, blog posts, and social media content', 'Create product descriptions and documentation at scale', 'Produce personalized email campaigns with AI', 'Generate images and graphics from text descriptions', 'Create multilingual content with translation AI'] },
  { title: 'Automated Video Storytelling', items: ['Transform text scripts into engaging video content', 'Generate AI avatars and voiceovers for presentations', 'Create training and educational videos automatically', 'Produce personalized video messages at scale', 'Automate social media video content creation'] },
  { title: 'Digital Virtual Assistant', items: ['Deploy intelligent assistants that understand natural language', 'Integrate with existing systems and knowledge bases', 'Provide 24/7 personalized customer support', 'Learn from interactions to improve over time', 'Handle complex multi-turn conversations'] },
  { title: 'Chatbot & AI Agents', items: ['Build sophisticated chatbots for customer engagement', 'Create AI agents that automate complex workflows', 'Implement RAG pipelines for accurate knowledge retrieval', 'Deploy multi-agent systems for task orchestration', 'Monitor and improve agent performance with analytics'] },
]

export default function GenerativeAI() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const a = accentMap[generativeAI.accent as keyof typeof accentMap]

  return (
    <div className="font-lato">
      <Helmet>
        <title>Generative AI Services | Ambifo Technology</title>
        <meta name="description" content="Enterprise generative AI solutions, automation, and AI-powered business transformation." />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-semibold mb-6 font-montserrat tracking-wider">
            Generative AI
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            {generativeAI.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            {generativeAI.subtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            <Button variant="secondary" href="/contact-us">
              Explore Possibilities <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">Generative AI Capabilities</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Apply generative AI across your organization to drive innovation and efficiency.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generativeAI.services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-xl hover:border-blue-600/20 transition-all duration-500 group">
                <div className={`w-14 h-14 ${a.bg} rounded-xl flex items-center justify-center mb-5 ${a.group} transition-colors duration-500 group-hover:scale-110`}>
                  <s.icon className={`w-7 h-7 ${a.text} ${a.groupText} transition-colors duration-500`} />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Deep Dive</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-4">Detailed Service Breakdown</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Explore each generative AI capability in detail.</p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-4">
            {details.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-500">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold text-navy-900 font-montserrat">{item.title}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                        <ul className="space-y-3">
                          {item.items.map((it) => (
                            <li key={it} className="flex items-start gap-3 text-gray-700">
                              <CheckCircle className={`w-5 h-5 ${a.text} mt-0.5 flex-shrink-0`} />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Embrace Generative AI</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8 max-w-2xl mx-auto">Discover how generative AI can transform your business processes and unlock new possibilities.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="secondary" href="/contact-us">
              Explore Possibilities <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
