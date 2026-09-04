import { About } from "@/components/about";
import { ContactBooking } from "@/components/contact-booking";
import { Explore } from "@/components/explore";
import { Gallery } from "@/components/gallery";
import { GuestExperience } from "@/components/guest-experience";
import { Harbour } from "@/components/harbour";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Rooms } from "@/components/rooms";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { BUSINESS } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GuestHouse" as const,
  name: BUSINESS.name,
  description:
    "Family-run guest house overlooking Elizabeth Harbour in George Town, Great Exuma. Eight air-conditioned, non-smoking guestrooms in one- and two-bedroom layouts, with TV and WiFi.",
  telephone: BUSINESS.phoneDisplay,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Queen's Highway",
    addressLocality: "George Town",
    addressRegion: "Great Exuma",
    addressCountry: "BS",
  },
  numberOfRooms: 8,
  petsAllowed: false,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Air conditioning" },
    { "@type": "LocationFeatureSpecification", name: "TV" },
    { "@type": "LocationFeatureSpecification", name: "WiFi" },
    { "@type": "LocationFeatureSpecification", name: "Non-smoking" },
    { "@type": "LocationFeatureSpecification", name: "Harbour view" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Rooms />
        <GuestExperience />
        <Harbour />
        <Explore />
        <Gallery />
        <ContactBooking />
      </main>
      <SiteFooter />
    </>
  );
}
