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
      className="py-20 bg-gradient-to-br from-pale-rose to-dusty-lavender"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative element */}
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto text-dark-purple opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h2 className="font-hamburg text-4xl sm:text-5xl lg:text-6xl text-dark-purple mb-4">
            Membumi Mengabdi,
            <br />
            Jayalah Geologi!
          </h2>

          <div className="w-24 h-1 bg-dark-purple mx-auto mt-6 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
