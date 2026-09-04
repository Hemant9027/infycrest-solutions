import { About } from "@/components/about";
import { Activities } from "@/components/activities";
import { BackToTop } from "@/components/back-to-top";
import { BarLounge } from "@/components/bar-lounge";
import { Contact } from "@/components/contact";
import { Explore } from "@/components/explore";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { Marquee } from "@/components/marquee";
import { SiteHeader } from "@/components/site-header";
import { Stay } from "@/components/stay";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stay />
        <BarLounge />
        <Explore />
        <Activities />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
