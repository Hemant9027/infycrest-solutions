import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Accommodation from "@/components/Accommodation";
import Experience from "@/components/Experience";
import Explore from "@/components/Explore";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import BookingCta from "@/components/BookingCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Accommodation />
        <Experience />
        <Explore />
        <Marquee />
        <Gallery />
        <Contact />
        <BookingCta />
      </main>
      <Footer />
    </>
  );
}
