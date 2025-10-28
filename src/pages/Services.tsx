import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Shield, Star, Truck, Check } from 'lucide-react';
import { loadServices, type CMSService } from '../utils/cms.ts';
import servicesPageData from '../../public/content/settings/services_page.json';

const Services = () => {
  const [services, setServices] = useState<CMSService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices().then((data) => {
      setServices(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className='min-h-screen pt-16'>
        <div className='flex items-center justify-center py-20'>
          <p className='text-gray-600'>Loading services...</p>
        </div>
      </div>
    );
  }

  const additionalServices = [
    {
      icon: <Clock className='w-6 h-6' />,
      title: 'Express Service',
      description:
        'Same-day and next-day service available for urgent requests',
    },
    {
      icon: <Shield className='w-6 h-6' />,
      title: 'Insurance Coverage',
      description: 'All garments insured up to £2000 during our care',
    },
    {
      icon: <Truck className='w-6 h-6' />,
      title: 'Collection & Delivery',
      description: 'Free collection and delivery within M25 area',
    },
    {
      icon: <Star className='w-6 h-6' />,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all cleaning services',
    },
  ];

  return (
    <div className='min-h-screen pt-16'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-50 to-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <h1 className='text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6'>
              {servicesPageData.hero.title}
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              {servicesPageData.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden'
              >
                <div className='h-64 bg-gray-200 relative'>
                  <div className='absolute inset-0 flex items-center justify-center text-gray-500'>
                    {service.title} Image
                  </div>
                </div>

                <div className='p-8'>
                  <div className='flex justify-between items-start mb-4'>
                    <h3 className='text-2xl font-semibold text-gray-900'>
                      {service.title}
                    </h3>
                    <div className='text-right'>
                      <div className='text-sm text-gray-500'>
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <p className='text-gray-600 mb-6'>{service.description}</p>

                  <ul className='space-y-2 mb-6'>
                    {service.features?.map((feature: string, idx: number) => (
                      <li
                        key={idx}
                        className='flex items-center text-sm text-gray-700'
                      >
                        <Check className='w-4 h-4 text-green-600 mr-2 flex-shrink-0' />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to='/quote'>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className='w-full bg-gray-900 text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors'
                    >
                      Get Quote for This Service
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4'>
              Additional Services
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Extra services to ensure complete peace of mind for your special
              day.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center'
              >
                <div className='text-gray-900 mb-4 flex justify-center'>
                  {service.icon}
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  {service.title}
                </h3>
                <p className='text-gray-600 mb-4 text-sm'>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gray-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-serif font-bold mb-4'>
              Need a Custom Quote?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Every garment is unique. Upload photos for a personalized quote or
              speak with our experts.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/quote'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className='bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors'
                >
                  Get Custom Quote
                </motion.button>
              </Link>

              <a href='tel:+447123456789'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className='border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors'
                >
                  Call Expert
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
