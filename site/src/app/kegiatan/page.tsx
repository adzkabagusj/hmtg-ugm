import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ActivityFeed from "@/components/kegiatan/ActivityFeed";

export default function KegiatanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* HEADER SECTION */}
        <section className="container mx-auto px-6 mb-16 text-center">
          <span className="font-birds text-3xl text-pale-rose mb-2 block">
            Dinamika Lapangan
          </span>
          <h1 className="font-hamburg text-6xl md:text-7xl lg:text-8xl text-dark-purple mb-6">
            Agenda & Kegiatan
          </h1>
          <p className="font-fraunces text-lg text-muted-purple max-w-2xl mx-auto leading-relaxed">
            Catatan perjalanan, ekspedisi lapangan, dan kegiatan akademik
            Himpunan Mahasiswa Teknik Geologi UGM.
          </p>
        </section>

        {/* TIMELINE FEED */}
        <ActivityFeed />
      </main>

      <Footer />
    </div>
  );
}
