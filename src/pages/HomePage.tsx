import HeroSection from '../components/home/HeroSection'
import WhatWeDo from '../components/home/WhatWeDo'
import EdgeYouNeed from '../components/home/EdgeYouNeed'
import ProvenResults from '../components/home/ProvenResults'
import VisionToReality from '../components/home/VisionToReality'
import ClientLogos from '../components/home/ClientLogos'
import Testimonials from '../components/home/Testimonials'
import Partners from '../components/home/Partners'
import CareersCTA from '../components/home/CareersCTA'
import { Helmet } from 'react-helmet-async'

export default function HomePage() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>Ambifo Technology - Cloud Consulting, DevOps & AI Solutions</title>
        <meta name="description" content="Enterprise cloud transformation for AWS, Azure, and GCP. AI/ML solutions, DevOps automation, and managed cloud services." />
      </Helmet>
      <HeroSection />
      <WhatWeDo />
      <EdgeYouNeed />
      <ProvenResults />
      <VisionToReality />
      <ClientLogos />
      <Testimonials />
      <Partners />
      <CareersCTA />
    </div>
  )
}
