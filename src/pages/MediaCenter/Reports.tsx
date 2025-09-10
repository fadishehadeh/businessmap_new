import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import PageHero from '@/components/ui/PageHero';
import { TrendingUp, FileText, ShoppingCart, Award, Download, Calendar, Eye } from 'lucide-react';

const Reports = () => {
  const [activeCategory, setActiveCategory] = useState('trading');

  const reportCategories = [
    {
      id: 'trading',
      title: 'Trading',
      icon: TrendingUp,
      description: 'Comprehensive trading statistics and market analysis reports',
      color: 'bg-blue-500'
    },
    {
      id: 'economic',
      title: 'Economic Reports',
      icon: FileText,
      description: 'Economic indicators, growth metrics, and sector analysis',
      color: 'bg-green-500'
    },
    {
      id: 'consumer',
      title: 'Consumer',
      icon: ShoppingCart,
      description: 'Consumer protection reports and market surveillance data',
      color: 'bg-orange-500'
    },
    {
      id: 'patent',
      title: 'Patent Newsletters',
      icon: Award,
      description: 'Intellectual property reports and patent registration updates',
      color: 'bg-purple-500'
    }
  ];

  const reportsData = {
    trading: [
      {
        title: "Qatar Trade Statistics Q4 2023",
        description: "Comprehensive analysis of Qatar's import and export activities for the fourth quarter of 2023",
        date: "2024-01-15",
        size: "2.5 MB",
        downloads: 1250,
        type: "PDF"
      },
      {
        title: "Bilateral Trade Report 2023",
        description: "Annual report on bilateral trade relationships and agreements with key trading partners",
        date: "2024-01-10",
        size: "3.2 MB",
        downloads: 890,
        type: "PDF"
      },
      {
        title: "Free Zone Performance Analysis",
        description: "Performance metrics and growth analysis of Qatar's free economic zones",
        date: "2024-01-05",
        size: "1.8 MB",
        downloads: 675,
        type: "PDF"
      }
    ],
    economic: [
      {
        title: "Qatar Economic Outlook 2024",
        description: "Comprehensive economic forecast and growth projections for various sectors",
        date: "2024-01-12",
        size: "4.1 MB",
        downloads: 2100,
        type: "PDF"
      },
      {
        title: "GDP Growth Analysis Q4 2023",
        description: "Detailed analysis of GDP growth drivers and economic performance indicators",
        date: "2024-01-08",
        size: "2.8 MB",
        downloads: 1560,
        type: "PDF"
      },
      {
        title: "Sector Performance Report 2023",
        description: "Annual performance review of key economic sectors including energy, finance, and manufacturing",
        date: "2024-01-03",
        size: "3.5 MB",
        downloads: 1340,
        type: "PDF"
      }
    ],
    consumer: [
      {
        title: "Consumer Protection Annual Report 2023",
        description: "Comprehensive review of consumer protection activities and market surveillance results",
        date: "2024-01-14",
        size: "2.2 MB",
        downloads: 780,
        type: "PDF"
      },
      {
        title: "Market Surveillance Report Q4 2023",
        description: "Quarterly report on market surveillance activities and consumer complaint resolutions",
        date: "2024-01-09",
        size: "1.9 MB",
        downloads: 650,
        type: "PDF"
      },
      {
        title: "Product Safety Assessment 2023",
        description: "Annual assessment of product safety standards and recall activities",
        date: "2024-01-06",
        size: "2.1 MB",
        downloads: 520,
        type: "PDF"
      }
    ],
    patent: [
      {
        title: "Patent Newsletter - January 2024",
        description: "Monthly newsletter featuring latest patent registrations and intellectual property updates",
        date: "2024-01-15",
        size: "1.2 MB",
        downloads: 420,
        type: "PDF"
      },
      {
        title: "Intellectual Property Annual Review 2023",
        description: "Comprehensive review of intellectual property registrations and protection activities",
        date: "2024-01-11",
        size: "2.7 MB",
        downloads: 680,
        type: "PDF"
      },
      {
        title: "Patent Newsletter - December 2023",
        description: "Monthly newsletter with year-end patent statistics and notable registrations",
        date: "2023-12-30",
        size: "1.1 MB",
        downloads: 380,
        type: "PDF"
      }
    ]
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const activeReports = reportsData[activeCategory as keyof typeof reportsData] || [];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image3.jpg"
        title="Reports & Statistics"
        subtitle="Access comprehensive reports, statistical data, and analytical insights from the Ministry of Commerce and Industry"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Report Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Report Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of reports and statistical data across different sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {reportCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    activeCategory === category.id
                      ? 'border-qatari bg-qatari/5 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-qatari/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-start mb-4">
                    <div className="w-12 h-12 bg-qatari rounded-lg flex items-center justify-center">
                      <IconComponent size={24} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {reportCategories.find(cat => cat.id === activeCategory)?.title} Reports
            </h2>
            <p className="text-gray-600">
              {reportCategories.find(cat => cat.id === activeCategory)?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activeReports.map((report, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-qatari/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {report.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {report.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(report.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText size={14} />
                      <span>{report.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{report.downloads.toLocaleString()} downloads</span>
                    </div>
                  </div>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {report.type}
                  </span>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-qatari text-white rounded-lg hover:bg-qatari-dark transition-colors">
                    <Download size={16} />
                    Download
                  </button>
                  <button className="px-4 py-2 border border-qatari text-qatari rounded-lg hover:bg-qatari/5 transition-colors">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 p-8 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need More Information?
            </h3>
            <p className="text-gray-600 mb-6">
              For additional reports, custom data requests, or specific statistical information, please contact our research and statistics department.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:statistics@moci.gov.qa"
                className="inline-flex items-center justify-center px-6 py-3 bg-qatari text-white rounded-lg hover:bg-qatari-dark transition-colors"
              >
                Contact Statistics Department
              </a>
              <a
                href="https://www.moci.gov.qa/en/media-center/statistics-and-reports/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-qatari text-qatari rounded-lg hover:bg-qatari/5 transition-colors"
              >
                Visit Official Reports Portal
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reports;
