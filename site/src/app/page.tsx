import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import SloganSection from "@/components/landing/SloganSection";
import KepengurusanSection from "@/components/landing/KepengurusanSection";
import LandingFeatures from "@/components/landing/LandingFeatures";
import { fetchAPI } from "@/lib/strapi";
import { LandingPageData } from "@/types/strapi";

// Fungsi Fetch Data Landing Page
async function getLandingPageData() {
  try {
    const res = await fetchAPI("/landing-page", {
      populate: "*", // Ambil semua field relasi (images)
    });
    return res?.data ? (res.data as LandingPageData) : null;
  } catch (error) {
    console.error("Error fetching landing page data:", error);
    return null;
  }
}

export default async function Home() {
  // 1. Ambil data dari Strapi
  const landingData = await getLandingPageData();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Pass data ke komponen-komponen landing page */}
        <HeroSection data={landingData} />
        <SloganSection data={landingData} />
        <KepengurusanSection data={landingData} />

        {/* LandingFeatures bersifat navigasi statis, tidak perlu data */}
        <LandingFeatures />
      </main>

      {/* Footer sekarang mengambil datanya sendiri (Server Component) */}
      <Footer />
    </div>
  );
}
