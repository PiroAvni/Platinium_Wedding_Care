import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Truck } from 'lucide-react';
import { loadPreservation } from '../../utils/cms.ts';
import homepageData from '../../../public/content/settings/homepage.json';
import { Link } from 'react-router-dom';

// Map icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className='w-8 h-8' />,
  Star: <Star className='w-8 h-8' />,
  Truck: <Truck className='w-8 h-8' />,
};

interface PreservationFeature {
  id: string;
  title: string;
  description: string;
  category: string;
  price?: string;
  highlighted: boolean;
  features: string[];
  image?: string;
  icon?: React.ReactNode;
  featured?: boolean;
  alt?: string;
}

interface PreservationBoxesProps {
  preservationFeatures?: PreservationFeature[];
  title?: string;
  subtitle?: string;
  sectionClassName?: string;
  showLearnMoreButton?: boolean;
  columns?: 2 | 3 | 4;
  showCategory?: boolean;
}

const PreservationBoxesSection = ({
  preservationFeatures,
  title,
  subtitle,
  sectionClassName = 'py-12 sm:py-16 md:py-20 bg-white w-full',
  showLearnMoreButton = true,
  columns = 3,
  showCategory = true,
}: PreservationBoxesProps) => {
  const [features, setFeatures] = useState<PreservationFeature[]>([]);
  const [loading, setLoading] = useState(true);

  const { preservation: preservationConfig } = homepageData;
  const displayTitle = title || preservationConfig.title;
  const displaySubtitle = subtitle || preservationConfig.subtitle;

  useEffect(() => {
    if (preservationFeatures) {
      setFeatures(preservationFeatures);
      setLoading(false);
    } else {
      loadPreservation().then((data) => {
        const formatted = data.map((item) => ({
          ...item,
          id: item.title.toLowerCase().replace(/\s+/g, '-'),
          featured: item.highlighted,
          icon: iconMap[item.category] || iconMap.Star,
        }));
        setFeatures(formatted);
        setLoading(false);
      });
    }
  }, [preservationFeatures]);

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
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12'>
          <div className='text-center py-12'>
            <p className='text-gray-600'>Loading preservation packages...</p>
          </div>
        </div>
      </section>
    );
  }

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
            {displayTitle}
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4'>
            {displaySubtitle}
          </p>
        </motion.div>

        {/* Preservation Features Grid */}
        <div className={`grid ${getGridColumns()} gap-6 md:gap-8`}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100
                ${
                  feature.featured ? 'ring-2 ring-gray-200 ring-opacity-50' : ''
                }
              `}
            >
              {/* Feature Image */}
              {feature.image && (
                <div className='relative h-48 sm:h-52 md:h-56 overflow-hidden'>
                  <img
                    src={feature.image}
                    alt={feature.alt || feature.title}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'></div>

                  {/* Category Badge */}
                  {showCategory && feature.category && (
                    <div className='absolute top-3 left-3'>
                      <span className='bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700'>
                        {feature.category}
                      </span>
                    </div>
                  )}

                  {/* Featured Badge */}
                  {feature.featured && (
                    <div className='absolute top-3 right-3'>
                      <span className='bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-medium'>
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Feature Content */}
              <div className='p-4 md:p-6'>
                {/* Icon and Title */}
                <div className='flex items-center mb-3'>
                  <div className='text-gray-900 mr-3'>{feature.icon}</div>
                  <h3 className='text-lg md:text-xl font-semibold text-gray-900'>
                    {feature.title}
                  </h3>
                </div>

                <p className='text-sm md:text-base text-gray-600 mb-4 leading-relaxed'>
                  {feature.description}
                </p>

                {/* Feature List */}
                {feature.features && feature.features.length > 0 && (
                  <div className='space-y-2 mb-4'>
                    {feature.features.map((featureItem, featureIndex) => (
                      <div
                        key={featureIndex}
                        className='flex items-center text-sm text-gray-600'
                      >
                        <div className='w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0'></div>
                        {featureItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='mt-12 md:mt-16 bg-gray-50 rounded-2xl p-6 md:p-8'
        >
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center'>
            <div>
              <Shield className='w-8 h-8 md:w-10 md:h-10 mx-auto text-gray-900 mb-3' />
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                Lifetime Protection
              </h4>
              <p className='text-sm text-gray-600'>
                Advanced preservation technology ensures your dress stays
                pristine for decades
              </p>
            </div>
            <div>
              <Star className='w-8 h-8 md:w-10 md:h-10 mx-auto text-gray-900 mb-3' />
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                Museum Quality
              </h4>
              <p className='text-sm text-gray-600'>
                Professional-grade materials used by museums and archives
                worldwide
              </p>
            </div>
            <div>
              <Truck className='w-8 h-8 md:w-10 md:h-10 mx-auto text-gray-900 mb-3' />
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                Free Delivery
              </h4>
              <p className='text-sm text-gray-600'>
                Complimentary delivery and setup within the M25 area
              </p>
            </div>
          </div>
        </motion.div>

        {showLearnMoreButton && (
          <div className='text-center mt-8 md:mt-12'>
            <Link to='/services'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className='bg-gray-900 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium hover:bg-gray-800 transition-colors'
              >
                Learn More About Preservation
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PreservationBoxesSection;
