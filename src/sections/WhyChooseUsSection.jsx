import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import FeatureCard from "../components/ui/FeatureCard";
import AnimatedSection from "../components/shared/AnimatedSection";
import { whyChoose } from "../data/monitoringData";

export default function WhyChooseUsSection() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Why RadarPro"
          title="The advantages that keep clients with us"
          subtitle="Trained operators, hardened infrastructure, and an SLA-driven response not just recordings after the fact."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => (
            <AnimatedSection key={w.title} delay={i * 0.06}>
              <FeatureCard {...w} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
