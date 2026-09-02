import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'
import AnimatedSection from '../components/shared/AnimatedSection'
import { processSteps } from '../data/processData'

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="How We Work"
          title="Most CCTV companies quote a camera count on the first call"
          subtitle="We walk your site first. The right system depends on your entrances, your blind spots, and how your people actually work."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(({ icon: Icon, step, title, description }, i) => (
            <AnimatedSection key={step} delay={i * 0.07} className="h-full">
              <GlassCard hover={false} className="h-full p-6">
                <li className="list-none">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15 ring-1 ring-brand-500/30 text-brand-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
                      {String(i + 1).padStart(2, '0')} · {step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
                </li>
              </GlassCard>
            </AnimatedSection>
          ))}
        </ol>
      </Container>
    </section>
  )
}
