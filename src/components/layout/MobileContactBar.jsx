import { HiOutlinePhone, HiArrowRight } from 'react-icons/hi2'
import { contact } from '../../data/contactData'

/*
 * Phone is the dominant enquiry channel locally, and the page is long. This keeps
 * both actions reachable on mobile without scrolling back to the nav.
 */
export default function MobileContactBar() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-950/95 backdrop-blur-xl">
      <div className="flex items-stretch gap-2 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <a
          href={contact.phone.href}
          className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 text-sm font-medium text-white"
        >
          <HiOutlinePhone className="h-4 w-4 text-brand-500" />
          Call
        </a>
        <a
          href="#assessment"
          className="flex min-h-[48px] flex-[1.6] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-sm font-medium text-white"
        >
          Request assessment <HiArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
