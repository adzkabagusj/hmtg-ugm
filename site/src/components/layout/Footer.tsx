import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";
import { fetchAPI } from "@/lib/strapi";
import { LandingPageData } from "@/types/strapi";

// Fungsi fetch data Landing Page (Single Type)
async function getFooterData() {
  try {
    const res = await fetchAPI("/landing-page", {
      populate: "*",
    });
    return res?.data ? (res.data as LandingPageData) : null;
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return null;
  }
}

export default async function Footer() {
  const data = await getFooterData();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-purple text-off-white pt-16 pb-8 border-t-4 border-pale-rose">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Kolom 1: Identitas */}
          <div className="space-y-4">
            <h3 className="font-hamburg text-4xl text-pale-rose">
              HMTG FT UGM
            </h3>
            <p className="font-fraunces text-sm text-off-white/70 leading-relaxed">
              Himpunan Mahasiswa Teknik Geologi
              <br />
              Fakultas Teknik
              <br />
              Universitas Gadjah Mada
            </p>
          </div>

          {/* Kolom 2: Alamat (Dinamis dari Strapi) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-birds text-2xl text-pale-rose">Sekretariat</h4>
            <p className="font-fraunces text-sm text-off-white/80 leading-relaxed max-w-md whitespace-pre-line">
              {data?.contactAddress ||
                "Jl. Grafika Bulaksumur No.2, Senolowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284"}
            </p>
            <div className="flex items-center gap-2 text-sm text-pale-rose hover:text-white transition-colors">
              <FaEnvelope />
              <a href={`mailto:${data?.contactEmail || "hmtg.ft@ugm.ac.id"}`}>
                {data?.contactEmail || "hmtg.ft@ugm.ac.id"}
              </a>
            </div>
          </div>

          {/* Kolom 3: Social Media (Dinamis dari Strapi) */}
          <div className="space-y-4">
            <h4 className="font-birds text-2xl text-pale-rose">Terhubung</h4>
            <div className="flex gap-4 flex-wrap">
              {data?.socialInstagram && (
                <SocialIcon
                  href={data.socialInstagram}
                  icon={<FaInstagram />}
                  label="Instagram"
                />
              )}
              {data?.socialLinkedin && (
                <SocialIcon
                  href={data.socialLinkedin}
                  icon={<FaLinkedin />}
                  label="LinkedIn"
                />
              )}
              {data?.socialYoutube && (
                <SocialIcon
                  href={data.socialYoutube}
                  icon={<FaYoutube />}
                  label="YouTube"
                />
              )}
              {data?.socialTiktok && (
                <SocialIcon
                  href={data.socialTiktok}
                  icon={<FaTiktok />}
                  label="TikTok"
                />
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-off-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-fraunces text-xs text-off-white/40 text-center md:text-left">
            &copy; {currentYear} HMTG UGM. Membumi Mengabdi, Jayalah Geologi!
          </p>
          <div className="flex gap-6 font-fraunces text-xs text-off-white/40">
            <Link href="#" className="hover:text-pale-rose transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-pale-rose transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Komponen Kecil untuk Icon
function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-off-white/5 border border-off-white/10 text-pale-rose hover:bg-pale-rose hover:text-dark-purple hover:scale-110 transition-all duration-300">
      {icon}
    </a>
  );
}
