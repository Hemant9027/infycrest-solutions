import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar, { Marquee } from "./components/TrustBar";
import Discovery from "./components/Discovery";
import MenuSection from "./components/MenuSection";
import Signature from "./components/Signature";
import Sweets from "./components/Sweets";
import Bakery from "./components/Bakery";
import Experience from "./components/Experience";
import WhyUs from "./components/WhyUs";
import Catering from "./components/Catering";
import { InstagramFeed, GallerySection } from "./components/Media";
import Reviews from "./components/Reviews";
import { About, LocationSection } from "./components/AboutLocation";
import FAQ from "./components/FAQ";
import { FinalCTA, Footer } from "./components/Closing";
import MobileActionBar from "./components/MobileActionBar";
import { CursorFX, ScrollProgress } from "./components/ui";
import type { MenuCatId } from "./data/site";

type CatFilter = MenuCatId | "all";

const MARQUEE_ITEMS = [
  "Fresh Mithai Daily",
  "Dum Biryani",
  "Masala Dosa",
  "Bakery & Cakes",
  "Family Thali",
  "Cold Coffee & Lassi",
  "Catering for 1,000+",
  "Since 2017",
];

export default function App() {
  const [menuCat, setMenuCat] = useState<CatFilter>("all");

  const explore = useCallback((cat: MenuCatId) => {
    setMenuCat(cat);
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="grain min-h-screen bg-ivory-100 font-body text-ink-900 antialiased">
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[110] focus:rounded-full focus:bg-maroon-800 focus:px-5 focus:py-3 focus:text-[12px] focus:font-bold focus:text-ivory-50"
      >
        Skip to menu
      </a>

      <CursorFX />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Marquee items={MARQUEE_ITEMS} />
        <Discovery onSelect={explore} />
        <MenuSection cat={menuCat} onCat={setMenuCat} />
        <Signature />
        <Sweets onExplore={explore} />
        <Bakery />
        <Experience />
        <WhyUs />
        <Catering />
        <InstagramFeed />
        <GallerySection />
        <Reviews />
        <About />
        <LocationSection />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
