import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard, Carousel, type Testimonial } from '../ui/index.ts';
import { getReviews } from '../../utils/googleReviews.ts';
import {
  allManualTestimonials,
  testimonialConfigs,
} from '../../data/testimonials.tsx';

interface TestimonialsProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
  sectionClassName?: string;
  variant?: 'default' | 'compact' | 'detailed' | 'minimal';
  showSource?: boolean;
  showDate?: boolean;
  showServiceType?: boolean;
  useGoogleReviews?: boolean;
  useCarousel?: boolean;
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  autoPlay?: boolean;
  autoPlayInterval?: number;
  maxReviews?: number;
}

const TestimonialsSection = ({
  testimonials,
  title = testimonialConfigs.home.title,
  subtitle = testimonialConfigs.home.subtitle,
  sectionClassName = 'py-12 sm:py-16 md:py-20 bg-gray-50 w-full',
  variant = 'default',
  showSource = true,
  showDate = true,
  showServiceType = false,
  useGoogleReviews = true,
  useCarousel = true,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  autoPlay = true,
  autoPlayInterval = 6000,
  maxReviews = 10,
}: TestimonialsProps) => {
  const [allTestimonials, setAllTestimonials] = useState<Testimonial[]>(
    testimonials || allManualTestimonials
  );
  const [loading, setLoading] = useState(useGoogleReviews && !testimonials);
  const [error, setError] = useState<string | null>(null);

  // Fetch Google Reviews on component mount
  useEffect(() => {
    if (useGoogleReviews && !testimonials) {
      const fetchReviews = async () => {
        try {
          setLoading(true);
          setError(null);
          const googleReviews = await getReviews();

          // Combine Google reviews with manual testimonials
          const combinedReviews = [
            ...googleReviews,
            ...allManualTestimonials,
          ].slice(0, maxReviews);

          setAllTestimonials(combinedReviews);
        } catch (err) {
          console.error('Failed to fetch reviews:', err);
          setError('Failed to load latest reviews');
          // Fallback to manual testimonials
          setAllTestimonials(allManualTestimonials.slice(0, maxReviews));
        } finally {
          setLoading(false);
        }
      };

      fetchReviews();
    }
  }, [useGoogleReviews, testimonials, maxReviews]);

  // Loading state
  if (loading) {
    return (
      <section className={sectionClassName}>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12'>
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

          <div className='flex justify-center'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900'></div>
          </div>
        </div>
      </section>
    );
  }

  const testimonialCards = allTestimonials.map((testimonial, index) => (
    <TestimonialCard
      key={testimonial.id || index}
      testimonial={testimonial}
      index={index}
      variant={variant}
      showSource={showSource}
      showDate={showDate}
      showServiceType={showServiceType}
    />
  ));

  return (
    <section className={sectionClassName}>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12'>
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
          {error && (
            <p className='text-sm text-orange-600 mt-2'>
              {error} - Showing saved testimonials
            </p>
          )}
        </motion.div>

        {useCarousel ? (
          <Carousel
            itemsPerView={itemsPerView}
            autoPlay={autoPlay}
            autoPlayInterval={autoPlayInterval}
            showDots={true}
            showArrows={true}
            gap='gap-6 md:gap-8'
            className='px-12 md:px-16'
          >
            {testimonialCards}
          </Carousel>
        ) : (
          <div
            className={`grid gap-6 md:gap-8 ${
              itemsPerView.desktop === 1
                ? 'grid-cols-1'
                : itemsPerView.desktop === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {testimonialCards}
          </div>
        )}

        {/* Reviews source attribution */}
        {useGoogleReviews && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className='text-center mt-8 md:mt-12'
          >
            <p className='text-sm text-gray-500'>
              Reviews sourced from Google, verified customer feedback, and
              social media
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
