import {
  HiOutlineHome,
  HiOutlineBuildingOffice,
  HiOutlineBuildingOffice2,
  HiOutlineBuildingStorefront,
  HiOutlineTruck,
  HiOutlineCog8Tooth,
  HiOutlineWrenchScrewdriver,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiOutlineHeart,
  HiOutlineBanknotes,
  HiOutlineBuildingLibrary,
} from 'react-icons/hi2'

import residentialImg from '../assets/images/industry-residential.jpg'
import commercialImg from '../assets/images/industry-commercial.jpg'
import retailImg from '../assets/images/industry-retail.jpg'
import warehouseImg from '../assets/images/industry-warehouse.jpg'
import industrialImg from '../assets/images/industry-industrial.jpg'
import schoolImg from '../assets/images/industry-school.jpg'

/* Who We Are (Corporate Profile, p.2) */
export const about = {
  eyebrow: 'Who We Are',
  title: 'A security solutions integrator, not a camera supplier',
  paragraphs: [
    'RadarPro Security Systems is a Philippine-based professional security solutions integrator specializing in the design, engineering, deployment, integration, and management of security technologies and systems for organizations requiring reliable, scalable, and mission-focused protection.',
    'RadarPro was established with a clear distinction from conventional CCTV suppliers and installers. We do not approach security as simply the installation of cameras and equipment. Instead, we assess the security environment, operational requirements, vulnerabilities, risks, and objectives of each client and engineer solutions that integrate technology, people, processes, and operational controls.',
    'Our management team brings extensive domestic and international experience in security solutions and operations, including exposure to multinational organizations like the United Nations and IBM. This experience provides RadarPro with a broader understanding of security requirements across diverse environments, operational conditions, and organizational structures.',
  ],
}

/* Leadership (Corporate Profile, p.3) */
export const leadership = {
  title: 'Leaders @ the Helm',
  paragraphs: [
    'RadarPro is led by professionals who understand that security is not simply about watching. It is about anticipating, protecting, and responding.',
    "The leadership's philosophy is grounded in the belief that effective security begins long before a camera is installed. It starts with understanding the client's environment, identifying vulnerabilities, assessing risks, and developing a solution that is appropriate to the mission and operational realities of the organization.",
  ],
}

/* Mission & Vision (Corporate Profile, p.4) */
export const mission = {
  label: 'Mission',
  statement:
    'To become a trusted Philippine security solutions integrator recognized for engineering reliable, intelligent, and scalable security systems that protect people, property, operations, and critical assets.',
}

export const vision = {
  label: 'Vision',
  statement:
    'To provide clients with professionally engineered security solutions that combine technology, engineering expertise, operational understanding, and disciplined implementation.',
}

/* Core Values (Corporate Profile, p.5). The initials spell RADARPRO. */
export const coreValues = [
  { letter: 'R', term: 'Reliability', description: 'We provide dependable products, services and solutions that our clients can trust.' },
  { letter: 'A', term: 'Accountability', description: 'We take responsibility for our work, commitments and results.' },
  { letter: 'D', term: 'Dedication', description: "We are committed to delivering excellent service and meeting our client's needs." },
  { letter: 'A', term: 'Adaptability', description: 'We continuously improve and adapt to emerging technologies and changing security requirements.' },
  { letter: 'R', term: 'Respect', description: 'We value our clients, employees, partners, and every professional relationship we build.' },
  { letter: 'P', term: 'Professionalism', description: 'We maintain high standards of integrity, workmanship, communication and customer service.' },
  { letter: 'R', term: 'Responsiveness', description: 'We respond promptly to client concerns, service requests and security needs.' },
  { letter: 'O', term: 'Operational Excellence', description: 'We strive for efficient, consistent and high-quality execution in every project.' },
]

/* Industries We Serve (Corporate Profile, p.6) */
export const industries = [
  { icon: HiOutlineHome, title: 'Residential Communities', image: residentialImg },
  { icon: HiOutlineBuildingOffice2, title: 'Commercial Buildings', image: commercialImg },
  { icon: HiOutlineBuildingOffice, title: 'Offices and Corporate Facilities' },
  { icon: HiOutlineBuildingStorefront, title: 'Retail Stores and Shopping Centers', image: retailImg },
  { icon: HiOutlineTruck, title: 'Warehouses and Logistics', image: warehouseImg },
  { icon: HiOutlineCog8Tooth, title: 'Manufacturing Plants' },
  { icon: HiOutlineWrenchScrewdriver, title: 'Industrial Facilities', image: industrialImg },
  { icon: HiOutlineSparkles, title: 'Hotels and Hospitality' },
  { icon: HiOutlineAcademicCap, title: 'Schools and Universities', image: schoolImg },
  { icon: HiOutlineHeart, title: 'Hospitals and Healthcare Facilities' },
  { icon: HiOutlineBanknotes, title: 'Banks and Financial Institutions' },
  { icon: HiOutlineBuildingLibrary, title: 'Government Agencies' },
]

/* Why Choose RadarPro (Corporate Profile, p.13) */
export const whyChooseHeadline =
  'Five things that change what you actually get, not five adjectives.'

export const whyChoose = [
  {
    title: 'We assess before we quote',
    description:
      'Risk, environment, and operations come first. Cameras are an outcome of the survey, never the opening offer.',
  },
  {
    title: 'Technology agnostic',
    description:
      'We specify Bosch, Axis, Hanwha, Hikvision, Dahua or Uniview based on the site. We are not clearing one brand of stock.',
  },
  {
    title: 'Watched by people, not just software',
    description:
      'Trained operators in our control room verify events and coordinate the response, rather than pushing you another phone alert.',
  },
  {
    title: 'One accountable project team',
    description:
      'Design, cabling, commissioning, and handover run as a managed project with a single point of contact throughout.',
  },
  {
    title: 'Built to be maintained',
    description:
      'Preventive maintenance, health checks, firmware updates, and annual contracts, so the system still works in year three.',
  },
]
