import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import {
  QUICK_LINKS,
  RESOURCE_LINKS,
  SITE,
  SOCIAL_LINKS,
  whatsappUrl,
  type ExternalLink,
} from "@/config/site";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

type IconProps = { className?: string; strokeWidth?: number };

function SocialSvg({ className, children, strokeWidth = 1.8 }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <SocialSvg className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </SocialSvg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <SocialSvg className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </SocialSvg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <SocialSvg className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </SocialSvg>
  );
}

const SOCIAL_ICONS: Record<string, (props: IconProps) => React.ReactNode> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
};

function ColumnTitle({ children }: { children: string }) {
  return (
    <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
      {children}
    </h3>
  );
}

/**
 * Renders a resource/social link. When no real URL is configured yet,
 * the item renders as a non-interactive placeholder instead of a fake link.
 */
function SmartLink({
  link,
  className,
}: {
  link: ExternalLink;
  className?: string;
}) {
  if (link.url) {
    const isExternal = link.url.startsWith("http");
    return (
      <Link
        href={link.url}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={cn(
          "text-sm text-neutral-500 transition-colors hover:text-neutral-900",
          className
        )}
      >
        {link.label}
      </Link>
    );
  }
  return (
    <span
      title="Link coming soon"
      aria-disabled="true"
      className={cn(
        "cursor-not-allowed text-sm text-neutral-300",
        className
      )}
    >
      {link.label}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-14 sm:px-8 sm:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1.3fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="InfyCrest Solutions — home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              Digital experiences for ambitious businesses — websites, software,
              automation and SaaS, designed to look exceptional.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.label];
                if (!social.url) {
                  return (
                    <span
                      key={social.label}
                      title={`${social.label} — coming soon`}
                      aria-disabled="true"
                      aria-label={`${social.label} (coming soon)`}
                      className="grid size-9 cursor-not-allowed place-items-center rounded-full border border-neutral-200 text-neutral-300"
                    >
                      {Icon && <Icon className="size-4" strokeWidth={1.8} />}
                    </span>
                  );
                }
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-9 place-items-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:border-neutral-900 hover:text-neutral-900"
                  >
                    {Icon && <Icon className="size-4" strokeWidth={1.8} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick navigation */}
          <nav aria-label="Footer">
            <ColumnTitle>Quick Navigation</ColumnTitle>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <div>
            <ColumnTitle>Resources</ColumnTitle>
            <ul className="mt-5 space-y-3">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <SmartLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ColumnTitle>Contact</ColumnTitle>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="group flex items-center gap-3 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  <Phone className="size-4 text-neutral-400 transition-colors group-hover:text-neutral-900" strokeWidth={2} />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  <MessageCircle className="size-4 text-neutral-400 transition-colors group-hover:text-neutral-900" strokeWidth={2} />
                  Chat with us
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="group flex items-center gap-3 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  <Mail className="size-4 text-neutral-400 transition-colors group-hover:text-neutral-900" strokeWidth={2} />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-neutral-100 pt-7 text-xs text-neutral-400 sm:flex-row">
          <p>© {SITE.year} {SITE.name}. All rights reserved.</p>
          <p className="tracking-tight">
            Websites · Software · Automation · SaaS
          </p>
        </div>
      </div>
    </footer>
  );
}
