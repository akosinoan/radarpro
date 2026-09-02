import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'
import PartnerCard from '../components/ui/PartnerCard'
import AnimatedSection from '../components/shared/AnimatedSection'
import { about, mission, vision, coreValues, leadership } from '../data/companyData'
import { partners, partnersIntro } from '../data/partnersData'
import missionVisionImg from '../assets/images/mission-vision.jpg'

export default function CompanySection() {
  return (
    <section id="company" className="py-20 sm:py-28 bg-white/[0.02] border-y border-white/5">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle align="left" eyebrow="Who We Are" title={about.title} />
            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <p className="text-base leading-relaxed text-white/65">{p}</p>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.2}>
              <GlassCard hover={false} className="mt-8 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-500">Leadership</p>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  {leadership.paragraphs[0]}
                </p>
              </GlassCard>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={missionVisionImg}
                alt=""
                aria-hidden="true"
                width="1200"
                height="800"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-950/55" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 via-navy-950/30 to-navy-950/70" />

              <div className="relative grid gap-4 p-5 sm:grid-cols-2">
                {[mission, vision].map((item) => (
                  <GlassCard key={item.label} hover={false} className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-500">{item.label}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{item.statement}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            <AnimatedSection delay={0.15}>
              <GlassCard hover={false} className="mt-5 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-500">Core Values</p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {coreValues.map((v) => v.term).join(' · ')}
                </p>
              </GlassCard>
            </AnimatedSection>
          </AnimatedSection>
        </div>

        {/* Anchor target for the Partners nav link. Unlike the top-level sections,
            this block sits mid-section, so it needs its own scroll-margin to clear
            the fixed navbar; 24 (96px) matches useScrollSpy's offset. */}
        <div id="partners" className="mt-16 scroll-mt-24 border-t border-white/10 pt-14">
          <SectionTitle
            align="left"
            eyebrow="Partner Network"
            title="The specialists we bring in when your site needs them"
            subtitle={partnersIntro}
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.04} className="h-full">
                <PartnerCard {...partner} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
