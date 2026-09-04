import { Header } from "@/components/Header";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/sections/About";
import { Amenities } from "@/components/sections/Amenities";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { Explore } from "@/components/sections/Explore";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Stay } from "@/components/sections/Stay";

const MARQUEE_ITEMS = [
  "Simple stays",
  "Honest rates",
  "Clean & comfortable",
  "Davis Street · Nassau",
  "Local tips",
  "Island sunshine",
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Marquee items={MARQUEE_ITEMS} />
        <About />
        <Stay />
        <Amenities />
        <Explore />
        <Gallery />
        <Contact />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
