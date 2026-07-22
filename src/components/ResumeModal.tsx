import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle, Upload, FileText, ArrowRight } from 'lucide-react'

interface ResumeModalProps {
  onClose: () => void
}

const steps = [
  [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'john@company.com', required: true },
  ],
  [
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 (555) 000-0000', required: false },
    { name: 'experience', label: 'Years of Experience', type: 'select', placeholder: '', required: true, options: ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'] },
    { name: 'currentRole', label: 'Current Role / Designation', type: 'text', placeholder: 'e.g. Senior Cloud Engineer', required: false },
  ],
  [
    { name: 'skills', label: 'Skills / Technologies', type: 'textarea', placeholder: 'e.g. AWS, Terraform, Kubernetes, Python...', required: false },
    { name: 'preferredRole', label: 'Preferred Role Type', type: 'select', placeholder: '', required: false, options: ['Senior Cloud Architect', 'AI/ML Engineer', 'DevSecOps Consultant', 'Data Engineer', 'Solution Architect - AWS', 'Project Manager - Cloud Migration', 'Open to any role'] },
  ],
  [
    { name: 'message', label: 'Cover Letter / Why Ambifo?', type: 'textarea', placeholder: 'Tell us why you want to join Ambifo...', required: false },
  ],
]

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', experience: '', currentRole: '',
    skills: '', preferredRole: '', message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState('')
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateStep = () => {
    const errs: Record<string, string> = {}
    if (step === 0) {
      if (!form.name.trim()) errs.name = 'Name is required'
      if (!form.email.trim()) errs.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email'
    }
    if (step === 1) {
      if (!form.experience.trim()) errs.experience = 'Experience is required'
    }
    return errs
  }

  const handleNext = () => {
    const errs = validateStep()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStep(step + 1)
  }

  const handleBack = () => {
    setErrors({})
    setStep(step - 1)
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
    if (!file) {
      setFileError('Please upload your resume (PDF)')
      return
    }
    setFileError('')
    setErrors({})
    setSending(true)

    try {
      const formData = new FormData()
      Object.entries(form).forEach(([key, val]) => formData.append(key, val))
      formData.append('resume', file)

      const API_URL = import.meta.env.VITE_API_URL || ''
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

      setSubmitted(true)
    } catch {
      setErrors({ submit: 'Network error. Please check your connection and try again.' })
    } finally {
      setSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
              className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-200"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-navy-900 font-montserrat mb-2">Resume Sent!</h3>
            <p className="text-gray-500 text-sm mb-6">Thank you, <strong>{form.name}</strong>! Your resume has been sent to our team. We'll review it and get back to you within 5 business days.</p>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold text-sm rounded-xl hover:bg-navy-800 transition-colors font-montserrat"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-navy-900 font-montserrat">Send Your Resume</h3>
                <p className="text-sm text-gray-500 mt-1">Tell us about yourself</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-8">
              {steps.map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-montserrat transition-all duration-300 ${
                      i <= step
                        ? 'bg-green-500 text-white shadow-md shadow-green-200'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-8 h-0.5 rounded-full transition-all duration-300 ${i < step ? 'bg-green-500' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {step === 0 && (
                    <>
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
                    </>
                  )}

                  {step === 1 && (
                    <>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Phone</label>
                        <input
                          type="tel" name="phone" value={form.phone} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:bg-green-50/30 outline-none transition-all text-sm"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Years of Experience *</label>
                        <select
                          name="experience" value={form.experience} onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-white ${errors.experience ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-green-500 focus:bg-green-50/30'}`}
                        >
                          <option value="">Select experience</option>
                          <option value="0-1 years">0-1 years</option>
                          <option value="1-3 years">1-3 years</option>
                          <option value="3-5 years">3-5 years</option>
                          <option value="5-10 years">5-10 years</option>
                          <option value="10+ years">10+ years</option>
                        </select>
                        {errors.experience && <p className="text-red-500 text-xs mt-1 font-medium">{errors.experience}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Current Role / Designation</label>
                        <input
                          type="text" name="currentRole" value={form.currentRole} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:bg-green-50/30 outline-none transition-all text-sm"
                          placeholder="e.g. Senior Cloud Engineer"
                        />
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Skills / Technologies</label>
                        <textarea
                          name="skills" value={form.skills} onChange={handleChange} rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:bg-green-50/30 outline-none transition-all text-sm resize-none"
                          placeholder="e.g. AWS, Terraform, Kubernetes, Python..."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Preferred Role Type</label>
                        <select
                          name="preferredRole" value={form.preferredRole} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:bg-green-50/30 outline-none transition-all text-sm bg-white"
                        >
                          <option value="">Select a role</option>
                          <option value="Senior Cloud Architect">Senior Cloud Architect</option>
                          <option value="AI/ML Engineer">AI/ML Engineer</option>
                          <option value="DevSecOps Consultant">DevSecOps Consultant</option>
                          <option value="Data Engineer">Data Engineer</option>
                          <option value="Solution Architect - AWS">Solution Architect - AWS</option>
                          <option value="Project Manager - Cloud Migration">Project Manager - Cloud Migration</option>
                          <option value="Open to any role">Open to any role</option>
                        </select>
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Cover Letter / Why Ambifo?</label>
                        <textarea
                          name="message" value={form.message} onChange={handleChange} rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:bg-green-50/30 outline-none transition-all text-sm resize-none"
                          placeholder="Tell us why you want to join Ambifo..."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-montserrat">Resume (PDF) *</label>
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className={`w-full px-4 py-6 rounded-xl border-2 border-dashed cursor-pointer transition-all text-center ${
                            fileError ? 'border-red-400 bg-red-50/50' : file ? 'border-green-400 bg-green-50/30' : 'border-gray-200 hover:border-green-400 hover:bg-green-50/20'
                          }`}
                        >
                          <input
                            ref={fileInputRef} type="file" accept=".pdf,application/pdf" onChange={handleFileChange}
                            className="hidden"
                          />
                          {file ? (
                            <div className="flex items-center justify-center gap-3">
                              <FileText className="w-8 h-8 text-green-500" />
                              <div className="text-left">
                                <p className="text-sm font-semibold text-navy-900 font-montserrat">{file.name}</p>
                                <p className="text-xs text-gray-400">{(file.size / 1024).toFixed(0)} KB</p>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-2">
                              <Upload className="w-8 h-8 text-gray-300" />
                              <p className="text-sm text-gray-500 font-montserrat">Click to upload your resume</p>
                              <p className="text-xs text-gray-400">PDF only, max 5MB</p>
                            </div>
                          )}
                        </div>
                        {fileError && <p className="text-red-500 text-xs mt-1 font-medium">{fileError}</p>}
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {errors.submit && (
                <p className="text-red-500 text-xs text-center font-medium mt-3">{errors.submit}</p>
              )}

              <div className="flex gap-3 pt-6">
                {step > 0 && (
                  <button
                    type="button" onClick={handleBack}
                    className="px-4 py-3 border border-gray-200 text-gray-600 font-semibold text-sm rounded-xl hover:bg-gray-50 transition-all font-montserrat"
                  >
                    Back
                  </button>
                )}
                {step < steps.length - 1 ? (
                  <button
                    type="button" onClick={handleNext}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-navy-900 text-white font-semibold text-sm rounded-xl hover:bg-green-500 hover:text-navy-900 transition-all font-montserrat shadow-md hover:shadow-lg"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit" disabled={sending}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-navy-900 font-semibold text-sm rounded-xl hover:bg-green-600 transition-all font-montserrat disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Resume <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
