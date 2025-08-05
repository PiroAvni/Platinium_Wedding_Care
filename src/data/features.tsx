import {
  Truck,
  Shield,
  Clock,
  Star,
  Award,
  Users,
  Heart,
  CheckCircle,
} from 'lucide-react';
import type { Feature } from '../components/ui/FeatureCard.tsx';

// Main features for the home page
export const mainFeatures: Feature[] = [
  {
    id: 'free-collection',
    icon: <Truck className='w-8 h-8' />,
    title: 'Free Collection & Delivery',
    description: 'Within M25 area - we come to you at no extra cost',
    category: 'Service',
    featured: true,
  },
  {
    id: 'expert-care',
    icon: <Shield className='w-8 h-8' />,
    title: 'Expert Care',
    description:
      'Specialized in high-end wedding garments and delicate fabrics',
    category: 'Quality',
    featured: false,
  },
  {
    id: 'express-service',
    icon: <Clock className='w-8 h-8' />,
    title: 'Express Service',
    description: 'Same-day and next-day service available for urgent requests',
    category: 'Speed',
    featured: false,
  },
  {
    id: 'quality-guarantee',
    icon: <Star className='w-8 h-8' />,
    title: 'Quality Guarantee',
    description: '100% satisfaction guarantee on all our cleaning services',
    category: 'Quality',
    featured: true,
  },
];

// Additional features for services page
export const additionalFeatures: Feature[] = [
  {
    id: 'award-winning',
    icon: <Award className='w-8 h-8' />,
    title: 'Award Winning',
    description:
      'Recognized for excellence in bridal garment care and customer service',
    category: 'Recognition',
    featured: true,
  },
  {
    id: 'experienced-team',
    icon: <Users className='w-8 h-8' />,
    title: 'Experienced Team',
    description: 'Over 20 years of experience in luxury garment cleaning',
    category: 'Experience',
    featured: false,
  },
  {
    id: 'personal-touch',
    icon: <Heart className='w-8 h-8' />,
    title: 'Personal Touch',
    description: 'Each garment receives individual attention and care',
    category: 'Service',
    featured: false,
  },
  {
    id: 'eco-friendly',
    icon: <CheckCircle className='w-8 h-8' />,
    title: 'Eco-Friendly',
    description: 'Environmentally conscious cleaning methods and materials',
    category: 'Environment',
    featured: false,
  },
];

// All features combined
export const allFeatures: Feature[] = [...mainFeatures, ...additionalFeatures];

// Feature configurations for different sections
export const featureConfigs = {
  home: {
    features: mainFeatures,
    title: 'Why Choose Platinum Wedding Care',
    subtitle:
      'We understand the sentimental value of your wedding garments and treat each piece with the utmost care and attention.',
    columns: 4,
    variant: 'default' as const,
  },
  services: {
    features: allFeatures,
    title: 'Our Commitment to Excellence',
    subtitle:
      'Discover what makes us the premier choice for wedding garment care.',
    columns: 3,
    variant: 'detailed' as const,
  },
  about: {
    features: additionalFeatures,
    title: 'What Sets Us Apart',
    subtitle:
      'Experience the difference that comes with true expertise and dedication.',
    columns: 2,
    variant: 'horizontal' as const,
  },
};
