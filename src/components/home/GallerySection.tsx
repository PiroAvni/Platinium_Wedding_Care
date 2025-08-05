import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Truck, Shield, Clock } from 'lucide-react';

interface GalleryItem {
  title: string;
  subtitle: string;
}

interface GalleryProps {
  title?: string;
  subtitle?: string;
  sectionClassName?: string;
  showViewGalleryButton?: boolean;
}

const defaultGalleryItems: GalleryItem[] = [
  { title: 'Bridal Shoes', subtitle: 'Satin Care' },
  { title: 'Wedding Veil', subtitle: 'Delicate Cleaning' },
  { title: 'Groom Suit', subtitle: 'Expert Pressing' },
  { title: 'Accessories', subtitle: 'Complete Care' },
  { title: 'Preservation', subtitle: 'Long-term Storage' },
  { title: 'Express Service', subtitle: 'Same Day' },
];

const GallerySection = ({
  title = 'Our Work Gallery',
  subtitle = 'See the beautiful results of our professional cleaning and care services',
  sectionClassName = 'py-12 sm:py-16 md:py-20 bg-white w-full',
  showViewGalleryButton = true,
}: GalleryProps) => {
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

        {/* Modern Grid Gallery */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4'>
          {/* Large featured image - responsive layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='col-span-2 row-span-2 relative group cursor-pointer'
          >
            <div className='w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl md:rounded-2xl overflow-hidden'>
              <div className='w-full h-full flex items-center justify-center text-gray-500'>
                <div className='text-center px-4'>
                  <div className='w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 bg-gray-300 rounded-xl flex items-center justify-center'>
                    <Star className='w-6 h-6 md:w-8 md:h-8' />
                  </div>
                  <p className='text-xs md:text-sm font-medium'>
                    Featured Wedding Dress
                  </p>
                  <p className='text-xs text-gray-400'>Before & After</p>
                </div>
              </div>
            </div>
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl'></div>
            <div className='absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <p className='text-sm md:text-base font-semibold'>
                Premium Cleaning
              </p>
              <p className='text-xs md:text-sm text-gray-200'>
                Vintage Lace Restoration
              </p>
            </div>
          </motion.div>

          {/* Smaller gallery images */}
          {defaultGalleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='relative group cursor-pointer'
            >
              <div className='w-full h-32 sm:h-36 md:h-40 lg:h-44 bg-gradient-to-br from-gray-50 to-gray-150 rounded-lg md:rounded-xl overflow-hidden'>
                <div className='w-full h-full flex items-center justify-center text-gray-500 group-hover:scale-105 transition-transform duration-300'>
                  <div className='text-center px-2'>
                    <div className='w-6 h-6 md:w-8 md:h-8 mx-auto mb-1 md:mb-2 bg-gray-300 rounded-lg flex items-center justify-center'>
                      {index % 4 === 0 && (
                        <Truck className='w-3 h-3 md:w-4 md:h-4' />
                      )}
                      {index % 4 === 1 && (
                        <Shield className='w-3 h-3 md:w-4 md:h-4' />
                      )}
                      {index % 4 === 2 && (
                        <Clock className='w-3 h-3 md:w-4 md:h-4' />
                      )}
                      {index % 4 === 3 && (
                        <Star className='w-3 h-3 md:w-4 md:h-4' />
                      )}
                    </div>
                    <p className='text-xs font-medium'>{item.title}</p>
                  </div>
                </div>
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg md:rounded-xl'></div>
              <div className='absolute bottom-1 md:bottom-2 left-1 md:left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <p className='text-xs font-semibold'>{item.title}</p>
                <p className='text-xs text-gray-200'>{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery CTA */}
        {showViewGalleryButton && (
          <div className='text-center mt-8 md:mt-12'>
            <Link to='/gallery'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className='bg-gray-900 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium hover:bg-gray-800 transition-colors'
              >
                View Full Gallery
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
