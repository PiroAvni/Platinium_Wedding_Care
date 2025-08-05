import {
  Star,
  Shield,
  Truck,
  Clock,
  Sparkles,
  Heart,
  Award,
} from 'lucide-react';
import type { Service } from '../components/ui/index.ts';

// Main services for the homepage
export const mainServices: Service[] = [
  {
    id: 'wedding-dress-cleaning',
    title: 'Wedding Dress Cleaning',
    description:
      'Professional cleaning and preservation of your precious wedding dress using specialized techniques for delicate fabrics.',
    icon: <Star className='w-5 h-5 md:w-6 md:h-6' />,
    category: 'Bridal',
    featured: true,
    link: '/services/wedding-dress',
  },
  {
    id: 'groom-suit-care',
    title: "Groom's Suit Care",
    description:
      'Expert cleaning and pressing for morning suits, tuxedos, and formal wear with attention to detail.',
    icon: <Shield className='w-5 h-5 md:w-6 md:h-6' />,
    category: 'Formal Wear',
    featured: false,
    link: '/services/suits',
  },
  {
    id: 'wedding-shoes',
    title: 'Wedding Shoes',
    description:
      'Specialized cleaning for satin, leather, and delicate shoe materials with color restoration.',
    icon: <Truck className='w-5 h-5 md:w-6 md:h-6' />,
    category: 'Accessories',
    featured: false,
    link: '/services/shoes',
  },
  {
    id: 'accessories',
    title: 'Wedding Accessories',
    description:
      'Veils, gloves, handbags, and other wedding accessories carefully cleaned and preserved.',
    icon: <Clock className='w-5 h-5 md:w-6 md:h-6' />,
    category: 'Accessories',
    featured: false,
    link: '/services/accessories',
  },
];

// Extended services for the services page
export const allServices: Service[] = [
  ...mainServices,
  {
    id: 'preservation-services',
    title: 'Dress Preservation',
    description:
      'Museum-quality preservation services to keep your wedding dress beautiful for generations.',
    icon: <Sparkles className='w-5 h-5 md:w-6 md:h-6' />,
    category: 'Preservation',
    featured: true,
    link: '/services/preservation',
  },
  {
    id: 'emergency-cleaning',
    title: 'Emergency Cleaning',
    description:
      'Same-day and urgent cleaning services for last-minute stains and accidents.',
    icon: <Heart className='w-5 h-5 md:w-6 md:h-6' />,
    category: 'Emergency',
    featured: false,
    link: '/services/emergency',
  },
  {
    id: 'restoration',
    title: 'Vintage Restoration',
    description:
      'Specialized restoration services for vintage and heirloom wedding garments.',
    icon: <Award className='w-5 h-5 md:w-6 md:h-6' />,
    category: 'Restoration',
    featured: false,
    link: '/services/restoration',
  },
];

// Service categories for filtering
export const serviceCategories = [
  'All Services',
  'Bridal',
  'Formal Wear',
  'Accessories',
  'Preservation',
  'Emergency',
  'Restoration',
];

// Service configurations for different pages
export const serviceConfigs = {
  homepage: {
    services: mainServices,
    title: 'Our Services',
    subtitle:
      'Comprehensive cleaning and care for all your wedding day garments and accessories.',
    columns: 4 as const,
    variant: 'default' as const,
  },
  servicesPage: {
    services: allServices,
    title: 'Complete Service Portfolio',
    subtitle:
      'From emergency cleaning to long-term preservation, we offer comprehensive care for all your special garments.',
    columns: 3 as const,
    variant: 'detailed' as const,
  },
  compactView: {
    services: mainServices.slice(0, 3),
    title: 'Popular Services',
    subtitle: 'Our most requested cleaning services.',
    columns: 3 as const,
    variant: 'compact' as const,
  },
};
