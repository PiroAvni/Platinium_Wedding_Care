import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Button from './Button.tsx';

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  gap?: string;
  className?: string;
}

const Carousel = ({
  children,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'gap-6',
  className = '',
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [itemsToShow, setItemsToShow] = useState(itemsPerView.mobile);
  const intervalRef = useRef<number | null>(null);

  const totalItems = children.length;
  const maxIndex = Math.max(0, totalItems - itemsToShow);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsToShow(itemsPerView.desktop);
      } else if (width >= 768) {
        setItemsToShow(itemsPerView.tablet);
      } else {
        setItemsToShow(itemsPerView.mobile);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerView]);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && autoPlay && totalItems > itemsToShow) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, autoPlayInterval);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    isPlaying,
    autoPlay,
    autoPlayInterval,
    maxIndex,
    totalItems,
    itemsToShow,
  ]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // If there are fewer items than items to show, don't show navigation
  const showNavigation = totalItems > itemsToShow;

  return (
    <div className={`relative ${className}`}>
      {/* Auto-play control */}
      {autoPlay && showNavigation && (
        <div className='absolute top-4 right-4 z-10'>
          <Button
            variant='outline'
            size='sm'
            onClick={toggleAutoPlay}
            className='w-10 h-10 p-0 bg-white/90 backdrop-blur-sm'
          >
            {isPlaying ? (
              <Pause className='w-4 h-4' />
            ) : (
              <Play className='w-4 h-4' />
            )}
          </Button>
        </div>
      )}

      {/* Main carousel container */}
      <div className='overflow-hidden'>
        <motion.div
          className={`flex ${gap}`}
          animate={{
            x: `-${(currentIndex * 100) / itemsToShow}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          style={{
            width: `${(totalItems * 100) / itemsToShow}%`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className='flex-shrink-0'
              style={{ width: `${100 / totalItems}%` }}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation arrows */}
      {showArrows && showNavigation && (
        <>
          <button
            onClick={goToPrevious}
            className='absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-white'
            aria-label='Previous testimonials'
          >
            <ChevronLeft className='w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-900' />
          </button>
          <button
            onClick={goToNext}
            className='absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-white'
            aria-label='Next testimonials'
          >
            <ChevronRight className='w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-900' />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {showDots && showNavigation && (
        <div className='flex justify-center mt-6 md:mt-8 gap-2'>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gray-900 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      {autoPlay && isPlaying && showNavigation && (
        <div className='mt-4 w-full bg-gray-200 rounded-full h-1'>
          <motion.div
            className='bg-gray-900 h-1 rounded-full'
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: autoPlayInterval / 1000,
              ease: 'linear',
              repeat: Infinity,
            }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
