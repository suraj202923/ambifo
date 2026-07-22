import { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, MapPin, Clock, DollarSign,
  CheckCircle, Send, Upload, FileText, Star,
  ChevronRight, Building2, Globe, GraduationCap, Heart,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { positions } from '../../data/careersData'

export default function JobDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const position = positions.find((p) => p.slug === slug)

  if (!position) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 font-montserrat mb-4">Position Not Found</h1>
          <p className="text-gray-500 mb-6">The position you're looking for doesn't exist or has been filled.</p>
          <Link to="/careers" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-navy-900 font-semibold text-sm rounded-xl hover:bg-green-600 transition-colors font-montserrat">
            <ArrowLeft className="w-4 h-4" /> Back to Careers
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="font-lato bg-gray-50 min-h-screen">
      <Helmet>
        <title>{position.title} | Ambifo Careers</title>
        <meta name="description" content={position.shortDesc} />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <Link to="/careers" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-montserrat transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Open Positions
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-3 py-1 text-xs font-bold rounded-full ${position.type === 'Full-time' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}>
              {position.type}
            </span>
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              {position.level}
            </span>
            <span className="text-gray-400 text-xs font-montserrat">{position.posted}</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-bold text-white font-montserrat mb-4">
            {position.title}
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-wrap items-center gap-5 text-gray-300 text-sm">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-green-400" /> {position.location}</span>
            <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-green-400" /> {position.team}</span>
            <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-green-400" /> {position.salary}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-green-400" /> {position.posted}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap gap-2 mt-5">
            {position.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-lg border border-white/5">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-900 font-montserrat">About This Role</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{position.description}</p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-900 font-montserrat">Responsibilities</h2>
                </div>
                <ul className="space-y-3">
                  {position.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-900 font-montserrat">Requirements</h2>
                </div>
                <ul className="space-y-3">
                  {position.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Nice to Have */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-navy-900 font-montserrat">Nice to Have</h2>
                </div>
                <ul className="space-y-3">
                  {position.niceToHave.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <Heart className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-7 md:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-green-400" />
                    </div>
                    <h2 className="text-xl font-bold font-montserrat">Benefits & Perks</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {position.benefits.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Application Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ApplicationSidebar position={position.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ApplicationSidebar({ position }: { position: string }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState('')
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email'
    return errs
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    setFileError('')
    if (!selected) return
    if (selected.type !== 'application/pdf') {
      setFileError('Only PDF files are allowed')
      return
    }
    if (selected.size > 5 * 1024 * 1024) {
      setFileError('File size must be under 5MB')
      return
    }
    setFile(selected)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setFileError('')
    setSending(true)

    try {
      const API_URL = import.meta.env.VITE_API_URL || ''

      if (file) {
        const formData = new FormData()
        Object.entries(form).forEach(([key, val]) => formData.append(key, val))
        formData.append('resume', file)
        formData.append('position', position)

        const response = await fetch(`${API_URL}/api/careers/send-resume`, {
          method: 'POST',
          body: formData,
        })
        const data = await response.json()
        if (!response.ok) {
          if (data.errors) {
            setErrors(data.errors)
            if (data.errors.resume) setFileError(data.errors.resume)
          } else {
            setErrors({ submit: data.error || 'Failed to submit. Please try again.' })
          }
          return
        }
      } else {
        const response = await fetch(`${API_URL}/api/careers/apply`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, position }),
        })
        const data = await response.json()
        if (!response.ok) {
          if (data.errors) {
            setErrors(data.errors)
          } else {
            setErrors({ submit: data.error || 'Failed to submit. Please try again.' })
          }
          return
        }
      }

      setSubmitted(true)
    } catch {
      setErrors({ submit: 'Network error. Please check your connection and try again.' })
    } finally {
      setSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {submitted ? (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
            className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-200"
          >
            <CheckCircle className="w-7 h-7 text-white" />
          </motion.div>
          <h3 className="text-lg font-bold text-navy-900 font-montserrat mb-2">Application Sent!</h3>
          <p className="text-gray-500 text-sm mb-5">Thank you! Our team will review your application and get back to you within 5 business days.</p>
          <Link to="/careers" className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-white font-semibold text-sm rounded-xl hover:bg-navy-800 transition-colors font-montserrat">
            <ArrowLeft className="w-4 h-4" /> Browse More Roles
          </Link>
        </motion.div>
      ) : (
        <>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-5">
            <h3 className="text-lg font-bold text-white font-montserrat">Apply for this Role</h3>
            <p className="text-green-100 text-xs mt-1">Quick apply with your details</p>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Full Name *</label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${errors.name ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-green-500 focus:bg-green-50/30'}`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Email *</label>
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${errors.email ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-green-500 focus:bg-green-50/30'}`}
                placeholder="john@company.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Phone</label>
              <input
                type="tel" name="phone" value={form.phone} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:bg-green-50/30 outline-none transition-all text-sm"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Resume (PDF)</label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`w-full px-4 py-4 rounded-xl border-2 border-dashed cursor-pointer transition-all text-center ${
                  fileError ? 'border-red-400 bg-red-50/50' : file ? 'border-green-400 bg-green-50/30' : 'border-gray-200 hover:border-green-400 hover:bg-green-50/20'
                }`}
              >
                <input ref={fileInputRef} type="file" accept=".pdf,application/pdf" onChange={handleFileChange} className="hidden" />
                {file ? (
                  <div className="flex items-center justify-center gap-2">
                    <FileText className="w-5 h-5 text-green-500" />
                    <span className="text-xs font-semibold text-navy-900 font-montserrat truncate max-w-[180px]">{file.name}</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-1">
                    <Upload className="w-6 h-6 text-gray-300" />
                    <p className="text-xs text-gray-400 font-montserrat">Click to upload PDF</p>
                  </div>
                )}
              </div>
              {fileError && <p className="text-red-500 text-xs mt-1 font-medium">{fileError}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Cover Letter</label>
              <textarea
                name="message" value={form.message} onChange={handleChange} rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:bg-green-50/30 outline-none transition-all text-sm resize-none"
                placeholder="Why are you a great fit?"
              />
            </div>

            {errors.submit && <p className="text-red-500 text-xs text-center font-medium">{errors.submit}</p>}

            <button
              type="submit" disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 text-navy-900 font-bold text-sm rounded-xl hover:bg-green-600 transition-all font-montserrat shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>Submit Application <Send className="w-4 h-4" /></>
              )}
            </button>
            <p className="text-center text-xs text-gray-400">We'll review and respond within 5 business days.</p>
          </form>
        </>
      )}
    </div>
  )
}
