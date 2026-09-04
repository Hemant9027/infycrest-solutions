import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Stay from "./components/Stay";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import LocationSection from "./components/LocationSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Stay />
      <Experience />
      <Marquee dark />
      <Gallery />
      <LocationSection />
      <Contact />
      <Footer />
    </main>
  );
}
