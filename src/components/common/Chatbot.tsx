import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Bot, ArrowRight, Briefcase, Phone, MapPin, Info, User, Sparkles } from 'lucide-react'

interface Message {
  id: number
  text: string
  isBot: boolean
  quickReplies?: { label: string; action: string; icon?: typeof Briefcase }[]
  links?: { label: string; href: string }[]
}

const offices = [
  { city: 'Bangalore (HQ)', timezone: 'IST (UTC+5:30)', flag: '\uD83C\uDDEE\uD83C\uDDF3' },
  { city: 'Nagpur', timezone: 'IST (UTC+5:30)', flag: '\uD83C\uDDEE\uD83C\uDDF3' },
  { city: 'San Francisco, USA', timezone: 'PST (UTC-8)', flag: '\uD83C\uDDFA\uD83C\uDDF8' },
  { city: 'Melbourne, Australia', timezone: 'AEST (UTC+10)', flag: '\uD83C\uDDE6\uD83C\uDDFA' },
  { city: 'Dubai, UAE', timezone: 'GST (UTC+4)', flag: '\uD83C\uDDE6\uD83C\uDDEA' },
  { city: 'Singapore', timezone: 'SGT (UTC+8)', flag: '\uD83C\uDDF8\uD83C\uDDEC' },
]

const services = [
  { name: 'Strategy & Advisory', path: '/services/strategy-and-advisory' },
  { name: 'AI, Data & Analytics', path: '/services/ai-data-analytics' },
  { name: 'App Modernization', path: '/services/app-modernization' },
  { name: 'Cloud Infrastructure & Security', path: '/services/cloud-infrastructure-security' },
  { name: 'Generative AI', path: '/services/generative-ai' },
]

const quickReplies = [
  { label: 'Our Services', action: 'services', icon: Briefcase },
  { label: 'Contact Us', action: 'contact', icon: Phone },
  { label: 'Office Locations', action: 'offices', icon: MapPin },
  { label: 'About Ambifo', action: 'about', icon: Info },
  { label: 'Careers', action: 'careers', icon: Sparkles },
]

let msgId = 0

function getResponse(input: string): Message {
  const lower = input.toLowerCase()
  msgId++

  if (lower.match(/\b(services|what do you|offerings|solutions|capabilities)\b/)) {
    return { id: msgId, text: 'We offer a wide range of cloud and AI services:', isBot: true,
      links: services.map((s) => ({ label: s.name, href: s.path })),
      quickReplies: [{ label: 'Contact Sales', action: 'contact', icon: Phone }, { label: 'Office Locations', action: 'offices', icon: MapPin }], };
  }

  if (lower.match(/\b(contact|reach|talk|speak|call|email|phone|get in touch|sales|quote|consult)\b/)) {
    return { id: msgId, text: 'We would love to hear from you! Here is how to reach us:', isBot: true,
      links: [{ label: 'Contact Page', href: '/contact-us' }, { label: 'Email: support@ambifo.com', href: 'mailto:support@ambifo.com' }],
      quickReplies: [{ label: 'Office Locations', action: 'offices', icon: MapPin }, { label: 'Our Services', action: 'services', icon: Briefcase }], };
  }

  if (lower.match(/\b(office|offices|location|locations|where|address|headquarters|hq)\b/)) {
    return { id: msgId, text: 'We have 6 offices worldwide:', isBot: true,
      links: [{ label: 'View All Offices on Contact Page', href: '/contact-us' }],
      quickReplies: [{ label: 'Contact Us', action: 'contact', icon: Phone }, { label: 'Our Services', action: 'services', icon: Briefcase }], };
  }

  if (lower.match(/\b(about|who|company|ambifo|story|background|overview)\b/)) {
    return { id: msgId, text: 'Ambifo Technology accelerates digital transformation with cloud, AI, and data solutions for enterprises worldwide. We are an AWS Advanced Partner and Azure Expert MSP, serving 8+ countries.', isBot: true,
      links: [{ label: 'Learn More About Us', href: '/company/about-us' }],
      quickReplies: [{ label: 'Our Services', action: 'services', icon: Briefcase }, { label: 'Leadership Team', action: 'leadership', icon: Info }], };
  }

  if (lower.match(/\b(leader|team|founder|ceo|cto|management)\b/)) {
    return { id: msgId, text: 'Meet our experienced leadership team driving Ambifos vision and delivering excellence for clients.', isBot: true,
      links: [{ label: 'View Leadership Team', href: '/company/leadership' }],
      quickReplies: [{ label: 'Our Services', action: 'services', icon: Briefcase }, { label: 'Contact Us', action: 'contact', icon: Phone }], };
  }

  if (lower.match(/\b(careers|jobs|hiring|work with|join|openings|recruit)\b/)) {
    return { id: msgId, text: 'We are always looking for talented people! Check out our open positions and see if there is a role that fits you.', isBot: true,
      links: [{ label: 'View Open Positions', href: '/careers' }],
      quickReplies: [{ label: 'About Ambifo', action: 'about', icon: Info }, { label: 'Contact Us', action: 'contact', icon: Phone }], };
  }

  if (lower.match(/\b(cloud migration| migrate| migration)\b/)) {
    return { id: msgId, text: 'We specialize in seamless cloud migrations across AWS, Azure, and GCP. Our approach minimizes downtime and ensures security throughout the process.', isBot: true,
      links: [{ label: 'Cloud Migration Service', href: '/services/cloud-infrastructure-security/cloud-migration' }, { label: 'Cloud Migration Solutions', href: '/solutions/cloud-migration-solutions' }],
      quickReplies: [{ label: 'Get a Quote', action: 'contact', icon: Phone }, { label: 'All Services', action: 'services', icon: Briefcase }], };
  }

  if (lower.match(/\b(ai|artificial intelligence|machine learning|ml|data analytics|gen ai|generative)\b/)) {
    return { id: msgId, text: 'We offer AI and Data Analytics, including MLOps, Data Lakehouse, and Generative AI solutions to help you unlock insights and drive innovation.', isBot: true,
      links: [{ label: 'AI and Data Analytics', href: '/services/ai-data-analytics' }, { label: 'Generative AI', href: '/services/generative-ai' }],
      quickReplies: [{ label: 'Get a Quote', action: 'contact', icon: Phone }, { label: 'All Services', action: 'services', icon: Briefcase }], };
  }

  if (lower.match(/\b(partner|partnership|aws|azure|google cloud|gcp|databricks|snowflake)\b/)) {
    return { id: msgId, text: 'We are an AWS Advanced Partner, Azure Expert MSP, and work with leading technology partners including Databricks, Snowflake, Veeam, Palo Alto, and more.', isBot: true,
      links: [{ label: 'View All Partners', href: '/company/partners' }],
      quickReplies: [{ label: 'Our Services', action: 'services', icon: Briefcase }, { label: 'Contact Us', action: 'contact', icon: Phone }], };
  }

  if (lower.match(/\b(industries|sector|vertical|healthcare|fintech|manufacturing|logistics)\b/)) {
    return { id: msgId, text: 'We serve healthcare, fintech, manufacturing, logistics, aerospace, public sector, and more with industry-specific cloud and AI solutions.', isBot: true,
      links: [{ label: 'View All Industries', href: '/industries' }],
      quickReplies: [{ label: 'Our Services', action: 'services', icon: Briefcase }, { label: 'Contact Us', action: 'contact', icon: Phone }], };
  }

  if (lower.match(/\b(case study|case studies|success story|stories|results|portfolio)\b/)) {
    return { id: msgId, text: 'Explore how we have helped organizations achieve measurable results through cloud and AI transformation.', isBot: true,
      links: [{ label: 'View Case Studies', href: '/insights-resources/case-study' }],
      quickReplies: [{ label: 'Our Services', action: 'services', icon: Briefcase }, { label: 'Contact Us', action: 'contact', icon: Phone }], };
  }

  if (lower.match(/\b(pricing|cost|price|budget|expensive|affordable)\b/)) {
    return { id: msgId, text: 'Every project is unique. We offer a free 30-minute discovery call to understand your needs and recommend the best approach.', isBot: true,
      links: [{ label: 'Schedule a Free Call', href: '/contact-us' }],
      quickReplies: [{ label: 'Our Services', action: 'services', icon: Briefcase }, { label: 'Office Locations', action: 'offices', icon: MapPin }], };
  }

  if (lower.match(/\b(thank|thanks|appreciate)\b/)) {
    return { id: msgId, text: 'You are welcome! Is there anything else I can help you with?', isBot: true, quickReplies, };
  }

  if (lower.match(/\b(hello|hi|hey|good morning|good afternoon|good evening)\b/)) {
    return { id: msgId, text: 'Hello! Welcome to Ambifo Technology. I am here to help you learn about our services, offices, and how we can assist your business.', isBot: true, quickReplies, };
  }

  return { id: msgId, text: 'I am not sure I understand that. Could you try one of these topics, or I can connect you with our team directly.', isBot: true,
    links: [{ label: 'Contact Our Team', href: '/contact-us' }], quickReplies, };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ id: 0, text: 'Hi! I am Ambifos virtual assistant. How can I help you today?', isBot: true, quickReplies }]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); };
  useEffect(() => { scrollToBottom(); }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setShowTooltip(true), 3000)
      return () => clearTimeout(timer)
    } else {
      setShowTooltip(false)
    }
  }, [isOpen])

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: ++msgId, text: text.trim(), isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = getResponse(text);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  const formatOfficeCards = () => {
    return (
      <div className="grid grid-cols-2 gap-1.5 mt-2">
        {offices.map((o) => (
          <div key={o.city} className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1.5">
            <span className="text-sm">{o.flag}</span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-navy-900 truncate">{o.city}</p>
              <p className="text-[10px] text-gray-400">{o.timezone}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      {/* Pulsing rings when closed */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
          <div className="absolute inset-0 w-14 h-14 rounded-full bg-green-400 animate-ping opacity-20" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-0 w-14 h-14 rounded-full bg-green-400 animate-ping opacity-10" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
        </div>
      )}

      {/* Tooltip */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="fixed bottom-24 right-6 z-50 bg-white rounded-xl shadow-xl border border-gray-200 px-4 py-2.5 max-w-[200px] hidden md:block"
          >
            <p className="text-sm text-gray-700 font-medium">Need help? Chat with us!</p>
            <div className="absolute bottom-0 right-6 w-3 h-3 bg-white border-r border-b border-gray-200 transform translate-y-1/2 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        onClick={() => { setIsOpen(!isOpen); setShowTooltip(false); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 text-navy-900 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all duration-300"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.div key='close' initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className='w-6 h-6' />
            </motion.div>
          ) : (
            <motion.div key='open' initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageSquare className='w-6 h-6' />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed z-50 bottom-24 right-4 w-[calc(100vw-2rem)] h-[60vh] max-h-[420px] bg-white rounded-2xl shadow-2xl shadow-gray-900/20 border border-gray-200 overflow-hidden flex flex-col md:bottom-24 md:right-6 md:w-[370px] md:max-w-[calc(100vw-3rem)] md:h-[540px] md:max-h-[calc(100vh-8rem)]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-5 py-4 flex items-center gap-3 shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                <Bot className="w-5 h-5 text-navy-900" />
              </div>
              <div className="relative flex-1">
                <h3 className="text-white font-bold text-sm font-montserrat tracking-wide">AMBIFO Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-green-400 text-[11px] font-medium">Online now</p>
                </div>
              </div>
              <div className="relative px-2.5 py-1 bg-green-500/15 border border-green-500/20 rounded-full">
                <span className="text-green-400 text-[10px] font-bold tracking-wider uppercase">Live</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, idx) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx === messages.length - 1 ? 0 : 0 }}
                  className={msg.isBot ? 'flex justify-start' : 'flex justify-end'}
                >
                  <div className="max-w-[85%]">
                    {msg.isBot && (
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Bot className="w-3 h-3 text-green-600" />
                        </div>
                        <span className='text-[10px] text-gray-400 font-semibold'>Ambifo</span>
                      </div>
                    )}
                    {!msg.isBot && (
                      <div className="flex items-center gap-1.5 mb-1 justify-end">
                        <span className='text-[10px] text-gray-400 font-semibold'>You</span>
                        <div className="w-5 h-5 rounded-full bg-navy-900 flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    )}
                    <div
                      className={msg.isBot
                        ? 'px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm leading-relaxed whitespace-pre-line bg-gray-100 text-gray-700 shadow-sm'
                        : 'px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm leading-relaxed whitespace-pre-line bg-gradient-to-br from-navy-900 to-navy-800 text-white shadow-md'
                      }
                    >
                      {msg.text}
                    </div>
                    {msg.id === 0 && msg.isBot && formatOfficeCards() === null}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-2 space-y-1.5">
                        {msg.links.map((link) => (
                          <a
                            key={link.href + link.label}
                            href={link.href}
                            className="flex items-center gap-2 bg-blue-50 border border-blue-100 hover:border-blue-300 hover:bg-blue-100 rounded-xl px-3 py-2 text-xs text-blue-700 font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                          >
                            <ArrowRight className='w-3.5 h-3.5 text-blue-500' /> {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                    {msg.quickReplies && msg.quickReplies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {msg.quickReplies.map((qr) => {
                          const Icon = qr.icon || ArrowRight
                          return (
                            <button
                              key={qr.label}
                              onClick={() => handleSend(qr.action)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-200 hover:from-blue-100 hover:to-cyan-100 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                              <Icon className="w-3 h-3" /> {qr.label}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Bot className="w-3 h-3 text-green-600" />
                      </div>
                      <span className='text-[10px] text-gray-400 font-semibold'>Ambifo</span>
                    </div>
                    <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                      <div className="flex gap-1">
                        <span className='w-2 h-2 bg-green-400 rounded-full animate-bounce' style={{ animationDelay: '0ms' }} />
                        <span className='w-2 h-2 bg-green-400 rounded-full animate-bounce' style={{ animationDelay: '150ms' }} />
                        <span className='w-2 h-2 bg-green-400 rounded-full animate-bounce' style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 px-4 py-3 bg-gradient-to-r from-gray-50 to-white shrink-0">
              <p className="text-center text-[11px] text-gray-400 font-medium">Select an option above to continue</p>
              <p className="text-center text-[10px] text-gray-300 mt-1 font-medium">Powered by Ambifo Technology</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}