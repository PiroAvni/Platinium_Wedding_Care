import { motion } from 'framer-motion';
import { FeatureCard, type Feature } from '../ui/index.ts';
import { mainFeatures } from '../../data/features.tsx';

interface FeaturesProps {
  features?: Feature[];
  title?: string;
  subtitle?: string;
  sectionClassName?: string;
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'compact' | 'detailed' | 'horizontal';
  showCategory?: boolean;
  animationDelay?: number;
}

const FeaturesSection = ({
  features = mainFeatures,
  title = 'Why Choose Platinum Wedding Care',
  subtitle = 'We understand the sentimental value of your wedding garments and treat each piece with the utmost care and attention.',
  sectionClassName = 'py-12 sm:py-16 md:py-20 bg-white w-full',
  columns = 4,
  variant = 'default',
  showCategory = false,
  animationDelay = 0.1,
}: FeaturesProps) => {
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

        <div className={`grid ${getGridColumns()} gap-6 md:gap-8`}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id || index}
              feature={feature}
              index={index}
              variant={variant}
              showCategory={showCategory}
              animationDelay={animationDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
