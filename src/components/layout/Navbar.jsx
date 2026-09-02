import { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineShieldCheck, HiBars3, HiXMark } from 'react-icons/hi2'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { company, contact } from '../../data/contactData'
import useScrollSpy from '../shared/useScrollSpy'
import useScrolled from '../shared/useScrolled'

/*
 * Five items, all visible from `md` up. An earlier version hid three links behind an
 * `xl` breakpoint, which silently removed whole sections from the nav between 768px
 * and 1279px with no overflow affordance. Keep this list short enough to always fit.
 *
 * Order mirrors the section order in App.jsx, so scanning the nav top-to-bottom
 * matches scrolling the page top-to-bottom.
 */
const links = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Monitoring', href: '#monitoring' },
  { label: 'Company', href: '#company' },
  { label: 'Partners', href: '#partners' },
]

const sectionIds = links.map((l) => l.href.slice(1))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(sectionIds)
  const scrolled = useScrolled()
  const panelId = useId()
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  // Escape closes the menu and returns focus to the button that opened it.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // Lock body scroll so the page cannot move under the open sheet.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Move focus into the panel when it opens.
  useEffect(() => {
    if (open) panelRef.current?.querySelector('a')?.focus()
  }, [open])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <Container className={scrolled ? 'mt-2' : 'mt-4'}>
        <div
          className={`flex items-center justify-between rounded-full border border-white/10 backdrop-blur-xl px-4 sm:px-6 transition-all duration-300 ${
            scrolled
              ? 'py-2 bg-navy-950/90 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
              : 'py-3 bg-navy-950/70 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-900 ring-1 ring-brand-500/40">
              <HiOutlineShieldCheck className="h-5 w-5 text-white" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide text-white">
                RADAR<span className="text-brand-500">PRO</span>
              </p>
              <p
                className={`text-[10px] uppercase tracking-[0.2em] text-white/55 transition-all ${
                  scrolled ? 'hidden sm:block' : ''
                }`}
              >
                {company.tagline}
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => {
              const isActive = active === l.href.slice(1)
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative py-1 text-sm transition-colors ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {l.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-px bg-brand-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <Button size="md" as="a" href="#assessment">
              Request a Site Assessment
            </Button>
          </div>

          <button
            ref={toggleRef}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls={panelId}
          >
            {open ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <>
          <div
            className="md:hidden fixed inset-0 z-40 bg-navy-950/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <Container className="md:hidden relative z-50">
            <motion.div
              ref={panelRef}
              id={panelId}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 rounded-2xl border border-white/10 bg-navy-950/95 backdrop-blur-xl p-4"
            >
              <div className="flex flex-col">
                <Button size="lg" as="a" href="#assessment" onClick={() => setOpen(false)} className="w-full">
                  Request a Site Assessment
                </Button>

                <div className="mt-4 flex flex-col divide-y divide-white/10">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[48px] items-center text-base text-white/80"
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    href={contact.phone.href}
                    className="flex min-h-[48px] items-center text-base text-white/80"
                  >
                    Call {contact.phone.display}
                  </a>
                </div>
              </div>
            </motion.div>
          </Container>
        </>
      )}
    </motion.header>
  )
}
