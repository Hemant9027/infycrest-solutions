import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Comforts from "@/components/Comforts";
import Discover from "@/components/Discover";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Rooms />
        <Comforts />
        <Discover />
        <Gallery />
        <Location />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
