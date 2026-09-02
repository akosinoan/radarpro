import {
  HiOutlineVideoCamera,
  HiOutlineFingerPrint,
  HiOutlineSquares2X2,
  HiOutlineBellAlert,
  HiOutlineWrenchScrewdriver,
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentCheck,
  HiOutlineShieldExclamation,
} from 'react-icons/hi2'

export const servicesIntro =
  'Four things we design, install, and keep running. Most sites need two or three of them working together, which is the part a camera supplier will not do for you.'

/* Service portfolio (Corporate Profile, p.7-8) */
export const services = [
  {
    icon: HiOutlineVideoCamera,
    title: 'CCTV Surveillance Systems',
    items: [
      'AI-powered IP CCTV systems',
      'High-definition indoor and outdoor cameras',
      'Night vision and thermal imaging cameras',
      'Facial recognition and intelligent video analytics',
      'Remote viewing via mobile and web applications',
      'Video storage and management solutions',
    ],
  },
  {
    icon: HiOutlineFingerPrint,
    title: 'Access Control Systems',
    items: [
      'Biometric fingerprint and facial recognition systems',
      'RFID card and mobile credential access',
      'Smart door locks',
      'Turnstile and gate access systems',
      'Visitor management systems',
      'Time and attendance integration',
    ],
  },
  {
    icon: HiOutlineSquares2X2,
    title: 'Integrated Security Solutions',
    items: [
      'Centralized security management platforms',
      'Multi-site monitoring',
      'Integration of CCTV, access control, alarms, and intercom systems',
      'Security Operations Center (SOC) integration',
      'Cloud-based security management',
    ],
  },
  {
    icon: HiOutlineBellAlert,
    title: 'Intrusion Detection & Alarm Systems',
    items: [
      'Burglar alarm systems',
      'Motion, door, and window sensors',
      'Glass break detectors',
      'Panic buttons',
      'Sirens and strobe alarms',
      '24/7 alarm monitoring integration',
    ],
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: 'Preventive Maintenance & Technical Support',
    items: [
      'Preventive maintenance services',
      'System health checks',
      'Firmware and software updates',
      'Equipment diagnostics and repairs',
      'Emergency onsite support',
      'Annual Maintenance Contracts (AMC)',
    ],
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: 'Video Intercom & Communication Systems',
    items: [
      'Residential video intercoms',
      'Multi-tenant apartment intercom systems',
      'Office communication systems',
      'IP-based intercom solutions',
    ],
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: 'Security Consulting & System Design',
    items: [
      'Security risk assessments',
      'Site surveys',
      'Security master planning',
      'System architecture and design',
      'Technology recommendations',
      'Project management and implementation',
    ],
  },
  {
    icon: HiOutlineShieldExclamation,
    title: 'Perimeter Security',
    items: [
      'Electric fence systems',
      'Perimeter intrusion detection',
      'Barrier gates and automatic gate operators',
      'Bollards and vehicle access control',
      'Security lighting solutions',
    ],
  },
]

/*
 * Four scannable pillars grouped from the eight categories above. The flat eight-card
 * grid asked visitors to read 40+ bullets before they knew what we sell.
 */
export const solutionPillars = [
  {
    icon: HiOutlineVideoCamera,
    title: 'Surveillance & CCTV',
    summary: 'Cameras chosen for your site, not off a price list.',
    covers: ['AI-powered IP CCTV', 'Thermal & night vision', 'Video analytics', 'Storage & remote viewing'],
  },
  {
    icon: HiOutlineFingerPrint,
    title: 'Access Control & Intercom',
    summary: 'Control who gets in, and know who did.',
    covers: ['Biometrics & RFID', 'Smart locks & turnstiles', 'Visitor management', 'IP video intercom'],
  },
  {
    icon: HiOutlineShieldExclamation,
    title: 'Intrusion & Perimeter',
    summary: 'Stop the incident at the fence line, not the front door.',
    covers: ['Alarms & sensors', 'Electric fencing', 'Barrier gates & bollards', 'Security lighting'],
  },
  {
    icon: HiOutlineSquares2X2,
    title: 'Integration & Support',
    summary: 'One system, one number to call when it needs attention.',
    covers: ['Risk assessment & design', 'SOC & multi-site integration', 'Preventive maintenance', 'Annual contracts'],
  },
]
