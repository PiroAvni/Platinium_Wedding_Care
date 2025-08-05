import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Upload } from 'lucide-react';
import { Button } from '../ui/index.ts';

const HeroSection = () => {
  return (
    <section className='relative bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden w-full'>
      {/* Background Image with Fade Effect */}
      <div className='absolute inset-0 z-0'>
        <div className='w-full h-full opacity-50'>
          {/* Wedding dress background image */}
          <img
            src='https://images.pexels.com/photos/313702/pexels-photo-313702.jpeg??auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop'
            alt='Elegant wedding dress in professional cleaning setting'
            className='w-full h-full object-cover'
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement?.classList.add(
                'bg-gradient-to-br',
                'from-gray-100',
                'via-gray-50',
                'to-white'
              );
            }}
          />
        </div>
        {/* Light gradient overlay for text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-white/30'></div>
      </div>

      {/* Floating Elements - Hidden on mobile for performance */}
      <div className='hidden md:block absolute top-20 left-10 w-16 h-16 lg:w-20 lg:h-20 bg-white/30 rounded-full opacity-40 animate-float z-10'></div>
      <div
        className='hidden md:block absolute top-40 right-20 w-12 h-12 lg:w-16 lg:h-16 bg-white/40 rounded-full opacity-50 animate-float z-10'
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className='hidden lg:block absolute bottom-32 left-1/4 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full opacity-30 animate-float z-10'
        style={{ animationDelay: '4s' }}
      ></div>

      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='order-2 lg:order-1'
          >
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-gray-900 leading-tight'>
              Platinum Care for Your
              <span className='block text-gray-600'>Wedding Day</span>
            </h1>
            <p className='text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 mt-4 md:mt-6 leading-relaxed max-w-2xl'>
              Professional wedding dress cleaning and care services within the
              M25. Specializing in high-end garments with free collection and
              delivery.
            </p>

            <div className='flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8'>
              <Link to='/quote' className='flex-1 sm:flex-none'>
                <Button variant='primary' size='lg' fullWidth>
                  Get Instant Quote
                </Button>
              </Link>

              <Button
                variant='outline'
                size='lg'
                href='tel:+447123456789'
                className='flex-1 sm:flex-none'
              >
                Call Now
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative order-1 lg:order-2'
          >
            {/* Hero Image with Overlay */}
            <div className='relative rounded-xl md:rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[420px] xl:h-[500px] shadow-2xl'>
              <div className='absolute inset-0 bg-gradient-to-tr from-gray-900/60 via-gray-900/30 to-transparent z-10'></div>
              <img
                src='https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
                alt='Beautiful wedding dress ready for professional cleaning'
                className='w-full h-full object-cover'
              />

              {/* Floating Quote Card */}
              <div className='absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6 z-20'>
                <div className='bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 text-center shadow-xl border border-white/20'>
                  <Upload className='w-8 h-8 md:w-12 md:h-12 mx-auto text-gray-600 mb-2 md:mb-3' />
                  <h3 className='text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2'>
                    Quick Quote
                  </h3>
                  <p className='text-gray-600 mb-3 md:mb-4 text-xs md:text-sm'>
                    Upload photos for an instant quote
                  </p>
                  <Link to='/quote'>
                    <Button
                      variant='primary'
                      size='sm'
                      fullWidth
                      icon={<Upload className='w-4 h-4' />}
                      iconPosition='left'
                      className='shadow-lg hover:shadow-xl'
                    >
                      Upload Photos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
