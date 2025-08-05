import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Button } from '../ui/index.ts';

export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon?: ReactNode;
  category?: string;
  featured?: boolean;
  link?: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  showCategory?: boolean;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'default' | 'compact' | 'detailed';
}

const ServiceCard = ({
  service,
  index,
  showCategory = true,
  ctaText = 'Learn More',
  ctaLink = '/quote',
  variant = 'default',
}: ServiceCardProps) => {
  const handleCardClick = () => {
    if (service.link) {
      window.location.href = service.link;
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'compact':
        return {
          container:
            'bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer',
          imageHeight: 'h-32 sm:h-36',
          padding: 'p-3 md:p-4',
          titleSize: 'text-base md:text-lg',
          descriptionSize: 'text-xs md:text-sm',
        };
      case 'detailed':
        return {
          container:
            'bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer',
          imageHeight: 'h-56 sm:h-60 md:h-64',
          padding: 'p-6 md:p-8',
          titleSize: 'text-xl md:text-2xl',
          descriptionSize: 'text-base md:text-lg',
        };
      default:
        return {
          container:
            'bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer',
          imageHeight: 'h-48 sm:h-52 md:h-56',
          padding: 'p-4 md:p-6',
          titleSize: 'text-lg md:text-xl',
          descriptionSize: 'text-sm md:text-base',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`
        ${styles.container}
        ${service.featured ? 'ring-2 ring-gray-200 ring-opacity-50' : ''}
      `}
      onClick={handleCardClick}
    >
      {/* Service Image/Icon Section */}
      <div className={`relative ${styles.imageHeight} overflow-hidden`}>
        {service.image ? (
          <motion.img
            src={service.image}
            alt={service.title}
            className='w-full h-full object-cover transition-transform duration-300'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        ) : (
          <motion.div
            className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center transition-transform duration-300'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className='text-center text-gray-500'>
              <motion.div
                className='w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gray-300 rounded-lg flex items-center justify-center'
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <p className='text-sm md:text-base font-medium px-2'>
                {service.title}
              </p>
            </div>
          </motion.div>
        )}

        {/* Category Badge */}
        {showCategory && service.category && (
          <div className='absolute top-3 left-3'>
            <span className='bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700'>
              {service.category}
            </span>
          </div>
        )}

        {/* Featured Badge */}
        {service.featured && (
          <div className='absolute top-3 right-3'>
            <span className='bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-medium'>
              Featured
            </span>
          </div>
        )}

        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>

      {/* Service Content */}
      <div className={styles.padding}>
        <motion.h3
          className={`${styles.titleSize} font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors`}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {service.title}
        </motion.h3>
        <motion.p
          className={`${styles.descriptionSize} text-gray-600 mb-4 leading-relaxed`}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          {service.description}
        </motion.p>

        {/* CTA Section */}
        <div className='flex justify-end'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant='outline'
              size='sm'
              href={service.link || ctaLink}
              className='text-sm group-hover:bg-gray-900 group-hover:text-white transition-all duration-300'
            >
              {ctaText} →
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
