import { HiCheckCircle } from 'react-icons/hi2'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'
import AnimatedSection from '../components/shared/AnimatedSection'
import { whyChoose, whyChooseHeadline } from '../data/companyData'
import { reliabilityItems } from '../data/monitoringData'
import controlRoomImg from '../assets/images/operations-control-room.jpg'

export default function WhyChooseUsSection() {
  return (
<<<<<<< HEAD
    <section id="why" className="py-20 sm:py-28">
=======
    <section id="why" className="py-14 sm:py-32">
>>>>>>> refs/remotes/origin/main
      <Container>
        <SectionTitle
          eyebrow="Why RadarPro"
          title="Why choose RadarPro"
          subtitle={whyChooseHeadline}
        />

<<<<<<< HEAD
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
=======
        <div className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
>>>>>>> refs/remotes/origin/main
          {whyChoose.map((w, i) => (
            <AnimatedSection key={w.title} delay={i * 0.05} className="h-full">
              <GlassCard hover={false} className="h-full p-6">
                <li className="list-none">
                  <span className="text-sm font-semibold tabular-nums text-brand-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-white">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{w.description}</p>
                </li>
              </GlassCard>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.3} className="h-full">
            <GlassCard hover={false} className="h-full overflow-hidden">
              <div className="relative h-full min-h-[220px]">
                <img
                  src={controlRoomImg}
                  alt="RadarPro operators monitoring live camera feeds"
                  width="1400"
                  height="270"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-950/55" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent" />
                <ul className="relative flex h-full flex-col justify-end gap-2 p-6">
                  {reliabilityItems.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                      <HiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </AnimatedSection>
        </ol>
      </Container>
    </section>
  )
}
