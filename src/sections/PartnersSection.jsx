import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import AnimatedSection from "../components/shared/AnimatedSection";
import partnersImg from "../assets/images/partnership-partners.jpg";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-14 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Stronger • Smarter • Safer"
          title="Partnership Together"
          subtitle="Building solutions, securing futures with special thanks to our trusted local and international company partners."
        />

        <AnimatedSection delay={0.1} className="mt-10 sm:mt-14">
          <GlassCard
            hover={false}
            className="overflow-hidden p-3 max-w-md mx-auto"
          >
            <img
              src={partnersImg}
              alt="RadarPro company partners — local partners MGS PC Trading and MPEBA, international partners Blue Ocean Solutions, KRCL International, and ATEX Approved International"
              className="w-full h-auto object-contain rounded-xl"
            />
          </GlassCard>
        </AnimatedSection>
      </Container>
    </section>
  );
}
