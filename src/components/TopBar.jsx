import { MapPin, MessageCircle } from 'lucide-react'
import { site, whatsappLink } from '../data/site'

export default function TopBar() {
  return (
    <div className="bg-lavender-soft text-plum">
      <div className="container-site flex min-h-[36px] items-center justify-center gap-x-3 py-2 text-center text-[11px] sm:text-xs">
        <span className="hidden md:inline">{site.announcement}</span>
        <span aria-hidden="true" className="hidden text-lavender md:inline">•</span>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
        >
          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
          WhatsApp {site.contact.whatsappDisplay}
        </a>
        <span aria-hidden="true" className="hidden text-lavender sm:inline">•</span>
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {site.location?.region || site.delivery?.region}
        </span>
      </div>
    </div>
  )
}
