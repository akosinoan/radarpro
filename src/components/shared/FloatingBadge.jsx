import { motion } from 'framer-motion'
import { HiOutlineShieldCheck } from 'react-icons/hi2'

export default function FloatingBadge({ label, top, left, right, bottom, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' },
      }}
      style={{ top, left, right, bottom }}
      className="absolute z-10 hidden md:flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/30 text-brand-500">
        <HiOutlineShieldCheck className="h-3.5 w-3.5" />
      </span>
      <span className="text-xs font-medium text-white whitespace-nowrap">{label}</span>
    </motion.div>
  )
}
