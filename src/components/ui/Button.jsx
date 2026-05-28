import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.55)]',
  outline:
    'border border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:border-brand-500/60',
  ghost:
    'text-white/80 hover:text-white',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'lg',
  as = 'button',
  className = '',
  ...rest
}) {
  const Comp = motion[as] || motion.button
  return (
    <Comp
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  )
}
