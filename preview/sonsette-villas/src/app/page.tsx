import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { About } from "@/components/site/about";
import { Villas } from "@/components/site/villas";
import { OceanViews } from "@/components/site/ocean-views";
import { IslandLife } from "@/components/site/island-life";
import { LocationSection } from "@/components/site/location-section";
import { Gallery } from "@/components/site/gallery";
import { Booking } from "@/components/site/booking";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <main className="relative overflow-x-clip bg-sand-50">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Villas />
      <OceanViews />
      <IslandLife />
      <LocationSection />
      <Gallery />
      <Booking />
      <Footer />
      <div aria-hidden="true" className="grain" />
    </main>
  );
}
