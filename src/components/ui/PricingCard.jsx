import { HiCheck } from 'react-icons/hi2'
import { enquiryMailto } from '../../data/contactData'
import GlassCard from './GlassCard'
import Button from './Button'
import Badge from './Badge'

export default function PricingCard({ plan, horizontal = false }) {
  const { name, cameras, price, period, perCamera, perDay, features, cta, popular, accent, theme } = plan
  const ring = theme?.ring ?? (popular ? 'ring-1 ring-brand-500/50' : '')
  const accentText = theme?.accentText ?? 'text-brand-200'
  const checkColor = theme?.check ?? 'text-brand-500'

  return (
    <GlassCard
      hover={false}
      className={`p-6 h-full flex flex-col bg-gradient-to-br ${accent} ${ring}`}
    >
      <div className={horizontal ? 'sm:flex sm:items-start sm:gap-6 lg:gap-8' : ''}>
        <div className={horizontal ? 'sm:w-56 sm:shrink-0 lg:w-64' : ''}>
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-white/90">{name}</h3>
            {popular && <Badge tone="brand">Most Popular</Badge>}
          </div>
          <p className="mt-1 text-sm text-white/55">{cameras}</p>

          <div className="mt-5 flex items-baseline gap-1">
            <span className="text-4xl font-semibold tracking-tight text-white">{price}</span>
            <span className="text-white/55">{period}</span>
          </div>

          <div className="mt-3 space-y-1">
            <p className={`text-sm ${accentText}`}>{perCamera}</p>
            <p className="text-xs text-white/55">{perDay}</p>
          </div>
        </div>

        {/* min-w-0 is required: a flex child defaults to min-width:auto and will
            otherwise overflow the card instead of wrapping, which GlassCard clips. */}
        <ul
          className={`space-y-2.5 ${
            horizontal
              ? 'mt-6 sm:mt-1 sm:min-w-0 sm:flex-1 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2.5 sm:space-y-0 lg:grid-cols-1'
              : 'mt-6 flex-1'
          }`}
        >
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-white/75"
            >
              <HiCheck className={`mt-0.5 h-4 w-4 shrink-0 ${checkColor}`} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        as="a"
        href={enquiryMailto(
          `Inquiry: ${name}`,
          `Hi RadarPro Team,\n\nI'd like to inquire about the ${name} (${cameras}).\n\nPlease share more details on availability, setup, and next steps.\n\nThanks!`,
        )}
        variant={popular ? 'primary' : 'outline'}
        className={horizontal ? 'mt-6 w-full sm:w-auto sm:self-start' : 'mt-8 w-full'}
      >
        {cta}
      </Button>
    </GlassCard>
  )
}
