import GlassCard from './GlassCard'

export default function MonitoringCard({ icon: Icon, title, description }) {
  return (
    <GlassCard className="p-5 flex items-start gap-4">
      <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-500/15 text-brand-500 ring-1 ring-brand-500/30">
        {Icon && <Icon className="h-5 w-5" />}
      </div>
      <div>
        <h4 className="text-base font-semibold text-white">{title}</h4>
        <p className="mt-1 text-sm text-white/55">{description}</p>
      </div>
    </GlassCard>
  )
}
