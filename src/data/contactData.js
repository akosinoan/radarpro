// Single source of truth for every contact detail on the site.
// Sourced from the 2026 CCTV Monitoring Pricelist and the RadarPro Corporate Profile.

export const company = {
  name: 'RadarPro',
  legalName: 'RadarPro Security Systems',
  tagline: 'Security Systems Integrator',
  promise: 'You monitor. We protect. Your safety is our priority.',
}

export const contact = {
  phone: {
    display: '0956 617 1973',
    href: 'tel:+639566171973',
  },
  email: {
    display: 'info@radarproph.com',
    href: 'mailto:info@radarproph.com',
  },
  website: {
    display: 'www.radarproph.com',
    href: 'https://radarproph.com/',
  },
  address: {
    line1: 'Lena Building, National Highway 4',
    line2: 'Alangilan, Batangas City',
    full: 'Lena Building, National Highway 4, Alangilan, Batangas City',
    locality: 'Batangas City',
    region: 'Batangas',
    country: 'PH',
  },
}

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  contact.address.full,
)}&z=16&output=embed`

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  contact.address.full,
)}`

/** Builds a prefilled enquiry mailto for a given subject/body. */
export function enquiryMailto(subject, body) {
  return `${contact.email.href}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`
}
