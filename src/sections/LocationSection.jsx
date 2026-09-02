import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope, HiArrowRight } from "react-icons/hi2";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import AnimatedSection from "../components/shared/AnimatedSection";
import { contact, mapEmbedUrl, directionsUrl } from "../data/contactData";

export default function LocationSection() {
  return (
    <section id="location" className="py-14 sm:py-32">
      <Container>
        <SectionTitle
          eyebrow="Visit Us"
          title="Find us in Batangas City"
          subtitle="Drop by our office or reach out. Our monitoring team is available around the clock."
        />

        <div className="mt-10 sm:mt-14 grid gap-6 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-1">
            <GlassCard hover={false} className="h-full p-8">
              <h3 className="text-lg font-semibold text-white">Our Office</h3>

              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3 text-white/70">
                  <HiOutlineMapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span>
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <HiOutlinePhone className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <a href={contact.phone.href} className="hover:text-white transition-colors">
                    {contact.phone.display}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <HiOutlineEnvelope className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <a href={contact.email.href} className="hover:text-white transition-colors break-all">
                    {contact.email.display}
                  </a>
                </li>
              </ul>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition-shadow hover:shadow-[0_12px_40px_rgba(59,130,246,0.55)]"
              >
                Get Directions <HiArrowRight className="h-4 w-4" />
              </a>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <GlassCard hover={false} className="h-full min-h-[360px] p-1.5">
              <iframe
                title="RadarPro office location on Google Maps"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full min-h-[340px] w-full rounded-xl border-0"
              />
            </GlassCard>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
