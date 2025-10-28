import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import contactPageData from '../../public/content/settings/contact_page.json';
import contactData from '../../public/content/settings/contact.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Phone className='w-6 h-6' />,
      title: 'Phone',
      details: contactData.phone,
      description: 'Call us for immediate assistance',
      action: `tel:${contactData.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <Mail className='w-6 h-6' />,
      title: 'Email',
      details: contactData.email,
      description: 'Send us your questions anytime',
      action: `mailto:${contactData.email}`,
    },
    {
      icon: <MessageCircle className='w-6 h-6' />,
      title: 'WhatsApp',
      details: contactData.whatsapp,
      description: 'Quick response via WhatsApp',
      action: `https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, '')}`,
    },
    {
      icon: <MapPin className='w-6 h-6' />,
      title: 'Service Area',
      details: contactData.serviceArea,
      description: 'Free collection & delivery',
      action: null,
    },
  ];

  const businessHours = contactData.businessHours;

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
              {contactPageData.hero.title}
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              {contactPageData.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow'
              >
                <div className='text-gray-900 mb-4 flex justify-center'>
                  {info.icon}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {info.title}
                </h3>
                <p className='text-gray-900 font-medium mb-2'>{info.details}</p>
                <p className='text-gray-600 text-sm mb-4'>{info.description}</p>
                {info.action && (
                  <a
                    href={info.action}
                    target={
                      info.action.startsWith('http') ? '_blank' : undefined
                    }
                    rel={
                      info.action.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className='text-gray-900 hover:text-gray-600 font-medium text-sm'
                  >
                    Contact Now →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl font-serif font-bold text-gray-900 mb-6'>
                Send Us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className='space-y-6'
                name='contact'
                method='POST'
                data-netlify='true'
                netlify-honeypot='bot-field'
              >
                {/* Hidden fields for Netlify Forms */}
                <input type='hidden' name='form-name' value='contact' />
                <p className='hidden'>
                  <label>
                    Don't fill this out if you're human:{' '}
                    <input name='bot-field' />
                  </label>
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors'
                      placeholder='Your full name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors'
                      placeholder='your.email@example.com'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors'
                      placeholder='+44 7123 456 789'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Subject *
                    </label>
                    <select
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors'
                    >
                      <option value=''>Select a subject</option>
                      <option value='quote'>Request a Quote</option>
                      <option value='booking'>Book a Service</option>
                      <option value='question'>General Question</option>
                      <option value='complaint'>Complaint</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none'
                    placeholder='Tell us about your wedding garment care needs...'
                  />
                </div>

                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2'
                >
                  <Send className='w-5 h-5' />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Business Hours & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-8'
            >
              {/* Business Hours */}
              <div className='bg-gray-50 p-8 rounded-lg'>
                <div className='flex items-center mb-6'>
                  <Clock className='w-6 h-6 text-gray-900 mr-3' />
                  <h3 className='text-2xl font-semibold text-gray-900'>
                    Business Hours
                  </h3>
                </div>
                <div className='space-y-3'>
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className='flex justify-between items-center'
                    >
                      <span className='text-gray-700 font-medium'>
                        {schedule.day}
                      </span>
                      <span className='text-gray-900'>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className='mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg'>
                  <p className='text-yellow-800 text-sm'>
                    <strong>Express Service:</strong> Available 24/7 for urgent
                    requests with additional charges.
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className='bg-gray-900 text-white p-8 rounded-lg'>
                <h3 className='text-2xl font-semibold mb-6'>
                  Need Immediate Help?
                </h3>
                <div className='space-y-4'>
                  <a
                    href='tel:+447123456789'
                    className='block w-full bg-white text-gray-900 py-3 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors'
                  >
                    Call Now: +44 7123 456 789
                  </a>
                  <a
                    href={`https://wa.me/${contactData.whatsapp.replace(
                      /[^0-9]/g,
                      ''
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block w-full bg-green-600 text-white py-3 rounded-lg font-medium text-center hover:bg-green-700 transition-colors'
                  >
                    WhatsApp Us
                  </a>
                  <a
                    href='/quote'
                    className='block w-full border-2 border-white text-white py-3 rounded-lg font-medium text-center hover:bg-white hover:text-gray-900 transition-colors'
                  >
                    Get Online Quote
                  </a>
                </div>
              </div>

              {/* FAQ Link */}
              <div className='text-center'>
                <p className='text-gray-600 mb-4'>
                  Have questions about our services?
                </p>
                <a
                  href='#'
                  className='text-gray-900 hover:text-gray-600 font-medium'
                >
                  View Frequently Asked Questions →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4'>
              Our Service Area
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We provide free collection and delivery services throughout the
              M25 area. Contact us to confirm coverage in your specific
              location.
            </p>
          </motion.div>

          <div className='bg-white rounded-lg shadow-lg p-8'>
            <div className='h-96 bg-gray-200 rounded-lg flex items-center justify-center'>
              <div className='text-center text-gray-500'>
                <MapPin className='w-12 h-12 mx-auto mb-4' />
                <p className='text-lg font-medium'>Interactive Map</p>
                <p className='text-sm'>M25 Service Area Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
