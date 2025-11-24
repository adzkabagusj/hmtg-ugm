import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WorksGallery from "@/components/karya/WorksGallery";
import CalendarShowcase from "@/components/karya/CalendarShowcase";
import { FaFeatherAlt } from "react-icons/fa";
import { fetchAPI } from "@/lib/strapi";
import { Work } from "@/types/strapi";

// Fungsi Fetch Data dari Strapi
async function getWorks() {
  try {
    const res = await fetchAPI("/works", {
      populate: "*", // Ambil semua field termasuk gambar
      sort: "id:desc", // Urutkan dari yang terbaru
    });
    return res?.data ? (res.data as Work[]) : [];
  } catch (error) {
    console.error("Error fetching works:", error);
    return [];
  }
}

export default async function KaryaPage() {
  // Panggil data
  const works = await getWorks();

  return (
    <div className="min-h-screen flex flex-col bg-dark-purple text-off-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* HEADER SECTION (Tetap Sesuai Desain Awal) */}
        <section className="container mx-auto px-6 mb-16">
          <div className="flex flex-col items-center md:items-center gap-6 border-b border-off-white/10 pb-8 text-center">
            <div className="md:flex-grow">
              <div className="flex items-center justify-center gap-3 text-pale-rose mb-2">
                <FaFeatherAlt className="text-xl" />
                <span className="font-birds text-2xl">Inovasi & Kreasi</span>
              </div>

              <h1 className="font-hamburg text-6xl md:text-8xl text-off-white leading-none text-center">
                Galeri <br /> Karya
              </h1>
            </div>

            <div className="md:w-1/3 pb-2">
              <p className="font-fraunces text-off-white/60 text-lg leading-relaxed text-center">
                Wadah apresiasi bagi pemikiran kritis dan kreativitas mahasiswa
                Teknik Geologi UGM.
              </p>
            </div>
          </div>
        </section>

        {/* KALENDER HMTG (Tetap Ada) */}
        {/* <CalendarShowcase /> */}

        {/* GALLERY SECTION (Sekarang Dinamis) */}
        <WorksGallery data={works} />
      </main>

      <Footer />
    </div>
  );
}
