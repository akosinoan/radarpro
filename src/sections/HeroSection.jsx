import { motion } from "framer-motion";
import { HiArrowRight, HiOutlinePlayCircle } from "react-icons/hi2";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import GlowBackground from "../components/shared/GlowBackground";
import FloatingBadge from "../components/shared/FloatingBadge";
import { floatingBadges } from "../data/featuresData";
import flyerImg from "../assets/images/flyer-pricing.jpg";

const stats = [
  { value: "24/7", label: "Live Monitoring" },
  { value: "<60s", label: "Avg. Alert Time" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <GlowBackground />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge>● Now serving Batangas & nearby cities</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
            >
              24/7 CCTV Monitoring{" "}
              <span className="bg-gradient-to-r from-brand-500 via-brand-500 to-white bg-clip-text text-transparent">
                for Homes & Businesses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/65"
            >
              Real-time incident detection, rapid response coordination, and
              professional remote monitoring human-operated, every hour of every
              day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button as="a" href="#pricing">
                Get Started <HiArrowRight className="h-4 w-4" />
              </Button>
              <Button as="a" href="#pricing" variant="outline">
                <HiOutlinePlayCircle className="h-5 w-5" /> View Packages
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 grid grid-cols-3 max-w-md gap-6"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-semibold text-white">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] sm:aspect-[5/6] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(37,99,235,0.5)]"
            >
              <img
                src={flyerImg}
                alt="RadarPro 24/7 CCTV Monitoring"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
            </motion.div>

            {floatingBadges.map((b, i) => (
              <FloatingBadge key={b.label} {...b} delay={i * 0.2} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
