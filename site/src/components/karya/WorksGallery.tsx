"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaInstagram } from "react-icons/fa";

// Data dari dokumen 'WEBSITE HMTG' - TRIVIA BUMI GADJAH MADA
const WORKS_DATA = [
  {
    id: 1,
    title: "Apa Itu Red Mud?",
    category: "Mineralogi",
    series: "Trivia Bumi #1",
    description:
      "Membahas tentang kandungan mineral, bahaya, dan pemanfaatan red mud (residu bauksit).",
    link: "https://www.instagram.com/p/DJYLkgrR54k",
    color: "bg-[#FF9B85]", // Custom accent color
  },
  {
    id: 2,
    title: "Silicified Coal",
    category: "Petrologi",
    series: "Trivia Bumi #2",
    description:
      "Fenomena unik pembentukan 'batu bara tersilisifikasi' dan dampaknya bagi industri.",
    link: "https://www.instagram.com/p/DH9_zIqyzIM",
    color: "bg-[#588157]",
  },
  {
    id: 3,
    title: "Danau Matano",
    category: "Geotektonik",
    series: "Trivia Bumi #3",
    description:
      "Mengupas rahasia Danau Tektonik Purba terdalam di Asia Tenggara yang ada di Sulawesi.",
    link: "https://www.instagram.com/p/DJ8lknZRpd5",
    color: "bg-[#457B9D]",
  },
  {
    id: 4,
    title: "CCUS & Injeksi CO2",
    category: "Energi Baru",
    series: "Trivia Bumi #4",
    description:
      "Solusi subsurface (bawah permukaan) untuk mitigasi emisi karbon masa depan.",
    link: "https://www.instagram.com/p/DOAS",
    color: "bg-[#E63946]",
  },
];

export default function WorksGallery() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* MASONRY / GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Intro Card (Kotak Pertama sebagai Pengantar) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-off-white/5 border border-off-white/10 p-8 rounded-sm flex flex-col justify-center min-h-[300px]">
          <h3 className="font-birds text-4xl text-pale-rose mb-4">
            Trivia Bumi
          </h3>
          <p className="font-fraunces text-off-white/70 mb-6 leading-relaxed">
            Kumpulan tulisan informatif mengenai fenomena geologi insidental,
            fakta unik, dan perkembangan ilmu kebumian terkini.
          </p>
          <div className="w-12 h-1 bg-pale-rose" />
        </motion.div>

        {/* Content Cards */}
        {WORKS_DATA.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-muted-purple overflow-hidden h-[400px] cursor-pointer">
            {/* Background Image Placeholder (Abstrak) */}
            <div
              className={`absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-110 ${work.color}`}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-purple via-dark-purple/50 to-transparent opacity-90" />

            {/* Content Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
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
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-pale-rose font-bold text-sm hover:gap-4 transition-all">
                  Baca di Instagram <FaArrowRight />
                </a>
              </div>
            </div>

            {/* Icon Dekorasi */}
            <div className="absolute top-8 right-8 text-off-white/10 group-hover:text-off-white/30 transition-colors">
              <FaInstagram className="text-4xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
