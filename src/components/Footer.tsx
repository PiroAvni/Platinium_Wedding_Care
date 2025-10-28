import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import contactInfo from '../../public/content/settings/contact.json';
import companyInfo from '../../public/content/settings/company.json';
import navigationData from '../../public/content/settings/navigation.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <span className='font-serif text-2xl font-bold'>
                {companyInfo.logoPrimary}
              </span>
              <span className='text-sm font-light text-gray-300'>
                {companyInfo.logoSecondary}
              </span>
            </div>
            <p className='text-gray-300 text-sm mb-4'>
              {companyInfo.description}
            </p>
            <div className='flex space-x-3'>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={`https://wa.me/${contactInfo.whatsapp}`}
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
              {navigationData.footerQuickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-semibold text-lg mb-4'>Our Services</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              {navigationData.footerServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='font-semibold text-lg mb-4'>Contact Info</h3>
            <div className='space-y-3 text-sm'>
              <div className='flex items-center space-x-2'>
                <Phone size={16} className='text-gray-400' />
                <span className='text-gray-300'>{contactInfo.phone}</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail size={16} className='text-gray-400' />
                <span className='text-gray-300'>{contactInfo.email}</span>
              </div>
              <div className='flex items-center space-x-2'>
                <MapPin size={16} className='text-gray-400' />
                <span className='text-gray-300'>{contactInfo.serviceArea}</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Clock size={16} className='text-gray-400' />
                <div className='text-gray-300'>
                  {contactInfo.businessHours.map((schedule, index) => (
                    <div key={index}>
                      {schedule.day}: {schedule.hours}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400'>
          <p>
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <p className='mt-2'>
            {companyInfo.tagline} | {contactInfo.serviceArea}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
