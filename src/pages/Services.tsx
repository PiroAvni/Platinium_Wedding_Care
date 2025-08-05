import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Shield, Star, Truck, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'wedding-dress',
      name: 'Wedding Dress Cleaning',
      description:
        'Professional cleaning and preservation of your precious wedding dress',
      price: 'From £89',
      duration: '3-5 days',
      features: [
        'Stain removal (food, makeup, grass, etc.)',
        'Delicate fabric care',
        'Professional pressing',
        'Optional preservation boxing',
        'Free collection & delivery',
        'Insurance coverage up to £2000',
      ],
      image: '/api/placeholder/600/400',
    },
    {
      id: 'groom-suit',
      name: "Groom's Suit Care",
      description:
        'Expert cleaning and pressing for morning suits, tuxedos, and formal wear',
      price: 'From £45',
      duration: '2-3 days',
      features: [
        'Professional dry cleaning',
        'Expert pressing',
        'Minor alterations available',
        'Waistcoat and accessories included',
        'Same-day service available',
        'Free collection & delivery',
      ],
      image: '/api/placeholder/600/400',
    },
    {
      id: 'wedding-shoes',
      name: 'Wedding Shoe Cleaning',
      description:
        'Specialized cleaning for satin, leather, and delicate shoe materials',
      price: 'From £25',
      duration: '1-2 days',
      features: [
        'Satin and silk shoe cleaning',
        'Leather restoration',
        'Stain removal',
        'Sole cleaning and protection',
        'Express service available',
        'Free collection & delivery',
      ],
      image: '/api/placeholder/600/400',
    },
    {
      id: 'accessories',
      name: 'Wedding Accessories',
      description:
        'Careful cleaning of veils, gloves, ties, and other wedding accessories',
      price: 'From £15',
      duration: '1-2 days',
      features: [
        'Veil cleaning and pressing',
        'Glove cleaning',
        'Tie and cufflink care',
        'Handbag cleaning',
        'Jewelry cleaning service',
        'Free collection & delivery',
      ],
      image: '/api/placeholder/600/400',
    },
    {
      id: 'bridesmaids',
      name: 'Bridesmaids Dresses',
      description:
        'Group cleaning services for bridesmaids dresses with special rates',
      price: 'From £35 each',
      duration: '2-3 days',
      features: [
        'Group discounts available',
        'Color-safe cleaning',
        'Professional pressing',
        'Multiple pickup locations',
        'Coordinated delivery',
        'Free collection & delivery',
      ],
      image: '/api/placeholder/600/400',
    },
    {
      id: 'restoration',
      name: 'Restoration Services',
      description:
        'Expert restoration for vintage and damaged wedding garments',
      price: 'Quote on request',
      duration: '1-2 weeks',
      features: [
        'Vintage dress restoration',
        'Tear and hole repair',
        'Bead and sequin replacement',
        'Lace repair',
        'Color restoration',
        'Consultation included',
      ],
      image: '/api/placeholder/600/400',
    },
  ];

  const additionalServices = [
    {
      icon: <Clock className='w-6 h-6' />,
      title: 'Express Service',
      description:
        'Same-day and next-day service available for urgent requests',
      price: '+50% surcharge',
    },
    {
      icon: <Shield className='w-6 h-6' />,
      title: 'Insurance Coverage',
      description: 'All garments insured up to £2000 during our care',
      price: 'Included',
    },
    {
      icon: <Truck className='w-6 h-6' />,
      title: 'Collection & Delivery',
      description: 'Free collection and delivery within M25 area',
      price: 'Free',
    },
    {
      icon: <Star className='w-6 h-6' />,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all cleaning services',
      price: 'Included',
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
              Our Services
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive cleaning and care services for all your wedding
              garments. Professional, reliable, and trusted by couples across
              London.
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
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden'
              >
                <div className='h-64 bg-gray-200 relative'>
                  <div className='absolute inset-0 flex items-center justify-center text-gray-500'>
                    {service.name} Image
                  </div>
                </div>

                <div className='p-8'>
                  <div className='flex justify-between items-start mb-4'>
                    <h3 className='text-2xl font-semibold text-gray-900'>
                      {service.name}
                    </h3>
                    <div className='text-right'>
                      <div className='text-2xl font-bold text-gray-900'>
                        {service.price}
                      </div>
                      <div className='text-sm text-gray-500'>
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <p className='text-gray-600 mb-6'>{service.description}</p>

                  <ul className='space-y-2 mb-6'>
                    {service.features.map((feature, idx) => (
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
                <div className='text-lg font-semibold text-gray-900'>
                  {service.price}
                </div>
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
