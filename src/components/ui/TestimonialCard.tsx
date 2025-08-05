import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';

export interface Testimonial {
  id?: string;
  name: string;
  location?: string;
  text: string;
  rating: number;
  avatar?: string;
  image?: string;
  date?: string;
  source?: 'google' | 'manual' | 'facebook' | 'trustpilot';
  sourceUrl?: string;
  verified?: boolean;
  serviceType?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  variant?: 'default' | 'compact' | 'detailed' | 'minimal';
  showSource?: boolean;
  showDate?: boolean;
  showServiceType?: boolean;
  animationDelay?: number;
  onClick?: () => void;
}

const TestimonialCard = ({
  testimonial,
  index,
  variant = 'default',
  showSource = true,
  showDate = true,
  showServiceType = false,
  animationDelay = 0.2,
  onClick,
}: TestimonialCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'compact':
        return {
          container:
            'bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300',
          avatarSize: 'w-8 h-8',
          textSize: 'text-xs md:text-sm',
          nameSize: 'text-xs md:text-sm',
          locationSize: 'text-xs',
          starSize: 'w-3 h-3',
          spacing: 'mb-2',
        };
      case 'detailed':
        return {
          container:
            'bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300',
          avatarSize: 'w-14 h-14 md:w-16 md:h-16',
          textSize: 'text-sm md:text-lg',
          nameSize: 'text-base md:text-lg',
          locationSize: 'text-sm md:text-base',
          starSize: 'w-5 h-5 md:w-6 md:h-6',
          spacing: 'mb-4 md:mb-6',
        };
      case 'minimal':
        return {
          container:
            'bg-transparent p-4 border-l-4 border-gray-200 hover:border-gray-400 transition-all duration-300',
          avatarSize: 'w-10 h-10',
          textSize: 'text-sm md:text-base',
          nameSize: 'text-sm md:text-base',
          locationSize: 'text-xs md:text-sm',
          starSize: 'w-4 h-4',
          spacing: 'mb-3',
        };
      default:
        return {
          container:
            'bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300',
          avatarSize: 'w-10 h-10 md:w-12 md:h-12',
          textSize: 'text-sm md:text-base',
          nameSize: 'text-sm md:text-base',
          locationSize: 'text-xs md:text-sm',
          starSize: 'w-4 h-4 md:w-5 md:h-5',
          spacing: 'mb-4',
        };
    }
  };

  const getSourceIcon = () => {
    switch (testimonial.source) {
      case 'google':
        return (
          <div className='flex items-center gap-1 text-xs text-gray-500'>
            <span className='font-medium text-blue-600'>Google</span>
            {testimonial.verified && <span className='text-green-600'>✓</span>}
          </div>
        );
      case 'facebook':
        return (
          <div className='flex items-center gap-1 text-xs text-gray-500'>
            <span className='font-medium text-blue-700'>Facebook</span>
          </div>
        );
      case 'trustpilot':
        return (
          <div className='flex items-center gap-1 text-xs text-gray-500'>
            <span className='font-medium text-green-600'>Trustpilot</span>
          </div>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const styles = getVariantStyles();

  const renderAvatar = () => {
    if (testimonial.image) {
      return (
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className={`${styles.avatarSize} rounded-full object-cover`}
        />
      );
    }

    const initials =
      testimonial.avatar ||
      testimonial.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
      <div
        className={`${styles.avatarSize} bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold ${styles.textSize}`}
      >
        {initials}
      </div>
    );
  };

  const renderStars = () => {
    return (
      <div className='flex items-center gap-1'>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${styles.starSize} ${
              i < testimonial.rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className='ml-1 text-xs text-gray-500'>
          ({testimonial.rating}/5)
        </span>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * animationDelay }}
      viewport={{ once: true }}
      className={`${styles.container} ${onClick ? 'cursor-pointer' : ''} group`}
      onClick={onClick}
    >
      {/* Header with source and date */}
      {(showSource || showDate) && (
        <div className='flex justify-between items-start mb-3'>
          {showSource && getSourceIcon()}
          {showDate && testimonial.date && (
            <span className='text-xs text-gray-400'>
              {formatDate(testimonial.date)}
            </span>
          )}
        </div>
      )}

      {/* Quote icon for detailed variant */}
      {variant === 'detailed' && (
        <div className='flex justify-center mb-4'>
          <Quote className='w-8 h-8 text-gray-300' />
        </div>
      )}

      {/* User info */}
      <div className={`flex items-center ${styles.spacing}`}>
        {renderAvatar()}
        <div className='ml-3 md:ml-4 flex-1'>
          <div className='flex items-center gap-2'>
            <h4 className={`${styles.nameSize} font-semibold text-gray-900`}>
              {testimonial.name}
            </h4>
            {testimonial.verified && variant !== 'compact' && (
              <span className='text-green-600 text-xs'>✓ Verified</span>
            )}
          </div>
          {testimonial.location && (
            <p className={`${styles.locationSize} text-gray-500`}>
              {testimonial.location}
            </p>
          )}
          {showServiceType && testimonial.serviceType && (
            <p className='text-xs text-blue-600 font-medium'>
              {testimonial.serviceType}
            </p>
          )}
        </div>
      </div>

      {/* Rating */}
      <div className={styles.spacing}>{renderStars()}</div>

      {/* Review text */}
      <p className={`${styles.textSize} text-gray-600 leading-relaxed`}>
        "{testimonial.text}"
      </p>

      {/* Source link */}
      {testimonial.sourceUrl && showSource && (
        <div className='mt-3 flex justify-end'>
          <a
            href={testimonial.sourceUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 group-hover:text-blue-600 transition-colors'
            onClick={(e) => e.stopPropagation()}
          >
            View on {testimonial.source}
            <ExternalLink className='w-3 h-3' />
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default TestimonialCard;
