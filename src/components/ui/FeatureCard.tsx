import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export interface Feature {
  id?: string;
  icon: ReactNode;
  title: string;
  description: string;
  category?: string;
  featured?: boolean;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  variant?: 'default' | 'compact' | 'detailed' | 'horizontal';
  showCategory?: boolean;
  animationDelay?: number;
}

const FeatureCard = ({
  feature,
  index,
  variant = 'default',
  showCategory = false,
  animationDelay = 0.1,
}: FeatureCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'compact':
        return {
          container:
            'text-center p-3 md:p-4 rounded-lg hover:shadow-md transition-all duration-300 bg-white border border-gray-100',
          iconContainer: 'text-gray-900 mb-2 md:mb-3 flex justify-center',
          iconSize: 'w-6 h-6 md:w-7 md:h-7',
          titleSize: 'text-base md:text-lg',
          descriptionSize: 'text-xs md:text-sm',
          spacing: 'mb-1 md:mb-2',
        };
      case 'detailed':
        return {
          container:
            'text-center p-6 md:p-8 rounded-xl hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 shadow-sm',
          iconContainer: 'text-gray-900 mb-4 md:mb-6 flex justify-center',
          iconSize: 'w-10 h-10 md:w-12 md:h-12',
          titleSize: 'text-xl md:text-2xl',
          descriptionSize: 'text-base md:text-lg',
          spacing: 'mb-3 md:mb-4',
        };
      case 'horizontal':
        return {
          container:
            'flex items-start p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300 bg-white border border-gray-100',
          iconContainer: 'text-gray-900 mr-4 flex-shrink-0',
          iconSize: 'w-8 h-8 md:w-9 md:h-9',
          titleSize: 'text-lg md:text-xl',
          descriptionSize: 'text-sm md:text-base',
          spacing: 'mb-2',
        };
      default:
        return {
          container:
            'text-center p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300 bg-white border border-gray-100',
          iconContainer: 'text-gray-900 mb-3 md:mb-4 flex justify-center',
          iconSize: 'w-8 h-8 md:w-9 md:h-9',
          titleSize: 'text-lg md:text-xl',
          descriptionSize: 'text-sm md:text-base',
          spacing: 'mb-2',
        };
    }
  };

  const styles = getVariantStyles();

  // Clone the icon with proper size classes
  const renderIcon = () => {
    if (!feature.icon) return null;

    // If it's a React element, clone it with the size class
    if (typeof feature.icon === 'object' && 'type' in feature.icon) {
      return <div className={styles.iconSize}>{feature.icon}</div>;
    }

    return feature.icon;
  };

  if (variant === 'horizontal') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: index * animationDelay }}
        viewport={{ once: true }}
        className={`
          ${styles.container}
          ${feature.featured ? 'ring-2 ring-gray-200 ring-opacity-50' : ''}
        `}
      >
        <div className={styles.iconContainer}>{renderIcon()}</div>
        <div className='flex-1'>
          {showCategory && feature.category && (
            <span className='inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium mb-2'>
              {feature.category}
            </span>
          )}
          {feature.featured && (
            <span className='inline-block bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-medium mb-2 ml-2'>
              Featured
            </span>
          )}
          <h3
            className={`${styles.titleSize} font-semibold text-gray-900 ${styles.spacing}`}
          >
            {feature.title}
          </h3>
          <p
            className={`${styles.descriptionSize} text-gray-600 leading-relaxed`}
          >
            {feature.description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * animationDelay }}
      viewport={{ once: true }}
      className={`
        ${styles.container}
        ${feature.featured ? 'ring-2 ring-gray-200 ring-opacity-50' : ''}
      `}
    >
      {/* Category and Featured Badges */}
      {(showCategory && feature.category) || feature.featured ? (
        <div className='flex justify-center gap-2 mb-3'>
          {showCategory && feature.category && (
            <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium'>
              {feature.category}
            </span>
          )}
          {feature.featured && (
            <span className='bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-medium'>
              Featured
            </span>
          )}
        </div>
      ) : null}

      <div className={styles.iconContainer}>{renderIcon()}</div>
      <h3
        className={`${styles.titleSize} font-semibold text-gray-900 ${styles.spacing}`}
      >
        {feature.title}
      </h3>
      <p className={`${styles.descriptionSize} text-gray-600 leading-relaxed`}>
        {feature.description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
