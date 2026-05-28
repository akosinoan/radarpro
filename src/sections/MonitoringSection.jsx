import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import MonitoringCard from "../components/ui/MonitoringCard";
import AnimatedSection from "../components/shared/AnimatedSection";
import { monitorTargets } from "../data/monitoringData";

export default function MonitoringSection() {
  return (
    <section
      id="monitoring"
      className="py-24 sm:py-32 bg-white/[0.02] border-y border-white/5"
    >
      <Container>
        <SectionTitle
          eyebrow="What We Monitor"
          title="Coverage built for every environment"
          subtitle="From a single home to a multi-site enterprise we tailor monitoring to your operation."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {monitorTargets.map((t, i) => (
            <AnimatedSection key={t.title} delay={i * 0.05}>
              <MonitoringCard {...t} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
