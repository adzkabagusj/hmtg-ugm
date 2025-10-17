import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import SloganSection from "@/components/landing/SloganSection";
import AboutSection from "@/components/landing/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SloganSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
