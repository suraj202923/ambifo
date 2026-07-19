import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface RibbonBannerProps {
  visible: boolean
  onClose: () => void
}

export default function RibbonBanner({ visible, onClose }: RibbonBannerProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-yellow-400 text-navy-900 text-sm overflow-hidden"
        >
          <div className="max-w-[1440px] mx-auto px-4 py-2.5 flex items-center justify-center relative">
            <span className="font-medium text-center text-xs md:text-sm">
              <strong className="text-navy-900">Unlock the Full Potential of AI.</strong>{' '}
              Benchmark. Optimize. Lead with Confidence.
            </span>
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity shrink-0"
              aria-label="Close banner"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
