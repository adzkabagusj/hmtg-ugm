"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import PhotoCarousel from "@/components/ui/PhotoCarousel";

// DUMMY DATA JOURNEY (Sesuai briefing: Kegiatan dari Awal - Akhir)
const JOURNEY_DATA = [
  {
    id: 1,
    title: "Pelantikan Pengurus HMTG 2024",
    date: "20 Januari 2024",
    location: "Ruang Sidang Utama FT UGM",
    description:
      "Momen awal perjalanan kepengurusan. Upacara pelantikan dan serah terima jabatan dari pengurus periode sebelumnya, menandai dimulainya semangat baru 'Gesa Gesu Sesu Sasa'.",
    photos: ["/img1.jpg", "/img2.jpg", "/img3.jpg"], // Array foto dummy
  },
  {
    id: 2,
    title: "Makrab Geologi: 'Stratigrafi Kebersamaan'",
    date: "15 Februari 2024",
    location: "Kaliurang, Yogyakarta",
    description:
      "Malam keakraban untuk mempererat ikatan antar anggota baru dan pengurus. Diisi dengan sharing session, api unggun, dan pentas seni angkatan.",
    photos: ["/img4.jpg", "/img5.jpg"],
  },
  {
    id: 3,
    title: "Geology Goes to School",
    date: "10 Maret 2024",
    location: "SMAN 1 Yogyakarta",
    description:
      "Kegiatan pengabdian masyarakat berupa sosialisasi ilmu kebumian dan mitigasi bencana kepada siswa-siswi SMA di Yogyakarta.",
    photos: ["/img6.jpg", "/img7.jpg", "/img8.jpg", "/img9.jpg"],
  },
  {
    id: 4,
    title: "Wisuda Periode Mei & Arak-arakan",
    date: "24 Mei 2024",
    location: "Graha Sabha Pramana UGM",
    description:
      "Perayaan kelulusan kakak-kakak wisudawan. Tradisi arak-arakan meriah dari GSP menuju Departemen Teknik Geologi sebagai bentuk apresiasi terakhir.",
    photos: ["/img10.jpg"],
  },
];

export default function JourneyGallery() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="space-y-20">
        {JOURNEY_DATA.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="group">
            {/* 1. Header Item: Garis Waktu & Judul */}
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6 border-b border-dark-purple/10 pb-4">
              <div className="flex-grow">
                <div className="flex items-center gap-3 text-sm font-fraunces text-pale-rose mb-2 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt /> {item.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-muted-purple/30" />
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {item.location}
                  </span>
                </div>
                <h2 className="font-hamburg text-4xl md:text-5xl text-dark-purple group-hover:text-muted-purple transition-colors">
                  {item.title}
                </h2>
              </div>
              <div className="text-right hidden md:block">
                <span className="font-birds text-6xl text-dark-purple/5 group-hover:text-pale-rose/20 transition-colors">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* 2. Content Body: Deskripsi & Carousel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Deskripsi (Kiri/Atas) */}
              <div className="lg:col-span-4 font-fraunces text-muted-purple leading-relaxed text-lg text-justify">
                <p>{item.description}</p>
              </div>

              {/* Carousel Foto (Kanan/Bawah) */}
              <div className="lg:col-span-8">
                <PhotoCarousel images={item.photos} />
                <div className="mt-3 flex justify-between items-center text-xs font-fraunces text-muted-purple/50">
                  <span>Dokumentasi Kegiatan</span>
                  <span>{item.photos.length} Foto</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative End Line */}
      <div className="mt-24 text-center">
        <span className="font-birds text-2xl text-pale-rose">
          To be continued...
        </span>
      </div>
    </div>
  );
}
