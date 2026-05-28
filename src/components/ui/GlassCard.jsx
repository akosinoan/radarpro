import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, ...rest }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] ${className}`}
      {...rest}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
      <div className="relative flex h-full flex-col">{children}</div>
    </motion.div>
  )
}
