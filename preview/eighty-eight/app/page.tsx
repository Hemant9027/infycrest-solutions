import ReservationProvider from "@/components/ReservationProvider";
import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import SignatureDishes from "@/components/SignatureDishes";
import FeaturedDish from "@/components/FeaturedDish";
import Experience from "@/components/Experience";
import Promotion from "@/components/Promotion";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

export default function Home() {
  return (
    <ReservationProvider>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <SignatureDishes />
        <FeaturedDish />
        <Experience />
        <Menu />
        <Promotion />
        <Gallery />
        <Reviews />
        <Location />
        <ReservationCTA />
      </main>
      <Footer />
      <MobileActionBar />
      {/* Spacer so the mobile action bar never covers the footer */}
      <div className="md:hidden h-16" aria-hidden="true" />
    </ReservationProvider>
  );
}
