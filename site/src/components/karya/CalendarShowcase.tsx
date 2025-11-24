"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaDownload, FaArrowRight } from "react-icons/fa";

export default function CalendarShowcase() {
  // Mendapatkan bulan dan tahun saat ini otomatis
  const date = new Date();
  const currentMonth = date.toLocaleString("id-ID", { month: "long" });
  const currentYear = date.getFullYear();

  return (
    <section className="container mx-auto px-6 py-12 mb-12 border-b border-off-white/10 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-muted-purple/20 rounded-sm overflow-hidden p-8 md:p-12 lg:p-16 border border-off-white/5">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pale-rose/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT: Content Info */}
          <div className="lg:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pale-rose/20 text-pale-rose text-xs font-bold mb-6 tracking-widest uppercase">
              <FaCalendarAlt /> New Release
            </div>

            <h2 className="font-hamburg text-5xl md:text-7xl text-off-white mb-4 leading-none">
              Kalender <br />
              <span className="text-pale-rose">Geologi {currentYear}</span>
            </h2>

            <p className="font-fraunces text-lg text-off-white/70 mb-8 leading-relaxed max-w-md">
              Koleksi foto singkapan geologi terbaik nusantara, dikemas dalam
              desain kalender meja eksklusif. Tema bulan ini:{" "}
              <strong>"{currentMonth} - Batuan Metamorf"</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-pale-rose text-dark-purple px-8 py-3 rounded-sm font-fraunces font-bold hover:bg-white transition-colors flex items-center gap-3">
                <FaDownload /> Unduh Versi Digital
              </button>
              <button className="px-8 py-3 rounded-sm font-fraunces font-bold text-off-white border border-off-white/30 hover:bg-off-white/10 transition-all flex items-center gap-3">
                Lihat Preview <FaArrowRight />
              </button>
            </div>
          </div>

          {/* RIGHT: Visual Mockup Kalender */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative z-10">
            {/* Calendar Card Mockup */}
            <motion.div
              whileHover={{ rotate: -2, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-md aspect-[4/3] bg-off-white rounded-sm shadow-2xl p-4 rotate-2 border-8 border-dark-purple/50">
              {/* Inner Calendar Layout */}
              <div className="w-full h-full border border-dark-purple/10 p-6 flex flex-col">
                {/* Header Kalender */}
                <div className="flex justify-between items-end border-b-2 border-dark-purple mb-4 pb-2">
                  <h3 className="font-hamburg text-5xl text-dark-purple leading-none">
                    {currentMonth}
                  </h3>
                  <span className="font-fraunces text-xl text-pale-rose font-bold">
                    {currentYear}
                  </span>
                </div>

                {/* Content Kalender (Dummy Grid) */}
                <div className="flex-grow grid grid-cols-7 gap-2 text-center content-start">
                  {/* Days Header - FIX: Gunakan index (i) sebagai key */}
                  {["M", "S", "S", "R", "K", "J", "S"].map((d, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold text-muted-purple">
                      {d}
                    </span>
                  ))}
                  {/* Dates (Dummy) */}
                  {Array.from({ length: 30 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs font-fraunces py-1 ${
                        i === 12
                          ? "bg-pale-rose text-dark-purple rounded-full font-bold"
                          : "text-dark-purple/60"
                      }`}>
                      {i + 1}
                    </span>
                  ))}
                </div>

                {/* Bottom Caption */}
                <div className="mt-auto text-xs text-muted-purple/50 font-fraunces italic text-center">
                  Photo by: Divisi Media HMTG
                </div>
              </div>

              {/* Pin Hiasan */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pale-rose shadow-md border border-dark-purple" />
            </motion.div>

            {/* Shadow Element di belakang */}
            <div className="absolute top-4 right-4 lg:right-0 w-full max-w-md aspect-[4/3] bg-dark-purple border-2 border-off-white/10 -z-10 rotate-6 rounded-sm" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
