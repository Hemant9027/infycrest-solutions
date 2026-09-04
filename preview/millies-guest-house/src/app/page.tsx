import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stay from "@/components/Stay";
import Waterfront from "@/components/Waterfront";
import Explore from "@/components/Explore";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stay />
        <Waterfront />
        <Explore />
        <Gallery />
        <Contact />
        <BookingCTA />
      </main>
      <Footer />
      <div
        aria-hidden="true"
        className="grain pointer-events-none fixed inset-0 z-[90] opacity-[0.05] mix-blend-multiply"
      />
    </div>
  );
}
