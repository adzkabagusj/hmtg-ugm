"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaInstagram } from "react-icons/fa";
import { Work } from "@/types/strapi";
import { getStrapiMedia } from "@/lib/strapi";
import Link from "next/link";

interface WorksGalleryProps {
  data: Work[];
}

export default function WorksGallery({ data }: WorksGalleryProps) {
  // Jika data belum ada, kita tetap render struktur agar tidak layout shift,
  // tapi content card-nya kosong atau loading.
  const safeData = data || [];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* MASONRY / GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* === INTRO CARD (KOTAK PERTAMA STATIS) === */}
        {/* Ini tetap dipertahankan sesuai request layout Trivia Bumi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-off-white/5 border border-off-white/10 p-8 rounded-sm flex flex-col justify-center min-h-[300px]">
          <h3 className="font-birds text-4xl text-pale-rose mb-4">
            Trivia Bumi Gadjah Mada
          </h3>
          <p className="font-fraunces text-off-white/70 mb-6 leading-relaxed">
            Kumpulan tulisan informatif mengenai fenomena geologi insidental,
            fakta unik, dan perkembangan ilmu kebumian terkini.
          </p>
          <div className="w-12 h-1 bg-pale-rose" />
        </motion.div>

        {/* === DYNAMIC CONTENT CARDS (DARI STRAPI) === */}
        {safeData.map((work, index) => {
          // Ambil URL gambar
          const imageUrl = work.coverImage
            ? getStrapiMedia(work.coverImage.url)
            : null;

          // Cek apakah user mengisi warna hex di strapi (misal: #FF9B85)
          // Jika tidak, default ke transparan/sesuai desain
          const hasColor = Boolean(work.color);

          return (
            <Link
              key={work.id}
              href={work.link}
              target="_blank"
              rel="noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-muted-purple overflow-hidden h-[400px] cursor-pointer rounded-sm">
                {/* 1. Background Image / Color Placeholder */}
                {/* Jika ada gambar, tampilkan gambar. Jika tidak, tampilkan warna dari Strapi */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundColor: hasColor ? work.color : undefined,
                  }}>
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={work.title}
                      className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                </div>

                {/* 2. SHADE / GRADIENT OVERLAY (PENTING AGAR TULISAN TERBACA) */}
                {/* Saya set opacity-90 agar shade-nya kuat di bagian bawah */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-purple via-dark-purple/60 to-transparent opacity-90" />

                {/* 3. Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  {/* Top Label */}
                  <div className="absolute top-8 left-8">
                    <span className="px-3 py-1 text-xs font-bold tracking-widest text-dark-purple bg-pale-rose uppercase">
                      {work.category}
                    </span>
                  </div>

                  {/* Main Text */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-birds text-pale-rose text-lg mb-1 block opacity-80">
                      {work.series}
                    </span>

                    <h3 className="font-hamburg text-4xl text-off-white mb-4 leading-none group-hover:text-pale-rose transition-colors">
                      {work.title}
                    </h3>

                    <p className="font-fraunces text-sm text-off-white/70 mb-6 line-clamp-3 group-hover:text-off-white transition-colors">
                      {work.description}
                    </p>

                    {/* Action Button */}
                    {work.link && (
                      <div className="inline-flex items-center gap-2 text-pale-rose font-bold text-sm hover:gap-4 transition-all">
                        Baca di Instagram <FaArrowRight />
                      </div>
                    )}
                  </div>
                </div>

                {/* Icon Dekorasi */}
                <div className="absolute top-8 right-8 text-off-white/10 group-hover:text-off-white/30 transition-colors z-10">
                  <FaInstagram className="text-4xl" />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
