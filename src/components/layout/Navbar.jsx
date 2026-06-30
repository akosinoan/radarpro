import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineShieldCheck, HiBars3, HiXMark } from 'react-icons/hi2'
import Container from '../ui/Container'
import Button from '../ui/Button'

const links = [
  { label: 'Promo', href: '#promo' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Monitoring', href: '#monitoring' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <Container className="mt-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-navy-950/70 backdrop-blur-xl px-4 sm:px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-900 ring-1 ring-brand-500/40">
              <HiOutlineShieldCheck className="h-5 w-5 text-white" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide text-white">
                RADAR<span className="text-brand-500">PRO</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">24/7 Monitoring</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button size="md" as="a" href="#pricing">Get Started</Button>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 rounded-2xl border border-white/10 bg-navy-950/90 backdrop-blur-xl p-4"
          >
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-white/80 py-2"
                >
                  {l.label}
                </a>
              ))}
              <Button size="md">Get Started</Button>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.header>
  )
}
