import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Accommodation from "@/components/Accommodation";
import IslandLife from "@/components/IslandLife";
import Adventures from "@/components/Adventures";
import Beach from "@/components/Beach";
import Food from "@/components/Food";
import Gallery from "@/components/Gallery";
import LocationMap from "@/components/LocationMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Accommodation />
      <IslandLife />
      <Adventures />
      <Beach />
      <Food />
      <Gallery />
      <LocationMap />
      <Contact />
      <Footer />
    </main>
  );
}
