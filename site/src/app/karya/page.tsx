"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function KaryaPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-birds text-5xl sm:text-6xl text-dark-purple mb-6">
              Halaman Karya
            </h1>
            <div className="w-24 h-1 bg-pale-rose mx-auto mb-8 rounded-full" />
            <p className="font-fraunces text-lg text-muted-purple max-w-2xl mx-auto">
              Konten untuk halaman Karya akan segera hadir. Halaman ini akan
              menampilkan berbagai karya dan prestasi yang telah dicapai oleh
              anggota HMTG FT UGM.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
