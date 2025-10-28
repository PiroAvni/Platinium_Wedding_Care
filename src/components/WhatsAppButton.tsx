import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import contactData from '../../public/content/settings/contact.json';

const WhatsAppButton = () => {
  const whatsappNumber = contactData.whatsapp.replace(/[^0-9]/g, '');
  const message =
    'Hello! I would like to inquire about your wedding dress cleaning services.';

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <MessageCircle size={24} />
      <span className='sr-only'>Contact us on WhatsApp</span>

      {/* Pulse animation */}
      <motion.div
        className='absolute inset-0 bg-green-500 rounded-full'
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
