import mgsLogo from '../assets/images/partners/mgs.png'
import mpebaLogo from '../assets/images/partners/mpeba.png'
import edCarreonLogo from '../assets/images/partners/edcarreon.png'
import bosLogo from '../assets/images/partners/bos.png'
import krclLogo from '../assets/images/partners/krcl.png'
import atexLogo from '../assets/images/partners/atex.png'
import cyberoxLogo from '../assets/images/partners/cyberox.png'

export const partnersIntro =
  'RadarPro works with a network of specialized technology, engineering, cybersecurity, industrial, and security service partners whose capabilities complement our core competencies, spanning cybersecurity and application modernization, industrial control systems, hazardous-environment solutions, and logistics and operational security.'

/*
 * `plate` controls the chip the logo sits on:
 *   'light': dark-on-white artwork, needs a white chip
 *   'dark':  white/bright-on-dark artwork, sits on the page's own dark surface
 */
export const partners = [
  {
    name: 'MPEBA Solutions Inc.',
    scope: 'Local Partner',
    tagline: 'Smart control. Reliable systems. Stronger industries.',
    logo: mpebaLogo,
    plate: 'light',
  },
  {
    name: 'MGS PC Trading',
    scope: 'Local Partner',
    tagline: 'Authorized distributor of Cougar products and computer packages.',
    logo: mgsLogo,
    plate: 'dark',
  },
  {
    name: 'E. D. Carreon',
    scope: 'Local Partner',
    tagline: 'Refrigeration & airconditioning system trading, sale and service.',
    logo: edCarreonLogo,
    plate: 'dark',
  },
  {
    name: 'Blue Ocean Solutions',
    scope: 'International Partner',
    tagline: 'Innovative technology. Integrated solutions.',
    logo: bosLogo,
    plate: 'light',
  },
  {
    name: 'KRCL International',
    scope: 'International Partner',
    tagline: 'Securing operations. Delivering excellence. Security • shipping • logistics.',
    logo: krclLogo,
    plate: 'light',
  },
  {
    name: 'ATEX Approved International',
    scope: 'International Partner',
    tagline: 'ATEX certified solutions. Safe, reliable, built for hazardous environments.',
    logo: atexLogo,
    plate: 'light',
  },
  {
    name: 'Cyberox Systems',
    scope: 'International Partner',
    tagline: 'Application modernization, cybersecurity, and strategic advisory.',
    logo: cyberoxLogo,
    plate: 'dark',
  },
]
