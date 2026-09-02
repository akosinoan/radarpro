import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'
import AnimatedSection from '../components/shared/AnimatedSection'
import { solutionPillars, servicesIntro } from '../data/servicesData'

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 sm:py-28 bg-white/[0.02] border-y border-white/5">
      <Container>
        <SectionTitle
          align="left"
          eyebrow="What We Do"
          title="Everything from the site survey to the 2am response"
          subtitle={servicesIntro}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutionPillars.map(({ icon: Icon, title, summary, covers }, i) => (
            <AnimatedSection key={title} delay={i * 0.05} className="h-full">
              <GlassCard hover={false} className="h-full p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/30 to-brand-900/30 ring-1 ring-brand-500/30 text-brand-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{summary}</p>
                <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4">
                  {covers.map((c) => (
                    <li key={c} className="text-sm text-white/55">
                      {c}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
