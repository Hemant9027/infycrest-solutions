import { MessageCircle, Navigation, Phone, UtensilsCrossed } from "lucide-react";
import { site, tel, wa, WHATSAPP_DEFAULT_MSG } from "../data/site";
import { useOpenStatus } from "../hooks/useFx";

export default function MobileActionBar() {
  const isOpen = useOpenStatus();
  const item =
    "flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-bold tracking-[0.14em] uppercase transition-colors";
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-[80] grid grid-cols-4 border-t border-gold-500/25 bg-maroon-950/95 pb-[env(safe-area-inset-bottom)] text-ivory-100 shadow-[0_-14px_40px_-16px_rgba(51,8,15,0.6)] backdrop-blur-lg md:hidden"
    >
      <a href={tel} className={`${item} active:bg-white/10`} aria-label="Call Rishi Sweets">
        <Phone size={17} className="text-gold-300" />
        Call
      </a>
      <a
        href={wa(WHATSAPP_DEFAULT_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} active:bg-white/10`}
        aria-label="WhatsApp Rishi Sweets"
      >
        <MessageCircle size={17} className="text-gold-300" />
        WhatsApp
      </a>
      <a
        href={site.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} active:bg-white/10`}
        aria-label="Get directions to Rishi Sweets"
      >
        <Navigation size={17} className="text-gold-300" />
        Directions
      </a>
      <a href="#menu" className={`${item} active:bg-white/10`} aria-label="View the menu">
        <UtensilsCrossed size={17} className="text-gold-300" />
        Menu
      </a>
      <span
        className="pointer-events-none absolute -top-[26px] left-3 rounded-full bg-ivory-50 px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-ink-700 uppercase shadow"
        aria-hidden
      >
        {isOpen ? "● Open till 10:30 PM" : "● Opens 7:30 AM"}
      </span>
    </nav>
  );
}
