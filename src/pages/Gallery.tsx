import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import galleryPageData from '../../public/content/settings/gallery_page.json';
import { loadGalleryItems, type CMSGalleryItem } from '../utils/cms';

interface Category {
  id: string;
  name: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [galleryItems, setGalleryItems] = useState<CMSGalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const items = await loadGalleryItems();
        setGalleryItems(items);
      } catch {
        setGalleryItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  const cmsCategories: Category[] = galleryPageData.categories;

  const detectedCategories: Category[] = Array.from(
    new Set(galleryItems.map((item) => item.category))
  ).map((cat) => ({
    id: cat,
    name:
      cmsCategories.find((c) => c.id === cat)?.name ||
      cat
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
  }));

  const allCategory: Category = { id: 'all', name: 'All' };
  const categories: Category[] = [
    allCategory,
    ...cmsCategories.filter((cat) => cat.id !== 'all'),
    ...detectedCategories.filter(
      (det) => !cmsCategories.some((cms) => cms.id === det.id)
    ),
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const getCategoryCount = (categoryId: string): number => {
    if (categoryId === 'all') return galleryItems.length;
    return galleryItems.filter((item) => item.category === categoryId).length;
  };

  const getCategoryName = (categoryId: string): string => {
    return categories.find((cat) => cat.id === categoryId)?.name || categoryId;
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              {galleryPageData.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {galleryPageData.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
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
                {category.name} ({getCategoryCount(category.id)})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-900 border-r-transparent" />
              <p className="text-gray-600 mt-4">Loading gallery...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No items found in this category.</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.category}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="aspect-w-4 aspect-h-5 relative overflow-hidden">
                      <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 relative">
                        <img
                          src={item.afterImage}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center px-4">
                            <p className="text-lg font-semibold mb-2">
                              View Before & After
                            </p>
                            <p className="text-sm">Click to see transformation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-white relative z-10">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title || 'Untitled'}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {item.description || 'No description available'}
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                          {getCategoryName(item.category)}
                        </span>
                        <button className="text-gray-900 hover:text-gray-700 text-sm font-semibold underline">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Before & After Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic transformations we achieve with our professional
              cleaning and restoration services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="h-64 bg-gray-300 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                      Before
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    BEFORE
                  </div>
                </div>
                <div className="relative">
                  <div className="h-64 bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                      After
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Stained Wedding Dress Restoration
                </h3>
                <p className="text-gray-600">
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
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="h-64 bg-gray-300 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                      Before
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    BEFORE
                  </div>
                </div>
                <div className="relative">
                  <div className="h-64 bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                      After
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Vintage Groom's Suit Revival
                </h3>
                <p className="text-gray-600">
                  Professional cleaning and pressing transformed this vintage
                  suit to look brand new.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Transform Your Garments?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the same level of care and attention for your wedding
              garments.
            </p>
            <Link to="/quote">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Your Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
