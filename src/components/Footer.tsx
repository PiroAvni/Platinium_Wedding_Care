import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <span className='font-serif text-2xl font-bold'>Platinum</span>
              <span className='text-sm font-light text-gray-300'>
                Wedding Care
              </span>
            </div>
            <p className='text-gray-300 text-sm mb-4'>
              Professional wedding dress cleaning and restoration services
              within the M25. We specialize in high-end garments with free
              collection and delivery.
            </p>
            <div className='flex space-x-3'>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href='https://wa.me/447123456789'
                className='bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors'
              >
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold text-lg mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  to='/'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to='/gallery'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to='/quote'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-semibold text-lg mb-4'>Our Services</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li>Wedding Dress Cleaning</li>
              <li>Groom's Suit Care</li>
              <li>Wedding Shoe Cleaning</li>
              <li>Accessories Care</li>
              <li>Restoration Services</li>
              <li>Emergency Express Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='font-semibold text-lg mb-4'>Contact Info</h3>
            <div className='space-y-3 text-sm'>
              <div className='flex items-center space-x-2'>
                <Phone size={16} className='text-gray-400' />
                <span className='text-gray-300'>+44 7123 456 789</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail size={16} className='text-gray-400' />
                <span className='text-gray-300'>
                  info@platinumweddingcare.co.uk
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <MapPin size={16} className='text-gray-400' />
                <span className='text-gray-300'>London, M25 Area</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Clock size={16} className='text-gray-400' />
                <span className='text-gray-300'>Mon-Sat: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400'>
          <p>
            &copy; {currentYear} Platinum Wedding Care. All rights reserved.
          </p>
          <p className='mt-2'>
            Professional wedding garment care services within the M25 | Free
            collection & delivery
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
