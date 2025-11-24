"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

// Placeholder images untuk Carousel (Array)
// Nanti ini diganti dengan data dari Strapi
const HERO_IMAGES = [
  "/hero-1.jpg", // Placeholder 1
  "/hero-2.jpg", // Placeholder 2
  "/hero-3.jpg", // Placeholder 3
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Logic: Auto-Cycle Carousel setiap 5 Detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // 5000ms = 5 detik

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-12 lg:pt-24 overflow-hidden bg-off-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-pale-rose/10 -skew-x-12 translate-x-32 z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-dusty-lavender/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN: Typography & Content */}
          {/* Order-1 di mobile (tampil duluan), lg:col-span-7 */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              <span className="font-birds text-2xl text-muted-purple italic mb-2 block">
                Est. 20 Mei 1962
              </span>
              <h1 className="font-hamburg text-6xl md:text-6xl lg:text-7xl text-dark-purple leading-[0.9]">
                Himpunan <br />
                <span className="text-muted-purple">Mahasiswa</span> <br />
                Teknik Geologi
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-fraunces text-lg md:text-xl text-muted-purple max-w-xl leading-relaxed mt-4 border-l-4 border-pale-rose pl-6">
              Organisasi kemahasiswaan resmi Departemen Teknik Geologi FT UGM.
              Mengabdi untuk bumi, berkarya untuk negeri.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 mt-8">
              <Button variant="primary">Jelajahi Profil</Button>
              <Button variant="outline">Kontak Kami</Button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Auto-Carousel Frame */}
          {/* Order-2 di mobile (tampil setelah teks), Hapus 'hidden' agar muncul di mobile */}
          <div className="lg:col-span-5 relative order-2 mt-8 lg:mt-0">
            {/* Container Frame Gambar */}
            <div className="relative w-full h-[400px] lg:h-[500px]">
              {/* Main Carousel Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="absolute inset-0 bg-dark-purple overflow-hidden shadow-2xl z-10 rounded-sm border-4 border-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }} // Durasi transisi diperhalus
                    className="absolute inset-0">
                    {/* Placeholder Logic: Karena belum ada Strapi, kita pakai div berwarna */}
                    {/* Nanti ganti blok ini dengan <Image src={HERO_IMAGES[currentImage]} ... /> */}
                    <div
                      className={`w-full h-full flex items-center justify-center relative bg-gray-300`}>
                      <div
                        className={`absolute inset-0 opacity-40 mix-blend-overlay ${
                          currentImage === 0
                            ? "bg-red-500"
                            : currentImage === 1
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }`}
                      />

                      {/* Simulasi Gambar (Hapus nanti saat pakai Image asli) */}
                      <div className="text-center px-4">
                        <span className="block font-hamburg text-4xl text-dark-purple/50">
                          Slide {currentImage + 1}
                        </span>
                        <span className="text-xs font-fraunces text-dark-purple/50 mt-2 block uppercase tracking-widest">
                          Auto Cycling Image
                        </span>
                      </div>

                      {/* Uncomment baris ini jika gambar sudah ada di public folder */}
                      {/* <Image src={HERO_IMAGES[currentImage]} alt="Hero Image" fill className="object-cover" priority /> */}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Overlay Gradient agar teks tetap terbaca jika ada caption di dalam gambar (Opsional) */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-purple/20 to-transparent pointer-events-none" />
              </motion.div>

              {/* Decorative Offset Border (Elemen Estetik) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-6 right-[-10px] lg:right-[-20px] w-full h-full border-2 border-dark-purple z-0"
              />
            </div>

            {/* Indicator Dots (Opsional, agar user tahu ini slider) */}
            <div className="flex justify-center gap-2 mt-6">
              {HERO_IMAGES.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === currentImage
                      ? "w-8 bg-dark-purple"
                      : "w-2 bg-dark-purple/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
