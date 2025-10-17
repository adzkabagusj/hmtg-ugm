"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Card from "../ui/Card";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const departments = [
    "Dana Usaha",
    "Diklar",
    "Humas",
    "Keanggotaan dan Alumni",
    "Kerohanian",
    "Kerumahtanggaan",
    "Minat dan Bakat",
    "Litbang",
    "Sosial",
    "TIM",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="font-birds text-4xl sm:text-5xl text-dark-purple mb-4">
            Tentang <span className="font-hamburg">HMTG</span>
          </h2>
          <div className="w-24 h-1 bg-pale-rose mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* History & Purpose */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <Card>
              <h3 className="font-fraunces font-bold text-2xl text-dark-purple mb-4">
                Sejarah
              </h3>
              <p className="text-muted-purple leading-relaxed mb-4">
                Himpunan Mahasiswa Teknik Geologi (HMTG) secara resmi dibentuk
                pada tanggal <span className="font-semibold">20 Mei 1962</span>.
                Saat ini, HMTG telah berumur 58 tahun dan terus berkembang
                sebagai wadah bagi mahasiswa Teknik Geologi FT UGM.
              </p>
              <p className="text-muted-purple leading-relaxed">
                HMTG memiliki sistem kepengurusan yang terdiri dari pengurus
                harian dan staff pengurus, dengan struktur yang mencakup Ketua
                Himpunan, Sekretaris Umum, Sekretaris, Bendahara, Wakil
                Bendahara, dan Kepala-Kepala Divisi.
              </p>
            </Card>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <Card>
              <h3 className="font-fraunces font-bold text-2xl text-dark-purple mb-4">
                Tujuan & Misi
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-fraunces font-semibold text-lg text-muted-purple mb-2">
                    Tujuan
                  </h4>
                  <p className="text-muted-purple leading-relaxed">
                    Mengaplikasikan ilmu Geosains dan mengajak masyarakat untuk
                    lebih mencintai bumi.
                  </p>
                </div>
                <div>
                  <h4 className="font-fraunces font-semibold text-lg text-muted-purple mb-2">
                    Misi
                  </h4>
                  <p className="text-muted-purple leading-relaxed">
                    Menghasilkan geolog yang berguna bagi bangsa dan negara.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Departments */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16">
          <h3 className="font-birds text-3xl text-dark-purple text-center mb-8">
            Departemen <span className="font-hamburg">HMTG</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-fraunces font-medium text-dark-purple">
                  {dept}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
