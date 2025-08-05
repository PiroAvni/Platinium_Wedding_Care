import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className='bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-2'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='font-serif text-2xl font-bold text-gray-900'
            >
              Platinum
            </motion.div>
            <span className='text-sm font-light text-gray-600'>
              Wedding Care
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className='hidden md:flex items-center space-x-4'>
            <a
              href='tel:+447123456789'
              className='flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors'
            >
              <Phone size={16} />
              <span className='text-sm'>Call Now</span>
            </a>

            <Link to='/quote'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors'
              >
                Get Quote
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-600 hover:text-gray-900'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='md:hidden py-4 border-t border-gray-100'
          >
            <div className='flex flex-col space-y-4'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-gray-900 bg-gray-50'
                      : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className='flex flex-col space-y-2 pt-4 border-t border-gray-100'>
                <a
                  href='tel:+447123456789'
                  className='flex items-center space-x-2 px-3 py-2 text-gray-600'
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>

                <Link
                  to='/quote'
                  onClick={() => setIsMenuOpen(false)}
                  className='bg-gray-900 text-white px-6 py-2 rounded-full text-center text-sm font-medium mx-3'
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
