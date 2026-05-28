import Container from '../components/ui/Container'
import AnimatedSection from '../components/shared/AnimatedSection'
import { features } from '../data/featuresData'

export default function FeaturesBarSection() {
  return (
    <section className="py-10 border-y border-white/5 bg-white/[0.02]">
      <Container>
        <AnimatedSection>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm text-white/80"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15 ring-1 ring-brand-500/30 text-brand-500">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </Container>
    </section>
  )
}
