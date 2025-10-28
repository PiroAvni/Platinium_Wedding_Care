import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FeatureCard, type Feature } from '../ui/index.ts';
import { loadFeatures } from '../../utils/cms.ts';
import homepageData from '../../../public/content/settings/homepage.json';
import {
  Truck,
  Shield,
  Clock,
  Star,
  Award,
  Users,
  Heart,
  CheckCircle,
  Package,
  Gift,
  Sparkles,
} from 'lucide-react';

// Map icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck className='w-8 h-8' />,
  Shield: <Shield className='w-8 h-8' />,
  Clock: <Clock className='w-8 h-8' />,
  Star: <Star className='w-8 h-8' />,
  Award: <Award className='w-8 h-8' />,
  Users: <Users className='w-8 h-8' />,
  Heart: <Heart className='w-8 h-8' />,
  CheckCircle: <CheckCircle className='w-8 h-8' />,
  Package: <Package className='w-8 h-8' />,
  Gift: <Gift className='w-8 h-8' />,
  Sparkles: <Sparkles className='w-8 h-8' />,
};

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  sectionClassName?: string;
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'compact' | 'detailed' | 'horizontal';
  showCategory?: boolean;
  animationDelay?: number;
}

const FeaturesSection = ({
  title,
  subtitle,
  sectionClassName = 'py-12 sm:py-16 md:py-20 bg-white w-full',
  columns = 4,
  variant = 'default',
  showCategory = false,
  animationDelay = 0.1,
}: FeaturesProps) => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);

  const { features: featuresConfig } = homepageData;
  const displayTitle = title || featuresConfig.title;
  const displaySubtitle = subtitle || featuresConfig.subtitle;

  useEffect(() => {
    loadFeatures().then((data) => {
      // Convert CMS features to component format
      const formattedFeatures = data.map((feature) => ({
        ...feature,
        icon: iconMap[feature.icon] || iconMap.Star,
      })) as Feature[];
      setFeatures(formattedFeatures);
      setLoading(false);
    });
  }, []);
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
            <p className='text-gray-500'>Loading features...</p>
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
