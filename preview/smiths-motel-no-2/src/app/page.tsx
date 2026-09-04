import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Accommodation from "@/components/Accommodation";
import Experience from "@/components/Experience";
import Guide from "@/components/Guide";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Accommodation />
        <Experience />
        <Guide />
        <Gallery />
        <Contact />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
