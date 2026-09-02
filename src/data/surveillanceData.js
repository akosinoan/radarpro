/*
 * RETAINED, NOT RENDERED.
 *
 * This is the deep specification content from the corporate profile (p.9-11). It was
 * previously a 1,481px homepage section sitting between Solutions and Industries, where
 * it stopped general visitors cold. It belongs on a dedicated Solutions page once routing
 * exists. Nothing here is lost; it is simply not on the homepage.
 *
 * The ATEX product images were removed: the N60EX file was a stock hazardous-area logo on
 * an oil-derrick photo, not a photo of the handset, and its alt text asserted otherwise.
 * Real product shots are needed from the partner before these render again.
 */

/* CCTV & Video Surveillance Solutions (Corporate Profile, p.9) */

export const surveillanceIntro =
  'A broad portfolio of intelligent surveillance technologies from leading Asian and Western manufacturers.'

export const formFactors = [
  { name: 'Fixed Bullet', use: 'Perimeter • entrances • driveways' },
  { name: 'Turret / Dome', use: 'Indoor • outdoor • discreet coverage' },
  { name: 'PTZ', use: '360° monitoring • long-range observation' },
  { name: 'Box / Modular', use: 'Specialized lenses • custom applications' },
  { name: 'Fisheye / Panoramic', use: 'Wide-area • 180° / 360° coverage' },
  { name: 'Thermal', use: 'Low-light • heat-based detection' },
  { name: 'Explosion-Proof', use: 'Hazardous / classified environments' },
  { name: 'ANPR / LPR', use: 'License plate recognition' },
  { name: 'AI / Analytics', use: 'People • vehicles • intrusion • behavior' },
]

export const brandTiers = [
  { tier: 'Western / International', brands: 'Bosch • Axis • Hanwha Vision • Pelco • Avigilon' },
  { tier: 'Chinese / Asian', brands: 'Hikvision • Dahua • Uniview (UNV) • Tiandy' },
  { tier: 'Enterprise / Specialized', brands: 'VMS platforms • thermal • ruggedized • hazardous-area' },
  { tier: 'Hybrid Architectures', brands: 'IP cameras • NVR • VMS • PoE • analytics • storage' },
]

export const brandFocus = {
  label: 'Special focus: Bosch',
  lines: 'FLEXIDOME • DINION • AUTODOME • MIC • AVIOTEC',
}

export const engineeredForMission = [
  { title: 'Site-Specific Design', description: 'Camera selection based on coverage, risk and environment.' },
  { title: 'Multi-Brand Capability', description: 'Freedom to recommend the right technology rather than a single brand.' },
  { title: 'AI & Analytics', description: 'Intelligent detection, classification and event-based monitoring.' },
  { title: 'Critical Environments', description: 'Options for industrial, logistics, perimeter and hazardous areas.' },
  { title: 'End-to-End Integration', description: 'Cameras, NVR/VMS, PoE, storage, network and monitoring.' },
]

/* Hazardous-area communication (Corporate Profile, p.10-11) */
export const hazardousProducts = {
  eyebrow: 'Hazardous-Area Communication',
  description:
    'ATEX-certified handsets for operations where imaging and location functions are restricted, while keeping rugged reliability and dependable voice performance.',
  items: [
    {
      name: 'N58EX',
      type: 'ATEX Explosion-Proof Feature Phone',
      description:
        'Designed for hazardous environments where camera and location functions are restricted. Combines intrinsically safe operation, rugged durability, and dependable voice messaging in a compact keypad form factor.',
      tags: ['No camera', 'No GPS', 'IP68 rugged'],
    },
    {
      name: 'N60EX',
      type: 'ATEX Explosion-Proof Mobile Phone',
      description:
        'Designed for operations where imaging and location functions are restricted, while keeping rugged reliability, modern connectivity, and one-hand usability.',
      tags: ['No camera', 'No GPS', 'IP68 rugged'],
    },
  ],
}
