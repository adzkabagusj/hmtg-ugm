// Tipe Dasar Strapi
export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

// 1. Landing Page Type
export interface LandingPageData {
  heroImages: StrapiImage[];
  sloganTitle: string;
  sloganSubtitle: string;
  structureImage: StrapiImage;
  contactAddress: string;
  contactEmail: string;
  socialInstagram: string;
  socialLinkedin: string;
  socialYoutube: string;
  socialTiktok: string;
}

// 2. Activity Type
export interface Activity {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  location: string;
  description: string;
  content: any; // Blocks content
  images: StrapiImage[];
}

// 3. Work Type
export interface Work {
  id: number;
  documentId: string;
  title: string;
  category: string;
  series: string;
  description: string;
  link: string;
  color: string;
  coverImage: StrapiImage;
}

// 4. Journey Type
export interface Journey {
  id: number;
  documentId: string;
  title: string;
  date: string;
  location: string;
  description: string;
  photos: StrapiImage[];
}
