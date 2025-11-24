import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JourneyGallery from "@/components/arsip/JourneyGallery";
import { FaHistory } from "react-icons/fa";

export default function ArsipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* HEADER SECTION: OUR JOURNEY */}
        <section className="container mx-auto px-6 mb-16 text-center">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-pale-rose/10 text-dark-purple">
            <FaHistory className="text-xl" />
          </div>
          <h1 className="font-hamburg text-6xl md:text-8xl text-dark-purple mb-6">
            Our Journey
          </h1>
          <p className="font-fraunces text-lg text-muted-purple max-w-2xl mx-auto leading-relaxed">
            Rekam jejak visual perjalanan kepengurusan kami. <br />
            Kumpulan cerita, momen, dan kebersamaan dari awal hingga kini.
          </p>
        </section>

        {/* GALLERY COMPONENT */}
        <JourneyGallery />
      </main>

      <Footer />
    </div>
  );
}
