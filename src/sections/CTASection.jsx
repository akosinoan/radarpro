import { HiArrowRight } from "react-icons/hi2";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import GlassCard from "../components/ui/GlassCard";
import AnimatedSection from "../components/shared/AnimatedSection";

export default function CTASection() {
  return (
    <section className="py-14 sm:py-32">
      <Container>
        <AnimatedSection>
          <GlassCard
            hover={false}
            className="relative overflow-hidden p-10 sm:p-16 text-center"
          >
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[80%] rounded-full bg-brand-600/30 blur-[120px]" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-500">
                Your Safety. Our Priority.
              </p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-white max-w-3xl mx-auto">
                Protect What Matters Most
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-white/65">
                Let our team build a monitoring setup tailored to your home or
                business realtime, around the clock.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button as="a" href="#contact">
                  Contact Us <HiArrowRight className="h-4 w-4" />
                </Button>
                <Button as="a" href="#pricing" variant="outline">
                  Request Custom Quote
                </Button>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </Container>
    </section>
  );
}
