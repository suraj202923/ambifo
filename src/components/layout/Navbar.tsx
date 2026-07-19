import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  servicesSubmenu,
  platformsSubmenu,
  solutionsSubmenu,
  industriesSubmenu,
  insightsSubmenu,
  companySubmenu,
} from '../../data/navLinks'

function isExternal(href: string) {
  return href.startsWith('http')
}

function NavLink({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  if (isExternal(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-cyan-300 text-sm transition-colors py-1" onClick={onClick}>
        {label}
      </a>
    )
  }
  return (
    <Link to={to} className="block text-gray-300 hover:text-cyan-300 text-sm transition-colors py-1" onClick={onClick}>
      {label}
    </Link>
  )
}

const navItems = [
  { label: 'Services', data: servicesSubmenu, type: 'mega' as const },
  { label: 'Platforms', data: platformsSubmenu, type: 'simple' as const },
  { label: 'Solutions', data: solutionsSubmenu, type: 'mega' as const },
  { label: 'Industries', data: industriesSubmenu, type: 'simple' as const },
  { label: 'Insights & Resources', data: insightsSubmenu, type: 'simple' as const },
  { label: 'Company', data: companySubmenu, type: 'simple' as const },
]

const menuBgImages: Record<string, string> = {
  Services: '/images/navbar/services.jpg',
  Solutions: '/images/navbar/solutions.jpg',
  Industries: '/images/navbar/industries.jpg',
  Platforms: '/images/navbar/platforms.jpg',
  'Insights & Resources': '/images/navbar/insights.jpg',
  Company: '/images/navbar/company.jpg',
}

function DesktopMegaMenu({ data, onItemClick }: { data: typeof servicesSubmenu; label: string; onItemClick: () => void }) {
  const bgImage = menuBgImages[data.label]
  return (
    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
      <div className="relative rounded-xl shadow-2xl shadow-black/40 min-w-[650px] max-w-[900px] overflow-hidden">
        {bgImage && (
          <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        )}
        <div className="absolute inset-0 bg-navy-900/85 backdrop-blur-sm" />
        <div className="relative p-6">
          <p className="text-gray-300 text-sm mb-5 max-w-md leading-relaxed">{data.description}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.columns.map((col) => (
              <div key={col.heading}>
                <Link
                  to={col.link}
                  className="block text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors mb-3"
                  onClick={onItemClick}
                >
                  {col.heading}
                </Link>
                <ul className="space-y-1">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <NavLink to={item.link} label={item.label} onClick={onItemClick} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DesktopSimpleMenu({ data, label, onItemClick }: { data: typeof industriesSubmenu; label: string; onItemClick: () => void }) {
  const bgImage = menuBgImages[label]
  return (
    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
      <div className="relative rounded-xl shadow-2xl shadow-black/40 w-80 overflow-hidden">
        {bgImage && (
          <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        )}
        <div className="absolute inset-0 bg-navy-900/85 backdrop-blur-sm" />
        <div className="relative p-5">
          <p className="text-gray-300 text-xs mb-4 leading-relaxed">{data.description}</p>
          <ul className="space-y-0.5">
            {data.items.map((item) => (
              <li key={item.label}>
                <NavLink to={item.link} label={item.label} onClick={onItemClick} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function MobileSubmenu({ data }: { data: (typeof navItems)[number]['data'] }) {
  const hasColumns = 'columns' in data

  if (hasColumns) {
    return (
      <div className="space-y-4">
        {(data as typeof servicesSubmenu).columns.map((col) => (
          <div key={col.heading}>
            <Link
              to={col.link}
              className="block text-yellow-400 font-semibold text-sm mb-2 px-3 py-1"
            >
              {col.heading}
            </Link>
            {col.items.map((item) => (
              <NavLink key={item.label} to={item.link} label={item.label} />
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-1">
      {(data as typeof industriesSubmenu).items.map((item) => (
        <NavLink key={item.label} to={item.link} label={item.label} />
      ))}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const { pathname } = useLocation()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMobileOpen(false)
    setExpandedMobile(null)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const toggleMobileItem = (label: string) => {
    setExpandedMobile((prev) => (prev === label ? null : label))
  }

  const closeMobile = () => {
    setMobileOpen(false)
    setExpandedMobile(null)
  }

  return (
    <div>
    <nav ref={navRef} className="bg-navy-900/95 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[72px] lg:h-20">
          <Link to="/" className="shrink-0">
            <img
              src="/ambifologo.png"
              alt="Ambifo Technology"
              className="h-24 lg:h-28 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1.5 px-3 xl:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg group-hover:bg-navy-800/50 whitespace-nowrap">
                  {item.label}
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                {item.type === 'mega' ? (
                  <DesktopMegaMenu data={item.data as typeof servicesSubmenu} label={item.label} onItemClick={closeMobile} />
                ) : (
                  <DesktopSimpleMenu data={item.data as typeof industriesSubmenu} label={item.label} onItemClick={closeMobile} />
                )}
              </div>
            ))}
          </div>

          <Link
            to="/contact-us"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-yellow-400 text-navy-900 font-semibold text-sm rounded-lg hover:bg-yellow-500 transition-colors whitespace-nowrap"
          >
            Contact
          </Link>

          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-900 border-t border-navy-700 overflow-hidden max-h-[calc(100vh-64px)] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-0.5">
              {navItems.map((item) => {
                const isExpanded = expandedMobile === item.label
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => toggleMobileItem(item.label)}
                      className="flex items-center justify-between w-full px-3 py-3 text-gray-200 hover:text-yellow-400 font-medium rounded-lg hover:bg-navy-800/50 transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pr-2 pb-2 pt-1 space-y-1">
                            <MobileSubmenu data={item.data} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
              <Link
                to="/contact-us"
                onClick={closeMobile}
                className="block text-center px-5 py-3 bg-yellow-400 text-navy-900 font-semibold rounded-lg mt-4 hover:bg-yellow-500 transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </div>
  )
}
