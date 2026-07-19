import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  light?: boolean
  centered?: boolean
}

export default function SectionHeading({ title, subtitle, light, centered }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl font-bold font-montserrat ${light ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
