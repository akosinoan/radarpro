import GlassCard from './GlassCard'

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <GlassCard className="p-6 group">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-brand-900/30 ring-1 ring-brand-500/30 text-brand-500 group-hover:scale-110 transition-transform">
        {Icon && <Icon className="h-6 w-6" />}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
    </GlassCard>
  )
}
