import { HiCheck } from 'react-icons/hi2'
import GlassCard from './GlassCard'
import Button from './Button'
import Badge from './Badge'

export default function PricingCard({ plan }) {
  const { name, cameras, price, period, perCamera, perDay, features, cta, popular, accent, theme } = plan
  const ring = theme?.ring ?? (popular ? 'ring-1 ring-brand-500/50' : '')
  const accentText = theme?.accentText ?? 'text-brand-500/90'
  const checkColor = theme?.check ?? 'text-brand-500'

  return (
    <GlassCard
      className={`p-8 h-full flex flex-col bg-gradient-to-br ${accent} ${ring}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white/90">{name}</h3>
        {popular && <Badge tone="brand">Most Popular</Badge>}
      </div>
      <p className="mt-1 text-sm text-white/50">{cameras}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">{price}</span>
        <span className="text-white/50">{period}</span>
      </div>

      <div className="mt-3 space-y-1">
        <p className={`text-sm ${accentText}`}>{perCamera}</p>
        <p className="text-xs text-white/40">{perDay}</p>
      </div>

      <ul className="mt-6 mb-8 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-white/75">
            <HiCheck className={`mt-0.5 h-4 w-4 shrink-0 ${checkColor}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        as="a"
        href={`mailto:radarpro24.7@gmail.com?subject=${encodeURIComponent(
          `Inquiry: ${name}`,
        )}&body=${encodeURIComponent(
          `Hi RadarPro Team,\n\nI'd like to inquire about the ${name} (${cameras}).\n\nPlease share more details on availability, setup, and next steps.\n\nThanks!`,
        )}`}
        variant={popular ? 'primary' : 'outline'}
        className="w-full"
      >
        {cta}
      </Button>
    </GlassCard>
  )
}
