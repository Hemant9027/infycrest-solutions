import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Welcome from "@/components/welcome";
import Villas from "@/components/villas";
import Beach from "@/components/beach";
import BlueHoles from "@/components/blueholes";
import Activities from "@/components/activities";
import Location from "@/components/location";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Welcome />
        <Villas />
        <Beach />
        <BlueHoles />
        <Activities />
        <Location />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
