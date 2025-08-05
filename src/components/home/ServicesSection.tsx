import { motion } from 'framer-motion';
import { Star, Shield, Truck, Clock } from 'lucide-react';
import { ServiceCard, type Service } from '../ui/index.ts';
import { Link } from 'react-router-dom';

interface ServicesProps {
  services?: Service[];
  title?: string;
  subtitle?: string;
  sectionClassName?: string;
  showViewAllButton?: boolean;
  columns?: 2 | 3 | 4;
  showCategory?: boolean;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'default' | 'compact' | 'detailed';
}

const defaultServices: Service[] = [
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

const ServicesSection = ({
  services = defaultServices,
  title = 'Our Services',
  subtitle = 'Comprehensive cleaning and care for all your wedding day garments and accessories.',
  sectionClassName = 'relative py-12 sm:py-16 md:py-20 bg-gray-50 w-full overflow-hidden',
  showViewAllButton = true,
  columns = 4,
  showCategory = true,
  ctaText = 'Learn More',
  ctaLink = '/quote',
  variant = 'default',
}: ServicesProps) => {
  const getGridColumns = () => {
    const columnClasses = {
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    };
    return columnClasses[columns];
  };
  return (
    <section className={sectionClassName}>
      {/* Background Images with Fade Effect */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='relative w-full h-full'>
          {/* Wedding Dress Background  */}
          <div className='w-full h-full opacity-30'>
            <img
              src='https://images.pexels.com/photos/313702/pexels-photo-313702.jpeg??auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop'
              alt='Wedding dress background'
              className='w-full h-full object-cover object-center filter grayscale'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-white/60'></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12 md:mb-16'
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3 md:mb-4'>
            {title}
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4'>
            {subtitle}
          </p>
        </motion.div>

        <div className={`grid ${getGridColumns()} gap-6 md:gap-8`}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              showCategory={showCategory}
              ctaText={ctaText}
              ctaLink={ctaLink}
              variant={variant}
            />
          ))}
        </div>

        {showViewAllButton && (
          <div className='text-center mt-8 md:mt-12'>
            <Link to='/services'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className='bg-gray-900 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium hover:bg-gray-800 transition-colors'
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
