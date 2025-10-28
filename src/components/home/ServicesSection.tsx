import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Truck, Clock } from 'lucide-react';
import { ServiceCard, type Service } from '../ui/index.ts';
import { Link } from 'react-router-dom';
import { loadServices } from '../../utils/cms.ts';
import homepageData from '../../../public/content/settings/homepage.json';

// Map icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Star: <Star className='w-5 h-5 md:w-6 md:h-6' />,
  Shield: <Shield className='w-5 h-5 md:w-6 md:h-6' />,
  Truck: <Truck className='w-5 h-5 md:w-6 md:h-6' />,
  Clock: <Clock className='w-5 h-5 md:w-6 md:h-6' />,
};

interface ServicesProps {
  title?: string;
  subtitle?: string;
  sectionClassName?: string;
  showViewAllButton?: boolean;
  columns?: 2 | 3 | 4;
  showCategory?: boolean;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'default' | 'compact' | 'detailed';
  featuredOnly?: boolean;
}

const ServicesSection = ({
  title,
  subtitle,
  sectionClassName = 'py-12 sm:py-16 md:py-20 bg-gray-50 w-full',
  showViewAllButton = true,
  columns = 4,
  showCategory = false,
  ctaText = 'View All Services',
  ctaLink = '/services',
  variant = 'default',
  featuredOnly = true,
}: ServicesProps) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  const { services: servicesConfig } = homepageData;
  const displayTitle = title || servicesConfig.title;
  const displaySubtitle = subtitle || servicesConfig.subtitle;

  useEffect(() => {
    loadServices().then((data) => {
      // Filter for featured services if needed and format with default icons
      const filtered = featuredOnly ? data.filter((s) => s.featured) : data;
      const formatted = filtered.map((service) => {
        // Assign default icon based on category
        let defaultIcon = iconMap.Star;
        if (service.category === 'Bridal') defaultIcon = iconMap.Star;
        else if (service.category === 'Formal Wear')
          defaultIcon = iconMap.Shield;
        else if (service.category === 'Accessories')
          defaultIcon = iconMap.Truck;
        else if (service.category === 'Emergency') defaultIcon = iconMap.Clock;

        return {
          ...service,
          id: service.title.toLowerCase().replace(/\s+/g, '-'),
          icon: defaultIcon,
        };
      }) as Service[];
      setServices(formatted);
      setLoading(false);
    });
  }, [featuredOnly]);

  const getGridColumns = () => {
    const columnClasses = {
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    };
    return columnClasses[columns];
  };

  if (loading) {
    return (
      <section className={sectionClassName}>
        <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12'>
          <div className='text-center py-12'>
            <p className='text-gray-600'>Loading services...</p>
          </div>
        </div>
      </section>
    );
  }

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
            {displayTitle}
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4'>
            {displaySubtitle}
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
