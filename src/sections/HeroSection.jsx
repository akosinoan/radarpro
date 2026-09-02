import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import GlowBackground from '../components/shared/GlowBackground'
import { contact } from '../data/contactData'
import heroImg from '../assets/images/about-technician.jpg'

const covers = ['CCTV & surveillance', 'Access control', 'Intrusion & perimeter', '24/7 monitoring']

export default function HeroSection() {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <GlowBackground />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge>
                Security systems integrator · {contact.address.locality}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight text-white leading-[1.08]"
            >
              Security systems engineered for your site,{' '}
              <span className="bg-gradient-to-r from-brand-500 via-brand-500 to-white bg-clip-text text-transparent">
                watched by people, not just software.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/65"
            >
              We assess your environment, design the system around it, deploy it, and
              monitor it around the clock.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button as="a" href="#assessment">
                Request a Site Assessment <HiArrowRight className="h-4 w-4" />
              </Button>
              <Button as="a" href="#monitoring" variant="outline">
                See monitoring plans
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6"
            >
              {covers.map((c) => (
                <li key={c} className="text-sm text-white/60">
                  {c}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(37,99,235,0.45)]"
          >
            <img
              src={heroImg}
              alt="A RadarPro technician installing a surveillance camera on site"
              width="900"
              height="1222"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/15 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
