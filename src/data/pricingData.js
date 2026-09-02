/* CCTV Monitoring Pricelist (2026 flyer).
 * All tiers bill at a flat ₱750 per camera per month. */

export const pricingPlans = [
  {
    name: 'Basic Package',
    cameras: '4 Cameras',
    price: '₱3,000',
    period: '/month',
    perCamera: 'Only ₱750 per camera / month',
    perDay: "About ₱25.00 a day, for 24-hour coverage",
    features: [
      '24/7 Live CCTV Monitoring',
      'Real-Time Incident Detection',
      'Suspicious Activity Monitoring',
      'Basic Technical Monitoring Support',
    ],
    cta: 'Choose Basic',
    accent: 'from-white/[0.03] to-white/[0.01]',
  },
  {
    name: 'Standard Package',
    cameras: '8 Cameras',
    price: '₱6,000',
    period: '/month',
    perCamera: 'Only ₱750 per camera / month',
    perDay: "About ₱25.00 a day, for 24-hour coverage",
    features: [
      'Everything in Basic',
      'Unauthorized Entry Monitoring',
      'Loitering & Vandalism Prevention',
      'Emergency Incident Reporting',
      'Video Playback Assistance',
    ],
    cta: 'Choose Standard',
    popular: true,
    accent: 'from-brand-500/25 to-brand-900/10',
  },
  {
    name: 'Professional Package',
    cameras: '16 Cameras',
    price: '₱12,000',
    period: '/month',
    perCamera: 'Only ₱750 per camera / month',
    perDay: "About ₱25.00 a day, for 24-hour coverage",
    features: [
      'Everything in Standard',
      'Coordination with Security Personnel & HOA Officers',
      'Dedicated Monitoring Personnel',
      'Networking & Remote Access Support',
    ],
    cta: 'Choose Professional',
    // Top tier reads as gold rather than brand blue: it marks Professional as the
    // premium option without competing with the blue "Most Popular" flag on Standard.
    accent: 'from-signal-500/20 to-signal-500/[0.03]',
    theme: {
      ring: 'ring-1 ring-signal-500/45',
      accentText: 'text-signal-300',
      check: 'text-signal-500',
      cta: 'border-signal-500/40 hover:border-signal-500/70 hover:bg-signal-500/10',
    },
  },
]

export const pricingDisclaimer = 'Prices exclude cameras and installation.'

export const importantNotes = [
  'Existing CCTV system must already be installed.',
  'Repair and maintenance of CCTV equipment shall be shouldered by the client / Homeowner Association.',
  'RadarPro provides monitoring and coordination services only.',
  'Access authorization and viewing permission must be provided by the CCTV system administrator or Homeowners Association.',
  'Monitoring services are conducted remotely from the RadarPro monitoring center.',
]

/* Our Goal (pricelist flyer) */
export const monitoringGoal =
  'Helping prevent incidents through continuous 24/7 CCTV monitoring and real-time reporting.'
