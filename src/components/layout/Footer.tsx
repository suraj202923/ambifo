import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight, Send, CheckCircle } from 'lucide-react'
import { footerServices, footerPlatforms, footerSolutions, footerQuickLinks } from '../../data/footerLinks'

const socialLinks = [
  { icon: 'linkedin', href: 'https://www.linkedin.com/company/ambifo-technology/posts/?feedView=all', label: 'LinkedIn' },
  { icon: 'x', href: '/this-social-page-is-not-available', label: 'X (Twitter)' },
  { icon: 'instagram', href: '/this-social-page-is-not-available', label: 'Instagram' },
  { icon: 'facebook', href: '/this-social-page-is-not-available', label: 'Facebook' },
  { icon: 'youtube', href: '/this-social-page-is-not-available', label: 'YouTube' },
]

const SocialIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'x':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    case 'linkedin':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    case 'facebook':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    case 'youtube':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    case 'instagram':
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    default:
      return null
  }
}

function FooterNavLink({ to, label }: { to: string; label: string }) {
  if (to.startsWith('http')) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-yellow-400 text-sm transition-colors py-0.5 hover:translate-x-1 duration-300">
        {label}
      </a>
    )
  }
  return (
    <Link to={to} className="block text-gray-400 hover:text-yellow-400 text-sm transition-all duration-300 py-0.5 hover:translate-x-1">
      {label}
    </Link>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-navy-900 text-gray-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-8 py-16 lg:py-20">
        {/* Top section: Logo + Newsletter + Social */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <span className="text-2xl font-bold text-white font-montserrat">
                AM<span className="text-yellow-400">BIFO</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Accelerating digital transformation with cloud, AI, and data solutions for enterprises worldwide.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+917776809021" className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors">
                <Phone className="w-4 h-4 text-yellow-400/60" /> +91 7776809021
              </a>
              <a href="tel:+919827135213" className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors">
                <Phone className="w-4 h-4 text-yellow-400/60" /> +91 9827135213
              </a>
              <a href="mailto:support@ambifo.com" className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors">
                <Mail className="w-4 h-4 text-yellow-400/60" /> support@ambifo.com
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-yellow-400/60 shrink-0 mt-0.5" />
                <span>Bangalore & Nagpur, India</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider font-montserrat">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">Get the latest insights on cloud, AI, and digital transformation delivered to your inbox.</p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium bg-green-500/10 px-4 py-3 rounded-xl border border-green-500/20">
                <CheckCircle className="w-5 h-5" /> You're subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm outline-none focus:border-yellow-400/50 focus:bg-white/10 transition-all"
                  />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-yellow-400 text-navy-900 font-semibold text-sm rounded-xl hover:bg-yellow-500 transition-all font-montserrat hover:shadow-lg hover:shadow-yellow-400/20">
                  Subscribe <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider font-montserrat">Follow Us</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">Connect with us on social media for the latest updates, insights, and news.</p>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <Link
                  key={label}
                  to={href}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-400 hover:text-yellow-400 hover:bg-white/10 hover:border-yellow-400/20 transition-all duration-300 group"
                >
                  <span className="text-gray-500 group-hover:text-yellow-400 transition-colors"><SocialIcon icon={icon} /></span>
                  <span className="text-sm font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mb-12">
          {footerServices.map((group) => (
            <div key={group.heading}>
              <Link
                to={group.links[0]?.link || '#'}
                className="block text-white font-semibold text-sm mb-4 hover:text-yellow-400 transition-colors uppercase tracking-wider font-montserrat"
              >
                {group.heading}
              </Link>
              <ul className="space-y-1.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterNavLink to={link.link} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-montserrat">Platforms</h3>
            <ul className="space-y-1.5">
              {footerPlatforms.map((item) => (
                <li key={item.label}>
                  <FooterNavLink to={item.link} label={item.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-montserrat">Solutions</h3>
            <ul className="space-y-1.5">
              {footerSolutions.map((item) => (
                <li key={item.label}>
                  <FooterNavLink to={item.link} label={item.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-montserrat">Offices</h3>
            <ul className="space-y-1.5">
              {footerQuickLinks.offices.map((office) => (
                <li key={office} className="text-gray-400 text-sm py-0.5">{office}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-montserrat">Industries</h3>
            <ul className="space-y-1.5">
              {footerQuickLinks.industries.map((item) => (
                <li key={item.label}>
                  <FooterNavLink to={item.link} label={item.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-montserrat">Company</h3>
            <ul className="space-y-1.5">
              {footerQuickLinks.company.map((item) => (
                <li key={item.label}>
                  <FooterNavLink to={item.link} label={item.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-montserrat">Insights</h3>
            <ul className="space-y-1.5">
              {footerQuickLinks.insights.map((item) => (
                <li key={item.label}>
                  <FooterNavLink to={item.link} label={item.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-navy-900 font-semibold text-sm rounded-xl hover:bg-yellow-500 transition-all font-montserrat hover:shadow-lg hover:shadow-yellow-400/20 hover:-translate-y-0.5"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon, href, label }) => (
              <Link
                key={label}
                to={href}
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-white/10 hover:border-yellow-400/20 transition-all duration-300"
              >
                <SocialIcon icon={icon} />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; 2026 Ambifo Technology Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/csr-policy" className="hover:text-yellow-400 transition-colors">CSR Policy</Link>
            <Link to="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-yellow-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
