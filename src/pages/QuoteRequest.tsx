import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  X,
  Camera,
  FileImage,
  MessageCircle,
  Phone,
} from 'lucide-react';

const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceType: '',
    urgency: 'standard',
    description: '',
    preferredContact: 'email',
  });

  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const serviceTypes = [
    { value: 'wedding-dress', label: 'Wedding Dress Cleaning' },
    { value: 'groom-suit', label: "Groom's Suit Care" },
    { value: 'wedding-shoes', label: 'Wedding Shoes' },
    { value: 'accessories', label: 'Wedding Accessories' },
    { value: 'bridesmaids', label: 'Bridesmaids Dresses' },
    { value: 'restoration', label: 'Restoration Services' },
    { value: 'multiple', label: 'Multiple Items' },
    { value: 'other', label: 'Other' },
  ];

  const urgencyOptions = [
    {
      value: 'standard',
      label: 'Standard (3-5 days)',
      price: 'Standard pricing',
    },
    { value: 'express', label: 'Express (1-2 days)', price: '+50% surcharge' },
    { value: 'same-day', label: 'Same Day Service', price: '+100% surcharge' },
  ];

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

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    const newFiles = Array.from(files).filter(
      (file) => file.type.startsWith('image/') && file.size <= 10 * 1024 * 1024 // 10MB limit
    );

    setUploadedImages((prev) => [...prev, ...newFiles].slice(0, 10)); // Max 10 images
  };

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create FormData to handle file uploads
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });

    uploadedImages.forEach((file, index) => {
      submitData.append(`image_${index}`, file);
    });

    console.log('Quote request submitted:', formData, uploadedImages);

    // Here you would typically send to your backend
    alert(
      "Quote request submitted successfully! We'll get back to you within 2 hours."
    );

    // Reset form
    setFormData({
      customerName: '',
      email: '',
      phone: '',
      serviceType: '',
      urgency: 'standard',
      description: '',
      preferredContact: 'email',
    });
    setUploadedImages([]);
  };

  const sendToWhatsApp = () => {
    const message = `Hi! I'd like to request a quote for:
Service: ${formData.serviceType}
Name: ${formData.customerName}
Phone: ${formData.phone}
Urgency: ${formData.urgency}
Description: ${formData.description}

I have ${uploadedImages.length} image(s) to share.`;

    const whatsappUrl = `https://wa.me/447123456789?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

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
              Get Your Quote
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Upload photos of your garments for an accurate quote. We'll
              respond within 2 hours with detailed pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <form
            onSubmit={handleSubmit}
            className='space-y-8'
            name='quote-request'
            method='POST'
            data-netlify='true'
            netlify-honeypot='bot-field'
          >
            {/* Hidden fields for Netlify Forms */}
            <input type='hidden' name='form-name' value='quote-request' />
            <p className='hidden'>
              <label>
                Don't fill this out if you're human: <input name='bot-field' />
              </label>
            </p>
            {/* Image Upload Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='bg-gray-50 p-8 rounded-lg'
            >
              <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                Upload Photos of Your Garments
              </h2>

              {/* Drag and Drop Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? 'border-gray-900 bg-gray-100'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className='space-y-4'>
                  <FileImage className='w-16 h-16 text-gray-400 mx-auto' />
                  <div>
                    <p className='text-lg font-medium text-gray-900 mb-2'>
                      Drag and drop your images here
                    </p>
                    <p className='text-gray-600 mb-4'>
                      or click to select files (max 10 images, 10MB each)
                    </p>
                    <motion.button
                      type='button'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={openFileSelector}
                      className='bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors'
                    >
                      <Upload className='w-5 h-5 inline mr-2' />
                      Select Images
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type='file'
                multiple
                accept='image/*'
                onChange={handleFileSelect}
                className='hidden'
              />

              {/* Image Preview Grid */}
              {uploadedImages.length > 0 && (
                <div className='mt-8'>
                  <h3 className='text-lg font-medium text-gray-900 mb-4'>
                    Uploaded Images ({uploadedImages.length}/10)
                  </h3>
                  <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {uploadedImages.map((file, index) => (
                      <div key={index} className='relative group'>
                        <div className='aspect-square bg-gray-200 rounded-lg overflow-hidden'>
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Upload ${index + 1}`}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <button
                          type='button'
                          onClick={() => removeImage(index)}
                          className='absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity'
                        >
                          <X className='w-4 h-4' />
                        </button>
                        <p className='text-xs text-gray-600 mt-1 truncate'>
                          {file.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className='bg-white border border-gray-200 p-8 rounded-lg'
            >
              <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                Your Information
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='customerName'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Full Name *
                  </label>
                  <input
                    type='text'
                    id='customerName'
                    name='customerName'
                    value={formData.customerName}
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

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Phone Number *
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors'
                    placeholder='+44 7123 456 789'
                  />
                </div>

                <div>
                  <label
                    htmlFor='preferredContact'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id='preferredContact'
                    name='preferredContact'
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors'
                  >
                    <option value='email'>Email</option>
                    <option value='phone'>Phone Call</option>
                    <option value='whatsapp'>WhatsApp</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Service Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='bg-white border border-gray-200 p-8 rounded-lg'
            >
              <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                Service Details
              </h2>

              <div className='space-y-6'>
                <div>
                  <label
                    htmlFor='serviceType'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Type of Service *
                  </label>
                  <select
                    id='serviceType'
                    name='serviceType'
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors'
                  >
                    <option value=''>Select a service</option>
                    {serviceTypes.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Urgency Level *
                  </label>
                  <div className='space-y-3'>
                    {urgencyOptions.map((option) => (
                      <label key={option.value} className='flex items-center'>
                        <input
                          type='radio'
                          name='urgency'
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={handleInputChange}
                          className='mr-3 text-gray-900 focus:ring-gray-900'
                        />
                        <div>
                          <span className='font-medium text-gray-900'>
                            {option.label}
                          </span>
                          <span className='text-sm text-gray-600 ml-2'>
                            ({option.price})
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='description'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Additional Details
                  </label>
                  <textarea
                    id='description'
                    name='description'
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none'
                    placeholder='Please describe any stains, damage, special requests, or other details that might affect the quote...'
                  />
                </div>
              </div>
            </motion.div>

            {/* Submit Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='flex flex-col sm:flex-row gap-4'
            >
              <motion.button
                type='submit'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex-1 bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2'
              >
                <Camera className='w-5 h-5' />
                <span>Submit Quote Request</span>
              </motion.button>

              <motion.button
                type='button'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={sendToWhatsApp}
                className='flex-1 bg-green-600 text-white py-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2'
              >
                <MessageCircle className='w-5 h-5' />
                <span>Send via WhatsApp</span>
              </motion.button>
            </motion.div>
          </form>

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='mt-12 text-center'
          >
            <p className='text-gray-600 mb-4'>Need immediate assistance?</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='tel:+447123456789'
                className='flex items-center justify-center space-x-2 text-gray-900 hover:text-gray-600 font-medium'
              >
                <Phone className='w-5 h-5' />
                <span>Call: +44 7123 456 789</span>
              </a>
              <a
                href='https://wa.me/447123456789'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center space-x-2 text-green-600 hover:text-green-700 font-medium'
              >
                <MessageCircle className='w-5 h-5' />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuoteRequest;
