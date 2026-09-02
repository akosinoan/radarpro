import { useState } from 'react'
import { HiArrowRight, HiOutlinePhone } from 'react-icons/hi2'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import GlassCard from '../components/ui/GlassCard'
import AnimatedSection from '../components/shared/AnimatedSection'
import { contact, enquiryMailto } from '../data/contactData'
import { industries } from '../data/companyData'

const field =
  'w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-500/60 focus:outline-none'

/*
 * Submits to the /api/enquiry Pages Function. If that endpoint is unreachable
 * (local dev, or mail not yet configured) we fall back to composing the same
 * message as a mailto: so an enquiry is never silently dropped.
 */
export default function AssessmentSection() {
  const [status, setStatus] = useState('idle')

  function composeBody(d) {
    return [
      `Name: ${d.name}`,
      `Company: ${d.company || '(not given)'}`,
      `Phone: ${d.phone}`,
      `Email: ${d.email || '(not given)'}`,
      `Site type: ${d.siteType}`,
      `Site location: ${d.location}`,
      '',
      'What they need:',
      d.message || '(not given)',
    ].join('\n')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    setStatus('sending')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(d),
      })
      if (!res.ok) throw new Error('delivery failed')
      setStatus('sent')
    } catch {
      window.location.href = enquiryMailto('Site assessment request', composeBody(d))
      setStatus('fallback')
    }
  }

  return (
    <section id="assessment" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-500">Next step</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Book a site assessment
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              We walk your site, map the coverage you actually need, and give you a written
              recommendation with costs. No obligation, and no camera count quoted before we
              have seen the building.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <a
                href={contact.phone.href}
                className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <HiOutlinePhone className="h-5 w-5 text-brand-500" />
                Prefer to talk? {contact.phone.display}
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <GlassCard hover={false} className="p-6 sm:p-8">
              {status === 'sent' || status === 'fallback' ? (
                <div className="py-8 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {status === 'sent'
                      ? 'Request received'
                      : 'Your email client should be open'}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {status === 'sent' ? (
                      <>
                        Thanks. We will call you within one business day to arrange the
                        site visit. Urgent? Call {contact.phone.display}.
                      </>
                    ) : (
                      <>
                        If nothing happened, email us directly at{' '}
                        <a href={contact.email.href} className="text-brand-500 hover:text-white">
                          {contact.email.display}
                        </a>{' '}
                        or call {contact.phone.display}.
                      </>
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="af-name" className="block text-sm text-white/70">
                      Name <span className="text-signal-300">*</span>
                    </label>
                    <input id="af-name" name="name" required className={`mt-2 ${field}`} />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="af-company" className="block text-sm text-white/70">
                      Company or association
                    </label>
                    <input id="af-company" name="company" className={`mt-2 ${field}`} />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="af-phone" className="block text-sm text-white/70">
                      Mobile number <span className="text-signal-300">*</span>
                    </label>
                    <input id="af-phone" name="phone" type="tel" required className={`mt-2 ${field}`} />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="af-email" className="block text-sm text-white/70">
                      Email
                    </label>
                    <input id="af-email" name="email" type="email" className={`mt-2 ${field}`} />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="af-site" className="block text-sm text-white/70">
                      Type of site <span className="text-signal-300">*</span>
                    </label>
                    <select id="af-site" name="siteType" required defaultValue="" className={`mt-2 ${field}`}>
                      <option value="" disabled>
                        Select one
                      </option>
                      {industries.map((i) => (
                        <option key={i.title} value={i.title} className="bg-navy-950">
                          {i.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="af-location" className="block text-sm text-white/70">
                      Site location <span className="text-signal-300">*</span>
                    </label>
                    <input id="af-location" name="location" required className={`mt-2 ${field}`} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="af-message" className="block text-sm text-white/70">
                      What are you trying to protect?
                    </label>
                    <textarea id="af-message" name="message" rows={3} className={`mt-2 ${field}`} />
                  </div>

                  {/* Honeypot: hidden from people, irresistible to bots. */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="af-website">Do not fill this in</label>
                    <input id="af-website" name="website" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="sm:col-span-2">
                    <Button
                      as="button"
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full sm:w-auto disabled:opacity-60"
                    >
                      {status === 'sending' ? 'Sending...' : 'Request assessment'}
                      <HiArrowRight className="h-4 w-4" />
                    </Button>
                    <p className="mt-4 text-xs text-white/55">
                      We reply within one business day. Fields marked
                      <span className="text-signal-300"> *</span> are required.
                    </p>
                  </div>
                </form>
              )}
            </GlassCard>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
