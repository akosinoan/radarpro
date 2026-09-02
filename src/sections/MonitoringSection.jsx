import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'
import PricingCard from '../components/ui/PricingCard'
import AnimatedSection from '../components/shared/AnimatedSection'
import VideoPlayer from '../components/shared/VideoPlayer'
import posterImg from '../assets/images/video-poster.jpg'
import {
  pricingPlans,
  pricingDisclaimer,
  importantNotes,
} from '../data/pricingData'

export default function MonitoringSection() {
  return (
<<<<<<< HEAD
    <section id="monitoring" className="relative py-20 sm:py-28 bg-white/[0.02] border-y border-white/5">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[60%] rounded-full bg-brand-600/20 blur-[120px]" />
      </div>

=======
    <section
      id="monitoring"
      className="py-14 sm:py-32 bg-white/[0.02] border-y border-white/5"
    >
>>>>>>> refs/remotes/origin/main
      <Container>
        <SectionTitle
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal-500" />
              24/7 Monitoring
            </span>
          }
          title="Cameras record what happened. We call you while it is happening."
          subtitle="A separate service from installation: our operators watch your existing CCTV around the clock and coordinate the response. Priced per camera, per month."
        />

<<<<<<< HEAD
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div className="grid gap-5 sm:grid-cols-2">
            {pricingPlans.slice(0, 2).map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.06} className="h-full">
                <PricingCard plan={plan} />
              </AnimatedSection>
            ))}
            <AnimatedSection delay={0.12} className="h-full sm:col-span-2">
              <PricingCard plan={pricingPlans[2]} horizontal />
=======
        <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {monitorTargets.map((t, i) => (
            <AnimatedSection key={t.title} delay={i * 0.05}>
              <MonitoringCard {...t} />
>>>>>>> refs/remotes/origin/main
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.1}>
            <GlassCard hover={false} className="p-1.5">
              <div className="aspect-[3/2] w-full">
                <VideoPlayer
                  src="/radarpro-promo.mp4"
                  poster={posterImg}
                  title="How RadarPro 24/7 monitoring works"
                />
              </div>
            </GlassCard>

            <GlassCard hover={false} className="mt-5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-signal-300">
                Before you subscribe
              </h3>
              <ul className="mt-4 space-y-2.5">
                {importantNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2 text-sm leading-relaxed text-white/60">
                    <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-500" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-white/10 pt-4 text-sm text-white/55">
                {pricingDisclaimer}
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
