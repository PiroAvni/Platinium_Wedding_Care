import {
  Package,
  Award,
  Heart,
  Shield,
  Star,
  Clock,
  Truck,
  Gift,
} from 'lucide-react';
import type { Feature } from '../components/ui/FeatureCard.tsx';

// Extended Feature interface for preservation with additional properties
export interface PreservationFeature extends Feature {
  features?: string[];
  image?: string;
  alt?: string;
  highlighted?: boolean;
}

// Main preservation features
export const preservationFeatures: PreservationFeature[] = [
  {
    id: 'standard-preservation',
    icon: <Package className='w-8 h-8' />,
    title: 'Standard Preservation',
    description:
      'Acid-free materials with tissue paper layers for reliable, long-term preservation of your wedding dress.',
    category: 'Essential',
    featured: false,
    features: [
      'Acid-free cardboard construction',
      'Tissue paper layers for protection',
      'Moisture barrier technology',
      'Clear viewing window',
      'Detailed care instructions',
    ],
    image:
      'https://thedresscleaningcompany.co.uk/cdn/shop/products/wedding-dress-box-storage-wedding-dress-lean-uk_900x.jpg?v=1627313125',
    alt: 'Pearl wedding dress storage box with elegant white finish and lace trim',
  },
  {
    id: 'premium-heritage',
    icon: <Award className='w-8 h-8' />,
    title: 'Premium Heritage',
    description:
      'Museum-grade preservation with silk-lined interior and humidity control for ultimate protection.',
    category: 'Premium',
    featured: true,
    features: [
      'Museum-grade archival materials',
      'Silk-lined interior',
      'Humidity indicator cards',
      'UV protection technology',
      'Temperature-stable storage',
    ],
    image:
      'https://thedresscleaningcompany.co.uk/cdn/shop/products/wedding-dress-box-storage-wedding-dress-lean-ukpearl_grande.jpg?v=1627313125',
    alt: 'Premium pearl wedding dress storage box with detailed craftsmanship',
  },
  {
    id: 'heirloom-collection',
    icon: <Heart className='w-8 h-8' />,
    title: 'Heirloom Collection',
    description:
      'Ultimate protection with cedar-lined chest and personalization options for treasured family heirlooms.',
    category: 'Luxury',
    featured: true,
    features: [
      'Cedar-lined wooden chest',
      'Personalized brass engraving',
      'Climate control system',
      'Multi-generational guarantee',
      'White glove service',
    ],
    image:
      'https://thedresscleaningcompany.co.uk/cdn/shop/products/wedding-dress-box-storage-wedding-dress-lean-ukpearl_f8f7326e-0ab7-439d-9d95-0c0ea1e08e3f_900x.jpg?v=1627312271',
    alt: 'Luxury opal wedding dress storage box with premium presentation',
  },
];

// Additional preservation services
export const preservationServices: PreservationFeature[] = [
  {
    id: 'express-preservation',
    icon: <Clock className='w-8 h-8' />,
    title: 'Express Preservation',
    description:
      'Fast-track preservation service for urgent requirements, completed within 48 hours.',
    category: 'Express',
    featured: false,
    features: [
      '48-hour completion',
      'Priority processing',
      'Same materials as standard',
      'Express delivery included',
    ],
  },
  {
    id: 'restoration-preservation',
    icon: <Star className='w-8 h-8' />,
    title: 'Restoration & Preservation',
    description:
      'Complete restoration service followed by premium preservation for vintage or damaged dresses.',
    category: 'Specialist',
    featured: true,
    features: [
      'Expert restoration',
      'Fabric repair and reinforcement',
      'Color restoration',
      'Premium preservation included',
    ],
  },
  {
    id: 'collection-delivery',
    icon: <Truck className='w-8 h-8' />,
    title: 'Collection & Delivery',
    description:
      'Complimentary collection and delivery service within the M25 area.',
    category: 'Service',
    featured: false,
    features: [
      'Free within M25',
      'Insured transportation',
      'Flexible scheduling',
      'White glove handling',
    ],
  },
  {
    id: 'gift-vouchers',
    icon: <Gift className='w-8 h-8' />,
    title: 'Gift Vouchers',
    description:
      'Perfect wedding gift - vouchers for preservation services available in various amounts.',
    category: 'Gift',
    featured: false,
    features: [
      'Various denominations',
      'Beautiful presentation',
      '12-month validity',
      'Transferable to any service',
    ],
  },
];

// All preservation features combined
export const allPreservationFeatures: PreservationFeature[] = [
  ...preservationFeatures,
  ...preservationServices,
];

// Preservation benefit features
export const preservationBenefits: Feature[] = [
  {
    id: 'lifetime-protection',
    icon: <Shield className='w-8 h-8 md:w-10 md:h-10' />,
    title: 'Lifetime Protection',
    description:
      'Advanced preservation technology ensures your dress stays pristine for decades',
    category: 'Quality',
  },
  {
    id: 'museum-quality',
    icon: <Star className='w-8 h-8 md:w-10 md:h-10' />,
    title: 'Museum Quality',
    description:
      'Professional-grade materials used by museums and archives worldwide',
    category: 'Standards',
  },
  {
    id: 'free-delivery',
    icon: <Truck className='w-8 h-8 md:w-10 md:h-10' />,
    title: 'Free Delivery',
    description: 'Complimentary delivery and setup within the M25 area',
    category: 'Service',
  },
];

// Configuration presets for different pages
export const preservationConfigs = {
  home: {
    features: preservationFeatures,
    title: 'Premium Preservation Solutions',
    subtitle:
      'Protect your precious memories with our professional preservation services, designed to keep your wedding dress pristine for generations.',
    columns: 3,
    variant: 'default' as const,
    showCategory: true,
  },
  services: {
    features: allPreservationFeatures,
    title: 'Complete Preservation Services',
    subtitle:
      'From basic preservation to luxury heirloom collections, we offer comprehensive solutions for every need and budget.',
    columns: 4,
    variant: 'compact' as const,
    showCategory: true,
  },
  about: {
    features: preservationBenefits,
    title: 'Why Choose Our Preservation',
    subtitle:
      'Discover the benefits that make our preservation services the preferred choice for discerning couples.',
    columns: 3,
    variant: 'detailed' as const,
    showCategory: false,
  },
};
