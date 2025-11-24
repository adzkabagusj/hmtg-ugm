"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaArrowRight,
} from "react-icons/fa";
import { ACTIVITIES_DATA } from "@/data/activities";

export default function ActivityFeed() {
  return (
    <div className="relative container mx-auto px-6 py-12">
      {/* GARIS TIMELINE */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-pale-rose border-l border-dashed border-dark-purple/30 h-full transform md:-translate-x-1/2" />

      <div className="space-y-24">
        {ACTIVITIES_DATA.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 items-center ${
                isEven ? "md:flex-row-reverse" : ""
              }`}>
              {/* TIMELINE DOT */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-dark-purple border-4 border-pale-rose transform -translate-x-1/2 md:-translate-x-1/2 top-0 md:top-8 z-10 shadow-lg" />

              {/* SIDE A: CONTENT */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 lg:pr-16 text-left">
                <div
                  className={`flex flex-col ${
                    isEven
                      ? "md:items-end md:text-right"
                      : "md:items-start md:text-left"
                  }`}>
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-sm font-fraunces text-muted-purple mb-3">
                    <span className="flex items-center gap-1 bg-pale-rose/20 px-3 py-1 rounded-full text-dark-purple font-bold">
                      <FaTag className="text-xs" /> {item.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {item.date}
                    </span>
                  </div>

                  {/* Clickable Title */}
                  <Link href={`/kegiatan/${item.slug}`} className="group">
                    <h3 className="font-hamburg text-4xl text-dark-purple mb-4 leading-tight group-hover:text-pale-rose transition-colors duration-300">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="font-fraunces text-muted-purple mb-6 leading-relaxed opacity-80 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-2 text-sm font-bold text-dark-purple">
                      <FaMapMarkerAlt className="text-pale-rose" />
                      {item.location}
                    </div>
                    <Link
                      href={`/kegiatan/${item.slug}`}
                      className="text-sm font-fraunces font-bold text-pale-rose hover:text-dark-purple flex items-center gap-1 transition-colors">
                      Baca Selengkapnya <FaArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* SIDE B: IMAGE THUMBNAIL (Placeholder Logic) */}
              <div
                className={`w-full md:w-1/2 pl-12 md:pl-12 lg:pl-16 ${
                  isEven ? "md:pr-0" : ""
                }`}>
                <Link href={`/kegiatan/${item.slug}`}>
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-muted-purple/10 border border-dark-purple/10 group shadow-xl cursor-pointer">
                    {/* Decorative corner */}
                    <div
                      className="absolute top-0 right-0 w-8 h-8 bg-pale-rose z-20 transition-transform group-hover:scale-150"
                      style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                    />

                    {/* IMAGE / PLACEHOLDER LOGIC */}
                    {item.images && item.images.length > 0 ? (
                      /* Jika ada gambar (Nanti pakai Image component) */
                      <div className="w-full h-full bg-gray-300 relative">
                        {/* <Image src={item.images[0]} fill className="object-cover" /> */}
                      </div>
                    ) : (
                      /* Placeholder Modern Geo-Editorial (CSS Pattern) */
                      <div className="w-full h-full relative overflow-hidden bg-off-white">
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage:
                              "radial-gradient(#22223B 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full border-2 border-pale-rose/50 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full border border-dark-purple/20" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 font-hamburg text-4xl text-dark-purple/10">
                          No Image
                        </div>
                      </div>
                    )}

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-dark-purple/0 group-hover:bg-dark-purple/10 transition-colors duration-300" />
                  </div>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ENDING DOT */}
      <div className="absolute left-6 md:left-1/2 bottom-0 w-3 h-3 rounded-full bg-muted-purple/30 transform -translate-x-1/2" />
    </div>
  );
}
