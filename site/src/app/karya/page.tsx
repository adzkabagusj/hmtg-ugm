import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WorksGallery from "@/components/karya/WorksGallery";
import CalendarShowcase from "@/components/karya/CalendarShowcase"; // Import Baru
import { FaFeatherAlt } from "react-icons/fa";

export default function KaryaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-purple text-off-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* HEADER SECTION */}
        <section className="container mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row items-end gap-6 border-b border-off-white/10 pb-8">
            <div className="flex-grow">
              <div className="flex items-center gap-3 text-pale-rose mb-2">
                <FaFeatherAlt className="text-xl" />
                <span className="font-birds text-2xl">Inovasi & Kreasi</span>
              </div>
              <h1 className="font-hamburg text-6xl md:text-8xl text-off-white leading-none">
                Galeri <br /> Karya
              </h1>
            </div>
            <div className="md:w-1/3 pb-2">
              <p className="font-fraunces text-off-white/60 text-lg leading-relaxed text-right md:text-left">
                Wadah apresiasi bagi pemikiran kritis dan kreativitas mahasiswa
                Teknik Geologi UGM.
              </p>
            </div>
          </div>
        </section>

        {/* NEW SECTION: KALENDER HMTG (Di Atas Trivia) */}
        <CalendarShowcase />

        {/* EXISTING SECTION: TRIVIA BUMI */}
        <WorksGallery />
      </main>

      <Footer />
    </div>
  );
}
