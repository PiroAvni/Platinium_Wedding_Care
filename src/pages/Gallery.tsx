import { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'wedding-dress', name: 'Wedding Dresses' },
    { id: 'groom-suit', name: "Groom's Suits" },
    { id: 'shoes', name: 'Wedding Shoes' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'before-after', name: 'Before & After' },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'wedding-dress',
      title: 'Vintage Lace Wedding Dress',
      description: 'Delicate lace cleaning and restoration',
      image: '/api/placeholder/400/600',
      beforeImage: '/api/placeholder/400/600',
      afterImage: '/api/placeholder/400/600',
    },
    {
      id: 2,
      category: 'wedding-dress',
      title: 'Modern Satin Gown',
      description: 'Stain removal and professional cleaning',
      image: '/api/placeholder/400/600',
      beforeImage: '/api/placeholder/400/600',
      afterImage: '/api/placeholder/400/600',
    },
    {
      id: 3,
      category: 'groom-suit',
      title: 'Classic Morning Suit',
      description: 'Traditional morning suit cleaning and pressing',
      image: '/api/placeholder/400/600',
      beforeImage: '/api/placeholder/400/600',
      afterImage: '/api/placeholder/400/600',
    },
    {
      id: 4,
      category: 'wedding-dress',
      title: 'Princess Ball Gown',
      description: 'Full skirt cleaning with train care',
      image: '/api/placeholder/400/600',
      beforeImage: '/api/placeholder/400/600',
      afterImage: '/api/placeholder/400/600',
    },
    {
      id: 5,
      category: 'shoes',
      title: 'Satin Wedding Shoes',
      description: 'Delicate satin cleaning and protection',
      image: '/api/placeholder/400/300',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
    },
    {
      id: 6,
      category: 'groom-suit',
      title: 'Black Tie Tuxedo',
      description: 'Formal evening wear professional care',
      image: '/api/placeholder/400/600',
      beforeImage: '/api/placeholder/400/600',
      afterImage: '/api/placeholder/400/600',
    },
    {
      id: 7,
      category: 'accessories',
      title: 'Cathedral Length Veil',
      description: 'Long veil cleaning and preservation',
      image: '/api/placeholder/400/400',
      beforeImage: '/api/placeholder/400/400',
      afterImage: '/api/placeholder/400/400',
    },
    {
      id: 8,
      category: 'wedding-dress',
      title: 'Boho Lace Dress',
      description: 'Bohemian style dress with intricate details',
      image: '/api/placeholder/400/600',
      beforeImage: '/api/placeholder/400/600',
      afterImage: '/api/placeholder/400/600',
    },
    {
      id: 9,
      category: 'shoes',
      title: 'Designer Heels',
      description: 'Luxury designer shoe cleaning',
      image: '/api/placeholder/400/300',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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
              Our Work Gallery
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              See the quality of our work and the care we put into every
              garment. From delicate lace to formal suits, we handle each piece
              with expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className='py-8 bg-white border-b border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-4'>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            layout
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group cursor-pointer'
              >
                <div className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden'>
                  <div className='aspect-w-4 aspect-h-5 relative overflow-hidden'>
                    <div className='w-full h-96 bg-gray-200 relative'>
                      <div className='absolute inset-0 flex items-center justify-center text-gray-500'>
                        {item.title}
                      </div>
                    </div>

                    {/* Overlay on hover */}
                    <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center'>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className='text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      >
                        <p className='text-lg font-semibold mb-2'>
                          View Details
                        </p>
                        <p className='text-sm'>Click to see before & after</p>
                      </motion.div>
                    </div>
                  </div>

                  <div className='p-6'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-gray-600 text-sm'>{item.description}</p>

                    <div className='mt-4 flex justify-between items-center'>
                      <span className='text-xs uppercase tracking-wide text-gray-500 font-medium'>
                        {
                          categories.find((cat) => cat.id === item.category)
                            ?.name
                        }
                      </span>
                      <button className='text-gray-900 hover:text-gray-600 text-sm font-medium'>
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className='text-center py-16'>
              <p className='text-gray-500 text-lg'>
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Before & After Section */}
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
              Before & After Results
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              See the dramatic transformations we achieve with our professional
              cleaning and restoration services.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg-white rounded-lg shadow-lg overflow-hidden'
            >
              <div className='grid grid-cols-2'>
                <div className='relative'>
                  <div className='h-64 bg-gray-300 relative'>
                    <div className='absolute inset-0 flex items-center justify-center text-gray-600'>
                      Before
                    </div>
                  </div>
                  <div className='absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium'>
                    BEFORE
                  </div>
                </div>
                <div className='relative'>
                  <div className='h-64 bg-gray-100 relative'>
                    <div className='absolute inset-0 flex items-center justify-center text-gray-600'>
                      After
                    </div>
                  </div>
                  <div className='absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium'>
                    AFTER
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  Stained Wedding Dress Restoration
                </h3>
                <p className='text-gray-600'>
                  Complete stain removal and fabric restoration bringing this
                  dress back to its original beauty.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='bg-white rounded-lg shadow-lg overflow-hidden'
            >
              <div className='grid grid-cols-2'>
                <div className='relative'>
                  <div className='h-64 bg-gray-300 relative'>
                    <div className='absolute inset-0 flex items-center justify-center text-gray-600'>
                      Before
                    </div>
                  </div>
                  <div className='absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium'>
                    BEFORE
                  </div>
                </div>
                <div className='relative'>
                  <div className='h-64 bg-gray-100 relative'>
                    <div className='absolute inset-0 flex items-center justify-center text-gray-600'>
                      After
                    </div>
                  </div>
                  <div className='absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium'>
                    AFTER
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  Vintage Groom's Suit Revival
                </h3>
                <p className='text-gray-600'>
                  Professional cleaning and pressing transformed this vintage
                  suit to look brand new.
                </p>
              </div>
            </motion.div>
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
              Ready to Transform Your Garments?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Experience the same level of care and attention for your wedding
              garments.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className='bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors'
            >
              <a href='/quote'>Start Your Quote</a>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
