import GlassCard from './GlassCard'

export default function PartnerCard({ name, scope, tagline, logo, plate = 'light', className = '', ...rest }) {
  const plateClass =
    plate === 'light'
      ? 'bg-white ring-1 ring-black/5'
      : 'bg-white/[0.05] ring-1 ring-white/10'

  return (
    <GlassCard hover={false} className={`p-6 h-full ${className}`} {...rest}>
      <div className={`flex h-20 items-center justify-center rounded-xl px-4 ${plateClass}`}>
        <img
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          className={`max-h-14 w-auto max-w-full object-contain transition duration-300 ${
            plate === 'light' ? 'grayscale opacity-80 hover:grayscale-0 hover:opacity-100' : ''
          }`}
        />
      </div>
      <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-brand-500">{scope}</p>
      <h3 className="mt-1 text-base font-semibold text-white">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/55">{tagline}</p>
    </GlassCard>
  )
}
