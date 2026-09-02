import {
  HiOutlineShieldCheck,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
} from "react-icons/hi2";
import Container from "../ui/Container";
import { company, contact } from "../../data/contactData";

const contactItems = [
  { icon: HiOutlinePhone, label: contact.phone.display, href: contact.phone.href },
  { icon: HiOutlineEnvelope, label: contact.email.display, href: contact.email.href },
  { icon: HiOutlineGlobeAlt, label: contact.website.display, href: contact.website.href },
  { icon: HiOutlineMapPin, label: contact.address.full },
];

const companyLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "How we work", href: "#process" },
  { label: "24/7 Monitoring", href: "#monitoring" },
  { label: "Company", href: "#company" },
  { label: "Request an assessment", href: "#assessment" },
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
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/55">
                  {company.tagline}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              A Philippine-based security solutions integrator that designs,
              engineers, deploys, and manages security systems backed by 24/7
              human monitoring.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Get In Touch</h4>
            <ul className="mt-4 space-y-3">
              {contactItems.map((c) => (
                <li
                  key={c.label}
                  className="flex items-start gap-3 text-sm text-white/65"
                >
                  <c.icon className="h-4 w-4 mt-0.5 text-brand-500 shrink-0" />
                  {c.href ? (
                    <a href={c.href} className="hover:text-white transition-colors break-words">
                      {c.label}
                    </a>
                  ) : (
                    <span>{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p>{company.promise}</p>
        </div>
      </Container>
    </footer>
  );
}
