import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Primary heading font - Hamburg Hand
const hamburgHand = localFont({
  src: "../../public/fonts/HamburgHand-Regular.otf",
  variable: "--font-hamburg-hand",
  display: "swap",
});

// Secondary/Accent font - Birds of Paradise
const birdsOfParadise = localFont({
  src: "../../public/fonts/Birds of Paradise ╕ PERSONAL USE ONLY.ttf",
  variable: "--font-birds-of-paradise",
  display: "swap",
});

// Body text font - Fraunces
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HMTG FT UGM",
  description: "Himpunan Mahasiswa Teknik Geologi Fakultas Teknik Universitas Gadjah Mada - Membumi Mengabdi, Jayalah Geologi!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${hamburgHand.variable} ${birdsOfParadise.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
