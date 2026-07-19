import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import RibbonBanner from './RibbonBanner'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const [ribbonVisible, setRibbonVisible] = useState(true)
  const offsetClass = ribbonVisible ? 'pt-[104px] lg:pt-[112px]' : 'pt-16 lg:pt-[72px]'

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <RibbonBanner visible={ribbonVisible} onClose={() => setRibbonVisible(false)} />
        <Navbar />
      </div>
      <main className={`flex-1 ${offsetClass}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
