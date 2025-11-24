"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function KepengurusanSection() {
  return (
    <section className="py-24 bg-off-white relative overflow-hidden">
      {/* Decorative Background: Abstrak Layer Batuan */}
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
                dari Ketua Himpunan, Sekretaris Jendral, Sekretaris, Bendahara,
                Wakil Bendahara, serta Kepala-Kepala Bidang dan Divisi yang
                bersinergi untuk menjalankan roda organisasi.
              </p>
            </div>

            {/* List Departemen/Divisi (Visual Tag) */}
            <div className="mt-8">
              <h3 className="font-birds text-2xl text-dark-purple mb-4">
                Departemen & Divisi
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Dana Usaha",
                  "Diklar",
                  "Humas",
                  "Keanggotaan & Alumni",
                  "Kerohanian",
                  "Kerumahtanggaan",
                  "Minat & Bakat",
                  "Litbang",
                  "Sosial",
                  "Teknologi Informasi",
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

          {/* Kanan: Slot Gambar Struktur Organisasi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:w-1/2 w-full">
            <div className="relative p-4 border-2 border-dashed border-dark-purple/20 bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Note: Nanti gambar asli 'image_822100.jpg' dimasukkan lewat Strapi */}
              {/* Untuk sekarang kita pakai placeholder area */}
              <div className="aspect-[4/3] bg-off-white flex items-center justify-center relative overflow-hidden">
                {/* Jika Anda ingin mencoba gambar asli, simpan gambar di public/images/struktur.jpg dan uncomment baris bawah */}
                {/* <Image src="/images/struktur.jpg" alt="Struktur HMTG" fill className="object-cover" /> */}

                <div className="text-center p-8">
                  <span className="block font-hamburg text-3xl text-dark-purple/30 mb-2">
                    Bagan Struktur
                  </span>
                  <span className="text-sm text-muted-purple/60">
                    (Gambar akan dimuat dari Database)
                  </span>
                </div>
              </div>

              {/* Pin Hiasan di atas */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pale-rose border border-dark-purple shadow-sm"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
