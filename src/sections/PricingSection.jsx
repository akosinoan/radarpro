import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import PricingCard from '../components/ui/PricingCard'
import AnimatedSection from '../components/shared/AnimatedSection'
import { pricingPlans } from '../data/pricingData'

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[60%] rounded-full bg-brand-600/20 blur-[120px]" />
      </div>

      <Container>
        <SectionTitle
          eyebrow="CCTV Monitoring Pricelist"
          title="Simple, transparent monitoring plans"
          subtitle="Helping prevent incidents through continuous 24/7 CCTV monitoring and real-time reporting."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 items-stretch">
          {pricingPlans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.08} className="h-full">
              <PricingCard plan={plan} />
            </AnimatedSection>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-white/40">
          Existing CCTV system must already be installed. Monitoring is conducted remotely from the RadarPro control room.
        </p>
      </Container>
    </section>
  )
}
