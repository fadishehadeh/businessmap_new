import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import PageHero from '@/components/ui/PageHero';
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events & Conferences' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'business', name: 'Business & Trade' },
    { id: 'culture', name: 'Culture & Heritage' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/images/image1.jpg',
      title: 'Qatar Financial Centre',
      description: 'Modern financial district showcasing Qatar\'s economic growth',
      category: 'infrastructure',
      date: '2024-01-15'
    },
    {
      id: 2,
      src: '/images/image2.jpg',
      title: 'International Trade Conference',
      description: 'Annual trade conference bringing together global business leaders',
      category: 'events',
      date: '2024-01-12'
    },
    {
      id: 3,
      src: '/images/image3.jpg',
      title: 'Doha Port Facilities',
      description: 'State-of-the-art port infrastructure supporting international trade',
      category: 'infrastructure',
      date: '2024-01-10'
    },
    {
      id: 4,
      src: '/images/image4.jpg',
      title: 'Business Innovation Hub',
      description: 'Modern workspace supporting startups and SMEs',
      category: 'business',
      date: '2024-01-08'
    },
    {
      id: 5,
      src: '/images/image5.png',
      title: 'Traditional Souq Market',
      description: 'Historic marketplace blending tradition with modern commerce',
      category: 'culture',
      date: '2024-01-05'
    },
    {
      id: 6,
      src: '/images/image6.png',
      title: 'Ministry Headquarters',
      description: 'Ministry of Commerce and Industry main building',
      category: 'infrastructure',
      date: '2024-01-03'
    },
    {
      id: 7,
      src: '/images/hero.jpg',
      title: 'Qatar Economic Forum',
      description: 'Annual economic forum discussing future growth strategies',
      category: 'events',
      date: '2023-12-28'
    },
    {
      id: 8,
      src: '/images/image1.jpg',
      title: 'Digital Innovation Center',
      description: 'Technology hub promoting digital transformation',
      category: 'business',
      date: '2023-12-25'
    },
    {
      id: 9,
      src: '/images/image2.jpg',
      title: 'Sustainable Development Projects',
      description: 'Green initiatives supporting Qatar\'s sustainability goals',
      category: 'infrastructure',
      date: '2023-12-22'
    },
    {
      id: 10,
      src: '/images/image3.jpg',
      title: 'Cultural Heritage Exhibition',
      description: 'Showcasing Qatar\'s rich cultural heritage and traditions',
      category: 'culture',
      date: '2023-12-20'
    },
    {
      id: 11,
      src: '/images/image4.jpg',
      title: 'International Business Summit',
      description: 'Global business leaders discussing investment opportunities',
      category: 'events',
      date: '2023-12-18'
    },
    {
      id: 12,
      src: '/images/image7.png',
      title: 'Modern Manufacturing Facility',
      description: 'Advanced manufacturing supporting economic diversification',
      category: 'business',
      date: '2023-12-15'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage 
    ? filteredImages.find(img => img.id === selectedImage)
    : null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/hero.jpg"
        title="Photo Gallery"
        subtitle="Explore Qatar's economic development, cultural heritage, and business achievements through our comprehensive photo collection"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-qatari text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-qatari/10 hover:text-qatari border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {filteredImages.length} photo{filteredImages.length !== 1 ? 's' : ''} available
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => openLightbox(image.id)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                    {image.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDate(image.date)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <img
              src={selectedImageData.src}
              alt={selectedImageData.title}
              className="max-w-full max-h-[70vh] object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{selectedImageData.title}</h3>
                  <p className="text-gray-300 mb-2">{selectedImageData.description}</p>
                  <p className="text-sm text-gray-400">{formatDate(selectedImageData.date)}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                    <Download size={20} />
                  </button>
                  <button className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
