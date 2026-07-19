import { motion } from 'framer-motion'
import { ArrowRight, Target, Eye, Lightbulb, Shield, Users, Award, TrendingUp, HeadphonesIcon, Rocket } from 'lucide-react'
import Button from '../../components/common/Button'
import { Helmet } from 'react-helmet-async'

const stats = [
  { number: '500+', label: 'Cloud Projects Delivered' },
  { number: '150+', label: 'Enterprise Clients' },
  { number: '50+', label: 'Certified Cloud Experts' },
  { number: '40%+', label: 'Avg Cost Savings' },
]

const coreValues = [
  { icon: Users, title: 'Customer Success', desc: 'Your success is our success. We are committed to delivering measurable business outcomes and 24/7 support.' },
  { icon: Award, title: 'Technical Excellence', desc: 'Certified experts with deep platform knowledge delivering industry best practices and cutting-edge solutions.' },
  { icon: Shield, title: 'Security First', desc: 'Enterprise-grade security and compliance standards embedded in every solution we deliver.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuously exploring new technologies and methodologies to stay ahead of industry trends.' },
]

const whyChoose = [
  { icon: Award, title: 'Certified Experts', desc: '50+ AWS, Azure & GCP certified cloud architects with 10+ years average experience.' },
  { icon: TrendingUp, title: 'Proven Track Record', desc: '500+ successful cloud projects with 150+ enterprise clients across Fortune 500 companies.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'ISO 27001, GDPR, HIPAA compliant with zero-trust architecture and advanced threat protection.' },
  { icon: Target, title: 'Measurable ROI', desc: '40%+ average cloud cost savings and 90% faster provisioning through intelligent optimization.' },
  { icon: HeadphonesIcon, title: '24/7 Support', desc: 'Round-the-clock expert support with guaranteed SLAs and dedicated account management.' },
  { icon: Rocket, title: 'Rapid Implementation', desc: 'Agile delivery methodology with minimal disruption to your existing operations.' },
]

const timeline = [
  { year: '2019', title: 'Founded', desc: 'Ambifo Technology started with a vision to simplify cloud transformation for enterprises.' },
  { year: '2021', title: '100+ Projects', desc: 'Reached the milestone of delivering 100 successful cloud projects.' },
  { year: '2023', title: 'Global Expansion', desc: 'Expanded operations to serve clients across multiple countries in Asia and beyond.' },
  { year: '2025', title: '500+ Projects', desc: 'Trusted by 150+ enterprises with a team of 50+ certified cloud experts.' },
]

export default function About() {
  return (
    <div className="font-lato">
      <Helmet>
        <title>About Us | Ambifo Technology</title>
        <meta name="description" content="Learn about Ambifo Technology - our story, mission, vision, and core values." />
      </Helmet>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
            About Ambifo
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Our Journey Towards Digital Excellence
          </motion.p>
        </div>
      </section>

      {/* Our Story + Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-montserrat mt-3 mb-6">Building Cloud Excellence Since Day One</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ambifo Technology is a cloud consulting and DevOps services company specializing in enterprise cloud transformation for AWS, Azure, and GCP. Since our founding, we've helped 150+ organizations migrate, optimize, and secure their cloud infrastructure while reducing operational costs and accelerating time-to-market.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With deep expertise in cloud architecture, DevOps automation, and AI/ML solutions, our team of certified cloud architects and engineers delivers end-to-end cloud services. We partner with leading enterprises to design, build, and manage complex cloud environments, enabling them to focus on business growth while we handle cloud excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 font-montserrat group-hover:scale-110 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 font-lato">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl p-10 border border-gray-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 font-montserrat mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower organizations with enterprise-grade cloud solutions and DevOps expertise that reduces complexity, accelerates innovation, and optimizes operational efficiency across AWS, Azure, and GCP.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="bg-white rounded-2xl p-10 border border-gray-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 font-montserrat mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the trusted cloud transformation partner for enterprises globally, known for delivering secure, scalable, and cost-efficient cloud solutions with exceptional customer success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4 font-montserrat">Our Core Values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors duration-500">
                  <v.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4 font-montserrat">Growing Together</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-500">
                      <span className="text-sm font-bold text-blue-600 uppercase tracking-wider font-montserrat">{item.year}</span>
                      <h3 className="text-xl font-bold text-navy-900 font-montserrat mt-1 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md z-10 shrink-0 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ambifo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase font-montserrat">Why Ambifo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4 font-montserrat">Why Choose Ambifo?</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-blue-600/20 transition-all duration-500 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-500">
                  <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 font-montserrat mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">Join Us on Our Journey</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 mb-8">Be part of a team that's shaping the future of cloud and AI.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button variant="primary" href="/careers">
              Explore Careers <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
