export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export interface QuoteRequest {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  serviceType: string;
  description: string;
  images: File[];
  urgency: 'standard' | 'express' | 'same-day';
  createdAt: Date;
  status: 'pending' | 'quoted' | 'accepted' | 'completed';
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  image?: string;
  order: number;
  isVisible: boolean;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  serviceArea: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image?: string;
  date: Date;
  isVisible: boolean;
}

export interface Gallery {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: 'wedding-dress' | 'groom-suit' | 'shoes' | 'accessories' | 'other';
  isVisible: boolean;
}
