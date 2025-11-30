"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LandingPageData } from "@/types/strapi";
import { getStrapiMedia } from "@/lib/strapi";
import { FaTimes } from "react-icons/fa";

interface KepengurusanSectionProps {
  data: LandingPageData | null;
}

export default function KepengurusanSection({
  data,
}: KepengurusanSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const structureImageUrl = data?.structureImage
    ? getStrapiMedia(data.structureImage.url)
    : null;

  return (
    <>
      <section className="py-24 bg-off-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute left-0 top-1/4 w-full h-64 bg-pale-rose/5 -skew-y-3 z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Kiri: Teks Penjelasan */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2">
              <h2 className="font-hamburg text-5xl md:text-6xl text-dark-purple mb-6">
                Struktur <br />
                <span className="text-muted-purple">Kepengurusan</span>
              </h2>

              <div className="font-fraunces text-lg text-muted-purple leading-relaxed space-y-4 text-justify">
                <p>
                  HMTG memiliki sistem kepengurusan yang terdiri dari
                  <span className="font-bold text-dark-purple">
                    {" "}
                    Pengurus Harian
                  </span>{" "}
                  dan
                  <span className="font-bold text-dark-purple">
                    {" "}
                    Staff Pengurus
                  </span>
                  .
                </p>
                <p>
                  Pengurus Harian merupakan pilar utama organisasi yang terdiri
                  dari Ketua Himpunan, Sekretaris Jendral, Sekretaris,
                  Bendahara, serta Kepala-Kepala Bidang dan Divisi yang
                  bersinergi untuk menjalankan roda organisasi.
                </p>
              </div>

              {/* List Bidang dan Divisi (Visual Tag) */}
              <div className="mt-8">
                <h3 className="font-birds text-2xl text-dark-purple mb-4">
                  Bidang dan Divisi
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Kerohanian",
                    "Minat dan Bakat",
                    "Sosial",
                    "Eksternal",
                    "PSDM",
                    "Kebutuhan Anggota",
                    "Keprofesian dan Keilmuan",
                    "TIM",
                  ].map((dept, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 border border-dark-purple/20 rounded-full text-sm font-fraunces text-dark-purple hover:bg-dark-purple hover:text-white transition-colors cursor-default">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Kanan: Slot Gambar Struktur Organisasi (TRIGGER POPUP) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:w-1/2 w-full">
              <div
                // Tambahkan onClick handler di sini
                onClick={() => structureImageUrl && setIsOpen(true)}
                className={`relative p-4 border-2 border-dashed border-dark-purple/20 bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 ${
                  structureImageUrl ? "cursor-zoom-in" : ""
                }`}>
                <div className="aspect-[4/3] bg-off-white flex items-center justify-center relative overflow-hidden group">
                  {structureImageUrl ? (
                    <img
                      src={structureImageUrl}
                      alt="Struktur HMTG"
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <span className="block font-hamburg text-3xl text-dark-purple/30 mb-2">
                        Bagan Struktur
                      </span>
                      <span className="text-sm text-muted-purple/60">
                        (Belum ada gambar di Strapi)
                      </span>
                    </div>
                  )}

                  {/* Overlay Hint untuk User */}
                  {structureImageUrl && (
                    <div className="absolute inset-0 bg-dark-purple/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/80 px-4 py-1 rounded-full text-xs font-bold text-dark-purple shadow-sm">
                        Klik untuk memperbesar
                      </span>
                    </div>
                  )}
                </div>

                {/* Pin Hiasan di atas */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pale-rose border border-dark-purple shadow-sm"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POPUP MODAL (LIGHTBOX) */}
      <AnimatePresence>
        {isOpen && structureImageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // Klik background untuk close
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark-purple/95 backdrop-blur-sm p-4 md:p-8">
            {/* Tombol Close */}
            <button className="absolute top-6 right-6 text-white/50 hover:text-pale-rose transition-colors z-50">
              <FaTimes size={32} />
            </button>

            {/* Gambar Besar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Mencegah close saat klik gambar
            >
              <img
                src={structureImageUrl}
                alt="Struktur Organisasi Full"
                className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
