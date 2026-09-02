import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'
import AnimatedSection from '../components/shared/AnimatedSection'
import { industries } from '../data/companyData'

const featured = industries.filter((i) => i.image)
const rest = industries.filter((i) => !i.image)

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-24 sm:py-32 bg-white/[0.02] border-y border-white/5"
    >
      <Container>
        <SectionTitle
          eyebrow="Industries We Serve"
          title="Built for the site you actually have"
          subtitle="From a single residential community to enterprise and government deployments. If your site is on this list, we have designed for it."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(({ icon: Icon, title, image }, i) => (
            <AnimatedSection key={title} delay={i * 0.05} className="h-full">
              <GlassCard hover={false} className="h-full overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <img
                    src={image}
                    alt={title}
                    width="800"
                    height="450"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 ring-1 ring-brand-500/40 text-brand-500 backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-sm font-semibold leading-snug text-white">{title}</h3>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map(({ icon: Icon, title }, i) => (
            <AnimatedSection key={title} delay={i * 0.05}>
              <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 ring-1 ring-brand-500/30 text-brand-500">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm text-white/80">{title}</span>
              </li>
            </AnimatedSection>
          ))}
        </ul>
      </Container>
    </section>
  )
}
