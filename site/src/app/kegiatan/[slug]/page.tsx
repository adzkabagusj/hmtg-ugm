import { fetchAPI, getStrapiMedia } from "@/lib/strapi";
import { Activity } from "@/types/strapi";
import RichTextRenderer from "@/components/ui/RichTextRenderer";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTag,
  FaArrowLeft,
  FaCamera,
} from "react-icons/fa";

// Fungsi mengambil data
async function getActivityBySlug(slug: string) {
  try {
    const res = await fetchAPI("/activities", {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: "*",
    });

    return res?.data?.length > 0 ? (res.data[0] as Activity) : null;
  } catch (error) {
    console.error("Error fetching activity detail:", error);
    return null;
  }
}

// Generate static params untuk pre-rendering saat build
export async function generateStaticParams() {
  try {
    const res = await fetchAPI("/activities", {
      fields: ["slug"],
      pagination: {
        limit: -1, // Ambil semua slug
      },
    });

    if (!res?.data) return [];

    return res.data.map((activity: Activity) => ({
      slug: activity.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = await getActivityBySlug(slug);

  if (!activity) {
    notFound();
  }

  // --- LOGIKA GAMBAR ---
  // 1. Ambil semua gambar jika ada
  const allImages = activity.images || [];

  // 2. Cover Image adalah gambar pertama
  const coverImageUrl =
    allImages.length > 0 ? getStrapiMedia(allImages[0].url) : null;

  // 3. Galeri adalah gambar sisanya (indeks 1 ke atas)
  //    Jika hanya ada 1 gambar, maka galeri kosong.
  const galleryImages = allImages.length > 1 ? allImages.slice(0) : [];

  return (
    <div className="min-h-screen flex flex-col bg-off-white font-fraunces">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* === HEADER ARTICLE === */}
        <article className="container mx-auto px-6 max-w-5xl">
          {/* Navigasi Balik */}
          <Link
            href="/kegiatan"
            className="inline-flex items-center gap-2 text-muted-purple hover:text-dark-purple mb-8 transition-colors text-sm font-bold tracking-wide uppercase">
            <FaArrowLeft /> Kembali ke Daftar Kegiatan
          </Link>

          {/* Judul & Meta */}
          <header className="mb-12 text-center">
            <div className="flex flex-wrap gap-4 items-center justify-center text-sm text-muted-purple mb-6 uppercase tracking-wider">
              <span className="flex items-center gap-1 px-3 py-1 border border-pale-rose/30 rounded-full text-dark-purple font-bold bg-pale-rose/10">
                <FaTag className="text-xs" /> {activity.category}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendarAlt /> {activity.date}
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt /> {activity.location}
              </span>
            </div>

            <h1 className="font-hamburg text-5xl md:text-7xl text-dark-purple leading-tight mb-8">
              {activity.title}
            </h1>
          </header>

          {/* Cover Image (Hero) */}
          {coverImageUrl && (
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden shadow-xl mb-16 group">
              <img
                src={coverImageUrl}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none" />
            </div>
          )}

          {/* Content Body */}
          <div className="prose prose-lg prose-purple max-w-3xl mx-auto text-dark-purple/80 leading-loose text-justify font-normal">
            <RichTextRenderer content={activity.content} />
          </div>
        </article>

        {/* === GALLERY SECTION (Geo-Editorial Masonry) === */}
        {galleryImages.length > 0 && (
          <section className="container mx-auto px-6 mt-24 border-t border-dark-purple/10 pt-16">
            <div className="text-center mb-12">
              <span className="font-birds text-4xl text-pale-rose block mb-2">
                Dokumentasi Visual
              </span>
              <h2 className="font-hamburg text-4xl text-dark-purple flex items-center justify-center gap-3">
                <FaCamera className="text-2xl opacity-50" /> Lensa Kegiatan
              </h2>
            </div>

            {/* Masonry Grid Layout */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
              {galleryImages.map((img) => {
                const src = getStrapiMedia(img.url);
                if (!src) return null;

                return (
                  <div
                    key={img.id}
                    className="break-inside-avoid relative group rounded-sm overflow-hidden bg-gray-100 shadow-lg cursor-pointer">
                    <img
                      src={src}
                      alt={img.alternativeText || "Dokumentasi HMTG"}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay Info (Optional) */}
                    <div className="absolute inset-0 bg-dark-purple/0 group-hover:bg-dark-purple/20 transition-colors duration-300" />
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
