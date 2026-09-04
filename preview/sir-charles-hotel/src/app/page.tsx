import About from "@/components/about";
import Accommodation from "@/components/accommodation";
import { BookingProvider } from "@/components/booking-provider";
import Contact from "@/components/contact";
import CtaBand from "@/components/cta-band";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Nassau from "@/components/nassau";
import Navbar from "@/components/navbar";
import Ticker from "@/components/ticker";

export default function Home() {
  return (
    <BookingProvider>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Accommodation />
        <Experience />
        <Nassau />
        <Gallery />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </BookingProvider>
  );
}
