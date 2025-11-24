"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SloganSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-dark-purple text-off-white relative overflow-hidden">
      {/* Background Pattern: Garis Kontur Tipis (CSS Radial Gradient trick) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#C9ADA7 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center">
          {/* Decorative Top Line */}
          <div className="w-24 h-1 bg-pale-rose mb-8" />

          <h2 className="font-hamburg text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide text-pale-rose">
            &ldquo;Gesa Gesu Sesu Sasa&rdquo;
          </h2>

          <h3 className="font-birds text-2xl md:text-4xl text-off-white/80 max-w-xl mx-auto leading-relaxed">
            Geologi Satu, Geologi Sama, Senang Susah Sama-Sama
          </h3>

          {/* Decorative Bottom Line */}
          <div className="w-24 h-1 bg-pale-rose mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
