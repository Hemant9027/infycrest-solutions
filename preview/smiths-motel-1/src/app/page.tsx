import Header from "@/components/Header";
import Hero, { Marquee } from "@/components/Hero";
import About from "@/components/About";
import Accommodation from "@/components/Accommodation";
import WhyStay from "@/components/WhyStay";
import DiscoverNassau from "@/components/DiscoverNassau";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import BookingCta from "@/components/BookingCta";
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
        <WhyStay />
        <DiscoverNassau />
        <Gallery />
        <ContactSection />
        <BookingCta />
      </main>
      <Footer />
    </>
  );
}
