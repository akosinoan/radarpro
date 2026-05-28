export default function Badge({ children, className = '', tone = 'brand' }) {
  const tones = {
    brand: 'border-brand-500/40 bg-brand-500/10 text-brand-500',
    soft: 'border-white/15 bg-white/5 text-white/80',
    success: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-300',
  }
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
