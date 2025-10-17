This document serves as the primary instruction manual for building the profile and information website for the Himpunan Mahasiswa Teknik Geologi (HMTG) at FT UGM. Please adhere to these guidelines strictly.

## 1\. Project Overview & Core Purpose

This project is the official profile and information website for HMTG FT UGM. Its purpose is to serve as a digital hub for members, alumni, and the public to learn about the organization, its activities (`Kegiatan`), its works (`Karya`), and its history (`Arsip`).

The website should project a clean, professional, and modern image that reflects the spirit, values, and scientific nature of the geological engineering field and the HMTG organization itself.

## 2\. Tech Stack & Key Libraries

- **Framework:** Next.js 15.5.5
- **Language:** TypeScript
- **UI Library:** React.js 19.1.0
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion (for professional microinteractions)
- **Icons:** React Icons (for social media and UI icons)
- **CMS:** Strapi (located in `/cms`, but **not** the focus for now)

## 3\. Repository Structure

The repository is a monorepo with the following structure:

```
hmtg-ugm/
├── site/      # The Next.js front-end application. ALL CURRENT WORK HAPPENS HERE.
└── cms/       # The Strapi back-end application. DO NOT MODIFY OR WORK IN THIS FOLDER.
```

## 4\. Current Development Status

### ✅ Completed (Initial Stage)

The initial stage of the front-end has been completed. The following have been implemented:

1.  **Landing Page (`/`):** ✅ COMPLETE
    - Hero section with auto-cycling image carousel (5-second intervals)
    - Slogan section with elegant styling
    - About HMTG section with history, mission, and departmental divisions
    - Full responsive design across all breakpoints

2.  **Base Pages:** ✅ COMPLETE
    - `/kegiatan` - Placeholder page with navbar and footer
    - `/karya` - Placeholder page with navbar and footer
    - `/arsip` - Placeholder page with navbar and footer

3.  **Core Components:** ✅ COMPLETE
    - **Layout Components:**
      - Navbar with sticky scroll behavior, white text on transparent background at top, dark text on white when scrolled
      - Footer with HMTG/UGM logos, contact info, and social media links using react-icons
    - **UI Components:**
      - Button component with three variants (primary, secondary, outline)
      - Card component with hover effects
      - SocialLink component using react-icons
    - **Landing Sections:**
      - HeroSection with image carousel and animations
      - SloganSection with scroll-triggered animations
      - AboutSection with staggered animations

4.  **Design System:** ✅ COMPLETE
    - Custom color palette fully configured in Tailwind
    - All three fonts (Hamburg Hand, Birds of Paradise, Fraunces) properly set up
    - Framer Motion animations throughout
    - Professional microinteractions on all interactive elements

### 🔄 Next Phase Tasks

1.  **Content Population:**
    - Replace hero section placeholder images with actual HMTG photos
    - Update placeholder WhatsApp contact with real contact information

2.  **Page Development:**
    - Build out Kegiatan page with activities content
    - Build out Karya page with works/achievements content
    - Build out Arsip page with archive/history content

3.  **CMS Integration:**
    - Connect Strapi CMS for dynamic content management
    - Implement data fetching for activities, works, and archives

4.  **Additional Features:**
    - Add Kepengurusan (management) section once org chart data is available
    - Implement search functionality (if required)
    - Add language toggle (if required)

## 5\. Coding Conventions & Standards

- **Code Language:** All code, including component names, variable names, functions, and comments, **must be in English**.
- **Content Language:** All user-facing text on the website (headings, paragraphs, button labels, etc.) **must be in Bahasa Indonesia**.
- **Component Structure:** Create components in a logical folder structure within `/site/src/components/`. For example, create subfolders for `layout`, `ui` (for generic buttons, cards), and `landing` (for landing page sections).

## 6\. Design System & UI/UX Guidelines

This is a critical section. The website's quality will be judged by its adherence to these design principles.

### 6.1. Color Palette

Use these colors as defined. Use Tailwind's theme configuration to set these up as custom colors.

| Name             | Hex       | Usage Description                                 |
| ---------------- | --------- | ------------------------------------------------- |
| `dark-purple`    | `#22223B` | Main text, dark backgrounds, primary accent       |
| `muted-purple`   | `#4A4E69` | Sub-headings, secondary text, subtle backgrounds  |
| `dusty-lavender` | `#9A8C98` | Borders, dividers, decorative elements            |
| `pale-rose`      | `#C9ADA7` | Accent elements, hover states, subtle highlights  |
| `off-white`      | `#F2E9E4` | Main page background, light sections              |
| `white`          | `#FFFFFF` | Text on dark backgrounds, card backgrounds        |
| `black`          | `#000000` | Used sparingly for high-contrast text or elements |

### 6.2. Typography

Set up the fonts correctly. The `Hamburg Hand` and `Birds of Paradise` fonts are custom and located in `/site/public/fonts/`. `Fraunces` is a Google Font.

- **Primary Heading:** `Hamburg Hand`
  - Usage: Main page titles
- **Secondary Heading / Accent:** `Birds of Paradise`
  - Usage: Sub-headings
- **Body Text:** `Fraunces`
  - Usage: All paragraphs, component text, navigation links, and general content.

### 6.3. UI/UX Principles

- **Vibe:** The design must be clean, professional, and trustworthy, reflecting a university-level engineering organization. Refer to the provided screenshot of the HMTG Instagram feed for visual inspiration regarding tone and style.
- **Responsiveness:** All pages and components must be fully responsive and functional on mobile, tablet, and desktop screens.
- **Microinteractions:** Use `framer-motion` to add subtle, professional animations. Examples:
  - Gentle fade-in animations for elements as they enter the viewport.
  - Smooth hover effects on buttons and links.
  - Subtle scaling or shadow effects on interactive cards.
  - Avoid jarring or overly flashy animations. The goal is to enhance the user experience, not distract from the content.

## 7\. Website Content & Information

### 7.1. HMTG Key Information

Mahasiswa Teknik Geologi (HMTG). Secara resmi dibentuk pada tanggal 20 Mei 1962, HMTG saat ini telah berumur 58 tahun. Tujuan dari HMTG adalah untuk mengaplikasikan ilmu Geosains dan mengajak masyarakat untuk lebih mencintai bumi. Sedangkan misinya adalah menghasilkan geolog yang berguna bagi bangsa dan negara. HMTG memiliki sistem kepengurusan yang terdiri dari pengurus harian dan staff pengurus. Pengurus Harian terdiri dari Ketua Himpunan, Sekretaris Umum, Sekretaris, Bendahara, Wakil Bendahara dan Kepala-Kepala Divisi. Terdapat sepuluh departemen sebagai bagian penting dalam kegiatan-kegiatan HMTG. Kesepuluh departemen tersebut adalah: Departemen Dana Usaha, Departemen Diklar, Departemen Humas, Departemen Keanggotaan dan Alumni, Departemen Kerohanian, Departemen Kerumahtanggaan, Departemen Minat dan Bakat, Departemen Litbang, Departemen Sosial, dan Departemen TIM.

### 7.2. Social Media & Contact

- **Instagram:** `https://www.instagram.com/hmtg_ftugm/`
- **Facebook:** `https://web.facebook.com/people/hmtg_ftugm/100079858263879/?sk=about`
- **LinkedIn:** `https://www.linkedin.com/company/himpunan-mahasiswa-teknik-geologi-ft-ugm/`
- **X (Twitter):** `https://x.com/hmtg_ftugm`
- **YouTube:** `https://www.youtube.com/channel/UCVFZXIECpsplf2-CBPAnm9A`
- **Email:** `hmtg.ft@ugm.ac.id`
- **Address:** Jl. Grafika Bulaksumur No.2, Senolowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284

### 7.3. Missing Information (Use Placeholders)

The following information is not yet available. Use appropriate placeholders.

- **Slogan:** For now, use a placeholder slogan like: `"Membumi Mengabdi, Jayalah Geologi!"`
- **Kepengurusan (Management):** The section on the landing page for this should be skipped entirely for now. Do not build it.
- **Contact WhatsApp:** Not provided. For now, use a placeholder `"081234567899 (Rahma)"` which will be directed to `wa.me/6281234567899`
- **Photos:** Specific photos for the hero slider are not available. Use high-quality, relevant stock photos of geology, landscapes, or university students. Ensure they are royalty-free.

## 8\. Implemented Features & Components

### 8.1. Landing Page (`/`)

**Navbar:**
- ✅ Links to Home, Kegiatan, Karya, Arsip
- ✅ Sticky navigation with scroll-triggered styling
- ✅ White text on semi-transparent dark background when at top of page (better visibility on hero images)
- ✅ Dark text on white background when scrolled down
- ✅ Mobile-responsive hamburger menu with smooth animations
- ✅ HMTG logo integrated

**Hero Section:**
- ✅ Auto-cycling background image carousel (5-second intervals with crossfade transitions)
- ✅ Gradient overlay for text readability
- ✅ Primary heading (Hamburg Hand font)
- ✅ Brief HMTG description
- ✅ Call-to-action button
- ✅ Animated scroll indicator

**Slogan Section:**
- ✅ "Membumi Mengabdi, Jayalah Geologi!" displayed elegantly
- ✅ Decorative elements and gradient background
- ✅ Scroll-triggered animation

**About Section:**
- ✅ History card with founding date (20 Mei 1962)
- ✅ Mission and vision card
- ✅ 10 departmental divisions in animated grid
- ✅ Staggered entrance animations

**Footer:**
- ✅ HMTG & UGM logos
- ✅ Complete address
- ✅ Email contact
- ✅ Placeholder WhatsApp contact
- ✅ Social media links (Instagram, Facebook, LinkedIn, X/Twitter, YouTube) using **react-icons**
- ✅ Copyright notice: © 2025 HMTG-UGM | All rights reserved

### 8.2. Component Library

All components are located in `/site/src/components/` with the following structure:

**Layout Components** (`/layout`):
- `Navbar.tsx` - Navigation with scroll effects and mobile menu
- `Footer.tsx` - Footer with contact info and social links

**UI Components** (`/ui`):
- `Button.tsx` - Reusable button with 3 variants and animations
- `Card.tsx` - Hover-effect card component
- `SocialLink.tsx` - Social media icon links (uses react-icons)

**Landing Page Sections** (`/landing`):
- `HeroSection.tsx` - Hero with image carousel
- `SloganSection.tsx` - Slogan display with animations
- `AboutSection.tsx` - About HMTG content with cards

### 8.3. Key Improvements Made

1. **Navbar Visibility Enhancement:**
   - Fixed text visibility issue on dark backgrounds
   - Navbar now uses semi-transparent dark background with white text at top
   - Transitions to white background with dark text when scrolled
   - Ensures readability in all scenarios

2. **Professional Icons:**
   - Integrated `react-icons` library
   - Social media links now use proper branded icons (Instagram, Facebook, LinkedIn, X, YouTube)
   - Better visual consistency and professional appearance

3. **Animation Quality:**
   - Scroll-triggered animations for better performance
   - Staggered animations for list items
   - Smooth transitions throughout (0.3-0.8s durations)
   - Hover effects on all interactive elements

4. **Responsive Design:**
   - Mobile-first approach
   - Tested on all breakpoints (mobile, tablet, desktop)
   - Mobile hamburger menu with smooth animations
   - Flexible grid layouts that adapt to screen size

### 8.4. Technical Implementation Details

**Fonts Configuration:**
- Local fonts loaded via Next.js `localFont` utility
- Google Font (Fraunces) loaded via `next/font/google`
- CSS variables configured for easy usage: `font-hamburg`, `font-birds`, `font-fraunces`

**Color System:**
- Configured in `globals.css` using Tailwind v4's `@theme` directive
- Available as utility classes: `bg-dark-purple`, `text-pale-rose`, etc.
- Consistent across all components

**Performance:**
- Static page generation for optimal loading
- Image optimization with Next.js Image component
- Font optimization with `display: swap`
- Tree-shaken CSS with Tailwind

**Build Output:**
- All pages successfully build and deploy
- Total bundle size: ~165-168 KB (First Load JS)
- Zero TypeScript errors
- Zero build warnings
