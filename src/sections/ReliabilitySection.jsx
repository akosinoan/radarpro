import { HiCheckCircle } from "react-icons/hi2";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import AnimatedSection from "../components/shared/AnimatedSection";
import { reliabilityItems } from "../data/monitoringData";
import flyerImg from "../assets/images/flyer-overview.jpg";

export default function ReliabilitySection() {
  return (
    <section className="py-14 sm:py-32 bg-white/[0.02] border-y border-white/5">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Operations & Reliability"
              title="Built for true 24/7 uptime"
              subtitle="Redundant power, secure systems, and scalable infrastructure engineered so your protection never goes offline."
            />

            <ul className="mt-10 grid sm:grid-cols-2 gap-4">
              {reliabilityItems.map((item, i) => (
                <AnimatedSection key={item} delay={i * 0.05}>
                  <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <HiCheckCircle className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                </AnimatedSection>
              ))}
            </ul>
          </div>

          <AnimatedSection delay={0.1}>
            <GlassCard hover={false} className="overflow-hidden">
              <div className="relative aspect-[4/5]">
                <img
                  src={flyerImg}
                  alt="Operations"
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-500">
                    Our Commitment
                  </p>
                  <p className="mt-2 text-lg text-white leading-snug">
                    Delivering real-time awareness, rapid communication, and
                    proactive monitoring to protect what matters most.
                  </p>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
