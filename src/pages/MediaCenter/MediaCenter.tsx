import React from 'react';
import Layout from '@/components/Layout/Layout';
import PageHero from '@/components/ui/PageHero';
import { Link } from 'react-router-dom';
import { Newspaper, FileText, Camera } from 'lucide-react';

const MediaCenter = () => {
  const mediaCategories = [
    {
      title: "News",
      description: "Latest news and announcements from the Ministry of Commerce and Industry",
      href: "/media-centre/news",
      icon: Newspaper,
      color: "bg-qatari",
      count: "50+ Articles"
    },
    {
      title: "Reports",
      description: "Statistical reports, economic data, and comprehensive analysis",
      href: "/media-centre/reports",
      icon: FileText,
      color: "bg-qatari",
      count: "25+ Reports"
    },
    {
      title: "Gallery",
      description: "Photo gallery showcasing Qatar's economic development and achievements",
      href: "/media-centre/gallery",
      icon: Camera,
      color: "bg-qatari",
      count: "100+ Photos"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image2.jpg"
        title="Media Centre"
        subtitle="Stay informed with the latest news, reports, and visual content from the Ministry of Commerce and Industry"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Media Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Media Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive media resources including breaking news, detailed reports, and visual documentation of Qatar's economic progress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaCategories.map((category, index) => {
              const IconComponent = category.icon;
              
              return (
                <Link
                  key={index}
                  to={category.href}
                  className="group bg-white rounded-xl shadow-lg border-2 border-qatari/20 hover:border-qatari transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-white p-10 text-gray-900 relative border-b-2 border-qatari">
                    <div className="absolute top-6 right-6 opacity-10">
                      <IconComponent size={100} className="text-qatari" />
                    </div>
                    <div className="relative z-10 text-left">
                      <IconComponent size={48} className="mb-4 text-qatari" />
                      <h3 className="text-xl font-semibold mb-3 text-qatari">{category.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{category.description}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 text-left">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-medium text-qatari bg-qatari/10 px-3 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <div className="inline-flex items-center justify-center w-full px-6 py-3 bg-qatari text-white font-semibold rounded-lg hover:bg-qatari-dark transition-all duration-200 group-hover:shadow-lg transform group-hover:-translate-y-1">
                      <span>Explore {category.title}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <p className="text-xl text-gray-600">
              Direct links to frequently accessed media resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/media-centre/news"
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-qatari hover:bg-qatari/5 transition-all duration-200"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Latest News</h4>
              <p className="text-sm text-gray-600">Recent announcements and updates</p>
            </Link>

            <Link
              to="/media-centre/reports"
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-qatari hover:bg-qatari/5 transition-all duration-200"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Economic Reports</h4>
              <p className="text-sm text-gray-600">Statistical data and analysis</p>
            </Link>

            <Link
              to="/media-centre/gallery"
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-qatari hover:bg-qatari/5 transition-all duration-200"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Photo Gallery</h4>
              <p className="text-sm text-gray-600">Visual documentation</p>
            </Link>

            <a
              href="https://www.moci.gov.qa/en/media-center/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-qatari hover:bg-qatari/5 transition-all duration-200"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Official Portal</h4>
              <p className="text-sm text-gray-600">Visit the main media center</p>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MediaCenter;
