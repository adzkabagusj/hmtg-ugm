"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Journey } from "@/types/strapi";
import { getStrapiMedia } from "@/lib/strapi";

interface JourneyGalleryProps {
  data: Journey[];
}

// Sub-komponen untuk menangani State Carousel per item
const JourneyItem = ({ item, isEven }: { item: Journey; isEven: boolean }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ambil array foto (aman jika null)
  const photos = item.photos || [];
  const hasMultiplePhotos = photos.length > 1;

  // Fungsi Navigasi Carousel
  const nextPhoto = () => {
    setCurrentImageIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // URL Gambar saat ini
  const currentImageUrl =
    photos.length > 0 ? getStrapiMedia(photos[currentImageIndex].url) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`relative flex flex-col md:flex-row gap-8 items-center ${
        isEven ? "md:flex-row-reverse" : ""
      }`}>
      {/* TIMELINE DOT */}
      <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-off-white border-4 border-dark-purple transform -translate-x-1/2 md:-translate-x-1/2 top-0 md:top-8 z-10" />

      {/* SIDE A: TEXT CONTENT */}
      <div className="w-full md:w-1/2 pl-6 md:pl-0 md:pr-16 md:text-right">
        <div
          className={`flex flex-col ${
            isEven
              ? "md:items-end md:text-right"
              : "md:items-start md:text-left"
          }`}>
          <div className="font-fraunces text-pale-rose font-bold text-xl mb-2 flex items-center gap-2">
            <FaCalendarAlt /> {item.date}
          </div>
          <h3 className="font-hamburg text-4xl text-dark-purple mb-4">
            {item.title}
          </h3>
          <p className="font-fraunces text-muted-purple mb-4 leading-relaxed">
            {item.description}
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-bold text-dark-purple bg-pale-rose/10 px-4 py-2 rounded-full">
            <FaMapMarkerAlt className="text-pale-rose" />
            {item.location}
          </div>
        </div>
      </div>

      {/* SIDE B: PHOTO FRAME & CAROUSEL */}
      <div
        className={`w-full md:w-1/2 pl-6 md:pl-16 ${
          isEven ? "md:pr-0 md:pl-0 lg:pr-16" : ""
        }`}>
        <div className="relative p-2 border-2 border-dark-purple/10 bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 group">
          <div className="relative aspect-video overflow-hidden bg-gray-200 group">
            {/* Display Image dengan Animasi Fade */}
            <AnimatePresence mode="wait">
              {currentImageUrl ? (
                <motion.img
                  key={currentImageIndex} // Kunci ini memicu animasi saat index berubah
                  src={currentImageUrl}
                  alt={item.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover filter sepia-[.2] hover:sepia-0 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-purple bg-off-white">
                  <span className="font-fraunces text-sm">No Photo</span>
                </div>
              )}
            </AnimatePresence>

            {/* Tombol Navigasi (Hanya muncul jika > 1 foto) */}
            {hasMultiplePhotos && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-dark-purple/50 hover:bg-dark-purple text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20">
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark-purple/50 hover:bg-dark-purple text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20">
                  <FaChevronRight size={14} />
                </button>

                {/* Indikator Dots */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
                  {photos.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all ${
                        idx === currentImageIndex
                          ? "bg-pale-rose scale-125"
                          : "bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Pin Decoration (Tetap Ada) */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pale-rose border border-dark-purple shadow-sm z-30" />
        </div>
      </div>
    </motion.div>
  );
};

export default function JourneyGallery({ data }: JourneyGalleryProps) {
  if (!data || data.length === 0) {
    return (
      <div className="container mx-auto px-6 py-20 text-center text-muted-purple font-fraunces">
        <p>Arsip perjalanan belum tersedia.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 relative">
      {/* GARIS TENGAH (TIMELINE) */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-dark-purple/20 h-full transform md:-translate-x-1/2" />

      <div className="space-y-20">
        {data.map((item, index) => (
          <JourneyItem key={item.id} item={item} isEven={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
}
