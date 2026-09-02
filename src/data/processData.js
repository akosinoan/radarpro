import {
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
  HiOutlineWrenchScrewdriver,
  HiOutlineEye,
} from 'react-icons/hi2'

/*
 * The company's stated differentiator is that it assesses before it recommends.
 * That claim previously existed only as bullet 1 of 8; this makes it a visible process.
 */
export const processSteps = [
  {
    icon: HiOutlineMagnifyingGlass,
    step: 'Assess',
    title: 'We walk your site first',
    description:
      'Entrances, blind spots, lighting, and how your people actually move through the space. Risk and environment before equipment.',
  },
  {
    icon: HiOutlinePencilSquare,
    step: 'Design',
    title: 'We engineer to what we found',
    description:
      'Camera types, coverage, access points, and network laid out for your building. Technology-agnostic, so the brand follows the need.',
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    step: 'Deploy',
    title: 'We install and commission',
    description:
      'Structured cabling, configuration, and handover, run as a managed project with a single point of accountability.',
  },
  {
    icon: HiOutlineEye,
    step: 'Monitor',
    title: 'We keep watching',
    description:
      'Optional 24/7 human monitoring, preventive maintenance, and support. Cameras record what happened; we call you while it is happening.',
  },
]
