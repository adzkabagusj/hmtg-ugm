"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

interface PhotoCarouselProps {
  images: string[];
  aspectRatio?: string;
}

export default function PhotoCarousel({
  images,
  aspectRatio = "aspect-video",
}: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Jika tidak ada gambar
  if (!images || images.length === 0) {
    return (
      <div
        className={`w-full ${aspectRatio} bg-muted-purple/10 flex items-center justify-center text-muted-purple/40`}>
        No Images
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden group rounded-sm shadow-lg border border-dark-purple/10`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gray-200">
          {/* Placeholder Image Logic untuk saat ini karena file gambar belum ada di public */}
          {/* Nanti ganti <div ...> ini dengan <Image ... /> saat sudah integrasi Strapi */}
          <div className="w-full h-full flex items-center justify-center bg-gray-300 relative">
            <span className="font-hamburg text-4xl text-white/50 absolute z-10">
              Slide {currentIndex + 1}
            </span>
            {/* Simulasi Gambar (Warna berbeda tiap slide) */}
            <div
              className={`absolute inset-0 opacity-50 ${
                currentIndex % 2 === 0 ? "bg-dark-purple" : "bg-pale-rose"
              }`}
            />
            {/* Image Component Asli (Uncomment nanti) */}
            {/* <Image src={images[currentIndex]} alt="Archive Photo" fill className="object-cover" /> */}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows (Hanya muncul jika gambar > 1) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/90 text-white hover:text-dark-purple backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20">
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/90 text-white hover:text-dark-purple backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20">
            <FaChevronRight size={14} />
          </button>

          {/* Indicators / Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
