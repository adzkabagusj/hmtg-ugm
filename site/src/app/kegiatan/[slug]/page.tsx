import { ACTIVITIES_DATA } from "@/data/activities";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import Link from "next/link";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTag,
} from "react-icons/fa";
import { notFound } from "next/navigation";

// Generate static params untuk performa (Optional tapi recommended di Next.js)
export async function generateStaticParams() {
  return ACTIVITIES_DATA.map((activity) => ({
    slug: activity.slug,
  }));
}

export default function KegiatanDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <DetailContent params={params} />;
}

// Pisahkan komponen content agar bisa menggunakan async/await unwrapping params dengan rapi
async function DetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = ACTIVITIES_DATA.find((a) => a.slug === slug);

  if (!activity) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <article className="container mx-auto px-6">
          {/* BREADCRUMB & BACK BUTTON */}
          <div className="mb-8">
            <Link
              href="/kegiatan"
              className="inline-flex items-center gap-2 text-muted-purple hover:text-dark-purple transition-colors font-bold font-fraunces text-sm">
              <FaArrowLeft /> Kembali ke Agenda
            </Link>
          </div>

          {/* HEADER SECTION */}
          <header className="mb-12 border-b border-dark-purple/10 pb-12">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-4 py-1 rounded-full bg-pale-rose/20 text-dark-purple font-bold text-sm flex items-center gap-2">
                <FaTag size={12} /> {activity.category}
              </span>
              <span className="px-4 py-1 rounded-full border border-muted-purple/20 text-muted-purple font-fraunces text-sm flex items-center gap-2">
                <FaCalendarAlt size={12} /> {activity.date}
              </span>
            </div>

            <h1 className="font-hamburg text-5xl md:text-7xl text-dark-purple mb-6 leading-tight max-w-4xl">
              {activity.title}
            </h1>

            <div className="flex items-center gap-2 text-lg font-fraunces text-muted-purple">
              <FaMapMarkerAlt className="text-pale-rose" />
              <span className="border-b border-pale-rose/50 pb-0.5">
                {activity.location}
              </span>
            </div>
          </header>

          {/* TWO COLUMN CONTENT LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* LEFT: MAIN CONTENT (TEXT) */}
            <div className="lg:col-span-7">
              <div
                className="prose prose-lg prose-purple font-fraunces text-muted-purple leading-relaxed text-justify"
                dangerouslySetInnerHTML={{ __html: activity.content }} // Render HTML string
              />
            </div>

            {/* RIGHT: GALLERY SIDEBAR */}
            <div className="lg:col-span-5 space-y-6">
              {/* Photo Carousel Component */}
              <div className="sticky top-32">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-birds text-2xl text-dark-purple">
                    Dokumentasi
                  </h3>
                  <span className="text-xs font-fraunces text-muted-purple/50">
                    {activity.images.length > 0
                      ? `${activity.images.length} Foto`
                      : "No Image"}
                  </span>
                </div>

                {/* Jika images kosong, PhotoCarousel otomatis handle tampil placeholder/text, 
                            tapi kita bisa kasih wrapper style biar rapi */}
                <PhotoCarousel
                  images={activity.images}
                  aspectRatio="aspect-[4/3]"
                />

                {/* Caption Decor */}
                <div className="mt-4 p-4 bg-dusty-lavender/10 rounded-sm border-l-4 border-pale-rose">
                  <p className="text-xs text-muted-purple italic font-fraunces">
                    Dokumentasi resmi kegiatan HMTG FT UGM. Hak cipta
                    dilindungi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
