"use client";

import Image from "next/image";
import SocialLink from "../ui/SocialLink";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/hmtg_ftugm/",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://web.facebook.com/people/hmtg_ftugm/100079858263879/?sk=about",
      icon: FaFacebook,
      label: "Facebook",
    },
    {
      href: "https://www.linkedin.com/company/himpunan-mahasiswa-teknik-geologi-ft-ugm/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/hmtg_ftugm",
      icon: FaXTwitter,
      label: "X (Twitter)",
    },
    {
      href: "https://www.youtube.com/channel/UCVFZXIECpsplf2-CBPAnm9A",
      icon: FaYoutube,
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-dark-purple text-off-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/logo/hmtg-logo.png"
                alt="HMTG Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <Image
                src="/logo/ugm-logo.png"
                alt="UGM Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="font-hamburg text-xl mb-2">HMTG FT UGM</h3>
            <p className="text-sm text-dusty-lavender">
              Himpunan Mahasiswa Teknik Geologi
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-fraunces font-bold text-lg mb-4">Kontak</h4>
            <div className="space-y-2 text-sm">
              <p className="text-dusty-lavender">
                <span className="font-semibold text-off-white">Alamat:</span>
                <br />
                Jl. Grafika Bulaksumur No.2
                <br />
                Senolowo, Sinduadi, Kec. Mlati
                <br />
                Kabupaten Sleman, DIY 55284
              </p>
              <p className="text-dusty-lavender">
                <span className="font-semibold text-off-white">Email:</span>
                <br />
                <a
                  href="mailto:hmtg.ft@ugm.ac.id"
                  className="hover:text-pale-rose transition-colors"
                >
                  hmtg.ft@ugm.ac.id
                </a>
              </p>
              <p className="text-dusty-lavender">
                <span className="font-semibold text-off-white">WhatsApp:</span>
                <br />
                <a
                  href="https://wa.me/6281234567899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pale-rose transition-colors"
                >
                  081234567899 (Rahma)
                </a>
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-fraunces font-bold text-lg mb-4">
              Media Sosial
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.href}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-muted-purple text-center">
          <p className="text-sm text-dusty-lavender">
            © 2025 HMTG-UGM | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
