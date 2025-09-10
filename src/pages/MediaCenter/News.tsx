import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import PageHero from '@/components/ui/PageHero';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsArticles = [
    {
      id: 295,
      title: "Ministry of Commerce and Industry Launches New Digital Platform for Business Registration",
      excerpt: "The Ministry announces the launch of a comprehensive digital platform aimed at streamlining business registration processes and enhancing investor experience in Qatar.",
      date: "2024-01-15",
      category: "Business",
      readTime: "3 min read",
      image: "/images/image1.jpg",
      featured: true
    },
    {
      id: 294,
      title: "Qatar's Economic Growth Reaches New Heights in Q4 2023",
      excerpt: "Latest economic indicators show robust growth across multiple sectors, reinforcing Qatar's position as a leading business destination in the region.",
      date: "2024-01-12",
      category: "Economy",
      readTime: "5 min read",
      image: "/images/image2.jpg",
      featured: false
    },
    {
      id: 293,
      title: "New Trade Agreements Signed to Boost International Commerce",
      excerpt: "The Ministry signs strategic trade agreements with multiple countries to enhance bilateral trade relationships and expand market opportunities.",
      date: "2024-01-10",
      category: "Trade",
      readTime: "4 min read",
      image: "/images/image3.jpg",
      featured: false
    },
    {
      id: 292,
      title: "Consumer Protection Initiatives Strengthen Market Confidence",
      excerpt: "Enhanced consumer protection measures implemented to ensure fair trading practices and maintain high standards in the marketplace.",
      date: "2024-01-08",
      category: "Consumer",
      readTime: "3 min read",
      image: "/images/image4.jpg",
      featured: false
    },
    {
      id: 291,
      title: "Innovation Hub Launched to Support Startups and SMEs",
      excerpt: "New innovation hub provides comprehensive support services for startups and small-to-medium enterprises looking to establish operations in Qatar.",
      date: "2024-01-05",
      category: "Innovation",
      readTime: "4 min read",
      image: "/images/image5.jpg",
      featured: false
    },
    {
      id: 290,
      title: "Sustainability Initiatives Drive Green Business Practices",
      excerpt: "The Ministry introduces new sustainability guidelines and incentives to promote environmentally responsible business practices across all sectors.",
      date: "2024-01-03",
      category: "Sustainability",
      readTime: "5 min read",
      image: "/images/image6.png",
      featured: false
    }
  ];

  const categories = ['all', 'Business', 'Economy', 'Trade', 'Consumer', 'Innovation', 'Sustainability'];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

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
        backgroundImage="/images/image2.jpg"
        title="News"
        subtitle="Stay updated with the latest news and announcements from the Ministry of Commerce and Industry"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-qatari focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-qatari text-white'
                      : 'bg-white text-gray-600 hover:bg-qatari/10 hover:text-qatari'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && !searchTerm && (
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured News</h2>
            <Link
              to={`/media-centre/news/${featuredArticle.id}`}
              className="group block bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-qatari text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredArticle.category}
                    </span>
                    <span className="bg-qatari/10 text-qatari px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-qatari transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{formatDate(featuredArticle.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="text-qatari group-hover:translate-x-2 transition-transform" size={20} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchTerm || selectedCategory !== 'all' ? 'Search Results' : 'Latest News'}
            </h2>
            <span className="text-gray-600">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Link
                key={article.id}
                to={`/media-centre/news/${article.id}`}
                className="group bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-qatari/10 text-qatari px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-qatari transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 text-qatari hover:text-qatari-dark font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default News;
