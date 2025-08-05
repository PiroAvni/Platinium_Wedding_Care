import type { Testimonial } from '../components/ui/TestimonialCard.tsx';

// Manual testimonials (high quality, detailed)
export const manualTestimonials: Testimonial[] = [
  {
    id: 'manual-1',
    name: 'Charlotte & Henry',
    location: 'Mayfair, London',
    text: 'The most professional wedding garment service in London! My 1950s vintage wedding dress required special attention due to its age and delicate French lace. The team not only cleaned it perfectly but also provided expert advice on preservation. The dress now sits beautifully in their luxury preservation box.',
    rating: 5,
    date: '2024-01-20',
    source: 'manual',
    verified: true,
    serviceType: 'Vintage Dress Restoration',
    avatar: 'C',
  },
  {
    id: 'manual-2',
    name: 'Alexander Knight',
    location: 'Canary Wharf, London',
    text: 'Exceptional service from start to finish. My bespoke Savile Row morning suit needed expert care after our countryside wedding. The attention to detail was remarkable - every button, every stitch was treated with precision. The complimentary collection and delivery service is a wonderful touch.',
    rating: 5,
    date: '2024-01-18',
    source: 'manual',
    verified: true,
    serviceType: 'Bespoke Formal Wear',
    avatar: 'A',
  },
  {
    id: 'manual-3',
    name: 'Sophia & James',
    location: 'Notting Hill, London',
    text: "We trusted them with our entire wedding party's garments - 8 bridesmaid dresses, 6 groomsmen suits, and our own outfits. Every single piece came back immaculate. Their expertise with different fabrics (silk, chiffon, wool, satin) is truly impressive. Highly recommend for large wedding parties.",
    rating: 5,
    date: '2024-01-15',
    source: 'manual',
    verified: true,
    serviceType: 'Wedding Party Package',
    avatar: 'S',
  },
];

// Social media testimonials
export const socialTestimonials: Testimonial[] = [
  {
    id: 'instagram-1',
    name: 'Victoria Rose',
    location: 'Greenwich, London',
    text: 'Just WOW! 😍 My dress had a wine stain that I thought was impossible to remove. These magicians made it disappear completely! The dress looks absolutely pristine. Thank you for saving my precious memories! 💕 #weddingdress #perfectcleaning',
    rating: 5,
    date: '2024-01-12',
    source: 'manual',
    verified: false,
    serviceType: 'Stain Removal',
    avatar: 'V',
  },
];

// Feature testimonials for specific services
export const featureTestimonials: Testimonial[] = [
  {
    id: 'feature-1',
    name: 'Dr. Margaret Stevens',
    location: 'Harley Street, London',
    text: 'As someone who values precision and quality, I was impressed by their scientific approach to garment care. They explained the cleaning process, the specific treatments for my silk dress, and provided detailed care instructions. Professional excellence.',
    rating: 5,
    date: '2024-01-08',
    source: 'manual',
    verified: true,
    serviceType: 'Scientific Cleaning',
    avatar: 'M',
  },
  {
    id: 'feature-2',
    name: 'Lord & Lady Pemberton',
    location: 'Belgravia, London',
    text: 'For our golden wedding anniversary celebration, we wanted to recreate our original wedding photos. Platinum Wedding Care restored my 50-year-old dress and his military dress uniform to their former glory. Absolutely extraordinary craftsmanship.',
    rating: 5,
    date: '2024-01-05',
    source: 'manual',
    verified: true,
    serviceType: 'Anniversary Restoration',
    avatar: 'L',
  },
];

// All manual testimonials combined
export const allManualTestimonials: Testimonial[] = [
  ...manualTestimonials,
  ...socialTestimonials,
  ...featureTestimonials,
];

// Testimonial configurations for different sections
export const testimonialConfigs = {
  home: {
    title: 'What Our Clients Say',
    subtitle: 'Trusted by hundreds of couples for their special day garments',
    itemsPerView: { mobile: 1, tablet: 2, desktop: 3 },
    variant: 'default' as const,
    showSource: true,
    showDate: true,
    autoPlay: true,
    autoPlayInterval: 6000,
  },
  services: {
    title: 'Client Testimonials',
    subtitle: 'Real experiences from our satisfied customers',
    itemsPerView: { mobile: 1, tablet: 1, desktop: 2 },
    variant: 'detailed' as const,
    showSource: true,
    showDate: true,
    showServiceType: true,
    autoPlay: false,
  },
  about: {
    title: 'Why Couples Choose Us',
    subtitle: 'Hear from our valued clients',
    itemsPerView: { mobile: 1, tablet: 2, desktop: 3 },
    variant: 'compact' as const,
    showSource: false,
    showDate: false,
    autoPlay: true,
    autoPlayInterval: 4000,
  },
  contact: {
    title: 'Recent Reviews',
    subtitle: 'See what our recent clients are saying',
    itemsPerView: { mobile: 1, tablet: 1, desktop: 1 },
    variant: 'minimal' as const,
    showSource: true,
    showDate: true,
    autoPlay: true,
    autoPlayInterval: 8000,
  },
};
