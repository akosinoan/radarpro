import { HiArrowRight, HiOutlineTag } from "react-icons/hi2";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";
import AnimatedSection from "../components/shared/AnimatedSection";
import promoImg from "../assets/images/promo-foundation-day-2026.jpg";

export default function PromoSection() {
  return (
    <section id="promo" className="py-14 sm:py-32 bg-white/[0.02] border-y border-white/5">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Limited-Time Offer"
              title="Batangas City Foundation Day Promo"
              subtitle="Lower installation prices and 24/7 CCTV remote monitoring from ₱2,500/month. Valid July 1 – August 31, 2026 only."
            />

            <AnimatedSection delay={0.1}>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-600/10 px-4 py-2 text-sm text-brand-500">
                <HiOutlineTag className="h-4 w-4" />
                Monitoring for 5 cameras and up
              </div>
            </AnimatedSection>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="#pricing">
                View Plans <HiArrowRight className="h-4 w-4" />
              </Button>
              <Button as="a" href="#contact" variant="outline">
                Avail the Promo
              </Button>
            </div>
          </div>

          <AnimatedSection delay={0.1}>
            <GlassCard hover={false} className="overflow-hidden p-3">
              <img
                src={promoImg}
                alt="RadarPro Batangas City Foundation Day promo — 24/7 CCTV remote monitoring from ₱2,500/month, valid July 1 to August 31, 2026"
                className="w-full h-auto object-contain rounded-xl"
              />
            </GlassCard>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
