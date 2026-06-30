import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import FeatureCard from "../components/ui/FeatureCard";
import AnimatedSection from "../components/shared/AnimatedSection";
import { services } from "../data/servicesData";

export default function ServicesSection() {
  return (
    <section id="services" className="py-14 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="What We Do"
          title="A full security operations layer for your cameras"
          subtitle="From live monitoring to incident escalation, we operate as your remote security command center."
        />

        <div className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.06}>
              <FeatureCard {...s} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
