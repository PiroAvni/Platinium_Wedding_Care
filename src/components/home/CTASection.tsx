import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Upload, MessageCircle } from 'lucide-react';
import homepageData from '../../../public/content/settings/homepage.json';
import contactData from '../../../public/content/settings/contact.json';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  sectionClassName?: string;
}

const CTASection = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  sectionClassName = 'py-12 sm:py-16 md:py-20 bg-gray-900 text-white w-full',
}: CTAProps) => {
  const { finalCTA } = homepageData;

  const displayTitle = title || finalCTA.title;
  const displaySubtitle = subtitle || finalCTA.subtitle;
  const displayPrimaryButton = primaryButtonText || finalCTA.primaryButton;
  const displaySecondaryButton =
    secondaryButtonText || finalCTA.secondaryButton;
  const displayPrimaryLink = primaryButtonLink || '/quote';
  const displaySecondaryLink =
    secondaryButtonLink ||
    `https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <section className={sectionClassName}>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 md:mb-4'>
            {displayTitle}
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4'>
            {displaySubtitle}
          </p>

          <div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-lg mx-auto'>
            <Link to={displayPrimaryLink} className='flex-1 sm:flex-none'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className='bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto min-w-[180px] flex items-center justify-center'
              >
                <Upload className='w-4 h-4 md:w-5 md:h-5 mr-2' />
                {displayPrimaryButton}
              </motion.button>
            </Link>

            <a href={displaySecondaryLink} className='flex-1 sm:flex-none'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className='border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors w-full sm:w-auto min-w-[160px] flex items-center justify-center'
              >
                <MessageCircle className='w-4 h-4 md:w-5 md:h-5 mr-2' />
                {displaySecondaryButton}
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
