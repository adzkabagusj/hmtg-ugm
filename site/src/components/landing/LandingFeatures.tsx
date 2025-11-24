"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCompass,
  FaFeatherAlt,
  FaArchive,
  FaArrowRight,
} from "react-icons/fa";

export default function LandingFeatures() {
  return (
    <>
      {/* SECTION 1: KEGIATAN (Dynamic/Field Mood) */}
      <section className="py-24 bg-off-white relative border-t border-dark-purple/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2">
              <div className="flex items-center gap-4 mb-4 text-muted-purple">
                <FaCompass className="text-3xl" />
                <span className="font-birds text-2xl">Dinamika Lapangan</span>
              </div>
              <h2 className="font-hamburg text-5xl md:text-6xl text-dark-purple mb-6">
                Agenda & <br /> Kegiatan
              </h2>
              <p className="font-fraunces text-lg text-muted-purple mb-8 leading-relaxed max-w-md">
                Telusuri jejak aktivitas kami, mulai dari ekspedisi lapangan,
                seminar ilmiah, hingga pengabdian masyarakat yang merekatkan
                persaudaraan.
              </p>
              <Link
                href="/kegiatan"
                className="group inline-flex items-center gap-3 text-dark-purple font-fraunces font-bold text-lg hover:gap-6 transition-all duration-300">
                Lihat Semua Kegiatan <FaArrowRight className="text-pale-rose" />
              </Link>
            </motion.div>

            {/* Abstract Visual Decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2 w-full h-64 md:h-80 bg-pale-rose/20 rounded-tl-[4rem] rounded-br-[4rem] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 border-2 border-dark-purple/10 m-4 rounded-tl-[3.5rem] rounded-br-[3.5rem]" />
              <span className="font-hamburg text-6xl md:text-9xl text-dark-purple/5 select-none absolute">
                Activity
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KARYA (Premium/Research Mood) */}
      <section className="py-24 bg-dark-purple text-off-white relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 text-right md:text-left" // Mobile: align right for editorial feel, Desktop: standard
            >
              <div className="flex items-center justify-end md:justify-start gap-4 mb-4 text-pale-rose">
                <span className="font-birds text-2xl">Inovasi & Kreasi</span>
                <FaFeatherAlt className="text-3xl" />
              </div>
              <h2 className="font-hamburg text-5xl md:text-6xl text-off-white mb-6">
                Karya & <br /> Publikasi
              </h2>
              <p className="font-fraunces text-lg text-off-white/70 mb-8 leading-relaxed max-w-md ml-auto md:ml-0">
                Kumpulan pemikiran, trivia geologi, dan karya kreatif mahasiswa.
                Temukan &quot;Trivia Bumi Gadjah Mada&quot; dan publikasi
                lainnya di sini.
              </p>
              <Link
                href="/karya"
                className="group inline-flex items-center gap-3 text-pale-rose font-fraunces font-bold text-lg hover:text-white hover:gap-6 transition-all duration-300">
                <FaArrowRight className="rotate-180 md:rotate-0" />{" "}
                {/* Arrow direction trick for layout */}
                Galeri Karya
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 w-full flex justify-center md:justify-start">
              {/* Abstract Card Stack Visual */}
              <div className="relative w-64 h-80">
                <div className="absolute inset-0 bg-muted-purple rotate-6 rounded-sm shadow-2xl z-0"></div>
                <div className="absolute inset-0 bg-pale-rose -rotate-3 rounded-sm shadow-xl z-10 flex items-center justify-center">
                  <span className="font-hamburg text-5xl text-dark-purple">
                    Karya
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ARSIP (History/Storage Mood) */}
      <section className="py-24 bg-dusty-lavender/20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="inline-flex items-center justify-center p-4 bg-white rounded-full text-dark-purple shadow-sm mb-6">
                <FaArchive className="text-2xl" />
              </div>
              <h2 className="font-hamburg text-5xl md:text-6xl text-dark-purple mb-6">
                Arsip - Our Journey
              </h2>
              <p className="font-fraunces text-lg text-muted-purple mb-8">
                Menelusuri jejak langkah sejarah, pencapaian, dan momen berharga
                yang telah membentuk identitas HMTG UGM dari masa ke masa.
              </p>
              <Link href="/arsip">
                <button className="bg-dark-purple text-off-white px-8 py-3 rounded-full font-fraunces font-bold hover:bg-muted-purple transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Buka Arsip
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
