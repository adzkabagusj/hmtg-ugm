import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import SloganSection from "@/components/landing/SloganSection";
import KepengurusanSection from "@/components/landing/KepengurusanSection";
import LandingFeatures from "@/components/landing/LandingFeatures";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SloganSection />
        <KepengurusanSection />
        <LandingFeatures />
      </main>
      <Footer />
    </div>
  );
}
