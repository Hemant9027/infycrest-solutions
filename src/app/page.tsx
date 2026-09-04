import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import TechMarquee from "@/components/TechMarquee";
import Collection from "@/components/Collection";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <TechMarquee />
        <Collection />
        <Pricing />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
