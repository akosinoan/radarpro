import {
  HiOutlineShieldCheck,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Container from "../ui/Container";

const social = [
  { icon: FaFacebookF, href: "#", label: "RadarPro on Facebook" },
  { icon: FaInstagram, href: "#", label: "RadarPro on Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "RadarPro on LinkedIn" },
];

const contact = [
  { icon: HiOutlinePhone, label: "+63 945 286 9314" },
  { icon: HiOutlinePhone, label: "+63 998 765 4321" },
  { icon: HiOutlineEnvelope, label: "radarpro24.7@gmail.com" },
  {
    icon: HiOutlineMapPin,
    label:
      "St. Anthony cor St. James St., Tierra Verde Subd., Pallocan West, Batangas City",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 mt-20">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-900 ring-1 ring-brand-500/40">
                <HiOutlineShieldCheck className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="text-base font-semibold text-white">
                  RADAR<span className="text-brand-500">PRO</span>
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                  Safety · Awareness · Protection
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              Professional 24/7 remote CCTV monitoring and incident coordination
              protecting homes, businesses, and assets in real time.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-brand-500/60 transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Get In Touch</h4>
            <ul className="mt-4 space-y-3">
              {contact.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-white/65"
                >
                  <c.icon className="h-4 w-4 mt-0.5 text-brand-500 shrink-0" />
                  <span>{c.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {["Services", "Pricing", "Monitoring", "Why Us", "Privacy"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} RadarPro. All rights reserved.</p>
          <p>Your safety. Our priority. 24/7. In real time.</p>
        </div>
      </Container>
    </footer>
  );
}
