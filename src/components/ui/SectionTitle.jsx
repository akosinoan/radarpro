import Badge from './Badge'
import AnimatedSection from '../shared/AnimatedSection'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <AnimatedSection className={`${alignment} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
      {eyebrow && <Badge className="mb-4">{eyebrow}</Badge>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
