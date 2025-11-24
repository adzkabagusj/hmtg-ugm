import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JourneyGallery from "@/components/arsip/JourneyGallery";
import { FaArchive } from "react-icons/fa";
import { fetchAPI } from "@/lib/strapi"; // Import fetcher
import { Journey } from "@/types/strapi"; // Import tipe data

// Fungsi Fetch Data Arsip
async function getJourneys() {
  try {
    const res = await fetchAPI("/journeys", {
      populate: "*", // Ambil foto relasi
      sort: "date:asc", // Urutkan dari yang terlama (sejarah biasanya kronologis)
    });
    return res?.data ? (res.data as Journey[]) : [];
  } catch (error) {
    console.error("Error fetching journeys:", error);
    return [];
  }
}

export default async function ArsipPage() {
  const journeys = await getJourneys();

  return (
    <div className="min-h-screen flex flex-col bg-off-white text-dark-purple">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* HEADER SECTION */}
        <section className="container mx-auto px-6 mb-20 text-center">
          <div className="inline-block p-4 rounded-full bg-pale-rose/10 mb-4">
            <FaArchive className="text-3xl text-pale-rose" />
          </div>
          <h1 className="font-hamburg text-6xl md:text-7xl lg:text-8xl mb-6">
            Our Journey
          </h1>
          <p className="font-fraunces text-lg text-muted-purple max-w-2xl mx-auto leading-relaxed">
            Menelusuri jejak langkah sejarah, pencapaian, dan momen berharga
            yang telah membentuk identitas HMTG UGM dari masa ke masa.
          </p>
        </section>

        {/* JOURNEY GALLERY (DYNAMIC) */}
        <JourneyGallery data={journeys} />
      </main>

      <Footer />
    </div>
  );
}
